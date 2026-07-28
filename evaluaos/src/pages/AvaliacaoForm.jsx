import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { calcularResultadosAntropometricos } from '../utils/calculosAntropometricos'

// --- HELPER: Gera o estado inicial das medidas ---
const initMeasures = (keys) =>
  keys.reduce((acc, key) => ({ ...acc, [key]: { m1: '', m2: '', m3: '' } }), {})

// --- LISTAS DE CHAVES EXATAS DO SUPABASE ---
const basicaKeys = [
  'peso_paciente',
  'altura_paciente',
  'altura_sentado_paciente',
  'envergadura_paciente'
]
const dobraKeys = [
  'dobra_cutanea_triceps',
  'dobra_cutanea_subescapular',
  'dobra_cutanea_biceps',
  'dobra_cutanea_crista_iliaca',
  'dobra_cutanea_supraespinhal',
  'dobra_cutanea_abdominal',
  'dobra_cutanea_coxa_media',
  'dobra_cutanea_panturrilha'
]
const perimetroKeys = [
  'perimetro_braco_relaxado',
  'perimetro_braco_contraido',
  'perimetro_antibraco',
  'perimetro_cintura',
  'perimetro_abdominal',
  'perimetro_quadril',
  'perimetro_coxa_maxima',
  'perimetro_coxa_media',
  'perimetro_panturrilha'
]
const diametroKeys = [
  'diametro_umero',
  'diametro_femur',
  'diametro_punho',
  'diametro_maleolar'
]

// --- DICIONÁRIO DE RÓTULOS ---
const labels = {
  peso_paciente: 'Peso (kg)',
  altura_paciente: 'Estatura / Altura (cm)',
  altura_sentado_paciente: 'Altura Sentado (cm)',
  envergadura_paciente: 'Envergadura (cm)',
  dobra_cutanea_triceps: 'Tríceps',
  dobra_cutanea_subescapular: 'Subescapular',
  dobra_cutanea_biceps: 'Bíceps',
  dobra_cutanea_crista_iliaca: 'Crista Ilíaca',
  dobra_cutanea_supraespinhal: 'Supraespinhal',
  dobra_cutanea_abdominal: 'Abdominal',
  dobra_cutanea_coxa_media: 'Coxa Média',
  dobra_cutanea_panturrilha: 'Panturrilha',
  perimetro_braco_relaxado: 'Braço Relaxado',
  perimetro_braco_contraido: 'Braço Contraído',
  perimetro_antibraco: 'Antebraço',
  perimetro_cintura: 'Cintura',
  perimetro_abdominal: 'Abdominal',
  perimetro_quadril: 'Quadril',
  perimetro_coxa_maxima: 'Coxa Máxima',
  perimetro_coxa_media: 'Coxa Média',
  perimetro_panturrilha: 'Panturrilha',
  diametro_umero: 'Biepicondilar do Úmero',
  diametro_femur: 'Bicondilar do Fêmur',
  diametro_punho: 'Biestilóide (Punho)',
  diametro_maleolar: 'Bimaleolar (Tornozelo)'
}

