import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import YouTubeLazy from '../components/YouTubeLazy';
import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import {
  ChevronLeft, ChevronRight, Activity, HelpCircle, FileText,
  Zap, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, AlertTriangle, Brain, Salad, Users, ListChecks,
  Scale, Phone, Stethoscope, Baby
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const dateModifiedISO = "2026-09-16";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const capaArtigo = `${githubImgBase}Blog/CompulsaoAlimentar_Capa.webp`;

// 🌡️ Termômetro do Comer: as 3 opções e suas respostas instantâneas
const termometroOpcoes = [
  {
    id: 'fisica',
    cor: 'green',
    emoji: '🟢',
    rotulo: 'Fome Física',
    frase: '"Sinto meu estômago roncar e preciso de energia."',
    resposta: 'Sinal verde! Seu corpo só precisa de combustível. Escolha uma refeição nutritiva e equilibrada para se alimentar com presença.'
  },
  {
    id: 'emocional',
    cor: 'yellow',
    emoji: '🟡',
    rotulo: 'Fome Emocional',
    frase: '"Estou estressado(a) ou ansioso(a) e quero o conforto de uma comida específica."',
    resposta: "Acolha o que está sentindo. Experimente beber um copo d'água, respirar fundo por 1 minuto e pausar antes de abrir a geladeira. O alimento não vai resolver a emoção."
  },
  {
    id: 'compulsao',
    cor: 'red',
    emoji: '🔴',
    rotulo: 'Episódio de Compulsão',
    frase: '"Sinto uma urgência incontrolável de comer rápido e muito, sem conseguir parar."',
    resposta: null
  }
];

function TermometroDoComer() {
  const [escolha, setEscolha] = useState(null);
  const opcaoEscolhida = termometroOpcoes.find((o) => o.id === escolha);

  return (
    <div className="not-prose my-12 bg-slate-900 border border-slate-700 shadow-2xl rounded-[2.5rem] overflow-hidden p-6 md:p-10">
      <div className="flex items-center gap-3 mb-2">
        <Activity className="text-green-400 shrink-0" size={26} />
        <h3 className="text-lg md:text-xl font-black text-white italic m-0">Termômetro do Comer: O Que Te Trouxe Aqui Hoje?</h3>
      </div>
      <p className="text-slate-300 text-sm mb-6">Escolha a opção que melhor descreve seu estado atual agora, com apenas um clique:</p>

      <div className="grid grid-cols-1 gap-3">
        {termometroOpcoes.map((op) => (
          <button
            key={op.id}
            onClick={() => setEscolha(op.id)}
            aria-label={`Selecionar: ${op.rotulo}`}
            aria-pressed={escolha === op.id}
            className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-colors cursor-pointer flex items-start gap-3 ${escolha === op.id ? 'bg-green-950/60 border-green-500' : 'bg-slate-800 border-slate-700 hover:border-green-500'}`}
          >
            <span className="text-xl shrink-0" aria-hidden="true">{op.emoji}</span>
            <span className="flex flex-col">
              <span className="text-slate-100 font-black text-xs uppercase tracking-wide mb-1">{op.rotulo}</span>
              <span className="text-slate-300 text-sm md:text-base font-medium">{op.frase}</span>
            </span>
          </button>
        ))}
      </div>

      {opcaoEscolhida && opcaoEscolhida.id !== 'compulsao' && (
        <div className="mt-6 p-6 bg-green-50 rounded-2xl border border-green-200" aria-live="polite">
          <p className="text-slate-700 text-sm md:text-base leading-relaxed m-0">{opcaoEscolhida.resposta}</p>
        </div>
      )}

      {opcaoEscolhida && opcaoEscolhida.id === 'compulsao' && (
        <div className="mt-6 p-6 bg-red-50 rounded-2xl border-2 border-red-200" aria-live="polite">
          <p className="text-red-900 text-sm md:text-base leading-relaxed font-medium mb-4 m-0">
            Você não está sozinho(a), e isso não é falta de força de vontade. Se estiver passando por um momento de crise, dor emocional ou culpa intensa, busque acolhimento gratuito e imediato:
          </p>
          <a
            href="tel:188"
            aria-label="Ligar agora para o CVV, número 188"
            className="mt-4 flex items-center gap-3 bg-red-600 text-white p-4 rounded-2xl font-black uppercase text-xs md:text-sm shadow-lg hover:bg-red-700 transition-colors no-underline"
          >
            <Phone size={20} className="shrink-0" /> Ligue 188 (CVV) — Apoio emocional 24h, gratuito e anônimo
          </a>
          <p className="text-red-800 text-xs md:text-sm mt-4 mb-0">
            Busque também a Unidade Básica de Saúde (UBS) ou o Centro de Atenção Psicossocial (CAPS) mais próximo para atendimento gratuito com psicólogos e nutricionistas.
          </p>
        </div>
      )}
    </div>
  );
}

// 🌡️ Escala da Fome (0 a 10): ferramenta do e-book "Entre a Fome e a Saciedade"
function EscalaDaFome() {
  const [nivel, setNivel] = useState(5);

  const rotulo = (n) => {
    if (n <= 1) return 'Sem fome nenhuma — saciedade total.';
    if (n <= 3) return 'Fome bem leve, quase imperceptível.';
    if (n <= 5) return 'Fome moderada, começando a aparecer.';
    if (n <= 7) return 'Fome clara — bom momento para comer.';
    if (n <= 9) return 'Fome forte, já incomodando.';
    return 'Fome extrema — urgência de comer.';
  };

  const dica = (n) => {
    if (n >= 6 && n <= 7) return 'Essa é a faixa ideal para começar a comer, segundo o e-book: nem cedo demais, nem tarde demais.';
    if (n >= 8) return 'Cuidado: quando a fome se aproxima de 10, o desconforto e a urgência costumam levar a escolhas mais impulsivas e rápidas.';
    return 'Ainda não é urgente — vale observar como essa sensação evolui até você decidir comer.';
  };

  return (
    <div className="not-prose my-8 bg-white border-2 border-green-100 rounded-[2rem] p-6 md:p-8 shadow-sm">
      <h4 className="text-sm md:text-base font-black text-slate-800 uppercase italic mb-1">Escala da Fome: Onde Você Está Agora?</h4>
      <p className="text-slate-500 text-xs md:text-sm mb-6">Ferramenta do e-book "Entre a Fome e a Saciedade" — arraste para marcar seu nível de fome de 0 (saciedade total) a 10 (fome extrema).</p>

      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={nivel}
        onChange={(e) => setNivel(Number(e.target.value))}
        aria-label="Escala da fome, de 0 a 10"
        className="w-full h-3 rounded-full appearance-none cursor-pointer accent-green-700"
        style={{ background: 'linear-gradient(to right, #ef4444, #f97316, #eab308, #4ade80, #16a34a)' }}
      />
      <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-2 mb-4">
        <span>Sem fome</span>
        <span>Com fome</span>
      </div>

      <div className="bg-green-50 p-4 md:p-5 rounded-2xl border border-green-100 text-center" aria-live="polite">
        <span className="block text-2xl font-black text-green-700 mb-1">{nivel}</span>
        <span className="block text-slate-800 font-bold text-sm mb-2">{rotulo(nivel)}</span>
        <span className="block text-slate-600 text-xs md:text-sm">{dica(nivel)}</span>
      </div>
    </div>
  );
}

export default function OQueECompulsaoAlimentar() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "O que caracteriza o Transtorno da Compulsão Alimentar (TCA) segundo o DSM-5?",
      resposta: "O TCA é caracterizado por episódios recorrentes em que a pessoa consome grandes quantidades de alimento em um curto período, acompanhados por uma clara sensação de perda de controle. Diferente de outros transtornos, como a bulimia, não há o uso regular de métodos compensatórios (como purgações ou jejuns severos), mas há a presença de intenso sofrimento emocional e culpa após as refeições."
    },
    {
      pergunta: "Por que as dietas restritivas são contraindicadas no tratamento?",
      resposta: "Dietas rígidas e a proibição severa de grupos alimentares atuam como gatilhos para novos episódios compulsivos. A privação contínua gera uma vulnerabilidade biológica e psicológica que culmina no descontrole. A Nutrição Comportamental busca o oposto: reeducação alimentar, flexibilidade e o resgate dos sinais naturais de fome e saciedade."
    },
    {
      pergunta: "Como a dinâmica familiar influencia na compulsão alimentar infantil?",
      resposta: "Na infância, o alimento costuma ser usado para regular emoções imaturas (ansiedade, tristeza ou estresse). Práticas parentais coercitivas, como utilizar a comida como recompensa ou punição e impor restrições extremas, desregulam a percepção fisiológica de fome da criança, provocando um \"efeito rebote\" que aumenta a urgência e o desejo pelos alimentos proibidos."
    },
    {
      pergunta: "Qual é o tratamento recomendado e como acessá-lo na rede pública?",
      resposta: "O tratamento eficaz exige uma abordagem multiprofissional integrada, combinando a Terapia Cognitivo-Comportamental (TCC) e a Nutrição Comportamental. No Brasil, o atendimento gratuito e especializado pode ser acessado no SUS via Unidades Básicas de Saúde (UBS) e Centros de Atenção Psicossocial (CAPS), além do suporte emocional imediato oferecido pelo Centro de Valorização da Vida (CVV - 188)."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        {/* Botão Dinâmico */}
        <button
          onClick={() => state?.fromBlog ? navigate(-1) : navigate('/blog')}
          className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-600 hover:text-green-700 transition-colors w-fit bg-transparent border-none cursor-pointer p-0"
          aria-label="Voltar para a página anterior"
        >
          <ChevronLeft size={20} /> Voltar para o Blog
        </button>

        <article className="prose prose-lg max-w-none text-left">

          {/* Categoria e Data */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Comportamental</span>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que É Compulsão Alimentar? Sintomas, Causas e Tratamento
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: O Que É Compulsão Alimentar
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              Compulsão alimentar é um transtorno psiquiátrico e comportamental caracterizado por episódios recorrentes em que a pessoa come uma quantidade de comida muito maior do que a maioria faria em até duas horas, com uma nítida sensação de perda de controle sobre o ato de comer. Ela pode aparecer como sintoma da bulimia nervosa ou como diagnóstico próprio, o Transtorno da Compulsão Alimentar Periódica (TCAP) — e vai muito além de "falta de força de vontade".
            </p>
          </div>

          {/* 🎧 PLAYER DE ÁUDIO */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-green-700 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic uppercase tracking-widest m-0">Ouça este artigo</h3>
              </div>
              <audio preload="none" controls className="w-full h-10 outline-none" aria-label="Áudio do artigo completo">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Compulsao_Alimentar.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
            <div className="h-px bg-green-100/60 w-full"></div>

            {/* 📑 ÍNDICE */}
            <nav className="bg-slate-50">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group cursor-pointer border-none bg-transparent"
                aria-expanded={isTocOpen}
                aria-label="Abrir Índice do Conteúdo"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-700 text-white' : 'bg-white text-slate-500 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-700' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#o-que-e" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Stethoscope size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Que É Compulsão Alimentar</a></li>
                  <li><a href="#bulimia-x-tcap" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Bulimia x TCAP</a></li>
                  <li><a href="#ansiedade-sono" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ansiedade e Sono</a></li>
                  <li><a href="#tratamento" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tratamento (TCC)</a></li>
                  <li><a href="#nutricao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Salad size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Papel da Nutrição</a></li>
                  <li><a href="#infantil" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Baby size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Compulsão Infantil</a></li>
                  <li><a href="#pilares" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><ListChecks size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Os 3 Pilares</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                <source media="(max-width: 480px)" srcSet={`${capaArtigo}?w=400&strip=all&quality=70`} />
                <source media="(max-width: 768px)" srcSet={`${capaArtigo}?w=600&strip=all&quality=70`} />
                <source media="(max-width: 1024px)" srcSet={`${capaArtigo}?w=800&strip=all&quality=85`} />
                <ImagemOtimizada
                  src={`${capaArtigo}?w=1280&strip=all&quality=85`}
                  alt="Pinguim Píngus, em estilo Disney Pixar 3D, sentado de forma acolhedora ao lado de uma xícara de chá quente, com um olhar gentil e compreensivo, em um ambiente aconchegante e sem julgamento."
                  title="O Que É Compulsão Alimentar e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                  width="1280"
                  height="720"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                Compulsão alimentar não é falta de força de vontade — é uma condição real, e existe ajuda.
              </p>
            </figcaption>
          </figure>

          <TermometroDoComer />
          <EscalaDaFome />

          {/* DESTAQUE E-BOOK: ENTRE A FOME E A SACIEDADE */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 group">
            <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={`${githubImgBase}capa_fome.webp`}
                alt="Capa do E-book Entre a Fome e a Saciedade"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mx-auto md:mx-0 mb-4">
                Material de Apoio Gratuito
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic leading-tight mb-3">
                E-book: Entre a Fome e a Saciedade
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                Quer se aprofundar na diferença entre fome física e fome emocional? Baixe gratuitamente o e-book completo, com a Escala da Fome, a Escala da Saciedade e um diário prático para você reconhecer os sinais reais do seu corpo, longe da mentalidade de dieta.
              </p>
              <a
                href="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                aria-label="Baixar o e-book Entre a Fome e a Saciedade em PDF"
              >
                <FileText size={18} />
                Baixar E-book Grátis
              </a>
            </div>
          </div>

          {/* INTRODUÇÃO */}
          <p className="mb-4">
            <strong>O que é compulsão alimentar?</strong> É um transtorno psiquiátrico e comportamental definido por episódios recorrentes nos quais a pessoa consome uma quantidade de alimentos significativamente maior do que a maioria consumiria em um período delimitado de tempo, geralmente em um intervalo de até duas horas. O elemento central desse quadro não está apenas no volume exagerado de comida, mas sobretudo na nítida sensação de perda de controle sobre o próprio ato de comer, em que a pessoa sente que não consegue parar nem administrar o que ou o quanto está ingerindo.
          </p>

          <h2 id="o-que-e" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Stethoscope className="text-green-700" /> O Que É Compulsão Alimentar, Afinal?
          </h2>
          <p className="mb-4">
            Diferente do prazer e da sociabilidade comumente associados às refeições, a ingestão compulsiva costuma ocorrer sem que haja fome física real, sendo frequentemente realizada de maneira rápida e isolada — em grande parte pelo constrangimento e vergonha que a própria pessoa sente diante do seu comportamento. Nesses momentos, o alimento passa a funcionar como um mecanismo paliativo e inadequado para aliviar "dores" emocionais, ansiedade ou vazios internos. O alívio, porém, é temporário e logo cede espaço a intensos sentimentos de culpa, repulsa por si mesmo, tristeza e angústia.
          </p>
          <p className="mb-4">
            Sob a perspectiva científica e clínica, o quadro pode se apresentar de formas distintas: como um sintoma marcante da bulimia nervosa, ou como um diagnóstico autônomo, o Transtorno da Compulsão Alimentar Periódica (TCAP).
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Importante:</strong> por envolver uma complexa rede de fatores biológicos, impulsivos, emocionais e socioculturais, a compulsão alimentar vai muito além da falta de força de vontade. O tratamento exige uma abordagem multidisciplinar integrada, unindo acompanhamento psicológico ou psiquiátrico com reeducação nutricional, para restabelecer uma relação saudável com a alimentação.</p>
          </div>

          <h2 id="bulimia-x-tcap" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Scale className="text-green-700" /> Bulimia Nervosa x TCAP: Qual a Diferença
          </h2>
          <p className="mb-6">
            Os dois quadros compartilham o mesmo núcleo — episódios de compulsão com perda de controle — mas se diferenciam por um detalhe clinicamente decisivo: o que acontece depois do episódio.
          </p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/3">Critério</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-1/3">Bulimia Nervosa</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-1/3">TCAP</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Episódio de compulsão</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Presente, com perda de controle.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Presente, com perda de controle.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Comportamento compensatório</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Sim — vômito induzido, laxantes/diuréticos, jejum prolongado ou exercício exagerado.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Não há uso recorrente de métodos compensatórios.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Medo de ganhar peso</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Intenso, central ao quadro, junto de forte insatisfação corporal.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Pode estar presente, mas não direciona um ciclo de purgação.</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Consequência física comum</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Grande desgaste físico e emocional do ciclo compulsão-purgação.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Associação frequente com sobrepeso, obesidade e complicações metabólicas.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE DA TABELA */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { car: "Episódio de compulsão", bul: "Presente, com perda de controle.", tcap: "Presente, com perda de controle." },
              { car: "Comportamento compensatório", bul: "Sim — vômito induzido, laxantes/diuréticos, jejum prolongado ou exercício exagerado.", tcap: "Não há uso recorrente de métodos compensatórios." },
              { car: "Medo de ganhar peso", bul: "Intenso, central ao quadro, junto de forte insatisfação corporal.", tcap: "Pode estar presente, mas não direciona um ciclo de purgação." },
              { car: "Consequência física comum", bul: "Grande desgaste físico e emocional do ciclo compulsão-purgação.", tcap: "Associação frequente com sobrepeso, obesidade e complicações metabólicas." },
            ].map((item) => (
              <div key={item.car} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 font-black text-slate-800 italic text-sm">{item.car}</div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-red-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Bulimia Nervosa</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.bul}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-green-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">TCAP</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.tcap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-4">
            Esse ciclo de compulsão seguido de purgação, na bulimia, gera um grande desgaste físico e emocional, mantendo a pessoa presa a um sentimento constante de culpa e vergonha. Já no TCAP, como consequência direta da ausência de comportamentos purgativos, o transtorno está frequentemente associado ao sobrepeso e à obesidade, além de trazer um sofrimento psíquico significativo, marcado por repulsa, depressão e angústia após a alimentação.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Dado real:</strong> segundo o levantamento norte-americano <em>National Comorbidity Survey Replication</em>, a prevalência do TCAP ao longo da vida é de cerca de 3,5% entre mulheres e 2% entre homens — o que o torna mais comum do que a bulimia nervosa (1%) e a anorexia nervosa (0,6%) somadas, segundo dados do National Institute of Mental Health (NIMH) dos EUA.</p>
          </div>

          <h2 id="ansiedade-sono" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Brain className="text-green-700" /> Compulsão Alimentar e a Ansiedade
          </h2>
          <p className="mb-4">
            A ansiedade e a compulsão alimentar estão intimamente conectadas por uma dinâmica em que o alimento passa a ser utilizado como um recurso para lidar com o desconforto emocional. Em momentos de tensão, estresse ou inquietação, a ingestão de comida — especialmente de itens mais calóricos — surge como uma tentativa de alívio rápido. Essa busca por conforto, porém, costuma resultar em episódios de descontrole, nos quais grandes quantidades de alimentos são consumidas em pouco tempo, seguidas por sentimentos de culpa e frustração que acabam alimentando ainda mais o estado de ansiedade.
          </p>
          <p className="mb-4">
            Esse ciclo é frequentemente agravado por problemas no sono. Quando a noite de descanso é ruim ou insuficiente, o organismo sofre alterações que desregulam os sinais de fome e saciedade, além de reduzir a capacidade de gerenciar impulsos ao longo do dia. A fadiga decorrente de noites mal dormidas diminui a resistência ao estresse, tornando a pessoa mais suscetível a buscar refúgio na comida — o que reforça a importância de cuidar também de <Link to="/como-dormir-rapido" className="text-green-700 font-bold underline">como dormir melhor</Link> como parte do tratamento.
          </p>

          <h2 id="tratamento" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> O Tratamento Mais Recomendado
          </h2>
          <p className="mb-4">
            O tratamento psicológico, especialmente por meio da Terapia Cognitivo-Comportamental (TCC), é essencial para tratar o Transtorno de Compulsão Alimentar. Como a comida costuma ser usada para aliviar emoções negativas, gerando um ciclo vicioso de descontrole, culpa e frustração, a terapia atua na raiz do problema ao ensinar o paciente a reconhecer e lidar com essas emoções de forma saudável.
          </p>
          <p className="mb-4">
            Através da reestruturação de pensamentos disfuncionais, do treino de regulação emocional e de práticas de atenção plena (mindfulness), a pessoa aprende a identificar seus sinais reais de fome e saciedade. Ao afastar restrições alimentares severas que funcionam como gatilhos, o processo terapêutico restaura uma relação equilibrada com a comida e fortalece a autonomia emocional.
          </p>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Psiquiatra Explica: Como Saber Se Você Tem Compulsão Alimentar</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="-YyeXTS1c8s" title="Eu tenho compulsão alimentar? Psiquiatra Maria Fernanda explica" />
            </div>
            <p className="text-xs text-slate-500 italic mt-4 mb-0">*Se você se identificar com os sintomas descritos, é de extrema importância procurar ajuda profissional.</p>
          </div>

          <h2 id="nutricao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Salad className="text-green-700" /> Compulsão Alimentar e a Nutrição
          </h2>
          <p className="mb-4">
            A nutrição no tratamento do transtorno de compulsão alimentar não passa por dietas rígidas — pois a restrição severa costuma funcionar como gatilho para novos episódios de descontrole, seguidos por culpa e frustração. O foco da intervenção nutricional está no resgate de uma relação equilibrada com a comida por meio da <Link to="/o-que-e-reeducacao-alimentar" className="text-green-700 font-bold underline">reeducação alimentar</Link> e da abordagem comportamental.
          </p>
          <p className="mb-4">
            Desse modo, o nutricionista auxilia o paciente a identificar e respeitar os sinais fisiológicos naturais de <Link to="/o-que-e-fome-emocional" className="text-green-700 font-bold underline">fome e saciedade</Link>, que frequentemente se encontram desregulados. Ao eliminar a divisão simplista entre alimentos "permitidos" e "proibidos", a conduta promove flexibilidade nas refeições e autonomia nas escolhas diárias — o mesmo mecanismo que, em contextos de restrição extrema, costuma desencadear o <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold underline">efeito sanfona</Link>.
          </p>
          <p className="mb-4">
            Assim, o acompanhamento nutricional atua em harmonia com a saúde mental, reduzindo a ansiedade associada ao ato de comer e priorizando a promoção do bem-estar físico em detrimento do emagrecimento acelerado ou de metas estéticas inflexíveis. Entender o papel dos <Link to="/hormonios_da_fome_emagrecimento" className="text-green-700 font-bold underline">hormônios da fome</Link> ajuda o paciente a compreender que grande parte do descontrole tem uma base fisiológica real, não é "falha de caráter".
          </p>

          <h2 id="infantil" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Baby className="text-green-700" /> Compulsão Alimentar Infantil
          </h2>
          <p className="mb-4">
            A compulsão alimentar na infância ocorre quando a criança consome grandes volumes de comida sem controle, usando o alimento para lidar com emoções desconfortáveis como ansiedade, tristeza e estresse. Esse comportamento está fortemente ligado à dinâmica familiar: o uso de comida como recompensa ou punição e a restrição alimentar rígida desregulam a percepção natural de fome e aumentam o desejo pelos itens proibidos.
          </p>
          <p className="mb-4">
            O tratamento exige uma abordagem multiprofissional com foco na reeducação emocional e na orientação dos pais, em vez de dietas restritivas. Ao transformar o ambiente familiar em um espaço acolhedor e seguro — os mesmos princípios discutidos em <Link to="/alimentacao-saudavel-das-criancas" className="text-green-700 font-bold underline">alimentação saudável das crianças</Link> — é possível restabelecer uma relação saudável com a comida e evitar complicações no desenvolvimento da criança.
          </p>

          <h2 id="pilares" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <ListChecks className="text-green-700" /> Os 3 Pilares do Enfrentamento da Compulsão Alimentar
          </h2>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/5">Pilar</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-2/5">Foco Principal</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-blue-700 bg-blue-50/50 w-2/5">Estratégia Prática</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">1. Manejo Emocional e Psicológico</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Romper o ciclo de uso do alimento como alívio de sentimentos desconfortáveis (ansiedade, tristeza, estresse).</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Terapia Cognitivo-Comportamental (TCC): reestruturação de pensamentos disfuncionais, regulação afetiva e práticas de mindfulness (comer consciente).</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">2. Nutrição Comportamental</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Restaurar os sinais biológicos naturais de fome e saciedade sem impor restrições severas.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Reeducação alimentar flexível: eliminação da divisão entre alimentos "permitidos" e "proibidos", focando na autonomia e no fim das dietas rígidas (gatilhos).</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">3. Ambiente Familiar e Suporte</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Construir uma rede de proteção e reeducação de hábitos desde a infância até a fase adulta.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Acolhimento e rede pública: práticas parentais acolhedoras no ambiente doméstico e acesso gratuito ao tratamento multidisciplinar via SUS (UBS/CAPS) e emergencial (CVV 188).</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE DA TABELA DE PILARES */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { pilar: "1. Manejo Emocional e Psicológico", foco: "Romper o ciclo de uso do alimento como alívio de sentimentos desconfortáveis (ansiedade, tristeza, estresse).", estrategia: "Terapia Cognitivo-Comportamental (TCC): reestruturação de pensamentos disfuncionais, regulação afetiva e mindfulness (comer consciente)." },
              { pilar: "2. Nutrição Comportamental", foco: "Restaurar os sinais biológicos naturais de fome e saciedade sem impor restrições severas.", estrategia: "Reeducação alimentar flexível: fim da divisão entre alimentos \"permitidos\" e \"proibidos\", focando na autonomia e no fim das dietas rígidas (gatilhos)." },
              { pilar: "3. Ambiente Familiar e Suporte", foco: "Construir uma rede de proteção e reeducação de hábitos desde a infância até a fase adulta.", estrategia: "Acolhimento e rede pública: práticas parentais acolhedoras e acesso gratuito ao tratamento via SUS (UBS/CAPS) e emergencial (CVV 188)." },
            ].map((item) => (
              <div key={item.pilar} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 font-black text-slate-800 italic text-sm">{item.pilar}</div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-green-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Foco Principal</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.foco}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-blue-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Estratégia Prática</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.estrategia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PINGUS APROVA */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>O Pingus Aprova!</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para o artigo sobre Compulsão Alimentar" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Ebook Receitas <span className="text-green-700">Saudáveis e Nutritivas</span>
                </h3>
                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Reconstruir uma relação tranquila com a comida também passa pela cozinha. O nosso <strong>Ebook de Receitas Saudáveis e Nutritivas</strong> traz opções práticas e sem culpa, pensadas para apoiar — nunca restringir — a sua rotina alimentar.
                </p>
                <Link to="/ebook-receitas" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Conhecer o Ebook de Receitas Saudáveis e Nutritivas">
                  <ShoppingCart size={16} />
                  Conheça o Ebook de Receitas Agora
                </Link>
              </div>
            </div>
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão
          </h2>
          <p className="mb-4">
            A compulsão alimentar não é uma questão de disciplina — é uma condição real, com raízes biológicas, emocionais e socioculturais, que exige compreensão em vez de julgamento. Reconhecer os sinais, entender a diferença entre bulimia nervosa e TCAP, e saber que o caminho passa pela Terapia Cognitivo-Comportamental junto da Nutrição Comportamental (nunca por dietas restritivas) já é um primeiro passo importante. E, sobretudo, saber que ajuda gratuita existe e está a uma ligação de distância.
          </p>

          {/* FAQ */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Compulsão Alimentar (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    aria-expanded={openFaqIndex === index}
                    aria-label={`Abrir resposta para: ${faq.pergunta}`}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group bg-transparent border-none cursor-pointer"
                  >
                    <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>
                      {faq.pergunta}
                    </h3>
                    <ChevronDown className={`text-slate-500 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[2000px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                    <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🚀 E-E-A-T (FONTES CIENTÍFICAS E AVISO LEGAL) */}
          <div className="my-12 p-6 bg-slate-100 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Científicas Sobre Compulsão Alimentar</h3>
            <ul className="text-xs text-slate-600 leading-relaxed m-0 list-disc pl-4 space-y-3">
              <li><a href="https://books.google.com.br/books?id=QL4rDAAAQBAJ" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">AMERICAN PSYCHIATRIC ASSOCIATION (APA). <em>Manual diagnóstico e estatístico de transtornos mentais: DSM-5.</em> 5. ed. Porto Alegre: Artmed, 2014.</a></li>
              <li><a href="https://periodicorease.pro.br/rease/article/view/14760" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">SANTOS, Eduarda de Oliveira; OLIVEIRA, Izabela Ribeiro; FONSECA, Lays Aparecida. <em>Técnicas da Terapia Cognitivo-Comportamental aplicada para o tratamento do Transtorno de Compulsão Alimentar: revisão nacional.</em> Revista Ibero-Americana de Humanidades, Ciências e Educação (REASE), v. 10, n. 6, p. 2888-2898, 2024.</a></li>
              <li><a href="https://www.scielo.br/j/rpc/a/Mbjb77bcDLvBc4HPNgkT7Yn/?lang=pt" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">AZEVEDO, Alexandre Pinto de; SANTOS, Cimâni Cristina dos; FONSECA, Dulcineia Cardoso da. <em>Transtorno da compulsão alimentar periódica.</em> Archives of Clinical Psychiatry (São Paulo), v. 31, n. 4, p. 170-172, 2004.</a></li>
              <li><a href="https://www.scielo.br/j/rpc/a/bPfnNKhn5PKQGkfGJd3cmwx/?lang=pt" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">CORDÁS, Táki Athanássios. <em>Transtornos alimentares: classificação e diagnóstico.</em> Archives of Clinical Psychiatry (São Paulo), v. 31, n. 4, p. 154-157, 2004.</a></li>
              <li><a href="https://www.scielo.br/j/reeusp/a/VbCfRCz8XWkBF7bTnXhS44G/?lang=pt" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">FUSCO, Suzimar de Fátima Benato et al. <em>Ansiedade, qualidade do sono e compulsão alimentar em adultos com sobrepeso ou obesidade.</em> Revista da Escola de Enfermagem da USP, v. 54, e03656, 2020.</a></li>
              <li><a href="https://www.fafica.br/revista/index.php/interciencia/article/view/302" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">SANTOS, Maria Eduarda de Oliveira et al. <em>A importância da conduta nutricional no tratamento da compulsão alimentar.</em> Revista Interdisciplinar de Ciências Médicas e da Saúde - Interciência, v. 7, n. 1, p. 1-10, 2023.</a></li>
              <li><a href="https://doi.org/10.1016/j.biopsych.2006.03.040" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">HUDSON, J. I.; HIRIPI, E.; POPE JR., H. G.; KESSLER, R. C. <em>The Prevalence and Correlates of Eating Disorders in the National Comorbidity Survey Replication.</em> Biological Psychiatry, v. 61, n. 3, p. 348-358, 2007.</a></li>
              <li><a href="https://www.nimh.nih.gov/health/statistics/eating-disorders" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline inline-block py-1">NATIONAL INSTITUTE OF MENTAL HEALTH (NIMH). <em>Eating Disorders — Statistics.</em> Acesso em: set. 2026.</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-600">Aviso: Este conteúdo tem fim meramente educativo e informativo e não substitui a avaliação, o diagnóstico e o acompanhamento de um psicólogo, psiquiatra, nutricionista ou outro profissional de saúde qualificado. Em caso de crise emocional, ligue 188 (CVV), gratuito e 24h.</span>
            </div>
          </div>

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* 💳 CARTÃO AUTOR (E-E-A-T) */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <ImagemOtimizada
              src={`${githubImgBase}Eu_1.webp`}
              alt="Marco Aurélio Jr. - Avaliador Antropométrico ISAK 1"
              title="Marco Aurélio Jr. - Estudante de Nutrição"
              className="w-full h-full object-cover"
              priority="low"
              width="96"
              height="96"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição Clínica • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Especialista em composição corporal e avaliação física, dedicado a traduzir evidência científica em conteúdo acessível para quem busca uma relação real e sustentável com a comida — sem julgamento e sem modismos.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-800 transition-all italic">
              Siga @nutricao_com_marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
