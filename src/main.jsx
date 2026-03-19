import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Importar o componente da Vercel
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* 2. Adicionar o componente aqui embaixo do App */}
    <SpeedInsights />
  </React.StrictMode>,
)
