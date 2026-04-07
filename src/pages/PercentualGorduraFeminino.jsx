import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Shield, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Flame, CheckCircle2, Brain, Wind, Battery, FileText, AlertCircle, HeartPulse, Scale, Dna, Calculator, Target, Ruler, UtensilsCrossed, Video
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Atualizando datas para a postagem e SEO
const datePublishedISO = "2026-04-07";
const dateModifiedISO = "2026-04-07";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens do Artigo
const artigoCapa = `${githubImgBase}Blog/PercentualGorduraFeminino_Capa.jpg`; 

// Dados baseados no material clínico fornecido (Emagrecimento em Mulheres - Pós EMA.pdf)
const tabelaGordura = [
  { id: 1, categoria: "Gordura Essencial", percentual: "10% a 12%", status: "Risco se ultrapassar o limite inferior", icone: <AlertCircle className="text-red-500 w-6 h-6" /> },
  { id: 2, categoria: "Atletas de Elite", percentual: "10% a 15%", status: "Exige acompanhamento rigoroso", icone: <Flame className="text-orange-500 w-6 h-6" /> },
  { id: 3, categoria: "Boa Forma Física", percentual: "15% a 25%", status: "Saudável / Baixo risco metabólico", icone: <CheckCircle2 className="text-green-500 w-6 h-6" /> },
  { id: 4, categoria: "Sobrepeso", percentual: "25% a 31%", status: "Zona de atenção clínica", icone: <Activity className="text-yellow-600 w-6 h-6" /> },
  { id: 5, categoria: "Obesidade", percentual: "≥ 32%", status: "Alto risco cardiometabólico", icone: <HeartPulse className="text-red-600 w-6 h-6" /> }
];

