import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle, Headphones, ChevronRight, Activity, Leaf, Scale, Heart, AlertTriangle, FileText, Zap } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Dados comparativos atualizados com a Cirurgia Bariátrica
const comparativoTratamentos = [
  { 
    id: 1, 
    molecula: "Retatrutida", 
    mecanismo: "Agonista Triplo (GIP / GLP-1 / Glucagon)", 
    frequencia: "Semanal (Subcutânea)", 
    perdaPeso: "~24,2% (48 semanas)", 
    fase: "Fase 3 (Em testes finais)", 
    cor: "bg-green-600", 
    textColor: "text-white" 
  },
  { 
    id: 2, 
    molecula: "Tirzepatida", 
    nomeComercial: "Mounjaro / Zepbound", 
    mecanismo: "Agonista Duplo (GIP / GLP-1)", 
    frequencia: "Semanal (Subcutânea)", 
    perdaPeso: "~21% a 22,5% (Estudos SURMOUNT)", 
    fase: "Aprovado e Comercializado", 
    cor: "bg-slate-100", 
    textColor: "text-slate-800" 
  },
  { 
    id: 3, 
    molecula: "Semaglutida", 
    nomeComercial: "Wegovy / Ozempic", 
    mecanismo: "Agonista Único (GLP-1)", 
    frequencia: "Semanal (Subcutânea)", 
    perdaPeso: "~15% a 18% (Estudos STEP)", 
    fase: "Aprovado e Comercializado", 
    cor: "bg-slate-100", 
    textColor: "text-slate-800" 
  },
  { 
    id: 4, 
    molecula: "Liraglutida", 
    nomeComercial: "Saxenda / Victoza", 
    mecanismo: "Agonista Único (GLP-1)", 
    frequencia: "Diária (Subcutânea)", 
    perdaPeso: "~8% (Estudo SCALE)", 
    fase: "Aprovado e Comercializado", 
    cor: "bg-slate-100", 
    textColor: "text-slate-800" 
  },
  { 
    id: 5, 
    molecula: "Bypass Gástrico", 
    nomeComercial: "Cirurgia Bariátrica (BGYR)", 
    mecanismo: "Restritivo e Disabsortivo (Metabólico)", 
    frequencia: "Procedimento Cirúrgico Único", 
    perdaPeso: "~30% a 35% (1 a 2 anos)", 
    fase: "Padrão Ouro Consolidado", 
    cor: "bg-slate-800", 
    textColor: "text-white" 
  },
];

