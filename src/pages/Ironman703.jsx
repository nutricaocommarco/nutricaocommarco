import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, BrainCircuit, Activity, Droplets, Zap, Coffee, Headphones, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Ironman703() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Nutrição para Ironman 70.3: Guia Completo</title>
        <meta name="description" content="Descubra o guia completo de nutrição para Ironman 70.3. Aprenda a calcular calorias, evitar câimbras, distribuir macronutrientes e usar cafeína para turbinar seu desempenho no triatlo." />
        
        {/* OPEN GRAPH (Redes Sociais) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nutrição para Ironman 70.3: O Guia Definitivo para Triatletas" />
        <meta property="og:description" content="Fadiga e câimbras nos treinos longos? Aprenda a estruturar a nutrição, hidratação e suplementação para provas de endurance e triatlo." />
        <meta property="og:image" content={`${githubImgBase}Blog/nutricao_ironman_703.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG (Google) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Nutrição para Ironman 70.3: O Guia Definitivo para Triatletas",
            "image": `${githubImgBase}Blog/nutricao_ironman_703.jpg`,
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
            "datePublished": "2026-03-25",
            "description": "Descubra o guia completo de nutrição para Ironman 70.3. Aprenda a calcular calorias, evitar câimbras, distribuir macronutrientes e usar cafeína para turbinar seu desempenho no triatlo."
          })}
        </script>
      </Helmet>

      <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
        <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none text-left">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Nutrição Esportiva</span>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              Nutrição para Ironman 70.3: O Guia Definitivo para Triatletas
            </h1>

            {/* SESSÃO DO ÁUDIO (OUVIR O ARTIGO) */}
            <div className="my-8 p-5 bg-slate-50 rounded-3xl border border-green-100 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Ironman703.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>Treinar para um Half-Ironman (Ironman 70.3) exige muito mais do que apenas dedicação nas piscinas, nas pistas e no asfalto. Com 1.9 km de natação, 90 km de ciclismo e 21.1 km de corrida, o corpo humano é levado ao limite metabólico. É muito comum ver atletas amadores aumentando seu volume de treino para 12 a 15 horas semanais, mas negligenciando a base de tudo: a nutrição.</p>
              
              <p>O resultado dessa conta que não fecha? Fadiga extrema constante, câimbras paralisantes no meio do pedal e uma dependência perigosa de refeições rápidas e processadas. Para que você cruze a linha de chegada com energia, a ciência da nutrição esportiva precisa ser aplicada de forma estratégica e individualizada.</p>

              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <img src={`${githubImgBase}Blog/nutricao_ironman_703.jpg`} alt="Atleta de triatlo pedalando em uma competição de Ironman 70.3" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A performance no triatlo é definida pela capacidade do corpo de gerar e gerir energia.</p></div>
              </div>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Activity className="text-green-600"/> 1. Além da Balança: A Avaliação Física do Triatleta
              </h2>
              <p>Para estruturar a nutrição para Ironman 70.3, um simples recordatório alimentar não basta. É crucial realizar uma avaliação da composição corporal profunda. Métodos duplamente indiretos, como a <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">avaliação antropométrica ISAK 1</Link>, permitem o acompanhamento do somatório de dobras cutâneas de forma muito mais precisa e menos propensa a erros do que as balanças comuns.</p>
              
              <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">O Papel do Somatotipo</h3>
              <p>Identificar o somatotipo do atleta (endomorfia, mesomorfia e ectomorfia) fornece uma base sólida para entender como o corpo se adapta aos estímulos do endurance. Uma alta ectomorfia, por exemplo, pode ser uma vantagem biomecânica na corrida, devido à linearidade e menor peso a ser transportado, enquanto um perfil endomorfo exigirá um olhar mais clínico sobre o balanço calórico para evitar o transporte de peso "morto" (tecido adiposo em excesso) durante 90km de ciclismo.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Zap className="text-green-600"/> 2. Calculando o Gasto Energético em Alta Rodagem
              </h2>
              <p>Um atleta que treina de 12 a 15 horas por semana tem uma demanda calórica astronômica. O Gasto Energético Total (GET) é composto pela Taxa Metabólica Basal (TMB), a Termogênese Induzida pela Dieta (TID) e o Efeito Térmico do Exercício (ETE).</p>
              <p>Equações preditivas de TMB que consideram a massa livre de gordura (como a de Cunningham, 1981) são muito mais precisas para atletas. O componente que mais flutua é o ETE. Em um cenário hipotético de um triatleta de 75kg e 60kg de Massa Livre de Gordura, a TMB giraria em torno de 1.666 kcal. Adicionando a TID e multiplicando por um Fator de Atividade intenso (ex: 2.1), o gasto diário pode facilmente saltar para a faixa de <strong>3.600 a 4.000 kcal diárias</strong>. Sem esse aporte, a fadiga precoce é inevitável.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <BrainCircuit className="text-green-600"/> 3. A Distribuição Inteligente de Macronutrientes
              </h2>
              <p>A periodização nutricional é a chave para o sucesso em uma prova longa. Veja como os macronutrientes devem ser distribuídos:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-slate-800">Carboidratos (O Combustível):</strong> São a prioridade. A recomendação diária varia de 6 a 10 g/kg de peso. Cerca de 36 a 48 horas antes da prova, aplica-se o protocolo de saturação de glicogênio (7 a 12 g/kg/dia), reduzindo fibras para evitar desconfortos gastrointestinais.</li>
                <li><strong className="text-slate-800">Proteínas (A Reconstrução):</strong> Cruciais para evitar o catabolismo muscular causado por horas de exercício aeróbico. Recomenda-se de 1.2 a 1.7 g/kg/dia (podendo chegar a 2.0 g/kg se houver déficit calórico), fracionadas em porções de 20 a 40g por refeição.</li>
                <li><strong className="text-slate-800">Lipídios (A Base Hormonal):</strong> Mantidos entre 25% e 30% do Valor Energético Total, limitando gorduras saturadas a menos de 10%.</li>
              </ul>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Droplets className="text-green-600"/> 4. O Fim das Câimbras e da Fadiga
              </h2>
              <p>Câimbras durante treinos longos de ciclismo não são apenas falta de alongamento. Elas são um fenômeno complexo ligado à incapacidade de ressintetizar energia (ATP) e a desequilíbrios na recaptação de cálcio muscular.</p>
              <p>A perda acentuada de fluidos e eletrólitos pelo suor (especialmente sódio e cloreto) torna as junções neuromusculares hiperexcitáveis. Para combater isso, a estratégia intra-treino deve incluir a ingestão contínua de fluidos <strong>antes</strong> de sentir sede, aliados a uma reposição de 30 a 60g de carboidratos por hora de exercício (através de géis, bebidas esportivas ou gomas), garantindo aporte energético e de sódio.</p>

              <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Coffee className="text-green-600"/> 5. Creatina e Cafeína no Triatlo: Vale a pena?
              </h2>
              <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Creatina</h3>
              <p>Embora seja o suplemento mais estudado do mundo, a Creatina <strong>não é a prioridade</strong> para o objetivo central de um Half-Ironman. Seu mecanismo favorece vias de energia de explosão e curta duração. Além disso, a retenção de água intramuscular gera ganho de peso corporal, o que é uma desvantagem mecânica ao carregar seu próprio peso durante 21.1 km de corrida.</p>
              
              <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">Cafeína</h3>
              <p>Por outro lado, a Cafeína é um recurso ergogênico padrão ouro para o endurance. Ela atua diretamente no sistema nervoso central, mascarando e reduzindo a percepção de esforço e fadiga. O protocolo ideal varia de <strong>3 a 6 mg por quilo de peso corporal</strong>, ingeridos cerca de 60 minutos antes do treino ou da prova. Contudo, deve ser rigorosamente testada durante os treinos para evitar distúrbios gastrointestinais ou taquicardia no dia do evento.</p>


              <div className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Por que sinto fadiga excessiva durante os treinos de triatlo?</h4>
                    <p className="text-slate-600">A fadiga precoce em provas de endurance geralmente indica o esgotamento dos estoques de glicogênio muscular. Isso ocorre quando a ingestão diária de carboidratos (ou a reposição intra-treino) não é suficiente para a sua demanda energética.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Apenas comer banana evita câimbras no pedal?</h4>
                    <p className="text-slate-600">Não. O potássio (presente na banana) tem pouca relação com a prevenção de câimbras associadas ao exercício. O foco principal deve ser a reposição de Sódio (perdido em abundância no suor) e a hidratação constante.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Devo tomar Creatina para fazer um Ironman 70.3?</h4>
                    <p className="text-slate-600">Geralmente não é recomendado para triatletas amadores. A creatina otimiza explosões curtas de força e causa retenção de água intramuscular, o que pode aumentar seu peso corporal e prejudicar a mecânica da corrida longa.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                    <h4 className="font-black text-slate-800 mb-2 italic">Como usar cafeína para correr e pedalar melhor?</h4>
                    <p className="text-slate-600">O protocolo científico indica de 3 a 6 mg de cafeína por quilo de peso corporal, cerca de 1 hora antes da atividade. Ela age no sistema nervoso central, reduzindo a sensação de cansaço. É crucial testar nos treinos antes do dia oficial da prova.</p>
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
