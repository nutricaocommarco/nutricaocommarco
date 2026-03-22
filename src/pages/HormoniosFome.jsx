import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Scale, Pill, Flame, Target, Headphones, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function HormoniosFome() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Hormônios da Fome: Como Grelina e Leptina Controlam seu Peso | Nutrição com Marco</title>
        <meta name="description" content="Entenda como Grelina, Leptina e GLP-1 sabotam sua dieta. Descubra por que a fome aumenta após emagrecer e como a ciência de 2025 explica a inflamação adiposa no reganho de peso." />
        
        {/* OPEN GRAPH (Redes Sociais) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Hormônios da Fome: O Guia Científico do Reganho de Peso | Nutrição com Marco" />
        <meta property="og:description" content="Entenda a biologia por trás da fome insaciável pós-dieta. Grelina, Leptina e o papel do GLP-1 explicados pela ciência moderna." />
        <meta property="og:image" content={`${githubImgBase}Blog/Hormfome.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG PARA O ARTIGO (Google) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Hormônios da Fome: Como Grelina e Leptina Controlam seu Peso",
            "image": `${githubImgBase}Blog/Hormfome.jpg`,
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
            "datePublished": "2026-03-20", 
            "description": "Entenda a fisiologia por trás do aumento da fome após a perda de peso, analisando o papel da Grelina, Leptina, GLP-1 e a inflamação do tecido adiposo."
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
                "name": "O que acontece com a Grelina quando eu emagreço rápido?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Grelina é o hormônio que estimula a fome. Seus níveis sobem agressivamente após períodos de perda de peso rápida ou restrição calórica severa. Essa é uma das principais adaptações do corpo para tentar forçar você a recuperar a energia (gordura) que ele perdeu."
                }
              },
              {
                "@type": "Question",
                "name": "Como a Leptina influencia o reganho de peso?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Leptina sinaliza saciedade ao cérebro e seus níveis acompanham a quantidade de gordura corporal. Ao emagrecer, a leptina cai, retirando o freio da fome. Curiosamente, no reganho de peso (obesidade), a leptina sobe, mas a inflamação adiposa causa 'resistência à leptina', impedindo que o cérebro receba o sinal de saciedade corretamente."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a diferença entre o GLP-1 natural e o dos medicamentos como Ozempic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O GLP-1 natural é produzido pelo intestino logo após as refeições e dura apenas alguns minutos na corrente sanguínea. Os medicamentos (agonistas) são versões sintéticas modificadas para durar dias no corpo, mantendo a sensação de saciedade e o controle da insulina por muito mais tempo, facilitando a adesão à dieta."
                }
              },
              {
                "@type": "Question",
                "name": "Por que a inflamação adiposa dificulta o controle da fome?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A inflamação crônica no tecido adiposo desregula a comunicação hormonal e contribui para a resistência à insulina e à leptina. Isso cria um ciclo vicioso onde o corpo não recebe ou não processa corretamente os sinais de saciedade, mantendo a sensação de fome mesmo quando há energia (gordura) estocada em excesso."
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
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiologia e Metabolismo</span>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              Hormônios da Fome: A Verdadeira Razão Biológica do Efeito Rebote
            </h1>

            {/* BLOCO DE RESPOSTA DIRETA (OTIMIZADO COM H2 PARA SEO) */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: por que sinto mais fome depois de emagrecer?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  Após a perda de peso, o corpo tenta recuperar a energia perdida diminuindo o metabolismo basal e alterando seus hormônios: a produção de Grelina (que estimula a fome) aumenta agressivamente, enquanto os níveis de Leptina (que sinaliza saciedade) caem drasticamente, gerando uma fome insaciável e facilitando o efeito rebote.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/HormFome.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
            {/* FIM DA SESSÃO DO ÁUDIO */}

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Se você já tentou emagrecer, provavelmente já viveu essa cena: após semanas de disciplina e perda de peso, a sua fome parece ter dobrado de tamanho, tornando a manutenção do novo corpo uma tortura diária. Esse fenômeno é extremamente comum e não é falta de força de vontade. A maioria das pessoas que tenta perder peso enfrenta dificuldades biológicas reais para manter o novo peso a longo prazo.</p>
              
              <p>O emagrecimento, embora excelente para a saúde cardiovascular e metabólica, gera um alerta vermelho no organismo. No consultório, quando analiso a <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">antropometria ISAK 1</Link> de um paciente que reganhou peso rápido, muitas vezes vejo que a perda inicial foi agressiva demais, ignorando a fisiologia. O corpo interpreta a perda de gordura como uma ameaça à sobrevivência e reage ativando adaptações metabólicas potentes: diminui o gasto de energia (metabolismo basal) e gera um aumento expressivo nos <strong className="text-slate-800">hormônios da fome</strong>. Essa pressão biológica é o que muitas vezes nos empurra de volta, de forma quase inconsciente, aos antigos hábitos alimentares.</p>

              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <img src={`${githubImgBase}Blog/Hormfome.jpg`} alt="Ilustração dos hormônios da fome Grelina e Leptina atuando no cérebro" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A batalha pela manutenção do peso ocorre no nível hormonal, não apenas na força de vontade.</p></div>
              </div>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Scale className="text-green-600"/> Grelina vs. Leptina: O Cabo de Guerra Invisível do Apetite
              </h2>
              <p>O controle do nosso peso depende de um equilíbrio delicado entre diferentes sinais hormonais produzidos pelo sistema digestivo e pelo tecido adiposo. Sim, a gordura corporal funciona como um órgão endócrino vital e ativo.</p>
              
              {/* BLOCO CITÁVEL (OTIMIZADO PARA IA E SEO) */}
              <div className="my-8 p-6 md:p-8 bg-white border-l-4 border-green-600 shadow-md rounded-r-3xl flex flex-col gap-3 text-left">
                <h3 className="text-xl font-black text-slate-800 m-0 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <span className="text-green-600 text-2xl leading-none">👉</span> O que é a Grelina?
                </h3>
                <p className="m-0 text-slate-600 font-medium leading-relaxed">
                  A Grelina é um hormônio produzido principalmente no estômago, amplamente conhecida como o "hormônio da fome". Sua principal função biológica é enviar sinais ao hipotálamo (no cérebro) para estimular o apetite, aumentar a ingestão de alimentos e promover o armazenamento de gordura, especialmente após períodos de dieta.
                </p>
              </div>
              {/* FIM DO BLOCO CITÁVEL */}

              <p>Do outro lado da balança, temos a <strong className="text-slate-800">Leptina</strong>, produzida pelas células de gordura para sinalizar saciedade e indicar que temos energia estocada suficiente. Quando emagrecemos (reduzindo a massa gorda medida na antropometria), os níveis de leptina caem drasticamente. Isso retira o "freio" natural do apetite e torna a manutenção do peso um desafio fisiológico constante.</p>

              {/* LISTA OBJETIVA (OTIMIZADO PARA IA E SEO) */}
              <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  O que acontece com os hormônios no emagrecimento?
                </h2>
                <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                  <li className="text-slate-700 font-bold text-lg pl-1">Aumento da produção de Grelina (fome amplificada)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Queda vertiginosa nos níveis de Leptina (perda de saciedade)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Redução adaptativa do metabolismo basal (menor gasto de energia)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Ativação de vias cerebrais que aumentam o desejo por doces e gorduras</li>
                </ul>
              </div>
              {/* FIM DA LISTA OBJETIVA */}

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Pill className="text-green-600"/> O Fenômeno do GLP-1 (Semaglutida) e a Verdade Clínica
              </h2>
              <p>Recentemente, o uso de medicamentos conhecidos como agonistas do receptor de GLP-1 (como a semaglutida e a tirzepatida) trouxe uma nova perspectiva para o controle da obesidade. O GLP-1 é um hormônio naturalmente produzido pelo intestino após as refeições que ajuda a regular a saciedade e a secreção de insulina.</p>
              <p>Essas terapias modernas simulam a ação desse hormônio em doses supra-fisiológicas para ajudar o paciente a manter o peso, combatendo justamente a pressão biológica que o corpo exerce para recuperar a energia perdida. No entanto, se esses medicamentos forem interrompidos sem uma estratégia nutricional e comportamental sustentável de "desmame" e manutenção de massa muscular, o reganho de peso pode ser extremamente rápido, reativando a inflamação celular de forma agressiva.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Flame className="text-green-600"/> Inflamação Adiposa e a "Memória" da Gordura
              </h2>
              <p>A obesidade causa uma inflamação crônica de baixo grau no tecido adiposo. Esse estado inflamatório desregula a função normal das células de gordura e a liberação de hormônios protetores, contribuindo diretamente para a resistência à insulina e complicações metabólicas.</p>
              <p>A ciência moderna mostra que, mesmo quando emagrecemos, o tecido adiposo residual pode reter uma "memória" dessa inflamação, o que mantém o sistema hormonal em desequilíbrio e "torcendo" pelo reganho. Se ocorrer o temido <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">Efeito Sanfona</Link>, essa inflamação é reativada de forma ainda mais severa no tecido que recuperou volume, piorando a sensibilidade à insulina e alterando novamente a secreção de hormônios vitais, como a adiponectina.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Target className="text-green-600"/> Como Hackear seus Hormônios da Fome Cientificamente
              </h2>
              <p>Para vencer a batalha contra os hormônios da fome e evitar o efeito rebote, o segredo não está em restrições calóricas extremas e insustentáveis, mas em estratégias que respeitem a fisiologia do corpo.</p>
              <p>Manter a perda de peso exige foco em reduzir a inflamação persistente e gerenciar os picos de grelina. Ao entender que o seu metabolismo é dinâmico e moldado pelas flutuações de peso, você pode adotar hábitos que ajudem o corpo a aceitar o novo peso como o "novo normal", silenciando gradualmente os sinais de alerta que disparam a fome excessiva.</p>

              {/* SEGUNDA LISTA OBJETIVA (SOLUÇÕES PARA IA E SEO) */}
              <div className="my-8 p-6 md:p-8 bg-slate-50 border border-green-100 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Como controlar os hormônios da fome (base científica)
                </h2>
                <ul className="list-disc pl-6 space-y-3 m-0 mt-2 marker:text-green-600">
                  <li className="text-slate-700 font-bold text-lg pl-1">Aumentar o consumo de proteínas (estimula a saciedade e o GLP-1 natural)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Priorizar fibras nas refeições (retarda o esvaziamento do estômago)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Praticar treinamento de força (mantém a massa muscular e o metabolismo)</li>
                  <li className="text-slate-700 font-bold text-lg pl-1">Melhorar a qualidade do sono (privação de sono eleva fortemente a grelina)</li>
                </ul>
              </div>
              {/* FIM DA SEGUNDA LISTA OBJETIVA */}

              {/* SESSÃO DO VÍDEO DO YOUTUBE */}
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">A Dança dos Hormônios e o Reganho de Peso</h3>
                </div>
                <p className="text-slate-600 mb-6 font-medium italic text-left">Entenda na prática clínica como a perda de gordura diminui a sua saciedade (leptina) e aumenta a sua fome (grelina), forçando o metabolismo a buscar o reganho de peso involuntário.</p>
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/BSqh47X9y4c" 
                    title="Hormônios do Apetite e como eles afetam a fome" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* FIM DA SESSÃO DO VÍDEO */}

              {/* INÍCIO DO FAQ VISUAL OTIMIZADO */}
              <div className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
                <div className="space-y-6">
                  
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">O que acontece com a Grelina quando eu emagreço rápido?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">A Grelina é o hormônio que estimula a fome. Seus níveis sobem agressivamente após períodos de perda de peso rápida ou restrição calórica severa. Essa é uma das principais adaptações do corpo para tentar forçar você a recuperar a energia (gordura) que ele "perdeu".</p>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Como a Leptina influencia o reganho de peso?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">A Leptina sinaliza saciedade ao cérebro e seus níveis acompanham a quantidade de gordura corporal. Ao emagrecer, a leptina cai, retirando o freio da fome. Curiosamente, no reganho de peso (obesidade), a leptina sobe, mas a inflamação adiposa causa "resistência à leptina", impedindo que o cérebro receba o sinal de saciedade corretamente.</p>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual a diferença entre o GLP-1 natural e o dos medicamentos como Ozempic?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">O GLP-1 natural é produzido pelo intestino logo após as refeições e dura apenas alguns minutos na corrente sanguínea. Os medicamentos (agonistas) são versões sintéticas modificadas para durar dias no corpo, mantendo a sensação de saciedade e o controle da insulina por muito mais tempo, facilitando a adesão à dieta.</p>
                  </div>
                  
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h3 className="text-lg font-black text-slate-800 mb-2 italic">Por que a inflamação adiposa dificulta o controle da fome?</h3>
                    <p className="text-slate-600 m-0 leading-relaxed">A inflamação crônica no tecido adiposo desregula a comunicação hormonal e contribui para a resistência à insulina e à leptina. Isso cria um ciclo vicioso onde o corpo não recebe ou não processa corretamente os sinais de saciedade, mantendo a sensação de fome mesmo quando há energia (gordura) estocada em excesso.</p>
                  </div>
                  
                </div>
              </div>
              {/* FIM DO FAQ VISUAL OTIMIZADO */}

              <Newsletter />
            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

{/* RODAPÉ DO AUTOR (ATUALIZADO COM FOTO REAL) */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4 text-left">
            {/* Sua Foto Real em vez do 'M' */}
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr." 
              className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-green-100 flex-shrink-0"
            />
            <div className="text-left font-bold">
              <p className="text-slate-900 text-sm">Marco Aurélio Jr.</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-black text-left">
                ISAK Level 1 • Antropometrista Internacional
              </p>
            </div>
          </div>
          <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
        </div>
        
      </div>
    </section>
    </>
  );
}
