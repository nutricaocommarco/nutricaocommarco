import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Shield, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Coffee, Wheat, Flame, Beaker, CheckCircle2, Droplet, 
  UtensilsCrossed, Pill, Brain, Wine, Wind, Battery, ShieldAlert, AlertCircle, HeartPulse, Layers, Scale, Dna, Apple
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-03-28";
const dateModifiedISO = "2026-03-28";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const simbioticosCapa = `${githubImgBase}Blog/Simbioticos.jpg`;

const fatoresMicrobiota = [
  { id: 1, nome: "Má Alimentação", icone: <UtensilsCrossed className="w-6 h-6 text-red-500" />, desc: "Dietas ricas em ultraprocessados, açúcar refinado e pobres em fibras matam as bactérias boas de fome." },
  { id: 2, nome: "Medicamentos", icone: <Pill className="w-6 h-6 text-blue-500" />, desc: "O uso indiscriminado de antibióticos varre tanto as bactérias ruins quanto as boas, devastando a flora." },
  { id: 3, nome: "Estresse e Ansiedade", icone: <Brain className="w-6 h-6 text-purple-500" />, desc: "Picos de cortisol crônicos alteram a motilidade e a permeabilidade intestinal." },
  { id: 4, nome: "Cigarro", icone: <Flame className="w-6 h-6 text-slate-600" />, desc: "As toxinas inaladas chegam à corrente sanguínea e geram inflamação direta na mucosa do intestino." },
  { id: 5, nome: "Bebidas Alcoólicas", icone: <Wine className="w-6 h-6 text-rose-500" />, desc: "O álcool agride a parede intestinal, facilitando o quadro de 'Leaky Gut' (intestino permeável)." }
];

const sintomasDisbiose = [
  { id: 1, nome: "Excesso de Gases", icone: <Wind className="w-5 h-5 text-orange-500" /> },
  { id: 2, nome: "Deficiência de Nutrientes", icone: <Activity className="w-5 h-5 text-orange-500" /> },
  { id: 3, nome: "Fadiga Crônica", icone: <Battery className="w-5 h-5 text-orange-500" /> },
  { id: 4, nome: "Baixa Imunidade", icone: <ShieldAlert className="w-5 h-5 text-orange-500" /> },
  { id: 5, nome: "Episódios de Diarreia", icone: <Droplet className="w-5 h-5 text-orange-500" /> },
  { id: 6, nome: "Constipação Severa", icone: <AlertCircle className="w-5 h-5 text-orange-500" /> },
  { id: 7, nome: "Outros Problemas à Saúde", icone: <HeartPulse className="w-5 h-5 text-orange-500" /> }
];

const simbioticosDados = [
  { id: 1, nome: "Iogurte com Aveia", tipo: "Lactobacillus + Betaglucanas", descricao: "A combinação clássica de pequeno-almoço que garante bactérias vivas e fibra formadora de gel.", Icone: Layers, corIcone: "text-amber-500" },
  { id: 2, nome: "Kefir com Banana Verde", tipo: "Leveduras + Amido Resistente", descricao: "Uma bomba de saúde. O amido resistente da biomassa garante que o kefir colonize o intestino grosso.", Icone: Beaker, corIcone: "text-green-500" },
  { id: 3, nome: "Kombucha e Maçã", tipo: "Bactérias do Chá + Pectina", descricao: "Consumir uma maçã com casca enquanto bebe kombucha cria o ambiente perfeito para a flora.", Icone: Apple, corIcone: "text-red-500" },
  { id: 4, nome: "Tempeh com Cebola", tipo: "Soja Fermentada + FOS", descricao: "Um prato quente poderoso. A cebola fornece inulina para as bactérias do tempeh.", Icone: Wheat, corIcone: "text-amber-800" },
  { id: 5, nome: "Chucrute com Batata Yacon", tipo: "L. Plantarum + Inulina", descricao: "Mistura europeia com andina. As bactérias do repolho adoram o xarope ou a raiz da yacon.", Icone: Flame, corIcone: "text-orange-500" },
  { id: 6, nome: "Leite Fermentado e Linhaça", tipo: "Lactobacillus + Mucilagens", descricao: "Bater o leite fermentado com farinha de linhaça cria uma bebida calmante para a mucosa.", Icone: Droplet, corIcone: "text-blue-400" },
  { id: 7, nome: "Queijo Maturado e Mel", tipo: "Bactérias Lácticas + Oligossacarídeos", descricao: "Um petisco delicioso. O mel cru contém prebióticos que ajudam as bactérias do queijo.", Icone: Shield, corIcone: "text-yellow-500" },
  { id: 8, nome: "Miso Soup com Alho", tipo: "Aspergillus + Inulina", descricao: "Sopa tradicional onde o alho atua como o combustível perfeito para os microrganismos da soja.", Icone: Coffee, corIcone: "text-slate-600" },
  { id: 9, nome: "Coalhada com Chicória", tipo: "Bactérias Lácticas + Inulina", descricao: "Usar a raiz de chicória ou as folhas amargas junto com coalhada fresca potencializa a digestão.", Icone: Leaf, corIcone: "text-emerald-600" },
  { id: 10, nome: "Picles e Aspargos", tipo: "Lactobacillus + FOS", descricao: "Uma salada fria de picles de fermentação natural com aspargos grelhados é pura sinergia.", Icone: CheckCircle2, corIcone: "text-green-600" },
  { id: 11, nome: "Natto e Beterraba", tipo: "Bacillus Subtilis + FOS", descricao: "A beterraba fornece os oligossacarídeos necessários para a potente bactéria japonesa prosperar.", Icone: Activity, corIcone: "text-rose-600" },
  { id: 12, nome: "Suplemento Simbiótico", tipo: "Bactérias + FOS em Pó", descricao: "Cápsulas ou sachês que já trazem a bactéria e a sua 'comida' (FOS) misturadas no mesmo produto.", Icone: Beaker, corIcone: "text-purple-500" }
];

