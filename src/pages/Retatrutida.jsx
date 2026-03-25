import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle, Headphones, ChevronRight, Activity, Leaf, Scale, Heart } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function RetatrutidaOQueE() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Retatrutida o que é? A nova fronteira da ciência | Nutrição com Marco</title>
        <meta name="description" content="Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados impressionantes na perda de peso." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Retatrutida o que é? A nova fronteira da ciência | Nutrição com Marco" />
        <meta property="og:description" content="Descubra o que é a retatrutida, o novo medicamento agonista triplo e seus resultados impressionantes na perda de peso." />
        <meta property="og:image" content={`${githubImgBase}Blog/retatrutida_molecula.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retatrutida o que é? A nova fronteira da ciência contra a obesidade",
            "image": `${githubImgBase}Blog/retatrutida_molecula.jpg`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": "2026-03-24",
            "dateModified": "2026-03-24",
            "description": "Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados impressionantes na perda de peso."
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
                "name": "O que é a retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A retatrutida (LY3437943) é uma medicação em desenvolvimento classificada como um agonista triplo. Ela atua simulando a ação de três hormônios simultaneamente: GLP-1, GIP e Glucagon, oferecendo uma abordagem multitarefa para o emagrecimento."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a perda de peso esperada com a retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos estudos clínicos de Fase 2 (TRIUMPH-1), os participantes que utilizaram a dose máxima alcançaram uma redução média de peso corporal de até 24,2% ao longo de 48 semanas."
                }
              },
              {
                "@type": "Question",
                "name": "Como o medicamento retatrutida é administrado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O tratamento é feito por meio de injeção subcutânea semanal, com doses que variam progressivamente de 1 mg a 12 mg para gerenciar a adaptação do corpo."
                }
              }
            ]
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA FAQ */}
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        {/* Botão de Voltar */}
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Tratamento Metabólico</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Retatrutida o que é? A nova fronteira da ciência contra a obesidade
          </h1>

          {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: o que é a Retatrutida?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A retatrutida (LY3437943) é uma medicação revolucionária em fase de testes que atua como um <strong>agonista triplo</strong>. Ela simula a ação de três hormônios simultaneamente: GLP-1, GIP e glucagon, otimizando o gasto energético e resultando em uma perda de peso média de até 24,2% em 48 semanas.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Retatrutida.mp3" type="audio/mpeg" />
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
                    <a href="#mecanismo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Mecanismo Triplo
                    </a>
                  </li>
                  <li>
                    <a href="#resultados" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Resultados Clínicos
                    </a>
                  </li>
                  <li>
                    <a href="#nutricao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Pilar Nutricional
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Perguntas Frequentes (FAQ)
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* FIM DA CAIXA COMBINADA */}

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>O cenário do tratamento da obesidade e das doenças metabólicas está passando por uma evolução tecnológica extremamente acelerada e empolgante. Até bem pouco tempo atrás, as atenções estavam voltadas quase que exclusivamente para o sucesso das terapias de primeira e segunda geração, focadas principalmente na via do hormônio GLP-1. No entanto, a ciência metabólica acaba de revelar uma nova e promissora molécula que vem conquistando o protagonismo nas discussões médicas: a retatrutida.</p>

            {/* IMAGEM DE CAPA COM ALT E TITLE ARRUMADOS */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={`${githubImgBase}Blog/retatrutida_molecula.jpg`} 
                alt="Ilustração médica representando a molécula de retatrutida e seus três receptores de ação no organismo." 
                title="Mecanismo de Ação da Retatrutida"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A Retatrutida representa um salto científico ao ativar três vias hormonais simultâneas.</p></div>
            </div>

            <p>Compreender o que é a retatrutida e como ela interage com a nossa complexa fisiologia é essencial para entender por que essa substância representa um avanço tão significativo, oferecendo uma eficácia de perda de peso que supera as terapias lançadas anteriormente no mercado.</p>

            <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">O Mecanismo de Ação: O Poder do Agonista Triplo</h2>
            <p>O grande diferencial da retatrutida reside na sua incrível capacidade multitarefa no corpo humano. Ela funciona como um agonista triplo, o que significa que se liga e ativa simultaneamente os receptores de três hormônios fundamentais: o GIP, o GLP-1 e o glucagon.</p>

            {/* QUADRO DE DESTAQUE */}
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "A ciência deixou de atuar em vias hormonais isoladas para criar sinfonias metabólicas que reprogramam a resposta do corpo à obesidade."
            </div>

            {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">👉</span> Como os três hormônios agem juntos?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                Enquanto o GLP-1 e o GIP possuem papéis amplamente reconhecidos em aumentar a sensação de saciedade e retardar o esvaziamento do estômago, a adição do glucagon cria uma sinergia única. O glucagon potencializa o gasto energético do paciente e promove uma oxidação de gorduras mais acelerada.
              </p>
            </div>
            {/* FIM DO BLOCO CITÁVEL */}

            <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Resultados Clínicos Impressionantes</h2>
            <p>Os dados que sustentam a empolgação da comunidade científica são extremamente robustos. Durante a Fase 2 dos testes clínicos, batizada de estudo TRIUMPH-1, a eficácia do medicamento foi colocada à prova com resultados excepcionais.</p>

            {/* PRIMEIRA LISTA OBJETIVA */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que o estudo TRIUMPH-1 revelou?
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Perda de peso corporal média de até 24,2% em 48 semanas
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Melhoria significativa na pressão arterial
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Redução expressiva da gordura no fígado (esteatose hepática)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Administração confortável por via subcutânea semanal
                </li>
              </ul>
            </div>
            {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

            <h2 id="nutricao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">O Pilar Insubstituível da Nutrição</h2>
            <p>Embora a chegada de inovações farmacológicas traga imensa esperança, é vital ressaltar que nenhuma caneta de injeção anula a necessidade de uma base comportamental sólida. O suporte nutricional rigoroso é indispensável para evitar o catabolismo muscular exagerado durante uma fase de perda de peso tão rápida e intensa.</p>

            {/* SEGUNDA LISTA OBJETIVA */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Cuidados Nutricionais durante o Tratamento
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Aporte proteico elevado (1,2 a 1,5g/kg/dia) para preservar músculos
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Fracionamento inteligente de refeições para evitar náuseas
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Adequação da densidade nutricional para compensar o baixo apetite
                </li>
              </ul>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">O que é a retatrutida?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A retatrutida (LY3437943) é uma medicação inovadora em desenvolvimento para o combate à obesidade. Ela atua como um agonista triplo, conectando-se e ativando simultaneamente os receptores dos hormônios GIP, GLP-1 e glucagon para otimizar o metabolismo geral e reduzir o apetite.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Quantos quilos é possível perder com esse tratamento?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">De acordo com os dados colhidos no estudo clínico TRIUMPH-1 (Fase 2), os participantes que utilizaram as doses mais altas da medicação registraram uma impressionante redução de peso média de até 24,2% do peso corporal total no período de 48 semanas.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Como o medicamento é administrado?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A medicação é aplicada no paciente via injeção subcutânea uma vez na semana. O protocolo inclui uma titulação progressiva de doses, que variam de 1 mg a 12 mg a cada aplicação semanal, para garantir a segurança e gerenciar a adaptação do organismo.</p>
                </div>
              </div>
            </div>
            {/* FIM DO FAQ VISUAL OTIMIZADO */}

            <Newsletter />
          </div> {/* FIM DA DIV DO CONTEÚDO */}
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* INÍCIO DO NOVO CARTÃO DE AUTOR COM E-E-A-T REFORÇADO */}
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
      </div> {/* FIM DA DIV BRANCA */}
    </section>
    </>
  );
}
