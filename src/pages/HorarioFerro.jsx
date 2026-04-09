import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, 
  ShoppingCart, AlertCircle, ShieldCheck, CheckCircle, Droplet, 
  Coffee, Utensils, XCircle, Check
} from 'lucide-react';

import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data
const datePublishedISO = "2026-04-10";
const dateModifiedISO = "2026-04-10";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminho da imagem de capa (Placeholder estilizado para o tema)
const capaArtigo = "https://images.unsplash.com/photo-1576073719676-aa95576eb2ce?q=80&w=2000&auto=format&fit=crop";

export default function MelhorHorarioFerro() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "É normal as fezes ficarem escuras ao tomar ferro?",
      resposta: "Sim, é uma reação completamente normal e esperada. O nosso corpo absorve apenas a quantidade de ferro necessária para restaurar os estoques, e o excesso do mineral que não é absorvido pelo trato gastrointestinal é excretado nas fezes, conferindo a elas uma coloração que varia do verde-escuro ao preto. Se não houver dor abdominal intensa ou sangue vivo, não há motivo para preocupação."
    },
    {
      pergunta: "Posso tomar o suplemento de ferro com suco de laranja?",
      resposta: "Com certeza, essa é uma das melhores estratégias nutricionais que você pode adotar. O suco de laranja é rico em vitamina C (ácido ascórbico), que atua como um poderoso facilitador da absorção. A vitamina C transforma o ferro férrico (menos absorvível) em ferro ferroso, tornando a sua entrada nas células intestinais muito mais rápida e eficiente."
    },
    {
      pergunta: "Tomar ferro engorda ou aumenta o apetite?",
      resposta: "O ferro em si não contém calorias e não tem o poder de engordar. O que acontece frequentemente é que pessoas com anemia ferropriva sofrem de extrema fadiga e falta de apetite. Quando o tratamento começa a fazer efeito e a oxigenação dos tecidos melhora, a pessoa recupera a sua disposição e o seu apetite normal volta, o que pode levar a um maior consumo de alimentos, mas não é o suplemento que causa ganho de peso direto."
    },
    {
      pergunta: "Esqueci de tomar o ferro de manhã, posso tomar à noite?",
      resposta: "Pode sim, desde que você respeite a regra do estômago vazio ou do distanciamento das refeições principais ricas em inibidores. Se for tomar à noite, aguarde pelo menos duas horas após o jantar e evite consumir laticínios ou chás na ceia para garantir que o mineral será devidamente aproveitado pelo seu organismo durante a noite."
    }
  ];

  return (
    <>
      <Helmet>
        {/* SEO OTIMIZADO */}
        <title>Melhor Horário Para Tomar Ferro e Curar a Anemia | Nutrição com Marco</title>
        <meta name="description" content="Descubra o melhor horário para tomar ferro, sintomas de falta no organismo, o que inibe a absorção e quanto tempo dura o tratamento para anemia." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Melhor Horário Para Tomar Ferro e Curar a Anemia | Nutrição com Marco" />
        <meta property="og:description" content="Aprenda como o ferro age no organismo, se pode tomar em jejum, depois do almoço e quais alimentos bloqueiam a sua absorção." />
        <meta property="og:image" content={capaArtigo} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Melhor Horário Para Tomar Ferro e Combater a Anemia Ferropriva",
            "image": capaArtigo,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre"
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
            "description": "Guia completo sobre a suplementação de ferro: horários, absorção, inibidores e tratamento da anemia ferropriva."
          })}
        </script>

        {/* SCHEMA.ORG 2: MEDICAL WEB PAGE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Tratamento da Anemia e Suplementação de Ferro",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Anemia Ferropriva"},
              {"@type": "MedicalEntity", "name": "Ferro"},
              {"@type": "MedicalEntity", "name": "Absorção de Nutrientes"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes"
            }
          })}
        </script>

        {/* SCHEMA.ORG 3: FAQ PAGE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.pergunta,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.resposta
              }
            }))
          })}
        </script>

        {/* SCHEMA.ORG: IMAGE OBJECT */}
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/HorarioFerro.jpg",
    "creator": {
      "@type": "Person",
      "name": "Marco"
    },
    "creditText": "Nutrição com Marco",
    "copyrightNotice": "Nutrição com Marco",
    "license": "https://nutricaocommarco.com.br",
    "caption": "Mascote Pingus descobrindo o melhor horário para tomar suplemento de ferro.",
    "description": "Ilustração 3D do mascote Pingus com roupa de explorador olhando assustado para uma barra de ferro em um prato, representando de forma bem-humorada a dieta e suplementação de ferro.",
    "name": "Horário ideal para tomar suplemento de ferro"
  })}
