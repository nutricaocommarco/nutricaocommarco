import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../supabaseClient'
import * as Eq from '../utils/equacoes'

// Mapeamento de todas as equações importadas
const listaFeminina = [
  { nome: 'Durnin et al. (1974) - 4skf', func: Eq.calcularFemDurnin1974 },
  { nome: 'Jackson et al. (1980) - 3skf', func: Eq.calcularFemJacksonPollock1980_3skf },
  { nome: 'Petroski (1995) - 4skf', func: Eq.calcularFemPetroski1995_4skf },
  { nome: 'Guedes (1985) - 3skf', func: Eq.calcularFemGuedes1985_3skf },
  { nome: 'Withers et al. (1987) - 4skf', func: Eq.calcularFemWithers1987_4skf },
  { nome: 'Withers et al. (1987) - 6skf', func: Eq.calcularFemWithers1987_6skf },
  { nome: 'Slaughter et al. (1988) - 2skf', func: Eq.calcularFemSlaughter1988_2skf },
  { nome: 'Yuhasz (1974) - 6skf', func: Eq.calcularFemYuhasz1974_6skf },
  { nome: 'Katch & McArdle (1973) - 3skf', func: Eq.calcularFemKatchMcArdle1973_3skf },
  { nome: 'Sloan et al. (1962) - 2skf', func: Eq.calcularFemSloan1962_2skf },
  { nome: 'Wilmore & Behnke (1970) - 3skf', func: Eq.calcularFemWilmoreBehnke1970_3skf },
  { nome: 'Thorland et al. (1984) - Generalizada', func: Eq.calcularFemThorlandGeneralizada1984 },
  { nome: 'Lewis et al. (1978) - Dobras e Perímetros', func: Eq.calcularFemLewis1978 },
  { nome: 'Jackson et al. (1980) - 4skf', func: Eq.calcularFemJacksonPollock1980_4skf },
  { nome: 'Tran & Weltman (1989) - Perímetros', func: Eq.calcularFemTranWeltman1989_Perimetros },
  { nome: 'Weltman et al. (1988) - Perímetros', func: Eq.calcularFemWeltman1988_Perimetros }
];

const listaMasculina = [
  { nome: 'Mitchell et al. (2020) - 7skd ISAK', func: Eq.calcularMascMitchell2020_7skd },
  { nome: 'Woolcott & Bergman (2018) - RFM', func: Eq.calcularMascWoolcottBergman2018 }
  // (Mantenha as outras opções da sua listaMasculina original)
];

export default function EquacoesTeste({ pacienteInicial = null, avaliacaoInicial = null }) {
  const [busca, setBusca] = useState('')
  const [pacientesFiltrados, setPacientesFiltrados] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  
  const [pacienteSelecionado, setPacienteSelecionado] = useState(pacienteInicial)
  const [avaliacaoAtual, setAvaliacaoAtual] = useState(avaliacaoInicial)
  const [medidasBrutas, setMedidasBrutas] = useState({})
  
  const [equacaoSelecionada, setEquacaoSelecionada] = useState('')
  
  // Alteramos o estado do resultado para guardar valor e info
  const [resultadoGordura, setResultadoGordura] = useState(0)
  const [metadados, setMetadados] = useState(null)
  
  const [salvando, setSalvando] = useState(false)

  const dropdownRef = useRef(null)

  // 1. Inicialização e Busca
  useEffect(() => {
    if (pacienteInicial) selecionarPaciente(pacienteInicial)
  }, [pacienteInicial])

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

  useEffect(() => {
    const handleClickFora = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickFora)
    return () => document.removeEventListener('mousedown', handleClickFora)
  }, [])

  // 3. Selecionar Paciente
  const selecionarPaciente = async (paciente) => {
    setPacienteSelecionado(paciente)
    setBusca(paciente.nome_completo)
    setShowDropdown(false)
    setEquacaoSelecionada('')
    setResultadoGordura(0)
    setMetadados(null)

    const { data, error } = await supabase
      .from('avaliacoes')
      .select('*')
      .eq('id_paciente', paciente.id)
      .order('data_avaliacao', { ascending: false })
      .limit(1)
      .single()

    if (data) {
      setAvaliacaoAtual(data)
      setMedidasBrutas(data)
    } else {
      setAvaliacaoAtual(null)
      setMedidasBrutas({})
      alert('Este paciente ainda não possui avaliações (medidas) cadastradas.')
    }
  }

  // 4. Cálculo Automático
  useEffect(() => {
    if (!pacienteSelecionado || !equacaoSelecionada || !medidasBrutas) return

    const lista = pacienteSelecionado.sexo === 'F' ? listaFeminina : listaMasculina
    const equacao = lista.find(eq => eq.nome === equacaoSelecionada)

    if (equacao && typeof equacao.func === 'function') {
      try {
        const resultado = equacao.func(medidasBrutas, pacienteSelecionado)
        
        // Verifica se a função retornou o objeto novo { valor, info } ou só o número antigo
        if (typeof resultado === 'object' && resultado !== null) {
          setResultadoGordura(resultado.valor || 0)
          setMetadados(resultado.info || null)
        } else {
          setResultadoGordura(resultado || 0)
          setMetadados(null)
        }

      } catch (err) {
        console.error("Erro no cálculo da equação:", err)
        setResultadoGordura(0)
        setMetadados(null)
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
        <p className="text-sm text-gray-500">Selecione uma equação com base no perfil do seu paciente.</p>
      </div>

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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        
        {showDropdown && pacientesFiltrados.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {pacientesFiltrados.map(p => (
              <li
                key={p.id}
                onClick={() => selecionarPaciente(p)}
                className="px-4 py-3 cursor-pointer hover:bg-emerald-50 text-sm font-medium border-b border-gray-100"
              >
                {p.nome_completo} <span className="text-xs text-gray-400 ml-2">({p.sexo})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {pacienteSelecionado && avaliacaoAtual && (
        <div className="space-y-6 animate-fade-in-up">
          
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

          {/* EXIBIÇÃO DOS METADADOS (Só aparece se a equação tiver Info) */}
          {metadados && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">Validação Científica</h4>
              <ul className="text-xs text-blue-700 space-y-1">
                <li><strong>Autor:</strong> {metadados.autor} ({metadados.ano})</li>
                <li><strong>Protocolo:</strong> {metadados.protocolo}</li>
                <li><strong>População Alvo:</strong> {metadados.populacao}</li>
                <li><strong>Faixa Etária Padrão:</strong> {metadados.faixaEtaria}</li>
                <li><strong>Padrão Ouro:</strong> {metadados.referencia}</li>
              </ul>
            </div>
          )}

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