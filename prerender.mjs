import fs from 'fs';
import path from 'path';

// 🔗 Link base das imagens no seu GitHub
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// 📝 1. TODAS AS ROTAS ESTÁTICAS (Institucional)
const rotasEstaticas = [
  { 
    path: 'sobre', 
    title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco',
    image: `${githubImgBase}logoN_pingus.png`,
    desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista e especialista em avaliação física ISAK 1.'
  },
  { 
    path: 'certificacoes', 
    title: 'Currículo e Certificações | Nutrição com Marco',
    image: `${githubImgBase}logoN_pingus.png`,
    desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.'
  },
  { 
    path: 'planos', 
    title: 'Planos de Acompanhamento | Nutrição com Marco',
    image: `${githubImgBase}logoN_pingus.png`,
    desc: 'Conheça os níveis de acompanhamento nutricional e avaliação física ISAK 1.'
  },
  { 
    path: 'blog', 
    title: 'Blog de Nutrição e Ciência | Nutrição com Marco',
    image: `${githubImgBase}ImgBlog.jpg`,
    desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.'
  },
  {
    path: 'calculadora-de-gasto-calorico',
    title: 'Calculadora de Gasto Calórico (TDEE e TMB) Inteligente | Nutrição com Marco',
    image: `${githubImgBase}Calculadora-de-Gasto-Calorico.jpg`,
    desc: 'Descubra seu gasto calórico diário e taxa metabólica basal com nossa calculadora inteligente.'
  },
  
  {
    path: 'parceria-inatividade-zero',
    title: 'Avaliação Antropométrica de Precisão - Parceria Inatividade Zero | Nutrição com Marco',
    image: `${githubImgBase}PingusReserva.jpg`,
    desc: 'Agende sua avaliação antropométrica avançada na Academia Inatividade Zero em parceria com Nutrição com Marco e descubra sua composição corporal real.'
  },

  { 
    path: 'confirmacao-av-antropometrica', 
    title: 'Avaliação Agendada! | Nutrição com Marco', 
    image: `${githubImgBase}logoN_pingus.png`, 
    desc: 'Sua avaliação antropométrica foi agendada com sucesso.' 
  }
];

