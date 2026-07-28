import React, { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Login from './pages/Login'

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Checa a sessão atual ao carregar o aplicativo
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    // 2. Escuta mudanças no estado de autenticação (Login / Logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 font-medium animate-pulse">Carregando EvaluaOS...</p>
      </div>
    )
  }

  // Se NÃO houver usuário logado, exibe a tela de Login
  if (!session) {
    return <Login onLoginSuccess={(user) => console.log('Usuário logado:', user)} />
  }

  // Se estiver LOGADO, exibe a estrutura principal do sistema
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de Navegação Superior */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-emerald-600">EvaluaOS</h1>
          <p className="text-xs text-gray-500">Sistema de Avaliação Antropométrica</p>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">
            {session.user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
          >
            Sair
          </button>
        </div>
      </nav>

      {/* Conteúdo Principal (Dashboard) */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Painel de Controle</h2>
          <p className="text-sm text-gray-600">
            Login realizado com sucesso! Em breve, aqui listaremos seus pacientes e avaliações.
          </p>
        </div>
      </main>
    </div>
  )
}