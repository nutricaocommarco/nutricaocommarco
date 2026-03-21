import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Frutose() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <Helmet>
        <title>Quantas frutas posso comer por dia? | Nutrição com Marco</title>
        <meta name="description" content="Entenda o metabolismo da frutose e a verdade sobre a fruta e a gordura no fígado." />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Quantas frutas posso comer por dia? | Nutrição com Marco" />
        <meta property="og:description" content="Entenda o metabolismo da frutose e a verdade sobre a fruta e a gordura no fígado." />
        <meta property="og:image" content="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/frutas.png" />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/quantas_frutas_posso_comer" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Afinal, a frutose causa gordura no fígado? Descubra quantas frutas você pode comer por dia",
            "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/frutas.png",
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png"}},
            "datePublished": "2026-03-20",
            "description": "Entenda o metabolismo da frutose e a verdade sobre a fruta e a gordura no fígado."
          })}
        </script>
      </Helmet>
      
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        
        {/* Botão de Voltar */}
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Nutrição Clínica</span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">
            Quantas frutas posso comer por dia?
          </h1>

          {/* SESSÃO DO ÁUDIO (OUVIR O ARTIGO) */}
<div className="my-8 p-6 md:p-8 bg-slate-50 rounded-[2.5rem] border border-green-100 flex flex-col sm:flex-row items-center gap-6 shadow-inner">
  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
    <PlayCircle size={28} />
  </div>
  <div className="flex-grow w-full text-left">
    <h3 className="text-xl font-black text-slate-800 italic mb-2">Ouça este artigo</h3>
    <audio controls className="w-full h-12 outline-none rounded-full">
      <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Frutas.mp3" type="audio/mpeg" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  </div>
