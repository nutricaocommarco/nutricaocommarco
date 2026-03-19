import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function VitaminaA() {
  // Garante que a página abra sempre no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/";

  return (
    <article className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Botão de Voltar */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm mb-12 hover:text-green-700 transition-colors">
          <ChevronLeft size={20} />
          Voltar para o Blog
        </Link>

        {/* Cabeçalho do Artigo */}
        <header className="mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Metabolismo</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-tight mb-6">
            Vitamina A para que serve? Entenda as diferenças entre retinol, retinal e ácido retinóico
          </h1>
          <div className="w-20 h-2 bg-green-600 rounded-full mb-10"></div>
          
          {/* Imagem de Capa do Artigo */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img 
              src={`${githubImgBase}Imagens/Blog/vitamina_a.jpg`} 
              alt="Metabolismo da Vitamina A" 
              className="w-full h-full object-cover" 
            />
          </div>
        </header>

        {/* Corpo do Texto */}
        <div className="text-lg text-slate-700 font-medium leading-relaxed">
          <p className="mb-6">
            A vitamina A é um nutriente essencial para o funcionamento adequado do organismo. Mas afinal, vitamina A para que serve? Sua atuação vai muito além da visão: ela participa da imunidade, da saúde da pele, do crescimento celular e da regulação genética. Para entender melhor suas funções, é fundamental conhecer as três principais formas ativas da vitamina A no corpo: retinol, retinal e ácido retinóico. Apesar de estarem relacionadas, cada uma possui características químicas e funções específicas.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">O que é a vitamina A e como ela é absorvida?</h2>
          <p className="mb-6">
            A vitamina A é lipossolúvel, ou seja, é absorvida junto com gorduras da dieta e pode ser armazenada no organismo, principalmente no fígado. Ela pode ser obtida de duas formas:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 marker:text-green-600">
            <li><strong>Vitamina A pré-formada (retinol):</strong> encontrada em alimentos de origem animal</li>
            <li><strong>Pró-vitamina A (carotenoides):</strong> presente em vegetais como cenoura, abóbora e manga</li>
          </ul>
          <p className="mb-10">
            Ao ser ingerida (por exemplo, na forma de carotenoides), a vitamina A passa por conversões no organismo até chegar às suas formas ativas.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 italic uppercase">Retinol, retinal e ácido retinóico: qual a diferença?</h2>

          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔹 Retinol (C20H30O)</h3>
          <p className="mb-4">O retinol é a forma mais comum e armazenável da vitamina A.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>É conhecido como vitamina A1</li>
            <li>Atua como forma de transporte e reserva</li>
            <li>Pode ser convertido em retinal conforme a necessidade</li>
            <li>Participa da saúde da pele, imunidade e visão</li>
          </ul>
          <p className="mb-10 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            No organismo, o retinol não circula sozinho — ele precisa se ligar a proteínas específicas para ser transportado com segurança.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔹 Retinal (C20H28O)</h3>
          <p className="mb-4">O retinal, também chamado de retinaldeído, é a forma biologicamente ativa na visão.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>É derivado da oxidação do retinol</li>
            <li>Atua diretamente na retina</li>
            <li>Essencial para a visão em ambientes com pouca luz</li>
            <li>Pode ser convertido de volta em retinol (processo reversível)</li>
          </ul>
          <p className="mb-10 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            Essa interconversão entre retinol e retinal permite que o corpo mantenha equilíbrio conforme a demanda fisiológica.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔹 Ácido retinóico (C20H28O2)</h3>
          <p className="mb-4">O ácido retinóico é a forma mais oxidada da vitamina A e tem uma função completamente diferente.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>Atua na expressão gênica</li>
            <li>Regula crescimento e diferenciação celular</li>
            <li>Fundamental para saúde da pele e sistema imunológico</li>
            <li>Não participa da visão</li>
            <li>Não pode ser convertido de volta em retinal ou retinol (processo irreversível)</li>
          </ul>
          <p className="mb-12 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            Essa irreversibilidade torna o ácido retinóico uma espécie de “forma final” da vitamina A no metabolismo.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">Como ocorre o metabolismo da vitamina A?</h2>
          <p className="mb-6">
            Quando ingerimos vitamina A (como em alimentos ou suplementos), ela pode estar na forma de ésteres de retinil ou carotenoides. O processo básico é:
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-3 marker:text-green-600 font-bold">
            <li><span className="font-medium text-slate-700">Digestão e absorção intestinal</span></li>
            <li><span className="font-medium text-slate-700">Conversão em retinol</span></li>
            <li><span className="font-medium text-slate-700">Transporte via lipoproteínas (como quilomícrons)</span></li>
            <li><span className="font-medium text-slate-700">Armazenamento no fígado</span></li>
            <li><span className="font-medium text-slate-700">Conversão em retinal ou ácido retinóico conforme a necessidade</span></li>
          </ol>
          <p className="mb-10 bg-green-50 text-green-800 p-6 rounded-2xl border border-green-100">
            <strong>Um ponto importante:</strong> retinol e retinal são interconvertíveis, mas o ácido retinóico não volta às formas anteriores.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">Afinal, vitamina A para que serve?</h2>
          <p className="mb-6">De forma resumida, a vitamina A é essencial para:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">👁️</span> Visão, especialmente noturna (retinal)</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">🧬</span> Regulação genética (ácido retinóico)</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">🛡️</span> Sistema imunológico</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">🧴</span> Saúde da pele e mucosas</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 md:col-span-2"><span className="text-2xl">📈</span> Crescimento e desenvolvimento celular</div>
          </div>
          <p className="mb-12">
            Cada uma dessas funções depende diretamente da forma ativa envolvida — por isso entender retinol, retinal e ácido retinóico é tão importante na prática clínica e nutricional.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">Conclusão</h2>
          <p className="mb-4">A vitamina A não é uma molécula única com uma única função. Na verdade, ela atua como um sistema integrado de compostos, onde:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>O <strong>retinol</strong> armazena e transporta</li>
            <li>O <strong>retinal</strong> atua na visão</li>
            <li>O <strong>ácido retinóico</strong> regula genes e crescimento celular</li>
          </ul>
          <p className="mb-16">
            Essa dinâmica mostra como a nutrição vai muito além do consumo de nutrientes — envolve também a forma como o corpo transforma e utiliza cada substância. Se você quer aprofundar sua prática ou melhorar sua alimentação, entender esse metabolismo é um diferencial enorme.
          </p>

          {/* Seção de Perguntas Frequentes (FAQ) */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-900 mb-8 italic uppercase text-center md:text-left">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                  <span className="text-green-600 mt-1">Q.</span> Comer muita cenoura realmente melhora a visão?
                </h3>
                <p className="text-slate-600 leading-relaxed ml-7">
                  Sim, mas até certo ponto. A cenoura é riquíssima em betacaroteno, uma pró-vitamina A que o corpo converte em retinal. O retinal é fundamental para enxergarmos em ambientes escuros e previne a chamada "cegueira noturna". No entanto, se você tem algum problema de refração como miopia ou astigmatismo, comer cenoura não vai corrigir o grau dos seus óculos, apenas manter a saúde da sua retina em dia.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                  <span className="text-green-600 mt-1">Q.</span> Qual a diferença entre tomar suplemento de vitamina A e usar cremes com ácido retinóico?
                </h3>
                <p className="text-slate-600 leading-relaxed ml-7">
                  A diferença está na forma de atuação e na via de administração. Quando você toma um suplemento de retinol, ele tem um efeito sistêmico, sendo armazenado no fígado e distribuído pelo sangue para a visão, imunidade e células. Já os cremes com ácido retinóico agem localmente onde são aplicados, comunicando-se diretamente com os genes das células da pele para acelerar a renovação celular, sendo excelentes aliados contra acne e envelhecimento, mas sem atuar na sua visão.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                  <span className="text-green-600 mt-1">Q.</span> É possível ter excesso de vitamina A no organismo?
                </h3>
                <p className="text-slate-600 leading-relaxed ml-7">
                  Sim, e isso é chamado de hipervitaminose A. Como essa vitamina é lipossolúvel (dissolve em gordura), o que o corpo não usa no momento acaba sendo estocado no fígado. O excesso geralmente ocorre pelo uso inadequado de suplementos de retinol em altas doses por tempo prolongado, podendo causar toxicidade hepática, dores de cabeça e alterações na pele. Por isso, a suplementação deve sempre ser acompanhada por um profissional para garantir a dose exata que o seu metabolismo precisa.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
