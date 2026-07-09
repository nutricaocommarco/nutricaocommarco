import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calculator, Activity, Info, CheckCircle2, User, HeartPulse, ShieldCheck, Sparkles, Flame, Dumbbell, Percent } from 'lucide-react';

export default function PlanilhaAntropometriaVendas() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Planilha Antropométrica Inteligente PRO",
        "url": "https://nutricaocommarco.com.br/planilha-antropometrica-marco-aurelio",
        "description": "Sistema avançado e automatizado via VBA para avaliação de composição corporal, protocolos ISAK, perímetros corrigidos e somatocarta automática.",
        "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Calculadora-de-Gasto-Calorico.jpg",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BRL",
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

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Se você busca um sistema completo, rápido e visualmente impactante para os seus atendimentos de consultório sem ter que ficar preso a mensalidades caras de softwares de nutrição, a <strong>Planilha Antropométrica Inteligente PRO</strong> é a solução definitiva. Desenvolvida sob o rigor científico dos protocolos internacionais e a inteligência de macros automáticas, ela eleva o nível técnico dos seus relatórios e gera uma experiência visual incrível para os seus pacientes.
              </p>

              <div className="bg-green-600 rounded-[2rem] text-white p-8 md:p-12 my-8 shadow-xl relative overflow-hidden text-center md:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-white text-2xl md:text-3xl font-black uppercase italic mb-4">Economize tempo e impressione seus pacientes</h3>
                  <p className="text-green-50 opacity-95 text-base md:text-lg mb-6 font-medium">
                    Um sistema dinâmico que reconhece o perfil biológico do paciente, oculta dados desnecessários e gera gráficos de evolução com um único clique.
                  </p>
                  <a 
                    href="SEU_LINK_DE_PAGAMENTO_AQUI" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-slate-900 hover:bg-slate-800 text-white font-black py-4 px-8 rounded-full shadow-lg transform transition-all hover:-translate-y-1 inline-block uppercase text-sm tracking-wider"
                  >
                    Garantir Meu Acesso Vitalício
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* DIFERENCIAIS DA PLANILHA */}
          <div className="bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] p-5 sm:p-8 md:p-12 border border-slate-200 shadow-inner mt-2 md:mt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-8 md:mb-10 border-b border-green-200 pb-4 flex items-center gap-3">
              <Sparkles className="text-green-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/> Diferenciais do Sistema
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h4 className="font-black text-slate-900 uppercase italic text-sm md:text-base">Pagamento Único</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">Diga adeus às assinaturas mensais recorrentes. Compre o seu arquivo habilitado para macros uma vez e use de forma vitalícia no seu consultório.</p>
                </div>
              </div>
            </div>

            {/* CONTEÚDO DETALHADO DO RELATÓRIO */}
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 flex items-center gap-2">
              <User className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> Parâmetros Inclusos no Relatório
            </h3>

            <div className="space-y-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
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

            {/* CALL TO ACTION FINAL */}
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <h2 className="text-xl md:text-2xl font-black mb-4 text-slate-900 uppercase italic">Pronto para modernizar seus atendimentos?</h2>
              <p className="text-xs md:text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                Adquira agora a sua planilha antropométrica inteligente e leve o rigor científico dos maiores protocolos do mundo com automação instantânea direto para o seu consultório.
              </p>
              
              <a 
                href="SEU_LINK_DE_PAGAMENTO_AQUI" 
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
