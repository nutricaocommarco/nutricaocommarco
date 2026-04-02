import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Shield, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Brain, Clock, AlertCircle, Moon, EyeOff, BookOpen, Database, 
  AlertTriangle, XCircle, CheckCircle, Thermometer, Leaf, Heart, Sun, Coffee,
  Apple, Droplet, Flame, Calendar, Dumbbell, ClipboardList, Send
} from 'lucide-react';

import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-05-15";
const dateModifiedISO = "2026-05-15";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');
const tpmCapa = `${githubImgBase}Blog/TPM.jpg`;

export default function TPMeEmagrecimento() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados do Formulário e Visibilidade
  const [isFormOpen, setIsFormOpen] = useState(false); // NOVO ESTADO: Controla se o form está visível
  const [formStatus, setFormStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cicloRegular: '',
    fluxoColicas: '',
    anticoncepcional: '',
    apetiteMuda: '',
    fomeAumenta: '',
    vontadesEspecificas: '',
    disposicaoMensal: '',
    mudancaHumor: '',
    sonoPiora: '',
    pesoFlutua: '',
    praticaExercicio: '',
    inchacoRetencao: '',
    aceitaTermos: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xpqojopr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({
          nome: '', email: '', cicloRegular: '', fluxoColicas: '', anticoncepcional: '',
          apetiteMuda: '', fomeAumenta: '', vontadesEspecificas: '',
          disposicaoMensal: '', mudancaHumor: '', sonoPiora: '',
          pesoFlutua: '', praticaExercicio: '', inchacoRetencao: '', aceitaTermos: false
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const faqs = [
    {
      pergunta: "Por que a fome aumenta tanto antes de menstruar?",
      resposta: "O aumento da fome na fase lútea (pré-menstrual) é um processo fisiológico real. A alta do hormônio progesterona estimula áreas do cérebro associadas ao apetite, sinalizando que o corpo precisa de mais energia. Além disso, há um leve aumento na Taxa Metabólica Basal nesse período."
    },
    {
      pergunta: "É normal ganhar peso durante a TPM?",
      resposta: "Sim, e esse ganho raramente é gordura. A queda brusca de estrogênio e progesterona que antecede a menstruação causa intensa retenção de líquidos e inchaço, além de alterações no trânsito intestinal. O peso na balança pode flutuar de 1 a 3 quilos, o que se normaliza nos primeiros dias do ciclo."
    },
    {
      pergunta: "O desejo incontrolável por chocolate é biológico?",
      resposta: "A ciência mostra que o desejo por energia extra é biológico, mas a busca específica por chocolate ou doces ultraprocessados é cultural e aprendida. O corpo pede calorias, mas a mente, influenciada por hábitos, traduz isso como vontade exclusiva de comer doces reconfortantes."
    },
    {
      pergunta: "Preciso mudar minha dieta em cada fase do ciclo para emagrecer?",
      resposta: "Não é obrigatório. Embora o corpo oxide um pouco mais de gordura e tenha flutuações na sensibilidade à insulina ao longo do mês, manipular macronutrientes semana a semana não traz um benefício significativamente superior. A constância em uma alimentação saudável ao longo de todo o ciclo é o que garante o emagrecimento."
    },
    {
      pergunta: "O que posso comer para aliviar a vontade de doce na TPM?",
      resposta: "Priorize frutas mais doces aquecidas com canela, iogurte natural com cacau 100% ou pequenos pedaços de chocolate amargo consumidos logo após refeições ricas em fibras e proteínas. Isso evita picos de insulina e modula a produção de serotonina, aliviando a compulsão."
    }
  ];

  const tabelaMitosVerdades = [
    { id: 1, mitoVerdade: "Verdade", ponto: "TMB Aumenta na Fase Lútea", explicacao: "A Taxa Metabólica Basal sofre um leve aumento fisiológico após a ovulação, justificando parte do aumento natural do apetite." },
    { id: 2, mitoVerdade: "Verdade", ponto: "Maior Ingestão Espontânea", explicacao: "É comprovado que mulheres tendem a ingerir mais calorias espontaneamente na fase lútea devido aos sinais orexígenos (que estimulam a fome)." },
    { id: 3, mitoVerdade: "Mito", ponto: "Mudança Radical de Macros", explicacao: "Não é necessário nem prático manipular detalhadamente os macronutrientes para cada fase específica do ciclo menstrual buscando emagrecimento." },
    { id: 4, mitoVerdade: "Mito", ponto: "Reduzir Carboidrato na Fase Lútea", explicacao: "Embora haja maior oxidação de gordura nesta fase, reduzir carboidratos drasticamente pode piorar os sintomas da TPM e o humor." }
  ];

  const estrategiasTPM = [
    { id: 1, estrategia: "Aumento Inteligente de Fibras", comoFaz: "Adicionar mais saladas, raízes e aveia", impacto: "Como a fome aumenta de forma real devido à progesterona, você preenche o estômago sem estourar as calorias diárias, mantendo o déficit calórico." },
    { id: 2, estrategia: "Fracionamento de Proteínas", comoFaz: "Ovos, iogurtes ou whey em lanches estratégicos", impacto: "Evita os picos abruptos de insulina e a consequente hipoglicemia de rebote, que é o principal gatilho biológico para o desejo descontrolado por açúcar." },
    { id: 3, estrategia: "Fontes de Magnésio e Triptofano", comoFaz: "Sementes de abóbora, banana e cacau", impacto: "O triptofano é precursor da serotonina (hormônio do bem-estar), ajudando a estabilizar as alterações drásticas de humor características da queda hormonal." }
  ];

  return (
    <>
      <Helmet>
        <title>O Que Comer na TPM: Emagrecimento e Metabolismo Feminino | Nutrição com Marco</title>
        <meta name="description" content="Descubra por que a vontade de doce aumenta na TPM, a verdade científica sobre o metabolismo feminino, o papel do treino e estratégias para emagrecer sem sofrimento." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que Comer na TPM: Emagrecimento e Metabolismo Feminino | Nutrição com Marco" />
        <meta property="og:description" content="A ciência por trás da TPM. Riscos, flutuações hormonais, treinos, mitos e verdades sobre emagrecimento em mulheres." />
        <meta property="og:image" content={tpmCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
      </Helmet>

      <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none text-left">

            <div className="mb-8 flex flex-col items-start gap-2">
              <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde da Mulher</span>
              <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              O Que Comer na TPM: Desvendando o Emagrecimento e o Metabolismo Feminino
            </h1>

            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta Direta: O que comer na TPM?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  Para aliviar os sintomas e manter o emagrecimento na <strong>TPM</strong>, você deve focar em alimentos que promovam saciedade prolongada e estimulem a produção de hormônios do bem-estar. Priorize <strong>proteínas magras</strong>, <strong>carboidratos complexos</strong> ricos em fibras (como aveia, batata e raízes) e fontes excelentes de <strong>magnésio e triptofano</strong> (como banana, cacau em pó 70%, sementes de abóbora e castanhas). Essa combinação estabiliza o açúcar no sangue, reduz a retenção de líquidos e controla a vontade incontrolável de comer doces ao estimular a serotonina.
              </p>
            </div>

            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-green-600 w-6 h-6" />
                  <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
                </div>
                <audio controls className="w-full h-10 outline-none rounded-full">
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/TPM.mp3" type="audio/mpeg" />
                  O seu navegador não suporta o áudio.
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
                    <li><a href="#diferenca-emagrecimento" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Diferença no Emagrecimento</a></li>
                    <li><a href="#danca-hormonios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Dança dos Hormônios</a></li>
                    <li><a href="#mitos-verdades" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Mitos e Verdades do Ciclo</a></li>
                    <li><a href="#vontade-doce" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vontade de Doce: Biologia?</a></li>
                    <li><a href="#o-que-comer" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Estratégias: O Que Comer</a></li>
                    <li><a href="#treino-constancia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Dumbbell size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Papel do Treino</a></li>
                    <li><a href="#avaliacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><ClipboardList size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Análise de Perfil (Grátis)</a></li>
                    <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dúvidas Frequentes</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
                <img 
                  src={tpmCapa} 
                  alt="Ilustração do metabolismo feminino, com foco no balanço entre os desejos alimentares da TPM e escolhas nutricionais inteligentes." 
                  title="Nutrição Feminina e o Ciclo Menstrual"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="bg-green-50/90 backdrop-blur-sm p-4 text-center absolute bottom-0 w-full border-t border-green-100">
                  <p className="text-xs text-green-800 font-bold uppercase tracking-widest text-center m-0">
                    O seu metabolismo não é estático, ele é cíclico: entenda as fases do seu corpo.
                  </p>
                </div>
              </div>

              <h2 id="diferenca-emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Brain className="text-green-600"/> A Diferença no Emagrecimento Feminino
              </h2>
              <p>
                Muitas mulheres se frustram ao tentar seguir exatamente o mesmo plano alimentar que o marido, o namorado ou um amigo, percebendo rapidamente que os resultados na balança não acompanham o mesmo ritmo. A explicação para essa disparidade é puramente biológica e fisiológica. Diferente do metabolismo masculino, que se mantém relativamente estável, o <strong>metabolismo feminino não é uma linha reta e estática</strong>. Ele é essencialmente cíclico e sofre transformações profundas e contínuas ao longo de toda a vida. Durante a infância, desfrutamos de uma estabilidade hormonal que é abruptamente quebrada na puberdade, momento em que ocorre o primeiro grande aumento de estrogênio e progesterona, alterando para sempre a forma como o corpo da mulher distribui e armazena a gordura.
              </p>
              <p>
                Ao entrarmos nos anos reprodutivos, vivemos uma verdadeira montanha-russa química onde esses hormônios sobem e descem em um ritmo que, na média, dura vinte e oito dias. Mais tarde, com a chegada da perimenopausa, essa produção entra em declínio, o que altera novamente o formato corporal, direcionando o estoque de energia predominantemente para a região visceral. Compreender profundamente que o corpo feminino tem demandas e flutuações únicas é o primeiro e mais importante passo para parar de brigar com a própria biologia e começar a orquestrar o emagrecimento a favor dela.
              </p>

              <h2 id="danca-hormonios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Activity className="text-green-600"/> A Dança dos Hormônios e o Metabolismo
              </h2>
              <p>
                Essa verdadeira orquestra fisiológica começa no cérebro. O hipotálamo envia sinais em pulsos rítmicos para a hipófise, que por sua vez manda mensagens vitais diretamente para os ovários. É ali que a mágica acontece com a produção de estradiol e progesterona. O grande segredo, frequentemente ignorado até mesmo por alguns profissionais, é que <strong>estes não são apenas hormônios ligados à reprodução</strong>; eles são hormônios metabólicos de altíssimo impacto. Eles viajam por toda a corrente sanguínea modulando ativamente vias complexas que regulam o nosso apetite (como a via POMC e NPY), decidem onde a gordura será estocada, governam o metabolismo dos nossos ossos e alteram drasticamente a nossa sensibilidade à insulina.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 bg-slate-50 rounded-r-2xl italic text-slate-700 shadow-sm relative">
                <span className="absolute -left-3 -top-3 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-serif text-2xl">"</span>
                <p className="mb-2">Durante a vida reprodutiva, uma mulher chega a menstruar, em média, mais de 460 vezes. Ignorar o impacto metabólico de quase quinhentos ciclos na nutrição é ignorar a base da fisiologia feminina.</p>
                <footer className="text-sm font-bold text-green-700 not-italic uppercase tracking-wider">— Atualizações em Metabolismo Feminino</footer>
              </blockquote>

              <p>
                Para entender a gangorra da fome e do peso, precisamos olhar para as <strong>fases do ciclo ovariano</strong>:
                Na fase Folicular (pós-menstruação), os níveis de estrogênio começam a subir. Esse hormônio é um excelente aliado, pois ajuda a segurar a fome e aumenta a nossa disposição. Contudo, assim que a ovulação acontece e entramos na fase Secretora, o cenário inverte: o estrogênio cai e a progesterona assume o controle. Esse aumento expressivo de progesterona dispara um forte sinal de alerta no cérebro, ativando gatilhos que aumentam significativamente a percepção de fome. É exatamente nessa janela, e logo depois com a queda brusca de ambos na TPM, que a mulher enfrenta a retenção hídrica, a alteração de humor e o pico absoluto de apetite.
              </p>

              <h2 id="mitos-verdades" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Shield className="text-green-600"/> Mitos e Verdades: O Ciclo Menstrual na Nutrição
              </h2>
              <p>
                Diante de tamanha complexidade hormonal, a internet foi inundada por protocolos rigorosos que prometem o corpo perfeito se você comer "exatamente o macronutriente X na fase Y". No entanto, a literatura científica baseada em evidências é muito mais pé no chão. Estudos robustos analisando as diferenças sexuais nas estratégias nutricionais demonstraram que, embora o corpo feminino realmente passe por flutuações na forma de gastar energia e saibamos que as <a href="https://pubmed.ncbi.nlm.nih.gov/2179207/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">mulheres utilizam substratos de energia de forma diferente dos homens durante o exercício</a>, <strong>não é obrigatório nem altamente vantajoso</strong> mudar toda a estrutura da sua dieta a cada nova fase da lua para conseguir emagrecer.
              </p>

              {/* TABELA: MITOS E VERDADES */}
              <div className="my-10 bg-white rounded-[2rem] border border-green-200 shadow-xl overflow-hidden">
                <div className="bg-green-50 text-green-900 font-black uppercase tracking-widest text-sm p-5 border-b border-green-200 flex items-center gap-3">
                   <AlertTriangle size={20} className="text-green-600" /> O que a Ciência Diz sobre Dieta e Ciclo Menstrual
                </div>
                
                <div className="hidden md:grid grid-cols-12 bg-slate-50 text-slate-500 font-bold uppercase tracking-widest text-[10px] p-4 border-b border-slate-100">
                  <div className="col-span-2">Status</div>
                  <div className="col-span-4">Afirmação Comum</div>
                  <div className="col-span-6">A Realidade Fisiológica</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {tabelaMitosVerdades.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 md:p-4 items-start hover:bg-slate-50 transition-colors">
                      <div className="col-span-2 font-bold text-slate-800 flex items-center gap-2 text-sm">
                        {item.mitoVerdade === "Verdade" ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs uppercase tracking-widest w-fit inline-flex items-center gap-1"><CheckCircle size={12}/> Verdade</span>
                        ) : (
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs uppercase tracking-widest w-fit inline-flex items-center gap-1"><XCircle size={12}/> Mito</span>
                        )}
                      </div>
                      <div className="col-span-4 font-bold text-slate-800 text-sm md:text-base leading-snug">
                        {item.ponto}
                      </div>
                      <div className="col-span-6 text-sm text-slate-600 leading-relaxed font-medium">
                        {item.explicacao}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="vontade-doce" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <AlertCircle className="text-green-600"/> Vontade de Doce na TPM: Biologia ou Hábito?
              </h2>
              <p>
                Chegamos ao grande vilão do emagrecimento feminino: a fissura por açúcar nos dias que antecedem a menstruação. Se você sente que perde completamente o controle da sua vontade, saiba que essa batalha tem dois lados muito distintos. Como vimos, o aumento da fome é <strong>absolutamente biológico</strong>. O seu corpo está sendo banhado por progesterona e isso ativa o seu cérebro para buscar mais substrato energético. Contudo, a escolha do que você quer comer é uma história bem diferente.
              </p>
              <p>
                Estudiosos comportamentais investigaram a fundo o famoso "craving" menstrual (o desejo incontrolável) e chegaram a uma conclusão fascinante. A resposta biológica é a fome pura, mas o direcionamento exclusivo dessa fome para o <strong>chocolate</strong> ou doces ultraprocessados é uma construção social. 
              </p>

              <p className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-slate-700 italic font-medium shadow-inner relative">
                <span className="absolute -left-3 -top-3 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-serif text-2xl">"</span>
                "Pesquisas indicam que uma parte significativa do desejo pré-menstrual por chocolate é aprendida e amplamente influenciada pela nossa cultura, e não puramente uma necessidade biológica do organismo."
                <span className="block mt-4 text-sm font-bold text-green-700 not-italic uppercase tracking-wider">
                  — <a href="https://pubmed.ncbi.nlm.nih.gov/28723930/" target="_blank" rel="noopener noreferrer" className="hover:underline">Hormes et al., 2017 (Does culture create craving?)</a>
                </span>
              </p>

              <p>
                Em resumo, o seu corpo grita por energia e acolhimento, e a sua mente, que foi treinada pela cultura e pelo marketing ao longo de anos, traduz instantaneamente esse grito em "preciso de uma barra inteira de chocolate para me acalmar". Entender essa diferença é libertador.
              </p>

              <h2 id="o-que-comer" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-600"/> Estratégias Práticas: O que Colocar no Prato
              </h2>
              <p>
                Lutar contra o próprio corpo durante a TPM é a pior estratégia possível, pois restrições severas nesse período geralmente culminam em episódios devastadores de compulsão alimentar. A grande sacada nutricional é focar em <strong>volume e qualidade</strong>. Como a sua fome realmente será maior, nós precisamos preencher o seu estômago com alimentos que sinalizam saciedade para o cérebro sem destruir o seu déficit calórico.
              </p>

              {/* TABELA: ESTRATÉGIAS */}
              <div className="my-14 bg-slate-50 p-6 md:p-10 rounded-[3rem] border border-slate-200 shadow-inner">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tight m-0">
                    O Arsenal Contra a Fome da TPM
                  </h3>
                  <p className="text-slate-600 mt-3 font-medium max-w-2xl mx-auto">
                    Troque a culpa pelo planejamento. Veja como ajustar as suas escolhas alimentares para vencer a queda hormonal:
                  </p>
                </div>

                <div className="space-y-6">
                  {estrategiasTPM.map((fator) => (
                    <div key={fator.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row items-center">
                      <div className="flex-1 w-full p-5 md:p-6 bg-green-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-green-600 font-black uppercase text-[11px] tracking-widest">
                          <CheckCircle size={16} /> Estratégia Prática
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg m-0">{fator.estrategia}</h4>
                      </div>
                      <div className="flex-1 w-full p-5 md:p-6 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-500 font-black uppercase text-[11px] tracking-widest">
                          <Apple size={16} /> Como Fazer
                        </div>
                        <h4 className="font-bold text-slate-800 text-[15px] m-0">{fator.comoFaz}</h4>
                      </div>
                      <div className="flex-[1.5] w-full p-5 md:p-6 flex flex-col gap-2 bg-white">
                        <div className="flex items-center gap-2 text-slate-400 font-black uppercase text-[11px] tracking-widest">
                          <Thermometer size={16} /> O Impacto Fisiológico
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium m-0">
                          {fator.impacto}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NOVO TÓPICO: O PAPEL DO TREINO E A CONSTÂNCIA */}
              <h2 id="treino-constancia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Dumbbell className="text-green-600"/> O Papel do Treino e a Constância
              </h2>
              <p>
                Se você consome conteúdo de fitness nas redes sociais, muito provavelmente já foi bombardeada com a ideia de que precisa "sincronizar" o seu treino para cada fase do ciclo menstrual — fazendo apenas yoga e alongamentos na TPM e guardando os treinos pesados exclusivamente para o período de ovulação. Mas será que isso é realmente essencial para você ter resultados estéticos e de saúde?
              </p>
              <p>
                A ciência mais atualizada do esporte mostra que <strong>não</strong>. Um estudo recentíssimo de 2025, publicado na <em>The Journal of Physiology</em>, investigou a fundo as respostas do nosso corpo ao exercício resistido (musculação) e chegou a uma conclusão contundente: a nossa capacidade de construir massa muscular (a síntese de proteína muscular) <a href="https://pubmed.ncbi.nlm.nih.gov/39630025/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">não sofre nenhuma influência significativa da fase do ciclo menstrual</a>. Isso significa que o seu corpo constrói músculos e processa proteínas com a mesma eficiência tanto na fase folicular quanto na fase lútea.
              </p>
              <p>
                Além disso, revisões focadas no desempenho geral apontam que não há evidências robustas o suficiente que justifiquem a periodização rigorosa do treinamento baseada apenas na montanha-russa dos hormônios femininos. O que realmente dita o sucesso do seu emagrecimento e da sua saúde a longo prazo é a <strong>constância</strong>. É evidente que se você está com cólicas incapacitantes no primeiro dia da menstruação, não há problema algum em pegar mais leve ou descansar. O acolhimento é fundamental. Mas você não precisa (e nem deve) engavetar o seu treino inteiro só porque o calendário virou. O melhor treino sempre será aquele que você consegue manter de forma consistente durante todo o mês!
              </p>

              {/* AFILIADO MERCADO LIVRE (MAGNÉSIO) */}
              <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                      <Zap size={14} className="fill-white" />
                      <span>O Pingus Recomenda!</span>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                          <img 
                              src={`${githubImgBase}logoN_pingus.png`} 
                              alt="Selo de Qualidade Pingus" 
                              className="w-full h-full object-contain" 
                          />
                      </div>

                      <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                              Suplemento de <span className="text-green-600">Magnésio Dimalato ou Inositol</span>
                          </h4>

                          <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                              <img 
                                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" 
                                alt="Frasco de Suplementos simulando Magnésio" 
                                className="w-full h-auto object-cover opacity-90" 
                              />
                          </div>

                          <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                              Se a sua TPM vem acompanhada de cólicas fortes, dores de cabeça e um nível altíssimo de irritabilidade, a ciência aponta que uma boa suplementação focada de <strong>Magnésio</strong> pode ser uma das estratégias nutricionais mais eficazes para o relaxamento muscular e a estabilização nervosa nesse período crítico do mês.
                          </p>

                          <a 
                              href="#" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                          >
                              <ShoppingCart size={16} />
                              Ver Ofertas Parceiras
                          </a>
                      </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-green-50 text-center">
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                          Consulte o seu nutricionista antes de iniciar qualquer suplementação clínica.
                      </p>
                  </div>
              </div>

              {/* VÍDEO DO YOUTUBE */}
              <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <PlayCircle className="text-green-600"/> Aprofunde-se: Entendendo as Emoções e a Fome
              </h2>
              <p>
                Não basta saber o que comer; é fundamental entender os gatilhos invisíveis que nos fazem comer. Entenda visualmente a diferença brutal entre estar com fome de verdade e estar sendo engolida pelas emoções em nosso vídeo explicativo.
              </p>

              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight">Diferenciando Fome Física de Fome Emocional</h3>
                </div>
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/g94wfvhMl14" 
                    title="Vídeo sobre Fome Emocional" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <p className="mt-10">
                Lembre-se sempre: o emagrecimento definitivo para mulheres não é construído na perfeição milimétrica de uma semana onde você sofre para bater as metas de macronutrientes. Aceite que o seu corpo é biológico, que a retenção líquida na TPM vai fazer a balança subir temporariamente (e que isso não é gordura), e mantenha uma rotina alimentar rica em nutrientes o mês inteiro. A verdadeira mágica do metabolismo feminino acontece quando você alia o conhecimento com a paciência.
              </p>


              {/* FORMULÁRIO DE CAPTAÇÃO / TRIAGEM DETALHADA - RETRÁTIL */}
              <div id="avaliacao" className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-green-100 shadow-2xl relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-40 -ml-10 -mb-10 pointer-events-none"></div>

                <div className="relative z-10 text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm rotate-3">
                    <ClipboardList size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic leading-tight mb-4">
                    Análise de Perfil Gratuita: Você e a TPM
                  </h3>
                  <p className="text-slate-600 font-medium max-w-xl mx-auto mb-6">
                    Responda o questionário rápido abaixo. Eu vou analisar as suas respostas e te enviar um <strong>feedback educacional gratuito</strong> com os primeiros passos para você lidar melhor com a sua TPM e o seu metabolismo.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="relative z-10 bg-green-50 rounded-3xl p-8 text-center border border-green-100 transform transition-all animate-fade-in">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                      <CheckCircle size={40} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-green-900 italic uppercase mb-2">Questionário Recebido!</h4>
                    <p className="text-green-700 font-medium mb-6">Suas respostas foram registradas. Em breve, enviaremos um feedback educacional personalizado para o seu e-mail!</p>
                    <button 
                      onClick={() => { setFormStatus('idle'); setIsFormOpen(false); }}
                      className="text-sm font-bold text-green-600 hover:text-green-800 uppercase tracking-widest underline underline-offset-4"
                    >
                      Enviar nova análise
                    </button>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center">
                    
                    {/* BOTÃO PARA ABRIR O FORMULÁRIO */}
                    {!isFormOpen && (
                      <button 
                        onClick={() => setIsFormOpen(true)}
                        className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300"
                      >
                        <ClipboardList size={20} />
                        Iniciar Análise Gratuita
                      </button>
                    )}

                    {/* CONTAINER DO FORMULÁRIO (RETRÁTIL) */}
                    <div className={`w-full transition-all duration-700 ease-in-out overflow-hidden ${isFormOpen ? 'max-h-[3000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                      
                      {isFormOpen && (
                        <div className="flex justify-end mb-6">
                          <button 
                            onClick={() => setIsFormOpen(false)}
                            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
                          >
                            <XCircle size={16} /> Ocultar Questionário
                          </button>
                        </div>
                      )}

                      <form onSubmit={handleFormSubmit} className="space-y-8 max-w-3xl mx-auto">
                        {/* 1. SEU PERFIL */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="flex items-center gap-3 font-black text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                            <FileText size={20} className="text-green-600"/> 1. Contato Básico
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Seu Nome</label>
                              <input type="text" required value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm" placeholder="Como gostaria de ser chamada?" />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Seu Melhor E-mail</label>
                              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm" placeholder="seu.email@exemplo.com" />
                            </div>
                          </div>
                        </div>

                        {/* 2. CICLO MENSTRUAL */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="flex items-center gap-3 font-black text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                            <Calendar size={20} className="text-green-600"/> 2. Ciclo Menstrual
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Seu ciclo é regular?</label>
                              <select required value={formData.cicloRegular} onChange={(e) => setFormData({...formData, cicloRegular: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="sim">Sim, muito regular</option>
                                <option value="nao">Não, é irregular</option>
                                <option value="varia">Varia de vez em quando</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Fluxo ou Cólicas?</label>
                              <select required value={formData.fluxoColicas} onChange={(e) => setFormData({...formData, fluxoColicas: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="ambos">Fluxo intenso e cólicas fortes</option>
                                <option value="so_fluxo">Apenas fluxo intenso</option>
                                <option value="so_colica">Apenas cólicas fortes</option>
                                <option value="tranquilo">Ciclo super tranquilo</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Usa Anticoncepcional?</label>
                              <select required value={formData.anticoncepcional} onChange={(e) => setFormData({...formData, anticoncepcional: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="pilula">Sim (Pílula)</option>
                                <option value="diu_hormonal">Sim (DIU hormonal/Mirena)</option>
                                <option value="injecao_implante">Sim (Injeção/Implante)</option>
                                <option value="diu_cobre">Não (Uso DIU de Cobre/Prata)</option>
                                <option value="nao">Não uso nada</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* 3. APETITE & ALIMENTAÇÃO */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="flex items-center gap-3 font-black text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                            <Apple size={20} className="text-green-600"/> 3. Apetite & Alimentação
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">O apetite muda no mês?</label>
                              <select required value={formData.apetiteMuda} onChange={(e) => setFormData({...formData, apetiteMuda: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="sim_muito">Muda completamente</option>
                                <option value="sim_pouco">Muda um pouco</option>
                                <option value="nao_muda">É sempre igual</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">A fome aumenta ou diminui?</label>
                              <select required value={formData.fomeAumenta} onChange={(e) => setFormData({...formData, fomeAumenta: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="aumenta_tpm">Aumenta MUITO na TPM</option>
                                <option value="aumenta_menstruacao">Aumenta durante a menstruação</option>
                                <option value="diminui">Costumo perder a fome</option>
                                <option value="constante">Não percebo oscilação</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Tem vontades específicas em algum período?</label>
                            <input type="text" required value={formData.vontadesEspecificas} onChange={(e) => setFormData({...formData, vontadesEspecificas: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm" placeholder="Ex: Doce, salgado, chocolate, fast food na TPM..." />
                          </div>
                        </div>

                        {/* 4. ENERGIA & HUMOR */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="flex items-center gap-3 font-black text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                            <Heart size={20} className="text-green-600"/> 4. Energia & Humor
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Como é a disposição?</label>
                              <select required value={formData.disposicaoMensal} onChange={(e) => setFormData({...formData, disposicaoMensal: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="cai_tpm">Despenca na TPM</option>
                                <option value="cai_menstruacao">Cai durante a menstruação</option>
                                <option value="alta">Sempre com energia</option>
                                <option value="baixa">Sempre cansada</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">O humor muda na TPM?</label>
                              <select required value={formData.mudancaHumor} onChange={(e) => setFormData({...formData, mudancaHumor: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="irritada">Fico muito irritada/estressada</option>
                                <option value="triste">Fico mais triste/chorosa</option>
                                <option value="ansiosa">Fico muito ansiosa</option>
                                <option value="nao">Não percebo mudança</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">O sono piora em alguma fase?</label>
                              <select required value={formData.sonoPiora} onChange={(e) => setFormData({...formData, sonoPiora: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="tpm">Sim, piora na TPM</option>
                                <option value="menstruacao">Sim, piora na menstruação</option>
                                <option value="nao">Durmo bem sempre</option>
                                <option value="insonia">Tenho insônia frequentemente</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* 5. PESO & COMPOSIÇÃO */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="flex items-center gap-3 font-black text-slate-800 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                            <Activity size={20} className="text-green-600"/> 5. Peso & Composição
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">O peso flutua no mês?</label>
                              <select required value={formData.pesoFlutua} onChange={(e) => setFormData({...formData, pesoFlutua: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="ate2">Sim, flutua até 2kg</option>
                                <option value="mais2">Sim, flutua mais de 2kg</option>
                                <option value="nao_flutua">Quase não flutua</option>
                                <option value="nao_se_pesa">Não costumo me pesar</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Tem muito Inchaço?</label>
                              <select required value={formData.inchacoRetencao} onChange={(e) => setFormData({...formData, inchacoRetencao: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="pernas_barriga">Sim, retenho nas pernas/barriga</option>
                                <option value="mamas">Sim, inchaço/dor nas mamas</option>
                                <option value="pouco">Tenho muito pouco inchaço</option>
                                <option value="nenhum">Não sinto inchaço nenhum</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">Pratica exercício?</label>
                              <select required value={formData.praticaExercicio} onChange={(e) => setFormData({...formData, praticaExercicio: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm">
                                <option value="" disabled>Selecione...</option>
                                <option value="musculacao">Sim, musculação regular</option>
                                <option value="cardio">Sim, cardio/aeróbico</option>
                                <option value="as_vezes">Treino de vez em quando</option>
                                <option value="sedentaria">Não treino no momento</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-inner">
                          <label className="flex items-start gap-4 cursor-pointer">
                            <input 
                              type="checkbox" 
                              required
                              checked={formData.aceitaTermos}
                              onChange={(e) => setFormData({...formData, aceitaTermos: e.target.checked})}
                              className="mt-1 w-5 h-5 text-green-600 rounded border-slate-300 focus:ring-green-500"
                            />
                            <span className="text-[11px] leading-relaxed text-slate-500 font-medium">
                              <strong>Aviso Legal de Triagem:</strong> Declaro estar ciente de que esta é uma ferramenta de <strong>Educação Nutricional e Triagem de Perfil</strong>. Este formulário não substitui, em hipótese alguma, uma consulta clínica ou diagnóstico médico/nutricional, e não oferece prescrição de dietas. Ao enviar, aceito receber meu feedback educacional por e-mail e integrar a lista de contatos do portal.
                            </span>
                          </label>
                        </div>

                        {formStatus === 'error' && (
                          <div className="text-red-600 text-sm text-center font-bold bg-red-50 p-3 rounded-xl border border-red-200">
                            Ocorreu um erro ao enviar. Por favor, verifique sua conexão ou tente novamente mais tarde.
                          </div>
                        )}

                        <button 
                          type="submit" 
                          disabled={formStatus === 'submitting'}
                          className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none"
                        >
                          {formStatus === 'submitting' ? (
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <>
                              <Send size={18} />
                              Enviar Questionário e Receber Feedback
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ SECTION (Movido para DEPOIS do formulário) */}
              <div id="faq" className="mt-20 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                  <HelpCircle className="text-green-600" /> Dúvidas Frequentes sobre TPM e Dieta
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

          <ArtigosRecomendados />

          {/* AUTHOR BLOCK */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img 
                src={`${githubImgBase}Eu_1.png`} 
                alt="Marco Aurélio Jr." 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>";
                }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
                Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando você a construir uma relação mais leve e sem radicalismos com a comida, cuidando do corpo desde o intestino até a mente.
              </p>
              <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
                Siga @Nutricao_com_Marco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
