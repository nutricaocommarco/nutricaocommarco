import React, { useEffect } from 'react';
import { 
  MapPin, Calendar, Clock, ShieldCheck, Coffee, 
  Dumbbell, Shirt, Droplet, ArrowRight, CheckCircle2, 
  Activity, ArrowDownCircle, Droplets, MessageCircle,
  Monitor
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAgendamentoClick = (e) => {
    e.preventDefault();
    // Abre o link da Avaliação Antropométrica (Presencial)
    window.open('https://calendar.app.google/QvidzZySZxBgdQA2A', '_blank');
    // Redireciona para confirmação
    window.location.href = 'https://www.nutricaocommarco.com.br/confirmacao-av-antropometrica';
  };

  const handleNutricionalClick = (e) => {
    e.preventDefault();
    // Abre o link do Atendimento Nutricional (Online)
    window.open('https://calendar.app.google/qMez5TTin17RnRhe7', '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-green-200 selection:text-green-900">

      {/* SECÇÃO HERO / CABEÇALHO */}
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

          <a href="#agendamento" className="mt-12 animate-bounce flex flex-col items-center gap-2 text-green-600 hover:text-green-700 transition-colors">
            <span className="text-xs font-black uppercase tracking-widest">Ir para a agenda</span>
            <ArrowDownCircle className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* 1. SECÇÃO DE ESCASSEZ E VALORES */}
      <section className="px-4 md:px-6 pb-12 relative z-20 -mt-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border-4 border-green-500/20">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-black uppercase text-xs md:text-sm tracking-widest shadow-lg z-10">
              Últimas Vagas Gratuitas
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              <div className="flex-1 text-center md:text-left pt-6 md:pt-0">
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-4">
                  Aproveite antes da <span className="text-green-400">virada de lote</span>
                </h2>
                <p className="text-slate-300 font-medium text-lg leading-relaxed mb-6">
                  Estamos a encerrar a nossa fase de mapeamento gratuito. Garanta a sua vaga agora para não pagar nada. <strong className="text-white">A cobrança oficial da avaliação inicia apenas em Junho.</strong>
                </p>
                <div className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-bold border border-slate-700">
                  <Activity size={16} className="text-green-400" />
                  Avaliação Técnica Presencial
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-8 text-center min-w-[280px] shadow-inner transform md:rotate-2">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">A partir de Junho</p>
                <div className="text-slate-400 font-bold text-lg line-through decoration-red-500 decoration-2 mb-1">
                  R$ 199,90
                </div>
                <div className="text-5xl font-black text-slate-800 italic tracking-tighter mb-2">
                  <span className="text-2xl text-green-600 mr-1">R$</span>130<span className="text-2xl text-green-600">,00</span>
                </div>
                <p className="text-green-600 font-black text-sm uppercase bg-green-50 py-2 px-4 rounded-xl inline-block mt-2">
                  Valor Promocional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECÇÃO O QUE ESTÁ INCLUSO NA AVALIAÇÃO */}
      <section className="px-4 md:px-6 pb-12 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-3">
                O que você leva na avaliação?
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Muito mais do que números, você recebe um raio-x completo do seu progresso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Activity size={28} />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase italic mb-3">Relatório Completo</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">Padrão ISAK ou Clínico (Dependendo da idade e de outros fatores fisiológicos).</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase italic mb-3">Somatotipo</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">O mapa visual da sua estrutura corporal e genética (Conforme a avaliação).</p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Clock size={28} />
                </div>
                <h3 className="text-lg font-black text-slate-800 uppercase italic mb-3">Evolução</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">Acompanhe seu progresso ao longo do tempo com gráficos lado a lado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECÇÃO: ATENDIMENTO NUTRICIONAL ONLINE */}
      <section className="px-4 md:px-6 pb-16 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border-4 border-emerald-500/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Monitor size={200} strokeWidth={1} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              <div className="flex-1 text-center md:text-left pt-6 md:pt-0">
                <div className="inline-flex items-center gap-2 bg-emerald-800 text-emerald-200 px-4 py-2 rounded-full text-sm font-bold border border-emerald-700 mb-5">
                  <Monitor size={16} />
                  Acompanhamento 100% Online
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-4">
                  Atendimento <span className="text-emerald-400">Nutricional</span>
                </h2>
                <p className="text-emerald-100 font-medium text-lg leading-relaxed mb-6">
                  Leve os resultados da sua avaliação para o próximo nível. Receba um plano alimentar estratégico e totalmente personalizado para potencializar seus ganhos.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-8 text-center min-w-[280px] shadow-inner">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Desconto Inatividade Zero</p>
                <div className="text-slate-400 font-bold text-lg line-through decoration-red-500 decoration-2 mb-1">
                  R$ 200,00
                </div>
                <div className="text-5xl font-black text-slate-800 italic tracking-tighter mb-6">
                  <span className="text-2xl text-emerald-600 mr-1">R$</span>130<span className="text-2xl text-emerald-600">,00</span>
                </div>

                <button 
                  onClick={handleNutricionalClick}
                  className="w-full bg-emerald-600 text-white px-6 py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:bg-emerald-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Agendar Consulta Online <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL (PROTOCOLO E AGENDA) */}
      <section className="px-4 md:px-6 pb-24 relative z-20">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-12 lg:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-4">
              O que precisa de saber
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              A avaliação segue o rigoroso padrão internacional ISAK. Para garantir que os seus resultados sejam exatos e o seu relatório reflita a realidade, é obrigatório seguir o protocolo de preparação abaixo antes de comparecer à academia.
            </p>
          </div>

          {/* CARTÕES DE PREPARAÇÃO COM TEXTO COMPLETO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            <div className="bg-green-50 rounded-3xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Coffee className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Jejum e Digestão</h3>
              <p className="text-green-900/80 font-medium leading-relaxed m-0 text-base">
                Preciso que evite realizar refeições volumosas ou muito pesadas nas duas horas que antecedem o nosso encontro. Estar com o estômago cheio causa uma distensão abdominal natural que prejudica a medição correta da sua cintura e das dobras cutâneas da região, podendo alterar o cálculo final do seu risco metabólico.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Dumbbell className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Treino e Suor</h3>
              <p className="text-green-900/80 font-medium leading-relaxed m-0 text-base">
                É fundamental que não realize nenhum treino de força hipertrófico ou exercício aeróbico intenso nas doze horas anteriores à sua marcação. O exercício físico direciona um imenso fluxo de fluidos para a musculatura (o famoso "pump"), o que infla os seus perímetros musculares e mascara a verdadeira compressibilidade da sua camada de gordura.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Shirt className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">O Seu Vestuário</h3>
              <p className="text-green-900/80 font-medium leading-relaxed m-0 text-base">
                Como os instrumentos de precisão precisam entrar em contacto direto com o seu corpo, venha com roupas desportivas muito leves e curtas. Os homens devem vir de calções curtos ou sunga. Para as mulheres, é estritamente necessário utilizar uns calções curtos de ginástica ou biquíni e um top desportivo que seja aberto nas costas, garantindo assim o acesso livre às dobras cutâneas dessa região.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Droplets className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Cremes e Loções</h3>
              <p className="text-green-900/80 font-medium leading-relaxed m-0 text-base">
                Para garantir que a pinça do plicómetro consiga agarrar corretamente o tecido adiposo sem escorregar, peço encarecidamente que não aplique nenhum tipo de creme hidratante, loção corporal, óleo ou gel na pele no dia da nossa consulta. A pele deve estar completamente limpa e seca para que a medição seja exata e livre de erros de deslizamento do equipamento.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all md:col-span-2 lg:max-w-3xl lg:mx-auto w-full">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Activity className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Para as Mulheres</h3>
              <p className="text-green-900/80 font-medium leading-relaxed m-0 text-base">
                Se for possível, recomendo fortemente que não agende a sua avaliação durante o período ativo do seu ciclo menstrual. A cascata de alterações hormonais desta fase provoca uma grande retenção hídrica que altera o peso total na balança e expande temporariamente o tecido subcutâneo, escondendo os seus resultados reais por baixo desse inchaço temporário.
              </p>
            </div>

          </div>

          {/* SECÇÃO DE AGENDAMENTO AVALIAÇÃO */}
          <div id="agendamento" className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Calendar size={200} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black uppercase italic m-0">Agende a Avaliação</h2>
              </div>

              <p className="text-slate-300 font-medium text-lg max-w-xl leading-relaxed mb-8">
                Os horários para as avaliações gratuitas na Inatividade Zero são limitados e disponibilizados através da nossa agenda oficial.
              </p>

              <div className="bg-white rounded-3xl p-2 shadow-2xl overflow-hidden mb-6">
                <div className="bg-slate-50 w-full py-12 px-6 rounded-[1.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                  <Calendar className="text-green-600 w-16 h-16 mb-4" />
                  <h3 className="text-xl font-black text-slate-700 uppercase italic mb-2">Agenda de Avaliação</h3>
                  <button 
                    onClick={handleAgendamentoClick}
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:bg-green-700 transition-all flex items-center gap-2"
                  >
                    Ver Horários Disponíveis <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="mt-12 p-8 bg-green-50 border border-green-200 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Pingus" className="w-32 md:w-40" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-4">Alguma dúvida?</h3>
              <p className="text-slate-700 font-medium mb-6">O Pingus e eu estamos à disposição no WhatsApp!</p>
              <a href="https://wa.me/5521997704300" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase text-sm shadow-xl hover:bg-green-700 transition-all">
                <MessageCircle size={20} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
