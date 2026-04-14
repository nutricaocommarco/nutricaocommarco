import fs from 'fs';
import path from 'path';

// 🔗 Link base das imagens no seu GitHub
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// 📝 1. LISTA DE POSTS (Copiada da sua central de dados)
const posts = [
  { id: 21, link: "/quantas-calorias-gasto-por-dia", img: `${githubImgBase}Blog/QuantasCaloriasGasto.jpg`, titulo: "Quantas Calorias Gasto Por Dia? Pare de Chutar e Entenda o Seu Metabolismo", desc: "Descubra como calcular seu gasto calórico diário. Entenda a sua Taxa Metabólica Basal (TMB), fator de atividade, METs e as fórmulas de Mifflin e Cunningham.", data: "2026-04-05" },
  { id: 20, link: "/efeitos-colaterais-da-melatonina", img: `${githubImgBase}Blog/Melatonina.jpg`, titulo: "Efeitos Colaterais da Melatonina: Vicia? Faz Mal? A Verdade Científica", desc: "Descubra a verdade científica sobre a melatonina: ela vicia? Faz mal? Entenda os efeitos colaterais, riscos psicológicos e como dosar corretamente.", data: "2026-04-01" },
  { id: 19, link: "/o-que-e-ciclo-circadiano", img: `${githubImgBase}Blog/CicloCircadiano.jpg`, titulo: "O Que é Ciclo Circadiano? Relógio Biológico e Emagrecimento", desc: "Guia completo sobre ciclo circadiano: como emagrecer, melhorar o sono, horários corretos das refeições e controle hormonal.", data: "2026-03-29" },
  { id: 18, link: "/o-que-sao-simbioticos", img: `${githubImgBase}Blog/Simbioticos.jpg`, titulo: "O que são Simbióticos? A Sinergia Intestinal", desc: "Descubra o que são os alimentos simbióticos, como a união de prebióticos e probióticos transforma a sua flora.", data: "2026-03-28" },
  { id: 17, link: "/o-que-sao-probioticos", img: `${githubImgBase}Blog/Probioticos.jpg`, titulo: "O que são Probióticos? Lactobacillus e Benefícios", desc: "Descubra o que são probióticos e Lactobacillus, para que servem no intestino e seus benefícios para a imunidade.", data: "2026-03-31" },
  { id: 16, link: "/o-que-sao-prebioticos", img: `${githubImgBase}Blog/Prebioticos.jpg`, titulo: "O que são Prebióticos? Alimentos, Benefícios e Para Que Servem", desc: "Descubra o que são prebióticos, para que servem no seu intestino e quais alimentos são ricos em FOS e inulina.", data: "2026-03-27" },
  { id: 15, link: "/o-que-e-fome-emocional", img: `${githubImgBase}Blog/Fome-Emocional-Capa.jpg`, titulo: "O que é Fome Emocional? Como Identificar e Controlar o Impulso", desc: "Descubra os sintomas da fome emocional, entenda o ciclo da compulsão e aprenda estratégias práticas para retomar o controle.", data: "2026-03-27" },
  { id: 14, link: "/tirzepatida-para-que-serve", img: `${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`, titulo: "Tirzepatida: Para Que Serve, Como Funciona e Efeitos", desc: "Descubra para que serve a Tirzepatida, entenda seu mecanismo de ação duplo (GLP-1 e GIP) e o potencial na perda de peso.", data: "2026-03-26" },
  { id: 13, link: "/comer-ovo-todo-dia-aumenta-o-colesterol", img: `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.jpg`, titulo: "Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Científica", desc: "Comer ovo todo dia aumenta o colesterol? Descubra a verdade científica e quantos ovos você pode consumir com segurança.", data: "2026-03-25" },
  { id: 12, link: "/retatrutida_o_que_e", img: `${githubImgBase}Blog/retatrutida_molecula.jpg`, titulo: "Retatrutida o que é? A nova fronteira da ciência", desc: "Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon).", data: "2026-03-24" },
  { id: 11, link: "/diabetico_pode_comer_beterraba", img: `${githubImgBase}Blog/beterraba_diabetes.jpg`, titulo: "Diabético pode comer beterraba? O mito desvendado", desc: "Descubra se diabéticos podem comer beterraba. Entenda como as fibras reduzem a carga glicêmica.", data: "2026-03-24" },
  { id: 10, link: "/qual_melhor_horario_para_se_pesar", img: `${githubImgBase}Blog/melhor_horario_pesagem.jpg`, titulo: "Qual o melhor horário para se pesar?", desc: "Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite.", data: "2026-03-24" },
  { id: 9, link: "/nutricao_para_ironman_703", img: `${githubImgBase}Blog/nutricao_ironman_703.jpg`, titulo: "Nutrição para Ironman 70.3: Guia Completo", desc: "Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos e suplementação.", data: "2026-03-19" },
  { id: 8, link: "/hormonios_da_fome_emagrecimento", img: `${githubImgBase}Blog/Hormfome.jpg`, titulo: "Hormônios da Fome: Por que seu corpo luta contra a dieta?", desc: "Entenda como a Grelina e a Leptina controlam seu apetite e por que a ciência foca na inflamação celular.", data: "2026-03-18" },
  { id: 7, link: "/por_que_o_feijao_da_gases", img: `${githubImgBase}Blog/feijao.jpg`, titulo: "Por que o Feijão dá Gases? (E como evitar)", desc: "Descubra a ciência por trás dos antinutrientes e como o remolho pode salvar sua digestão.", data: "2026-03-17" },
  { id: 6, link: "/o_dilema_do_sangue_na_altitude", img: `${githubImgBase}Blog/eritropoietina.jpg`, titulo: "O Dilema do Sangue na Altitude", desc: "Como o hormônio eritropoetina e a transfusão de hemácias afetam a biologia do atleta.", data: "2026-03-16" },
  { id: 5, link: "/efeito_sanfona_inflamacao_invisivel", img: `${githubImgBase}Blog/efeito_sanfona.jpg`, titulo: "O Efeito Sanfona e a Inflamação Invisível", desc: "Por que o reganho de peso é tão perigoso e como a memória das suas células de gordura dificulta o emagrecimento.", data: "2026-03-15" },
  { id: 4, link: "/quantas_frutas_posso_comer", img: `${githubImgBase}Blog/frutose_bananas.jpg`, titulo: "Quantas frutas posso comer por dia?", desc: "Entenda o metabolismo da frutose e descubra a verdade sobre a fruta e a gordura no fígado.", data: "2026-03-14" },
  { id: 3, link: "/vitamina_a_para_que_serve", img: `${githubImgBase}Blog/vitamina_a.jpg`, titulo: "Vitamina A para que serve?", desc: "Descubra como a Vitamina A atua no seu metabolismo muito além da visão.", data: "2026-03-13" },
  { id: 2, link: "/o_que_e_antropometria", img: `${githubImgBase}Blog/O_que_e_antropometria.png`, titulo: "O que é Antropometria?", desc: "A Antropometria é uma ciência fundamental que estuda as proporções do corpo humano.", data: "2026-03-12" },
  { id: 1, link: "/a_balanca_de_bioimpedancia_e_confiavel", img: `${githubImgBase}Blog/Bia1.jpg`, titulo: "A balança de bioimpedância é confiável?", desc: "Entenda se a balança de bioimpedância é confiável e os fatores que alteram o resultado.", data: "2026-03-11" }
];

// 🏠 2. ROTAS ESTÁTICAS (Fixas)
const rotasEstaticas = [
  { path: 'sobre', title: 'Sobre Marco Aurélio Jr.', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista.' },
  { path: 'certificacoes', title: 'Currículo e Certificações', image: `${githubImgBase}logoN_pingus.png`, desc: 'Trajetória técnica e certificações ISAK.' },
  { path: 'calculadora-de-gasto-calorico', title: 'Calculadora de Gasto Calórico Inteligente', image: `${githubImgBase}Calculadora-de-Gasto-Calorico.jpg`, desc: 'Descubra seu gasto calórico diário e TMB com precisão.' }
];

// 🔄 3. UNIÃO DAS ROTAS
const rotasDoBlog = posts.map(post => ({
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
console.log('🚀 Iniciando Robô de SEO e WhatsApp...');

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
      <meta property="og:url" content="https://www.nutricaocommarco.com.br/${route.path}" />
      <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada!`);
});