</script>
        
      </Helmet>

    <div className="min-h-screen bg-slate-50 font-sans">
    <section className="py-24 px-4 sm:px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Clínica</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Melhor horario para tomar ferro: O Guia Definitivo Contra a Anemia
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta Direta: Qual o melhor horário para tomar ferro?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                O melhor horário para tomar ferro é <strong>em jejum, preferencialmente pela manhã</strong>, com um copo de água ou suco cítrico (como limão ou laranja). Isso ocorre porque o estômago vazio apresenta um ambiente mais ácido, o que maximiza a absorção do mineral, evitando que ele compita com outros nutrientes provenientes da alimentação.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Melhor-Horario-Tomar-Ferro.mp3" type="audio/mpeg" />
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

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1200px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#sintomas" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Droplet size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Sintomas de Falta de Ferro</a></li>
                  <li><a href="#como-age" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como o Ferro Age no Organismo</a></li>
                  <li><a href="#tempo-tratamento" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Duração do Tratamento</a></li>
                  <li><a href="#inibidores" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><XCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Alimentos que Inibem a Absorção</a></li>
                  <li><a href="#ferro-calcio" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ferro e Cálcio</a></li>
                  <li><a href="#vitamina-c" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ferro e Vitamina C</a></li>
                  <li><a href="#ferro-zinco" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ferro e Zinco Juntos?</a></li>
                  <li><a href="#depois-almoco" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Utensils size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tomar Depois do Almoço</a></li>
                  <li><a href="#jejum" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Coffee size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tomar em Jejum</a></li>
                  <li><a href="#alimentos-ricos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Alimentos Ricos em Ferro</a></li>
                  <li><a href="#heme-nao-heme" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Heme vs Não-Heme</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="sintomas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Droplet className="text-green-600"/> Sintomas de falta de ferro no organismo
            </h2>
            <p>
              Quando os seus estoques começam a cair, o corpo acende um alerta vermelho que afeta praticamente toda a sua rotina. Os sintomas de falta de ferro no organismo costumam surgir de forma silenciosa e vão se agravando conforme a anemia ferropriva se instala. O sinal mais clássico é um cansaço esmagador e inexplicável, acompanhado de palidez na pele e nas mucosas, principalmente na parte interna dos olhos. Como o mineral é fundamental para a saúde estrutural, é muito comum observar queda de cabelo acentuada e unhas quebradiças, um quadro que muitas vezes confunde os pacientes que tentam tratar o problema apenas com cosméticos ou investigando a <Link to="/vitamina_a_para_que_serve" className="text-green-600 font-semibold hover:underline">vitamina A</Link> sem olhar para a ferritina. Além disso, a falta de oxigenação no cérebro causa dores de cabeça frequentes, tonturas ao levantar rápido e dificuldade extrema de concentração.
            </p>

            {/* IMAGEM DE CAPA */}
<div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
  <img 
    src={`${githubImgBase}Blog/HorarioFerro.jpg`} 
    alt="Mascote Pingus assustado ao tentar comer uma barra de ferro em um prato, ilustrando de forma humorada a suplementação e absorção de ferro" 
    title="Qual o melhor horário para tomar suplemento de ferro? O Pingus te explica!"
    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
  />
  <div className="bg-green-50 p-4 text-center">
    <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
      Afinal, quando tomar ferro sem prejudicar a absorção? O Pingus descobriu que não é tão simples quanto parece!
    </p>
  </div>