export default function SimbioticosComponent() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "O que é exatamente um alimento simbiótico?",
      resposta: "Um alimento ou suplemento simbiótico é aquele que contém, na mesma porção, tanto as bactérias benéficas vivas (probióticos) quanto as fibras específicas que servem de alimento para elas (prebióticos). Eles agem em sinergia."
    },
    {
      pergunta: "Posso criar as minhas próprias refeições simbióticas em casa?",
      resposta: "Com toda a certeza! É a forma mais barata e natural. Basta misturar um probiótico (como iogurte natural ou kefir) com um prebiótico (como aveia, banana verde ou maçã) na mesma refeição."
    },
    {
      pergunta: "Qual a vantagem do simbiótico em relação a tomar só o probiótico?",
      resposta: "Quando toma apenas a bactéria (probiótico), ela pode morrer no intestino se não encontrar comida. O simbiótico garante a sobrevivência da bactéria, pois ela já 'viaja' junto com a sua própria marmita (o prebiótico), aumentando muito a sua eficácia."
    },
    {
      pergunta: "Simbióticos ajudam no emagrecimento?",
      resposta: "Sim. A combinação melhora a saúde intestinal de forma mais rápida, reduzindo a inflamação invisível, controlando picos de glicemia e aumentando a produção de hormonas da saciedade, como o GLP-1."
    },
    {
      pergunta: "Existem contraindicações?",
      resposta: "Geralmente são seguros para a maioria das pessoas. Porém, indivíduos com SIBO (Supercrescimento Bacteriano no Intestino Delgado) ou síndrome do intestino irritável grave podem sentir excesso de gases no início e devem introduzir as fibras (prebióticos) muito gradualmente."
    }
  ];

  return (
    <>
      <Helmet>
        <title>O que são Simbióticos? A União de Pre e Probióticos | Nutrição com Marco</title>
        <meta name="description" content="Descubra o que são os alimentos simbióticos, como a união de prebióticos e probióticos transforma a sua flora e as melhores combinações para o emagrecimento." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O que são Simbióticos? A Sinergia Intestinal | Nutrição com Marco" />
        <meta property="og:description" content="Guia definitivo sobre Simbióticos: aprenda a combinar prebióticos e probióticos na mesma refeição para blindar a sua imunidade e microbiota." />
        <meta property="og:image" content={simbioticosCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O que são Simbióticos? A União de Prebióticos e Probióticos",
            "image": simbioticosCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição", "Simbióticos", "Saúde Intestinal", "Microbiota", "Medicina do Estilo de Vida"]
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
            "description": "Descubra o que são os alimentos simbióticos e como a união estratégica de prebióticos e probióticos transforma a saúde do seu intestino."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "O que são Simbióticos? A União de Pre e Probióticos",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Simbiótico"},
              {"@type": "MedicalEntity", "name": "Probiótico"},
              {"@type": "MedicalEntity", "name": "Prebiótico"},
              {"@type": "MedicalEntity", "name": "Microbiota Intestinal"}
            ],
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Pacientes"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.nutricaocommarco.com.br/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.nutricaocommarco.com.br/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "O que são Simbióticos?",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          })}
        </script>
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
      </Helmet>

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde Intestinal</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que são Simbióticos? A União Perfeita para o seu Intestino
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que é um Simbiótico? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                Os simbióticos são produtos alimentares ou suplementos que combinam <strong>Probióticos</strong> (as bactérias vivas e boas) com <strong>Prebióticos</strong> (as fibras que servem de alimento para essas bactérias) na mesma porção. Essa união cria uma sinergia perfeita: a bactéria já chega ao seu intestino com a sua própria "marmita", garantindo a sua sobrevivência, proliferação e máxima eficácia na sua saúde metabólica e imunitária.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Simbioticos.mp3" type="audio/mpeg" />
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
                  <li><a href="#fisiologia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Sinergia Intestinal</a></li>
                  <li><a href="#fatores-microbiota" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que afeta a flora?</a></li>
                  <li><a href="#sintomas-disbiose" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Wind size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Sintomas do Desequilíbrio</a></li>
                  <li><a href="#emagrecimento" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Impacto no Emagrecimento</a></li>
                  <li><a href="#suplementacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Dna size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Naturais vs Suplementos</a></li>
                  <li><a href="#experimentos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Comprovações Clínicas</a></li>
                  <li><a href="#lista-simbioticos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Layers size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />12 Combinações de Dieta</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <p>
              Até agora, explorámos de forma isolada os dois mundos vitais que compõem a base da nossa saúde gastrointestinal. Contudo, na prática da nutrição clínica e da medicina do estilo de vida, a verdadeira revolução metabólica não acontece quando ingerimos nutrientes isolados, mas sim quando aproveitamos a sinergia perfeita entre eles. Os alimentos simbióticos não são uma nova classe de microrganismos recém-descobertos em laboratório, mas sim um conceito estratégico formidável. Trata-se da garantia biológica de que as bactérias benéficas que ingere terão exatamente o suporte nutricional necessário para sobreviver ao ambiente inóspito do trato digestivo e, finalmente, prosperar de forma soberana lá no final do caminho, no seu cólon.
            </p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={simbioticosCapa} 
                alt="Pingus, nosso mascote, preparando uma refeição simbiótica perfeita com iogurte, aveia e frutas." 
                title="A união perfeita de alimentos na refeição simbiótica"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="bg-green-50 p-4 text-center">
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                  Pingus a preparar a sua taça simbiótica diária para máxima imunidade.
                </p>
              </div>
            </div>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
                <div>
                  <Leaf className="text-emerald-600 w-8 h-8 mb-4" />
                  <h3 className="text-xl font-black text-emerald-900 uppercase italic mb-3">Relembre a "Comida"</h3>
                  <p className="text-emerald-800 text-sm leading-relaxed font-medium mb-6">
                    Ainda não domina as fibras fermentáveis? Descubra como a aveia, cebola e a banana verde alimentam a sua flora.
                  </p>
                </div>
                <Link to="/o-que-sao-prebioticos" className="text-xs font-black uppercase tracking-widest text-white bg-emerald-600 py-3 px-6 rounded-full text-center hover:bg-emerald-700 transition">
                  Ler sobre Prebióticos
                </Link>
              </div>

              <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
                <div>
                  <Shield className="text-blue-600 w-8 h-8 mb-4" />
                  <h3 className="text-xl font-black text-blue-900 uppercase italic mb-3">Relembre o "Soldado"</h3>
                  <p className="text-blue-800 text-sm leading-relaxed font-medium mb-6">
                    Quem são os Lactobacillus e Bifidobacterium? Descubra como as bactérias vivas protegem o seu corpo diariamente.
                  </p>
                </div>
                <Link to="/o-que-sao-probioticos" className="text-xs font-black uppercase tracking-widest text-white bg-blue-600 py-3 px-6 rounded-full text-center hover:bg-blue-700 transition">
                  Ler sobre Probióticos
                </Link>
              </div>
            </div>

            <h2 id="fisiologia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> A Sinergia Intestinal: Como os Simbióticos funcionam no corpo?
            </h2>
            <p>
              A fisiologia humana é incrivelmente hostil com invasores. Para que uma bactéria chegue viva ao seu intestino grosso, ela precisa passar por uma verdadeira tempestade de ácido clorídrico no estômago e por enzimas digestivas fortíssimas no intestino delgado. Imagine que recruta um soldado de elite para uma missão de sobrevivência no deserto e o envia sem uma gota de água ou mantimentos. As probabilidades de sucesso são irrisórias. Da mesma forma, quando consome uma bactéria probiótica isolada, sem ofertar a fibra correta na mesma refeição, grande parte dessas estirpes acaba por perecer antes mesmo de ter a oportunidade de colonizar a sua mucosa intestinal.
            </p>
            <p>
              Ao escolher o consumo de alimentos simbióticos, altera completamente as regras do jogo a seu favor. Envia o soldado de elite já carregando a sua própria reserva inesgotável de mantimentos. As fibras prebióticas, como os fruto-oligossacáridos e a inulina, funcionam como um escudo protetor e um banquete exclusivo. Isto permite que essas bactérias benéficas se estabeleçam com extrema rapidez, superando os microrganismos patogénicos através do princípio de exclusão competitiva. Quando esta mágica acontece, a sua flora começa a produzir metabolitos valiosos, conhecidos como pós-bióticos, sendo o ácido butírico o mais famoso deles, responsável por nutrir as próprias células da parede intestinal e estancar qualquer processo inflamatório em curso.
            </p>

            <blockquote className="my-10 border-l-4 border-green-600 bg-green-50 p-6 md:p-8 rounded-r-3xl shadow-sm">
              <p className="m-0 text-xl md:text-2xl font-black text-green-900 italic leading-relaxed">
                "O simbiótico garante a implantação eficiente das bactérias boas, resultando numa imunomodulação robusta e numa redução sistémica da inflamação invisível."
              </p>
            </blockquote>

            <h2 id="fatores-microbiota" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <AlertCircle className="text-red-500"/> O que afeta e destrói a sua Microbiota Intestinal?
            </h2>
            <p>
              Manter uma população robusta de bactérias boas é um desafio diário. Infelizmente, o estilo de vida moderno ocidental é um verdadeiro campo de batalha para os simbióticos. Existem vilões diários que alteram drasticamente a composição da sua flora, favorecendo o crescimento de patógenos. Veja na tabela interativa abaixo os 5 principais agressores do seu intestino:
            </p>

            <div className="my-10 bg-white border border-slate-200 shadow-xl rounded-[2.5rem] overflow-hidden p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {fatoresMicrobiota.map((fator) => (
                  <div key={fator.id} className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        {fator.icone}
                      </div>
                      <h4 className="font-black text-slate-800 text-lg italic m-0">{fator.nome}</h4>
                    </div>
                    <p className="text-sm text-slate-600 font-medium m-0 leading-relaxed">
                      {fator.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2 id="sintomas-disbiose" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-orange-200 pb-2 flex items-center gap-3">
              <Wind className="text-orange-500"/> Efeitos Colaterais do Desequilíbrio (Disbiose)
            </h2>
            <p>
              Quando os vilões citados acima vencem a batalha e as bactérias patogénicas superam as benéficas, o seu corpo entra num estado clínico chamado de <strong>Disbiose Intestinal</strong>. É nesse momento que a sua digestão trava e o seu corpo começa a acender várias luzes vermelhas de alerta. O desequilíbrio profundo da flora intestinal causa os seguintes efeitos colaterais diretos:
            </p>

            <div className="my-8 bg-orange-50 border border-orange-100 rounded-[2.5rem] p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sintomasDisbiose.map((sintoma) => (
                  <div key={sintoma.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <div className="bg-orange-100 p-2 rounded-full shrink-0">
                      {sintoma.icone}
                    </div>
                    <span className="font-bold text-slate-800 text-base">{sintoma.nome}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 id="emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> O impacto dos Alimentos Simbióticos no Emagrecimento
            </h2>
            <p>
              Uma das dúvidas mais frequentes em consultório é se organizar a dieta para nutrir a microbiota realmente ajuda na balança. A resposta da ciência moderna é um sonoro e absoluto sim. A obesidade e o ganho de peso constante não são apenas questões de calorias ingeridas contra calorias gastas; trata-se de um estado crônico de inflamação e de falha na comunicação hormonal. Quando aposta no consumo de simbióticos, está essencialmente a "hackear" o famoso eixo intestino-cérebro. Bactérias saudáveis, muito bem nutridas por fibras, sinalizam para o seu sistema nervoso central que o corpo está num ambiente de abundância e segurança, diminuindo os níveis basais de cortisol e ansiedade.
            </p>
            <p>
              Além dessa modulação comportamental que ajuda a travar a <Link to="/o-que-e-fome-emocional" className="text-green-600 font-semibold hover:underline">fome emocional</Link>, a fermentação perfeita proporcionada pela refeição simbiótica atua diretamente nas células enteroendócrinas. Elas passam a libertar de forma otimizada as hormonas GLP-1 e PYY na corrente sanguínea. Estes péptidos são os grandes mensageiros da saciedade natural, fazendo com que sinta menos necessidade de petiscar doces à tarde e tornando o processo de emagrecimento algo leve e sustentável, libertando-o de vez do terrível <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-semibold hover:underline">efeito sanfona</Link>.
            </p>

            <h2 id="suplementacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Dna className="text-green-600"/> Simbióticos Naturais vs Suplementação: Qual escolher?
            </h2>
            <p>
              A indústria farmacêutica tem investido milhões na formulação de cápsulas simbióticas perfeitas, misturando lactobacilos liofilizados com pó de inulina pura. Estes suplementos possuem um valor clínico inestimável, sendo ferramentas de ouro prescritas por nutricionistas para tratar doentes que acabaram de passar por cirurgias bariátricas, ciclos agressivos de antibióticos ou que sofrem de síndrome do intestino irritável severa. Nessas situações de crise aguda, a carga massiva de milhares de milhões de unidades formadoras de colónias entregues pela cápsula simbiótica é o que garante a repovoação imediata da flora devastada.
            </p>
            <p>
              Contudo, para a imensa maioria das pessoas que procura apenas saúde, longevidade e emagrecimento de qualidade, a farmácia está, na verdade, dentro da própria cozinha. Misturar uma fonte rica em probióticos vivos com alimentos in natura lotados de fibras prebióticas não só é absurdamente mais barato, como expõe o seu corpo a uma matriz alimentar muito mais rica, contendo vitaminas, minerais e polifenóis antioxidantes que nenhuma cápsula de plástico consegue imitar. Criar a sua própria tigela simbiótica é o ápice da medicina do estilo de vida.
            </p>

            <h2 id="beneficios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Shield className="text-green-600"/> Benefícios Sistémicos de consumir Pre e Probióticos juntos
            </h2>
            <p>
              A beleza desta combinação transcende a barriga lisa e o fim do estufamento indesejado que costumamos sentir após uma refeição pesada. Quando garantimos a sinergia entre o prebiótico e o probiótico, conseguimos restaurar as chamadas "tight junctions" — as junções celulares apertadas da parede do intestino. Isto significa que as toxinas diárias que ingerimos através de corantes, conservantes e poluição deixam de vazar indiscriminadamente para a nossa corrente sanguínea. Este bloqueio imediato das toxinas promove uma clareza mental surpreendente, alívio na fadiga crónica, melhora na textura e acne da pele, e claro, o controlo otimizado do perfil glicémico, o que torna as suas dúvidas sobre <Link to="/quantas_frutas_posso_comer" className="text-green-600 font-semibold hover:underline">quantas frutas comer por dia</Link> uma questão muito mais leve e sem fobias alimentares desnecessárias.
            </p>

            <h2 id="experimentos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> A Ciência na Prática: Experimentos com Simbióticos
            </h2>
            <p>
              Para compreender a verdadeira magnitude do poder dos simbióticos, é essencial observarmos os resultados de testes clínicos rigorosos documentados na literatura médica recente. Em investigações focadas no desenvolvimento do sistema imunitário infantil, ensaios clínicos com dupla ocultação e aleatorizados revelaram descobertas fascinantes. Como detalhado numa <a href="https://www.scielo.br/j/rpp/a/9khJ3qMb8VbyFPDycvHDK6b/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">revisão científica sobre a prevenção de doenças alérgicas</a>, os investigadores notaram que a administração combinada de prebióticos (como fruto-oligossacáridos e galacto-oligossacáridos) em conjunto com estirpes probióticas foi capaz de modular profundamente a microbiota de bebés desde os primeiros meses de vida. Esta intervenção nutricional precoce com simbióticos reduziu de forma drástica a incidência de condições como a dermatite atópica, comprovando que a sinergia entre bactérias e fibras atua como um escudo imunitário natural quando o corpo está na sua fase mais vulnerável de formação.
            </p>
            <p>
              O impacto terapêutico desta união vai muito além da prevenção pediátrica, mostrando-se um verdadeiro salva-vidas em cenários hospitalares de altíssima complexidade. Conforme documentado num estudo detalhado sobre o <a href="https://share.google/ZqKA6oueGUWqsioaB" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">uso terapêutico dos simbióticos</a>, ensaios clínicos que avaliaram o período perioperatório de cirurgias de grande porte — como resseções de cancro do esófago e procedimentos hepáticos severos — revelaram uma recuperação surpreendente dos doentes. A introdução de compostos simbióticos antes e após as cirurgias reduziu drasticamente as taxas de complicações infeciosas pós-operatórias. Os dados revelaram que a suplementação restaurou a integridade da barreira intestinal, frequentemente devastada pelo stresse cirúrgico e por antibióticos, além de reequilibrar a produção de ácidos orgânicos vitais na flora biológica. Tais experiências atestam de forma categórica que nutrir as bactérias com o seu combustível correto não é apenas um hábito de bem-estar diário, mas sim uma intervenção clínica poderosa capaz de acelerar a cura e proteger a vida humana em situações extremas.
            </p>

            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-slate-200">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="Selo de Qualidade Pingus" 
                            className="w-full h-full object-contain" 
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>🐧</text></svg>";
                            }}
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Liquidificador Portátil <span className="text-green-700">Mix Pro</span>
                        </h4>
                        
                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                                src={`${githubImgBase}Afiliado/Liquidificador.JPG`} 
                                alt="Liquidificador Portátil recarregável para preparar vitaminas simbióticas" 
                                className="w-full h-auto" 
                                onError={(e) => {
                                  e.target.onerror = null; 
                                  e.target.src="https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=400";
                                }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            A melhor forma de criar um simbiótico perfeito de absorção imediata é batendo o seu Kefir ou Iogurte com frutas ricas em fibras (como banana verde ou maçã com casca). Para quem leva uma rotina super agitada, o <strong>Liquidificador Portátil Recarregável (USB)</strong> é uma ferramenta espetacular. Permite-lhe fazer a sua vitamina simbiótica fresquinha no trabalho ou logo após o treino, garantindo a entrega das bactérias 100% vivas e ativas no estômago!
                        </p>
                        
                        <a 
                            href="https://meli.la/link_liquidificador_exemplo" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso! O Pingus agradece o apoio.
                    </p>
                </div>
            </div>

            <div id="lista-simbioticos" className="my-16 bg-slate-50 py-12 px-4 md:px-8 rounded-[3rem] border border-slate-200 shadow-inner">
              <div className="text-center mb-12">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
                  Guia Prático e Delicioso
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-6">
                  12 Combinações <span className="text-green-600">Simbióticas</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                  Não complique o que a natureza desenhou com tanta perfeição. Aqui estão 12 ideias maravilhosas para criar refeições simbióticas imbatíveis na sua própria casa, juntando a bactéria ideal com a sua fonte de fibra e saúde favorita.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {simbioticosDados.map((item) => {
                    const IconeComponente = item.Icone;
                    return (
                      <div 
                        key={item.id} 
                        className="group relative bg-slate-50 rounded-[2rem] p-6 border border-slate-100 hover:border-green-300 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                            <IconeComponente className={`w-6 h-6 ${item.corIcone}`} />
                          </div>
                          <span className="bg-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full group-hover:bg-green-200 group-hover:text-green-800 transition-colors">
                            {item.tipo}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-black text-slate-800 mb-3 italic">
                          {item.nome}
                        </h3>
                        
                        <p className="text-sm text-slate-600 font-medium leading-relaxed mt-auto">
                          {item.descricao}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Aprofunde-se: A Arte da Combinação Alimentar
            </h2>
            <p>
              A adoção de uma rotina verdadeiramente saudável deve ser, acima de tudo, prática e aplicável na correria dos seus dias. Este vídeo curto resume com maestria como a simples união e combinação de alimentos específicos altera rapidamente e diretamente a resposta imunitária do seu microbioma, comprovando de forma lúdica o porquê da sinergia simbiótica ser considerada o grande caminho do futuro da medicina do estilo de vida.
            </p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight">Saúde Intestinal em Prática</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/1sISguPDlhY" 
                  title="Vídeo sobre Saúde Intestinal e Combinação" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre Simbióticos
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

        <ArtigosRecomendados currentPath={pathname} />

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
              Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando a construir uma relação mais leve e sem radicalismos com a comida, cuidando do corpo desde o intestino até a mente.
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