export default function RetatrutidaOQueE() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Retatrutida o que é? A nova fronteira da ciência | Nutrição com Marco</title>
        <meta name="description" content="Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados impressionantes na perda de peso. Entenda em que fase de aprovação ela está." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Retatrutida o que é? A nova fronteira da ciência | Nutrição com Marco" />
        <meta property="og:description" content="Descubra o que é a retatrutida, o novo medicamento agonista triplo e seus resultados impressionantes na perda de peso. Entenda em que fase de aprovação ela está." />
        <meta property="og:image" content={`${githubImgBase}Blog/retatrutida_molecula.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retatrutida o que é? A nova fronteira da ciência contra a obesidade",
            "image": `${githubImgBase}Blog/retatrutida_molecula.jpg`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": "2026-03-24",
            "dateModified": "2026-03-24",
            "description": "Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados impressionantes na perda de peso."
          })}
        </script>

        {/* INÍCIO DO SCHEMA.ORG PARA FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é a retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A retatrutida (LY3437943) é uma medicação em desenvolvimento classificada como um agonista triplo. Ela atua simulando a ação de três hormônios simultaneamente: GLP-1, GIP e Glucagon, oferecendo uma abordagem multitarefa para o emagrecimento."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a perda de peso esperada com a retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos estudos clínicos de Fase 2 (TRIUMPH-1), os participantes que utilizaram a dose máxima alcançaram uma redução média de peso corporal de até 24,2% ao longo de 48 semanas."
                }
              },
              {
                "@type": "Question",
                "name": "Em que fase de aprovação está a Retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Retatrutida concluiu com sucesso os testes de Fase 2 (mostrando eficácia) e atualmente está na Fase 3 dos testes clínicos. Esta é a fase final e crucial de testes em grande escala antes da submissão para registro e aprovação por órgãos como a ANVISA."
                }
              }
            ]
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA FAQ */}
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        {/* Botão de Voltar */}
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Tratamento Metabólico</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Retatrutida o que é? A nova fronteira da ciência contra a obesidade
          </h1>

          {/* BLOCO DE RESPOSTA DIRETA */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: o que é a Retatrutida?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A retatrutida (LY3437943) é uma medicação revolucionária em fase de testes que atua como um <strong>agonista triplo</strong>. Ela simula a ação de três hormônios simultaneamente: GLP-1, GIP e glucagon, otimizando o gasto energético e resultando em uma perda de peso média de até 24,2% em 48 semanas.
              </p>
          </div>
          {/* FIM DO BLOCO DE RESPOSTA DIRETA */}

          {/* INÍCIO DA CAIXA COMBINADA: ÁUDIO + SUMÁRIO RETRÁTIL */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">

            {/* 1. SEÇÃO DO ÁUDIO */}
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Retatrutida.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            {/* LINHA DIVISÓRIA SUAVE */}
            <div className="h-px bg-green-100/60 w-full"></div>

            {/* 2. SEÇÃO DO SUMÁRIO (TOC) */}
            <nav className="bg-slate-50">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">
                    Índice do Conteúdo
                  </h3>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} 
                />
              </button>

              {/* LISTA DE LINKS ESCONDIDA */}
              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li>
                    <a href="#mecanismo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Mecanismo Triplo
                    </a>
                  </li>
                  <li>
                    <a href="#resultados" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Resultados Clínicos
                    </a>
                  </li>
                  <li>
                    <a href="#aprovacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Fases de Aprovação
                    </a>
                  </li>
                  <li>
                    <a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Comparativo de Tratamentos
                    </a>
                  </li>
                  <li>
                    <a href="#nutricao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Pilar Nutricional
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Perguntas Frequentes (FAQ)
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* FIM DA CAIXA COMBINADA */}

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>O cenário do tratamento da obesidade e das doenças metabólicas está passando por uma evolução tecnológica extremamente acelerada e empolgante. Até bem pouco tempo atrás, as atenções estavam voltadas quase que exclusivamente para o sucesso das terapias de primeira e segunda geração, focadas principalmente na via do hormônio GLP-1. No entanto, a ciência metabólica acaba de revelar uma nova e promissora molécula que vem conquistando o protagonismo nas discussões médicas: a retatrutida.</p>

            {/* IMAGEM DE CAPA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={`${githubImgBase}Blog/retatrutida_molecula.jpg`} 
                alt="Ilustração médica representando a molécula de retatrutida e seus três receptores de ação no organismo." 
                title="Mecanismo de Ação da Retatrutida"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A Retatrutida representa um salto científico ao ativar três vias hormonais simultâneas.</p></div>
            </div>

            <p>Compreender o que é a retatrutida e como ela interage com a nossa complexa fisiologia é essencial para entender por que essa substância representa um avanço tão significativo, oferecendo uma eficácia de perda de peso que supera as terapias lançadas anteriormente no mercado.</p>

            <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> O Mecanismo de Ação: O Poder do Agonista Triplo
            </h2>
            
            <p>O grande diferencial da retatrutida reside na sua incrível capacidade multitarefa no corpo humano. Mas o que exatamente isso significa? Na farmacologia, um <strong>agonista</strong> é uma substância capaz de se ligar a um receptor da célula (como uma chave em uma fechadura) e ativar uma resposta biológica. Um <strong>agonista triplo</strong> é uma única molécula, criada em laboratório, capaz de ativar três "fechaduras" diferentes ao mesmo tempo.</p>

            <p>A retatrutida age como um maestro, conduzindo simultaneamente as vias dos hormônios GLP-1, GIP e Glucagon. Veja como cada um deles trabalha no seu corpo:</p>

            <div className="flex flex-col gap-6 my-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">1</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">GLP-1 (Foco na Saciedade)</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Age predominantemente no sistema nervoso central (hipotálamo), sinalizando ao cérebro que você já está satisfeito. Além disso, retarda o esvaziamento do estômago (o que mantém a comida lá por mais tempo) e estimula o pâncreas a liberar insulina de forma inteligente quando você come carboidratos.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">2</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">GIP (Foco no Metabolismo)</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Trabalha em forte sinergia com o GLP-1. Ele atua no tecido adiposo (gordura) melhorando a sensibilidade à insulina e a captação de glicose. Um bônus gigantesco do GIP é que ele atua no cérebro "acalmando" o centro de náuseas, permitindo que os pacientes tolerem doses mais altas e potentes da medicação sem passarem mal.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">3</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Glucagon (Foco na Queima)</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">É a "peça que faltava". O Glucagon aumenta a termogênese (gasto de energia do corpo mesmo em repouso) e promove ativamente a lipólise (quebra de gordura), com um foco especial em limpar a gordura acumulada no fígado (esteatose hepática).</p>
                </div>
              </div>
            </div>

            {/* QUADRO DE DESTAQUE */}
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "A ciência deixou de atuar em vias hormonais isoladas para criar sinfonias metabólicas que reprogramam a resposta do corpo à obesidade."
            </div>

            <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Resultados Clínicos Impressionantes (Estudo TRIUMPH-1)
            </h2>
            <p>Os dados que sustentam a empolgação da comunidade científica são extremamente robustos. Durante a Fase 2 dos testes clínicos, batizada de estudo TRIUMPH-1, a eficácia do medicamento foi colocada à prova com resultados excepcionais.</p>

            {/* PRIMEIRA LISTA OBJETIVA */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Principais resultados da Fase 2:
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Perda de peso corporal média de até 24,2% em 48 semanas
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Melhoria significativa na pressão arterial
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Redução expressiva da gordura no fígado (esteatose hepática)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Administração confortável por via subcutânea semanal
                </li>
              </ul>
            </div>

            {/* VÍDEO RECOMENDADO EM DESTAQUE - DR. STOCKER */}
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Palavra do Especialista: A Evolução dos Fármacos
            </h2>

            <p>Para aprofundar ainda mais o entendimento sobre o impacto dessa nova classe de medicamentos na obesidade, confira a análise detalhada do Dr. Stocker, médico especialista em fármacos de emagrecimento, sobre a evolução tecnológica desses tratamentos.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Análise médica sobre os novos tratamentos</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/7Sk7CWqeH9Y" 
                  title="Análise do Dr. Stocker sobre Fármacos de Emagrecimento" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* INÍCIO DA NOVA SEÇÃO: FASES DE APROVAÇÃO */}
            <h2 id="aprovacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> A Jornada Científica: Como um Medicamento é Aprovado
            </h2>
            <p>Muitos pacientes perguntam: "Quando a Retatrutida estará disponível?". Para entender a resposta, precisamos compreender o rigoroso processo de Pesquisa e Desenvolvimento (P&D) pelo qual todo novo fármaco deve passar antes de chegar às farmácias.</p>

            <p>Esse processo é dividido em fases fundamentais, garantindo a segurança e a eficácia da substância:</p>

            <div className="my-10 bg-white border border-slate-100 shadow-xl rounded-[2rem] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 text-center font-black uppercase tracking-widest text-xs border-b border-slate-100">
                <div className="p-5 bg-slate-50 text-slate-500 border-r border-slate-100">Fase</div>
                <div className="p-5 bg-slate-50 text-slate-500 border-r border-slate-100 md:col-span-2">Objetivo e Escala</div>
                <div className="p-5 bg-slate-50 text-slate-500 md:col-span-2">Em que pé estamos?</div>
              </div>

              {/* Pré-Clínica */}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 md:p-8 font-black text-lg text-slate-900 border-r border-slate-100 text-center">Pré-Clínica</div>
                <div className="p-6 md:p-8 md:col-span-2 border-r border-slate-100">
                  <p className="m-0 text-sm font-medium text-slate-600">Testes em laboratório (in vitro) e em animais. Avalia a <strong>segurança inicial</strong> e o potencial terapêutico.</p>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-100 text-green-700 shrink-0"><Activity size={18} /></div>
                  <span className="text-sm font-bold text-green-700">Concluída com sucesso.</span>
                </div>
              </div>

              {/* Fase 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 md:p-8 font-black text-lg text-slate-900 border-r border-slate-100 text-center">Fase 1</div>
                <div className="p-6 md:p-8 md:col-span-2 border-r border-slate-100">
                  <p className="m-0 text-sm font-medium text-slate-600">Pequeno grupo de voluntários saudáveis (20-100). Foco total na <strong>segurança</strong>, dosagem e como o corpo processa o fármaco (farmacocinética).</p>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-100 text-green-700 shrink-0"><Activity size={18} /></div>
                  <span className="text-sm font-bold text-green-700">Concluída com sucesso.</span>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 md:p-8 font-black text-lg text-slate-900 border-r border-slate-100 text-center">Fase 2</div>
                <div className="p-6 md:p-8 md:col-span-2 border-r border-slate-100">
                  <p className="m-0 text-sm font-medium text-slate-600">Grupo maior de pacientes com a condição (100-500). Avalia a <strong>eficácia preliminar</strong> e a segurança a curto prazo.</p>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-100 text-green-700 shrink-0"><Activity size={18} /></div>
                  <span className="text-sm font-bold text-green-700">Concluída (Estudo TRIUMPH-1). Mostrou eficácia impressionante.</span>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center bg-green-50 last:border-b-0">
                <div className="p-6 md:p-8 font-black text-lg text-slate-900 border-r border-green-100 text-center">Fase 3</div>
                <div className="p-6 md:p-8 md:col-span-2 border-r border-green-100">
                  <p className="m-0 text-sm font-medium text-slate-600">Grande escala (1000-5000+ pacientes). <strong>Confirma a eficácia</strong>, monitora reações adversas e compara com placebos ou tratamentos padrão. Fase necessária para o registro.</p>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-green-600 text-white shrink-0"><PlayCircle size={18} /></div>
                  <span className="text-sm font-bold text-green-800">ATUAL: A Retatrutida está realizando estes testes cruciais em grande escala.</span>
                </div>
              </div>

              {/* Registro */}
              <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 md:p-8 font-black text-lg text-slate-900 border-r border-slate-100 text-center">Registro</div>
                <div className="p-6 md:p-8 md:col-span-2 border-r border-slate-100">
                  <p className="m-0 text-sm font-medium text-slate-600">Submissão dos dados de todas as fases anteriores para agências reguladoras (como ANVISA no Brasil e FDA nos EUA).</p>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-slate-100 text-slate-400 shrink-0"><Activity size={18} /></div>
                  <span className="text-sm font-bold text-slate-500">Próximo passo após a Fase 3.</span>
                </div>
              </div>
            </div>

            <div className="my-8 p-6 md:p-8 bg-white border border-green-100 rounded-3xl shadow-sm flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">✅</span> Onde está a Retatrutida?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                Baseado nos manuais de Pesquisa Clínica, a Retatrutida concluiu com sucesso a Fase 2 (TRIUMPH-1). No momento da escrita deste artigo, ela encontra-se na <strong>Fase 3 dos testes clínicos</strong>, que é a etapa final e confirmatória em grande escala necessária para que os dados sejam robustos o suficiente para a submissão de registro e futura comercialização.
              </p>
            </div>
            {/* FIM DA NOVA SEÇÃO: FASES DE APROVAÇÃO */}

            {/* INÍCIO DA NOVA SEÇÃO: TABELA COMPARATIVA E COMPARAÇÕES */}
            <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Comparativo Épico: A Evolução da Perda de Peso
            </h2>
            <p>A Retatrutida não surgiu do nada; ela é o ápice de décadas de evolução na compreensão dos hormônios incretínicos. Para analisar o impacto metabólico real, precisamos comparar o que já existe no mercado com essa nova promessa, além do tratamento padrão ouro cirúrgico.</p>

            {/* TABELA COMPARATIVA (DESKTOP) OTIMIZADA PARA NAO QUEBRAR */}
            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch">
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-3">Tratamento / Molécula</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-5">Mecanismo e Uso</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-2">Perda de Peso (%)</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 col-span-2">Status</div>
              </div>

              {comparativoTratamentos.map((farmaco) => (
                <div key={farmaco.id} className={`grid grid-cols-12 items-stretch ${farmaco.cor === 'bg-green-600' ? 'bg-green-600 text-white' : farmaco.cor === 'bg-slate-800' ? 'bg-slate-800 text-white' : 'hover:bg-slate-50' } transition-colors border-b border-slate-100 last:border-b-0`}>

                  {/* Molécula/Tratamento */}
                  <div className="p-4 border-r border-slate-100 flex flex-col justify-center items-center text-center col-span-3">
                    <span className={`font-black text-lg lg:text-xl italic uppercase ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-white' : 'text-slate-900' } leading-tight`}>{farmaco.molecula}</span>
                    {farmaco.nomeComercial && (
                      <span className={`block text-[11px] font-bold mt-1 ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' } leading-tight`}>({farmaco.nomeComercial})</span>
                    )}
                  </div>

                  {/* Mecanismo e Frequência */}
                  <div className="p-4 border-r border-slate-100 flex flex-col justify-center gap-1 col-span-5">
                    <span className={`text-sm lg:text-base font-bold leading-tight ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-100' : 'text-slate-800' }`}>{farmaco.mecanismo}</span>
                    <span className={`text-xs font-medium ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' }`}>{farmaco.frequencia}</span>
                  </div>

                  {/* Perda Peso */}
                  <div className="p-4 border-r border-slate-100 flex flex-col justify-center items-center text-center col-span-2">
                    <span className={`font-black text-xl lg:text-2xl ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-white' : 'text-green-700' }`}>{farmaco.perdaPeso}</span>
                  </div>

                  {/* Fase */}
                  <div className="p-4 flex flex-col justify-center items-center text-center col-span-2">
                    {farmaco.fase.includes('Aprovado') || farmaco.fase.includes('Ouro') ? (
                      <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase text-center leading-none flex items-center justify-center h-fit">Aprovado</span>
                    ) : (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase text-center leading-none flex items-center justify-center h-fit">Em Testes</span>
                    )}
                    <span className={`block text-[9px] lg:text-[10px] font-bold mt-2 ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' } leading-tight`}>{farmaco.fase}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* FIM DA TABELA COMPARATIVA (DESKTOP) */}

            {/* CARDS COMPARATIVOS (MOBILE) - HIDDEN ON DESKTOP */}
            <div className="space-y-6 md:hidden my-10">
              {comparativoTratamentos.map((farmaco) => (
                <div key={farmaco.id} className={`${farmaco.cor} ${farmaco.textColor} p-6 rounded-3xl shadow-lg border ${farmaco.cor === 'bg-green-600' ? 'border-green-500' : farmaco.cor === 'bg-slate-800' ? 'border-slate-700' : 'border-slate-100'}`}>
                  <div className="flex justify-between items-center mb-4 border-b pb-3 gap-3 border-opacity-20">
                    <div className="flex flex-col">
                      <span className="font-black text-xl italic uppercase">{farmaco.molecula}</span>
                      {farmaco.nomeComercial && (
                        <span className={`text-xs font-bold ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' }`}>({farmaco.nomeComercial})</span>
                      )}
                    </div>
                    {farmaco.fase.includes('Aprovado') || farmaco.fase.includes('Ouro') ? (
                      <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase shrink-0">Aprovado</span>
                    ) : (
                      <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase shrink-0">Em Testes</span>
                    )}
                  </div>

                  <div className="space-y-3 font-medium text-sm">
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Mecanismo:</span> <span className="text-right">{farmaco.mecanismo}</span></p>
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Uso:</span> <span className="text-right">{farmaco.frequencia}</span></p>
                    <p className="flex justify-between items-center gap-3"><span className="font-bold opacity-80">Perda de Peso:</span> <span className={`font-black text-xl ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-white' : 'text-green-700'}`}>{farmaco.perdaPeso}</span></p>
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Status:</span> <span className={`text-right text-xs font-bold ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500'}`}>{farmaco.fase}</span></p>
                  </div>
                </div>
              ))}
            </div>
            {/* FIM DOS CARDS COMPARATIVOS (MOBILE) */}

            {/* SEÇÃO DE COMPARAÇÃO DIRETA */}
            <div className="my-12 bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-6 border-b border-slate-200 pb-3 flex items-center gap-3">
                <Zap className="text-orange-500" /> Entendendo as Diferenças na Prática
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Retatrutida vs. Semaglutida (Ozempic/Wegovy)</h4>
                  <p className="text-slate-600 leading-relaxed">
                    A semaglutida é um <strong>agonista único</strong> (atua apenas no GLP-1), focando quase que inteiramente na saciedade e redução da fome. Embora seja muito eficaz (perda de peso de 15% a 18%), ela não atua ativamente para aumentar o gasto energético do corpo. A retatrutida, por possuir o glucagon, não só tira a fome como "acelera" a queima de gordura, resultando em uma perda de peso quase 10% superior.
                  </p>
                </div>
                
                <div className="h-px bg-slate-200 w-full"></div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Retatrutida vs. Tirzepatida (Mounjaro/Zepbound)</h4>
                  <p className="text-slate-600 leading-relaxed">
                    A tirzepatida foi o primeiro passo dessa evolução, atuando como um <strong>agonista duplo</strong> (GLP-1 e GIP). Ela já consegue perdas em torno de 21% a 22,5%. A principal diferença para a retatrutida é a adição da terceira via, o <strong>Glucagon</strong>. Essa "peça extra" da retatrutida ataca agressivamente a gordura armazenada no fígado e eleva o metabolismo basal, encostando a eficácia em cerca de 24,2%, muito próximo aos resultados de um Bypass Gástrico cirúrgico.
                  </p>
                </div>
              </div>
            </div>
            {/* FIM DA NOVA SEÇÃO DE COMPARAÇÃO */}

            <h2 id="nutricao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> O Pilar Insubstituível da Nutrição
            </h2>
            <p>Embora a chegada de inovações farmacológicas traga imensa esperança, é vital ressaltar que nenhuma caneta de injeção anula a necessidade de uma base comportamental sólida. O suporte nutricional rigoroso é indispensável para evitar o catabolismo muscular exagerado durante uma fase de perda de peso tão rápida e intensa.</p>

            {/* SEGUNDA LISTA OBJETIVA */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Cuidados Nutricionais durante o Tratamento
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Aporte proteico elevado (1,2 a 1,5g/kg/dia) para preservar músculos
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Fracionamento inteligente de refeições para evitar náuseas
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Adequação da densidade nutricional para compensar o baixo apetite
                </li>
              </ul>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            {/* ALERTA IMPORTANTE - PERIGO / FAKE NEWS */}
            <div className="my-12 p-8 md:p-10 bg-red-50 rounded-[3rem] border-2 border-red-200 shadow-lg flex flex-col items-center text-center md:flex-row md:text-left gap-8">
              <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 shadow-inner">
                <AlertTriangle size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-red-700 uppercase italic mb-3">
                  ALERTA MÁXIMO: A Retatrutida NÃO está à venda!
                </h3>
                <p className="text-red-900 text-lg font-medium leading-relaxed m-0">
                  Qualquer anúncio na internet, redes sociais ou mercado paralelo oferecendo a Retatrutida hoje é <strong>100% FALSO e extremamente perigoso</strong>. O medicamento ainda está em fase de testes (Fase 3) e <strong>não foi aprovado</strong> por nenhuma agência reguladora do mundo (nem FDA, nem ANVISA). Não coloque sua vida em risco injetando substâncias de origem desconhecida.
                </p>
              </div>
            </div>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">O que é a retatrutida?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A retatrutida (LY3437943) é uma medicação inovadora em desenvolvimento para o combate à obesidade. Ela atua como um agonista triplo, conectando-se e ativando simultaneamente os receptores dos hormônios GIP, GLP-1 e glucagon para otimizar o metabolismo geral e reduzir o apetite.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Quantos quilos é possível perder com esse tratamento?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">De acordo com os dados colhidos no estudo clínico TRIUMPH-1 (Fase 2), os participantes que utilizaram as doses mais altas da medicação registraram uma impressionante redução de peso média de até 24,2% do peso corporal total no período de 48 semanas.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Em que fase de aprovação está a Retatrutida?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A Retatrutida concluiu com sucesso a Fase 2 (TRIUMPH-1) e encontra-se atualmente na Fase 3 dos testes clínicos. Esta é a fase final e confirmatória em grande escala necessária para que os dados sejam robustos o suficiente para a submissão de registro e futura comercialização.</p>
                </div>
              </div>
            </div>
            {/* FIM DO FAQ VISUAL OTIMIZADO */}

            <Newsletter />
          </div> {/* FIM DA DIV DO CONTEÚDO */}
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* INÍCIO DO NOVO CARTÃO DE AUTOR COM E-E-A-T REFORÇADO */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">

          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr. - Nutricionista e Autor do Artigo." 
              title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador Antropométrico ISAK Nível 1."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Conteúdo escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela ciência metabólica, Marco dedica seus estudos a compreender a fisiologia humana de forma aprofundada. Especialista em composição corporal com certificação internacional, ele foca em traduzir o rigor dos artigos científicos para a prática do dia a dia. Seu objetivo é ajudar você a entender como o próprio corpo funciona através da educação nutricional baseada em evidências reais.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
        {/* FIM DO NOVO CARTÃO DE AUTOR */}
      </div> {/* FIM DA DIV BRANCA */}
    </section>
    </>
  );
}