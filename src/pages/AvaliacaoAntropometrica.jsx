import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import { 
  ChevronLeft, HelpCircle, Activity, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  CheckCircle2, Ruler, BookOpen, UserCheck, AlertTriangle
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

  // Estados da Calculadora Interativa de Somatório
  const [dobras, setDobras] = useState({ triceps: '', subescapular: '', suprailiaca: '', abdominal: '', coxa: '', panturrilha: '' });
  const [somatorio, setSomatorio] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleDobraChange = (e) => {
    const { name, value } = e.target;
    // Permite apenas números e ponto/vírgula
    if (value === '' || /^\d*[.,]?\d*$/.test(value)) {
      setDobras({ ...dobras, [name]: value.replace(',', '.') });
    }
  };

  const calcularSomatorio = (e) => {
    e.preventDefault();
    const soma = Object.values(dobras).reduce((acc, val) => {
      const numero = parseFloat(val);
      return acc + (isNaN(numero) ? 0 : numero);
    }, 0);
    setSomatorio(soma.toFixed(1));
  };

  const classificacaoSomatorio = () => {
    if (!somatorio) return null;
    if (somatorio < 50) return { texto: "Nível Atleta / Muito Baixa Adiposidade", cor: "text-blue-700", bg: "bg-blue-100" };
    if (somatorio >= 50 && somatorio <= 90) return { texto: "Nível Saudável / Adiposidade Adequada", cor: "text-green-700", bg: "bg-green-100" };
    if (somatorio > 90 && somatorio <= 130) return { texto: "Alerta / Adiposidade Moderada a Alta", cor: "text-orange-700", bg: "bg-orange-100" };
    return { texto: "Risco Metabólico / Adiposidade Muito Alta", cor: "text-red-700", bg: "bg-red-100" };
  };

  const faqs = [
    {
      pergunta: "Qual a diferença entre Antropometria e Bioimpedância?",
      resposta: "A antropometria mede o corpo fisicamente através de dobras, ossos e perímetros, sendo imune a oscilações diárias. A bioimpedância usa uma corrente elétrica para estimar a água corporal, sendo fortemente alterada se o paciente estiver desidratado, menstruada, ou de bexiga cheia."
    },
    {
      pergunta: "O que é o erro técnico de medição (ETM)?",
      resposta: "O ETM é um cálculo estatístico que mede a precisão do avaliador. Se o seu ETM for alto, significa que você não consegue repetir a mesma medida no mesmo lugar. A ISAK exige um ETM de dobras cutâneas menor que 5% para Nível 1."
    },
    {
      pergunta: "Para que serve a Somatocarta?",
      resposta: "A somatocarta é um gráfico bidimensional que classifica o paciente em Endomorfo (tendência a acumular gordura), Mesomorfo (robustez muscular) e Ectomorfo (linearidade e magreza), ajudando a alinhar expectativas de resultados genéticos."
    },
    {
      pergunta: "Quando devo usar a Mediana ao invés da Média?",
      resposta: "A literatura antropométrica (ISAK) recomenda realizar 3 medidas no mesmo ponto e utilizar a Mediana (o valor do meio). Isso exclui automaticamente valores extremos causados por um erro de pinçamento."
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
              Uma <strong>avaliação antropométrica</strong> de qualidade exige o domínio prático do <strong>Protocolo ISAK</strong>. O avaliador deve localizar e marcar os <strong>pontos anatômicos</strong> com lápis dermográfico antes de pinçar a pele. A técnica correta separa o corpo em tecido ósseo, muscular e adiposo usando <strong>dobras cutâneas</strong>, perímetros e diâmetros ósseos. Fazer 3 medidas por ponto e usar a mediana evita erros graves nas fórmulas preditivas de <strong>composição corporal</strong>.
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
                  <li><a href="#mediana" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Estatística: Média ou Mediana?</a></li>
                  <li><a href="#medidas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><UserCheck size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Arsenal de Medidas Básicas</a></li>
                  <li><a href="#isak" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Globe size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Protocolo ISAK e Níveis Internacionais</a></li>
                  <li><a href="#formulas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Fórmulas de Regressão e Autores</a></li>
                  <li><a href="#resultados" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Interpretando Resultados e Índices</a></li>
                  <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Calculadora de Somatório de Dobras</a></li>
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
                O domínio da anatomia de superfície e do adipômetro é a maior arma do nutricionista moderno.
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
            <BookOpen className="text-green-700"/> A História da Antropometria: Arte e Ciência
          </h2>
          <p>
            Antes de a antropometria ser usada em clínicas esportivas, ela pertencia aos artistas. A busca incessante por mapear as proporções do corpo humano remonta ao Antigo Egito e ganhou proporções imortais no Renascimento. 
          </p>
          <p>
            O gênio <strong>Albrecht Dürer</strong> (nascido em 1471), juntamente com os conceitos do <em>Homem Vitruviano</em> de Leonardo da Vinci, foram os pioneiros da antropometria. Dürer não acreditava que a arte era apenas inspiração divina; para ele, o corpo humano só poderia ser reproduzido com exatidão se fosse metodicamente medido e quantificado matematicamente. No século XVIII, cientistas como Daubenton retiraram a antropometria dos ateliês de pintura e a inseriram definitivamente nas ciências da saúde e biologia evolutiva.
          </p>

          {/* 📊 TABELA COMPARATIVA (ESTRUTURA PARA GEO) */}
          <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700"/> Avaliação Física: Comparativo de Métodos
          </h2>
          <p className="mb-8">
            Para saber como avaliar a composição corporal, primeiro precisamos entender as vantagens e desvantagens de cada método de avaliação física disponível no mercado.
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
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Baixo custo, portátil. Fraciona o corpo em massa óssea, muscular e adiposa. Imune à hidratação aguda.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Exige longo treinamento do avaliador. Acurácia depende 100% da técnica humana. Inviável em obesidade mórbida.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic"><Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="hover:underline">Bioimpedância (BIA)</Link></td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Rápida, dispensa contato invasivo do avaliador. Gera laudos impressos instantâneos.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Péssima precisão se o paciente estiver desidratado, usando diuréticos, com retenção pré-menstrual ou de estômago cheio.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">DEXA Scan</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Padrão Ouro clínico de 3 compartimentos. Único que mede a densidade mineral óssea real.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Altíssimo custo (Equipamento de Raio-X). Emite radiação. Impraticável em academias.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Pesagem Hidrostática</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Excelente padrão acadêmico para calcular o volume corporal através da densidade da água.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Estrutura complexa (Tanques de água). O paciente deve prender a respiração submerso (risco de trauma/fobia).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="marcacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Ruler className="text-green-700"/> A Regra de Ouro: "Só é bom quem marca"
          </h2>
          <p>
            Um dos maiores erros ensinados em faculdades e praticados por maus profissionais é a tentativa de encontrar os <strong>pontos anatômicos</strong> no "olhômetro". O tecido adiposo não tem um limite fixo visual. 
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6">
            O avaliador de excelência deve, obrigatoriamente, estar munido de um <strong>lápis dermográfico</strong> ou delineador de olhos. Ele deve palpar o osso, encontrar o limite articular ou o ponto médio da circunferência usando uma fita metálica (como a Lufkin) e desenhar um "X" na pele do paciente. Se você erra 1 cm para baixo no pliegue Tríceps, o valor do adipômetro pode dobrar de tamanho, falsificando o <strong>percentual de gordura</strong> do paciente no retorno.
          </div>

          <h2 id="mediana" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Activity className="text-green-700"/> Estatística Clínica: Média ou Mediana?
          </h2>
          <p>
            A <em>Sociedade Internacional para o Avanço da Cineantropometria</em> (ISAK) é muito clara quanto à reprodutibilidade dos dados. Se você pinçar a pele de um paciente 3 vezes no mesmo local, os valores (em milímetros) quase nunca serão idênticos devido à compressibilidade da gordura e da água subcutânea.
          </p>
          <p>
            A regra exige que você não use a <strong>Média</strong>, mas sim a <strong>Mediana</strong>. Exemplo prático: você mediu o Abdômen e achou [21mm, 22mm e 35mm]. A terceira leitura foi claramente um erro de preensão do músculo reto abdominal junto com a gordura. Se você usasse a média, o valor ficaria adulterado para 26mm. Usando a <strong>Mediana</strong> (o valor central), o sistema descarta o erro absurdo e usa o valor correto: <strong>22mm</strong>.
          </p>

          <h2 id="medidas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <UserCheck className="text-green-700"/> O Arsenal de Medidas Corporais
          </h2>
          <p>Para gerar as fórmulas de composição e o somatotipo, precisamos extrair 4 subgrupos de variáveis estruturais do paciente:</p>
          
          <ul className="list-none space-y-4 my-8 p-0">
            <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-800 block text-lg mb-1">1. Medidas Básicas (O Alicerce)</strong>
                <span className="text-slate-600 text-base">Estatura (altura total c/ estadiômetro e respiração suspensa no Plano de Frankfort), Peso na balança comercial, Estatura Sentado (medida do banco ao topo da cabeça) e Envergadura.</span>
              </div>
            </li>
            <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-800 block text-lg mb-1">2. Dobras Cutâneas (O Tecido Adiposo)</strong>
                <span className="text-slate-600 text-base">Medidas da prega de pele + gordura subcutânea sem englobar músculo. Principais: Tríceps, Bíceps, Subescapular, Crista Ilíaca, Supraespinal, Abdominal, Coxa Frontal e Panturrilha Medial.</span>
              </div>
            </li>
            <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-800 block text-lg mb-1">3. Perímetros Corporais (O Volume Muscular)</strong>
                <span className="text-slate-600 text-base">Medidos com fita metálica tencionada com as mãos cruzadas. Principais: Braço Relaxado, Braço Contraído, Antebraço, Peitoral, Cintura, Quadril (Glúteos), Coxa Medial e Panturrilha.</span>
              </div>
            </li>
            <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-800 block text-lg mb-1">4. Diâmetros Ósseos (O Chassi Estrutural)</strong>
                <span className="text-slate-600 text-base">Aberturas das extremidades ósseas medidas com paquímetro ósseo de alumínio, cruciais para calcular a massa óssea total. Principais: Bi-epicondiliano de Úmero e Bi-epicondiliano de Fêmur.</span>
              </div>
            </li>
          </ul>

          <h2 id="isak" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Globe className="text-green-700"/> O Protocolo ISAK e Seus Níveis
          </h2>
          <p>
            O protocolo da ISAK é a linguagem mundial da cineantropometria. Uma medida tirada por um profissional Nível 1 no Rio de Janeiro será idêntica à de um profissional na Austrália. O foco não está na equação de gordura escolhida, mas na precisão cirúrgica de encontrar o ponto anatômico exato.
          </p>
          <p>A ISAK divide o domínio dessa ciência em Níveis Hierárquicos:</p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700">
            <li><strong>Nível 1 (O Avaliador Clínico):</strong> Domina o Perfil Restrito (Medidas Básicas, 8 Dobras, 5 Perímetros e 2 Diâmetros). Ideal para nutrição esportiva e prescrição de dieta.</li>
            <li><strong>Nível 2 (O Antropometrista):</strong> Domina o Perfil Completo (Mais de 43 medidas). Ideal para análises ergométricas, desvios posturais e pesquisa acadêmica profunda.</li>
            <li><strong>Níveis 3 e 4:</strong> Instrutores, Criadores de Protocolos e Curadores Científicos das normas em âmbito global.</li>
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
            Não existe uma fórmula mágica que sirva para o adolescente sedentário e para o maratonista olímpico ao mesmo tempo. As equações foram desenhadas usando regressão linear e logarítmica baseadas na pesagem hidrostática de grupos populacionais isolados.
          </p>
          
          <div className="space-y-4 my-8">
            <div className="p-4 bg-slate-50 border-l-4 border-green-600 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 m-0">1. Equação de Durnin & Womersley (1974)</h4>
              <p className="text-sm text-slate-600 m-0 mt-2">Excepcional para pacientes adultos, idosos ou não praticantes de esportes rigorosos. Usa apenas 4 dobras (Bíceps, Tríceps, Subescapular, Crista Ilíaca), sendo muito confortável para a mulher, pois evita o constrangimento de mensurar as coxas e abdômen.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 m-0">2. Equações de Jackson & Pollock (3 e 7 Dobras)</h4>
              <p className="text-sm text-slate-600 m-0 mt-2">As mais famosas. São fórmulas "generalizadas" e desenhadas para minimizar erros em quem treina hipertrofia ou aeróbico. Excelentes para jovens e frequentadores de academia. Usam a idade do paciente como contrapeso na regressão quadrática.</p>
            </div>
            <div className="p-4 bg-slate-50 border-l-4 border-orange-600 rounded-r-2xl shadow-sm">
              <h4 className="font-bold text-slate-800 m-0">3. Equação de Faulkner (4 Dobras)</h4>
              <p className="text-sm text-slate-600 m-0 mt-2">Baseada primariamente em praticantes atléticos masculinos. Usa (Tríceps, Subescapular, Supraespinal, Abdominal) com uma constante fisiológica. É criticada hoje em dia por superestimar percentuais altos e subestimar pessoas muito secas, mas ainda largamente exigida em concursos públicos (Testes de Aptidão Física).</p>
            </div>
          </div>

          <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Target className="text-green-700"/> Entregando Resultados Clínicos e Desportivos
          </h2>
          <p>
            Quando o paciente retorna para a reavaliação, você precisa mostrar dados concretos. Apenas informar "você emagreceu 2kg" é preguiçoso e desrespeita a ciência. 
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 space-y-2 mb-8">
            <li><strong>Percentual de Gordura e Massas Isoladas:</strong> Divida o Peso Total (Kg) do paciente nas fatias exatas de Massa Gorda (O peso da gordura morta) e Massa Magra (Músculos, Ossos, Sangue e Água).</li>
            <li><strong>Relações Circunferenciais:</strong> RCQ (Cintura/Quadril) e Cintura/Estatura apontam com exatidão mortal o risco de infarto, obesidade central (apVAT) e depósito de gordura visceral.</li>
            <li><strong>Índices Anatômicos:</strong> IMO (Índice Músculo Ósseo) e IAM (Índice Adiposo Muscular) dizem se o paciente está hipertrofiando seu "chassi" de maneira proporcional.</li>
            <li><strong>Perímetros Corrigidos:</strong> Usamos a matemática pura. O braço do atleta cresceu 2 cm. Foi músculo ou gordura? Usando a fórmula matemática de <em>Cálculo Corrigido Subtraindo o Pi (π)</em> da Dobra de Tríceps, o raio real de massa muscular ativa é descoberto!</li>
          </ul>

          {/* CALCULADORA INTERATIVA REACT - RETENÇÃO GEO */}
          <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Zap className="text-green-700"/> Simulador: Avaliação por Somatório de 6 Dobras
          </h2>
          <p className="mb-8">
            Para desportistas e atletas profissionais (como pugilistas e lutadores), o percentual de gordura pode falhar. O mais puro indicador de secagem de gordura de um camp, segundo o pesquisador Francis Holway, é a brutalidade métrica da <strong>Soma das 6 Dobras (L6)</strong>. Faça o teste abaixo!
          </p>

          <div className="my-10 bg-white border border-slate-200 shadow-xl rounded-[3rem] overflow-hidden">
            <div className="bg-slate-900 p-6 md:p-8 text-center">
              <strong className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                <Activity className="text-green-500" /> Analisador de Adiposidade L6
              </strong>
              <p className="text-slate-300 font-medium mt-2 m-0 text-sm md:text-base">
                Insira as medidas em milímetros (mm) do seu paciente nas 6 dobras abaixo.
              </p>
            </div>

            <form onSubmit={calcularSomatorio} className="p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 block">Tríceps (mm)</span>
                  <input type="text" inputMode="decimal" name="triceps" value={dobras.triceps} onChange={handleDobraChange} required placeholder="Ex: 12.5" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 block">Subescapular (mm)</span>
                  <input type="text" inputMode="decimal" name="subescapular" value={dobras.subescapular} onChange={handleDobraChange} required placeholder="Ex: 15.0" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 block">Supraespinal/Ilíaca (mm)</span>
                  <input type="text" inputMode="decimal" name="suprailiaca" value={dobras.suprailiaca} onChange={handleDobraChange} required placeholder="Ex: 10.0" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 block">Abdominal (mm)</span>
                  <input type="text" inputMode="decimal" name="abdominal" value={dobras.abdominal} onChange={handleDobraChange} required placeholder="Ex: 22.0" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 block">Coxa Frontal (mm)</span>
                  <input type="text" inputMode="decimal" name="coxa" value={dobras.coxa} onChange={handleDobraChange} required placeholder="Ex: 18.5" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 block">Panturrilha Medial (mm)</span>
                  <input type="text" inputMode="decimal" name="panturrilha" value={dobras.panturrilha} onChange={handleDobraChange} required placeholder="Ex: 14.0" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </label>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-xl border-none cursor-pointer">
                  Calcular Somatório L6
                </button>
              </div>

              {somatorio && (
                <div className={`mt-6 p-6 rounded-[2rem] border-2 text-center transition-all duration-500 ${classificacaoSomatorio().bg} border-${classificacaoSomatorio().cor.replace('text-', '')}`}>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Somatório Total Registrado</span>
                  <span className="text-5xl md:text-6xl font-black italic mb-2 block drop-shadow-sm flex items-center justify-center gap-2">
                     {somatorio} <span className="text-2xl text-slate-400">mm</span>
                  </span>
                  <p className={`font-black uppercase tracking-widest mt-2 m-0 text-sm md:text-lg ${classificacaoSomatorio().cor}`}>
                    Status Clínico: {classificacaoSomatorio().texto}
                  </p>
                </div>
              )}
            </form>
          </div>

          <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Activity className="text-green-700"/> Entendendo a Somatocarta (Endo, Meso, Ectomorfo)
          </h2>
          <p>
            O método criado por Heath & Carter no final dos anos 60 revolucionou a educação física escolar e desportiva. Trata-se da avaliação do <strong>Somatotipo</strong>. Ele usa as dobras cutâneas, circunferências de braço e perna e a largura óssea de fêmur e úmero para "plotar" o paciente em um mapa (A Somatocarta).
          </p>
          <p>
            O somatotipo dita que existem três tendências embrionárias e genéticas predominantes no corpo humano:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 space-y-2 mb-8">
            <li><strong>Endomorfia (Relativa Adiposidade):</strong> O perfil que engorda com extrema facilidade, ossos largos, rosto redondo, mas que perde peso devagar. Necessita de dieta com déficit restrito e treino cardio intenso.</li>
            <li><strong>Mesomorfia (Relativa Robustez Muscular):</strong> O "agraciado genético". Tem facilidade de ganho de massa, ossos de alavancagem média, ombros largos e cintura fina.</li>
            <li><strong>Ectomorfia (Relativa Magreza Ocular):</strong> Alta taxa metabólica basal, membros muito compridos, dificuldade absurda para ganhar peso (tanto gordo quanto magro). É o atleta nato para corridas de fundo e salto em altura.</li>
          </ul>

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
                        Você já aprendeu a parte teórica. Agora, não dá pra perder 20 minutos na frente do paciente apertando teclas da calculadora e digitando fórmulas logarítmicas de regressão manualmente. Nossa <strong>Planilha desenvolvida em Excel com módulos de VBA</strong> plota a sua Somatocarta automaticamente, gera o Laudo visual em 30 segundos, corrige todos os perímetros musculares e faz o cálculo das 4 dobras em um só clique.
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
            Na era da tecnologia de ponta e das bioimpedâncias que emitem recibos em poucos segundos, a arte mecânica da antropometria se destaca como uma ferramenta raiz de veracidade inegável.
          </p>
          <p>
            Um bom avaliador que se apoia nos protocolos da ISAK, tem a habilidade tátil de soltar fáscias musculares da gordura, marca seus pontos criteriosamente e converte esses dados numa ferramenta de automação como as Planilhas Clínicas modernas, jamais será substituído. O paciente percebe o cuidado e, fisiologicamente, os dados estarão imunes à flutuações hormonais e dietéticas que arruinariam outras modalidades de imagem. Domine as equações, confie na L6 e eleve a entrega no seu consultório!
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