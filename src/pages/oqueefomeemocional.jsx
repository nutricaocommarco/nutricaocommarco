import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Activity, Leaf, Scale, Heart, FileText, Zap, ChevronRight, PlayCircle, Headphones, ChevronDown } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas para o Schema e para o visual
const datePublishedISO = "2026-03-27";
const dateModifiedISO = "2026-03-27";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminhos das imagens
const fomeEmocionalCapa = `${githubImgBase}Blog/Fome-Emocional-Capa.jpg`;

export default function FomeEmocional() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Array de dados para o FAQ
  const faqs = [
    {
      pergunta: "É normal sentir fome emocional de vez em quando?",
      resposta: "Sim, é perfeitamente normal. A comida também tem um papel afetivo e cultural nas nossas vidas, como comer um bolo para celebrar ou um chocolate após um dia exaustivo. O problema não é o episódio isolado, mas sim quando a comida se torna a sua única válvula de escape para lidar com emoções negativas."
    },
    {
      pergunta: "Como diferenciar a fome emocional da vontade de comer?",
      resposta: "A fome emocional vem como uma urgência, quase como um 'sequestro' da atenção, e geralmente é focada em aliviar um sentimento. A vontade de comer (ou fome específica) é o desejo genuíno por um alimento, mas que pode esperar. Você tem vontade de um sorvete, mas se não comer agora, não há ansiedade."
    },
    {
      pergunta: "Fazer jejum ou dietas restritivas piora a fome emocional?",
      resposta: "Sim. A mentalidade de dieta e a restrição severa aumentam a obsessão por comida. Quando você proíbe um alimento, o cérebro aumenta o valor de recompensa dele. Ao se sentir estressado, a chance de ter um episódio de comer emocional exagerado com o alimento proibido é muito maior."
    },
    {
      pergunta: "O que fazer no exato momento em que o impulso vem?",
      resposta: "A melhor estratégia inicial é a pausa. Quando sentir a urgência, espere de 5 a 10 minutos. Beba água, mude de ambiente ou anote o que está sentindo. Se após esse tempo decidir comer, faça isso sentando-se à mesa, sem distrações e mastigando devagar."
    },
    {
      pergunta: "Nutricionista pode ajudar a tratar a fome emocional?",
      resposta: "Com certeza, especialmente profissionais com abordagem em Nutrição Comportamental. O nutricionista ajuda a identificar gatilhos, trabalhar a Escala de Fome e Saciedade e desconstruir o medo dos alimentos. Em casos profundos, o acompanhamento com psicólogo é o ideal."
    }
  ];

  // Array de dados para a Tabela Comparativa
  const comparativoFome = [
    {
      id: 1,
      tipo: 'Fome Física',
      subtitulo: 'Necessidade Fisiológica',
      surgimento: 'Gradual / Crescente',
      desejo: 'Qualquer alimento',
      saciedade: 'Para ao estar satisfeito',
      posRefeicao: 'Sensação de Bem-Estar',
      cor: 'bg-blue-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      tipo: 'Fome Emocional',
      subtitulo: 'Busca por Alívio',
      surgimento: 'Súbito / Urgente',
      desejo: 'Específicos / Palatáveis',
      saciedade: 'Continua comendo',
      posRefeicao: 'Culpa ou Arrependimento',
      cor: 'bg-orange-600',
      textColor: 'text-white'
    }
  ];

  return (
    <>
      <Helmet>
        <title>O que é Fome Emocional? Diferenças, Sintomas e Controle | Nutrição com Marco</title>
        <meta name="description" content="Entenda de uma vez por todas o que é fome emocional, como diferenciá-la da fome física, seus principais gatilhos e estratégias práticas para lidar com o impulso." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O que é Fome Emocional? Como Identificar e Controlar o Impulso | Nutrição com Marco" />
        <meta property="og:description" content="Guia prático sobre fome emocional: aprenda a identificar os gatilhos emocionais, usar a escala da fome e quebrar o ciclo de restrição e culpa." />
        <meta property="og:image" content={fomeEmocionalCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O que é Fome Emocional? Como Identificar e Controlar o Impulso",
            "image": fomeEmocionalCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição Comportamental", "Comer Intuitivo", "Fome Emocional", "Composição Corporal"]
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
            "description": "Entenda de uma vez por todas o que é fome emocional, como diferenciá-la da fome física e estratégias práticas para lidar com o impulso."
          })}
        </script>

        {/* SCHEMA.ORG 2: FAQ PAGE */}
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

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Comportamental</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que é Fome Emocional? Como Identificar e Controlar o Impulso
          </h1>

          <div className="my-10 p-6 md:p-8 bg-orange-50 rounded-3xl border border-orange-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-orange-800 uppercase italic m-0 border-b border-orange-200 pb-3">
                O que é fome emocional? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-orange-950 font-medium leading-relaxed">
                A fome emocional é o impulso de usar a comida como uma ferramenta para lidar com sentimentos, e não para satisfazer uma necessidade física de nutrientes. Ela costuma surgir de forma repentina e urgente, direcionada a alimentos específicos, atuando como um mecanismo de alívio rápido para emoções como estresse, ansiedade, tristeza ou tédio.
            </p>
          </div>

          <div className="my-8 border border-slate-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-orange-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Fome-Emocional.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <div className="h-px bg-slate-200 w-full"></div>

            <nav className="bg-slate-50">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-orange-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">
                    Índice do Conteúdo
                  </h3>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-orange-600' : ''}`} 
                />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-slate-200' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li>
                    <a href="#introducao" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <Heart size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Emoções e Alimentação
                    </a>
                  </li>
                  <li>
                    <a href="#diferencas" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Física vs Emocional
                    </a>
                  </li>
                  <li>
                    <a href="#gatilhos" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Os Principais Gatilhos
                    </a>
                  </li>
                  <li>
                    <a href="#ciclo" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Ciclo da Restrição e Culpa
                    </a>
                  </li>
                  <li>
                    <a href="#estrategias" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <Leaf size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Estratégias Práticas
                    </a>
                  </li>
                  <li>
                    <a href="#video-especialista" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <PlayCircle size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Palavra do Especialista
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-orange-600 transition-all font-bold text-base m-0">
                      <HelpCircle size={16} className="text-slate-300 group-hover:text-orange-500 shrink-0" />
                      Perguntas Frequentes (FAQ)
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="introducao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-slate-100 pb-2 flex items-center gap-3">
              <Heart className="text-orange-600"/> A Linha Tênue entre as Emoções e a Alimentação
            </h2>
            <p>O nosso relacionamento com a comida é complexo e multifacetado. Ele é moldado por uma combinação de fatores fisiológicos, emocionais e culturais[cite: 20]. Sentir prazer comendo é absolutamente normal. Comemos porque gostamos, porque o ato de comer nos traz satisfação e memórias afetivas profundas[cite: 49, 87].</p>
            <p>O problema não está em buscar conforto em um prato de comida ocasionalmente. O verdadeiro obstáculo surge quando a comida se torna a <em>única</em> ferramenta disponível na nossa caixa de recursos para lidar com as adversidades, frustrações e emoções diárias.</p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={fomeEmocionalCapa} 
                alt="Pinguim mascote reflexivo segurando um doce, ilustrando o conflito gerado pelos impulsos da fome emocional e ansiedade." 
                title="Fome Emocional e a Relação com a Comida"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bg-orange-50 p-4 text-center">
                <p className="text-xs text-orange-700 font-bold uppercase tracking-widest text-center">
                  A fome emocional usa a comida como um curativo rápido para emoções difíceis, ignorando os sinais reais do corpo.
                </p>
              </div>
            </div>

            <h2 id="diferencas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-slate-100 pb-2 flex items-center gap-3">
              <Scale className="text-orange-600"/> Como saber se é fome de verdade ou apenas emoção?
            </h2>
            <p>A fome física aumenta com o passar do tempo e é acompanhada de sinais claros, como o ronco do estômago e uma sensação de vazio[cite: 93, 94]. Ela não desaparece enquanto não comemos algo, e após satisfazê-la com qualquer tipo de refeição, sentimos um estado de bem-estar[cite: 95].</p>
            <p>A fome emocional, por outro lado, é mais insidiosa. Ela surge em resposta a emoções negativas ou a situações de estresse e busca na comida um alívio imediato[cite: 96]. E, ao contrário da fome física, a fome emocional tende a desaparecer com o tempo ou pode ser substituída por outras atividades que desviem nossa atenção[cite: 102].</p>

            {/* TABELA COMPARATIVA */}
            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch">
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-3">Sinal</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-4">Como Surge & Desejo</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-3">Saciedade</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 col-span-2">Pós-Refeição</div>
              </div>

              {comparativoFome.map((fome) => (
                <div key={fome.id} className={`grid grid-cols-12 items-stretch ${fome.cor === 'bg-orange-600' ? 'bg-orange-600 text-white' : 'bg-blue-600 text-white' } transition-colors border-b border-slate-100 last:border-b-0`}>
                  <div className="p-4 border-r border-slate-100/30 flex flex-col justify-center items-center text-center col-span-3">
                    <span className="font-black text-lg lg:text-xl italic uppercase text-white leading-tight">{fome.tipo}</span>
                    <span className="block text-[11px] font-bold mt-1 text-slate-200 leading-tight">({fome.subtitulo})</span>
                  </div>
                  <div className="p-4 border-r border-slate-100/30 flex flex-col justify-center gap-1 col-span-4">
                    <span className="text-sm lg:text-base font-bold leading-tight text-slate-100">{fome.surgimento}</span>
                    <span className="text-xs font-medium text-slate-200">{fome.desejo}</span>
                  </div>
                  <div className="p-4 border-r border-slate-100/30 flex flex-col justify-center items-center text-center col-span-3">
                    <span className="font-black text-base lg:text-lg text-white">{fome.saciedade}</span>
                  </div>
                  <div className="p-4 flex flex-col justify-center items-center text-center col-span-2">
                    <span className="text-[10px] lg:text-[11px] font-bold text-slate-100 leading-tight">{fome.posRefeicao}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CARDS COMPARATIVOS (MOBILE) */}
            <div className="space-y-6 md:hidden my-10">
              {comparativoFome.map((fome) => (
                <div key={fome.id} className={`${fome.cor} ${fome.textColor} p-6 rounded-3xl shadow-lg border border-opacity-20`}>
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100/20 pb-3 gap-3">
                    <div className="flex flex-col">
                      <span className="font-black text-xl italic uppercase">{fome.tipo}</span>
                      <span className="text-xs font-bold text-slate-200">({fome.subtitulo})</span>
                    </div>
                  </div>
                  <div className="space-y-3 font-medium text-sm">
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Surgimento:</span> <span className="text-right">{fome.surgimento}</span></p>
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Desejo:</span> <span className="text-right">{fome.desejo}</span></p>
                    <p className="flex justify-between items-center gap-3"><span className="font-bold opacity-80">Saciedade:</span> <span className="font-black text-white text-right">{fome.saciedade}</span></p>
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Sensação Pós:</span> <span className="text-right text-xs font-bold text-slate-200">{fome.posRefeicao}</span></p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="gatilhos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-slate-100 pb-2 flex items-center gap-3">
              <Zap className="text-orange-600"/> Os Principais Gatilhos: Por que comemos nossas emoções?
            </h2>
            <p>Quando estamos ansiosos, buscamos constantemente formas de aliviar essa sensação desconfortável. A comida, especialmente alimentos doces ou gordurosos, se torna um atalho fácil e prazeroso[cite: 101]. Depois de um dia estressante no trabalho, é comum recorrermos a esses alimentos calóricos para tentar compensar o mal-estar diário[cite: 97].</p>
            <p>Além da ansiedade e do estresse, outro gatilho gigantesco é o tédio. Muitas vezes comemos simplesmente para "fazer alguma coisa", buscando estímulo dopaminérgico em um ambiente monótono[cite: 743].</p>

            <h2 id="ciclo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-slate-100 pb-2 flex items-center gap-3">
              <Activity className="text-orange-600"/> O Perigoso Ciclo da Restrição e do Comer Emocional
            </h2>
            <p>Existe um conceito na Nutrição Comportamental fundamental para entender as compulsões: <strong>a restrição gera compulsão</strong>. A restrição alimentar pode acionar uma defesa natural do organismo[cite: 279, 280]. Quando o corpo é privado de nutrientes, ele entra em um estado de alerta[cite: 281].</p>
            <p>Além do lado físico, há o impacto psicológico. Quando as pessoas se submetem a dietas rigorosas, muitas vezes experimentam a sensação de privação, levando a um desejo intenso por alimentos que foram considerados "proibidos"[cite: 284, 285, 286].</p>

            <p className="font-semibold text-slate-800 bg-slate-100 p-6 rounded-2xl border border-slate-200 text-center italic text-xl my-8">
              "O desafio não é parar de sentir, mas aprender a acolher suas emoções sem precisar que a comida seja o único curativo disponível. A mudança começa na conscientização, não na restrição."
            </p>

            <p>É comum que, ao comer por emoções e quebrar essas regras rígidas, acabemos exagerando na quantidade, o que nos leva à compulsão alimentar e, eventualmente, à culpa e a sentimentos de fracasso[cite: 103, 104, 105, 290].</p>

            <h2 id="estrategias" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-slate-100 pb-2 flex items-center gap-3">
              <Leaf className="text-orange-600"/> Estratégias Comportamentais para Controlar o Impulso
            </h2>

            <div className="flex flex-col gap-6 my-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">1</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Utilize a Escala de Fome e Saciedade</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Utilize uma escala de 0 a 10 para avaliar o nível de fome que você sente antes de comer, onde 0 representa saciedade total e 10 representa uma fome intensa[cite: 433]. O ideal é comer quando a fome atingir entre 6 e 7, evitando o nível 10 onde o desespero causa escolhas impulsivas[cite: 467].</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">2</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">A Pausa Estratégica (Distração ou Conforto)</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Identificou que a fome é emocional? Busque estratégias de <strong>Distração</strong> (sair da cozinha, manter as mãos ocupadas, ler, fazer exercícios) [cite: 756, 759] ou de <strong>Conforto</strong> (relaxar, respirar profundamente, desligar os eletrônicos, conversar com alguém)[cite: 758, 760].</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">3</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Permissão Incondicional para Comer</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Não proíba alimentos. Comer sob controle significa adotar um ritmo mais lento e comer sem julgamentos ou culpa, pois esses pensamentos distorcem nossa percepção natural de saciedade[cite: 393, 405, 406].</p>
                </div>
              </div>
            </div>

            <h2 id="video-especialista" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-slate-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-orange-600"/> Palavra do Especialista: Entendendo o Comportamento
            </h2>

            <p>Para se aprofundar ainda mais, recomendo assistir a esse vídeo fantástico sobre como o nosso cérebro funciona diante dos desejos e restrições. Compreender os próprios mecanismos é o primeiro passo para o Comer Intuitivo.</p>

            <div className="my-10 p-6 md:p-10 bg-orange-50 rounded-[3.5rem] border border-orange-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">A Ciência por trás da Fome Emocional</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                {/* Substitua o ID 'YOUR_VIDEO_ID' pelo código do vídeo desejado do YouTube */}
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="Vídeo Explicativo sobre Nutrição Comportamental" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-orange-600" /> Perguntas Frequentes (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-orange-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-orange-600' : 'text-slate-800 group-hover:text-orange-600'}`}>
                        {faq.pergunta}
                      </h3>
                      <ChevronDown
                        className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-orange-600' : ''}`}
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
                      <p className="text-slate-600 m-0 leading-relaxed border-t border-orange-100/60 pt-4">
                        {faq.resposta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Newsletter />
          </div>
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-orange-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-orange-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr. - Autor do Artigo." 
              title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador Antropométrico ISAK Nível 1."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Conteúdo escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-orange-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela ciência da nutrição, Marco dedica seus estudos a compreender a fisiologia e o comportamento humano de forma aprofundada. Especialista em composição corporal com certificação internacional, ele foca em traduzir o rigor dos artigos científicos para a prática do dia a dia. Seu objetivo é ajudar você a entender como o próprio corpo funciona através da educação nutricional baseada em evidências reais, sem radicalismos.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-orange-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
