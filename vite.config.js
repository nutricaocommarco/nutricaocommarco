import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePrerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      // Define a pasta de saída (para o Vite é sempre 'dist')
      staticDir: path.join(__dirname, 'dist'),
      
      // Lista de páginas para pré-renderizar
      routes: [
        '/', 
        '/blog', 
        '/efeito_sanfona_inflamacao_invisivel', 
        '/hormonios_da_fome_emagrecimento',
        '/quantas_frutas_posso_comer',
        '/vitamina_a_para_que_serve',
        '/o_que_e_antropometria',
        '/a_balanca_de_bioimpedancia_e_confiavel',
        '/o_dilema_do_sangue_na_altitude',
        '/por_que_o_feijao_da_gases'
      ],
    }),
  ],
})
