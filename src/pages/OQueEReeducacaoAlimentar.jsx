import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import YouTubeLazy from '../components/YouTubeLazy';
import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import {
  ChevronLeft, ChevronRight, Activity, HelpCircle, FileText,
  Zap, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, AlertTriangle, Brain, Salad, TrendingUp, Users, ListChecks
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const dateModifiedISO = "2026-09-06";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const capaArtigo = `${githubImgBase}Blog/OQueEReeducacaoAlimentar_Capa.webp`;

// 🧭 Etapas do Modelo Transteórico (Prochaska & DiClemente, 1981) — quiz de autoavaliação
const etapasMudanca = [
  {
    id: 'pre-contemplacao',
    frase: 'Eu não penso em mudar minha alimentação nos próximos 6 meses.',
    nome: 'Pré-Contemplação',
    cor: 'slate',
    resultado: 'Você está na fase de Pré-Contemplação. Não há problema nenhum nisso — é o ponto de partida de todo mundo. Nessa etapa, o mais útil não é se cobrar, e sim se informar sem julgamento: entender como a alimentação afeta sua saúde, sem pressão para agir agora. A mudança real começa quando a informação passa a fazer sentido pra sua própria vida.'
  },
  {
    id: 'contemplacao',
    frase: 'Eu já penso em mudar, mas ainda não sei bem como nem por onde começar.',
    nome: 'Contemplação',
    cor: 'blue',
    resultado: 'Você está na fase de Contemplação. Você já reconhece que quer mudar — o próximo passo é pesar, de forma honesta, as vantagens e as dificuldades dessa mudança para o seu dia a dia. Anotar num papel "o que eu ganho" e "o que me dá trabalho" ajuda a destravar a decisão sem se sentir pressionado.'
  },
  {
    id: 'decisao',
    frase: 'Eu decidi mudar e pretendo dar os primeiros passos ainda esse mês.',
    nome: 'Determinação (Decisão)',
    cor: 'orange',
    resultado: 'Você está na fase de Determinação. Esse é o momento de transformar a intenção em um plano pequeno e concreto — trocar uma única refeição por semana, por exemplo, em vez de reformular a rotina inteira de uma vez. Planos grandes demais nessa fase costumam desmontar rápido; comece pequeno para ganhar confiança (autoeficácia).'
  },
  {
    id: 'acao',
    frase: 'Eu já mudei ativamente meus hábitos alimentares, mas faz menos de 6 meses.',
    nome: 'Ação',
    cor: 'green',
    resultado: 'Você está na fase de Ação — a mais frágil de todas, mesmo parecendo a mais avançada. É aqui que a maioria das dietas restritivas desmorona, porque a mudança ainda não virou rotina automática. Reforce o que ajuda (controle de estímulos: não ter ultraprocessados em casa, por exemplo) e evite se cobrar perfeição — um deslize não apaga o progresso.'
  },
  {
    id: 'manutencao',
    frase: 'Já mudei meus hábitos alimentares há mais de 6 meses e mantenho a rotina.',
    nome: 'Manutenção',
    cor: 'green',
    resultado: 'Você está na fase de Manutenção — parabéns, essa é a fase que define reeducação alimentar de verdade. O foco agora é prevenir recaídas: identificar os gatilhos que mais te desviam (viagens, estresse, datas comemorativas) e ter um plano pronto para esses momentos, sem tratá-los como um "fracasso" caso aconteçam.'
  }
];

export default function OQueEReeducacaoAlimentar() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [etapaEscolhida, setEtapaEscolhida] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "Qual a real diferença entre dieta e reeducação alimentar?",
      resposta: "A dieta é, em geral, um plano restritivo de prazo determinado, focado em um objetivo rápido (como perder uma quantidade específica de peso). A reeducação alimentar é um processo gradual e contínuo de mudança de hábitos, sem prazo para 'terminar', que visa uma relação sustentável com a comida a longo prazo — inclusive permitindo alimentos antes proibidos, com atenção à quantidade e à frequência."
    },
    {
      pergunta: "Por que dietas restritivas costumam falhar a longo prazo?",
      resposta: "Estudos sobre aconselhamento dietético mostram altas taxas de insucesso e baixa adesão a programas dietéticos restritivos, associadas a fatores como falta de apoio, baixa motivação e resultados aquém do esperado. Fisiologicamente, um déficit calórico muito agressivo e prolongado pode levar a riscos à saúde e dificultar a manutenção, já que a mudança não teve tempo de se tornar hábito automático."
    },
    {
      pergunta: "Quanto tempo demora para reeducar a alimentação de verdade?",
      resposta: "Não existe um prazo fixo — o processo é reconhecidamente lento e progressivo, e varia conforme a etapa de mudança em que a pessoa está (do Modelo Transteórico de Prochaska e DiClemente). O que a literatura destaca é que mudanças feitas aos poucos, com metas pequenas e realistas, tendem a durar mais do que reformulações drásticas de uma vez."
    },
    {
      pergunta: "Reeducação alimentar significa cortar doces e ultraprocessados para sempre?",
      resposta: "Não. Reeducação alimentar não significa proibição total, e sim reorganizar a base da alimentação em torno de alimentos in natura e minimamente processados, deixando os ultraprocessados como exceção ocasional, não como base do cardápio — conforme a recomendação do Guia Alimentar para a População Brasileira do Ministério da Saúde."
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
            O Que É Reeducação Alimentar? Guia Completo Baseado em Ciência
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: O Que É Reeducação Alimentar
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              Reeducação alimentar é o processo gradual e contínuo de mudar hábitos alimentares para toda a vida, em contraste com a dieta restritiva de prazo curto. Em vez de cortar grupos alimentares, ela ensina a comer a quantidade adequada de cada um, priorizando alimentos in natura e minimamente processados. Por ser mais lenta, ela dá tempo para o cérebro e o corpo se adaptarem, o que explica por que tende a durar muito mais do que dietas da moda.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/O_Que_E_Reeducacao_Alimentar.mp3" type="audio/mpeg" />
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
                  <li><a href="#o-que-e" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Salad size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Que É Reeducação Alimentar</a></li>
                  <li><a href="#dieta-x-reeducacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dieta x Reeducação Alimentar</a></li>
                  <li><a href="#fisiologia" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Por Que Dietas Falham</a></li>
                  <li><a href="#modelo-transteorico" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><ListChecks size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />As 5 Etapas da Mudança</a></li>
                  <li><a href="#classificacao-nova" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Salad size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Classificação NOVA</a></li>
                  <li><a href="#dados-reais" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><TrendingUp size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Tamanho do Problema</a></li>
                  <li><a href="#mitos-e-verdades" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Mitos e Verdades</a></li>
                  <li><a href="#passos-praticos" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Passos Práticos</a></li>
                  <li><a href="#cultura-emocoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Users size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Cultura e Emoções</a></li>
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
                  alt="Pinguim Píngus, em estilo Disney Pixar 3D, vestido de chef com avental, arrumando com carinho uma tigela colorida de frutas e vegetais frescos em uma cozinha aconchegante e iluminada."
                  title="O Que É Reeducação Alimentar e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                  width="1280"
                  height="720"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                Reeducação alimentar não é sobre perfeição — é sobre construir hábitos que duram.
              </p>
            </figcaption>
          </figure>

          {/* INTRODUÇÃO */}
          <p className="mb-4">
            <strong>O que é reeducação alimentar?</strong> É o nome que damos ao processo — lento, contínuo e para a vida toda — de transformar a relação de uma pessoa com a comida, em contraste direto com a dieta restritiva de prazo curto. Não é incomum um paciente chegar ao consultório esperando uma "dieta milagrosa" e sair de lá entendendo que a mudança real acontece aos poucos: um estudo de caso descrito na literatura de nutrição relata um paciente com suspeita de diabetes que, após reeducação alimentar, não precisou nem de medicação.
          </p>

          <h2 id="o-que-e" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Salad className="text-green-700" /> O Que É Reeducação Alimentar, Afinal?
          </h2>
          <p className="mb-4">
            A reeducação alimentar é definida na literatura de educação em saúde como uma ferramenta de "promoção da mudança do comportamento alimentar e consequente melhora da saúde" que vai muito além de passar informações nutricionais — ela dialoga com a história de vida da pessoa, incluindo herança cultural, memória afetiva, sociabilidade e questões econômicas. Ou seja: não é uma lista de alimentos proibidos, é um processo de reaprendizado.
          </p>
          <p className="mb-4">
            Existem dois modelos de educação em jogo aqui. O primeiro, chamado de modelo "bancário" (do educador Paulo Freire), trata o paciente como um depósito passivo de informação — o profissional "deposita" regras, e a mudança, quando acontece, costuma ser superficial e de curta duração. O segundo, o modelo dialógico-problematizador, é um processo mais longo, construído junto com a pessoa, e é esse o que produz "mudanças duradouras de hábitos, comportamentos e maior autonomia" — a verdadeira reeducação alimentar.
          </p>

          <h2 id="dieta-x-reeducacao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> Reeducação Alimentar x Dieta: Qual a Diferença Real?
          </h2>
          <p className="mb-6">
            A confusão entre os dois termos é enorme, mas a diferença é bem definida na prática clínica. Veja a comparação:
          </p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/3">Característica</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-1/3">Dieta Restritiva</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-1/3">Reeducação Alimentar</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Duração</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Prazo determinado, com início e fim definidos.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Processo contínuo, sem data para "terminar".</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Alimentos</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Corta grupos inteiros (carboidratos, doces, etc.).</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Ajusta a quantidade e a frequência, sem proibição total.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Modelo educativo</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">"Bancário": regras impostas, paciente passivo.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Dialógico: construído junto, com autonomia do paciente.</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Velocidade dos resultados</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Rápida — mas frequentemente não sustentada.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Lenta e progressiva — mas tende a durar mais.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE DA TABELA */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { car: "Duração", dieta: "Prazo determinado, com início e fim definidos.", reed: "Processo contínuo, sem data para \"terminar\"." },
              { car: "Alimentos", dieta: "Corta grupos inteiros (carboidratos, doces, etc.).", reed: "Ajusta quantidade e frequência, sem proibição total." },
              { car: "Modelo educativo", dieta: "\"Bancário\": regras impostas, paciente passivo.", reed: "Dialógico: construído junto, com autonomia do paciente." },
              { car: "Velocidade dos resultados", dieta: "Rápida — mas frequentemente não sustentada.", reed: "Lenta e progressiva — mas tende a durar mais." },
            ].map((item) => (
              <div key={item.car} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 font-black text-slate-800 italic text-sm">{item.car}</div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-red-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Dieta Restritiva</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.dieta}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-green-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Reeducação Alimentar</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.reed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-4">
            Dietas como <Link to="/o-que-e-jejum-intermitente" className="text-green-700 font-bold underline">jejum intermitente</Link>, <Link to="/o-que-e-dieta-cetogenica" className="text-green-700 font-bold underline">dieta cetogênica</Link> ou <Link to="/o-que-e-dieta-low-carb" className="text-green-700 font-bold underline">low carb</Link> podem até fazer parte de uma estratégia nutricional pontual, mas não substituem a reeducação alimentar como base de longo prazo — e a literatura é clara sobre o motivo: programas dietéticos restritivos têm "altas taxas de insucesso, principalmente pela baixa adesão", associadas a falta de apoio, baixa motivação e resultados aquém do esperado.
          </p>

          <h2 id="fisiologia" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Brain className="text-green-700" /> Por Que Dietas Restritivas Costumam Falhar: A Fisiologia por Trás
          </h2>
          <p className="mb-4">
            A perda de peso acontece quando existe um balanço energético negativo — você gasta mais calorias do que consome. Essa é, de fato, a forma mais eficaz de emagrecer. O problema é quando a ingestão de energia fica muito abaixo das necessidades diárias por tempo prolongado: nesse ponto, o balanço energético excessivamente negativo pode levar à desnutrição e a riscos à saúde, além de ser fisiologicamente insustentável.
          </p>
          <p className="mb-4">
            O apetite, por sua vez, é regulado pelo hipotálamo e sofre influência de fatores físicos, psicológicos e ambientais — ansiedade, estresse e até tensão pré-menstrual podem alterar diretamente a fome. É por isso que cortar grupos alimentares inteiros de forma abrupta tende a gerar um <Link to="/hormonios_da_fome_emagrecimento" className="text-green-700 font-bold underline">desequilíbrio nos hormônios da fome</Link> e, mais cedo ou mais tarde, o famoso <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold underline">efeito sanfona</Link>.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Vale o dado:</strong> comer café da manhã está diretamente relacionado a uma maior saciedade ao longo do dia e a uma redução no consumo de lanches calóricos entre as refeições principais — um exemplo simples de como um hábito consistente pesa mais do que uma regra rígida isolada.</p>
          </div>

          <h2 id="modelo-transteorico" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <ListChecks className="text-green-700" /> O Modelo Transteórico: As 5 Etapas da Mudança de Hábito
          </h2>
          <p className="mb-4">
            Um dos modelos mais usados para entender a mudança de comportamento alimentar é o Modelo Transteórico, proposto por Prochaska e DiClemente em 1981. Ele descreve a mudança como um processo cíclico — não uma linha reta — dividido em cinco etapas: Pré-Contemplação, Contemplação, Determinação (Decisão), Ação e Manutenção. Entender em qual etapa você está ajuda a definir o que realmente vai te ajudar agora, em vez de tentar "pular direto" para hábitos que ainda não fazem sentido para você.
          </p>

          {/* ELEMENTO INTERATIVO OBRIGATÓRIO — QUIZ DE AUTOAVALIAÇÃO */}
          <div className="my-10 bg-slate-900 border border-slate-700 shadow-2xl rounded-[3rem] overflow-hidden p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <ListChecks className="text-green-400" size={26} />
              <h3 className="text-lg md:text-xl font-black text-white italic m-0">Em Qual Etapa da Mudança Você Está?</h3>
            </div>
            <p className="text-slate-300 text-sm mb-6">Clique na frase que mais se parece com você agora:</p>
            <div className="grid grid-cols-1 gap-3">
              {etapasMudanca.map((etapa) => (
                <button
                  key={etapa.id}
                  onClick={() => setEtapaEscolhida(etapa.id)}
                  aria-label={`Selecionar: ${etapa.frase}`}
                  aria-pressed={etapaEscolhida === etapa.id}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-colors cursor-pointer ${etapaEscolhida === etapa.id ? 'bg-green-950/60 border-green-500' : 'bg-slate-800 border-slate-700 hover:border-green-500'}`}
                >
                  <span className="text-slate-100 text-sm md:text-base font-medium">{etapa.frase}</span>
                </button>
              ))}
            </div>

            {etapaEscolhida && (
              <div className="mt-6 p-6 bg-green-50 rounded-2xl border border-green-200" aria-live="polite">
                <span className="text-[11px] font-black uppercase tracking-widest text-green-700">Sua Etapa: {etapasMudanca.find(e => e.id === etapaEscolhida)?.nome}</span>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-2 mb-0">{etapasMudanca.find(e => e.id === etapaEscolhida)?.resultado}</p>
              </div>
            )}
          </div>

          <h2 id="classificacao-nova" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Salad className="text-green-700" /> Classificação NOVA: Entenda o Que Você Está Comendo
          </h2>
          <p className="mb-4">
            O Guia Alimentar para a População Brasileira, do Ministério da Saúde, organiza os alimentos em quatro grupos conforme o grau de processamento — e entender essa classificação é a base prática de qualquer reeducação alimentar:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-3">
            <li><strong>In natura ou minimamente processados:</strong> obtidos diretamente de plantas ou animais, sem alteração (ou com alterações mínimas, como limpeza e secagem). Exemplos: frutas, legumes, ovos, arroz, feijão, leite pasteurizado.</li>
            <li><strong>Ingredientes culinários:</strong> extraídos de alimentos in natura e usados para temperar e cozinhar. Exemplos: óleos, sal, açúcar, manteiga.</li>
            <li><strong>Processados:</strong> alimentos in natura com adição de sal ou açúcar. Exemplos: conservas, queijos, pães, sardinha enlatada.</li>
            <li><strong>Ultraprocessados:</strong> formulações industriais feitas majoritariamente de substâncias extraídas de alimentos ou sintetizadas em laboratório. Exemplos: refrigerantes, salgadinhos de pacote, macarrão instantâneo, embutidos, biscoitos recheados.</li>
          </ul>
          <p className="mb-4">
            A "regra de ouro" do próprio Guia Alimentar resume tudo em uma frase: <em>"Prefira sempre alimentos in natura ou minimamente processados e preparações culinárias a alimentos ultraprocessados."</em> Isso tem uma explicação calórica direta — óleos e gorduras têm cerca de 6 vezes mais calorias por grama do que grãos cozidos, e os ultraprocessados podem chegar a ser 2 a 5 vezes mais calóricos, grama a grama, do que a tradicional combinação de arroz com feijão.
          </p>

          <h2 id="dados-reais" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <TrendingUp className="text-green-700" /> O Tamanho do Problema no Brasil e no Mundo
          </h2>
          <p className="mb-4">
            Os números ajudam a entender por que a reeducação alimentar virou pauta de saúde pública. Segundo a Organização Mundial da Saúde, cerca de <strong>2,3 bilhões de pessoas</strong> estão acima do peso no mundo. No Brasil, estima-se que cerca de <strong>10% da população seja obesa e outros 30% estejam acima do peso saudável</strong> — o equivalente a aproximadamente 50 milhões de brasileiros que precisariam perder peso por razões de saúde. O próprio Guia Alimentar do Ministério da Saúde resume: o excesso de peso já acomete <strong>um em cada dois adultos e uma em cada três crianças</strong> no país.
          </p>
          <p className="mb-4">
            Parte disso tem relação direta com o ambiente alimentar: mais de dois terços dos comerciais de alimentos veiculados na televisão brasileira promovem produtos de fast-food, salgadinhos, biscoitos, cereais açucarados e refrigerantes — todos ultraprocessados. Entender esse cenário é parte do próprio processo de reeducação: reconhecer que boa parte do apelo por esses produtos é construído, não espontâneo.
          </p>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Especialista Explica: Dieta x Reeducação Alimentar</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="Qul8qoCcWP8" title="Especialista fala sobre dieta e reeducação alimentar" />
            </div>
          </div>

          <h2 id="mitos-e-verdades" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <AlertTriangle className="text-green-700" /> Mitos e Verdades Sobre Reeducação Alimentar
          </h2>
          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 mb-3"><AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> Mito: "Comida saudável é sem graça"</h3>
              <p className="text-slate-600 m-0">A mentalidade de dieta associa alimentação saudável a produtos "sem graça" ou versões light e diet. Na prática, a variedade de cores, texturas e sabores no prato precisa ser constante — é ela que sustenta a adesão a longo prazo, não a monotonia.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 mb-3"><AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> Mito: "Basta comer menos e se exercitar mais"</h3>
              <p className="text-slate-600 m-0">Esse clichê é explicitamente citado na literatura de aconselhamento dietético como insuficiente. Um aconselhamento eficaz precisa ir além disso, considerando individualidade, contexto de vida e etapa de mudança da pessoa.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 mb-3"><AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> Mito: "Dietas milagrosas funcionam se eu tiver força de vontade"</h3>
              <p className="text-slate-600 m-0">A adesão a dietas restritivas costuma esbarrar em fatores muito além de "força de vontade": apoio familiar, condição financeira e resultados abaixo do esperado no meio do caminho. Tratar o insucesso como culpa individual ignora esses fatores reais.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> Verdade: mudanças pequenas e lentas duram mais</h3>
              <p className="text-slate-600 m-0">A literatura reforça, mais de uma vez, que a mudança precisa ser feita "de forma lenta e progressiva". Isso não é falta de disciplina — é reconhecer que hábito se constrói com repetição, não com decisões pontuais de força de vontade.</p>
            </div>
          </div>

          <h2 id="passos-praticos" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Passos Práticos Baseados no Guia Alimentar Oficial
          </h2>
          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-green-600" /> 1. Priorize alimentos in natura e minimamente processados</h3>
              <p className="text-slate-600 m-0">Use a classificação NOVA como bússola no dia a dia: quanto mais próximo do estado natural, melhor. Deixe os ultraprocessados como exceção ocasional, não como base do cardápio.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-blue-500" /> 2. Coma com regularidade e atenção</h3>
              <p className="text-slate-600 m-0">Faça as refeições em horários semelhantes, evite "beliscar" fora delas, e coma devagar, sem TV ou celular — desfrutando o que está no prato, sem outra atividade competindo pela sua atenção.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /> 3. Desenvolva (ou resgate) habilidades culinárias</h3>
              <p className="text-slate-600 m-0">O enfraquecimento da habilidade de cozinhar favorece diretamente o consumo de ultraprocessados. <Link to="/como-ganhar-tempo-na-cozinha" className="text-green-700 font-bold underline">Organizar melhor o tempo na cozinha</Link> — planejando compras e cozinhando em maior quantidade para congelar — reduz essa dependência sem exigir horas extras por dia.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-purple-500" /> 4. Coma em companhia sempre que possível</h3>
              <p className="text-slate-600 m-0">Comer é parte natural da vida social. Refeições compartilhadas fortalecem laços familiares e tornam o momento de comer um prazer, não um fardo a ser cumprido sozinho e rápido.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3"><CheckCircle2 className="w-5 h-5 text-green-600" /> 5. Seja crítico com a publicidade de alimentos</h3>
              <p className="text-slate-600 m-0">A função da publicidade é vender, não informar ou educar. Reconhecer esse objetivo comercial por trás de embalagens e comerciais é parte ativa de uma reeducação alimentar consciente.</p>
            </div>
          </div>

          {/* PINGUS APROVA */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>O Pingus Aprova!</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para o artigo sobre Reeducação Alimentar" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Ebook Receitas <span className="text-green-700">Saudáveis e Nutritivas</span>
                </h3>
                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Reeducação alimentar de verdade passa pela cozinha. O nosso <strong>Ebook de Receitas Saudáveis e Nutritivas</strong> traz opções práticas baseadas em alimentos in natura, para você trocar o ultraprocessado pela comida de verdade sem perder tempo nem sabor.
                </p>
                <Link to="/ebook-receitas" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Conhecer o Ebook de Receitas Saudáveis e Nutritivas">
                  <ShoppingCart size={16} />
                  Conheça o Ebook de Receitas Agora
                </Link>
              </div>
            </div>
          </div>

          <h2 id="cultura-emocoes" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Users className="text-green-700" /> O Papel da Cultura e das Emoções na Alimentação
          </h2>
          <p className="mb-4">
            A alimentação é muito mais do que ingestão de nutrientes: ela envolve identidade cultural, condição social, religião, memória familiar e memória afetiva. Isso significa que boa parte do que comemos — e de como nos relacionamos com a comida — foi aprendido socialmente, e não é fixo. Estudos sobre culturas alimentares mostram, inclusive, como o significado de um mesmo alimento pode mudar ao longo de uma geração: um ingrediente antes associado à escassez pode ser ressignificado e passar a ser valorizado, ou o contrário.
          </p>
          <p className="mb-4">
            Isso é uma boa notícia para quem busca reeducação alimentar: se o hábito foi aprendido, ele também pode ser reaprendido. Reconhecer o peso emocional da comida — sem culpa — é parte do processo, algo que se conecta diretamente com o que já discutimos sobre <Link to="/o-que-e-fome-emocional" className="text-green-700 font-bold underline">fome emocional</Link>. E quando a mudança inclui a família desde cedo, como na <Link to="/alimentacao-saudavel-das-criancas" className="text-green-700 font-bold underline">alimentação saudável das crianças</Link>, os novos hábitos tendem a se consolidar com muito mais naturalidade.
          </p>
          <p className="mb-4">
            Um exemplo prático de alimentação sustentável e culturalmente enraizada é a <Link to="/o-que-e-dieta-mediterranea" className="text-green-700 font-bold underline">dieta mediterrânea</Link>: não é uma dieta restritiva, e sim um padrão alimentar construído sobre décadas de hábito cultural — exatamente o tipo de base que a reeducação alimentar busca reconstruir, só que adaptada à realidade brasileira.
          </p>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão
          </h2>
          <p className="mb-4">
            Reeducação alimentar não é uma versão "mais lenta" de dieta — é um processo fundamentalmente diferente, apoiado em como o cérebro forma hábitos, em como o corpo reage a restrições extremas, e em como a cultura molda (e pode remoldar) a nossa relação com a comida. Entender em qual etapa de mudança você está, priorizar alimentos in natura sobre ultraprocessados e construir hábitos pequenos e sustentáveis é, segundo a própria ciência da educação nutricional, o caminho que realmente dura.
          </p>

          {/* FAQ */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Reeducação Alimentar (FAQ)
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

          {/* E-E-A-T FONTES */}
          <div className="my-12 p-6 bg-slate-100 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Científicas Sobre Reeducação Alimentar</h3>
            <ul className="text-xs text-slate-600 leading-relaxed m-0 list-disc pl-4 space-y-3">
              <li>BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. <em>Guia alimentar para a população brasileira.</em> 2. ed., 1. reimpr. Brasília: Ministério da Saúde, 2014. 156 p.</li>
              <li>FREIRE, Daniela Biral do Prado. <em>Educação Alimentar e Nutricional.</em> Florianópolis, SC: Arqué, 2022 (reimpr. 2025). Universidade Cesumar – UniCesumar.</li>
              <li>PAVIANI, Letícia; PEREIRA, Noemi da Silva. <em>Nutrição Humana.</em> Indaial, SC: Arqué, 2023. Universidade Cesumar – UniCesumar.</li>
              <li>SUZUKI, Júlio César; ARAÚJO, Gilvan C. C. de; BITELLI, Fábio Molinari (Orgs.). <em>Culturas Alimentares na América Latina.</em> São Paulo: FFLCH/USP, 2021.</li>
              <li>PROCHASKA, J. O.; DICLEMENTE, C. C. <em>Transtheoretical Model of Behavior Change.</em> 1981.</li>
              <li>FREIRE, Paulo. <em>Pedagogia do Oprimido.</em> Rio de Janeiro: Paz e Terra, 1987.</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-600">Aviso: Este conteúdo tem fim meramente educativo e informativo e não substitui a avaliação, o diagnóstico e o acompanhamento de um nutricionista ou outro profissional de saúde qualificado.</span>
            </div>
          </div>

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* CARTÃO AUTOR */}
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
              Como avaliador antropométrico certificado internacionalmente, trabalho ensinando você a entender a própria composição corporal e a construir hábitos alimentares reais e sustentáveis, longe das promessas de dietas milagrosas.
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