</div>

            <h2 id="como-age" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> Como o ferro age no organismo
            </h2>
            <p>
              Para compreender a urgência de tratar essa deficiência, precisamos entender como o ferro age no organismo. Ele é a peça central de uma proteína chamada hemoglobina, que vive dentro dos nossos glóbulos vermelhos. A principal missão do ferro é agir como um ímã que captura o oxigênio que respiramos nos pulmões e o transporta através da corrente sanguínea para cada célula, músculo e órgão do corpo humano. Sem ferro suficiente, o seu corpo não consegue produzir hemoglobina viável, o que significa que os seus tecidos começam a literalmente sufocar por falta de oxigênio, prejudicando desde a produção de energia nas mitocôndrias até a recuperação muscular após um treino intenso, algo crucial para quem se prepara para um <Link to="/nutricao_para_ironman_703" className="text-green-600 font-semibold hover:underline">Ironman</Link> ou enfrenta o rigoroso <Link to="/o_dilema_do_sangue_na_altitude" className="text-green-600 font-semibold hover:underline">dilema do sangue na altitude</Link>.
            </p>

            <h3 id="tempo-tratamento" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <Activity className="text-green-500 w-5 h-5"/> Quanto tempo dura o tratamento de anemia
            </h3>
            <p>
              Muitos pacientes se frustram ao não verem resultados mágicos em poucos dias e se perguntam quanto tempo dura o tratamento de anemia. A literatura médica, corroborada por estudos publicados na <a href="https://www.scielo.br/j/rbhh/a/HLcTcgqkgV7VmpRWyWTTVXw/?format=html&lang=pt" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">Revista Brasileira de Hematologia e Hemoterapia</a>, indica que a recuperação clínica (o alívio do cansaço e a melhora da disposição) pode ser sentida nas primeiras duas a três semanas de suplementação correta. No entanto, o tratamento completo exige muito mais paciência. Para normalizar os níveis de hemoglobina no sangue, leva-se em média dois meses, e para repor os estoques profundos de ferro no fígado e na medula óssea (medidos pelo exame de ferritina), o tratamento oral deve ser mantido de forma rigorosa por três a seis meses.
            </p>

            <h2 id="inibidores" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <XCircle className="text-green-600"/> Alimentos que inibem a absorção de ferro
            </h2>
            <p>
              Não adianta tomar o melhor suplemento do mundo se o seu trato digestivo estiver cheio de obstáculos. Conforme destacado no livro <em>Biodisponibilidade de Nutrientes</em> de Silvia Cozzolino, existem potentes alimentos que inibem a absorção de ferro. Os maiores vilões são os laticínios, pois o cálcio presente no leite, queijos e iogurtes bloqueia diretamente a entrada do ferro nas células intestinais. Além disso, os fitatos presentes em grãos integrais, e os taninos e polifenóis encontrados abundantemente no café, chá preto, chá verde e até no cacau formam complexos insolúveis com o ferro, impedindo que ele chegue à corrente sanguínea. Se você tem o hábito de tomar um cafezinho logo após as refeições ricas em carne, está jogando boa parte da sua nutrição fora.
            </p>

            {/* TABELA: FACILITADORES VS INIBIDORES */}
            <div className="my-10 overflow-x-auto rounded-2xl shadow-sm border border-slate-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-4 border-b border-slate-200 font-black uppercase text-sm w-1/2"><Check className="inline w-4 h-4 text-green-600 mr-2"/> Fatores que Aumentam a Absorção</th>
                    <th className="p-4 border-b border-slate-200 font-black uppercase text-sm w-1/2"><XCircle className="inline w-4 h-4 text-red-600 mr-2"/> Fatores que Inibem a Absorção</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-4 border-b border-slate-100">Vitamina C (Laranja, Limão, Acerola)</td>
                    <td className="p-4 border-b border-slate-100">Cálcio (Leite, Queijos, Iogurtes, Cálcio Suplementar)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100">Ambiente Gástrico Ácido (Jejum)</td>
                    <td className="p-4 border-b border-slate-100">Taninos e Polifenóis (Café, Chá Preto, Vinho Tinto)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100">Presença de Carnes (Fator Carne)</td>
                    <td className="p-4 border-b border-slate-100">Fitatos (Grãos Integrais, Farelos não demolhados)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100">Vitamina A e Betacaroteno</td>
                    <td className="p-4 border-b border-slate-100">Protetores Gástricos (Omeprazol e antiácidos)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="ferro-calcio" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <AlertCircle className="text-green-500 w-5 h-5"/> A Competição Desleal: Ferro e Cálcio
            </h3>
            <p>
              Você já sabe que os laticínios inibem a absorção, mas é importante entender a fisiologia por trás disso. O cálcio é o único nutriente dietético conhecido que bloqueia clinicamente a absorção tanto do ferro heme (carnes) quanto do ferro não-heme (vegetais). Ele atua de forma diretamente competitiva nas células intestinais (enterócitos), o que significa que se houver uma alta concentração de cálcio disponível, o ferro será deixado de lado. Se você tem o hábito de comer uma sobremesa à base de leite logo após o almoço ou tomar o seu suplemento de ferro matinal junto com um copo de leite ou iogurte, você está literalmente sabotando o seu tratamento. A regra clínica é afastar fontes de cálcio da sua suplementação de ferro por pelo menos duas horas.
            </p>

            <h3 id="vitamina-c" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <Leaf className="text-green-500 w-5 h-5"/> A Poderosa Combinação de Ferro e Vitamina C
            </h3>
            <p>
              A vitamina C atua como um verdadeiro imã para o ferro, especialmente o ferro não-heme encontrado nos vegetais. Quando você consome fontes de vitamina C, como laranja, limão, tangerina, acerola ou morango, na mesma refeição que o ferro, o ácido ascórbico transforma o ferro férrico (que é mais difícil de ser absorvido) em ferro ferroso, que é altamente biodisponível. Na prática, espremer um limão por cima da salada de folhas escuras ou do feijão, ou tomar um copo de suco de laranja logo após a sua suplementação matinal em jejum, pode aumentar a absorção do mineral em até três vezes, garantindo que o seu tratamento seja muito mais rápido e eficaz.
            </p>

            <h3 id="ferro-zinco" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <Zap className="text-green-500 w-5 h-5"/> Ferro e zinco podem ser tomados juntos?
            </h3>
            <p>
              Esta é uma dúvida clássica da suplementação inteligente. O ferro e zinco podem ser tomados juntos? A resposta clínica é não. Ambos os minerais são divalentes e utilizam o mesmo transportador molecular para atravessar a parede do intestino. Quando você ingere doses terapêuticas altas dos dois ao mesmo tempo, ocorre uma intensa competição absortiva, e geralmente o ferro "ganha" a disputa, inibindo a absorção do zinco, o que pode mascarar outras deficiências nutricionais ou prejudicar a sua imunidade. O ideal é separar a ingestão desses minerais em horários distintos do dia para garantir que ambos cheguem ao seu destino final.
            </p>

            <h3 id="depois-almoco" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <Utensils className="text-green-500 w-5 h-5"/> Pode tomar ferro depois do almoço?
            </h3>
            <p>
              Muitos pacientes relatam forte náusea, azia ou dores abdominais quando tomam a pílula de estômago vazio, e imediatamente perguntam se pode tomar ferro depois do almoço. Sim, é perfeitamente possível e indicado para pessoas com sensibilidade gástrica, pois a comida cria um "colchão" que suaviza o impacto no estômago. Contudo, é vital que esse almoço não contenha laticínios na sobremesa, nem seja acompanhado de café ou chá. Você deve estar ciente de que a taxa de absorção cai significativamente (cerca de 40 a 50%) quando o suplemento se mistura ao bolo alimentar, o que pode prolongar ligeiramente o tempo total do seu tratamento.
            </p>

            <h3 id="jejum" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <Coffee className="text-green-500 w-5 h-5"/> Pode tomar ferro em jejum?
            </h3>
            <p>
              Definitivamente sim. Sob a ótica puramente fisiológica da máxima eficiência, questionar se pode tomar ferro em jejum é confirmar a regra de ouro do tratamento da anemia. Ao ingerir o suplemento logo cedo, cerca de uma hora antes do seu café da manhã, o ambiente do estômago está altamente ácido e livre de substâncias quelantes que inibem o mineral. Combinar essa cápsula matinal com meio copo de água com limão potencializa ainda mais a eficácia do protocolo, garantindo que praticamente cada miligrama da medicação seja enviado direto para a sua medula óssea para a fabricação de novas células sanguíneas.
            </p>

