import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function ResultadoAvaliacao({ avaliacaoId, onVoltar }) {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState(null)

  useEffect(() => {
    async function carregarResultados() {
      setLoading(true)
      // Ajustado para trazer todas as medidas da avaliação (*) e dados demográficos do paciente
      const { data, error } = await supabase
        .from('dados_calculados')
        .select(`
          *,
          pacientes ( nome_completo, sexo, data_nascimento, etnia ),
          avaliacoes ( * )
        `)
        .eq('id_avaliacao', avaliacaoId)
        .single()

      if (error) {
        console.error('Erro ao carregar dados calculados:', error)
      } else {
        setDados(data)
      }
      setLoading(false)
    }

    if (avaliacaoId) carregarResultados()
  }, [avaliacaoId])

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Carregando relatório da avaliação...</div>
  }

  if (!dados) {
    return <div className="p-8 text-center text-red-500">Não foi possível carregar os resultados desta avaliação.</div>
  }

  // ============================================================================
  // LÓGICA DE CÁLCULOS ANTROPOMÉTRICOS
  // ============================================================================
  const aval = dados.avaliacoes || {}
  const pac = dados.pacientes || {}

  // 1. Dados Básicos
  const peso = aval.peso_paciente || 0
  const alturaCm = aval.altura_paciente || 0
  const alturaM = alturaCm / 100

  // Idade (cálculo dinâmico baseado na data de nascimento e data da avaliação)
  let idade = 0
  if (pac.data_nascimento) {
    const birthDate = new Date(pac.data_nascimento)
    const evalDate = new Date(aval.data_avaliacao || Date.now())
    idade = evalDate.getFullYear() - birthDate.getFullYear()
    const m = evalDate.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && evalDate.getDate() < birthDate.getDate())) {
      idade--
    }
  }

  // 2. IMC
  const imc = alturaM > 0 ? peso / (alturaM * alturaM) : 0

  // 3. Composição Corporal (Gordura e Magra)
  // Se o % de gordura já vier calculado do banco, usamos ele, senão tentamos deduzir da massa_gorda salva
  const percentualGordura = dados.percentual_gordura || (dados.massa_gorda ? (dados.massa_gorda / peso) * 100 : 0)
  const massaGordaCalculada = (percentualGordura * peso) / 100
  const massaMagraCalculada = peso - massaGordaCalculada

  // 4. Massa Muscular (Fórmula de Lee)
  const sexoNum = pac.sexo === 'M' ? 1 : 0
  let racaNum = 0 // Padrão 0 para Caucasiano, Pardo, Indígena, Outros
  if (pac.etnia === 'Afrodescendente') racaNum = 1.1
  if (pac.etnia === 'Asiatico') racaNum = -2

  const pBraco = aval.perimetro_braco_relaxado || 0
  const pCoxa = aval.perimetro_coxa_media || 0
  const pPant = aval.perimetro_panturrilha || 0

  const dTri = aval.dobra_cutanea_triceps || 0
  const dCoxa = aval.dobra_cutanea_coxa_media || 0
  const dPant = aval.dobra_cutanea_panturrilha || 0

  const termoBraco = Math.pow(pBraco - (dTri * 0.314), 2)
  const termoCoxa = Math.pow(pCoxa - (dCoxa * 0.314), 2)
  const termoPant = Math.pow(pPant - (dPant * 0.314), 2)

  let massaMuscular = 0
  if (alturaM > 0 && pBraco > 0 && pCoxa > 0 && pPant > 0) {
    massaMuscular =
      (alturaM * ((0.00744 * termoBraco) + (0.00088 * termoCoxa) + (0.00441 * termoPant))) +
      (2.4 * sexoNum) -
      (0.048 * idade) * racaNum +
      7.8
  }

  // ============================================================================
  // NORMALIZAÇÃO SOMATOCARTA
  // ============================================================================
  const coordX = 150 + (dados.somatocarta_eixo_x * 15)
  const coordY = 150 - (dados.somatocarta_eixo_y * 11)

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <button
            onClick={onVoltar}
            className="text-xs text-emerald-600 font-semibold hover:underline mb-1 inline-block"
          >
            ← Voltar
          </button>
          <h2 className="text-xl font-bold text-gray-800">
            Relatório Antropométrico: {pac.nome_completo}
          </h2>
          <p className="text-xs text-gray-500">Data da Avaliação: {new Date(aval.data_avaliacao).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>

      {/* RESULTADOS PRINCIPAIS (Calculados) */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 px-1">Composição Corporal</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">IMC</p>
            <p className="text-2xl font-black text-gray-800 mt-1">
              {imc > 0 ? imc.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg/m²</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">% Gordura</p>
            <p className="text-2xl font-black text-amber-500 mt-1">
              {percentualGordura > 0 ? percentualGordura.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">%</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Massa Gorda</p>
            <p className="text-2xl font-black text-amber-600 mt-1">
              {massaGordaCalculada > 0 ? massaGordaCalculada.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Massa Magra</p>
            <p className="text-2xl font-black text-blue-600 mt-1">
              {massaMagraCalculada > 0 ? massaMagraCalculada.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center border-l-4 border-l-emerald-500">
            <p className="text-xs font-semibold text-gray-500 uppercase">Massa Muscular</p>
            <p className="text-2xl font-black text-emerald-700 mt-1">
              {massaMuscular > 0 ? massaMuscular.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg</span>
            </p>
          </div>
        </div>
      </div>

      {/* SOMATOTIPO E SOMATOCARTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
            Somatotipo (Heath-Carter)
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-amber-700">Endomorfia (Adiposidade)</span>
                <span>{dados.somatotipo_endomorfia || '-'}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${Math.min(100, (dados.somatotipo_endomorfia || 0) * 10)}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-blue-700">Mesomorfia (Musculosidade)</span>
                <span>{dados.somatotipo_mesomorfia || '-'}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, (dados.somatotipo_mesomorfia || 0) * 10)}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-emerald-700">Ectomorfia (Magreza / Linearidade)</span>
                <span>{dados.somatotipo_ectomorfia || '-'}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(100, (dados.somatotipo_ectomorfia || 0) * 10)}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2 w-full text-center">
            Somatocarta
          </h3>
          <div className="relative mt-4">
            <svg width="300" height="300" className="border rounded-lg bg-slate-50 shadow-inner">
              <line x1="150" y1="20" x2="150" y2="280" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
              <line x1="20" y1="150" x2="280" y2="150" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
              <polygon points="150,30 40,240 260,240" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
              
              <text x="150" y="20" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">MESOMORFIA</text>
              <text x="30" y="255" textAnchor="middle" className="text-[10px] font-bold fill-amber-600">ENDOMORFIA</text>
              <text x="270" y="255" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600">ECTOMORFIA</text>
              
              {dados.somatocarta_eixo_x !== null && dados.somatocarta_eixo_y !== null && (
                <circle cx={coordX} cy={coordY} r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" className="shadow-lg" />
              )}
            </svg>
            <p className="text-center text-xs text-gray-500 mt-2 font-medium">
              Coordenadas: X ({dados.somatocarta_eixo_x || '0'}) | Y ({dados.somatocarta_eixo_y || '0'})
            </p>
          </div>
        </div>
      </div>

      {/* OUTROS INDICADORES (Em Breve) */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
          Outros Indicadores & Classificações
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Relação Cintura-Quadril (RCQ)',
            'Relação Cintura-Estatura (RCE)',
            'Índice de Massa Óssea (IMO)',
            'Área de Previsão Visceral (APVAT)',
            'Índice Adiposo Muscular',
            'Somatório 6 Dobras',
            'Somatório 8 Dobras',
            'Perímetro Corrigido - Braço',
            'Perímetro Corrigido - Coxa',
            'Perímetro Corrigido - Panturrilha',
            'Circunferência da Cintura (Status)',
            'Gordura (Escala Morrow)',
            'Gordura (Escala Argoref)'
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg bg-gray-50">
              <span className="text-xs font-semibold text-gray-700">{item}</span>
              <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-1 rounded-md uppercase tracking-wide">
                Em breve
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}