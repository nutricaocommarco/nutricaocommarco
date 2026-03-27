import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Scale, Clock, Activity, Droplets, Headphones, PlayCircle, AlertTriangle, ChevronRight, ShoppingCart, Zap } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function MelhorHorarioPesagem() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Qual o melhor horário para se pesar? | Nutrição com Marco</title>
        <meta name="description" content="Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite. Peso na balança não é igual a gordura corporal." />

        {/* OPEN GRAPH (Redes Sociais) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Qual o melhor horário para se pesar? (Você está fazendo isso errado)" />
        <meta property="og:description" content="Subiu na balança à noite e tomou um susto? Entenda a ciência por trás das variações de peso e o protocolo correto para se pesar." />
        <meta property="og:image" content={`${githubImgBase}Blog/melhor_horario_pesagem.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG (Google) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Qual o melhor horário para se pesar? (Você está fazendo isso errado)",
            "image": `${githubImgBase}Blog/melhor_horario_pesagem.jpg`,
            "author": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "url": "https://www.nutricaocommarco.com.br/sobre"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nutrição com Marco",
              "logo": {
                "@type": "ImageObject",
                "url": `${githubImgBase}logoN_pingus.png`
              }
            },
            "datePublished": "2026-03-21",
            "dateModified": "2026-03-21",
            "description": "Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite. Peso na balança não é igual a gordura corporal."
          })}
        </script>

        {/* INÍCIO DO SCHEMA.ORG PARA FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Qual o melhor horário para se pesar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O padrão ouro é pela manhã, em jejum, logo após ir ao banheiro e antes de beber água ou tomar café da manhã. Esse é o momento de maior estabilidade metabólica do corpo."
                }
              },
              {
                "@type": "Question",
                "name": "Posso me pesar todos os dias?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, desde que seja sempre nas mesmas condições (horário, balança, jejum). O importante é observar a média semanal do peso, e não se desesperar com o valor isolado de um único dia."
                }
              },
              {
                "@type": "Question",
                "name": "Por que meu peso muda todo dia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O peso flutua devido à quantidade de água retida, bolo fecal no intestino, consumo de sódio, glicogênio muscular e até inflamação pós-treino. Essas variações diárias representam água e resíduos, não gordura."
                }
              },
              {
                "@type": "Question",
                "name": "Se pesei mais hoje, engordei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Provavelmente não. Para ganhar 1kg de gordura real, você precisaria de um superávit de aproximadamente 7.000 calorias. Variações rápidas de 1 a 3kg de um dia para o outro são apenas líquidos e alimentos em trânsito."
                }
              },
              {
                "@type": "Question",
                "name": "É melhor se pesar ou tirar medidas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O ideal é usar os dois métodos em conjunto. A balança mostra a massa total, mas as medidas (como a circunferência da cintura) e fotos mostram a real mudança na composição corporal."
                }
              },
              {
                "@type": "Question",
                "name": "A bioimpedância é melhor que a balança?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ela traz mais informações ao estimar gordura e músculo, mas também sofre variações com a hidratação. O mais importante é o acompanhamento de tendências ao longo do tempo, preferencialmente aliado a uma avaliação física completa."
                }
              }
            ]
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA FAQ */}
      </Helmet>

      <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
        <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none text-left">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Composição Corporal</span>

            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase italic leading-tight text-slate-900">
              Qual o melhor horário para se pesar? (Você está fazendo isso errado)
            </h1>

            {/* FRASE MATADORA DE CTR */}
            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-10 leading-relaxed">
              Se você já se pesou à noite e achou que engordou… esse artigo vai te mostrar por que isso é um grande erro.
            </p>

            {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: qual o horário ideal para subir na balança?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  O melhor horário para se pesar é <strong>pela manhã, em jejum, após ir ao banheiro e antes de comer ou beber qualquer coisa</strong>. Isso reduz as variações causadas por alimentação, hidratação e retenção de líquidos, tornando o peso muito mais consistente e confiável ao longo dos dias.
                </p>
            </div>
            {/* FIM DO BLOCO DE RESPOSTA DIRETA */}

            {/* INÍCIO DA CAIXA COMBINADA: ÁUDIO + SUMÁRIO RETRÁTIL */}
            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
              
              {/* 1. SEÇÃO DO ÁUDIO */}
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-green-600 w-6 h-6" />
                  <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
                </div>
                <audio controls className="w-full h-10 outline-none">
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/MelhorHorarioPesagem.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>

              {/* LINHA DIVISÓRIA SUAVE */}
              <div className="h-px bg-green-100/60 w-full"></div>

              {/* 2. SEÇÃO DO SUMÁRIO (TOC) */}
              <nav className="bg-slate-50">
                <button 
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                      <Activity size={18} />
                    </div>
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">
                      Índice do Conteúdo
                    </h3>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} 
                  />
                </button>

                {/* LISTA DE LINKS ESCONDIDA */}
                <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                  <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                    <li>
                      <a href="#horario-certo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        O Horário Certo
                      </a>
                    </li>
                    <li>
                      <a href="#maiores-erros" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Maiores Erros
                      </a>
                    </li>
                    <li>
                      <a href="#porque-varia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Droplets size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Por que varia tanto?
                      </a>
                    </li>
                    <li>
                      <a href="#ilusao-densidade" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Ilusão da Densidade
                      </a>
                    </li>
                    <li>
                      <a href="#pesar-todo-dia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Pesar todo dia?
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* FIM DA CAIXA COMBINADA */}

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Se você já subiu na balança à noite, depois de um longo dia de trabalho, e tomou um susto com o número que apareceu no visor… relaxa: <strong>você provavelmente não engordou — você só se pesou na hora errada.</strong></p>

              <p>A balança tradicional mede absolutamente tudo o que está sobre ela: seus ossos, órgãos, pele, sangue, a água que você bebeu e a comida que ainda está sendo digerida. Ela mede a atração gravitacional da Terra sobre o seu corpo, e não a sua quantidade de gordura. É por isso que o peso corporal humano não é um número estático. É perfeitamente normal e fisiológico que ele flutue de 0,5 até impressionantes 3kg em um único dia.</p>

              {/* IMAGEM ESTRATÉGICA COM ALT E TITLE ARRUMADOS */}
              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <img 
                  src={`${githubImgBase}Blog/melhor_horario_pesagem.jpg`} 
                  alt="Mascote Pinguim Nutri em pé sobre uma balança digital, demonstrando o peso." 
                  title="A importância de se pesar sempre no mesmo horário e condições com a balança correta"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">Consistência é o segredo para não se frustrar com os números da balança.</p></div>
              </div>

              {/* MICRO GEO HACK: PERGUNTA NATURAL NO MEIO DO TEXTO */}
              <h3 id="horario-certo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Clock className="text-green-600"/> Então… qual é o horário certo para se pesar?
              </h3>
              <p>Para acompanhar o seu peso real e excluir ao máximo as interferências externas, você precisa encontrar o momento em que seu corpo está mais "neutro". A ciência da avaliação física determina um protocolo rigoroso para isso.</p>

              {/* PRIMEIRA LISTA OBJETIVA (CHECKLIST PADRÃO OURO) */}
              <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Checklist Padrão Ouro da Pesagem
                </h2>
                <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                  <li className="text-slate-700 font-bold text-lg pl-1">Sempre ao acordar (horário consistente)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Logo após esvaziar a bexiga e o intestino</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Rigorosamente em jejum (antes do café da manhã)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Antes de beber o primeiro copo de água do dia</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Sem roupas ou com o mínimo possível (roupas leves)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Usando sempre a mesma balança, em um piso reto e duro</li>
                </ul>
              </div>
              {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

              <h2 id="maiores-erros" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <AlertTriangle className="text-red-500"/> Os Maiores Erros ao Se Pesar
              </h2>
              <p>Se você não segue o protocolo acima, é provável que esteja caindo em armadilhas que mascaram seus resultados reais. Muitos pacientes chegam frustrados no consultório porque cometem estes erros clássicos:</p>

              <div className="bg-red-50 p-6 md:p-8 rounded-[2rem] border border-red-100 my-8">
                <ul className="list-disc pl-6 space-y-3 m-0 marker:text-red-500">
                  <li className="text-slate-700"><strong>Pesar à noite:</strong> É o momento em que você está mais pesado, acumulando o peso dos alimentos e líquidos ingeridos no dia.</li>
                  <li className="text-slate-700"><strong>Pesar após o treino:</strong> Exercícios intensos causam microlesões musculares e inflamação, o que leva a uma retenção temporária de líquidos. Além disso, se você suou muito, pode achar que emagreceu, mas só perdeu água (desidratação).</li>
                  <li className="text-slate-700"><strong>Pesar após as refeições:</strong> A comida tem peso físico. Se você comeu 500g, a balança sobe 500g até a digestão terminar.</li>
                  <li className="text-slate-700"><strong>Usar balanças diferentes:</strong> Balanças de farmácia, de academia e de casa possuem calibrações diferentes. Use sempre a mesma!</li>
                </ul>
              </div>

              <h2 id="porque-varia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Droplets className="text-green-600"/> Por que seu peso varia tanto? A Fisiologia da Retenção
              </h2>
              <p>Muitas pessoas pesquisam: <em>"peso varia quanto por dia?"</em>. A resposta choca a maioria: de 0,5 a 3 kg, sem que um único grama seja de gordura real.</p>

              <p>A matemática da hidratação é exata: 1 litro de água equivale exatamente a 1kg na balança. O grande "vilão" das flutuações rápidas é a dupla <strong>carboidrato e sódio</strong>. O nosso corpo armazena os carboidratos que comemos dentro dos músculos e no fígado na forma de uma molécula chamada glicogênio. A regra fisiológica é clara: <strong>para cada 1 grama de glicogênio estocado, o corpo retém junto cerca de 3 gramas de água</strong>. Ou seja, se você comeu uma pizza na noite anterior (rica em carboidratos e sódio), seus estoques de glicogênio encheram e puxaram muita água para dentro das células. O peso extra na manhã seguinte é pura água e glicogênio.</p>

              {/* TABELA DE VARIAÇÃO DE PESO (GEO BOOST) */}
              <div className="my-10 bg-white border border-green-100 shadow-md rounded-[2rem] overflow-hidden">
                <div className="bg-green-50 px-6 py-4 border-b border-green-100">
                  <h3 className="text-xl font-black text-green-800 uppercase italic m-0">Variações normais do peso ao longo do dia</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 m-0">
                    <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <span className="text-slate-700 font-bold">Manhã (jejum e pós-banheiro)</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-black">Peso Real</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <span className="text-slate-700 font-bold">Após refeições normais</span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">+ 0,5 a 1,5 kg</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                      <span className="text-slate-700 font-bold">Após ingestão de muito líquido</span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">+ 0,5 a 2,0 kg</span>
                    </li>
                    <li className="flex justify-between items-center pt-1">
                      <span className="text-slate-700 font-bold">Noite (antes de dormir)</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-black">Peso mais alto do dia</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* FIM DA TABELA */}

              <div className="bg-slate-100 p-6 md:p-8 rounded-[2rem] border-l-4 border-slate-400 my-8">
                <h3 className="text-xl font-black text-slate-800 mb-3">A Matemática da Gordura (A Regra das 7.000 kcal)</h3>
                <p className="m-0 text-slate-700 font-medium leading-relaxed">Para que você realmente ganhe 1kg de gordura corporal, a ciência mostra que é necessário consumir um superávit de aproximadamente <strong>7.000 a 7.700 calorias</strong> acima do seu gasto energético total. Pensando na flutuação diária, para engordar 2kg de gordura do dia para a noite, você precisaria ter ingerido cerca de 14.000 calorias extras. Isso é humanamente quase impossível.</p>
              </div>

              <h2 id="ilusao-densidade" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Scale className="text-green-600"/> A Ilusão da Densidade: Músculo vs. Gordura
              </h2>
              <p>Outro erro conceitual enorme que gera frustração no emagrecimento (e facilita o temido <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">efeito sanfona</Link>) é ignorar a densidade dos tecidos. O músculo é um tecido denso e compacto, enquanto a gordura é volumosa e "fofa".</p>

              <p>Um quilo de gordura ocupa cerca de 15% a 20% mais espaço de volume do que um quilo de músculo. É por isso que você pode começar a treinar, perder gordura, ganhar massa muscular e o número da balança não mudar nem 100 gramas. A balança estagna, mas a sua calça jeans passa a fechar com folga.</p>

              {/* LINK INTERNO ESTRATÉGICO CLUSTER SEO (COM OUTROS MÉTODOS) */}
              <div className="bg-green-50 p-6 rounded-[2rem] border border-green-200 my-10">
                <p className="m-0 text-green-900 font-medium text-lg leading-relaxed">
                  👉 <strong>Balança digital é confiável?</strong> Ela é útil para acompanhar tendências, mas não conta a história toda. Se você quer entender se está perdendo gordura ou músculo, confira nosso guia completo sobre <strong><Link to="/o_que_e_antropometria" className="font-black underline hover:text-green-700 transition-colors">avaliação por antropometria</Link></strong> e saiba se <strong><Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="font-black underline hover:text-green-700 transition-colors">a bioimpedância é realmente melhor que a balança comum</Link></strong>.
                </p>
              </div>
              {/* FIM LINK INTERNO ESTRATÉGICO */}

              {/* SESSÃO DO VÍDEO DO INSTAGRAM */}
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">Como é uma avaliação Antropométrica completa?</h3>
                </div>
                <p className="text-slate-600 mb-6 font-medium italic text-left">
                  Complementando a nossa leitura, veja no vídeo abaixo como eu faço uma avaliação nos padrões internacionais para saber exatamente quanto de gordura e musculo você tem!
                </p>
                <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                  <iframe 
                    src="https://www.instagram.com/p/DVOiA9SkS-k/embed" 
                    width="400" 
                    height="480" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowtransparency="true" 
                    className="max-w-full"
                  ></iframe>
                </div>
              </div>
              {/* FIM DA SESSÃO DO VÍDEO */}

              <h2 id="pesar-todo-dia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Activity className="text-green-600"/> Posso me pesar todo dia? O Fim do "Achismo"
              </h2>

              <p>Muitos especialistas divergem sobre isso. A resposta baseada em evidências é: <strong>Sim, você pode se pesar todos os dias</strong>, contanto que obedeça o Checklist Padrão Ouro e anote o peso para tirar a <strong>média semanal</strong>. A média dilui as flutuações diárias de água e intestino e te mostra a real tendência do seu corpo (seja de emagrecimento ou hipertrofia).</p>

{/* AFILIADO MERCADO LIVRE - O PINGUS APROVA (BALANÇA SIMPLES) */}
<div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
    {/* SELO NO CANTO SUPERIOR */}
    <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
        <Zap size={14} className="fill-white" />
        <span>O Pingus Aprova!</span>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
        {/* FOTO DO PINGUS (AUTORIDADE) */}
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
            <img 
                src={`${githubImgBase}logoN_pingus.png`} 
                alt="Selo de Qualidade Pingus" 
                className="w-full h-full object-contain" 
            />
        </div>

        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                Balança Digital de Banheiro <span className="text-green-700">Custo-Benefício</span>
            </h4>
            
            {/* IMAGEM DO PRODUTO */}
            <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm p-4 bg-white">
                <img 
                    src={`${githubImgBase}Afiliado/BalancaSimples.jpg`} 
                    alt="Balança Digital de Banheiro Simples" 
                    className="w-full h-auto object-contain" 
                />
            </div>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                Você não precisa de uma balança cara e cheia de funções em casa para se pesar. O segredo do sucesso é a padronização: use uma balança digital simples e <strong>pese-se sempre nela, nas mesmas condições</strong> (em jejum, ao acordar). O maior erro é ficar usando a balança da farmácia ou da academia como parâmetro de comparação. Tenha o seu próprio equipamento de referência e confie no processo!
            </p>

            {/* BOTÃO COM LINK AFILIADO */}
            <a 
                href="https://meli.la/2LEpbfH" 
                rel="sponsored noopener noreferrer" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
            >
                <ShoppingCart size={16} />
                Comprar no Mercado Livre
            </a>
        </div>
    </div>

    {/* DISCLOSURE OBRIGATÓRIO */}
    <div className="mt-12 pt-6 border-t border-green-50 text-center">
        <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
            Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso! O Pingus agradece o apoio.
        </p>
    </div>
</div>


              <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
                “O peso corporal isolado é uma medida extremamente limitada. Avaliar a sua composição corporal e as tendências ao longo das semanas é muito mais relevante do que o desespero de um número único.”
              </div>

              <p>Comece a observar suas fotos de evolução (tiradas a cada 15 dias, na mesma luz), acompanhe as suas medidas corporais (principalmente a circunferência da cintura e do abdômen) e sinta como suas roupas estão vestindo. Muitas vezes, o seu corpo está mudando drasticamente, e a balança é a última a perceber.</p>

              {/* SESSÃO DO VÍDEO DO YOUTUBE */}
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">A Balança Mente? Entenda a Oscilação Diária</h3>
                </div>
                <p className="text-slate-600 mb-6 font-medium italic text-left">
                  Complementando a nossa leitura, veja a explicação didática sobre como a água, o sódio e o conteúdo intestinal manipulam os números que você vê no visor, e por que a balança não deve ser o seu único parâmetro.
                </p>
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/Mu_AQHlNqGw" 
                    title="Por que o peso varia todos os dias e a importância de não se pesar diariamente" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* FIM DA SESSÃO DO VÍDEO */}

              {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
              <div className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
                <div className="space-y-6">

                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual o melhor horário para se pesar?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">O padrão ouro é pela manhã, em jejum, logo após ir ao banheiro e antes de beber água ou tomar café da manhã. Esse é o momento de maior estabilidade metabólica do corpo.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Posso me pesar todos os dias?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">Sim, desde que seja sempre nas mesmas condições (horário, balança, jejum). O importante é observar a média semanal do peso, e não se desesperar com o valor isolado de um único dia.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Por que meu peso muda todo dia?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">O peso flutua devido à quantidade de água retida, bolo fecal no intestino, consumo de sódio, glicogênio muscular e até inflamação pós-treino. Essas variações diárias representam água e resíduos, não gordura.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Se pesei mais hoje, engordei?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">Provavelmente não. Para ganhar 1kg de gordura real, você precisaria de um superávit de aproximadamente 7.000 calorias. Variações rápidas de 1 a 3kg de um dia para o outro são apenas líquidos e alimentos em trânsito.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">É melhor se pesar ou tirar medidas?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">O ideal é usar os dois métodos em conjunto. A balança mostra a massa total, mas as medidas (como a circunferência da cintura) e fotos mostram a real mudança na composição corporal.</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">A bioimpedância é melhor que a balança?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">Ela traz mais informações ao estimar gordura e músculo, mas também sofre variações com a hidratação. O mais importante é o acompanhamento de tendências ao longo do tempo, preferencialmente aliado a uma avaliação física completa.</p>
                  </div>

                </div>
              </div>
              {/* FIM DO FAQ VISUAL OTIMIZADO */}

              <Newsletter />
            </div> {/* FIM DA DIV DO CONTEÚDO SPACE-Y-6 */}
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          {/* INÍCIO DO NOVO CARTÃO DE AUTOR COM E-E-A-T REFORÇADO E ALT/TITLE NAS IMAGENS */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">

            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img 
                src={`${githubImgBase}Eu_1.png`} 
                alt="Marco Aurélio Jr. - Nutricionista e Autor do Artigo." 
                title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador Antropométrico ISAK Nível 1."
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Conteúdo escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
                Apaixonado pela ciência metabólica, Marco dedica seus estudos a compreender a fisiologia humana de forma aprofundada. Especialista em composição corporal com certificação internacional, ele foca em traduzir o rigor dos artigos científicos para a prática do dia a dia. Seu objetivo é ajudar você a entender como o próprio corpo funciona através da educação nutricional baseada em evidências reais.
              </p>
              <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
                Siga @Nutricao_com_Marco
              </a>
            </div>
          </div>
          {/* FIM DO NOVO CARTÃO DE AUTOR */}

        </div> {/* FIM DA DIV BRANCA GIGANTE */}
      </section>
    </>
  );
}

