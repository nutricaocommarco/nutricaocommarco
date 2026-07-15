import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Clock, Shield, 
  Zap, ChevronRight, Headphones, ChevronDown, ShoppingCart, 
  Target, Flame, Coffee, Dumbbell, Brain, Check, X, AlertTriangle, 
  Video, PlayCircle, Apple, PieChart, Utensils, Scale, PlusCircle, Trash2
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-07-15";
const dateModifiedISO = "2026-07-15";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const artigoCapa = `${githubImgBase}Blog/LowCarb_Capa.jpg`; 

// Banco de Dados Simples para a Calculadora
const foodDatabase = [
  { id: 1, name: "Arroz Branco (Cozido)", carbs: 28.2 },
  { id: 2, name: "Feijão Carioca (Cozido)", carbs: 13.6 },
  { id: 3, name: "Batata Doce (Cozida)", carbs: 18.4 },
  { id: 4, name: "Pão Francês (1 unidade = 50g)", carbs: 50.0 },
  { id: 5, name: "Ovo de Galinha", carbs: 1.1 },
  { id: 6, name: "Peito de Frango", carbs: 0.0 },
  { id: 7, name: "Abacate", carbs: 8.5 },
  { id: 8, name: "Maçã", carbs: 13.8 },
  { id: 9, name: "Banana Prata", carbs: 26.0 },
  { id: 10, name: "Brócolis (Cozido)", carbs: 4.4 },
];

