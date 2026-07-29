import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../supabaseClient'
import * as Eq from '../utils/equacoes'

// Mapeamento de todas as equações importadas do seu arquivo utils/equacoes.js
const listaFeminina = [
  { nome: 'Durnin et al. (1974) - 4skf', func: Eq.calcularFemDurnin1974 },
  { nome: 'Jackson et al. (1980) - 3skf', func: Eq.calcularFemJacksonPollock1980_3skf },
  { nome: 'Petroski (1995) - 4skf', func: Eq.calcularFemPetroski1995_4skf },
  { nome: 'Guedes (1985) - 3skf', func: Eq.calcularFemGuedes1985_3skf },
  { nome: 'Withers et al. (1987) - 4skf', func: Eq.calcularFemWithers1987_4skf },
  { nome: 'Withers et al. (1987) - 6skf', func: Eq.calcularFemWithers1987_6skf },
  { nome: 'Slaughter et al. (1988) - 2skf', func: Eq.calcularFemSlaughter1988_2skf },
  { nome: 'Yuhasz (1974) - 6skf', func: Eq.calcularFemYuhasz1974_6skf },
  { nome: 'Tran & Weltman (1989) - Perímetros', func: Eq.calcularFemTranWeltman1989_Perimetros },
  // Adicione as outras conforme a necessidade
]

const listaMasculina = [
  { nome: 'Guedes (1985) - 3skd', func: Eq.calcularMascGuedes1985_3skd },
  { nome: 'Petroski (1995) - 4skd', func: Eq.calcularMascPetroski1995_4skd },
  { nome: 'Jackson & Pollock (1978) - 3skf', func: Eq.calcularMascJacksonPollock1978Masc || null }, // Exemplo
  { nome: 'Faulkner (1968) - 4skd', func: Eq.calcularMascFaulkner1968_4skd },
  { nome: 'Yuhasz (1974) - 6skd', func: Eq.calcularMascYuhasz1974_6skd },
  { nome: 'Slaughter et al. (1988) - 2skd', func: Eq.calcularMascSlaughter1988_2skd },
  { nome: 'Mitchell et al. (2020) - 7skd', func: Eq.calcularMascMitchell2020_7skd },
  { nome: 'Woolcott & Bergman (2018)', func: Eq.calcularMascWoolcottBergman2018 },
  // Adicione as outras conforme a necessidade
]

