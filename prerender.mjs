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

// 🆕 FUNÇÃO DE FAQ (Garante Destaque na Busca)
function getFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.resposta
      }
    }))
  };
}

// 🆕 FUNÇÃO DE VÍDEO (Aba Vídeos do Google)
function getVideoSchema(nome, descricao, videoId, dataUpload) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": nome,
    "description": descricao,
    "thumbnailUrl": [
      `https://img.youtube.com/vi/${videoId}/default.jpg`,
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    ],
    "uploadDate": dataUpload,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`
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
  { path: 'loja', title: 'Loja do Píngus | Produtos e Ferramentas Exclusivas | Nutrição com Marco', image: `${githubImgBase}logoN_pingus.webp`, desc: 'Conheça a Loja oficial do Píngus. Canecas exclusivas, aventais de alta qualidade, e-books e planilhas inteligentes para otimizar sua rotina e saúde.' },
  { path: 'loja/caneca-pingus-conselheiro-nutricional', title: 'Caneca Píngus Conselheiro Nutricional | Loja do Píngus', image: 'https://images.mont.ink/mockup/431585/branco_0_5823852.jpg', desc: 'Transforme seus momentos com a Caneca Píngus Conselheiro Nutricional. Feita sob demanda, combina resistência, acabamento impecável e muito estilo.', schemasExtra: [getProductSchema("Caneca Píngus Conselheiro Nutricional", "https://www.nutricaocommarco.com.br/loja/caneca-pingus-conselheiro-nutricional", "https://images.mont.ink/mockup/431585/branco_0_5823852.jpg", "Transforme seus momentos com essa caneca cheia de estilo e personalidade. Ideal para café ou chá.", "50.00")] },
  { path: 'loja/caneca-pingus-sua-melhor-versao', title: 'Caneca Píngus Sua Melhor Versão | Loja do Píngus', image: 'https://images.mont.ink/mockup/431585/branco_0_5824055.jpg', desc: 'Garanta a Caneca Píngus Sua Melhor Versão. Um item exclusivo, resistente e criativo para acompanhar seu café diário ou presentear alguém especial.', schemasExtra: [getProductSchema("Caneca Píngus Sua Melhor Versão", "https://www.nutricaocommarco.com.br/loja/caneca-pingus-sua-melhor-versao", "https://images.mont.ink/mockup/431585/branco_0_5824055.jpg", "Caneca exclusiva com design inspirador para acompanhar sua rotina com muito charme.", "50.00")] },
  { path: 'loja/avental-pingus', title: 'Avental Píngus Profissional e Cozinha | Loja do Píngus', image: 'https://images.mont.ink/mockup/431585/branco_0_5820286.png', desc: 'Avental Píngus resistente, confortável e com ajuste fácil. Perfeito para o preparo de marmitas, uso diário na cozinha ou atuação profissional.', schemasExtra: [getProductSchema("Avental Píngus", "https://www.nutricaocommarco.com.br/loja/avental-pingus", "https://images.mont.ink/mockup/431585/branco_0_5820286.png", "Ideal para o dia a dia ou uso profissional, esse avental oferece resistência, conforto e praticidade.", "75.00")] }
];

// 📝 3. TODOS OS POSTS DO BLOG
const postsBlog = [
  { id: 30, link: "/como-calcular-meu-get", img: `${githubImgBase}Blog/GET_Capa.webp`, titulo: "Como Calcular Meu GET (Gasto Energético Total): Guia e Calculadora", desc: "Aprenda de verdade como calcular meu get com equações validadas (Mifflin e Harris-Benedict). Acesse nossa calculadora gratuita e descubra sua TMB exata.", data: "2026-07-22", schemasExtra: [getMedicalSchema("Fisiologia do Metabolismo e Gasto Calórico", "https://www.nutricaocommarco.com.br/como-calcular-meu-get", ["Taxa Metabólica Basal", "Gasto Energético Total", "Equação de Mifflin-St Jeor"])] },
  { 
    id: 29, 
    link: "/como-ganhar-tempo-na-cozinha", 
    img: `${githubImgBase}Blog/GanharTempo_Capa.webp`, 
    titulo: "Como Ganhar Tempo na Cozinha: O Guia do Congelamento e Mise en Place", 
    desc: "Aprenda como ganhar tempo na cozinha organizando suas marmitas. Descubra a técnica do Mise en Place, a Matriz 3x3 e os segredos do congelamento inteligente.", 
    data: "2026-07-21",
    schemasExtra: [
      getMedicalSchema("Organização Alimentar e Congelamento Inteligente", "https://www.nutricaocommarco.com.br/como-ganhar-tempo-na-cozinha", ["Nutrição Comportamental", "Preparo de Refeições", "Conservação de Alimentos", "Mise en Place"]),
      getFaqSchema([
        { pergunta: "Posso congelar marmita de estrogonofe completa?", resposta: "Pode, mas o creme vai perder a cremosidade e talhar. O método inteligente é congelar a carne e a base do molho. O creme de leite entra apenas na panela, na hora de aquecer." },
        { pergunta: "Arroz congelado fica com textura de mingau?", resposta: "Só se você cozinhar demais antes de congelar. Para o arroz ficar soltinho, cozinhe 'al dente', esfrie espalhado em uma assadeira para não reter vapor, e guarde em embalagens rasas." },
        { pergunta: "Quais legumes nunca devem ir para o freezer?", resposta: "Pepino, alface, rúcula, tomate cru para salada, chuchu cru e abobrinha crua fatiada. Eles possuem muita água e paredes celulares finas. Ao descongelar, viram uma 'esponja aguada'." },
        { pergunta: "Por que cria uma 'neve' de gelo grossa dentro do meu pote?", resposta: "Isso acontece porque a comida entrou quente no pote ou sobrou muito ar na embalagem. O vapor vira cristais de gelo. O conserto é espalhar a comida até parar o vapor e tirar todo o ar antes de fechar." },
        { pergunta: "Quanto tempo dura uma marmita congelada?", resposta: "A regra de ouro do congelamento inteligente é: 90 dias no freezer. Depois disso, o alimento continua seguro para consumo, mas perde muita qualidade de sabor e textura." }
      ])
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
      getMedicalSchema("O Que É Dieta Mediterrânea e Benefícios Cardiovasculares", "https://www.nutricaocommarco.com.br/o-que-e-dieta-mediterranea", ["Dieta Mediterrânea", "Saúde Cardiovascular", "Longevidade", "Nutrição Clínica"]),
      getVideoSchema("O Que é Dieta Mediterrânea e Como Fazer", "A nutricionista Patricia Leite explica detalhadamente os pilares da Dieta Mediterrânea e seus benefícios para o coração e emagrecimento.", "Axo9aie0PAU", "2021-08-25T12:00:00-03:00"),
      getFaqSchema([
        { pergunta: "A Dieta Mediterrânea emagrece rápido?", resposta: "Nenhuma dieta saudável promove emagrecimento 'mágico' da noite para o dia. A ciência mostra que a dieta mediterrânea promove uma perda de peso idêntica à dieta vegetariana em 3 meses, desde que haja déficit calórico. A vantagem é que ela não causa o terrorismo alimentar que leva ao efeito sanfona, sendo muito mais sustentável." },
        { pergunta: "O que é proibido na Dieta Mediterrânea?", resposta: "Nenhum alimento natural é estritamente proibido, mas a base da dieta exige a redução drástica de alimentos ultraprocessados, açúcares refinados, gorduras trans (margarinas) e carnes processadas (salsicha, bacon, presunto). Carnes vermelhas são consumidas com muita moderação." },
        { pergunta: "Posso beber vinho todos os dias?", resposta: "O consumo de vinho (especialmente o tinto) faz parte da cultura do Mediterrâneo pelos seus polifenóis antioxidantes. A recomendação médica é de consumo moderado e junto com as refeições. No entanto, se você não bebe álcool, não deve começar; você pode obter os mesmos antioxidantes comendo uvas, frutas vermelhas ou tomando chás." },
        { pergunta: "A dieta mediterrânea é muito cara para fazer no Brasil?", resposta: "Este é um grande mito! Você não precisa de salmão norueguês. A 'Mediterrânea Brasileira' foca no azeite extra virgem (o item mais importante), sardinha em lata (rica em ômega-3 e barata), ovos, feijão, grão-de-bico, aveia e frutas da estação. É uma alimentação simples, baseada na feira, não em produtos de prateleira caros." }
      ])
    ] 
  },
  { id: 27, link: "/o-que-e-dieta-low-carb", img: `${githubImgBase}Blog/LowCarb_Capa.webp`, titulo: "Dieta Low Carb: O Que É, Erros Fatais e Calculadora Completa", desc: "Aprenda o que é a dieta low carb de verdade. Descubra a diferença para a cetogênica, os mitos da gordura e monte seu prato com nossa Calculadora TACO.", data: "2026-07-15", schemasExtra: [getMedicalSchema("Dieta Low Carb e Impactos Metabólicos", "https://www.nutricaocommarco.com.br/o-que-e-dieta-low-carb", ["Dieta Low-Carb", "Metabolismo de Carboidratos", "Sensibilidade à Insulina"])] },
  { 
    id: 26, 
    link: "/o-que-e-dieta-cetogenica", 
    img: `${githubImgBase}Blog/DietaCetogenica_Capa.webp`, 
    titulo: "O que é Dieta Cetogênica? Como Entrar em Cetose e Emagrecer", 
    desc: "O que é Dieta Cetogênica? Entenda como o seu corpo usa a gordura como combustível, como entrar em Cetose e os perigos de fazer errado.", 
    data: "2026-07-14", 
    schemasExtra: [
      getMedicalSchema("Dieta Cetogênica e Emagrecimento", "https://www.nutricaocommarco.com.br/o-que-e-dieta-cetogenica", ["Dieta Cetogênica", "Cetose", "Metabolismo de Gorduras"]),
      getFaqSchema([
        { pergunta: "A dieta cetogênica pode causar cetoacidose?", resposta: "Não em pessoas saudáveis. A cetose nutricional induzida pela dieta keto eleva os corpos cetônicos para níveis seguros (entre 0,5 e 7/8 mM) sem alterar o pH do sangue. A cetoacidose é uma condição patológica de urgência médica típica de diabéticos tipo 1 não controlados, onde as cetonas ultrapassam os 25 mM devido à ausência total de insulina, o que acidifica o sangue." },
        { pergunta: "A dieta keto é boa para hipertrofia (ganhar massa muscular)?", resposta: "Depende do protocolo e do balanço energético. Em um ensaio de 8 semanas com homens treinados realizando musculação associada a uma dieta cetogênica com superávit calórico, os participantes conseguiram reduzir significativamente a massa gorda e a gordura visceral, mas não apresentaram aumento estatisticamente significativo de massa muscular magra. Em contraste, o grupo que consumiu uma dieta tradicional obteve aumento de massa magra sob as mesmas condições de treino." },
        { pergunta: "O que é a 'gripe cetogênica' e como evitar?", resposta: "A gripe cetogênica é um conjunto de sintomas transitórios (como dor de cabeça, fraqueza, tontura e irritabilidade) que ocorrem nos primeiros dias devido à rápida eliminação de água e minerais. Conforme os estoques de glicogênio são esvaziados e a insulina cai, o corpo elimina muito sódio. Para evitar, capriche na hidratação e reponha eletrólitos consumindo uma quantidade adequada de sal e água mineral." },
        { pergunta: "Consumir TCM ajuda no emagrecimento ou apenas na energia?", resposta: "Além de acelerar a cetose, os triglicerídeos de cadeia média (TCM) demonstraram ter um efeito preservador sobre a massa livre de gordura durante dietas de baixíssima caloria, aumentando paralelamente a proporção de perda de massa gorda total durante as semanas iniciais da dieta e ajudando na supressão da fome." }
      ])
    ] 
  },
  { 
    id: 25, 
    link: "/o-que-e-jejum-intermitente", 
    img: `${githubImgBase}Blog/JejumIntermitente_Capa.webp`, 
    titulo: "O que é Jejum Intermitente? A Verdade e os Protocolos", 
    desc: "Muito além de passar fome: descubra o que é o jejum intermitente, como ele destrava o metabolismo lento e se ele emagrece mais que a dieta tradicional.", 
    data: "2026-07-12", 
    schemasExtra: [
      getMedicalSchema("Efeitos do Jejum Intermitente", "https://www.nutricaocommarco.com.br/o-que-e-jejum-intermitente", ["Jejum Intermitente", "Metabolismo", "Perda de Peso"]),
      getFaqSchema([
        { pergunta: "O que exatamente está liberado para tomar durante a janela de jejum?", resposta: "Está liberado o consumo de água filtrada (com ou sem gás), café preto puro e chás de ervas naturais, desde que sejam consumidos totalmente puros, sem nenhuma gota de açúcar, mel ou adoçantes calóricos. Essas bebidas mantêm a sua insulina baixa e não interrompem a queima de gordura do protocolo." },
        { pergunta: "O jejum intermitente pode fazer eu perder a minha massa muscular?", resposta: "Não, desde que você consuma a quantidade correta de proteínas e calorias estipulada para o seu peso corporal dentro da sua janela de alimentação. O catabolismo muscular ocorre quando há um déficit calórico exagerado e prolongado associado à baixa ingestão de proteínas." },
        { pergunta: "O jejum realmente limpa as células ruins do corpo (Autofagia)?", resposta: "Sim, o jejum prolongado estimula um processo celular chamado autofagia, que funciona como uma espécie de reciclagem biológica, onde as células limpam e degradam proteínas velhas ou danificadas para otimizar o funcionamento do organismo." },
        { pergunta: "Sinto muita dor de cabeça nos primeiros dias de jejum, isso é normal?", resposta: "Sim, nos primeiros dias é comum sentir uma leve dor de cabeça devido à rápida eliminação de água e eletrólitos (como sódio e potássio) provocada pela queda da insulina. Manter uma hidratação constante ao longo do dia costuma resolver o problema rapidamente." }
      ])
    ] 
  },
  { id: 24, link: "/melhor-horario-para-tomar-ferro", img: `${githubImgBase}Blog/HorarioFerro.webp`, titulo: "Qual o Melhor Horario Para Tomar Ferro (E Curar a Anemia Rápido)", desc: "Você está tomando ferro do jeito errado? Descubra qual o melhor horário para tomar ferro e ter absorção máxima, os sintomas ocultos da anemia e o que bloqueia o nutriente.", data: "2026-04-26" },
  { id: 23, link: "/percentual-gordura-feminino-ideal", img: `${githubImgBase}Blog/PercentualGorduraFeminino_Capa.webp`, titulo: "Qual o Percentual de Gordura Feminino Ideal e Saudável?", desc: "Pare de olhar apenas para a balança. Entenda as tabelas reais de referência e descubra qual o percentual de gordura feminino ideal para a sua idade e saúde.", data: "2026-04-24" },
  { 
    id: 22, 
    link: "/o-que-comer-na-tpm", 
    img: `${githubImgBase}Blog/TPM.webp`, 
    titulo: "O Que Comer na TPM: O Guia Para Controlar a Fome e Emagrecer", 
    desc: "Descubra exatamente o que comer na TPM para aliviar os sintomas, controlar a fome por doces e manter o emagrecimento, entendendo a fisiologia do seu ciclo.", 
    data: "2026-04-02", 
    schemasExtra: [
      getMedicalSchema("Nutrição no Ciclo Menstrual e Síndrome Pré-Menstrual", "https://www.nutricaocommarco.com.br/o-que-comer-na-tpm", ["Síndrome Pré-Menstrual", "Metabolismo Feminino", "Desejo por Alimentos", "Fase Lútea"]),
      getFaqSchema([
        { pergunta: "Por que a fome aumenta tanto na TPM?", resposta: "O aumento da fome na fase lútea (pré-menstrual) é biológico. A alta do hormônio progesterona estimula áreas do cérebro associadas ao apetite. Além disso, há um aumento na Taxa Metabólica Basal (o corpo gasta de 100 a 300 kcal a mais por dia nesse período)." },
        { pergunta: "É normal ganhar peso na TPM?", resposta: "Sim, e esse ganho quase nunca é gordura. A oscilação brusca de estrogênio e progesterona causa intensa retenção de líquidos e lentidão intestinal. O peso na balança pode flutuar de 1 a 3 quilos, o que se normaliza dias após a menstruação." },
        { pergunta: "O desejo por chocolate na TPM é biológico?", resposta: "A ciência mais recente mostra que o desejo por energia extra é biológico, mas o desejo específico por chocolate é cultural e aprendido (Hormes et al., 2017). O corpo pede calorias e conforto, e a mente traduz isso como vontade de doces." },
        { pergunta: "Preciso mudar minha dieta em cada fase do ciclo?", resposta: "Não é obrigatório. Embora o corpo oxide mais gordura na fase lútea, manipular macronutrientes semana a semana não traz um benefício superior ao longo prazo. A constância no déficit calórico e a qualidade dos alimentos são o que garantem o emagrecimento." }
      ])
    ] 
  },
  { id: 21, link: "/quantas-calorias-gasto-por-dia", img: `${githubImgBase}Blog/QuantasCaloriasGasto.webp`, titulo: "Quantas Calorias Gasto Por Dia? Calcule Sua TMB Exata Aqui", desc: "Pare de chutar a sua dieta. Use nossa calculadora inteligente para descobrir quantas calorias gasto por dia (TMB e Fator de Atividade).", data: "2026-04-05" },
  { id: 20, link: "/efeitos-colaterais-da-melatonina", img: `${githubImgBase}Blog/Melatonina.webp`, titulo: "Melatonina Vicia? A Verdade Sobre os Efeitos Colaterais", desc: "Você toma melatonina para dormir? Descubra a verdade científica sobre a dosagem correta, os riscos psicológicos e se ela realmente pode te viciar.", data: "2026-04-01" },
  { id: 19, link: "/o-que-e-ciclo-circadiano", img: `${githubImgBase}Blog/CicloCircadiano.webp`, titulo: "Ciclo Circadiano: Como Emagrecer Dormindo (O Segredo Hormonal)", desc: "Dormir mal trava o seu emagrecimento. Descubra o que é o Ciclo Circadiano, como ajustar seu relógio biológico e controlar a fome crônica.", data: "2026-03-29" },
  { id: 18, link: "/o-que-sao-simbioticos", img: `${githubImgBase}Blog/Simbioticos.webp`, titulo: "Simbióticos: O Que São e Como Eles Curam o Intestino Inflamado", desc: "A fórmula de ouro: descubra como a união exata entre prebióticos e probióticos (Simbióticos) pode transformar a sua digestão e a saúde da flora intestinal.", data: "2026-03-28" },
  { id: 17, link: "/o-que-sao-probioticos", img: `${githubImgBase}Blog/Probioticos.webp`, titulo: "Probióticos: Para Que Servem e Qual a Relação com a Imunidade", desc: "Não compre iogurte sem ler isso! Entenda de uma vez o que são os probióticos, o poder dos lactobacillus e os reais benefícios para o seu intestino.", data: "2026-03-31" },
  { id: 16, link: "/o-que-sao-prebioticos", img: `${githubImgBase}Blog/Prebioticos.webp`, titulo: "Prebióticos Explicados: Os Alimentos Que Limpam o Intestino", desc: "Seu intestino é seu segundo cérebro. Descubra a lista de alimentos fibrosos (prebióticos) essenciais que alimentam e fortalecem as bactérias boas do corpo.", data: "2026-03-27" },
  { id: 15, link: "/o-que-e-fome-emocional", img: `${githubImgBase}Blog/Fome-Emocional-Capa.webp`, titulo: "Fome Emocional: Como Parar de Descontar a Ansiedade na Comida", desc: "Você come por fome ou por estresse? Aprenda técnicas reais da nutrição comportamental e use a 'Escala de Fome' para vencer a compulsão alimentar.", data: "2026-03-27" },
  { id: 14, link: "/tirzepatida-para-que-serve", img: `${githubImgBase}Blog/Tirzepatida-para-que-serve.webp`, titulo: "Tirzepatida: Para Que Serve e Os Efeitos Colaterais (Atualizado)", desc: "Mounjaro (Tirzepatida) no emagrecimento: entenda a fundo como atua o duplo mecanismo GLP-1 e GIP e descubra os reais efeitos no controle do apetite e para que serve.", data: "2026-03-26", schemasExtra: [getMedicalSchema("Análise da Tirzepatida no Emagrecimento", "https://www.nutricaocommarco.com.br/tirzepatida-para-que-serve", ["Tirzepatida", "Mounjaro", "Tratamento de Obesidade"], "Endocrinology")] },
  { id: 13, link: "/comer-ovo-todo-dia-aumenta-o-colesterol", img: `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.webp`, titulo: "Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Médica", desc: "O maior mito da nutrição revelado. Veja o que a ciência atual comprova sobre o consumo diário de ovos, a gema e o real impacto no colesterol HDL e LDL.", data: "2026-03-25" },
  { id: 12, link: "/retatrutida_o_que_e", img: `${githubImgBase}Blog/retatrutida_molecula.webp`, titulo: "Retatrutida: O Agonista Triplo Que Está Revolucionando o Emagrecimento", desc: "Conheça a Retatrutida, o novo medicamento em testes que atua em 3 hormônios simultâneos. Veja as promessas científicas para a obesidade.", data: "2026-03-24" },
  { id: 11, link: "/diabetico_pode_comer_beterraba", img: `${githubImgBase}Blog/beterraba_diabetes.webp`, titulo: "Diabético Pode Comer Beterraba? O Fim do Mito do Açúcar", desc: "Eles disseram que a beterraba era um veneno para diabéticos. Descubra se Diabético pode comer beterraba e por que você não precisa ter medo.", data: "2026-03-24" },
  { id: 10, link: "/qual_melhor_horario_para_se_pesar", img: `${githubImgBase}Blog/melhor_horario_pesagem.webp`, titulo: "Qual o melhor horário para se Pesar (E Por Que a Balança Mente)", desc: "Seu peso varia até 2kg por dia! Descubra qual o melhor horário para se pesar, as armadilhas da retenção de líquidos e como não se frustrar com a balança.", data: "2026-03-24" },
  { id: 9, link: "/nutricao_para_ironman_703", img: `${githubImgBase}Blog/nutricao_ironman_703.webp`, titulo: "Nutrição para Ironman 70.3: Guia de Carboidratos e Hidratação", desc: "O seu corpo não aguenta um meio Ironman sem estratégia. Veja o guia técnico de nutrição esportiva, géis de carboidrato e eletrólitos para triatletas.", data: "2026-03-19" },
  { id: 8, link: "/hormonios_da_fome_emagrecimento", img: `${githubImgBase}Blog/Hormfome.webp`, titulo: "Grelina e Leptina: Como Hackear os Hormônios da Fome", desc: "Por que você volta a engordar? Descubra como a Grelina e a Leptina comandam o seu cérebro e veja o que fazer para vencer a inflamação e a fome crônica.", data: "2026-03-18" },
  { id: 7, link: "/por_que_o_feijao_da_gases", img: `${githubImgBase}Blog/feijao.webp`, titulo: "Por Que o Feijão Dá Gases? O Truque Químico Para Evitar", desc: "Pare de sofrer com estômago estufado. A culpa é dos antinutrientes! Aprenda o método correto do remolho para neutralizar o feijão e melhorar a digestão.", data: "2026-03-17" },
  { id: 6, link: "/o_dilema_do_sangue_na_altitude", img: `${githubImgBase}Blog/eritropoietina.webp`, titulo: "O Dilema do Sangue na Altitude: Eritropoetina e Doping", desc: "Por que atletas treinam nas montanhas? Conheça a biologia extrema da Eritropoetina (EPO), o limite entre o preparo físico natural e a fraude esportiva.", data: "2026-03-16" },
  { id: 5, link: "/efeito_sanfona_inflamacao_invisivel", img: `${githubImgBase}Blog/efeito_sanfona.webp`, titulo: "Efeito Sanfona: O Perigo da Inflamação Invisível no Corpo", desc: "Engordar e emagrecer rapidamente destrói suas células. Descubra a verdade silenciosa por trás do efeito sanfona e como frear a inflamação celular.", data: "2026-03-15" },
  { id: 4, link: "/quantas_frutas_posso_comer", img: `${githubImgBase}Blog/frutose_bananas.webp`, titulo: "Quantas Frutas Posso Comer Por Dia? (O Perigo da Frutose)", desc: "Descubra quantas frutas posso comer por dia? Entenda a bioquímica da frutose, o risco de gordura no fígado (esteatose) e qual a porção diária ideal para emagrecer.", data: "2026-03-14", schemasExtra: [getMedicalSchema("Metabolismo da Frutose e Esteatose", "https://www.nutricaocommarco.com.br/quantas_frutas_posso_comer", ["Frutose", "Esteatose Hepática", "Nutrição Clínica"])] },
  { id: 3, link: "/vitamina_a_para_que_serve", img: `${githubImgBase}Blog/vitamina_a.webp`, titulo: "Vitamina A Para Que Serve? Benefícios Além da Visão", desc: "A deficiência que ninguém nota. Descubra como a Vitamina A age silenciosamente no seu sistema imune, na saúde da pele e no combate aos radicais livres.", data: "2026-03-13" },
  { id: 2, link: "/o_que_e_antropometria", img: `${githubImgBase}Blog/O_que_e_antropometria.webp`, titulo: "O Que é Antropometria? Muito Além do Peso da Balança", desc: "Entenda por que a antropometria (ISAK) é a única ferramenta confiável para avaliar a saúde, mapeando ossos, gordura, músculos e composição corporal exata.", data: "2026-03-12" },
  { id: 1, link: "/a_balanca_de_bioimpedancia_e_confiavel", img: `${githubImgBase}Blog/Bia1.webp`, titulo: "Balança de Bioimpedância é Confiável? O Que Não Te Contaram", desc: "A sua balança cara pode estar mentindo para você. Descubra como a hidratação, bexiga cheia e até o estresse mascaram os resultados da sua bioimpedância.", data: "2026-03-11" }
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

  // SCHEMA 🚀 (Melhorado com Autor e Data de Modificação - E-E-A-T)
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": isBlog ? "BlogPosting" : "WebPage",
    "headline": route.title,
    "image": route.image,
    "author": { 
      "@type": "Person", 
      "name": "Marco Aurélio Jr.",
      "jobTitle": "Estudante de Nutrição e Avaliador Antropométrico ISAK 1",
      "url": "https://www.nutricaocommarco.com.br/sobre"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nutrição com Marco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nutricaocommarco.com.br/logoN_pingus.webp"
      }
    },
    "description": route.desc,
    "datePublished": route.date ? `${route.date}T08:00:00-03:00` : new Date().toISOString(),
    "dateModified": route.date ? `${route.date}T10:00:00-03:00` : new Date().toISOString()
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
    .replace(/<link(?=[^>]*rel=['"]canonical['"])[^>]*>/gi, '')
    .replace(/<meta(?=[^>]*name=['"]twitter:[^'"]+['"])[^>]*>/gi, ''); 

  // 🤖 OTIMIZAÇÃO EXTREMA PARA GOOGLE DISCOVER / WHATSAPP
  const imgCleanUrl = route.image.replace(/^https?:\/\//i, '');
  const imgWhatsApp = `https://i0.wp.com/${imgCleanUrl}?w=1200&strip=all&quality=85`;

  // 🚀 INJETANDO AS TAGS FÍSICAS (AGORA COM TWITTER CARDS INCLUÍDOS)
  const tagsCorretas = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc}" />
    <meta name="robots" content="max-image-preview:large" />
    <link rel="canonical" href="${urlAbsoluta}" />
    
    <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
    <meta property="og:type" content="${isBlog ? 'article' : 'website'}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.desc}" />
    <meta property="og:image" content="${imgWhatsApp}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="675" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:url" content="${urlAbsoluta}" />

    <!-- Twitter Cards (X) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.desc}" />
    <meta name="twitter:image" content="${imgWhatsApp}" />
    
    ${schemasHTML}
  `;

  const html = cleanHtml.replace('</head>', `${tagsCorretas}</head>`);

  fs.mkdirSync(path.dirname(targetFile), { recursive: true });
  fs.writeFileSync(targetFile, html);
  
  console.log(`✅ [${safePath}] Blindado com Schema Autor, Twitter Cards e FAQ!`);
});