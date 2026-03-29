import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Shield, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Coffee, Wheat, Flame, Beaker, CheckCircle2, Droplet, Database,
  UtensilsCrossed, Pill, Brain, Wine, Wind, Battery, ShieldAlert, AlertCircle, HeartPulse
} from 'lucide-react';

import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas para SEO
const datePublishedISO = "2026-04-15";
const dateModifiedISO = "2026-04-15";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminho oficial da imagem de capa
const probioticosCapa = `${githubImgBase}Blog/Probioticos.jpg`;

// --- DADOS DAS LISTAS ---
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

const probioticosDados = [
  { id: 1, nome: "Iogurte Natural", tipo: "Lactobacillus", descricao: "A fonte clássica. Certifique-se de que contenha culturas vivas e ativas, sem adição de açúcar.", Icone: Beaker, corIcone: "text-blue-500" },
  { id: 2, nome: "Kefir de Leite", tipo: "Bactérias e Leveduras", descricao: "Uma bebida fermentada potente, com maior diversidade de cepas que o iogurte.", Icone: Droplet, corIcone: "text-slate-500" },
  { id: 3, nome: "Kombucha", tipo: "Chá Fermentado", descricao: "Bebida gaseificada natural feita de chá, rica em bactérias e antioxidantes.", Icone: Coffee, corIcone: "text-amber-700" },
  { id: 4, nome: "Chucrute", tipo: "L. plantarum", descricao: "Repolho fermentado rico em bactérias lácticas. Escolha o não pasteurizado.", Icone: Leaf, corIcone: "text-green-500" },
  { id: 5, nome: "Kimchi", tipo: "Bactérias Lácticas", descricao: "Acompanhamento coreano apimentado, excelente para a saúde metabólica.", Icone: Flame, corIcone: "text-red-500" },
  { id: 6, nome: "Miso", tipo: "Aspergillus oryzae", descricao: "Pasta de soja fermentada tradicional no Japão, ótima para regulação digestiva.", Icone: Database, corIcone: "text-amber-600" },
  { id: 7, nome: "Tempeh", tipo: "Soja Fermentada", descricao: "Substituto de carne rico em proteínas e probióticos da fermentação natural.", Icone: Wheat, corIcone: "text-amber-800" },
  { id: 8, nome: "Natto", tipo: "Bacillus subtilis", descricao: "Soja fermentada japonesa, famosa por ser riquíssima em vitamina K2.", Icone: Activity, corIcone: "text-orange-500" },
  { id: 9, nome: "Picles (Salmoura)", tipo: "Bactérias Lácticas", descricao: "Pepinos fermentados em água e sal (não vinagre) são fontes maravilhosas.", Icone: CheckCircle2, corIcone: "text-green-600" },
  { id: 10, nome: "Kefir de Água", tipo: "Opção Vegana", descricao: "Excelente alternativa aos laticínios, fermentado em água com açúcar.", Icone: Droplet, corIcone: "text-cyan-500" },
  { id: 11, nome: "Queijos Maturados", tipo: "Cepas Sobreviventes", descricao: "Gouda e Parmesão mantêm bactérias ativas que sobrevivem à digestão.", Icone: Shield, corIcone: "text-yellow-500" },
  { id: 12, nome: "Suplemento em Cápsulas", tipo: "UFCs Isoladas", descricao: "Ideais para tratamentos clínicos com cepas perfeitamente dosadas.", Icone: Beaker, corIcone: "text-purple-600" }
];

