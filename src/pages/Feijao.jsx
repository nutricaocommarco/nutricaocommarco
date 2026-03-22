import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Headphones, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Feijao() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Por que o feijão dá gases e como evitar de vez | Nutrição com Marco</title>
        <meta name="description" content="Descubra por que o feijão causa gases e o que fazer para evitar o desconforto. Entenda como funciona a digestão e veja dicas práticas." />

        {/* INÍCIO DO OPEN GRAPH */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Por que o feijão dá gases e como evitar de vez | Nutrição com Marco" />
        <meta property="og:description" content="Descubra por que o feijão causa gases e o que fazer para evitar o desconforto. Entenda como funciona a digestão e veja dicas práticas." />
        <meta property="og:image" content="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/feijao.jpg" />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/por_que_o_feijao_da_gases" />
        {/* FIM DO OPEN GRAPH */}        
        
        {/* INÍCIO DO SCHEMA.ORG PARA ARTIGOS */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Por que o feijão dá gases e como evitar de vez",
            "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/feijao.jpg",
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
                "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png"
              }
            },
            "datePublished": "2026-03-20",
            "description": "Descubra por que o feijão causa gases e o que fazer para evitar o desconforto. Entenda como funciona a digestão e veja dicas práticas."
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA ARTIGOS */}

        {/* INÍCIO DO SCHEMA.ORG PARA FAQ (ATUALIZADO PARA SEO 950+) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Por que o corpo humano não consegue digerir o feijão direito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O problema não é o feijão em si, mas a biologia humana. Nosso corpo não produz a enzima alfa-galactosidase em quantidade suficiente para quebrar os oligossacarídeos (carboidratos complexos como a rafinose) ainda no intestino delgado. Como resultado, eles passam intactos para o intestino grosso, onde ocorre a fermentação."
                }
              },
              {
                "@type": "Question",
                "name": "Tirar a água do feijão realmente funciona contra os gases?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, essa é a estratégia mais comprovada pela ciência. O processo de demolho (deixar os grãos em água por 8 a 12 horas) e o descarte dessa água reduzem de forma drástica os compostos fermentáveis, fitatos e lectinas presentes na casca do grão, diminuindo a produção final de hidrogênio e metano no intestino."
                }
              },
              {
                "@type": "Question",
                "name": "Feijão faz mal para quem tem intestino sensível?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não necessariamente faz mal, mas exige cuidado. Pessoas com uma microbiota intestinal mais sensível ou com quadros ligados ao consumo de FODMAPs podem ter uma resposta exagerada à fermentação. Nesses casos, o fracionamento das porções e a mastigação correta são essenciais para evitar a distensão abdominal."
                }
              },
              {
                "@type": "Question",
                "name": "Qual tipo de feijão dá menos gases?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "De forma geral, leguminosas mais leves ou sem casca, como a lentilha rosa ou o feijão moyashi, tendem a fermentar menos. No entanto, o fator que mais determina a produção de gases não é o tipo do feijão, e sim o tempo adequado de remolho e o cozimento completo dos grãos."
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
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Saúde Intestinal</span>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              Por que o feijão dá gases e como evitar de vez
            </h1>

            {/* BLOCO DE RESPOSTA DIRETA */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: por que o feijão dá gases?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  O feijão causa gases porque contém oligossacarídeos, como rafinose e estaquiose, que não são digeridos no intestino delgado e são fermentados pela microbiota intestinal no intestino grosso, produzindo gases como hidrogênio e metano.
                </p>
            </div>
            
            {/* SESSÃO DO ÁUDIO */}
            <div className="my-8 p-5 bg-slate-50 rounded-3xl border border-green-100 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Feijao.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Se você já sentiu a barriga estufada depois de comer feijão, saiba que isso é extremamente comum e tem uma explicação científica exata. Apesar de ser um alimento incrivelmente nutritivo, rico em fibras, proteínas e minerais, o feijão contém compostos específicos que podem causar fermentação no intestino, levando à formação de gases. A boa notícia é que existem formas simples e comprovadas de reduzir ou até evitar completamente esse desconforto no seu dia a dia.</p>

              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <img src={`${githubImgBase}Blog/feijao.jpg`} alt="Preparo correto do feijão para evitar gases" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">O preparo correto das leguminosas transforma a sua resposta digestiva.</p></div>
              </div>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Por que o feijão dá gases?</h2>
              <p>O principal motivo para esse estufamento está na presença de carboidratos específicos chamados oligossacarídeos, tendo a rafinose como o principal exemplo. A fisiologia do nosso corpo não possui as ferramentas enzimáticas necessárias para quebrar esses compostos no intestino delgado. Como resultado, eles chegam totalmente intactos ao intestino grosso, onde são rapidamente fermentados pelas bactérias que compõem a nossa microbiota. Esse processo de fermentação bacteriana produz gases intensos como hidrogênio, metano e dióxido de carbono, o que gera aquele conhecido estufamento, desconforto abdominal e flatulência.</p>

              {/* BLOCO CITÁVEL */}
              <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
                <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="text-green-600 text-2xl leading-none">👉</span> O que são oligossacarídeos?
                </h3>
                <p className="m-0 text-slate-600 font-medium leading-relaxed">
                  Os oligossacarídeos (como a rafinose) são carboidratos complexos presentes nas leguminosas. Como o corpo humano não produz a enzima necessária para digeri-los no intestino delgado, eles chegam intactos ao intestino grosso, onde são fermentados pelas bactérias, resultando na produção de gases.
                </p>
              </div>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Outros alimentos que também causam gases</h2>
              <p>O feijão não é o único responsável por essa sensação, pois vários outros alimentos podem gerar exatamente o mesmo efeito fermentativo no seu corpo se não forem bem administrados.</p>

              {/* PRIMEIRA LISTA OBJETIVA */}
              <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  O que no feijão causa gases?
                </h2>
                <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                  <li className="text-slate-700 font-bold text-lg pl-1">Oligossacarídeos</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Rafinose</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Estaquiose</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Fermentação intestinal</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">Alimentos ricos em carboidratos fermentáveis</h3>
              <p>Quando falamos do grupo das leguminosas, alimentos ricos em carboidratos fermentáveis como a lentilha, o grão-de-bico, a soja e a ervilha seguem exatamente o mesmo caminho da rafinose, desafiando a digestão no intestino delgado e causando grande fermentação bacteriana na sequência.</p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">Vegetais e fibras fermentáveis</h3>
              <p>Além dos grãos, existem vegetais e fibras fermentáveis que potencializam esse quadro de distensão. Vegetais crucíferos como o brócolis, a couve-flor e o repolho também fazem parte desse grupo que fermenta intensamente no intestino, afetando de forma mais pesada as pessoas que já possuem um trato gastrointestinal naturalmente mais sensível.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Como evitar gases ao comer feijão</h2>

              {/* SEGUNDA LISTA OBJETIVA */}
              <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Como evitar gases do feijão (base científica)
                </h2>
                <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                  <li className="text-slate-700 font-bold text-lg pl-1">Demolho reduz oligossacarídeos</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Cozimento adequado</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Uso de enzimas digestivas</li>
                </ul>
              </div>

              <p>Chegamos à parte mais importante, onde a nutrição aplicada resolve o problema na prática através de ajustes muito pontuais na sua rotina de preparo e consumo.</p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">1. Faça o demolho corretamente</h3>
              <p>O primeiro e mais vital passo é fazer o demolho corretamente. Você deve deixar o feijão de molho em água por um período contínuo de 8 a 12 horas antes do preparo. Após esse tempo, é obrigatório descartar aquela água e cozinhar os grãos em uma água totalmente nova. Essa técnica simples reduz significativamente a concentração dos compostos que causam a fermentação no intestino.</p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">2. Mastigue bem os alimentos</h3>
              <p>O segundo ponto fundamental é lembrar que a digestão começa na boca, portanto, mastigue muito bem os alimentos. Comer rápido e engolir pedaços inteiros aumenta drasticamente a carga de trabalho do estômago e piora a fermentação e os sintomas de estufamento lá no final do processo digestivo.</p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">3. Evite excesso de uma vez</h3>
              <p>A terceira estratégia é evitar o excesso de uma só vez. Ingerir grandes quantidades de leguminosas em uma única refeição sobrecarrega o sistema e multiplica a fermentação intestinal. Se você sofre com o <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">Efeito Sanfona e a Inflamação Invisível</Link>, fracionar as porções ao longo do dia ajuda a manter o metabolismo, a inflamação e a digestão estáveis e sob controle.</p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">4. Use chás digestivos</h3>
              <p>Como quarta dica de ouro, use chás digestivos para auxiliar o processo de esvaziamento gástrico. Bebidas naturais feitas com hortelã, erva-doce ou gengibre possuem propriedades carminativas excelentes que ajudam a reduzir rapidamente os gases formados e a acalmar a musculatura do trato gastrointestinal.</p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">5. Considere enzimas digestivas</h3>
              <p>Por fim, considere o uso de enzimas digestivas em casos mais persistentes. Existem suplementos específicos no mercado que ajudam na digestão direta desses carboidratos complexos. Essas enzimas atuam quebrando os compostos do feijão logo no início do processo, muito antes que eles cheguem ao intestino grosso, cortando o mal pela raiz e reduzindo drasticamente a formação de gases.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Gases intestinais são sempre um problema?</h2>
              <p>É fundamental esclarecer que os gases nem sempre são um problema. A produção de gases é um processo totalmente natural e esperado da digestão humana, especialmente quando ocorre a fermentação saudável de fibras, o que, inclusive, é um sinal muito positivo de vitalidade para a sua saúde e barreira intestinal. Porém, é preciso ter muita atenção aos sinais de alerta do corpo. Se você apresentar dor abdominal intensa, distensão frequente que atrapalha o caimento das roupas ou um desconforto persistente e limitante, vale a pena investigar o quadro mais a fundo para descartar disbioses.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Como melhorar sua digestão de forma geral</h2>
              <p>Muito além de apenas ajustar o consumo pontual de feijão, você pode melhorar a sua digestão de forma geral adotando hábitos básicos e contínuos de estilo de vida. Manter uma boa hidratação ao longo do dia é inegociável para a formação das fezes, assim como comer com atenção plena, evitando distrações nocivas como a tela do celular. A inclusão de novas fibras na dieta deve ser feita sempre de forma gradual para dar tempo ao corpo de se adaptar, o que ajuda a cuidar da saúde da microbiota a longo prazo. Assim como explico em detalhes no artigo sobre <Link to="/quantas_frutas_posso_comer" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">quantas frutas você pode comer por dia</Link>, o grande segredo da digestão eficiente, seja da frutose ou da rafinose, está sempre no equilíbrio e na dose certa, e não no terrorismo nutricional.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Conclusão</h2>
              <p>Em resumo, o feijão dá gases principalmente por causa da fermentação de carboidratos complexos que o corpo humano não consegue digerir completamente sozinho na primeira etapa. No entanto, isso não significa, sob hipótese alguma, que você deve parar de consumir esse alimento tão rico e tradicional da nossa cultura. Com estratégias diárias muito simples, como o demolho prolongado, o ajuste fino da quantidade consumida nas refeições e o uso inteligente de recursos digestivos, é perfeitamente possível aproveitar todos os benefícios do feijão para a sua composição corporal sem sofrer com nenhum desconforto posterior.</p>

              {/* VÍDEO COMPLEMENTAR INTEGRADO */}
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">O Segredo Prático: Como Eliminar os Antinutrientes?</h3>
                </div>
                <p className="text-slate-600 mb-6 font-medium italic text-left">Aprenda o passo a passo prático de como fazer o remolho correto para eliminar fitatos, lectinas e oxalatos, acabando com os gases e otimizando a absorção de nutrientes do seu feijão.</p>
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/HqsASvY-NXg" 
                    title="Como remover fitatos, oxalatos e lectinas do feijão" 
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
                    <h4 className="font-black text-slate-800 mb-2 italic">Por que o corpo humano não consegue digerir o feijão direito?</h4>
                    <p className="text-slate-600">O problema não é o feijão em si, mas a biologia humana. Nosso corpo não produz a enzima alfa-galactosidase em quantidade suficiente para quebrar os oligossacarídeos (carboidratos complexos como a rafinose) ainda no intestino delgado. Como resultado, eles passam intactos para o intestino grosso, onde ocorre a fermentação.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Tirar a água do feijão realmente funciona contra os gases?</h4>
                    <p className="text-slate-600">Sim, essa é a estratégia mais comprovada pela ciência. O processo de demolho (deixar os grãos em água por 8 a 12 horas) e o descarte dessa água reduzem de forma drástica os compostos fermentáveis, fitatos e lectinas presentes na casca do grão, diminuindo a produção final de hidrogênio e metano no intestino.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Feijão faz mal para quem tem intestino sensível?</h4>
                    <p className="text-slate-600">Não necessariamente faz mal, mas exige cuidado. Pessoas com uma microbiota intestinal mais sensível ou com quadros ligados ao consumo de FODMAPs podem ter uma resposta exagerada à fermentação. Nesses casos, o fracionamento das porções e a mastigação correta são essenciais para evitar a distensão abdominal.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Qual tipo de feijão dá menos gases?</h4>
                    <p className="text-slate-600">De forma geral, leguminosas mais leves ou sem casca, como a lentilha rosa ou o feijão moyashi, tendem a fermentar menos. No entanto, o fator que mais determina a produção de gases não é o tipo do feijão, e sim o tempo adequado de remolho e o cozimento completo dos grãos.</p>
                  </div>
                </div>
              </div>
              {/* FIM DO FAQ VISUAL OTIMIZADO */}

              <Newsletter />
            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

{/* INÍCIO DO NOVO CARTÃO DE AUTOR COM E-E-A-T REFORÇADO */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
            
            {/* Foto do Autor no lugar do 'M' */}
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

        </div>
      </section>
    </>
  );
}




