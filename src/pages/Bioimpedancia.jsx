import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, PlayCircle, HelpCircle, Zap, Headphones, ChevronRight, Activity, AlertTriangle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Bioimpedancia() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
   <>
    <Helmet>
        <title>A balança de bioimpedância é confiável? | Nutrição com Marco</title>
        <meta name="description" content="Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="A balança de bioimpedância é confiável? | Nutrição com Marco" />
        <meta property="og:description" content="Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura." />
        <meta property="og:image" content={`${githubImgBase}Blog/bioimpedancia.png`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "A Balança de Bioimpedância é Realmente Confiável?",
            "image": `${githubImgBase}Blog/bioimpedancia.png`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": "2026-03-20",
            "dateModified": "2026-03-21",
            "description": "Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura."
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
                "name": "A balança de bioimpedância acerta meu percentual de gordura?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não exatamente de forma direta. Ela fornece uma estimativa baseada na sua água corporal. Como o corpo humano flutua em hidratação, os valores de gordura podem variar dependendo da quantidade de água retida no momento da pesagem."
                }
              },
              {
                "@type": "Question",
                "name": "Qual o melhor horário para fazer bioimpedância?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O horário ideal é pela manhã, em jejum, após esvaziar a bexiga e antes de praticar qualquer atividade física. Padronizar essas condições é o único jeito de garantir que as estimativas sejam minimamente comparáveis ao longo do tempo."
                }
              },
              {
                "@type": "Question",
                "name": "A bioimpedância substitui as dobras cutâneas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Para quem busca precisão clínica e isolamento de oscilações hídricas, a antropometria (método ISAK) é muito mais consistente, sendo o padrão-ouro acessível para medir a gordura subcutânea real."
                }
              },
              {
                "@type": "Question",
                "name": "Por que meu percentual muda tanto de um dia para o outro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Essa flutuação rápida raramente é ganho ou perda de gordura real. Trata-se de variações na sua água corporal total, que podem ser causadas pelo consumo de sódio, carboidratos, ciclo menstrual, suor ou nível de hidratação no dia."
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
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Composição Corporal</span>
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">A balança de bioimpedância é confiável?</h1>

          {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Resposta rápida: a balança de bioimpedância é confiável?
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                A bioimpedância fornece uma estimativa útil, mas não é 100% precisa. Como ela avalia o corpo medindo a resistência da passagem de uma corrente elétrica pela água, qualquer variação na sua hidratação (suor, ciclo menstrual, retenção de líquidos) pode alterar drasticamente o seu percentual de gordura na tela.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Bioimpedancia.mp3" type="audio/mpeg" />
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
                    <a href="#como-funciona" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Como Funciona?
                    </a>
                  </li>
                  <li>
                    <a href="#interferencias" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Que Interfere
                    </a>
                  </li>
                  <li>
                    <a href="#frequencias" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Frequências e Aparelhos
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Perguntas Frequentes
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* FIM DA CAIXA COMBINADA */}

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>A balança de bioimpedância é uma ferramenta bastante utilizada para estimar a composição corporal — como percentual de gordura, massa muscular e água corporal. Mas afinal, <strong>ela é realmente confiável?</strong> A resposta mais honesta é: depende de como ela é usada.</p>
            
            <h2 id="como-funciona" className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">Como a Bioimpedância Funciona?</h2>
            
            <p>A bioimpedância funciona a partir da passagem de uma corrente elétrica de baixa intensidade pelo corpo. Essa corrente percorre os tecidos com diferentes níveis de resistência: a água conduz eletricidade com facilidade, enquanto a gordura oferece maior resistência. A partir dessa diferença, o aparelho faz estimativas sobre a composição corporal.</p>

            {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
              <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-green-600 text-2xl leading-none">👉</span> O que é o exame de bioimpedância?
              </h3>
              <p className="m-0 text-slate-600 font-medium leading-relaxed">
                É um método de avaliação da composição corporal que utiliza uma corrente elétrica de baixíssima intensidade. A corrente viaja rapidamente pela água (presente nos músculos) e encontra resistência na gordura. Através dessa diferença de condutividade, o aparelho estima a proporção de massa magra e tecido adiposo.
              </p>
            </div>
            {/* FIM DO BLOCO CITÁVEL */}

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/Bia1.jpg`} alt="Balança de Bioimpedância" title="Confiabilidade da Bioimpedância" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A bioimpedância estima o corpo através da água e não mede a gordura diretamente.</p></div>
            </div>

            <p>E aqui está o ponto-chave: <strong>ela não mede gordura diretamente — ela mede, principalmente, a quantidade de água corporal.</strong> A partir disso, utiliza equações para estimar os demais componentes. Ou seja, qualquer fator que altere a quantidade ou a distribuição de água no corpo pode impactar significativamente o resultado. Por isso, a bioimpedância não é 100% confiável, especialmente quando o protocolo não é seguido corretamente.</p>

            <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
              <div className="flex items-center gap-4 mb-8">
                <PlayCircle size={32} className="text-green-600" />
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Entenda no Vídeo</h3>
              </div>
              <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                <iframe src="https://www.instagram.com/p/DUYdSIukaS_/embed" width="400" height="600" frameBorder="0" scrolling="no" allowTransparency="true" className="max-w-full"></iframe>
              </div>
            </div>

            <h2 id="interferencias" className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">O que pode interferir no resultado?</h2>
            <p>Diversos fatores influenciam a quantidade de água corporal e, consequentemente, a leitura da bioimpedância: estado de hidratação, consumo recente de alimentos, exercício físico, álcool, cafeína e até a fase do ciclo menstrual. Por exemplo, uma pessoa pode apresentar um percentual de gordura maior simplesmente por estar desidratada naquele momento.</p>

            {/* PRIMEIRA LISTA OBJETIVA (OTIMIZADO PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que altera o resultado da bioimpedância?
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Nível de hidratação atual (estar desidratado superestima a gordura)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Consumo recente de alimentos e alto volume de carboidratos
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Exercício físico intenso antes do teste (altera fluidos corporais)
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Retenção hídrica na fase lútea do ciclo menstrual
                </li>
              </ul>
            </div>
            {/* FIM DA PRIMEIRA LISTA OBJETIVA */}

            {/* SEGUNDA LISTA OBJETIVA (SOLUÇÕES PARA IA E SEO) */}
            <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                Protocolo de preparo para a bioimpedância
              </h2>
              <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Fazer jejum de alimentos sólidos e água por 4 horas
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Não consumir álcool ou diuréticos nas 24 horas anteriores
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Evitar atividades físicas moderadas/intensas no dia anterior
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Não consumir Cafeína nas 24 horas anteriores
                </li>
                <li className="text-slate-700 font-bold text-lg pl-1">
                  Esvaziar a bexiga (urinar) imediatamente antes do exame
                </li>
              </ul>
            </div>
            {/* FIM DA SEGUNDA LISTA OBJETIVA */}

            <h2 id="frequencias" className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">Frequências e Balanças Octapolares</h2>
            <p>Nem toda bioimpedância é igual. Aparelhos multifrequenciais permitem uma análise mais completa, e as chamadas <strong>balanças octapolares</strong> utilizam oito pontos de contato (mãos e pés) para garantir maior precisão.</p>

            {/* QUADRO DE DESTAQUE COM LINK INTERNO */}
            <div className="bg-green-600 text-white p-10 rounded-[3.5rem] shadow-xl my-12 relative overflow-hidden">
              <Zap className="absolute -top-5 -right-5 w-24 h-24 opacity-20" />
              <h2 className="text-white text-2xl font-black uppercase italic mb-6 leading-tight text-center md:text-left">E a certificação ISAK?</h2>
              <p className="text-green-50 font-bold leading-relaxed">
                Diferente da bioimpedância, a <Link to="/o_que_e_antropometria" className="text-white underline underline-offset-4 hover:text-green-200 transition-colors font-black">antropometria</Link> bem aplicada por um profissional certificado pela ISAK tende a ser mais consistente ao longo do tempo e menos sensível a variações agudas de hidratação. É o padrão ouro para acompanhamento da evolução corporal.
              </p>
            </div>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">A balança de bioimpedância acerta meu percentual de gordura?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Não exatamente de forma direta. Ela fornece uma estimativa baseada na sua água corporal. Como o corpo humano flutua em hidratação, os valores de gordura podem variar dependendo da quantidade de água retida no momento da pesagem.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual o melhor horário para fazer bioimpedância?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">O horário ideal é pela manhã, em jejum, após esvaziar a bexiga e antes de praticar qualquer atividade física. Padronizar essas condições é o único jeito de garantir que as estimativas sejam minimamente comparáveis ao longo do tempo.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">A bioimpedância substitui as dobras cutâneas?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Não. Para quem busca precisão clínica e isolamento de oscilações hídricas, a <Link to="/o_que_e_antropometria" className="text-green-600 hover:text-green-700 underline underline-offset-2 font-bold transition-colors">antropometria (ISAK)</Link> é muito mais consistente, sendo o padrão-ouro acessível para medir a gordura subcutânea real.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Por que meu percentual muda tanto de um dia para o outro?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Essa flutuação rápida raramente é ganho ou perda de gordura real. Trata-se de variações na sua água corporal total, que podem ser causadas pelo consumo de sódio, carboidratos, ciclo menstrual, suor ou nível de hidratação no dia.</p>
                </div>
              </div>
            </div>
            {/* FIM DO FAQ VISUAL OTIMIZADO */}

            <Newsletter />
          </div> {/* FIM DA DIV DO CONTEÚDO SPACE-Y-6 */}
        </article>

        {/* COMPONENTE INTELIGENTE ADICIONADO COM SUCESSO */}
        <ArtigosRecomendados currentPath={pathname} />

        {/* INÍCIO DO NOVO CARTÃO DE AUTOR COM E-E-A-T REFORÇADO */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">

          {/* Foto do Autor no lugar do 'M' */}
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr." 
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

