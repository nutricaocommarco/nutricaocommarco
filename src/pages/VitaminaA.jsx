import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Headphones, ChevronRight, Activity, Eye, Dna, Shield } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function VitaminaA() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <Helmet>
        <title>Vitamina A para que serve? | Nutrição com Marco</title>
        <meta name="description" content="Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vitamina A para que serve? | Nutrição com Marco" />
        <meta property="og:description" content="Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão." />
        <meta property="og:image" content={`${githubImgBase}Blog/vitamina_A.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Vitamina A: Muito Além da Visão – Para que Serve e Como Funciona no Corpo",
            "image": `${githubImgBase}Blog/vitamina_A.jpg`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": "2026-03-20",
            "dateModified": "2026-03-21",
            "description": "Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão."
          })}
        </script>

        {/* INÍCIO DO SCHEMA.ORG PARA FAQ (ATUALIZADO PARA SEO 950+) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Comer muita cenoura realmente melhora a visão?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, mas até certo ponto. A cenoura é riquíssima em betacaroteno, uma pró-vitamina A que o corpo converte em retinal. O retinal previne a chamada cegueira noturna, no entanto, não vai corrigir o grau dos seus óculos caso você tenha problemas como miopia."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a diferença entre tomar suplemento de vitamina A e usar cremes com ácido retinóico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A diferença está na forma de atuação. Um suplemento oral de retinol tem um efeito sistêmico no corpo (visão e imunidade). Já os cremes com ácido retinóico agem localmente onde são aplicados, acelerando a renovação celular da pele, sem atuar na sua visão."
                }
              },
              {
                "@type": "Question",
                "name": "É possível ter excesso de vitamina A no organismo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, a hipervitaminose A. Como a vitamina A é lipossolúvel, o que o corpo não usa é estocado no fígado. O excesso de suplementos de retinol pode causar toxicidade hepática, dores de cabeça e ressecamento da pele."
                }
              }
            ]
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA FAQ */}
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiologia e Metabolismo</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">
            Vitamina A para que serve? Entenda as diferenças entre retinol, retinal e ácido retinóico
          </h1>

          {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: para que serve a Vitamina A?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A vitamina A é fundamental para três processos principais: o Retinal mantém a saúde da visão, o Ácido Retinóico regula a expressão dos nossos genes e a renovação celular da pele, e o Retinol atua no fortalecimento do sistema imunológico e no crescimento saudável.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/VitA.mp3" type="audio/mpeg" />
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
                    <a href="#o-que-e" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Absorção e Conceitos
                    </a>
                  </li>
                  <li>
                    <a href="#diferencas" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Eye size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      As Três Formas
                    </a>
                  </li>
                  <li>
                    <a href="#metabolismo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Dna size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Metabolismo
                    </a>
                  </li>
                  <li>
                    <a href="#para-que-serve" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Afinal, para que serve?
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* FIM DA CAIXA COMBINADA */}

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>A <strong>vitamina A</strong> é um nutriente essencial para o funcionamento adequado do organismo. Mas afinal, vitamina A para que serve? Sua atuação vai muito além da visão: ela participa da imunidade, da saúde da pele, do crescimento celular e da regulação genética.</p>

            <p>Para entender melhor suas funções, é fundamental conhecer as três principais formas ativas da vitamina A no corpo: <strong>retinol, retinal e ácido retinóico</strong>. Apesar de estarem relacionadas, cada uma possui características químicas e funções específicas.</p>

            {/* IMAGEM ESTRATÉGICA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/vitamina_a.jpg`} alt="Metabolismo da Vitamina A: Retinol, Retinal e Ácido Retinóico" title="Vitamina A e suas formas ativas" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">As três formas da Vitamina A e suas funções no metabolismo.</p></div>
            </div>

            <h2 id="o-que-e" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O que é a vitamina A e como ela é absorvida?
            </h2>

            {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">👉</span> O que são vitaminas lipossolúveis?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                As vitaminas lipossolúveis (como a vitamina A, D, E e K) são aquelas que o corpo só consegue absorver de forma eficiente quando consumidas junto com gorduras na alimentação. Ao contrário das vitaminas hidrossolúveis (como a C), as lipossolúveis podem ser armazenadas no fígado e no tecido adiposo para uso futuro.
              </p>
            </div>
            {/* FIM DO BLOCO CITÁVEL */}

            <p>A vitamina A é <strong>lipossolúvel</strong>, ou seja, é absorvida junto com gorduras da dieta e pode ser armazenada no organismo, principalmente no fígado. Ela pode ser obtida de duas formas:</p>

            <ul className="list-disc pl-6 space-y-2 marker:text-green-600 font-bold text-slate-700">
              <li><span className="font-medium text-slate-600"><strong>Vitamina A pré-formada (retinol):</strong> encontrada em alimentos de origem animal.</span></li>
              <li>
                <span className="font-medium text-slate-600">
                  <strong>Pró-vitamina A (carotenoides):</strong> presente em vegetais como cenoura, abóbora e manga. (Se tem dúvidas sobre as porções ideais destas frutas, confira o nosso guia completo sobre <Link to="/quantas_frutas_posso_comer" className="text-green-600 hover:text-green-700 underline underline-offset-2 font-bold transition-colors">quantas frutas comer por dia</Link>).
                </span>
              </li>
            </ul>

            <p>Ao ser ingerida (por exemplo, na forma de carotenoides), a vitamina A passa por conversões no organismo até chegar às suas formas ativas.</p>

            <h2 id="diferencas" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Retinol, retinal e ácido retinóico: qual a diferença?
            </h2>

            {/* PRIMEIRA LISTA OBJETIVA (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                As principais formas ativas da Vitamina A no corpo
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  <strong>Retinol:</strong> A forma base, serve para transporte no sangue e armazenamento no fígado.
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  <strong>Retinal (Retinaldeído):</strong> A forma responsável pela visão e adaptação a ambientes escuros.
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  <strong>Ácido Retinóico:</strong> A forma mais potente, responsável por ligar e desligar a expressão dos nossos genes.
                </li>
              </ul>
            </div>
            {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">🔹 Retinol (C20H30O)</h3>
            <p>O <strong>retinol</strong> é a forma mais comum e <strong>armazenável</strong> da vitamina A.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>É conhecido como vitamina A1</li>
              <li>Atua como forma de transporte e reserva</li>
              <li>Pode ser convertido em retinal conforme a necessidade</li>
              <li>Participa da saúde da pele, imunidade e visão</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 my-6">
              <p className="m-0 text-slate-700">No organismo, o retinol não circula sozinho — ele precisa se ligar a proteínas específicas para ser transportado com segurança.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">🔹 Retinal (C20H28O)</h3>
            <p>O <strong>retinal</strong>, também chamado de retinaldeído, é a forma <strong>biologicamente ativa na visão</strong>.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>É derivado da oxidação do retinol</li>
              <li>Atua diretamente na retina</li>
              <li>Essencial para a visão em ambientes com pouca luz</li>
              <li>Pode ser convertido de volta em retinol (processo reversível)</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 my-6">
              <p className="m-0 text-slate-700">Essa interconversão entre retinol e retinal permite que o corpo mantenha equilíbrio conforme a demanda fisiológica.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">🔹 Ácido retinóico (C20H28O2)</h3>
            <p>O <strong>ácido retinóico</strong> é a forma mais oxidada da vitamina A e tem uma função completamente diferente.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>Atua na <strong>expressão gênica</strong></li>
              <li>Regula crescimento e diferenciação celular</li>
              <li>Fundamental para saúde da pele e sistema imunológico</li>
              <li>Não participa da visão</li>
              <li>Não pode ser convertido de volta em retinal ou retinol (processo irreversível)</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 my-6">
              <p className="m-0 text-slate-700">Essa irreversibilidade torna o ácido retinóico uma espécie de “forma final” da vitamina A no metabolismo.</p>
            </div>

            <h2 id="metabolismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Como ocorre o metabolismo da vitamina A?
            </h2>

            <p>Quando ingerimos vitamina A (como em alimentos ou suplementos), ela pode estar na forma de <strong>ésteres de retinil</strong> ou carotenoides. O processo básico é:</p>

            {/* SEGUNDA LISTA OBJETIVA (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O caminho da Vitamina A no organismo
              </h2>
              <ol className="list-decimal pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">Digestão e absorção ocorrem no intestino junto com as gorduras</li>
                <li className="text-slate-700 font-bold text-lg pl-1">Conversão primária em Retinol</li>
                <li className="text-slate-700 font-bold text-lg pl-1">Transporte pelo sangue através de lipoproteínas (como quilomícrons)</li>
                <li className="text-slate-700 font-bold text-lg pl-1">Armazenamento principal de longo prazo no fígado</li>
                <li className="text-slate-700 font-bold text-lg pl-1">Oxidação final para Retinal ou Ácido Retinóico de acordo com a necessidade dos tecidos</li>
              </ol>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            {/* CITAÇÃO EM DESTAQUE */}
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "Um ponto importante: retinol e retinal são interconvertíveis, mas o ácido retinóico não volta às formas anteriores."
            </div>

            <h2 id="para-que-serve" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Afinal, vitamina A para que serve?
            </h2>

            <p>De forma resumida, a vitamina A é essencial para:</p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3"><span className="text-2xl">👁️</span> <strong>Visão</strong>, especialmente noturna (retinal)</li>
              <li className="flex items-center gap-3"><span className="text-2xl">🧬</span> <strong>Regulação genética</strong> (ácido retinóico)</li>
              <li className="flex items-center gap-3"><span className="text-2xl">🛡️</span> <strong>Sistema imunológico</strong></li>
              <li className="flex items-center gap-3"><span className="text-2xl">🧴</span> <strong>Saúde da pele e mucosas</strong></li>
              <li className="flex items-center gap-3"><span className="text-2xl">📈</span> <strong>Crescimento e desenvolvimento celular</strong></li>
            </ul>

            <p className="mt-6">Cada uma dessas funções depende diretamente da forma ativa envolvida — por isso entender retinol, retinal e ácido retinóico é tão importante na prática clínica e nutricional.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Conclusão
            </h2>

            <p>A vitamina A não é uma molécula única com uma única função. Na verdade, ela atua como um <strong>sistema integrado de compostos</strong>, onde:</p>

            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>O <strong>retinol</strong> armazena e transporta</li>
              <li>O <strong>retinal</strong> atua na visão</li>
              <li>O <strong>ácido retinóico</strong> regula genes e crescimento celular</li>
            </ul>

            <p>Essa dinâmica mostra como a nutrição vai muito além do consumo de nutrientes — envolve também a forma como o corpo transforma e utiliza cada substância. Se você quer aprofundar sua prática ou melhorar sua alimentação, entender esse metabolismo é um diferencial enorme.</p>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes sobre a Vitamina A</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Comer muita cenoura realmente melhora a visão?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Sim, mas até certo ponto. A cenoura é riquíssima em betacaroteno, uma pró-vitamina A que o corpo converte em retinal. O retinal previne a chamada cegueira noturna, no entanto, não vai corrigir o grau dos seus óculos caso você tenha problemas como miopia.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual a diferença entre tomar suplemento de vitamina A e usar cremes com ácido retinóico?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A diferença está na forma de atuação. Um suplemento oral de retinol tem um efeito sistêmico no corpo (visão e imunidade). Já os cremes com ácido retinóico agem localmente onde são aplicados, acelerando a renovação celular da pele, sem atuar na sua visão.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">É possível ter excesso de vitamina A no organismo?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Sim, a hipervitaminose A. Como a vitamina A é lipossolúvel, o que o corpo não usa é estocado no fígado. O excesso de suplementos de retinol pode causar toxicidade hepática, dores de cabeça e ressecamento da pele.</p>
                </div>
              </div>
            </div>
            {/* FIM DO FAQ VISUAL OTIMIZADO */}

            <Newsletter />
          </div> {/* FIM DA DIV DO CONTEÚDO SPACE-Y-6 */}
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

      </div> {/* FIM DA DIV BRANCA GIGANTE */}
    </section>
    </>
  );
}