// --- COMPONENTE DE LINHA DE MEDIDA (MOVIDO PARA FORA PARA NÃO PERDER O FOCO) ---
const MeasureRow = ({ label, field, categoryType, state, setter, isSingleMode, handleMeasureChange }) => {
  const { m1, m2, m3 } = state[field]
  const v1 = parseFloat(m1)
  const v2 = parseFloat(m2)

  let needsThird = false
  let diffPercent = 0
  let finalValue = '-'

  if (!isSingleMode && !isNaN(v1) && !isNaN(v2) && v1 > 0 && v2 > 0) {
    diffPercent = (Math.abs(v1 - v2) / ((v1 + v2) / 2)) * 100
    const threshold = categoryType === 'dobras' ? 5 : 1
    needsThird = diffPercent > threshold
  }

  if (isSingleMode) {
    if (!isNaN(v1)) finalValue = v1.toFixed(1)
  } else {
    if (!needsThird && !isNaN(v1) && !isNaN(v2)) {
      finalValue = ((v1 + v2) / 2).toFixed(1) // Média
    } else if (needsThird && !isNaN(parseFloat(m3))) {
      const sorted = [v1, v2, parseFloat(m3)].sort((a, b) => a - b)
      finalValue = sorted[1].toFixed(1) // Mediana
    }
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:items-center border-b border-gray-50 py-2 hover:bg-gray-50 px-2 rounded transition-colors">
      <div className="col-span-4 text-xs font-medium text-gray-700">{label}</div>
      
      {/* Container das Medidas */}
      <div className="col-span-6 grid grid-cols-3 gap-2">
        <input
          type="number"
          step="0.1"
          value={m1}
          onChange={(e) => handleMeasureChange(setter, field, 'm1', e.target.value)}
          className="w-full px-2 py-1.5 border rounded-md text-sm text-center focus:border-emerald-500 bg-white"
          placeholder={isSingleMode ? "Valor" : "1ª"}
        />
        {!isSingleMode && (
          <>
            <input
              type="number"
              step="0.1"
              value={m2}
              onChange={(e) => handleMeasureChange(setter, field, 'm2', e.target.value)}
              className="w-full px-2 py-1.5 border rounded-md text-sm text-center focus:border-emerald-500 bg-white"
              placeholder="2ª"
            />
            <input
              type="number"
              step="0.1"
              value={m3}
              disabled={!needsThird}
              onChange={(e) => handleMeasureChange(setter, field, 'm3', e.target.value)}
              className={`w-full px-2 py-1.5 border rounded-md text-sm text-center transition-colors
                ${needsThird ? 'ring-2 ring-red-400 bg-red-50 focus:ring-red-500' : 'opacity-40 bg-gray-100 cursor-not-allowed'}
              `}
              placeholder="3ª"
              title={needsThird ? `Diferença de ${diffPercent.toFixed(1)}%. A 3ª medida é obrigatória.` : "Habilitado apenas se erro > limite"}
            />
          </>
        )}
      </div>

      {/* Valor Final Calculado */}
      <div className="col-span-2 text-right md:text-center mt-1 md:mt-0">
        <span className="text-xs text-gray-500 md:hidden mr-2">Resultado:</span>
        <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
          {finalValue}
        </span>
      </div>
    </div>
  )
}

