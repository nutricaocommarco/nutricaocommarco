import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Shield, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Flame, CheckCircle2, Brain, Wind, Battery, FileText, AlertCircle, HeartPulse, Scale, Dna, Calculator, Target, Ruler, UtensilsCrossed
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Atualizando datas para a postagem
const datePublishedISO = "2026-04-05";
const dateModifiedISO = "2026-04-05";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Capa do Artigo
const artigoCapa = `${githubImgBase}Blog/QuantasCaloriasGasto.jpg`; 

// Dados da Tabela de METs transformados em um Array para renderização elegante
const tabelaMets = [
  { id: 1, nome: "Caminhada Leve", intensidade: "Baixa", valor: "3.0", icone: <Wind className="text-blue-500 w-6 h-6" /> },
  { id: 2, nome: "Musculação (Moderada)", intensidade: "Moderada", valor: "3.5", icone: <Activity className="text-orange-500 w-6 h-6" /> },
  { id: 3, nome: "Faxina Pesada", intensidade: "Moderada", valor: "3.5", icone: <Target className="text-orange-500 w-6 h-6" /> },
  { id: 4, nome: "Musculação (Intensa)", intensidade: "Pesada / Intensa", valor: "6.0", icone: <Flame className="text-red-500 w-6 h-6" /> },
  { id: 5, nome: "Ciclismo (16 a 19 km/h)", intensidade: "Leve", valor: "6.8", icone: <Wind className="text-blue-500 w-6 h-6" /> },
  { id: 6, nome: "Corrida (Jogging 7 km/h)", intensidade: "Moderada", valor: "7.0", icone: <Activity className="text-orange-500 w-6 h-6" /> },
  { id: 7, nome: "Crossfit / Funcional", intensidade: "Vigorosa", valor: "8.0", icone: <Zap className="text-red-600 w-6 h-6" /> },
  { id: 8, nome: "Ciclismo (20 a 22 km/h)", intensidade: "Vigorosa", valor: "8.0", icone: <Zap className="text-red-600 w-6 h-6" /> },
  { id: 9, nome: "Corrida (Trote 8 km/h)", intensidade: "Vigorosa", valor: "8.3", icone: <Zap className="text-red-600 w-6 h-6" /> },
  { id: 10, nome: "Ciclismo Indoor (Spinning)", intensidade: "Intensa", valor: "8.9", icone: <Flame className="text-red-500 w-6 h-6" /> },
  { id: 11, nome: "Corrida (10 km/h)", intensidade: "Intensa", valor: "9.8", icone: <Flame className="text-red-500 w-6 h-6" /> },
  { id: 12, nome: "Ciclismo (Pelotão 30+ km/h)", intensidade: "Extrema", valor: "12.0", icone: <HeartPulse className="text-purple-600 w-6 h-6" /> }
];

