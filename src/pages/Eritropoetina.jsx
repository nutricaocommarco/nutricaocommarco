import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle, Headphones, ChevronRight, Activity, AlertTriangle, Shield } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Eritropoetina() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Doping na Altitude: Eritropoetina e Ética no Esporte | Nutrição com Marco</title>
        <meta name="description" content="Entenda os riscos fatais do uso sintético do hormônio eritropoetina e da transfusão de hemácias no esporte de alta performance." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Doping na Altitude: Eritropoetina e Ética no Esporte | Nutrição com Marco" />
        <meta property="og:description" content="Entenda os riscos fatais do uso sintético do hormônio eritropoetina e da transfusão de hemácias no esporte de alta performance." />
        <meta property="og:image" content={`${githubImgBase}Blog/eritropoietina.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "O Dilema do Sangue na Altitude: Como o Hormônio Eritropoetina e a Transfusão de Hemácias Afetam a Ética no Esporte",
            "image": `${githubImgBase}Blog/eritropoietina.jpg`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": "2026-03-20",
            "dateModified": "2026-03-21",
            "description": "Entenda os riscos fatais do uso sintético do hormônio eritropoetina e da transfusão de hemácias no esporte de alta performance."
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
                "name": "Qual é o principal perigo de usar o hormônio eritropoetina sintético sem indicação médica?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O maior risco é o aumento exagerado da viscosidade do sangue. Isso obriga o coração a trabalhar com uma carga muito mais pesada e facilita a formação de trombos, podendo causar infartos ou derrames cerebrais fatais."
                }
              },
              {
                "@type": "Question",
                "name": "Por que a transfusão de hemácias é proibida mesmo que o sangue seja do próprio atleta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ela é proibida porque altera artificialmente a capacidade de transporte de oxigênio, criando uma vantagem injusta e oferecendo riscos graves à saúde devido ao espessamento súbito do sangue circulante no momento da prova."
                }
              },
              {
                "@type": "Question",
                "name": "Existe alguma forma legal de aumentar o oxigênio no sangue para provas na altitude?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, a forma legal e segura é o processo natural de aclimatização. Ao chegar ao local da prova com semanas de antecedência, o corpo produz seu próprio hormônio eritropoetina em níveis seguros, adaptando-se ao ar rarefeito gradualmente."
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
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Nutrição Esportiva</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Dilema do Sangue na Altitude: Como o Hormônio Eritropoetina e a Transfusão de Hemácias Afetam a Ética no Esporte
          </h1>

          {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: por que o doping sanguíneo na altitude é tão perigoso?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                O uso sintético de eritropoetina (EPO) ou a transfusão de hemácias aumenta artificialmente os glóbulos vermelhos. Isso torna o sangue do atleta extremamente espesso e viscoso, multiplicando o risco de sofrer tromboses, infartos ou AVCs durante o esforço físico intenso.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Eritropoietina.mp3" type="audio/mpeg" />
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
                    <a href="#papel-eritropoetina" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Papel da Eritropoetina
                    </a>
                  </li>
                  <li>
                    <a href="#riscos-fatais" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Riscos Fatais
                    </a>
                  </li>
                  <li>
                    <a href="#etica-esporte" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Ética no Esporte
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* FIM DA CAIXA COMBINADA */}

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>Correr uma maratona em um lugar como San Pedro do Atacama, a 2.500 metros acima do nível do mar, é um teste de fogo para qualquer ser humano. Para um corredor que sai do Rio de Janeiro, acostumado com a abundância de oxigênio do litoral, o impacto é imediato. O ar rarefeito da altitude faz com que cada respiração pareça insuficiente, forçando o organismo a buscar saídas para não entrar em colapso. É nesse cenário de pressão extrema que muitos atletas se veem diante de propostas tentadoras, porém perigosas e ilegais, que prometem melhorar o desempenho de forma artificial, mas que colocam a vida em risco.</p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/eritropoietina.jpg`} alt="Esporte em alta altitude e o hormônio eritropoetina" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">O ar rarefeito impõe desafios extremos ao sistema cardiovascular do atleta.</p></div>
            </div>

            <h2 id="papel-eritropoetina" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Entenda o papel do hormônio eritropoetina no desempenho físico</h2>
            <p>O hormônio eritropoetina, também conhecido pela sigla EPO, é uma substância produzida naturalmente pelos nossos rins com uma função muito clara, que é estimular a medula óssea a fabricar mais glóbulos vermelhos. Essas células são os veículos que transportam o oxigênio para os <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">músculos</Link> durante o exercício. Em condições normais de altitude, o corpo aumenta a produção desse hormônio de forma gradual para se adaptar à falta de O2.</p>
            <p>No entanto, quando um atleta utiliza a versão sintética desse hormônio, ele está forçando uma produção exagerada de células sanguíneas. Isso cria uma vantagem artificial de resistência, mas faz com que o sangue perca sua fluidez natural e se torne perigosamente viscoso, aumentando o esforço do coração para bombear esse líquido pesado pelo corpo.</p>

            {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">👉</span> O que é o hormônio Eritropoetina (EPO)?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                A eritropoetina é um hormônio produzido naturalmente pelos rins. Sua principal função é estimular a medula óssea a fabricar mais hemácias (glóbulos vermelhos), que são responsáveis por transportar oxigênio para os músculos e tecidos. Na altitude, o corpo aumenta sua produção naturalmente para compensar o ar rarefeito.
              </p>
            </div>
            {/* FIM DO BLOCO CITÁVEL */}

            <h2 id="riscos-fatais" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Os riscos fatais da transfusão de hemácias e do sangue viscoso</h2>
            <p>Outro método frequentemente discutido nos bastidores do doping é a transfusão de hemácias. Essa prática consiste em injetar glóbulos vermelhos extras na corrente sanguínea do atleta pouco antes da competição, com o objetivo de turbinar a oxigenação muscular de forma instantânea.</p>
            <p>O grande perigo aqui é que, ao elevar o hematócrito além dos limites fisiológicos, o sangue fica tão "grosso" que o risco de formação de coágulos dispara. Essa viscosidade excessiva pode levar a consequências catastróficas, como o acidente vascular cerebral (AVC), o infarto agudo do miocárdio e a trombose. O que era para ser um ganho de performance acaba se tornando uma bomba-relógio para o <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">sistema circulatório</Link>, podendo causar morte súbita em momentos de esforço intenso.</p>

            {/* PRIMEIRA LISTA OBJETIVA (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Quais os riscos fatais do doping sanguíneo?
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Sobrecarga cardíaca (o coração faz muito mais força para bombear)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Alto risco de trombose venosa profunda
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Probabilidade elevada de infarto agudo do miocárdio
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Risco de Acidente Vascular Cerebral (AVC) isquêmico
                </li>
              </ul>
            </div>
            {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

            <h2 id="etica-esporte" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">A importância da ética no esporte e o valor do jogo limpo</h2>
            <p>Além dos perigos físicos, precisamos olhar para a ética no esporte como o pilar que sustenta qualquer competição saudável. O uso de substâncias ilícitas ou métodos proibidos quebra o princípio da igualdade e desrespeita todos os outros competidores que se dedicaram anos a fio com treinos honestos e <Link to="/quantas_frutas_posso_comer" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">alimentação adequada</Link>.</p>
            <p>A vitória conquistada através de manipulações químicas perde seu brilho e sua legitimidade, transformando o esporte em uma disputa de laboratórios em vez de uma celebração do potencial humano. Manter-se fiel aos princípios da honestidade não é apenas uma questão de passar nos exames antidoping, mas sim de preservar a integridade da modalidade e a própria dignidade como atleta profissional.</p>

            {/* SEGUNDA LISTA OBJETIVA (SOLUÇÕES PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Como melhorar o desempenho na altitude de forma legal
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Fazer aclimatização prévia (chegar com semanas de antecedência)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Utilizar o protocolo de "dormir alto e treinar baixo"
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Manter hidratação rigorosa para preservar a fluidez do sangue
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Ajustar a dieta com foco na ingestão adequada de ferro e antioxidantes
                </li>
              </ul>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">Os Incríveis Efeitos do Treinamento na Altitude</h3>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic text-left">Descubra como os atletas de elite realizam o processo de aclimatização natural, aumentando a produção de hemoglobina de forma segura através do chamado "camping" na altitude.</p>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/tKQfYgjkbLI?start=19" 
                  title="Os incríveis efeitos do treinamento na altitude" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual é o principal perigo de usar o hormônio eritropoetina sintético sem indicação médica?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">O maior risco é o aumento exagerado da viscosidade do sangue. Isso obriga o coração a trabalhar com uma carga muito mais pesada e facilita a formação de trombos, podendo causar infartos ou derrames cerebrais fatais.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Por que a transfusão de hemácias é proibida mesmo que o sangue seja do próprio atleta?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Ela é proibida porque altera artificialmente a capacidade de transporte de oxigênio, criando uma vantagem injusta e oferecendo riscos graves à saúde devido ao espessamento súbito do sangue circulante no momento da prova.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Existe alguma forma legal de aumentar o oxigênio no sangue para provas na altitude?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Sim, a forma legal e segura é o processo natural de aclimatização. Ao chegar ao local da prova com semanas de antecedência, o corpo produz seu próprio hormônio eritropoetina em níveis seguros, adaptando-se ao ar rarefeito gradualmente.</p>
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

