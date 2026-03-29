import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, 
  ShoppingCart, Clock, Sun, Moon, Coffee, AlertCircle, ShieldCheck, CheckCircle
} from 'lucide-react';

import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data
const datePublishedISO = "2026-03-29";
const dateModifiedISO = "2026-03-29";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminho da imagem de capa
const cicloCircadianoCapa = `${githubImgBase}Blog/CicloCircadiano.jpg`;

export default function CicloCircadiano() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "O que comer no café da manhã para emagrecer?",
      resposta: "Para iniciar o dia com o metabolismo alinhado, o ideal é focar numa base proteica forte, acompanhada de fibras. Ovos mexidos, iogurte natural com sementes de chia ou aveia, e frutas de baixo índice glicémico ajudam a controlar os picos de insulina matinais e evitam aquela fome descontrolada que costuma aparecer no meio da tarde."
    },
    {
      pergunta: "Dormir mal engorda?",
      resposta: "Sim, a privação de sono afeta diretamente os hormônios reguladores do apetite. Quando dorme mal, o seu corpo produz mais grelina, o hormônio que estimula a fome, e reduz a leptina, o hormônio responsável por sinalizar a saciedade. Além disso, o cansaço excessivo faz com que o seu cérebro busque compensação em alimentos mais calóricos e ricos em açúcar no dia seguinte."
    },
    {
      pergunta: "É obrigatório tomar café da manhã logo ao acordar?",
      resposta: "Não existe uma regra que obrigue toda a gente a comer imediatamente ao pular da cama, mas prolongar muito o jejum quando o seu corpo já está exigindo energia pode gerar um stresse no organismo. O mais importante é observar os seus sinais de fome e garantir que a sua primeira refeição tenha qualidade nutricional suficiente para sustentar o seu ritmo metabólico."
    },
    {
      pergunta: "Tomar café à tarde prejudica o emagrecimento?",
      resposta: "Indiretamente, sim. A cafeína tem uma meia-vida longa (cerca de 5 a 6 horas) e bloqueia os receptores de adenosina, que nos fazem sentir sono. Se consome cafeína tarde demais, o seu sono profundo é prejudicado, o que eleva o cortisol e a resistência à insulina no dia seguinte, sabotando a queima de gordura."
    },
    {
      pergunta: "Treinar à noite atrapalha o ciclo circadiano?",
      resposta: "Depende da intensidade. Exercícios muito vigorosos tarde da noite elevam a temperatura corporal e os níveis de adrenalina e cortisol, o que pode atrasar a liberação de melatonina. Se só puder treinar à noite, opte por intensidades moderadas e garanta um banho morno para ajudar o corpo a resfriar antes de deitar."
    },
    {
      pergunta: "A suplementação de melatonina causa vício?",
      resposta: "Diferente de remédios controlados (tarja preta), a melatonina não causa dependência química clássica no cérebro. No entanto, pode ocorrer uma forte dependência psicológica, onde a pessoa sente que não consegue dormir sem a suplementação externa, além de o uso incorreto poder dessincronizar ainda mais o seu relógio biológico ao mascarar hábitos ruins."
    },
    {
      pergunta: "Tomar melatonina diminui a produção natural do corpo?",
      resposta: "Estudos científicos, como o posicionamento da SBEM, indicam que a melatonina não possui um mecanismo de retroalimentação negativa estrito (diferente de hormônios como a testosterona). Ou seja, o uso externo não 'desliga' permanentemente a glândula pineal. Porém, doses exageradas podem 'atropelar' o sinal natural de escuridão e prejudicar a sensibilidade dos receptores a longo prazo."
    }
  ];

  const sincroniaAlimentar = [
    {
      id: 1,
      periodo: 'Manhã (06h - 10h)',
      status: 'Alta sensibilidade à insulina e cortisol elevado.',
      estrategia: 'Refeição completa. Proteínas, fibras e carboidratos complexos para gerar saciedade.',
      icone: Sun,
      cor: 'bg-amber-50',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200'
    },
    {
      id: 2,
      periodo: 'Tarde (12h - 16h)',
      status: 'Metabolismo ativo, excelente digestão.',
      estrategia: 'Maior volume alimentar do dia. Inclusão de vegetais, leguminosas e carnes magras.',
      icone: Clock,
      cor: 'bg-orange-50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200'
    },
    {
      id: 3,
      periodo: 'Noite (18h - 22h)',
      status: 'Queda na digestão, preparação para o sono.',
      estrategia: 'Refeições leves e de fácil digestão. Foco em proteínas de alto valor biológico e gorduras boas.',
      icone: Moon,
      cor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      borderColor: 'border-indigo-200'
    }
  ];

  const dicasSono = [
    { 
      habito: 'Exposição Solar', 
      pratica: '30 min de sol ao acordar.', 
      impacto: 'Zera o relógio biológico e regula o cortisol.', 
      icone: Sun,
      color: 'text-amber-600', 
      bg: 'bg-amber-50',
      border: 'border-amber-100'
    },
    { 
      habito: 'Higiene de Luz', 
      pratica: 'Zero ecrãs 2h antes de deitar.', 
      impacto: 'Permite a liberação natural da melatonina.', 
      icone: Zap,
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    { 
      habito: 'Ambiente Fresco', 
      pratica: 'Quarto entre 18°C e 20°C.', 
      impacto: 'Facilita a queda necessária da temperatura corporal.', 
      icone: Moon,
      color: 'text-cyan-600', 
      bg: 'bg-cyan-50',
      border: 'border-cyan-100'
    },
    { 
      habito: 'Corte da Cafeína', 
      pratica: 'Evitar estimulantes após as 14h.', 
      impacto: 'Não bloqueia a pressão de sono (adenosina).', 
      icone: Coffee,
      color: 'text-orange-600', 
      bg: 'bg-orange-50',
      border: 'border-orange-100'
    },
    { 
      habito: 'Jantar Leve', 
      pratica: 'Comer 3h antes de dormir.', 
      impacto: 'Evita picos de insulina que inibem o reparo celular.', 
      icone: Leaf,
      color: 'text-green-600', 
      bg: 'bg-green-50',
      border: 'border-green-100'
    },
    { 
      habito: 'Rotina de Relaxamento', 
      pratica: 'Leitura ou meditação à noite.', 
      impacto: 'Reduz a atividade do sistema nervoso simpático.', 
      icone: Heart,
      color: 'text-rose-600', 
      bg: 'bg-rose-50',
      border: 'border-rose-100'
    },
  ];

  return (
    <>
      <Helmet>
        {/* SEO OTIMIZADO - TÍTULO DO SNIPPET */}
        <title>O Que é Ciclo Circadiano? Relógio Biológico e Emagrecimento | Nutrição com Marco</title>

        {/* META DESCRIPTION OTIMIZADA */}
        <meta name="description" content="Descubra como o ciclo circadiano e o relógio biológico controlam o emagrecimento. Entenda o papel da melatonina, do cortisol e os horários das refeições." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que é Ciclo Circadiano? Relógio Biológico e Emagrecimento | Nutrição com Marco" />
        <meta property="og:description" content="Guia completo sobre ciclo circadiano: como emagrecer, melhorar o sono, horários corretos das refeições, a verdade sobre a melatonina e controle hormonal." />
        <meta property="og:image" content={cicloCircadianoCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO OTIMIZADO (COM AUTORIDADE E-E-A-T) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O Que é Ciclo Circadiano? Descubra Como o Seu Relógio Biológico Controla o Emagrecimento",
            "image": cicloCircadianoCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição", "Crononutrição", "Emagrecimento", "Fisiologia", "Higiene do Sono"]
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
            "description": "Entenda o que é o ciclo circadiano, como os hormônios do sono impactam o seu peso e aprenda a regular o seu relógio biológico para emagrecer com saúde."
          })}
        </script>

        {/* SCHEMA.ORG 2: MEDICAL WEB PAGE (AVANÇADO PARA YMYL) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Ciclo Circadiano, Melatonina e Emagrecimento: Como Funciona",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Ritmo Circadiano"},
              {"@type": "MedicalEntity", "name": "Melatonina"},
              {"@type": "MedicalEntity", "name": "Cortisol"},
              {"@type": "MedicalEntity", "name": "Perda de Peso"}
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
                "name": "O Que é Ciclo Circadiano?",
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
      </Helmet>

    <div className="min-h-screen bg-slate-50 font-sans">
    <section className="py-24 px-4 sm:px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Fisiologia e Metabolismo</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que é Ciclo Circadiano? Descubra Como o Seu Relógio Biológico Controla o Emagrecimento
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que é Ciclo Circadiano? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                O ciclo circadiano é o relógio biológico interno do nosso corpo, responsável por regular as funções físicas, mentais e metabólicas ao longo de um período de 24 horas. Na nutrição, ele determina como e quando o nosso organismo processa os nutrientes de forma mais eficiente, comprovando que o <strong>horário das refeições impacta diretamente no emagrecimento</strong>, na disposição e no controle hormonal.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Ciclo-Circadiano.mp3" type="audio/mpeg" />
                Seu navegador não suporta o áudio.
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
                  <li><a href="#introducao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ciclo Circadiano e Emagrecimento</a></li>
                  <li><a href="#fisiologia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Funciona o Ciclo Circadiano</a></li>
                  <li><a href="#hormonios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Hormônios do Emagrecimento</a></li>
                  <li><a href="#ciencia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dormir Mal Engorda?</a></li>
                  <li><a href="#nutricao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Crononutrição O Que É</a></li>
                  <li><a href="#tabela-sincronia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Sun size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Que Comer no Café da Manhã</a></li>
                  <li><a href="#melatonina" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><ShieldCheck size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Verdade sobre a Melatonina</a></li>
                  <li><a href="#tabela-sono" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Moon size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Dormir Rápido e Melhor</a></li>
                  <li><a href="#resumo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><CheckCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Resumo do Artigo</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="introducao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Clock className="text-green-600"/> Ciclo Circadiano e Emagrecimento: O Tempo a Seu Favor
            </h2>
            <p>
              Já teve a sensação de que, mesmo comendo pouco, a <Link to="/qual_melhor_horario_para_se_pesar" className="text-green-600 font-semibold hover:underline">balança simplesmente não colabora</Link>? Muitas vezes, o vilão não é a quantidade de comida, mas sim o momento em que decide comer. O nosso corpo funciona regido por um relógio biológico fascinante chamado <strong>ciclo circadiano</strong>, que dita o ritmo do nosso metabolismo desde a hora em que acordamos até ao momento de dormir.
            </p>
            <p>
              Se tem o costume de pular o café da manhã e compensar tudo num jantar pesado à noite, o seu corpo provavelmente está a lutar contra a própria natureza. Até o Pingus, o nosso mascote aqui do Nutrição com Marco, já aprendeu que não adianta comer peixe na hora errada e esperar ter energia para nadar o dia todo. Vamos entender como alinhar a sua alimentação ao seu ritmo natural para destravar os seus resultados.
            </p>

            {/* IMAGEM DE CAPA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={cicloCircadianoCapa} 
                alt="Café da manhã saudável ao lado de um relógio analógico sob luz matinal, ilustrando o ciclo circadiano." 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Ciclo+Circadiano"; }}
              />
              <div className="bg-green-50 p-4 text-center">
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                  Sincronizar as suas refeições com a luz do dia otimiza a digestão e a queima de gordura.
                </p>
              </div>
            </div>

            {/* SEÇÃO FISIOLOGIA */}
            <h2 id="fisiologia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> Como Funciona o Ciclo Circadiano no Nosso Corpo
            </h2>
            <p>
              Para entender o ciclo circadiano a fundo, precisamos mergulhar na fisiologia do nosso corpo e descobrir como ele reage ao ambiente. Tudo começa no hipotálamo, mais especificamente numa região chamada <em>núcleo supraquiasmático</em>, que funciona como o maestro do nosso relógio biológico central.
            </p>
            <p>
              Quando a luz natural da manhã entra pelas nossas retinas, ela envia um sinal direto para o cérebro cortar a produção de melatonina e liberar o cortisol, o hormônio responsável por nos dar estado de alerta e energia para começar o dia. Conforme as horas passam e a luz solar diminui no fim da tarde, o nível de cortisol cai gradativamente e a glândula pineal volta a secretar a melatonina, preparando o organismo para o reparo celular noturno.
            </p>

            {/* SEÇÃO ORQUESTRA HORMONAL */}
            <h2 id="hormonios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Hormônios do Emagrecimento: Como Baixar o Cortisol Naturalmente
            </h2>
            <p>
              Para entender como a fisiologia afeta o seu peso, você precisa conhecer os músicos dessa orquestra endócrina. O <strong>Cortisol</strong> é o nosso despertador natural; ele deve atingir o pico pela manhã para nos dar foco, mas se continuar elevado à noite devido ao stress crônico ou luzes fortes, ele inibe a regeneração celular. O <strong>GH (Hormônio do Crescimento)</strong>, por outro lado, é liberado massivamente no sono profundo, atuando na reparação dos tecidos, no aumento de massa magra e na queima de gordura.
            </p>
            <p>
              Quando o ciclo está desalinhado (por dormir tarde ou comer em excesso à noite), a dupla dinâmica que controla a sua fome entra em colapso: a <strong>Leptina</strong> (o hormônio que avisa ao cérebro que você está saciado) cai drasticamente, enquanto a <strong>Ghrelina</strong> (o hormônio da fome voraz) dispara. É exatamente por essa <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-semibold hover:underline">desregulação dos hormônios da fome</Link> que uma noite mal dormida resulta em um desejo quase incontrolável por pães, doces e alimentos ultraprocessados no dia seguinte. O seu corpo está literalmente a tentar compensar quimicamente a falta de energia do sono.
            </p>

            {/* SEÇÃO CIÊNCIA */}
            <h2 id="ciencia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Dormir Mal Engorda? O Que a Ciência Nos Ensina
            </h2>
            <p>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4377487/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">A ciência já comprovou na prática</a> o poder avassalador desse relógio biológico através de diversos experimentos marcantes na área da crononutrição. Um dos estudos mais famosos e reveladores envolveu grupos de camundongos que receberam exatamente a mesma dieta rica em gorduras e calorias, mas com janelas de alimentação totalmente diferentes.
            </p>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 italic mt-6 mb-6">
              O grupo que teve acesso livre à comida 24 horas por dia desenvolveu obesidade, gordura no fígado e problemas metabólicos graves. Por outro lado, o grupo que consumiu <strong>as mesmas calorias</strong> restritas apenas ao seu período ativo de vigília manteve o peso e a saúde metabólica intactos.
            </div>
            <p>
              Pesquisas observacionais semelhantes com trabalhadores noturnos humanos também demonstram que a inversão crônica do ciclo natural de alimentação e sono aumenta drasticamente o risco de resistência à insulina, reganho de peso e o temido <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-semibold hover:underline">efeito sanfona</Link>.
            </p>

            {/* SEÇÃO NUTRIÇÃO */}
            <h2 id="nutricao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> Crononutrição O Que É: A Relação Entre Horários e Peso
            </h2>
            <p>
              O nosso metabolismo não tem a mesma velocidade o dia inteiro. Durante a manhã e o início da tarde, a sensibilidade à insulina está no seu pico, o que significa que o seu corpo é muito mais eficiente em utilizar os carboidratos como energia em vez de estocá-los como gordura.
            </p>
            <p>
              Quando o sol se põe, a produção de melatonina começa a subir para preparar o corpo para o sono, e o sistema digestivo reduz o seu ritmo. É exatamente por isso que refeições volumosas à noite tendem a prejudicar a qualidade do sono e propiciar o armazenamento energético.
            </p>

            {/* BLOCO CITÁVEL */}
            <blockquote className="my-10 border-l-4 border-green-600 bg-green-50 p-6 md:p-8 rounded-r-3xl shadow-sm">
              <p className="m-0 text-xl md:text-2xl font-black text-green-900 italic leading-relaxed">
                "Emagrecer de forma sustentável não é apenas uma questão de quanto você come, mas de quando você come. Respeitar o seu ciclo circadiano é o primeiro passo para fazer o seu metabolismo trabalhar a seu favor, e não contra você."
              </p>
            </blockquote>

            {/* TEXTO INTRODUTÓRIO TABELA SINCRONIA */}
            <h2 id="tabela-sincronia" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Sun className="text-green-600"/> O Que Comer no Café da Manhã Para Emagrecer? (Tabela de Sincronia)
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed italic mb-8">
              A sincronia alimentar não é sobre restrição, mas sobre oportunidade. Ao entendermos que o nosso corpo possui "janelas metabólicas" específicas, podemos usar a luz e a escuridão como guias para nutrir as nossas células no momento em que elas estão mais prontas para processar energia. Veja como organizar o seu dia priorizando um <strong>jantar leve para emagrecer</strong> e um bom aporte proteico logo cedo:
            </p>

            {/* TABELA SINCRONIA ALIMENTAR CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {sincroniaAlimentar.map((item) => (
                <div key={item.id} className={`${item.cor} ${item.textColor} border ${item.borderColor} p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-6 border-b border-black/10 pb-4">
                    <item.icone size={24} className="shrink-0" />
                    <span className="font-black text-lg italic uppercase tracking-tight">{item.periodo}</span>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest opacity-70 font-black mb-1">Status do Metabolismo</span>
                      <span className="text-sm font-bold leading-snug">{item.status}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest opacity-70 font-black mb-1">Estratégia Ideal</span>
                      <span className="text-base font-black italic leading-snug">{item.estrategia}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

              {/* VÍDEO DO YOUTUBE */}
            <div className="my-16 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">O que comer no café da manhã para emagrecer?</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/VPi_MkTHEUo" 
                  title="5 Melhores Alimentos Para o Café da Manhã" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* SEÇÃO: MELATONINA APROFUNDADA */}
            <h2 id="melatonina" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <ShieldCheck className="text-green-600"/> Melatonina Vicia? A Verdade e os Efeitos Colaterais
            </h2>
            <p>
              Muitas pessoas tratam a melatonina de forma banal, como se fosse apenas uma "vitamina para dormir". Contudo, é fundamental lembrar que a melatonina é um <strong>hormônio poderoso</strong> produzido de forma rítmica pela glândula pineal. Como evidenciado em pesquisas da Universidade de São Paulo e nos documentos oficiais da <a href="https://www.endocrino.org.br/media/uploads/PDFs/posicionamento_sobre_melatonina_sbem.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">Sociedade Brasileira de Endocrinologia e Metabologia (SBEM)</a>, a sua principal função não é simplesmente atuar como um sedativo que "apaga" você, mas sim sinalizar quimicamente para todo o organismo que é noite.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-6 rounded-r-2xl">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="text-amber-600" />
                <span className="font-black text-amber-800 uppercase tracking-tight italic">Uso Exógeno e Dependência</span>
              </div>
              <p className="text-amber-900 m-0 text-base">
                O uso recorrente da melatonina em gotas ou cápsulas pode criar uma forte <strong>dependência psicológica</strong>, onde a pessoa perde a confiança na sua própria capacidade de adormecer naturalmente. Além disso, embora ela não possua um mecanismo de retroalimentação negativa que "desligue" a sua produção natural de forma permanente, um dos efeitos colaterais das dosagens mal calculadas ou tomadas na hora errada é causar o que chamamos de <em>cronorruptura</em>. Isso mascara péssimos hábitos de higiene do sono e confunde ainda mais o seu relógio interno, prejudicando o balanço energético.
              </p>
            </div>

            {/* DICAS PARA DORMIR CARDS */}
            <h2 id="tabela-sono" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <Moon className="text-green-600"/> Como Regular o Ciclo Circadiano e Dormir Rápido Naturalmente
            </h2>
            <p className="mb-8">Para que o seu relógio biológico funcione com precisão suíça sem depender de suplementos para dormir, pequenos hábitos diários fazem toda a diferença. Siga este roteiro:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {dicasSono.map((dica, index) => (
                <div key={index} className={`p-6 rounded-[2.5rem] border ${dica.border} ${dica.bg} flex flex-col gap-4 hover:shadow-lg transition-all duration-300 group`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm transition-transform group-hover:scale-110`}>
                    <dica.icone size={24} className={dica.color} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-black uppercase tracking-widest ${dica.color} mb-1 italic`}>{dica.habito}</h4>
                    <p className="text-slate-900 font-bold text-sm mb-2">{dica.pratica}</p>
                    <p className="text-slate-500 text-xs italic leading-relaxed">{dica.impacto}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AFILIADO MERCADO LIVRE (MÁSCARA DE DORMIR) */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="Selo de Qualidade Pingus" 
                            className="w-full h-full object-contain" 
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Máscara de Dormir <span className="text-green-700">Premium 3D Blackout</span>
                        </h4>

                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                              src={`${githubImgBase}Afiliado/MascaraDormir.jpg`} 
                              alt="Máscara de Dormir Premium 3D Blackout" 
                              className="w-full h-auto object-cover" 
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Para produzir melatonina naturalmente e dormir rápido, o seu cérebro precisa de <strong>escuridão total</strong>. Como nem sempre conseguimos bloquear toda a luz da rua ou dos pequenos LEDs no quarto, usar uma boa máscara de dormir é um investimento barato e 100% seguro (sem contraindicações) para blindar a qualidade do seu sono profundo.
                        </p>

                        <a 
                            href="https://meli.la/1Jn51p4" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso!
                    </p>
                </div>
            </div>

            {/* DESTAQUE E-BOOK */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 group">
              <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src={`${githubImgBase}capa_fome.jpg`} 
                  alt="Capa do E-book Entendendo a Fome" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mx-auto md:mx-0 mb-4">
                  Material de Apoio
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic leading-tight mb-3">
                  E-book: Entendendo a Fome
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  Dormiu mal e acordou com vontade de comer tudo pela frente? Baixe o meu e-book exclusivo e aprenda a diferenciar a fome física da <Link to="/o-que-e-fome-emocional" className="text-green-600 font-semibold hover:underline">fome emocional</Link>, dominando os seus sinais de saciedade.
                </p>
                <a 
                  href="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                >
                  <FileText size={18} />
                  Baixar E-book Agora
                </a>
              </div>
            </div>

            {/* RESUMO / CONCLUSÃO */}
            <h2 id="resumo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <CheckCircle className="text-green-600"/> Resumo: O Seu Próximo Passo
            </h2>
            <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-sm mb-12 text-slate-700 italic font-medium leading-relaxed">
              <p className="mb-4">
                Emagrecer de forma sustentável e otimizar o metabolismo vai muito além de contar calorias. Como vimos, <strong>o momento em que comemos</strong> e <strong>a qualidade do nosso descanso</strong> desempenham papéis tão cruciais quanto os próprios alimentos que ingerimos.
              </p>
              <ul className="list-disc pl-5 space-y-3 mb-6">
                <li><strong>A Luz Dita as Regras:</strong> Use a luz solar matinal para ativar o cortisol na hora certa e aposte na escuridão noturna para blindar a sua produção natural de melatonina.</li>
                <li><strong>Orquestra Hormonal:</strong> Um ciclo bem regulado mantém a leptina (hormona da saciedade) em alta e a ghrelina (hormona da fome) sob controlo rigoroso.</li>
                <li><strong>Sincronia Alimentar:</strong> Concentre a maior parte da sua ingestão calórica durante o dia, quando a sensibilidade à insulina está no pico, e opte por jantares mais leves e de fácil digestão.</li>
              </ul>
              <p className="m-0 font-black text-green-800 text-xl border-t border-slate-200 pt-4">
                Lembre-se: pequenos ajustes na sua rotina de sono e horários das refeições são o segredo para colocar o seu relógio biológico a trabalhar a seu favor!
              </p>
            </div>

            {/* FAQ OTIMIZADO */}
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
                      <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
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

        <ArtigosRecomendados />

        {/* AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando a construir uma relação mais leve com a comida.
            </p>
            <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
}
