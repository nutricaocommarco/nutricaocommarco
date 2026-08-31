import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  ChevronLeft, HelpCircle, Activity, FileText,
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, BookOpen, AlertTriangle, Stethoscope, Syringe, Scale, Sparkles, Salad, MoveHorizontal
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas E-E-A-T
const datePublishedISO = "2026-08-29";
const dateModifiedISO = "2026-08-29";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const capaArtigo = `${githubImgBase}Blog/AlimentacaoAntiInflamatoriaLipedema_Capa.webp`;

// 🎚️ SLIDER COMPARATIVO ANTES/DEPOIS (arrastável)
function CompareSlider({ comLipedemaSrc, semLipedemaSrc, comAlt, semAlt, label, value, onChange }) {
  const containerRef = useRef(null);
  const draggingRef = useRef(false);
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const applyMode = () => setIsVertical(mq.matches);
    applyMode();
    mq.addEventListener('change', applyMode);
    return () => mq.removeEventListener('change', applyMode);
  }, []);

  const updateFromClient = useCallback((clientX, clientY) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = isVertical
      ? ((clientY - rect.top) / rect.height) * 100
      : ((clientX - rect.left) / rect.width) * 100;
    onChange(Math.min(100, Math.max(0, pct)));
  }, [onChange, isVertical]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return;
      const point = e.touches ? e.touches[0] : e;
      updateFromClient(point.clientX, point.clientY);
    };
    const handleUp = () => { draggingRef.current = false; };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, [updateFromClient]);

  const clipPath = isVertical ? `inset(${100 - value}% 0 0 0)` : `inset(0 ${100 - value}% 0 0)`;
  const handleStyle = isVertical ? { top: `calc(${100 - value}% - 20px)` } : { left: `calc(${value}% - 20px)` };
  const lineStyle = isVertical ? { top: `calc(${100 - value}% - 2px)` } : { left: `calc(${value}% - 2px)` };

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] shadow-lg overflow-hidden">
      <div
        ref={containerRef}
        className={`relative w-full ${isVertical ? 'aspect-[3/4]' : 'aspect-square'} select-none touch-none bg-slate-100 ${isVertical ? 'cursor-ns-resize' : 'cursor-ew-resize'}`}
        onMouseDown={(e) => { draggingRef.current = true; updateFromClient(e.clientX, e.clientY); }}
        onTouchStart={(e) => { draggingRef.current = true; updateFromClient(e.touches[0].clientX, e.touches[0].clientY); }}
      >
        {/* Imagem base: COM lipedema, sempre visível por completo */}
        <img src={comLipedemaSrc} alt={comAlt} className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" draggable={false} />
        <span className={`absolute right-3 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded-full pointer-events-none ${isVertical ? 'top-3' : 'bottom-3'}`}>Com Lipedema</span>

        {/* Imagem revelada: SEM lipedema, recortada pelo clip-path */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath }}>
          <img src={semLipedemaSrc} alt={semAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" draggable={false} />
          <span className="absolute bottom-3 left-3 bg-green-700 text-white text-[10px] font-black uppercase px-2 py-1 rounded-full">Sem Lipedema</span>
        </div>

        {/* Linha e alça do slider */}
        <div className={`absolute pointer-events-none bg-white shadow-lg ${isVertical ? 'inset-x-0 h-1' : 'inset-y-0 w-1'}`} style={lineStyle} />
        <div
          className={`absolute w-10 h-10 bg-white rounded-full shadow-xl border-2 border-green-700 flex items-center justify-center pointer-events-none ${isVertical ? 'left-1/2 -ml-5' : 'top-1/2 -mt-5'}`}
          style={handleStyle}
        >
          <MoveHorizontal size={18} className={`text-green-700 ${isVertical ? 'rotate-90' : ''}`} />
        </div>

        {/* Input de range invisível por cima, para acessibilidade e teclado */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={`Arraste para comparar ${label} com e sem lipedema`}
          className={`absolute inset-0 w-full h-full opacity-0 touch-none ${isVertical ? 'cursor-ns-resize' : 'cursor-ew-resize'}`}
          style={isVertical ? { writingMode: 'vertical-lr', direction: 'rtl' } : undefined}
        />
      </div>
      <p className="text-center text-xs font-black uppercase tracking-widest text-slate-600 py-3">{label} — Arraste para Comparar</p>
    </div>
  );
}

