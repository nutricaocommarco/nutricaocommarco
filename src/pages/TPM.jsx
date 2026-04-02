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

const datePublishedISO = "2026-04-02";
const dateModifiedISO = "2026-04-02";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');
const tpmCapa = `${githubImgBase}Blog/TPM.jpg`;

export default function TPMeEmagrecimento() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados do Formulário e Visibilidade
  const [isFormOpen, setIsFormOpen] = useState(false); 
  const [formStatus, setFormStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    nome: '', email: '', cicloRegular: '', fluxoColicas: '', anticoncepcional: '',
    apetiteMuda: '', fomeAumenta: '', vontadesEspecificas: '',
    disposicaoMensal: '', mudancaHumor: '', sonoPiora: '',
    pesoFlutua: '', praticaExercicio: '', inchacoRetencao: '',
    aceitaTermos: false, promptInstrucoes: "Interprete os dados acima para o blog 'Nutrição com Marco'. Escreva um e-mail empático e científico para a paciente. Diretrizes: 1. Use autoridade de avaliador ISAK 1 e estudante de nutrição. 2. Mencione o pinguim Pingus. 3. Não prescreva dieta ou suplementos. 4. Explique a fisiologia do inchaço, sono e apetite na TPM. 5. Seja acolhedor e sugira o acompanhamento do ciclo (Xiaomi Band 9 Pro)."
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
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormStatus('success');
        // 👇 AQUI: Limpamos as respostas da usuária, mas MANTEMOS o prompt intocado
        setFormData({
          nome: '', email: '', cicloRegular: '', fluxoColicas: '', anticoncepcional: '',
          apetiteMuda: '', fomeAumenta: '', vontadesEspecificas: '',
          disposicaoMensal: '', mudancaHumor: '', sonoPiora: '',
          pesoFlutua: '', praticaExercicio: '', inchacoRetencao: '', aceitaTermos: false,
          promptInstrucoes: "Interprete os dados acima para o blog 'Nutrição com Marco'. Escreva um e-mail empático e científico para a paciente. Diretrizes: 1. Use autoridade de avaliador ISAK 1 e estudante de nutrição. 2. Mencione o pinguim Pingus. 3. Não prescreva dieta ou suplementos. 4. Explique a fisiologia do inchaço, sono e apetite na TPM. 5. Seja acolhedor e sugira o acompanhamento do ciclo (Xiaomi Band 9 Pro)."
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
        <meta property="og:description" content="A ciência por trás da TPM e emagrecimento em mulheres. Entenda as flutuações hormonais e como controlar o apetite." />
        <meta property="og:image" content={tpmCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O Que Comer na TPM: Desvendando o Emagrecimento e o Metabolismo Feminino",
            "image": tpmCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição Feminina", "Metabolismo", "Emagrecimento", "Antropometria"]
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Nutrição com Marco", 
              "logo": { "@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png` }
            },
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO
          })}
        </script>

        {/* SCHEMA.ORG 2: MEDICAL PAGE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Fisiologia Hormonal Feminina e Nutrição",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Ciclo Menstrual"},
              {"@type": "MedicalEntity", "name": "TPM"}
            ]
          })}
        </script>
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
                    <li><a href="#diferenca-emagrecimento" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 shrink-0" />A Diferença no Emagrecimento</a></li>
                    <li><a href="#danca-hormonios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 shrink-0" />A Dança dos Hormônios</a></li>
                    <li><a href="#mitos-verdades" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 shrink-0" />Mitos e Verdades do Ciclo</a></li>
                    <li><a href="#vontade-doce" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-300 shrink-0" />Vontade de Doce: Biologia?</a></li>
                    <li><a href="#o-que-comer" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 shrink-0" />Estratégias: O Que Comer</a></li>
                    <li><a href="#treino-constancia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Dumbbell size={16} className="text-slate-300 shrink-0" />O Papel do Treino</a></li>
                    <li><a href="#avaliacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><ClipboardList size={16} className="text-slate-300 shrink-0" />Análise de Perfil (Grátis)</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-4">
                Se você já sentiu que a sua dieta parece parar de funcionar misteriosamente em algumas semanas do mês, saiba que o problema não é a sua força de vontade. A grande verdade é que a imensa maioria dos planos alimentares tradicionais ignora um dos fatores mais determinantes na fisiologia da mulher: a flutuação hormonal ao longo do ciclo menstrual. Entender como o seu corpo metaboliza energia, lida com o apetite e estoca líquidos durante a Tensão Pré-Menstrual (TPM) é o verdadeiro segredo para parar de lutar contra a própria biologia e alcançar um emagrecimento sustentável, inteligente e sem sofrimento.
              </p>

              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative text-center">
                <img 
                  src={tpmCapa} 
                  alt="Metabolismo Feminino" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200 mx-auto" 
                />
                <div className="bg-green-50/90 backdrop-blur-sm p-4 absolute bottom-0 w-full border-t border-green-100">
                  <p className="text-xs text-green-800 font-bold uppercase tracking-widest m-0 text-center">
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
                Ao entrarmos nos anos reprodutivos, vivemos uma verdadeira montanha-russa química onde esses hormônios sobem e descem em um ritmo que, na média, dura vinte e oito dias. Mais tarde, com a chegada da perimenopausa, essa produção cai e a gordura subcutânea começa a ir para a gordura visceral. Compreender profundamente que o corpo feminino tem demandas e flutuações únicas em seus <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-bold hover:underline">hormônios da fome</Link> é o primeiro e mais importante passo para parar de brigar com a própria biologia e começar a orquestrar o emagrecimento a favor dela.
              </p>

              <h2 id="danca-hormonios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Activity className="text-green-600"/> A Dança dos Hormônios e o Metabolismo
              </h2>
              <p>
                Essa verdadeira orquestra fisiológica começa no cérebro. O hipotálamo envia sinais em pulsos rítmicos (GnRH) para a hipófise, que libera o FSH e LH, que por sua vez manda mensagens vitais diretamente para os ovários. É ali que a mágica acontece com a produção de estradiol e progesterona. O grande segredo, frequentemente ignorado, é que <strong>estes não são apenas hormônios ligados à reprodução</strong>; eles são hormônios metabólicos de altíssimo impacto. Eles regulam o apetite (vias POMC e NPY), decidem onde a gordura será estocada, governam o metabolismo ósseo e alteram a sensibilidade à insulina. 
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 bg-slate-50 rounded-r-2xl italic text-slate-700 shadow-sm relative">
                <span className="absolute -left-3 -top-3 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-serif text-2xl">"</span>
                <p className="mb-2">Durante a vida reprodutiva, uma mulher chega a menstruar, em média, mais de 460 vezes. Ignorar o impacto metabólico de quase quinhentos ciclos na nutrição é ignorar a base da fisiologia feminina.</p>
                <footer className="text-sm font-bold text-green-700 not-italic uppercase tracking-wider">— Atualizações em Saúde da Mulher</footer>
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

              <div className="my-10 bg-white rounded-[2rem] border border-green-200 shadow-xl overflow-hidden">
                <div className="bg-green-50 text-green-900 font-black uppercase tracking-widest text-sm p-5 border-b border-green-200 flex items-center gap-3">
                   <AlertTriangle size={20} className="text-green-600" /> O que a Ciência Diz
                </div>
                <div className="divide-y divide-slate-100 text-left">
                  {tabelaMitosVerdades.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 md:p-4 items-start hover:bg-slate-50 transition-colors text-sm">
                      <div className="col-span-2 font-bold uppercase">{item.mitoVerdade === "Verdade" ? <span className="text-green-600">Verdade</span> : <span className="text-red-600">Mito</span>}</div>
                      <div className="col-span-4 font-bold text-slate-800">{item.ponto}</div>
                      <div className="col-span-6 text-slate-600">{item.explicacao}</div>
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
                <Leaf className="text-green-600"/> Estratégias Práticas: O Que Colocar no Prato
              </h2>
              <div className="space-y-6 mb-10">
                  {estrategiasTPM.map((fator) => (
                    <div key={fator.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row items-center">
                      <div className="flex-1 w-full p-5 md:p-6 bg-green-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-2">
                        <h4 className="font-bold text-slate-800 text-lg m-0">{fator.estrategia}</h4>
                      </div>
                      <div className="flex-1 w-full p-5 md:p-6 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-2">
                        <h4 className="font-bold text-slate-800 text-[15px] m-0">{fator.comoFaz}</h4>
                      </div>
                      <div className="flex-[1.5] w-full p-5 md:p-6 flex flex-col gap-2 bg-white">
                        <p className="text-sm text-slate-600 leading-relaxed font-medium m-0">{fator.impacto}</p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* AQUI ESTÃO OS 3 PARÁGRAFOS DO TREINO RESTAURADOS */}
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

              {/* AFILIADO MERCADO LIVRE (XIAOMI BAND 9 PRO) */}
              <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest z-10 flex items-center gap-2 border-b border-l border-green-700">
                      <Zap size={14} className="fill-white" />
                      <span>O Pingus Escolheu a Melhor!</span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0 text-center md:text-left">
                      <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                          <img src={`${githubImgBase}logoN_pingus.png`} alt="Selo de Qualidade Pingus" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic text-left">Xiaomi Smart Band 9 Pro: <span className="text-green-600">Alta Precisão no seu Pulso</span></h4>
                          <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                              <img src={`${githubImgBase}Afiliado/Band9Pro.JPG`} alt="Xiaomi Smart Band 9 Pro" className="w-full h-auto object-cover opacity-90" />
                          </div>
                          <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium text-left">
                              Emagrecimento cíclico exige dados precisos. A <strong>Smart Band 9 Pro</strong> oferece monitorização avançada do ciclo menstrual, sono e stress. Como seu <Link to="/o_que_e_antropometria" className="text-green-600 font-bold hover:underline">avaliador antropométrico</Link>, recomendo esta ferramenta para trazer dados reais para a nossa análise.
                          </p>
                          <a href="https://meli.la/2eEQ8VF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all italic">
                              <ShoppingCart size={16} /> Comprar no Mercado Livre
                          </a>
                      </div>
                  </div>
              </div>

              {/* VÍDEO DO YOUTUBE */}
              <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3 text-left">
                <PlayCircle className="text-green-600"/> Fome Física x Fome Emocional na TPM
              </h2>
              <p>
                Não basta saber o que comer; é fundamental entender os gatilhos invisíveis que nos fazem comer. Entenda visualmente a diferença brutal entre estar com fome de verdade e estar sendo engolida pelas emoções em nosso vídeo explicativo.
              </p>
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe src="https://www.youtube.com/embed/37sH2NJNjc4" title="Fome Física x Emocional" className="absolute top-0 left-0 w-full h-full" frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>

              {/* FORMULÁRIO DE CAPTAÇÃO RETRÁTIL DETALHADO */}
              <div id="avaliacao" className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-green-100 shadow-2xl relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-40 -ml-10 -mb-10 pointer-events-none"></div>

                <div className="relative z-10 text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm rotate-3">
                    <ClipboardList size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-4">Análise de Perfil Gratuita: Você e a TPM</h3>
                  <p className="text-slate-600 font-medium max-w-xl mx-auto mb-6">Responda ao questionário rápido. Eu vou analisar seu perfil e enviar um feedback educacional para você dominar seu ciclo.</p>
                </div>

                {formStatus === 'success' ? (
                  <div className="relative z-10 bg-green-50 rounded-3xl p-8 text-center border border-green-100 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"><CheckCircle size={40} className="text-white" /></div>
                    <h4 className="text-2xl font-black text-green-900 italic uppercase mb-2">Recebido!</h4>
                    <p className="text-green-700 font-medium mb-6">Em breve enviaremos seu feedback personalizado por e-mail!</p>
                    <button onClick={() => { setFormStatus('idle'); setIsFormOpen(false); }} className="text-sm font-bold text-green-600 underline">Enviar novo</button>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center">
                    {!isFormOpen && (
                      <button onClick={() => setIsFormOpen(true)} className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-black uppercase shadow-xl transition-all">Iniciar Análise Gratuita</button>
                    )}
                    <div className={`w-full transition-all duration-700 ease-in-out overflow-hidden ${isFormOpen ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      {isFormOpen && (
                        <div className="flex justify-end mb-6">
                          <button onClick={() => setIsFormOpen(false)} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-red-500 uppercase"><XCircle size={16} /> Ocultar</button>
                        </div>
                      )}
                      <form onSubmit={handleFormSubmit} className="space-y-8 max-w-3xl mx-auto text-left">
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm">1. Contacto</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                            <input type="text" required placeholder="Nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                            <input type="email" required placeholder="E-mail" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                          </div>
                        </div>

                        {/* Ciclo Menstrual */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left">2. Ciclo Menstrual</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-left">
                            <select required value={formData.cicloRegular} onChange={(e) => setFormData({...formData, cicloRegular: e.target.value})} className="bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                                <option value="" disabled>Ciclo regular?</option>
                                <option value="sim">Sim, regular</option>
                                <option value="nao">Não, irregular</option>
                            </select>
                            <select required value={formData.fluxoColicas} onChange={(e) => setFormData({...formData, fluxoColicas: e.target.value})} className="bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                                <option value="" disabled>Fluxo e Cólicas?</option>
                                <option value="ambos">Ambos intensos</option>
                                <option value="tranquilo">Tranquilo</option>
                            </select>
                            <select required value={formData.anticoncepcional} onChange={(e) => setFormData({...formData, anticoncepcional: e.target.value})} className="bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                                <option value="" disabled>Usa Hormônios?</option>
                                <option value="sim">Sim (Pílula/DIU)</option>
                                <option value="nao">Não</option>
                            </select>
                          </div>
                        </div>

                        {/* Apetite */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left">3. Apetite e Alimentação</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-sm text-left">
                            <select required value={formData.apetiteMuda} onChange={(e) => setFormData({...formData, apetiteMuda: e.target.value})} className="bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                                <option value="" disabled>Apetite muda?</option>
                                <option value="sim">Sim, muda bastante</option>
                                <option value="nao">Quase não muda</option>
                            </select>
                            <select required value={formData.fomeAumenta} onChange={(e) => setFormData({...formData, fomeAumenta: e.target.value})} className="bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                                <option value="" disabled>A fome aumenta?</option>
                                <option value="sim_muito">Muito na TPM</option>
                                <option value="nao">Não noto diferença</option>
                            </select>
                          </div>
                          <input type="text" required placeholder="Vontades específicas? (Ex: Chocolate...)" value={formData.vontadesEspecificas} onChange={(e) => setFormData({...formData, vontadesEspecificas: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" />
                        </div>

                        {/* Energia */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left">4. Energia e Humor</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-left">
                            <select required value={formData.disposicaoMensal} onChange={(e) => setFormData({...formData, disposicaoMensal: e.target.value})} className="bg-white border rounded-xl px-3 py-3 outline-none">
                                <option value="" disabled>Disposição?</option>
                                <option value="cai_tpm">Cai na TPM</option>
                                <option value="estavel">Sempre estável</option>
                            </select>
                            <select required value={formData.mudancaHumor} onChange={(e) => setFormData({...formData, mudancaHumor: e.target.value})} className="bg-white border rounded-xl px-3 py-3 outline-none">
                                <option value="" disabled>Humor?</option>
                                <option value="irritada">Irritada/Triste</option>
                                <option value="estavel">Estável</option>
                            </select>
                            <select required value={formData.sonoPiora} onChange={(e) => setFormData({...formData, sonoPiora: e.target.value})} className="bg-white border rounded-xl px-3 py-3 outline-none">
                                <option value="" disabled>Sono piora?</option>
                                <option value="sim">Sim, na TPM</option>
                                <option value="nao">Durmo bem</option>
                            </select>
                          </div>
                        </div>

                        {/* Peso */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left">5. Peso e Exercício</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-left">
                            <select required value={formData.pesoFlutua} onChange={(e) => setFormData({...formData, pesoFlutua: e.target.value})} className="bg-white border rounded-xl px-3 py-3 outline-none">
                                <option value="" disabled>Peso flutua?</option>
                                <option value="mais2">Até 2kg ou mais</option>
                                <option value="nao">Não flutua</option>
                            </select>
                            <select required value={formData.inchacoRetencao} onChange={(e) => setFormData({...formData, inchacoRetencao: e.target.value})} className="bg-white border rounded-xl px-3 py-3 outline-none">
                                <option value="" disabled>Tem inchaço?</option>
                                <option value="sim">Sim, bastante</option>
                                <option value="nao">Raramente</option>
                            </select>
                            <select required value={formData.praticaExercicio} onChange={(e) => setFormData({...formData, praticaExercicio: e.target.value})} className="bg-white border rounded-xl px-3 py-3 outline-none">
                                <option value="" disabled>Exercício?</option>
                                <option value="musculacao">Sim, musculação/cardio</option>
                                <option value="sedentaria">Não treino</option>
                            </select>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-inner">
                          <label className="flex items-start gap-4 cursor-pointer text-left">
                            <input type="checkbox" required checked={formData.aceitaTermos} onChange={(e) => setFormData({...formData, aceitaTermos: e.target.checked})} className="mt-1 w-5 h-5 text-green-600 rounded" />
                            <span className="text-[11px] leading-relaxed text-slate-500 font-medium">
                              <strong>Aviso Legal:</strong> Esta é uma ferramenta educativa e não substitui uma consulta clínica. Ao enviar, aceito receber meu feedback educacional por e-mail.
                            </span>
                          </label>
                        </div>

                        {formStatus === 'error' && <div className="text-red-600 text-sm text-center font-bold">Erro ao enviar. Tente novamente mais tarde.</div>}

                        <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all">
                          {formStatus === 'submitting' ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send size={18} /> Solicitar Minha Análise Gratuita</>}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ */}
              <div id="faq" className="mt-20 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 italic flex items-center gap-3">
                  <HelpCircle className="text-green-600" /> Dúvidas Frequentes
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                      <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full p-6 md:p-8 flex items-center justify-between text-left group">
                        <h3 className={`text-lg font-black italic transition-colors ${openFaqIndex === index ? 'text-green-600' : 'text-slate-800 group-hover:text-green-600'}`}>{faq.pergunta}</h3>
                        <ChevronDown className={`text-slate-400 shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
                      </button>
                      <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                        <p className="text-slate-600 m-0 leading-relaxed border-t pt-4 text-left">{faq.resposta}</p>
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
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg text-left">
                Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando você a construir uma relação mais leve com a comida, cuidando do corpo desde o intestino até a mente.
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
