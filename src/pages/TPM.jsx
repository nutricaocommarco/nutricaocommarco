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
  const [isFormOpen, setIsFormOpen] = useState(false);
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
                    <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
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
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
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
                A explicação para a dificuldade que muitas mulheres sentem em emagrecer é puramente biológica. Diferente do metabolismo masculino, o <strong>metabolismo feminino não é uma linha reta e estática</strong>. Ele é essencialmente cíclico e sofre transformações profundas ao longo da vida, desde a puberdade até a menopausa.
              </p>

              <h2 id="danca-hormonios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Activity className="text-green-600"/> A Dança dos Hormônios e o Metabolismo
              </h2>
              <p>
                Hormônios como o estradiol e a progesterona não são apenas reprodutivos; eles são **hormônios metabólicos**. Eles regulam o apetite, decidem onde a gordura será estocada e alteram a sensibilidade à insulina ao longo do mês.
              </p>

              <h2 id="mitos-verdades" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Shield className="text-green-600"/> Mitos e Verdades: O Ciclo Menstrual na Nutrição
              </h2>
              <p>
                Embora saibamos que as <a href="https://pubmed.ncbi.nlm.nih.gov/2179207/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">mulheres utilizam substratos de energia de forma diferente dos homens</a>, você não precisa mudar sua dieta radicalmente toda semana.
              </p>

              {/* TABELA: MITOS E VERDADES */}
              <div className="my-10 bg-white rounded-[2rem] border border-green-200 shadow-xl overflow-hidden">
                <div className="bg-green-50 text-green-900 font-black uppercase tracking-widest text-sm p-5 border-b border-green-200 flex items-center gap-3">
                   <AlertTriangle size={20} className="text-green-600" /> O que a Ciência Diz sobre Dieta e Ciclo Menstrual
                </div>
                <div className="divide-y divide-slate-100">
                  {tabelaMitosVerdades.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 md:p-4 items-start hover:bg-slate-50 transition-colors">
                      <div className="col-span-2 font-bold text-slate-800 flex items-center gap-2 text-sm uppercase">
                        {item.mitoVerdade === "Verdade" ? <span className="text-green-600">Verdade</span> : <span className="text-red-600">Mito</span>}
                      </div>
                      <div className="col-span-4 font-bold text-slate-800 text-sm md:text-base leading-snug">{item.ponto}</div>
                      <div className="col-span-6 text-sm text-slate-600 leading-relaxed font-medium">{item.explicacao}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="vontade-doce" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <AlertCircle className="text-green-600"/> Vontade de Doce na TPM: Biologia ou Hábito?
              </h2>
              <p className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-slate-700 italic font-medium shadow-inner relative">
                "Pesquisas indicam que uma parte significativa do desejo pré-menstrual por chocolate é aprendida e influenciada pela cultura." 
                — <a href="https://pubmed.ncbi.nlm.nih.gov/28723930/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Hormes et al., 2017</a>
              </p>

              <h2 id="o-que-comer" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-600"/> Estratégias Práticas: O que Colocar no Prato
              </h2>
              <div className="space-y-6">
                {estrategiasTPM.map((fator) => (
                  <div key={fator.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row items-center p-5 gap-4">
                    <div className="flex-1 font-bold text-slate-800">{fator.estrategia}</div>
                    <div className="flex-1 text-slate-600 text-sm">{fator.comoFaz}</div>
                    <div className="flex-1 text-slate-400 text-xs italic">{fator.impacto}</div>
                  </div>
                ))}
              </div>

              <h2 id="treino-constancia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Dumbbell className="text-green-600"/> O Papel do Treino e a Constância
              </h2>
              <p>
                Um estudo de 2025 confirma: a capacidade de construir massa muscular <a href="https://pubmed.ncbi.nlm.nih.gov/39630025/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">não sofre influência da fase do ciclo</a>. O importante é a constância.
              </p>

              {/* VÍDEO DO YOUTUBE - ATUALIZADO */}
              <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <PlayCircle className="text-green-600"/> Fome Física x Fome Emocional: Como Encontrar o Equilíbrio
              </h2>
              <p>
                Entender a diferença entre a fome do seu corpo e a fome das suas emoções é vital para o emagrecimento duradouro. Assista a este vídeo para aprender a identificar os sinais e encontrar o equilíbrio diário.
              </p>

              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/37sH2NJNjc4" 
                    title="Fome Física x Fome Emocional: Como Encontrar o Equilíbrio Diário" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* FORMULÁRIO RETRÁTIL */}
              <div id="avaliacao" className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-green-100 shadow-2xl relative overflow-hidden transition-all duration-500">
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-4">Análise de Perfil Gratuita</h3>
                  {!isFormOpen && (
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-full font-black uppercase text-sm shadow-xl transition-all"
                    >
                      <ClipboardList size={20} /> Iniciar Análise
                    </button>
                  )}
                  {isFormOpen && (
                    <div className="mt-6 text-left">
                      <form onSubmit={handleFormSubmit} className="space-y-6 max-w-2xl mx-auto">
                        <input type="text" required placeholder="Seu Nome" onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full bg-slate-50 border p-4 rounded-xl" />
                        <input type="email" required placeholder="Seu E-mail" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border p-4 rounded-xl" />
                        <button type="submit" className="w-full bg-green-600 text-white p-5 rounded-xl font-black uppercase">Enviar Questionário</button>
                        <button onClick={() => setIsFormOpen(false)} className="w-full text-slate-400 text-xs uppercase font-bold mt-4">Fechar</button>
                      </form>
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="mt-20 pt-10 border-t border-slate-100">
                <h2 className="text-2xl font-black text-slate-800 mb-8 italic flex items-center gap-3"><HelpCircle className="text-green-600" /> Dúvidas Frequentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden">
                      <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full p-6 text-left flex justify-between items-center">
                        <span className="font-black text-slate-800 italic">{faq.pergunta}</span>
                        <ChevronDown className={`transition-transform ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} />
                      </button>
                      {openFaqIndex === index && <div className="p-6 pt-0 text-slate-600 border-t border-green-100/60 mt-4">{faq.resposta}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <Newsletter />
            </div>
          </article>
          <ArtigosRecomendados />
        </div>
      </section>
    </>
  );
}