export default function AvaliacaoForm({ paciente, onVoltar, onSucesso }) {
  const [loading, setLoading] = useState(false)
  
  // Configuração Global da Coleta
  const [isSingleMode, setIsSingleMode] = useState(false)

  // Dados Gerais da Avaliação
  const [dataAvaliacao, setDataAvaliacao] = useState(new Date().toISOString().split('T')[0])
  const [horaAvaliacao, setHoraAvaliacao] = useState(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }))
  const [equacao, setEquacao] = useState('Petroski')
  const [fatorAtividade, setFatorAtividade] = useState(1.2)
  const [percentualGorduraAlvo, setPercentualGorduraAlvo] = useState(12)

  // Estados dos Grupos de Medidas (cada um armazena m1, m2 e m3)
  const [basicas, setBasicas] = useState(initMeasures(basicaKeys))
  const [dobras, setDobras] = useState(initMeasures(dobraKeys))
  const [perimetros, setPerimetros] = useState(initMeasures(perimetroKeys))
  const [diametros, setDiametros] = useState(initMeasures(diametroKeys))

  // Manipulador Genérico de Mudança de Medida
  const handleMeasureChange = (setter, field, index, value) => {
    setter((prev) => ({
      ...prev,
      [field]: { ...prev[field], [index]: value }
    }))
  }

  // --- LOGICA DE CÁLCULO E VALIDAÇÃO ---
  const resolveMeasure = (obj, type, label, errorsArray) => {
    const v1 = parseFloat(obj.m1)
    const v2 = parseFloat(obj.m2)
    const v3 = parseFloat(obj.m3)

    if (isSingleMode) return isNaN(v1) ? null : v1

    if (!isNaN(v1) && !isNaN(v2)) {
      const diffPercent = (Math.abs(v1 - v2) / ((v1 + v2) / 2)) * 100
      const threshold = type === 'dobras' ? 5 : 1

      if (diffPercent > threshold) {
        if (isNaN(v3)) {
          errorsArray.push(`3ª medida obrigatória para: ${label} (Diferença de ${diffPercent.toFixed(1)}% detectada)`)
          return null
        }
        const sorted = [v1, v2, v3].sort((a, b) => a - b)
        return sorted[1] // Mediana
      }
      return (v1 + v2) / 2 // Média
    }
    
    // Se não preencheu m1 e m2 e não for modo único
    if (isNaN(v1) && isNaN(v2)) return null;
    errorsArray.push(`Preencha a 2ª medida para: ${label}`)
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    let validationErrors = []

    // 1. Extrai e valida todos os valores para o Payload
    const resolvedBasicas = basicaKeys.reduce((acc, key) => {
      acc[key] = resolveMeasure(basicas[key], 'basicas', labels[key], validationErrors)
      return acc
    }, {})

    const resolvedDobras = dobraKeys.reduce((acc, key) => {
      acc[key] = resolveMeasure(dobras[key], 'dobras', labels[key], validationErrors)
      return acc
    }, {})

    const resolvedPerimetros = perimetroKeys.reduce((acc, key) => {
      acc[key] = resolveMeasure(perimetros[key], 'perimetros', labels[key], validationErrors)
      return acc
    }, {})

    const resolvedDiametros = diametroKeys.reduce((acc, key) => {
      acc[key] = resolveMeasure(diametros[key], 'diametros', labels[key], validationErrors)
      return acc
    }, {})

    // Interrompe o envio se houver medidas obrigatórias faltando
    if (validationErrors.length > 0) {
      alert("⚠️ Erros de Validação:\n\n" + validationErrors.join('\n'))
      setLoading(false)
      return
    }

    // 2. Monta o payload unificado
    const payload = {
      id_paciente: paciente.id,
      data_avaliacao: dataAvaliacao,
      hora_avaliacao: horaAvaliacao,
      equacao_de_regressao_escolhida: equacao,
      fator_atividade_fisica: parseFloat(fatorAtividade) || 1.2,
      percentual_de_gordura_alvo: parseFloat(percentualGorduraAlvo) || null,
      ...resolvedBasicas,
      ...resolvedDobras,
      ...resolvedPerimetros,
      ...resolvedDiametros
    }

    // 3. Salva a Avaliação
    const { data: avaliacaoSalva, error } = await supabase
      .from('avaliacoes')
      .insert([payload])
      .select()
      .single()

    if (error) {
      alert('Erro ao salvar avaliação: ' + error.message)
    } else {
      // 4. Executa cálculos antropométricos e salva resultados
      const resultadosCalculados = calcularResultadosAntropometricos(
        payload,
        paciente.sexo,
        25 // Idealmente seria a idade real do paciente, caso você tenha no banco
      )

      const payloadCalculado = {
        id_paciente: paciente.id,
        id_avaliacao: avaliacaoSalva.id,
        ...resultadosCalculados
      }

      const { error: calcError } = await supabase
        .from('dados_calculados')
        .insert([payloadCalculado])

      if (calcError) console.error('Erro ao salvar dados calculados:', calcError)

      alert('Avaliação e cálculos salvos com sucesso!')
      if (onSucesso) onSucesso(avaliacaoSalva)
    }

    setLoading(false)
  }

  // Helper para renderizar Tabela de Bloco (Pode continuar aqui dentro pois não cria componente, só retorna JSX)
  const renderMeasureBlock = (title, keys, type, state, setter) => (
    <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm space-y-2 overflow-x-auto">
      <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2">
        {title}
      </h3>
      <div className="min-w-[600px] md:min-w-full">
        {/* Cabeçalho da Tabela */}
        <div className="grid grid-cols-12 gap-2 items-center pb-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b px-2">
          <div className="col-span-4">Local da Medida</div>
          <div className="col-span-6 grid grid-cols-3 gap-2 text-center">
            <div>{isSingleMode ? 'Medida Única' : '1ª Medida'}</div>
            {!isSingleMode && <div>2ª Medida</div>}
            {!isSingleMode && <div className="text-red-400">3ª (Tira-teima)</div>}
          </div>
          <div className="col-span-2 text-center text-emerald-600">Calculado</div>
        </div>
        
        {/* Linhas */}
        {keys.map((key) => (
          <MeasureRow
            key={key}
            label={labels[key]}
            field={key}
            categoryType={type}
            state={state}
            setter={setter}
            isSingleMode={isSingleMode}
            handleMeasureChange={handleMeasureChange}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Topo com botão voltar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm gap-4">
        <div>
          <button onClick={onVoltar} className="text-xs text-emerald-600 font-semibold hover:underline mb-1 inline-block">
            ← Voltar para lista de pacientes
          </button>
          <h2 className="text-xl font-bold text-gray-800">Nova Avaliação: {paciente.nome_completo}</h2>
        </div>
        <span className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full">
          Sexo: {paciente.sexo === 'M' ? 'Masculino' : 'Feminino'}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Bloco: Configurações da Avaliação */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              1. Dados Gerais & Protocolo
            </h3>
            <label className="flex items-center space-x-2 text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={isSingleMode}
                onChange={(e) => setIsSingleMode(e.target.checked)}
                className="rounded text-red-600 focus:ring-red-500"
              />
              <span>Habilitar 1 Medida (Não recomendado)</span>
            </label>
          </div>
          
          {isSingleMode && (
            <p className="text-xs text-red-700 bg-red-100 p-2 rounded">
              ⚠️ Aviso: A coleta de medida única não atende às diretrizes internacionais de antropometria (ISAK). A precisão dos resultados e cálculos será reduzida.
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700">Data</label>
              <input type="date" required value={dataAvaliacao} onChange={(e) => setDataAvaliacao(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700">Hora</label>
              <input type="time" required value={horaAvaliacao} onChange={(e) => setHoraAvaliacao(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-700">Protocolo / Equação</label>
              <select value={equacao} onChange={(e) => setEquacao(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm">
                <option value="Petroski">Petroski (4 dobras)</option>
                <option value="Jackson & Pollock 3">Jackson & Pollock (3 dobras)</option>
                <option value="Jackson & Pollock 7">Jackson & Pollock (7 dobras)</option>
                <option value="Guedes">Guedes (3 dobras)</option>
                <option value="Faulkner">Faulkner (4 dobras)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700">% Gordura Alvo</label>
              <input type="number" step="0.1" value={percentualGorduraAlvo} onChange={(e) => setPercentualGorduraAlvo(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md text-sm" placeholder="Ex: 12" />
            </div>
          </div>
        </div>

        {/* Blocos de Medição com validação ISAK */}
        {renderMeasureBlock('2. Medidas Básicas', basicaKeys, 'basicas', basicas, setBasicas)}
        {renderMeasureBlock('3. Dobras Cutâneas (mm) - Tolerância 5%', dobraKeys, 'dobras', dobras, setDobras)}
        {renderMeasureBlock('4. Perímetros / Circunferências (cm) - Tolerância 1%', perimetroKeys, 'perimetros', perimetros, setPerimetros)}
        {renderMeasureBlock('5. Diâmetros Ósseos (cm) - Tolerância 1%', diametroKeys, 'diametros', diametros, setDiametros)}

        {/* Botão Salvar */}
        <div className="flex justify-end gap-3 pt-4 sticky bottom-4 bg-white/80 p-4 border-t backdrop-blur-md rounded-xl">
          <button type="button" onClick={onVoltar} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50">
            Cancelar
          </button>
          <button type="submit" disabled={loading} className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow disabled:opacity-50">
            {loading ? 'Processando Cálculos...' : 'Salvar Avaliação'}
          </button>
        </div>
      </form>
    </div>
  )
}