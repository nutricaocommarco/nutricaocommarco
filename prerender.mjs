import fs from 'fs';
import path from 'path';

// 🧠 Importando o Cérebro Central!
import { posts } from './src/data/posts.js';

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

const rotasDoBlog = posts.map(post => {
  const routePath = post.link.startsWith('/') ? post.link.slice(1) : post.link;
  return {
    path: routePath,
    title: `${post.titulo} | Nutrição com Marco`, 
    image: post.img,
    desc: post.desc,
    // Adicionando a data para o robô do Google saber quando foi publicado
    date: post.data 
  };
});

const routes = [...rotasEstaticas, ...rotasDoBlog];
const distPath = path.resolve('dist');

if (!fs.existsSync(path.join(distPath, 'index.html'))) {
    console.error('❌ ERRO: Arquivo index.html não encontrado na pasta dist. O Prerender parou.');
    process.exit(1); 
}

const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('🚀 Iniciando Robô de SEO, WhatsApp e Google do Marco...');

routes.forEach(route => {
  const routePath = path.join(distPath, route.path);
  if (!fs.existsSync(routePath)) fs.mkdirSync(routePath);

  // Criando o "Cérebro" JSON-LD para o Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": route.title,
    "image": route.image,
    "author": {
      "@type": "Person",
      "name": "Marco Aurélio Jr.",
      "url": "https://www.nutricaocommarco.com.br/sobre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nutrição com Marco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png"
      }
    },
    "description": route.desc,
    "datePublished": route.date || new Date().toISOString().split('T')[0]
  };

  // Injetando tudo no HTML (Tags visuais + JSON-LD)
  const html = template
    .replace('<title>Nutrição com Marco</title>', `<title>${route.title}</title>`)
    .replace('</head>', `
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${route.title}" />
      <meta property="og:image" content="${route.image}" />
      <meta property="og:url" content="https://www.nutricaocommarco.com.br/${route.path}" />
      <meta property="og:description" content="${route.desc}" />
      <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada com sucesso!`);
});
