import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Clock, Shield, 
  Zap, ChevronRight, Headphones, ChevronDown, ShoppingCart, 
  Target, Flame, Coffee, Dumbbell, Brain, Check, X, AlertTriangle, Video, PlayCircle
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-07-13";
const dateModifiedISO = "2026-07-13";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const artigoCapa = `${githubImgBase}Blog/JejumIntermitente_Capa.jpg`; 

export default function JejumIntermitente() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "O que exatamente está liberado para tomar durante a janela de jejum?",
      resposta: "Está liberado o consumo de água filtrada (com ou sem gás), café preto puro e chás de ervas naturais, desde que sejam consumidos totalmente puros, sem nenhuma gota de açúcar, mel ou adoçantes calóricos. Essas bebidas mantêm a sua insulina baixa e não interrompem a queima de gordura do protocolo."
    },
    {
      pergunta: "O jejum intermitente pode fazer eu perder a minha massa muscular?",
      resposta: "Não, desde que você consuma a quantidade correta de proteínas e calorias estipulada para o seu peso corporal dentro da sua janela de alimentação. O catabolismo muscular ocorre quando há um déficit calórico exagerado e prolongado associado à baixa ingestão de proteínas."
    },
    {
      pergunta: "O jejum realmente limpa as células ruins do corpo (Autofagia)?",
      resposta: "Sim, o jejum prolongado estimula um processo celular chamado autofagia, que funciona como uma espécie de reciclagem biológica, onde as células limpam e degradam proteínas velhas ou danificadas para otimizar o funcionamento do organismo."
    },
    {
      pergunta: "Sinto muita dor de cabeça nos primeiros dias de jejum, isso é normal?",
      resposta: "Sim, nos primeiros dias é comum sentir uma leve dor de cabeça devido à rápida eliminação de água e eletrólitos (como sódio e potássio) provocada pela queda da insulina. Manter uma hidratação constante ao longo do dia costuma resolver o problema rapidamente."
    }
  ];

  return (
    <>
      <Helmet>
        <title>O Que é Jejum Intermitente? Guia Definitivo e Científico | Nutrição com Marco</title>
        <meta name="description" content="Descubra o que é o jejum intermitente, como ele afeta o seu metabolismo, a sua ligação histórica, e se ele emagrece mais que a dieta tradicional." />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que é Jejum Intermitente? Guia Definitivo e Científico" />
        <meta property="og:description" content="Entenda como organizar os seus horários de alimentação, o limite do corpo humano sem comer e os mitos sobre café e musculação em jejum." />
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
            "headline": "O Que é Jejum Intermitente? Guia Simples e Direto",
            "image": [artigoCapa],
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Jejum Intermitente", "Emagrecimento", "Metabolismo", "Nutrição Clínica"]
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
            "description": "Descubra o que é o jejum intermitente, como ele afeta o seu metabolismo, a sua ligação histórica e religiosa, e se ele emagrece mais que a dieta tradicional."
          }) }} />

        {/* SCHEMA 2: MedicalWebPage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "O Que é Jejum Intermitente? Guia Definitivo e Científico",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Jejum Intermitente"},
              {"@type": "MedicalEntity", "name": "Metabolismo"},
              {"@type": "MedicalEntity", "name": "Perda de Peso"},
              {"@type": "MedicalEntity", "name": "Corpos Cetônicos"}
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
                "name": "O Que é Jejum Intermitente",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          }) }} />

        {/* SCHEMA 4: VideoObject (MrBeast) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "I Didn't Eat Food For 14 Days",
            "description": "Desafio documentado por MrBeast mostrando a experiência fisiológica e os desafios mentais de passar 14 dias em jejum intermitente/prolongado.",
            "thumbnailUrl": "https://img.youtube.com/vi/Kq3dcD3Hnik/maxresdefault.jpg",
            "uploadDate": "2023-01-01T00:00:00Z",
            "embedUrl": "https://www.youtube.com/embed/Kq3dcD3Hnik"
          }) }} />

        {/* SCHEMA 5: FAQPage */}
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
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Emagrecimento & Metabolismo</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que é Jejum Intermitente? Guia Simples e Direto
          </h1>
          
          {/* 1. RESPOSTA DIRETA NO TOPO */}
          <div className="mb-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Target className="text-green-600 shrink-0" /> Resposta Direta: O que é e como funciona?
              </h2>
              <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                O jejum intermitente não é uma dieta, mas sim um estilo de organização de horários onde você alterna períodos de alimentação com períodos de privação calórica total. Ele funciona reduzindo drasticamente os níveis do hormônio insulina e elevando o glucagon. Essa virada hormonal força o seu organismo a esgotar os estoques de açúcar (glicogênio) e a quebrar as células de gordura para usá-las como combustível principal, produzindo energia em forma de corpos cetônicos.
              </p>
            </div>
          </div>

          <p className="text-xl text-slate-600 font-medium mb-10">
            Se você quer entender o jejum intermitente sem complicações, veio ao lugar certo. Essa estratégia virou uma febre no mundo do emagrecimento, mas muita gente ainda se confunde com tanta informação misturada na internet. Em vez de focar no tipo de alimento que você coloca no prato, o jejum intermitente foca em <strong>quando você come</strong>. 
          </p>

          {/* 2. IMAGEM DE CAPA COM SEO */}
          <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
            <img 
              src={artigoCapa} 
              alt="Descubra o que é Jejum Intermitente, como essa estratégia metabólica funciona na prática e seus benefícios para a saúde." 
              title="O que é Jejum Intermitente"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
            />
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                Entender o que é jejum intermitente e como organizar sua janela de alimentação é o primeiro grande passo para a adaptação do seu metabolismo.
              </p>
            </figcaption>
          </figure>

          {/* 3. ÁUDIO */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/jejum-intermitente.mp3" type="audio/mpeg" />
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
                <li><a href="#historia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A História do Jejum</a></li>
                <li><a href="#como-funciona" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como o jejum funciona</a></li>
                <li><a href="#cronograma" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Fases do Jejum</a></li>
                <li><a href="#mrbeast" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Video size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Experiência de MrBeast</a></li>
                <li><a href="#beneficios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Benefícios Científicos</a></li>
                <li><a href="#emagrecimento" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Flame size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Emagrece mais que dieta?</a></li>
                <li><a href="#cafe" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Coffee size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Café quebra o jejum?</a></li>
                <li><a href="#o-que-quebra" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que quebra e não quebra</a></li>
                <li><a href="#musculacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Dumbbell size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Jejum e Musculação</a></li>
                <li><a href="#fome" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como controlar a fome</a></li>
                <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Clock className="text-green-600"/> A História do Jejum: Da Antiguidade aos Dias de Hoje
            </h2>
            <p>
              Antes de se tornar uma estratégia moderna de emagrecimento, o ato de jejuar já fazia parte da história da humanidade há milhares de anos. Longe de ser apenas uma moda atual, o jejum tem raízes profundas na nossa evolução e, principalmente, na espiritualidade e na religião.
            </p>
            <p>
              Praticamente todas as grandes tradições do mundo utilizam a privação de alimentos como uma ferramenta de purificação e conexão mental. Um dos relatos antigos mais famosos é o de Moisés, que passou 40 dias e 40 noites em jejum. Outro exemplo clássico desse forte cunho religioso é o Ramadã, onde milhões de pessoas ficam do nascer ao pôr do sol sem consumir calorias por motivos espirituais. Até mesmo na Grécia Antiga, o pai da medicina, Hipócrates, já defendia o jejum como um remédio natural para tratar o corpo.
            </p>
            <p>
              Hoje em dia, essa ligação com o sagrado deu origem a uma vertente conhecida como <strong>Nutrição Devocional</strong>. Os nutricionistas devocionais atuam unindo a ciência com a espiritualidade, guiando pacientes de forma segura em jejuns super prolongados — que duram dias inteiros — com propósitos de autoconhecimento e jejuns de propósito religioso.
            </p>
            <p>
              Se você acha que passar 16 horas sem comer é muito, a ciência guarda registros impressionantes sobre o limite do nosso corpo. Você sabia que <strong>o jejum mais longo da história durou mais de 1 ano?</strong> A literatura médica documentou o caso de um homem de 207 kg que passou exatamente 382 dias sem comer. Ele viveu esse período consumindo apenas líquidos sem calorias, vitaminas e minerais sob rigorosa supervisão médica, perdendo 126 kg de forma segura e provando a incrível capacidade de adaptação do metabolismo humano.
            </p>

            <h2 id="como-funciona" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Como o jejum funciona no corpo de forma simples?
            </h2>
            <p>
              O modelo mais conhecido nas buscas é o de <strong>16 por 8</strong>. Nele, você concentra as suas refeições em uma janela de 8 horas (por exemplo, das 12h às 20h) e fica as outras 16 horas seguintes sem comer. Também existem protocolos onde a pessoa faz o jejum em dias alternados ou reduz bastante as calorias em apenas dois dias da semana, como no método 5:2.
            </p>
            <p>
              Quando você fica horas sem comer, o seu corpo ativa um "botão" interno de sobrevivência. Os níveis de insulina, que é o hormônio que estoca gordura e energia, caem bastante no sangue. Ao mesmo tempo, um hormônio chamado glucagon entra em ação e aumenta.
            </p>
            <p>
              Essa mudança avisa o fígado que é hora de gastar o estoque de energia que já está guardado dentro de você. Primeiro, o corpo queima o glicogênio, que é o nosso estoque de açúcar mais rápido. Quando esse açúcar acaba, o organismo começa a quebrar a gordura para usar como combustível principal.
            </p>
            <p>
              Nesse processo, o fígado transforma a gordura em corpos cetônicos. Eles funcionam como uma energia extra e muito eficiente, que alimenta o seu cérebro e os seus músculos enquanto a comida não chega.
            </p>

            <h2 id="cronograma" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <Target className="text-green-600"/> Visão Geral: O Cronograma do Jejum no seu Corpo
            </h2>
            <p className="mb-6">
              Para ajudar a visualizar as fases que o seu metabolismo atravessa, veja abaixo o que acontece no organismo com o passar das horas sem o consumo de alimentos:
            </p>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/4">Horas de Jejum</th>
                    <th className="p-5 w-1/3">Estado Hormonal Principal</th>
                    <th className="p-5 w-5/12">Combustível Utilizado pelo Corpo</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-2"><Clock size={16} className="text-green-600"/> 0 a 4 horas</td>
                    <td className="p-5">Insulina Alta / Glucagon Baixo</td>
                    <td className="p-5">Glicose vinda da última refeição</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-2"><Clock size={16} className="text-orange-500"/> 4 a 12 horas</td>
                    <td className="p-5">Queda da Insulina / Início da Lipólise</td>
                    <td className="p-5">Glicogênio (açúcar estocado no fígado e músculos)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800 flex items-center gap-2"><Clock size={16} className="text-red-600"/> 12 a 16+ horas</td>
                    <td className="p-5 font-bold text-green-700">Insulina Baixa / Glucagon Alto</td>
                    <td className="p-5 font-bold text-slate-800">Quebra ativa de gordura e produção de Corpos Cetônicos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="mrbeast" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Video className="text-green-600"/> A Experiência Real: 14 Dias Sem Comer (MrBeast)
            </h2>
            <p className="mb-6">
              Para sair um pouco da teoria médica e ver como o corpo humano lida com a privação de alimentos na prática, o fenômeno da internet <strong>MrBeast</strong> documentou o seu desafio de passar incríveis 14 dias em jejum consecutivo, ingerindo apenas água e eletrólitos. O vídeo ilustra perfeitamente a barreira mental dos primeiros dias e a adaptação do corpo ao longo do processo.
            </p>
            
            <div className="my-10 p-6 md:p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-800">
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-xl shrink-0 bg-black border-4 border-slate-700 relative">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Kq3dcD3Hnik"
                        title="I Didn't Eat Food For 14 Days"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-black text-white italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                        <PlayCircle className="text-green-500" /> Além do Limite
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-6">
                        Assista a este documentário impressionante onde MrBeast relata os altos e baixos emocionais, as quedas de energia e os picos de clareza mental que acontecem quando o corpo entra em cetose profunda durante duas semanas ininterruptas sem mastigar nada.
                    </p>
                </div>
            </div>

            <h2 id="beneficios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Shield className="text-green-600"/> Os benefícios do jejum segundo a ciência
            </h2>
            <p>
              Muito além de ajudar a emagrecer, ficar um tempo sem comer traz vantagens excelentes para o metabolismo. A ciência mostra que o jejum ajuda a melhorar a sensibilidade à insulina, facilitando o controle do açúcar no sangue no dia a dia. Ele também reduz a inflamação nas células, o que protege o seu coração.
            </p>
            <p>
              Outro ponto muito legal é o efeito do jejum sobre o GH, o famoso hormônio do crescimento. Quando passamos períodos sem comer, o corpo aumenta a liberação de GH em pulsos bem mais altos na corrente sanguínea. Esse hormônio entra em ação para proteger os seus músculos e ajudar a quebrar ainda mais gordura.
            </p>
            <p>
              Mas vale um alerta importante para os leigos. Quando olhamos os estudos de longo prazo, os resultados do jejum na saúde e na balança são iguais aos de uma dieta tradicional com corte de calorias. Isso significa que o jejum funciona muito bem, mas o segredo real não é nenhuma mágica, e sim a constância em manter a estratégia.
            </p>

            <h2 id="emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Flame className="text-green-600"/> O jejum intermitente emagrece mais que a dieta comum?
            </h2>
            <p>
              A resposta direta é não. O jejum intermitente ajuda a emagrecer porque, ao encurtar o tempo que você tem disponível para comer, você acaba consumindo menos calorias no balanço final do dia. É a matemática básica da restrição de energia.
            </p>
            <p>
              Se duas pessoas comerem exatamente a mesma quantidade de calorias e proteínas, uma fracionando em várias refeições o dia todo e a outra concentrando no jejum, as duas vão perder a mesma quantidade de gordura. O jejum é uma ferramenta prática para facilitar a rotina, mas não quebra as leis da física.
            </p>
            <p>
              Aquela perda de peso muito rápida que acontece logo nos primeiros dias de jejum não é pura gordura. Ela acontece porque você esvaziou o estoque de açúcar do corpo, eliminando junto a água que estava presa a ele. A gordura mesmo vai queimando de forma constante com o passar das semanas.
            </p>

            <h2 id="cafe" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Coffee className="text-green-600"/> Café sem açúcar quebra o jejum?
            </h2>
            <p>
              Esta é a maior dúvida de todas, e a resposta vai te agradar. O café preto puro e sem açúcar não quebra o jejum metabólico. Como ele não tem calorias e nem carboidratos, ele não altera a sua glicose e não gera picos de insulina. O seu corpo continua queimando gordura normalmente.
            </p>
            <p>
              A cafeína é ótima porque estimula o sistema nervoso a liberar mais gordura para ser usada como energia pelas células. Estudos mostram que se você associar a cafeína com gorduras do tipo TCM (como o ácido caprílico C8), o fígado acelera ainda mais a produção de corpos cetônicos. Isso gera energia rápida para o cérebro e ajuda a segurar a fome.
            </p>
            <p>
              Por isso, o café preto ou os chás sem açúcar estão super liberados. Eles são ótimas ferramentas para te dar foco e disposição naquelas horas finais antes de abrir a sua janela de alimentação.
            </p>

            <h2 id="o-que-quebra" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <AlertTriangle className="text-green-600"/> O Que Quebra e O Que Não Quebra o Jejum?
            </h2>
            <p className="mb-6">
              Para não jogar todo o seu esforço fora com deslizes bobos, criamos este guia definitivo sobre o que você pode ou não ingerir durante a sua janela de privação alimentar:
            </p>

            <div className="my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left min-w-[600px] m-0">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase tracking-widest text-xs font-black">
                  <tr>
                    <th className="p-5 w-1/3">Bebida / Ingrediente</th>
                    <th className="p-5 w-1/4">Status no Jejum</th>
                    <th className="p-5 w-5/12">Impacto Metabólico</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Água Filtrada / Com Gás</td>
                    <td className="p-5 font-bold text-green-600 flex items-center gap-2"><Check size={16}/> Liberado</td>
                    <td className="p-5 text-xs">Essencial para a hidratação e eliminação de toxinas.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Café e Chás Puros</td>
                    <td className="p-5 font-bold text-green-600 flex items-center gap-2"><Check size={16}/> Liberado</td>
                    <td className="p-5 text-xs">Aceleram o metabolismo e não estimulam a insulina.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Água com Gotas de Limão</td>
                    <td className="p-5 font-bold text-green-600 flex items-center gap-2"><Check size={16}/> Liberado</td>
                    <td className="p-5 text-xs">Poucas gotas não quebram o estado de jejum calórico.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Adoçantes Zero Calorias</td>
                    <td className="p-5 font-bold text-yellow-600 flex items-center gap-2"><AlertTriangle size={16}/> Atenção</td>
                    <td className="p-5 text-xs">Em algumas pessoas, o sabor doce pode gerar estímulo cefálico de insulina. Evite se possível.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Óleo de Coco / Manteiga no Café</td>
                    <td className="p-5 font-bold text-red-600 flex items-center gap-2"><X size={16}/> Quebra o Jejum</td>
                    <td className="p-5 text-xs">Quebra o jejum calórico (tem calorias), embora mantenha o corpo em cetose.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">Whey Protein / BCAA</td>
                    <td className="p-5 font-bold text-red-600 flex items-center gap-2"><X size={16}/> Quebra o Jejum</td>
                    <td className="p-5 text-xs">Aminoácidos ativam a via mTOR e interrompem o jejum imediatamente.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* AFILIADO PINGUS - GARRAFA TÉRMICA */}
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
                            Garrafa Térmica <span className="text-green-700">com Filtro para Gelo</span>
                        </h4>

                        <div className="w-full max-w-[180px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-200 aspect-[3/4]">
                            <img 
                              src={`${githubImgBase}Afiliado/Garrafa.jpg`} 
                              alt="Garrafa Térmica com Filtro de Gelo para Jejum Intermitente" 
                              className="w-full h-full object-cover" 
                              onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400";
                              }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Beber água gelada ajuda muito a controlar a ansiedade nas horas finais do protocolo. Essa garrafa térmica é perfeita porque possui um <strong>sistema de filtro interno</strong> que impede que as pedras de gelo caiam no bico e atrapalhem na hora de beber. Mantém a água geladíssima durante toda a sua janela de jejum!
                        </p>

                        <a 
                            href="https://meli.la/1scXkdR" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Ver Garrafa no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="my-4 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso!
                    </p>
                </div>
            </div>

            <h2 id="musculacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Dumbbell className="text-green-600"/> Jejum intermitente e musculação: dá para conciliar?
            </h2>
            <p>
              Se o seu objetivo é treinar pesado na academia e ganhar massa muscular, dá sim para usar o jejum, mas com estratégia. Treinar musculação totalmente em jejum faz o corpo usar a gordura e o estoque interno de energia dos músculos. Porém, o rendimento em treinos muito intensos pode cair um pouco sem o carboidrato por perto.
            </p>
            <p>
              Para o ganho de massa magra, o mais importante é o total de proteínas e calorias que você consome no final do dia. Você precisa bater a sua meta de proteínas dentro daquela janela de 8 horas em que está liberado para comer.
            </p>
            <p>
              Se você comer pouca proteína ou calorias de menos por causa do tempo restrito, o crescimento muscular vai estagnar. O corpo desativa a via mTOR, que é o mecanismo celular que faz o músculo crescer. Por isso, o ideal para quem faz musculação é planejar o treino para acontecer perto do horário de abrir o jejum, garantindo uma boa refeição proteica logo depois.
            </p>

            <h2 id="fome" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Brain className="text-green-600"/> Como controlar a fome no começo do jejum
            </h2>
            <p>
              Sentir fome nas primeiras semanas é completamente normal e esperado. O nosso corpo funciona com horários programados por um hormônio chamado grelina, que é o hormônio da fome. Se você estava acostumado a tomar café da manhã às 8h, a grelina vai disparar nesse horário e te dar fome.
            </p>
            <p>
              A boa notícia é que o corpo se adapta. Em poucos dias, os picos de grelina mudam e se ajustam à sua nova rotina, fazendo a fome diminuir bastante. Além disso, os próprios corpos cetônicos produzidos na cetose atuam no cérebro reduzindo a grelina e controlando o apetite naturalmente.
            </p>
            <p>
              Para vencer os primeiros dias sem sofrimento, abuse da água, use o café preto puro a seu favor e foque em comer alimentos ricos em fibras nas suas refeições. Isso vai garantir que a sua jornada seja tranquila, saudável e baseada na ciência.
            </p>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre o Jejum (FAQ)
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
