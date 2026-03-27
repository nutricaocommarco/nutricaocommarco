import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Activity, Leaf, Scale, Heart, FileText, Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas para o Schema e para o visual
const datePublishedISO = "2026-03-26";
const dateModifiedISO = "2026-03-27";
// Converte "YYYY-MM-DD" para "DD/MM/YYYY"
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminhos das imagens
const tirzepatidaCapa = `${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`;
const tirzepatidaGrafico = `${githubImgBase}Blog/Tirzepatida-Grafico.jpg`;

export default function TirzepatidaParaQueServe() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Array de dados para o FAQ
  const faqs = [
    {
      pergunta: "Tirzepatida emagrece mesmo?",
      resposta: "Sim. Estudos clínicos demonstraram que pacientes utilizando a dose máxima podem perder entre 15% e 22,5% do peso corporal total, especialmente quando o uso é associado a um déficit calórico, treinamento de força e mudanças no estilo de vida."
    },
    {
      pergunta: "Como funciona no corpo?",
      resposta: "Ela atua como um duplo agonista, imitando os hormônios intestinais GLP-1 e GIP. Isso retarda o esvaziamento gástrico, aumenta significativamente a saciedade, reduz o 'barulho mental' por comida e melhora a forma como o corpo processa a insulina e a gordura."
    },
    {
      pergunta: "Vale a pena usar?",
      resposta: "Para pacientes com obesidade ou sobrepeso com comorbidades que não tiveram sucesso apenas com dieta e exercícios, a tirzepatida tem se mostrado uma ferramenta extremamente eficaz e segura. No entanto, seu uso deve ser sempre prescrito e acompanhado por um médico, aliado ao suporte de um nutricionista."
    },
    {
      pergunta: "Quais são os efeitos colaterais da Tirzepatida?",
      resposta: "Os efeitos mais comuns são gastrointestinais, incluindo náuseas, vômitos, diarreia e constipação. Geralmente, são de intensidade leve a moderada e ocorrem com mais frequência durante as semanas de aumento da dose. A hidratação e o fracionamento das refeições ajudam no controle."
    },
    {
      pergunta: "Qual o melhor horário para tomar a Tirzepatida?",
      resposta: "Não há um horário obrigatório, mas muitas pessoas preferem aplicar à noite para 'dormir' durante os possíveis efeitos colaterais iniciais, como náuseas. O importante é manter sempre o mesmo dia da semana."
    },
    {
      pergunta: "A tirzepatida faz mal para os rins?",
      resposta: "Geralmente não, mas a desidratação causada por efeitos colaterais como vômitos ou diarreia pode sobrecarregar a função renal. Manter-se adequadamente hidratado bebendo muita água é fundamental durante o tratamento."
    },
    {
      pergunta: "Mounjaro é seguro para quem não tem diabetes?",
      resposta: "Sim, a molécula da tirzepatida já é aprovada em vários países (comercializada sob o nome Zepbound) especificamente para o controle da obesidade, demonstrando um perfil de segurança bem estabelecido quando o uso é acompanhado por profissionais."
    },
    {
      pergunta: "O que comer se eu sentir muita náusea?",
      resposta: "Se as náuseas ocorrerem, priorize o consumo de alimentos mais secos, como torradas integrais ou biscoitos de água e sal. Evite rigorosamente frituras ou alimentos muito temperados e gordurosos, pois eles demoram mais para sair do estômago."
    }
  ];

  // Array de dados para a Tabela Comparativa (Atualizado com Semaglutida)
  const comparativoTratamentos = [
    {
      id: 1,
      molecula: 'Semaglutida',
      nomeComercial: 'Ozempic / Wegovy',
      mecanismo: 'Agonista Único (GLP-1)',
      frequencia: 'Injeção Semanal',
      perdaPeso: 'Até 15%',
      fase: 'Aprovado (Anvisa)',
      cor: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      molecula: 'Tirzepatida',
      nomeComercial: 'Mounjaro / Zepbound',
      mecanismo: 'Duplo Agonista (GLP-1 + GIP)',
      frequencia: 'Injeção Semanal',
      perdaPeso: 'Até 22,5%',
      fase: 'Aprovado (Anvisa)',
      cor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: 3,
      molecula: 'Retatrutida',
      nomeComercial: 'Em Desenvolvimento',
      mecanismo: 'Triplo Agonista (GLP-1 + GIP + Glucagon)',
      frequencia: 'Injeção Semanal',
      perdaPeso: 'Até 24,2%',
      fase: 'Fase 3 Clínica',
      cor: 'bg-white',
      textColor: 'text-slate-800'
    }
  ];

  return (
    <>
      <Helmet>
        {/* SEO OTIMIZADO - TÍTULO DO SNIPPET (aprox 60 caracteres) */}
        <title>Tirzepatida: Para que serve? Emagrecimento, Mounjaro e Rebote | Nutrição com Marco</title>

        {/* META DESCRIPTION OTIMIZADA (aprox 155 caracteres) */}
        <meta name="description" content="Descubra para que serve a Tirzepatida (Mounjaro), como funciona no emagrecimento, quanto peso se perde e como evitar o temido efeito rebote." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tirzepatida: Para que serve? Emagrecimento, Mounjaro e Rebote | Nutrição com Marco" />
        <meta property="og:description" content="Tudo sobre a Tirzepatida: mecanismo de ação, perda de peso esperada, necessidade de musculação, desmame e alertas sobre falsificações." />
        <meta property="og:image" content={tirzepatidaCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO OTIMIZADO (COM AUTORIDADE E-E-A-T) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tirzepatida: Para que serve e como funciona no corpo?",
            "image": tirzepatidaCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição", "Emagrecimento", "Obesidade", "Composição Corporal", "Medicina do Estilo de Vida"]
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
            "description": "Guia completo sobre a Tirzepatida, princípio ativo do Mounjaro. Entenda seu mecanismo, efeitos no emagrecimento, como evitar o efeito rebote e os riscos de falsificações."
          })}
        </script>

        {/* SCHEMA.ORG 2: MEDICAL WEB PAGE (AVANÇADO PARA YMYL) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Tirzepatida: Para que serve? Emagrecimento, Mounjaro e Rebote",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Tirzepatida"},
              {"@type": "MedicalEntity", "name": "Obesidade"},
              {"@type": "MedicalEntity", "name": "Emagrecimento"},
              {"@type": "MedicalEntity", "name": "Mounjaro"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes"
            }
          })}
        </script>

        {/* SCHEMA.ORG 3: BREADCRUMB LIST */}
        <script type="application/ld+json">
          {JSON.stringify({
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
                "name": "Tirzepatida: Para que serve?",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          })}
        </script>

        {/* SCHEMA.ORG 4: FAQ PAGE (SINCRONIZADO COM O ARRAY) */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>

        {/* SCHEMA.ORG 5: AUDIO OBJECT (SEO PARA ÁUDIO DO ARTIGO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AudioObject",
            "name": "Áudio do Artigo: Tirzepatida Para que serve?",
            "description": "Narração em áudio do artigo completo sobre a Tirzepatida, Mounjaro e emagrecimento.",
            "contentUrl": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Tirzepatida.mp3",
            "encodingFormat": "audio/mpeg",
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr."
            }
          })}
        </script>

        {/* SCHEMA.ORG 6: VIDEO OBJECT (SEO PARA VÍDEO DO YOUTUBE EMBUTIDO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Como Multiplicar o Efeito do Mounjaro - Dr Stocker",
            "description": "Explicação médica detalhada sobre estratégias práticas para potencializar os resultados do tratamento com Mounjaro (Tirzepatida) e evitar o reganho de peso.",
            "thumbnailUrl": [
              "https://img.youtube.com/vi/TBPP_wa087k/maxresdefault.jpg"
            ],
            "uploadDate": "2023-11-20T08:00:00+00:00",
            "embedUrl": "https://www.youtube.com/embed/TBPP_wa087k",
            "contentUrl": "https://www.youtube.com/watch?v=TBPP_wa087k",
            "publisher": {
              "@type": "Organization",
              "name": "Dr. Stocker",
              "logo": {
                "@type": "ImageObject",
                "url": "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              }
            }
          })}
        </script>
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          {/* TAG E DATA DE ATUALIZAÇÃO */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Tratamento Farmacológico</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 OTIMIZADO COM KEYWORD EXATA NO INÍCIO */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Tirzepatida: Para que serve e como funciona no corpo?
          </h1>

          {/* CAIXA DE RESPOSTA DIRETA OTIMIZADA PARA GEO/SEO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Tirzepatida o que é? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A tirzepatida é um medicamento de ponta utilizado para tratar diabetes tipo 2 e obesidade, promovendo emagrecimento expressivo ao reduzir o apetite e melhorar o controle da glicose através de sua ação direta nos hormônios intestinais GLP-1 e GIP.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Tirzepatida.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
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
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">
                    Índice do Conteúdo
                  </h3>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} 
                />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li>
                    <a href="#mecanismo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Para que serve e mecanismo
                    </a>
                  </li>
                  <li>
                    <a href="#indicacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Quem pode usar?
                    </a>
                  </li>
                  <li>
                    <a href="#perda-peso" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Quanto peso se perde?
                    </a>
                  </li>
                  <li>
                    <a href="#base-sucesso" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Alimentação e Musculação
                    </a>
                  </li>
                  <li>
                    <a href="#efeitos-colaterais" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Efeitos colaterais da Tirzepatida
                    </a>
                  </li>
                  <li>
                    <a href="#efeito-rebote" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Efeito Rebote e o Desmame
                    </a>
                  </li>
                  <li>
                    <a href="#estrategias" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Estratégias contra reganho
                    </a>
                  </li>
                  <li>
                    <a href="#video-especialista" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Como Multiplicar os Efeitos
                    </a>
                  </li>
                  <li>
                    <a href="#comparacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Comparação de Fármacos
                    </a>
                  </li>
                  <li>
                    <a href="#perigos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Perigo da Tirzepatida Paraguaia
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

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> O Mecanismo no Corpo
            </h2>
            <p>A tirzepatida é uma medicação inovadora aprovada pela Anvisa inicialmente para o tratamento do diabetes tipo 2, mas que ganhou destaque global pelo seu potente efeito no controle da obesidade. Diferente de medicações mais antigas, ela é um duplo agonista, o que significa que ela imita dois hormônios naturais do nosso intestino: o GLP-1 (peptídeo semelhante ao glucagon 1) e o GIP (polipeptídeo insulinotrópico dependente de glicose). Enquanto o GLP-1 é amplamente conhecido por retardar o esvaziamento gástrico e sinalizar saciedade ao cérebro, o GIP atua de forma complementar melhorando a sensibilidade à insulina e a maneira como o corpo processa a gordura.</p>

        {/* IMAGEM DE CAPA COM SEO OTIMIZADO */}
          <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
            <img 
              src={tirzepatidaCapa} 
              alt="Caixa e caneta injetável de Tirzepatida 5mg, conhecida comercialmente como Mounjaro, utilizada para tratamento metabólico e emagrecimento." 
              title="Tirzepatida 5mg (Mounjaro) - Medicação para Emagrecimento e Controle Metabólico"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="bg-green-50 p-4 text-center">
              <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                A tirzepatida representa um marco científico no tratamento da obesidade e saúde metabólica.
              </p>
            </div>
          </div>

            <p>O mecanismo de ação da tirzepatida é tão profundo que ela não apenas reduz a fome, mas altera a "recompensa" cerebral associada à comida, ajudando a silenciar o chamado "barulho mental" por alimentos hipercalóricos. Se você quer entender mais a fundo como a fome é regulada no cérebro, recomendo a leitura do nosso artigo sobre os <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-semibold hover:underline">hormônios da fome no emagrecimento</Link>. Isso explica por que, nos estudos clínicos, os pacientes alcançaram resultados superiores a outros tratamentos injetáveis disponíveis no mercado brasileiro.</p>

            <h2 id="indicacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> Quem pode usar Tirzepatida?
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 marker:text-green-600 my-8">
              <p className="m-0"><strong>• Critérios de IMC:</strong> IMC ≥ 30 kg/m² (obesidade) ou IMC ≥ 27 kg/m² + comorbidades associadas à obesidade.</p>
              <p className="m-0"><strong>• Falha Terapêutica Prévia:</strong> Insucesso da terapia comportamental isolada (dieta, atividade física e modificação comportamental) ou tentativas anteriores de perda de peso sem resultados satisfatórios.</p>
              <p className="m-0"><strong>• Avaliação Individual:</strong> Paciente sem contraindicações ao uso do medicamento proposto e com condições para acompanhamento médico regular.</p>
            </div>

            <h2 id="perda-peso" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Quanto peso se perde com a Tirzepatida?
            </h2>
            <p>Os dados dos estudos da linha SURMOUNT mostram que a perda de peso com a tirzepatida é dose-dependente e altamente significativa. Em média, pacientes utilizando a dose máxima de 15mg chegaram a perder entre <strong>15% e 22,5% do seu peso corporal total</strong> ao longo de 72 semanas de tratamento.</p>

            <p>Para se ter uma ideia prática, em um indivíduo de 100 kg, isso representa uma redução de mais de 20 kg, aproximando os resultados farmacológicos daqueles observados em cirurgias bariátricas menos invasivas. No entanto, é fundamental entender que esses números dependem diretamente da resposta individual e da adesão às mudanças de estilo de vida.</p>

            <h2 id="base-sucesso" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> A base do sucesso: Alimentação e Musculação
            </h2>
            <p>Muitas pessoas cometem o erro de achar que a injeção faz todo o trabalho sozinha, mas a verdade é que a alimentação e a musculação são os pilares que garantem que o peso perdido seja gordura e não músculo. Durante o uso da tirzepatida, a saciedade é muito alta, o que pode levar a uma ingestão proteica insuficiente. É essencial focar em uma dieta densa em nutrientes, priorizando proteínas magras e fibras para evitar a constipação, um efeito colateral comum.</p>

            <p className="bg-green-50/50 p-6 rounded-2xl border border-green-100 border-dashed text-green-950 font-medium">A musculação é inegociável. A perda de peso rápida pode induzir a sarcopenia (perda de massa muscular), o que reduz o metabolismo basal e facilita o efeito rebote no futuro.</p>

            <p>O treinamento de força sinaliza ao corpo que ele deve preservar o tecido muscular, mantendo a "máquina" metabólica ativa. Para monitorar corretamente se a sua perda de peso está sendo focada em gordura e não em massa magra, é útil entender como funcionam ferramentas como a <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-semibold hover:underline">bioimpedância</Link> ou exames de <Link to="/o_que_e_antropometria" className="text-green-600 font-semibold hover:underline">antropometria</Link>. Sem exercício resistido, você corre o risco de se tornar um "falso magro" com metabolismo lento.</p>

            {/* TABELA DE EFEITOS COLATERAIS */}
            <div id="efeitos-colaterais" className="my-12 bg-white border border-slate-100 shadow-xl rounded-[2.5rem] overflow-hidden">
              <div className="bg-green-50 p-6 md:p-8 border-b border-green-100/60">
                <h2 className="text-xl font-black text-green-900 uppercase italic m-0 flex items-center gap-3">
                  <Activity className="text-green-600 shrink-0" /> Efeitos Colaterais da Tirzepatida
                </h2>
              </div>
              <div className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="p-6 md:border-r border-slate-100 font-black text-slate-800 flex items-center">Náuseas e Vômitos</div>
                  <div className="p-6 md:col-span-2 text-slate-600 font-medium leading-relaxed">Comuns, mas geralmente bem tolerados com titulação lenta. Podem ser menos intensos em algumas pessoas.</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="p-6 md:border-r border-slate-100 font-black text-slate-800 flex items-center">Diarreia</div>
                  <div className="p-6 md:col-span-2 text-slate-600 font-medium leading-relaxed">Relatada por uma parcela dos pacientes.</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="p-6 md:border-r border-slate-100 font-black text-slate-800 flex items-center">Constipação</div>
                  <div className="p-6 md:col-span-2 text-slate-600 font-medium leading-relaxed">Observada em alguns pacientes.</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="p-6 md:border-r border-slate-100 font-black text-slate-800 flex items-center">Hipoglicemia</div>
                  <div className="p-6 md:col-span-2 text-slate-600 font-medium leading-relaxed">Baixo risco em monoterapia. Aumenta quando combinado com sulfonilureias ou insulina.</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="p-6 md:border-r border-slate-100 font-black text-slate-800 flex items-center">Outros (Menos Comuns)</div>
                  <div className="p-6 md:col-span-2 text-slate-600 font-medium leading-relaxed">Dispepsia, dor abdominal, fadiga.</div>
                </div>
              </div>
            </div>
            {/* FIM DA TABELA DE EFEITOS COLATERAIS */}

{/* AFILIADO MERCADO LIVRE - O PINGUS APROVA (BALANÇA DE COZINHA) */}
<div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
    {/* SELO NO CANTO SUPERIOR */}
    <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
        <Zap size={14} className="fill-white" />
        <span>O Pingus Aprova!</span>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
        {/* FOTO DO PINGUS (AUTORIDADE) */}
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
            <img 
                src={`${githubImgBase}logoN_pingus.png`} 
                alt="Selo de Qualidade Pingus" 
                className="w-full h-full object-contain" 
            />
        </div>

        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                Balança de Cozinha Digital <span className="text-green-700">Custo-Benefício</span>
            </h4>
            
            {/* IMAGEM DO PRODUTO */}
            <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                <img 
                    src={`${githubImgBase}Afiliado/BalancaCozinha.jpg`} 
                    alt="Balança de Cozinha Digital Simples" 
                    className="w-full h-auto object-contain" 
                />
            </div>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                A Tirzepatida vai silenciar a sua fome, mas é aí que mora o perigo: a desnutrição e a perda de massa magra. Ter uma balança de cozinha garante que, <strong>mesmo sem apetite, você bata a meta de proteínas</strong>. Eu usei este modelo simples e barato por muitos anos e garanto: ele entrega toda a precisão que você precisa no dia a dia, sem pesar no bolso!
            </p>

            {/* BOTÃO COM LINK AFILIADO */}
            <a 
                href="https://meli.la/2e8sxv1" 
                rel="sponsored noopener noreferrer" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
            >
                <ShoppingCart size={16} />
                Comprar no Mercado Livre
            </a>
        </div>
    </div>

    {/* DISCLOSURE OBRIGATÓRIO */}
    <div className="mt-12 pt-6 border-t border-green-50 text-center">
        <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
            Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso! O Pingus agradece o apoio.
        </p>
    </div>
</div>


            <h2 id="efeito-rebote" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> O medo do Efeito Rebote e a importância do Desmame
            </h2>
            <p>O <strong>mounjaro efeito rebote</strong> é uma preocupação real e acontece quando o paciente interrompe o uso de forma abrupta sem ter consolidado novos hábitos. Como a medicação controla a fome de forma química, ao retirá-la, o apetite retorna e, muitas vezes, de forma mais intensa. Para evitar isso, o <strong>desmame da tirzepatida</strong> deve ser planejado com um médico, reduzindo as doses gradualmente ou aumentando o espaçamento entre as aplicações (de 7 para 10 ou 14 dias), enquanto se monitora a manutenção do peso. O objetivo é que o corpo se acostume a manter o novo "set point" metabólico sem o auxílio total do fármaco.</p>

            <p className="font-semibold text-slate-800 bg-slate-100 p-6 rounded-2xl border border-slate-200">Aqui é importante dizer que a prescrição de GLP-1 não cura a obesidade, mas a trata de forma muito semelhante à que um medicamento para pressão arterial atenua a hipertensão. Remova a medicação e, na ausência de uma intervenção significativa e contínua de medicina do estilo de vida, o reganho de peso ocorrerá no paciente obeso com a mesma certeza que a pressão arterial cronicamente alta retornará no paciente hipertenso.</p>

           {/* Inserção do Gráfico SURMOUNT-3 */}
            <div className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
                <img
                    src={tirzepatidaGrafico}
                    alt="Gráfico mostrando a variação percentual média de peso corporal ao longo de 84 semanas no estudo SURMOUNT-3, comparando o grupo que continuou com Tirzepatida versus o grupo que mudou para Placebo após 12 semanas de intervenção intensiva de estilo de vida. Fonte: Nature Medicine, 2023."
                    title="Evidência SURMOUNT-3: Tirzepatida previne o reganho de peso após intervenção de estilo de vida"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="p-4 bg-slate-50 text-center text-xs text-slate-500 font-medium">
                    Gráfico adaptado de Jastreboff et al., 2023 (Nature Medicine). Mostra a variação percentual média de peso desde o início da fase de intervenção intensiva de estilo de vida lead-in (semana -12) até a semana 72 do período de tratamento randomizado duplo-cego (totalizando 84 semanas). O grupo placebo demonstra a rápida recuperação de peso comum no "efeito sanfona".
                </div>
            </div>

            {/* Explicação baseada no PDF com link interno */}
            <p>Os dados científicos do estudo <a href="https://pubmed.ncbi.nlm.nih.gov/37840095/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline"><strong>SURMOUNT-3</strong></a> (Jastreboff et al., 2023), publicado na prestigiada revista <em>Nature Medicine</em>, trazem evidências visuais devastadoramente claras sobre a necessidade de gerenciamento contínuo da obesidade.</p>

            <p>O gráfico acima ilustra os resultados de participantes que alcançaram uma perda de peso média de ~6.9% durante um período "lead-in" de 12 semanas de intervenção intensiva de estilo de vida (dieta de baixas calorias, exercícios e aconselhamento). Após essas 12 semanas, eles foram randomizados para continuar o tratamento com Tirzepatida (dose máxima tolerada) ou mudar para um Placebo.</p>

            <div>
              <p className="mb-2">Observe as trajetórias após a randomização (Semana 0):</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>O grupo que continuou com <strong>Tirzepatida (linha azul escura)</strong> experimentou uma perda de peso adicional e significativa de <strong>18.4%</strong>. No final das 84 semanas de estudo, a redução total de peso desde o início do estilo de vida foi de <strong>~24.3%</strong>.</li>
                <li>Em contraste, o grupo que mudou para <strong>Placebo (linha cinza)</strong>, que parou a intervenção farmacológica ativa mas continuou com aconselhamento de estilo de vida, rapidamente começou a recuperar o peso perdido, terminando o estudo com apenas ~2.2% de redução total desde o início.</li>
              </ul>
            </div>

            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 font-semibold mt-6">Este gráfico prova visualmente que a obesidade é uma doença crônica e que os esforços puramente comportamentais, embora essenciais, muitas vezes são sobrecarregados por contra-adaptações biológicas quando a intervenção principal (neste caso, farmacológica) é removida. A curva do grupo placebo é o exemplo clássico e documentado cientificamente do <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-semibold hover:underline">efeito sanfona</Link>. Provando que sem uma intervenção significativa e contínua de medicina do estilo de vida ou suporte farmacológico, o reganho de peso ocorrerá no paciente obeso.</p>

            <h2 id="estrategias" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Estratégias para minimizar o reganho de peso
            </h2>

            <div className="flex flex-col gap-6 my-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">1</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Monitoramento Contínuo</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Envolve monitorar flutuações através da <Link to="/qual_melhor_horario_para_se_pesar" className="text-green-600 font-semibold hover:underline">pesagem regular e adequada</Link> durante a manutenção, ajuste imediato caso haja reganho maior que 2kg, acompanhamento trimestral com a equipe e avaliação periódica da composição corporal.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">2</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Ajuste Nutricional Progressivo</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Aumento gradual das calorias (+100 a 200 kcal/semana), manutenção da adequação proteica (1,2 a 1,5g/kg/dia), além de um plano alimentar flexível e sustentável que permita adaptações para eventos sociais.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">3</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Atividade Física e Farmacologia</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Aumento progressivo para 300 min/semana de aeróbico e mínimo de 3 sessões de treinamento resistido. Na parte farmacológica, considerar a manutenção do GLP-1 na dose efetiva mínima ou um plano de descontinuação gradual.</p>
                </div>
              </div>
            </div>

            {/* VÍDEO RECOMENDADO EM DESTAQUE */}
            <h2 id="video-especialista" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Palavra do Especialista: Multiplicando os Efeitos
            </h2>

            <p>Para aprofundar ainda mais o seu entendimento e descobrir estratégias práticas para potencializar os resultados do tratamento com Mounjaro (Tirzepatida), assista a este excelente material explicativo feito pelo Dr. Stocker abordando as principais dúvidas sobre os medicamentos injetáveis.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Como Multiplicar o Efeito do Mounjaro</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/TBPP_wa087k" 
                  title="Como Multiplicar o Efeito do Mounjaro - Dr Stocker" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* SEÇÃO DE COMPARAÇÃO ATUALIZADA */}
            <h2 id="comparacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Comparação: Semaglutida, Tirzepatida e Retatrutida
            </h2>
            
            <p><strong>Evolução: Semaglutida x Tirzepatida</strong><br/>
            A <strong>Semaglutida</strong> (princípio ativo do Ozempic e Wegovy) foi a grande pioneira dessa geração, atuando como um agonista único do receptor de GLP-1 e entregando uma perda de peso média de até 15%. A <strong>Tirzepatida</strong> (Mounjaro) deu um passo científico além ao se tornar o primeiro "duplo agonista" (GLP-1 e GIP). Essa combinação não só elevou a eficácia da perda de peso para a casa dos 22,5%, como também, na prática clínica, tem demonstrado uma melhor tolerância no trato gastrointestinal para muitos pacientes durante a fase de adaptação.</p>
            
            <p><strong>O Futuro: Tirzepatida x Retatrutida (LY3437943)</strong><br/>
            Enquanto a tirzepatida já é uma realidade potente e revolucionária, a ciência estuda o próximo salto metabólico: a <Link to="/retatrutida_o_que_e" className="text-green-600 font-semibold hover:underline">Retatrutida</Link>. Esta nova molécula em fase de testes é um triplo agonista (GIP, GLP-1 e Glucagon). Os estudos mostram que ela pode levar a uma redução média de peso ainda maior (cerca de 24,2% após 48 semanas) e atua de forma muito mais agressiva na redução da gordura hepática. A evolução aponta para resultados cada vez mais individualizados e expressivos.</p>

            {/* TABELA COMPARATIVA (DESKTOP) OTIMIZADA PARA NAO QUEBRAR */}
            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch">
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-3">Tratamento / Molécula</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-5">Mecanismo e Uso</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-2">Perda de Peso (%)</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 col-span-2">Status</div>
              </div>

              {comparativoTratamentos.map((farmaco) => (
                <div key={farmaco.id} className={`grid grid-cols-12 items-stretch ${farmaco.cor === 'bg-green-600' ? 'bg-green-600 text-white' : farmaco.cor === 'bg-blue-600' ? 'bg-blue-600 text-white' : farmaco.cor === 'bg-slate-800' ? 'bg-slate-800 text-white' : 'hover:bg-slate-50 bg-white text-slate-800' } transition-colors border-b border-slate-100 last:border-b-0`}>

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
                      <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase text-center leading-none flex items-center justify-center h-fit w-fit mx-auto">Aprovado</span>
                    ) : (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase text-center leading-none flex items-center justify-center h-fit w-fit mx-auto">Em Testes</span>
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
                <div key={farmaco.id} className={`${farmaco.cor} ${farmaco.textColor} p-6 rounded-3xl shadow-lg border ${farmaco.cor === 'bg-green-600' ? 'border-green-500' : farmaco.cor === 'bg-blue-600' ? 'border-blue-500' : farmaco.cor === 'bg-slate-800' ? 'border-slate-700' : 'border-slate-100'}`}>
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

            <h2 id="perigos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> O perigo da Tirzepatida Paraguaia e Manipulada
            </h2>
            <p>Com o sucesso do Mounjaro, surgiu um mercado paralelo perigoso, muitas vezes referido como "tirzepatida paraguaia". Esse termo vem do fato de que no Paraguai a medicação não exige receita médica e é comercializada a preços muito menores. Porém, os produtos são contrabandeados para o Brasil sem os devidos cuidados de conservação. Um ponto crítico é a necessidade estrita de guardar o medicamento na geladeira, o que é frequentemente ignorado por atravessadores e vendedores ilegais.</p>

            <p>O uso de versões manipuladas sem procedência garantida ou medicamentos mal armazenados traz riscos gravíssimos. Você expõe seu corpo a infecções no local da aplicação, contaminação com substâncias tóxicas ou doses incorretas, pois a tirzepatida é uma molécula complexa e sua estabilidade depende de tecnologia de ponta. Comprar medicação fora das redes de farmácias oficiais do Brasil coloca sua vida em risco em troca de uma falsa economia.</p>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO COM PERGUNTAS EXATAS */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)
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
                      <ChevronDown
                        className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`}
                        size={24}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        openFaqIndex === index
                          ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8'
                          : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'
                      }`}
                    >
                      <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">
                        {faq.resposta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* FIM DO FAQ VISUAL OTIMIZADO */}

            <Newsletter />
          </div>
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr. - Autor do Artigo." 
              title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador Antropométrico ISAK Nível 1."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Conteúdo escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela ciência da nutrição, Marco dedica seus estudos a compreender a fisiologia humana de forma aprofundada. Especialista em composição corporal com certificação internacional, ele foca em traduzir o rigor dos artigos científicos para a prática do dia a dia. Seu objetivo é ajudar você a entender como o próprio corpo funciona através da educação nutricional baseada em evidências reais.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
