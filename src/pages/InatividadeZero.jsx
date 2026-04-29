import React, { useEffect } from 'react';
import { 
  MapPin, Calendar, Clock, ShieldCheck, Coffee, 
  Dumbbell, Shirt, Droplet, ArrowRight, CheckCircle2, 
  Activity, ArrowDownCircle, Droplets, MessageCircle,
  Monitor, Check
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAgendamentoClick = (e) => {
    e.preventDefault();
    window.open('https://calendar.app.google/QvidzZySZxBgdQA2A', '_blank');
    window.location.href = 'https://www.nutricaocommarco.com.br/confirmacao-av-antropometrica';
  };

  const handleNutricionalClick = (e) => {
    e.preventDefault();
    window.open('https://calendar.app.google/qMez5TTin17RnRhe7', '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-green-200 selection:text-green-900">

      {/* SECÇÃO HERO */}
      <section className="relative px-4 md:px-6 pt-12 pb-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
            <Activity className="text-green-600 w-5 h-5" />
            <span className="text-sm font-black uppercase tracking-widest text-slate-700">Parceria Oficial</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black uppercase italic leading-tight mb-6 text-slate-900">
            Descubra a sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Composição Real</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed mb-10">
            Esqueça a balança comum. Agende a sua Avaliação Antropométrica de precisão e descubra exatamente o seu percentual de gordura e massa muscular.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-[2rem] shadow-xl border border-slate-100">
            <div className="bg-green-600 text-white px-8 py-4 rounded-3xl flex flex-col items-center justify-center min-w-[200px]">
              <span className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Por tempo limitado</span>
              <span className="text-3xl font-black italic tracking-tight">100% GRÁTIS</span>
            </div>
            <div className="px-6 text-left flex flex-col gap-2">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="text-green-600 w-5 h-5 shrink-0" />
                <span className="font-bold text-lg">Academia Inatividade Zero</span>
              </div>
              <p className="text-slate-500 font-medium pl-8 m-0">Rua Rio Sangrador, 260</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. SECÇÃO AVALIAÇÃO PRESENCIAL (COM INTEGRADO) */}
      <section className="px-4 md:px-6 pb-12 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border-4 border-green-500/20">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-black uppercase text-xs tracking-widest shadow-lg">
              Últimas Vagas Gratuitas
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-10 relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-slate-800 text-green-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-slate-700 mb-6">
                  <Activity size={14} /> Avaliação Presencial
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-6 leading-tight">
                  Mapeamento <span className="text-green-400">Corporal de Elite</span>
                </h2>
                
                {/* O QUE VOCÊ LEVA INTEGRADO */}
                <ul className="space-y-4 mb-8">
                  {[
                    "Relatório Completo (Padrão ISAK ou Clínico)",
                    "Somatotipo e Somatocarta (Mapa Genético)",
                    "Gráficos de Comparativo Evolutivo",
                    "Análise de Risco Metabólico"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 text-center min-w-full md:min-w-[300px] shadow-2xl transform md:rotate-2">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Valor Oficial em Junho</p>
                <div className="text-slate-400 font-bold text-lg line-through decoration-red-500 decoration-2 mb-1">R$ 199,90</div>
                <div className="text-5xl font-black text-slate-800 italic tracking-tighter mb-4">
                  <span className="text-2xl text-green-600 mr-1">R$</span>130<span className="text-2xl text-green-600">,00</span>
                </div>
                <a href="#agendamento" className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-600 transition-colors">Agendar Agora</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECÇÃO ATENDIMENTO ONLINE (COM INTEGRADO) */}
      <section className="px-4 md:px-6 pb-20 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-emerald-900 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border-4 border-emerald-500/20">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Monitor size={240} strokeWidth={1} />
            </div>

            <div className="flex flex-col md:flex-row items-start gap-10 relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-emerald-800 text-emerald-300 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-700 mb-6">
                  <Monitor size={14} /> Atendimento Digital
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-6 leading-tight">
                  Consulta <span className="text-emerald-400">Nutricional Online</span>
                </h2>

                {/* O QUE VOCÊ LEVA INTEGRADO */}
                <ul className="space-y-4 mb-8">
                  {[
                    "Plano Alimentar Estratégico e Individual",
                    "Suporte Direto via WhatsApp",
                    "Acesso ao Aplicativo de Acompanhamento",
                    "Protocolo de Suplementação (se necessário)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-emerald-100 font-medium">
                      <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 text-center min-w-full md:min-w-[300px] shadow-2xl">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Parceria Inatividade Zero</p>
                <div className="text-slate-400 font-bold text-lg line-through decoration-red-500 decoration-2 mb-1">R$ 200,00</div>
                <div className="text-5xl font-black text-slate-800 italic tracking-tighter mb-6">
                  <span className="text-2xl text-emerald-600 mr-1">R$</span>130<span className="text-2xl text-emerald-600">,00</span>
                </div>
                <button 
                  onClick={handleNutricionalClick}
                  className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-700 shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Agendar Online <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO PROTOCOLO E AGENDA */}
      <section className="px-4 md:px-6 pb-24 relative z-20">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-12 lg:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-4">O que precisa de saber</h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              A avaliação segue o rigoroso padrão internacional ISAK. Para garantir que os seus resultados sejam exatos, é obrigatório seguir o protocolo abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Coffee className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Jejum e Digestão</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Evite refeições volumosas 2 horas antes do encontro. A distensão abdominal prejudica a medição da cintura e das dobras cutâneas.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Dumbbell className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Treino e Suor</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Sem treino de força ou aeróbico intenso 12h antes. O "pump" infla perímetros musculares e mascara a compressibilidade da gordura.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Shirt className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">O Seu Vestuário</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Roupas desportivas leves. Homens: calções curtos/sunga. Mulheres: shorts de ginástica e top aberto nas costas para acesso às dobras.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Droplets className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Cremes e Loções</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Não aplique hidratantes ou óleos no dia. A pele deve estar seca para que o plicómetro não escorregue e a medição seja exata.</p>
            </div>
          </div>

          <div id="agendamento" className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Calendar size={200} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black uppercase italic mb-6">Agendar Minha Avaliação</h2>
              <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-slate-700 flex flex-col items-center">
                <Calendar className="text-green-600 w-12 h-12 mb-4" />
                <button 
                  onClick={handleAgendamentoClick}
                  className="bg-green-600 text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:bg-green-700 transition-all flex items-center gap-3"
                >
                  Visualizar Horários <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 p-10 bg-green-50 border border-green-200 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Pingus" className="w-32 md:w-40" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-3">Ficou com alguma dúvida?</h3>
              <p className="text-slate-700 font-medium mb-6">O Pingus e eu estamos à disposição no WhatsApp para ajudar!</p>
              <a href="https://wa.me/5521997704300" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-lg hover:bg-green-700 transition-all">
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
