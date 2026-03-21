import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Arquivo limpo para não dar erro de módulo não encontrado
export default defineConfig({
  plugins: [react()],
})
