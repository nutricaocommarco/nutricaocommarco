import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, CalendarCheck, Shirt, Coffee, 
  Dumbbell, Droplet, User, ChevronLeft, ShieldCheck, FileText, MessageCircle, Clock
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function ConfirmacaoInscricao() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo quando a página é carregada ou a rota muda
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Avaliação Confirmada | Nutrição com Marco</title>
        <meta name="description" content="Sua avaliação antropométrica com Marco Aurélio Jr. está confirmada. Confira as orientações de preparo." />
        {/* Evita que a página de confirmação seja indexada pelo Google */}
        <meta name="robots" content="noindex, nofollow" /> 
      </Helmet>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <section className="py-12 md:py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

            <Link to="/" className="mb-8 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
              <ChevronLeft size={20} /> Voltar para a Home
            </Link>

            {/* BANNER DE SUCESSO */}
            <div className="mb-12 p-8 md:p-12 bg-green-600 rounded-[2.5rem] shadow-xl text-center relative overflow-hidden">
              {/* Efeito de fundo */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 text-green-500 opacity-50">
                <CheckCircle2 size={200} strokeWidth={1} />
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-6 text-green-600 shadow-inner">
                  <CalendarCheck size={48} strokeWidth={2.5} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-tight mb-4 tracking-tight">
                  Tudo Certo! Sua Avaliação Está Confirmada
                </h1>
                <p className="text-green-100 text-lg md:text-xl font-medium max-w-2xl">
                  Estou muito feliz que você deu esse passo. Abaixo estão todas as orientações necessárias para o nosso encontro.
                </p>
              </div>
            </div>

            <article className="prose prose-lg max-w-none text-left">
              
              <div className="flex items-center gap-2 text-green-700 bg-green-100 w-fit px-5 py-3 rounded-full font-bold mb-6 shadow-sm border border-green-200 uppercase tracking-wide text-sm">
                <Clock size={20} className="text-green-600" />
                <span>Duração Aproximada: 40 Minutos</span>
              </div>

              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-10">
                Olá, aqui é o Marco! Parabéns por tomar a decisão de parar de se guiar por achismos e buscar entender a verdadeira composição do seu corpo. A avaliação antropométrica que realizaremos segue o rigoroso padrão internacional ISAK, o que significa que cada dobra cutânea, diâmetro ósseo e perímetro será aferido com precisão milimétrica. Para que esses dados reflitam perfeitamente a sua realidade fisiológica, eu preciso da sua colaboração seguindo um protocolo de preparo muito simples, mas absolutamente fundamental para o sucesso da nossa consulta.
              </p>

              <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-12 mb-8 border-b border-green-100 pb-3 flex items-center gap-3">
                <ShieldCheck className="text-green-600 w-8 h-8"/> Protocolo de Preparo Obrigatório
              </h2>

              {/* CARDS DE PREPARO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-green-300 transition-colors shadow-sm">
                  <Coffee className="text-green-600 w-10 h-10 mb-4" />
                  <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Jejum e Alimentação</h3>
                  <p className="text-slate-600 font-medium leading-relaxed m-0 text-base">
                    Evite realizar refeições grandes ou muito pesadas nas duas horas que antecedem o nosso encontro. Estar com o estômago muito cheio pode causar um leve inchaço abdominal que afeta a medição do perímetro da sua cintura e a dobra cutânea abdominal, distorcendo os cálculos do seu risco metabólico.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-green-300 transition-colors shadow-sm">
                  <Dumbbell className="text-green-600 w-10 h-10 mb-4" />
                  <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Exercício Físico</h3>
                  <p className="text-slate-600 font-medium leading-relaxed m-0 text-base">
                    Peço que você não realize nenhum tipo de treinamento de força ou exercício aeróbico intenso nas doze horas anteriores à avaliação. O exercício direciona um grande fluxo de sangue e fluidos para os músculos exigidos, causando o famoso inchaço muscular que infla temporariamente seus perímetros e altera a compressibilidade da gordura.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-green-300 transition-colors shadow-sm">
                  <Shirt className="text-green-600 w-10 h-10 mb-4" />
                  <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Vestimenta Adequada</h3>
                  <p className="text-slate-600 font-medium leading-relaxed m-0 text-base">
                    A precisão da ferramenta exige o contato direto com a sua pele. Por isso, venha utilizando roupas leves e que permitam fácil acesso. Para os homens, uma bermuda curta ou sunga é o ideal. Para as mulheres, recomendo o uso de um top esportivo e um short curto de ginástica ou biquíni. Além disso, por favor, não aplique cremes hidratantes ou óleos corporais no dia, pois eles fazem o equipamento escorregar durante a pinça.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-green-300 transition-colors shadow-sm">
                  <Droplet className="text-green-600 w-10 h-10 mb-4" />
                  <h3 className="text-xl font-black text-slate-800 uppercase italic mb-3">Ciclo Menstrual</h3>
                  <p className="text-slate-600 font-medium leading-relaxed m-0 text-base">
                    Para as pacientes mulheres, recomendo fortemente que evitem agendar a avaliação durante o período menstrual. As flutuações hormonais dessa fase causam uma retenção hídrica generalizada que aumenta o seu peso na balança e expande temporariamente a sua pele, mascarando a espessura real do seu tecido adiposo subcutâneo.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-3 flex items-center gap-3">
                <FileText className="text-green-600 w-8 h-8"/> O Que Acontece Depois?
              </h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
                Após finalizarmos a coleta de todos os seus dados no consultório, eu utilizarei um software avançado de composição corporal para processar as suas informações. Você receberá um relatório digital completo detalhando exatamente a sua quantidade de massa muscular, peso de gordura, gordura visceral e o seu somatotipo único. Com todos esses dados analisados, estabeleceremos com clareza e precisão o seu ponto de partida oficial.
              </p>

              {/* SEÇÃO DE CONTATO / ENDEREÇO */}
              <div className="my-12 p-8 md:p-10 bg-green-50 border border-green-200 rounded-[3rem] shadow-sm flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-white rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-green-100">
                    <img 
                        src={`${githubImgBase}logoN_pingus.png`} 
                        alt="Mascote Pingus" 
                        className="w-full h-full object-contain" 
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-4">
                    Dúvidas de última hora?
                  </h3>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6">
                    Se você teve algum imprevisto, precisa reagendar, ou tem alguma dúvida sobre o preparo, o Pingus e eu estamos à disposição no WhatsApp. Nos vemos em breve!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a 
                      href="https://wa.me/5521997704300" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:bg-green-700 hover:-translate-y-1 transition-all w-full sm:w-auto"
                    >
                      <MessageCircle size={20} />
                      Falar no WhatsApp
                    </a>
                    <a 
                      href="https://instagram.com/Nutricao_com_Marco" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all w-full sm:w-auto"
                    >
                      <User size={20} />
                      Meu Instagram
                    </a>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </section>
      </div>
    </>
  );
}
