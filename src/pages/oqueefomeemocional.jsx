import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Activity, Leaf, Scale, Heart, FileText, Zap, ChevronRight, PlayCircle, Headphones, ChevronDown } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas
const datePublishedISO = "2026-03-27";
const dateModifiedISO = "2026-03-27";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminho da imagem de capa com o Pingus
const fomeEmocionalCapa = `${githubImgBase}Blog/Fome-Emocional-Pingus.jpg`;

export default function FomeEmocional() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // FAQ baseado nos seus materiais de Nutrição Comportamental
  const faqs = [
    {
      pergunta: "É normal sentir fome emocional de vez em quando?",
      resposta: "Sim, é perfeitamente normal. O comer é um ato biopsicossociocultural e a comida possui um papel afetivo e social em nossas vidas. O problema surge apenas quando a comida se torna a sua única válvula de escape para lidar com sentimentos, ignorando os sinais biológicos de saciedade."
    },
    {
      pergunta: "Como diferenciar a fome emocional da vontade de comer?",
      resposta: "A fome emocional manifesta-se como uma urgência súbita e 'sequestradora' da atenção, focada em aliviar um mal-estar. A vontade de comer (fome específica) é um desejo que pode esperar e não vem acompanhado daquela sensação de 'buraco emocional' ou urgência por alívio."
    },
    {
      pergunta: "Fazer jejum ou dietas restritivas piora a fome emocional?",
      resposta: "Com certeza. A restrição gera compulsão. Quando você se priva severamente, o cérebro aumenta o valor de recompensa dos alimentos. No momento em que o estresse aparece, o impulso de comer emocionalmente torna-se muito mais difícil de controlar devido à privação prévia."
    },
    {
      pergunta: "O que fazer no exato momento em que o impulso vem?",
      resposta: "A estratégia recomendada é a pausa consciente. Tente aguardar de 5 a 10 minutos antes de ceder ao impulso. Utilize técnicas de distração, respiração profunda ou mude de ambiente. Durante essa pausa, tente avaliar seu real nível na Escala de Fome e Saciedade."
    },
    {
      pergunta: "Como a Escala de Fome ajuda na prática?",
      resposta: "Ela traduz sensações subjetivas em números. Ajuda a identificar se você está realmente precisando de energia (nível 7 ou 8) ou se está buscando comida por hábito, tédio ou estresse (níveis de saciedade entre 1 e 4)."
    }
  ];

  // Tabela Comparativa
  const comparativoFome = [
    {
      id: 1,
      tipo: 'Fome Física',
      surgimento: 'Gradual e paciente',
      desejo: 'Qualquer alimento nutritivo',
      saciedade: 'Para ao estar satisfeito',
      posRefeicao: 'Bem-estar e energia',
      cor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      tipo: 'Fome Emocional',
      surgimento: 'Súbito e urgente',
      desejo: 'Alimentos específicos (doces/gorduras)',
      saciedade: 'Continua comendo além do limite',
      posRefeicao: 'Culpa ou arrependimento',
      cor: 'bg-slate-800',
      textColor: 'text-white'
    }
  ];

  return (
    <>
      <Helmet>
        <title>O que é Fome Emocional? Diferenças e Como Controlar | Nutrição com Marco</title>
        <meta name="description" content="Entenda o que é fome emocional, como diferenciá-la da fome física, seus principais gatilhos e estratégias práticas baseadas na Nutrição Comportamental." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O que é Fome Emocional? Como Identificar e Controlar o Impulso | Nutrição com Marco" />
        <meta property="og:image" content={fomeEmocionalCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O que é Fome Emocional? Como Identificar e Controlar o Impulso",
            "image": fomeEmocionalCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Nutrição com Marco", 
              "logo": { "@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png` }
            },
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO,
            "description": "Guia completo sobre fome emocional, comportamento alimentar e estratégias de controle."
          })}
        </script>
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          {/* TAG E DATA */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Comportamental</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que é Fome Emocional? Como Identificar e Controlar o Impulso
          </h1>

          {/* RESPOSTA DIRETA */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que é fome emocional? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A fome emocional é o impulso de utilizar a comida para aliviar sentimentos — como estresse, ansiedade ou tédio — em vez de suprir uma necessidade física de nutrientes. Ela costuma ser súbita, urgente e focada em alimentos específicos e altamente palatáveis, agindo como um mecanismo de compensação psicológica.
            </p>
          </div>

          {/* AUDIO E ÍNDICE */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Fome-Emocional.mp3" type="audio/mpeg" />
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
                  <li><a href="#biopsico" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Comer Biopsicossociocultural</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Diferenças: Física vs Emocional</a></li>
                  <li><a href="#ciclo-restricao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Ciclo da Restrição</a></li>
                  <li><a href="#escala" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Escala de Fome e Saciedade</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Palavra da Especialista</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes (FAQ)</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="biopsico" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> O Comer Biopsicossociocultural
            </h2>
            <p>Nosso relacionamento com a comida é muito mais profundo do que a simples contagem de calorias. Como explorei em meus estudos de Nutrição Comportamental, o comer é um ato <strong>biopsicossociocultural</strong>. Comemos por necessidade biológica, mas também por herança cultural, memórias de infância e conexão social. Sentir prazer ao comer é fundamental; o risco aparece quando a comida se torna o único recurso para lidar com emoções difíceis.</p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={fomeEmocionalCapa} 
                alt="Pingus mascote reflexivo diante de um pote de sorvete, ilustrando o desafio da fome emocional." 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bg-green-50 p-4 text-center">
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                  A fome emocional usa a comida como um curativo temporário para emoções, ignorando a saciedade do corpo.
                </p>
              </div>
            </div>

            <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Diferenciando Fome Física de Fome Emocional
            </h2>
            <p>A fome física é paciente e cresce aos poucos. Se você estiver com fome real, uma maçã ou um prato de feijão serão bem-vindos. Já a fome emocional é caprichosa: ela quer 'exatamente' aquele chocolate ou aquela pizza, e quer agora. Ela não aceita substitutos nutritivos e geralmente persiste mesmo após o estômago estar fisicamente cheio.</p>

            {/* TABELA COMPARATIVA */}
            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch bg-slate-50">
                <div className="p-4 border-r border-slate-100 col-span-3">Característica</div>
                <div className="p-4 border-r border-slate-100 col-span-4">Como se Manifesta</div>
                <div className="p-4 border-r border-slate-100 col-span-3">O que você busca</div>
                <div className="p-4 col-span-2">Sensação Pós</div>
              </div>

              {comparativoFome.map((fome) => (
                <div key={fome.id} className={`grid grid-cols-12 items-stretch ${fome.cor} ${fome.textColor} border-b border-slate-100 last:border-b-0`}>
                  <div className="p-4 border-r border-white/20 flex flex-col justify-center items-center text-center col-span-3">
                    <span className="font-black text-lg italic uppercase">{fome.tipo}</span>
                  </div>
                  <div className="p-4 border-r border-white/20 flex flex-col justify-center gap-1 col-span-4 text-sm font-bold">
                    {fome.surgimento}
                  </div>
                  <div className="p-4 border-r border-white/20 flex flex-col justify-center items-center text-center col-span-3 font-black text-base">
                    {fome.desejo}
                  </div>
                  <div className="p-4 flex flex-col justify-center items-center text-center col-span-2 text-[10px] font-bold uppercase">
                    {fome.posRefeicao}
                  </div>
                </div>
              ))}
            </div>

            <h2 id="ciclo-restricao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> O Perigoso Ciclo: Restrição gera Compulsão
            </h2>
            <p>Um dos maiores erros no tratamento da fome emocional é tentar resolvê-la com mais restrição. Quando você proíbe um alimento, o seu cérebro automaticamente aumenta o valor de recompensa dele. O resultado? No primeiro momento de estresse, a sua barreira mental cai e você come em excesso, gerando um ciclo de culpa que alimenta novamente a fome emocional.</p>
            
            <p className="font-semibold text-slate-800 bg-slate-100 p-6 rounded-2xl border border-slate-200 text-center italic text-xl my-8">
              "O desafio não é parar de sentir, mas aprender a acolher suas emoções sem que a comida precise ser o seu único curativo disponível."
            </p>

            <h2 id="escala" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Ferramenta: Escala de Fome e Saciedade
            </h2>
            <p>Para retomar o controle, utilize a Escala de Fome (1 a 10) antes de cada refeição. Isso ajuda a trazer consciência ao ato de comer:</p>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 marker:text-green-600">
              <p className="m-0"><strong>• Nível 1 a 3 (Empanturrado):</strong> Você já está muito cheio. Comer aqui é puramente por impulso emocional.</p>
              <p className="m-0"><strong>• Nível 5 (Neutro):</strong> Nem fome, nem cheio. Cuidado com o comer por tédio.</p>
              <p className="m-0"><strong>• Nível 7 a 8 (Fome Ideal):</strong> O corpo sinaliza necessidade real de energia. É o momento certo para começar a comer.</p>
              <p className="m-0"><strong>• Nível 10 (Fome Voraz):</strong> Irritabilidade extrema. Aqui as chances de escolhas impulsivas e descontrole são máximas.</p>
            </div>

{/* TABELA ROBUSTA - DIÁRIO DA FOME OTIMIZADA PARA DESKTOP */}
            <h2 id="exercicio" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Exercício Prático: Conectando com a Escala Biológica
            </h2>
            <p>
              Para colocar a teoria em prática e quebrar o ciclo da fome emocional, apresento a ferramenta mais poderosa no controle do comportamento alimentar: a <strong>Escala de Fome e Saciedade Biológica</strong>. Este exercício ajuda você a reconectar-se com os sinais reais que o seu corpo envia, que muitas vezes são ignorados pelos impulsos emocionais. O segredo não é ter força de vontade, mas sim autopercepção.
            </p>
            <p className="font-semibold text-slate-700 bg-slate-100 p-6 rounded-2xl border border-slate-200 mt-6 mb-10">
              <strong>Como usar:</strong> Antes e depois de cada refeição, consulte esta tabela e avalie: <em>"Onde meu corpo está agora?"</em>. O objetivo é tentar se manter na <strong>"Zona de Conforto"</strong> (níveis 3 a 6), evitando chegar nos extremos de fome ou de plenitude física dolorosa.
            </p>

            <div className="my-10 bg-white border border-slate-100 shadow-xl rounded-[2.5rem] overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-4 md:p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 text-center w-[12%]">Nível</th>
                    <th className="p-4 md:p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-[23%]">Classificação</th>
                    <th className="p-4 md:p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-[45%]">Sinais Físicos (O que sente)</th>
                    <th className="p-4 md:p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 text-center w-[20%]">Ação Sugerida</th>
                  </tr>
                </thead>
                <tbody className="text-base font-medium">
                  {/* FOME VORAZ */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 text-center font-black text-xl text-red-600 bg-red-50/30">1 - 2</td>
                    <td className="p-4 md:p-5 font-bold text-red-700 uppercase tracking-wide text-sm">Fome Voraz / Dolorosa</td>
                    <td className="p-4 md:p-5 text-slate-600 text-sm space-y-1">
                      <p>• Tontura forte, dor de cabeça súbita ou visão turva.</p>
                      <p>• Estômago dolorido, contraindo-se ("nó no estômago").</p>
                      <p>• Náusea de jejum, irritabilidade extrema ("hangry").</p>
                    </td>
                    <td className="p-4 md:p-5 text-center"><span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-[10px] font-black uppercase whitespace-nowrap">Perigo de Compulsão</span></td>
                  </tr>
                  
                  {/* MOMENTO IDEAL */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 text-center font-black text-xl text-green-600 bg-green-50/50">3 - 4</td>
                    <td className="p-4 md:p-5 font-bold text-green-700 uppercase tracking-wide text-sm">Hora Ideal de Comer</td>
                    <td className="p-4 md:p-5 text-slate-600 text-sm space-y-1">
                      <p>• Estômago vazio, sensação de "buraco".</p>
                      <p>• Barulhos leves e constantes no estômago.</p>
                      <p>• Pensamento persistente focado em comida.</p>
                      <p>• Leve queda na energia geral.</p>
                    </td>
                    <td className="p-4 md:p-5 text-center"><span className="bg-green-600 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase whitespace-nowrap">Momento Ideal</span></td>
                  </tr>
                  
                  {/* NEUTRO */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 text-center font-black text-xl text-slate-400 bg-slate-50/50">5</td>
                    <td className="p-4 md:p-5 font-bold text-slate-500 uppercase tracking-wide text-sm">Zona Neutra</td>
                    <td className="p-4 md:p-5 text-slate-600 text-sm space-y-1 italic">
                      <p>• Ausência total de sinais físicos.</p>
                      <p>• Sem fome e sem saciedade.</p>
                      <p>• Sensação de conforto pleno.</p>
                    </td>
                    <td className="p-4 md:p-5 text-center text-slate-400 font-bold italic text-sm">Sinal de Alerta</td>
                  </tr>
                  
                  {/* SATISFEITO */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 text-center font-black text-xl text-green-600 bg-green-50/50">6</td>
                    <td className="p-4 md:p-5 font-bold text-green-700 uppercase tracking-wide text-sm">Satisfeito</td>
                    <td className="p-4 md:p-5 text-slate-600 text-sm space-y-1">
                      <p>• Sensação de leveza e bem-estar.</p>
                      <p>• Estômago confortavelmente preenchido.</p>
                      <p>• Satisfação e felicidade com a refeição.</p>
                      <p>• O pensamento em comida desaparece.</p>
                    </td>
                    <td className="p-4 md:p-5 text-center"><span className="bg-green-600 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase whitespace-nowrap">Hora de Parar</span></td>
                  </tr>
                  
                  {/* EXCESSO */}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 text-center font-black text-xl text-orange-600 bg-orange-50/30">7 - 8</td>
                    <td className="p-4 md:p-5 font-bold text-orange-700 uppercase tracking-wide text-sm">Passou um Pouquinho</td>
                    <td className="p-4 md:p-5 text-slate-600 text-sm space-y-1">
                      <p>• Estômago pesado e estufado.</p>
                      <p>• Início de desconforto respiratório suave.</p>
                      <p>• Leve sonolência após a refeição.</p>
                    </td>
                    <td className="p-4 md:p-5 text-center"><span className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-[10px] font-black uppercase whitespace-nowrap">Atenção</span></td>
                  </tr>
                  
                  {/* PASSANDO MAL */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 text-center font-black text-xl text-red-600 bg-red-50/30">9 - 10</td>
                    <td className="p-4 md:p-5 font-bold text-red-700 uppercase tracking-wide text-sm">Empanturrado / Mal</td>
                    <td className="p-4 md:p-5 text-slate-600 text-sm space-y-1">
                      <p>• Náusea forte e sono avassalador.</p>
                      <p>• Dor de estômago intensa por excesso.</p>
                      <p>• Sensação de estar 'prestes a estourar'.</p>
                      <p>• Dificuldade real em se mover.</p>
                    </td>
                    <td className="p-4 md:p-5 text-center"><span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-[10px] font-black uppercase whitespace-nowrap">Desconforto Real</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

<h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Palavra do Especialista: Paulo Muzy
            </h2>
            <p>Entender o comportamento alimentar é o primeiro passo para uma vida mais equilibrada. Confira essa explicação essencial sobre por que fazemos o que fazemos com a comida, assista o vídeo do Dr. Paulo Muzy.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Por que comemos nossas emoções?</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/awWmS1XlvjE" 
                  title="Vídeo Nutrição Comportamental - Paulo Muzy" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
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

        {/* AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando você a construir uma relação mais leve e sem radicalismos com a comida.
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