// 📝 2. TODOS OS POSTS DO BLOG (Atualizado)
const postsBlog = [
  { id: 21, link: "/quantas-calorias-gasto-por-dia", img: `${githubImgBase}Blog/QuantasCaloriasGasto.jpg`, titulo: "Quantas Calorias Gasto Por Dia? Pare de Chutar e Entenda o Seu Metabolismo", desc: "Descubra como calcular seu gasto calórico diário. Entenda a sua TMB, fator de atividade, METs e as fórmulas científicas.", data: "2026-04-05" },
  { id: 20, link: "/efeitos-colaterais-da-melatonina", img: `${githubImgBase}Blog/Melatonina.jpg`, titulo: "Efeitos Colaterais da Melatonina: Vicia? Faz Mal?", desc: "Descubra a verdade científica sobre a melatonina: ela vicia? Faz mal? Entenda os riscos psicológicos e a dosagem.", data: "2026-04-01" },
  { id: 19, link: "/o-que-e-ciclo-circadiano", img: `${githubImgBase}Blog/CicloCircadiano.jpg`, titulo: "O Que é Ciclo Circadiano? Relógio Biológico e Emagrecimento", desc: "Como emagrecer e melhorar o sono ajustando seu relógio biológico e hormônios.", data: "2026-03-29" },
  { id: 18, link: "/o-que-sao-simbioticos", img: `${githubImgBase}Blog/Simbioticos.jpg`, titulo: "O que são Simbióticos? A Sinergia Intestinal", desc: "Descubra a união de prebióticos e probióticos para transformar sua flora intestinal.", data: "2026-03-28" },
  { id: 17, link: "/o-que-sao-probioticos", img: `${githubImgBase}Blog/Probioticos.jpg`, titulo: "O que são Probióticos? Lactobacillus e Benefícios", desc: "Para que servem os probióticos no intestino e como eles ajudam sua imunidade.", data: "2026-03-31" },
  { id: 16, link: "/o-que-sao-prebioticos", img: `${githubImgBase}Blog/Prebioticos.jpg`, titulo: "O que são Prebióticos? Alimentos e Benefícios", desc: "Descubra os alimentos ricos em fibras que alimentam sua flora intestinal saudável.", data: "2026-03-27" },
  { id: 15, link: "/o-que-e-fome-emocional", img: `${githubImgBase}Blog/Fome-Emocional-Capa.jpg`, titulo: "O que é Fome Emocional? Como Controlar o Impulso", desc: "Aprenda estratégias práticas como a Escala de Fome para retomar o controle alimentar.", data: "2026-03-27" },
  { id: 14, link: "/tirzepatida-para-que-serve", img: `${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`, titulo: "Tirzepatida: Para Que Serve, Como Funciona e Efeitos", desc: "Entenda o mecanismo GLP-1 e GIP e o potencial deste medicamento na perda de peso.", data: "2026-03-26" },
  { id: 13, link: "/comer-ovo-todo-dia-aumenta-o-colesterol", img: `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.jpg`, titulo: "Comer Ovo Todo Dia Aumenta o Colesterol?", desc: "A verdade científica sobre o impacto do ovo no HDL/LDL e o consumo seguro.", data: "2026-03-25" },
  { id: 12, link: "/retatrutida_o_que_e", img: `${githubImgBase}Blog/retatrutida_molecula.jpg`, titulo: "Retatrutida o que é? A nova fronteira da ciência", desc: "Descubra o novo medicamento agonista triplo e seus resultados no emagrecimento.", data: "2026-03-24" },
  { id: 11, link: "/diabetico_pode_comer_beterraba", img: `${githubImgBase}Blog/beterraba_diabetes.jpg`, titulo: "Diabético pode comer beterraba? O mito desvendado", desc: "Entenda como as fibras da beterraba afetam o diabetes tipo 2.", data: "2026-03-24" },
  { id: 10, link: "/qual_melhor_horario_para_se_pesar", img: `${githubImgBase}Blog/melhor_horario_pesagem.jpg`, titulo: "Qual o melhor horário para se pesar?", desc: "Descubra o melhor horário para se pesar e por que o peso varia tanto no dia.", data: "2026-03-24" },
  { id: 9, link: "/nutricao_para_ironman_703", img: `${githubImgBase}Blog/nutricao_ironman_703.jpg`, titulo: "Nutrição para Ironman 70.3: Guia Completo", desc: "Estratégia nutricional para triatlo de endurance: carboidratos e hidratação.", data: "2026-03-19" },
  { id: 8, link: "/hormonios_da_fome_emagrecimento", img: `${githubImgBase}Blog/Hormfome.jpg`, titulo: "Hormônios da Fome: Grelina e Leptina", desc: "Por que seu corpo luta contra a dieta e como a inflamação afeta o peso.", data: "2026-03-18" },
  { id: 7, link: "/por_que_o_feijao_da_gases", img: `${githubImgBase}Blog/feijao.jpg`, titulo: "Por que o Feijão dá Gases? (E como evitar)", desc: "A ciência dos antinutrientes e como o remolho melhora sua digestão.", data: "2026-03-17" },
  { id: 6, link: "/o_dilema_do_sangue_na_altitude", img: `${githubImgBase}Blog/eritropoietina.jpg`, titulo: "O Dilema do Sangue na Altitude", desc: "Como a eritropoetina afeta a biologia do atleta e a ética no esporte.", data: "2026-03-16" },
  { id: 5, link: "/efeito_sanfona_inflamacao_invisivel", img: `${githubImgBase}Blog/efeito_sanfona.jpg`, titulo: "O Efeito Sanfona e a Inflamação Invisível", desc: "Por que o reganho de peso é perigoso para as suas células de gordura.", data: "2026-03-15" },
  { id: 4, link: "/quantas_frutas_posso_comer", img: `${githubImgBase}Blog/frutose_bananas.jpg`, titulo: "Quantas frutas posso comer por dia?", desc: "Entenda o metabolismo da frutose e a verdade sobre gordura no fígado.", data: "2026-03-14" },
  { id: 3, link: "/vitamina_a_para_que_serve", img: `${githubImgBase}Blog/vitamina_a.jpg`, titulo: "Vitamina A para que serve?", desc: "Como a Vitamina A atua no seu metabolismo muito além da visão.", data: "2026-03-13" },
  { id: 2, link: "/o_que_e_antropometria", img: `${githubImgBase}Blog/O_que_e_antropometria.png`, titulo: "O que é Antropometria?", desc: "A ciência fundamental que estuda as proporções do corpo humano.", data: "2026-03-12" },
  { id: 1, link: "/a_balanca_de_bioimpedancia_e_confiavel", img: `${githubImgBase}Blog/Bia1.jpg`, titulo: "A balança de bioimpedância é confiável?", desc: "Fatores que alteram o resultado da sua avaliação por bioimpedância.", data: "2026-03-11" }
];

// 🔄 3. UNIÃO DAS ROTAS
const rotasDoBlog = postsBlog.map(post => ({
  path: post.link.startsWith('/') ? post.link.slice(1) : post.link,
  title: `${post.titulo} | Nutrição com Marco`,
  image: post.img,
  desc: post.desc,
  date: post.data
}));

const routes = [...rotasEstaticas, ...rotasDoBlog];
const distPath = path.resolve('dist');

// 🛠️ 4. PROCESSO DE GERAÇÃO
const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
console.log('🚀 Iniciando Robô de SEO Total...');

routes.forEach(route => {
  const routePath = path.join(distPath, route.path);
  if (!fs.existsSync(routePath)) fs.mkdirSync(routePath, { recursive: true });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": route.title,
    "image": route.image,
    "author": { "@type": "Person", "name": "Marco Aurélio Jr." },
    "description": route.desc,
    "datePublished": route.date || new Date().toISOString().split('T')[0]
  };

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
      <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada!`);
});
