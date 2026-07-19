import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Droplet, Fish, Wheat, Wine, CheckCircle2, XCircle, Globe, Scale, Brain, Dna, Target
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas
const datePublishedISO = "2026-07-20";
const dateModifiedISO = "2026-07-20";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const dietaCapa = `${githubImgBase}Blog/DietaMediterranea_Capa.webp`;

// Dados do Comparativo entre Dietas
const comparativoDietas = [
  {
    id: 1,
    caracteristica: "Foco Principal",
    mediterranea: "Saúde cardiovascular, longevidade e compostos anti-inflamatórios.",
    lowcarb: "Controle da insulina e redução drástica de açúcares/carboidratos.",
    cetogenica: "Produção de corpos cetônicos como fonte primária de energia.",
    icone: <Target className="w-6 h-6 text-slate-500" />
  },
  {
    id: 2,
    caracteristica: "Carboidratos",
    mediterranea: "Liberados. Foco em cereais integrais, frutas e raízes.",
    lowcarb: "Reduzidos (Geralmente entre 50g a 130g por dia).",
    cetogenica: "Severamente restritos (5% a 10% da dieta, <50g/dia).",
    icone: <Wheat className="w-6 h-6 text-amber-500" />
  },
  {
    id: 3,
    caracteristica: "Gorduras",
    mediterranea: "Alta ingestão. Foco absoluto em gorduras mono e poli-insaturadas (Azeite, Peixes).",
    lowcarb: "Moderada a Alta. Varia conforme a escolha do paciente.",
    cetogenica: "Altíssima ingestão (70% a 80% das calorias totais).",
    icone: <Droplet className="w-6 h-6 text-yellow-500" />
  },
  {
    id: 4,
    caracteristica: "Emagrecimento",
    mediterranea: "Lento, gradual e altamente sustentável a longo prazo.",
    lowcarb: "Rápido no início (perda de água/glicogênio), eficiente na saciedade.",
    cetogenica: "Extremamente rápido inicialmente, mas de difícil adesão a longo prazo.",
    icone: <Scale className="w-6 h-6 text-green-600" />
  }
];

