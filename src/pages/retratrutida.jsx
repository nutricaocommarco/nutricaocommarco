import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Scale, Activity, Headphones, Leaf, Heart, ChevronRight, PlayCircle } from 'lucide-react';
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

        {/* OPEN GRAPH */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Retatrutida: O Agonista Triplo que está mudando o tratamento da obesidade" />
        <meta property="og:description" content="Entenda a ciência por trás da Retatrutida e como ela alcançou perdas de peso de até 24% em estudos clínicos." />
        <meta property="og:image" content={`${githubImgBase}Blog/retatrutida_molecula.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Retatrutida o que é? A nova fronteira contra a obesidade",
            "image": `${githubImgBase}Blog/retatrutida_molecula.jpg`,
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
            "datePublished": "2026-03-24",
            "dateModified": "2026-03-24",
            "description": "Descubra o que é a retatrutida, o novo medicamento agonista triplo e seus resultados na perda de peso."
          })}
        </script>

        {/* SCHEMA.ORG PARA FAQ */}
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
                  "text": "A retatrutida (LY3437943) é uma medicação experimental classificada como um agonista triplo. Ela atua simulando a ação de três hormônios: GLP-1, GIP e Glucagon, oferecendo uma abordagem multitarefa para o emagrecimento."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a perda de peso esperada com a retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos estudos clínicos de Fase 2 (TRIUMPH-1), os participantes que utilizaram a dose máxima de 12mg alcançaram uma redução média de peso corporal de 24,2% ao longo de 48 semanas."
                }
              },
              {
                "@type": "Question",
                "name": "Quais os principais efeitos colaterais?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Os efeitos mais comuns são gastrointestinais, como náuseas, vômitos e constipação, geralmente de intensidade leve a moderada e ocorrendo principalmente durante a fase de ajuste da dose."
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

            {/* BLOCO DE RESPOSTA DIRETA */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: O que é a Retatrutida?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  A retatrutida (LY3437943) é uma medicação revolucionária que atua como um <strong>agonista triplo</strong>, simulando a ação de três hormônios simultaneamente: GLP-1, GIP e glucagon. Essa combinação otimiza o gasto energético e reduz o apetite, resultando em uma perda de peso média de até 24,2% em 48 semanas, superando as gerações anteriores de análogos.
                </p>
            </div>

            {/* AUDIO + SUMÁRIO */}
            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col bg-slate-50">
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-green-600 w-6 h-6" />
                  <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
                </div>
                <audio controls className="w-full h-10 outline-none">
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Retatrutida.mp3" type="audio/mpeg" />
                  Seu navegador não suporta áudio.
                </audio>
              </div>

              <nav className="bg-slate-50 border-t border-green-100/60">
                <button 
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Activity size={18} className="text-green-600" />
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                  </div>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform ${isTocOpen ? 'rotate-90' : ''}`} />
                </button>

                <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                  <ul className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 list-none m-0">
                    <li><a href="#mecanismo" className="text-slate-500 hover:text-green-600 font-bold transition-colors">O Mecanismo Triplo</a></li>
                    <li><a href="#resultados" className="text-slate-500 hover:text-green-600 font-bold transition-colors">Resultados Clínicos</a></li>
                    <li><a href="#nutricao" className="text-slate-500 hover:text-green-600 font-bold transition-colors">Pilar Nutricional</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>O tratamento da obesidade está evoluindo de abordagens isoladas para sinergias hormonais complexas. Após o sucesso do GLP-1, a ciência metabólica apresenta a retatrutida, que promete resultados nunca vistos antes fora de intervenções cirúrgicas.</p>

              <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-600"/> O Mecanismo: A Sinfonia Hormonal
              </h2>
              <p>Diferente de medicamentos que focam em apenas uma via, a retatrutida ativa três receptores simultâneos:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>GLP-1:</strong> Regula o apetite central e retarda o esvaziamento do estômago.</li>
                <li><strong>GIP:</strong> Melhora a sensibilidade à insulina e o metabolismo lipídico no tecido adiposo.</li>
                <li><strong>Glucagon:</strong> Aumenta a taxa metabólica e a oxidação de gorduras.</li>
              </ul>

              <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Scale className="text-green-600"/> Resultados do Estudo TRIUMPH-1
              </h2>
              <p>Os dados do estudo de Fase 2 mostraram que pacientes com obesidade perderam, em média, 24,2% de seu peso corporal em menos de um ano. Além disso, houve melhorias significativas na saúde cardiovascular e na redução da gordura hepática.</p>

              <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
                “A retatrutida reprograma o metabolismo para utilizar a energia de forma mais eficiente, combatendo a obesidade em múltiplas frentes.”
              </div>

              <h2 id="nutricao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Heart className="text-green-600"/> O Manejo Nutricional e Proteico
              </h2>
              <p>Com perdas de peso tão rápidas, o risco de perder massa muscular é real. O suporte nutricional deve focar em um aporte de proteína de 1,2 a 1,5g/kg de peso e no fracionamento das refeições para evitar náuseas, comuns no início do tratamento.</p>

              <Newsletter />
            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          {/* CARTÃO DE AUTOR */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Conteúdo escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
                Especialista em traduzir evidências científicas para a prática diária, focando em saúde metabólica e performance humana.
              </p>
              <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
                Siga @Nutricao_com_Marco
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

