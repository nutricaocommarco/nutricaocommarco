import fs from 'fs';
import path from 'path';

// 🔗 Link base das imagens no seu GitHub
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// ==========================================
// 🧠 FUNÇÕES GERADORAS DE SCHEMAS AVANÇADOS
// ==========================================
function getMedicalSchema(titulo, url, entidades, especialidade = "Dietetics") {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": titulo,
    "url": url,
    "about": entidades.map(entidade => ({ "@type": "MedicalEntity", "name": entidade })),
    "specialty": especialidade
  };
}

function getBreadcrumbSchema(nomePagina, url) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.nutricaocommarco.com.br/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.nutricaocommarco.com.br/blog" },
      { "@type": "ListItem", "position": 3, "name": nomePagina, "item": url }
    ]
  };
}

// 📝 1. TODAS AS ROTAS ESTÁTICAS
const rotasEstaticas = [
  { path: 'planilha-de-avaliacao-antropometrica-marco-aurelio', title: 'Planilha de Avaliação Antropométrica Inteligente PRO | Nutrição com Marco', image: `${githubImgBase}PlanilhaImagem/Capa.JPG`, desc: 'Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.' },
  { path: 'planilha', title: 'Planilha Antropométrica Inteligente PRO | Nutrição com Marco', image: `${githubImgBase}PlanilhaImagem/Capa.JPG`, desc: 'Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.' },
  { path: 'sobre', title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista e especialista em avaliação física ISAK 1.' },
  { path: 'certificacoes', title: 'Currículo e Certificações | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.' },
  { path: 'planos', title: 'Planos de Acompanhamento | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça os níveis de acompanhamento nutricional e avaliação física ISAK 1.' },
  { path: 'blog', title: 'Blog de Nutrição e Ciência | Nutrição com Marco', image: `${githubImgBase}ImgBlog.jpg`, desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.' },
  { path: 'calculadora-de-gasto-calorico', title: 'Calculadora de Gasto Calórico (TDEE e TMB) Inteligente | Nutrição com Marco', image: `${githubImgBase}Calculadora-de-Gasto-Calorico.jpg`, desc: 'Descubra seu gasto calórico diário e taxa metabólica basal com nossa calculadora inteligente.' },
  { path: 'parceria-inatividade-zero', title: 'Avaliação Antropométrica de Precisão - Parceria Inatividade Zero | Nutrição com Marco', image: `${githubImgBase}PingusReserva.jpg`, desc: 'Agende sua avaliação antropométrica avançada na Academia Inatividade Zero em parceria com Nutrição com Marco e descubra sua composição corporal real.' }
];

// 📝 2. TODOS OS POSTS DO BLOG
const postsBlog = [
  { 
    id: 27, link: "/o-que-e-dieta-low-carb", img: `${githubImgBase}Blog/LowCarb_Capa.jpg`, titulo: "Dieta Low Carb: O Que É, Erros Fatais e Calculadora Completa", desc: "Aprenda o que é a dieta low carb de verdade. Descubra a diferença para a cetogênica, os mitos da gordura e monte seu prato com nossa Calculadora TACO.", data: "2026-07-15",
    schemasExtra: [getMedicalSchema("Dieta Low Carb e Impactos Metabólicos", "https://www.nutricaocommarco.com.br/o-que-e-dieta-low-carb", ["Dieta Low-Carb", "Metabolismo de Carboidratos", "Sensibilidade à Insulina"])]
  },
  { 
    id: 26, link: "/o-que-e-dieta-cetogenica", img: `${githubImgBase}Blog/DietaCetogenica_Capa.jpg`, titulo: "Dieta Cetogênica Explicada: Como Entrar em Cetose e Emagrecer", desc: "O que a ciência diz sobre a Dieta Cetogênica? Entenda como o seu corpo usa a gordura como combustível e os perigos de fazer errado.", data: "2026-07-14",
    schemasExtra: [getMedicalSchema("Dieta Cetogênica e Emagrecimento", "https://www.nutricaocommarco.com.br/o-que-e-dieta-cetogenica", ["Dieta Cetogênica", "Cetose", "Metabolismo de Gorduras"])]
  },
  { 
    id: 25, link: "/o-que-e-jejum-intermitente", img: `${githubImgBase}Blog/JejumIntermitente_Capa.jpg`, titulo: "Jejum Intermitente Funciona? A Verdade Biológica e os Protocolos", desc: "Muito além de passar fome: descubra o que é o jejum intermitente, como ele destrava o metabolismo lento e se ele emagrece mais que a dieta tradicional.", data: "2026-07-12",
    schemasExtra: [getMedicalSchema("Efeitos do Jejum Intermitente", "https://www.nutricaocommarco.com.br/o-que-e-jejum-intermitente", ["Jejum Intermitente", "Metabolismo", "Perda de Peso"])]
  },
  { id: 24, link: "/melhor-horario-para-tomar-ferro", img: `${githubImgBase}Blog/HorarioFerro.jpg`, titulo: "O Único Horário Certo Para Tomar Ferro (E Curar a Anemia Rápido)", desc: "Você está tomando ferro do jeito errado? Descubra o horário ideal para a absorção máxima, os sintomas ocultos da anemia e o que bloqueia o nutriente.", data: "2026-04-26" },
  { id: 23, link: "/percentual-gordura-feminino-ideal", img: `${githubImgBase}Blog/PercentualGorduraFeminino_Capa.jpg`, titulo: "Qual é o Percentual de Gordura Feminino Ideal e Saudável?", desc: "Pare de olhar apenas para a balança. Entenda as tabelas reais de referência e descubra qual é o percentual de gordura feminino ideal para a sua idade e saúde.", data: "2026-04-24" },
  { id: 21, link: "/quantas-calorias-gasto-por-dia", img: `${githubImgBase}Blog/QuantasCaloriasGasto.jpg`, titulo: "Quantas Calorias Gasto Por Dia? Calcule Sua TMB Exata Aqui", desc: "Pare de chutar a sua dieta. Use nossa calculadora inteligente para descobrir quantas calorias seu corpo realmente queima por dia (TMB e Fator de Atividade).", data: "2026-04-05" }
];

// 🔄 3. UNIÃO DAS ROTAS
const rotasDoBlog = postsBlog.map(post => ({
  path: post.link.startsWith('/') ? post.link.slice(1) : post.link,
  title: `${post.titulo} | Nutrição com Marco`,
  image: post.img || `${githubImgBase}logoN_pingus.png`,
  desc: post.desc,
  date: post.data,
  schemasExtra: post.schemasExtra || [] 
}));

const routes = [...rotasEstaticas, ...rotasDoBlog];
const distPath = path.resolve('dist');
const baseTemplate = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('🚀 Iniciando Robô de SEO Físico e Caça-Fantasmas...');

routes.forEach(route => {
  const safePath = route.path.startsWith('/') ? route.path.slice(1) : route.path;
  
  // A Vercel e o Prerender podem gerar as rotas de 2 formas:
  // 1. dist/nome-da-rota.html (O Culpado pelo F5 ruim)
  // 2. dist/nome-da-rota/index.html 
  const fileAsHtml = path.join(distPath, `${safePath}.html`);
  const dirAsIndex = path.join(distPath, safePath, 'index.html');
  
  let targetFile = '';
  let fileContent = '';

  // Procura qual o arquivo o Prerender gerou e ataca ELE.
  if (fs.existsSync(fileAsHtml)) {
    targetFile = fileAsHtml;
    fileContent = fs.readFileSync(fileAsHtml, 'utf-8');
  } else if (fs.existsSync(dirAsIndex)) {
    targetFile = dirAsIndex;
    fileContent = fs.readFileSync(dirAsIndex, 'utf-8');
  } else {
    fs.mkdirSync(path.join(distPath, safePath), { recursive: true });
    targetFile = dirAsIndex;
    fileContent = baseTemplate;
  }

  const urlAbsoluta = `https://www.nutricaocommarco.com.br/${safePath}`;
  const isBlog = safePath !== 'sobre' && safePath !== 'certificacoes' && safePath !== 'planos' && !safePath.includes('planilha');

  // SCHEMAS
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": isBlog ? "BlogPosting" : "WebPage",
    "headline": route.title,
    "image": route.image,
    "author": { "@type": "Person", "name": "Marco Aurélio Jr." },
    "description": route.desc,
    "datePublished": route.date || new Date().toISOString().split('T')[0]
  };

  const breadcrumbSchema = getBreadcrumbSchema(route.title, urlAbsoluta);

  let schemasHTML = `
      <script type="application/ld+json">${JSON.stringify(baseSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  `;

  if (route.schemasExtra && route.schemasExtra.length > 0) {
    route.schemasExtra.forEach(schema => {
      schemasHTML += `<script type="application/ld+json">${JSON.stringify(schema)}</script>\n`;
    });
  }

  // EXTERMINA TAGS ANTIGAS CHUMBADAS PELO PRERENDER
  let cleanHtml = fileContent
    .replace(/<title>.*?<\/title>/gi, '') 
    .replace(/<meta name="description"([^>]+)?>/gi, '') 
    .replace(/<meta property="og:.*?"([^>]+)?>/gi, '') 
    .replace(/<link rel="canonical"([^>]+)?>/gi, ''); 

  // INJETA AS TAGS CORRETAS ABSOLUTAS NO ARQUIVO FÍSICO
  const tagsCorretas = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc}" />
    <link rel="canonical" href="${urlAbsoluta}" />
    <meta property="og:type" content="${isBlog ? 'article' : 'website'}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.desc}" />
    <meta property="og:image" content="${route.image}" />
    <meta property="og:url" content="${urlAbsoluta}" />
    ${schemasHTML}
  `;

  const html = cleanHtml.replace('</head>', `${tagsCorretas}</head>`);

  fs.writeFileSync(targetFile, html);
  console.log(`✅ [${safePath}] Blindado! Modificamos o arquivo: ${path.basename(targetFile)}`);
});
