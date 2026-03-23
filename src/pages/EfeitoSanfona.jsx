import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Headphones, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function EfeitoSanfona() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Efeito Sanfona e Inflamação Invisível | Nutrição com Marco</title>
        <meta name="description" content="Descubra por que o reganho de peso é mais perigoso que a obesidade estável e como a memória das suas células de gordura impacta sua saúde." />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Efeito Sanfona e Inflamação Invisível | Nutrição com Marco" />
        <meta property="og:description" content="Descubra por que o reganho de peso é mais perigoso que a obesidade estável e como a memória das suas células de gordura impacta sua saúde." />
        <meta property="og:image" content="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/efeito_sanfona.png" />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/efeito_sanfona_inflamacao_invisivel" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O Perigo Oculto do Efeito Sanfona: Por que engordar e emagrecer inflama o seu corpo",
            "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/efeito_sanfona.png",
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png"}},
            "datePublished": "2026-03-20",
            "description": "Descubra por que o reganho de peso é mais perigoso que a obesidade estável e como a memória das suas células de gordura impacta sua saúde."
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
                "name": "O efeito sanfona estraga o metabolismo para sempre?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não é permanente, mas cria 'memórias' nas células de gordura que as tornam mais propensas a inflamar novamente de forma rápida. O corpo precisa de tempo e de uma dieta estável para se recuperar fisiologicamente dessa inflamação."
                }
              },
              {
                "@type": "Question",
                "name": "Por que sinto mais fome após emagrecer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "É uma resposta de sobrevivência. O corpo reduz o gasto de energia (metabolismo basal) e aumenta drasticamente a produção de hormônios da fome, como a Grelina, para tentar forçar a reposição dos estoques de gordura perdidos."
                }
              },
              {
                "@type": "Question",
                "name": "É melhor ficar acima do peso do que viver no efeito sanfona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, a ciência atual sugere que flutuações constantes e bruscas de peso podem ser mais prejudiciais ao sistema cardiovascular do que manter um peso estável, mesmo que este esteja acima do considerado ideal, devido à severidade da inflamação gerada no reganho."
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
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiopatologia e Metabolismo</span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Efeito Sanfona e a Inflamação Invisível: Por que o reganho de peso é tão perigoso?
          </h1>

          {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: por que o efeito sanfona faz mal?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                O efeito sanfona (ciclo de peso) é perigoso porque o reganho rápido de gordura força o crescimento agressivo das células adiposas, gerando falta de oxigênio e uma inflamação severa que aumenta os riscos de doenças cardiovasculares e resistência à insulina.
              </p>
          </div>
          {/* FIM DO BLOCO DE RESPOSTA DIRETA */}
          
          {/* SESSÃO DO ÁUDIO (OUVIR O ARTIGO) - DESIGN COMPACTO */}
          <div className="my-8 p-5 bg-slate-50 rounded-3xl border border-green-100 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Headphones className="text-green-600 w-6 h-6" />
              <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
            </div>
            <audio controls className="w-full h-10 outline-none">
              <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/EfeitoSanfona.mp3" type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
          {/* FIM DA SESSÃO DO ÁUDIO */}
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>Você já sentiu que, logo após terminar uma dieta e perder peso, o seu corpo parece fazer um esforço enorme para ganhar tudo de novo? Esse vaivém da balança, conhecido como efeito sanfona ou ciclo de peso, é um dos maiores desafios para quem busca saúde, já que a grande maioria das pessoas que tentam emagrecer acaba enfrentando dificuldades reais para manter o peso mais baixo a longo prazo.</p>

            {/* IMAGEM DE CAPA COM ALT E TITLE ARRUMADOS */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={`${githubImgBase}Blog/efeito_sanfona.jpg`} 
                alt="Ilustração do metabolismo e o impacto do efeito sanfona" 
                title="Os perigos do reganho de peso e a inflamação celular invisível"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">O reganho de peso é um evento inflamatório agressivo para as células.</p></div>
            </div>

            <p>A ciência moderna nos mostra que isso acontece porque o nosso corpo não encara o emagrecimento apenas como uma mudança estética, mas como um evento que mexe profundamente com o funcionamento das nossas células de gordura e com o equilíbrio do nosso metabolismo. Essa oscilação constante está ligada a riscos aumentados de doenças cardiovasculares e diabetes, provando que o impacto vai muito além do que vemos no espelho.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Sua gordura é mais do que um "estoque" de energia</h2>
            <p>Muitas vezes, olhamos para a gordura apenas como um estoque de energia, mas ela funciona como um verdadeiro órgão endócrino. Em um estado de saúde, esse tecido é flexível, mas o excesso crônico de nutrientes desencadeia uma inflamação silenciosa de baixo grau.</p>

            {/* QUADRO DE DESTAQUE COM LINK CORRIGIDO */}
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "A obesidade causa uma reprogramação profunda nas células (epigenética) que não se resolve completamente apenas com a dieta."
            </div>

            {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">👉</span> O que é a inflamação de baixo grau?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                A inflamação de baixo grau é uma resposta crônica e silenciosa do sistema imunológico. Na obesidade e no efeito sanfona, ela ocorre quando as células de gordura crescem excessivamente e começam a liberar citocinas pró-inflamatórias, prejudicando o metabolismo de todo o corpo.
              </p>
            </div>
            {/* FIM DO BLOCO CITÁVEL */}

            <p>Estudos recentes de 2025 mostram que a formação de tecidos mais rígidos, conhecidos como fibrose, faz com que o sistema de defesa do tecido continue em um estado de alerta disfuncional. Essa memória persistente explica por que qualquer descuido que leve ao reganho de peso pode reacender a inflamação com uma rapidez e gravidade surpreendentes. É aqui que entra a importância de uma <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">avaliação física detalhada</Link> para identificar se o que você está ganhando é realmente tecido inflamado ou massa magra.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">O que acontece quando o peso volta?</h2>
            <p>O grande perigo do efeito sanfona está no que acontece quando recuperamos o peso perdido. De acordo com pesquisas, o reganho de peso costuma ser muito mais agressivo para o corpo do que o ganho inicial. Quando você volta a engordar, as suas células de gordura crescem rápido demais (hipertrofia), gerando falta de oxigênio no tecido e reativando a inflamação de forma ainda mais forte. Esse estresse celular pode ser mais prejudicial ao coração do que manter um peso estável, mesmo que um pouco acima do ideal.</p>

            {/* PRIMEIRA LISTA OBJETIVA (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que acontece com o corpo no efeito sanfona?
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Crescimento rápido e inflamatório das células de gordura
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Redução sustentada da taxa metabólica basal
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Alteração na "memória" epigenética do tecido adiposo
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Aumento do risco de resistência à insulina
                </li>
              </ul>
            </div>
            {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

            {/* VÍDEO COMPLEMENTAR INTEGRADO */}
            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">Como quebrar o ciclo do efeito sanfona?</h3>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic text-left">Entenda como as flutuações de peso impactam o seu metabolismo basal e o que a ciência recomenda para manter a estabilidade a longo prazo.</p>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/3dy2cotfAWM" 
                  title="Como Evitar o Efeito Sanfona" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* SEGUNDA LISTA OBJETIVA (SOLUÇÕES PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Como quebrar o efeito sanfona definitivamente
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Evitar restrições calóricas extremas e não sustentáveis
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Focar no treinamento de força para preservar massa muscular
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Priorizar alimentos anti-inflamatórios e ricos em fibras
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Acompanhar a composição corporal via avaliação antropométrica
                </li>
              </ul>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">O segredo está na constância, não na pressa</h2>
            <p>A mensagem principal aqui é que o nosso tecido adiposo é dinâmico. Para quebrar esse ciclo de inflamação e proteger o seu metabolismo, o foco não deve ser em dietas milagrosas que prometem perdas rápidas, mas sim em estratégias sustentáveis. Evitar essas flutuações bruscas na balança (que muitas vezes são apenas variações de água, como vemos nos problemas de <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">confiabilidade da bioimpedância</Link>) é a melhor forma de garantir que o seu corpo realmente recupere a saúde.</p>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">O efeito sanfona estraga o metabolismo para sempre?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Não é permanente, mas cria "memórias" nas células de gordura que as tornam mais propensas a inflamar novamente de forma rápida. O corpo precisa de tempo e de uma dieta estável para se recuperar fisiologicamente dessa inflamação.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Por que sinto mais fome após emagrecer?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">É uma resposta de sobrevivência. O corpo reduz o gasto de energia (metabolismo basal) e aumenta drasticamente a produção de hormônios da fome, como a Grelina, para tentar forçar a reposição dos estoques de gordura perdidos.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">É melhor ficar acima do peso do que viver no efeito sanfona?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Sim, a ciência atual sugere que flutuações constantes e bruscas de peso podem ser mais prejudiciais ao sistema cardiovascular do que manter um peso estável, mesmo que este esteja acima do considerado ideal, devido à severidade da inflamação gerada no reganho.</p>
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
          
          {/* Foto do Autor no lugar do 'M' */}
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