export default function DietaLowCarb() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados da Calculadora Low Carb
  const [selectedFoodId, setSelectedFoodId] = useState('');
  const [foodQty, setFoodQty] = useState('');
  const [plate, setPlate] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Lógica da Calculadora
  const handleAddFood = (e) => {
    e.preventDefault();
    if (!selectedFoodId || !foodQty) return;
    const food = foodDatabase.find(f => f.id === parseInt(selectedFoodId));
    const carbsForQty = (food.carbs * parseFloat(foodQty)) / 100;
    
    setPlate([...plate, { ...food, qty: parseFloat(foodQty), totalCarbs: carbsForQty, idInstance: Date.now() }]);
    setFoodQty('');
    setSelectedFoodId('');
  };

  const handleRemoveFood = (idInstance) => {
    setPlate(plate.filter(item => item.idInstance !== idInstance));
  };

  const totalCarbsInPlate = plate.reduce((acc, curr) => acc + curr.totalCarbs, 0);
  const progressPercentage = Math.min((totalCarbsInPlate / 130) * 100, 100);

  const faqs = [
    {
      pergunta: "Posso comer frutas na Dieta Low Carb?",
      resposta: "Sim! Na dieta low carb não há exclusão total de frutas, mas prioriza-se aquelas com menor densidade de açúcar e maior teor de fibras, como morangos, mirtilos, coco, abacate e limão. Ao contrário da cetogênica, você tem margem para encaixar uma maçã ou pera dependendo do seu gasto calórico."
    },
    {
      pergunta: "A dieta low carb faz perder massa muscular?",
      resposta: "Não, desde que você consuma proteínas adequadamente. A base da dieta low carb permite uma boa ingestão de carnes, ovos e laticínios. O catabolismo só ocorre se houver um déficit calórico exagerado aliado à baixa ingestão de proteínas e falta de treino de força."
    },
    {
      pergunta: "Preciso contar calorias fazendo low carb?",
      resposta: "No início, muitas pessoas emagrecem apenas pelo aumento da saciedade provocado pelas proteínas e gorduras. Porém, para continuar perdendo gordura a longo prazo, o déficit calórico continua sendo a lei da física. Low carb facilita o processo controlando a fome, mas as calorias ainda importam."
    },
    {
      pergunta: "Dieta low carb dá dor de cabeça?",
      resposta: "Nos primeiros dias, ao reduzir os carboidratos, o corpo elimina muito glicogênio, que carrega água e sódio junto. Essa desidratação rápida pode causar leve dor de cabeça. Aumentar a ingestão de água mineral e ajustar o sal na comida resolve o problema rapidamente."
    }
  ];

  const keywords = "o que é dieta low carb, dieta low carb, dieta mediterrânea, diferença entre low carb e cetogênica, como começar a fazer dieta low carb, gordura saturada vs insaturada";

  return (
    <>
      <Helmet>
        <title>O Que é Dieta Low Carb? Guia, Diferenças e Cardápio</title>
        <meta name="description" content="Aprenda o que é dieta low carb. Descubra a diferença entre low carb e cetogênica, como começar, cardápio e os mitos da gordura saturada vs insaturada." />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que é Dieta Low Carb? Guia Completo e Calculadora" />
        <meta property="og:description" content="Saiba o que é a dieta low carb na prática. Entenda os limites de carboidratos, como as gorduras funcionam e monte seu cardápio." />
        <meta property="og:image" content={artigoCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        
        {/* SCHEMA 1: Article */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.nutricaocommarco.com.br${pathname}` },   
            "headline": "O Que é Dieta Low Carb? Guia, Diferenças e Cardápio",
            "image": [artigoCapa],
            "author": { "@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre", "jobTitle": "Estudante de Nutrição", "knowsAbout": ["O que é dieta low carb", "Dieta Low Carb", "Dieta Mediterrânea", "Emagrecimento", "Nutrição Clínica"] },
            "publisher": { "@type": "Organization", "name": "Nutrição com Marco", "logo": { "@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png` } },
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO,
            "description": "Aprenda o que é dieta low carb. Descubra a diferença entre low carb e cetogênica, como começar e os mitos das gorduras.",
            "keywords": "o que é dieta low carb, dieta low carb"
          }) }} />

        {/* SCHEMA 2: MedicalWebPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "O Que é Dieta Low Carb e Seus Impactos Metabólicos",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Dieta Low Carb"},
              {"@type": "MedicalEntity", "name": "Carboidratos"},
              {"@type": "MedicalEntity", "name": "Metabolismo"}
            ]
          }) }} />

        {/* SCHEMA 3: FAQPage INVISÍVEL PARA SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.pergunta.includes("low carb") ? faq.pergunta.replace("low carb", "dieta low carb e o que é dieta low carb") : faq.pergunta,
              "acceptedAnswer": { "@type": "Answer", "text": faq.resposta }
            }))
          }) }} />
      </Helmet>

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit" title="Voltar ao Blog para ler mais sobre o que é dieta low carb">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Dietas da Moda</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que é Dieta Low Carb? A Diferença para a Cetogênica e Como Começar
          </h1>
          
          {/* RESPOSTA DIRETA NO TOPO (FEATURED SNIPPET) */}
          <div className="mb-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Target className="text-green-600 shrink-0" /> Resposta Direta: O que é Dieta Low Carb?
              </h2>
              <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                Saber <strong>o que é dieta low carb</strong> significa entender que ela é uma estratégia alimentar focada na redução inteligente do consumo de carboidratos diários (geralmente entre 50g e 130g por dia). Diferente das dietas convencionais que muitas vezes abusam de farinhas e açúcares, a dieta low carb prioriza o consumo de proteínas de alto valor biológico, vegetais ricos em fibras e gorduras saudáveis para fornecer energia. O objetivo não é "zerar" o carboidrato, mas sim melhorar a sensibilidade à insulina, controlar a saciedade atuando diretamente nos <Link to="/hormonios_da_fome_emagrecimento" className="text-green-800 font-bold hover:underline">hormônios da fome</Link> e facilitar o uso da gordura estocada como combustível, promovendo um emagrecimento sustentável e de longo prazo.
              </p>
            </div>
          </div>

          {/* ÁUDIO */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none" title="Áudio explicando o que é dieta low carb">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/low-carb.mp3" type="audio/mpeg" />
                O seu navegador não suporta o áudio.
              </audio>
            </div>
          </div>

          {/* ÍNDICE (TOC) */}
          <div className="mb-12 border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden bg-slate-50">
            <button 
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              aria-label="Abrir Índice do Conteúdo sobre o que é dieta low carb"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                  <Activity size={18} />
                </div>
                <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
              </div>
              <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} />
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1200px] opacity-100 border-t border-slate-200' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
              <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                <li><a href="#historia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="História da Dieta Low Carb"><Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A História da Restrição</a></li>
                <li><a href="#diferenca" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Diferença entre low carb e cetogênica"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Diferença: Low Carb x Keto</a></li>
                <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Calculadora de Carboidratos da Dieta Low Carb"><PieChart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Calculadora de Carboidratos</a></li>
                <li><a href="#gorduras" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Gordura saturada vs insaturada na Dieta Mediterrânea"><Droplet size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Gorduras e Dieta Mediterrânea</a></li>
                <li><a href="#como-comecar" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Como começar a fazer dieta low carb"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Começar na Low Carb</a></li>
                <li><a href="#video-lowcarb" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="Vídeo: O que é dieta low carb"><Video size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0" title="FAQ sobre o que é dieta low carb"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
              </ul>
            </div>
          </div>

          <p className="text-xl text-slate-600 font-medium mb-10 border-l-4 border-green-600 pl-4">
            Em um mundo hoje amplamente dominado por alimentos ultraprocessados, é muito comum que nós, como sociedade, confundamos a sede de nutrientes reais do nosso corpo com a clássica <Link to="/o-que-e-fome-emocional" className="text-green-600 font-bold hover:underline">fome emocional</Link>. Diante desse cenário de adoecimento metabólico, a <strong>dieta low carb</strong> surge não como uma restrição chata e severa, mas como um verdadeiro retorno à base da biologia humana. Entender de uma vez por todas o que é dieta low carb é o primeiro passo para resgatar a sua saúde, melhorar seus exames e perder peso sem precisar viver escravo da balança e contando os gramas de uma folha de alface.
          </p>

          {/* CAPA COM SEO INVISÍVEL */}
          <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
            <img 
              src={artigoCapa} 
              alt="Descubra o que é dieta low carb, a diferença entre low carb e cetogênica e como começar a fazer hoje mesmo." 
              title="O que é Dieta Low Carb"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"; }}
            />
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                Aprender o que é dieta low carb vai muito além de apenas cortar o pão pela manhã; é aprender a priorizar a verdadeira densidade nutricional.
              </p>
            </figcaption>
          </figure>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Clock className="text-green-600"/> A História: Como a Low Carb Ganhou o Mundo
            </h2>
            <p>
              Para mergulhar no conceito de o que é dieta low carb, precisamos voltar um pouco no tempo. Ao contrário do que muitos imaginam, a restrição de carboidratos não é uma invenção da era moderna ou de influenciadores do Instagram. Já no longínquo ano de 1862, o britânico William Banting publicou a sua "Carta sobre a Corpulência". Foi um dos primeiros e mais famosos relatos documentados na história sobre como a redução drástica do consumo de pães, açúcares, batatas e cerveja o ajudou a tratar a obesidade que, na época, ameaçava a sua própria vida. Banting popularizou tanto essa estratégia alimentar que, em algumas partes do mundo, a palavra "banting" virou sinônimo do ato de "fazer dieta".
            </p>
            <p>
              Esse movimento de restrição de carboidratos ganhou cada vez mais respaldo científico ao longo do século XX e literalmente explodiu em popularidade entre as décadas de 70 e 90 com a polêmica dieta do Dr. Atkins. Embora a abordagem original do Atkins fosse muito voltada para a <Link to="/o-que-e-dieta-cetogenica" className="text-green-600 font-bold hover:underline">dieta cetogênica</Link> severa (cortando quase totalmente os carboidratos), a ciência da nutrição moderna evoluiu muito. 
            </p>
            <p>
               Hoje, entendemos perfeitamente o que é dieta low carb e sabemos com clareza que <strong>não é necessário entrar em cetose profunda</strong> para conseguir colher os excelentes benefícios da regulação da nossa insulina. A dieta low carb atual, que é recomendada pelos melhores profissionais, é perfeitamente equilibrada, focada em alimentos integrais e amplamente apoiada por estudos sérios para o tratamento do diabetes tipo 2, para a melhora geral do nosso metabolismo e, claro, para garantir o emagrecimento de longo prazo, fugindo finalmente do terrível <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-bold hover:underline">efeito sanfona</Link>.
            </p>

            <h2 id="diferenca" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Qual a Diferença Entre Low Carb e Cetogênica?
            </h2>
            <p>
              Sem dúvida alguma, essa é a maior confusão entre as pessoas que começam a estudar nutrição e buscam melhorar o corpo. Ambas as estratégias restringem os carboidratos, sim, mas os propósitos biológicos e, principalmente, as margens de tolerância do que você pode comer no dia a dia são completamente diferentes. A verdadeira <strong>diferença entre low carb e cetogênica</strong> reside na quantidade total de carboidratos permitida em um dia e na resposta exata que o seu fígado dará a essa restrição.
            </p>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <caption className="sr-only">Tabela explicativa comparando a diferença entre low carb e cetogênica e o que é dieta low carb</caption>
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Característica</th>
                    <th className="p-5 w-1/3 text-green-700">Dieta Low Carb</th>
                    <th className="p-5 w-1/3 text-orange-600">Dieta Cetogênica (Keto)</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Limite de Carboidratos</td>
                    <td className="p-5">Permite o consumo flexível entre <strong>50g e 130g</strong> por dia.</td>
                    <td className="p-5">Muito restrito. Limite inferior a <strong>30g a 50g</strong> por dia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Flexibilidade</td>
                    <td className="p-5">É alta. Permite que você encaixe frutas um pouco mais doces (como uma maçã ou banana ocasional) e o uso de raízes ou tubérculos, servindo até para saber se o <Link to="/diabetico_pode_comer_beterraba" className="text-green-600 hover:underline">diabético pode comer beterraba</Link> na sua rotina.</td>
                    <td className="p-5">É baixíssima. É focada quase que exclusivamente no consumo de gorduras, muitos vegetais folhosos e em proteínas que devem ser rigorosamente calculadas.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Estado Metabólico</td>
                    <td className="p-5">O corpo usa tanto a gordura quanto a glicose de forma mesclada, melhorando muito a sua sensibilidade à insulina.</td>
                    <td className="p-5">O corpo é forçado a entrar em um estado de <strong>Cetose</strong>, produzindo no fígado os chamados corpos cetônicos para gerar energia.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Sustentabilidade</td>
                    <td className="p-5">É muito mais fácil de ser mantida no longo prazo e permite uma ótima adaptação em festas ou viagens de férias.</td>
                    <td className="p-5">Bastante difícil de manter. É uma dieta geralmente usada de forma terapêutica por períodos determinados de tempo.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CALCULADORA DE CARBOIDRATOS INTERATIVA */}
            <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <PieChart className="text-green-600"/> Calculadora Low Carb: Entenda os Carboidratos
            </h2>
            <p className="mb-6">
              A melhor forma de aprender na prática o que é dieta low carb é visualizando. Por isso, desenvolvi esta ferramenta interativa exclusiva para você. O limite clássico de uma Dieta Low Carb mais flexível é de aproximadamente <strong>130 gramas de carboidratos por dia</strong>. Brinque à vontade adicionando os alimentos da lista abaixo e veja o quão rápido você atinge esse limite metabólico dependendo apenas de suas escolhas!
            </p>

            <div className="my-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Inputs */}
                <div className="flex-1 bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest mb-4">Adicionar Alimento</h3>
                  <form onSubmit={handleAddFood} className="flex flex-col gap-4">
                    <select 
                      value={selectedFoodId} 
                      onChange={(e) => setSelectedFoodId(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl outline-none font-medium text-slate-700"
                      required
                    >
                      <option value="" disabled>Escolha um alimento base...</option>
                      {foodDatabase.map(f => (
                        <option key={f.id} value={f.id}>{f.name} ({f.carbs}g carb/100g)</option>
                      ))}
                    </select>
                    <div className="flex gap-4">
                      <input 
                        type="number" 
                        placeholder="Quantidade (gramas)" 
                        value={foodQty} 
                        onChange={(e) => setFoodQty(e.target.value)}
                        className="w-full bg-white border border-slate-200 p-3 rounded-xl outline-none font-medium text-slate-700"
                        min="1"
                        required
                      />
                      <button type="submit" className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center shrink-0 w-12 h-12" aria-label="Adicionar prato na dieta low carb">
                        <PlusCircle size={20} />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Resumo do Prato */}
                <div className="flex-1 bg-slate-900 p-6 rounded-3xl border border-slate-800 text-white flex flex-col">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span>Meu Cardápio</span>
                    <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm">{totalCarbsInPlate.toFixed(1)}g</span>
                  </h3>
                  
                  <div className="flex-1 overflow-y-auto max-h-[150px] pr-2 space-y-2 mb-4">
                    {plate.length === 0 ? (
                      <p className="text-slate-400 text-sm italic">O prato está vazio. Adicione alimentos ao lado para simular o que é dieta low carb.</p>
                    ) : (
                      plate.map(item => (
                        <div key={item.idInstance} className="flex justify-between items-center bg-slate-800 p-3 rounded-xl border border-slate-700">
                          <div>
                            <p className="font-bold text-sm m-0 leading-none">{item.name}</p>
                            <span className="text-[11px] text-slate-400">{item.qty}g</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-black text-green-400 text-sm">{item.totalCarbs.toFixed(1)}g</span>
                            <button onClick={() => handleRemoveFood(item.idInstance)} className="text-red-400 hover:text-red-300">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Barra de Progresso Low Carb (130g) */}
                  <div className="mt-auto pt-4 border-t border-slate-700">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                      <span className="text-slate-400">0g</span>
                      <span className="text-slate-300">Limite Diário Low Carb (130g)</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden relative">
                      <div 
                        className={`h-full transition-all duration-500 ${totalCarbsInPlate > 130 ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    {totalCarbsInPlate > 130 && (
                      <p className="text-red-400 text-xs font-bold mt-2 text-center flex items-center justify-center gap-1">
                        <AlertTriangle size={14}/> Você ultrapassou o limite flexível da Low Carb!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h2 id="gorduras" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Droplet className="text-green-600"/> Gordura Saturada vs Insaturada e a Dieta Mediterrânea
            </h2>
            <p>
              Quando reduzimos de fato a quantidade dos carboidratos seguindo a dieta low carb, a principal fonte de energia que assume o protagonismo na sua alimentação passa a ser a gordura. É exatamente aqui que entra um dos debates mais intensos da nutrição: o embate da <strong>gordura saturada vs insaturada</strong>. O medo clássico, alimentado por conselhos antigos, é de pensar que, por exemplo, se você <Link to="/comer-ovo-todo-dia-aumenta-o-colesterol" className="text-green-600 font-bold hover:underline">comer ovo todo dia, seu colesterol vai estourar</Link>. A boa notícia é que a nutrição clínica atual já evoluiu muito nesse aspecto.
            </p>
            <p>
              As gorduras saturadas (que são aquelas normalmente encontradas na carne vermelha, na manteiga, no óleo de coco e nos laticínios) definitivamente não são o grande veneno que se acreditava nas cartilhas médicas dos anos 80, mas, claro, elas devem ser consumidas com equilíbrio e moderação. No entanto, o verdadeiro segredo do sucesso na nossa alimentação saudável está nas famosas gorduras insaturadas. É exatamente aqui que a dieta Low Carb faz as pazes e bebe da fonte da maravilhosa **dieta mediterrânea**, que hoje é amplamente considerada como uma das melhores e mais seguras estratégias do mundo todo para promover a saúde do coração e garantir uma vida longa (longevidade).
            </p>
            <p>
              A <strong>dieta mediterrânea</strong> não é estritamente uma dieta "low carb", mas ela nos ensina a priorizar carboidratos complexos de excelente qualidade e nos orienta a abusar de alimentos como o azeite de oliva extravirgem, o abacate, os peixes gordos (como o salmão e a sardinha, ambos riquíssimos no protetor ômega-3) e de diversas nozes e castanhas. Ao mesclar o brilhante conceito de restrição inteligente de amidos da low carb com essa altíssima qualidade de lipídios ensinada na dieta mediterrânea, você acaba criando um padrão alimentar que é um anti-inflamatório formidável e altamente promotor de saciedade.
            </p>

            <h2 id="como-comecar" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Como Começar a Fazer Dieta Low Carb Hoje
            </h2>
            <p>
              Muita gente acha complicado, mas saber <strong>como começar a fazer dieta low carb</strong> de verdade não exige que você crie planos mirabolantes ou gaste horas na cozinha. O primeiro grande passo é, de longe, o mais simples: a temida "limpeza da despensa". Lembre-se, a sua dieta sempre começa dentro do supermercado. Inicie removendo da sua casa (ou comprando muito menos) alimentos como pães brancos refinados, refrigerantes normais, biscoitos, macarrão comum e aquele açúcar branco de mesa. O grande objetivo imediato nas suas primeiras semanas é apenas parar de estimular grandes picos de insulina que, inevitavelmente, causarão letargia e aquela famosa "fome de rebote" em pouquíssimas horas.
            </p>

            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-green-100 my-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 mb-4 italic flex items-center gap-2">
                <Check className="text-green-600" /> 3 Passos Essenciais para Começar:
              </h3>
              <ol className="space-y-5 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <div>
                    <strong className="block text-slate-900">Garantir a Ingestão de Proteína:</strong> 
                    Foque nisso em todas as suas refeições principais (consuma ovos, carnes magras, frango, iogurtes proteicos etc.). Esse consumo é inegociável, pois é ele que vai preservar a sua preciosa massa magra e ditar o ritmo da sua saciedade ao longo do dia.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <div>
                    <strong className="block text-slate-900">Abusar dos Vegetais Folhosos:</strong> 
                    Não tenha medo de encher o prato com rúcula, espinafre, alface e brócolis. Eles fornecem muito volume ao prato, são riquíssimos em vitaminas e minerais, e a melhor parte é que praticamente não contam como "carboidratos limitantes" devido ao seu alto e poderoso teor de fibras protetoras.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <div>
                    <strong className="block text-slate-900">Dominar o Balanço Calórico:</strong> 
                    A dieta low carb é fantástica, mas não quebra as leis básicas da física e da biologia. Comer um quilo inteiro de queijo e nozes por dia achando que está "saudável" ainda vai fazer você engordar. Para secar de vez, você deve calcular e respeitar <strong><Link to="/quantas-calorias-gasto-por-dia" className="text-green-600 hover:underline">quantas calorias gasta por dia</Link></strong> e operar em um déficit calórico leve. Fazer um acompanhamento utilizando a <Link to="/o_que_e_antropometria" className="text-green-600 font-bold hover:underline">antropometria clínica</Link> é o cenário ideal para acompanhar seus resultados.
                  </div>
                </li>
              </ol>
            </div>
            
            <p>
              Aliado a toda essa mudança alimentar inicial, é interessante observar que muitas pessoas também decidem, de forma natural, começar a praticar o <Link to="/o-que-e-jejum-intermitente" className="text-green-600 font-bold hover:underline">jejum intermitente</Link>. E o motivo é simples: a ausência total daqueles temidos picos de insulina provocada pela dieta low carb torna absurdamente mais fácil, natural e indolor conseguir passar 14 ou 16 horas do dia sem precisar se alimentar.
            </p>

            {/* AFILIADO MERCADO LIVRE - BALANÇA DE PRECISÃO */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="O Pingus aprova a medição exata para entender o que é dieta low carb" 
                            title="Dieta Low Carb de precisão"
                            className="w-full h-full object-contain" 
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Balança Digital de Precisão para Cozinha <span className="text-green-700">Aliada Low Carb</span>
                        </h4>

                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-white p-2">
                            <img 
                                src={`${githubImgBase}Afiliado/BalancaDigital.jpg`} 
                                alt="Balança digital de cozinha ideal para a dieta low carb." 
                                className="w-full h-auto object-contain" 
                                onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1590845947376-28f0904323e0?auto=format&fit=crop&q=80&w=400"; }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Se você brincou e montou pratos com a nossa calculadora de carboidratos, percebeu rapidamente que **o peso real do alimento importa muito**. Subestimar apenas "no olho" o tamanho real de uma maçã ou o peso da porção de arroz no seu prato pode tirar você da margem de carboidratos segura do dia de forma imperceptível. E adivinhe se <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-bold hover:underline">a balança de bioimpedância do seu banheiro é confiável</Link> para julgar seus resultados iniciais? Sim, ela ajuda a ter um norte, mas a pequena balança de precisão que fica em cima da sua pia da cozinha é essencial! Ter uma balança digital barata em casa é, sem dúvidas, a ferramenta número 1 para garantir o seu sucesso metabólico.
                        </p>

                        <a 
                            href="https://meli.la/2E9d1zF" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            aria-label="Comprar Balança de Precisão no Mercado Livre para medir a dieta low carb"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>
            </div>

            <h2 id="video-lowcarb" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Video className="text-green-600"/> O Que É Dieta Low Carb na Prática?
            </h2>
            <p className="mb-6">
              Ainda ficou com algumas dúvidas de como formatar seus macros e entender o conceito a fundo para começar ainda hoje? O excelente vídeo abaixo faz uma imersão muito mais prática para garantir e te provar que você não vai precisar seguir nenhum terrorismo nutricional estressante, mas sim uma ciência aplicável, leve e inteligente que cabe na correria do dia a dia:
            </p>
            
            <div className="my-10 p-6 md:p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-800">
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-xl shrink-0 bg-black border-4 border-slate-700 relative">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/5F_T2hQ40gQ"
                        title="Explicação definitiva sobre O que é Dieta Low Carb e como fazer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-white italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                        <PlayCircle className="text-green-500" /> A Base Metabólica
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-6">
                        Assista para derrubar de vez os temidos mitos sobre as gorduras que ouvimos desde a infância e consolidar sua jornada de emagrecimento sem a necessidade de passar fome. Lembre-se, o equilíbrio entre a qualidade dos macronutrientes e a ingestão calórica diária é o que verdadeiramente dita a sua saúde e disposição a longo prazo.
                    </p>
                </div>
            </div>

            {/* CONCLUSÃO */}
            <div className="mb-12 border-t border-slate-200 pt-8 mt-12">
              <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-4 flex items-center gap-3">
                <Target className="text-green-600"/> Conclusão: Dieta Low Carb é para você?
              </h2>
              <p>
                No final das contas, compreender a fundo o que é dieta low carb nos liberta enormemente da contagem neurótica de calorias puras, permitindo que a gente foque muito mais na qualidade e no impacto profundo que cada alimento causa nos nossos hormônios. Se você busca desesperadamente diminuir a sua vontade de doce, melhorar os perfis dos seus exames sanguíneos e ter um processo de emagrecimento mais sólido, quer ele seja associado (ou não) a treinos em academias e ao uso de suplementos e medicamentos inovadores como a <Link to="/retatrutida_o_que_e" className="text-green-600 font-bold hover:underline">Retatrutida</Link> e a famosa <Link to="/tirzepatida-para-que-serve" className="text-green-600 font-bold hover:underline">Tirzepatida</Link> sob rigorosa orientação e acompanhamento médico, saiba que a dieta Low Carb é, sem dúvidas, um alicerce primoroso para a sua jornada!
              </p>
            </div>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      aria-expanded={openFaqIndex === index}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-600' : 'text-slate-800 group-hover:text-green-600'}`}>
                        {faq.pergunta}
                      </h3>
                      <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
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

        {/* BIO AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr. que desvenda o que é dieta low carb na prática" 
              title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador ISAK 1"
              className="w-full h-full object-cover" 
              onError={(e) => { e.target.onerror = null; e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>"; }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Estudante dedicado da bioquímica nutricional e monitor no laboratório de nutrição da Unicesumar Tijuca. Marco descomplica a ciência do emagrecimento ensinando na prática o que é dieta low carb, focando em traduzir evidências densas (ISAK Nível 1) em estratégias sustentáveis para o seu dia a dia.
            </p>
            <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