export default function QuantasCaloriasGastoComponent() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "Qual a diferença entre TMB e Gasto Energético Total (TDEE)?",
      resposta: "A TMB (Taxa Metabólica Basal) é a energia que o seu corpo gasta apenas para se manter vivo em repouso absoluto. O Gasto Energético Total (TDEE) é a sua TMB somada a todas as atividades que você faz no dia (trabalhar, caminhar, treinar e até digerir alimentos)."
    },
    {
      pergunta: "Devo recalcular meu gasto calórico enquanto perco peso?",
      resposta: "Sim, absolutamente! Um corpo mais leve gasta menos energia para se movimentar e se manter vivo. A cada 3 a 5 quilos perdidos (ou ganhos), é ideal recalcular a sua TMB e o seu TDEE para ajustar a dieta e não estagnar."
    },
    {
      pergunta: "Qual é a melhor fórmula se eu não sei o meu percentual de gordura?",
      resposta: "Para a maioria das pessoas, a fórmula de Mifflin-St Jeor é a mais precisa atualmente quando não se tem o percentual de gordura. Para pessoas com um biotipo muito padrão e ativo, a velha Harris-Benedict também atende muito bem."
    },
    {
      pergunta: "Se eu treinar musculação pesada, posso usar um multiplicador muito alto?",
      resposta: "Cuidado! A musculação gasta menos calorias no momento do treino do que o cardio contínuo (devido aos tempos de descanso entre as séries). Não superestime o fator de atividade apenas porque o treino foi exaustivo muscularmente. Usar o cálculo exato por METs resolve esse problema."
    },
    {
      pergunta: "A balança de bioimpedância é a única forma de ver a gordura?",
      resposta: "Não. A avaliação física por dobras cutâneas (antropometria), quando feita por um profissional certificado (como o padrão ISAK), costuma ser muito mais precisa e não sofre alteração com o seu nível de hidratação no dia."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantas Calorias Gasto Por Dia? TMB e TDEE | Nutrição com Marco</title>
        <meta name="description" content="Descubra como calcular seu gasto calórico diário. Entenda a sua Taxa Metabólica Basal (TMB), fator de atividade, METs e as fórmulas de Mifflin e Cunningham." />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Quantas Calorias Gasto Por Dia? Pare de Chutar! | Nutrição com Marco" />
        <meta property="og:description" content="Guia definitivo: entenda o seu metabolismo, descubra a fórmula certa para o seu biotipo e aprenda a calcular o seu Gasto Energético Total com precisão." />
        <meta property="og:image" content={artigoCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        
        {/* Schema 1: Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.nutricaocommarco.com.br${pathname}`
            },   
            "headline": "Quantas Calorias Gasto Por Dia? Pare de Chutar e Entenda o Seu Metabolismo",
            "image": artigoCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição", "Metabolismo", "Emagrecimento", "Taxa Metabólica Basal", "Cálculo Calórico"]
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
            "description": "Descubra como calcular seu gasto calórico diário. Entenda a sua Taxa Metabólica Basal (TMB), fator de atividade e as melhores fórmulas para o emagrecimento."
          })}
        </script>

        {/* Schema 2: MedicalWebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Quantas Calorias Gasto Por Dia? TMB e TDEE",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Taxa Metabólica Basal"},
              {"@type": "MedicalEntity", "name": "Gasto Energético Total"},
              {"@type": "MedicalEntity", "name": "Metabolismo Basal"},
              {"@type": "MedicalEntity", "name": "Antropometria"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes"
            }
          })}
        </script>

        {/* Schema 3: BreadcrumbList */}
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
                "name": "Quantas Calorias Gasto Por Dia?",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          })}
        </script>

        {/* Schema 4: FAQPage */}
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

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Fisiologia & Metabolismo</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Quantas Calorias Gasto Por Dia? Pare de Chutar e Entenda o Seu Metabolismo
          </h1>

          {/* NOVA RESPOSTA RÁPIDA COM LINK PARA CALCULADORA */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Zap className="text-green-600" /> Resposta Rápida - Quantas Calorias Gasto por Dia?
              </h2>
              <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                Para descobrir o seu gasto calórico diário exato (TDEE), você precisa calcular a sua <strong>Taxa Metabólica Basal (TMB)</strong> e multiplicá-la pelo seu <strong>Fator de Atividade Física</strong>. Fazer isso na mão pode gerar erros grotescos no emagrecimento. A melhor solução é usar ferramentas automáticas que escolhem a fórmula ideal para o seu biotipo.
              </p>
            </div>
            <Link 
              to="/calculadora-de-gasto-calorico" 
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 w-full md:w-fit italic"
            >
              <Calculator size={18} />
              Acessar Calculadora Gratuita
            </Link>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/GastoCalorico.mp3" type="audio/mpeg" />
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
                  <li><a href="#o-que-e-tmb" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que é TMB?</a></li>
                  <li><a href="#formulas" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Calculator size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Fórmulas de Gastos</a></li>
                  <li><a href="#percentual-gordura" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Percentual de Gordura</a></li>
                  <li><a href="#efeito-termico" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><UtensilsCrossed size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Efeito Térmico (ETA)</a></li>
                  <li><a href="#fator-atividade" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HeartPulse size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Fator de Atividade Física</a></li>
                  <li><a href="#o-que-sao-mets" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Flame size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que são os METs?</a></li>
                  <li><a href="#tabela-mets" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tabela de METs</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <p>
              Você já se pegou olhando para o espelho ou para a balança e se perguntando quantas calorias gasto por dia de verdade? Essa é, sem dúvida, a pergunta número um de quem começa um processo sério de emagrecimento ou de ganho de massa muscular. A grande verdade é que tentar adivinhar o seu gasto energético ou seguir dietas genéricas de gaveta é o caminho mais rápido para a frustração e para o temido <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-semibold hover:underline">efeito sanfona</Link>. Para que você tenha resultados estéticos reais, visíveis e sustentáveis, é absolutamente inegociável entender como funciona o gasto calórico do seu próprio corpo, que é único e responde de maneira diferente dependendo da sua composição corporal e da sua rotina diária.
            </p>

            {/* IMAGEM SOLICITADA ACIMA DE TMB COM FIGURE E BADGE CORRETO */}
            <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
              <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-md">
                Metabolismo em Ação
              </div>
              <img 
                src={`${githubImgBase}Blog/QuantasCaloriasGasto.jpg`} 
                alt="Mascote Pingus mostrando o contraste de gasto calórico entre assistir TV no sofá e correr intensamente no parque." 
                title="Entenda seu Gasto Energético Total (TDEE) com o Pingus"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
                <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                  <strong className="text-slate-800 uppercase not-italic block mb-1">O Confronto de Atividades</strong> 
                  O Pingus ilustra o impacto do seu estilo de vida no Gasto Energético Total (TDEE): a brutal diferença calórica entre uma rotina de baixo gasto no sofá e o esforço vigoroso no parque.
                </p>
              </figcaption>
            </figure>

            <h2 id="o-que-e-tmb" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Battery className="text-green-600"/> O que é TMB?
            </h2>
            <p>
              O primeiro passo para dominar a sua nutrição e parar de patinar nos resultados é descobrir a sua Taxa Metabólica Basal, ou simplesmente TMB. Em termos simples, a TMB representa a quantidade exata de energia que o seu corpo precisa para se manter vivo em estado de repouso absoluto. Mesmo que você passe o dia inteiro deitado no sofá sem mover um músculo, o seu organismo está queimando calorias ativamente para garantir o funcionamento perfeito de órgãos vitais, como o coração bombeando sangue, os pulmões respirando e o cérebro processando informações. Essa queima basal de sobrevivência representa a maior fatia do seu gasto energético diário, correspondendo geralmente de 60% a 70% de todas as calorias que você consome.
            </p>

            <h2 id="formulas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Calculator className="text-green-600"/> Fórmulas de Gastos Energéticos
            </h2>
            <p>
              Ao longo das décadas, a ciência da nutrição desenvolveu diversas equações matemáticas para estimar essa taxa basal sem a necessidade de exames de laboratório caríssimos. Cada fórmula tem um propósito específico e se adapta melhor a diferentes tipos de corpos.
            </p>

            <h3 className="text-xl font-black text-slate-800 italic mt-8 mb-3 text-green-700">Equação de Mifflin-St Jeor</h3>
            <p>
              Esta é atualmente uma das fórmulas mais recomendadas e precisas pela literatura científica moderna para a população em geral e, principalmente, para indivíduos com sobrepeso ou obesidade. A equação de Mifflin St Jeor utiliza o peso total para gerar uma estimativa altamente confiável do metabolismo de base, calculada da seguinte forma para homens: <strong>TMB = (10 x peso) + (6.25 x altura) - (5 x idade) + 5</strong>.
            </p>

            <h3 className="text-xl font-black text-slate-800 italic mt-8 mb-3 text-green-700">Harris-Benedict</h3>
            <p>
              Criada em 1919 e revisada nos anos 80, esta é a equação clássica mais famosa e amplamente utilizada em calculadoras genéricas pela internet. Embora seja excelente para estimativas rápidas em pessoas com um biotipo comum, ela pode superestimar ligeiramente o gasto calórico de indivíduos muito obesos ou subestimar o de atletas muito musculosos.
            </p>

            <h3 className="text-xl font-black text-slate-800 italic mt-8 mb-3 text-green-700">Cunningham</h3>
            <p>
              Se você tem uma rotina de treinos pesada e sabe exatamente o seu percentual de gordura, esta é a fórmula padrão-ouro. A equação de Cunningham ignora o peso da sua gordura e calcula o metabolismo baseando-se puramente na sua Massa Livre de Gordura (Massa Magra), que é o tecido metabolicamente mais ativo do corpo. A matemática é elegante e direta: <strong>TMB = 500 + (22 x Massa Magra)</strong>.
            </p>

            <h3 className="text-xl font-black text-slate-800 italic mt-8 mb-3 text-green-700">Tinsley</h3>
            <p>
              Uma das equações mais recentes e validadas para populações altamente ativas. É a escolha perfeita para fisiculturistas e <Link to="/nutricao_para_ironman_703" className="text-green-600 font-semibold hover:underline">atletas de endurance</Link>. O grande diferencial da Tinsley é que ela possui duas versões incrivelmente precisas: uma que utiliza a massa magra, semelhante à Cunningham (<strong>TMB = 25.9 x Massa Magra + 284</strong>), e outra excelente alternativa que utiliza apenas o peso total corporal caso você não saiba o seu percentual de gordura.
            </p>

            {/* TABELA DE FÓRMULAS */}
            <div className="my-10 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5">Nome da Fórmula</th>
                    <th className="p-5">Recomendação Principal</th>
                    <th className="p-5 text-center">Precisa de %GC?</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Mifflin-St Jeor</td>
                    <td className="p-5">População geral, sobrepeso e obesidade.</td>
                    <td className="p-5 text-center text-red-500 font-bold">Não</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Harris-Benedict</td>
                    <td className="p-5">Estimativas rápidas, biotipo comum.</td>
                    <td className="p-5 text-center text-red-500 font-bold">Não</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Cunningham</td>
                    <td className="p-5">Atletas e pessoas com muita massa magra.</td>
                    <td className="p-5 text-center text-green-600 font-bold">Sim</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Tinsley</td>
                    <td className="p-5">Fisiculturistas e atletas de endurance.</td>
                    <td className="p-5 text-center text-blue-600 font-bold">Sim / Não*</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-slate-50 p-4 text-xs text-slate-500 font-medium border-t border-slate-200 text-center">
                * A equação de Tinsley possui validação clínica em duas versões distintas: uma baseada no Peso Total e outra na Massa Magra.
              </div>
            </div>

            <h2 id="percentual-gordura" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Como descobrir meu percentual de gordura?
            </h2>
            <p>
              Como vimos, ter o percentual de gordura em mãos destrava o acesso às fórmulas mais avançadas e precisas do mundo da nutrição. Mas como descobrir esse número com exatidão para não jogar o cálculo inteiro por água abaixo?
            </p>

            <h3 className="text-xl font-black text-slate-800 italic mt-6 mb-2">Balança de Bioimpedância</h3>
            <p>
              A <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-semibold hover:underline">bioimpedância</Link> é um método muito prático e rápido, geralmente encontrado em consultórios e academias. Ela envia uma corrente elétrica imperceptível pelo seu corpo e calcula a resistência que essa corrente encontra para separar o que é músculo, água e gordura. O único ponto de atenção é que os resultados de como calcular dieta por bioimpedância podem oscilar bastante dependendo do seu nível de hidratação, ingestão de cafeína ou se você treinou horas antes de <Link to="/qual_melhor_horario_para_se_pesar" className="text-green-600 font-semibold hover:underline">subir na balança</Link>.
            </p>

            <h3 className="text-xl font-black text-slate-800 italic mt-6 mb-2">Antropometria</h3>
            <p>
              O método mais confiável, constante e palpável. A <Link to="/o_que_e_antropometria" className="text-green-600 font-semibold hover:underline">avaliação por dobras cutâneas</Link>, especialmente quando realizada seguindo os rigorosos padrões internacionais da certificação ISAK Nível 1, entrega uma precisão cirúrgica sobre a sua composição corporal. Através do uso de um adipômetro, o avaliador mede os milímetros exatos de gordura subcutânea em pontos estratégicos do corpo. Esse método não sofre interferência da hidratação diária, refletindo a verdadeira arquitetura do seu físico.
            </p>

            {/* AFILIADO MERCADO LIVRE - O PINGUS APROVA */}
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
                            Balança de Bioimpedância <span className="text-green-700">8 Eletrodos</span>
                        </h4>
                        
                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                                src={`${githubImgBase}Afiliado/Bia.jpg`} 
                                alt="Balança de Bioimpedância 8 eletrodos e dupla frequência" 
                                className="w-full h-auto" 
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Para descobrir seu <strong>percentual de gordura corporal</strong> eu indico este modelo de dupla frequência pela sua precisão clínica.
                        </p>

                        <a 
                            href="https://meli.la/1aBg9YM" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso! O Pingus agradece o apoio.
                    </p>
                </div>
            </div>

            {/* NOVA SEÇÃO: EFEITO TÉRMICO DOS ALIMENTOS */}
            <h2 id="efeito-termico" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <UtensilsCrossed className="text-green-600"/> O que é o Efeito Térmico dos Alimentos?
            </h2>
            <p>
              Além da sua TMB e do seu nível de atividade física, existe um terceiro fator fundamental que compõe o seu Gasto Energético Total: o Efeito Térmico dos Alimentos (ETA), também conhecido pela sigla em inglês TEF (Thermic Effect of Food). Basicamente, o seu corpo gasta energia para mastigar, digerir, absorver e armazenar os nutrientes da comida que você ingere. Esse processo representa, em média, cerca de 10% de todas as calorias que você queima em um dia.
            </p>
            <p>
              O grande pulo do gato na nutrição esportiva e no emagrecimento é que nem todo nutriente exige o mesmo esforço do seu corpo para ser digerido. As proteínas, por exemplo, são moléculas complexas que exigem muita energia termogênica para serem quebradas pelos seus órgãos, enquanto as gorduras são facilmente estocadas. Veja a tabela abaixo com o gasto energético de cada macronutriente:
            </p>

            {/* TABELA DE ETA / MACRONUTRIENTES */}
            <div className="my-10 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[500px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5">Macronutriente</th>
                    <th className="p-5 text-center">Gasto Energético (ETA)</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500 shrink-0"></div> Proteínas</td>
                    <td className="p-5 text-center font-black text-green-600">20% a 30%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></div> Carboidratos</td>
                    <td className="p-5 text-center font-black text-blue-600">5% a 10%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500 shrink-0"></div> Gorduras</td>
                    <td className="p-5 text-center font-black text-orange-500">0% a 3%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="fator-atividade" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <HeartPulse className="text-green-600"/> Como calcular o Fator de Atividade Física
            </h2>
            <p>
              Saber a sua TMB é apenas o começo. Para chegar ao seu Gasto Energético Total (GET) em uma calculadora TDEE, nós precisamos multiplicar o seu metabolismo basal pelo seu Fator de Atividade (FA). O Fator de Atividade é um número que representa todo o movimento que você faz no dia, desde o seu trabalho no escritório até aquele treino intenso de crossfit. 
            </p>
            <p>
              Para calcular o consumo de calorias reais da sua rotina, multiplicamos a TMB por índices que variam de acordo com o seu esforço. O maior erro no emagrecimento ocorre quando as pessoas superestimam esse fator, achando que uma caminhada de trinta minutos as transforma em atletas de elite.
            </p>

            {/* TABELA DE FATOR DE ATIVIDADE */}
            <div className="my-10 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Classificação</th>
                    <th className="p-5 w-1/4">Fator (FA)</th>
                    <th className="p-5 w-2/4">Rotina Diária Prática</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Sedentário</td>
                    <td className="p-5 font-black text-green-600">1.2</td>
                    <td className="p-5">Trabalho sentado em mesa, pouco ou nenhum exercício estruturado na semana.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Leve</td>
                    <td className="p-5 font-black text-green-600">1.375</td>
                    <td className="p-5">Exercício ou esporte leve, variando de 1 a 3 dias por semana.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Moderado</td>
                    <td className="p-5 font-black text-green-600">1.55</td>
                    <td className="p-5">Treinamento estruturado e moderado de 3 a 5 dias por semana.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Intenso</td>
                    <td className="p-5 font-black text-green-600">1.725</td>
                    <td className="p-5">Esportes intensos ou musculação pesada de 6 a 7 dias por semana.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Extremo / Atleta</td>
                    <td className="p-5 font-black text-green-600">1.9 a 2.2</td>
                    <td className="p-5">Treinos diários muito pesados (ex: <Link to="/nutricao_para_ironman_703" className="text-green-600 font-semibold hover:underline">triatlo</Link>), sessões duplas ou trabalho braçal extremo (construção).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="o-que-sao-mets" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Flame className="text-green-600"/> O que são os METs?
            </h2>
            <p>
              Se você busca uma precisão absoluta que foge dos multiplicadores genéricos citados acima, o segredo é utilizar o cálculo por METs. O Equivalente Metabólico da Tarefa (MET) é uma unidade que mede a quantidade de oxigênio (e consequentemente calorias) consumida durante uma atividade física específica em comparação com o seu estado de repouso. 
            </p>
            <p>
              Para facilitar o entendimento de como funciona o gasto calórico, considere que 1 MET é a energia que você gasta sentado, sem fazer absolutamente nada. Se uma atividade é classificada como 8 METs, significa que durante aquele exercício você está queimando oito vezes mais calorias por minuto do que se estivesse em repouso no sofá. 
            </p>

            <h2 id="tabela-mets" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-8 border-b border-green-100 pb-2 flex items-center gap-3">
              <Target className="text-green-600"/> Tabela de METs
            </h2>
            <p className="mb-8">
              Para que você consiga visualizar o peso do seu treino na queima calórica diária, abaixo está uma tabela com a média de METs das atividades físicas mais populares.
            </p>

            {/* Renderização elegante da tabela de METs como Cards */}
            <div className="bg-slate-100 rounded-[2rem] p-6 border border-slate-200 shadow-inner mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tabelaMets.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-green-300 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-slate-50 p-2 rounded-xl">
                        {item.icone}
                      </div>
                      <span className="bg-slate-800 text-white text-xs font-black px-3 py-1 rounded-full">
                        {item.valor} METs
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-base mb-1">{item.nome}</h4>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">{item.intensidade}</p>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="my-10 border-l-4 border-green-600 bg-green-50 p-6 md:p-8 rounded-r-3xl shadow-sm">
              <p className="m-0 text-xl md:text-2xl font-black text-green-900 italic leading-relaxed">
                Para resolver todo esse quebra-cabeça matemático de uma vez por todas, eu desenvolvi uma Calculadora de Gasto Calórico Inteligente!
              </p>
            </blockquote>

            <p>
              Ao invés de fazer essas contas na mão, você insere o seu perfil, seleciona os METs do seu treino e a nossa ferramenta escolhe automaticamente a melhor equação científica para o seu biotipo. Acesse agora e descubra com exatidão as calorias que vão destravar os seus resultados.
            </p>

            <div className="text-center mt-10 mb-8">
              <Link to="/calculadora-de-gasto-calorico" className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 md:px-12 py-5 rounded-full font-black uppercase text-sm md:text-base tracking-widest shadow-xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
                <Calculator size={20} />
                Acessar Calculadora Gratuita
              </Link>
            </div>

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
              Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando a construir uma relação mais leve e sem radicalismos com a comida, cuidando do corpo através do cálculo exato e da ciência nutricional.
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
