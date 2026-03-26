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

  const faqs = [
    {
      pergunta: "É normal sentir fome emocional de vez em quando?",
      resposta: "Sim, é perfeitamente normal. O comer é um ato biopsicossociocultural e a comida possui um papel afetivo. O problema surge quando a comida se torna a sua única válvula de escape para lidar com sentimentos, ignorando os sinais biológicos de saciedade."
    },
    {
      pergunta: "Como diferenciar a fome emocional da vontade de comer?",
      resposta: "A fome emocional manifesta-se como uma urgência súbita e 'sequestradora' da atenção. A vontade de comer (fome específica) é um desejo que pode esperar e não vem acompanhado daquela sensação de 'buraco emocional' ou urgência por alívio."
    },
    {
      pergunta: "Fazer jejum ou dietas restritivas piora a fome emocional?",
      resposta: "Com certeza. A restrição gera compulsão. Quando você se priva severamente, o cérebro aumenta o valor de recompensa dos alimentos. No momento de estresse, o impulso de comer emocionalmente torna-se muito mais difícil de controlar."
    },
    {
      pergunta: "O que fazer no exato momento em que o impulso vem?",
      resposta: "Use a Técnica do Atraso Estratégico. Tente aguardar 10 minutos antes de ceder ao impulso. Utilize técnicas de distração ou mude de ambiente. Durante essa pausa, tente avaliar seu real nível na Escala de Fome e Saciedade."
    },
    {
      pergunta: "Como a Escala de Fome ajuda na prática?",
      resposta: "Ela traduz sensações subjetivas em números. Ajuda a identificar se você está realmente precisando de energia (nível 7 ou 8) ou se está buscando comida por hábito, tédio ou estresse (níveis 1 a 4)."
    }
  ];

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
        <title>O que é Fome Emocional? Sintomas, Como Parar e Controlar | Nutrição com Marco</title>
        <meta name="description" content="Você come e continua sentindo um vazio? Descubra os sintomas da fome emocional, como controlar o ciclo da compulsão e a neurociência por trás do impulso." />
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
      <div className="bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Comportamental</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que é Fome Emocional? Como Identificar e Controlar o Impulso
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que é fome emocional? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A fome emocional é o impulso de utilizar a comida para anestesiar sentimentos — como estresse, ansiedade ou tédio — em vez de suprir uma necessidade biológica de nutrientes. Ela é súbita, urgente, focada em alimentos específicos (como doces e gorduras) e não cessa quando o estômago está cheio, gerando a temida <strong>compulsão alimentar emocional</strong>.
            </p>
          </div>

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
                  <li><a href="#fisiologia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Fisiologia Oculta</a></li>
                  <li><a href="#ciclo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Por que você não consegue parar?</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Diferenças Físicas e Emocionais</a></li>
                  <li><a href="#estrategias" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Estratégias Práticas de Controle</a></li>
                  <li><a href="#exercicio" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Escala de Fome Diária</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Palavra do Especialista</a></li>
                  <li><a href="#resumo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Resumo Final</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <p>
              Você abre a geladeira à noite sem saber exatamente o que quer? Come até não aguentar mais, mas continua com uma sensação de vazio inexplicável? Acredite, o seu estômago não está roncando — é o seu cérebro pedindo socorro. Conhecer os verdadeiros <strong>fome emocional sintomas</strong> é o primeiro passo para retomar o controle da sua vida.
            </p>

            {/* IMAGEM DE CAPA */}
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

            {/* SEÇÃO 1: FISIOLOGIA (O DIFERENCIAL) */}
            <h2 id="fisiologia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> A Fisiologia Oculta: Cérebro, Dopamina e Estresse
            </h2>
            <p>
              A fome emocional não é uma falha de caráter ou mera "falta de vergonha na cara". Ela é uma cascata fisiológica complexa. Quando você está cronicamente estressado, seu corpo inunda a corrente sanguínea com <strong>Cortisol</strong>. O Hipotálamo (área do cérebro) interpreta esse estresse como uma ameaça à sobrevivência e exige energia rápida.
            </p>
            <p>
              Qual é a forma mais rápida de energia? Carboidratos refinados e gorduras. Ao consumir esses alimentos, o seu <strong>Sistema de Recompensa Dopaminérgico</strong> é ativado, disparando <em>Dopamina</em> e anestesiando temporariamente a dor emocional. Isso é bem diferente da fome biológica, que é orquestrada de forma compassada pela <Link to="/hormonioss_da_fome_emagrecimento" className="text-green-600 font-semibold hover:underline">Grelina e Leptina (os hormônios da fome)</Link>.
            </p>
            
            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 italic mt-6">
              Hoje, a medicina moderna utiliza fármacos potentes para silenciar esse "ruído mental" por comida, como explicamos nos artigos sobre <Link to="/tirzepatida-para-que-serve" className="text-green-600 font-semibold hover:underline">para que serve a Tirzepatida</Link> e <Link to="/retatrutida_o_que_e" className="text-green-600 font-semibold hover:underline">o que é a Retatrutida</Link>. Contudo, sem tratar a raiz emocional, o fim do uso da medicação frequentemente resulta no temido <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-semibold hover:underline">Efeito Sanfona</Link>.
            </p>

            {/* SEÇÃO 2: O CICLO DO VÍCIO */}
            <h2 id="ciclo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> Por que você não consegue parar? O Ciclo Vicioso
            </h2>
            <p>Se você se pergunta <strong>fome emocional como parar</strong>, precisa primeiro entender a armadilha na qual o seu cérebro está preso. O ciclo da compulsão alimentar emocional funciona como um loop inquebrável se você não intervir no momento certo:</p>

            <div className="flex flex-col gap-3 my-8 max-w-2xl mx-auto">
              <div className="bg-red-50 text-red-800 p-4 rounded-2xl font-black text-center border border-red-100">1. GATILHO (Estresse, Tédio, Ansiedade)</div>
              <div className="text-center text-slate-400">⬇️</div>
              <div className="bg-orange-50 text-orange-800 p-4 rounded-2xl font-black text-center border border-orange-100">2. COMPULSÃO (Comer descontrolado)</div>
              <div className="text-center text-slate-400">⬇️</div>
              <div className="bg-green-50 text-green-800 p-4 rounded-2xl font-black text-center border border-green-100">3. ALÍVIO (Pico temporário de Dopamina)</div>
              <div className="text-center text-slate-400">⬇️</div>
              <div className="bg-slate-800 text-white p-4 rounded-2xl font-black text-center shadow-lg">4. CULPA E FRUSTRAÇÃO</div>
              <div className="text-center text-slate-400">⬇️ (Gera mais estresse, voltando ao passo 1)</div>
            </div>

            <p>A culpa no dia seguinte muitas vezes faz a pessoa subir na balança de forma punitiva. É crucial entender <Link to="/qual_melhor_horario_para_se_pesar" className="text-green-600 font-semibold hover:underline">qual o melhor horário para se pesar</Link> e como a retenção de líquidos pós-compulsão afeta os números. Para não pirar, foque na composição corporal real — entenda <Link to="/o_que_e_antropometria" className="text-green-600 font-semibold hover:underline">o que é a antropometria</Link> ou se a sua <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-semibold hover:underline">bioimpedância é confiável</Link> — em vez de se julgar por flutuações diárias na balança de casa.</p>

            {/* SEÇÃO 3: DIFERENCIAÇÃO */}
            <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Diferenciação: Física vs Emocional
            </h2>
            <p>A nossa necessidade de energia varia. O corpo de um atleta se preparando para um <Link to="/nutricao_para_ironman_703" className="text-green-600 font-semibold hover:underline">Ironman 70.3</Link> exige repor um gasto extremo de calorias reais para sobrevivência (Fome Física). Já no sedentarismo do escritório, a busca repentina por um bolo de chocolate após uma reunião tensa é quase sempre emocional. Veja as diferenças na linha do tempo e na intensidade:</p>

            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch bg-slate-50">
                <div className="p-4 border-r border-slate-100 col-span-3">Linha do Tempo</div>
                <div className="p-4 border-r border-slate-100 col-span-4">Intensidade do Desejo</div>
                <div className="p-4 border-r border-slate-100 col-span-3">Foco do Alimento</div>
                <div className="p-4 col-span-2">Pós-Refeição</div>
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

            {/* SEÇÃO 4: ESTRATÉGIAS REAIS */}
            <h2 id="estrategias" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Fome emocional: Como controlar com Estratégias Práticas
            </h2>
            <p>Se você procura saber <strong>fome emocional como controlar</strong>, esqueça as dicas genéricas de "beba água e respire". Precisamos de estratégias de alto nível para romper o gatilho:</p>

            <div className="flex flex-col gap-6 my-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">1</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">A Técnica do Atraso (Regra dos 10 Minutos)</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">A compulsão exige urgência. Diga ao seu cérebro: "Eu posso comer isso, mas vou esperar 10 minutos". Nesse intervalo, o pico impulsivo do sistema nervoso simpático começa a baixar, permitindo que o córtex pré-frontal (área da razão) retome o controle da decisão.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">2</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Estrutura Nutricional Anti-Gatilho</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Se o seu corpo estiver bem nutrido, a barreira contra a emoção é maior. Monte refeições com alta densidade de proteínas — e fique tranquilo, <Link to="/comer-ovo-todo-dia-aumenta-o-colesterol" className="text-green-600 font-semibold hover:underline">o ovo não é o vilão do colesterol</Link> — combinadas com fibras. Um corpo sem fome física é muito menos propenso a ceder à fome mental.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">3</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Substituição Sensorial (Não Restrição)</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Se o cérebro quer "crocância" por estresse, mastigar gelo ou cenoura crua ajuda na tensão mandibular. Se o corpo pede doce insistentemente, recorrer a frutas ricas em fibras (veja <Link to="/quantas_frutas_posso_comer" className="text-green-600 font-semibold hover:underline">quantas frutas comer no dia</Link>) pode fornecer o paladar doce sem o pico de insulina arrasador dos doces industrializados.</p>
                </div>
              </div>
            </div>

            {/* SEÇÃO 5: TABELA DO DIÁRIO */}
            <h2 id="exercicio" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> Exercício Prático: O Diário da Fome
            </h2>
            <p>
              Para quebrar o ciclo, você precisa de autopercepção. Use a <strong>Escala de Fome e Saciedade</strong> antes de abrir a geladeira. Pergunte-se: <em>"Onde meu corpo está agora?"</em>. O objetivo é manter-se na "Zona de Conforto" (níveis 3 a 6).
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

            {/* SEÇÃO 6: VÍDEO MUZY */}
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

            {/* RESUMO FINAL */}
            <h2 id="resumo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> Resumo Final: Como vencer a fome emocional
            </h2>
            <p>
              Para quebrar o ciclo da fome emocional e retomar o controle da sua relação com a comida, lembre-se destes 3 passos fundamentais:
            </p>

            <div className="flex flex-col gap-5 my-8">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 transition-all hover:shadow-md hover:border-green-100">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-inner">1</div>
                <p className="m-0 text-slate-700"><strong>Pause e Avalie:</strong> Use a regra dos 10 minutos e a Escala de Fome antes de ceder ao impulso.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 transition-all hover:shadow-md hover:border-green-100">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-inner">2</div>
                <p className="m-0 text-slate-700"><strong>Nutrição Inteligente:</strong> Evite dietas altamente restritivas e garanta boa ingestão de proteínas e fibras ao longo do dia.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 transition-all hover:shadow-md hover:border-green-100">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-inner">3</div>
                <p className="m-0 text-slate-700"><strong>Acolhimento Emocional:</strong> Busque conforto real para a sua mente (descanso, conversa, distração), em vez de tentar anestesiar a emoção com comida.</p>
              </div>
            </div>

            <p className="font-medium text-lg text-slate-700 leading-relaxed bg-green-50 p-6 md:p-8 rounded-3xl border border-green-100 mt-8 mb-12">
              <strong>Você não está sozinho nessa jornada.</strong> Recaídas fazem parte do processo de aprendizagem e a culpa punitiva deve ficar no passado. A comida é sua aliada, fonte de saúde e de prazer, não um esconderijo para dores emocionais. Seja gentil com você e com o seu próprio corpo enquanto desenvolve essa nova consciência.
            </p>

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
