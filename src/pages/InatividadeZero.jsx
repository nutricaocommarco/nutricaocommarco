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
    // Link da Avaliação Antropométrica (Presencial)
    window.open('https://calendar.app.google/QvidzZySZxBgdQA2A', '_blank');
    // Redireciona para confirmação
    window.location.href = 'https://www.nutricaocommarco.com.br/confirmacao-av-antropometrica';
  };

  const handleNutricionalClick = (e) => {
    e.preventDefault();
    // Link do Atendimento Nutricional (Online)
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
              <span className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Garanta seu Horário</span>
              <span className="text-2xl font-black italic tracking-tight">VAGAS ABERTAS</span>
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

      {/* 1. SECÇÃO AVALIAÇÃO PRESENCIAL */}
      <section className="px-4 md:px-6 pb-6 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border-4 border-green-500/20">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-6 py-2 rounded-bl-2xl font-black uppercase text-xs tracking-widest shadow-lg">
              Agendas Abertas
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-10 relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-slate-800 text-green-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-slate-700 mb-6">
                  <Activity size={14} /> Avaliação Presencial
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-6 leading-tight">
                  Mapeamento <span className="text-green-400">Corporal de Elite</span>
                </h2>
                
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
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-3">Investimento</p>
                <div className="bg-green-100 text-green-800 font-bold text-xs py-1.5 px-3 rounded-lg mb-4 uppercase tracking-wide">Avaliação Completa</div>
                <div className="text-slate-400 font-bold text-sm mb-1 uppercase tracking-widest">Valor da Sessão</div>
                <div className="text-5xl font-black text-slate-800 italic tracking-tighter mb-6">
                  <span className="text-2xl text-green-600 mr-1">R$</span>130<span className="text-2xl text-green-600">,00</span>
                </div>
                <button onClick={handleAgendamentoClick} className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <Calendar size={16} /> Abrir Agenda
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECÇÃO ATENDIMENTO ONLINE */}
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

      {/* SECÇÃO PROTOCOLO E CONTACTO */}
      <section className="px-4 md:px-6 pb-24 relative z-20">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-12 lg:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-4">O que precisa de saber</h2>
            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              A avaliação segue o rigoroso padrão internacional ISAK. Para garantir que os seus resultados sejam exatos e o seu relatório reflita a realidade, é obrigatório seguir o protocolo de preparação abaixo antes de comparecer à academia.
            </p>
          </div>

          {/* CARTÕES DE PREPARAÇÃO - TEXTOS INTEGRAIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Coffee className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Jejum e Digestão</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Preciso que evite realizar refeições volumosas ou muito pesadas nas duas horas que antecedem o nosso encontro. Estar com o estômago cheio causa uma distensão abdominal natural que prejudica a medição correta da sua cintura e das dobras cutâneas da região, podendo alterar o cálculo final do seu risco metabólico.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Dumbbell className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Treino e Suor</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">É fundamental que não realize nenhum treino de força hipertrófico ou exercício aeróbico intenso nas doze horas anteriores à sua marcação. O exercício físico direciona um imenso fluxo de fluidos para a musculatura (o famoso "pump"), o que infla os seus perímetros musculares e mascara a verdadeira compressibilidade da sua camada de gordura.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Shirt className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">O Seu Vestuário</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Como os instrumentos de precisão precisam entrar em contacto direto com o seu corpo, venha com roupas desportivas muito leves e curtas. Os homens devem vir de calções curtos ou sunga. Para as mulheres, é estritamente necessário utilizar uns calções curtos de ginástica ou biquíni e um top desportivo que seja aberto nas costas, garantindo assim o acesso livre às dobras cutâneas dessa região.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
              <Droplets className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Cremes e Loções</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Para garantir que a pinça do plicómetro consiga agarrar corretamente o tecido adiposo sem escorregar, peço encarecidamente que não aplique nenhum tipo de creme hidratante, loção corporal, óleo ou gel na pele no dia da nossa consulta. A pele deve estar completamente limpa e seca para que a medição seja exata e livre de erros de deslizamento do equipamento.</p>
            </div>
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 md:col-span-2">
              <Activity className="text-green-600 w-7 h-7 mb-4" />
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Para as Mulheres</h3>
              <p className="text-green-900/70 font-medium leading-relaxed text-sm">Se for possível, recomendo fortemente que não agende a sua avaliação durante o período ativo do seu ciclo menstrual. A cascata de alterações hormonais desta fase provoca uma grande retenção hídrica que altera o peso total na balança e expande temporariamente o tecido subcutâneo, escondendo os seus resultados reais por baixo desse inchaço temporário.</p>
            </div>
          </div>

          {/* CONTACTO PINGUS */}
          <div className="p-10 bg-green-50 border border-green-200 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
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
