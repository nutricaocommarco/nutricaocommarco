import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import { 
  ChevronLeft, HelpCircle, Activity, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  CheckCircle2, Ruler, BookOpen, UserCheck, AlertTriangle,
  Globe, Brain, Target
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas E-E-A-T
const datePublishedISO = "2026-07-24";
const dateModifiedISO = "2026-07-24";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const antropometriaCapa = `${githubImgBase}Blog/Avaliacao_Antropometrica_Capa.webp`;

export default function AvaliacaoAntropometrica() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados da Calculadora de Somatotipo
  const [somaDados, setSomaDados] = useState({ endo: '', meso: '', ecto: '' });
  const [somatotipo, setSomatotipo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSomaChange = (e) => {
    const { name, value } = e.target;
    // Permite apenas números e ponto/vírgula
    if (value === '' || /^\d*[.,]?\d*$/.test(value)) {
      setSomaDados({ ...somaDados, [name]: value.replace(',', '.') });
    }
  };

  const calcularSomatotipo = (e) => {
    e.preventDefault();
    
    const endo = parseFloat(somaDados.endo);
    const meso = parseFloat(somaDados.meso);
    const ecto = parseFloat(somaDados.ecto);

    if (isNaN(endo) || isNaN(meso) || isNaN(ecto)) return;

    // Coordenadas matemáticas exatas da Somatocarta de Heath-Carter
    const x = ecto - endo;
    const y = (2 * meso) - (endo + ecto);

    // Classificação visual baseada nas dominâncias (Nomenclatura Oficial Heath-Carter)
    let classificacao = "Central (Equilibrado)";
    
    if (endo > meso && endo > ecto) {
      classificacao = meso > ecto ? "Endomorfo-Mesomórfico" : ecto > meso ? "Endomorfo-Ectomórfico" : "Endomorfo Equilibrado";
    } else if (meso > endo && meso > ecto) {
      classificacao = endo > ecto ? "Mesomorfo-Endomórfico" : ecto > endo ? "Mesomorfo-Ectomórfico" : "Mesomorfo Equilibrado";
    } else if (ecto > endo && ecto > meso) {
      classificacao = endo > meso ? "Ectomorfo-Endomórfico" : meso > endo ? "Ectomorfo-Mesomórfico" : "Ectomorfo Equilibrado";
    } else if (endo === meso && endo > ecto) {
      classificacao = "Endomorfo-Mesomorfo";
    } else if (meso === ecto && meso > endo) {
      classificacao = "Mesomorfo-Ectomorfo";
    } else if (endo === ecto && endo > meso) {
      classificacao = "Endomorfo-Ectomorfo";
    }

    setSomatotipo({
      endo: endo.toFixed(1),
      meso: meso.toFixed(1),
      ecto: ecto.toFixed(1),
      x: x.toFixed(2),
      y: y.toFixed(2),
      texto: classificacao
    });
  };

  const faqs = [
    {
      pergunta: "Qual a diferença entre Antropometria e Bioimpedância?",
      resposta: "A avaliação antropométrica mede o corpo fisicamente através de dobras, ossos e perímetros, sendo imune a oscilações diárias. A bioimpedância usa uma corrente elétrica para estimar a água corporal, sendo fortemente alterada se o paciente estiver desidratado, menstruado, ou de bexiga cheia."
    },
    {
      pergunta: "O que é o Erro Técnico de Medição (ETM)?",
      resposta: "O ETM é um cálculo estatístico (desvio-padrão entre medidas repetidas) que afere a precisão do avaliador na antropometria (intra-avaliador) ou a exatidão entre vários avaliadores (inter-avaliador). A ISAK exige que o ETM para dobras cutâneas seja inferior a 5% (ou 7,5% para iniciantes)."
    },
    {
      pergunta: "Para que serve a Somatocarta na Avaliação Antropométrica?",
      resposta: "A somatocarta é um gráfico bidimensional que classifica o paciente em Endomorfo (tendência a acumular gordura), Mesomorfo (robustez muscular) e Ectomorfo (linearidade e magreza), ajudando a alinhar expectativas de resultados genéticos baseados na estrutura óssea e muscular."
    },
    {
      pergunta: "Devo usar a Média ou a Mediana nas dobras?",
      resposta: "A regra oficial estatística para diminuir o ETM diz que: se você realizar duas aferições no mesmo ponto anatômico, deve usar a Média Aritmética. Caso haja uma discrepância e você precise realizar uma terceira medida de controle, você deve usar a Mediana (o valor central)."
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
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Composição Corporal</span>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 Principal (SEO) */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Como fazer uma Avaliação Antropométrica de Qualidade?
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA - FEATURED SNIPPET GEO/AIO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: Como fazer com Qualidade?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              Uma <strong>avaliação antropométrica</strong> de qualidade exige o domínio prático dos protocolos internacionais (como o ISAK). O avaliador deve localizar e marcar os <strong>pontos anatômicos</strong> com lápis dermográfico antes de pinçar a pele. A técnica correta separa o corpo em tecido ósseo, muscular e adiposo usando <strong>dobras cutâneas</strong>, perímetros e diâmetros ósseos. Utilizar a métrica correta (Média para 2 medidas, ou Mediana para 3) minimiza o Erro Técnico de Medição (ETM) e garante precisão nas fórmulas preditivas de <strong>composição corporal</strong>.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Avaliacao_Antropometrica.mp3" type="audio/mpeg" />
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
                  <li><a href="#historia" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><BookOpen size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A História Oculta da Antropometria</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Comparativo de Protocolos Físicos</a></li>
                  <li><a href="#marcacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Ruler size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Só é Bom Quem Marca</a></li>
                  <li><a href="#estatistica" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Estatística: Média ou Mediana?</a></li>
                  <li><a href="#medidas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><UserCheck size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Arsenal de Medidas Básicas</a></li>
                  <li><a href="#isak" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Globe size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Protocolo ISAK e Níveis Internacionais</a></li>
                  <li><a href="#formulas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Fórmulas de Regressão e Autores</a></li>
                  <li><a href="#polemica-7-dobras" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Mito das 7 Dobras</a></li>
                  <li><a href="#resultados" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Interpretando Resultados e Índices</a></li>
                  <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Calculadora e Gráfico de Somatotipo</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO OTIMIZADA */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                <source media="(max-width: 480px)" srcSet={`${antropometriaCapa}?w=400&strip=all&quality=70`} />
                <source media="(max-width: 768px)" srcSet={`${antropometriaCapa}?w=600&strip=all&quality=70`} />
                <source media="(max-width: 1024px)" srcSet={`${antropometriaCapa}?w=800&strip=all&quality=85`} />
                <ImagemOtimizada 
                  src={`${antropometriaCapa}?w=1280&strip=all&quality=85`}
                  alt="Pinguim Pingus vestindo jaleco de nutricionista em estilo Disney Pixar 3D, realizando a medição de uma dobra cutânea com um adipômetro científico, em um consultório claro."
                  title="Avaliação Antropométrica e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                O domínio da anatomia de superfície e do adipômetro é a maior arma do nutricionista e do avaliador físico moderno.
              </p>
            </figcaption>
          </figure>

          {/* 📝 INTRODUÇÃO */}
          <p className="mb-4">
            Seja você um estudante quebrando a cabeça nas aulas práticas de <Link to="/blog" className="text-green-700 font-bold hover:underline">Nutrição ou Educação Física</Link>, ou um profissional recém-formado buscando exatidão no consultório, a insegurança na hora de pegar o plicômetro (adipômetro) para uma <strong>avaliação antropométrica</strong> é real e justificável. 
          </p>
          <p className="mb-4">
            Entregar resultados aos pacientes exige muito mais do que pedir para eles <Link to="/qual_melhor_horario_para_se_pesar" className="text-green-700 font-bold hover:underline">subirem na balança</Link>. O corpo humano é um complexo ecossistema de fluidos, tecidos moles e estruturas ósseas. Neste guia definitivo, vamos desmembrar a ciência da <Link to="/o_que_e_antropometria" className="text-green-700 font-bold hover:underline">cineantropometria</Link>, desde sua história até a aplicação exata das fórmulas de predição de gordura.
          </p>

          <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <BookOpen className="text-green-700"/> A História Oculta da Antropometria: Arte e Ciência
          </h2>
          <p className="mb-4">
            A história da <strong>Avaliação Antropométrica</strong> não começou em modernos laboratórios de fisiologia, mas sim com a colheita obstinada de elementos sobre as proporções do corpo humano realizada por artistas clássicos que aplicavam esses conhecimentos às suas obras imortais. Desde o Antigo Egito, já havia o conhecimento de regras de proporções relacionando dimensões anatômicas com a estatura humana total.
          </p>
          <p className="mb-4">
            O grande gênio renascentista <strong>Albrecht Dürer</strong> (nascido em 1471), na Alemanha, foi um verdadeiro pioneiro. Fascinado pelos trabalhos de Vitrúvio e pelos corpos pintados por italianos, Dürer não acreditava que a arte fosse apenas "inspiração divina". Para ele, sem o conhecimento matemático e geométrico para guiar a <strong>avaliação física</strong>, a arte era apenas uma "mistura fortuita de imitação irrefletida".
          </p>
          <p className="mb-4">
            Durante anos, Dürer dedicou-se a remediar isso. Em sua obra seminal de 1528, <em>"Vier Bücher von Menschlicher Proportion"</em> (Quatro Livros sobre as Proporções Humanas), ele revolucionou a área da avaliação física. Ele abandonou as medidas ideais padronizadas e procurou a verdadeira beleza avaliando a variabilidade humana. Dürer realizou investigações físicas e antropométricas em cerca de 200 a 300 pessoas vivas. Ele mapeou corpos femininos e masculinos, descrevendo as dimensões exatas da cabeça, pé e mãos. O que antes era apenas um guia para pintores tornou-se a semente da estereometria e do que viria a ser a avaliação antropométrica comparada que embasa o nosso trabalho clínico de hoje em dia.
          </p>

          <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700"/> Avaliação Física: Comparativo de Métodos
          </h2>
          <p className="mb-8">
            Para saber como conduzir uma ótima avaliação antropométrica da composição corporal no consultório, primeiro precisamos entender as vantagens e desvantagens de cada método de avaliação física disponível atualmente na literatura.
          </p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/5">Método</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-2/5">Vantagens (Prós)</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-2/5">Desvantagens (Contras)</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Avaliação Antropométrica (Dobras)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Baixo custo de setup, portátil. Fraciona o corpo em massa óssea, muscular e adiposa. Imune à hidratação e alimentação aguda.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Exige rigoroso treinamento técnico do avaliador para diminuir o ETM na avaliação física. Inviável em casos de obesidade mórbida severa.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic"><Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="hover:underline">Bioimpedância (BIA)</Link></td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Avaliação rápida (1 minuto), dispensa o contato invasivo físico (pinçamentos da avaliação antropométrica). Gera laudos impressos ou digitais instantâneos.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Extrema variabilidade (péssima precisão) se o paciente estiver desidratado, menstruado, cheio de fezes/urina ou com a pele úmida.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">DEXA Scan</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Padrão Ouro clínico (modelo multicompartimental). O único capaz de mapear a densidade mineral óssea real e separar a gordura visceral.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Altíssimo custo financeiro (Equipamento de Raio-X). Emite radiação. Impraticável para avaliação física em clubes e academias comerciais.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Pesagem Hidrostática</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Excelente padrão acadêmico pioneiro. Calcula o volume corporal diretamente através da densidade da água (Princípio de Arquimedes).</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Requer tanques imensos. O paciente deve afundar e exalar todo o ar dos pulmões. Risco de fobia e desconforto extremo durante a avaliação.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="marcacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Ruler className="text-green-700"/> A Regra de Ouro da Avaliação Antropométrica: "Só é bom quem marca"
          </h2>
          <p className="mb-4">
            Um dos maiores erros ensinados por hábito em algumas faculdades, e perpetuado por maus profissionais na rotina do consultório, é a tentativa de encontrar os <strong>pontos anatômicos</strong> no "olhômetro" ou na "base da pressa" durante a avaliação antropométrica. O tecido adiposo é altamente móvel e a pele não possui um limite visual de onde termina o meio do osso ou o meio do ventre muscular. 
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6">
            <p className="m-0 mb-3">O avaliador de excelência deve, <strong>obrigatoriamente</strong>, estar munido de um <strong>lápis dermográfico</strong> ou delineador. A sequência correta exige palpar a estrutura óssea com firmeza (ex: o acrômio na escápula), usar uma fita metálica para avaliação física inelástica para aferir a distância exata até a articulação inferior (ex: o rádio no cotovelo) e, só então, desenhar um "X" preciso na pele.</p>
            <p className="m-0">Se você confia na sua visão e erra apenas 1 a 2 cm do ponto exato (por exemplo, no pliegue Tríceps ou Abdominal), a preensão pode capturar uma camada mais grossa de fáscia ou evitar o pico de tecido subcutâneo. Isso altera severamente os milímetros lidos no adipômetro, falsificando não apenas aquela dobra, mas todo o <Link to="/percentual-gordura-feminino-ideal" className="text-blue-700 font-bold hover:underline">percentual de gordura de pacientes femininas</Link> e masculinos nas reavaliações.</p>
          </div>

          <h2 id="estatistica" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Activity className="text-green-700"/> Estatística Básica: Média ou Mediana?
          </h2>
          <p className="mb-4">
            Mesmo sendo exímio na marcação, a variabilidade biológica do paciente e as oscilações do manuseio geram milhares de possibilidades de erro na <strong>avaliação física</strong>. Na avaliação antropométrica clínica e acadêmica, o <strong>Erro Técnico de Medição (ETM)</strong> é a ferramenta matemática usada para comprovar se você é um avaliador <em>Preciso</em> (acerta perto sempre) e <em>Exato</em> (acerta no alvo). O cálculo do ETM é o desvio-padrão entre as suas medidas repetidas. O ETM pode ser avaliado intra-avaliador (você medindo o mesmo paciente) ou interavaliador (você comparado com a precisão de outro profissional experiente).
          </p>
          <p className="mb-4">
            Mas, na prática clínica diária, quantas vezes devemos aferir uma mesma dobra cutânea para fugir do erro sem ficar duas horas na consulta? A estatística fornece o roteiro:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li><strong>O Padrão Típico (Duplicata):</strong> O protocolo comum exige medir o paciente inteiro de cima a baixo uma vez, e depois fazer o percurso novamente, gerando 2 medidas por ponto anatômico na avaliação antropométrica. Como são dois números, você aplica a <strong>Média Aritmética</strong> entre eles.</li>
            <li><strong>O Padrão Ideal (Triplicata):</strong> Usado em pesquisas rigorosas ou quando as duas primeiras medidas apresentam uma disparidade inaceitável. Você mede o mesmo ponto 3 vezes. Aqui, a estatística da avaliação física exige o uso da <strong>Mediana</strong> (o valor central da sequência). Por exemplo, se você encontrou [11mm, 12mm, 20mm], o 20mm foi um erro grave de preensão muscular. A média seria corrompida para 14,3mm, mas a <strong>Mediana</strong> joga fora os extremos e fica inteligentemente com <strong>12mm</strong>.</li>
          </ul>

          <h2 id="medidas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <UserCheck className="text-green-700"/> O Arsenal de Medidas Corporais
          </h2>
          <p className="mb-4">Para abastecer as fórmulas preditivas da avaliação antropométrica e modelar o somatotipo exato do paciente, nós precisamos organizar a nossa rotina de marcações em 4 "famílias" de medidas anatômicas. Conheça as principais utilizadas no mapeamento do perfil restrito e completo:</p>
          
          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> 1. Medidas Básicas (O Alicerce Estrutural)
              </h3>
              <p className="text-slate-600 m-0">
                Formam o mapa primário da estrutura na avaliação física. A <strong>Estatura Total</strong> é aferida num estadiômetro de parede com o avaliado inspirando fundo e travando a cabeça no Plano de Frankfort. Englobam ainda o Peso Total na balança, a Estatura Sentado (medida com um banco de altura conhecida) e a Envergadura Máxima dos braços.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> 2. Dobras Cutâneas (O Tecido Adiposo)
              </h3>
              <p className="text-slate-600 m-0 mb-3">
                Afeição da espessura do tecido adiposo subcutâneo (gordura + pele) isolado da musculatura. Realizadas exclusivamente com plicômetros calibrados exercendo pressão padronizada durante a avaliação antropométrica. As principais são:
              </p>
              <ul className="list-disc pl-5 text-slate-600 marker:text-blue-500 m-0 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li><strong>Tríceps e Bíceps:</strong> Marcação no ponto médio entre o acrômio e o rádio.</li>
                <li><strong>Subescapular:</strong> Oblíqua, abaixo do ângulo inferior da escápula.</li>
                <li><strong>Crista Ilíaca e Supraespinal:</strong> Capturam os depósitos laterais de gordura abdominal acima do osso ilíaco.</li>
                <li><strong>Abdominal:</strong> Vertical, a exatos 5 cm ao lado (direito) da cicatriz umbilical.</li>
                <li><strong>Coxa Frontal e Panturrilha:</strong> Capturam os depósitos nos membros inferiores, fundamentais na mulher.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500" /> 3. Perímetros Corporais (Os Volumes e Riscos)
              </h3>
              <p className="text-slate-600 m-0 mb-3">
                Aferidos com fita metálica tencionada em técnica de mãos cruzadas para avaliar hipertrofia ou riscos centrais. As principais circunferências da avaliação antropométrica são:
              </p>
              <ul className="list-disc pl-5 text-slate-600 marker:text-orange-500 m-0 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li><strong>Braço Relaxado e Flexionado:</strong> Este último aferindo o pico de tensão do bíceps.</li>
                <li><strong>Antebraço e Punho:</strong> Volumes apendiculares distais.</li>
                <li><strong>Tórax (Peitoral):</strong> Marcado na altura da linha mesoesternal.</li>
                <li><strong>Cintura e Quadril:</strong> Onde a cintura mede o menor perímetro e o quadril o maior relevo glúteo. Indicadores fortes de risco metabólico.</li>
                <li><strong>Coxa e Panturrilha:</strong> Mensuram o volume total dos membros inferiores.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500" /> 4. Diâmetros Ósseos (O Chassi Biológico)
              </h3>
              <p className="text-slate-600 m-0">
                Aferem a largura ou espessura entre proeminências ósseas usando um paquímetro de alumínio com hastes compressivas. Fundamentais no cálculo do modelo Tetracompartimental da avaliação antropométrica para isolar o esqueleto do músculo. Os mais utilizados clinicamente são os diâmetros <strong>Biepicondiliano do Úmero</strong> (cotovelo) e <strong>Biepicondiliano do Fêmur</strong> (joelho), além das grandes envergaduras de tronco como o Biacromial e Bi-iliocrestídeo.
              </p>
            </div>
          </div>

          <h2 id="isak" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Globe className="text-green-700"/> O Protocolo ISAK da Avaliação Física e Seus Níveis
          </h2>
          <p className="mb-4">
            O protocolo da <em>International Society for the Advancement of Kinanthropometry</em> (ISAK) é a linguagem unificada mundial da cineantropometria. Uma avaliação antropométrica tirada por um profissional Nível 1 no Rio de Janeiro usando essa padronização rígida de pontos será matematicamente idêntica à de um profissional na Austrália. O foco do curso ISAK não está apenas em gerar um percentual de gordura no final, mas na precisão cirúrgica contínua da avaliação física.
          </p>
          <p className="mb-4">A ISAK divide o domínio metodológico da avaliação antropométrica em hierarquias técnicas de excelência:</p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li><strong>Nível 1 (O Avaliador Técnico):</strong> É capacitado no "Perfil Restrito". O profissional domina com maestria as Medidas Básicas, 8 dobras cutâneas, 5 perímetros e 2 diâmetros ósseos na avaliação antropométrica. Possui um limite rigoroso de erro técnico de medida aceitável, não podendo o ETM passar de 7,5% para dobras cutâneas e 1,5% para as outras variáveis. O perfil ideal de atuação é em academias e clínicas de nutrição focadas em desporto.</li>
            <li><strong>Nível 2 (O Antropometrista Especialista):</strong> Adiciona a todo o leque anterior um aprofundamento formidável da avaliação física. Realiza o Perfil Completo da avaliação física (um total de 43 medidas) e reduz seu teto de ETM para um limite muito apertado (máximo de 5% de tolerância de erro para as dobras cutâneas). Capacitado para pesquisa científica laboratorial rigorosa e controle de alto rendimento.</li>
            <li><strong>Níveis 3 e 4:</strong> São os Curadores e Instrutores. Profissionais como Instrutores ISAK Nível 4 que são responsáveis não apenas por medirem na perfeição, mas por auditarem, treinarem e testarem a acurácia de profissionais mais jovens em avaliação antropométrica globalmente.</li>
          </ul>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Aprenda: A Avaliação Antropométrica ISAK na Prática</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="_Fmm4T4Ooto" title="Demonstração Prática do Perfil Restrito ISAK na Avaliação Física" />
            </div>
          </div>

          <h2 id="formulas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Brain className="text-green-700"/> As Fórmulas de Regressão: Escolhendo o Caminho
          </h2>
          <p className="mb-4">
            As dobras na avaliação física em si não nos dizem o percentual. Para transformar as medidas em "Porcentagem de Gordura", nós alimentamos os números da avaliação antropométrica em uma Equação de Regressão. A maioria dessas equações famosas foi criada na década de 70, baseando-se em amostras comparadas com o método da pesagem hidrostática. É um erro letal avaliar um <Link to="/nutricao_para_ironman_703" className="text-green-700 font-bold hover:underline">atleta olímpico de Ironman</Link> usando uma equação desenvolvida para mulheres obesas de 60 anos. Você deve escolher o protocolo da avaliação antropométrica que mais se aproxima do fenótipo do seu paciente no consultório.
          </p>
          
          <div className="space-y-4 my-8">
            <div className="p-4 bg-slate-50 border-l-4 border-green-600 rounded-r-2xl shadow-sm">
              <h3 className="font-bold text-base text-slate-800 m-0">1. Equação de Durnin & Womersley (1974)</h3>
              <p className="text-sm text-slate-600 m-0 mt-2">Os pesquisadores escoceses testaram quase 500 indivíduos num amplo leque etário de 16 a 72 anos. Utiliza a força da equação logarítmica para uma densidade que se desvia ao decorrer do avanço natural da idade. Usa as 4 dobras clássicas da metade superior na avaliação física (Bíceps, Tríceps, Subescapular e Supra-ilíaca). É ideal e muito confortável na avaliação antropométrica para mulheres, pois evita a medição invasiva de coxa frontal e o constrangimento do abdômen.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-orange-600 rounded-r-2xl shadow-sm">
              <h3 className="font-bold text-base text-slate-800 m-0">2. Equação de Faulkner (1968)</h3>
              <p className="text-sm text-slate-600 m-0 mt-2">Uma das equações mais famosas e antigas no Brasil. Criada no ambiente dos esportes aquáticos, utiliza as dobras (Tríceps, Subescapular, Supraespinal e Abdominal) acrescida da famosa constante "fisiológica" de Faulkner (5,783) na avaliação física. Embora seja extremamente utilizada, a literatura da avaliação antropométrica moderna recomenda precaução: as validações indicam que ela tende a superestimar percentuais altos, sendo sua aplicação mais focada num espectro de jovens masculinos desportistas entre 18 a 25 anos, com as quais Faulkner modelou o estudo na Universidade de Michigan.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
              <h3 className="font-bold text-base text-slate-800 m-0">3. Equações Generalizadas de Jackson & Pollock (1978)</h3>
              <p className="text-sm text-slate-600 m-0 mt-2">Foram o maior salto tecnológico em avaliação antropométrica ao criarem fórmulas "generalizadas" em vez de "específicas" de nicho. Eles detectaram o problema de usar equações lineares na avaliação física para medir uma fisiologia que é "curvilínea" e que afeta a densidade óssea ao longo do tempo. Incorporaram as variáveis preditivas como o componente "quadrático" do somatório de dobras e a "Idade" cronológica do sujeito nas fórmulas da avaliação antropométrica. Criaram versões muito validadas usando somas densas de 7 Dobras e protocolos ágeis e excelentes de 3 Dobras (Peito, Abdômen e Coxa para homens; e Tríceps, Supra-ilíaca e Coxa para mulheres). São fantásticas para a avaliação física do público moderno das academias, com ETM super acurados.</p>
            </div>
          </div>

          <h2 id="polemica-7-dobras" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <HelpCircle className="text-green-700"/> O Mito das 7 Dobras: Por que excluir Peitoral e Axilar?
          </h2>
          <p className="mb-4">
            A grande dúvida de muitos avaliadores iniciantes na avaliação física é: <em>"Se a fórmula de 7 dobras de Jackson & Pollock existe e parece mais completa, por que a maioria dos softwares de avaliação antropométrica foca na fórmula de 3 ou 4 dobras, excluindo o Peitoral e a Axilar Média?"</em>
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6">
            <p className="m-0 mb-3">A resposta da avaliação antropométrica está na <strong>redundância estatística</strong> e no constrangimento clínico da avaliação física. Estudos clássicos conduzidos por Pollock, Jackson e colaboradores demonstraram que as dobras cutâneas do nosso corpo são altamente correlacionadas entre si — ou seja, elas tendem a medir exatamente o mesmo "fator" de gordura subcutânea.</p>
            <p className="m-0">Quando os pesquisadores aplicaram a análise de regressão múltipla, descobriram que adicionar a dobra Peitoral e a Axilar Média na equação da avaliação antropométrica (formando 7 dobras) aumentava muito pouco a precisão real da estimativa da densidade corporal em relação a usar apenas 3 ou 4 dobras bem distribuídas. A própria equipe recomendou oficialmente na avaliação física o uso de equações simplificadas, afirmando que este modelo é estatisticamente robusto, possui índices de erro idênticos às equações mais complexas e é imensamente mais prático para a avaliação antropométrica em massa no consultório. Na prática, excluir o Peitoral e a Axilar Média poupa tempo e evita o constrangimento das pacientes na avaliação física sem perder um grama de validade científica.</p>
          </div>

          <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Target className="text-green-700"/> Entregando Resultados Clínicos e Desportivos na Avaliação Física
          </h2>
          <p className="mb-4">
            Quando o paciente retorna para a reavaliação física de 45 dias, você precisa chancelar sua competência na avaliação antropométrica revelando a matemática fina do que ocorreu debaixo da pele dele. O pior erro comercial do nutricionista é imprimir um papel genérico dizendo apenas: "Seu peso baixou de 80kg para 78kg e a gordura caiu 2%". O seu trabalho com o plicômetro fornece um arsenal inteiro de índices da avaliação antropométrica. Veja como entregar resultados de elite:
          </p>
          
          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">A Matemática Fracionada da Composição Básica da Avaliação Antropométrica</h3>
              <p className="text-slate-600 leading-relaxed text-sm m-0">
                Esta é a fundação da avaliação física que combate a balança ordinária. Utilizando as equações que selecionamos na avaliação antropométrica e o valor do adipômetro, você deverá informar ao atleta não só o <strong>Percentual de Gordura (%G)</strong> e o <strong>IMC</strong> tradicional (que mascara os hipertróficos), mas fatiar os quilos absolutos. O paciente verá a coluna da <strong>Massa Gorda</strong> (peso isolado e inativo do tecido adiposo) caindo na avaliação física, enquanto a coluna da <strong>Massa Magra</strong> (estrutura muscular, esquelética, líquidos e órgãos) deve subir ou se preservar agressivamente perante a <Link to="/quantas-calorias-gasto-por-dia" className="text-green-700 font-bold hover:underline">taxa metabólica basal e o déficit dietético</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">Avisos e Relações de Distribuição Central na Avaliação Física</h3>
              <p className="text-slate-600 leading-relaxed text-sm m-0">
                Para diagnosticar pacientes na avaliação antropométrica com risco inflamatório forte, cruze as circunferências em índices vitais da avaliação física. Informe a ele a métrica da <strong>Relação Cintura Quadril (RCQ)</strong> (riscos andrógenos cardíacos), a razão preventiva de <strong>Cintura/Estatura</strong> e não poupe de demonstrar o <strong>apVAT</strong>. O apVAT é a revolução da avaliação antropométrica que, usando fórmulas matemáticas da cintura e da coxa cruzadas em inteligência acadêmica e chancelada via <em>CT scans</em>, quantifica numericamente o tecido adiposo visceral (a letal gordura perivisceral) que destrói o fígado e inibe os receptores de insulina do obeso sarcopênico na avaliação física. Isso traz o apelo cardiovascular de prevenção imediata para sua conduta de avaliação antropométrica.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">Os Marcadores Puros da Avaliação Antropométrica: O Somatório das Dobras</h3>
              <p className="text-slate-600 leading-relaxed text-sm m-0">
                Fórmulas de "%G" da avaliação física envelhecem. O peso esconde água retida de estresse inflamatório agudo. Para o atleta de <em>treinos de endurance</em> ou lutador fazendo corte extremo de peso, não falamos a linguagem incerta da percentagem na avaliação antropométrica, mas sim a métrica brutal absoluta do plicômetro. Embasados nos estudos de experts com campeões ou nas normas ISAK, apresente ao seu paciente na avaliação física se a "capa" diminuiu, demonstrando a redução total nos eixos do <strong>Somatório de 6 Dobras Cutâneas</strong> da avaliação antropométrica (Tríceps, Subescapular, Supraespinal, Abdominal, Coxa e Panturrilha) e no exaustivo <strong>Somatório de 8 Dobras</strong> para detalhar o acúmulo genético exato da pele na avaliação física. O tecido afina perante os adipômetros ou seu <Link to="/o-que-e-dieta-mediterranea" className="text-green-700 font-bold hover:underline">plano nutricional e dieta</Link> de avaliação antropométrica é um fracasso no camp.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">Perímetros Corrigidos de Pura Massa Músculo Esquelética na Avaliação Física</h3>
              <p className="text-slate-600 leading-relaxed text-sm m-0">
                A pergunta mortífera da avaliação física no consultório esportivo: "Doutor, minha fita de braço aumentou de 38 cm para 40 cm na avaliação antropométrica. Foi pura hipertrofia do meu bíceps?". O nutricionista moderno usa as leis do fracionamento da avaliação física! Apresente o laudo das <strong>Circunferências Corrigidas pela Adiposidade</strong>. Retirando algebricamente usando o "PI" matemático do perímetro sujo na avaliação antropométrica, extirpamos o pneu adiposo circunferencial revelando o cilindro puro real e proteico do músculo esquelético, desmascarando a ilusão de ganho na balança frente a hipertrofia de qualidade. O paciente visualiza em milímetros as reais seções transversais musculares ativas desenvolvidas na avaliação física. Adicionalmente, classifique e apresente se ele é um trator ou um lince usando o <strong>Somatotipo de Heath-Carter</strong> na avaliação antropométrica. O software calcula as cargas da endomorfia, mesomorfia (robusteza muscular) e ectomorfia (linearidade frágil) da avaliação física apontando visualmente na Somatocarta se a genética endócrina é ideal para seu alvo atlético na avaliação antropométrica. Para completar, o uso magistral de diâmetros ósseos alimentam o <strong>IMO (Índice Músculo Ósseo)</strong> informando se sua mecânica esquelética alcançou o pico de transporte de lastro muscular possível e se o <strong>IAM (Índice Adiposo Muscular)</strong> exibe uma melhora esteticamente agradável do volume metabólico magro da avaliação física em detrimento do lastro adiposo estático da avaliação antropométrica.
              </p>
            </div>
          </div>

          {/* CALCULADORA DE SOMATOTIPO SIMPLIFICADA E GRÁFICO SVG */}
          <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Zap className="text-green-700"/> Simulador: Calculadora e Gráfico de Somatotipo da Avaliação Física
          </h2>
          <p className="mb-8">
            Você já sabe o seu somatotipo da avaliação antropométrica ou o do seu paciente? Insira os três componentes da avaliação física abaixo para visualizar o biotipo exato ser gerado matematicamente no plano cartesiano da Somatocarta!
          </p>

          <div className="my-10 bg-slate-900 border border-slate-800 shadow-2xl rounded-[3rem] overflow-hidden">
            <div className="p-6 md:p-8 text-center border-b border-slate-800">
              <strong className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                <Brain className="text-green-500" /> Calculadora Heath-Carter Simplificada
              </strong>
            </div>

            <form onSubmit={calcularSomatotipo} className="p-6 md:p-8 space-y-6 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                
                <label className="block">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">Endomorfia</span>
                  <input type="text" inputMode="decimal" name="endo" value={somaDados.endo} onChange={handleSomaChange} required placeholder="Ex: 3.5" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                </label>
                
                <label className="block">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1 block">Mesomorfia</span>
                  <input type="text" inputMode="decimal" name="meso" value={somaDados.meso} onChange={handleSomaChange} required placeholder="Ex: 5.0" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500" />
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1 block">Ectomorfia</span>
                  <input type="text" inputMode="decimal" name="ecto" value={somaDados.ecto} onChange={handleSomaChange} required placeholder="Ex: 2.0" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500" />
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-green-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] border-none cursor-pointer">
                  Plotar Somatocarta Matemática
                </button>
              </div>
            </form>

            {/* ÁREA DE RESULTADO E GRÁFICO (RENDERIZADO APÓS CÁLCULO) */}
            {somatotipo && (
              <div className="bg-slate-800 p-6 md:p-8 border-t border-slate-700 flex flex-col items-center">
                <div className="mb-6 w-full text-center">
                  <span className="inline-block bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-bold tracking-widest shadow-inner">
                    Classificação: <span className="text-green-400">{somatotipo.texto}</span>
                  </span>
                </div>

                {/* PLOTAGEM DO GRÁFICO EM SVG */}
                <div className="relative w-full max-w-sm aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 flex items-center justify-center p-4">
                   {/* Eixos e Triângulo Base */}
                   <svg viewBox="-10 -10 20 20" className="w-full h-full opacity-80" preserveAspectRatio="xMidYMid meet">
                      {/* Eixos X e Y */}
                      <line x1="-10" y1="0" x2="10" y2="0" stroke="#334155" strokeWidth="0.1" />
                      <line x1="0" y1="-10" x2="0" y2="10" stroke="#334155" strokeWidth="0.1" />
                      
                      {/* Triângulo de Reuleaux (Simplificado) */}
                      <path d="M 0 -8 L 8 6 L -8 6 Z" fill="none" stroke="#475569" strokeWidth="0.1" strokeDasharray="0.3" />
                      <path d="M 0 0 L 0 -8 M 0 0 L 8 6 M 0 0 L -8 6" fill="none" stroke="#475569" strokeWidth="0.1" />

                      {/* Legendas dos Vértices */}
                      <text x="-9" y="8" fill="#60a5fa" fontSize="0.8" fontWeight="bold">ENDO</text>
                      <text x="-1.5" y="-8.5" fill="#fb923c" fontSize="0.8" fontWeight="bold">MESO</text>
                      <text x="7" y="8" fill="#c084fc" fontSize="0.8" fontWeight="bold">ECTO</text>

                      {/* Ponto Plotado do Somatotipo (Y invertido para adequar o SVG onde o Y desce) */}
                      <circle cx={somatotipo.x} cy={-somatotipo.y} r="0.6" fill="#22c55e" className="animate-pulse" />
                      <circle cx={somatotipo.x} cy={-somatotipo.y} r="0.2" fill="#fff" />
                   </svg>
                </div>
                <p className="text-slate-500 text-xs text-center mt-4 m-0">Gráfico de Dispersão bidimensional plotado no eixo da Avaliação Antropométrica: X = {somatotipo.x} / Y = {somatotipo.y}</p>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Activity className="text-green-700"/> Entendendo a Somatocarta na Avaliação Física
          </h2>
          <p className="mb-4">
            O método criado por Heath & Carter no final dos anos 60 revolucionou a educação física escolar e a avaliação antropométrica desportiva. Trata-se da avaliação do <strong>Somatotipo</strong> na avaliação física. Ele usa as dobras cutâneas, circunferências de braço e perna e a largura óssea de fêmur e úmero para "plotar" o paciente da avaliação antropométrica em um mapa (A Somatocarta).
          </p>
          <p className="mb-4">
            O somatotipo da avaliação física dita que existem três tendências embrionárias e genéticas predominantes no corpo humano:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 space-y-2 mb-8">
            <li><strong>Endomorfia (Relativa Adiposidade):</strong> O perfil da avaliação antropométrica que engorda com extrema facilidade, ossos largos, rosto redondo, mas que perde peso devagar. Necessita de dieta com déficit restrito e treino cardio intenso na avaliação física.</li>
            <li><strong>Mesomorfia (Relativa Robustez Muscular):</strong> O "agraciado genético" da avaliação antropométrica. Tem facilidade de ganho de massa, ossos de alavancagem média, ombros largos e cintura fina na avaliação física.</li>
            <li><strong>Ectomorfia (Relativa Magreza Ocular):</strong> Alta taxa metabólica basal na avaliação antropométrica, membros muito compridos, dificuldade absurda para ganhar peso (tanto gordo quanto magro) na avaliação física. É o atleta nato para corridas de fundo e salto em altura.</li>
          </ul>

          {/* VENDAS DA PLANILHA - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                <Zap size={14} className="fill-white" />
                <span>Ferramenta de Avaliação Física!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                    <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para Avaliação Antropométrica" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
                </div>

                <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                    <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                        Planilha de Avaliação Antropométrica <span className="text-green-700">Inteligente PRO</span>
                    </h4>

                    <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                        <ImagemOtimizada src={`${githubImgBase}PlanilhaImagem/Planilha_Capa.webp`} alt="Capa da Planilha de Avaliação Antropométrica Inteligente VBA Excel" className="w-full h-auto object-contain" width="200" height="200" loading="lazy" />
                    </div>

                    <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                        Você já aprendeu a parte teórica da avaliação antropométrica. Agora, na hora da avaliação física, seu tempo é valioso demais para você ficar 20 minutos na frente do paciente apertando teclas da calculadora e digitando fórmulas logarítmicas de regressão manualmente. 
                        A nossa <strong>Planilha de Avaliação Física desenvolvida em Excel com módulos de VBA</strong> é a central completa de automação da avaliação antropométrica clínica. Ela plota a sua Somatocarta automaticamente em um gráfico 2D da avaliação física, calcula os temidos Perímetros Corrigidos de músculo puro da avaliação antropométrica e executa o processamento pesado do apVAT. E o melhor: gera um Laudo visual incrível em 30 segundos de avaliação física com todos os índices complexos destrinchados, em um clique, pronto para você impressionar quem confia na sua avaliação antropométrica e garantir o retorno financeiro em consultas vindouras!
                    </p>

                    <Link to="/planilha" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Comprar a Planilha de Avaliação Física PRO">
                        <ShoppingCart size={16} />
                        Automatize Seus Laudos de Avaliação Antropométrica Agora
                    </Link>
                </div>
            </div> 
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700"/> Conclusão: Dominando a Avaliação Física
          </h2>
          <p className="mb-4">
            Na era da tecnologia de ponta e das bioimpedâncias que emitem recibos coloridos da avaliação física em poucos segundos, a arte mecânica da avaliação antropométrica clássica não morreu; ela se destaca como uma ferramenta "raiz" de veracidade biológica inegável na avaliação física.
          </p>
          <p className="mb-4">
            Um bom avaliador físico e nutricionista que se apoia nos rígidos protocolos da ISAK da avaliação antropométrica detém a habilidade tátil de soltar as fáscias musculares da gordura na avaliação física, marca seus pontos criteriosamente da avaliação antropométrica e, finalmente, converte esses dados brutos em uma ferramenta de automação da avaliação física (como as modernas Planilhas Clínicas em VBA), jamais será substituído pelo "apertar de botão" de uma balança na avaliação antropométrica. O paciente percebe o cuidado palpável da avaliação física e, fisiologicamente, os dados da avaliação antropométrica estarão incólumes contra as flutuações hormonais e dietéticas que arruinariam outras modalidades de imagem. Domine as equações corretas da avaliação física, confie no peso exato do Somatório da avaliação antropométrica e eleve a excelência da entrega no seu consultório de avaliação física!
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes de Avaliação Física (FAQ)
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
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                    <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🚀 E-E-A-T (FONTES CIENTÍFICAS E AVISO LEGAL) */}
          <div className="my-12 p-6 bg-slate-100 rounded-2xl border border-slate-200">
             <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Acadêmicas e Fontes da Avaliação Antropométrica</h3>
             <ul className="text-xs text-slate-500 leading-relaxed m-0 list-disc pl-4 space-y-1">
               <li><a href="https://isak.global/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">ISAK - International Society for the Advancement of Kinanthropometry. (Padrões de Medição em Perfil Restrito na avaliação física).</a></li>
               <li><a href="https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/body-fat-assessed-from-total-body-density-and-its-estimation-from-skinfold-thickness-measurements-on-481-men-and-women-aged-from-16-to-72-years/DAC8BA25856FCEB30E22F60E0AF80D07" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">DURNIN, J.V.G.A., & WOMERSLEY, J. (1974). <em>Body fat assessed from total body density and its estimation from skinfold thickness: measurements on 481 men and women aged from 16 to 72 years na avaliação antropométrica.</em> British Journal of Nutrition.</a></li>
               <li><a href="https://pubmed.ncbi.nlm.nih.gov/718832/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">JACKSON, A.S., & POLLOCK, M.L. (1978). <em>Generalized equations for predicting body density of men na avaliação física.</em> British Journal of Nutrition.</a></li>
               <li><a href="https://pubmed.ncbi.nlm.nih.gov/4928259/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">CARTER, J.E.L. (1970). <em>The Somatotypes of Athletes - A Review na avaliação antropométrica.</em> Human Biology.</a></li>
             </ul>
             <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
               <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
               <span className="text-[10px] uppercase font-bold text-slate-500">Aviso Nutricional da Avaliação Antropométrica: Este conteúdo técnico destina-se primariamente a estudantes e profissionais de Educação Física e Nutrição sobre avaliação física. Avaliações antropométricas devem ser feitas exclusivamente por profissionais habilitados. O artigo possui fim meramente educativo e não substitui diagnósticos médicos ou treinamentos de nivelamento formal da ISAK de avaliação física.</span>
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
              alt="Marco Aurélio Jr. - Autor e Nutricionista focado em Ciência e Antropometria ISAK 1 na Avaliação Física" 
              title="Marco Aurélio Jr. - Estudante de Nutrição ISAK 1 de Avaliação Antropométrica"
              className="w-full h-full object-cover"
              width="96"
              height="96"
              loading="lazy"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Sou apaixonado por traduzir a barreira científica entre a academia da avaliação física e o consultório diário da avaliação antropométrica. Através do conhecimento aprofundado na Cineantropometria e com o treinamento formal dos padrões ISAK na avaliação física, procuro entregar a profissionais recém-formados e alunos metodologias práticas que automatizam a captação de dados da avaliação antropométrica sem comprometer a exatidão fisiológica da avaliação física.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}