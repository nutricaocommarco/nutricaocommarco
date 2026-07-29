import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { supabase } from './supabaseClient'

// Importando suas telas
import Login from './pages/Login'
import Pacientes from './pages/Pacientes'
import EscolhaPercGordura from './pages/EscolhaPercGordura'
import AvaliacaoForm from './pages/AvaliacaoForm'
import ResultadoAvaliacao from './pages/ResultadoAvaliacao'

function MainApp() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

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

  // Seus menus agora apontam para caminhos (paths) reais!
  const menuItems = [
    { 
      name: 'Pacientes', path: '/pacientes',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 
    },
    { 
      name: 'Nova Avaliação', path: '/nova-avaliacao',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> 
    },
    { 
      name: 'Laudo Antropométrico', path: '/laudo-antropometrico',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> 
    },
    { 
      name: 'Equações', path: '/equacoes-de-regressao',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"></path><path d="M9 11.2h5.7"></path></svg> 
    }
  ]

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-emerald-600 font-bold animate-pulse text-xl">Carregando EvaluaOS...</p></div>

  // Bloqueio de segurança: Se não tiver logado, força a ir para /login
  if (!session) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      {isSidebarOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />}

      <aside className={`fixed md:relative z-50 h-full bg-white shadow-xl border-r border-gray-100 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full md:translate-x-0'}`}>
        {/* ... (Menu Superior com logo, etc) ... */}
        
        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2 mt-[72px]">
          {menuItems.map((item) => (
            <button
              key={item.name}
              title={!isSidebarOpen ? item.name : ''}
              onClick={() => {
                navigate(item.path) // <-- NAVEGA PARA A URL CLICADA
                if (window.innerWidth < 768) setIsSidebarOpen(false) 
              }}
              className={`flex items-center p-3 rounded-xl transition-all duration-200 overflow-hidden group ${currentPath.startsWith(item.path) ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100 hover:text-emerald-700'}`}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">{item.icon}</div>
              <span className={`ml-3 whitespace-nowrap font-medium text-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>{item.name}</span>
            </button>
          ))}
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-100 px-4 h-[72px] flex justify-between items-center shrink-0">
           {/* ... Seu Cabeçalho com Botão Sair ... */}
           <button onClick={handleLogout} className="px-4 py-2 text-xs font-bold text-red-500 bg-red-50 hover:bg-red-100 rounded-lg">Sair</button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {/* AS ROTAS SÃO DEFINIDAS AQUI! CADA URL ABRE UM COMPONENTE */}
          <Routes>
            <Route path="/" element={<Navigate to="/pacientes" replace />} />
            <Route path="/login" element={<Navigate to="/pacientes" replace />} />
            
            <Route path="/pacientes" element={<Pacientes userId={session.user.id} />} />
            <Route path="/nova-avaliacao" element={<AvaliacaoForm />} />
            <Route path="/equacoes-de-regressao" element={<EscolhaPercGordura />} />
            <Route path="/laudo-antropometrico" element={<ResultadoAvaliacao />} />

            <Route path="*" element={
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <h2 className="text-2xl font-black text-gray-800 mb-2">Página não encontrada</h2>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </div>
  )
}

// O App precisa ser envolvido no BrowserRouter para as URLs funcionarem
export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  )
}