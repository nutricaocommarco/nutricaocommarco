import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Sparkles, CheckCircle, Activity, Brain, ShieldCheck, 
  Smartphone, BarChart3, Lock, Rocket, ArrowRight, Video, 
  HelpCircle, Check, X, Star, CreditCard
} from 'lucide-react';

export default function SoftwareAvaliacaoAntropometrica() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const appUrl = "https://evaluaos.nutricaocommarco.com.br";
  const logoSoftware = "/Imagens/Afiliado/Logo.jpeg";
  const linkLaudoExemplo = "https://evaluaos.nutricaocommarco.com.br/laudo/e67fbcda-cbef-416e-9d39-33b052bcff0d";
  const linkEvolucaoExemplo = "https://evaluaos.nutricaocommarco.com.br/evolucao/cf5f2d22dd728039c1d8d4a0364e893d";

  const keywords = "software de avaliação antropométrica, sistema de avaliação antropométrica, avaliação antropométrica, software antropometria, avaliação física nutricionista, software isak, laudo antropométrico web, avaliação de composição corporal, somatocarta online";

  const schemaSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EvaluaOS - Software de Avaliação Antropométrica",
    "operatingSystem": "Web Browser, iOS, Android",
    "applicationCategory": "HealthApplication",
    "url": "https://www.nutricaocommarco.com.br/software-de-avaliacao-antropometrica",
    "description": "O mais avançado software de avaliação antropométrica com inteligência para recomendação de equações, fracionamento anatômico de 4 componentes (Kerr), somatotipo de Heath-Carter e laudos web interativos para pacientes.",
    "softwareVersion": "2.0",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "0.00",
      "highPrice": "29.90",
      "offerCount": "2"
    },
    "author": {
      "@type": "Person",
      "name": "Marco Aurélio Jr."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nutrição com Marco"
    }
  };

  const faqs = [
    {
      pergunta: "O que torna o EvaluaOS o melhor software de avaliação antropométrica?",
      resposta: "Ao contrário dos softwares tradicionais que exigem a escolha manual e cega de equações, o EvaluaOS possui uma Engine de Recomendação Científica. Ele analisa as dobras, idade, sexo e perfil do paciente para sugerir as equações mais precisas e justificadas academicamente."
    },
    {
      pergunta: "Preciso pagar para testar o software de avaliação antropométrica?",
      resposta: "Não! O EvaluaOS conta com um Plano Gratuito Vitalício para você testar todas as funcionalidades técnicas, cadastrar até 7 pacientes e realizar até 3 avaliações por paciente, sem precisar cadastrar cartão de crédito."
    },
    {
      pergunta: "Como o meu paciente visualiza o laudo da avaliação antropométrica?",
      resposta: "O software gera um link interativo seguro (Laudo Web Responsivo) formatado perfeitamente para a tela do celular do paciente. Além do laudo, você pode disponibilizar um Painel de Evolução com gráficos temporais comparativos."
    },
    {
      pergunta: "O software segue as diretrizes da ISAK?",
      resposta: "Sim! Toda a metrologia, cálculo do Somatotipo de Heath-Carter, perímetros corrigidos e fracionamento anatômico de 4 componentes (Kerr/Lee/Rocha/Würch) foram desenvolvidos com base nos rigorosos padrões da International Society for the Advancement of Kinanthropometry (ISAK)."
    },
    {
      pergunta: "Posso colocar a minha logomarca própria no laudo?",
      resposta: "Sim! No plano EvaluaOS Pro, você personaliza 100% o laudo web e em PDF com a sua marca própria, cores e contatos do consultório."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Software de Avaliação Antropométrica Científico | EvaluaOS</title>
        <meta name="description" content="Conheça o EvaluaOS, o mais completo software de avaliação antropométrica para nutricionistas e personal trainers. Padrão ISAK, recomendação de equações, 4C Kerr e laudo web responsivo." />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://www.nutricaocommarco.com.br/software-de-avaliacao-antropometrica" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software de Avaliação Antropométrica Científico | EvaluaOS" />
        <meta property="og:description" content="Eleve a precisão das suas avaliações antropométricas com o EvaluaOS. Engine de recomendação científica, fracionamento de 4C, somatocarta e laudos interativos." />
        <meta property="og:image" content={logoSoftware} />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/software-de-avaliacao-antropometrica" />
        <script type="application/ld+json">{JSON.stringify(schemaSoftware)}</script>
      </Helmet>

      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">

        {/* 🚀 1. HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-emerald-50/60 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
            
            {/* LOGO EM DESTAQUE */}
            <div className="flex justify-center items-center pt-2">
              <a href={appUrl} target="_blank" rel="noreferrer" className="group">
                <img 
                  src={logoSoftware} 
                  alt="EvaluaOS - Software de Avaliação Antropométrica" 
                  className="h-36 sm:h-48 md:h-56 w-auto object-contain rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 border-4 border-white" 
                />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Metrologia Científica & Padrão ISAK
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 max-w-5xl mx-auto leading-[1.15] tracking-tight">
              O Mais Completo <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Software de Avaliação Antropométrica</span> do Mercado
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Abandone as escolhas cegas de equações. O <strong>EvaluaOS</strong> é o único <strong>software de avaliação antropométrica</strong> equipado com uma <strong>Engine de Recomendação Científica</strong> que analisa seu paciente e indica as melhores fórmulas para uma <strong>avaliação antropométrica de precisão</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-9 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Experimentar Software Grátis</span>
                <Rocket size={16} />
              </a>
              <a
                href="#laudo-demo"
                className="w-full sm:w-auto px-9 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all text-center"
              >
                Ver Exemplo de Laudo Web
              </a>
            </div>

            {/* BADGES METROLÓGICOS */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-100">
              <div className="p-3.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <span className="block text-lg font-black text-emerald-600">Engine Científica</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Recomendação Guiada</span>
              </div>
              
              <div className="p-3.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <span className="block text-lg font-black text-emerald-600">+60 Equações</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Homens & Mulheres</span>
              </div>

              <div className="p-3.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <span className="block text-lg font-black text-emerald-600">4 Componentes (kg)</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Fracionamento de Kerr</span>
              </div>

              <div className="p-3.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <span className="block text-lg font-black text-emerald-600">ARGOREF & ISAK</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Tabelas Normativas</span>
              </div>
            </div>

          </div>
        </section>

        {/* 🎬 2. VÍDEO TOUR DO SOFTWARE */}
        <section className="pb-16 bg-white relative z-10 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-6">
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                ▶️ Tour Guiado pelo Software de Avaliação Antropométrica
              </span>
            </div>
            
            <div className="p-2 sm:p-4 bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 relative shadow-inner">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/s0VPmv7gkF0?si=Q4lH_24iGjPZ-99O" 
                  title="EvaluaOS - Software de Avaliação Antropométrica Tour Completo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 📱 3. DEMONSTRAÇÃO VIVA DO LAUDO WEB E EVOLUÇÃO */}
        <section id="laudo-demo" className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Experiência Digital sem Igual
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                Laudos e Painel de Evolução Direto no Celular do Paciente
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Sua <strong>avaliação antropométrica</strong> não precisa ser um PDF estático e pesado. O <strong>software EvaluaOS</strong> gera relatórios interativos e responsivos que encantam o paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Card 1: Laudo Web */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform">
                    📄
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded-lg border border-emerald-100">
                      Laudo Web Interativo
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      Laudo da Avaliação Antropométrica
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Apresente a composição corporal em 4C e 2C, gráfico interativo do Somatotipo de Heath-Carter, diâmetros ósseos, fracionamento tecidual e orientações gravadas em vídeo.
                  </p>
                </div>

                <a
                  href={linkLaudoExemplo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Abrir Exemplo de Laudo Vivo</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Card 2: Evolução Temporal */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform">
                    📈
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase rounded-lg border border-teal-100">
                      Acompanhamento
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      Painel de Evolução Temporal
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Mostre ao paciente o progresso real através de gráficos de dobras cutâneas em milímetros, ganho de massa muscular pura e redução da adiposidade ao longo das reavaliações.
                  </p>
                </div>

                <a
                  href={linkEvolucaoExemplo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Abrir Exemplo de Evolução</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* 🧬 4. POR QUE O EVALUAOS É O SOFTWARE DE AVALIAÇÃO ANTROPOMÉTRICA IDEAL? */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
            
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Inovação Metrológica</span>
              <h2 className="text-2xl sm:text-4xl font-black">
                Por que migrar para um Software de Avaliação Antropométrica Científico?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                A variação no estado de hidratação pode mascarar o % de gordura do paciente. O EvaluaOS combina o somatório de dobras brutos a teto biológico de massa em quilos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-emerald-500/50 transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center font-bold text-2xl">
                  🧠
                </div>
                <h3 className="text-lg font-bold text-white">Engine de Recomendação Científica</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  O software testa as +60 equações em tempo real e entrega um ranking com as 3 fórmulas mais recomendadas para a <strong>avaliação antropométrica</strong> daquele paciente específico.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-emerald-500/50 transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center font-bold text-2xl">
                  🔒
                </div>
                <h3 className="text-lg font-bold text-white">Fracionamento 4C & Trava de Kerr</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Calcula a massa adiposa (Kerr), muscular (Lee), óssea (Rocha) e residual (Würch). A massa adiposa em kg serve como teto físico contra falsos diagnósticos.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-emerald-500/50 transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center font-bold text-2xl">
                  📊
                </div>
                <h3 className="text-lg font-bold text-white">Índices e Tabelas Normativas</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Gere relatórios com o Índice Adiposo Muscular (IAM), Músculo Ósseo (IMO), Área de Gordura Visceral (apVAT), Morrow (2003) e comparações automáticas ARGOREF e ISAK.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 💰 5. PLANOS E PREÇOS */}
        <section id="precos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Planos e Valores</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Acesse o Software de Avaliação Antropométrica
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Comece no plano gratuito para testar o sistema ou assine a versão Pro para atendimento ilimitado e marca própria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Plano Gratuito */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase rounded-lg">
                  Sem Fidelidade
                </span>
                <h3 className="text-2xl font-black text-slate-900">Plano Gratuito</h3>
                <div className="text-4xl font-black text-slate-900">R$ 0 <span className="text-xs text-slate-400 font-normal">/ para sempre</span></div>
                
                <ul className="space-y-2.5 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> <strong>Até 7 Pacientes grátis</strong></li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> <strong>Até 3 Avaliações por paciente</strong></li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> Engine de Recomendação de Equações</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> Fracionamento 4 Componentes (Kerr)</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> Índices IAM, IMO, apVAT e Morrow</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> Tabelas ARGOREF & ISAK</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-500 font-bold" /> Somatotipo de Heath-Carter em SVG</li>
                </ul>
              </div>

              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all text-center block uppercase tracking-wider"
              >
                Criar Conta Grátis Agora
              </a>
            </div>

            {/* Plano Pro */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 rounded-3xl shadow-2xl space-y-6 flex flex-col justify-between relative overflow-hidden border-2 border-emerald-500/40">
              <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase rounded-full tracking-wider shadow-lg">
                Recomendado
              </div>

              <div className="space-y-4">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase rounded-lg border border-emerald-500/30">
                  Ilimitado
                </span>
                <h3 className="text-2xl font-black text-white">EvaluaOS Pro</h3>
                <div>
                  <div className="text-4xl font-black text-white">R$ 29,90 <span className="text-xs text-slate-400 font-normal">/ mês</span></div>
                  <span className="text-[11px] text-emerald-400 font-bold block mt-1">
                    Ou R$ 20,75/mês no plano Anual (30% OFF)
                  </span>
                </div>
                
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400 font-bold" /> <strong>Tudo do Plano Gratuito +</strong></li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400 font-bold" /> <strong>Pacientes e Avaliações Ilimitadas</strong></li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400 font-bold" /> <strong>Personalização com Logomarca Própria</strong></li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400 font-bold" /> Backup Automático na Nuvem</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400 font-bold" /> Suporte Técnico Prioritário</li>
                </ul>
              </div>

              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-center block"
              >
                Assinar EvaluaOS Pro 🚀
              </a>
            </div>

          </div>

        </section>

        {/* ❓ 6. PERGUNTAS FREQUENTES (FAQ) */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
            
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Tire Suas Dúvidas</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left">
                  <h3 className="text-base font-black text-slate-900 uppercase italic mb-2 flex items-center gap-2">
                    <HelpCircle size={18} className="text-emerald-600 shrink-0" />
                    {faq.pergunta}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-6">
                    {faq.resposta}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 🧲 7. BANNER FINAL DE CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black">
              Pronto para transformar a precisão da sua Avaliação Antropométrica?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Junte-se a nutricionistas e avaliadores que trabalham com metrologia de alto nível e entregam laudos inesquecíveis.
            </p>
            <a
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 bg-white hover:bg-emerald-50 text-emerald-900 font-black text-xs uppercase tracking-wider rounded-2xl shadow-2xl transition-all hover:scale-105"
            >
              <span>Acessar o EvaluaOS Agora</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </div>
    </>
  );
}