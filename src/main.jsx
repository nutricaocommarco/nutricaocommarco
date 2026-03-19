import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Ferramentas de monitoramento da Vercel
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* 2. Ligando as duas ferramentas abaixo do App */}
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>,
)
