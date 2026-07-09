import React, { useEffect } from 'react';
import { useLocation } from 'react-serif-dom';
import { Calculator, Activity, Info, CheckCircle2, User, HeartPulse, ShieldCheck, Sparkles, Flame, Dumbbell, Percent, CreditCard, Tag, Video, GitBranch, Target, Layers } from 'lucide-react';

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

  // 🔗 Link oficial do seu checkout Hotmart
  const linkCheckoutHotmart = "https://pay.hotmart.com/D106679715Y";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Planilha Antropométrica Inteligente PRO",
        "url": "https://nutricaocommarco.com.br/planilha-antropometrica-marco-aurelio",
        "description": "Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.",
        "image": capaImg,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BRL",
          "price": "50.00",
          "availability": "https://schema.org/InStock"
        },
        "author": {
          "@type": "Person",
          "name": "Marco Aurélio Jr."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 container mx-auto max-w-5xl text-left">
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col gap-8 md:gap-12">

          {/* INTRODUÇÃO / HERO */}
          <article className="prose prose-base md:prose-lg max-w-none text-left w-full">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 md:mb-6">
              Cineantropometria • Automação Avançada • Padrão ISAK
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-10 uppercase italic leading-tight text-slate-900">
              Transforme o Excel no seu Software de <span className="text-green-600">Avaliação Antropométrica</span>
            </h1>

            {/* Imagem de Capa do Produto */}
            <figure className="mb-8 flex flex-col items-center">
              <img 
                src={capaImg} 
                alt="Capa Oficial da Planilha Antropométrica Inteligente PRO" 
                title="Planilha Antropométrica Inteligente PRO"
                className="w-full max-w-2xl h-auto rounded-3xl shadow-lg border border-slate-100" 
              />
            </figure>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Se você busca um system completo, rápido e visualmente impactante para os seus atendimentos de consultório sem ter que ficar preso a mensalidades caras de softwares de nutrição, a <strong>Planilha Antropométrica Inteligente PRO</strong> é a solução definitiva. Desenvolvida sob o rigor científico dos protocolos internacionais e a inteligência de macros automáticas, ela eleva o nível técnico dos seus relatórios e gera uma experiência visual incrível para os seus pacientes.
              </p>
            </div>
          </article>

          {/* SESSÃO DE PREÇO E OFERTA DE LANÇAMENTO */}
          <section className="bg-slate-900 text-white rounded-[2rem] p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-black text-xs px-6 py-2 uppercase tracking-widest rounded-bl-2xl">
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
                  Adquirir Agora (Acesso Vitalício)
                </a>
                <p className="text-slate-500 text-[10px] font-medium mt-2">Pagamento 100% Seguro • Entrega Imediata por E-mail</p>
              </div>
            </div>
          </section>

          {/* DIFERENCIAIS DA PLANILHA */}
          <div className="bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] p-5 sm:p-8 md:p-12 border border-slate-200 shadow-inner">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-8 md:mb-10 border-b border-green-200 pb-4 flex items-center gap-3">
              <Sparkles className="text-green-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/> Diferenciais do Sistema
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <HeartPulse className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Automação Inteligente via VBA</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">A planilha reconhece o sexo do paciente e oculta automaticamente as linhas, colunas e equações irrelevantes para aquele atendimento, mantendo a tela limpa.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <ShieldCheck className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Proteção Total por Senha</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">Sua ferramenta está blindada. As macros trabalham desprotegendo e protegendo as abas em milissegundos para evitar que fórmulas sejam apagadas por acidente.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <Activity className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Mais de 30 Equações de Regressão</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">Todos os principais protocolos da literatura reunidos em um só lugar (Jackson & Pollock, Petroski, Guedes, Durnin, Slaughter, Faulkner, entre outros).</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                <Percent className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Acesso Vitalício Garantido</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">Diga adeus às assinaturas mensais recorrentes. Compre o seu arquivo habilitado para macros uma vez e use de forma vitalícia no seu consultório.</p>
                </div>
              </div>
            </div>

            {/* 🚀 NOVA SEÇÃO: DESENVOLVIMENTO CONSTANTE */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 flex items-center gap-2">
              <GitBranch className="text-orange-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Projeto em Evolução Constante
            </h3>
            <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed font-medium">
              Adquirindo a ferramenta hoje, você garante todas as futuras atualizações e melhorias na sua área de membros **sem custo adicional**. Nosso ecossistema está sendo aprimorado ativamente com os seguintes recursos em breve:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Video className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Vídeos Explicativos Clássicos</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Tutoriais passo a passo em vídeo demonstrando o uso correto das macros e navegação no Excel.</p>
                </div>
              </div>

              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Layers className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Hiper-Filtragem de Regressões</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Aprimoramento do algoritmo VBA para sugerir automaticamente a melhor equação com base na etnia e idade.</p>
                </div>
              </div>

              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Target className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Módulo de Metas Físicas</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Área integrada para estipular metas de perda de gordura ou ganho de massa magra direto no gráfico.</p>
                </div>
              </div>

              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
                <Calculator className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Cálculo de Gasto Calórico</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Integração da matemática de TMB e TDEE (Mifflin, Cunningham, Tinsley) direto no relatório do paciente.</p>
                </div>
              </div>
              
              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100 flex items-start gap-3 sm:col-span-2">
                <Activity className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wide">Relatório Comparativo Avançado</h5>
                  <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">Evolução visual aprimorada comparando dados históricos de perímetros e dobras lado a lado com gráficos dinâmicos de alta definição.</p>
                </div>
              </div>
            </div>

            {/* CONTEÚDO DETALHADO DO RELATÓRIO */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mb-6 flex items-center gap-2">
              <User className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Parâmetros Inclusos no Relatório Atual
            </h3>

            <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Dados Avaliados e Índices Avançados
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Massa Corporal (kg), IMC, Gordura (%), Massa de Gordura (kg), Massa Magra (kg), Massa Muscular (kg), Circunferência da Cintura, Relação Cintura/Estatura, Cintura/Quadril, <strong>IMO</strong> (Massa Óssea), <strong>apVAT</strong> (Área de Gordura Visceral) e Índice Adiposo-Muscular.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Protocolo de Dobras Cutâneas
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Tríceps, Subescapular, Bíceps, Crista Ilíaca, Supra-espinhal, Abdominal, Coxa Média e Panturrilha. Inclui cálculo direto do <strong>Somatório de 6 Dobras</strong> e <strong>Somatório de 8 Dobras</strong>.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Perímetros e Perímetros Corrigidos
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Mapeamento de 9 perímetros corporais: Braço Relaxado, Braço Contraído, Antebraço, Cintura, Abdômen, Quadril, Coxa Máxima, Coxa Média e Perna. Conta também com cálculo de <strong>Perímetros Corrigidos</strong> pelas dobras (Massa Magra Isolada) para Braço, Coxa Média e Perna.
                </p>
              </div>

              <div>
                <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2 uppercase italic text-green-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Somatotipo Integrado
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-1 pl-6 leading-relaxed">
                  Classificação precisa e automatizada dos componentes de <strong>Endomorfia</strong>, <strong>Mesomorfia</strong> e <strong>Ectomorfia</strong> com geração imediata e plotagem do ponto direto no gráfico de Somatocarta.
                </p>
              </div>
            </div>

            {/* 📸 SEÇÃO GALERIA - VISUALIZAÇÃO INTERNA DA PLANILHA */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mb-6 flex items-center gap-2">
              <Activity className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Conheça o Sistema por Dentro
            </h3>
            
            <div className="space-y-6">
              {partesPlanilha.map((img, idx) => (
                <div key={idx} className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    title={img.alt}
                    className="w-full h-auto rounded-xl border border-slate-100" 
                    loading="lazy"
                  />
                  <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-wider text-center">
                    {idx + 1}. {img.alt}
                  </p>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION FINAL */}
            <div className="mt-16 text-center max-w-2xl mx-auto border-t border-slate-200 pt-12">
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 uppercase italic">Garanta seu desconto de lançamento!</h2>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                Aproveite o preço reduzido de <strong>R$ 80,00 por apenas R$ 50,00</strong> (ou em até 2x sem juros) e garanta acesso vitalício a todas as futuras atualizações inclusas.
              </p>
              
              <a 
                href={linkCheckoutHotmart} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-slate-900 hover:bg-green-600 text-white font-black py-5 px-8 rounded-full shadow-xl transform transition-all hover:-translate-y-1 text-base md:text-lg uppercase tracking-widest flex justify-center items-center gap-3"
              >
                Garantir Minha Planilha Inteligente PRO
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
