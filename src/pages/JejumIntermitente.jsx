import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Clock, Shield, 
  Zap, ChevronRight, Headphones, ChevronDown, ShoppingCart, 
  Target, Flame, Coffee, Dumbbell, Brain, Check, X, AlertTriangle, Video, PlayCircle, Calculator, CheckCircle2
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-07-14";
const dateModifiedISO = "2026-07-14";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const artigoCapa = `${githubImgBase}Blog/JejumIntermitente_Capa.jpg`; 

export default function JejumIntermitente() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // ESTADOS DA CALCULADORA DE JEJUM
  const [ultimaRefeicao, setUltimaRefeicao] = useState('20:00');
  const [protocolo, setProtocolo] = useState('16');
  const [resultadoJejum, setResultadoJejum] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // LÓGICA DA CALCULADORA DE JEJUM
  const calcularJanela = (e) => {
    e.preventDefault();
    if (!ultimaRefeicao) return;

    const [horas, minutos] = ultimaRefeicao.split(':').map(Number);
    const horasJejum = parseInt(protocolo, 10);

    let novaHora = horas + horasJejum;
    let diasPassados = Math.floor(novaHora / 24);
    novaHora = novaHora % 24;

    const horaFormatada = novaHora.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0');
    
    let diaTexto = diasPassados === 0 ? "de hoje" : diasPassados === 1 ? "do dia seguinte" : "daqui a dois dias";

    setResultadoJejum({
      horaExata: horaFormatada,
      dia: diaTexto,
      horasJejum: horasJejum
    });
  };
  
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
      pergunta: "O que é jejum intermitente relacionado à Autofagia?",
      resposta: "Sim, o jejum prolongado estimula um processo celular chamado autofagia, que funciona como uma espécie de reciclagem biológica, onde as células limpam e degradam proteínas velhas ou danificadas para otimizar o funcionamento do organismo."
    },
    {
      pergunta: "Sinto muita dor de cabeça nos primeiros dias, isso é normal?",
      resposta: "Sim, nos primeiros dias é comum sentir uma leve dor de cabeça devido à rápida eliminação de água e eletrólitos (como sódio e potássio) provocada pela queda da insulina. Manter uma hidratação constante ao longo do dia costuma resolver o problema rapidamente."
    }
  ];

  // Palavras-chave ricas focadas
  const keywords = "o que é jejum intermitente, como fazer jejum intermitente, jejum 16h, benefícios do jejum intermitente, jejum emagrece mais que dieta, jejum intermitente e musculação, autofagia, corpos cetônicos, dieta cetogênica, calculadora de jejum intermitente, café quebra jejum, água quebra jejum, sintomas do jejum, metabolismo e jejum";

  return (
    <>
      <Helmet>
        {/* FOCO TOTAL NA PALAVRA-CHAVE PRINCIPAL */}
        <title>O Que é Jejum Intermitente? Guia Definitivo e Científico</title>
        <meta name="description" content="Descubra o que é jejum intermitente, como essa estratégia afeta o seu metabolismo na queima de gordura e como organizar a sua janela de alimentação." />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.nutricaocommarco.com.br${pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que é Jejum Intermitente? Guia Definitivo e Científico" />
        <meta property="og:description" content="Entenda de uma vez por todas o que é jejum intermitente, como organizar os seus horários e os mitos sobre café e musculação na prática." />
        <meta property="og:image" content={artigoCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.nutricaocommarco.com.br${pathname}`
            },   
            "headline": "O Que é Jejum Intermitente? Guia Definitivo e Científico",
            "image": [artigoCapa],
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição"
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
            "description": "Descubra o que é jejum intermitente, como afeta o metabolismo, e se emagrece mais que a dieta."
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
            O Que é Jejum Intermitente? Guia Definitivo
          </h1>
          
          <div className="mb-10 p-6 md:p-10 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-6 text-left">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
                <Target className="text-green-600 shrink-0" /> Resposta Direta: O que é Jejum Intermitente?
              </h2>
              <p className="mt-4 text-lg md:text-xl text-green-950 font-medium leading-relaxed m-0">
                Saber <strong>o que é jejum intermitente</strong> muda o foco do seu prato para o seu relógio. O jejum intermitente não é uma dieta com restrição de alimentos, mas sim um estilo de organização de horários onde você alterna períodos de alimentação com períodos de privação calórica total. Entender o que é jejum intermitente ajuda a reduzir os níveis de insulina, esgotando estoques de açúcar e quebrando ativamente as reservas para diminuir o seu <Link to="/percentual-gordura-feminino-ideal" className="text-green-700 font-bold hover:underline">percentual de gordura</Link>.
              </p>
            </div>
          </div>

          <p className="text-xl text-slate-600 font-medium mb-10 border-l-4 border-green-600 pl-4">
            Se você quer entender o que é jejum intermitente sem complicações, veio ao lugar certo. Essa estratégia virou uma febre no mundo do emagrecimento, mas muita gente ainda se confunde. Saber o que é jejum intermitente é focar em <strong>quando você come</strong>, alinhando o seu dia ao seu <Link to="/o-que-e-ciclo-circadiano" className="text-green-600 font-bold hover:underline">ciclo circadiano</Link>. 
          </p>

          <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
            <img 
              src={artigoCapa} 
              alt="Descubra o que é Jejum Intermitente, como essa estratégia metabólica funciona na prática e seus benefícios para a saúde." 
              title="O que é Jejum Intermitente"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
            />
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-sm md:text-base text-slate-600 font-medium italic m-0">
                Entender o que é jejum intermitente e como organizar sua janela de alimentação é o primeiro passo para o sucesso.
              </p>
            </figcaption>
          </figure>

          {/* ÁUDIO */}
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

          <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Clock className="text-green-600"/> A História: O que é Jejum Intermitente na Origem?
          </h2>
          <p>
            Antes de se perguntar o que é jejum intermitente nos dias de hoje, saiba que o ato de jejuar já fazia parte da humanidade. Longe de ser apenas uma moda, o jejum intermitente tem raízes profundas na nossa evolução e na religião.
          </p>
          <p>
            Praticamente todas as grandes tradições utilizam a privação de alimentos para conexão mental. Um dos relatos sobre o que é jejum intermitente na antiguidade é o de Moisés, e também o Ramadã, provando que o jejum intermitente acompanha o ser humano.
          </p>

          <h2 id="como-funciona" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Activity className="text-green-600"/> O que é Jejum Intermitente na Prática?
          </h2>
          <p>
            Para aplicar a resposta sobre o que é jejum intermitente, o modelo mais conhecido é o de <strong>16 por 8</strong>. Nele, você concentra as suas refeições em uma janela de 8 horas e fica as outras 16 horas sem comer. Compreender o que é jejum intermitente é entender esse relógio.
          </p>
          <p>
            Quando você fica horas sem comer durante o jejum intermitente, o seu corpo ativa um botão de sobrevivência. Os níveis de insulina caem, forçando o fígado a gastar estoques de energia e quebrar a gordura, algo semelhante ao que ocorre em uma <Link to="/o-que-e-dieta-cetogenica" className="text-green-600 font-bold hover:underline">dieta cetogênica</Link>.
          </p>

          <h2 id="cronograma" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Target className="text-green-600"/> O que é Jejum Intermitente Fase a Fase
          </h2>
          <p className="mb-6">
            Para ajudar a visualizar o que é jejum intermitente e as fases que o metabolismo atravessa, veja abaixo o que acontece no organismo sem o consumo de alimentos:
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

          {/* CALCULADORA DE JANELA DE JEJUM */}
          <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Calculator className="text-green-600"/> Calcule o que é Jejum Intermitente para Você
          </h2>
          <p className="mb-6">
            Usar uma calculadora para o jejum intermitente facilita demais a rotina. Insira o horário que você terminou a sua última refeição para descobrir quando voltar a comer.
          </p>
          <div className="my-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-slate-900 p-6 md:p-8 text-center">
                  <h3 className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0">
                      <Calculator className="text-green-500" /> Calculadora de Jejum
                  </h3>
              </div>
              <div className="p-6 md:p-10">
                  <form onSubmit={calcularJanela} className="flex flex-col md:flex-row gap-6 items-center justify-center">
                      <div className="w-full md:w-1/3">
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 text-center">Última Refeição</label>
                          <input
                              type="time"
                              value={ultimaRefeicao}
                              onChange={(e) => setUltimaRefeicao(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xl font-black rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-4 text-center outline-none transition-all shadow-inner cursor-pointer"
                              required
                          />
                      </div>
                      <div className="w-full md:w-1/3">
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 text-center">Protocolo</label>
                          <select
                              value={protocolo}
                              onChange={(e) => setProtocolo(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xl font-black rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-4 text-center outline-none transition-all shadow-inner cursor-pointer"
                          >
                              <option value="12">12 Horas</option>
                              <option value="14">14 Horas</option>
                              <option value="16">16 Horas (Clássico)</option>
                              <option value="18">18 Horas</option>
                              <option value="20">20 Horas</option>
                              <option value="24">24 Horas</option>
                          </select>
                      </div>
                      <div className="w-full md:w-1/3 flex items-end">
                          <button
                              type="submit"
                              className="w-full bg-green-600 text-white h-[60px] rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg hover:bg-green-700 hover:-translate-y-1 transition-all duration-300"
                          >
                              Calcular Horário
                          </button>
                      </div>
                  </form>

                  {resultadoJejum && (
                      <div className="mt-10 p-6 md:p-8 rounded-[2rem] border-2 bg-green-50 border-green-200 flex flex-col items-center text-center transition-all duration-500">
                          <span className="text-xs font-black uppercase tracking-widest mb-2 text-green-800">Você deve quebrar o jejum às:</span>
                          <span className="text-5xl md:text-6xl font-black italic mb-2 text-green-600 drop-shadow-sm">
                              {resultadoJejum.horaExata}
                          </span>
                          <span className="text-sm font-black uppercase tracking-widest text-green-700 mb-6 bg-green-100/50 px-4 py-1 rounded-full">
                              {resultadoJejum.dia}
                          </span>
                      </div>
                  )}
              </div>
          </div> 
          
          <h2 id="mrbeast" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Video className="text-green-600"/> O Que é Jejum Intermitente Extremo: A Experiência Real
          </h2>
          <p className="mb-6">
            Para sair da teoria médica sobre o que é jejum intermitente, o fenômeno <strong>MrBeast</strong> documentou o seu desafio de passar 14 dias em jejum consecutivo. O vídeo ilustra perfeitamente a barreira mental do jejum intermitente.
          </p>
          
          <div className="my-10 p-6 md:p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-slate-800">
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-xl shrink-0 bg-black border-4 border-slate-700 relative">
                  <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Kq3dcD3Hnik"
                      title="I Didn't Eat Food For 14 Days"
                      frameBorder="0"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
              </div>
              <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black text-white italic uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
                      <PlayCircle className="text-green-500" /> Além do Limite do Jejum Intermitente
                  </h3>
              </div>
          </div>

          <h2 id="beneficios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Shield className="text-green-600"/> O que é Jejum Intermitente para a Ciência
          </h2>
          <p>
            A ciência mostra que praticar o jejum intermitente ajuda a melhorar a sensibilidade à insulina. Ao perguntar o que é jejum intermitente para a longevidade, ele atua no combate à <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-bold hover:underline">inflamação invisível</Link>.
          </p>
          <p>
            Isso significa que o jejum intermitente funciona muito bem, mas o segredo real não é mágica, e sim constância.
          </p>

          <h2 id="emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Flame className="text-green-600"/> O Jejum Intermitente emagrece mais que a dieta?
          </h2>
          <p>
            A resposta é não. O jejum intermitente ajuda a emagrecer porque encurta o tempo para comer, gerando déficit calórico. Aprender o que é jejum intermitente (veja a nossa <Link to="/calculadora-de-gasto-calorico" className="text-green-600 font-bold hover:underline">calculadora de gasto calórico</Link>) revela que a matemática básica manda.
          </p>

          <h2 id="cafe" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Coffee className="text-green-600"/> O que é Jejum Intermitente com Café?
          </h2>
          <p>
            O café preto puro e sem açúcar não quebra o jejum intermitente metabólico. Como não tem calorias, o corpo continua no jejum intermitente queimando gordura.
          </p>

          <h2 id="o-que-quebra" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <AlertTriangle className="text-green-600"/> O que quebra o Jejum Intermitente?
          </h2>
          
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
                  <td className="p-5 text-xs">Essencial para a hidratação no jejum intermitente.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-800">Café e Chás Puros</td>
                  <td className="p-5 font-bold text-green-600 flex items-center gap-2"><Check size={16}/> Liberado</td>
                  <td className="p-5 text-xs">Aceleram o metabolismo e mantêm o jejum intermitente.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-slate-800">Whey Protein / BCAA</td>
                  <td className="p-5 font-bold text-red-600 flex items-center gap-2"><X size={16}/> Quebra o Jejum</td>
                  <td className="p-5 text-xs">Interrompem o jejum intermitente imediatamente.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                  <Zap size={14} className="fill-white" />
                  <span>O Pingus Aprova!</span>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                      <img src={`${githubImgBase}logoN_pingus.png`} alt="Selo de Qualidade" className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                      <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                          Garrafa Térmica <span className="text-green-700">para Jejum Intermitente</span>
                      </h4>

                      <div className="w-full max-w-[180px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-200 aspect-[3/4]">
                          <img 
                            src={`${githubImgBase}Afiliado/Garrafa.jpg`} 
                            alt="Garrafa Térmica para Jejum Intermitente" 
                            className="w-full h-full object-cover" 
                          />
                      </div>

                      <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                          Beber água gelada ajuda muito nas horas finais do jejum intermitente. Mantém a água geladíssima durante toda a sua janela de jejum intermitente!
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
          </div>

          <h2 id="musculacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Dumbbell className="text-green-600"/> O que é Jejum Intermitente na Musculação?
          </h2>
          <p>
            Dá sim para usar o jejum intermitente. Treinar musculação em jejum intermitente faz o corpo usar a gordura. O ideal para quem pratica jejum intermitente e musculação é planejar a primeira refeição para logo após o treino.
          </p>

          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-600" /> FAQ: O que é Jejum Intermitente?
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
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Descomplico a ciência sobre o que é jejum intermitente e emagrecimento.
            </p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
