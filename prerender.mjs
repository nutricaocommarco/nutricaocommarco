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

// 📝 1. TODAS AS ROTAS ESTÁTICAS E DE SISTEMA
const rotasEstaticas = [
  { path: 'planilha-de-avaliacao-antropometrica-marco-aurelio', title: 'Planilha de Avaliação Antropométrica Inteligente PRO | Nutrição com Marco', image: `${githubImgBase}PlanilhaImagem/Capa.JPG`, desc: 'Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.' },
  { path: 'planilha', title: 'Planilha Antropométrica Inteligente PRO | Nutrição com Marco', image: `${githubImgBase}PlanilhaImagem/Capa.JPG`, desc: 'Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.' },
  { path: 'sobre', title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista e especialista em avaliação física ISAK 1.' },
  { path: 'certificacoes', title: 'Currículo e Certificações | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.' },
  { path: 'planos', title: 'Planos de Acompanhamento | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Conheça os níveis de acompanhamento nutricional e avaliação física ISAK 1.' },
  { path: 'blog', title: 'Blog de Nutrição e Ciência | Nutrição com Marco', image: `${githubImgBase}ImgBlog.jpg`, desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.' },
  { path: 'calculadora-de-gasto-calorico', title: 'Calculadora de Gasto Calórico (TDEE e TMB) Inteligente | Nutrição com Marco', image: `${githubImgBase}Calculadora-de-Gasto-Calorico.jpg`, desc: 'Descubra seu gasto calórico diário e taxa metabólica basal com nossa calculadora inteligente.' },
  { path: 'parceria-inatividade-zero', title: 'Avaliação Antropométrica de Precisão - Parceria Inatividade Zero | Nutrição com Marco', image: `${githubImgBase}PingusReserva.jpg`, desc: 'Agende sua avaliação antropométrica avançada na Academia Inatividade Zero em parceria com Nutrição com Marco e descubra sua composição corporal real.' },
  { path: 'confirmacao-av-antropometrica', title: 'Avaliação Agendada! | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Sua avaliação antropométrica foi agendada com sucesso.' },
  { path: 'confirmacao-pendente', title: 'Quase lá! Confirme seu e-mail | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Falta apenas um clique para confirmar sua inscrição e receber nossos conteúdos exclusivos.' },
  { path: 'inscricao-confirmada', title: 'Inscrição Confirmada! | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Tudo pronto! Você agora faz parte da nossa comunidade de nutrição e antropometria.' },
  { path: 'admin-pingus-email', title: 'Painel Administrativo | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.png`, desc: 'Acesso restrito.' }
];

// 📝 2. TODOS OS POSTS DO BLOG (COM SCHEMAS)
const postsBlog = [
  { 
    id: 27, link: "/o-que-e-dieta-low-carb", img: `${githubImgBase}Blog/LowCarb_Capa.jpg`, titulo: "Dieta Low Carb: O Que É, Erros Fatais e Calculadora Completa", desc: "Aprenda o que é a dieta low carb de verdade. Descubra a diferença para a cetogênica, os mitos da gordura e monte seu prato com nossa Calculadora TACO.", data: "2026-07-15",
    schemasExtra: [
      getMedicalSchema("Dieta Low Carb e Impactos Metabólicos", "https://www.nutricaocommarco.com.br/o-que-e-dieta-low-carb", ["Dieta Low-Carb", "Metabolismo de Carboidratos", "Sensibilidade à Insulina"])
    ]
  },
  { 
    id: 26, link: "/o-que-e-dieta-cetogenica", img: `${githubImgBase}Blog/DietaCetogenica_Capa.jpg`, titulo: "Dieta Cetogênica Explicada: Como Entrar em Cetose e Emagrecer", desc: "O que a ciência diz sobre a Dieta Cetogênica? Entenda como o seu corpo usa a gordura como combustível e os perigos de fazer errado.", data: "2026-07-14",
    schemasExtra: [
      getMedicalSchema("Dieta Cetogênica e Emagrecimento", "https://www.nutricaocommarco.com.br/o-que-e-dieta-cetogenica", ["Dieta Cetogênica", "Cetose", "Metabolismo de Gorduras"])
    ]
  },
  { 
    id: 25, link: "/o-que-e-jejum-intermitente", img: `${githubImgBase}Blog/JejumIntermitente_Capa.jpg`, titulo: "Jejum Intermitente Funciona? A Verdade Biológica e os Protocolos", desc: "Muito além de passar fome: descubra o que é o jejum intermitente, como ele destrava o metabolismo lento e se ele emagrece mais que a dieta tradicional.", data: "2026-07-12",
    schemasExtra: [
      getMedicalSchema("Efeitos do Jejum Intermitente", "https://www.nutricaocommarco.com.br/o-que-e-jejum-intermitente", ["Jejum Intermitente", "Metabolismo", "Perda de Peso"])
    ]
  },
  { id: 24, link: "/melhor-horario-para-tomar-ferro", img: `${githubImgBase}Blog/HorarioFerro.jpg`, titulo: "O Único Horário Certo Para Tomar Ferro (E Curar a Anemia Rápido)", desc: "Você está tomando ferro do jeito errado? Descubra o horário ideal para a absorção máxima, os sintomas ocultos da anemia e o que bloqueia o nutriente.", data: "2026-04-26" },
  { id: 23, link: "/percentual-gordura-feminino-ideal", img: `${githubImgBase}Blog/PercentualGorduraFeminino_Capa.jpg`, titulo: "Qual é o Percentual de Gordura Feminino Ideal e Saudável?", desc: "Pare de olhar apenas para a balança. Entenda as tabelas reais de referência e descubra qual é o percentual de gordura feminino ideal para a sua idade e saúde.", data: "2026-04-24" },
  { id: 22, link: "/o-que-comer-na-tpm", img: `${githubImgBase}Blog/TPM.jpg`, titulo: "O Que Comer na TPM Para Controlar o Doce (Sem Culpa)", desc: "A vontade de doce na TPM não é falta de foco, é biologia pura! Entenda como hackear o metabolismo feminino e o que comer nesses dias difíceis.", data: "2026-04-20" },
  { id: 21, link: "/quantas-calorias-gasto-por-dia", img: `${githubImgBase}Blog/QuantasCaloriasGasto.jpg`, titulo: "Quantas Calorias Gasto Por Dia? Calcule Sua TMB Exata Aqui", desc: "Pare de chutar a sua dieta. Use nossa calculadora inteligente para descobrir quantas calorias seu corpo realmente queima por dia (TMB e Fator de Atividade).", data: "2026-04-05" },
  { id: 20, link: "/efeitos-colaterais-da-melatonina", img: `${githubImgBase}Blog/Melatonina.jpg`, titulo: "Melatonina Vicia? A Verdade Sobre os Efeitos Colaterais", desc: "Você toma melatonina para dormir? Descubra a verdade científica sobre a dosagem correta, os riscos psicológicos e se ela realmente pode te viciar.", data: "2026-04-01" },
  { id: 19, link: "/o-que-e-ciclo-circadiano", img: `${githubImgBase}Blog/CicloCircadiano.jpg`, titulo: "Ciclo Circadiano: Como Emagrecer Dormindo (O Segredo Hormonal)", desc: "Dormir mal trava o seu emagrecimento. Descubra o que é o Ciclo Circadiano, como ajustar seu relógio biológico e controlar a fome crônica.", data: "2026-03-29" },
  { id: 18, link: "/o-que-sao-simbioticos", img: `${githubImgBase}Blog/Simbioticos.jpg`, titulo: "Simbióticos: O Que São e Como Eles Curam o Intestino Inflamado", desc: "A fórmula de ouro: descubra como a união exata entre prebióticos e probióticos (Simbióticos) pode transformar a sua digestão e a saúde da flora intestinal.", data: "2026-03-28" },
  { id: 17, link: "/o-que-sao-probioticos", img: `${githubImgBase}Blog/Probioticos.jpg`, titulo: "Probióticos: Para Que Servem e Qual a Relação com a Imunidade", desc: "Não compre iogurte sem ler isso! Entenda de uma vez o que são os probióticos, o poder dos lactobacillus e os reais benefícios para o seu intestino.", data: "2026-03-31" },
  { id: 16, link: "/o-que-sao-prebioticos", img: `${githubImgBase}Blog/Prebioticos.jpg`, titulo: "Prebióticos Explicados: Os Alimentos Que Limpam o Intestino", desc: "Seu intestino é seu segundo cérebro. Descubra a lista de alimentos fibrosos (prebióticos) essenciais que alimentam e fortalecem as bactérias boas do corpo.", data: "2026-03-27" },
  { id: 15, link: "/o-que-e-fome-emocional", img: `${githubImgBase}Blog/Fome-Emocional-Capa.jpg`, titulo: "Fome Emocional: Como Parar de Descontar a Ansiedade na Comida", desc: "Você come por fome ou por estresse? Aprenda técnicas reais da nutrição comportamental e use a 'Escala de Fome' para vencer a compulsão alimentar.", data: "2026-03-27" },
  { 
    id: 14, link: "/tirzepatida-para-que-serve", img: `${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`, titulo: "Tirzepatida: Para Que Serve e Os Efeitos Colaterais (Atualizado)", desc: "Mounjaro (Tirzepatida) no emagrecimento: entenda a fundo como atua o duplo mecanismo GLP-1 e GIP e descubra os reais efeitos no controle do apetite.", data: "2026-03-26",
    schemasExtra: [
      getMedicalSchema("Análise da Tirzepatida no Emagrecimento", "https://www.nutricaocommarco.com.br/tirzepatida-para-que-serve", ["Tirzepatida", "Mounjaro", "Tratamento de Obesidade"], "Endocrinology")
    ]
  },
  { id: 13, link: "/comer-ovo-todo-dia-aumenta-o-colesterol", img: `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.jpg`, titulo: "Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Médica", desc: "O maior mito da nutrição revelado. Veja o que a ciência atual comprova sobre o consumo diário de ovos, a gema e o real impacto no colesterol HDL e LDL.", data: "2026-03-25" },
  { id: 12, link: "/retatrutida_o_que_e", img: `${githubImgBase}Blog/retatrutida_molecula.jpg`, titulo: "Retatrutida: O Agonista Triplo Que Está Revolucionando o Emagrecimento", desc: "Conheça a Retatrutida, o novo medicamento em testes que atua em 3 hormônios simultâneos. Veja as promessas científicas para a obesidade.", data: "2026-03-24" },
  { id: 11, link: "/diabetico_pode_comer_beterraba", img: `${githubImgBase}Blog/beterraba_diabetes.jpg`, titulo: "Diabético Pode Comer Beterraba? O Fim do Mito do Açúcar", desc: "Eles disseram que a beterraba era um veneno para diabéticos. Entenda o verdadeiro impacto do índice glicêmico e por que você não precisa ter medo.", data: "2026-03-24" },
  { id: 10, link: "/qual_melhor_horario_para_se_pesar", img: `${githubImgBase}Blog/melhor_horario_pesagem.jpg`, titulo: "O Único Horário Certo Para se Pesar (E Por Que a Balança Mente)", desc: "Seu peso varia até 2kg por dia! Descubra o melhor horário para se pesar, as armadilhas da retenção de líquidos e como não se frustrar com a balança.", data: "2026-03-24" },
  { id: 9, link: "/nutricao_para_ironman_703", img: `${githubImgBase}Blog/nutricao_ironman_703.jpg`, titulo: "Nutrição para Ironman 70.3: Guia de Carboidratos e Hidratação", desc: "O seu corpo não aguenta um meio Ironman sem estratégia. Veja o guia técnico de nutrição esportiva, géis de carboidrato e eletrólitos para triatletas.", data: "2026-03-19" },
  { id: 8, link: "/hormonios_da_fome_emagrecimento", img: `${githubImgBase}Blog/Hormfome.jpg`, titulo: "Grelina e Leptina: Como Hackear os Hormônios da Fome", desc: "Por que você volta a engordar? Descubra como a Grelina e a Leptina comandam o seu cérebro e veja o que fazer para vencer a inflamação e a fome crônica.", data: "2026-03-18" },
  { id: 7, link: "/por_que_o_feijao_da_gases", img: `${githubImgBase}Blog/feijao.jpg`, titulo: "Por Que o Feijão Dá Gases? O Truque Químico Para Evitar", desc: "Pare de sofrer com estômago estufado. A culpa é dos antinutrientes! Aprenda o método correto do remolho para neutralizar o feijão e melhorar a digestão.", data: "2026-03-17" },
  { id: 6, link: "/o_dilema_do_sangue_na_altitude", img: `${githubImgBase}Blog/eritropoietina.jpg`, titulo: "O Dilema do Sangue na Altitude: Eritropoetina e Doping", desc: "Por que atletas treinam nas montanhas? Conheça a biologia extrema da Eritropoetina (EPO), o limite entre o preparo físico natural e a fraude esportiva.", data: "2026-03-16" },
  { id: 5, link: "/efeito_sanfona_inflamacao_invisivel", img: `${githubImgBase}Blog/efeito_sanfona.jpg`, titulo: "Efeito Sanfona: O Perigo da Inflamação Invisível no Corpo", desc: "Engordar e emagrecer rapidamente destrói suas células. Descubra a verdade silenciosa por trás do efeito sanfona e como frear a inflamação celular.", data: "2026-03-15" },
  { 
    id: 4, link: "/quantas_frutas_posso_comer", img: `${githubImgBase}Blog/frutose_bananas.jpg`, titulo: "Quantas Frutas Posso Comer Por Dia? (O Perigo da Frutose)", desc: "Fruta à vontade faz mal? Entenda a bioquímica da frutose, o risco de gordura no fígado (esteatose) e qual a porção diária ideal para emagrecer.", data: "2026-03-14",
    schemasExtra: [
      getMedicalSchema("Metabolismo da Frutose e Esteatose", "https://www.nutricaocommarco.com.br/quantas_frutas_posso_comer", ["Frutose", "Esteatose Hepática", "Nutrição Clínica"])
    ]
  },
  { id: 3, link: "/vitamina_a_para_que_serve", img: `${githubImgBase}Blog/vitamina_a.jpg`, titulo: "Vitamina A Para Que Serve? Benefícios Além da Visão", desc: "A deficiência que ninguém nota. Descubra como a Vitamina A age silenciosamente no seu sistema imune, na saúde da pele e no combate aos radicais livres.", data: "2026-03-13" },
  { id: 2, link: "/o_que_e_antropometria", img: `${githubImgBase}Blog/O_que_e_antropometria.png`, titulo: "O Que é Antropometria? Muito Além do Peso da Balança", desc: "Entenda por que a antropometria (ISAK) é a única ferramenta confiável para avaliar a saúde, mapeando ossos, gordura, músculos e composição corporal exata.", data: "2026-03-12" },
  { id: 1, link: "/a_balanca_de_bioimpedancia_e_confiavel", img: `${githubImgBase}Blog/Bia1.jpg`, titulo: "Balança de Bioimpedância é Confiável? O Que Não Te Contaram", desc: "A sua balança cara pode estar mentindo para você. Descubra como a hidratação, bexiga cheia e até o estresse mascaram os resultados da sua bioimpedância.", data: "2026-03-11" }
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

// 🛠️ 4. PROCESSO DE GERAÇÃO
const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('🚀 Iniciando Robô de SEO Focado APENAS em Schemas (Modo Exterminador)...');

routes.forEach(route => {
  const routePath = path.join(distPath, route.path);
  if (!fs.existsSync(routePath)) fs.mkdirSync(routePath, { recursive: true });

  const urlAbsoluta = `https://www.nutricaocommarco.com.br/${route.path}`;

  // SCHEMA 1: OBRIGATÓRIO (Article / BlogPosting)
  const isBlog = route.path !== 'sobre' && route.path !== 'certificacoes' && route.path !== 'planos' && !route.path.includes('planilha');
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": isBlog ? "BlogPosting" : "WebPage",
    "headline": route.title,
    "image": route.image,
    "author": { "@type": "Person", "name": "Marco Aurélio Jr." },
    "description": route.desc,
    "datePublished": route.date || new Date().toISOString().split('T')[0]
  };

  // SCHEMA 2: BREADCRUMB (Para todas as páginas)
  const breadcrumbSchema = getBreadcrumbSchema(route.title, urlAbsoluta);

  // AGRUPA TODOS OS SCHEMAS DESTA PÁGINA
  let schemasHTML = `
      <script type="application/ld+json">${JSON.stringify(baseSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  `;

  if (route.schemasExtra && route.schemasExtra.length > 0) {
    route.schemasExtra.forEach(schema => {
      schemasHTML += `<script type="application/ld+json">${JSON.stringify(schema)}</script>\n`;
    });
  }

  // EXTERMINA QUALQUER TAG DE DESCRIPTION E CANONICAL ANTIGA ANTES DE SALVAR!
  let cleanHtml = template
    .replace(/<meta name="description"([^>]+)?>/gi, '') 
    .replace(/<link rel="canonical"([^>]+)?>/gi, ''); 

  // INJETA APENAS OS SCHEMAS
  const html = cleanHtml.replace('</head>', `
      ${schemasHTML}
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada (Fantasmas eliminados)!`);
});