export default function Probioticos() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Efeito para rolar para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "Qual o melhor horário para tomar probiótico?",
      resposta: "Estudos indicam que o melhor momento para tomar suplementos probióticos é com o estômago vazio (em jejum pela manhã) ou cerca de 30 minutos antes de uma refeição. Isso porque a acidez do estômago está mais baixa e o alimento ingerido em seguida ajudará a 'empurrar' as bactérias mais rapidamente para o intestino, garantindo maior sobrevivência."
    },
    {
      pergunta: "Lactobacillus para que serve exatamente?",
      resposta: "O gênero Lactobacillus compreende bactérias que produzem ácido lático. Eles servem para acidificar o ambiente intestinal (o que inibe bactérias ruins), ajudar na digestão da lactose, reduzir inflamações, prevenir diarreias infecciosas e fortalecer a barreira de proteção do intestino, sendo fundamentais para a sua imunidade."
    },
    {
      pergunta: "Probiótico de farmácia ou manipulado: qual escolher?",
      resposta: "Ambos podem ser excelentes. Os de farmácia são práticos e testados em prateleira. Já os manipulados permitem que o nutricionista ou médico escolha cepas específicas (como Lactobacillus rhamnosus para imunidade ou Bifidobacterium para constipação) nas dosagens exatas para a sua necessidade atual."
    },
    {
      pergunta: "Devo tomar probiótico junto com o antibiótico?",
      resposta: "Sim, é altamente recomendado para evitar a 'diarreia associada a antibióticos'. No entanto, você nunca deve tomar os dois na mesma hora, pois o antibiótico matará o probiótico. Dê um intervalo de pelo menos 2 a 3 horas entre a ingestão do remédio e do seu suplemento probiótico."
    },
    {
      pergunta: "Kefir e Kombucha são suficientes como probióticos?",
      resposta: "Para pessoas saudáveis que buscam manutenção da flora intestinal, sim, os alimentos naturalmente fermentados são fantásticos. Porém, se você está tratando uma disbiose severa, candidíase de repetição ou acabou de sair de um tratamento longo com antibióticos, a suplementação em cápsulas (com contagem de bilhões de UFCs) costuma ser necessária na fase inicial."
    }
  ];

  return (
    <>
      <Helmet>
        {/* SEO OTIMIZADO - TÍTULO DO SNIPPET (aprox 60 caracteres) */}
        <title>O que são Probióticos? Lactobacillus e Benefícios | Nutrição com Marco</title>

        {/* META DESCRIPTION OTIMIZADA (aprox 155 caracteres) */}
        <meta name="description" content="Descubra o que são probióticos e Lactobacillus, para que servem no intestino, seus benefícios para a imunidade e quais as melhores fontes naturais." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="O que são Probióticos? Lactobacillus e Benefícios | Nutrição com Marco" />
        <meta property="og:description" content="Guia completo sobre probióticos: mecanismo de ação, benefícios reais dos Lactobacillus, como suplementar corretamente e lista de alimentos." />
        <meta property="og:image" content={probioticosCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG 1: ARTIGO OTIMIZADO (COM AUTORIDADE E-E-A-T) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O que são Probióticos e para que servem os Lactobacillus?",
            "image": probioticosCapa,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre",
              "jobTitle": "Estudante de Nutrição",
              "knowsAbout": ["Nutrição", "Saúde Intestinal", "Nutrição Clínica", "Microbiota", "Imunidade", "Medicina do Estilo de Vida"]
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
            "description": "Entenda o que são probióticos, para que servem os famosos lactobacillus, e como essas bactérias boas blindam o seu intestino e a sua imunidade."
          })}
        </script>

        {/* SCHEMA.ORG 2: MEDICAL WEB PAGE (AVANÇADO PARA YMYL) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "O que são Probióticos? Lactobacillus, Benefícios e Para Que Servem",
            "url": `https://www.nutricaocommarco.com.br${pathname}`,
            "about": [
              {"@type": "MedicalEntity", "name": "Probiótico"},
              {"@type": "MedicalEntity", "name": "Lactobacillus"},
              {"@type": "MedicalEntity", "name": "Microbiota Intestinal"},
              {"@type": "MedicalEntity", "name": "Disbiose"}
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
                "name": "O que são Probióticos?",
                "item": `https://www.nutricaocommarco.com.br${pathname}`
              }
            ]
          })}
        </script>

        {/* SCHEMA.ORG 4: FAQ PAGE (SINCRONIZADO COM O ARRAY) */}
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
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Clínica</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que são Probióticos? Lactobacillus, Benefícios e Para Que Servem
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que são Probióticos? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                Os probióticos são microrganismos vivos (bactérias e leveduras do bem) que, quando administrados em quantidades adequadas, conferem enormes benefícios à saúde. Ao contrário dos prebióticos (que são o "alimento"), os probióticos são os próprios soldados em ação — como os famosos <em>Lactobacillus</em> e <em>Bifidobacterium</em> — que habitam seu intestino, melhoram a digestão, blindam a imunidade e impedem a proliferação de bactérias patogênicas.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Probioticos.mp3" type="audio/mpeg" />
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

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#fisiologia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Ciência das Bactérias</a></li>
                  <li><a href="#fatores-microbiota" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que afeta a flora?</a></li>
                  <li><a href="#sintomas-disbiose" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Wind size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Sintomas do Desequilíbrio</a></li>
                  <li><a href="#beneficios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Benefícios Práticos</a></li>
                  <li><a href="#recomendacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Doses e Suplementação</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo: Pre vs Probióticos</a></li>
                  <li><a href="#lista-probioticos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Beaker size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Lista Completa</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <p>
              Se no nosso artigo anterior aprendemos detalhadamente <Link to="/o-que-sao-prebioticos" className="text-green-600 font-semibold hover:underline">o que são prebióticos</Link> (o combustível), agora vamos focar nos trabalhadores incansáveis do seu corpo. Os probióticos não são apenas uma tendência do mercado de suplementos; eles são, fisiologicamente, os moradores essenciais da sua microbiota intestinal. Sem essas bactérias vivas e ativas, todo o seu sistema de defesa, digestão e até mesmo o seu humor podem entrar em colapso.
            </p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={probioticosCapa} 
                alt="Pingus, nosso pinguim mascote, segurando e bebendo um frasco gigante de Yakult repleto de probióticos." 
                title="Pingus tomando um Yakult rico em Lactobacillus vivos"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="bg-green-50 p-4 text-center">
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                  Pingus recarregando sua flora intestinal com um verdadeiro banquete de bactérias boas.
                </p>
              </div>
            </div>

            <h2 id="fisiologia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> A Ciência: Como as bactérias boas agem no corpo?
            </h2>
            <p>
              O trato gastrointestinal humano é um ecossistema denso e altamente competitivo. Quando você ingere microrganismos vivos, a primeira grande barreira que eles enfrentam é o suco gástrico ácido do estômago. Aqueles que sobrevivem chegam ao intestino e realizam um processo fascinante chamado "exclusão competitiva". Em termos simples, essas bactérias boas competem ferozmente por espaço e nutrientes com as bactérias causadoras de doenças, não deixando que os patógenos se instalem nas paredes do seu intestino.
            </p>
            <p>
              As cepas mais estudadas e utilizadas na nutrição clínica pertencem aos gêneros <em>Lactobacillus</em> e <em>Bifidobacterium</em>. Ao aderirem à mucosa intestinal, eles não apenas formam uma barreira física de proteção, mas também produzem substâncias bactericidas (como as bacteriocinas) que atacam os invasores de forma direta. É uma linha de defesa crucial, tão importante para o bem-estar quanto entender os <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-semibold hover:underline">hormônios da fome e do emagrecimento</Link> para conseguir controlar o peso corporal sem sofrimento diário.
            </p>

            {/* LINK CRUZADO PARA PREBIÓTICOS */}
            <div className="my-12 p-8 md:p-10 bg-emerald-50 border border-emerald-100 rounded-[3rem] shadow-inner text-left">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-emerald-600 w-8 h-8" />
                <h2 className="text-2xl font-black text-emerald-900 uppercase italic m-0">Você está alimentando seus Probióticos?</h2>
              </div>
              <p className="text-emerald-800 text-lg leading-relaxed mb-6 font-medium">
                Não adianta tomar os melhores probióticos (desta lista) se você não der "comida" para eles sobreviverem no seu intestino. Essa comida são os <strong>Prebióticos</strong>. Se você quer que eles façam efeito, você precisa consumi-los juntos.
              </p>
              <Link 
                to="/o-que-sao-prebioticos" 
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-black uppercase text-sm hover:bg-emerald-700 transition-colors shadow-md w-full md:w-fit justify-center"
              >
                Acesse a Lista de Prebióticos <ChevronRight size={18} />
              </Link>
            </div>
            {/* FIM DO LINK CRUZADO */}
            
            {/* Nova Seção: Fatores que afetam a Microbiota */}
            <h2 id="fatores-microbiota" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <AlertCircle className="text-red-500"/> O que afeta e destrói a sua Microbiota Intestinal?
            </h2>
            <p>
              Manter uma população robusta de bactérias boas é um desafio diário. Infelizmente, o estilo de vida moderno ocidental é um verdadeiro campo de batalha para os probióticos. Existem vilões diários que alteram drasticamente a composição da sua flora, favorecendo o crescimento de patógenos. Veja na tabela interativa abaixo os 5 principais agressores do seu intestino:
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

            {/* Nova Seção: Sintomas da Disbiose */}
            <h2 id="sintomas-disbiose" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-orange-200 pb-2 flex items-center gap-3">
              <Wind className="text-orange-500"/> Efeitos Colaterais do Desequilíbrio (Disbiose)
            </h2>
            <p>
              Quando os vilões citados acima vencem a batalha e as bactérias patogênicas superam as benéficas, o seu corpo entra em um estado clínico chamado de <strong>Disbiose Intestinal</strong>. É nesse momento que a sua digestão trava e o seu corpo começa a acender várias luzes vermelhas de alerta. O desequilíbrio profundo da flora intestinal causa os seguintes efeitos colaterais diretos:
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

            <h2 id="beneficios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Shield className="text-green-600"/> Lactobacillus para que serve? Os Benefícios Reais
            </h2>
            <p>
              Muitas pessoas pesquisam "Lactobacillus para que serve", e a resposta vai muito além de manter o intestino apenas regular. Para combater todos os sintomas de disbiose citados acima, as cepas probióticas são fundamentais no tratamento e prevenção de diarreias infecciosas e no controle da constipação severa. Elas também possuem um papel de imunomodulação comprovado, aumentando a resistência a infecções respiratórias e auxiliando na barreira imunológica do corpo, agindo em sinergia com micronutrientes essenciais, mecanismo que detalhamos ao explicar <Link to="/vitamina_a_para_que_serve" className="text-green-600 font-semibold hover:underline">para que serve a vitamina a</Link>.
            </p>
            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 italic mt-6">
              Além disso, o processo de fermentação gerado por essas bactérias ajuda significativamente na quebra da lactose, aliviando os sintomas em pessoas intolerantes, assim como exploramos ao explicar <Link to="/por_que_o_feijao_da_gases" className="text-green-600 font-semibold hover:underline">por que o feijão dá gases</Link> e como a digestão enzimática pode ser facilitada quando a microbiota está saudável e operante.
            </p>

            <h2 id="recomendacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Doses e Suplementação: Como tomar certo?
            </h2>
            <p>
              Se você decidir usar suplementos probióticos em cápsulas ou sachês, vai se deparar com a sigla UFC (Unidades Formadoras de Colônias). Para que um suplemento tenha eficácia clínica terapêutica, ele geralmente precisa conter de 1 bilhão a 10 bilhões de UFCs viáveis até o momento exato do consumo. A eficácia é totalmente dependente da cepa utilizada: ou seja, um tipo específico de <em>Lactobacillus</em> que trata a imunidade pode não ser o mesmo que resolve a constipação de forma eficaz.
            </p>
            <p>
              Caso você esteja engajado em um alto rendimento esportivo, como se preparar para um <Link to="/nutricao_para_ironman_703" className="text-green-600 font-semibold hover:underline">Ironman 70.3</Link>, a imunomodulação por probióticos é quase obrigatória para prevenir infecções de trato respiratório superior após treinos exaustivos que deprimem o sistema imune.
            </p>
            
            {/* Inicio do Vídeo do Youtube */}
            <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Aprofunde-se: Prebióticos vs Probióticos
            </h2>
            <p>
              Ainda com dúvidas sobre como os verdadeiros 'soldados' do seu intestino agem na prática? Assista a este vídeo curto e super didático da Yakult, que explica de forma visual e direta como os probióticos funcionam, colonizam a sua flora e protegem a sua saúde diariamente.
            </p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight">Como funcionam (Yakult)</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/0ktZQ3IaOR4" 
                  title="Vídeo Yakult: Como funcionam Prebióticos e Probióticos" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* Fim do Vídeo do Youtube */}

            {/* Inicio da Lista Integrada */}
            <div id="lista-probioticos" className="my-16 bg-slate-50 py-12 px-4 md:px-8 rounded-[3rem] border border-slate-200 shadow-inner">
              <div className="text-center mb-12">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
                  Guia Prático
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-6">
                  A Lista Definitiva de <span className="text-green-600">Probióticos</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                  Antes de correr para a farmácia, saiba que a humanidade consome probióticos há milênios através da fermentação. Abaixo, as melhores fontes naturais (e suplementares) para povoar o seu intestino.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {probioticosDados.map((item) => {
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
            {/* Fim da Lista Integrada */}

            {/* AFILIADO MERCADO LIVRE - O PINGUS APROVA */}
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
                            Iogurteira Elétrica <span className="text-green-700">Fazenda em Casa</span>
                        </h4>
                        
                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                                src={`${githubImgBase}Afiliado/Iogurteira.JPG`} 
                                alt="Iogurteira Elétrica para preparo caseiro de probióticos" 
                                className="w-full h-auto" 
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Iogurtes de mercado costumam ser lotados de açúcar, conservantes e têm uma contagem muito baixa de probióticos vivos. Eu indico ter uma <strong>Iogurteira Elétrica</strong> para fazer o seu próprio iogurte 100% natural. É absurdamente mais barato a longo prazo, garante <em>Lactobacillus</em> super frescos e ativos, e é incrivelmente prático de usar.
                        </p>
                        
                        <a 
                            href="https://meli.la/1KZ7JYY" 
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

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre Probióticos
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
