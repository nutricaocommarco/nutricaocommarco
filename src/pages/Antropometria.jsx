import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, PlayCircle, HelpCircle, Headphones } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Antropometria() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <Helmet>
        <title>O que é Antropometria? A Ciência Exata da Avaliação | Nutrição com Marco</title>
        <meta name="description" content="Descubra o que é Antropometria e como a avaliação física ISAK revela sua real composição corporal, muito além da balança." />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O que é Antropometria? A Ciência Exata da Avaliação | Nutrição com Marco" />
        <meta property="og:description" content="Descubra o que é Antropometria e como a avaliação física ISAK revela sua real composição corporal, muito além da balança." />
        <meta property="og:image" content="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/antropometria.png" />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/o_que_e_antropometria" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O Que É Antropometria e Por Que Ela é Essencial para a Avaliação Física",
            "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/antropometria.png",
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png"}},
            "datePublished": "2026-03-20",
            "description": "Descubra o que é Antropometria e como a avaliação física ISAK revela sua real composição corporal, muito além da balança."
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
                "name": "Qual a vantagem da certificação ISAK na antropometria?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A certificação ISAK garante que o profissional segue um protocolo mundial rigoroso de medidas. Isso minimiza o erro técnico humano e assegura que a sua evolução seja comparável em qualquer lugar do mundo."
                }
              },
              {
                "@type": "Question",
                "name": "A antropometria é melhor que a balança de bioimpedância?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para medir a gordura real abaixo da pele de forma consistente, sim. Enquanto a bioimpedância sofre grandes oscilações devido à hidratação e ingestão de água, a antropometria (com o uso de adipômetros) mede diretamente o tecido, sendo o padrão ouro para acompanhamento esportivo."
                }
              },
              {
                "@type": "Question",
                "name": "Posso fazer avaliação antropométrica online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A antropometria completa com dobras cutâneas exige contato físico. No entanto, em consultas online, nutricionistas utilizam circunferências e métricas alternativas que fornecem parâmetros sólidos e confiáveis de evolução."
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

        <article className="prose prose-lg max-w-none text-left">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Educação Científica</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">
            O que é Antropometria? A Ciência Exata Por Trás da sua Avaliação Física
          </h1>

          {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: o que é antropometria?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A antropometria é a ciência que estuda as medidas e proporções do corpo humano. Na nutrição e no esporte, ela é usada para avaliar a composição corporal (percentual de gordura e massa muscular) utilizando instrumentos de precisão, como o adipômetro, para medir dobras cutâneas e circunferências.
              </p>
          </div>
          {/* FIM DO BLOCO DE RESPOSTA DIRETA */}

          {/* SESSÃO DO ÁUDIO (OUVIR O ARTIGO) */}
          <div className="my-8 p-5 bg-slate-50 rounded-3xl border border-green-100 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Headphones className="text-green-600 w-6 h-6" />
              <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
            </div>
            <audio controls className="w-full h-10 outline-none">
              <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Antropometria.mp3" type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
          {/* FIM DA SESSÃO DO ÁUDIO */}

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>A <strong>Antropometria</strong> é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano, sendo uma ferramenta indispensável para profissionais das áreas de saúde, nutrição esportiva e alta performance. Etimologicamente, o termo deriva do grego <em>anthropos</em> (homem) e <em>metron</em> (metodologia de medida), definindo-se objetivamente como o método de mensurar as características fenotípicas de um indivíduo para entender seu crescimento, estado nutricional e potencial de rendimento.</p>

            <p>Diferente do que muitos acreditam, a avaliação física vai muito além de uma simples pesagem na balança comum (aliás, se já se perguntou se <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">a balança de bioimpedância é confiável</Link>, vale a leitura deste artigo). A antropometria oferece uma análise profunda do que o seu peso total realmente representa, separando os tecidos para uma intervenção nutricional verdadeiramente personalizada.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              A Evolução da Composição Corporal: Da Grécia ao Padrão ISAK
            </h2>

            <p>Historicamente, a preocupação com as formas corporais remonta aos antigos egípcios e gregos, que buscavam proporções ideais para o "homem perfeito" ou para atletas olímpicos. No entanto, o nascimento da antropometria científica consolidou-se com pesquisadores como Lambert Quételet, o pai da estatística aplicada ao homem, que propôs o Índice de Massa Corporal (IMC) em 1841.</p>

            <p>Mais recentemente, na década de 1980, estudos liderados por William Ross revolucionaram a área ao demonstrar falhas nos sistemas de estimativa de composição corporal da época, servindo como base para a criação da Sociedade Internacional para o Avanço da Cineantropometria, o consagrado <strong>método ISAK</strong>.</p>

            {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">👉</span> O que significa ISAK?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                ISAK é a sigla para "International Society for the Advancement of Kinanthropometry". É o rigoroso padrão internacional que dita exatamente onde e como as medidas corporais devem ser coletadas, garantindo que o seu percentual de gordura seja comparável globalmente e livre do "achismo" técnico.
              </p>
            </div>
            {/* FIM DO BLOCO CITÁVEL */}

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/O_que_e_antropometria.png`} alt="Avaliação Física e Antropometria com certificação ISAK" title="Ciência da Antropometria e Composição Corporal" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">Precisão técnica para resultados que a balança comum não consegue mostrar.</p></div>
            </div>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Como funciona a Medição do Percentual de Gordura na Prática?
            </h2>

            <p>O grande diferencial de uma avaliação física baseada no padrão ISAK é a sua padronização rigorosa. Na prática, o antropometrista utiliza instrumentos de precisão para coletar diversas medidas, como o plicômetro para as dobras cutâneas.</p>

            {/* PRIMEIRA LISTA OBJETIVA (O QUE É MEDIDO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que avaliamos na antropometria ISAK 1?
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Massa corporal e Estatura (peso e altura precisos)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  8 Dobras Cutâneas (mede a gordura abaixo da pele)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  5 Perímetros / Circunferências (cintura, quadril, braços, etc.)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  3 Diâmetros Ósseos (entender a estrutura do esqueleto)
                </li>
              </ul>
            </div>
            {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

            <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
              <div className="flex items-center gap-4 mb-8">
                <PlayCircle size={32} className="text-green-600" />
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-left md:text-left">A Antropometria Explicada em Vídeo</h3>
              </div>
              <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                <iframe src="https://www.instagram.com/p/DUV4gfkkcab/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
              </div>
            </div>

            <p>Essas medições permitem o fracionamento da massa corporal em componentes essenciais. Para estimar o percentual de gordura de forma exata, o avaliador realiza o destaque das dobras cutâneas em pontos anatômicos específicos, conhecidos como landmarks. Um erro de poucos milímetros na marcação desses pontos pode comprometer o resultado final.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Somatotipo e o Fim do "Achismo" no Emagrecimento
            </h2>

            {/* SEGUNDA LISTA OBJETIVA (BENEFÍCIOS) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Por que você precisa de uma avaliação física detalhada?
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Permite o cálculo do somatotipo (seu perfil genético corporal)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Diferencia a perda de gordura da perda de massa muscular
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Identifica riscos de inflamação e doenças metabólicas reais
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Baseia a sua dieta em dados exatos e não no "peso da balança"
                </li>
              </ul>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            <p>Além do foco na queima de gordura corporal, a antropometria é vital para o cálculo do somatotipo. Essa classificação ajuda a planejar intervenções alimentares específicas para melhora da performance esportiva, muitas vezes negligenciada em <Link to="/vitamina_a_para_que_serve" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">músculos</Link> que precisam de nutrientes específicos para síntese.</p>

            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "Para quem busca saúde e bem-estar, a avaliação antropométrica atua como um GPS, retirando a pessoa da rota da incerteza das balanças comuns."
            </div>

            <p>Ela identifica riscos cardiovasculares e permite que nutricionistas ajustem dietas com base no volume exato de massa muscular, garantindo que a sua evolução seja monitorada por dados concretos e científicos, crucial para evitar a inflamação do <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">efeito sanfona</Link>. Portanto, investir em uma antropometria de qualidade é o primeiro passo para otimizar seus resultados.</p>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual a vantagem da certificação ISAK na antropometria?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A certificação ISAK garante que o profissional segue um protocolo mundial rigoroso de medidas. Isso minimiza o erro técnico humano e assegura que a sua evolução seja comparável em qualquer lugar do mundo. Visite o site oficial em <a href="https://isak.global/" target="_blank" rel="noreferrer" className="text-green-600 font-black hover:underline">isak.global</a>.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">A antropometria é melhor que a balança de bioimpedância?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Para medir a gordura real abaixo da pele de forma consistente, sim. Enquanto a bioimpedância sofre grandes oscilações devido à hidratação e ingestão de água, a antropometria (com o uso de adipômetros) mede diretamente o tecido, sendo o padrão ouro para acompanhamento esportivo.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Posso fazer avaliação antropométrica online?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">A antropometria completa com dobras cutâneas exige contato físico. No entanto, em consultas online, nutricionistas utilizam circunferências e métricas alternativas que fornecem parâmetros sólidos e confiáveis de evolução.</p>
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
              alt="Marco Aurélio Jr." 
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