{/* AFILIADO MERCADO LIVRE (PORTA COMPRIMIDOS) */}
<div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
    <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
        <Zap size={14} className="fill-white" />
        <span>O Pingus Aprova!</span>
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
                Porta Comprimidos <span className="text-green-700">Semanal Organizador</span>
            </h4>

            <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                <img 
                  src={`${githubImgBase}Afiliado/PortaComprimidos.JPG`} 
                  alt="Porta Comprimidos Semanal Organizador" 
                  className="w-full h-auto object-cover" 
                />
            </div>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                O tratamento da anemia exige disciplina diária e a separação correta dos suplementos (lembra da regra de afastar o ferro do zinco e do cálcio?). Para não se perder nos horários nem esquecer a sua dose em jejum, um organizador semanal é o investimento mais prático e inteligente para garantir o sucesso da sua recuperação.
            </p>

            <a 
                href="https://meli.la/2s3yv1e" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
            >
                <ShoppingCart size={16} />
                Ver Organizador no Mercado Livre
            </a>
        </div>
    </div>

    <div className="mt-12 pt-6 border-t border-green-50 text-center">
        <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
            Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso!
        </p>
    </div>
</div>

            <h2 id="alimentos-ricos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> Alimentos que possuem ferro
            </h2>
            <p>
              Além da suplementação medicamentosa, a base da cura estrutural mora no seu prato. Os alimentos que possuem ferro se dividem em duas categorias cruciais: o ferro Heme (de origem animal) e o ferro Não-Heme (de origem vegetal). O ferro Heme é o rei da biodisponibilidade; o nosso corpo o reconhece facilmente e absorve grandes quantidades dele a partir de carnes vermelhas, fígado bovino, frango e peixes. Já o ferro Não-Heme, presente nas leguminosas, vegetais verde-escuros e sementes, é mais "tímido" e precisa da ajuda da vitamina C para ser absorvido. É fundamental aprender estratégias de remolho para evitar inibidores, o que também responde à famosa dúvida sobre <Link to="/por_que_o_feijao_da_gases" className="text-green-600 font-semibold hover:underline">por que o feijão dá gases</Link> quando mal preparado.
            </p>

            <h3 id="heme-nao-heme" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-3 flex items-center gap-2">
              <Zap className="text-green-500 w-5 h-5"/> A Diferença Fundamental: Ferro Heme x Ferro Não-Heme
            </h3>
            <p>
              Para dominar a sua dieta, é crucial entender a comparação entre o ferro heme e o ferro não-heme. O ferro heme, presente exclusivamente nos alimentos de origem animal como carnes vermelhas, aves e peixes, possui uma taxa de absorção altíssima, variando entre 15% e 35%. O seu corpo o reconhece de imediato e o absorve sem precisar de ajudantes nutricionais. Já o ferro não-heme, encontrado nos vegetais, leguminosas (como o feijão e a lentilha) e sementes, apresenta uma absorção muito menor, geralmente entre 2% e 20%. Ele é sensível aos inibidores da dieta, como os fitatos e o cálcio, e depende fortemente da presença da vitamina C ou de proteínas animais na mesma refeição para ser bem aproveitado. Portanto, uma dieta estritamente baseada em vegetais exige um planejamento estratégico muito mais rigoroso para evitar a deficiência.
            </p>

            <h3 id="tabela-ferro" className="text-xl font-black text-slate-800 uppercase italic mt-10 mb-6 flex items-center gap-2">
              <Activity className="text-green-500 w-5 h-5"/> Tabela de Alimentos com ferro
            </h3>
            
            <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200 mb-10">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-4 border-b border-slate-200 font-black uppercase text-sm">Alimento (100g)</th>
                    <th className="p-4 border-b border-slate-200 font-black uppercase text-sm">Tipo de Ferro</th>
                    <th className="p-4 border-b border-slate-200 font-black uppercase text-sm">Quantidade Aprox. (mg)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr>
                    <td className="p-4 border-b border-slate-100 font-bold">Fígado Bovino (Grelhado)</td>
                    <td className="p-4 border-b border-slate-100"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Heme (Alta Absorção)</span></td>
                    <td className="p-4 border-b border-slate-100">5,8 mg</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100 font-bold">Carne Bovina (Patinho)</td>
                    <td className="p-4 border-b border-slate-100"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Heme (Alta Absorção)</span></td>
                    <td className="p-4 border-b border-slate-100">3,0 mg</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100 font-bold">Semente de Abóbora</td>
                    <td className="p-4 border-b border-slate-100"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">Não-Heme (Baixa Absorção)</span></td>
                    <td className="p-4 border-b border-slate-100">8,8 mg</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100 font-bold">Feijão Preto (Cozido)</td>
                    <td className="p-4 border-b border-slate-100"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">Não-Heme (Baixa Absorção)</span></td>
                    <td className="p-4 border-b border-slate-100">1,5 mg</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-slate-100 font-bold">Espinafre (Cozido)</td>
                    <td className="p-4 border-b border-slate-100"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold">Não-Heme (Baixa Absorção)</span></td>
                    <td className="p-4 border-b border-slate-100">2,7 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* VÍDEO DO YOUTUBE */}
            <div className="my-16 p-6 md:p-10 bg-slate-900 rounded-[3.5rem] border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_15px_rgba(22,163,74,0.5)]">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-white uppercase italic leading-tight">Metabolismo do Ferro: Entenda a Fisiologia</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700 bg-black">
                <iframe 
                  src="https://www.youtube.com/embed/-s11HT8KT2A" 
                  title="Metabolismo do Ferro" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* FAQ OTIMIZADO */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre o Ferro (FAQ)
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
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
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

        {/* AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela fisiologia clínica e pelo comportamento humano, Marco traduz exames laboratoriais e literatura científica pesada em práticas dietéticas aplicáveis no dia a dia.
            </p>
            <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
}
