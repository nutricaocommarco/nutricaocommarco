import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle, Headphones, ChevronRight, Activity, Leaf, Scale, Heart, FileText, Zap, ShoppingCart } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas para o Schema e para o visual
const datePublishedISO = "2026-03-25";
const dateModifiedISO = "2026-03-25";
// Converte "YYYY-MM-DD" para "DD/MM/YYYY"
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Dados nutricionais do ovo baseados na literatura científica
const tabelaNutricionalOvo = [
  { 
    id: 1, 
    nutriente: "Energia", 
    quantidade100g: "151 kcal", 
    quantidadeUnidade: "78 kcal", 
    destaque: false 
  },
  { 
    id: 2, 
    nutriente: "Proteínas", 
    quantidade100g: "12,5 g", 
    quantidadeUnidade: "6,5 g", 
    destaque: true 
  },
  { 
    id: 3, 
    nutriente: "Gorduras Totais", 
    quantidade100g: "11,2 g", 
    quantidadeUnidade: "5,8 g", 
    destaque: false 
  },
  { 
    id: 4, 
    nutriente: "Colesterol", 
    quantidade100g: "391 mg", 
    quantidadeUnidade: "225 mg", 
    destaque: true 
  },
  { 
    id: 5, 
    nutriente: "Vitamina B12", 
    quantidade100g: "2,5 µg", 
    quantidadeUnidade: "1,3 µg", 
    destaque: true 
  },
  { 
    id: 6, 
    nutriente: "Colina", 
    quantidade100g: "160 mg", 
    quantidadeUnidade: "83,2 mg", 
    destaque: false 
  },
];

