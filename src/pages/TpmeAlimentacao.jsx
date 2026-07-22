import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, HelpCircle, Activity, Shield, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Brain, Clock, AlertCircle, Database, AlertTriangle, 
  XCircle, CheckCircle, Leaf, Heart, Droplet, Dumbbell, ClipboardList, Send, CalendarCheck
} from 'lucide-react';

import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import ImagemOtimizada from '../components/ImagemOtimizada';
import YouTubeLazy from '../components/YouTubeLazy';

const githubImgBase = "https://cdn.jsdelivr.net/gh/nutricaocommarco/nutricaocommarco@main/Imagens/";

const datePublishedISO = "2026-04-02";
const dateModifiedISO = "2026-04-02";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');
const tpmCapa = `${githubImgBase}Blog/TPM.webp`;

export default function TpmeAlimentacao() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados do Formulário e Visibilidade
  const [isFormOpen, setIsFormOpen] = useState(false); 
  const [formStatus, setFormStatus] = useState('idle'); 
  const [analiseGerada, setAnaliseGerada] = useState(''); // Guarda o laudo gerado

  const [formData, setFormData] = useState({
    nome: '', email: '', cicloRegular: '', fluxoColicas: '', anticoncepcional: '',
    apetiteMuda: '', fomeAumenta: '', vontadesEspecificas: '',
    disposicaoMensal: '', mudancaHumor: '', sonoPiora: '',
    pesoFlutua: '', praticaExercicio: '', inchacoRetencao: '',
    aceitaTermos: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Função que automatiza a resposta clínica baseada nas seleções da usuária
  const gerarAnaliseAutomatica = (dados) => {
    let laudo = [];

    laudo.push(`Olá, ${dados.nome.split(' ')[0]}! O Pinguim Nutri analisou suas respostas. Aqui está o seu mapa metabólico inicial pré-consulta:`);

    // 1. Anticoncepcional e Ciclo
    if (dados.anticoncepcional === 'sim') {
      laudo.push("💊 HORMÔNIOS: Como você usa contraceptivo, seu corpo não sofre a flutuação ovariana natural (ovulação). Os sintomas que você relatou podem ser reflexos da pausa do remédio, adaptação à dosagem ou inflamação basal. A nutrição será vital para modular esse processo inflamatório.");
    } else {
      laudo.push("🧬 CICLO NATURAL: Você vive a montanha-russa real da progesterona e do estrogênio. Seus sintomas refletem a queda dupla desses hormônios antes da menstruação, o que exige um ajuste energético estratégico!");
    }

    // 2. Fome e Vontades
    if (dados.fomeAumenta === 'sim_muito' || dados.apetiteMuda === 'sim') {
      laudo.push(`🍽️ APETITE (${dados.vontadesEspecificas ? dados.vontadesEspecificas : 'Doces/Salgados'}): O aumento da sua fome é biológico. Na fase lútea o corpo pode gastar até 300 kcal a mais. O segredo não é passar fome, mas aplicar o 'Aumento Inteligente de Fibras' (aveia, raízes) e fracionar proteínas para não gerar picos de insulina.`);
    }

    // 3. Humor e Sono
    if (dados.mudancaHumor === 'irritada' || dados.sonoPiora === 'sim' || dados.disposicaoMensal === 'cai_tpm') {
      laudo.push("🧠 HUMOR E SONO: A sua queda de energia e irritabilidade pedem precursores de serotonina. Precisamos incluir mais fontes de Triptofano e Magnésio na sua rotina, como cacau 70%, banana e sementes de abóbora.");
    }

    // 4. Retenção
    if (dados.pesoFlutua === 'mais2' || dados.inchacoRetencao === 'sim') {
      laudo.push("💧 RETENÇÃO: Aquele peso extra na balança não é gordura adquirida do dia para a noite, é retenção hídrica pura e lentidão intestinal. Esconda a balança nesses dias e reforce a hidratação!");
    }

    // 5. Exercício
    if (dados.praticaExercicio === 'sedentaria') {
      laudo.push("🏃‍♀️ MOVIMENTO: A sensibilidade à insulina cai naturalmente na TPM. Sair do sedentarismo e iniciar treinos de força será o maior divisor de águas para amenizar a sua vontade de doces.");
    } else {
      laudo.push("🏋️‍♀️ TREINO: Excelente que você já treina! Lembre-se de que a capacidade do seu corpo de construir massa muscular não cai na TPM. Mantenha a constância.");
    }

    return laudo;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // 1. Gera a análise baseada na árvore de decisão
    const analiseArray = gerarAnaliseAutomatica(formData);
    const analiseTexto = analiseArray.join('\n\n');
    
    // 2. Salva no estado para exibir na tela para a paciente
    setAnaliseGerada(analiseArray);

    // 3. Prepara o payload para enviar ao Formspree com a análise embutida
    const payloadParaEnvio = {
      ...formData,
      LAUDO_AUTOMATICO_GERADO: analiseTexto,
      aviso_ao_nutri: "Marco, a paciente acabou de ler a análise acima na tela. Entre em contato para marcar a consulta e aprofundar!"
    };

    try {
      const response = await fetch('https://formspree.io/f/xpqojopr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payloadParaEnvio)
      });
      
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const faqs = [
    {
      pergunta: "Por que a fome aumenta tanto na TPM?",
      resposta: "O aumento da fome na fase lútea (pré-menstrual) é biológico. A alta do hormônio progesterona estimula áreas do cérebro associadas ao apetite. Além disso, há um aumento na Taxa Metabólica Basal (o corpo gasta de 100 a 300 kcal a mais por dia nesse período)."
    },
    {
      pergunta: "É normal ganhar peso na TPM?",
      resposta: "Sim, e esse ganho quase nunca é gordura. A oscilação brusca de estrogênio e progesterona causa intensa retenção de líquidos e lentidão intestinal. O peso na balança pode flutuar de 1 a 3 quilos, o que se normaliza dias após a menstruação."
    },
    {
      pergunta: "O desejo por chocolate na TPM é biológico?",
      resposta: "A ciência mais recente mostra que o desejo por energia extra é biológico, mas o desejo específico por chocolate é cultural e aprendido (Hormes et al., 2017). O corpo pede calorias e conforto, e a mente traduz isso como vontade de doces."
    },
    {
      pergunta: "Preciso mudar minha dieta em cada fase do ciclo?",
      resposta: "Não é obrigatório. Embora o corpo oxide mais gordura na fase lútea, manipular macronutrientes semana a semana não traz um benefício superior ao longo prazo. A constância no déficit calórico e a qualidade dos alimentos são o que garantem o emagrecimento."
    }
  ];

  const estrategiasTPM = [
    { 
      id: 1, 
      foco: "Fome Aumentada", 
      estrategia: "Aumento Inteligente de Fibras", 
      comoFaz: "Adicione saladas folhosas, raízes (batata, mandioca) e farelo de aveia nas refeições principais.", 
      impacto: "Preenche o volume gástrico sem estourar as calorias diárias, compensando a fome real gerada pela progesterona." 
    },
    { 
      id: 2, 
      foco: "Fissura por Doce", 
      estrategia: "Fracionamento de Proteínas", 
      comoFaz: "Distribua proteínas (ovos, iogurtes proteicos, whey) de forma regular em 3 a 4 lanches ao dia.", 
      impacto: "Evita os picos de insulina e a hipoglicemia de rebote, que é o gatilho fisiológico número um para a compulsão por açúcar." 
    },
    { 
      id: 3, 
      foco: "Humor e Irritação", 
      estrategia: "Fontes de Magnésio e Triptofano", 
      comoFaz: "Inclua sementes de abóbora, banana e cacau em pó (70%+) no café da manhã ou lanches.", 
      impacto: "O triptofano é precursor da serotonina (hormônio do bem-estar), estabilizando as quedas drásticas de humor da fase lútea." 
    }
  ];

  const tabelaMitosVerdades = [
    { id: 1, mitoVerdade: "Verdade", ponto: "Metabolismo Acelera", explicacao: "A Taxa Metabólica Basal sobe fisiologicamente após a ovulação (Fase Lútea), justificando parte do apetite." },
    { id: 2, mitoVerdade: "Verdade", ponto: "Ingestão Espontânea Maior", explicacao: "É comprovado que mulheres tendem a ingerir até 300 kcal a mais devido aos sinais orexígenos da progesterona." },
    { id: 3, mitoVerdade: "Mito", ponto: "Cortar Carboidratos na TPM", explicacao: "Reduzir drasticamente o carboidrato nessa fase piora a irritabilidade, a letargia e o sono, favorecendo a compulsão." },
    { id: 4, mitoVerdade: "Mito", ponto: "Treinar Leve é Obrigatório", explicacao: "Estudos de 2025 mostram que a síntese de massa muscular não sofre queda na TPM. Treinar pesado ainda é benéfico, se não houver dor incapacitante." }
  ];

  return (
    <>
      <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

          {/* BOTÃO VOLTAR */}
          <button 
            onClick={() => state?.fromBlog ? navigate(-1) : navigate('/blog')}
            className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-600 hover:text-green-700 transition-colors w-fit appearance-none bg-transparent border-none cursor-pointer p-0"
            title="Voltar ao Blog"
          >
            <ChevronLeft size={20} /> Voltar para o Blog
          </button>

          <article className="prose prose-lg max-w-none text-left">

            <div className="mb-8 flex flex-col items-start gap-2">
              <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde da Mulher</span>
              <span className="text-[11px] text-slate-700 font-bold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              O Que Comer na TPM: O Guia Definitivo Para Controlar a Fome e Emagrecer
            </h1>

            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta Direta: Afinal, o que comer na TPM?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  Para aliviar os sintomas e saber exatamente <strong>o que comer na TPM</strong> sem engordar, foque na densidade nutricional que promove saciedade prolongada. A base deve ser: <strong>proteínas magras</strong> fracionadas ao longo do dia, <strong>carboidratos complexos</strong> e ricos em fibras (como farelo de aveia e raízes) e alimentos fontes de <strong>magnésio e triptofano</strong> (banana, sementes de abóbora e cacau 70%). Entender o que comer na TPM evita picos de insulina, combate a retenção de líquidos e reduz a fome emocional.
              </p>
            </div>

            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-green-700 w-6 h-6" />
                  <h2 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h2>
                </div>
                <audio preload="none" controls className="w-full h-10 outline-none rounded-full" title="Áudio explicando o que comer na TPM">
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/TPM.mp3" type="audio/mpeg" />
                  O seu navegador não suporta o áudio.
                </audio>
              </div>
              <div className="h-px bg-green-100/60 w-full"></div>
              
              <nav className="bg-slate-50">
                <button 
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group border-none bg-transparent cursor-pointer"
                  aria-label="Abrir Índice do Conteúdo sobre O que comer na TPM"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-700 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                      <Activity size={18} />
                    </div>
                    <span className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</span>
                  </div>
                  <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-700' : ''}`} />
                </button>
                <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                  <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                    <li><a href="#diferenca-emagrecimento" title="Diferença no Emagrecimento" className="group flex items-center gap-3 text-slate-600 hover:text-green-700 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-400 shrink-0 group-hover:text-green-500" />A Dança dos Hormônios</a></li>
                    <li><a href="#o-que-comer" title="O que comer na TPM: Estratégias Práticas" className="group flex items-center gap-3 text-slate-600 hover:text-green-700 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-400 shrink-0 group-hover:text-green-500" />Estratégias: O Que Comer</a></li>
                    <li><a href="#vontade-doce" title="Vontade de Doce e O que comer na TPM" className="group flex items-center gap-3 text-slate-600 hover:text-green-700 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-400 shrink-0 group-hover:text-green-500" />A Fissura por Chocolate</a></li>
                    <li><a href="#treino-constancia" title="Treino e O que comer na TPM" className="group flex items-center gap-3 text-slate-600 hover:text-green-700 transition-all font-bold text-base m-0"><Dumbbell size={16} className="text-slate-400 shrink-0 group-hover:text-green-500" />O Papel do Treino</a></li>
                    <li><a href="#video" title="Vídeo: Fome Física vs Emocional" className="group flex items-center gap-3 text-slate-600 hover:text-green-700 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-400 shrink-0 group-hover:text-green-500" />Fome Física x Emocional</a></li>
                    <li><a href="#avaliacao" title="Análise Grátis" className="group flex items-center gap-3 text-slate-600 hover:text-green-700 transition-all font-bold text-base m-0"><ClipboardList size={16} className="text-slate-400 shrink-0 group-hover:text-green-500" />Análise de Perfil (Grátis)</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-4 border-l-4 border-green-600 pl-4">
                Se você sente que sua dieta "para de funcionar" misteriosamente nas semanas que antecedem a menstruação, o problema não é a sua força de vontade: é não dominar <strong>o que comer na TPM</strong>. Diferente do corpo masculino, que possui um metabolismo linear, o organismo da mulher é regido pela ciclicidade. Compreender o que acontece no seu corpo durante a Tensão Pré-Menstrual é a única forma de alcançar o <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold underline hover:text-green-800">emagrecimento sustentável</Link>, fugindo do ciclo de restrição e compulsão.
              </p>

          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <ImagemOtimizada 
                src={tpmCapa}
                alt="Ilustração de alimentos que ajudam a entender o que comer na TPM para aliviar os sintomas do ciclo menstrual e emagrecer"
                title="O Que Comer na TPM e o Metabolismo"
                className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                priority="high"
              />
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-green-700 font-bold uppercase tracking-widest text-center m-0">
                Saber o que comer na TPM não é sobre restrição, é sobre nutrir a biologia do seu ciclo.
              </p>
            </figcaption>
          </figure>

              <h2 id="diferenca-emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Brain className="text-green-700"/> A Fisiologia: Por que a fome ataca na TPM?
              </h2>
              <p>
                O metabolismo feminino é uma verdadeira orquestra cíclica. Na fase folicular (logo após a menstruação), o hormônio estrogênio domina. Ele age como um grande aliado: melhora a sensibilidade à insulina, segura o apetite e te dá uma disposição invejável. 
              </p>
              <p>
                No entanto, logo após a ovulação, você entra na chamada <strong>Fase Lútea</strong>. O cenário inverte de forma drástica: a progesterona assume o controle. O aumento agudo da progesterona acende um alerta no cérebro (estimulando as vias NPY/AgRP), que grita por mais substrato energético. E a ciência comprova isso: durante essa fase pré-menstrual, a Taxa Metabólica Basal sofre um aumento real, fazendo seu corpo gastar entre 100 e 300 calorias a mais por dia em repouso. Por isso, ter fome na TPM é uma resposta <strong>absolutamente fisiológica</strong>. Entender <strong>o que comer na TPM</strong> para suprir esse gasto energético natural, sem exagerar, é a grande chave do sucesso.
              </p>

              <div className="my-10 bg-white rounded-[2rem] border border-green-200 shadow-xl overflow-hidden">
                <h3 className="bg-green-50 text-green-900 font-black uppercase tracking-widest text-sm p-5 border-b border-green-200 flex items-center gap-3 m-0">
                   <AlertTriangle size={20} className="text-green-700" /> Mitos e Verdades sobre a TPM
                </h3>
                <div className="divide-y divide-slate-100 text-left">
                  {tabelaMitosVerdades.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 md:p-4 items-start hover:bg-slate-50 transition-colors text-sm">
                      <div className="col-span-12 md:col-span-2 font-bold uppercase">
                        {item.mitoVerdade === "Verdade" ? <span className="text-green-700">Verdade</span> : <span className="text-red-600">Mito</span>}
                      </div>
                      <div className="col-span-12 md:col-span-4 font-bold text-slate-800">{item.ponto}</div>
                      <div className="col-span-12 md:col-span-6 text-slate-600 leading-relaxed">{item.explicacao}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="o-que-comer" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-700"/> O Que Comer na TPM: Estratégias Nutricionais Práticas
              </h2>
              <p>
                Não basta apenas sofrer com os sintomas; precisamos agir. Para driblar o inchaço, a queda de energia e a fome crônica, aqui estão os pilares de <strong>o que comer na TPM</strong> na vida real:
              </p>
              
              {/* COMPONENTE RESPONSIVO (TABELA DESKTOP / CARDS MOBILE) */}
              <div className="hidden md:block my-8 overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
                <table className="w-full text-left min-w-[600px] m-0">
                  <caption className="sr-only">Tabela detalhada mostrando o que comer na TPM para aliviar os sintomas</caption>
                  <thead className="bg-green-50 border-b border-green-100 text-green-900 uppercase tracking-widest text-xs font-black">
                    <tr>
                      <th className="p-5 w-1/4">Objetivo Clínico</th>
                      <th className="p-5 w-1/4">A Estratégia</th>
                      <th className="p-5 w-1/2">Alimentos e Impacto</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100">
                    {estrategiasTPM.map((fator) => (
                      <tr key={`desk-${fator.id}`} className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-800">{fator.foco}</td>
                        <td className="p-5 text-green-700 font-bold">{fator.estrategia}</td>
                        <td className="p-5 text-xs"><strong>Como:</strong> {fator.comoFaz} <br/><br/><strong>Impacto:</strong> {fator.impacto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden space-y-4 my-8">
                {estrategiasTPM.map((fator) => (
                  <div key={`mob-${fator.id}`} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 bg-green-50/50 border-b border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-1 block">{fator.foco}</span>
                      <h3 className="font-bold text-slate-800 text-base m-0 leading-tight">{fator.estrategia}</h3>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <p className="text-sm text-slate-700 m-0"><strong>Na Prática:</strong> {fator.comoFaz}</p>
                      <p className="text-xs text-slate-500 m-0 leading-relaxed italic">{fator.impacto}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="vontade-doce" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <AlertCircle className="text-green-700"/> A Fissura por Chocolate é Biológica?
              </h2>
              <p>
                Chegamos ao grande vilão da dúvida sobre <strong>o que comer na TPM</strong>: a fissura por açúcar nos dias que antecedem a menstruação. Se você sente que perde o controle, saiba que essa batalha tem dois lados. O aumento da fome geral, como vimos, é biológico. O seu corpo, sob efeito da progesterona, busca um substrato extra de energia.
              </p>
              <p>
                Contudo, pesquisadores comportamentais investigaram a fundo o desejo incontrolável por <strong>chocolate</strong>. A resposta surpreendente é que a fixação exclusiva em doces ultraprocessados é uma construção cultural e social da sociedade ocidental (Hormes et al., 2017).
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 bg-slate-50 rounded-r-2xl italic text-slate-700 shadow-sm relative">
                <span className="absolute -left-3 -top-3 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-serif text-2xl">"</span>
                <p className="mb-2">Uma parte massiva do desejo pré-menstrual por chocolate é aprendida e influenciada pela nossa cultura, e não puramente uma necessidade biológica celular de o que comer na TPM.</p>
                <footer className="text-sm font-bold text-green-700 not-italic uppercase tracking-wider">— Revista PLOS One, 2017</footer>
              </blockquote>

              <p>
                O seu corpo grita por acolhimento e energia limpa; porém, sua mente, treinada pelo marketing, traduz esse grito para "preciso de uma barra inteira de chocolate". Quando você domina <strong>o que comer na TPM</strong> — usando carboidratos complexos e <Link to="/quantas-calorias-gasto-por-dia" className="text-green-700 font-bold underline hover:text-green-800">calorias alinhadas</Link> ao seu gasto diário — o desespero pelo doce cai drasticamente.
              </p>
              
              <h2 id="treino-constancia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Dumbbell className="text-green-700"/> O Que Comer na TPM e O Papel do Treino
              </h2>
              <p>
                Muito se fala nas redes sociais sobre "sincronizar" o treino com o ciclo menstrual, sugerindo apenas repouso na fase lútea. Mas a ciência mostra que <strong>não é necessário parar de treinar pesado</strong>. Um estudo de 2025 da <em>The Journal of Physiology</em> comprovou que a capacidade feminina de construir músculos (síntese de proteína muscular) não sofre nenhuma influência da fase do ciclo (Colenso-Semple et al., 2025). 
              </p>
              <p>
                Ou seja, se você mantiver a constância e acertar nas escolhas de <strong>o que comer na TPM</strong>, seu corpo construirá tecido muscular e queimará gordura com enorme eficiência. É óbvio que se as cólicas forem incapacitantes, o repouso é fundamental. Mas você não deve, jamais, abandonar a sua rotina de musculação preventivamente!
              </p>

              <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest z-10 flex items-center gap-2 border-b border-l border-green-700">
                      <Zap size={14} className="fill-white" />
                      <span>O Pingus Escolheu a Melhor!</span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0 text-center md:text-left">
                      <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                          <img src={`${githubImgBase}logoN_pingus.webp`} width="160" height="160" loading="lazy" alt="Selo de Qualidade Pingus recomendando monitorar a TPM" title="Monitor de Ciclo" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic text-left m-0">Xiaomi Smart Band 9 Pro: <span className="text-green-700">Alta Precisão no seu Pulso</span></h3>
                          <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 mt-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-white p-2">
                              <img src={`${githubImgBase}Afiliado/Band9Pro.webp`} width="200" height="200" loading="lazy" alt="Smart Band para ajudar a saber o que comer na TPM e monitorar o ciclo" className="w-full h-auto object-contain opacity-90" />
                          </div>
                          <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium text-left">
                              O primeiro passo para dominar a sua alimentação é entender quando a sua Fase Lútea começa. A <strong>Smart Band 9 Pro</strong> oferece monitoramento avançado e preciso do ciclo menstrual e da qualidade do sono. Como seu <Link to="/o_que_e_antropometria" className="text-green-700 font-bold underline hover:text-green-800">avaliador antropométrico</Link>, é essa a ferramenta que eu recomendo para obtermos dados reais.
                          </p>
                          <a href="https://meli.la/2eEQ8VF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-800 hover:scale-105 transition-all italic" aria-label="Comprar Smart Band no Mercado Livre">
                              <ShoppingCart size={16} /> Comprar no Mercado Livre
                          </a>
                      </div>
                  </div>
              </div>

              <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3 text-left">
                <PlayCircle className="text-green-700"/> Fome Física x Fome Emocional na Prática
              </h2>
              <p>
                Não basta apenas ler sobre <strong>o que comer na TPM</strong>; é fundamental observar as atitudes invisíveis que nos sabotam. Entenda de forma brilhante e visual a diferença entre o seu corpo pedir comida (fome física) e a sua mente pedir conforto (fome emocional).
              </p>
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                   <YouTubeLazy videoId="37sH2NJNjc4" title="O Que Comer na TPM: Fome Física x Fome Emocional" />
                </div>
              </div>

              {/* FORMULÁRIO DE CAPTAÇÃO OTIMIZADO E AUTOMATIZADO */}
              <div id="avaliacao" className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-green-100 shadow-2xl relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-40 -ml-10 -mb-10 pointer-events-none"></div>

                <div className="relative z-10 text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm rotate-3">
                    <ClipboardList size={32} className="text-green-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-4">Análise Gratuita: O Seu Ciclo</h2>
                  <p className="text-slate-600 font-medium max-w-xl mx-auto mb-6">Responda ao questionário abaixo. Nosso sistema vai analisar seu perfil fisiológico e gerar um feedback nutricional instantâneo na tela!</p>
                </div>

                {formStatus === 'success' ? (
                  <div className="relative z-10 bg-green-50 rounded-3xl p-8 text-left border border-green-100 animate-fade-in shadow-inner">
                    <div className="flex items-center gap-4 border-b border-green-200 pb-4 mb-6">
                      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shrink-0">
                        <CheckCircle size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-green-900 italic uppercase m-0">Análise Concluída!</h3>
                        <p className="text-sm text-green-700 font-medium m-0 mt-1">Veja abaixo o diagnóstico preliminar do seu ciclo.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {analiseGerada.map((paragrafo, index) => (
                        <p key={index} className="text-slate-700 text-sm md:text-base leading-relaxed m-0 font-medium">
                          {paragrafo}
                        </p>
                      ))}
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm text-center">
                      <p className="text-sm font-bold text-slate-600 mb-4 uppercase tracking-widest">Essa é apenas a ponta do iceberg.</p>
                      <a href="https://wa.me/5521997704300" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-black uppercase shadow-xl transition-all border-none cursor-pointer w-full md:w-auto">
                        <CalendarCheck size={18} /> Quero Meu Resultado
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center">
                    {!isFormOpen && (
                      <button onClick={() => setIsFormOpen(true)} className="bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-full font-black uppercase shadow-xl transition-all border-none cursor-pointer" aria-label="Iniciar Análise para saber o que comer na TPM">Iniciar Análise Gratuita</button>
                    )}
                    <div className={`w-full transition-all duration-700 ease-in-out overflow-hidden ${isFormOpen ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                      {isFormOpen && (
                        <div className="flex justify-end mb-6">
                          <button onClick={() => setIsFormOpen(false)} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-red-500 uppercase bg-transparent border-none cursor-pointer"><XCircle size={16} /> Ocultar</button>
                        </div>
                      )}
                      <form onSubmit={handleFormSubmit} className="space-y-8 max-w-3xl mx-auto text-left">
                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h3 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm m-0">1. Contacto</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mt-6">
                            <label className="block w-full">
                              <span className="sr-only">Seu Nome</span>
                              <input type="text" required placeholder="Nome" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">Seu E-mail</span>
                              <input type="email" required placeholder="E-mail" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                            </label>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h3 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left m-0">2. O Seu Ciclo Menstrual</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-left mt-6">
                            <label className="block w-full">
                              <span className="sr-only">O seu ciclo é regular?</span>
                              <select required value={formData.cicloRegular} onChange={(e) => setFormData({...formData, cicloRegular: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Ciclo regular?</option>
                                  <option value="sim">Sim, regular</option>
                                  <option value="nao">Não, irregular</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">Como são as cólicas e o fluxo?</span>
                              <select required value={formData.fluxoColicas} onChange={(e) => setFormData({...formData, fluxoColicas: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Fluxo e Cólicas?</option>
                                  <option value="ambos">Ambos intensos</option>
                                  <option value="tranquilo">Tranquilo</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">Usa hormônios contraceptivos?</span>
                              <select required value={formData.anticoncepcional} onChange={(e) => setFormData({...formData, anticoncepcional: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Usa Hormônios?</option>
                                  <option value="sim">Sim (Pílula/DIU)</option>
                                  <option value="nao">Não uso</option>
                              </select>
                            </label>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h3 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left m-0">3. Apetite na TPM</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-sm text-left mt-6">
                            <label className="block w-full">
                              <span className="sr-only">O apetite muda bastante?</span>
                              <select required value={formData.apetiteMuda} onChange={(e) => setFormData({...formData, apetiteMuda: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Apetite muda?</option>
                                  <option value="sim">Sim, sinto mudança</option>
                                  <option value="nao">Quase não muda</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">A fome aumenta drasticamente?</span>
                              <select required value={formData.fomeAumenta} onChange={(e) => setFormData({...formData, fomeAumenta: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>A fome aumenta?</option>
                                  <option value="sim_muito">Aumenta muito</option>
                                  <option value="nao">Sem diferenças</option>
                              </select>
                            </label>
                          </div>
                          <label className="block w-full">
                            <span className="sr-only">Quais são as vontades específicas?</span>
                            <input type="text" required placeholder="Vontades específicas? (Ex: Doce, Salgado, Fritura)" value={formData.vontadesEspecificas} onChange={(e) => setFormData({...formData, vontadesEspecificas: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                          </label>
                        </div>

                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h3 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left m-0">4. Energia e Humor</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-left mt-6">
                            <label className="block w-full">
                              <span className="sr-only">Como fica a disposição?</span>
                              <select required value={formData.disposicaoMensal} onChange={(e) => setFormData({...formData, disposicaoMensal: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Disposição?</option>
                                  <option value="cai_tpm">Despenca na TPM</option>
                                  <option value="estavel">Fica estável</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">Como fica o humor?</span>
                              <select required value={formData.mudancaHumor} onChange={(e) => setFormData({...formData, mudancaHumor: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Humor?</option>
                                  <option value="irritada">Irritada/Triste</option>
                                  <option value="estavel">Sem oscilações</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">O sono piora?</span>
                              <select required value={formData.sonoPiora} onChange={(e) => setFormData({...formData, sonoPiora: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Sono piora?</option>
                                  <option value="sim">Piora na Fase Lútea</option>
                                  <option value="nao">Durmo bem sempre</option>
                              </select>
                            </label>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
                          <h3 className="font-black text-slate-800 uppercase tracking-widest mb-6 border-b pb-3 text-sm text-left m-0">5. Peso e Treino</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-left mt-6">
                            <label className="block w-full">
                              <span className="sr-only">O peso na balança flutua?</span>
                              <select required value={formData.pesoFlutua} onChange={(e) => setFormData({...formData, pesoFlutua: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Peso flutua?</option>
                                  <option value="mais2">Sobe + de 1.5kg</option>
                                  <option value="nao">Não altera</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">Tem inchaço visível?</span>
                              <select required value={formData.inchacoRetencao} onChange={(e) => setFormData({...formData, inchacoRetencao: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Inchaço?</option>
                                  <option value="sim">Sim, sinto retenção</option>
                                  <option value="nao">Quase nada</option>
                              </select>
                            </label>
                            <label className="block w-full">
                              <span className="sr-only">Faz exercícios físicos?</span>
                              <select required value={formData.praticaExercicio} onChange={(e) => setFormData({...formData, praticaExercicio: e.target.value})} className="w-full bg-white border rounded-xl px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                                  <option value="" disabled>Exercício?</option>
                                  <option value="musculacao">Faço Musculação</option>
                                  <option value="sedentaria">Sedentária</option>
                              </select>
                            </label>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-inner">
                          <label className="flex items-start gap-4 cursor-pointer text-left">
                            <input type="checkbox" required checked={formData.aceitaTermos} onChange={(e) => setFormData({...formData, aceitaTermos: e.target.checked})} className="mt-1 w-5 h-5 accent-green-700 rounded cursor-pointer" />
                            <span className="text-[11px] leading-relaxed text-slate-600 font-medium">
                              <strong>Aviso Legal:</strong> Esta ferramenta gera análises baseadas na fisiologia comum e não substitui uma consulta clínica formal. Ao enviar, aceito receber os resultados na tela e por e-mail.
                            </span>
                          </label>
                        </div>

                        {formStatus === 'error' && <div className="text-red-600 text-sm text-center font-bold">Erro de comunicação. Tente novamente mais tarde!</div>}

                        <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white p-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all border-none cursor-pointer">
                          {formStatus === 'submitting' ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send size={18} /> Quero Minha Análise Agora</>}
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <CheckCircle className="text-green-700"/> Conclusão: Dominando a Sua Biologia
              </h2>
              <p>
                No fim das contas, a dúvida sobre <strong>o que comer na TPM</strong> deixa de ser um pesadelo e se torna uma poderosa ferramenta clínica quando você compreende o funcionamento do seu metabolismo e a dança da progesterona com o estrogênio. Ao alinhar as calorias ao aumento natural do seu gasto energético, fornecer proteínas suficientes e priorizar as gorduras e fibras, o "monstro da compulsão" se silencia. Se apoie nas métricas exatas fornecidas por boas tecnologias esportivas e lembre-se: nutrir o seu corpo não é sobre passar fome, é sobre fornecer o combustível exato para a máquina perfeita que ele é!
              </p>

              {/* FAQ */}
              <div id="faq" className="mt-20 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 italic flex items-center gap-3">
                  <HelpCircle className="text-green-700" /> Dúvidas Rápidas: O Que Comer na TPM
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                      <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} aria-expanded={openFaqIndex === index} className="w-full p-6 md:p-8 flex items-center justify-between text-left group bg-transparent border-none cursor-pointer">
                        <h3 className={`text-lg font-black italic transition-colors m-0 ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>{faq.pergunta}</h3>
                        <ChevronDown className={`text-slate-500 shrink-0 transition-transform ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                      </button>
                      <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                        <p className="text-slate-600 m-0 leading-relaxed border-t border-slate-200 pt-4 text-left">{faq.resposta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Newsletter />
            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
              <img src={`${githubImgBase}Eu_1.webp`} width="96" height="96" loading="lazy" alt="Marco Aurélio Jr. que ensina de forma científica o que comer na TPM" title="Autor Marco Aurélio Jr." className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1 mt-0">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg text-left">
                Estudante imerso em bioquímica nutricional. Marco foca em ensinar na prática <strong>o que comer na TPM</strong>, traduzindo evidências fisiológicas profundas para a rotina diária e combatendo mitos e restrições extremas impostas pela indústria.
              </p>
              <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-800 transition-all italic">
                Siga @Nutricao_com_Marco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}