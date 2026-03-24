import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Headphones, Activity, ChevronRight, Leaf, Scale, Heart, HelpCircle, PlayCircle } from 'lucide-react';

// Importando componentes (certifique-se que os caminhos estão corretos)
import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function RetatrutidaOQueE() {
  const { pathname } = useLocation();
  // 🟢 ESSA LINHA É O QUE ESTAVA FALTANDO E FAZ A PÁGINA FICAR BRANCA:
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Informações manuais (já que você não quer usar o posts.js por enquanto)
  const tituloSEO = "Retatrutida o que é? A nova fronteira contra a obesidade | Nutrição com Marco";
  const descSEO = "Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados impressionantes na perda de peso.";
  const imgSEO = `${githubImgBase}Blog/retatrutida_molecula.jpg`;

  return (
    <>
      <Helmet>
        <title>{tituloSEO}</title>
        <meta name="description" content={descSEO} />
        
        {/* SCHEMA.ORG PARA FAQ (Google ama isso!) */}
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
                  "text": "A retatrutida é uma medicação agonista tripla que simula os hormônios GLP-1, GIP e Glucagon, focada no tratamento da obesidade e melhora metabólica."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a perda de peso com retatrutida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Em estudos de fase 2 (TRIUMPH-1), a perda de peso média chegou a 24,2% em 48 semanas com a dose máxima."
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

            {/* RESPOSTA RÁPIDA */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: O que é a Retatrutida?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  A retatrutida (LY3437943) é uma medicação experimental que atua como um <strong>agonista triplo</strong>, ativando três receptores hormonais ao mesmo tempo: GLP-1, GIP e glucagon. Nos estudos clínicos de Fase 2 (TRIUMPH-1), ela demonstrou uma perda de peso corporal média impressionante de até 24,2% após 48 semanas.
                </p>
            </div>

            {/* AUDIO E ÍNDICE */}
            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col bg-slate-50">
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-green-600 w-6 h-6" />
                  <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
                </div>
                <audio controls className="w-full h-10 outline-none">
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Retatrutida.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o áudio.
                </audio>
              </div>

              <nav className="bg-slate-50 border-t border-green-100/60">
                <button 
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Activity size={18} className="text-green-600" />
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Artigo</h3>
                  </div>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} />
                </button>

                <div className={`transition-all duration-500 ${isTocOpen ? 'max-h-[500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                  <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 list-none m-0">
                    <li><a href="#mecanismo" className="text-slate-500 hover:text-green-600 font-bold transition-colors">O Mecanismo Triplo</a></li>
                    <li><a href="#resultados" className="text-slate-500 hover:text-green-600 font-bold transition-colors">Resultados Clínicos</a></li>
                    <li><a href="#nutricao" className="text-slate-500 hover:text-green-600 font-bold transition-colors">Fator Nutricional</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>A ciência metabólica acaba de revelar uma molécula que promete ser o maior avanço tecnológico no tratamento da obesidade: a retatrutida. Enquanto medicamentos anteriores focavam em uma via, ela utiliza uma sinergia tripla.</p>

              <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-600"/> O Mecanismo de Ação
              </h2>
              <p>A retatrutida atua simulando a ação dos hormônios GLP-1 e GIP (que controlam saciedade) e do Glucagon, que ajuda a aumentar o gasto energético e a queima de gordura.</p>

              <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
                “Não é apenas sobre comer menos, é sobre reprogramar como o corpo gasta energia.”
              </div>

              <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Scale className="text-green-600"/> Resultados do Estudo TRIUMPH-1
              </h2>
              <p>Os dados mostram que com a dose de 12mg, os pacientes perderam quase um quarto do seu peso corporal em menos de um ano. Além disso, houve melhorias significativas na saúde do fígado (redução de esteatose hepática).</p>

              <Newsletter />
            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          {/* AUTOR */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador ISAK Nível 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
                Especialista em traduzir o rigor dos artigos científicos para a prática do dia a dia.
              </p>
              <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md">
                Siga @Nutricao_com_Marco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
