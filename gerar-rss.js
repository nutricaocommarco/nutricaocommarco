import fs from 'fs';
import path from 'path';

// Importando o Cérebro Central!
// ATENÇÃO: Verifique se o caminho './src/data/posts.js' está correto 
// de acordo com a pasta onde você salvou o arquivo.
import { posts } from './src/data/posts.js';

const gerarXML = () => {
  let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
<channel>
  <title>Nutrição com Marco - Blog</title>
  <link>https://www.nutricaocommarco.com.br</link>
  <description>Artigos sobre metabolismo, fisiologia e composição corporal.</description>
  <language>pt-br</language>`;

  // O script agora percorre a sua lista oficial
  posts.forEach(post => {
    // Monta a URL completa juntando o domínio com o link do post
    const linkCompleto = `https://www.nutricaocommarco.com.br${post.link}`;
    
    // Converte a sua data ("2026-03-24") para o formato exigido pelo RSS (Ex: Tue, 24 Mar 2026...)
    const dataFormatada = new Date(post.data).toUTCString();

    rss += `
  <item>
    <title>${post.titulo}</title>
    <link>${linkCompleto}</link>
    <guid isPermaLink="true">${linkCompleto}</guid>
    <description>${post.desc}</description>
    <media:content url="${post.img}" type="image/jpeg" medium="image" />
    <pubDate>${dataFormatada}</pubDate>
  </item>`;
  });

  rss += `
</channel>
</rss>`;

  return rss;
};

// Salva o arquivo na pasta public para a Vercel hospedar
const publicPath = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

fs.writeFileSync(path.join(publicPath, 'rss.xml'), gerarXML());
console.log('✅ Arquivo RSS atualizado com sucesso a partir do Cérebro Central!');
