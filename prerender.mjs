import fs from 'fs';
import path from 'path';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://cdn.jsdelivr.net/gh/nutricaocommarco/nutricaocommarco@main/Imagens/";

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

function getProductSchema(titulo, url, imagem, descricao, preco) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": titulo,
    "image": imagem,
    "description": descricao,
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": "BRL",
      "price": preco,
      "availability": "https://schema.org/InStock"
    }
  };
}

// 📝 1. TODAS AS ROTAS ESTÁTICAS
const rotasEstaticas = [
  { path: 'planilha-de-avaliacao-antropometrica-marco-aurelio', title: 'Planilha de Avaliação Antropométrica Inteligente PRO | Nutrição com Marco', image: `${githubImgBase}PlanilhaImagem/Planilha_Capa.webp`, desc: 'Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.' },
  { path: 'ebook-receitas', title: 'Ebook Receitas Saudáveis e Nutritivas: O Caminho da Praticidade | Nutrição com Marco', image: `${githubImgBase}Receitas_Saudáveis.png`, desc: 'Descubra como comer bem sem perder horas no fogão. Aprenda a Técnica do 3x3, pré-preparos inteligentes e dezenas de receitas práticas para a sua rotina.' },
  { path: 'planilha', title: 'Planilha Antropométrica Inteligente PRO | Nutrição com Marco', image: `${githubImgBase}PlanilhaImagem/Planilha_Capa.webp`, desc: 'Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.' },
  { path: 'sobre', title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.webp`, desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista e especialista em avaliação física ISAK 1.' },
  { path: 'certificacoes', title: 'Currículo e Certificações | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.webp`, desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.' },
  { path: 'planos', title: 'Planos de Acompanhamento | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.webp`, desc: 'Conheça os níveis de acompanhamento nutricional e avaliação física ISAK 1.' },
  { path: 'blog', title: 'Blog de Nutrição e Ciência | Nutrição com Marco', image: `${githubImgBase}ImgBlog.jpg`, desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.' },
  { path: 'calculadora-de-gasto-calorico', title: 'Calculadora de Gasto Calórico Inteligente | Nutrição com Marco', image: `${githubImgBase}Calculadora-de-Gasto-Calorico.webp`, desc: 'Descubra seu gasto calórico diário e taxa metabólica basal com nossa calculadora inteligente.' },
  { path: 'parceria-inatividade-zero', title: 'Avaliação Antropométrica de Precisão - Parceria Inatividade Zero | Nutrição com Marco', image: `${githubImgBase}PingusReserva.jpg`, desc: 'Agende sua avaliação antropométrica avançada na Academia Inatividade Zero em parceria com Nutrição com Marco e descubra sua composição corporal real.' }
];

// 📝 2. ROTAS DA LOJA
const rotasLoja = [
  { path: 'loja', title: 'Loja do Píngus | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.webp`, desc: 'Conheça a Loja oficial do Píngus. Canecas exclusivas, aventais e produtos com muito estilo para a sua rotina.' },
  { 
    path: 'loja/caneca-pingus-conselheiro-nutricional', 
    title: 'Caneca Píngus Conselheiro Nutricional | Loja do Píngus', 
    image: 'https://images.mont.ink/mockup/431585/branco_0_5823852.jpg', 
    desc: 'Transforme seus momentos com essa caneca cheia de estilo. Ideal para café ou chá, combina resistência e design versátil.', 
    schemasExtra: [getProductSchema("Caneca Píngus Conselheiro Nutricional", "https://www.nutricaocommarco.com.br/loja/caneca-pingus-conselheiro-nutricional", "https://images.mont.ink/mockup/431585/branco_0_5823852.jpg", "Transforme seus momentos com essa caneca cheia de estilo e personalidade.", "50.00")] 
  },
  { 
    path: 'loja/caneca-pingus-sua-melhor-versao', 
    title: 'Caneca Píngus Sua Melhor Versão | Loja do Píngus', 
    image: 'https://images.mont.ink/mockup/431585/branco_0_5824055.jpg', 
    desc: 'Caneca exclusiva com design inspirador. Ideal para presentear alguém especial ou dar um charme na sua rotina diária.', 
    schemasExtra: [getProductSchema("Caneca Píngus Sua Melhor Versão", "https://www.nutricaocommarco.com.br/loja/caneca-pingus-sua-melhor-versao", "https://images.mont.ink/mockup/431585/branco_0_5824055.jpg", "Caneca exclusiva com design inspirador.", "50.00")] 
  },
  { 
    path: 'loja/avental-pingus', 
    title: 'Avental Píngus | Loja do Píngus', 
    image: 'https://images.mont.ink/mockup/431585/branco_0_5820286.png', 
    desc: 'Avental resistente e confortável, ideal para o dia a dia ou uso profissional. Com ajuste fácil e material durável.', 
    schemasExtra: [getProductSchema("Avental Píngus", "https://www.nutricaocommarco.com.br/loja/avental-pingus", "https://images.mont.ink/mockup/431585/branco_0_5820286.png", "Avental resistente e confortável, ideal para o dia a dia ou uso profissional.", "75.00")] 
  }
];

// 📝 3. TODOS OS POSTS DO BLOG
const postsBlog = [
  {
    id: 29,
    link: "/como-calcular-meu-get",
    img: `${githubImgBase}Blog/GET_Capa.webp`,
    titulo: "Como Calcular Meu GET (Gasto Energético Total): Guia e Calculadora",
    desc: "Aprenda de verdade como calcular meu get com equações validadas (Mifflin e Harris-Benedict). Acesse nossa calculadora gratuita e descubra sua TMB exata.",
    data: "2026-07-22",
    schemasExtra: [
      getMedicalSchema("Fisiologia do Metabolismo e Gasto Calórico", "https://www.nutricaocommarco.com.br/como-calcular-meu-get", ["Taxa Metabólica Basal", "Gasto Energético Total", "Equação de Mifflin-St Jeor"])
    ]
  },
  { 
    id: 29, 
    link: "/como-ganhar-tempo-na-cozinha", 
    img: `${githubImgBase}Blog/GanharTempo_Capa.webp`, 
    titulo: "Como Ganhar Tempo na Cozinha: O Guia do Congelamento e Mise en Place", 
    desc: "Aprenda como ganhar tempo na cozinha organizando suas marmitas. Descubra a técnica do Mise en Place, a Matriz 3x3 e os segredos do congelamento inteligente.", 
    data: "2026-07-21",
    schemasExtra: [
      getMedicalSchema(
        "Organização Alimentar e Congelamento Inteligente", 
        "https://www.nutricaocommarco.com.br/como-ganhar-tempo-na-cozinha", 
        ["Nutrição Comportamental", "Preparo de Refeições", "Conservação de Alimentos", "Mise en Place"]
      )
    ]
  },
  { 
    id: 28, 
    link: "/o-que-e-dieta-mediterranea", 
    img: `${githubImgBase}Blog/DietaMediterranea_Capa.webp`, 
    titulo: "O Que É Dieta Mediterrânea? O Segredo para Saúde e Longevidade", 
    desc: "Descubra o que é dieta mediterrânea na prática. Entenda como o consumo de azeite extra virgem, peixes e vegetais protege o coração e ajuda a emagrecer sem restrições extremas.", 
    data: "2026-07-20",
    schemasExtra: [
      getMedicalSchema(
        "O Que É Dieta Mediterrânea e Benefícios Cardiovasculares", 
        "https://www.nutricaocommarco.com.br/o-que-e-dieta-mediterranea", 
        ["Dieta Mediterrânea", "Saúde Cardiovascular", "Longevidade", "Nutrição Clínica"]
      )
    ]
  },
  { 
    id: 27, 
    link: "/o-que-e-dieta-low-carb", 
    img: `${githubImgBase}Blog/LowCarb_Capa.webp`, 
    titulo: "Dieta Low Carb: O Que É, Erros Fatais e Calculadora Completa", 
    desc: "Aprenda o que é a dieta low carb de verdade. Descubra a diferença para a cetogênica, os mitos da gordura e monte seu prato com nossa Calculadora TACO.", 
    data: "2026-07-15",
    schemasExtra: [getMedicalSchema("Dieta Low Carb e Impactos Metabólicos", "https://www.nutricaocommarco.com.br/o-que-e-dieta-low-carb", ["Dieta Low-Carb", "Metabolismo de Carboidratos", "Sensibilidade à Insulina"])]
  },
  { 
    id: 26, 
    link: "/o-que-e-dieta-cetogenica", 
    img: `${githubImgBase}Blog/DietaCetogenica_Capa.webp`, 
    titulo: "O que é Dieta Cetogênica? Como Entrar em Cetose e Emagrecer | Nutrição com Marco", 
    desc: "O que é Dieta Cetogênica? Entenda como o seu corpo usa a gordura como combustível, como entrar em Cetose e os perigos de fazer errado.", 
    data: "2026-07-14",
    schemasExtra: [getMedicalSchema("Dieta Cetogênica e Emagrecimento", "https://www.nutricaocommarco.com.br/o-que-e-dieta-cetogenica", ["Dieta Cetogênica", "Cetose", "Metabolismo de Gorduras"])]
  },
  { 
    id: 25, 
    link: "/o-que-e-jejum-intermitente", 
    img: `${githubImgBase}Blog/JejumIntermitente_Capa.webp`, 
    titulo: "O que é Jejum Intermitente? A Verdade e os Protocolos",
    desc: "Muito além de passar fome: descubra o que é o jejum intermitente, como ele destrava o metabolismo lento e se ele emagrece mais que a dieta tradicional.", 
    data: "2026-07-12",
    schemasExtra: [getMedicalSchema("Efeitos do Jejum Intermitente", "https://www.nutricaocommarco.com.br/o-que-e-jejum-intermitente", ["Jejum Intermitente", "Metabolismo", "Perda de Peso"])]
  },
  { 
    id: 24, 
    link: "/melhor-horario-para-tomar-ferro", 
    img: `${githubImgBase}Blog/HorarioFerro.webp`, 
    titulo: "Qual o Melhor Horario Para Tomar Ferro (E Curar a Anemia Rápido) | Nutrição com Marco", 
    desc: "Você está tomando ferro do jeito errado? Descubra qual o melhor horário para tomar ferro e ter absorção máxima, os sintomas ocultos da anemia e o que bloqueia o nutriente.", 
    data: "2026-04-26" 
  },
  { 
    id: 23, 
    link: "/percentual-gordura-feminino-ideal", 
    img: `${githubImgBase}Blog/PercentualGorduraFeminino_Capa.webp`, 
    titulo: "Qual o Percentual de Gordura Feminino Ideal e Saudável? | Nutrição com Marco", 
    desc: "Pare de olhar apenas para a balança. Entenda as tabelas reais de referência e descubra qual o percentual de gordura feminino ideal para a sua idade e saúde.", 
    data: "2026-04-24" 
  },
  { 
    id: 22, 
    link: "/o-que-comer-na-tpm", 
    img: `${githubImgBase}Blog/TPM.webp`, 
    titulo: "O Que Comer na TPM: O Guia Para Controlar a Fome e Emagrecer", 
    desc: "Descubra exatamente o que comer na TPM para aliviar os sintomas, controlar a fome por doces e manter o emagrecimento, entendendo a fisiologia do seu ciclo.", 
    data: "2026-04-02",
    schemasExtra: [
      getMedicalSchema(
        "Nutrição no Ciclo Menstrual e Síndrome Pré-Menstrual", 
        "https://www.nutricaocommarco.com.br/o-que-comer-na-tpm", 
        ["Síndrome Pré-Menstrual", "Metabolismo Feminino", "Desejo por Alimentos", "Fase Lútea"]
      )
    ]
  },
  { 
    id: 21, 
    link: "/quantas-calorias-gasto-por-dia", 
    img: `${githubImgBase}Blog/QuantasCaloriasGasto.webp`, 
    titulo: "Quantas Calorias Gasto Por Dia? Calcule Sua TMB Exata Aqui | Nutrição com Marco", 
    desc: "Pare de chutar a sua dieta. Use nossa calculadora inteligente para descobrir quantas calorias gasto por dia (TMB e Fator de Atividade).", 
    data: "2026-04-05" 
  },
  { 
    id: 20, 
    link: "/efeitos-colaterais-da-melatonina", 
    img: `${githubImgBase}Blog/Melatonina.webp`, 
    titulo: "Melatonina Vicia? A Verdade Sobre os Efeitos Colaterais", 
    desc: "Você toma melatonina para dormir? Descubra a verdade científica sobre a dosagem correta, os riscos psicológicos e se ela realmente pode te viciar.", 
    data: "2026-04-01" 
  },
  { 
    id: 19, 
    link: "/o-que-e-ciclo-circadiano", 
    img: `${githubImgBase}Blog/CicloCircadiano.webp`, 
    titulo: "Ciclo Circadiano: Como Emagrecer Dormindo (O Segredo Hormonal)", 
    desc: "Dormir mal trava o seu emagrecimento. Descubra o que é o Ciclo Circadiano, como ajustar seu relógio biológico e controlar a fome crônica.", 
    data: "2026-03-29" 
  },
  { 
    id: 18, 
    link: "/o-que-sao-simbioticos", 
    img: `${githubImgBase}Blog/Simbioticos.webp`, 
    titulo: "Simbióticos: O Que São e Como Eles Curam o Intestino Inflamado", 
    desc: "A fórmula de ouro: descubra como a união exata entre prebióticos e probióticos (Simbióticos) pode transformar a sua digestão e a saúde da flora intestinal.", 
    data: "2026-03-28" 
  },
  { 
    id: 17, 
    link: "/o-que-sao-probioticos", 
    img: `${githubImgBase}Blog/Probioticos.webp`, 
    titulo: "Probióticos: Para Que Servem e Qual a Relação com a Imunidade", 
    desc: "Não compre iogurte sem ler isso! Entenda de uma vez o que são os probióticos, o poder dos lactobacillus e os reais benefícios para o seu intestino.", 
    data: "2026-03-31" 
  },
  { 
    id: 16, 
    link: "/o-que-sao-prebioticos", 
    img: `${githubImgBase}Blog/Prebioticos.webp`, 
    titulo: "Prebióticos Explicados: Os Alimentos Que Limpam o Intestino", 
    desc: "Seu intestino é seu segundo cérebro. Descubra a lista de alimentos fibrosos (prebióticos) essenciais que alimentam e fortalecem as bactérias boas do corpo.", 
    data: "2026-03-27" 
  },
  { 
    id: 15, 
    link: "/o-que-e-fome-emocional", 
    img: `${githubImgBase}Blog/Fome-Emocional-Capa.webp`, 
    titulo: "Fome Emocional: Como Parar de Descontar a Ansiedade na Comida", 
    desc: "Você come por fome ou por estresse? Aprenda técnicas reais da nutrição comportamental e use a 'Escala de Fome' para vencer a compulsão alimentar.", 
    data: "2026-03-27" 
  },
  { 
    id: 14, 
    link: "/tirzepatida-para-que-serve", 
    img: `${githubImgBase}Blog/Tirzepatida-para-que-serve.webp`, 
    titulo: "Tirzepatida: Para Que Serve e Os Efeitos Colaterais (Atualizado) | Nutrição com Marco", 
    desc: "Mounjaro (Tirzepatida) no emagrecimento: entenda a fundo como atua o duplo mecanismo GLP-1 e GIP e descubra os reais efeitos no controle do apetite e para que serve.", 
    data: "2026-03-26",
    schemasExtra: [getMedicalSchema("Análise da Tirzepatida no Emagrecimento", "https://www.nutricaocommarco.com.br/tirzepatida-para-que-serve", ["Tirzepatida", "Mounjaro", "Tratamento de Obesidade"], "Endocrinology")]
  },
  { 
    id: 13, 
    link: "/comer-ovo-todo-dia-aumenta-o-colesterol", 
    img: `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.webp`, 
    titulo: "Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Médica", 
    desc: "O maior mito da nutrição revelado. Veja o que a ciência atual comprova sobre o consumo diário de ovos, a gema e o real impacto no colesterol HDL e LDL.", 
    data: "2026-03-25" 
  },
  { 
    id: 12, 
    link: "/retatrutida_o_que_e", 
    img: `${githubImgBase}Blog/retatrutida_molecula.webp`, 
    titulo: "Retatrutida: O Agonista Triplo Que Está Revolucionando o Emagrecimento", 
    desc: "Conheça a Retatrutida, o novo medicamento em testes que atua em 3 hormônios simultâneos. Veja as promessas científicas para a obesidade.", 
    data: "2026-03-24" 
  },
  { 
    id: 11, 
    link: "/diabetico_pode_comer_beterraba", 
    img: `${githubImgBase}Blog/beterraba_diabetes.webp`, 
    titulo: "Diabético Pode Comer Beterraba? O Fim do Mito do Açúcar | Nutrição com Marco", 
    desc: "Eles disseram que a beterraba era um veneno para diabéticos. Descubra se Diabético pode comer beterraba e por que você não precisa ter medo.", 
    data: "2026-03-24" 
  },
  { 
    id: 10, 
    link: "/qual_melhor_horario_para_se_pesar", 
    img: `${githubImgBase}Blog/melhor_horario_pesagem.webp`, 
    titulo: "Qual o melhor horário para se Pesar (E Por Que a Balança Mente) | Nutrição com Marco", 
    desc: "Seu peso varia até 2kg por dia! Descubra qual o melhor horário para se pesar, as armadilhas da retenção de líquidos e como não se frustrar com a balança.", 
    data: "2026-03-24" 
  },
  { 
    id: 9, 
    link: "/nutricao_para_ironman_703", 
    img: `${githubImgBase}Blog/nutricao_ironman_703.webp`, 
    titulo: "Nutrição para Ironman 70.3: Guia de Carboidratos e Hidratação", 
    desc: "O seu corpo não aguenta um meio Ironman sem estratégia. Veja o guia técnico de nutrição esportiva, géis de carboidrato e eletrólitos para triatletas.", 
    data: "2026-03-19" 
  },
  { 
    id: 8, 
    link: "/hormonios_da_fome_emagrecimento", 
    img: `${githubImgBase}Blog/Hormfome.webp`, 
    titulo: "Grelina e Leptina: Como Hackear os Hormônios da Fome", 
    desc: "Por que você volta a engordar? Descubra como a Grelina e a Leptina comandam o seu cérebro e veja o que fazer para vencer a inflamação e a fome crônica.", 
    data: "2026-03-18" 
  },
  { 
    id: 7, 
    link: "/por_que_o_feijao_da_gases", 
    img: `${githubImgBase}Blog/feijao.webp`, 
    titulo: "Por Que o Feijão Dá Gases? O Truque Químico Para Evitar | Nutrição com Marco", 
    desc: "Pare de sofrer com estômago estufado. A culpa é dos antinutrientes! Aprenda o método correto do remolho para neutralizar o feijão e melhorar a digestão.", 
    data: "2026-03-17" 
  },
  { 
    id: 6, 
    link: "/o_dilema_do_sangue_na_altitude", 
    img: `${githubImgBase}Blog/eritropoietina.webp`, 
    titulo: "O Dilema do Sangue na Altitude: Eritropoetina e Doping", 
    desc: "Por que atletas treinam nas montanhas? Conheça a biologia extrema da Eritropoetina (EPO), o limite entre o preparo físico natural e a fraude esportiva.", 
    data: "2026-03-16" 
  },
  { 
    id: 5, 
    link: "/efeito_sanfona_inflamacao_invisivel", 
    img: `${githubImgBase}Blog/efeito_sanfona.webp`, 
    titulo: "Efeito Sanfona: O Perigo da Inflamação Invisível no Corpo", 
    desc: "Engordar e emagrecer rapidamente destrói suas células. Descubra a verdade silenciosa por trás do efeito sanfona e como frear a inflamação celular.", 
    data: "2026-03-15" 
  },
  { 
    id: 4, 
    link: "/quantas_frutas_posso_comer", 
    img: `${githubImgBase}Blog/frutose_bananas.webp`, 
    titulo: "Quantas Frutas Posso Comer Por Dia? (O Perigo da Frutose) | Nutrição com Marco", 
    desc: "Descubra quantas frutas posso comer por dia? Entenda a bioquímica da frutose, o risco de gordura no fígado (esteatose) e qual a porção diária ideal para emagrecer.", 
    data: "2026-03-14",
    schemasExtra: [getMedicalSchema("Metabolismo da Frutose e Esteatose", "https://www.nutricaocommarco.com.br/quantas_frutas_posso_comer", ["Frutose", "Esteatose Hepática", "Nutrição Clínica"])]
  },
  { 
    id: 3, 
    link: "/vitamina_a_para_que_serve", 
    img: `${githubImgBase}Blog/vitamina_a.webp`, 
    titulo: "Vitamina A Para Que Serve? Benefícios Além da Visão", 
    desc: "A deficiência que ninguém nota. Descubra como a Vitamina A age silenciosamente no seu sistema imune, na saúde da pele e no combate aos radicais livres.", 
    data: "2026-03-13" 
  },
  { 
    id: 2, 
    link: "/o_que_e_antropometria", 
    img: `${githubImgBase}Blog/O_que_e_antropometria.webp`, 
    titulo: "O Que é Antropometria? Muito Além do Peso da Balança", 
    desc: "Entenda por que a antropometria (ISAK) é a única ferramenta confiável para avaliar a saúde, mapeando ossos, gordura, músculos e composição corporal exata.", 
    data: "2026-03-12" 
  },
  { 
    id: 1, 
    link: "/a_balanca_de_bioimpedancia_e_confiavel", 
    img: `${githubImgBase}Blog/Bia1.webp`, 
    titulo: "Balança de Bioimpedância é Confiável? O Que Não Te Contaram", 
    desc: "A sua balança cara pode estar mentindo para você. Descubra como a hidratação, bexiga cheia e até o estresse mascaram os resultados da sua bioimpedância.", 
    data: "2026-03-11" 
  }
];

// 🔄 UNIÃO DAS ROTAS
const rotasDoBlog = postsBlog.map(post => ({
  path: post.link.startsWith('/') ? post.link.slice(1) : post.link,
  title: `${post.titulo} | Nutrição com Marco`,
  image: post.img || `${githubImgBase}logoN_pingus.webp`,
  desc: post.desc,
  date: post.data,
  schemasExtra: post.schemasExtra || [] 
}));

const routes = [...rotasEstaticas, ...rotasLoja, ...rotasDoBlog];
const distPath = path.resolve('dist');
const baseTemplate = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('🚀 Iniciando Robô de SEO Físico Absoluto (Zero Duplicidade)...');

routes.forEach(route => {
  const safePath = route.path.startsWith('/') ? route.path.slice(1) : route.path;

  const fileAsHtml = path.join(distPath, `${safePath}.html`);
  const dirAsIndex = path.join(distPath, safePath, 'index.html');

  let targetFile = '';
  let fileContent = '';

  if (fs.existsSync(fileAsHtml)) {
    targetFile = fileAsHtml;
    fileContent = fs.readFileSync(fileAsHtml, 'utf-8');
  } else if (fs.existsSync(dirAsIndex)) {
    targetFile = dirAsIndex;
    fileContent = fs.readFileSync(dirAsIndex, 'utf-8');
  } else {
    targetFile = fileAsHtml; 
    fileContent = baseTemplate;
  }

  const urlAbsoluta = `https://www.nutricaocommarco.com.br/${safePath}`;
  const isBlog = safePath !== 'sobre' && safePath !== 'certificacoes' && safePath !== 'planos' && !safePath.includes('planilha') && !safePath.includes('loja');

  // SCHEMA
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

  // 🔴 A MÁGICA FINAL ACONTECE AQUI: REGEX SUPREMA 🔴
  let cleanHtml = fileContent
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '') 
    .replace(/<meta(?=[^>]*name=['"]description['"])[^>]*>/gi, '') 
    .replace(/<meta(?=[^>]*property=['"]og:[^'"]+['"])[^>]*>/gi, '') 
    .replace(/<link(?=[^>]*rel=['"]canonical['"])[^>]*>/gi, ''); 

  // 🤖 OTIMIZAÇÃO EXTREMA PARA GOOGLE DISCOVER / WHATSAPP
  // Se for imagem externa (como da loja), usamos i0.wp.com. Se for GitHub raw, também converte.
  const imgCleanUrl = route.image.replace(/^https?:\/\//i, '');
  const imgWhatsApp = `https://i0.wp.com/${imgCleanUrl}?w=1200&strip=all&quality=85`;

  // Injetamos as tags FÍSICAS limpas!
  const tagsCorretas = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc}" />
    <meta name="robots" content="max-image-preview:large" />
    <link rel="canonical" href="${urlAbsoluta}" />
    <meta property="og:type" content="${isBlog ? 'article' : 'website'}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.desc}" />
    <meta property="og:image" content="${imgWhatsApp}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="675" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:url" content="${urlAbsoluta}" />
    ${schemasHTML}
  `;

  const html = cleanHtml.replace('</head>', `${tagsCorretas}</head>`);

  fs.writeFileSync(targetFile, html);
  console.log(`✅ [${safePath}] Blindado com WordPress CDN (Leve) e 100% Liberado no Googlebot!`);
});