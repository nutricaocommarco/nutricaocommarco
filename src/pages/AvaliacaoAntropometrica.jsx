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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "Qual a diferença entre Antropometria e Bioimpedância?",
      resposta: "A antropometria mede o corpo fisicamente através de dobras, ossos e perímetros, sendo imune a oscilações diárias. A bioimpedância usa uma corrente elétrica para estimar a água corporal, sendo fortemente alterada se o paciente estiver desidratado, menstruado, ou de bexiga cheia."
    },
    {
      pergunta: "O que é o Erro Técnico de Medição (ETM)?",
      resposta: "O ETM é um cálculo estatístico (desvio-padrão entre medidas repetidas) que afere a precisão do avaliador (intra-avaliador) ou a exatidão entre vários avaliadores (inter-avaliador). A ISAK exige que o ETM para dobras cutâneas seja inferior a 5% (ou 7,5% para iniciantes)."
    },
    {
      pergunta: "Para que serve a Somatocarta?",
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
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Avaliação e Medidas</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
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
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-700 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-700' : ''}`} />
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
                  <li><a href="#resultados" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Interpretando Resultados e Índices</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO OTIMIZADA */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <ImagemOtimizada 
                src={antropometriaCapa}
                alt="Pinguim Pingus vestindo jaleco de nutricionista em estilo Disney Pixar 3D, realizando a medição de uma dobra cutânea com um adipômetro científico, em um consultório claro."
                title="Avaliação Antropométrica e o Píngus"
                className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                priority="high"
              />
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                O domínio da anatomia de superfície e do adipômetro é a maior arma do nutricionista e do avaliador físico moderno.
              </p>
            </figcaption>
          </figure>

          {/* 📝 INTRODUÇÃO */}
          <p>
            Seja você um estudante quebrando a cabeça nas aulas práticas de <Link to="/blog" className="text-green-700 font-bold hover:underline">Nutrição ou Educação Física</Link>, ou um profissional recém-formado buscando exatidão no consultório, a insegurança na hora de pegar o plicômetro (adipômetro) é real e justificável. 
          </p>
          <p>
            Entregar resultados aos pacientes exige muito mais do que pedir para eles subirem na balança. O corpo humano é um complexo ecossistema de fluidos, tecidos moles e estruturas ósseas. Neste guia definitivo, vamos desmembrar a ciência da <strong>cineantropometria</strong>, desde sua história até a aplicação exata das fórmulas de predição de gordura.
          </p>

          <h2 id="historia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <BookOpen className="text-green-700"/> A História Oculta da Antropometria: Arte e Ciência
          </h2>
          <p>
            A história da Antropometria não começou em modernos laboratórios de fisiologia, mas sim com a colheita obstinada de elementos sobre as proporções do corpo humano realizada por artistas clássicos que aplicavam esses conhecimentos às suas obras imortais. Desde o Antigo Egito, já havia o conhecimento de regras de proporções relacionando dimensões anatômicas com a estatura humana total[cite: 10].
          </p>
          <p>
            O grande gênio renascentista <strong>Albrecht Dürer</strong> (nascido em 1471), na Alemanha, foi um verdadeiro pioneiro. Fascinado pelos trabalhos de Vitrúvio e pelos corpos pintados por italianos, Dürer não acreditava que a arte fosse apenas "inspiração divina". Para ele, sem o conhecimento matemático e geométrico, a arte era apenas uma "mistura fortuita de imitação irrefletida"[cite: 10].
          </p>
          <p>
            Durante anos, Dürer dedicou-se a remediar isso. Em sua obra seminal de 1528, <em>"Vier Bücher von Menschlicher Proportion"</em> (Quatro Livros sobre as Proporções Humanas), ele revolucionou a área[cite: 10]. Ele abandonou as medidas ideais padronizadas e procurou a verdadeira beleza avaliando a variabilidade humana. Dürer realizou investigações físicas em cerca de 200 a 300 pessoas vivas[cite: 10]. Ele mapeou corpos femininos e masculinos, descrevendo as dimensões da cabeça, pé e mãos[cite: 10]. O que antes era apenas um guia para pintores tornou-se a semente da estereometria e do que viria a ser a antropometria comparada (e diferencial) que embasa o nosso trabalho clínico de hoje em dia[cite: 10].
          </p>

          <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700"/> Avaliação Física: Comparativo de Métodos
          </h2>
          <p className="mb-8">
            Para saber como avaliar a composição corporal no consultório, primeiro precisamos entender as vantagens e desvantagens de cada método de avaliação física disponível atualmente na literatura.
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
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Antropometria (Dobras)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Baixo custo de setup, portátil. Fraciona o corpo em massa óssea, muscular e adiposa. Imune à hidratação e alimentação aguda.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Exige rigoroso treinamento técnico do avaliador para diminuir o ETM. Inviável em casos de obesidade mórbida severa.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic"><Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="hover:underline">Bioimpedância (BIA)</Link></td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Avaliação rápida (1 minuto), dispensa o contato invasivo físico (pinçamentos). Gera laudos impressos ou digitais instantâneos.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Extrema variabilidade (péssima precisão) se o paciente estiver desidratado, menstruado, cheio de fezes/urina ou com a pele úmida.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">DEXA Scan</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Padrão Ouro clínico (modelo multicompartimental). O único capaz de mapear a densidade mineral óssea real e separar a gordura visceral.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Altíssimo custo financeiro (Equipamento de Raio-X). Emite radiação[cite: 3]. Impraticável em clubes e academias comerciais.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Pesagem Hidrostática</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Excelente padrão acadêmico pioneiro. Calcula o volume corporal diretamente através da densidade da água (Princípio de Arquimedes).</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Requer tanques imensos. O paciente deve afundar e exalar todo o ar dos pulmões[cite: 3]. Risco de fobia e desconforto extremo.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="marcacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Ruler className="text-green-700"/> A Regra de Ouro: "Só é bom quem marca"
          </h2>
          <p>
            Um dos maiores erros ensinados por hábito em algumas faculdades, e perpetuado por maus profissionais na rotina do consultório, é a tentativa de encontrar os <strong>pontos anatômicos</strong> no "olhômetro" ou na "base da pressa". O tecido adiposo é altamente móvel e a pele não possui um limite visual de onde termina o meio do osso ou o meio do ventre muscular. 
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6">
            <p className="m-0 mb-3">O avaliador de excelência deve, <strong>obrigatoriamente</strong>, estar munido de um <strong>lápis dermográfico</strong> ou delineador. A sequência correta exige palpar a estrutura óssea com firmeza (ex: o acrômio na escápula), usar uma fita metálica antropométrica inelástica para aferir a distância exata até a articulação inferior (ex: o rádio no cotovelo) e, só então, desenhar um "X" preciso na pele.</p>
            <p className="m-0">Se você confia na sua visão e erra apenas 1 a 2 cm do ponto exato (por exemplo, no pliegue Tríceps ou Abdominal), a preensão pode capturar uma camada mais grossa de fáscia ou evitar o pico de tecido subcutâneo. Isso altera severamente os milímetros lidos no adipômetro, falsificando não apenas aquela dobra, mas todo o <strong>percentual de gordura</strong> e a estimativa de massa muscular do paciente nas reavaliações.</p>
          </div>

          <h2 id="estatistica" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Activity className="text-green-700"/> Estatística Básica: Média ou Mediana?
          </h2>
          <p>
            Mesmo sendo exímio na marcação, a variabilidade biológica do paciente e as oscilações do manuseio geram milhares de possibilidades de erro. Na antropometria clínica e acadêmica, o <strong>Erro Técnico de Medição (ETM)</strong> é a ferramenta matemática usada para comprovar se você é um avaliador <em>Preciso</em> (acerta perto sempre) e <em>Exato</em> (acerta no alvo). O cálculo do ETM é o desvio-padrão entre as suas medidas repetidas[cite: 12]. O ETM pode ser avaliado intra-avaliador (você medindo o mesmo paciente) ou interavaliador (você comparado com a precisão de outro profissional experiente)[cite: 12].
          </p>
          <p>
            Mas, na prática clínica diária, quantas vezes devemos aferir uma mesma dobra cutânea para fugir do erro sem ficar duas horas na consulta? A estatística fornece o roteiro[cite: 11]:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li><strong>O Padrão Típico (Duplicata):</strong> O protocolo comum exige medir o paciente inteiro de cima a baixo uma vez, e depois fazer o percurso novamente, gerando 2 medidas por ponto anatômico[cite: 11]. Como são dois números, você aplica a <strong>Média Aritmética</strong> entre eles[cite: 11].</li>
            <li><strong>O Padrão Ideal (Triplicata):</strong> Usado em pesquisas rigorosas ou quando as duas primeiras medidas apresentam uma disparidade inaceitável. Você mede o mesmo ponto 3 vezes[cite: 11]. Aqui, a estatística exige o uso da <strong>Mediana</strong> (o valor central da sequência)[cite: 11]. Por exemplo, se você encontrou [11mm, 12mm, 20mm], o 20mm foi um erro grave de preensão muscular. A média seria corrompida para 14,3mm, mas a <strong>Mediana</strong> joga fora os extremos e fica inteligentemente com <strong>12mm</strong>.</li>
          </ul>

          <h2 id="medidas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <UserCheck className="text-green-700"/> O Arsenal de Medidas Corporais
          </h2>
          <p>Para abastecer as fórmulas preditivas e modelar o somatotipo exato do paciente, nós precisamos organizar a nossa rotina de marcações em 4 "famílias" de medidas anatômicas. Conheça as principais utilizadas no mapeamento do perfil restrito e completo:</p>
          
          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> 1. Medidas Básicas (O Alicerce Estrutural)
              </h3>
              <p className="text-slate-600 m-0">
                Formam o mapa primário da estrutura. A <strong>Estatura Total</strong> é aferida num estadiômetro de parede com o avaliado inspirando fundo e travando a cabeça no Plano de Frankfort. Englobam ainda o Peso Total na balança, a Estatura Sentado (medida com um banco de altura conhecida) e a Envergadura Máxima dos braços.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> 2. Dobras Cutâneas (O Tecido Adiposo)
              </h3>
              <p className="text-slate-600 m-0 mb-3">
                Afeição da espessura do tecido adiposo subcutâneo (gordura + pele) isolado da musculatura. Realizadas exclusivamente com plicômetros calibrados exercendo pressão padronizada. As principais são:
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
                Aferidos com fita metálica tencionada em técnica de mãos cruzadas para avaliar hipertrofia ou riscos centrais. As principais circunferências são:
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
                Aferem a largura ou espessura entre proeminências ósseas usando um paquímetro de alumínio com hastes compressivas. Fundamentais no cálculo do modelo Tetracompartimental para isolar o esqueleto do músculo. Os mais utilizados clinicamente são os diâmetros <strong>Biepicondiliano do Úmero</strong> (cotovelo) e <strong>Biepicondiliano do Fêmur</strong> (joelho), além das grandes envergaduras de tronco como o Biacromial e Bi-iliocrestídeo.
              </p>
            </div>
          </div>

          <h2 id="isak" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Globe className="text-green-700"/> O Protocolo ISAK e Seus Níveis
          </h2>
          <p>
            O protocolo da <em>International Society for the Advancement of Kinanthropometry</em> (ISAK) é a linguagem unificada mundial da cineantropometria. Uma medida tirada por um profissional Nível 1 no Rio de Janeiro usando essa padronização rígida de pontos será matematicamente idêntica à de um profissional na Austrália. O foco do curso ISAK não está apenas em gerar um percentual de gordura no final, mas na precisão cirúrgica contínua.
          </p>
          <p>A ISAK divide o domínio metodológico dessa ciência em hierarquias técnicas de excelência[cite: 11]:</p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700">
            <li><strong>Nível 1 (O Avaliador Técnico):</strong> É capacitado no "Perfil Restrito"[cite: 11]. O profissional domina com maestria as Medidas Básicas, 8 dobras cutâneas, 5 perímetros e 2 diâmetros ósseos. Possui um limite rigoroso de erro técnico de medida aceitável, não podendo o ETM passar de 7,5% para dobras cutâneas e 1,5% para as outras variáveis[cite: 12]. O perfil ideal de atuação é em academias e clínicas de nutrição focadas em desporto.</li>
            <li><strong>Nível 2 (O Antropometrista Especialista):</strong> Adiciona a todo o leque anterior um aprofundamento formidável. Realiza o Perfil Completo (um total de 43 medidas) e reduz seu teto de ETM para um limite muito apertado (máximo de 5% de tolerância de erro para as dobras cutâneas)[cite: 12]. Capacitado para pesquisa científica laboratorial rigorosa e controle de alto rendimento.</li>
            <li><strong>Níveis 3 e 4:</strong> São os Curadores e Instrutores[cite: 11]. Profissionais como Instrutores ISAK Nível 4 que são responsáveis não apenas por medirem na perfeição, mas por auditarem, treinarem e testarem a acurácia de profissionais mais jovens globalmente[cite: 11].</li>
          </ul>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Aprenda: O Perfil Restrito ISAK na Prática</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="_Fmm4T4Ooto" title="Demonstração Prática do Perfil Restrito ISAK" />
            </div>
          </div>

          <h2 id="formulas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Brain className="text-green-700"/> As Fórmulas de Regressão: Escolhendo o Caminho
          </h2>
          <p>
            As dobras em si não nos dizem o percentual. Para transformar as medidas em "Porcentagem de Gordura", nós alimentamos os números em uma Equação de Regressão. A maioria dessas equações famosas foi criada na década de 70, baseando-se em amostras comparadas com o método da pesagem hidrostática. É um erro letal avaliar um atleta de alto rendimento (seco) usando uma equação desenvolvida para mulheres obesas de 60 anos[cite: 6]. Você deve escolher o protocolo que mais se aproxima do fenótipo do seu paciente no consultório[cite: 6].
          </p>
          
          <div className="space-y-4 my-8">
            <div className="p-4 bg-slate-50 border-l-4 border-green-600 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 m-0">1. Equação de Durnin & Womersley (1974)</h4>
              <p className="text-sm text-slate-600 m-0 mt-2">Os pesquisadores escoceses testaram quase 500 indivíduos num amplo leque etário de 16 a 72 anos[cite: 4]. Utiliza a força da equação logarítmica para uma densidade que se desvia ao decorrer do avanço natural da idade[cite: 4]. Usa as 4 dobras clássicas da metade superior (Bíceps, Tríceps, Subescapular e Supra-ilíaca)[cite: 4]. É ideal e muito confortável para mulheres, pois evita a medição invasiva de coxa frontal e o constrangimento do abdômen.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-orange-600 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 m-0">2. Equação de Faulkner (1968)</h4>
              <p className="text-sm text-slate-600 m-0 mt-2">Uma das equações mais famosas e antigas no Brasil[cite: 6]. Criada no ambiente dos esportes aquáticos, utiliza as dobras (Tríceps, Subescapular, Supraespinal e Abdominal) acrescida da famosa constante "fisiológica" de Faulkner (5,783)[cite: 6]. Embora seja extremamente utilizada, a literatura moderna recomenda precaução: as validações indicam que ela tende a superestimar percentuais altos, sendo sua aplicação mais focada num espectro de jovens masculinos desportistas entre 18 a 25 anos, com as quais Faulkner modelou o estudo na Universidade de Michigan[cite: 6].</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 m-0">3. Equações Generalizadas de Jackson & Pollock (1978)</h4>
              <p className="text-sm text-slate-600 m-0 mt-2">Foram o maior salto tecnológico em antropometria ao criarem fórmulas "generalizadas" em vez de "específicas" de nicho. Eles detectaram o problema de usar equações lineares para medir uma fisiologia que é "curvilínea" e que afeta a densidade óssea ao longo do tempo[cite: 5]. Incorporaram as variáveis preditivas como o componente "quadrático" do somatório de dobras e a "Idade" cronológica do sujeito nas fórmulas[cite: 5]. Criaram versões muito validadas usando somas densas de 7 Dobras e protocolos ágeis e excelentes de 3 Dobras (Peito, Abdômen e Coxa para homens; e Tríceps, Supra-ilíaca e Coxa para mulheres)[cite: 5]. São fantásticas para o público moderno das academias, com ETM super acurados[cite: 5].</p>
            </div>
          </div>

          <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Target className="text-green-700"/> Entregando Resultados Clínicos e Desportivos (Os Relatórios)
          </h2>
          <p>
            Quando o paciente retorna para a reavaliação de 45 dias, você precisa chancelar sua competência revelando a matemática fina do que ocorreu debaixo da pele dele. O pior erro comercial do nutricionista é imprimir um papel genérico dizendo apenas: "Seu peso baixou de 80kg para 78kg e a gordura caiu 2%". O seu trabalho com o plicômetro fornece um arsenal inteiro de índices reveladores. Veja como entregar resultados de elite:
          </p>
          
          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">A Matemática Fracionada da Composição Básica (Massa Magra vs Gorda)</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Esta é a fundação que combate a balança ordinária. Utilizando as equações que selecionamos e o valor do adipômetro, você deverá informar ao atleta não só o <strong>Percentual de Gordura (%G)</strong> e o <strong>IMC</strong> tradicional (que mascara os hipertróficos), mas fatiar os quilos absolutos. O paciente verá a coluna da <strong>Massa Gorda</strong> (peso isolado e inativo do tecido adiposo) caindo, enquanto a coluna da <strong>Massa Magra</strong> (estrutura muscular, esquelética, líquidos e órgãos) deve subir ou se preservar agressivamente durante o déficit dietético.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">Avisos e Relações de Distribuição Central e Visceral</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Para diagnosticar pacientes mais velhos e com risco inflamatório forte, cruze as circunferências em índices vitais. Informe a ele a métrica da <strong>Relação Cintura Quadril (RCQ)</strong> (riscos andrógenos cardíacos), a razão preventiva de <strong>Cintura/Estatura</strong> e não poupe de demonstrar o <strong>apVAT</strong>. O apVAT é a revolução da antropometria que, usando fórmulas matemáticas da cintura e da coxa cruzadas em inteligência acadêmica e chancelada via <em>CT scans</em>, quantifica numericamente o tecido adiposo visceral (a letal gordura perivisceral) que destrói o fígado e inibe os receptores de insulina do obeso sarcopênico[cite: 8]. Isso traz o apelo cardiovascular de prevenção imediata para sua conduta clínica[cite: 8].
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">Os Marcadores Puros de Adiposidade Genética: O Somatório das Dobras</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Fórmulas de "%G" envelhecem. O peso esconde água retida de estresse inflamatório agudo. Para o atleta olímpico ou lutador fazendo corte extremo de peso, não falamos a linguagem incerta da percentagem, mas sim a métrica brutal absoluta do plicômetro. Embasados nos estudos de experts com campeões do <em>Ironman</em> ou nas normas ISAK, apresente ao seu paciente se a "capa" diminuiu, demonstrando a redução total nos eixos do <strong>Somatório de 6 Dobras Cutâneas</strong> (Tríceps, Subescapular, Supraespinal, Abdominal, Coxa e Panturrilha) e no exaustivo <strong>Somatório de 8 Dobras</strong> para detalhar o acúmulo genético exato da pele perante treinos de endurance. O pesquisador de alta-performance Francis Holway defende esse número absoluto como prova irrefutável[cite: 2]. O tecido afina perante os adipômetros ou seu plano nutricional de choque é um fracasso no camp.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-800 mb-2">Perímetros Corrigidos de Pura Massa Músculo Esquelética</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A pergunta mortífera no consultório esportivo: "Doutor, minha fita de braço aumentou de 38 cm para 40 cm. Foi pura hipertrofia do meu bíceps?". O nutricionista moderno usa as leis do fracionamento! Apresente o laudo das <strong>Circunferências Corrigidas pela Adiposidade</strong>. Retirando algebricamente usando o "PI" matemático ($\pi \times$ espessura da dobra do tríceps) do perímetro sujo, extirpamos o pneu adiposo circunferencial revelando o cilindro puro real e proteico do músculo esquelético, desmascarando a ilusão de ganho na balança frente a hipertrofia de qualidade. O paciente visualiza em milímetros as reais seções transversais musculares ativas desenvolvidas. Adicionalmente, classifique e apresente se ele é um trator ou um lince usando o <strong>Somatotipo de Heath-Carter</strong>[cite: 7]. O software calcula as cargas da endomorfia, mesomorfia (robusteza muscular) e ectomorfia (linearidade frágil) apontando visualmente na Somatocarta se a genética endócrina é ideal para seu alvo atlético[cite: 7]. Para completar, o uso magistral de diâmetros ósseos alimentam o <strong>IMO (Índice Músculo Ósseo)</strong> informando se sua mecânica esquelética alcançou o pico de transporte de lastro muscular possível e se o <strong>IAM (Índice Adiposo Muscular)</strong> exibe uma melhora esteticamente agradável do volume metabólico magro em detrimento do lastro adiposo estático.
              </p>
            </div>
          </div>

          {/* VENDAS DA PLANILHA - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                <Zap size={14} className="fill-white" />
                <span>Ferramenta Essencial!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                    <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
                </div>

                <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                    <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                        Planilha Antropométrica <span className="text-green-700">Inteligente PRO</span>
                    </h4>

                    <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                        <ImagemOtimizada src={`${githubImgBase}PlanilhaImagem/Planilha_Capa.webp`} alt="Capa da Planilha Antropométrica Inteligente VBA Excel" className="w-full h-auto object-contain" width="200" height="200" loading="lazy" />
                    </div>

                    <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                        Você já aprendeu a parte teórica. Agora, na hora da consulta, seu tempo é valioso demais para você ficar 20 minutos na frente do paciente apertando teclas da calculadora e digitando fórmulas logarítmicas de regressão manualmente. 
                        A nossa <strong>Planilha desenvolvida em Excel com módulos de VBA</strong> é a central completa de automação clínica. Ela plota a sua Somatocarta automaticamente em um gráfico 2D, calcula os temidos Perímetros Corrigidos de músculo puro e executa o processamento pesado do apVAT. E o melhor: gera um Laudo visual incrível em 30 segundos com todos os índices complexos destrinchados, em um clique, pronto para você impressionar quem confia na sua avaliação e garantir o retorno financeiro em consultas vindouras!
                    </p>

                    <Link to="/planilha" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Comprar a Planilha Antropométrica PRO">
                        <ShoppingCart size={16} />
                        Automatize Seus Laudos Agora
                    </Link>
                </div>
            </div> 
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700"/> Conclusão: Dominando a Avaliação Física
          </h2>
          <p>
            Na era da tecnologia de ponta e das bioimpedâncias que emitem recibos coloridos em poucos segundos, a arte mecânica da antropometria clássica não morreu; ela se destaca como uma ferramenta "raiz" de veracidade biológica inegável.
          </p>
          <p>
            Um bom avaliador físico e nutricionista que se apoia nos rígidos protocolos da ISAK detém a habilidade tátil de soltar as fáscias musculares da gordura, marca seus pontos criteriosamente e, finalmente, converte esses dados brutos em uma ferramenta de automação (como as modernas Planilhas Clínicas em VBA), jamais será substituído pelo "apertar de botão" de uma balança. O paciente percebe o cuidado palpável e, fisiologicamente, os dados estarão incólumes contra as flutuações hormonais e dietéticas que arruinariam outras modalidades de imagem. Domine as equações corretas, confie no peso exato do Somatório e eleve a excelência da entrega no seu consultório!
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes (FAQ)
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
                    <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
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
             <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Acadêmicas e Fontes</h3>
             <ul className="text-xs text-slate-500 leading-relaxed m-0 list-disc pl-4 space-y-1">
               <li>ISAK - International Society for the Advancement of Kinanthropometry. (Padrões de Medição em Perfil Restrito).</li>
               <li>DURNIN, J.V.G.A., & WOMERSLEY, J. (1974). <em>Body fat assessed from total body density and its estimation from skinfold thickness: measurements on 481 men and women aged from 16 to 72 years.</em> British Journal of Nutrition.</li>
               <li>JACKSON, A.S., & POLLOCK, M.L. (1978). <em>Generalized equations for predicting body density of men.</em> British Journal of Nutrition.</li>
               <li>CARTER, J.E.L. (1970). <em>The Somatotypes of Athletes - A Review.</em> Human Biology.</li>
             </ul>
             <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
               <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
               <span className="text-[10px] uppercase font-bold text-slate-400">Aviso Nutricional: Este conteúdo técnico destina-se primariamente a estudantes e profissionais de Educação Física e Nutrição. Avaliações antropométricas devem ser feitas exclusivamente por profissionais habilitados. O artigo possui fim meramente educativo e não substitui diagnósticos médicos ou treinamentos de nivelamento formal da ISAK.</span>
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
              alt="Marco Aurélio Jr. - Autor e Nutricionista focado em Ciência e Antropometria ISAK 1" 
              title="Marco Aurélio Jr. - Estudante de Nutrição ISAK 1"
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
              Sou apaixonado por traduzir a barreira científica entre a academia e o consultório diário. Através do conhecimento aprofundado na Cineantropometria e com o treinamento formal dos padrões ISAK, procuro entregar a profissionais recém-formados e alunos metodologias práticas que automatizam a captação de dados sem comprometer a exatidão fisiológica.
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