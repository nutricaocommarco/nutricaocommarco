import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePrerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      // Onde os arquivos finais vão ficar
      staticDir: path.join(__dirname, 'dist'),
      // As rotas que você quer que o WhatsApp reconheça a imagem
      routes: [
        '/', 
        '/blog', 
        '/efeito_sanfona_inflamacao_invisivel', 
        '/hormonios_da_fome_emagrecimento'
      ],
    }),
  ],
})
