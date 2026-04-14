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
  },
  {
    path: 'calculadora-de-gasto-calorico',
    title: 'Calculadora de Gasto Calórico (TDEE e TMB) Inteligente | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Calculadora-de-Gasto-Calorico.jpg',
    desc: 'Descubra seu gasto calórico diário e taxa metabólica basal com nossa calculadora inteligente. Fórmulas de Mifflin, Cunningham e Tinsley adaptadas ao seu perfil.'
  },
  {
    path: 'parceria-inatividade-zero',
    title: 'Agende sua Avaliação Antropométrica Grátis - Parceria Inatividade Zero | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/PingusReserva.jpg',
    desc: 'Agende sua avaliação antropométrica gratuita na Academia Inatividade Zero (Rua Rio Sangrador, 260) em parceria com Nutrição com Marco. Descubra sua composição corporal real com precisão ISAK.'
  }
];

const rotasDoBlog = posts.map(post => {
  const routePath = post.link.startsWith('/') ? post.link.slice(1) : post.link;
  return {
    path: routePath,
    title: `${post.titulo} | Nutrição com Marco`, 
    image: post.img,
    desc: post.desc,
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
  if (!fs.existsSync(routePath)) fs.mkdirSync(routePath, { recursive: true });

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

  // 👇 O SEGREDO ESTÁ NESTA PARTE ABAIXO 👇
  // Aqui estamos criando o HTML final que o WhatsApp lê.
  const html = template
    .replace('<title>Nutrição com Marco</title>', `<title>${route.title}</title>`)
    .replace('</head>', `
      <meta name="description" content="${route.desc}" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${route.title}" />
      <meta property="og:description" content="${route.desc}" />
      <meta property="og:image" content="${route.image}" />
      <meta property="og:image:secure_url" content="${route.image}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content="https://www.nutricaocommarco.com.br/${route.path}" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada com sucesso!`);
});
