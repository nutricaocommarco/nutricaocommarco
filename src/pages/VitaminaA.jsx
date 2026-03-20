import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';


const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function VitaminaA() {
  // Garante que a página abra sempre no topo
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
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Metabolismo</span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">
            Vitamina A para que serve? Entenda as diferenças entre retinol, retinal e ácido retinóico
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>A <strong>vitamina A</strong> é um nutriente essencial para o funcionamento adequado do organismo. Mas afinal, vitamina A para que serve? Sua atuação vai muito além da visão: ela participa da imunidade, da saúde da pele, do crescimento celular e da regulação genética.</p>
            
            <p>Para entender melhor suas funções, é fundamental conhecer as três principais formas ativas da vitamina A no corpo: <strong>retinol, retinal e ácido retinóico</strong>. Apesar de estarem relacionadas, cada uma possui características químicas e funções específicas.</p>
            
            {/* IMAGEM ESTRATÉGICA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/vitamina_a.jpg`} alt="Metabolismo da Vitamina A: Retinol, Retinal e Ácido Retinóico" title="Vitamina A e suas formas ativas" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">As três formas da Vitamina A e suas funções no metabolismo.</p></div>
            </div>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O que é a vitamina A e como ela é absorvida?
            </h2>
            
            <p>A vitamina A é <strong>lipossolúvel</strong>, ou seja, é absorvida junto com gorduras da dieta e pode ser armazenada no organismo, principalmente no fígado. Ela pode ser obtida de duas formas:</p>
            
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600 font-bold text-slate-700">
              <li><span className="font-medium text-slate-600"><strong>Vitamina A pré-formada (retinol):</strong> encontrada em alimentos de origem animal.</span></li>
              <li>
  <span className="font-medium text-slate-600">
    <strong>Pró-vitamina A (carotenoides):</strong> presente em vegetais como cenoura, abóbora e manga. (Se tem dúvidas sobre as porções ideais destas frutas, confira o nosso guia completo sobre <Link to="/quantas_frutas_posso_comer" className="text-green-600 hover:text-green-700 underline underline-offset-2 font-bold transition-colors">quantas frutas comer por dia</Link>).
  </span>
</li>
            </ul>
            
            <p>Ao ser ingerida (por exemplo, na forma de carotenoides), a vitamina A passa por conversões no organismo até chegar às suas formas ativas.</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Retinol, retinal e ácido retinóico: qual a diferença?
            </h2>
            
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">🔹 Retinol (C20H30O)</h3>
            <p>O <strong>retinol</strong> é a forma mais comum e <strong>armazenável</strong> da vitamina A.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>É conhecido como vitamina A1</li>
              <li>Atua como forma de transporte e reserva</li>
              <li>Pode ser convertido em retinal conforme a necessidade</li>
              <li>Participa da saúde da pele, imunidade e visão</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 my-6">
              <p className="m-0 text-slate-700">No organismo, o retinol não circula sozinho — ele precisa se ligar a proteínas específicas para ser transportado com segurança.</p>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">🔹 Retinal (C20H28O)</h3>
            <p>O <strong>retinal</strong>, também chamado de retinaldeído, é a forma <strong>biologicamente ativa na visão</strong>.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>É derivado da oxidação do retinol</li>
              <li>Atua diretamente na retina</li>
              <li>Essencial para a visão em ambientes com pouca luz</li>
              <li>Pode ser convertido de volta em retinol (processo reversível)</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 my-6">
              <p className="m-0 text-slate-700">Essa interconversão entre retinol e retinal permite que o corpo mantenha equilíbrio conforme a demanda fisiológica.</p>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mt-8">🔹 Ácido retinóico (C20H28O2)</h3>
            <p>O <strong>ácido retinóico</strong> é a forma mais oxidada da vitamina A e tem uma função completamente diferente.</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>Atua na <strong>expressão gênica</strong></li>
              <li>Regula crescimento e diferenciação celular</li>
              <li>Fundamental para saúde da pele e sistema imunológico</li>
              <li>Não participa da visão</li>
              <li>Não pode ser convertido de volta em retinal ou retinol (processo irreversível)</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 my-6">
              <p className="m-0 text-slate-700">Essa irreversibilidade torna o ácido retinóico uma espécie de “forma final” da vitamina A no metabolismo.</p>
            </div>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Como ocorre o metabolismo da vitamina A?
            </h2>
            
            <p>Quando ingerimos vitamina A (como em alimentos ou suplementos), ela pode estar na forma de <strong>ésteres de retinil</strong> ou carotenoides. O processo básico é:</p>
            
            <ol className="list-decimal pl-6 space-y-2 marker:text-green-600 font-bold">
              <li><span className="font-medium text-slate-600">Digestão e absorção intestinal</span></li>
              <li><span className="font-medium text-slate-600">Conversão em retinol</span></li>
              <li><span className="font-medium text-slate-600">Transporte via lipoproteínas (como quilomícrons)</span></li>
              <li><span className="font-medium text-slate-600">Armazenamento no fígado</span></li>
              <li><span className="font-medium text-slate-600">Conversão em retinal ou ácido retinóico conforme a necessidade</span></li>
            </ol>
            
            {/* CITAÇÃO EM DESTAQUE */}
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "Um ponto importante: retinol e retinal são interconvertíveis, mas o ácido retinóico não volta às formas anteriores."
            </div>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Afinal, vitamina A para que serve?
            </h2>
            
            <p>De forma resumida, a vitamina A é essencial para:</p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><span className="text-2xl">👁️</span> <strong>Visão</strong>, especialmente noturna (retinal)</li>
              <li className="flex items-center gap-3"><span className="text-2xl">🧬</span> <strong>Regulação genética</strong> (ácido retinóico)</li>
              <li className="flex items-center gap-3"><span className="text-2xl">🛡️</span> <strong>Sistema imunológico</strong></li>
              <li className="flex items-center gap-3"><span className="text-2xl">🧴</span> <strong>Saúde da pele e mucosas</strong></li>
              <li className="flex items-center gap-3"><span className="text-2xl">📈</span> <strong>Crescimento e desenvolvimento celular</strong></li>
            </ul>
            
            <p className="mt-6">Cada uma dessas funções depende diretamente da forma ativa envolvida — por isso entender retinol, retinal e ácido retinóico é tão importante na prática clínica e nutricional.</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Conclusão
            </h2>
            
            <p>A vitamina A não é uma molécula única com uma única função. Na verdade, ela atua como um <strong>sistema integrado de compostos</strong>, onde:</p>
            
            <ul className="list-disc pl-6 space-y-2 marker:text-green-600">
              <li>O <strong>retinol</strong> armazena e transporta</li>
              <li>O <strong>retinal</strong> atua na visão</li>
              <li>O <strong>ácido retinóico</strong> regula genes e crescimento celular</li>
            </ul>
            
            <p>Essa dinâmica mostra como a nutrição vai muito além do consumo de nutrientes — envolve também a forma como o corpo transforma e utiliza cada substância. Se você quer aprofundar sua prática ou melhorar sua alimentação, entender esse metabolismo é um diferencial enorme.</p>
            
            {/* FAQ NO MESMO PADRÃO DA ANTROPOMETRIA */}
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes sobre a Vitamina A</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Comer muita cenoura realmente melhora a visão?</h4>
                  <p className="text-slate-600">Sim, mas até certo ponto. A cenoura é riquíssima em betacaroteno, uma pró-vitamina A que o corpo converte em retinal. O retinal é fundamental para enxergarmos em ambientes escuros e previne a chamada "cegueira noturna". No entanto, se você tem algum problema de refração como miopia ou astigmatismo, comer cenoura não vai corrigir o grau dos seus óculos, apenas manter a saúde da sua retina em dia.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Qual a diferença entre tomar suplemento de vitamina A e usar cremes com ácido retinóico?</h4>
                  <p className="text-slate-600">A diferença está na forma de atuação e na via de administração. Quando você toma um suplemento de retinol, ele tem um efeito sistêmico, sendo armazenado no fígado e distribuído pelo sangue para a visão, imunidade e células. Já os cremes com ácido retinóico agem localmente onde são aplicados, comunicando-se diretamente com os genes das células da pele para acelerar a renovação celular, sendo excelentes aliados contra acne e envelhecimento, mas sem atuar na sua visão.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">É possível ter excesso de vitamina A no organismo?</h4>
                  <p className="text-slate-600">Sim, e isso é chamado de hipervitaminose A. Como essa vitamina é lipossolúvel (dissolve em gordura), o que o corpo não usa no momento acaba sendo estocado no fígado. O excesso geralmente ocorre pelo uso inadequado de suplementos de retinol em altas doses por tempo prolongado, podendo causar toxicidade hepática, dores de cabeça e alterações na pele. Por isso, a suplementação deve sempre ser acompanhada por um profissional para garantir a dose exata que o seu metabolismo precisa.</p>
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
  );
}
