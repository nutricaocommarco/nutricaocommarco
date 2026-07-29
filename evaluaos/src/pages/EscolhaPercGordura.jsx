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
  { nome: 'Katch & McArdle (1973) - 3skf', func: Eq.calcularFemKatchMcArdle1973_3skf },
  { nome: 'Sloan et al. (1962) - 2skf', func: Eq.calcularFemSloan1962_2skf },
  { nome: 'Wilmore & Behnke (1970) - 3skf', func: Eq.calcularFemWilmoreBehnke1970_3skf },
  { nome: 'Thorland et al. (1984) - Generalizada', func: Eq.calcularFemThorlandGeneralizada1984 },
  { nome: 'Lewis et al. (1978) - Dobras e Perímetros', func: Eq.calcularFemLewis1978 },
  { nome: 'Jackson et al. (1980) - 4skf', func: Eq.calcularFemJacksonPollock1980_4skf },
  { nome: 'Tran & Weltman (1989) - Perímetros', func: Eq.calcularFemTranWeltman1989_Perimetros },
  { nome: 'Weltman et al. (1988) - Perímetros', func: Eq.calcularFemWeltman1988_Perimetros },
  { nome: 'Woolcott & Bergman 2018', calcularFemWoolcottBergman2018 },
  { nome: 'Deurenberg et al. (1991) - Por IMC', func: Eq.calcularFemDeurenberg1991_IMC },
  { nome: 'Mitchell et al. 2020 7skd ISAK', func: Eq.calcularFemMitchell2020_7skf },
  { nome: 'Eston et al. 2005 3skf ISAK', func: Eq.calcularFemEston2005_3skf },
  { nome: 'Evans et al. 2005 3skf Brancas', func: Eq.calcularFemEvans2005_3skf_Brancas },
  { nome: 'Evans et al. 2005 3skf negras', func: Eq.calcularFemEvans2005_3skf_Negras },
  { nome: 'Durnin 4skf - Variação A (40-49 anos)', func: Eq.calcularFemDurnin_VarA },
  { nome: 'Durnin 4skf - Variação B (30-39 anos)', func: Eq.calcularFemDurnin_VarB },
  { nome: 'Durnin 4skf - Variação C (17-29 anos)', func: Eq.calcularFemDurnin_VarC },
  { nome: 'Durnin 4skf - Variação D (20-29 anos)', func: Eq.calcularFemDurnin_VarD },
  { nome: 'Durnin 4skf - Variação E (50+ anos)', func: Eq.calcularFemDurnin_VarE },
  { nome: 'Durnin 4skf - Variação F (50+ anos Alt)', func: Eq.calcularFemDurnin_VarF },
  { nome: 'DC por Tríceps Logarítmica', func: Eq.calcularFemDC_TricepsLog },
  { nome: 'DC Tríceps e Subescapular Logarítmica', func: Eq.calcularFemDC_TricSubLog },
  { nome: 'DC Tríceps e Subescapular Linear', func: Eq.calcularFemDC_TricSubLinear },
  { nome: '%G Direto por Log 4 Dobras - Var A', func: Eq.calcularFemPercGord_Log4Dobras_A },
  { nome: '%G Direto por Log 4 Dobras - Var B', func: Eq.calcularFemPercGord_Log4Dobras_B },
  { nome: '%G Direto por Log 4 Dobras - Var C', func: Eq.calcularFemPercGord_Log4Dobras_C },
  { nome: 'Equação Complexa - Logaritmos Mistos', func: Eq.calcularFemComplexa_Mista }
];

