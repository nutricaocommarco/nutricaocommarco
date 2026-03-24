import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronLeft, Headphones, Activity, ChevronRight, Leaf, Scale, Heart, HelpCircle, PlayCircle } from 'lucide-react';
import { posts } from '../data/posts'; 
// Importe seus componentes de Newsletter e ArtigosRecomendados conforme seu projeto
import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function RetatrutidaOQueE() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  const postAtual = posts.find(post => post.link === pathname);

  const tituloSEO = postAtual ? postAtual.titulo : "Retatrutida o que é? A nova fronteira contra a obesidade | Nutrição com Marco";
  const descSEO = postAtual ? postAtual.desc : "Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados impressionantes na perda de peso.";
  const imgSEO = postAtual ? postAtual.img : `${githubImgBase}Blog/retatrutida.jpg`;
  const dataPub = postAtual ? postAtual.data : "2026-03-24";
  const dataMod = postAtual ? postAtual.dataMod : "2026-03-24";

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": tituloSEO,
            "image": imgSEO,
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
            "datePublished": dataPub,
            "dateModified": dataMod,
            "description": descSEO
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.nutricaocommarco.com.br/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.nutricaocommarco.com.br/blog" },
              { "@type": "ListItem", "position": 3, "name": tituloSEO, "item": `https://www.nutricaocommarco.com.br${pathname}` }
            ]
          })}
        </script>

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
                  "text": "A retatrutida (LY3437943) é uma medicação em desenvolvimento classificada como um agonista triplo. Ela atua simultaneamente nos receptores dos hormônios GIP, GLP-1 e glucagon, sendo projetada para oferecer maior eficácia no tratamento da obesidade e melhorias metabólicas."
                }
              },
              {
                "@type": "Question",
                "name": "Quantos quilos posso perder com a retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos estudos clínicos de Fase 2, conhecidos como TRIUMPH-1, os pacientes apresentaram uma perda de peso corporal média de até 24,2% ao longo de 48 semanas quando utilizaram as doses mais elevadas da medicação."
                }
              },
              {
                "@type": "Question",
                "name": "Como o medicamento retatrutida é administrado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O tratamento com a retatrutida é feito por meio de injeção subcutânea com periodicidade semanal. As dosagens estudadas clinicamente variam de 1 mg a 12 mg por semana."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
        <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none text-left">

            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Tratamento Metabólico</span>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              Retatrutida o que é? A nova fronteira da ciência contra a obesidade
            </h1>

            {/* BLOCO DE RESPOSTA DIRETA (FEATURED SNIPPET) */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: O que é a Retatrutida?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  [span_0](start_span)A retatrutida (LY3437943) é uma medicação revolucionária em fase de testes que atua como um <strong>agonista triplo</strong>, simulando a ação de três hormônios simultaneamente: GLP-1, GIP e glucagon[span_0](end_span). [span_1](start_span)Essa combinação não apenas reduz o apetite, mas também otimiza o gasto energético, resultando em uma perda de peso média impressionante de até 24,2% em 48 semanas nos estudos clínicos iniciais[span_1](end_span).
                </p>
            </div>

            {/* INÍCIO DA CAIXA COMBINADA: ÁUDIO + SUMÁRIO RETRÁTIL */}
            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
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

              <div className="h-px bg-green-100/60 w-full"></div>

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

                <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                  <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                    <li>
                      <a href="#mecanismo-de-acao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        O Mecanismo Triplo
                      </a>
                    </li>
                    <li>
                      <a href="#resultados-clinicos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Resultados Comprovados
                      </a>
                    </li>
                    <li>
                      <a href="#pilar-nutricional" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        O Pilar Nutricional
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>O cenário do tratamento da obesidade e das doenças metabólicas está passando por uma evolução tecnológica extremamente acelerada e empolgante. Até bem pouco tempo atrás, as atenções estavam voltadas quase que exclusivamente para o sucesso das terapias de primeira e segunda geração, focadas principalmente na via do hormônio GLP-1. No entanto, a ciência metabólica acaba de revelar uma nova e promissora molécula que vem conquistando o protagonismo nas discussões médicas: a retatrutida.</p>

              [span_2](start_span)<p>Compreender o que é a retatrutida e como ela interage com a nossa complexa fisiologia é essencial para entender por que essa substância representa um avanço tão significativo no tratamento da obesidade crônica, oferecendo uma eficácia de perda de peso e melhorias metabólicas que superam as terapias lançadas anteriormente no mercado[span_2](end_span).</p>

              {/* IMAGEM ESTRATÉGICA */}
              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <img 
                  src={`${githubImgBase}Blog/retatrutida_molecula.jpg`} 
                  alt="Ilustração médica representando a molécula de retatrutida e seus três receptores de ação no organismo." 
                  title="Mecanismo de Ação da Retatrutida"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A Retatrutida representa um salto científico ao ativar três vias hormonais simultâneas.</p></div>
              </div>

              <h2 id="mecanismo-de-acao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-600"/> O Mecanismo de Ação: O Poder do Agonista Triplo
              </h2>
              
              <p>O grande diferencial da retatrutida (conhecida nos estudos laboratoriais como LY3437943) reside na sua incrível capacidade multitarefa no corpo humano. [span_3](start_span)Ela funciona como um agonista triplo, o que significa que se liga e ativa simultaneamente os receptores de três hormônios fundamentais: o GIP, o GLP-1 e o glucagon[span_3](end_span).  </p>

              [span_4](start_span)<p>Enquanto o GLP-1 e o GIP já possuem papéis amplamente reconhecidos na medicina por aumentarem a sensação de saciedade e retardarem o esvaziamento do estômago, a adição da atividade no receptor do glucagon cria uma sinergia única[span_4](end_span). A estimulação controlada do glucagon neste contexto específico potencializa o gasto energético do paciente e promove uma oxidação de gorduras mais acelerada. Basicamente, o organismo passa a ingerir um volume muito menor de calorias ao mesmo tempo em que aumenta a capacidade natural de queimar os estoques de tecido adiposo.</p>

              <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
                “A ciência deixou de atuar em vias hormonais isoladas para criar sinfonias metabólicas que reprogramam a resposta do corpo à obesidade.”
              </div>

              <h2 id="resultados-clinicos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Scale className="text-green-600"/> Resultados Clínicos Impressionantes
              </h2>
              <p>Os dados que sustentam a empolgação da comunidade científica são extremamente robustos. Durante a Fase 2 dos testes clínicos, batizada de estudo TRIUMPH-1, a eficácia do medicamento foi colocada à prova com resultados excepcionais. [span_5](start_span)Os pacientes submetidos às maiores dosagens da medicação alcançaram uma perda de peso corporal média assombrosa de até 24,2% em um intervalo de 48 semanas de tratamento[span_5](end_span).</p>

              [span_6](start_span)<p>A administração da retatrutida segue um protocolo bastante semelhante aos medicamentos análogos mais modernos, sendo feita através de injeção subcutânea semanal[span_6](end_span). [span_7](start_span)Para garantir a segurança e mapear a melhor resposta terapêutica, as doses avaliadas nas pesquisas variam de 1 mg até 12 mg por semana[span_7](end_span). Essa titulação progressiva e individualizada é um cuidado crucial para gerenciar a adaptação do corpo e minimizar eventuais desconfortos durante o processo.</p>

              <h2 id="pilar-nutricional" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Heart className="text-green-600"/> O Pilar Insubstituível da Nutrição
              </h2>
              <p>Embora a chegada de inovações farmacológicas brilhantes como a retatrutida traga imensa esperança, é vital ressaltar que nenhuma caneta de injeção anula a necessidade de uma base comportamental sólida. O suporte nutricional rigoroso é indispensável para evitar o catabolismo muscular exagerado durante uma fase de perda de peso tão intensa. [span_8](start_span)A adequação dietética focada em alta densidade de nutrientes é o fator que de fato potencializa os resultados dos medicamentos e constrói hábitos sustentáveis para a manutenção da saúde a longo prazo[span_8](end_span).</p>

              {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
              <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">O que é a retatrutida?</h3>
                    [span_9](start_span)<p className="text-slate-600 m-0 leading-relaxed">A retatrutida (LY3437943) é uma medicação inovadora desenvolvida para o combate à obesidade que atua como um agonista triplo, conectando-se e ativando simultaneamente os receptores dos hormônios GIP, GLP-1 e glucagon para otimizar o metabolismo geral[span_9](end_span).</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Quantos quilos é possível perder com esse tratamento?</h3>
                    [span_10](start_span)<p className="text-slate-600 m-0 leading-relaxed">De acordo com os dados colhidos no estudo clínico TRIUMPH-1 (Fase 2), os participantes que utilizaram as doses mais altas registraram uma impressionante redução de peso média de até 24,2% do peso corporal total no período de 48 semanas[span_10](end_span).</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual a via de administração e a dosagem recomendada?</h3>
                    [span_11](start_span)<p className="text-slate-600 m-0 leading-relaxed">A medicação é aplicada no paciente via injeção subcutânea uma vez na semana[span_11](end_span). [span_12](start_span)As avaliações científicas testaram diferentes volumes para encontrar a proporção ideal, com doses que progridem variando de 1 mg a 12 mg a cada aplicação semanal[span_12](end_span).</p>
                  </div>
                </div>
              </div>
              {/* FIM DO FAQ VISUAL OTIMIZADO */}

              <Newsletter />
            </div> 
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          {/* INÍCIO DO NOVO CARTÃO DE AUTOR */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">

            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img 
                src={`${githubImgBase}Eu_1.png`} 
                alt="Marco Aurélio Jr." 
                title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador ISAK 1"
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

        </div>
      </section>
    </>
  );
}
