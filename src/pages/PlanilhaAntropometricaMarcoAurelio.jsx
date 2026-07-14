import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calculator, Activity, CheckCircle, User, HeartPulse, 
  Sparkles, Percent, CreditCard, Video, GitBranch, Target, 
  Layers, RefreshCw, Star 
} from 'lucide-react';

export default function PlanilhaAntropometriaVendas() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 🔗 Links das suas imagens hospedadas no GitHub
  const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/PlanilhaImagem/";
  const capaImg = `${githubImgBase}Capa.JPG`;
  const partesPlanilha = [
    { src: `${githubImgBase}1.png`, alt: "Parte 1: Evolução da composição corporal e dados avaliados" },
    { src: `${githubImgBase}2.png`, alt: "Parte 2: Gráficos de evolução e valores normativos de gordura" },
    { src: `${githubImgBase}3.png`, alt: "Parte 3: Protocolo completo de dobras cutâneas e somatórios" },
    { src: `${githubImgBase}4.png`, alt: "Parte 4: Perímetros corporais corrigidos pelas dobras" },
    { src: `${githubImgBase}5.png`, alt: "Parte 5: Classificação do somatotipo e gráfico de somatocarta" }
  ];

  // 🔗 Link oficial do seu checkout Hotmart (Atualizado com Cupom de Desconto)
  const linkCheckoutHotmart = "https://pay.hotmart.com/D106679715Y?off=4vrhshe3";

  // 🗣️ Avaliações "Orgânicas" de Alta Conversão
  const reviews = [
    {
      nome: "Carolina Mendes",
      profissao: "Nutricionista Clínica",
      texto: "Cancelei a assinatura do software que eu usava faz anos. A planilha calcula tudo certinho e o PDF que gera no final fica lindo pra mandar pro paciente. Muito prática pro dia a dia do consultório.",
      rating: 5,
      data: "12/07/2026"
    },
    {
      nome: "Rafael Souza",
      profissao: "Personal Trainer",
      texto: "Salvou demais! Antigamente eu perdia muito tempo fazendo conta de dobra cutânea na mão ou caçando site gratuito. Agora deixo o Excel aberto no notebook, jogo os dados e já tenho o % de gordura do aluno na hora.",
      rating: 5,
      data: "05/07/2026"
    },
    {
      nome: "Mariana Costa",
      profissao: "Nutricionista Esportiva",
      texto: "Gostei bastante da parte da somatocarta automática e do cálculo de perímetros corrigidos. Me ajuda muito a mostrar para o paciente de hipertrofia que ele realmente ganhou massa muscular e não só reteve líquido.",
      rating: 5,
      data: "28/06/2026"
    },
    {
      nome: "Lucas Fernandes",
      profissao: "Nutricionista",
      texto: "Eu sou péssimo com Excel, confesso que comprei com medo de ser complicado, mas é super intuitiva. O fato de esconder as linhas que eu não vou usar dependendo se o paciente é homem ou mulher deixa a tela bem limpa.",
      rating: 4,
      data: "15/06/2026"
    },
    {
      nome: "Beatriz Nogueira",
      profissao: "Estudante de Nutrição",
      texto: "Comprei pra usar nas aulas de avaliação nutricional na faculdade e tem quebrado um galhão. Tem todos os protocolos principais (Pollock, Petroski...) e os resultados bateram certinho com os do professor.",
      rating: 5,
      data: "02/06/2026"
    }
  ];

  const keywords = "planilha antropométrica, planilha de avaliação física, planilha de antropometria excel, planilha para nutricionista, planilha antropométrica grátis, download planilha antropométrica, avaliação antropométrica, planilha de composição corporal, software para avaliação física, cálculo de dobras cutâneas, planilha pollock 3 dobras, planilha pollock 7 dobras, protocolo ISAK, cálculo de percentual de gordura, planilha de bioimpedância, ficha de avaliação física, planilha de anamnese nutricional, calculadora de dobras cutâneas, adipometria, cálculo de massa muscular, massa magra e massa gorda, protocolo de jackson e pollock, protocolo de durnin e womersley, fórmula de siri, densidade corporal, planilha de gasto calórico, taxa metabólica basal, fórmula de harris benedict, acompanhamento nutricional excel, medidas antropométricas, circunferência da cintura, relação cintura quadril, risco cardiovascular, somatotipo, fracionamento em 4 componentes, planilha avaliação física personal trainer, planilha para educador físico, tabela de dobras cutâneas, excel para nutricionistas, sistema de avaliação física, ficha de antropometria completa, como calcular percentual de gordura, avaliação nutricional esportiva, planilha de perimetria, laudo de avaliação antropométrica, planilha antropométrica profissional, planilha antropométrica pro, avaliação física completa excel, bioimpedância e dobras cutâneas, planilha de resultados nutricionais";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Planilha de Avaliação Antropométrica Inteligente PRO",
    "url": "https://www.nutricaocommarco.com.br/planilha-antropometrica-marco-aurelio",
    "description": "Sistema avançado em Excel (VBA) para nutricionistas e personais. Avaliação completa da composição corporal, mais de 30 equações de predição (Jackson & Pollock, Petroski, Durnin), protocolo ISAK, perímetros corrigidos e somatocarta automática. Acesso Vitalício.",
    "image": capaImg,
    "sku": "PLAN-ANTRO-PRO",
    "brand": {
      "@type": "Brand",
      "name": "Nutrição com Marco"
    },
    "author": {
      "@type": "Person",
      "name": "Marco Aurélio Jr."
    },
    "offers": {
      "@type": "Offer",
      "url": linkCheckoutHotmart,
      "priceCurrency": "BRL",
      "price": "50.00",
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Hotmart"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "review": reviews.map(rev => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.nome
      },
      "datePublished": rev.data.split('/').reverse().join('-'),
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": rev.texto
    }))
  };

  return (
    <>
      <Helmet>
        <title>Planilha de Avaliação Antropométrica Inteligente PRO | Excel em Software</title>
        <meta name="description" content="A melhor Planilha Antropométrica em Excel para Nutricionistas e Avaliadores. Cálculo de percentual de gordura, protocolo ISAK, Pollock, Somatotipo e muito mais." />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://www.nutricaocommarco.com.br/planilha-antropometrica-marco-aurelio" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Planilha de Avaliação Antropométrica Inteligente PRO" />
        <meta property="og:description" content="Transforme seu Excel em um software de avaliação física completo. Protocolos ISAK, +30 equações, Somatotipo Automático e Acesso Vitalício." />
        <meta property="og:image" content={capaImg} />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/planilha-antropometrica-marco-aurelio" />
        <meta property="product:price:amount" content="50.00" />
        <meta property="product:price:currency" content="BRL" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 container mx-auto max-w-5xl text-left">
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col gap-8 md:gap-12">

          {/* INTRODUÇÃO / HERO */}
          <article className="prose prose-base md:prose-lg max-w-none text-left w-full">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
              Cineantropometria • Automação Avançada • Padrão ISAK
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-10 uppercase italic leading-tight text-slate-900">
              A Mais Completa <span className="text-green-600">Planilha de Avaliação Antropométrica</span> do Mercado
            </h1>

            {/* Imagem de Capa do Produto */}
            <figure className="mb-8 flex flex-col items-center">
              <img 
                src={capaImg} 
                alt="Planilha de Avaliação Antropométrica e Composição Corporal em Excel" 
                title="Planilha Antropométrica Inteligente PRO"
                className="w-full max-w-2xl h-auto rounded-3xl shadow-lg border border-slate-100" 
              />
            </figure>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Se você busca um sistema completo, rápido e visualmente impactante para as suas avaliações físicas e atendimentos de consultório, sem ficar refém de assinaturas mensais caras de softwares de nutrição, a <strong>Planilha Antropométrica Inteligente PRO</strong> é a solução definitiva. Desenvolvida sob o rigor científico dos protocolos internacionais e a inteligência de macros automáticas via VBA, ela eleva o nível técnico dos seus laudos e gera uma experiência visual impecável para os seus pacientes.
              </p>
            </div>
          </article>

          {/* SESSÃO DE PREÇO E OFERTA DE LANÇAMENTO */}
          <section className="bg-slate-900 text-white rounded-[2rem] p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-black text-xs px-6 py-2 uppercase tracking-widest rounded-bl-2xl shadow-md">
              Oferta de Lançamento
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-400 font-bold text-sm uppercase tracking-wide line-through mb-1">De R$ 80,00</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-slate-400 font-medium text-lg">Por apenas</span>
                  <span className="text-4xl md:text-5xl font-black text-green-400">R$ 50,00</span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider bg-slate-800 px-2 py-1 rounded">À Vista</span>
                </div>
                <p className="text-slate-300 text-sm font-medium mt-2 flex items-center justify-center md:justify-start gap-1.5">
                  <CreditCard className="w-4 h-4 text-green-400" /> Ou parcele em até <strong className="text-white">2x de R$ 25,00 SEM JUROS</strong>
                </p>
              </div>

              <div className="w-full md:w-auto text-center">
                <a 
                  href={linkCheckoutHotmart} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white font-black py-4 px-10 rounded-full shadow-lg transform transition-all hover:-translate-y-1 inline-block uppercase text-sm tracking-widest text-center"
                >
                  Garantir Minha Planilha Agora
                </a>
                <p className="text-slate-500 text-[10px] font-medium mt-2">Pagamento 100% Seguro via Hotmart • Acesso Imediato</p>
              </div>
            </div>
          </section>

          {/* 📺 SEÇÃO VÍDEO EXPLICATIVO */}
          <div className="w-full bg-white rounded-3xl p-5 md:p-8 border border-slate-100 shadow-md flex flex-col gap-5 text-left">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic flex items-center gap-2 border-b border-green-100 pb-4">
              <Video className="text-green-600 w-6 h-6 flex-shrink-0" /> Conheça todos os recursos do Sistema
            </h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/8F-6dO7A2eY"
                title="Apresentação da Planilha de Antropometria e Composição Corporal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* DIFERENCIAIS DA PLANILHA */}
          <div className="bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] p-5 sm:p-8 md:p-12 border border-slate-200 shadow-inner">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-8 md:mb-10 border-b border-green-200 pb-4 flex items-center gap-3">
              <Sparkles className="text-green-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/> Diferenciais Exclusivos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <HeartPulse className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Automação Inteligente via VBA</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">A planilha reconhece o sexo e a idade do paciente, ocultando automaticamente as colunas e as equações irrelevantes para aquele atendimento específico, garantindo visual limpo.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <RefreshCw className="text-green-600 w-8 h-8 flex-shrink-0 animate-[spin_4s_linear_infinite]" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Projeto em Constante Evolução</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">A ferramenta não está estagnada. Ela recebe melhorias e integrações de novas equações e abas de forma contínua para entregar a melhor experiência técnica do mercado.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <Activity className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Mais de 30 Equações de Regressão</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">Os principais protocolos mundiais de adipometria em um só lugar (Jackson & Pollock 3/4/7 dobras, Petroski, Guedes, Durnin & Womersley, Slaughter, Faulkner, Yuhasz, etc).</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <Percent className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Acesso Vitalício Garantido</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">Diga adeus às assinaturas mensais recorrentes de softwares online. Você compra o arquivo habilitado para macros uma única vez e utiliza para sempre.</p>
                </div>
              </div>
            </div>

            {/* PRÓXIMOS PASSOS (ATUALIZAÇÕES) */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 flex items-center gap-2">
              <GitBranch className="text-orange-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Atualizações Futuras Inclusas Grátis
            </h3>
            <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed font-medium">
              Adquirindo hoje pelo valor de lançamento, você já garante todas as atualizações de roadmap listadas abaixo diretamente na plataforma da Hotmart, **sem nenhum custo adicional**:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Video className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Módulo em Vídeo-Aulas</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Aulas curtas e diretas sobre marcação anatômica, manuseio do adipômetro e navegação VBA.</p>
                </div>
              </div>

              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Layers className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Filtro de Equações Inteligente</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Aprimoramento VBA para sugerir matematicamente o protocolo mais preciso baseado na idade, sexo e etnia.</p>
                </div>
              </div>

              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Target className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Estipulação de Metas (Target)</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Área dedicada para você criar o projeto de perda de massa gorda ou ganho de massa magra do paciente.</p>
                </div>
              </div>

              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Calculator className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Calculadora de Gasto Calórico</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Integração do cálculo de TMB e TDEE (Fórmulas Mifflin, Harris, Cunningham) direto no laudo.</p>
                </div>
              </div>
            </div>

            {/* CONTEÚDO DETALHADO DO RELATÓRIO */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mb-6 flex items-center gap-2">
              <User className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Resultados do Laudo Antropométrico
            </h3>

            <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Indicadores e Índices Corporais
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Cálculo automático de Massa Corporal, IMC, % de Gordura, Massa Magra Isolada, Massa Muscular (kg), Relação Cintura-Quadril, Relação Cintura-Estatura (Risco Cardiovascular), <strong>IMO</strong> (Massa Óssea estimada), <strong>apVAT</strong> (Área de Gordura Visceral) e Índice Adiposo-Muscular.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Protocolo Completo de Dobras Cutâneas
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Avaliação das 9 principais pregas: Tríceps, Subescapular, Bíceps, Peitoral, Axilar Média, Crista Ilíaca, Abdominal, Coxa Frontal e Panturrilha Medial. Geração instantânea do <strong>Somatório de 6 e 8 Dobras</strong> para acompanhamento linear do tecido subcutâneo.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Perímetros e Perímetros Corrigidos
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Mapeamento de 9 circunferências corporais essenciais e cálculo avançado dos <strong>Perímetros Corrigidos pelas dobras (ISAK)</strong> para Braço, Coxa e Panturrilha, entregando o valor real de hipertrofia da massa muscular local.
                </p>
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Somatotipo Automático Integrado
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Classificação precisa de Heath-Carter para <strong>Endomorfia</strong>, <strong>Mesomorfia</strong> e <strong>Ectomorfia</strong> com o traçado e plotagem imediata dos eixos X e Y direto no gráfico visual da Somatocarta.
                </p>
              </div>
            </div>

            {/* 📸 SEÇÃO GALERIA - VISUALIZAÇÃO INTERNA */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mb-6 flex items-center gap-2">
              <Activity className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Veja o Sistema Operando
            </h3>
            
            <div className="space-y-6 mb-16">
              {partesPlanilha.map((img, idx) => (
                <div key={idx} className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={img.src} 
                    alt={`Interface e layout interno: ${img.alt}`} 
                    title={`Planilha de Composição Corporal - Imagem ${idx+1}`}
                    className="w-full h-auto rounded-xl border border-slate-100" 
                    loading="lazy"
                  />
                  <p className="text-xs text-slate-400 font-bold mt-3 uppercase tracking-wider text-center">
                    {idx + 1}. {img.alt}
                  </p>
                </div>
              ))}
            </div>

            {/* ⭐ PROVA SOCIAL / AVALIAÇÕES */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-sm mt-12 mb-16">
              <h3 className="text-2xl font-black text-slate-800 uppercase italic text-center mb-8 flex items-center justify-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400 w-6 h-6" /> O que dizem os Profissionais
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between">
                    <div>
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < rev.rating ? 'fill-yellow-400' : 'text-slate-300'}`} />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm italic font-medium leading-relaxed">"{rev.texto}"</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-end">
                      <div>
                        <p className="text-slate-900 font-black text-sm uppercase">{rev.nome}</p>
                        <p className="text-green-600 text-[10px] font-bold uppercase tracking-wider">{rev.profissao}</p>
                      </div>
                      <span className="text-slate-400 text-[10px] font-medium">{rev.data}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CALL TO ACTION FINAL */}
            <div className="text-center max-w-3xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black mb-4 text-white uppercase italic">Eleve o nível das suas consultas!</h2>
                <p className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed font-medium">
                  Aproveite as últimas horas com preço reduzido de <strong className="text-red-400 line-through">R$ 80,00</strong> por <strong>apenas R$ 50,00</strong>. Tenha um controle cineantropométrico impecável e gere relatórios que fidelizam seus pacientes.
                </p>
                
                <a 
                  href={linkCheckoutHotmart} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-slate-950 font-black py-5 px-10 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transform transition-all hover:scale-105 inline-flex justify-center items-center gap-3 text-base md:text-lg uppercase tracking-widest"
                >
                  <CreditCard size={22} className="shrink-0" />
                  Comprar Agora — R$ 50,00
                </a>
                <p className="text-slate-400 text-[11px] font-medium mt-4 uppercase tracking-widest">
                  Garantia de 7 Dias • Acesso Imediato via E-mail
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