</div>
{/* FIM DA SESSÃO DO ÁUDIO */}
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>Se você já ouviu por aí que "fruta engorda" ou que a "frutose destrói o fígado", saiba que a ciência conta uma história bem diferente e muito mais contextualizada. Na nutrição, o detalhe está na fonte e na dose. Vamos entender por que o açúcar natural da fruta não deve ser o vilão da sua dieta, mas sim um aliado da sua saúde.</p>
            
            {/* IMAGEM DE CAPA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/frutose_bananas.jpg`} alt="Frutas variadas e metabolismo da frutose" title="Mitos e verdades sobre o consumo de frutas" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">O impacto da frutose natural versus o açúcar adicionado.</p></div>
            </div>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O Metabolismo da Frutose: Glicose vs. Frutose
            </h2>
            
            <p>Diferente da glicose, que é a principal fonte de energia para as nossas células e estimula diretamente a liberação de insulina, a frutose segue um caminho metabólico particular. Ela entra nas células intestinais através de um transportador específico chamado GLUT-5. Uma vez absorvida, ela é direcionada quase integralmente para o fígado. É justamente por essa característica hepática que surgiram os mitos sobre a gordura no fígado. No entanto, o problema metabólico real não está na fruta inteira, mas sim no consumo excessivo de açúcares refinados e xaropes industriais que sobrecarregam o fígado de uma forma que a fruta dificilmente consegue fazer.</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Comparando a Densidade: Frutas vs. Industrializados
            </h2>
            
            <p>Para visualizar a diferença de carga de açúcar, observe a tabela abaixo baseada em porções de 100g. Note como os produtos processados concentram uma densidade de açúcares muito superior à das frutas frescas.</p>
            
            {/* TABELA ESTILIZADA */}
            <div className="overflow-x-auto my-10 border border-slate-200 rounded-3xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 text-sm uppercase tracking-widest">
                    <th className="p-4 font-black">Alimento (100g)</th>
                    <th className="p-4 font-black">Frutose (g)</th>
                    <th className="p-4 font-black">Glicose (g)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 font-medium">
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Banana</td>
                    <td className="p-4 text-green-600 font-bold">6,7</td>
                    <td className="p-4">7</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Maçã</td>
                    <td className="p-4 text-green-600 font-bold">8,6</td>
                    <td className="p-4">3</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Laranja</td>
                    <td className="p-4 text-green-600 font-bold">2,4</td>
                    <td className="p-4">2</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Morango</td>
                    <td className="p-4 text-green-600 font-bold">2,8</td>
                    <td className="p-4">2,4</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Pêra</td>
                    <td className="p-4 text-green-600 font-bold">6,7</td>
                    <td className="p-4">2,5</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="p-4 text-red-800 font-bold">Açúcar (Refinado)</td>
                    <td className="p-4 text-red-600 font-black">50</td>
                    <td className="p-4 text-red-600 font-black">50</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Mel</td>
                    <td className="p-4 text-orange-500 font-bold">40,2</td>
                    <td className="p-4">35,2</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-red-50">
                    <td className="p-4 text-red-800 font-bold">Coca-cola</td>
                    <td className="p-4 text-red-600 font-black">5</td>
                    <td className="p-4 text-red-600 font-black">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>Enquanto 100g de morango entregam menos de 3g de frutose, a mesma quantidade de açúcar de mesa entrega 50g. Essa diferença de densidade, somada à presença de fibras na fruta, muda completamente o impacto no seu metabolismo.</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O que a Ciência Realmente Diz
            </h2>
            
            <p>Um estudo demonstrou que a suplementação de 3,5g de frutose ou glicose por quilo de <Link to="/o_que_e_antropometria" className="text-green-600 hover:text-green-700 underline underline-offset-2 font-bold transition-colors">massa magra</Link> elevou a gordura no fígado. Para um indivíduo de 80kg com 25% de gordura corporal, isso equivaleria a consumir cerca de 210g de frutose, o que representa aproximadamente 30 bananas. Note que, nesse nível de excesso, tanto a glicose quanto a frutose causaram danos, provando que o excesso calórico total é o fator determinante, e não a fruta em si.</p>
            
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "O risco real de aumento de lipídeos intra-hepáticos e VLDL-TG ocorre em cenários de superávit calórico extremo."
            </div>
            
            <p>Um estudo demonstrou que a suplementação de 3,5g de frutose ou glicose por quilo de massa magra elevou a gordura no fígado. Para um indivíduo de 80kg com 25% de gordura corporal (60kg de massa magra), isso equivaleria a consumir cerca de 210g de frutose, o que representa aproximadamente 30 bananas. Note que, nesse nível de excesso, tanto a glicose quanto a frutose causaram danos, provando que o excesso calórico total é o fator determinante, e não a fruta em si.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Afinal, existe um limite seguro?
            </h2>
            
            <p>Para a maioria das pessoas saudáveis, o consumo de 3 a 5 porções de frutas variadas (cerca de 400g) por dia é considerado não apenas seguro, mas altamente protetor. O consumo de frutas e vegetais está associado à redução da mortalidade por todas as causas, incluindo câncer e doenças cardiovasculares, devido à presença de fibras, potássio e antioxidantes que mitigam qualquer efeito negativo do açúcar.</p>
            
            <p>Para otimizar sua ingestão, procure sempre variar as cores das frutas para garantir diferentes tipos de fitoquímicos. Além disso, prefira a fruta inteira ao suco para preservar as fibras e aumentar a saciedade. Combinar a fruta com uma fonte de fibra extra, como aveia, ou uma proteína, como iogurte, ajuda a reduzir ainda mais a resposta glicêmica da refeição.</p>
            
            {/* VÍDEO RECOMENDADO EM DESTAQUE */}
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Bônus: Fruta no almoço ou de sobremesa faz mal?
            </h2>
            
            <p>Para complementar tudo o que vimos sobre a frutose, é muito comum surgir a dúvida sobre o melhor horário para consumir frutas, especialmente junto às grandes refeições. O vídeo abaixo explica de forma muito didática os mitos e verdades sobre comer frutas no almoço e como isso impacta positivamente a sua digestão e a absorção de nutrientes importantes, como o ferro.</p>
            
            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Comer frutas no almoço faz bem ou mal?</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/0sLR-WEFfRs" 
                  title="Comer Frutas no Almoço" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">1. Quem tem diabetes pode comer fruta?</h4>
                  <p className="text-slate-600">Sim, deve comer. O segredo é a moderação e a escolha de frutas com menor índice glicêmico e maior teor de fibras. A insulina é essencial para o transporte da glicose, e o consumo de frutas dentro de um plano alimentar equilibrado ajuda a manter a glicemia estável sem abrir mão dos nutrientes essenciais.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">2. Comer fruta à noite engorda?</h4>
                  <p className="text-slate-600">Não existe evidência de que o horário mude o impacto calórico da fruta. O ganho de peso está relacionado ao balanço calórico total do dia e ao estado de superávit persistente. Se você está dentro das suas necessidades energéticas, a fruta à noite é uma excelente opção de ceia.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">3. A frutose da fruta causa gordura no fígado (esteatose)?</h4>
                  <p className="text-slate-600">Em pessoas saudáveis que consomem a fruta inteira, isso é extremamente improvável. A esteatose hepática está muito mais ligada ao sedentarismo, ao consumo excessivo de calorias e de produtos ultraprocessados ricos em xarope de milho, que possuem uma densidade energética muito superior à das frutas.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">4. Posso substituir uma refeição principal por frutas?</h4>
                  <p className="text-slate-600">Não é recomendado. Embora as frutas sejam ricas em vitaminas e minerais, uma refeição principal precisa de um aporte adequado de proteínas e gorduras boas para garantir a manutenção da massa muscular e a saciedade prolongada. Utilize as frutas como complementos ou lanches intermediários.</p>
                </div>
              </div>
            </div>
            
          </div>
        </article>

<ArtigosRecomendados currentPath={pathname} />
        
        {/* RODAPÉ DO AUTOR */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg text-2xl">M</div>
            <div className="text-left font-bold"><p className="text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black">ISAK Level 1 • Nutrição com Ciência</p></div>
          </div>
          <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
        </div>
        
      </div>
    </section>
    </>
  );
}