export default function OvoColesterol() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        {/* SEO OTIMIZADO - TÍTULO DO SNIPPET (aprox 60 caracteres) */}
        <title>Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Científica | Nutrição com Marco</title>
        
        {/* META DESCRIPTION OTIMIZADA (aprox 155 caracteres) */}
        <meta name="description" content="Comer ovo todo dia aumenta o colesterol? Descubra a verdade científica, entenda HDL, LDL e Triglicerídios, e quantos ovos você pode consumir com segurança." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Científica | Nutrição com Marco" />
        <meta property="og:description" content="Comer ovo todo dia faz mal à saúde? Ovo aumenta LDL ou HDL? Desvendamos tudo com base em estudos científicos atualizados." />
        <meta property="og:image" content={`${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG PARA ARTIGO OTIMIZADO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Científica",
            "image": `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.jpg`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO,
            "description": "Descubra a verdade científica sobre se comer ovo todo dia aumenta o colesterol e entenda o impacto no perfil lipídico."
          })}
        </script>

        {/* INÍCIO DO SCHEMA.ORG PARA FAQ - PERGUNTAS EXATAS DO GOOGLE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Comer ovo todo dia aumenta o colesterol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não necessariamente. O colesterol dietético presente no ovo tem um impacto muito pequeno no colesterol sanguíneo da maioria das pessoas. Estudos mostram que o consumo adequado pode até melhorar a funcionalidade do colesterol HDL (o 'bom' colesterol)."
                }
              },
              {
                "@type": "Question",
                "name": "Quem tem colesterol alto pode comer ovo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, na maioria dos casos, desde que inserido em uma dieta equilibrada. O ovo melhora as partículas de LDL para um formato menos prejudicial e melhora a função do HDL."
                }
              },
              {
                "@type": "Question",
                "name": "Quantos ovos por dia faz mal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A literatura científica indica que a ingestão de 1 a 3 ovos inteiros por dia é segura para indivíduos saudáveis e traz benefícios nutricionais e cardiovasculares."
                }
              },
              {
                "@type": "Question",
                "name": "Ovo aumenta o LDL?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O ovo pode aumentar levemente o colesterol total, mas esse aumento ocorre principalmente nas partículas de LDL grandes (não aterogênicas), que são menos propensas a causar doenças cardíacas."
                }
              }
            ]
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA FAQ */}
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">
          
          {/* TAG E DATA DE ATUALIZAÇÃO */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Clínica</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 OTIMIZADO COM KEYWORD EXATA NO INÍCIO */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Científica
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Comer ovo todo dia aumenta o colesterol?
              </h2>
              {/* PRIMEIRO PARÁGRAFO REESCRITO PARA SEO (Keyword no início) */}
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                <strong>Não.</strong> Para a maioria das pessoas, comer ovo diariamente não aumenta o colesterol de forma significativa. Estudos mostram que o colesterol dos alimentos tem pouco impacto no colesterol do sangue, sendo a gordura saturada o principal fator de risco.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/OvoColesterol.mp3" type="audio/mpeg" />
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

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[600px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li>
                    <a href="#perfil" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Entendendo HDL, LDL e Triglicerídios
                    </a>
                  </li>
                  <li>
                    <a href="#beneficios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Benefícios do ovo para a saúde
                    </a>
                  </li>
                  <li>
                    <a href="#ovo-aumenta-ldl-hdl" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Ovo aumenta LDL ou HDL?
                    </a>
                  </li>
                  <li>
                    <a href="#quem-tem-colesterol-alto-pode-comer-ovo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Colesterol alto e gordura no fígado
                    </a>
                  </li>
                  <li>
                    <a href="#comer-ovo-todo dia-faz-mal" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Comer ovo todo dia faz mal à saúde?
                    </a>
                  </li>
                  <li>
                    <a href="#quantos-ovos-por-dia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Quantos ovos posso comer por dia sem risco?
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
            <p>O ovo de galinha é o produto de origem animal mais consumido no mundo todo, apresentando um preço acessível, fácil preparação e um perfil nutricional espetacular. Após o leite materno, ele é considerado o alimento mais completo da natureza, sendo formado pela clara (rica em água e proteínas) e pela gema (rica em lipídios, vitaminas e minerais).</p>

            {/* IMAGEM DE CAPA OTIMIZADA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={`${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.jpg`} 
                alt="Comer ovo todo dia aumenta o colesterol? Entenda a verdade científica" 
                title="Benefícios do Ovo e Colesterol"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bg-green-50 p-4 text-center">
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                  Estudos modernos comprovam que o consumo de ovos é seguro e traz diversos benefícios cardiovasculares.
                </p>
              </div>
            </div>
            
            <h2 id="perfil" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> O básico: Colesterol, HDL, LDL, VLDL e Triglicerídios
            </h2>
            <p>Antes de falarmos especificamente do ovo, precisamos entender o que compõe o chamado "perfil lipídico" nos exames de sangue. Essas gorduras e transportadores são essenciais para a vida, mas precisam estar em equilíbrio.</p>

            <div className="my-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 marker:text-green-600">
              <p className="m-0"><strong>• Colesterol Total:</strong> É a soma de todos os tipos de colesterol no sangue. É um componente estrutural de todas as nossas células e base para produção de hormônios.</p>
              <p className="m-0"><strong>• HDL (Lipoproteína de Alta Densidade):</strong> Conhecido como "colesterol bom". Ele atua como um "lixeiro", recolhendo o excesso de colesterol dos tecidos e artérias e levando-o de volta ao fígado para ser excretado ou reutilizado.</p>
              <p className="m-0"><strong>• LDL (Lipoproteína de Baixa Densidade):</strong> Frequentemente chamado de "colesterol mau". Ele transporta o colesterol do fígado para as células. Se houver excesso e as partículas forem pequenas e densas, elas podem se depositar nas paredes das artérias.</p>
              <p className="m-0"><strong>• VLDL (Lipoproteína de Muito Baixa Densidade):</strong> Transporta principalmente triglicerídios e, em menor quantidade, colesterol para os tecidos.</p>
              <p className="m-0"><strong>• Triglicerídios:</strong> São a principal forma de gordura no corpo, usados para armazenar energia. Níveis altos geralmente estão ligados ao excesso de calorias na dieta (açúcares, massas e bebidas alcoólicas) e não diretamente ao colesterol dos alimentos.</p>
            </div>
            
            <h2 id="beneficios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> Benefícios do ovo para a saúde
            </h2>
            
            <p>A composição do ovo oferece uma matriz encapsulada de macro e micronutrientes extremamente favoráveis ao organismo. A gema e a clara apresentam substâncias ativas com características biológicas protetoras e promotoras da saúde humana.</p>

            <div className="flex flex-col gap-6 my-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">1</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Massa Muscular e Envelhecimento</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Os ovos contêm proteínas de Alto Valor Biológico (AVB). A ingestão desse tipo de proteína está diretamente associada ao ganho e à manutenção da massa muscular, ajudando a combater as perdas naturais de tecido magro que ocorrem durante o envelhecimento.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">2</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Micronutrientes Essenciais</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">O consumo de ovos garante uma maior absorção de vitaminas essenciais como a B12 (vital para o sistema nervoso), A, e D, além de suprir estoques de minerais importantes como zinco, magnésio e iodo.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">3</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Efeito na Saciedade</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">
                    Um dos grandes aliados no processo de emagrecimento e <Link to="/blog/tudo-sobre-composicao-corporal-bioimpedancia" className="text-green-600 font-semibold hover:underline">composição corporal</Link>. As proteínas do ovo induzem uma menor secreção do hormônio da fome (grelina). Indivíduos que consomem ovos na primeira refeição tendem a ingerir menos calorias ao longo do dia, facilitando as dietas com déficit calórico e o <Link to="/blog/horario-pesagem-peso-ideal" className="text-green-600 font-semibold hover:underline">controle de peso</Link>.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="ovo-aumenta-ldl-hdl" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Ovo aumenta o colesterol LDL ou HDL? Mitigando dúvidas.
            </h2>
            <p>Esse é, de longe, o maior mito que a nutrição precisou desconstruir. A literatura mais antiga apontava que a ingestão de colesterol na dieta elevaria o colesterol do sangue. No entanto, a ciência evoluiu e mostrou que essa relação não é direta ou prejudicial na prática clínica.</p>

            <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600 text-slate-700">
              <li className="font-bold text-lg pl-1">Estudos amplos mostram que a cada 100 mg de colesterol dietético ingerido (um ovo grande tem em média 225 mg), o colesterol total no plasma aumenta ínfimos 2,2 mg/dL.</li>
              <li className="font-bold text-lg pl-1">Essa leve alteração aumenta as partículas de LDL grandes (não aterogênicas), o que na verdade é uma modulação benéfica, pois essas moléculas volumosas têm dificuldade de penetrar nas artérias.</li>
              <li className="font-bold text-lg pl-1">A ingestão de ovos melhora a funcionalidade do colesterol HDL (o famoso "bom" colesterol), proporcionando uma melhor atividade anti-inflamatória e antioxidante no corpo.</li>
            </ul>

            {/* MICRO-OTIMIZAÇÃO */}
            <p>Portanto, a dúvida se <Link to="/blog/controle-fome-emagrecimento" className="text-green-600 font-semibold hover:underline">comer ovo todo dia faz mal</Link> à saúde está superada pela ciência, desde que inserido em um estilo de vida saudável.</p>

            <h2 id="quem-tem-colesterol-alto-pode-comer-ovo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Quem tem gordura no fígado ou colesterol alto pode comer ovo?
            </h2>
            <p>Pacientes diagnosticados com esteatose hepática não alcoólica frequentemente têm dúvidas sobre o consumo de lipídios e se <strong>ovo aumenta o colesterol mesmo</strong>. O ovo concentra suas gorduras e o colesterol exclusivamente na gema. No entanto, o ovo apresenta um rico conteúdo de gorduras insaturadas (as chamadas "gorduras boas") e componentes antioxidantes.</p>

            {/* MICRO-OTIMIZAÇÃO (NÍVEL NINJA) */}
            <p className="bg-green-50/50 p-6 rounded-2xl border border-green-100 border-dashed text-green-950 font-medium">Se você ainda tem dúvida se comer ovo todo dia aumenta o colesterol, a resposta depende mais do seu estilo de vida e do controle de macronutrientes da sua dieta do que do ovo em si.</p>

            <p>Mesmo para pacientes com distúrbios de lipídios (como hipercolesterolemia combinada), estudos demonstraram que o consumo controlado não causa alterações desastrosas nos marcadores quando o paciente segue uma dieta baseada nas recomendações nutricionais e foca no <Link to="/blog/melhor-horario-pesagem-emagrecimento" className="text-green-600 font-semibold hover:underline">controle de peso</Link>. Além disso, a presença de antioxidantes atua como um fator protetor cardiovascular, auxiliando no equilíbrio fisiológico que o corpo necessita para se recuperar.</p>

            {/* REPETIÇÃO ESTRATÉGICA DA KEYWORD */}
            <p>Mas será que <strong className="text-slate-800 font-bold">comer ovo todo dia faz mal</strong> a longo prazo? As evidências atuais mostram o contrário, destacando o ovo como um alimento protetor e promotor de saúde quando inserido numa dieta equilibrada.</p>

            <h2 id="comer-ovo-todo-dia-faz-mal" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> Comer ovo todo dia faz mal à saúde?
            </h2>
            <p>Definitivamente, não. O renomado estudo PREDIMED, que avaliou indivíduos seguindo um estilo de dieta mediterrânea, comprovou que o consumo regular de ovos não aumenta a incidência de doenças cardiovasculares.</p>
            
            <p>Pelo contrário, se o indivíduo é praticante de atividades físicas, busca melhorar a <Link to="/blog/tudo-sobre-composicao-corporal-bioimpedancia" className="text-green-600 font-semibold hover:underline">composição corporal</Link> e possui um controle alimentar adequado de macronutrientes, a ingestão rotineira de ovos inteiros é totalmente segura. As análises clínicas mais modernas focam na dieta como um todo; o ovo, quando inserido numa matriz alimentar sem excesso de frituras ou alimentos ultraprocessados, é um excelente aliado.</p>

{/* AFILIADO MERCADO LIVRE - O PINGUS APROVA (FRIGIDEIRA SEM ÓLEO) */}
<div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
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
                Frigideira Antiaderente <span className="text-green-700">Cerâmica Premium</span>
            </h4>
            
            {/* IMAGEM DO PRODUTO ATUALIZADA */}
            <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                <img 
                    src={`${githubImgBase}Afiliado/Frigideira01.jpg`} 
                    alt="Frigideira Antiaderente de Cerâmica" 
                    className="w-full h-auto object-contain" 
                />
            </div>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                O ovo pochê ou cozido é super saudável. O problema é fritar na manteiga ou óleo todo dia. Para garantir os benefícios do ovo sem adicionar gorduras ruins à sua rotina, <strong>o ideal é uma frigideira de cerâmica de alta qualidade, onde o ovo desliza sem grudar, dispensando o uso de óleo</strong>. É praticidade e saúde na cozinha.
            </p>

            {/* BOTÃO COM LINK AFILIADO (Substituir SEU_LINK) */}
            <a 
                href="SEU_LINK_DE_AFILIADO_ML_AQUI" 
                rel="sponsored noopener noreferrer" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
            >
                <ShoppingCart size={16} />
                Comprar no Mercado Livre
            <a>
        </div>
    </div>

    {/* DISCLOSURE OBRIGATÓRIO */}
    <div className="mt-12 pt-6 border-t border-green-50 text-center">
        <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
            Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Não paga nada a mais por isso! O Pingus agradece o apoio.
        </p>
    </div>
</div>


            {/* INFORMAÇÃO SOBRE CONSUMO DIÁRIO */}
            <p className="font-semibold text-slate-800 bg-slate-100 p-6 rounded-2xl border border-slate-200">Estudos mostram que o consumo de até 2 ovos por dia, dentro de uma dieta equilibrada, não aumenta o risco cardiovascular e pode até melhorar o perfil lipídico em adultos saudáveis.</p>

            <h2 id="quantos-ovos-por-dia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Quantos ovos posso comer por dia sem risco?
            </h2>
            <p>A resposta correta sempre dependerá de uma avaliação nutricional individualizada. No entanto, intervenções científicas recentes com adultos saudáveis mostraram que a ingestão diária de <strong>1 a 3 ovos inteiros</strong> foi capaz de melhorar o perfil da partícula de LDL, aumentar a função do HDL e subir as concentrações de antioxidantes no sangue.</p>

            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-4 text-center font-black uppercase tracking-widest text-xs border-b border-slate-100 items-stretch bg-slate-50">
                <div className="p-4 text-slate-500 border-r border-slate-100 col-span-1">Nutriente</div>
                <div className="p-4 text-slate-500 border-r border-slate-100 col-span-2">Em 100g de Ovo Cru</div>
                <div className="p-4 text-slate-500 col-span-1">Em 1 Unidade (58g)</div>
              </div>

              {tabelaNutricionalOvo.map((item) => (
                <div key={item.id} className={`grid grid-cols-4 items-stretch transition-colors border-b border-slate-100 last:border-b-0 ${item.destaque ? 'bg-green-50' : 'hover:bg-slate-50'}`}>
                  <div className="p-4 border-r border-slate-100 flex items-center justify-center font-bold text-slate-800 col-span-1">
                    {item.nutriente}
                  </div>
                  <div className="p-4 border-r border-slate-100 flex items-center justify-center text-slate-600 col-span-2">
                    {item.quantidade100g}
                  </div>
                  <div className="p-4 flex items-center justify-center font-black text-green-700 col-span-1">
                    {item.quantidadeUnidade}
                  </div>
                </div>
              ))}
            </div>

            <p>O ajuste da quantidade de ovos prescrita na prática clínica leva em consideração os alvos proteicos totais do dia e a tolerância de ingestão de gorduras do paciente. Uma dica extra é sempre atentar à estocagem: mantenha os ovos sob refrigeração, pois o tempo de armazenamento em temperatura ambiente favorece a desidratação e o aumento da concentração interna de colesterol.</p>

            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 font-semibold mt-10">
                É fundamental destacar que, embora as evidências científicas gerais sejam muito positivas para o consumo de ovos, sua saúde é única. Fazer o acompanhamento com um nutricionista é crucial. Este profissional vai avaliar seus exames de sangue atuais, sua rotina de treinos, histórico familiar e objetivos para determinar a quantidade ideal de ovos e o ajuste de outras fontes de colesterol e gordura na sua dieta diária.
            </p>

            {/* VÍDEO RECOMENDADO EM DESTAQUE */}
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Palavra da Especialista: Ovo Aumenta o Colesterol?
            </h2>

            <p>Para aprofundar ainda mais o entendimento sobre o impacto do consumo de ovos na nossa saúde e desmistificar a relação com as taxas de gordura no sangue, confira esta análise detalhada com dicas e cuidados essenciais trazidos pela nutricionista Dra. Patricia Leite.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Ovo Aumenta o Colesterol? [DICAS e CUIDADOS]</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/8q_bkOUPX4Q" 
                  title="Ovo Aumenta o Colesterol? [DICAS e CUIDADOS] - Dra. Patricia Leite" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* INÍCIO DO FAQ VISUAL OTIMIZADO COM PERGUNTAS EXATAS */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Comer ovo todo dia aumenta o colesterol?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Não necessariamente. O colesterol dietético presente no ovo tem um impacto muito pequeno no colesterol sanguíneo da maioria das pessoas. Estudos mostram que o consumo adequado pode até melhorar a funcionalidade do colesterol HDL (o "bom" colesterol) e modular as partículas de LDL de forma menos prejudicial.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Quem tem colesterol alto pode comer ovo?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Sim, na maioria dos casos, desde que inserido em uma dieta baseada nas recomendações nutricionais. Estudos demonstram que o ovo melhora a funcionalidade do colesterol HDL e modula o LDL, sendo seguro quando inserido em uma matriz alimentar equilibrada.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Quantos ovos por dia faz mal à saúde?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Não há uma resposta única, mas a literatura científica aponta que a ingestão de 1 a 3 ovos inteiros por dia é totalmente segura para indivíduos saudáveis, oferecendo um aporte nutritivo denso e benefícios antioxidantes, sem malefícios ao perfil lipídico.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Ovo aumenta o LDL?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">O consumo de ovos pode aumentar levemente o colesterol LDL grandes. No entanto, essa leve alteração não aumenta o risco cardiovascular, pois essas moléculas volumosas têm dificuldade de penetrar nas artérias e causar aterosclerose.</p>
                </div>
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
