import React, { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Login from './pages/Login'
import Pacientes from './pages/Pacientes'

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

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

  if (!session) {
    return <Login onLoginSuccess={(user) => console.log('Usuário logado:', user)} />
  }

  return (
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/Imagens/Logo_png.png" alt="EvaluaOS Logo" className="h-10 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800 leading-tight">EvaluaOS</span>
            <span className="text-xs text-gray-500 font-medium">Sistema de Avaliação Antropométrica</span>
          </div>
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

      <main className="max-w-7xl mx-auto p-6">
        <Pacientes userId={session.user.id} />
      </main>
    </div>
  )
}