import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Ferramentas de monitoramento da Vercel
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const rootElement = document.getElementById('root');

const myApp = (
  <React.StrictMode>
    <App />
    {/* 2. Ligando as duas ferramentas abaixo do App */}
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  // Se o react-snap já preparou o HTML estático (perfeito para o WhatsApp)
  hydrateRoot(rootElement, myApp);
} else {
  // Comportamento normal do React
  createRoot(rootElement).render(myApp);
}