export default function PercentualGorduraFemininoComponent() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados para a Calculadora de RCE
  const [cintura, setCintura] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoRce, setResultadoRce] = useState(null);

  const calcularRce = (e) => {
    e.preventDefault();
    if (cintura > 0 && altura > 0) {
      // Cálculo simples: Cintura / Altura (ambos na mesma unidade, ex: cm)
      const calculo = parseFloat(cintura) / parseFloat(altura);
      setResultadoRce(calculo.toFixed(2));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "Posso baixar meu percentual de gordura para menos de 10%?",
      resposta: "Não é recomendado para a saúde feminina. Abaixo de 12%, o corpo entra em estado de alerta, comprometendo a produção de estrogênio. Isso pode levar à RED-S (Deficiência de Energia Relativa no Esporte), causando amenorreia (falta de menstruação) e perda precoce de densidade óssea."
    },
    {
      pergunta: "A gordura localizada no quadril e coxas é perigosa?",
      resposta: "Do ponto de vista metabólico, não. Esse padrão de acúmulo, chamado de distribuição ginoide, é natural da fase reprodutiva feminina e é estimulado pelo estradiol. Essa gordura subcutânea apresenta menor inflamação e protege contra a resistência à insulina, diferente da gordura visceral (abdominal)."
    },
    {
      pergunta: "Por que meu percentual parece mudar ao longo do mês na balança de bioimpedância?",
      resposta: "Isso ocorre devido às flutuações hormonais do ciclo menstrual. Na fase lútea (após a ovulação), o aumento da progesterona causa retenção hídrica. Como a bioimpedância calcula a composição baseada na água corporal, essa retenção pode superestimar ou subestimar o seu percentual de gordura. O ideal é avaliar sempre na mesma fase do ciclo."
    },
    {
      pergunta: "O que muda na composição corporal após a menopausa?",
      resposta: "Com a queda abrupta do estrogênio na menopausa, ocorre uma redistribuição da gordura. O corpo deixa de acumular gordura no quadril (padrão ginoide) e passa a acumular na região abdominal (padrão androide). Por isso, mesmo que o peso na balança não mude, o risco cardiovascular e metabólico aumenta."
    },
    {
      pergunta: "A Relação Cintura-Estatura (RCE) substitui o percentual de gordura?",
      resposta: "Ela não substitui, mas a complementa de forma brilhante. A RCE é um dos marcadores mais sensíveis para risco cardiometabólico. Se a sua circunferência abdominal dividida pela sua altura for maior ou igual a 0,5, existe um risco aumentado de doenças metabólicas, independentemente de quanto a balança marca."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Qual o Percentual de Gordura Feminino Ideal? | Nutrição com Marco</title>
        <meta name="description" content="Descubra qual é o percentual de gordura feminino ideal para a saúde e estética. Entenda as tabelas de referência, os hormônios femininos e os métodos de avaliação." />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Qual o Percentual de Gordura Feminino Ideal? A Ciência Explica" />
        <meta property="og:description" content="Pare de brigar com a balança. Entenda como o seu metabolismo, ciclo menstrual e idade influenciam a sua composição corporal ideal." />
        <meta property="og:image" content={artigoCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        
        {/* Schema 1: Article */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.nutricaocommarco.com.br${pathname}`
            },   
            "headline": "Qual o Percentual de Gordura Feminino Ideal? A Ciência Explica",
            "image": [artigoCapa],
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição Feminina", "Composição Corporal", "Antropometria", "Percentual de Gordura"]
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Nutrição com Marco", 
              "logo": {
                "@type": "ImageObject", 
                "url": `${githubImgBase}logoN_pingus.png`
              }
            },
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO,
            "description": "Descubra qual é o percentual de gordura feminino ideal para a saúde e estética. Entenda as tabelas de referência, os hormônios femininos e os métodos de avaliação."
          }) }} />

        {/* Schema 2: MedicalWebPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Qual o Percentual de Gordura Feminino Ideal?",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Composição Corporal"},
              {"@type": "MedicalEntity", "name": "Gordura Corporal"},
              {"@type": "MedicalEntity", "name": "Metabolismo Feminino"},
              {"@type": "MedicalEntity", "name": "Antropometria"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes e Mulheres"
            }
          }) }} />

        {/* Schema 3: BreadcrumbList */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.nutricaocommarco.com.br/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.nutricaocommarco.com.br/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Percentual de Gordura Feminino Ideal",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          }) }} />

        {/* Schema 4: FAQPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
          }) }} />
      </Helmet>

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde da Mulher & Antropometria</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Qual o Percentual de Gordura Feminino Ideal? A Ciência Explica
          </h1>

          {/* RESPOSTA DIRETA (Direct Answer / Featured Snippet) */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Target className="text-green-600" /> Qual o Percentual de Gordura Feminino Ideal? - Resposta Direta
              </h2>
              <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                O percentual de gordura feminino ideal para a saúde e boa forma física geral varia entre <strong>15% e 25%</strong>. Valores entre 10% e 15% são classificados para atletas de elite e exigem rigoroso controle nutricional. Mulheres possuem naturalmente mais gordura que os homens, pois uma faixa entre 10% e 12% é considerada <strong>gordura essencial</strong>, vital para o funcionamento hormonal, proteção dos órgãos e regulação do ciclo menstrual.
              </p>
            </div>
            <a 
              href="#tabela-oficial" 
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 w-full md:w-fit italic cursor-pointer"
            >
              <Activity size={18} />
              Ver Tabela Completa
            </a>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/PercentualGorduraMulher.mp3" type="audio/mpeg" />
                O seu navegador não suporta o áudio.
              </audio>
            </div>

            <div className="h-px bg-green-100/60 w-full"></div>

            <nav className="bg-slate-50">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#a-verdade" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Dna size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Fisiologia Feminina</a></li>
                  <li><a href="#ginoide-androide" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ginoide x Androide</a></li>
                  <li><a href="#video-explicativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Video size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                  <li><a href="#tabela-oficial" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tabela de Referência</a></li>
                  <li><a href="#como-medir" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Ruler size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Medir Corretamente?</a></li>
                 <li><a href="#relacao-cintura-estatura" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HeartPulse size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Importância da RCE</a></li>
                  <li><a href="#extremos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Os Riscos dos Extremos</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <p>
              Quantas vezes você subiu em uma balança, olhou para o número refletido e sentiu frustração imediata sem entender absolutamente nada sobre o que aquela massa corporal realmente significava? A busca pelo corpo ideal é constantemente bombardeada por desinformação, fazendo com que milhares de mulheres travem uma guerra diária contra a própria biologia ao tentar atingir índices de gordura corporal perigosamente baixos e insustentáveis. Compreender a sua composição corporal não é apenas uma questão de estética, mas um poderoso ato de libertação e de proteção à sua fisiologia endócrina.
            </p>

            <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
              <img 
                src={artigoCapa} 
                alt="Diagrama visual demonstrando a variação da composição corporal feminina através de diferentes métodos de avaliação antropométrica." 
                title="A Composição Corporal Feminina na Avaliação Física"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
                <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                  O peso na balança é cego. A verdadeira saúde metabólica é revelada através de uma avaliação criteriosa da composição corporal, diferenciando massa muscular de gordura essencial.
                </p>
              </figcaption>
            </figure>

            <h2 id="a-verdade" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Dna className="text-green-600"/> A Fisiologia Feminina e a Gordura Essencial
            </h2>
            <p>
              Para desmistificar de vez os padrões irreais da internet, é fundamental entender que o corpo feminino foi primorosamente desenhado pela evolução para carregar mais tecido adiposo do que o corpo masculino. Enquanto os homens possuem uma cota de gordura essencial na casa dos três a cinco por cento, as mulheres precisam manter um mínimo absoluto entre dez a doze por cento de gordura apenas para garantir que os seus órgãos vitais e sistema reprodutivo não entrem em colapso total.
            </p>
            <p>
              Essa camada de gordura não é uma falha, mas sim uma proteção vital orquestrada pelos hormônios reprodutivos. Durante os anos férteis, o hormônio estradiol dita as regras do jogo, direcionando estrategicamente o acúmulo de gordura para os glúteos e coxas. Conhecido clinicamente como padrão ginoide, esse tipo de tecido adiposo é um escudo formidável que confere um privilégio metabólico incrível para as mulheres na pré-menopausa. Diferente da perigosa gordura visceral acumulada no abdômen, a gordura localizada na região do quadril apresenta baixíssimos níveis inflamatórios, preserva a sensibilidade do corpo à insulina e age como um fator de proteção poderoso contra doenças cardiovasculares.
            </p>

            {/* NOVA SEÇÃO E TABELA GINOIDE X ANDROIDE */}
            <h2 id="ginoide-androide" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Distribuição de Gordura: Ginoide x Androide
            </h2>
            <p>
              A forma como o corpo feminino armazena gordura diz muito mais sobre a sua saúde metabólica do que a quantidade total de massa adiposa em si. Essa distribuição é fortemente influenciada pelas fases da vida e pelo perfil hormonal de cada mulher. Durante a fase reprodutiva, o estrogênio elevado atua como um escudo protetor, direcionando o estoque de energia para a região inferior do corpo, caracterizando um tecido subcutâneo com baixa vascularização e muito menos propenso à inflamação. Por outro lado, com a chegada da menopausa e a consequente queda do estradiol, ocorre uma realocação perigosa dessa gordura para a região abdominal. Esse novo perfil visceral é altamente vascularizado, agrava a resistência à insulina e eleva drasticamente os marcadores de <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-bold hover:underline">inflamação crônica</Link>, prejudicando o perfil lipídico.
            </p>

            <div className="my-10 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[700px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Característica Clínica</th>
                    <th className="p-5 w-1/3 text-green-700 bg-green-50/50">Padrão Ginoide (Pera)</th>
                    <th className="p-5 w-1/3 text-red-700 bg-red-50/50">Padrão Androide (Maçã)</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Fase da Vida</td>
                    <td className="p-5">Fase Reprodutiva</td>
                    <td className="p-5">Pós-Menopausa</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Cenário Hormonal</td>
                    <td className="p-5">Estradiol Elevado</td>
                    <td className="p-5">Hipoestrogenismo</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Local de Acúmulo</td>
                    <td className="p-5">Glúteos e Coxas</td>
                    <td className="p-5 font-bold text-red-600">Região Abdominal (Visceral)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Tipo de Tecido</td>
                    <td className="p-5">Subcutâneo, baixa vascularização</td>
                    <td className="p-5">Visceral, altamente vascularizado</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Grau de Inflamação</td>
                    <td className="p-5 text-green-600">Menor inflamação crônica</td>
                    <td className="p-5 text-red-600 font-bold">Maior inflamação (TNF-alfa, IL-6)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Resistência à Insulina</td>
                    <td className="p-5">Menor risco de IR</td>
                    <td className="p-5">Maior IR e aumento no risco de DM2</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Perfil Lipídico</td>
                    <td className="p-5">Mais favorável</td>
                    <td className="p-5">Aumento de LDL e Triglicerídeos, Queda de HDL</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Risco Cardiovascular</td>
                    <td className="p-5 text-green-600 font-bold">Baixo Risco</td>
                    <td className="p-5 text-red-600 font-bold">Alto Risco</td>
                  </tr>
                </tbody>
              </table>
            </div>

{/* NOVO VÍDEO DO YOUTUBE - GINOIDE X ANDROIDE */}
            <h2 id="video-explicativo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Video className="text-green-600"/> Biotipos: Gordura Ginoide x Androide
            </h2>
            <p className="mb-6">
              Compreender a diferença na distribuição da sua gordura é o primeiro grande passo para parar de se comparar e adotar a estratégia correta.
            </p>
            
            <div className="my-10 p-6 md:p-8 bg-green-50 border border-green-100 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-xl shrink-0 bg-slate-900 border-4 border-white">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/7HxdNxnlFLM"
                        title="Diferenças entre obesidade Ginoide e Androide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-slate-800 italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                        <PlayCircle className="text-green-600" /> A Ciência da Gordura
                    </h3>
                    <p className="text-slate-700 font-medium leading-relaxed mb-6">
                        Neste vídeo, nos aprofundamos na diferença vital entre o acúmulo de gordura <strong>Ginoide</strong> (formato de pera, mais comum e protetor nas mulheres) e o <strong>Androide</strong> (formato de maçã, com maior acúmulo de gordura visceral). Entenda como isso reflete no seu risco cardiometabólico.
                    </p>
                    <a 
                        href="https://www.youtube.com/watch?v=7HxdNxnlFLM" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-black text-green-600 uppercase tracking-widest hover:text-green-800 transition-colors"
                    >
                        Assistir no YouTube <ChevronRight size={16} />
                    </a>
                </div>
            </div>

            <h2 id="tabela-oficial" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-8 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Tabela Oficial de Percentual de Gordura Feminino
            </h2>
            <p className="mb-8">
              Com base nos mais recentes compêndios de avaliação clínica e fisiologia do exercício, estruturamos a tabela referencial de adiposidade para guiar a sua jornada de hipertrofia ou emagrecimento com segurança absoluta. Utilize esses parâmetros como o farol da sua estratégia nutricional e esportiva.
            </p>

            {/* TABELA DE GORDURA RENDERIZADA COMO CARDS MODERNOS */}
            <div className="bg-slate-100 rounded-[2rem] p-6 border border-slate-200 shadow-inner mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tabelaGordura.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-green-300 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-slate-50 p-2 rounded-xl">
                        {item.icone}
                      </div>
                      <span className="bg-slate-800 text-white text-xs font-black px-3 py-1 rounded-full">
                        {item.percentual}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1 leading-tight">{item.categoria}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200 text-sm text-slate-600 font-medium text-center">
                <strong>Nota Clínica:</strong> Mulheres que buscam a otimização máxima para iniciarem um processo limpo de hipertrofia muscular encontram um ambiente fisiológico muito favorável quando estabilizadas na faixa de <strong>18% a 20%</strong>. Valores acima de 25% indicam que um <Link to="/calculadora-de-gasto-calorico" className="text-green-600 font-bold hover:underline">déficit calórico planejado</Link> deve preceder qualquer fase de superávit.
              </div>
            </div>

            <h2 id="como-medir" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Ruler className="text-green-600"/> Como Medir a Gordura Corretamente?
            </h2>
            <p>
              Ignorar o temido Índice de Massa Corporal (IMC) em mulheres ativas é uma obrigação para qualquer profissional atualizado, visto que o IMC é dolorosamente incapaz de discernir se aquele volume extra na balança provém de músculos densos e hidratados construídos na academia ou de um acúmulo patológico de tecido adiposo decorrente do sedentarismo. Para acessar os números reais que definem a sua estética e saúde, dependemos de métodos avaliativos sérios.
            </p>
            <p>
              A <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-bold hover:underline">bioimpedância elétrica transformou-se em uma febre</Link> nos consultórios modernos. Trata-se de um equipamento que mapeia a sua composição ao disparar correntes elétricas sutis pelo corpo, interpretando a resistência que essas correntes sofrem ao passar pela água dos seus músculos em contraste com a barreira isolante da gordura. O desafio monumental da bioimpedância nas mulheres é a implacável flutuação hídrica provocada pelas fases do ciclo menstrual (período em que muitas buscam saber <Link to="/o-que-comer-na-tpm" className="text-green-600 font-bold hover:underline">o que comer na TPM</Link>) e alterações na temperatura corporal, que podem facilmente distorcer o percentual real, mascarar o seu progresso da dieta e deixar dúvidas sobre <Link to="/qual_melhor_horario_para_se_pesar" className="text-green-600 font-bold hover:underline">qual o melhor horário para se pesar</Link>.
            </p>
            <p>
              Por esse exato motivo, o <Link to="/o_que_e_antropometria" className="text-green-600 font-bold hover:underline">método antropométrico tradicional através do somatório de dobras cutâneas</Link> ainda reina absoluto como uma bússola inabalável para monitorar resultados ao longo dos meses. Utilizando pinças de alta precisão científica, o profissional avalia o tecido subcutâneo real com os próprios dedos, blindando a avaliação de oscilações ilusórias de líquidos. Quando complementado com métricas matemáticas independentes e altamente eficientes, como a formidável Relação Cintura-Estatura (RCE), onde o limite saudável estipula que a sua cintura deve medir obrigatoriamente menos da metade da sua altura total, obtemos um arsenal clínico invencível contra a obesidade.
            </p>

{/* AFILIADO MERCADO LIVRE - O PINGUS APROVA (Fita Antropométrica Cescorf) */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>Pingus Aprova</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="Mascote Pingus endossando produto científico" 
                            className="w-full h-full object-contain" 
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Fita Antropométrica <span className="text-green-700">Cescorf</span>
                        </h4>
                        
                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                                src={`${githubImgBase}Afiliado/FitaCescorf.JPG`} 
                                alt="Fita Antropométrica Cescorf indicada no padrão ISAK" 
                                className="w-full h-auto" 
                                onError={(e) => {
                                  e.target.onerror = null; 
                                  e.target.src="https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400";
                                }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Seja você estudante da área da saúde ou alguém em busca do controle absoluto dos próprios resultados em casa, a Fita Antropométrica Cescorf é a ferramenta indicada no rigoroso padrão ISAK para mensurar circunferências corporais e calcular métricas cruciais como a RCE com máxima exatidão.
                        </p>

                        <a 
                            href="https://meli.la/2atz1Hu" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Ver no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao adquirir o seu equipamento avaliativo através do link acima, o blog recebe uma pequena comissão que financia nossos conteúdos científicos sem gerar custo adicional para você. O Pingus e eu agradecemos o imenso apoio.
                    </p>
                </div>
            </div>

            {/* H2: RELAÇÃO CINTURA ESTATURA */}
            <h2 id="relacao-cintura-estatura" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <HeartPulse className="text-green-600"/> A Importância da Relação Cintura-Estatura (RCE)
            </h2>
            <p>
              Além do percentual de gordura e das dobras cutâneas, a <strong>Relação Cintura-Estatura (RCE)</strong> tem ganhado um destaque formidável na comunidade científica. Diversos estudos e consensos médicos atuais demonstram que a RCE é um marcador preditivo muito superior ao IMC para identificar riscos cardiometabólicos reais.
            </p>
            <p>
              O cálculo é incrivelmente simples: basta dividir a medida da circunferência da sua cintura pela sua altura. A ciência estabelece um ponto de corte universal e rigoroso de <strong>0,5</strong>. Ou seja, se a medida da sua cintura for maior que a metade da sua altura total, isso indica um acúmulo patológico de gordura visceral, servindo como um alerta vermelho para a sua saúde metabólica e resistência à insulina, independentemente de você parecer magra na balança.
            </p>

            {/* VIDEO: COMO MEDIR A CINTURA (LÓGICAMENTE LOGO ABAIXO DA RCE) */}
            <div className="my-10 p-6 md:p-8 bg-green-50 border border-green-100 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 aspect-[9/16] max-w-[280px] rounded-2xl overflow-hidden shadow-xl shrink-0 bg-slate-900 mx-auto md:mx-0 border-4 border-white">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/qg6cSQaJhKs"
                        title="Como medir a circunferência da cintura"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-slate-800 italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                        <PlayCircle className="text-green-600" /> Como Medir a Sua Cintura
                    </h3>
                    <p className="text-slate-700 font-medium leading-relaxed mb-4">
                        A fita métrica é a sua maior aliada para acompanhar a verdadeira evolução da sua composição corporal em casa e calcular a sua RCE de forma precisa.
                    </p>
                    <p className="text-slate-700 font-medium leading-relaxed">
                        Assista a este vídeo rápido onde te ensino exatamente <strong>onde posicionar a fita</strong> e como realizar a leitura correta do perímetro abdominal, garantindo que os seus dados sejam tão consistentes quanto os de um consultório nutricional.
                    </p>
                </div>
            </div>

            {/* CALCULADORA DE RCE INTERATIVA */}
            <div className="my-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-slate-900 p-6 md:p-8 text-center">
                    <h3 className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0">
                        <Calculator className="text-green-500" /> Calculadora de RCE
                    </h3>
                    <p className="text-slate-300 font-medium mt-2 m-0 text-sm md:text-base">
                        Descubra o seu risco metabólico em segundos
                    </p>
                </div>
                <div className="p-6 md:p-10">
                    <form onSubmit={calcularRce} className="flex flex-col md:flex-row gap-6 items-center justify-center">
                        <div className="w-full md:w-1/3">
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 text-center">Cintura (cm)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={cintura}
                                onChange={(e) => setCintura(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xl font-black rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-4 text-center outline-none transition-all shadow-inner"
                                placeholder="Ex: 75"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 text-center">Altura (cm)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xl font-black rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-4 text-center outline-none transition-all shadow-inner"
                                placeholder="Ex: 165"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3 flex items-end">
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white h-[60px] rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg hover:bg-green-700 hover:-translate-y-1 transition-all duration-300"
                            >
                                Calcular Risco
                            </button>
                        </div>
                    </form>

                    {/* ÁREA DE RESULTADO DA CALCULADORA */}
                    {resultadoRce && (
                        <div className={`mt-10 p-6 md:p-8 rounded-[2rem] border-2 flex flex-col items-center text-center transition-all duration-500 ${resultadoRce <= 0.5 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                            <span className="text-xs font-black uppercase tracking-widest mb-2 text-slate-500">Seu Índice RCE</span>
                            <span className={`text-6xl font-black italic mb-4 drop-shadow-sm ${resultadoRce <= 0.5 ? 'text-green-600' : 'text-red-600'}`}>
                                {resultadoRce}
                            </span>
                            {resultadoRce <= 0.5 ? (
                                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                                    <CheckCircle2 className="text-green-600 w-6 h-6 shrink-0 mt-0.5" />
                                    <p className="text-green-900 font-medium text-sm md:text-base m-0 text-left">
                                        <strong>Excelente!</strong> O seu resultado está dentro da zona saudável (≤ 0.50). Isso indica um baixo risco para doenças cardiovasculares e metabólicas. Continue cuidando da sua saúde!
                                    </p>
                                </div>
                            ) : (
                                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-red-100">
                                    <AlertCircle className="text-red-600 w-6 h-6 shrink-0 mt-0.5" />
                                    <p className="text-red-900 font-medium text-sm md:text-base m-0 text-left">
                                        <strong>Sinal de Alerta!</strong> Um resultado superior a 0.50 indica maior concentração de gordura visceral, o que eleva o risco metabólico. É o momento ideal para ajustar a nutrição e treinos!
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <h2 id="extremos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Shield className="text-green-600"/> Os Riscos Fisiológicos dos Extremos
            </h2>
            <p>
              Romantizar a magreza extrema destrói a orquestra hormonal feminina de forma silenciosa e, por vezes, permanente. Quando a disponibilidade de energia despenca violentamente e o percentual de gordura atinge patamares inferiores aos doze por cento vitais, o organismo entra em um modo instintivo de severo racionamento. O hipotálamo interrompe drasticamente o comando de produção dos hormônios reprodutivos, gerando a anovulação e o desaparecimento total da menstruação em atletas amadoras que buscam desesperadamente abdômens trincados. Esse cenário catastrófico aumenta a suscetibilidade a lesões por fraturas de estresse, instabilidade de humor assustadora e mergulha o metabolismo em uma lentidão angustiante que tornará qualquer tentativa futura de controle de peso um verdadeiro inferno. Respeite os números biológicos do seu corpo, invista na construção maciça do músculo ao invés da mera restrição agressiva e utilize a ciência antropométrica a seu favor na conquista irrefreável da longevidade.
            </p>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
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

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr." 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>";
              }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela fisiologia clínica e pelas minúcias do metabolismo feminino, traduzo os dados densos e frios das avaliações antropométricas em estratégias reais que geram resultados estéticos sustentáveis e definitivos, priorizando implacavelmente o respeito à saúde metabólica em todas as fases da vida.
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
