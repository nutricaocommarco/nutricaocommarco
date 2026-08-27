import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  ChevronLeft, HelpCircle, Activity, Heart, FileText,
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, Ruler, BookOpen, UserCheck, AlertTriangle,
  Globe, Brain, Target, Scale
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas E-E-A-T
const datePublishedISO = "2026-08-27";
const dateModifiedISO = "2026-08-27";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const rcqCapa = `${githubImgBase}Blog/RelacaoCinturaQuadril_Capa.webp`;

export default function RelacaoCinturaQuadril() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados da Calculadora de RCQ
  const [rcqDados, setRcqDados] = useState({ sexo: 'F', cintura: '', quadril: '' });
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleRcqChange = (e) => {
    const { name, value } = e.target;
    if (name === 'sexo') {
      setRcqDados({ ...rcqDados, sexo: value });
      return;
    }
    if (value === '' || /^\d*[.,]?\d*$/.test(value)) {
      setRcqDados({ ...rcqDados, [name]: value.replace(',', '.') });
    }
  };

  const calcularRCQ = (e) => {
    e.preventDefault();

    const cintura = parseFloat(rcqDados.cintura);
    const quadril = parseFloat(rcqDados.quadril);

    if (isNaN(cintura) || isNaN(quadril) || quadril <= 0) return;

    const rcq = cintura / quadril;

    // Classificação prática baseada nos cortes da OMS (Consulta de Especialistas, 2008):
    // Homens: risco substancialmente elevado acima de 0.90 | Mulheres: acima de 0.85
    let classificacao, cor;
    const limiteAlto = rcqDados.sexo === 'M' ? 0.90 : 0.85;
    const limiteModerado = rcqDados.sexo === 'M' ? 0.85 : 0.80;

    if (rcq >= limiteAlto) {
      classificacao = "Risco Substancialmente Elevado";
      cor = "red";
    } else if (rcq >= limiteModerado) {
      classificacao = "Risco Moderado";
      cor = "orange";
    } else {
      classificacao = "Risco Baixo";
      cor = "green";
    }

    setResultado({
      rcq: rcq.toFixed(2),
      classificacao,
      cor,
      limiteAlto
    });
  };

  const faqs = [
    {
      pergunta: "Relação Cintura-Quadril (RCQ) ou Relação Cintura-Estatura (RCEst): qual devo usar?",
      resposta: "Não são concorrentes, são complementares. A RCEst tem a vantagem de usar um único ponto de corte (0,5) para praticamente qualquer altura, o que a torna mais simples para triagem populacional em massa. Já a RCQ carrega uma informação que a RCEst não tem: ela compara diretamente o compartimento de risco (cintura) com o compartimento de referência óssea e muscular (quadril), sendo historicamente a métrica mais usada em estudos cardiovasculares de larga escala para descrever o padrão de distribuição de gordura andróide vs. ginoide."
    },
    {
      pergunta: "Homens e mulheres usam o mesmo ponto de corte na RCQ?",
      resposta: "Não. A fisiologia óssea e hormonal muda completamente a referência. O ponto de corte da OMS para risco substancialmente elevado é acima de 0,90 para homens e acima de 0,85 para mulheres, porque a bacia feminina é naturalmente mais larga (facilitando o parto) e o padrão de acúmulo de gordura pré-menopausa tende a ser mais ginoide."
    },
    {
      pergunta: "A Relação Cintura-Quadril substitui uma bioimpedância ou um DEXA?",
      resposta: "Não substitui, mas frequentemente supera esses métodos como preditor de risco cardiovascular específico. A RCQ não fraciona a composição corporal em massa gorda, magra e óssea como o DEXA faz, mas ela captura diretamente onde a gordura está localizada — informação que o percentual de gordura total, sozinho, não entrega. É uma ferramenta de triagem de risco, não de composição corporal completa."
    },
    {
      pergunta: "A menopausa muda a Relação Cintura-Quadril?",
      resposta: "Sim, de forma bem documentada na fisiologia endócrina. A queda do estrogênio na menopausa reduz o estímulo para o armazenamento de gordura no quadril e nas coxas (padrão ginoide) e favorece o acúmulo de gordura visceral abdominal (padrão andróide), o que costuma elevar a RCQ mesmo sem grande variação no peso total da balança."
    },
    {
      pergunta: "Como medir a cintura e o quadril corretamente em casa?",
      resposta: "Use uma fita métrica inelástica, sem apertar a pele. A cintura é medida no ponto médio entre a última costela e a crista ilíaca (o osso do quadril), ao final de uma expiração normal — não no umbigo. O quadril é medido na circunferência mais protuberante dos glúteos, geralmente ao nível do trocânter maior do fêmur. Meça sempre em pé, sem roupas grossas, e repita a medida duas vezes para reduzir o erro."
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
            Relação Cintura-Quadril: O Que É e Como Calcular Seu Risco Cardiovascular
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA - FEATURED SNIPPET GEO/AIO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: O Que É a Relação Cintura-Quadril?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              A <strong>relação cintura-quadril (RCQ)</strong> é a divisão da circunferência da cintura pela circunferência do quadril, usada para identificar o padrão de distribuição de gordura corporal. Segundo a Organização Mundial da Saúde, valores acima de <strong>0,90 em homens</strong> e <strong>0,85 em mulheres</strong> indicam risco cardiovascular substancialmente elevado, independentemente do peso total na balança ou do IMC.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Relacao_Cintura_Quadril.mp3" type="audio/mpeg" />
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
                  <li><a href="#o-que-e" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><BookOpen size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Que é a RCQ e Para Que Serve</a></li>
                  <li><a href="#como-medir" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Ruler size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Medir Corretamente</a></li>
                  <li><a href="#andoide-ginoide" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><UserCheck size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Padrão Andróide vs. Ginoide</a></li>
                  <li><a href="#interpretacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Target size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Interpretando os Valores</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />RCQ vs. IMC vs. Outros Índices</a></li>
                  <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Calculadora de RCQ</a></li>
                  <li><a href="#menopausa" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />RCQ na Menopausa</a></li>
                  <li><a href="#limitacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Limitações do Método</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO OTIMIZADA */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                <source media="(max-width: 480px)" srcSet={`${rcqCapa}?w=400&strip=all&quality=70`} />
                <source media="(max-width: 768px)" srcSet={`${rcqCapa}?w=600&strip=all&quality=70`} />
                <source media="(max-width: 1024px)" srcSet={`${rcqCapa}?w=800&strip=all&quality=85`} />
                <ImagemOtimizada
                  src={`${rcqCapa}?w=1280&strip=all&quality=85`}
                  alt="Pinguim Pingus vestindo jaleco de nutricionista em estilo Disney Pixar 3D, medindo a cintura de um paciente com uma fita métrica científica, em um consultório claro e moderno."
                  title="Relação Cintura-Quadril e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                Não é só quanto você pesa que importa — é onde esse peso está. A RCQ mede exatamente isso.
              </p>
            </figcaption>
          </figure>

          {/* 📝 INTRODUÇÃO */}
          <p className="mb-4">
            Duas pessoas podem ter exatamente o mesmo peso, a mesma altura e o mesmo <Link to="/quantas-calorias-gasto-por-dia" className="text-green-700 font-bold hover:underline">IMC</Link> — e ainda assim carregar riscos cardiovasculares completamente diferentes. A diferença não está na balança, está em <em>onde</em> o corpo guarda a gordura. É exatamente essa lacuna que a <strong>relação cintura-quadril</strong> foi criada para preencher.
          </p>
          <p className="mb-4">
            Diferente de uma <Link to="/avaliacao-antropometrica" className="text-green-700 font-bold hover:underline">avaliação antropométrica</Link> completa, que exige plicômetro, treinamento ISAK e minutos de consultório, a RCQ pode ser calculada em casa com uma fita métrica comum. Isso não a torna menos científica — pelo contrário, ela é uma das métricas mais estudadas em epidemiologia cardiovascular das últimas décadas, exatamente por ser simples, barata e reprodutível em qualquer população do mundo.
          </p>

          <h2 id="o-que-e" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <BookOpen className="text-green-700" /> O Que é a Relação Cintura-Quadril e Para Que Serve
          </h2>
          <p className="mb-4">
            A relação cintura-quadril nada mais é do que uma divisão simples: a circunferência da cintura (em cm) dividida pela circunferência do quadril (em cm). O resultado é um número adimensional — geralmente entre 0,65 e 1,10 em adultos — sem unidade de medida, o que facilita comparações entre pessoas de estaturas e biótipos completamente diferentes.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6 text-center">
            <p className="m-0 text-2xl md:text-3xl font-black not-italic">RCQ = Circunferência da Cintura ÷ Circunferência do Quadril</p>
          </div>
          <p className="mb-4">
            O objetivo da RCQ não é medir "quanto de gordura" uma pessoa tem, mas sim <strong>onde</strong> essa gordura está concentrada. Essa distinção é clinicamente crucial: o tecido adiposo visceral (o que se acumula na cavidade abdominal, ao redor dos órgãos) é metabolicamente muito mais ativo e inflamatório do que a gordura subcutânea acumulada em quadril e coxas, liberando ácidos graxos livres diretamente na circulação portal do fígado e contribuindo para resistência à insulina, dislipidemia e hipertensão.
          </p>

          <h2 id="como-medir" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Ruler className="text-green-700" /> Como Medir a Cintura e o Quadril Corretamente
          </h2>
          <p className="mb-8">
            O maior erro na hora de calcular a relação cintura-quadril em casa não é matemático — é a marcação incorreta dos pontos anatômicos. Um erro de 2 a 3 cm na medida da cintura já é suficiente para mudar a classificação de risco.
          </p>

          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> Circunferência da Cintura
              </h3>
              <p className="text-slate-600 m-0">
                Meça no ponto médio entre a margem inferior da última costela palpável e o topo da crista ilíaca (o osso do quadril que você sente ao apoiar a mão na cintura). A fita deve ficar paralela ao chão, tocando a pele sem comprimi-la, e a leitura deve ser feita ao final de uma expiração normal — nunca com a barriga contraída ou o ar preso.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Circunferência do Quadril
              </h3>
              <p className="text-slate-600 m-0">
                Meça na região de maior protuberância dos glúteos, geralmente na altura do trocânter maior do fêmur (o "osso" lateral do quadril). Fique em pé, com os pés juntos, e passe a fita ao redor de todo o quadril mantendo-a nivelada e paralela ao chão em toda a circunferência, sem afundar o tecido.
              </p>
            </div>
          </div>

          <h2 id="andoide-ginoide" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <UserCheck className="text-green-700" /> Padrão Andróide vs. Ginoide: A Física da Distribuição de Gordura
          </h2>
          <p className="mb-4">
            A fisiologia do armazenamento de gordura segue duas rotas principais, e a RCQ é justamente a régua que diferencia essas duas rotas:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li><strong>Padrão Andróide ("Maçã"):</strong> Acúmulo concentrado no abdômen, com predomínio de gordura visceral. É o padrão hormonalmente favorecido pela testosterona e mais comum em homens, mas também aparece em mulheres após a menopausa. Está associado a um risco cardiometabólico significativamente maior.</li>
            <li><strong>Padrão Ginoide ("Pêra"):</strong> Acúmulo concentrado em quadril, glúteos e coxas, com predomínio de gordura subcutânea. É o padrão favorecido pelo estrogênio, mais comum em mulheres em idade fértil. A gordura gluteofemoral tem, inclusive, um papel metabolicamente protetor documentado na literatura, atuando como um "depósito seguro" de ácidos graxos.</li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6">
            <p className="m-0">Não é coincidência que a expressão popular "corpo em formato de maçã ou pêra" tenha se tornado sinônimo leigo exatamente do que a relação cintura-quadril mede cientificamente: o formato da distribuição de gordura, não a quantidade total dela.</p>
          </div>

          <h2 id="interpretacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Target className="text-green-700" /> Interpretando os Valores da RCQ
          </h2>
          <p className="mb-4">
            A Organização Mundial da Saúde (OMS), em sua Consulta de Especialistas sobre Circunferência da Cintura e Relação Cintura-Quadril, estabeleceu pontos de corte específicos por sexo — uma diferenciação necessária porque a arquitetura óssea da bacia e o padrão hormonal de distribuição de gordura são estruturalmente diferentes entre homens e mulheres.
          </p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/4">Classificação</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-1/4">RCQ Homens</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-1/4">RCQ Mulheres</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-1/4">Risco Associado</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Baixo</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700">Abaixo de 0,85</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700">Abaixo de 0,80</td>
                  <td className="p-5 text-slate-600">Risco padrão populacional</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Moderado</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700">0,85 a 0,89</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700">0,80 a 0,84</td>
                  <td className="p-5 text-slate-600">Atenção e monitoramento</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Substancialmente Elevado</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700">A partir de 0,90</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700">A partir de 0,85</td>
                  <td className="p-5 text-slate-600 font-bold">Risco cardiovascular e metabólico elevado</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 md:hidden mb-8 italic">*Tabela completa disponível na versão desktop. Use a calculadora abaixo para ver seu resultado diretamente.</p>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6 mb-6">
            <p className="m-0">Esses cortes não são um veredito isolado: em populações com circunferência de cintura elevada, o acúmulo de fatores de risco metabólicos adicionais (triglicerídeos altos, HDL baixo, pressão elevada) amplifica de forma consistente o risco de mortalidade cardiovascular associado à obesidade central, segundo dados de coortes prospectivas de larga escala.</p>
          </div>

          <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> RCQ vs. IMC vs. Circunferência da Cintura: Qual Índice Escolher?
          </h2>
          <p className="mb-4">
            Nenhum índice antropométrico isolado é perfeito, e a literatura científica vem comparando esses métodos há décadas. Veja o comparativo prático entre os principais indicadores de obesidade central usados na prática clínica:
          </p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/5">Índice</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-2/5">Vantagens</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-2/5">Limitações</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">IMC</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Extremamente simples (peso ÷ altura²), padronizado mundialmente, útil para triagem populacional em massa.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Não diferencia massa magra de massa gorda, nem onde a gordura está localizada. Um atleta musculoso pode ser classificado como "obeso" por engano.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Circunferência da Cintura Isolada</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Medida única e rápida, forte componente dos critérios de síndrome metabólica. Estudos de coorte com dezenas de milhares de homens confirmam sua associação com mortalidade cardiovascular.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Não é ajustada pela estrutura óssea do indivíduo — a mesma medida em cm pode significar riscos bem diferentes em uma pessoa de estrutura pequena versus grande.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">RCQ (Cintura/Quadril)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Considera a estrutura óssea da bacia como referência, historicamente é o índice mais usado em grandes estudos cardiovasculares internacionais para descrever o padrão andróide de obesidade.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Duas medidas em vez de uma (mais chance de erro cumulativo). Pode "mascarar" risco em pessoas com quadril proporcionalmente muito largo.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic"><Link to="/quantas-calorias-gasto-por-dia" className="hover:underline">RCEst (Cintura/Estatura)</Link></td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Um único ponto de corte simples (0,5) já foi validado como capaz de identificar cerca de <strong>35% a mais</strong> de adultos com risco cardiometabólico "escondido" do que a combinação tradicional de IMC + circunferência da cintura, segundo análise de dados nacionais do Reino Unido publicada em 2016.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Mais recente na literatura, ainda não tão universalmente adotada em diretrizes clínicas oficiais quanto o IMC ou a RCQ.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Aprenda: Como Medir a Relação Cintura-Quadril na Prática</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="gRQBG64uNFE" title="Risco Cardíaco | Relação Cintura e Quadril" />
            </div>
          </div>

          {/* CALCULADORA DE RCQ */}
          <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Zap className="text-green-700" /> Calculadora de Relação Cintura-Quadril
          </h2>
          <p className="mb-8">
            Insira suas medidas de cintura e quadril (em centímetros) abaixo para calcular sua RCQ exata e ver a classificação de risco imediatamente.
          </p>

          <div className="my-10 bg-slate-900 border border-slate-800 shadow-2xl rounded-[3rem] overflow-hidden">
            <div className="p-6 md:p-8 text-center border-b border-slate-800">
              <strong className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                <Scale className="text-green-500" /> Calculadora RCQ
              </strong>
            </div>

            <form onSubmit={calcularRCQ} className="p-6 md:p-8 space-y-6 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">

                <label className="block">
                  <span className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1 block">Sexo</span>
                  <select name="sexo" value={rcqDados.sexo} onChange={handleRcqChange} className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500">
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">Cintura (cm)</span>
                  <input type="text" inputMode="decimal" name="cintura" value={rcqDados.cintura} onChange={handleRcqChange} required placeholder="Ex: 78" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                </label>

                <label className="block">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1 block">Quadril (cm)</span>
                  <input type="text" inputMode="decimal" name="quadril" value={rcqDados.quadril} onChange={handleRcqChange} required placeholder="Ex: 98" className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500" />
                </label>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-green-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] border-none cursor-pointer">
                  Calcular Minha RCQ
                </button>
              </div>
            </form>

            {resultado && (
              <div className="bg-slate-800 p-6 md:p-8 border-t border-slate-700 flex flex-col items-center">
                <div className="mb-6 w-full text-center">
                  <span className="text-5xl font-black text-white block mb-3">{resultado.rcq}</span>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold tracking-widest shadow-inner ${
                    resultado.cor === 'green' ? 'bg-green-700 text-white' : resultado.cor === 'orange' ? 'bg-orange-600 text-white' : 'bg-red-700 text-white'
                  }`}>
                    {resultado.classificacao}
                  </span>
                </div>

                {/* BARRA DE GAUGE VISUAL */}
                <div className="w-full max-w-sm">
                  <div className="relative w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 via-orange-500 to-red-600 rounded-full" style={{ width: '100%' }}></div>
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-6 bg-white border-2 border-slate-900 rounded-sm shadow-lg"
                      style={{ left: `calc(${Math.min(Math.max(((parseFloat(resultado.rcq) - 0.65) / (1.10 - 0.65)) * 100, 2), 98)}% - 6px)` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase mt-2">
                    <span>0,65</span>
                    <span>Limite: {resultado.limiteAlto}</span>
                    <span>1,10+</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs text-center mt-6 m-0 max-w-sm">Esta calculadora é uma ferramenta educativa de triagem baseada nos cortes da OMS e não substitui uma avaliação antropométrica completa com um profissional habilitado.</p>
              </div>
            )}
          </div>

          <h2 id="menopausa" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Heart className="text-green-700" /> Relação Cintura-Quadril na Menopausa
          </h2>
          <p className="mb-4">
            Um dos usos clínicos mais relevantes da RCQ é justamente no acompanhamento de mulheres na transição menopáusica. Antes da menopausa, o estrogênio favorece o armazenamento de gordura no padrão ginoide (quadril e coxas). Com a queda hormonal, esse estímulo desaparece, e o corpo passa a redirecionar o excedente calórico preferencialmente para a região abdominal.
          </p>
          <p className="mb-4">
            Na prática de consultório, isso significa que uma mulher pode manter o mesmo peso na balança antes e depois da menopausa e, ainda assim, ver sua RCQ subir de forma consistente — um sinal de alerta que o peso corporal isolado simplesmente não capta. Por isso a RCQ é uma ferramenta particularmente valiosa nesse momento da vida, complementando (e não substituindo) o acompanhamento nutricional e médico de rotina.
          </p>

          {/* VENDAS DA PLANILHA - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>Ferramenta de Avaliação Física!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para Relação Cintura-Quadril" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Planilha de Avaliação Antropométrica <span className="text-green-700">Inteligente PRO</span>
                </h4>

                <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                  <ImagemOtimizada src={`${githubImgBase}PlanilhaImagem/Planilha_Capa.webp`} alt="Capa da Planilha de Avaliação Antropométrica Inteligente VBA Excel" className="w-full h-auto object-contain" width="200" height="200" loading="lazy" />
                </div>

                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Calcular a relação cintura-quadril na mão é só o começo. A nossa <strong>Planilha de Avaliação Física desenvolvida em Excel com módulos de VBA</strong> automatiza a RCQ, a RCEst, o Índice de Conicidade, o apVAT e todos os indicadores de risco central junto com o restante da sua avaliação antropométrica completa — dobras, perímetros, somatotipo e fracionamento em 4 componentes, tudo em um único laudo profissional gerado em segundos.
                </p>

                <Link to="/planilha" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Comprar a Planilha de Avaliação Física PRO">
                  <ShoppingCart size={16} />
                  Automatize Seus Laudos de Avaliação Antropométrica Agora
                </Link>
              </div>
            </div>
          </div>

          <h2 id="limitacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <AlertTriangle className="text-green-700" /> Limitações da Relação Cintura-Quadril
          </h2>
          <p className="mb-4">
            Nenhuma medida antropométrica isolada é infalível, e a honestidade científica exige reconhecer os limites da RCQ. Por depender de duas medidas (e não uma só), o erro técnico de medição se acumula — um pequeno desvio na cintura somado a um pequeno desvio no quadril pode alterar a classificação final. Além disso, a RCQ pode, em teoria, "esconder" risco em pessoas com quadril proporcionalmente muito largo (a razão fica artificialmente baixa mesmo com cintura elevada em termos absolutos) ou superestimar risco em pessoas com quadril naturalmente estreito por estrutura óssea.
          </p>
          <p className="mb-4">
            Por essas razões, a recomendação de excelência clínica é nunca usar a RCQ isoladamente. O ideal é sempre cruzá-la com a circunferência da cintura absoluta, o IMC e, quando possível, uma <Link to="/avaliacao-antropometrica" className="text-green-700 font-bold hover:underline">avaliação antropométrica</Link> completa via dobras cutâneas, que fraciona a composição corporal em massa óssea, muscular e adiposa de forma muito mais detalhada do que qualquer razão de circunferências consegue sozinha.
          </p>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão: Onde a Gordura Está Importa Tanto Quanto o Quanto Ela Pesa
          </h2>
          <p className="mb-4">
            A relação cintura-quadril continua sendo, décadas depois de sua consolidação na literatura epidemiológica, uma das ferramentas mais custo-efetivas para identificar risco cardiovascular oculto — precisamente porque desloca o foco de "quanto peso" para "onde esse peso está localizado". Uma fita métrica, dois pontos anatômicos bem marcados e uma divisão simples entregam uma informação que a balança, sozinha, jamais conseguiria fornecer.
          </p>
          <p className="mb-4">
            Isso não significa abandonar outras métricas — IMC, circunferência da cintura isolada e RCEst continuam tendo seu papel, cada uma com pontos fortes e fracos próprios. O profissional (e o paciente) mais bem equipado é aquele que sabe usar cada índice pelo que ele realmente mede, combinando-os em vez de escolher apenas um.
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Relação Cintura-Quadril (FAQ)
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
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Acadêmicas e Fontes da Relação Cintura-Quadril</h3>
            <ul className="text-xs text-slate-500 leading-relaxed m-0 list-disc pl-4 space-y-1">
              <li><a href="https://www.who.int/publications/i/item/9789241501491" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">World Health Organization. <em>Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation</em>. Geneva, 2008.</a></li>
              <li><a href="https://diabetesjournals.org/care/article/29/2/404/24685/The-Importance-of-Waist-Circumference-in-the" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">KATZMARZYK, P.T., JANSSEN, I., ROSS, R., CHURCH, T.S., BLAIR, S.N. (2006). <em>The Importance of Waist Circumference in the Definition of Metabolic Syndrome: Prospective analyses of mortality in men.</em> Diabetes Care, 29(2), 404–409.</a></li>
              <li><a href="https://bmjopen.bmj.com/content/6/3/e010159" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">ASHWELL, M., GIBSON, S. (2016). <em>Waist-to-height ratio as an indicator of 'early health risk': simpler and more predictive than using a 'matrix' based on BMI and waist circumference.</em> BMJ Open, 6(3), e010159.</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-500">Aviso Nutricional da Relação Cintura-Quadril: Este conteúdo técnico destina-se primariamente a estudantes e profissionais de Educação Física e Nutrição sobre avaliação física. Avaliações antropométricas devem ser feitas exclusivamente por profissionais habilitados. O artigo possui fim meramente educativo e não substitui diagnósticos médicos.</span>
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
              Sou apaixonado por traduzir a barreira científica entre a academia da avaliação física e o consultório diário da avaliação antropométrica. Através do conhecimento aprofundado na Cineantropometria e com o treinamento formal dos padrões ISAK na avaliação física, procuro entregar a profissionais recém-formados e alunos metodologias práticas que automatizam a captação de dados sem comprometer a exatidão fisiológica da avaliação.
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