export default function OQueEDietaMediterranea() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Estados da Calculadora de Aderência PREDIMED
  const [respostasQuiz, setRespostasQuiz] = useState(Array(14).fill(null));
  const [pontuacao, setPontuacao] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Lógica da Calculadora de Aderência (Score PREDIMED simplificado)
  const perguntasPREDIMED = [
    "Você usa azeite de oliva extra virgem como principal gordura para cozinhar?",
    "Você consome 2 ou mais porções de vegetais por dia?",
    "Você come 3 ou mais porções de frutas frescas todos os dias?",
    "Você come menos de 1 porção de carne vermelha ou hambúrguer/salsicha por dia?",
    "Você consome menos de 1 colher de manteiga, margarina ou creme de leite por dia?",
    "Você bebe menos de 1 copo de refrigerante ou bebida açucarada por dia?",
    "Você bebe vinho (com moderação, cerca de 1 taça) de forma frequente? (Se não bebe álcool, marque Sim)",
    "Você consome leguminosas (feijão, lentilha, grão-de-bico) 3 ou mais vezes por semana?",
    "Você consome peixes ou frutos do mar 3 ou mais vezes por semana?",
    "Você come menos de 2 vezes por semana doces ou bolos comerciais?",
    "Você consome oleaginosas (nozes, castanhas, amêndoas) 3 ou mais vezes por semana?",
    "Você prefere consumir carnes brancas (frango, peru) no lugar de carnes vermelhas?",
    "Você faz refogados utilizando alho, cebola ou tomate pelo menos 2 vezes na semana?",
    "Você tempera suas saladas e pratos com azeite extra virgem diariamente?"
  ];

  const handleResposta = (index, valor) => {
    const novasRespostas = [...respostasQuiz];
    novasRespostas[index] = valor;
    setRespostasQuiz(novasRespostas);
  };

  const calcularScore = () => {
    const pontos = respostasQuiz.filter(resp => resp === true).length;
    setPontuacao(pontos);
  };

  const getStatusScore = () => {
    if (pontuacao >= 10) return { texto: "Aderência Excelente! Seu coração agradece.", cor: "text-green-700", bg: "bg-green-100" };
    if (pontuacao >= 6) return { texto: "Aderência Moderada. Bons hábitos, mas dá para melhorar o azeite e os peixes!", cor: "text-orange-700", bg: "bg-orange-100" };
    return { texto: "Aderência Baixa. Cuidado com os ultraprocessados! Hora de focar na saúde.", cor: "text-red-700", bg: "bg-red-100" };
  };

  const faqs = [
    {
      pergunta: "A Dieta Mediterrânea emagrece rápido?",
      resposta: "Nenhuma dieta saudável promove emagrecimento 'mágico' da noite para o dia. A ciência mostra que a dieta mediterrânea promove uma perda de peso idêntica à dieta vegetariana em 3 meses, desde que haja déficit calórico. A vantagem é que ela não causa o terrorismo alimentar que leva ao efeito sanfona, sendo muito mais sustentável."
    },
    {
      pergunta: "O que é proibido na Dieta Mediterrânea?",
      resposta: "Nenhum alimento natural é estritamente proibido, mas a base da dieta exige a redução drástica de alimentos ultraprocessados, açúcares refinados, gorduras trans (margarinas) e carnes processadas (salsicha, bacon, presunto). Carnes vermelhas são consumidas com muita moderação."
    },
    {
      pergunta: "Posso beber vinho todos os dias?",
      resposta: "O consumo de vinho (especialmente o tinto) faz parte da cultura do Mediterrâneo pelos seus polifenóis antioxidantes. A recomendação médica é de consumo moderado e junto com as refeições. No entanto, se você não bebe álcool, não deve começar; você pode obter os mesmos antioxidantes comendo uvas, frutas vermelhas ou tomando chás."
    },
    {
      pergunta: "A dieta mediterrânea é muito cara para fazer no Brasil?",
      resposta: "Este é um grande mito! Você não precisa de salmão norueguês. A 'Mediterrânea Brasileira' foca no azeite extra virgem (o item mais importante), sardinha em lata (rica em ômega-3 e barata), ovos, feijão, grão-de-bico, aveia e frutas da estação. É uma alimentação simples, baseada na feira, não em produtos de prateleira caros."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        {/* BOTÃO INTELIGENTE DE VOLTAR */}
        <button 
          onClick={() => state?.fromBlog ? navigate(-1) : navigate('/blog')}
          className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-600 hover:text-green-700 transition-colors w-fit bg-transparent border-none cursor-pointer p-0"
        >
          <ChevronLeft size={20} /> Voltar para o Blog
        </button>

        <article className="prose prose-lg max-w-none text-left">
          
          {/* TAGS E DATA */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Dietas da Moda</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* TÍTULO PRINCIPAL H1 */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que é Dieta Mediterrânea? O Segredo da Ciência para o Coração e o Emagrecimento
          </h1>

          {/* RESPOSTA RÁPIDA (FEATURED SNIPPET) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: O que é Dieta Mediterrânea?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              A <strong>Dieta Mediterrânea</strong> não é um regime passageiro, mas um modo de vida baseado nos hábitos alimentares de populações que vivem ao redor do Mar Mediterrâneo. A sua base é pesco-vegetariana, riquíssima em frutas, vegetais, leguminosas, grãos integrais, peixes e sementes. O seu principal trunfo é o uso abundante do <strong>azeite de oliva extra virgem</strong> como principal fonte de gordura boa. É comprovadamente o melhor padrão alimentar do mundo para proteger a saúde cardiovascular e promover a longevidade.
            </p>
          </div>

          {/* CAIXA COMBINADA: ÁUDIO + TOC */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            
            {/* ÁUDIO (PERFORMANCE: preload="none") */}
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-green-700 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic uppercase tracking-widest m-0">Ouça este artigo</h3>
              </div>
              <audio preload="none" controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Dieta-Mediterranea.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <div className="h-px bg-green-100/60 w-full"></div>

            {/* ÍNDICE (TOC) */}
            <nav className="bg-slate-50">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-700 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-700' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1200px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#historia" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Globe size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A História e o Estudo dos 7 Países</a></li>
                  <li><a href="#piramide" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Pirâmide Mediterrânea</a></li>
                  <li><a href="#coracao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Proteção ao Coração (PREDIMED)</a></li>
                  <li><a href="#microbiota" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Dna size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Impacto na Microbiota Intestinal</a></li>
                  <li><a href="#emagrecimento" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dieta Mediterrânea Emagrece?</a></li>
                  <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Teste: Você segue a dieta?</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Comparação com outras dietas</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                  <li><a href="#afiliado" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><ShoppingCart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Segredo do Azeite</a></li>
                  <li><a href="#conclusao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Conclusão da Ciência</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes (FAQ)</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            
            <p>
              Quando pensamos em entrar numa "dieta", a primeira imagem que costuma vir à nossa mente é um prato minúsculo, frango grelhado ressecado, alface e uma fome constante. O terrorismo nutricional nos ensinou que para ter saúde, precisamos sofrer. No entanto, existe um padrão alimentar milenar que vai na contramão dessa loucura restritiva. Ele permite comer com prazer, fartura e muito sabor, ao mesmo tempo em que blinda as nossas células contra doenças graves.
            </p>
            <p>
              Saber de fato <strong>o que é dieta mediterrânea</strong> é entender que a nutrição ideal foca muito mais na <em>qualidade</em> e na <em>sinergia</em> dos alimentos, do que em cortar macros de forma desesperada. Vamos mergulhar na ciência desse padrão que a medicina considera o verdadeiro "santo graal" da longevidade.
            </p>
                         
          {/* 2. IMAGEM DE CAPA COM PRIORIDADE LCP E HACK DE PERFORMANCE */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">

            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                {/* 1. CELULAR: Força baixar apenas 500px (Lighthouse dá nota 100 aqui) */}
                <source 
                  media="(max-width: 768px)" 
                  srcSet={`https://wsrv.nl/?url=${artigoCapa.replace('https://', '')}&w=500&output=webp`} 
                />

                {/* 2. TABLET: Força baixar a versão de 800px */}
                <source 
                  media="(max-width: 1024px)" 
                  srcSet={`https://wsrv.nl/?url=${artigoCapa.replace('https://', '')}&w=800&output=webp`} 
                />

                {/* 3. DESKTOP E DISCOVER: Baixa a versão original lindíssima de 1280px */}
                <img 
                  src={dietaCapa} 
                  alt="Pinguim Pingus com chapéu de chef ao lado da pirâmide da Dieta Mediterrânea, rica em azeite, vegetais, frutas e peixes." 
                  title="A Pirâmide da Dieta Mediterrânea e o Pingus"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="eager" 
                  fetchpriority="high"
                  decoding="async"
                /> 
              </picture>
            </div>
              <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
                <p className="text-sm md:text-base text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                  O azeite de oliva, os vegetais frescos e os pescados formam o coração de um metabolismo saudável.
                </p>
              </figcaption>
            </figure>

            <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Globe className="text-green-700"/> A História: O Estudo dos 7 Países e as Blue Zones
            </h2>
            <p>
              Para entendermos a força desse estilo de vida, precisamos voltar aos anos 50. O fisiologista Ancel Keys liderou uma pesquisa colossal conhecida como "O Estudo dos Sete Países". O objetivo era mapear o estilo de vida, o <Link to="/calculadora-de-imc" className="text-green-700 font-bold hover:underline">Índice de Massa Corporal (IMC)</Link> e a mortalidade de várias nações. 
            </p>
            <p>
              Keys notou algo impressionante: populações que viviam na Grécia, no sul da Itália e em ilhas do Mediterrâneo apresentavam taxas inacreditavelmente baixas de mortalidade por doença coronariana, mesmo consumindo uma quantidade considerável de gorduras em seu cardápio diário. A grande virada de chave para a ciência foi perceber que o vilão do coração não era a gordura em si, mas o <strong>tipo de gordura</strong>. 
            </p>
            <p>
              Essas populações mediterrâneas consumiam quase exclusivamente gorduras monoinsaturadas (vindas das azeitonas) e poli-insaturadas (vindas dos peixes e castanhas), ignorando completamente os alimentos ultraprocessados que dominavam o Ocidente. Hoje, locais como a Sardenha (Itália) e a Ilha de Ikaria (Grécia) são classificados como <strong>Blue Zones</strong>, regiões onde os habitantes vivem rotineiramente mais de 100 anos com excelente saúde cerebral e física.
            </p>

            <h2 id="piramide" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-700"/> A Pirâmide da Dieta Mediterrânea: O que comer na prática?
            </h2>
            <p>
              A palavra dieta vem do grego <em>diaita</em>, que significa "modo de vida". É exatamente isso que a Dieta Mediterrânea propõe: não é um cardápio fechado de gaveta, mas um padrão de escolhas inteligente. Veja como a pirâmide se estrutura:
            </p>

            <ul className="list-none space-y-4 my-8 p-0">
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Leaf className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Base Diária (A Fundação):</strong>
                  <span className="text-slate-600 text-base">Consumo muito elevado e variado de vegetais crus e cozidos, frutas de diversas cores, grãos inteiros e pães fibrosos, além de leguminosas (feijões, lentilhas) e oleaginosas (nozes, sementes). O <strong>Azeite de Oliva Extra Virgem</strong> é o rei absoluto, usado como a principal fonte de gordura para o preparo de refeições e temperos. Temperos artificiais dão lugar a ervas aromáticas frescas, alho e cebola.</span>
                </div>
              </li>
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Fish className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Consumo Semanal Frequente (2 a 4x):</strong>
                  <span className="text-slate-600 text-base">O mar dita as regras das proteínas. Peixes e pescados devem aparecer na mesa pelo menos duas vezes por semana. O consumo de aves, ovos (2 a 4 vezes) e laticínios (de preferência magros, como queijos e iogurtes naturais) é bem-vindo, mas em porções controladas.</span>
                </div>
              </li>
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">No Topo da Pirâmide (Raramente):</strong>
                  <span className="text-slate-600 text-base">Carnes vermelhas e doces ficam para o topo da pirâmide, sendo consumidos em pequenas porções e com pouca frequência (algumas vezes ao mês). Carnes ultraprocessadas (como embutidos, salsichas e presuntos) e margarinas ricas em gordura trans são praticamente banidas do cotidiano.</span>
                </div>
              </li>
            </ul>

            <h2 id="coracao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-700"/> A Ciência: Estudo PREDIMED e Proteção ao Coração
            </h2>
            <p>
              O status de "melhor dieta do mundo" não foi ganho por votos na internet, mas por ensaios clínicos monumentais. Um dos mais poderosos foi o estudo espanhol <strong>PREDIMED</strong>, publicado no <em>The New England Journal of Medicine</em> em 2013. 
            </p>
            <p>
              O estudo queria verificar se essa dieta realmente protegia o coração de pessoas em alto risco cardiovascular. Eles dividiram as pessoas em três grupos: um seguiu a Dieta Mediterrânea consumindo bastante Azeite Extra Virgem (4 colheres/dia); o segundo seguiu a dieta recebendo um mix diário de nozes; e o terceiro grupo (controle) recebeu ordens apenas para reduzir gorduras totais (Low Fat).
            </p>
            <p>
              Os resultados foram tão drásticos que o conselho de ética mandou interromper o estudo antes do prazo: os grupos que seguiram a dieta mediterrânea tiveram uma redução muito significativa em infartos, mortes cardíacas e, de forma extremamente marcante, na incidência de <strong>Derrames (AVC)</strong> em comparação com quem apenas cortou as gorduras.
            </p>

            <blockquote className="my-10 border-l-4 border-green-600 bg-green-50 p-6 md:p-8 rounded-r-3xl shadow-sm">
              <p className="m-0 text-xl md:text-2xl font-black text-green-900 italic leading-relaxed">
                O grande responsável por essa blindagem nas artérias? Os compostos fenólicos do azeite. Substâncias potentes como a <strong>oleuropeína e o hidroxitirosol</strong> atuam como antioxidantes naturais no nosso sangue, combatendo o estresse celular, desinflamando as veias e evitando a oxidação perigosa do <Link to="/colesterol-hdl-ldl" className="text-green-700 font-bold hover:underline">colesterol LDL</Link>.
              </p>
            </blockquote>

            <h2 id="microbiota" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Dna className="text-green-700"/> O Impacto Oculto na Microbiota Intestinal
            </h2>
            <p>
              Você não come apenas para o seu estômago; você come para os trilhões de bactérias que moram dentro de você. Uma revisão de estudos demonstrou que a alta ingestão de fibras complexas (acessíveis à microbiota), vitaminas e ácidos graxos insaturados aumenta a diversidade dos micróbios no nosso intestino. 
            </p>
            <p className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6">
              A Dieta Mediterrânea promove ativamente o crescimento de colônias de bactérias do bem, como <em>Lactobacilli</em>, <em>Bifidobacteria</em> e <em>Bacteroides</em>. Ao fermentarem as fibras de grãos integrais e leguminosas, essas bactérias produzem ácidos graxos de cadeia curta (como acetato e butirato), que reforçam a parede intestinal, evitam que toxinas vazem para o sangue (Leaky Gut) e turbinam o seu metabolismo basal e a sua sensibilidade à insulina.
            </p>

            <h2 id="emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-700"/> Afinal, a Dieta Mediterrânea Emagrece?
            </h2>
            <p>
              Essa é a pergunta de ouro no consultório. Se a dieta tem tanto azeite, nozes e peixes (fontes de gordura e calorias), ela engorda? A resposta científica é: <strong>ela não só não engorda, como é excelente para o emagrecimento sustentável</strong>. No entanto, precisamos ser honestos.
            </p>
            <p>
              O estudo CARDIVEG comparou diretamente a dieta mediterrânea de baixa caloria com uma dieta vegetariana de baixa caloria por 3 meses. A conclusão clínica foi que <strong>ambas as dietas foram igualmente eficazes na redução do peso corporal e na perda de massa gorda</strong>. Ou seja, para o ponteiro da balança descer de verdade, o que manda é a magnitude do seu déficit calórico. Se você comer baldes de azeite e montanhas de arroz integral, não vai emagrecer. 
            </p>
            <p>
              Contudo, a grande diferença está na saúde dos seus exames de sangue e na facilidade de adesão! O estudo também comprovou que a Dieta Mediterrânea levou a uma maior redução dos níveis de triglicerídeos no sangue do que a dieta vegetariana. Como esse padrão alimentar é muito farto, a sua digestão fica mais lenta e os níveis do <Link to="/hormonios_da_fome_emagrecimento" className="text-green-700 font-bold hover:underline">hormônio da saciedade disparam</Link>. Você emagrece sem passar o dia de mau humor, blindando-se contra a perigosa <Link to="/o-que-e-fome-emocional" className="text-green-700 font-bold hover:underline">fome emocional</Link>.
            </p>

            {/* ELEMENTO INTERATIVO: CALCULADORA PREDIMED */}
            <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <Brain className="text-green-700"/> Teste Interativo: Você realmente segue a Dieta Mediterrânea?
            </h2>
            <p className="mb-8">
              Muitas pessoas acham que comem de forma saudável, mas será que sua rotina se aproxima da excelência do Mediterrâneo? Faça o nosso teste interativo, baseado nos questionários oficiais do estudo PREDIMED, para descobrir a sua nota de proteção metabólica!
            </p>

            <div className="my-10 bg-white border border-slate-200 shadow-xl rounded-[3rem] overflow-hidden">
              <div className="bg-slate-900 p-6 md:p-8 text-center">
                <strong className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                  <Activity className="text-green-500" /> Score de Aderência PREDIMED
                </strong>
                <p className="text-slate-300 font-medium mt-2 m-0 text-sm md:text-base">
                  Responda "Sim" ou "Não" às 14 perguntas e descubra seu nível de proteção.
                </p>
              </div>

              <div className="p-4 md:p-8 space-y-4">
                {perguntasPREDIMED.map((pergunta, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="m-0 text-sm font-bold text-slate-700 md:w-3/4">{index + 1}. {pergunta}</p>
                    <div className="flex items-center gap-2 md:w-1/4 justify-start md:justify-end">
                      <button 
                        onClick={() => handleResposta(index, true)}
                        className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${respostasQuiz[index] === true ? 'bg-green-600 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-green-500'}`}
                      >
                        Sim
                      </button>
                      <button 
                        onClick={() => handleResposta(index, false)}
                        className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${respostasQuiz[index] === false ? 'bg-red-600 text-white' : 'bg-white border border-slate-200 text-slate-500 hover:border-red-500'}`}
                      >
                        Não
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="text-center pt-8 border-t border-slate-100">
                  <button 
                    onClick={calcularScore}
                    disabled={respostasQuiz.includes(null)}
                    className="bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                  >
                    Ver Meu Resultado Final
                  </button>
                  {respostasQuiz.includes(null) && <p className="text-xs text-red-500 font-medium mt-3 italic">*Responda todas as 14 perguntas para calcular.</p>}
                </div>

                {pontuacao !== null && (
                  <div className={`mt-8 p-6 rounded-[2rem] border-2 text-center transition-all duration-500 ${getStatusScore().bg} border-${getStatusScore().cor.replace('text-', '')}`}>
                    <span className="text-5xl md:text-6xl font-black italic mb-2 block drop-shadow-sm flex items-center justify-center gap-2">
                       {pontuacao} <span className="text-2xl text-slate-400">/ 14</span>
                    </span>
                    <p className={`font-black uppercase tracking-widest mt-2 m-0 text-lg ${getStatusScore().cor}`}>
                      {getStatusScore().texto}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* SEÇÃO DE COMPARAÇÃO DE DIETAS */}
            <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-700"/> Comparativo das Grandes Dietas: Mediterrânea, Low Carb e Cetogênica
            </h2>
            <p className="mb-8">
              Em meio a tantas informações, é fácil confundir conceitos. Diferenciar a <Link to="/o-que-e-dieta-low-carb" className="text-green-700 font-bold hover:underline">Dieta Low Carb</Link>, a Dieta Cetogênica e a Dieta Mediterrânea é crucial para escolher a estratégia metabólica ideal para o seu perfil e momento de vida.
            </p>

            {/* TABELA DESKTOP */}
            <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/5">Característica</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-4/15">Mediterrânea</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-blue-700 bg-blue-50/50 w-4/15">Low Carb</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-purple-700 bg-purple-50/50 w-4/15">Cetogênica</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {comparativoDietas.map((item) => (
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 border-r border-slate-100">
                        <div className="flex items-center gap-3 font-black text-slate-800 italic">
                          <div className="p-2 bg-slate-100 rounded-lg shrink-0">{item.icone}</div>
                          {item.caracteristica}
                        </div>
                      </td>
                      <td className="p-5 border-r border-slate-100 text-slate-700 font-bold leading-relaxed">{item.mediterranea}</td>
                      <td className="p-5 border-r border-slate-100 text-slate-600 leading-relaxed">{item.lowcarb}</td>
                      <td className="p-5 text-slate-600 leading-relaxed">{item.cetogenica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CARDS MOBILE */}
            <div className="md:hidden space-y-6 my-8">
              {comparativoDietas.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col gap-5">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="p-2 bg-slate-50 rounded-xl">{item.icone}</div>
                    <span className="font-black text-lg italic uppercase text-slate-800">{item.caracteristica}</span>
                  </div>
                  
                  <div className="bg-green-50/50 p-4 rounded-2xl border border-green-100">
                    <span className="block text-[10px] uppercase tracking-widest font-black text-green-700 mb-1">Mediterrânea:</span>
                    <span className="text-sm font-bold text-slate-800 leading-snug">{item.mediterranea}</span>
                  </div>
                  
                  <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                    <span className="block text-[10px] uppercase tracking-widest font-black text-blue-700 mb-1">Low Carb:</span>
                    <span className="text-sm font-medium text-slate-700 leading-snug">{item.lowcarb}</span>
                  </div>
                  
                  <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                    <span className="block text-[10px] uppercase tracking-widest font-black text-purple-700 mb-1">Cetogênica:</span>
                    <span className="text-sm font-medium text-slate-700 leading-snug">{item.cetogenica}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-700"/> Aprofunde-se: A Dieta Mediterrânea na Prática
            </h2>
            <p>
              Para ver com clareza como aplicar esse conhecimento poderoso na sua cozinha amanhã mesmo, deixo aqui uma excelente aula da nutricionista Patricia Leite sobre os pilares práticos e benefícios dessa que é considerada por especialistas uma das intervenções alimentares mais seguras e recomendadas da literatura médica.
            </p>

            {/* VIDEO LAZY LOADING */}
            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Como fazer a Dieta Mediterrânea</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <YouTubeLazy videoId="Axo9aie0PAU" title="O Que é Dieta Mediterrânea e Como Fazer" />
              </div>
            </div>

{/* AFILIADO MERCADO LIVRE - O PINGUS APROVA (FRIGIDEIRA SEM ÓLEO) */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
                {/* SELO NO CANTO SUPERIOR */}
                <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>

                {/* CONTAINER FLEXÍVEL (IMAGEM + TEXTO) */}
                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    {/* FOTO DO PINGUS (AUTORIDADE) */}
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.webp`} 
                            alt="Selo de Qualidade Pingus" 
                            className="w-full h-full object-contain" 
                            width="160"
                            height="160"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Frigideira Antiaderente <span className="text-green-700">Cerâmica Premium</span>
                        </h4>

                        {/* IMAGEM DO PRODUTO ATUALIZADA */}
                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                            <img 
                                src={`${githubImgBase}Afiliado/Frigideira01.webp`} 
                                alt="Frigideira Antiaderente de Cerâmica" 
                                className="w-full h-auto object-contain" 
                                width="200"
                                height="200"
                                loading="lazy"
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Uma alimentação não precisa ser rica em manteiga ou óleo todo dia. Para garantir os benefícios de uma alimentação gostosa e saudável sem adicionar gorduras ruins à sua rotina, <strong>o ideal é uma frigideira de cerâmica de alta qualidade, onde o alimento não gruda, dispensando o uso de óleo</strong>. É praticidade e saúde na cozinha.
                        </p>

                        {/* BOTÃO COM LINK AFILIADO */}
                        <a 
                            href="https://meli.la/1KmaEhC" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div> {/* FIM DO CONTAINER FLEXÍVEL */}

                {/* DISCLOSURE OBRIGATÓRIO (AGORA FORA DO CONTAINER FLEXÍVEL) */}
                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, o blog recebe uma comissão que ajuda a manter os nossos artigos científicos gratuitos, sem gerar custo nenhum para você.
                    </p>
                </div>
            </div>

            {/* SEÇÃO DE CONCLUSÃO */}
            <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <CheckCircle2 className="text-green-700"/> Conclusão: O Veredito da Ciência
            </h2>
            <p>
              Para resumir o que a ciência nos mostra, a Dieta Mediterrânea é uma linha alimentar basicamente pesco-vegetariana, que faz parte da cultura de diversos povos e começou a ganhar atenção global após o Estudo dos 7 Países. Ela se destaca por ser extremamente rica em compostos bioativos, compostos fenólicos e antioxidantes, além de exigir um consumo baixíssimo de alimentos ultraprocessados.
            </p>
            <p>
              O seu grande diferencial é o alto consumo de gorduras boas (MUFAs) e grãos integrais. É fundamental lembrar que ela não apresenta vantagem mágica no emagrecimento frente a outras linhas saudáveis com igual déficit calórico, mas a sua facilidade de adesão e os imensos benefícios cardiovasculares a tornam uma das melhores estratégias para a saúde e longevidade.
            </p>

            {/* FAQ DINÂMICO */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-700" /> Perguntas Frequentes (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>
                        {faq.pergunta}
                      </h3>
                      <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                      <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Newsletter />
          </div>
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* CARTÃO AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <img 
              src={`${githubImgBase}Eu_1.webp`} 
              alt="Marco Aurélio Jr. - Autor e Nutricionista focado em Ciência" 
              title="Marco Aurélio Jr. - Estudante de Nutrição ISAK 1"
              className="w-full h-full object-cover"
              width="96"
              height="96"
              loading="lazy"
              onError={(e) => { e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>"; }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Minha missão é transformar a linguagem pesada da ciência médica em conhecimento prático para o seu dia a dia. Ao invés de dietas restritivas que destroem sua relação com a comida, eu mostro como padrões testados e comprovados (como a dieta mediterrânea) podem proteger suas células, acelerar o metabolismo e prolongar a sua vida com saúde de verdade.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
