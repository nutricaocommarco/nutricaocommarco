import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  ChevronLeft, HelpCircle, Activity, FileText,
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, AlertTriangle, Droplets, Wind, Waves, Film
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas E-E-A-T
const datePublishedISO = "2026-09-02";
const dateModifiedISO = "2026-09-02";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const capaArtigo = `${githubImgBase}Blog/OQueSaoMicroplasticos_Capa.webp`;

// 🔍 Fontes reais para a Caça aos Microplásticos
const fontesMicroplasticos = [
  { id: 'agua', emoji: '💧', nome: 'Água Engarrafada', fato: 'Um estudo de 2024 da Universidade Columbia e da Rutgers encontrou, em média, 240 mil fragmentos de plástico detectáveis por litro em marcas populares de água engarrafada — cerca de 90% eram nanoplásticos, partículas menores que 1 micrômetro.' },
  { id: 'cha', emoji: '🍵', nome: 'Saquinho de Chá', fato: 'Um estudo da Universidade McGill (2019) descobriu que mergulhar um único saquinho de chá de plástico em água quente libera cerca de 11,6 bilhões de microplásticos e 3,1 bilhões de nanoplásticos em uma única xícara.' },
  { id: 'tabua', emoji: '🔪', nome: 'Tábua de Corte', fato: 'Um estudo de 2023 publicado na Environmental Science & Technology estimou que cortar alimentos em tábuas de plástico pode gerar entre 7,4 e 50,7 gramas de microplástico por ano, dependendo do material da tábua.' },
  { id: 'microondas', emoji: '🔥', nome: 'Recipiente no Micro-ondas', fato: 'Pesquisadores da Universidade de Nebraska-Lincoln (2023) mediram a liberação de até 4,22 milhões de partículas de microplástico e 2,11 bilhões de nanoplásticos por cm² de recipiente, em apenas 3 minutos de aquecimento.' },
  { id: 'sal', emoji: '🧂', nome: 'Sal de Cozinha', fato: 'Um estudo com 39 marcas de sal de 21 países encontrou microplásticos em 36 delas — cerca de 90% das marcas testadas, com maior contaminação no sal marinho.' },
  { id: 'roupas', emoji: '👕', nome: 'Roupas Sintéticas', fato: 'Uma única lavagem de roupas sintéticas, como poliéster e acrílico, pode liberar centenas de milhares de microfibras de plástico na água, que seguem para rios e oceanos.' },
  { id: 'beleza', emoji: '🧴', nome: 'Produtos de Beleza', fato: 'Alguns cosméticos esfoliantes chegam a conter mais de 50 mil partículas de microplástico por grama de produto — motivo pelo qual bans regionais começaram a restringir microesferas plásticas.' },
  { id: 'embalagens', emoji: '📦', nome: 'Embalagens Plásticas', fato: 'Embalagens de alimentos, principalmente em contato com calor, gordura ou acidez, podem liberar micro e nanoplásticos direto na comida — o mesmo mecanismo já comprovado em recipientes de micro-ondas e tábuas de corte.' },
  { id: 'carnes', emoji: '🍖', nome: 'Carnes e Frutos do Mar', fato: 'Animais como peixes, bois e frangos também ingerem microplásticos presentes na água, no solo e na ração — essas partículas podem se acumular nos tecidos e chegar até o prato através da carne e dos frutos do mar.' },
  { id: 'poeira', emoji: '🌫️', nome: 'Poeira Doméstica', fato: 'Estima-se que um adulto inale cerca de 170 partículas de microplástico por dia, boa parte vinda de fibras sintéticas soltas por carpetes, estofados e roupas dentro de casa.' },
];

