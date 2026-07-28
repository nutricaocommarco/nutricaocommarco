import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { calcularResultadosAntropometricos } from '../utils/calculosAntropometricos'

export default function AvaliacaoForm({ paciente, onVoltar, onSucesso }) {
  const [loading, setLoading] = useState(false)

  // Dados da Avaliação
  const [dataAvaliacao, setDataAvaliacao] = useState(new Date().toISOString().split('T')[0])
  const [equacao, setEquacao] = useState('Petroski')
  const [fatorAtividade, setFatorAtividade] = useState(1.2)
  const [percentualGorduraAlvo, setPercentualGorduraAlvo] = useState(12)

  // Medidas Basais
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [alturaSentado, setAlturaSentado] = useState('')
  const [envergadura, setEnvergadura] = useState('')

  // Dobras Cutâneas (mm)
  const [dobras, setDobras] = useState({
    triceps: '',
    subescapular: '',
    biceps: '',
    crista_iliaca: '',
    supraespinal: '',
    abdominal: '',
    coxa: '',
    panturrilha_medial: ''
  })

  // Perímetros / Circunferências (cm)
  const [perimetros, setPerimetros] = useState({
    braco_relaxado: '',
    braco_contraido: '',
    antibraco: '',
    torax: '',
    cintura: '',
    abdomen: '',
    quadril: '',
    coxa_proximal: '',
    coxa_medial: '',
    panturrilha: ''
  })

  // Diâmetros Ósseos (cm)
  const [diametros, setDiametros] = useState({
    biacromial: '',
    biiliocristal: '',
    biepicondilar_umero: '',
    bicondilar_femur: '',
    biestiloide: '',
    bimaleolar: ''
  })

  const handleDobramChange = (campo, valor) => {
    setDobras((prev) => ({ ...prev, [campo]: valor }))
  }

  const handlePerimetroChange = (campo, valor) => {
    setPerimetros((prev) => ({ ...prev, [campo]: valor }))
  }

  const handleDiametroChange = (campo, valor) => {
    setDiametros((prev) => ({ ...prev, [campo]: valor }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // 1. Monta o payload com todas as medidas coletadas
    const payload = {
      id_paciente: paciente.id,
      data_avaliacao: dataAvaliacao,
      equacao_de_regressao_escolhida: equacao,
      fator_atividade_fisica: parseFloat(fatorAtividade) || 1.2,
      percentual_de_gordura_alvo: parseFloat(percentualGorduraAlvo) || null,
      peso_paciente: parseFloat(peso) || null,
      altura_paciente: parseFloat(altura) || null,
      altura_sentado_paciente: parseFloat(alturaSentado) || null,
      envergadura_paciente: parseFloat(envergadura) || null,

      // Dobras
      dobra_triceps: parseFloat(dobras.triceps) || null,
      dobra_subescapular: parseFloat(dobras.subescapular) || null,
      dobra_biceps: parseFloat(dobras.biceps) || null,
      dobra_crista_iliaca: parseFloat(dobras.crista_iliaca) || null,
      dobra_supraespinal: parseFloat(dobras.supraespinal) || null,
      dobra_abdominal: parseFloat(dobras.abdominal) || null,
      dobra_coxa: parseFloat(dobras.coxa) || null,
      dobra_panturrilha_medial: parseFloat(dobras.panturrilha_medial) || null,

      // Perímetros
      perimetro_braco_relaxado: parseFloat(perimetros.braco_relaxado) || null,
      perimetro_braco_contraido: parseFloat(perimetros.braco_contraido) || null,
      perimetro_antibraco: parseFloat(perimetros.antibraco) || null,
      perimetro_torax: parseFloat(perimetros.torax) || null,
      perimetro_cintura: parseFloat(perimetros.cintura) || null,
      perimetro_abdomen: parseFloat(perimetros.abdomen) || null,
      perimetro_quadril: parseFloat(perimetros.quadril) || null,
      perimetro_coxa_proximal: parseFloat(perimetros.coxa_proximal) || null,
      perimetro_coxa_medial: parseFloat(perimetros.coxa_medial) || null,
      perimetro_panturrilha: parseFloat(perimetros.panturrilha) || null,

      // Diâmetros
      diametro_biacromial: parseFloat(diametros.biacromial) || null,
      diametro_biiliocristal: parseFloat(diametros.biiliocristal) || null,
      diametro_biepicondilar_umero: parseFloat(diametros.biepicondilar_umero) || null,
      diametro_bicondilar_femur: parseFloat(diametros.bicondilar_femur) || null,
      diametro_biestiloide: parseFloat(diametros.biestiloide) || null,
      diametro_bimaleolar: parseFloat(diametros.bimaleolar) || null
    }

    // 2. Grava a avaliação bruta em public.avaliacoes
    const { data: avaliacaoSalva, error } = await supabase
      .from('avaliacoes')
      .insert([payload])
      .select()
      .single()

    if (error) {
      alert('Erro ao salvar avaliação: ' + error.message)
    } else {
      // 3. Executa os cálculos antropométricos e grava em public.dados_calculados
      const resultadosCalculados = calcularResultadosAntropometricos(
        payload,
        paciente.sexo,
        25
      )

      const payloadCalculado = {
        id_paciente: paciente.id,
        id_avaliacao: avaliacaoSalva.id,
        ...resultadosCalculados
      }

      const { error: calcError } = await supabase
        .from('dados_calculados')
        .insert([payloadCalculado])

      if (calcError) {
        console.error('Erro ao salvar dados calculados:', calcError)
      }

      alert('Avaliação e cálculos salvos com sucesso!')
      if (onSucesso) onSucesso(avaliacaoSalva)
    }

    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Topo com botão voltar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <button
            onClick={onVoltar}
            className="text-xs text-emerald-600 font-semibold hover:underline mb-1 inline-block"
          >
            ← Voltar para lista de pacientes
          </button>
          <h2 className="text-xl font-bold text-gray-800">Nova Avaliação: {paciente.nome_completo}</h2>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">
          Sexo: {paciente.sexo === 'M' ? 'Masculino' : 'Feminino'}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Bloco 1: Protocolo e Dados Básicos */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
            1. Dados Gerais & Protocolo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700">Data da Avaliação</label>
              <input
                type="date"
                required
                value={dataAvaliacao}
                onChange={(e) => setDataAvaliacao(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700">Protocolo / Equação</label>
              <select
                value={equacao}
                onChange={(e) => setEquacao(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              >
                <option value="Petroski">Petroski (4 dobras)</option>
                <option value="Jackson & Pollock 3">Jackson & Pollock (3 dobras)</option>
                <option value="Jackson & Pollock 7">Jackson & Pollock (7 dobras)</option>
                <option value="Guedes">Guedes (3 dobras)</option>
                <option value="Faulkner">Faulkner (4 dobras)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700">Peso (kg)</label>
              <input
                type="number"
                step="0.1"
                required
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
                placeholder="Ex: 75.5"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700">Estatura / Altura (cm)</label>
              <input
                type="number"
                step="0.1"
                required
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
                placeholder="Ex: 178"
              />
            </div>
          </div>
        </div>

        {/* Bloco 2: Dobras Cutâneas (mm) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
            2. Dobras Cutâneas (mm)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(dobras).map((campo) => (
              <div key={campo}>
                <label className="block text-xs capitalize text-gray-700">
                  {campo.replace('_', ' ')}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={dobras[campo]}
                  onChange={(e) => handleDobramChange(campo, e.target.value)}
                  className="mt-1 w-full px-3 py-1.5 border rounded-md text-sm focus:border-emerald-500"
                  placeholder="0.0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 3: Perímetros (cm) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
            3. Perímetros / Circunferências (cm)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(perimetros).map((campo) => (
              <div key={campo}>
                <label className="block text-xs capitalize text-gray-700">
                  {campo.replace('_', ' ')}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={perimetros[campo]}
                  onChange={(e) => handlePerimetroChange(campo, e.target.value)}
                  className="mt-1 w-full px-3 py-1.5 border rounded-md text-sm focus:border-emerald-500"
                  placeholder="0.0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 4: Diâmetros Ósseos (cm) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
            4. Diâmetros Ósseos (cm)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(diametros).map((campo) => (
              <div key={campo}>
                <label className="block text-xs capitalize text-gray-700">
                  {campo.replace('_', ' ')}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={diametros[campo]}
                  onChange={(e) => handleDiametroChange(campo, e.target.value)}
                  className="mt-1 w-full px-3 py-1.5 border rounded-md text-sm focus:border-emerald-500"
                  placeholder="0.0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onVoltar}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow disabled:opacity-50"
          >
            {loading ? 'Salvando Avaliação...' : 'Salvar Avaliação'}
          </button>
        </div>
      </form>
    </div>
  )
}