export default function EquacoesTeste({ pacienteInicial = null, avaliacaoInicial = null }) {
  const [busca, setBusca] = useState('')
  const [pacientesFiltrados, setPacientesFiltrados] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  
  const [pacienteSelecionado, setPacienteSelecionado] = useState(pacienteInicial)
  const [avaliacaoAtual, setAvaliacaoAtual] = useState(avaliacaoInicial)
  const [medidasBrutas, setMedidasBrutas] = useState({})
  
  const [equacaoSelecionada, setEquacaoSelecionada] = useState('')
  const [resultadoGordura, setResultadoGordura] = useState(0)
  const [salvando, setSalvando] = useState(false)

  const dropdownRef = useRef(null)

  // 1. Inicia com o paciente recebido via Props (Preparo para o futuro)
  useEffect(() => {
    if (pacienteInicial) {
      selecionarPaciente(pacienteInicial)
    }
  }, [pacienteInicial])

  // 2. Sistema de Busca Inteligente (Dropdown)
  useEffect(() => {
    const buscarPacientes = async () => {
      if (busca.length < 1) {
        setPacientesFiltrados([])
        return
      }
      const { data, error } = await supabase
        .from('pacientes')
        .select('id, nome_completo, sexo')
        .ilike('nome_completo', `%${busca}%`)
        .limit(5)

      if (!error && data) setPacientesFiltrados(data)
    }
    
    const delayDebounce = setTimeout(() => buscarPacientes(), 300)
    return () => clearTimeout(delayDebounce)
  }, [busca])

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickFora = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickFora)
    return () => document.removeEventListener('mousedown', handleClickFora)
  }, [])

  // 3. Ao selecionar um paciente, busca a última avaliação dele para ter os dados
  const selecionarPaciente = async (paciente) => {
    setPacienteSelecionado(paciente)
    setBusca(paciente.nome_completo)
    setShowDropdown(false)
    setEquacaoSelecionada('')
    setResultadoGordura(0)

    // Busca a avaliação mais recente para puxar as medidas
    const { data, error } = await supabase
      .from('avaliacoes')
      .select('*')
      .eq('id_paciente', paciente.id)
      .order('data_avaliacao', { ascending: false })
      .limit(1)
      .single()

    if (data) {
      setAvaliacaoAtual(data)
      setMedidasBrutas(data) // Supondo que as dobras e perímetros estejam salvos nas colunas desta tabela
    } else {
      setAvaliacaoAtual(null)
      setMedidasBrutas({})
      alert('Este paciente ainda não possui avaliações (medidas) cadastradas.')
    }
  }

  // 4. Cálculo Automático ao trocar a equação
  useEffect(() => {
    if (!pacienteSelecionado || !equacaoSelecionada || !medidasBrutas) return

    const lista = pacienteSelecionado.sexo === 'F' ? listaFeminina : listaMasculina
    const equacao = lista.find(eq => eq.nome === equacaoSelecionada)

    if (equacao && typeof equacao.func === 'function') {
      try {
        const resultado = equacao.func(medidasBrutas, pacienteSelecionado)
        setResultadoGordura(resultado)
      } catch (err) {
        console.error("Erro no cálculo da equação:", err)
        setResultadoGordura(0)
      }
    }
  }, [equacaoSelecionada, medidasBrutas, pacienteSelecionado])

  // 5. Salvar no Banco
  const handleSalvar = async () => {
    if (!avaliacaoAtual) return alert('Nenhuma avaliação encontrada para atualizar.')
    if (resultadoGordura <= 0) return alert('Calcule o percentual primeiro.')

    setSalvando(true)
    const { error } = await supabase
      .from('avaliacoes')
      .update({
        equacao_de_regressao_escolhida: equacaoSelecionada,
        percentual_de_gordura: resultadoGordura
      })
      .eq('id', avaliacaoAtual.id)

    setSalvando(false)

    if (error) {
      alert('Erro ao salvar: ' + error.message)
    } else {
      alert('Equação e Percentual salvos com sucesso na avaliação!')
    }
  }

  const listaParaExibir = pacienteSelecionado?.sexo === 'F' ? listaFeminina : listaMasculina

  return (
    <div className="max-w-3xl mx-auto space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow border border-gray-100">
      
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Laboratório de Equações</h2>
        <p className="text-sm text-gray-500">Página de teste isolada para simular resultados e salvar no banco.</p>
      </div>

      {/* Busca de Paciente */}
      <div className="space-y-2 relative" ref={dropdownRef}>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
          Pesquisar Paciente
        </label>
        <input
          type="text"
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value)
            setShowDropdown(true)
          }}
          onFocus={() => setShowDropdown(true)}
          placeholder="Digite o nome (Ex: Mar...)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
        />
        
        {/* Dropdown de Resultados */}
        {showDropdown && pacientesFiltrados.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {pacientesFiltrados.map(p => (
              <li
                key={p.id}
                onClick={() => selecionarPaciente(p)}
                className="px-4 py-3 cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 text-sm font-medium border-b border-gray-100 last:border-0"
              >
                {p.nome_completo} <span className="text-xs text-gray-400 font-normal ml-2">({p.sexo})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Seleção de Equação e Resultado */}
      {pacienteSelecionado && avaliacaoAtual && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
            <p className="text-sm text-gray-700">
              Avaliando: <strong>{pacienteSelecionado.nome_completo}</strong> 
              <br/>ID da Avaliação ativa: {avaliacaoAtual.id}
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Escolha a Equação de Regressão
            </label>
            <select
              value={equacaoSelecionada}
              onChange={(e) => setEquacaoSelecionada(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="">Selecione uma equação...</option>
              {listaParaExibir.map((eq, i) => (
                <option key={i} value={eq.nome}>{eq.nome}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-emerald-800 text-sm font-semibold uppercase tracking-wider">Resultado Calculado</h4>
              <p className="text-xs text-emerald-600 mt-1">Percentual de Gordura Corporal (%G)</p>
            </div>
            <div className="text-5xl font-black text-emerald-700">
              {resultadoGordura > 0 ? resultadoGordura : '--'}
              <span className="text-2xl ml-1">%</span>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={handleSalvar}
              disabled={!equacaoSelecionada || resultadoGordura <= 0 || salvando}
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 disabled:opacity-50 transition-all"
            >
              {salvando ? 'Salvando...' : 'Salvar Resultado na Avaliação'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}