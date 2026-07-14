import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Clock, Shield, 
  Zap, ChevronRight, Headphones, ChevronDown, ShoppingCart, 
  Target, Flame, Coffee, Dumbbell, Brain, Check, X, AlertTriangle, Video, PlayCircle, Apple, PieChart, Utensils
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-07-14";
const dateModifiedISO = "2026-07-14";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const artigoCapa = `${githubImgBase}Blog/DietaCetogenica_Capa.jpg`; 

export default function DietaCetogenica() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "A dieta cetogênica pode causar cetoacidose?",
      resposta: "Não em pessoas saudáveis. A cetose nutricional induzida pela dieta keto eleva os corpos cetônicos para níveis seguros (entre 0,5 e 7/8 mM) sem alterar o pH do sangue. A cetoacidose é uma condição patológica de urgência médica típica de diabéticos tipo 1 não controlados, onde as cetonas ultrapassam os 25 mM devido à ausência total de insulina, o que acidifica o sangue."
    },
    {
      pergunta: "A dieta keto é boa para hipertrofia (ganhar massa muscular)?",
      resposta: "Depende do protocolo e do balanço energético. Em um ensaio de 8 semanas com homens treinados realizando musculação associada a uma dieta cetogênica com superávit calórico, os participantes conseguiram reduzir significativamente a massa gorda e a gordura visceral, mas não apresentaram aumento estatisticamente significativo de massa muscular magra. Em contraste, o grupo que consumiu uma dieta tradicional obteve aumento de massa magra sob as mesmas condições de treino."
    },
    {
      pergunta: "O que é a 'gripe cetogênica' e como evitar?",
      resposta: "A gripe cetogênica é um conjunto de sintomas transitórios (como dor de cabeça, fraqueza, tontura e irritabilidade) que ocorrem nos primeiros dias devido à rápida eliminação de água e minerais. Conforme os estoques de glicogênio são esvaziados e a insulina cai, o corpo elimina muito sódio. Para evitar, capriche na hidratação e reponha eletrólitos consumindo uma quantidade adequada de sal e água mineral."
    },
    {
      pergunta: "Consumir TCM ajuda no emagrecimento ou apenas na energia?",
      resposta: "Além de acelerar a cetose, os triglicerídeos de cadeia média (TCM) demonstraram ter um efeito preservador sobre a massa livre de gordura durante dietas de baixíssima caloria, aumentando paralelamente a proporção de perda de massa gorda total durante as semanas iniciais da dieta e ajudando na supressão da fome."
    }
  ];

  return (
    <>
      <Helmet>
        <title>O Que é Dieta Cetogênica? Guia Definitivo e Científico | Nutrição com Marco</title>
        <meta name="description" content="Descubra o que é a dieta cetogênica, como funciona o estado de cetose no organismo, cardápio estruturado e as evidências de emagrecimento." />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que é Dieta Cetogênica? Guia Definitivo e Científico" />
        <meta property="og:description" content="Entenda as fases da cetose, os impactos metabólicos na queima de gordura, cardápios e os mitos sobre a dieta keto." />
        <meta property="og:image" content={artigoCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        
        {/* SCHEMA 1: Article */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.nutricaocommarco.com.br${pathname}`
            },   
            "headline": "O Que é Dieta Cetogênica? Guia Definitivo e Científico",
            "image": [artigoCapa],
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Dieta Cetogênica", "Dietas da Moda", "Emagrecimento", "Metabolismo", "Nutrição Clínica"]
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
            "description": "Descubra o que é a dieta cetogênica, como funciona o estado de cetose no organismo, o cardápio estruturado e as evidências de emagrecimento."
          }) }} />

        {/* SCHEMA 2: MedicalWebPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "O Que é Dieta Cetogênica? Guia Definitivo e Científico",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Dieta Cetogênica"},
              {"@type": "MedicalEntity", "name": "Cetose"},
              {"@type": "MedicalEntity", "name": "Corpos Cetônicos"},
              {"@type": "MedicalEntity", "name": "Beta-hidroxibutirato"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes e Público Leigo"
            }
          }) }} />

        {/* SCHEMA 3: BreadcrumbList */}
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
                "name": "O Que é Dieta Cetogênica",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          }) }} />

        {/* SCHEMA 4: FAQPage */}
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
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Dietas da Moda</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que é Dieta Cetogênica? Guia Definitivo e Científico
          </h1>
          
          {/* 1. RESPOSTA DIRETA NO TOPO */}
          <div className="mb-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Target className="text-green-600 shrink-0" /> Resposta Direta: O que é e como funciona?
              </h2>
              <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                A dieta cetogênica é um protocolo alimentar hiperlipídico, no qual 70% a 80% das calorias diárias provêm do consumo de gorduras saudáveis, 15% a 20% de proteínas e há uma restrição severa de carboidratos para menos de 50 gramas por dia. Ela funciona forçando o organismo a esgotar os estoques de glicogênio e reduzir os níveis de insulina, o que estimula a quebra dos ácidos graxos no fígado. Esse processo gera os corpos cetônicos — como o beta-hidroxibutirato —, que passam a atuar como a fonte primária de energia para os tecidos, órgãos e cérebro no lugar da glicose, favorecendo a redução do <Link to="/percentual-gordura-feminino-ideal" className="text-green-800 font-bold hover:underline">percentual de gordura</Link>.
              </p>
            </div>
          </div>

                    {/* 3. ÁUDIO */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/dieta-cetogenica.mp3" type="audio/mpeg" />
                O seu navegador não suporta o áudio.
              </audio>
            </div>
          </div>

          {/* 4. ÍNDICE (TOC) */}
          <div className="mb-12 border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden bg-slate-50">
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

            <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1200px] opacity-100 border-t border-slate-200' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
              <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                <li><a href="#historia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A História da Dieta Cetogênica</a></li>
                <li><a href="#como-funciona" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Funciona no Organismo</a></li>
                <li><a href="#cardapio" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PieChart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Cardápio e Macronutrientes</a></li>
                <li><a href="#exemplo-cardapio" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Utensils size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Exemplo de Cardápio Prático</a></li>
                <li><a href="#cetose" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que é Cetose e Adaptação</a></li>
                <li><a href="#acelerar" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Entrar em Cetose Rápido</a></li>
                <li><a href="#alimentos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Check size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Alimentos Permitidos na Keto</a></li>
                <li><a href="#frutas" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Apple size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Frutas Permitidas na Dieta</a></li>
                <li><a href="#video-cardapio" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Video size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo: Opção de Cardápio Keto</a></li>
                <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Cetose vs Cetoacidose</a></li>
                <li><a href="#medicao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Medição de Corpos Cetônicos</a></li>
                <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
              </ul>
            </div>
          </div>

          <p className="text-xl text-slate-600 font-medium mb-10">
            Se você quer entender de verdade o que é dieta cetogênica sem cair em modismos ou distorções da internet, este guia foi desenhado para você. Muito associada ao emagrecimento rápido e frequentemente aliada ao <Link to="/o-que-e-jejum-intermitente" className="text-green-600 font-bold hover:underline">jejum intermitente</Link>, a conhecida dieta keto promove uma inversão total na pirâmide alimentar tradicional, transformando o seu corpo em uma máquina otimizada para queimar gordura como combustível.
          </p>

          {/* 2. IMAGEM DE CAPA COM SEO */}
          <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
            <img 
              src={artigoCapa} 
              alt="Entenda o que é dieta cetogênica, os alimentos e as frutas permitidas no cardápio estruturado de acordo com a ciência." 
              title="O que é dieta cetogênica"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
            />
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                Aprender o que é dieta cetogênica e como entrar em cetose exige precisão na seleção de gorduras e no controle dos carboidratos.
              </p>
            </figcaption>
          </figure>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Clock className="text-green-600"/> A História da Dieta Cetogênica: Da Bíblia à Ciência Moderna
            </h2>
            <p>
              As origens dos efeitos metabólicos da cetose remontam a relatos muito antigos da humanidade. No Evangelho de Marcos (9:17-29), há a clássica passagem onde um pai desesperado pede ajuda a Jesus para curar seu filho que sofria com convulsões severas e rigidez física. Ao ser questionado sobre o motivo de os discípulos não terem conseguido resolver a situação, a resposta foi enfática: <em>"Essa espécie só sai pela oração e pelo jejum"</em>. O que na antiguidade era associado à purificação espiritual, na verdade baseava-se em uma profunda resposta fisiológica provocada pela privação calórica total e seu efeito sobre o sistema nervoso.
            </p>
            <p>
              A transição para o modelo médico aconteceu em 1919, quando o Dr. John Howland recebeu uma doação de 5.000 dólares para criar um laboratório dedicado a estudar de forma sistemática os efeitos terapêuticos do jejum no tratamento de crianças com epilepsia na Universidade Johns Hopkins. Os resultados na redução das crises convulsivas foram impressionantes, mas os pesquisadores enfrentavam um dilema óbvio: o ser humano não pode passar a vida inteira sem comer.
            </p>
            <p>
              Foi então que, em 1921, o Dr. Russell Wilder, trabalhando na renomada Mayo Clinic, teve um estalo genial. Ele percebeu que a chave para obter os benefícios neuroprotetores do jejum consistia em induzir a produção de corpos cetônicos no sangue, mas permitindo que o paciente consumisse calorias. Wilder propôs que uma dieta drasticamente rica em gorduras saudáveis e extremamente pobre em carboidratos mimetizaria perfeitamente o estado de jejum no cérebro. Ele colocou seus pacientes epiléticos sob esse novo modelo e cunhou oficialmente o termo <strong>"Dieta Cetogênica"</strong>. Em 1924, o pediatra Dr. Mynie Peterman estruturou as bases terapêuticas iniciais que serviram de modelo para a cetogênica clínica como a conhecemos hoje.
            </p>

            <h2 id="como-funciona" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Como Funciona a Dieta Cetogênica no Organismo?
            </h2>
            <p>
              Para compreender <strong>como funciona a dieta cetogênica</strong>, é preciso entender a preferência energética do seu corpo. Em condições normais, e seguindo um <Link to="/o-que-e-ciclo-circadiano" className="text-green-600 font-bold hover:underline">ciclo circadiano</Link> convencional focado em diversas refeições, a sua fonte preferencial de energia é a glicose vinda dos carboidratos. No entanto, quando você restringe drasticamente esses macronutrientes, os seus estoques internos de glicogênio hepático e muscular se esgotam rapidamente.
            </p>
            <p>
              Essa escassez provoca uma queda acentuada nos níveis circulantes do hormônio insulina e uma elevação no glucagon. Essa virada hormonal serve como um sinal verde para o tecido adiposo liberar ácidos graxos livres na corrente sanguínea através da lipólise. Esses ácidos graxos viajam até o fígado, onde sofrem um processo chamado beta-oxidação no interior das mitocôndrias, gerando um acúmulo massivo de moléculas de Acetil-CoA.
            </p>
            <p>
              Como o oxaloacetato (necessário para girar o ciclo de Krebs) está sendo redirecionado para a gliconeogênese a fim de manter estável a glicemia de tecidos dependentes, o excesso de Acetil-CoA se condensa e dá origem aos corpos cetônicos: o acetoacetato, a acetona e o <strong>beta-hidroxibutirato (βHB)</strong>. Essas moléculas atravessam a barreira hematoencefálica com extrema facilidade e passam a alimentar as células cerebrais com uma eficiência energética formidável.
            </p>

            <h2 id="cardapio" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PieChart className="text-green-600"/> O Verdadeiro Cardápio Dieta Cetogênica: Divisão de Macros
            </h2>
            <p>
              Um erro crônico cometido por iniciantes é confundir a dieta keto com uma dieta puramente hiperproteica. A verdadeira estratégia cetogênica clássica baseia-se em uma distribuição rígida de macronutrientes focada na energia das gorduras. Veja a proporção correta:
            </p>

            <div className="my-8 p-6 md:p-10 bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-800">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-black text-white uppercase italic mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <Zap className="text-green-500 fill-green-500" /> Distribuição de Calorias Diárias
                </h3>
                <ul className="text-slate-300 font-medium space-y-3 list-none p-0 m-0">
                  <li className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-400 rounded-full shrink-0"></div> <strong>70% a 80% de Gorduras:</strong> Fonte primária de calorias para o corpo.</li>
                  <li className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-400 rounded-full shrink-0"></div> <strong>15% a 20% de Proteínas:</strong> Ingestão estritamente moderada.</li>
                  <li className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full shrink-0"></div> <strong>5% a 10% de Carboidratos:</strong> Limite máximo de 30g a 50g por dia.</li>
                </ul>
                <p className="text-xs text-slate-400 mt-6 m-0 leading-relaxed">
                  *Nota científica: O controle da ingestão de proteína é fundamental. O excesso de aminoácidos aciona vias biológicas que podem gerar glicose por gliconeogênese, reduzindo a cetogênese no fígado e tirando o corpo da cetose.
                </p>
              </div>
            </div>

            <h2 id="cetose" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Brain className="text-green-600"/> O Que é Cetose e Cetoadaptação?
            </h2>
            <p>
              A resposta fisiológica à restrição de carboidratos passa por duas etapas distintas: o estado inicial de <strong>o que é cetose</strong> e a posterior cetoadaptação crônica. Estar em cetose significa apenas que o seu marcador de beta-hidroxibutirato no sangue está acima de 0,5 mmol/L, comprovando que o seu fígado começou a produzir corpos cetônicos de forma ativa. Se você sofre de <Link to="/o-que-e-fome-emocional" className="text-green-600 font-bold hover:underline">fome emocional</Link>, a própria presença das cetonas circulantes atua sinalizando ao cérebro uma maior sensação de plenitude.
            </p>
            <p>
              No entanto, nos primeiros dias de transição, é extremamente comum os pacientes apresentarem sintomas como dor de cabeça, "fog cerebral" (sensação de mente enevoada), fraqueza muscular e cãibras. Esse quadro é popularmente chamado de "gripe cetogênica" e ocorre principalmente devido à queda drástica de insulina, que faz com que os rins eliminem água e sódio em grande velocidade.
            </p>
            <p>
              A cetoadaptação verdadeira leva semanas para se consolidar. Trata-se de uma reprogramação celular profunda onde o seu corpo aumenta a quantidade de transportadores nas mitocôndrias, eleva a sensibilidade dos tecidos aos corpos cetônicos e aumenta a produção de enzimas responsáveis por oxidar a gordura de maneira limpa e eficiente.
            </p>

            <h2 id="acelerar" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> Como Entrar em Cetose Rápido de Forma Segura?
            </h2>
            <p>
              Se a sua dúvida é <strong>quanto tempo demora para entrar em cetose</strong>, a literatura científica e a prática clínica mostram uma variação grande, flutuando entre 2 e 7 dias a depender do indivíduo e do nível prévio de atividade física. Mas existem estratégias validadas para acelerar esse processo.
            </p>
            <p>
              Dados científicos publicados compararam o início clássico da dieta cetogênica precedido por um jejum completo de 48 horas com uma introdução gradual sem jejum. O grupo que realizou o jejum prévio acelerou drasticamente a cetose, apresentando níveis significativos de beta-hidroxibutirato já no primeiro dia.
            </p>
            <p>
              Na rotina clínica moderna, a forma mais eficiente e confortável de acelerar a cetose sem a necessidade de passar dois dias em privação calórica total envolve a associação estratégica de duas ferramentas: os <strong>triglicerídeos de cadeia média (TCM)</strong> e a cafeína. Ingerir ácidos graxos de cadeia média isolados, especialmente o ácido caprílico (C8), estimula a cetogênese imediata. Como o TCM é absorvido diretamente pelo sistema porta-hepático, ele chega ao fígado e é velozmente convertido em energia cetônica.
            </p>

            <h2 id="alimentos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <Check className="text-green-600"/> O Que Comer na Dieta Cetogênica? Alimentos Permitidos
            </h2>
            <p className="mb-6">
              Para estruturar o seu plano sem erros, a regra básica sobre <strong>alimentos permitidos na cetogênica</strong> é priorizar opções com altíssima densidade de gorduras saudáveis e praticamente zero carboidratos líquidos. Mas atenção: muitos se preocupam com o <Link to="/comer-ovo-todo-dia-aumenta-o-colesterol" className="text-green-600 font-bold hover:underline">colesterol</Link>, então é vital escolher as fontes com sabedoria. Veja o guia de compras essencial:
            </p>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/3">Categoria</th>
                    <th className="p-5 w-1/3">Exemplos de Alimentos</th>
                    <th className="p-5 w-1/3">Por Que Consumir?</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Fontes de Gordura Pura</td>
                    <td className="p-5">Azeite de oliva extravirgem, óleo de coco, manteiga ghee, banha de porco.</td>
                    <td className="p-5 text-xs">Fornecem a base calórica hiperlipídica sem afetar os níveis de insulina.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Proteínas Lipídicas</td>
                    <td className="p-5">Ovos inteiros, salmão, sardinha, costela de porco, carnes com gordura natural.</td>
                    <td className="p-5 text-xs">Garantem o aporte proteico moderado vindo acompanhado de lipídeos naturais.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Oleaginosas e Sementes</td>
                    <td className="p-5">Nozes, castanha do Pará, amêndoas, sementes de abóbora, chia e linhaça.</td>
                    <td className="p-5 text-xs">Excelentes para lanches práticos, ricos em gorduras insaturadas e fibras.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Vegetais de Baixo Amido</td>
                    <td className="p-5">Brócolis, couve-flor, espinafre, alface, rúcula, abobrinha, pepino e chuchu.</td>
                    <td className="p-5 text-xs">Essenciais para fornecer micronutrientes e fibras sem estourar o limite de carboidratos.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="frutas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Apple className="text-green-600"/> Frutas Permitidas na Dieta Cetogênica: Cuidado com a Frutose
            </h2>
            <p>
              Sempre me perguntam <Link to="/quantas_frutas_posso_comer" className="text-green-600 font-bold hover:underline">quantas frutas você pode comer</Link> em uma dieta restrita. Um dos maiores tropeços na hora de desenhar a estratégia keto é o consumo de frutas tradicionais. Como a maioria delas é rica em frutose (um carboidrato simples), consumi-las vai tirar você do estado de cetose de forma imediata. No entanto, existem <strong>frutas permitidas na dieta cetogênica</strong> que possuem um perfil lipídico e de fibras único:
            </p>
            <p>
              O <strong>abacate</strong> e o <strong>avocado</strong> são os reis incontestáveis da dieta keto. Eles são compostos predominantemente por ácidos graxos monoinsaturados saudáveis e possuem uma quantidade de carboidratos líquidos virtualmente nula devido ao altíssimo teor de fibras vegetais. O <strong>coco seco</strong> (especialmente a polpa em pedaços) segue a mesma linha, sendo rico em gorduras boas. Por fim, as <strong>frutas vermelhas</strong> (como morangos, mirtilos e amoras) podem entrar de forma controlada em pequenas porções, pois apresentam uma carga glicêmica baixíssima em comparação com frutas como banana ou manga.
            </p>

            <h2 id="exemplo-cardapio" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <Utensils className="text-green-600"/> Exemplo Prático: Um Dia de Cardápio Cetogênico
            </h2>
            <p className="mb-6">
              Para ilustrar como essa distribuição de macronutrientes se transforma em comida no prato, montamos um exemplo básico de um cardápio cetogênico para um dia completo. Observe a ausência de amidos e o foco total em gorduras e proteínas de qualidade, evidenciando o abismo que existe entre um prato keto "sujo" e um prato cetogênico limpo e anti-inflamatório:
            </p>

            <figure className="my-8 rounded-3xl overflow-hidden shadow-md border border-slate-200">
              <img 
                src={`${githubImgBase}Blog/Ceto_dif_Pratos.jpg`} 
                alt="Comparação entre uma Dieta Cetogênica ruim e uma Cetogênica limpa." 
                className="w-full h-auto object-cover" 
              />
              <figcaption className="bg-slate-50 p-4 text-center border-t border-slate-200">
                <p className="text-sm text-slate-600 font-medium italic m-0">
                  Sempre que pensarmos em prescrever ou criticar a Cetogênica, temos que ter em mente o abismo entre os dois pratos da imagem.
                </p>
              </figcaption>
            </figure>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-green-50 border-b border-green-100 text-green-900 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Refeição</th>
                    <th className="p-5 w-1/2">O Que Comer</th>
                    <th className="p-5 w-1/4">Foco Nutricional</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-black text-slate-800">Café da Manhã</td>
                    <td className="p-5">3 ovos mexidos preparados na manteiga ghee, acompanhados de metade de um abacate e uma xícara de café preto sem açúcar.</td>
                    <td className="p-5 text-xs">Alta saciedade com gorduras monoinsaturadas e proteínas lipídicas.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-black text-slate-800">Almoço</td>
                    <td className="p-5">Filé de salmão grelhado, acompanhado de aspargos, cogumelos, brócolis no azeite e uma porção de queijo branco (como feta ou cottage).</td>
                    <td className="p-5 text-xs">Ômega 3 (gordura poli-insaturada), fibras e proteínas com quase zero carbo.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-black text-slate-800">Lanche da Tarde</td>
                    <td className="p-5">Bebida vegetal de castanhas com cálcio adicionado, acompanhada de um mix de castanhas-pecã, fatias de queijo e uma pequena porção de morangos.</td>
                    <td className="p-5 text-xs">Lanche prático com alta densidade lipídica, cálcio e os antioxidantes de baixo índice glicêmico das frutas vermelhas.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-black text-slate-800">Jantar</td>
                    <td className="p-5">Costela suína assada (ou sobrecoxa de frango com pele) acompanhada de espinafre refogado e generosa rega de azeite extravirgem.</td>
                    <td className="p-5 text-xs">Aporte lipídico final para manter a insulina basal e sustentar a cetose noturna.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-12 p-5 md:p-6 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm flex items-start gap-3">
              <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={20} />
              <p className="text-sm md:text-base text-orange-900 font-medium italic m-0 leading-relaxed">
                <strong>Atenção:</strong> Este cardápio é apenas um exemplo ilustrativo e não leva em conta a sua individualidade biológica. É fundamental procurar um Nutricionista para calcular as quantidades exatas, analisar exames e montar uma estratégia segura e personalizada para você!
              </p>
            </div>

            <h2 id="video-cardapio" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Video className="text-green-600"/> Opção Prática: Cardápio para a Dieta Cetogênica
            </h2>
            <p className="mb-6">
              Assista abaixo a uma excelente opção de cardápio prático para a Dieta Cetogênica, demonstrando como montar suas refeições no dia a dia para manter os carboidratos baixos, e reforçando que para perder peso de forma contínua, o balanço calórico do final do dia ainda será fundamental:
            </p>
            
            <div className="my-10 p-6 md:p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-800">
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-xl shrink-0 bg-black border-4 border-slate-700 relative">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/M46tzfRCX1w"
                        title="Cardápio prático para Dieta Cetogênica"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-white italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                        <PlayCircle className="text-green-500" /> Montando o Prato
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-6">
                      Aprenda na prática as substituições ideais para manter a saciedade lá no alto. Lembrando que, embora a perda de peso inicial na cetogênica seja rápida (pela eliminação de água ligada ao glicogênio), a perda de gordura a longo prazo sempre dependerá de você estar <Link to="/quantas-calorias-gasto-por-dia" className="text-green-400 font-bold hover:underline">gastando mais energia do que ingere</Link>.
                    </p>
                </div>
            </div>

            <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <AlertTriangle className="text-green-600"/> Fisiologia Básica: Cetose Nutricional vs Cetoacidose Diabética
            </h2>
            <p className="mb-6">
              Para acalmar os temores médicos comuns e compreender a segurança do protocolo, veja o abismo fisiológico que separa o estado saudável da cetose induzida pela dieta de uma complicação patológica:
            </p>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Marcador de Controle</th>
                    <th className="p-5 w-1/4">Dieta Convencional</th>
                    <th className="p-5 w-1/4">Cetose Nutricional (Keto)</th>
                    <th className="p-5 w-1/4">Cetoacidose Diabética</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Glicose Sanguínea</td>
                    <td className="p-5">80 a 120 mg/dL</td>
                    <td className="p-5 text-green-700 font-bold">65 a 80 mg/dL</td>
                    <td className="p-5 text-red-600 font-bold">&gt; 300 mg/dL</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Concentração de Cetonas</td>
                    <td className="p-5">0,1 mmol/L</td>
                    <td className="p-5 text-green-700 font-bold">0,5 a 8,0 mmol/L</td>
                    <td className="p-5 text-red-600 font-bold">&gt; 25 mmol/L</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">pH do Sangue</td>
                    <td className="p-5">7.4 (Normal)</td>
                    <td className="p-5 text-green-700 font-bold">7.4 (Totalmente Estável)</td>
                    <td className="p-5 text-red-600 font-bold">&lt; 7.3 (Acidose Grave)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PRODUTO AFILIADO PINGUS */}
            <div id="medicao" className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
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
                          Monitor de Cetonas e Glicose <span className="text-green-700">FreeStyle Optium Neo</span>
                        </h4>

                        <div className="w-full max-w-[180px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-200 aspect-[3/4]">
                            <img 
                              src={`${githubImgBase}Afiliado/FreeStyleNeo.jpg`} 
                              alt="Monitor FreeStyle Optium Neo para Medição de Corpos Cetônicos" 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400";
                              }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                          A única maneira 100% confiável de saber se o seu cardápio está correto e se o seu corpo de fato entrou em estado de cetose é medindo os níveis de beta-hidroxibutirato no sangue. Ficar apenas monitorando fitas de urina pode gerar falsos resultados após as primeiras semanas. Com o FreeStyle Optium Neo, basta uma pequena gota de sangue capilar para ter a leitura exata em segundos: se marcar de <strong>0,5 mmol/L para cima</strong>, comemore, você atingiu a cetose nutricional!
                        </p>

                        <a 
                            href="https://meli.la/2DZ8VNJ" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Ver Medidor no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="my-4 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso!
                    </p>
                </div>
            </div>

            {/* CONCLUSÃO */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Target className="text-green-600"/> Conclusão: A Dieta Cetogênica é Para Você?
              </h2>
              <p>
                Em resumo, a dieta cetogênica é uma ferramenta terapêutica e metabólica poderosa. Ela não foi criada apenas como uma "dieta da moda", mas sim com propósitos clínicos que hoje se estendem para a melhora do foco mental, aumento da saciedade mediada pelos <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-bold hover:underline">hormônios da fome</Link>, e uma perda de peso inicial animadora. Contudo, é fundamental entender que o sucesso a longo prazo exige escolhas inteligentes: encher o prato de bacon e frituras pode até manter você em cetose, mas não promove saúde e longevidade. Se você tem disciplina para focar em gorduras limpas, vegetais de baixo amido e proteínas adequadas, a keto pode ser um excelente "reset" para o seu corpo. Caso contrário, estratégias mais flexíveis — mas que mantenham o déficit calórico bem calculado — podem ser o melhor caminho para evitar o indesejado <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-bold hover:underline">efeito sanfona</Link>.
              </p>
            </div>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre a Dieta Keto (FAQ)
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

        {/* BIO AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 integrate-author border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
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
              Descomplico a ciência do emagrecimento e da fisiologia clínica, traduzindo evidências densas em estratégias reais, sustentáveis e sem terrorismos nutricionais. Foco absoluto no respeito ao seu metabolismo.
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
