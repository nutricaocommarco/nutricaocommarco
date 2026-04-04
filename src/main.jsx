import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

// Ferramentas de monitoramento da Vercel
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      {/* Ferramentas rodando em harmonia com o App */}
      <SpeedInsights />
      <Analytics />
    </HelmetProvider>
  </React.StrictMode>
);