export default function AlimentacaoAntiInflamatoriaLipedema() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [sliderPernas, setSliderPernas] = useState(50);
  const [sliderBracos, setSliderBracos] = useState(50);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🧭 Autoavaliação: Lipedema, Linfedema ou Obesidade?
  const caracteristicas = [
    { id: 'simetria', texto: 'O acúmulo de gordura é simétrico nas duas pernas e poupa os pés', categoria: 'lipedema' },
    { id: 'cacifo', texto: 'Ao pressionar a pele com o dedo, fica uma marca funda que demora a sumir', categoria: 'linfedema' },
    { id: 'dor', texto: 'Sinto dor e faço hematomas com facilidade nas áreas afetadas', categoria: 'lipedema' },
    { id: 'dieta', texto: 'Já fiz dieta com déficit calórico e essa gordura específica não diminuiu', categoria: 'lipedema' },
    { id: 'generalizado', texto: 'O excesso de peso é mais distribuído pelo corpo todo, sem um padrão fixo', categoria: 'obesidade' },
    { id: 'historico', texto: 'Minha mãe ou avó também têm "pernas grossas" que nunca respondem à dieta', categoria: 'lipedema' },
  ];
  const [marcados, setMarcados] = useState({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const toggleCaracteristica = (id) => {
    setMarcados(prev => ({ ...prev, [id]: !prev[id] }));
    setMostrarResultado(false);
  };

  const contagem = caracteristicas.reduce((acc, c) => {
    if (marcados[c.id]) acc[c.categoria] = (acc[c.categoria] || 0) + 1;
    return acc;
  }, {});

  const totalMarcado = Object.values(marcados).filter(Boolean).length;
  const categoriaProvavel = totalMarcado === 0 ? null : Object.entries(contagem).sort((a, b) => b[1] - a[1])[0]?.[0];

  const resultados = {
    lipedema: { titulo: 'Perfil compatível com Lipedema', cor: 'red', texto: 'As características marcadas são as mais associadas ao lipedema na literatura: simetria, preservação dos pés, dor/hematomas fáceis e resistência da gordura à dieta. Isso não é um diagnóstico — procure um angiologista, vascular ou nutrólogo com experiência em lipedema.' },
    linfedema: { titulo: 'Perfil compatível com Linfedema', cor: 'blue', texto: 'A presença do sinal de cacifo (marca que demora a sumir ao pressionar a pele) é característica clássica de linfedema, geralmente ausente no lipedema. Isso não é um diagnóstico — procure um angiologista ou cirurgião vascular.' },
    obesidade: { titulo: 'Perfil mais compatível com Obesidade', cor: 'orange', texto: 'A distribuição de gordura generalizada, sem o padrão simétrico típico do lipedema, é mais compatível com obesidade comum. Isso não é um diagnóstico — um nutricionista ou endocrinologista pode te ajudar a investigar.' }
  };

  const faqs = [
    {
      pergunta: "Lipedema tem cura?",
      resposta: "Não. O lipedema é uma doença crônica e progressiva sem cura estabelecida. O tratamento é de controle: alimentação anti-inflamatória, drenagem linfática, compressão, exercício de baixo impacto e, em casos avançados, cirurgia. O objetivo é reduzir dor, inchaço e progressão, não eliminar a condição."
    },
    {
      pergunta: "Qual a diferença entre lipedema e obesidade?",
      resposta: "São condições distintas com fisiopatologias diferentes: o lipedema não é causado pela obesidade, nem a obesidade é causada pelo lipedema. A principal diferença prática é que a gordura do lipedema é simétrica, poupa os pés, dói ao toque e resiste à dieta e ao exercício — mesmo com déficit calórico, cerca de 95% das pessoas com lipedema não conseguem reduzir a gordura das áreas afetadas. A obesidade responde ao déficit calórico de forma mais previsível. Porém, obesidade e lipedema podem coexistir: aproximadamente metade das pessoas com lipedema também tem obesidade."
    },
    {
      pergunta: "A dieta cetogênica ou anti-inflamatória cura o lipedema?",
      resposta: "Não cura, mas estudos preliminares (a maioria com amostras pequenas) sugerem que dietas com baixo carboidrato e anti-inflamatórias podem reduzir dor, inchaço e melhorar a qualidade de vida em algumas pacientes. O único ensaio clínico randomizado encontrado na literatura teve apenas 13 participantes. É uma abordagem promissora, mas ainda não é uma dieta 'baseada em evidências fortes' — deve ser feita com acompanhamento profissional."
    },
    {
      pergunta: "Tirzepatida trata lipedema?",
      resposta: "Ainda não há aprovação nem estudos clínicos controlados de tirzepatida especificamente para lipedema. O racional é extrapolado de estudos em obesidade e diabetes tipo 2, e alguns médicos usam a medicação off-label. É considerado experimental — qualquer uso deve ser uma decisão médica individualizada, não uma recomendação de tratamento padrão."
    },
    {
      pergunta: "Suplementos curam o lipedema?",
      resposta: "Não. Se a alimentação sozinha já não é suficiente para reverter o lipedema, nenhum suplemento vai fazer isso. Existe evidência limitada para chá verde, L-carnitina e reposição de vitamina D em caso de deficiência comprovada — mas nada disso é cura. Desconfie de protocolos fechados e caros (há relatos de pacotes de R$ 4.000 por mês) vendidos com promessa de cura: isso não tem respaldo científico e é uma prática predatória. Suplementação séria começa com exame de sangue, não com um kit fechado."
    },
    {
      pergunta: "Como saber se é lipedema ou só gordura localizada?",
      resposta: "Sinais que apontam para lipedema: distribuição simétrica nas pernas (e às vezes braços), preservação de mãos e pés, dor e hematomas fáceis ao toque, e resistência da gordura a dietas e exercícios que funcionam para o resto do corpo. O diagnóstico é clínico, feito por um médico (geralmente angiologista ou cirurgião vascular) — não existe exame de sangue específico."
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
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Lipedema</span>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 Principal (SEO) */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Alimentação Anti-Inflamatória para Lipedema: O Que a Ciência Já Sabe
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA - FEATURED SNIPPET GEO/AIO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: Alimentação Anti-Inflamatória Ajuda no Lipedema?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              A <strong>alimentação anti-inflamatória para lipedema</strong> — rica em ômega-3, antioxidantes e pobre em açúcar, ultraprocessados e gorduras trans — é apontada por estudos preliminares como aliada na redução de dor, inchaço e progressão da fibrose, especialmente em protocolos com baixo carboidrato. Não existe dieta que cure o lipedema, mas a reeducação alimentar, associada a drenagem linfática, compressão e acompanhamento médico, é hoje a abordagem conservadora mais recomendada.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Alimentacao_Anti_Inflamatoria_Lipedema.mp3" type="audio/mpeg" />
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
                  <li><a href="#o-que-e" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Stethoscope size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Que é Lipedema</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Lipedema x Linfedema x Obesidade</a></li>
                  <li><a href="#obesidade" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Obesidade e Lipedema</a></li>
                  <li><a href="#alimentacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Salad size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Alimentação Anti-Inflamatória</a></li>
                  <li><a href="#suplementacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Suplementação: Cuidado com Golpes</a></li>
                  <li><a href="#autoavaliacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Sparkles size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Autoavaliação Rápida</a></li>
                  <li><a href="#tirzepatida" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Syringe size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tirzepatida no Lipedema</a></li>
                  <li><a href="#tratamentos" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tratamentos Complementares</a></li>
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
                  alt="Pinguim Píngus vestindo jaleco de nutricionista em estilo Disney Pixar 3D, montando um prato anti-inflamatório colorido com salmão, azeite, frutas vermelhas e vegetais em uma cozinha clara e acolhedora."
                  title="Alimentação Anti-Inflamatória para Lipedema e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                O prato não cura o lipedema, mas pode reduzir a dor e a inflamação que ele carrega.
              </p>
            </figcaption>
          </figure>

          {/* 📝 INTRODUÇÃO */}
          <p className="mb-4">
            A <strong>alimentação anti-inflamatória para lipedema</strong> vem ganhando espaço entre pacientes e profissionais porque a dieta convencional, focada só em déficit calórico, costuma falhar nessa condição: cerca de 95% das pessoas com lipedema não conseguem reduzir a gordura das áreas afetadas mesmo fazendo dieta e exercício. No Brasil, o lipedema atinge aproximadamente 12,3% das mulheres adultas — e ainda é frequentemente confundido com obesidade comum, o que atrasa o diagnóstico e o tratamento correto.
          </p>

          <h2 id="o-que-e" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Stethoscope className="text-green-700" /> O Que é Lipedema
          </h2>
          <p className="mb-4">
            Lipedema é uma doença crônica e progressiva do tecido adiposo subcutâneo, caracterizada pelo acúmulo simétrico e desproporcional de gordura, predominantemente nas pernas e, com menos frequência, nos braços — com preservação típica das mãos e dos pés, o chamado "sinal do manguito". Diferente da gordura comum, a do lipedema envolve inflamação crônica de baixo grau, fibrose progressiva do tecido conjuntivo e fragilidade dos vasos capilares e linfáticos, o que explica a dor, os hematomas fáceis e o inchaço.
          </p>
          <p className="mb-4">
            Há também um componente hormonal importante: o tecido afetado tem predomínio do receptor de estrogênio beta e produção local aumentada de estrogênio, mesmo com exames de sangue normais — por isso a condição costuma surgir ou piorar em transições hormonais como puberdade, gravidez e menopausa, e é quase exclusiva de mulheres.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Estadiamento:</strong> o lipedema é classificado em 3 estágios de gravidade (I: pele normal com nódulos palpáveis; II: pele irregular e endurecida; III: extrusões de pele e gordura, mobilidade reduzida) e em 5 tipos, de acordo com a região do corpo afetada — da pelve aos tornozelos.</p>
          </div>
          <p className="mb-4">
            O componente genético também é forte: cerca de 64% das mulheres com lipedema relatam histórico familiar da condição, sugerindo herança autossômica dominante. Ainda assim, o diagnóstico é essencialmente clínico — feito por exame físico e histórico, já que não existe um exame de sangue específico para confirmar a doença.
          </p>

          {/* 🖼️ COMPARAÇÃO VISUAL EDUCATIVA (SLIDER ARRASTÁVEL) */}
          <h3 className="text-xl font-black text-slate-800 mt-10 mb-4">Como o Lipedema Aparece nas Pernas e nos Braços</h3>
          <p className="mb-6">Arraste a alça para revelar a diferença entre pernas/braços com o padrão característico do lipedema — gordura simétrica e desproporcional, com transição abrupta ("sinal do manguito") — e sem a condição:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <CompareSlider
              comLipedemaSrc={`${githubImgBase}Blog/Lipedema_Pernas_Com.webp`}
              semLipedemaSrc={`${githubImgBase}Blog/Lipedema_Pernas_Sem.webp`}
              comAlt="Ilustração educativa de pernas com padrão característico de lipedema, gordura simétrica desproporcional preservando os pés"
              semAlt="Ilustração educativa de pernas com contorno proporcional típico, sem lipedema, para comparação"
              label="Pernas"
              value={sliderPernas}
              onChange={setSliderPernas}
            />
            <CompareSlider
              comLipedemaSrc={`${githubImgBase}Blog/Lipedema_Bracos_Com.webp`}
              semLipedemaSrc={`${githubImgBase}Blog/Lipedema_Bracos_Sem.webp`}
              comAlt="Ilustração educativa de braços com padrão característico de lipedema, gordura simétrica desproporcional preservando as mãos"
              semAlt="Ilustração educativa de braços com contorno proporcional típico, sem lipedema, para comparação"
              label="Braços"
              value={sliderBracos}
              onChange={setSliderBracos}
            />
          </div>
          <p className="text-xs text-slate-500 italic mb-8">*Imagens ilustrativas geradas para fins educativos — não são fotografias reais de pacientes. Cada caso de lipedema tem apresentação própria; consulte um médico para avaliação individual.</p>

          {/* TABELA COMPARATIVA */}
          <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Scale className="text-green-700" /> Lipedema x Linfedema x Obesidade: Como Diferenciar
          </h2>
          <p className="mb-4">Os três quadros são frequentemente confundidos, mas têm causas e características diferentes. Nenhum é "culpa" de falta de dieta ou disciplina:</p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/4">Critério</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-1/4">Lipedema</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-blue-700 bg-blue-50/50 w-1/4">Linfedema</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-orange-700 bg-orange-50/50 w-1/4">Obesidade</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Distribuição</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Simétrica, poupa mãos e pés</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Pode ser assimétrica</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Generalizada pelo corpo</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Sinal do cacifo</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Geralmente ausente</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Presente</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Não se aplica</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Dor ao toque</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Característica central</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Geralmente ausente</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Não é característica</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Resposta à dieta</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Resistente na área afetada</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Pode melhorar</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Responde ao déficit calórico</td>
                </tr>
                <tr>
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">Sexo mais afetado</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Quase exclusivo mulheres</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Ambos os sexos</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Ambos os sexos</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE EM CARDS */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { criterio: "Distribuição", lipedema: "Simétrica, poupa mãos e pés", linfedema: "Pode ser assimétrica", obesidade: "Generalizada pelo corpo" },
              { criterio: "Sinal do cacifo", lipedema: "Geralmente ausente", linfedema: "Presente", obesidade: "Não se aplica" },
              { criterio: "Dor ao toque", lipedema: "Característica central", linfedema: "Geralmente ausente", obesidade: "Não é característica" },
              { criterio: "Resposta à dieta", lipedema: "Resistente na área afetada", linfedema: "Pode melhorar", obesidade: "Responde ao déficit calórico" },
              { criterio: "Sexo mais afetado", lipedema: "Quase exclusivo mulheres", linfedema: "Ambos os sexos", obesidade: "Ambos os sexos" },
            ].map((item) => (
              <div key={item.criterio} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 font-black text-slate-800 italic text-sm">
                  {item.criterio}
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-red-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Lipedema</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.lipedema}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-blue-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Linfedema</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.linfedema}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-orange-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Obesidade</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.obesidade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="obesidade" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> Obesidade e Lipedema: Como Elas se Relacionam
          </h2>
          <p className="mb-4">
            O lipedema não é causado pela obesidade, nem a obesidade é causada pelo lipedema — são condições distintas, com processos fisiopatológicos próprios. Mas elas frequentemente coexistem: cerca de 50% das pessoas com lipedema também têm obesidade, e um ganho de peso significativo pode funcionar como gatilho para o surgimento ou agravamento dos sintomas do lipedema.
          </p>
          <p className="mb-4">
            Isso cria um ponto de confusão importante no consultório: métodos tradicionais de emagrecimento, como restrição calórica e exercício intenso, costumam funcionar bem para reduzir a gordura da obesidade comum, mas são <strong>largamente ineficazes</strong> para reduzir especificamente a gordura das áreas com lipedema. Um estudo citado na literatura mostrou pacientes que perderam mais de 50 kg após cirurgia bariátrica sem melhora significativa da dor característica do lipedema — a distribuição de gordura do lipedema permaneceu praticamente inalterada.
          </p>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-orange-800 mt-6 mb-6">
            <p className="m-0">Curiosamente, alguns estudos sugerem que mulheres com lipedema podem ter perfil metabólico melhor que mulheres obesas com o mesmo IMC — menor resistência à insulina e melhor perfil lipídico — o que reforça que o lipedema não deve ser tratado apenas como "obesidade que não responde à dieta".</p>
          </div>
          <p className="mb-4">
            Na prática, isso significa que o manejo da obesidade concomitante (quando presente) deve ser tratado como uma condição à parte, com foco em saúde metabólica geral — sem a expectativa de que o emagrecimento, sozinho, vá resolver os sintomas do lipedema. Ferramentas como a <Link to="/relacao-cintura-quadril" className="text-green-700 font-bold hover:underline">relação cintura-quadril</Link> e a <Link to="/avaliacao-antropometrica" className="text-green-700 font-bold hover:underline">avaliação antropométrica completa</Link> ajudam a acompanhar essa distinção ao longo do tempo, algo que a balança sozinha não mostra.
          </p>

          <h2 id="alimentacao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Salad className="text-green-700" /> Alimentação Anti-Inflamatória para Lipedema
          </h2>
          <p className="mb-4">
            Esse é o ponto onde a nutrição realmente entra em cena. A dieta com mais evidência acumulada até hoje é a de baixo carboidrato — incluindo protocolos cetogênicos — mas a Diretriz Alemã S2 (2024), referência internacional, dá recomendação de consenso mais forte para a <Link to="/o-que-e-dieta-mediterranea" className="text-green-700 font-bold hover:underline">dieta mediterrânea</Link> do que para a cetogênica: ou seja, não há um vencedor absoluto, e a melhor dieta é a que a pessoa consegue manter com acompanhamento profissional.
          </p>
          <p className="mb-4">
            Estudos pequenos (a maioria com menos de 50 participantes) associam a redução de carboidratos refinados e o aumento de gorduras anti-inflamatórias à diminuição de dor, inchaço e circunferência das pernas. O único ensaio clínico randomizado encontrado, com apenas 13 mulheres, mostrou redução significativa da dor e melhora da qualidade de vida com dieta low-carb. É um resultado animador, mas ainda é pouca gente — é importante não tratar isso como "cura comprovada".
          </p>

          <h3 className="text-xl font-black text-slate-800 mt-8 mb-4">Alimentos associados a mais inflamação (evitar ou reduzir)</h3>
          <ul className="list-disc pl-5 text-slate-600 marker:text-red-600 mb-8 space-y-2">
            <li>Açúcar, doces e alimentos de alto índice glicêmico</li>
            <li>Ultraprocessados, embutidos e conservas industrializadas</li>
            <li>Gorduras trans (presentes em frituras industriais e produtos de padaria industrializados)</li>
            <li>Óleos vegetais ricos em ômega-6 em excesso (precursores de substâncias pró-inflamatórias)</li>
            <li>Álcool</li>
            <li>Glúten — em um subgrupo com predisposição genética específica (HLA-DQ2/DQ8), mais comum em quem tem lipedema; a retirada deve ser orientada, não generalizada</li>
          </ul>

          <h3 className="text-xl font-black text-slate-800 mt-8 mb-4">Alimentos e compostos anti-inflamatórios (favorecer)</h3>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li>Peixes ricos em ômega-3, como salmão e atum</li>
            <li>Azeite de oliva extra virgem (fonte de tirosol)</li>
            <li>Frutas vermelhas (antocianinas) e uvas (resveratrol)</li>
            <li>Romã (ácido elágico), tomate e goiaba (licopeno)</li>
            <li>Chá verde (catequinas) e gengibre (gingerol)</li>
            <li>Cúrcuma (curcumina) e pimenta-vermelha (capsaicina)</li>
            <li>Vitamina D — a deficiência é frequente em mulheres com lipedema e deve ser investigada com exame de sangue antes de suplementar</li>
          </ul>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-red-800 mt-6 mb-8">
            <p className="m-0 flex items-start gap-2"><AlertTriangle size={18} className="shrink-0 mt-0.5" /><span><strong>Importante:</strong> nenhuma dieta específica é considerada "baseada em evidências fortes" para lipedema até o momento. A conclusão de uma das revisões científicas usadas neste artigo é direta: "não existe uma dieta específica baseada em evidências para pacientes com lipedema". O que existe são sinais preliminares consistentes, especialmente para protocolos anti-inflamatórios e de baixo carboidrato — sempre com acompanhamento de nutricionista.</span></p>
          </div>

          <h2 id="suplementacao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Salad className="text-green-700" /> Suplementação para Lipedema: Cuidado com Promessas de Cura
          </h2>
          <p className="mb-4">
            Se a alimentação sozinha não resolve o lipedema, nenhum suplemento vai resolver. Isso precisa ficar claro antes de qualquer lista: suplementos podem, no máximo, apoiar pontos específicos identificados em exame — eles não substituem diagnóstico, acompanhamento médico nem tratamento conservador.
          </p>
          <p className="mb-4">
            O que a literatura efetivamente cita, com evidência limitada e amostras pequenas: chá verde e L-carnitina, estudados por um possível papel na mobilização de gordura; vitamina D, cuja deficiência é frequente em mulheres com lipedema e cuja reposição (quando há deficiência real, comprovada em exame de sangue) mostrou efeito inibitório sobre inflamação aguda em um estudo; e suplementos adrenérgicos, como 7-Keto-DHEA e ioimbina, propostos para aumentar a queima de gordura, mas com evidência ainda insuficiente para recomendação.
          </p>

          <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 text-red-900 mt-6 mb-8">
            <p className="m-0 flex items-start gap-2 font-bold mb-3"><AlertTriangle size={20} className="shrink-0 mt-0.5" /><span>Fuja de quem promete cura vendendo suplementos caros.</span></p>
            <p className="m-0 text-sm leading-relaxed">
              Existe hoje um mercado de protocolos de suplementação para lipedema vendidos por milhares de reais — casos reais chegam a R$ 4.000 em kits mensais — prometendo resultados que nenhum estudo científico sustenta, incluindo a "cura" da doença. Isso é charlatanismo. Nenhuma combinação de suplementos, por mais cara que seja, reverte a fisiopatologia do lipedema. Sinais de alerta: promessa de cura, protocolo fechado e caro vendido como "exclusivo", pressão para decidir rápido, e ausência de exames prévios justificando cada suplemento prescrito. Suplementação de verdade nasce de uma deficiência comprovada em exame — não de um pacote fechado vendido antes de qualquer avaliação.
            </p>
          </div>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Entenda o Lipedema em Vídeo</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="-S7D0P_3Zsg" title="Você e o Doutor: saiba mais sobre o lipedema" />
            </div>
          </div>

          {/* ELEMENTO INTERATIVO OBRIGATÓRIO — AUTOAVALIAÇÃO */}
          <h2 id="autoavaliacao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Sparkles className="text-green-700" /> Autoavaliação Rápida: Lipedema, Linfedema ou Obesidade?
          </h2>
          <p className="mb-8">Marque as características que você reconhece no seu caso. Isso é apenas um indicativo educativo, <strong>não substitui uma avaliação médica</strong>.</p>

          <div className="my-10 bg-slate-900 border border-slate-800 shadow-2xl rounded-[3rem] overflow-hidden">
            <div className="p-6 md:p-8 text-center border-b border-slate-800">
              <strong className="text-xl md:text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                <Sparkles className="text-green-500" /> Marque o Que se Aplica a Você
              </strong>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              {caracteristicas.map((c) => (
                <button
                  key={c.id}
                  onClick={() => toggleCaracteristica(c.id)}
                  aria-label={`Marcar característica: ${c.texto}`}
                  aria-pressed={!!marcados[c.id]}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    marcados[c.id] ? 'bg-green-950/30 border-green-500' : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center mt-0.5 ${marcados[c.id] ? 'bg-green-600 border-green-600' : 'border-slate-500'}`}>
                    {marcados[c.id] && <CheckCircle2 size={16} className="text-white" />}
                  </span>
                  <span className="text-slate-200 text-sm md:text-base">{c.texto}</span>
                </button>
              ))}

              <button
                onClick={() => setMostrarResultado(true)}
                disabled={totalMarcado === 0}
                aria-label="Ver resultado da autoavaliação"
                className="w-full mt-4 bg-green-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-black uppercase text-sm py-4 rounded-2xl shadow-lg hover:bg-green-800 transition-all cursor-pointer border-none italic"
              >
                Ver Resultado
              </button>
            </div>

            {mostrarResultado && categoriaProvavel && (
              <div className="bg-slate-800 p-6 md:p-8 border-t border-slate-700" aria-live="polite">
                <span className="inline-block bg-slate-700 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-inner mb-4">
                  {resultados[categoriaProvavel].titulo}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed m-0">{resultados[categoriaProvavel].texto}</p>
              </div>
            )}
          </div>

          <h2 id="tirzepatida" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Syringe className="text-green-700" /> Tirzepatida no Manejo do Lipedema
          </h2>
          <p className="mb-4">
            A <Link to="/tirzepatida-para-que-serve" className="text-green-700 font-bold hover:underline">tirzepatida</Link> é um medicamento agonista duplo dos receptores GLP-1 e GIP, hoje aprovado apenas para diabetes tipo 2 e obesidade — <strong>não é aprovado para lipedema</strong>. O interesse no seu uso vem de um racional mecanístico: em outras doenças com inflamação e fibrose, a substância mostrou capacidade de reduzir inflamação e ação antifibrótica, o que teoricamente poderia beneficiar o tecido do lipedema.
          </p>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-red-800 mt-6 mb-6">
            <p className="m-0 flex items-start gap-2"><AlertTriangle size={18} className="shrink-0 mt-0.5" /><span><strong>Não existe, até hoje, nenhum ensaio clínico randomizado testando tirzepatida especificamente em pacientes com lipedema.</strong> Toda a evidência disponível é extrapolada de estudos em obesidade e diabetes (como o SURMOUNT-1, com redução média de 20,9% do peso em 72 semanas). O uso em lipedema é considerado off-label e experimental — uma decisão médica individual, nunca uma recomendação padrão de tratamento.</span></p>
          </div>
          <p className="mb-4">
            Nos estudos em outras populações, os efeitos colaterais mais comuns são náusea (20-25%), diarreia (15-20%) e vômito (5-8%), geralmente leves. Se você e seu médico considerarem essa via, é essencial que a decisão seja tomada com consentimento informado completo sobre a falta de evidência específica para lipedema.
          </p>

          {/* VENDAS DO EBOOK - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>O Pingus Aprova!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para Alimentação Anti-Inflamatória e Lipedema" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Ebook Receitas <span className="text-green-700">Saudáveis e Nutritivas</span>
                </h3>
                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Montar refeições anti-inflamatórias no dia a dia não precisa ser complicado. O nosso <strong>Ebook de Receitas Saudáveis e Nutritivas</strong> reúne receitas práticas ricas em ômega-3, antioxidantes e ingredientes de verdade, pensadas para reduzir açúcar e ultraprocessados sem tornar sua rotina alimentar mais difícil.
                </p>
                <Link to="/ebook-receitas" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Conhecer o Ebook de Receitas Saudáveis e Nutritivas">
                  <ShoppingCart size={16} />
                  Conheça o Ebook de Receitas Agora
                </Link>
              </div>
            </div>
          </div>

          <h2 id="tratamentos" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Tratamentos Complementares ao Lipedema
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> Drenagem linfática e terapia de compressão
              </h3>
              <p className="text-slate-600 m-0">Considerado o pilar do manejo conservador, mesmo em fases iniciais. Combina cuidados com a pele, massagem linfática manual, exercícios e uso de meias ou faixas de compressão. Reduz desconforto e edema, com resposta individual variável.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Exercício físico de baixo impacto
              </h3>
              <p className="text-slate-600 m-0">Hidroginástica, caminhada, ioga e pilates são especialmente recomendados — a atividade aquática se destaca porque a pressão da água ajuda na drenagem e a flutuabilidade reduz a carga sobre as articulações. Exercícios de alto impacto podem piorar os sintomas em alguns casos.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500" /> Cirurgia (lipoaspiração com preservação linfática)
              </h3>
              <p className="text-slate-600 m-0">É o único tratamento consistentemente associado a redução mensurável de volume do membro, mas é invasivo e não trata a inflamação/fibrose de base. Geralmente indicado só após pelo menos 1 ano de tratamento conservador sem melhora, em centros experientes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500" /> Suporte psicológico
              </h3>
              <p className="text-slate-600 m-0">O impacto emocional do lipedema — estigma, frustração com dietas que "não funcionam", imagem corporal — é significativo e reconhecido pelo Consenso Brasileiro de Lipedema. Acompanhamento psicológico e técnicas de manejo do estresse são parte recomendada do cuidado.</p>
            </div>
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão
          </h2>
          <p className="mb-4">
            O lipedema não é falta de força de vontade nem "obesidade que não quer sair" — é uma condição médica real, com base genética, hormonal e inflamatória própria. A alimentação anti-inflamatória não cura, mas é uma das poucas ferramentas com sinal consistente de melhora de dor e qualidade de vida na literatura atual, e deve caminhar junto com drenagem linfática, compressão, exercício de baixo impacto e, sempre que possível, acompanhamento médico e nutricional especializado.
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Alimentação Anti-Inflamatória para Lipedema (FAQ)
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
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Científicas Sobre Lipedema e Alimentação Anti-Inflamatória</h3>
            <ul className="text-xs text-slate-600 leading-relaxed m-0 list-disc pl-4 space-y-1">
              <li>LIMA, J. G.; SOUZA, L. V. M.; ASSIS, M. E. D.; SILVA, M. E. F.; BITTENCOURT, S. G.; DIAS, M. C. <em>Influência da alimentação no tratamento do lipedema.</em> e-Scientia, Belo Horizonte: Centro Universitário de Belo Horizonte (UniBH). ISSN: 1984-7688.</li>
              <li><a href="https://doi.org/10.1590/1677-5449.202301831" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">AMATO, A. C. M.; PECLAT, A. P. R. M.; KIKUCHI, R. et al. <em>Consenso Brasileiro de Lipedema pela metodologia Delphi.</em> Jornal Vascular Brasileiro, 2025;24:e20230183.</a></li>
              <li><a href="https://doi.org/10.55905/rdelosv18.n63-022" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">AMERICANO, J. M.; LOCATELLI, K. M. M.; SILVA, J. L.; AMANCIO, N. F. G. <em>Efeitos de dietas e mudanças de hábitos de vida nos sintomas do lipedema: uma revisão de literatura.</em> Revista DELOS, v.18, n.63, 2025.</a></li>
              <li><a href="https://doi.org/10.3390/ijms262110741" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">VIANA, D. P. C.; INVITTI, A. L.; SCHOR, E. <em>Tirzepatide as a Potential Disease-Modifying Therapy in Lipedema: A Narrative Review.</em> International Journal of Molecular Sciences, 2025;26:10741.</a></li>
              <li><a href="https://doi.org/10.70164/jmbr.v3i2.1150" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">BRISCH, S. V. et al. <em>Tirzepatida no lipedema: evidências clínicas e relação com terapias injetáveis locais.</em> Journal of Medical and Biosciences Research, 2026;3(2):95-105.</a></li>
              <li><a href="https://doi.org/10.34119/bjhrv8n4-118" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">SANTINI, B. C.; BALBO, R.; BORNIA, E. C. S. <em>Abordagens conservadoras no manejo do lipedema: uma revisão bibliográfica.</em> Brazilian Journal of Health Review, v.8, n.4, 2025.</a></li>
              <li><a href="https://doi.org/10.1007/s13679-025-00642-y" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">SANLIER, N.; BALTACI, S. <em>Therapeutic Applications of Ketogenic Diets in Lipedema: A Narrative Review of Current Evidence.</em> Current Obesity Reports, 2025;14:49.</a></li>
              <li><a href="https://doi.org/10.51161/conasm2024/39702" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">CORREA, A. C. D.; GUIMARÃES, Y. S. F. <em>A influência da nutrição no tratamento do lipedema.</em> Revista Multidisciplinar em Saúde, v.5, n.3, 2024.</a></li>
              <li><a href="https://www.instagram.com/lipedemabrasil/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">LIPEDEMA BRASIL. Conteúdo educativo e comunidade de apoio sobre lipedema no Instagram: @lipedemabrasil.</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-600">Aviso Nutricional: Este conteúdo tem fim meramente educativo e informativo e não substitui o diagnóstico ou acompanhamento de um médico, nutricionista ou profissional de saúde qualificado. O lipedema exige avaliação clínica individualizada.</span>
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
              priority="low"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição e Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Especialista em composição corporal e avaliação física, dedicado a traduzir evidência científica em conteúdo acessível para quem busca saúde real, sem modismos.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @nutricao_com_marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
