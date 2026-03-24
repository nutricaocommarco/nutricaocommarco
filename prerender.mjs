import fs from 'fs';
import path from 'path';

// 🧠 Importando o Cérebro Central!
import { posts } from './src/data/posts.js';

// 1. ROTAS FIXAS (Páginas do site que não são artigos de blog)
const rotasEstaticas = [
  { 
    path: 'sobre', 
    title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista e especialista em avaliação física ISAK 1.'
  },
  { 
    path: 'certificacoes', 
    title: 'Currículo e Certificações | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.'
  },
  { 
    path: 'planos', 
    title: 'Planos de Acompanhamento | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conheça os níveis de acompanhamento nutricional e avaliação física ISAK 1.'
  },
  { 
    path: 'blog', 
    title: 'Blog de Nutrição e Ciência | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/ImgBlog.jpg',
    desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.'
  }
];

// 2. ROTAS DINÂMICAS (Puxando os artigos e transformando no formato que o WhatsApp gosta)
const rotasDoBlog = posts.map(post => {
  // Como o post.link vem com uma barra no começo (ex: "/diabetico_pode_comer_beterraba"),
  // nós removemos essa primeira barra para não bugar a criação de pastas da Vercel.
  const routePath = post.link.startsWith('/') ? post.link.slice(1) : post.link;

  return {
    path: routePath,
    title: `${post.titulo} | Nutrição com Marco`, // Adicionamos sua marca no final
    image: post.img,
    desc: post.desc
  };
});

// 3. JUNTANDO TUDO (Fixas + Artigos)
const routes = [...rotasEstaticas, ...rotasDoBlog];

const distPath = path.resolve('dist');

// Se o build falhar porque não achou o dist/index.html, o script avisa no log
if (!fs.existsSync(path.join(distPath, 'index.html'))) {
    console.error('❌ ERRO: Arquivo index.html não encontrado na pasta dist. O Prerender parou.');
    process.exit(1); 
}

const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('🚀 Iniciando Robô de SEO e WhatsApp do Marco...');

routes.forEach(route => {
  const routePath = path.join(distPath, route.path);
  if (!fs.existsSync(routePath)) fs.mkdirSync(routePath);

  // Injetamos as tags do WhatsApp direto no HTML "congelado"
  const html = template
    .replace('<title>Nutrição com Marco</title>', `<title>${route.title}</title>`)
    .replace('</head>', `
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${route.title}" />
      <meta property="og:image" content="${route.image}" />
      <meta property="og:url" content="https://www.nutricaocommarco.com.br/${route.path}" />
      <meta property="og:description" content="${route.desc}" />
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada para o WhatsApp e Google!`);
});
