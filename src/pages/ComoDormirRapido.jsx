import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  ChevronLeft, HelpCircle, Activity, FileText,
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, AlertTriangle, Moon, Wind, Dumbbell, Music, Salad, Brain
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas E-E-A-T
const datePublishedISO = "2026-09-01";
const dateModifiedISO = "2026-09-01";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const capaArtigo = `${githubImgBase}Blog/ComoDormirRapido_Capa.webp`;

export default function ComoDormirRapido() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🌙 Questionário: Pontuação do Sono
  const perguntasSono = [
    { id: 'telas', pergunta: 'Quantos minutos antes de dormir você larga as telas (celular, TV, computador)?', opcoes: [
      { texto: 'Uso até a hora de dormir', pontos: 0 },
      { texto: 'Entre 10 e 20 minutos antes', pontos: 1 },
      { texto: '30 minutos ou mais antes', pontos: 2 },
    ]},
    { id: 'ambiente', pergunta: 'Como está o seu quarto à noite?', opcoes: [
      { texto: 'Claro, barulhento ou quente', pontos: 0 },
      { texto: 'Razoavelmente escuro e ameno', pontos: 1 },
      { texto: 'Escuro, silencioso e fresco (18°C–21°C)', pontos: 2 },
    ]},
    { id: 'cafeina', pergunta: 'Até que horas você consome cafeína (café, energético, refrigerante)?', opcoes: [
      { texto: 'Sem horário fixo, às vezes à noite', pontos: 0 },
      { texto: 'Paro no fim da tarde', pontos: 1 },
      { texto: 'Paro até as 14h', pontos: 2 },
    ]},
    { id: 'exercicio', pergunta: 'Quando você pratica atividade física?', opcoes: [
      { texto: 'Não pratico com regularidade', pontos: 0 },
      { texto: 'Treino perto da hora de dormir', pontos: 1 },
      { texto: 'Treino com pelo menos 4h de intervalo até deitar', pontos: 2 },
    ]},
    { id: 'insonia', pergunta: 'O que você faz quando não consegue dormir em 20 minutos?', opcoes: [
      { texto: 'Fico na cama tentando forçar ou mexendo no celular', pontos: 0 },
      { texto: 'Às vezes levanto, às vezes insisto na cama', pontos: 1 },
      { texto: 'Levanto e faço algo calmo, sem tela, até sentir sono', pontos: 2 },
    ]},
    { id: 'relaxamento', pergunta: 'Você usa alguma técnica de relaxamento antes de dormir (respiração, relaxamento muscular)?', opcoes: [
      { texto: 'Nunca', pontos: 0 },
      { texto: 'Às vezes', pontos: 1 },
      { texto: 'Sempre ou quase sempre', pontos: 2 },
    ]},
  ];

  const [respostasSono, setRespostasSono] = useState({});
  const [mostrarResultadoSono, setMostrarResultadoSono] = useState(false);

  const responderSono = (perguntaId, opcaoIndex) => {
    setRespostasSono(prev => ({ ...prev, [perguntaId]: opcaoIndex }));
    setMostrarResultadoSono(false);
  };

  const todasRespondidas = perguntasSono.every(p => respostasSono[p.id] !== undefined);
  const pontuacaoSono = perguntasSono.reduce((total, p) => {
    const idx = respostasSono[p.id];
    return total + (idx !== undefined ? p.opcoes[idx].pontos : 0);
  }, 0);

  const getResultadoSono = (score) => {
    if (score <= 4) return {
      titulo: 'Sua Rotina de Sono Precisa de Ajustes',
      cor: 'red',
      texto: 'Vários hábitos importantes ainda não fazem parte da sua rotina noturna, o que provavelmente está atrasando o seu sono.',
      dicas: [
        'Comece pelo básico: desligue as telas 30 minutos antes de deitar — a luz azul bloqueia a produção de melatonina.',
        'Ajuste a temperatura do quarto para entre 18°C e 21°C e deixe o ambiente o mais escuro possível.',
        'Experimente a respiração 4-7-8 assim que deitar: inspire em 4 segundos, segure por 7, solte em 8. Repita 4 vezes.'
      ]
    };
    if (score <= 8) return {
      titulo: 'Você Está no Caminho Certo',
      cor: 'orange',
      texto: 'Você já tem bons hábitos de sono, mas ainda dá para ganhar consistência em alguns pontos.',
      dicas: [
        'Fixe um horário-limite para cafeína (café, energético, refrigerante) e para o treino, e mantenha todos os dias.',
        'Se ainda se vira na cama, aplique a Regra dos 20 Minutos: levante e volte só quando sentir sono de verdade.',
        'Escolha uma técnica de relaxamento (respiração 4-7-8 ou relaxamento muscular progressivo) e repita todas as noites, não só quando lembrar.'
      ]
    };
    return {
      titulo: 'Sono Otimizado',
      cor: 'green',
      texto: 'Sua rotina está bem alinhada com o que a ciência recomenda para dormir rápido.',
      dicas: [
        'Mantenha a consistência dos horários mesmo nos fins de semana — isso é o que mais sustenta um sono de qualidade a longo prazo.',
        'Em noites mais agitadas, músicas lentas (60–80 BPM) por 30 minutos podem ajudar a fechar o ciclo.',
        'Se mesmo com essa rotina a dificuldade para dormir persistir, vale investigar a Terapia Cognitivo-Comportamental para Insônia (TCC-I) com um especialista.'
      ]
    };
  };

  const resultadoSono = mostrarResultadoSono ? getResultadoSono(pontuacaoSono) : null;
  const coresSono = {
    red: { bg: 'bg-red-950/30', border: 'border-red-500', badge: 'bg-red-600' },
    orange: { bg: 'bg-amber-950/30', border: 'border-amber-500', badge: 'bg-amber-600' },
    green: { bg: 'bg-green-950/30', border: 'border-green-500', badge: 'bg-green-600' },
  };

  const faqs = [
    {
      pergunta: "Por que não consigo dormir rápido mesmo quando me sinto muito cansado?",
      resposta: "Isso acontece devido ao estado de alerta mental, conhecido como hiperativação. Embora o seu corpo esteja exausto, a mente continua acelerada pelo excesso de estresse, ansiedade ou pensamentos acumulados ao longo do dia, o que mantém os níveis de cortisol elevados. Nesses momentos, a \"pressão de sono\" do corpo é bloqueada pela atividade cerebral em alerta, impedindo o relaxamento necessário para iniciar o descanso."
    },
    {
      pergunta: "O que devo fazer se ficar virando na cama sem conseguir pegar no sono?",
      resposta: "Aplique a \"Regra dos 20 Minutos\": se não adormecer após cerca de 20 minutos, levante-se da cama. Vá para outro cômodo com iluminação baixa e faça uma atividade calma e sem telas, como ler um livro físico ou ouvir uma música suave. Volte para a cama apenas quando sentir o cansaço chegar. Isso impede que o seu cérebro associe o local de dormir à frustração, ao estresse e à insônia."
    },
    {
      pergunta: "Quanto tempo antes de deitar devo desligar o celular e as telas?",
      resposta: "O ideal é desligar todas as telas (celular, tablet, computador e televisão) entre 30 e 60 minutos antes de ir para a cama. A luz azul emitida por esses dispositivos atinge a retina e interrompe a produção natural de melatonina, o hormônio responsável por sinalizar ao corpo que é hora de descansar. Aproveite esse período para criar um ritual de transição relaxante."
    },
    {
      pergunta: "Músicas, chás e técnicas de respiração realmente funcionam ou são apenas mito?",
      resposta: "Funcionam e têm base científica. Músicas calmas (entre 60 e 80 BPM) e exercícios de respiração (como a técnica 4-7-8) ativam o sistema nervoso parassimpático, desacelerando os batimentos cardíacos e diminuindo a ansiedade. Já os chás de plantas como camomila e passiflora contêm substâncias que se ligam aos receptores cerebrais de relaxamento, ajudando a induzir o sono de forma natural."
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
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Sono e Descanso</span>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 Principal (SEO) */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Como Dormir Rápido: Técnicas Comprovadas para Adormecer em Minutos
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA - FEATURED SNIPPET GEO/AIO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: Como Dormir Rápido?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              Para <strong>dormir rápido</strong>, alinhe os sinais biológicos do corpo com o ambiente: use técnicas de relaxamento imediato (respiração 4-7-8, relaxamento muscular progressivo ou a técnica militar), mantenha o quarto escuro e fresco (18°C a 21°C), desligue telas 30 minutos antes de deitar e evite cafeína após as 14h. Quando a mente desacelera e o corpo relaxa, o sono acontece naturalmente.
            </p>
          </div>

          {/* 🎧 PLAYER DE ÁUDIO OTIMIZADO */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-green-700 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic uppercase tracking-widest m-0">Ouça este artigo</h3>
              </div>
              <audio preload="none" controls className="w-full h-10 outline-none" aria-label="Áudio do artigo completo">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Como_Dormir_Rapido.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
            <div className="h-px bg-green-100/60 w-full"></div>

            {/* 📑 ÍNDICE ACORDEÃO */}
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
                  <li><a href="#relaxamento" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Wind size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Técnicas de Relaxamento</a></li>
                  <li><a href="#ambiente" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Moon size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ajustes no Ambiente</a></li>
                  <li><a href="#habitos" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Hábitos e TCC-I</a></li>
                  <li><a href="#checklist" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Pontuação do Sono</a></li>
                  <li><a href="#alimentacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Salad size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Alimentação e Sono</a></li>
                  <li><a href="#exercicio" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Dumbbell size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Atividade Física</a></li>
                  <li><a href="#musica" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Music size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Música e Sono</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO OTIMIZADA */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                <source media="(max-width: 480px)" srcSet={`${capaArtigo}?w=400&strip=all&quality=70`} />
                <source media="(max-width: 768px)" srcSet={`${capaArtigo}?w=600&strip=all&quality=70`} />
                <source media="(max-width: 1024px)" srcSet={`${capaArtigo}?w=800&strip=all&quality=85`} />
                <ImagemOtimizada
                  src={`${capaArtigo}?w=1280&strip=all&quality=85`}
                  alt="Pinguim Píngus vestindo pijama macio em estilo Disney Pixar 3D, deitado confortavelmente em uma cama aconchegante com luz azulada de lua entrando pela janela, dormindo tranquilamente."
                  title="Como Dormir Rápido e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                Dormir rápido não é sorte, é biologia — e dá para treinar.
              </p>
            </figcaption>
          </figure>

          {/* 📝 INTRODUÇÃO */}
          <p className="mb-4">
            <strong>Como dormir rápido</strong> é uma dúvida de quem passa a noite se revirando na cama. Pegar no sono rapidamente é uma questão de alinhar os sinais biológicos do seu corpo com o ambiente ao seu redor. Quando a mente desacelera e o corpo relaxa, o sono acontece.
          </p>

          <h2 id="relaxamento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Wind className="text-green-700" /> Como Dormir Rápido Usando Técnicas de Relaxamento Imediato?
          </h2>

          <h3 className="text-xl font-black text-slate-800 mt-8 mb-3">Relaxamento Muscular Progressivo</h3>
          <p className="mb-4">Comece tensionando os músculos dos pés por 5 segundos e solte. Suba gradualmente para as panturrilhas, coxas, abdômen e ombros até o rosto, liberando a tensão de cada grupo muscular.</p>

          <h3 className="text-xl font-black text-slate-800 mt-8 mb-3">Método Respiratório 4-7-8</h3>
          <p className="mb-4">Inspire pelo nariz por 4 segundos, segure a respiração por 7 segundos e solte o ar suavemente pela boca por 8 segundos. Repita o ciclo 4 vezes para desacelerar os batimentos cardíacos.</p>

          <h3 className="text-xl font-black text-slate-800 mt-8 mb-3">Técnica Militar</h3>
          <p className="mb-4">Descanse os músculos do rosto (incluindo língua e mandíbula), relaxe os ombros e deixe as mãos caírem ao lado do corpo. Inspire e expire relaxando o peito e as pernas. Em seguida, limpe a mente por 10 segundos visualizando um lago calmo.</p>

          <h2 id="ambiente" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Moon className="text-green-700" /> Como Dormir Rápido Fazendo Ajustes no Ambiente?
          </h2>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li>Mantenha o ambiente levemente fresco (entre 18°C e 21°C). O corpo precisa diminuir a temperatura interna para iniciar o ciclo do sono.</li>
            <li>Deixe o quarto o mais escuro e silencioso possível. Se necessário, utilize máscaras de pano nos olhos ou geradores de ruído branco.</li>
            <li>Desconecte-se de celulares, notebooks e televisão pelo menos 30 minutos antes de deitar. A luz azul bloqueia a produção de melatonina, o hormônio do sono.</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-8">
            <p className="m-0">Falando em melatonina: alguns recorrem à suplementação para reforçar esse sinal biológico. Ela pode ajudar a ajustar o relógio interno em situações pontuais (como jet lag), mas não é indicada para uso contínuo sem orientação, e tem efeitos colaterais reais que vale conhecer antes de tomar por conta própria — <Link to="/efeitos-colaterais-da-melatonina" className="text-green-700 font-bold hover:underline">veja os efeitos colaterais da melatonina aqui</Link>.</p>
          </div>

          <h2 id="habitos" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Brain className="text-green-700" /> Como Dormir Rápido Tendo Hábitos Preparatórios?
          </h2>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li>Evite estimulantes tardios: reduza o consumo de café, chás pretos, energéticos e refrigerantes após as 14h, e evite refeições pesadas logo antes de deitar.</li>
            <li>Se você não dormir após 20 minutos na cama, levante-se. Vá para outro cômodo com iluminação baixa e faça uma atividade calma (como ler um livro físico) até sentir cansaço. Ficar se virando na cama gera ansiedade associada ao local de dormir.</li>
          </ul>

          <h3 className="text-xl font-black text-slate-800 mt-8 mb-4">Terapia Cognitivo-Comportamental para Insônia (TCC-I)</h3>
          <p className="mb-4">
            A Terapia Cognitivo-Comportamental para Insônia (TCC-I) é uma abordagem estruturada e não farmacológica considerada o tratamento de primeira linha para problemas crônicos de sono. Seu objetivo principal é identificar e reestruturar pensamentos, crenças e comportamentos disfuncionais que perpetuam a dificuldade para dormir.
          </p>
          <p className="mb-4">
            Na dimensão cognitiva, a terapia trabalha a ansiedade de desempenho do sono, ajudando o paciente a reinterpretar preocupações e pensamentos catastróficos sobre as consequências de uma noite mal dormida. Na vertente comportamental, emprega estratégias práticas como o controle de estímulos, que reconecta a cama ao ato de dormir, em vez de associá-la à frustração, a restrição do sono para consolidar o descanso e o treino de higiene do sono.
          </p>
          <p className="mb-4">
            Ao contrário dos medicamentos indutores, que apenas mascaram os sintomas temporariamente, a TCC-I ataca as causas raízes do problema. O processo ensina habilidades de autorregulação e reeduca o cérebro para recuperar o relógio biológico natural — assim, o paciente desenvolve autonomia para manter noites restauradoras a longo prazo, de maneira sustentável e sem dependência química.
          </p>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Evite Esses 5 Hábitos se Quer Dormir Melhor</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="aXF765GY6xg" title="Como Dormir Melhor: Abandone esses 5 Hábitos que te Impedem de Dormir" />
            </div>
          </div>

          {/* ELEMENTO INTERATIVO OBRIGATÓRIO — QUESTIONÁRIO DE PONTUAÇÃO DO SONO */}
          <h2 id="checklist" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Qual é a Sua Pontuação do Sono?
          </h2>
          <p className="mb-8">Responda as 6 perguntas abaixo e descubra o que mais está atrapalhando (ou ajudando) você a dormir rápido:</p>

          <div className="my-10 bg-[#1E293B] border border-slate-700 shadow-2xl rounded-[3rem] overflow-hidden p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-black text-white italic m-0 mb-8 text-center">🌙 Preparado para dormir em minutos?</h3>

            <div className="space-y-6 mb-8">
              {perguntasSono.map((p) => (
                <div key={p.id}>
                  <p className="text-slate-200 text-sm md:text-base font-bold mb-3">{p.pergunta}</p>
                  <div className="space-y-2">
                    {p.opcoes.map((opcao, idx) => (
                      <button
                        key={idx}
                        onClick={() => responderSono(p.id, idx)}
                        aria-label={`Responder "${opcao.texto}" para: ${p.pergunta}`}
                        aria-pressed={respostasSono[p.id] === idx}
                        className={`w-full text-left p-3 md:p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                          respostasSono[p.id] === idx ? 'bg-green-950/40 border-green-500' : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${respostasSono[p.id] === idx ? 'bg-green-500 border-green-500 scale-110' : 'border-slate-500'}`}>
                          {respostasSono[p.id] === idx && <CheckCircle2 size={12} className="text-white" />}
                        </span>
                        <span className="text-slate-300 text-sm">{opcao.texto}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              {mostrarResultadoSono && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full flex gap-2 pointer-events-none" aria-hidden="true">
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '0ms' }}>✨</span>
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '100ms' }}>🌙</span>
                  <span className="text-2xl animate-bounce" style={{ animationDelay: '200ms' }}>✨</span>
                </div>
              )}
              <button
                onClick={() => setMostrarResultadoSono(true)}
                disabled={!todasRespondidas}
                aria-label="Ver minha pontuação do sono"
                className={`w-full font-black uppercase text-sm py-4 rounded-2xl shadow-lg transition-all border-none italic ${
                  todasRespondidas
                    ? 'bg-green-700 text-white hover:bg-green-800 cursor-pointer hover:scale-105'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Ver Minha Pontuação do Sono
              </button>
            </div>

            {resultadoSono && (
              <div className={`mt-6 p-6 rounded-2xl border-2 ${coresSono[resultadoSono.cor].bg} ${coresSono[resultadoSono.cor].border}`} aria-live="polite">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`${coresSono[resultadoSono.cor].badge} text-white text-xs font-black uppercase px-3 py-1.5 rounded-full`}>
                    {pontuacaoSono} de 12 pontos
                  </span>
                </div>
                <h4 className="text-white font-black text-lg italic mb-2">{resultadoSono.titulo}</h4>
                <p className="text-slate-300 text-sm mb-4">{resultadoSono.texto}</p>
                <p className="text-slate-200 font-black uppercase text-xs tracking-widest mb-3">Dicas para Dormir Melhor:</p>
                <ul className="space-y-2 m-0 p-0 list-none">
                  {resultadoSono.dicas.map((dica, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{dica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <h2 id="alimentacao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Salad className="text-green-700" /> Como Dormir Rápido Tem Relação com a Alimentação Saudável?
          </h2>
          <p className="mb-4">
            A alimentação saudável impacta diretamente a velocidade do adormecimento ao regular a química cerebral e o ritmo circadiano. Refeições leves e ricas em triptofano, magnésio e vitaminas do complexo B estimulam a produção de serotonina e melatonina, hormônios essenciais para induzir o relaxamento. Por outro lado, o consumo tardio de refeições gordurosas, açúcares ou cafeína desacelera a digestão e mantém o metabolismo elevado, gerando picos de alerta e desconforto gástrico. Nutrir o corpo de forma equilibrada reduz a latência do sono, permitindo que o organismo faça a transição para o repouso de maneira rápida e profunda. Padrões alimentares como a <Link to="/o-que-e-dieta-mediterranea" className="text-green-700 font-bold hover:underline">dieta mediterrânea</Link> vão exatamente nessa direção.
          </p>

          {/* VENDAS DO EBOOK - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>O Pingus Aprova!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para Como Dormir Rápido" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Ebook Receitas <span className="text-green-700">Saudáveis e Nutritivas</span>
                </h3>
                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Jantares leves fazem parte de uma boa noite de sono. O nosso <strong>Ebook de Receitas Saudáveis e Nutritivas</strong> traz opções práticas e nutritivas para o fim do dia, sem cafeína, sem açúcar em excesso e sem pesar no estômago na hora de deitar.
                </p>
                <Link to="/ebook-receitas" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Conhecer o Ebook de Receitas Saudáveis e Nutritivas">
                  <ShoppingCart size={16} />
                  Conheça o Ebook de Receitas Agora
                </Link>
              </div>
            </div>
          </div>

          <h2 id="exercicio" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Dumbbell className="text-green-700" /> Como Dormir Rápido Tem Relação com a Prática de Atividades Físicas?
          </h2>
          <p className="mb-4">
            A prática regular de atividades físicas acelera a velocidade do adormecimento ao atuar em três pilares biológicos essenciais. Primeiro, o exercício eleva a temperatura corporal durante a prática; o resfriamento gradual que ocorre horas depois sinaliza ao cérebro que é hora de descansar, desencadeando o sono.
          </p>
          <p className="mb-4">
            Segundo, o esforço físico consome energia e aumenta o acúmulo de adenosina no cérebro — a substância responsável pela "pressão natural do sono". Por fim, o treino reduz os níveis de cortisol e estimula a liberação de endorfinas, aliviando a ansiedade e o estresse que costumam manter a mente em alerta à noite.
          </p>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-orange-800 mt-6 mb-6">
            <p className="m-0">Para garantir uma boa qualidade de sono, o ideal é praticar exercícios até 4 horas antes de deitar, evitando que o estado de agitação prejudique o relaxamento.</p>
          </div>

          <h2 id="musica" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Music className="text-green-700" /> Como Dormir Rápido Tem Relação com Música?
          </h2>
          <p className="mb-4">
            O som de músicas calmas acelera o adormecimento ao sincronizar os ritmos do corpo com a melodia. Sons lentos, entre 60 e 80 batimentos por minuto, induzem o cérebro a migrar do estado de alerta para frequências de relaxamento profundo. Essa mudança desacelera os batimentos cardíacos, reduz a pressão arterial e diminui a produção de cortisol, o hormônio do estresse. Além disso, a música atua como um filtro auditivo que bloqueia ruídos externos e desvia a mente de pensamentos ansiosos, criando o cenário neuroquímico ideal para a transição rápida e natural para o sono.
          </p>

          {/* TABELA COMPARATIVA */}
          <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> Ações Práticas para "Como Dormir Rápido"
          </h2>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/4">Pilar do Sono</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-blue-700 bg-blue-50/50 w-2/5">Como Funciona no Corpo</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-2/5">Ação Prática</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Exercício Físico</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Aumenta a adenosina e reduz o estresse.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Treine até 4 horas antes de deitar.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Alimentação</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Estimula a produção de melatonina.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Evite cafeína após as 14h e jante leve.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Música Calma</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Desacelera os batimentos e a mente.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Ouça sons lentos (60–80 BPM) por 30 min.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Ambiente</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Libera melatonina e reduz temperatura.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Mantenha o quarto escuro, calmo e fresco.</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Mente & Comportamento</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Quebra a ansiedade e a ruminação.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Use a Regra dos 20 min e respiração 4-7-8.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE EM CARDS */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { pilar: "Exercício Físico", funciona: "Aumenta a adenosina e reduz o estresse.", acao: "Treine até 4 horas antes de deitar." },
              { pilar: "Alimentação", funciona: "Estimula a produção de melatonina.", acao: "Evite cafeína após as 14h e jante leve." },
              { pilar: "Música Calma", funciona: "Desacelera os batimentos e a mente.", acao: "Ouça sons lentos (60–80 BPM) por 30 min." },
              { pilar: "Ambiente", funciona: "Libera melatonina e reduz temperatura.", acao: "Mantenha o quarto escuro, calmo e fresco." },
              { pilar: "Mente & Comportamento", funciona: "Quebra a ansiedade e a ruminação.", acao: "Use a Regra dos 20 min e respiração 4-7-8." },
            ].map((item) => (
              <div key={item.pilar} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-green-50 border-b border-green-100 font-black text-green-800 italic text-sm">
                  {item.pilar}
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-blue-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Como Funciona</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.funciona}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-green-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Ação Prática</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.acao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão
          </h2>
          <p className="mb-4">
            Dormir rápido não depende de sorte — depende de repetir, noite após noite, os mesmos sinais que o seu corpo já sabe reconhecer: ambiente escuro e fresco, telas desligadas, mente desacelerada e um horário razoável para se exercitar e se alimentar. Nenhuma técnica isolada substitui a consistência do conjunto, e quando a dificuldade persiste, vale buscar ajuda profissional — a TCC-I é hoje o tratamento de primeira linha para insônia crônica.
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Como Dormir Rápido (FAQ)
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
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Científicas Sobre Como Dormir Rápido</h3>
            <ul className="text-xs text-slate-600 leading-relaxed m-0 list-disc pl-4 space-y-1">
              <li>EDINGER, J. D. et al. <em>Behavioral and psychological treatments for chronic insomnia disorder in adults: an American Academy of Sleep Medicine clinical practice guideline.</em> Journal of Clinical Sleep Medicine, v. 17, n. 2, p. 255-262, 2021.</li>
              <li>MORIN, C. M. et al. <em>Cognitive behavioral therapy for insomnia: a systematic review and meta-analysis.</em> JAMA Internal Medicine, v. 175, n. 9, p. 1461-1472, 2015.</li>
              <li>JACOBSON, Edmund. <em>Progressive relaxation.</em> 2. ed. Chicago: University of Chicago Press, 1938.</li>
              <li>VIERRA, J. et al. <em>Effects of slow breathing techniques on anxiety and physiological stress: a systematic review.</em> Frontiers in Human Neuroscience, v. 16, art. 943924, 2022.</li>
              <li>WINTER, Lloyd Bud. <em>Relax and win: championship performance in whatever you do.</em> San Diego: A S Barnes & Co, 1981.</li>
              <li>CZEISLER, C. A. et al. <em>Association of sleep with melatonin secretion and ambient light exposure.</em> The New England Journal of Medicine, v. 341, n. 24, p. 1801-1809, 1999.</li>
              <li>KRÄUCHI, K. et al. <em>Warm feet promote the onset of sleep.</em> Nature, v. 401, n. 6748, p. 36-37, 1999.</li>
              <li>LANDOLT, Hans-Peter. <em>Sleep homeostasis: a role for adenosine in humans?</em> Biochemical Pharmacology, v. 75, n. 11, p. 2070-2079, 2008.</li>
              <li>KREDLOW, M. A. et al. <em>The effects of physical activity on sleep: a meta-analytic review.</em> Journal of Behavioral Medicine, v. 38, n. 3, p. 427-449, 2015.</li>
              <li>ST-ONGE, M. P.; MIKIC, A.; PIETROLUNGO, C. E. <em>Effects of diet on sleep quality.</em> Advances in Nutrition, v. 7, n. 5, p. 938-949, 2016.</li>
              <li>HARMAT, L.; TAKÁCS, J.; BODIZS, R. <em>Music improves sleep quality in students.</em> Journal of Advanced Nursing, v. 62, n. 3, p. 327-335, 2008.</li>
              <li>JESPERSEN, K. S. et al. <em>Music for insomnia in adults.</em> Cochrane Database of Systematic Reviews, n. 8, art. CD010459, 2022.</li>
              <li>TRAPPE, Hans-Joachim. <em>The effects of music on the cardiovascular system.</em> Deutsches Ärzteblatt International, v. 107, n. 17, p. 294-299, 2010.</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-600">Aviso: Este conteúdo tem fim meramente educativo e informativo e não substitui o acompanhamento de um profissional de saúde. Casos de insônia crônica ou persistente devem ser avaliados por um médico ou especialista em sono.</span>
            </div>
          </div>

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* 💳 CARTÃO AUTOR (E-E-A-T) */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <ImagemOtimizada
              src={`${githubImgBase}Liliane_Borges.webp`}
              alt="Liliane Borges - Autora e Colaboradora do Blog Nutrição com Marco"
              title="Liliane Borges - Estudante de Jornalismo"
              className="w-full h-full object-cover"
              priority="low"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Liliane Borges</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Jornalismo • Colaboradora do Blog Nutrição com Marco</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Moradora do Rio de Janeiro, estudante de jornalismo do último ano, entusiasta de história e cultura pop asiática, atualmente estagiando em um blog de nutrição e fotografia esportiva.
            </p>
            <a href="https://instagram.com/asianeewslab" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @asianeewslab
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
