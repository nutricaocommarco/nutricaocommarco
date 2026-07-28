import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function ResultadoAvaliacao({ avaliacaoId, onVoltar }) {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState(null)

  useEffect(() => {
    async function carregarResultados() {
      setLoading(true)
      const { data, error } = await supabase
        .from('dados_calculados')
        .select(`
          *,
          pacientes ( nome_completo, sexo ),
          avaliacoes ( data_avaliacao, peso_paciente, altura_paciente )
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

  // Normalização das coordenadas para plotagem visual na Somatocarta (Escala SVG)
  // X varia de -8 a +8 -> Mapeado para pixels 20 a 280
  // Y varia de -9 a +15 -> Mapeado para pixels 280 a 20
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
            Relatório Antropométrico: {dados.pacientes?.nome_completo}
          </h2>
          <p className="text-xs text-gray-500">Data: {dados.avaliacoes?.data_avaliacao}</p>
        </div>
      </div>

      {/* Cards Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase">IMC</p>
          <p className="text-2xl font-black text-gray-800 mt-1">{dados.imc} <span className="text-xs font-normal text-gray-500">kg/m²</span></p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase">% Gordura</p>
          <p className="text-2xl font-black text-emerald-600 mt-1">{dados.massa_gorda ? ((dados.massa_gorda / dados.avaliacoes?.peso_paciente) * 100).toFixed(1) : '-'} <span className="text-xs font-normal text-gray-500">%</span></p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase">Massa Magra</p>
          <p className="text-2xl font-black text-blue-600 mt-1">{dados.massa_magra} <span className="text-xs font-normal text-gray-500">kg</span></p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase">Massa Gorda</p>
          <p className="text-2xl font-black text-amber-600 mt-1">{dados.massa_gorda} <span className="text-xs font-normal text-gray-500">kg</span></p>
        </div>
      </div>

      {/* Somatotipo & Somatocarta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Componentes do Somatotipo */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2">
            Somatotipo (Heath-Carter)
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-amber-700">Endomorfia (Adiposidade)</span>
                <span>{dados.somatotipo_endomorfia}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${Math.min(100, dados.somatotipo_endomorfia * 10)}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-blue-700">Mesomorfia (Musculosidade)</span>
                <span>{dados.somatotipo_mesomorfia}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, dados.somatotipo_mesomorfia * 10)}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-emerald-700">Ectomorfia (Magreza / Linearidade)</span>
                <span>{dados.somatotipo_ectomorfia}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(100, dados.somatotipo_ectomorfia * 10)}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Gráfico Somatocarta SVG */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b pb-2 w-full text-center">
            Somatocarta
          </h3>
          <div className="relative mt-4">
            <svg width="300" height="300" className="border rounded-lg bg-slate-50">
              {/* Eixos Centrais */}
              <line x1="150" y1="20" x2="150" y2="280" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />
              <line x1="20" y1="150" x2="280" y2="150" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4" />

              {/* Triângulo do Somatotipo */}
              <polygon points="150,30 40,240 260,240" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Rótulos das Pontas */}
              <text x="150" y="20" textAnchor="middle" className="text-[10px] font-bold fill-blue-600">MESOMORFIA</text>
              <text x="30" y="255" textAnchor="middle" className="text-[10px] font-bold fill-amber-600">ENDOMORFIA</text>
              <text x="270" y="255" textAnchor="middle" className="text-[10px] font-bold fill-emerald-600">ECTOMORFIA</text>

              {/* Ponto do Paciente */}
              <circle cx={coordX} cy={coordY} r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <p className="text-center text-xs text-gray-500 mt-2 font-medium">
              Coordenadas: X ({dados.somatocarta_eixo_x}) | Y ({dados.somatocarta_eixo_y})
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}