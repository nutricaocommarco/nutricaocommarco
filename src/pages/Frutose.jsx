import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Frutose() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        
        {/* Botão de Voltar */}
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Nutrição Clínica</span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">
            Quantas frutas posso comer por dia? [cite: 60]
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>Se você já ouviu por aí que "fruta engorda" ou que a "frutose destrói o fígado", saiba que a ciência conta uma história bem diferente e muito mais contextualizada. [cite: 61] Na nutrição, o detalhe está na fonte e na dose. [cite: 62] Vamos entender por que o açúcar natural da fruta não deve ser o vilão da sua dieta, mas sim um aliado da sua saúde. [cite: 63]</p>
            
            {/* IMAGEM DE CAPA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/frutas.jpg`} alt="Frutas variadas e metabolismo da frutose" title="Mitos e verdades sobre o consumo de frutas" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">O impacto da frutose natural versus o açúcar adicionado.</p></div>
            </div>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O Metabolismo da Frutose: Glicose vs. Frutose [cite: 64]
            </h2>
            
            <p>Diferente da glicose, que é a principal fonte de energia para as nossas células e estimula diretamente a liberação de insulina, a frutose segue um caminho metabólico particular. [cite: 65] Ela entra nas células intestinais através de um transportador específico chamado GLUT-5. [cite: 66] Uma vez absorvida, ela é direcionada quase integralmente para o fígado. [cite: 67] É justamente por essa característica hepática que surgiram os mitos sobre a gordura no fígado. [cite: 68] No entanto, o problema metabólico real não está na fruta inteira, mas sim no consumo excessivo de açúcares refinados e xaropes industriais que sobrecarregam o fígado de uma forma que a fruta dificilmente consegue fazer. [cite: 69]</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Comparando a Densidade: Frutas vs. Industrializados [cite: 70]
            </h2>
            
            <p>Para visualizar a diferença de carga de açúcar, observe a tabela abaixo baseada em porções de 100g. [cite: 71] Note como os produtos processados concentram uma densidade de açúcares muito superior à das frutas frescas. [cite: 72]</p>
            
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
                    <td className="p-4">Banana [cite: 73]</td>
                    <td className="p-4 text-green-600 font-bold">6,7 [cite: 73]</td>
                    <td className="p-4">7 [cite: 73]</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Maçã [cite: 73]</td>
                    <td className="p-4 text-green-600 font-bold">8,6 [cite: 73]</td>
                    <td className="p-4">3 [cite: 73]</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Laranja [cite: 73]</td>
                    <td className="p-4 text-green-600 font-bold">2,4 [cite: 73]</td>
                    <td className="p-4">2 [cite: 73]</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Morango [cite: 73]</td>
                    <td className="p-4 text-green-600 font-bold">2,8 [cite: 73]</td>
                    <td className="p-4">2,4 [cite: 73]</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Pêra [cite: 73]</td>
                    <td className="p-4 text-green-600 font-bold">6,7 [cite: 73]</td>
                    <td className="p-4">2,5 [cite: 73]</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="p-4 text-red-800 font-bold">Açúcar (Refinado) [cite: 73]</td>
                    <td className="p-4 text-red-600 font-black">50 [cite: 73]</td>
                    <td className="p-4 text-red-600 font-black">50 [cite: 73]</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">Mel [cite: 73]</td>
                    <td className="p-4 text-orange-500 font-bold">40,2 [cite: 73]</td>
                    <td className="p-4">35,2 [cite: 73]</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-red-50">
                    <td className="p-4 text-red-800 font-bold">Coca-cola [cite: 73]</td>
                    <td className="p-4 text-red-600 font-black">5 [cite: 73]</td>
                    <td className="p-4 text-red-600 font-black">5 [cite: 73]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>Enquanto 100g de morango entregam menos de 3g de frutose, a mesma quantidade de açúcar de mesa entrega 50g. [cite: 74] Essa diferença de densidade, somada à presença de fibras na fruta, muda completamente o impacto no seu metabolismo. [cite: 75]</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O que a Ciência Realmente Diz [cite: 76]
            </h2>
            
            <p>Estudos robustos demonstram que a ingestão média de frutose em torno de 20g por dia não possui associação com a Doença Hepática Gordurosa Não Alcoólica (DHGNA). [cite: 77] Nessas pesquisas, a grande maioria das pessoas (entre 54% e 80%) consumia a frutose através de frutas e sucos naturais, enquanto apenas 8% vinha de refrigerantes. [cite: 78] Para você ter uma ideia prática, 20g de frutose equivalem a cerca de 15 bananas. [cite: 79] Consumir 1,8 litros de refrigerante é mecanicamente muito mais fácil e comum do que comer 15 bananas em um único dia. [cite: 80]</p>
            
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "O risco real de aumento de lipídeos intra-hepáticos e VLDL-TG ocorre em cenários de superávit calórico extremo." [cite: 81]
            </div>
            
            <p>Um estudo demonstrou que a suplementação de 3,5g de frutose ou glicose por quilo de massa magra elevou a gordura no fígado. [cite: 82] Para um indivíduo de 80kg com 25% de gordura corporal (60kg de massa magra), isso equivaleria a consumir cerca de 210g de frutose, o que representa aproximadamente 30 bananas. [cite: 83] Note que, nesse nível de excesso, tanto a glicose quanto a frutose causaram danos, provando que o excesso calórico total é o fator determinante, e não a fruta em si. [cite: 84]</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Afinal, existe um limite seguro? [cite: 85]
            </h2>
            
            <p>Para a maioria das pessoas saudáveis, o consumo de 3 a 5 porções de frutas variadas (cerca de 400g) por dia é considerado não apenas seguro, mas altamente protetor. [cite: 86] O consumo de frutas e vegetais está associado à redução da mortalidade por todas as causas, incluindo câncer e doenças cardiovasculares, devido à presença de fibras, potássio e antioxidantes que mitigam qualquer efeito negativo do açúcar. [cite: 87]</p>
            
            <p>Para otimizar sua ingestão, procure sempre variar as cores das frutas para garantir diferentes tipos de fitoquímicos. [cite: 88] Além disso, prefira a fruta inteira ao suco para preservar as fibras e aumentar a saciedade. [cite: 89] Combinar a fruta com uma fonte de fibra extra, como aveia, ou uma proteína, como iogurte, ajuda a reduzir ainda mais a resposta glicêmica da refeição. [cite: 90]</p>
            
            {/* FAQ */}
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ) [cite: 91]</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">1. Quem tem diabetes pode comer fruta? [cite: 92]</h4>
                  <p className="text-slate-600">Sim, deve comer. [cite: 92] O segredo é a moderação e a escolha de frutas com menor índice glicêmico e maior teor de fibras. [cite: 93] A insulina é essencial para o transporte da glicose, e o consumo de frutas dentro de um plano alimentar equilibrado ajuda a manter a glicemia estável sem abrir mão dos nutrientes essenciais. [cite: 94]</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">2. Comer fruta à noite engorda? [cite: 95]</h4>
                  <p className="text-slate-600">Não existe evidência de que o horário mude o impacto calórico da fruta. [cite: 95] O ganho de peso está relacionado ao balanço calórico total do dia e ao estado de superávit persistente. [cite: 96] Se você está dentro das suas necessidades energéticas, a fruta à noite é uma excelente opção de ceia. [cite: 97]</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">3. A frutose da fruta causa gordura no fígado (esteatose)? [cite: 98]</h4>
                  <p className="text-slate-600">Em pessoas saudáveis que consomem a fruta inteira, isso é extremamente improvável. [cite: 99] A esteatose hepática está muito mais ligada ao sedentarismo, ao consumo excessivo de calorias e de produtos ultraprocessados ricos em xarope de milho, que possuem uma densidade energética muito superior à das frutas. [cite: 100]</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">4. Posso substituir uma refeição principal por frutas? [cite: 101]</h4>
                  <p className="text-slate-600">Não é recomendado. [cite: 102] Embora as frutas sejam ricas em vitaminas e minerais, uma refeição principal precisa de um aporte adequado de proteínas e gorduras boas para garantir a manutenção da massa muscular e a saciedade prolongada. [cite: 102] Utilize as frutas como complementos ou lanches intermediários. [cite: 103]</p>
                </div>
              </div>
            </div>
            
          </div>
        </article>
        
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
  );
}
