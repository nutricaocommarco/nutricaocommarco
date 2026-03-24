import React from 'react';
import { useLocation } from 'react-router-dom'; // Precisamos disso para saber a URL atual
import { Helmet } from 'react-helmet';
// 🧠 Importando o Cérebro Central!
import { posts } from '../data/posts'; 

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function DiabeticoPodeComerBeterraba() {
  const { pathname } = useLocation();

  // O Pingus procura no Cérebro Central qual post corresponde a essa página
  const postAtual = posts.find(post => post.link === pathname);

  // Se por algum motivo não achar, colocamos valores padrão para não quebrar o site
  const tituloSEO = postAtual ? postAtual.titulo : "Artigo de Nutrição | Nutrição com Marco";
  const descSEO = postAtual ? postAtual.desc : "Leia mais no blog Nutrição com Marco.";
  const imgSEO = postAtual ? postAtual.img : `${githubImgBase}logoN_pingus.png`;
  const dataPub = postAtual ? postAtual.data : "2026-01-01";
  const dataMod = postAtual ? postAtual.dataMod : "2026-01-01";

  return (
    <>
      <Helmet>
        {/* SCHEMA.ORG (Google) - 100% Automático! */}
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

        {/* BREADCRUMB (NÍVEL NINJA) - 100% Automático! */}
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

        {/* SCHEMA.ORG PARA FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Beterraba cozida é pior que a crua para o diabético?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A versão crua é superior por concentrar de forma intacta as fibras e os compostos bioativos associados a marcadores metabólicos positivos em testes clínicos recentes. O processamento térmico (cozinhar muito) e o fatiamento excessivo quebram a barreira fibrosa, o que pode acelerar a digestão e a absorção intestinal dos carboidratos."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a quantidade ideal de beterraba por dia para diabéticos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A ciência atesta de maneira sólida que a ingestão de 100 gramas diárias de beterraba crua oferece resultados seguros e eficazes. Esse volume demonstrou melhorias clinicamente relevantes na redução de glicose, pressão arterial e marcadores lipídicos no diabetes tipo 2."
                }
              },
              {
                "@type": "Question",
                "name": "Posso tomar suco de beterraba com laranja se tenho diabetes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não é o ideal. A ingestão através de sucos e alimentos liquidificados (especialmente se coados) retira a proteção fibrosa que atua como freio natural, controlando a velocidade do metabolismo glicêmico. As melhores condutas recomendam consumir o vegetal inteiro, mastigado, e preferencialmente in natura."
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
            
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Nutrição Clínica</span>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              Diabético pode comer beterraba? O mito que você precisa parar de acreditar
            </h1>

            {/* BLOCO DE RESPOSTA DIRETA (FEATURED SNIPPET) */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: Sim, diabéticos podem e devem comer beterraba!
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  Embora a beterraba tenha açúcar natural, ela possui uma <strong>carga glicêmica baixa</strong> e é riquíssima em fibras que retardam a absorção da glicose. Quando consumida de forma equilibrada (aprox. 100g diárias), preferencialmente crua, ela ajuda a evitar picos de glicose, melhora a glicemia de jejum e o metabolismo lipídico no diabetes tipo 2.
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
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/BeterrabaDiabetes.mp3" type="audio/mpeg" />
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
                      <a href="#o-mito-do-acucar" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        O Mito do Açúcar
                      </a>
                    </li>
                    <li>
                      <a href="#indice-vs-carga" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Índice vs. Carga
                      </a>
                    </li>
                    <li>
                      <a href="#beneficios-clinicos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Benefícios Clínicos
                      </a>
                    </li>
                    <li>
                      <a href="#dicas-consumo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                        <HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                        Dicas de Ouro
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* FIM DA CAIXA COMBINADA */}




            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Muitas pessoas que recebem o diagnóstico de diabetes ou pré-diabetes acabam saindo do consultório médico com uma verdadeira lista mental de alimentos "proibidos", gerando ansiedade na hora de montar o prato. Quase sempre, a beterraba está no topo dessa temida lista por causa do seu inconfundível sabor adocicado.</p>
              
              <p>A exclusão desse vegetal é, inclusive, reconhecida por manuais oficiais de abordagem nutricional como um tabu alimentar cultural e infundado que acaba apenas por empobrecer a dieta diária. É a mesma lógica falha que assombra as pessoas quando se perguntam <Link to="/quantas_frutas_posso_comer" className="font-bold underline text-green-700 hover:text-green-800 transition-colors">quantas frutas podem comer por dia</Link>. A lógica popular parece óbvia e irrefutável: "se o alimento é doce na boca, é porque a beterraba tem muito açúcar; e se tem açúcar, fatalmente a beterraba aumenta a glicemia de forma perigosa". Mas, quando mergulhamos na nutrição clínica e na fisiologia do corpo humano, o grande erro está em olhar apenas para o teor de açúcar isolado e esquecer a <strong>complexa matriz nutricional</strong> do alimento.</p>

              {/* IMAGEM ESTRATÉGICA */}
              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <img 
                  src={`${githubImgBase}Blog/beterraba_diabetes.jpg`} 
                  alt="Foto de uma beterraba cortada ao meio com folhas verdes ao fundo, destacando sua cor vibrante." 
                  title="Beterraba e Diabetes"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A beterraba é uma aliada da saúde do diabético quando consumida corretamente.</p></div>
              </div>

              <h2 id="o-mito-do-acucar" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Leaf className="text-green-600"/> O Mito do Açúcar e a Matriz Nutricional
              </h2>
              <p>A beterraba é um vegetal riquíssimo em fibras alimentares, e é exatamente aqui que o jogo vira a favor do paciente diabético. As <strong>fibras solúveis e insolúveis</strong> presentes na matriz da beterraba funcionam como uma espécie de barreira natural no seu sistema digestivo. O mecanismo de proteção é bem similar à razão pela qual indicamos o remolho para quem se pergunta <Link to="/por_que_o_feijao_da_gases" className="font-bold underline text-green-700 hover:text-green-800 transition-colors">por que o feijão dá gases</Link>: o trato gastrointestinal precisa trabalhar de forma inteligente com compostos complexos.</p>
              
              <p>Isso retarda o esvaziamento gástrico e proporciona uma resposta significativamente menor de glicose e insulina na fase pós-prandial. Esse processo cadenciado evita aqueles picos perigosos de insulina circulante no sangue. Além disso, as <em>betalaínas</em>, que são os pigmentos responsáveis por dar a inconfundível cor vermelha intensa à beterraba, possuem potentes propriedades antioxidantes e anti-inflamatórias que auxiliam na proteção e reparo dos componentes celulares.</p>

              <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
                “O segredo para o controle glicêmico não é a exclusão de alimentos naturais, mas sim a inteligência nas combinações e no modo de preparo.”
              </div>

              <h2 id="indice-vs-carga" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Scale className="text-green-600"/> Índice Glicêmico vs. Carga Glicêmica
              </h2>
              <p>Para desmistificar de vez esse medo, existe um conceito técnico fundamental: a diferença prática entre índice glicêmico e carga glicêmica. O pânico de dietas restritivas e flutuações de peso sem orientação levam muitas vezes a um quadro de <Link to="/efeito_sanfona_inflamacao_invisivel" className="font-bold underline text-green-700 hover:text-green-800 transition-colors">efeito sanfona e inflamação celular</Link>, e a educação nutricional é a principal arma contra isso.</p>
              
              <p>Enquanto o <strong>índice glicêmico</strong> avalia a velocidade com que um carboidrato isolado vira açúcar no sangue, a <strong>carga glicêmica</strong> avalia a quantidade real de carboidratos que você consome em uma porção normal. O índice glicêmico da beterraba pode até ser considerado moderado, mas a sua carga glicêmica é muito baixa, pois ela possui muita água e um baixo aporte calórico total por porção.</p>


              {/* TABELA COMPARATIVA SIMPLIFICADA (GEO BOOST) */}
              <div className="my-10 bg-white border border-green-100 shadow-md rounded-[2rem] overflow-hidden">
                <div className="bg-green-50 px-6 py-4 border-b border-green-100">
                  <h3 className="text-xl font-black text-green-800 uppercase italic m-0">Comparativo: Índice vs. Carga Glicêmica</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 m-0">
                    {/* Beterraba Crua */}
                    <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-50 pb-3 gap-2">
                      <span className="text-slate-700 font-bold text-lg">Beterraba Crua</span>
                      <div className="flex flex-wrap md:justify-end gap-2">
                        <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-blue-100">IG: 54 a 64 (Média)</span>
                        <span className="bg-emerald-200 text-emerald-900 px-3 py-1 rounded-full text-[10px] font-black uppercase">Carga: 6 (Baixa)</span>
                      </div>
                    </li>
                    {/* Arroz Integral */}
                    <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-50 pb-3 gap-2">
                      <span className="text-slate-700 font-bold text-lg">Arroz Integral Cozido</span>
                      <div className="flex flex-wrap md:justify-end gap-2">
                        <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-blue-100">IG: 66 a 68 (Médio)</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black uppercase">Carga: 19 (Média)</span>
                      </div>
                    </li>
                    {/* Arroz Parboilizado */}
                    <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-50 pb-3 gap-2">
                      <span className="text-slate-700 font-bold text-lg">Arroz Parboilizado</span>
                      <div className="flex flex-wrap md:justify-end gap-2">
                        <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-blue-100">IG: 68 (Média)</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black uppercase">Carga: 19 (Média)</span>
                      </div>
                    </li>
                    {/* Arroz Branco */}
                    <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-50 pb-3 gap-2">
                      <span className="text-slate-700 font-bold text-lg">Arroz Branco Cozido</span>
                      <div className="flex flex-wrap md:justify-end gap-2">
                        <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-orange-200">IG: 73 a 89 (Alto)</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-[10px] font-black uppercase">Carga: 25 (Alta)</span>
                      </div>
                    </li>
                    {/* Açúcar Refinado */}
                    <li className="flex flex-col md:flex-row md:justify-between md:items-center pt-1 gap-2">
                      <span className="text-slate-700 font-bold text-lg">Açúcar Refinado</span>
                      <div className="flex flex-wrap md:justify-end gap-2">
                        <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-orange-200">IG: 64 a 68 (Alto)</span>
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Carga: 64 (Crítica)</span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-xs text-slate-400 mt-6 leading-relaxed italic">
                    * Observe a diferença brutal: a beterraba possui um <strong>Índice Glicêmico (IG)</strong> muito próximo ao do açúcar, mas a sua <strong>Carga Glicêmica (CG)</strong> real no corpo é totalmente inofensiva (6). O vídeo abaixo explica essa armadilha.
                  </p>
                </div>
              </div>
              {/* FIM DA TABELA */}



              {/* SESSÃO DO VÍDEO DO MARCO NO YOUTUBE */}
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Aula: Índice Glicêmico vs. Carga Glicêmica</h3>
                </div>
                <p className="text-slate-600 mb-6 font-medium italic text-left">
                  Ainda ficou com dúvidas sobre como a beterraba pode ter um açúcar "doce" mas não prejudicar sua glicemia? Neste vídeo eu explico detalhadamente a diferença técnica entre esses dois conceitos e por que a Carga Glicêmica é o que realmente importa no seu dia a dia.
                </p>
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/bcaJS6tQfL0" 
                    title="Diferença entre Índice Glicêmico e Carga Glicêmica - Nutrição com Marco" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* FIM DA SESSÃO DO VÍDEO */}

              <h2 id="beneficios-clinicos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Heart className="text-green-600"/> Os Benefícios Clínicos Comprovados
              </h2>
              <p>Os benefícios clínicos para quem convive com o diabetes são substanciais e comprovados em ensaios rigorosos. Para analisar o impacto metabólico no corpo, muito além do que uma balança comum mostra (se quiser aprofundar, veja nosso artigo sobre <Link to="/o_que_e_antropometria" className="font-bold underline text-green-700 hover:text-green-800 transition-colors">o que é antropometria</Link>), em um estudo clínico, 44 pacientes com diabetes tipo 2 consumiram 100 gramas de beterraba vermelha crua diariamente durante 8 semanas consecutivas. Os resultados mostraram uma redução expressiva de <strong>13,53 mg/dL na glicemia de jejum</strong> e uma queda de 0,34% na hemoglobina glicada (HbA1c).</p>
              
              <p>Além de atuar diretamente no controle do açúcar, a intervenção resultou na queda da pressão arterial sistólica em 0,73 mmHg e diastólica em 0,34 mmHg. Esse efeito cardiovascular protetor está ligado à presença de nitratos inorgânicos na composição do vegetal, que atuam na dilatação endotelial e na saúde dos vasos sanguíneos cerebrais e periféricos.</p>

              <div className="bg-slate-100 p-6 md:p-8 rounded-[2rem] border-l-4 border-slate-400 my-8">
                <h3 className="text-xl font-black text-slate-800 mb-3 flex items-center gap-2"><Activity size={20} className="text-slate-600"/> Função Cognitiva e Nervosa associada à Beterraba</h3>
                <p className="m-0 text-slate-700 font-medium leading-relaxed">Como se não bastasse todo esse controle endócrino e vascular, o consumo regular reduziu os níveis da homocisteína no sangue em 7,88 µmol/L, diminuindo processos inflamatórios. O estudo também documentou um aumento formidável nas pontuações de testes de função cognitiva, indicando melhora na eficiência do aprendizado de dígitos e maior atenção concentrada. Esse benefício protege o tecido nervoso contra os declínios cognitivos e quadros de neuropatia que são frequentemente observados após anos de exposição à hiperglicemia e dislipidemia.</p>
              </div>

              <h2 id="dicas-consumo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <HelpCircle className="text-green-600"/> Dicas de Ouro para consumir Beterraba com segurança
              </h2>
              
              <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                <ul className="list-none m-0 p-0 space-y-6">
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="text-xl font-black text-slate-800 m-0 mb-1">Priorize a versão crua</h4>
                      <p className="text-slate-600 m-0 leading-relaxed">Consumir 100g diárias de beterraba crua na salada preserva a integridade das fibras e folatos essenciais do vegetal. A manutenção das fibras garante a digestão lenta e prolonga o efeito metabólico benéfico no controle do açúcar e dos lipídios.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="text-xl font-black text-slate-800 m-0 mb-1">Cuidado com o tempo de cozimento</h4>
                      <p className="text-slate-600 m-0 leading-relaxed">Se preferir cozinhar, deixe a beterraba sempre muito firme, pois as fibras solúveis em sua forma natural são as grandes responsáveis por retardar o esvaziamento gástrico. O preparo altamente modificado e o fatiamento excessivo devem ser evitados para não acelerar a absorção intestinal dos carboidratos.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="text-xl font-black text-slate-800 m-0 mb-1">Aplique a Regra da Combinação</h4>
                      <p className="text-slate-600 m-0 leading-relaxed">Evite comer grandes porções de fontes de carboidratos de forma totalmente isolada. O consumo combinado com alimentos ricos em polifenóis e outros macronutrientes diminui de forma eficiente a hiperinsulinemia reativa e a hiperglicemia pós-prandial.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-green-200 text-green-800 font-black flex items-center justify-center shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="text-xl font-black text-slate-800 m-0 mb-1">Evite o suco coado sem critério</h4>
                      <p className="text-slate-600 m-0 leading-relaxed">O consumo da versão líquida e coada elimina componentes estruturais importantes como as fibras, que desempenham a função vital de estimular a peristalse intestinal. Vegetais liquidificados não retêm a mesma matriz protetora e devem ser preferencialmente mastigados e consumidos in natura.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
              <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Beterraba cozida é pior que a crua para o diabético?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">A versão crua é superior por concentrar de forma absolutamente intacta as fibras e os compostos bioativos associados a marcadores metabólicos positivos em testes clínicos recentes. O processamento do vegetal na cozinha, que inclui cozinhar muito e picar em excesso, deve ser restrito ao mínimo possível para preservar a lentidão fisiológica da digestão.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual a quantidade ideal por dia?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">A ciência atesta de maneira sólida que a ingestão de 100 gramas diárias de beterraba crua oferece resultados altamente seguros e eficazes. Esse volume diário específico demonstrou melhorias clinicamente relevantes na redução de glicose, pressão arterial e marcadores lipídicos no diabetes tipo 2.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Posso tomar suco de beterraba com laranja?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">A ingestão através de sucos e alimentos altamente liquidificados retira a proteção fibrosa que atua como freio natural e controla a velocidade do metabolismo glicêmico. As melhores condutas de educação nutricional recomendam fortemente que frutas e vegetais devam ser consumidos na sua forma inteira e em pedaços em vez de serem processados.</p>
                  </div>
                </div>
              </div>
              {/* FIM DO FAQ VISUAL OTIMIZADO */}

              <Newsletter />
            </div> {/* AQUI FECHA A DIV SPACE-Y-6 CORRETAMENTE */}
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          {/* INÍCIO DO NOVO CARTÃO DE AUTOR COM E-E-A-T REFORÇADO */}
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
