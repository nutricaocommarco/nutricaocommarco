import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, BrainCircuit, Scale, Pill, Flame, Target, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
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
        <meta property="og:title" content="Hormônios da Fome: O Guia Científico do Reganhos de Peso | Nutrição com Marco" />
        <meta property="og:description" content="Entenda a biologia por trás da fome insaciável pós-dieta. Grelina, Leptina e o papel do GLP-1 explicados pela ciência moderna." />
        <meta property="og:image" content={`${githubImgBase}Blog/Hormfome.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG (Google) */}
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
            "datePublished": "2025-05-15", // Data de publicação simulada para 2025
            "description": "Entenda a fisiologia por trás do aumento da fome após a perda de peso, analisando o papel da Grelina, Leptina, GLP-1 e a inflamação do tecido adiposo."
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
              <p>A <strong className="text-slate-800">Grelina</strong>, conhecida como o "hormônio da fome", é produzida principalmente no estômago e aumenta significativamente após a perda de peso, enviando sinais constantes e urgentes para o cérebro (especificamente para o hipotálamo) de que é hora de comer. No outro lado da balança, temos a <strong className="text-slate-800">Leptina</strong>, produzida pelas células de gordura para sinalizar saciedade e indicar que temos energia estocada suficiente. Quando emagrecemos (reduzindo a massa gorda medida na antropometria), os níveis de leptina caem drasticamente. Isso retira o "freio" natural do apetite e torna a manutenção do peso um desafio fisiológico constante.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Pill className="text-green-600"/> O Fenômeno do GLP-1 (Semaglutida) e a Verdade de 2025
              </h2>
              <p>Recentemente, o uso de medicamentos conhecidos como agonistas do receptor de GLP-1 (como a semaglutida e a tirzepatida) trouxe uma nova perspectiva para o controle da obesidade. O GLP-1 é um hormônio naturalmente produzido pelo intestino após as refeições que ajuda a regular a saciedade e a secreção de insulina.</p>
              <p>Essas terapias modernas simulam a ação desse hormônio em doses supra-fisiológicas para ajudar o paciente a manter o peso, combatendo justamente a pressão biológica que o corpo exerce para recuperar a energia perdida. No entanto, a ciência de 2025, que estudo na minha <strong className="text-slate-700">Pós-Graduação em Emagrecimento e Metabolismo</strong>, alerta: se esses medicamentos forem interrompidos sem uma estratégia nutricional e comportamental sustentável de "desmame" e manutenção de massa muscular, o reganho de peso pode ser extremamente rápido, reativando a inflamação celular de forma agressiva.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Flame className="text-green-600"/> Inflamação Adiposa e a "Memória" da Célula de Gordura
              </h2>
              <p>A obesidade causa uma inflamação crônica de baixo grau no tecido adiposo. Esse estado inflamatório desregula a função normal das células de gordura e a liberação de hormônios protetores, contribuindo diretamente para a resistência à insulina e complicações metabólicas.</p>
              <p>A ciência moderna mostra que, mesmo quando emagrecemos, o tecido adiposo residual pode reter uma "memória" dessa inflamação, o que mantém o sistema hormonal em desequilíbrio e "torcendo" pelo reganho. Se ocorrer o temido <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">Efeito Sanfona</Link>, essa inflamação é reativada de forma ainda mais severa no tecido que recuperou volume, piorando a sensibilidade à insulina e alterando novamente a secreção de hormônios vitais, como a adiponectina.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Target className="text-green-600"/> Como Hackear seus Hormônios da Fome Cientificamente
              </h2>
              <p>Para vencer a batalha contra os hormônios da fome e evitar o efeito rebote, o segredo não está em restrições calóricas extremas e insustentáveis, mas em estratégias que respeitem a fisiologia do corpo.</p>
              <p>Manter a perda de peso exige foco em reduzir a inflamação persistente e gerenciar os picos de grelina. Isso é feito através de uma nutrição equilibrada (rica em proteínas e fibras que estimulam o GLP-1 natural), sono de qualidade, manejo do estresse e, crucialmente, o treinamento de força para manter a massa muscular (que ajuda a sustentar o metabolismo basal). Ao entender que o seu metabolismo é dinâmico e moldado pelas flutuações de peso, você pode adotar hábitos, com orientação nutricional personalizada, que ajudem o corpo a aceitar o novo peso como o "novo normal", silenciando gradualmente os sinais de alerta que disparam a fome excessiva.</p>

              {/* SESSÃO DO VÍDEO DO YOUTUBE */}
              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">A Dança dos Hormônios e o Reganhos de Peso</h3>
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


              <div className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">O que acontece com a Grelina quando eu emagreço rápido?</h4>
                    <p className="text-slate-600">A Grelina é o hormônio que estimula a fome. Seus níveis sobem agressivamente após períodos de perda de peso rápida ou restrição calórica severa. Essa é uma das principais adaptações do corpo para tentar forçar você a recuperar a energia (gordura) que ele "perdeu".</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Como a Leptina influencia o reganho de peso?</h4>
                    <p className="text-slate-600">A Leptina sinaliza saciedade ao cérebro e seus níveis acompanham a quantidade de gordura corporal. Ao emagrecer, a leptina cai, retirando o freio da fome. Curiosamente, no reganho de peso (obesidade), a leptina sobe, mas a inflamação adiposa causa "resistência à leptina", impedindo que o cérebro receba o sinal de saciedade corretamente.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Qual a diferença entre o GLP-1 natural e o dos medicamentos como Ozempic?</h4>
                    <p className="text-slate-600">O GLP-1 natural é produzido pelo intestino logo após as refeições e dura apenas alguns minutos na corrente sanguínea. Os medicamentos (agonistas) são versões sintéticas modificadas para durar dias no corpo, mantendo a sensação de saciedade e o controle da insulina por muito mais tempo, facilitando a adesão à dieta.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Por que a inflamação adiposa dificulta o controle da fome?</h4>
                    <p className="text-slate-600">A inflamação crônica no tecido adiposo desregula a comunicação hormonal e contribui para a resistência à insulina e à leptina. Isso cria um ciclo vicioso onde o corpo não recebe ou não processa corretamente os sinais de saciedade, mantendo a sensação de fome mesmo quando há energia (gordura) estocada em excesso.</p>
                  </div>
                </div>
              </div>

            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-left">
            <div className="flex items-center gap-4 text-left">
              <BrainCircuit className="w-12 h-12 text-green-600" />
              <div className="text-left font-bold"><p className="text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black text-left">Nutrição Clinico-Esportiva • Especialista em Metabolismo</p></div>
            </div>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
          </div>

        </div>
      </section>
    </>
  );
}
