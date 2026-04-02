import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Shield, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Brain, Clock, AlertCircle, Moon, EyeOff, BookOpen, Database, 
  AlertTriangle, XCircle, CheckCircle, Thermometer, Leaf, Heart, Sun, Coffee,
  Apple, Droplet, Flame, Calendar, Dumbbell, ClipboardList, Send, Scale
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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    nome: '', email: '', cicloRegular: '', fluxoColicas: '', anticoncepcional: '',
    apetiteMuda: '', fomeAumenta: '', vontadesEspecificas: '',
    disposicaoMensal: '', mudancaHumor: '', sonoPiora: '',
    pesoFlutua: '', praticaExercicio: '', inchacoRetencao: '', aceitaTermos: false
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
      } else { setFormStatus('error'); }
    } catch (error) { setFormStatus('error'); }
  };

  const faqs = [
    { pergunta: "Por que a fome aumenta tanto antes de menstruar?", resposta: "O aumento da fome na fase lútea (pré-menstrual) é um processo fisiológico real. A alta do hormônio progesterona estimula áreas do cérebro associadas ao apetite, sinalizando que o corpo precisa de mais energia. Além disso, há um leve aumento na Taxa Metabólica Basal nesse período." },
    { pergunta: "É normal ganhar peso durante a TPM?", resposta: "Sim, e esse ganho raramente é gordura. A queda brusca de estrogênio e progesterona que antecede a menstruação causa intensa retenção de líquidos e inchaço. O peso na balança pode flutuar de 1 a 3 quilos, o que se normaliza nos primeiros dias do ciclo." },
    { pergunta: "O desejo incontrolável por chocolate é biológico?", resposta: "A ciência mostra que o desejo por energia extra é biológico, mas a busca específica por chocolate ou doces ultraprocessados é cultural e aprendida. O corpo pede calorias, mas a mente traduz isso como vontade exclusiva de comer doces reconfortantes." },
    { pergunta: "Preciso mudar minha dieta em cada fase do ciclo?", resposta: "Não é obrigatório. Embora o corpo oxide um pouco mais de gordura e tenha flutuações na sensibilidade à insulina ao longo do mês, manipular macronutrientes semana a semana não traz um benefício significativamente superior." }
  ];

  const tabelaMitosVerdades = [
    { id: 1, mitoVerdade: "Verdade", ponto: "TMB aumenta na fase lútea", explicacao: "Ocorre um leve aumento no gasto calórico em repouso após a ovulação." },
    { id: 2, mitoVerdade: "Verdade", ponto: "Maior ingestão espontânea", explicacao: "Sinais orexígenos cerebrais aumentam o apetite naturalmente nesta fase." },
    { id: 3, mitoVerdade: "Mito", ponto: "Manipular macros por fase", explicacao: "Não há evidência de que mudar a proporção de macros semanalmente acelere o emagrecimento." },
    { id: 4, mitoVerdade: "Mito", ponto: "Reduzir carboidratos na fase lútea", explicacao: "Restringir energia quando a fome aumenta pode gerar compulsão e piorar o humor." }
  ];

  const estrategiasTPM = [
    { id: 1, estrategia: "Volume Alimentar (Fibras)", comoFaz: "Saladas, raízes e aveia", impacto: "Preenche o estômago com baixas calorias, combatendo a fome da progesterona." },
    { id: 2, estrategia: "Proteínas Estratégicas", comoFaz: "Ovos ou Iogurte nos lanches", impacto: "Evita picos de insulina e quedas bruscas de açúcar que geram fissura por doce." },
    { id: 3, estrategia: "Magnésio e Triptofano", comoFaz: "Banana e cacau 70%", impacto: "Auxilia na produção de serotonina, estabilizando o humor e a ansiedade." }
  ];

  return (
    <>
      <Helmet>
        <title>O Que Comer na TPM: Emagrecimento e Metabolismo Feminino | Nutrição com Marco</title>
        <meta name="description" content="Descubra por que a vontade de doce aumenta na TPM, a verdade científica sobre o metabolismo feminino e estratégias de nutrição para emagrecer sem sofrimento." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="O Que Comer na TPM: Emagrecimento e Metabolismo Feminino | Nutrição com Marco" />
        <meta property="og:description" content="A ciência por trás da TPM e emagrecimento em mulheres. Entenda as flutuações hormonais e como controlar o apetite." />
        <meta property="og:image" content={tpmCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO OTIMIZADO */}
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
              "logo": {
                "@type": "ImageObject", 
                "url": `${githubImgBase}logoN_pingus.png`
              }
            },
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO,
            "description": "Entenda as bases biológicas do metabolismo feminino durante o ciclo menstrual e estratégias nutricionais para a TPM."
          })}
        </script>

        {/* SCHEMA.ORG 2: MEDICAL WEB PAGE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Nutrição e Metabolismo no Ciclo Menstrual",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Ciclo Menstrual"},
              {"@type": "MedicalEntity", "name": "TPM"},
              {"@type": "MedicalEntity", "name": "Metabolismo Feminino"},
              {"@type": "MedicalEntity", "name": "Emagrecimento"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes"
            }
          })}
        </script>

        {/* SCHEMA.ORG 3: BREADCRUMB LIST */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nutricaocommarco.com.br/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.nutricaocommarco.com.br/blog" },
              { "@type": "ListItem", "position": 3, "name": "O Que Comer na TPM", "item": `https://www.nutricaocommarco.com.br${pathname}` }
            ]
          })}
        </script>

        {/* SCHEMA.ORG 4: FAQ PAGE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.pergunta,
              "acceptedAnswer": { "@type": "Answer", "text": faq.resposta }
            }))
          })}
        </script>

        {/* SCHEMA.ORG 5: VIDEO OBJECT */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Fome Física x Fome Emocional na TPM",
            "description": "Diferença entre fome real e emocional e como encontrar o equilíbrio durante o ciclo menstrual.",
            "thumbnailUrl": "https://img.youtube.com/vi/37sH2NJNjc4/maxresdefault.jpg",
            "uploadDate": "2025-12-02",
            "embedUrl": "https://www.youtube.com/embed/37sH2NJNjc4"
          })}
        </script>
      </Helmet>

      <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 text-left">
          
          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8 flex flex-col items-start gap-2">
              <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde da Mulher</span>
              <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              O Que Comer na TPM: Desvendando o Emagrecimento e o Metabolismo Feminino
            </h1>

            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">Resposta Direta</h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed mt-4">
                  Para emagrecer na <strong>TPM</strong> de forma sustentável, o segredo é focar em <strong>saciedade e produção de serotonina</strong>. Em vez de lutar contra a fome, deve priorizar carboidratos complexos, proteínas magras e fibras, que mantêm os níveis de açúcar estáveis. Evite restrições calóricas extremas nesta fase, pois elas são o principal gatilho para a compulsão alimentar, e utilize ferramentas de monitorização para entender o seu corpo.
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
                    <li><a href="#treino-constancia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Dumbbell size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Papel do Treino</a></li>
                    <li><a href="#avaliacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><ClipboardList size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Análise de Perfil (Grátis)</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              
              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
                <img 
                  src={tpmCapa} 
                  alt="Metabolismo Feminino e TPM" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                />
              </div>

              <h2 id="diferenca-emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Brain className="text-green-600"/> A Diferença no Emagrecimento Feminino
              </h2>
              <p>
                Muitas mulheres sentem dificuldade em emagrecer porque tentam seguir planos alimentares lineares, ignorando que o <strong>metabolismo feminino não é estático</strong>. Diferente do metabolismo masculino, o corpo da mulher é regido por um <Link to="/o-que-e-ciclo-circadiano" className="text-green-600 font-bold hover:underline">ciclo circadiano</Link> e hormonal complexo. Compreender que o corpo feminino tem demandas únicas e flutuações em seus <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-bold hover:underline">hormônios da fome</Link> é o primeiro passo para parar de lutar contra a própria biologia e começar a orquestrar a nutrição a seu favor.
              </p>

              <h2 id="danca-hormonios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Activity className="text-green-600"/> A Dança dos Hormônios e o Metabolismo
              </h2>
              <p>
                Essa orquestra fisiológica começa no eixo hipotálamo-hipófise-ovariano. Na fase folicular, o estradiol elevado ajuda a controlar a fome, mas após a ovulação, a subida da progesterona aumenta consideravelmente os sinais de apetite. É fundamental entender que o corpo feminino gasta um pouco mais de energia na fase lútea, o que justifica o aumento natural da fome. Essa variação pode até fazer o peso flutuar na balança, por isso, entender se <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-bold hover:underline">a balança de bioimpedância é confiável</Link> nesse período ajuda a evitar frustrações desnecessárias com o inchaço.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 bg-slate-50 rounded-r-2xl italic text-slate-700 shadow-sm relative text-left">
                <span className="absolute -left-3 -top-3 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-serif text-2xl">"</span>
                <p className="mb-2">Uma mulher menstrua cerca de 460 vezes durante a sua vida reprodutiva. Ignorar o impacto metabólico de quase 500 ciclos na nutrição é ignorar a base da fisiologia feminina.</p>
                <footer className="text-sm font-bold text-green-700 not-italic uppercase tracking-wider">— Atualizações em Saúde da Mulher</footer>
              </blockquote>

              {/* TABELA: MITOS E VERDADES */}
              <div className="my-10 bg-white rounded-[2rem] border border-green-200 shadow-xl overflow-hidden">
                <div className="bg-green-50 text-green-900 font-black uppercase tracking-widest text-sm p-5 border-b border-green-200 flex items-center gap-3">
                   <AlertTriangle size={20} className="text-green-600" /> Ciência: Dieta e Ciclo Menstrual
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
                <AlertCircle className="text-green-600"/> Vontade de Doce na TPM: Biologia ou Cultura?
              </h2>
              <p>
                A famosa "vontade de chocolate" na TPM tem uma explicação mista. Embora a queda hormonal reduza a serotonina, a busca específica por doces ultraprocessados é, em grande parte, aprendida e influenciada pela cultura. Aprender a distinguir a necessidade física da <Link to="/o-que-e-fome-emocional" className="text-green-600 font-bold hover:underline">fome emocional</Link> permite que você faça escolhas mais conscientes. Estudos de comportamento alimentar mostram que entender esse "craving" como algo cultural ajuda a reduzir o ciclo de culpa e compulsão.
              </p>

              <h2 id="treino-constancia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Dumbbell className="text-green-600"/> O Papel do Treino e a Constância
              </h2>
              <p>
                Muitas mulheres acreditam que precisam de reduzir drasticamente o treino na TPM. No entanto, a ciência confirma que a síntese de proteína muscular <a href="https://pubmed.ncbi.nlm.nih.gov/39630025/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">não sofre influência significativa da fase do ciclo</a>. Isso significa que o seu corpo continua a responder ao exercício de força de forma eficiente, independentemente do dia do mês. Se o humor estiver oscilando, talvez seja o momento de considerar os <Link to="/efeitos-colaterais-da-melatonina" className="text-green-600 font-bold hover:underline">efeitos do sono no metabolismo</Link> em vez de apenas cortar o treino.
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
              <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <PlayCircle className="text-green-600"/> Fome Física x Fome Emocional na TPM
              </h2>
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe src="https://www.youtube.com/embed/37sH2NJNjc4" title="Fome Física x Emocional" className="absolute top-0 left-0 w-full h-full" frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>

              <p className="mt-10">
                Lembre-se sempre: o emagrecimento definitivo para mulheres não é construído na perfeição milimétrica de uma semana onde você sofre para bater as metas de macronutrientes. Ele mora na <strong>constância inteligente</strong>. Aceite que o seu corpo é biológico, que a retenção líquida na TPM vai fazer a balança subir temporariamente (e que isso não é gordura), e mantenha uma rotina alimentar rica em nutrientes o mês inteiro. A verdadeira mágica do metabolismo feminino acontece quando você alia o conhecimento com a paciência.
              </p>

              {/* FORMULÁRIO DE CAPTAÇÃO RETRÁTIL */}
              <div id="avaliacao" className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-green-100 shadow-2xl relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-40 -ml-10 -mb-10 pointer-events-none"></div>

                <div className="relative z-10 text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm rotate-3">
                    <ClipboardList size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-4">Análise de Perfil Gratuita: Você e a TPM</h3>
                  <p className="text-slate-600 font-medium max-w-xl mx-auto mb-6">Responda ao questionário detalhado para receber um feedback educacional sobre o seu perfil metabólico.</p>
                </div>

                {formStatus === 'success' ? (
                  <div className="relative z-10 bg-green-50 rounded-3xl p-8 text-center border border-green-100 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"><CheckCircle size={40} className="text-white" /></div>
                    <h4 className="text-2xl font-black text-green-900 italic uppercase mb-2">Análise Solicitada!</h4>
                    <p className="text-green-700 font-medium">Em breve, receberá um e-mail com o seu feedback personalizado!</p>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center">
                    {!isFormOpen && (
                      <button onClick={() => setIsFormOpen(true)} className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl transition-all">Iniciar Minha Análise</button>
                    )}

                    <div className={`w-full transition-all duration-700 ease-in-out overflow-hidden ${isFormOpen ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      {isFormOpen && (
                        <div className="flex justify-end mb-6">
                          <button onClick={() => setIsFormOpen(false)} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-red-500 uppercase tracking-widest"><XCircle size={16} /> Ocultar</button>
                        </div>
                      )}

                      <form onSubmit={handleFormSubmit} className="space-y-8 max-w-3xl mx-auto text-left">
                        {/* 1. Dados de Contacto */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm">1. Dados de Contacto</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input type="text" required placeholder="Seu Nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm" />
                            <input type="email" required placeholder="Seu Melhor E-mail" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 text-sm" />
                          </div>
                        </div>

                        {/* 2. Ciclo Menstrual */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm">2. Ciclo Menstrual</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                            <select required value={formData.cicloRegular} onChange={(e) => setFormData({...formData, cicloRegular: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                              <option value="" disabled>Ciclo regular?</option>
                              <option value="sim">Sim, muito regular</option>
                              <option value="nao">Não, é irregular</option>
                            </select>
                            <select required value={formData.fluxoColicas} onChange={(e) => setFormData({...formData, fluxoColicas: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                              <option value="" disabled>Cólicas ou Fluxo?</option>
                              <option value="ambos">Ambos intensos</option>
                              <option value="tranquilo">Ciclo tranquilo</option>
                            </select>
                            <select required value={formData.anticoncepcional} onChange={(e) => setFormData({...formData, anticoncepcional: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                              <option value="" disabled>Usa Anticoncepcional?</option>
                              <option value="sim">Sim (Pílula/DIU)</option>
                              <option value="nao">Não uso nada</option>
                            </select>
                          </div>
                        </div>

                        {/* 3. Apetite e Alimentação */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h4 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm">3. Apetite e Alimentação</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-sm">
                            <select required value={formData.apetiteMuda} onChange={(e) => setFormData({...formData, apetiteMuda: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                              <option value="" disabled>Apetite muda no mês?</option>
                              <option value="sim">Sim, muda muito</option>
                              <option value="nao">É sempre igual</option>
                            </select>
                            <select required value={formData.fomeAumenta} onChange={(e) => setFormData({...formData, fomeAumenta: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none">
                              <option value="" disabled>Fome aumenta na TPM?</option>
                              <option value="muito">Aumenta drasticamente</option>
                              <option value="pouco">Aumenta levemente</option>
                            </select>
                          </div>
                          <input type="text" required placeholder="Vontades específicas? (Ex: Doce, Salgado...)" value={formData.vontadesEspecificas} onChange={(e) => setFormData({...formData, vontadesEspecificas: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none" />
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-inner">
                          <label className="flex items-start gap-4 cursor-pointer text-left">
                            <input type="checkbox" required checked={formData.aceitaTermos} onChange={(e) => setFormData({...formData, aceitaTermos: e.target.checked})} className="mt-1 w-5 h-5 text-green-600 rounded" />
                            <span className="text-[11px] leading-relaxed text-slate-500 font-medium">
                              <strong>Aviso Legal:</strong> Esta ferramenta é apenas educativa e não substitui uma consulta clínica. Ao enviar, aceita receber o seu feedback por e-mail.
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

              {/* FAQ SECTION */}
              <div id="faq" className="mt-20 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic text-left">
                  <HelpCircle className="text-green-600" /> Dúvidas Frequentes sobre TPM e Dieta
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                      <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full p-6 md:p-8 flex items-center justify-between text-left group">
                        <h3 className={`text-lg font-black italic transition-colors ${openFaqIndex === index ? 'text-green-600' : 'text-slate-800 group-hover:text-green-600'}`}>{faq.pergunta}</h3>
                        <ChevronDown className={`text-slate-400 shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
                      </button>
                      <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                        <p className="text-slate-600 m-0 leading-relaxed border-t pt-4">{faq.resposta}</p>
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
              <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg text-left">
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
