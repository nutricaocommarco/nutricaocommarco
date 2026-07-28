import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function ResultadoAvaliacao({ avaliacaoId, onVoltar }) {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState(null)

  useEffect(() => {
    async function carregarResultados() {
      setLoading(true)
      
      const { data: avalDados, error: avalError } = await supabase
        .from('avaliacoes')
        .select(`*, pacientes ( nome_completo, sexo, data_nascimento, etnia )`)
        .eq('id', avaliacaoId)
        .single()

      if (avalError) {
        console.error('Avaliação não encontrada:', avalError)
        setLoading(false)
        return
      }

      const { data: calcDados } = await supabase
        .from('dados_calculados')
        .select('*')
        .eq('id_avaliacao', avaliacaoId)
        .single()

      setDados({
        ...calcDados, 
        avaliacoes: avalDados,
        pacientes: avalDados.pacientes
      })
      
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
  // LEITURA DOS DADOS PRONTOS (Sem refazer cálculos)
  // ============================================================================
  const aval = dados.avaliacoes || {}
  const pac = dados.pacientes || {}

  let idade = 0
  if (pac.data_nascimento) {
    const birthDate = new Date(pac.data_nascimento + 'T12:00:00')
    const evalDate = new Date(aval.data_avaliacao ? aval.data_avaliacao + 'T12:00:00' : Date.now())
    idade = evalDate.getFullYear() - birthDate.getFullYear()
    const m = evalDate.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && evalDate.getDate() < birthDate.getDate())) {
      idade--
    }
  }

  // Pega os dados direto do banco de dados (as colunas que agora populamos corretamente)
  const imc = dados.imc || 0
  const percentualGordura = aval.percentual_de_gordura || 0 // Vem da tabela de avaliações
  const massaGorda = dados.massa_gorda || 0
  const massaMagra = dados.massa_magra || 0
  const massaMuscular = dados.massa_muscular || 0

  const coordX = 150 + ((dados.somatocarta_eixo_x || 0) * 15)
  const coordY = 150 - ((dados.somatocarta_eixo_y || 0) * 11)

  const renderMedidaItem = (label, valor, unidade) => (
    <div className="flex justify-between items-center p-2 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded transition-colors" key={label}>
      <span className="text-xs font-medium text-gray-600">{label}</span>
      <span className="text-sm font-bold text-gray-800">
        {valor != null ? Number(valor).toFixed(1) : '-'} <span className="text-xs text-gray-400 font-normal">{unidade}</span>
      </span>
    </div>
  )

  return (
    <div className="space-y-6 pb-10">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <button onClick={onVoltar} className="text-xs text-emerald-600 font-semibold hover:underline mb-1 inline-block">← Voltar</button>
          <h2 className="text-xl font-bold text-gray-800">Relatório Antropométrico: {pac.nome_completo}</h2>
          <p className="text-xs text-gray-500 mt-1">
            <span className="font-medium">Data da Avaliação:</span> {new Date(aval.data_avaliacao + 'T12:00:00').toLocaleDateString('pt-BR')} 
            <span className="mx-2 text-gray-300">|</span> 
            <span className="font-medium">Idade calculada:</span> {idade > 0 ? `${idade} anos` : <span className="text-red-500">Falta Data de Nasc.</span>}
          </p>
        </div>
      </div>

      {/* RESULTADOS PRINCIPAIS */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 px-1">📊 Composição Corporal</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">IMC</p>
            <p className="text-2xl font-black text-gray-800 mt-1">{imc > 0 ? imc.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg/m²</span></p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">% Gordura</p>
            <p className="text-2xl font-black text-amber-500 mt-1">{percentualGordura > 0 ? percentualGordura.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">%</span></p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Massa Gorda</p>
            <p className="text-2xl font-black text-amber-600 mt-1">{massaGorda > 0 ? massaGorda.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg</span></p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 uppercase">Massa Magra</p>
            <p className="text-2xl font-black text-blue-600 mt-1">{massaMagra > 0 ? massaMagra.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg</span></p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center border-l-4 border-l-emerald-500">
            <p className="text-xs font-semibold text-gray-500 uppercase">Massa Muscular</p>
            <p className="text-2xl font-black text-emerald-700 mt-1">{massaMuscular > 0 ? massaMuscular.toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">kg</span></p>
          </div>
        </div>
      </div>

      {/* MEDIDAS COLETADAS */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 px-1 mt-6">📋 Medidas Coletadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-2 mb-3">📐 Medidas Básicas</h4>
            <div className="space-y-1">
              {renderMedidaItem('Peso', aval.peso_paciente, 'kg')}
              {renderMedidaItem('Estatura', aval.altura_paciente, 'cm')}
              {renderMedidaItem('Altura Sentado', aval.altura_sentado_paciente, 'cm')}
              {renderMedidaItem('Envergadura', aval.envergadura_paciente, 'cm')}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-amber-600 border-b border-amber-100 pb-2 mb-3">🤏 Dobras Cutâneas</h4>
            <div className="space-y-1">
              {renderMedidaItem('Tríceps', aval.dobra_cutanea_triceps, 'mm')}
              {renderMedidaItem('Subescapular', aval.dobra_cutanea_subescapular, 'mm')}
              {renderMedidaItem('Bíceps', aval.dobra_cutanea_biceps, 'mm')}
              {renderMedidaItem('Crista Ilíaca', aval.dobra_cutanea_crista_iliaca, 'mm')}
              {renderMedidaItem('Supraespinhal', aval.dobra_cutanea_supraespinhal, 'mm')}
              {renderMedidaItem('Abdominal', aval.dobra_cutanea_abdominal, 'mm')}
              {renderMedidaItem('Coxa Média', aval.dobra_cutanea_coxa_media, 'mm')}
              {renderMedidaItem('Panturrilha', aval.dobra_cutanea_panturrilha, 'mm')}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-blue-600 border-b border-blue-100 pb-2 mb-3">🔄 Perímetros</h4>
            <div className="space-y-1">
              {renderMedidaItem('Braço Relaxado', aval.perimetro_braco_relaxado, 'cm')}
              {renderMedidaItem('Braço Contraído', aval.perimetro_braco_contraido, 'cm')}
              {renderMedidaItem('Antebraço', aval.perimetro_antibraco, 'cm')}
              {renderMedidaItem('Cintura', aval.perimetro_cintura, 'cm')}
              {renderMedidaItem('Abdominal', aval.perimetro_abdominal, 'cm')}
              {renderMedidaItem('Quadril', aval.perimetro_quadril, 'cm')}
              {renderMedidaItem('Coxa Máxima', aval.perimetro_coxa_maxima, 'cm')}
              {renderMedidaItem('Coxa Média', aval.perimetro_coxa_media, 'cm')}
              {renderMedidaItem('Panturrilha', aval.perimetro_panturrilha, 'cm')}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="text-sm font-bold text-slate-700 border-b border-slate-200 pb-2 mb-3">🦴 Diâmetros Ósseos</h4>
            <div className="space-y-1">
              {renderMedidaItem('Úmero', aval.diametro_umero, 'cm')}
              {renderMedidaItem('Fêmur', aval.diametro_femur, 'cm')}
              {renderMedidaItem('Punho', aval.diametro_punho, 'cm')}
              {renderMedidaItem('Tornozelo', aval.diametro_maleolar, 'cm')}
            </div>
          </div>
        </div>
      </div>

      {/* SOMATOTIPO E SOMATOCARTA */}
      <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3 px-1 mt-6">🧬 Somatotipo (Heath-Carter)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <div className="space-y-5 mt-2">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-amber-700">Endomorfia (Adiposidade)</span>
                <span>{dados.somatotipo_endomorfia || '-'}</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${Math.min(100, (dados.somatotipo_endomorfia || 0) * 10)}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-blue-700">Mesomorfia (Musculosidade)</span>
                <span>{dados.somatotipo_mesomorfia || '-'}</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${Math.min(100, (dados.somatotipo_mesomorfia || 0) * 10)}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-emerald-700">Ectomorfia (Magreza / Linearidade)</span>
                <span>{dados.somatotipo_ectomorfia || '-'}</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${Math.min(100, (dados.somatotipo_ectomorfia || 0) * 10)}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <div className="relative">
            <svg width="280" height="280" className="border rounded-lg bg-slate-50 shadow-inner">
              <line x1="140" y1="20" x2="140" y2="260" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
              <line x1="20" y1="140" x2="260" y2="140" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
              <polygon points="140,30 40,230 240,230" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="140" y="20" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">MESOMORFIA</text>
              <text x="30" y="245" textAnchor="middle" className="text-[10px] font-bold fill-amber-600">ENDOMORFIA</text>
              <text x="250" y="245" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600">ECTOMORFIA</text>
              {dados.somatocarta_eixo_x != null && dados.somatocarta_eixo_y != null && (
                <circle cx={coordX} cy={coordY} r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" className="shadow-lg" />
              )}
            </svg>
            <p className="text-center text-xs text-gray-500 mt-3 font-medium">
              Coordenadas: X ({dados.somatocarta_eixo_x || '0'}) | Y ({dados.somatocarta_eixo_y || '0'})
            </p>
          </div>
        </div>
      </div>

      {/* OUTROS INDICADORES */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">🚀 Outros Indicadores & Classificações</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {['Relação Cintura-Quadril (RCQ)', 'Relação Cintura-Estatura (RCE)', 'Índice de Massa Óssea (IMO)', 'Área de Previsão Visceral (APVAT)', 'Índice Adiposo Muscular', 'Somatório 6 Dobras', 'Somatório 8 Dobras', 'Perímetro Corrigido - Braço', 'Perímetro Corrigido - Coxa', 'Perímetro Corrigido - Panturrilha', 'Circunferência da Cintura (Status)', 'Gordura (Escala Morrow)', 'Gordura (Escala Argoref)'].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg bg-gray-50">
              <span className="text-xs font-semibold text-gray-700">{item}</span>
              <span className="text-[10px] font-bold bg-gray-200 text-gray-500 px-2 py-1 rounded-md uppercase tracking-wide">Em breve</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}