// 🔍 Card individual da Caça aos Microplásticos, espalhado ao longo do artigo
function CacaCard({ id, dica, revelado, onRevelar }) {
  const fonte = fontesMicroplasticos.find(f => f.id === id);
  if (!fonte) return null;

  return (
    <div className="not-prose my-8">
      {!revelado ? (
        <button
          onClick={() => onRevelar(id)}
          aria-label={`Clique para revelar uma fonte escondida de microplástico: ${fonte.nome}`}
          className="w-full flex items-center gap-4 bg-slate-900 hover:bg-slate-800 border-2 border-dashed border-green-500 hover:border-green-400 rounded-2xl p-5 text-left transition-colors cursor-pointer"
        >
          <span className="text-2xl shrink-0" aria-hidden="true">{fonte.emoji}</span>
          <div>
            <p className="m-0 text-[11px] font-black uppercase tracking-widest text-green-400">🔍 Fonte Escondida</p>
            <p className="m-0 text-sm font-bold text-slate-200">{dica || 'Tem uma fonte escondida por aqui perto. Clique para revelar.'}</p>
          </div>
        </button>
      ) : (
        <div className="w-full flex items-start gap-4 bg-slate-900 border-2 border-green-500 rounded-2xl p-5" aria-live="polite">
          <span className="text-2xl shrink-0" aria-hidden="true">{fonte.emoji}</span>
          <div>
            <p className="m-0 text-[11px] font-black uppercase tracking-widest text-green-400 flex items-center gap-1.5">{fonte.nome} <span aria-hidden="true">✅</span></p>
            <p className="m-0 text-sm text-slate-200 leading-relaxed mt-1">{fonte.fato}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OQueSaoMicroplasticos() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🔎 Caça aos Microplásticos
  const [descobertas, setDescobertas] = useState({});
  const totalDescobertas = Object.values(descobertas).filter(Boolean).length;
  const todasDescobertas = totalDescobertas === fontesMicroplasticos.length;

  const revelarFonte = (id) => {
    setDescobertas(prev => ({ ...prev, [id]: true }));
  };

  const faqs = [
    {
      pergunta: "O que são microplásticos e de onde eles vêm?",
      resposta: "São partículas de plástico com menos de 5 milímetros de diâmetro. Eles podem ser primários (fabricados intencionalmente em tamanho reduzido, como esfoliantes e grânulos industriais) ou secundários (gerados pela degradação de resíduos maiores, como garrafas, sacolas, pneus e tecidos sintéticos)."
    },
    {
      pergunta: "Como os microplásticos entram no corpo humano?",
      resposta: "A entrada ocorre principalmente por três vias: ingestão (pelo consumo de água, peixes, frutos do mar e alimentos contaminados), inalação (pela poeira doméstica e ar contendo fibras sintéticas) e absorção dérmica (em menor escala, através do uso de cosméticos e produtos de higiene)."
    },
    {
      pergunta: "Quais são os principais riscos dos microplásticos para a saúde e a fertilidade?",
      resposta: "Eles atuam como corpos estranhos causadores de estresse oxidativo e inflamação celular, além de transportarem aditivos químicos, como bisfenóis e ftalatos. Essas substâncias são disruptores endócrinos, podendo alterar a produção hormonal, prejudicar a qualidade do sêmen, afetar os óvulos e comprometer a saúde reprodutiva."
    },
    {
      pergunta: "Em quais partes do corpo humano já foram detectados microplásticos?",
      resposta: "Estudos científicos já confirmaram a presença dessas partículas no sangue, pulmões, coração, cérebro, fígado, rins, sistema digestivo, placenta, leite materno, testículos e sêmen, demonstrando sua capacidade de circular e se acumular em diversos órgãos e fluidos corporais."
    },
    {
      pergunta: "Microplásticos podem afetar a saúde mental?",
      resposta: "Pesquisas recentes sugerem uma possível ligação. Um estudo de 2025 na Nature Medicine encontrou concentrações de microplásticos de 3 a 5 vezes maiores no cérebro de pessoas com demência, e estudos em animais associam nanoplásticos a comportamentos do tipo ansioso e depressivo, ligados à neuroinflamação. Compostos químicos dos plásticos, como os ftalatos, também já foram associados a sintomas depressivos em humanos. Ainda são associações, não provas de causa, mas é uma área de pesquisa ativa."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">

      {/* 🔍 Contador flutuante da Caça aos Microplásticos */}
      <div
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl border transition-colors duration-300 ${todasDescobertas ? 'bg-green-600 border-green-500 text-white' : 'bg-slate-900 border-slate-700 text-white'}`}
        aria-live="polite"
      >
        <span aria-hidden="true">{todasDescobertas ? '🎉' : '🔍'}</span>
        <span className="text-[11px] font-black uppercase tracking-widest whitespace-nowrap">
          {todasDescobertas ? 'Achou todas!' : `Caçada: ${totalDescobertas}/${fontesMicroplasticos.length}`}
        </span>
      </div>

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
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Clínica</span>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 Principal (SEO) */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que São Microplásticos? Como Eles Afetam Sua Saúde e Fertilidade
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA - FEATURED SNIPPET GEO/AIO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: O Que São Microplásticos?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              Microplásticos são fragmentos de plástico entre 1 micrômetro e 5 milímetros, classificados em primários (fabricados já pequenos, como esfoliantes) e secundários (fruto da degradação de plásticos maiores). Eles entram no corpo humano por ingestão, inalação e, em menor escala, absorção dérmica, já foram detectados no sangue, cérebro, coração e até na placenta, e estão associados a estresse oxidativo, inflamação e disrupção hormonal que pode afetar a fertilidade.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/O_Que_Sao_Microplasticos.mp3" type="audio/mpeg" />
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
                  <li><a href="#definicao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Droplets size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Que São Microplásticos</a></li>
                  <li><a href="#ocorrencia" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Waves size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Ocorrência Ambiental</a></li>
                  <li><a href="#entrada-corpo" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Wind size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como Entram no Corpo</a></li>
                  <li><a href="#fertilidade" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Fertilidade Humana</a></li>
                  <li><a href="#doencas-mentais" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Microplásticos e Doenças Mentais</a></li>
                  <li><a href="#dicas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />5 Dicas Para Reduzir</a></li>
                  <li><a href="#tabela" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Interferência na Humanidade</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO OTIMIZADA */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                <source media="(max-width: 480px)" srcSet={`${capaArtigo}?w=400&strip=all&quality=70`} />
                <source media="(max-width: 768px)" srcSet={`${capaArtigo}?w=600&strip=all&quality=70`} />
                <source media="(max-width: 1024px)" srcSet={`${capaArtigo}?w=800&strip=all&quality=85`} />
                <ImagemOtimizada
                  src={`${capaArtigo}?w=1280&strip=all&quality=85`}
                  alt="Pinguim Píngus, em estilo Disney Pixar 3D, sentado sobre uma pilha de lixo plástico colorido ao ar livre, segurando um pedaço de plástico que se desfaz em pequenos fragmentos nas mãos."
                  title="O Que São Microplásticos e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                Invisíveis a olho nu, mas presentes em quase tudo que consumimos.
              </p>
            </figcaption>
          </figure>

          {/* 🔍 EXPLICAÇÃO DA CAÇA AOS MICROPLÁSTICOS */}
          <div className="not-prose mb-10 p-5 md:p-6 bg-slate-900 rounded-3xl border border-slate-700 flex items-start gap-4">
            <span className="text-2xl shrink-0" aria-hidden="true">🔍</span>
            <p className="m-0 text-sm md:text-base text-slate-200 leading-relaxed">
              <strong className="text-white">Caça aos Microplásticos:</strong> escondemos {fontesMicroplasticos.length} cards com fontes reais de microplástico ao longo deste artigo. Sempre que encontrar um card com a lupa 🔍, clique para revelar o dado científico por trás dele. Acompanhe sua contagem no cantinho da tela.
            </p>
          </div>

          {/* 📝 INTRODUÇÃO */}
          <p className="mb-4">
            <strong>O que são microplásticos?</strong> São pequenos fragmentos ou partículas plásticas que possuem dimensões reduzidas, compreendidas no intervalo de 1 micrômetro (µm) até 5 milímetros (mm) de diâmetro. Invisíveis na maior parte das vezes, essas partículas já foram encontradas em quase todo lugar — da água que bebemos ao sangue que corre nas nossas veias.
          </p>

          <h2 id="definicao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Droplets className="text-green-700" /> O Que São Microplásticos: Definição e Classificação
          </h2>
          <p className="mb-4">
            Essas partículas são classificadas principalmente em duas categorias conforme a sua origem:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-3">
            <li><strong>Microplásticos Primários:</strong> são manufaturados intencionalmente em tamanho reduzido para atender a aplicações específicas. Estão presentes em produtos de higiene pessoal e cosméticos (como esfoliantes), matérias-primas industriais em formato de pellets (grânulos pré-produção) e certos revestimentos.</li>
            <li><strong>Microplásticos Secundários:</strong> resultam do processo de fragmentação e degradação física, química ou biológica de resíduos plásticos maiores lançados no meio ambiente (como sacolas, garrafas PET, tecidos sintéticos, resíduos de pneus e filmes plásticos agrícolas). Fatores como a radiação ultravioleta (UV), a ação mecânica das ondas, o atrito e as variações de temperatura aceleram a quebra dessas estruturas plásticas em partes progressivamente menores.</li>
          </ul>

          <CacaCard id="beleza" dica="Um exemplo clássico de microplástico primário está no seu armário de banheiro." revelado={!!descobertas.beleza} onRevelar={revelarFonte} />

          <h2 id="ocorrencia" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Waves className="text-green-700" /> Ocorrência Ambiental e Impactos
          </h2>
          <p className="mb-4">
            Apresentando grande diversidade de formatos, como fibras, fragmentos, filmes, esferas e espumas, os microplásticos tornaram-se poluentes onipresentes. Eles são transportados facilmente por correntes de ar e pela água, sendo encontrados em ecossistemas aquáticos (rios, lagos e oceanos, da superfície às fossas abissais), nos solos e na atmosfera. Em ambientes internos, por exemplo, a poeira doméstica costuma conter altas concentrações de fibras têxteis sintéticas provenientes do desgaste de roupas e estofados.
          </p>
          <p className="mb-4">A preocupação ambiental e sanitária com os microplásticos decorre de três pilares principais:</p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-3">
            <li><strong>Ingestão e Danos Físicos:</strong> organismos aquáticos e terrestres (de zooplâncton e peixes a tartarugas e aves marinhas) frequentemente confundem os microplásticos com alimento. A ingestão pode causar bloqueios no trato gastrointestinal, lesões nas brânquias, falsa sensação de saciedade e efeitos citotóxicos.</li>
            <li><strong>Vetores Químicos (Adsorção de Contaminantes):</strong> devido à sua superfície hidrofóbica e alta razão área/volume, as partículas de microplásticos atuam como verdadeiras "esponjas químicas". Elas retêm e transportam poluição química presente na água, incluindo metais pesados e contaminantes orgânicos persistentes (como PCBs e pesticidas).</li>
            <li><strong>Exposição Humana:</strong> os microplásticos ingressam na cadeia alimentar humana pelo consumo de frutos do mar, água envasada ou da rede, sal, mel, bebidas e pela inalação da poeira suspensa no ar. Estima-se uma exposição contínua por via oral e respiratória, tornando o estudo de seus impactos fisiológicos e toxicológicos a longo prazo uma das áreas mais urgentes da química ambiental moderna.</li>
          </ul>

          <CacaCard id="embalagens" dica="A embalagem que guarda seu lanche pode estar liberando mais do que você imagina." revelado={!!descobertas.embalagens} onRevelar={revelarFonte} />

          <h2 id="entrada-corpo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Wind className="text-green-700" /> Como os Microplásticos Entram no Corpo Humano?
          </h2>
          <p className="mb-4">
            A entrada ocorre principalmente por três vias. Pela <strong>ingestão</strong>, através do consumo de água, frutos do mar, sal, mel e bebidas — estudos estimam uma exposição de aproximadamente 0,1 a 5 gramas de microplástico por pessoa, por semana, vindo da alimentação. Pela <strong>inalação</strong>, um adulto respira cerca de 170 partículas de microplástico por dia, principalmente de poeira doméstica e fibras sintéticas suspensas no ar — os efeitos dessa via ainda são pouco conhecidos e seguem sendo estudados. E, em menor escala, pela <strong>absorção dérmica</strong>, através do uso de cosméticos e produtos de higiene que contêm partículas plásticas.
          </p>

          <CacaCard id="agua" dica="Falando em ingestão: aquela garrafinha na sua mesa pode ser uma das maiores fontes do dia." revelado={!!descobertas.agua} onRevelar={revelarFonte} />

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Vale o contexto:</strong> a Organização Mundial da Saúde avaliou, em revisão sobre microplásticos na água potável, que o risco à saúde humana nos níveis atuais de exposição "parece ser baixo" — mas reforça que a base de evidências ainda é limitada e mais pesquisa é necessária. Isso não significa ausência de risco, mas ajuda a colocar o tema em perspectiva, sem alarmismo.</p>
          </div>

          <CacaCard id="poeira" dica="E sobre a inalação: tem uma fonte bem perto de você agora, dentro de casa." revelado={!!descobertas.poeira} onRevelar={revelarFonte} />

          <h2 id="fertilidade" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <AlertTriangle className="text-green-700" /> Microplásticos e a Fertilidade Humana
          </h2>
          <p className="mb-4">
            Os microplásticos interferem na fertilidade humana principalmente por meio de desregulação endócrina, <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold underline">estresse oxidativo e inflamações</Link> no sistema reprodutor. Ao entrarem no organismo, essas partículas liberam compostos químicos como bisfenóis e ftalatos, afetando a via de sinalização dos hormônios sexuais.
          </p>
          <p className="mb-4">
            No sistema masculino, a exposição gera danos testiculares e estresse oxidativo, fragmentando o DNA do esperma e reduzindo a contagem e a motilidade dos espermatozoides. No sistema feminino, prejudica a maturação dos óvulos, a qualidade folicular e a receptividade do endométrio. Essa combinação de alteração hormonal e danos celulares compromete a fertilidade e aumenta os riscos na implantação embriológica.
          </p>
          <div className="my-10 p-6 md:p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <Film className="text-orange-700 shrink-0" size={22} />
              <h3 className="text-lg md:text-xl font-black text-orange-800 uppercase italic m-0">Indicação de Documentário</h3>
            </div>
            <p className="text-orange-900 font-medium mb-5 leading-relaxed">
              <strong>Detox de Plástico</strong> (Netflix, 2026). Sintomas estranhos, infertilidade sem explicação — seis casais diminuem o uso de plásticos enquanto tentam engravidar neste documentário fascinante.
            </p>
            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-slate-900 mb-5">
              <YouTubeLazy videoId="Esd8PEWlt9w" title="The Plastic Detox | Official Trailer | Netflix" />
            </div>
            <a href="https://www.netflix.com/br/title/82074244" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-800 font-black uppercase text-xs underline">
              Assistir na Netflix <Film size={14} />
            </a>
          </div>

          <div className="my-10 p-6 md:p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Film className="text-blue-700 shrink-0" size={22} />
              <h3 className="text-lg md:text-xl font-black text-blue-800 uppercase italic m-0">Outra Indicação de Documentário</h3>
            </div>
            <p className="text-blue-900 font-medium mb-5 leading-relaxed">
              <strong>Feitos de Plástico</strong> (Prime Video, 2024). A jornalista científica Ziya Tong investiga a presença de microplásticos em nosso corpo, testando a si mesma, sua comida e sua própria casa em busca de respostas.
            </p>
            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-slate-900 mb-5">
              <YouTubeLazy videoId="9cbKuGDEjVk" title="Feitos de Plástico (Trailer) - 14ª Mostra Ecofalante de Cinema" />
            </div>
            <a href="https://www.primevideo.com/-/pt/detail/Feitos-de-Pl%C3%A1stico/0GTO3J0NFMZJ7KU8CAPPI2SKGV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-800 font-black uppercase text-xs underline">
              Assistir na Prime Video <Film size={14} />
            </a>
          </div>

          <CacaCard id="carnes" dica="A cadeia alimentar também é uma rota de entrada — e não é só peixe." revelado={!!descobertas.carnes} onRevelar={revelarFonte} />

          <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> Em Quais Partes do Corpo Já Foram Encontrados Microplásticos?
          </h2>
          <p className="mb-4">
            Estudos científicos já confirmaram a presença dessas partículas no <strong>sangue, pulmões, coração, cérebro, fígado, rins, sistema digestivo, placenta, leite materno, testículos e sêmen</strong>, demonstrando sua capacidade de circular e se acumular em diversos órgãos e fluidos corporais. Um estudo publicado no New England Journal of Medicine em 2024 encontrou micro e nanoplásticos em placas de artérias carótidas de 58% dos pacientes analisados — e quem tinha essas partículas apresentou risco 4,5 vezes maior de infarto, AVC ou morte ao longo do acompanhamento.
          </p>
          <p className="mb-4">
            A presença de microplásticos no <Link to="/o-que-sao-probioticos" className="text-green-700 font-bold underline">sistema digestivo</Link> também levanta perguntas sobre seus efeitos na microbiota intestinal, enquanto a detecção em placenta e leite materno reforça a importância de conversar sobre exposição a plásticos desde a <Link to="/alimentacao-saudavel-das-criancas" className="text-green-700 font-bold underline">alimentação infantil</Link>, já nos primeiros anos de vida.
          </p>

          <CacaCard id="sal" dica="Até um item bem básico da sua cozinha entra nessa lista." revelado={!!descobertas.sal} onRevelar={revelarFonte} />

          <h2 id="doencas-mentais" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <AlertTriangle className="text-green-700" /> Microplásticos e Doenças Mentais: O Que Diz a Ciência
          </h2>
          <p className="mb-4">
            Além dos efeitos físicos e hormonais, uma linha de pesquisa mais recente investiga se os microplásticos também afetam a saúde mental e o funcionamento do cérebro. Em 2025, um estudo publicado na revista <em>Nature Medicine</em> analisou tecido cerebral de pessoas falecidas e encontrou, em média, o equivalente a uma colher de chá de micro e nanoplásticos por cérebro — com concentrações de 3 a 5 vezes maiores em indivíduos que tinham diagnóstico de demência. As amostras mais recentes (2024) também apresentaram mais plástico acumulado do que as de 2016, sugerindo aumento da exposição ao longo do tempo. É importante frisar que essa é uma associação, não uma prova de causa — o estudo não mostra que o plástico causa demência, apenas que os dois aparecem juntos com mais frequência do que o esperado, o que justifica mais pesquisa.
          </p>
          <p className="mb-4">
            Estudos em animais ajudam a entender possíveis mecanismos. Uma pesquisa publicada na revista <em>Environment International</em> em 2024 mostrou que camundongos expostos a nanoplásticos de poliestireno desenvolveram comportamento do tipo ansioso, associado à ativação de células de defesa do cérebro (micróglia) e a um processo inflamatório numa via molecular específica. Outros estudos em roedores relacionam a exposição a nanoplásticos com redução da sociabilidade e comportamentos do tipo depressivo, possivelmente ligados à queda nos níveis de dopamina e serotonina — neurotransmissores centrais na regulação do humor.
          </p>
          <p className="mb-4">
            Há também evidência em humanos ligando compostos químicos associados aos plásticos — como os ftalatos, usados para deixar o plástico mais flexível — a sintomas depressivos. Um estudo com adultos americanos publicado na revista <em>Chemosphere</em> em 2023 encontrou associação entre metabólitos urinários de ftalato e maior risco de sintomas depressivos. Resultado semelhante já havia sido descrito em 2016, na revista <em>Environmental Research</em>, num estudo com idosos participantes do NHANES (a grande pesquisa nacional de saúde dos Estados Unidos). Vale destacar que ftalatos são aditivos químicos dos plásticos, não os microplásticos (partículas) em si — mas ambos fazem parte do mesmo cenário de exposição cumulativa ao plástico no dia a dia.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Vale o contexto:</strong> a pesquisa sobre microplásticos e saúde mental ainda é recente e, em grande parte, baseada em estudos com animais ou em associações observacionais em humanos — não em relações de causa e efeito comprovadas. Isso não invalida os achados, mas significa que ainda não é possível afirmar que os microplásticos "causam" ansiedade, depressão ou demência. É uma área de pesquisa ativa que merece atenção, não uma conclusão fechada.</p>
          </div>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Microplásticos e Seus Efeitos no Corpo Humano</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="4Yqe2j2Iw-Q" title="Microplásticos já estão DENTRO de VOCÊ. E agora?" />
            </div>
          </div>

          <CacaCard id="cha" dica="Uma bebida bem comum do dia a dia também esconde uma fonte surpreendente." revelado={!!descobertas.cha} onRevelar={revelarFonte} />

          <h2 id="dicas" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> 5 Dicas Para Reduzir a Quantidade de Microplásticos
          </h2>
          <p className="mb-4">
            Boa parte dessas trocas passa por organizar melhor a rotina na cozinha — se planejar e <Link to="/como-ganhar-tempo-na-cozinha" className="text-green-700 font-bold underline">ganhar tempo cozinhando em casa</Link> torna mais fácil evitar embalagens e recipientes de plástico no dia a dia.
          </p>

          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> 1. Evite esquentar comida em potes de plástico
              </h3>
              <p className="text-slate-600 m-0">Não coloque recipientes plásticos ou filmes PVC no micro-ondas nem despeje alimentos quentes neles, pois o calor acelera a migração de micropartículas e aditivos químicos para a comida.</p>
            </div>

            <CacaCard id="microondas" dica="Essa dica tem um número por trás dela que você provavelmente não esperava." revelado={!!descobertas.microondas} onRevelar={revelarFonte} />

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> 2. Troque as tábuas de corte plásticas por madeira ou bambu
              </h3>
              <p className="text-slate-600 m-0">O atrito contínuo da faca sobre superfícies de plástico racha o material e gera milhões de micropartículas sintéticas diretamente nos alimentos durante o preparo.</p>
            </div>

            <CacaCard id="tabua" dica="Essa mesma dica também rende um dado científico curioso — clique para ver." revelado={!!descobertas.tabua} onRevelar={revelarFonte} />

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500" /> 3. Prefira água filtrada a garrafas PET
              </h3>
              <p className="text-slate-600 m-0">A água envasada em garrafas plásticas descartáveis contém concentrações significativamente maiores de microplásticos e nanoplásticos do que a água da torneira tratada e filtrada em casa (com filtros de carvão ativado ou cerâmica).</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500" /> 4. Opte por roupas de fibras naturais
              </h3>
              <p className="text-slate-600 m-0">Dê preferência a peças feitas de algodão, linho, lã ou seda. Roupas de tecidos sintéticos (como poliéster, náilon e acrílico) soltam fibras plásticas no ar durante o uso e na água a cada lavagem.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> 5. Use aspirador com filtro HEPA e ventile a casa
              </h3>
              <p className="text-slate-600 m-0">Grande parte dos microplásticos inalados vem da poeira doméstica gerada por estofados, carpetes e tecidos sintéticos. Limpar o ambiente com filtro de alta eficiência e manter as janelas abertas reduz a concentração de partículas suspensas no ar.</p>
            </div>
          </div>

          {/* VENDAS DO EBOOK - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>O Pingus Aprova!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para o artigo sobre Microplásticos" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Ebook Receitas <span className="text-green-700">Saudáveis e Nutritivas</span>
                </h3>
                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Reduzir microplásticos começa também na cozinha: menos embalagens, mais <Link to="/o-que-e-dieta-mediterranea" className="text-green-700 font-bold underline">comida de verdade</Link> preparada em casa. O nosso <strong>Ebook de Receitas Saudáveis e Nutritivas</strong> traz opções práticas para você cozinhar mais e depender menos de alimentos ultraprocessados e embalados.
                </p>
                <Link to="/ebook-receitas" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Conhecer o Ebook de Receitas Saudáveis e Nutritivas">
                  <ShoppingCart size={16} />
                  Conheça o Ebook de Receitas Agora
                </Link>
              </div>
            </div>
          </div>

          <CacaCard id="roupas" dica="Falta uma última fonte para completar a caçada — está no seu guarda-roupa." revelado={!!descobertas.roupas} onRevelar={revelarFonte} />

          {/* TABELA COMPARATIVA */}
          <h2 id="tabela" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> O Que São Microplásticos: Sua Interferência na Humanidade
          </h2>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/5">Área Encontrada</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-2/5">Riscos Principais</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-orange-700 bg-orange-50/50 w-2/5">Impactos Principais</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Corpo Humano</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Absorção celular, liberação de aditivos químicos (como bisfenóis) e permanência em tecidos vitais e fluidos corporais.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Queda na fertilidade humana, alteração hormonal, inflamações crônicas e aumento no risco de eventos cardiovasculares.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Ecossistemas Aquáticos</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Ingestão acidental por organismos marinhos, toxicidade química e bioacumulação ao longo da cadeia alimentar.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Perda de biodiversidade, desequilíbrio das populações aquáticas e contaminação de frutos do mar consumidos por humanos.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Solo e Agricultura</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Alteração da microbiota do solo, retenção inadequada de água e degradação de compostos plásticos nas lavouras.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Menor produtividade agrícola, contaminação de plantações de alimentos vegetais e poluição de lençóis freáticos.</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Atmosfera e Ar</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Suspensão e transporte de fibras sintéticas leves por correntes de ar e dispersão em áreas urbanas e rurais.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Inalação contínua de particulados pelo sistema respiratório e deposição de poluentes em ecossistemas remotos via chuva.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE EM CARDS */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { area: "Corpo Humano", riscos: "Absorção celular, liberação de aditivos químicos (como bisfenóis) e permanência em tecidos vitais e fluidos corporais.", impactos: "Queda na fertilidade humana, alteração hormonal, inflamações crônicas e aumento no risco de eventos cardiovasculares." },
              { area: "Ecossistemas Aquáticos", riscos: "Ingestão acidental por organismos marinhos, toxicidade química e bioacumulação ao longo da cadeia alimentar.", impactos: "Perda de biodiversidade, desequilíbrio das populações aquáticas e contaminação de frutos do mar consumidos por humanos." },
              { area: "Solo e Agricultura", riscos: "Alteração da microbiota do solo, retenção inadequada de água e degradação de compostos plásticos nas lavouras.", impactos: "Menor produtividade agrícola, contaminação de plantações de alimentos vegetais e poluição de lençóis freáticos." },
              { area: "Atmosfera e Ar", riscos: "Suspensão e transporte de fibras sintéticas leves por correntes de ar e dispersão em áreas urbanas e rurais.", impactos: "Inalação contínua de particulados pelo sistema respiratório e deposição de poluentes em ecossistemas remotos via chuva." },
            ].map((item) => (
              <div key={item.area} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-green-50 border-b border-green-100 font-black text-green-800 italic text-sm">
                  {item.area}
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-red-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Riscos Principais</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.riscos}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-orange-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Impactos Principais</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.impactos}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão
          </h2>
          <p className="mb-4">
            Os microplásticos deixaram de ser um problema distante do oceano para se tornar parte do nosso cotidiano — da água que bebemos ao sal que temperamos a comida, passando pelo ar que respiramos dentro de casa. A ciência ainda está entendendo toda a extensão dos efeitos na saúde humana, mas as evidências sobre fertilidade, inflamação e risco cardiovascular já são suficientes para justificar precaução. Pequenas trocas no dia a dia, como evitar aquecer comida em plástico e preferir fibras naturais, reduzem exposição sem exigir mudanças radicais.
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Microplásticos (FAQ)
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
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[2000px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                    <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🚀 E-E-A-T (FONTES CIENTÍFICAS E AVISO LEGAL) */}
          <div className="my-12 p-6 bg-slate-100 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Científicas Sobre Microplásticos</h3>
            <ul className="text-xs text-slate-600 leading-relaxed m-0 list-disc pl-4 space-y-1">
              <li><a href="https://www.scielo.br/j/qn/a/VJ58TBjHVqDZsvWLckcFbTQ/?lang=pt" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">MONTAGNER, Cassiana C.; VIDAL, Cassiana C.; ACAYABA, Guilherme R. <em>Microplásticos: ocorrência ambiental e desafios analíticos.</em> Química Nova, v. 44, n. 9, p. 1134-1152, 2021.</a></li>
              <li><a href="https://www.ijhsr.com.br/index.php/ijhsr/article/view/63" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">SILVA, Ana Clara de Oliveira et al. <em>A interferência dos microplásticos na saúde e fertilidade humana.</em> International Journal of Health and Surgical Research, v. 3, n. 2, p. 1-10, 2023.</a></li>
              <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2309822" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">MARFELLA, Raffaele et al. <em>Microplastics and Nanoplastics in Atheromas and Cardiovascular Events.</em> New England Journal of Medicine, 2024.</a></li>
              <li><a href="https://pubs.acs.org/doi/10.1021/acs.est.9b02540" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">HERNANDEZ, Laura M. et al. <em>Plastic Teabags Release Billions of Microparticles and Nanoparticles into Tea.</em> Environmental Science & Technology, 2019.</a></li>
              <li><a href="https://pubs.acs.org/doi/10.1021/acs.est.3c00924" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">Cutting Boards: An Overlooked Source of Microplastics in Human Food? Environmental Science & Technology, 2023.</a></li>
              <li><a href="https://research.unl.edu/blog/nebraska-study-finds-billions-of-nanoplastics-released-when-microwaving-containers/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">HUSSAIN, Kazi Albab et al. <em>Assessing the Release of Microplastics and Nanoplastics from Plastic Containers and Reusable Food Pouches.</em> Environmental Science & Technology, 2023.</a></li>
              <li><a href="https://www.nature.com/articles/s41598-019-46417-z" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">KIM, Ji-Su et al. <em>Global Pattern of Microplastics in Commercial Food-Grade Salts.</em> Environmental Science & Technology, 2018.</a></li>
              <li><a href="https://cdn.who.int/media/docs/default-source/wash-documents/microplastics-in-dw-information-sheet190822.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">WORLD HEALTH ORGANIZATION. <em>Microplastics in Drinking-Water.</em> 2019 (atualizado em 2022).</a></li>
              <li><a href="https://doi.org/10.1038/s41591-024-03453-1" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">NIHART, Alexander J. et al. <em>Bioaccumulation of microplastics in decedent human brains.</em> Nature Medicine, 2025.</a></li>
              <li><a href="https://doi.org/10.1016/j.envint.2024.108543" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">LI, Guanjun et al. <em>Polystyrene microplastics induce anxiety via HRAS derived PERK-NF-κB pathway.</em> Environment International, 2024.</a></li>
              <li><a href="https://doi.org/10.1016/j.chemosphere.2023.139031" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">WANG, Chun-Jui; YANG, Hui-Wen; LI, Meng-Chih. <em>Association between phthalate exposure and the risk of depressive symptoms in the adult population of the United States.</em> Chemosphere, 2023.</a></li>
              <li><a href="https://doi.org/10.1016/j.envres.2015.11.021" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">KIM, Kyoung-Nam et al. <em>Urinary phthalate metabolites and depression in an elderly population: National Health and Nutrition Examination Survey 2005-2012.</em> Environmental Research, 2016.</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-600">Aviso: Este conteúdo tem fim meramente educativo e informativo e não substitui o acompanhamento de um profissional de saúde. A pesquisa sobre efeitos dos microplásticos na saúde humana ainda está em desenvolvimento.</span>
            </div>
          </div>

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* 💳 CARTÃO AUTOR (E-E-A-T) */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <ImagemOtimizada
              src={`${githubImgBase}Liliane_Borges.webp`}
              alt="Liliane Borges - Autora e Colaboradora do Blog Nutrição com Marco"
              title="Liliane Borges - Estudante de Jornalismo"
              className="w-full h-full object-cover"
              priority="low"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Liliane Borges</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Jornalismo • Colaboradora do Blog Nutrição com Marco</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Moradora do Rio de Janeiro, estudante de jornalismo do último ano, entusiasta de história e cultura pop asiática, atualmente estagiando em um blog de nutrição e fotografia esportiva.
            </p>
            <a href="https://instagram.com/asianeewslab" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @asianeewslab
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