const listaMasculina = [
  { nome: 'Mitchell et al. (2020) - 7skd ISAK', func: Eq.calcularMascMitchell2020_7skd },
  { nome: 'Woolcott & Bergman (2018) - RFM', func: Eq.calcularMascWoolcottBergman2018 },
  { nome: 'Guedes (1985) - 3skd', func: Eq.calcularMascGuedes1985_3skd },
  { nome: 'Deurenberg et al. (1991) - Por IMC', func: Eq.calcularMascDeurenberg1991_IMC },
  { nome: 'Weltman et al. (1987) - Por Perímetros', func: Eq.calcularMascWeltman1987 },
  { nome: 'Petroski (1995) - 4skd', func: Eq.calcularMascPetroski1995_4skd },
  { nome: 'Stewart & Hannan - 2skd', func: Eq.calcularMascStewartHannan_2skd },
  { nome: 'Faulkner (1968) - 4skd', func: Eq.calcularMascFaulkner1968_4skd },
  { nome: 'Reilly et al. (2009) - 4skd ISAK', func: Eq.calcularMascReilly2009_4skd },
  { nome: 'Evans et al. (2005) - 3skd (Brancos)', func: Eq.calcularMascEvans2005_3skd_White },
  { nome: 'Evans et al. (2005) - 3skd (Negros)', func: Eq.calcularMascEvans2005_3skd_Black },
  { nome: 'Katch & McArdle (1973) - 3skd', func: Eq.calcularMascKatchMcArdle1973_3skd },
  { nome: 'Withers et al. (1987) - 7skd', func: Eq.calcularMascWithers1987_7skd },
  { nome: 'Slaughter et al. (1988) - 2skd', func: Eq.calcularMascSlaughter1988_2skd },
  { nome: 'Yuhasz (1974) - 6skd', func: Eq.calcularMascYuhasz1974_6skd },
  { nome: 'Wilmore & Behnke (1969) - 2skd', func: Eq.calcularMascWilmoreBehnke1969_2skd },
  { nome: 'Boileau et al. (1985) - 2skd', func: Eq.calcularMascBoileau1985_2skd },
  { nome: 'Deurenberg et al. (1990) - 4skd Var 1', func: Eq.calcularMascDeurenberg1990_4skd_Var1 },
  { nome: 'Deurenberg et al. (1990) - 4skd Var 2', func: Eq.calcularMascDeurenberg1990_4skd_Var2 },
  { nome: 'Deurenberg et al. (1990) - 4skd Var 3', func: Eq.calcularMascDeurenberg1990_4skd_Var3 },
  { nome: 'Eston et al. (2005) - 2skd ISAK', func: Eq.calcularMascEston2005_2skd },
  { nome: 'Eston et al. (2005) - 6skd ISAK', func: Eq.calcularMascEston2005_6skd },
  { nome: 'Durnin & Womersley 1974 - Var 1', func: Eq.calcularMascDurnin1974_Var1 },
  { nome: 'Durnin & Womersley 1974 - Var 2', func: Eq.calcularMascDurnin1974_Var2 },
  { nome: 'Durnin & Womersley 1974 - Var 3', func: Eq.calcularMascDurnin1974_Var3 },
  { nome: 'Durnin & Womersley 1974 - Var 4', func: Eq.calcularMascDurnin1974_Var4 },
  { nome: 'Durnin & Womersley 1974 - Var 5', func: Eq.calcularMascDurnin1974_Var5 },
  { nome: 'Durnin & Womersley 1974 - Var 6', func: Eq.calcularMascDurnin1974_Var6 },
  { nome: 'Durnin & Womersley 1974 - 1skd (Só Tríceps)', func: Eq.calcularMascDurnin1974_1skd },
  { nome: 'Durnin & Rahaman 1967 - 4skd', func: Eq.calcularMascDurninRahaman1967_4skd },
  { nome: 'Forsyth & Sinning 1973 - 2skd', func: Eq.calcularMascForsythSinning1973_2skd },
  { nome: 'Nagamine & Suzuki 1964 - 2skd', func: Eq.calcularMascNagamineSuzuki1964_2skd },
  { nome: 'Sloan 1967 - 2skd', func: Eq.calcularMascSloan1967_2skd },
  { nome: 'Hortobagyi et al. 1992', func: Eq.calcularMascHortobagyi1992 },
  { nome: 'Ortiz-Hernández et al. 2016', func: Eq.calcularMascOrtizHernandez2016 }
];

export default function EquacoesTeste({ pacienteInicial = null, avaliacaoInicial = null }) {
  const [busca, setBusca] = useState('')
  const [pacientesFiltrados, setPacientesFiltrados] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  
  const [pacienteSelecionado, setPacienteSelecionado] = useState(pacienteInicial)
  const [avaliacaoAtual, setAvaliacaoAtual] = useState(avaliacaoInicial)
  const [medidasBrutas, setMedidasBrutas] = useState({})
  
  const [equacaoSelecionada, setEquacaoSelecionada] = useState('')
  
  // ESTADOS PARA O VALOR E AS INFORMAÇÕES CIENTÍFICAS
  const [resultadoGordura, setResultadoGordura] = useState(0)
  const [metadados, setMetadados] = useState(null)
  
  const [salvando, setSalvando] = useState(false)

  const dropdownRef = useRef(null)

  useEffect(() => {
    if (pacienteInicial) {
      selecionarPaciente(pacienteInicial)
    }
  }, [pacienteInicial])

  useEffect(() => {
    const buscarPacientes = async () => {
      if (busca.length < 1) {
        setPacientesFiltrados([])
        return
      }
// Busca na tabela 'pacientes'
      const { data, error } = await supabase
        .from('pacientes')
        .select('id, nome_completo, sexo, data_nascimento') // <--- Traz a data aqui
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

  // LÓGICA CORRIGIDA: DESEMPACOTANDO O VALOR E A INFO
  useEffect(() => {
    if (!pacienteSelecionado || !equacaoSelecionada || !medidasBrutas) return

    const lista = pacienteSelecionado.sexo === 'F' ? listaFeminina : listaMasculina
    const equacao = lista.find(eq => eq.nome === equacaoSelecionada)

    if (equacao && typeof equacao.func === 'function') {
      try {
        const resultado = equacao.func(medidasBrutas, pacienteSelecionado)
        
        // Se a função retornar o objeto { valor, info }, separamos eles
        if (typeof resultado === 'object' && resultado !== null) {
          setResultadoGordura(resultado.valor || 0)
          setMetadados(resultado.info || null)
        } else {
          // Se for uma função que ainda não auditamos e retorna apenas o número
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

          {/* CAIXA AZUL DE METADADOS CIENTÍFICOS */}
          {metadados && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 transition-all">
              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3">Validação Científica</h4>
              <ul className="text-sm text-blue-800 space-y-1.5">
                <li><strong>Autor(es):</strong> {metadados.autor} ({metadados.ano})</li>
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