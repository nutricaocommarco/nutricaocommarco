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
            Vitamina A para que serve? Entenda as diferenças entre retinol, retinal e ácido retinóico [cite: 1]
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
            A vitamina A é um nutriente essencial para o funcionamento adequado do organismo[cite: 2]. Mas afinal, vitamina A para que serve? Sua atuação vai muito além da visão: ela participa da imunidade, da saúde da pele, do crescimento celular e da regulação genética[cite: 3]. Para entender melhor suas funções, é fundamental conhecer as três principais formas ativas da vitamina A no corpo: retinol, retinal e ácido retinóico[cite: 4]. Apesar de estarem relacionadas, cada uma possui características químicas e funções específicas[cite: 5].
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">O que é a vitamina A e como ela é absorvida? [cite: 6]</h2>
          <p className="mb-6">
            A vitamina A é lipossolúvel, ou seja, é absorvida junto com gorduras da dieta e pode ser armazenada no organismo, principalmente no fígado[cite: 7]. Ela pode ser obtida de duas formas[cite: 8]:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 marker:text-green-600">
            <li><strong>Vitamina A pré-formada (retinol):</strong> encontrada em alimentos de origem animal [cite: 9]</li>
            <li><strong>Pró-vitamina A (carotenoides):</strong> presente em vegetais como cenoura, abóbora e manga [cite: 10]</li>
          </ul>
          <p className="mb-10">
            Ao ser ingerida (por exemplo, na forma de carotenoides), a vitamina A passa por conversões no organismo até chegar às suas formas ativas[cite: 11].
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 italic uppercase">Retinol, retinal e ácido retinóico: qual a diferença? [cite: 12]</h2>

          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔹 Retinol (C20H30O) [cite: 13]</h3>
          <p className="mb-4">O retinol é a forma mais comum e armazenável da vitamina A[cite: 14].</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>É conhecido como vitamina A1 [cite: 15]</li>
            <li>Atua como forma de transporte e reserva [cite: 16]</li>
            <li>Pode ser convertido em retinal conforme a necessidade [cite: 17]</li>
            <li>Participa da saúde da pele, imunidade e visão [cite: 18]</li>
          </ul>
          <p className="mb-10 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            No organismo, o retinol não circula sozinho — ele precisa se ligar a proteínas específicas para ser transportado com segurança[cite: 19].
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔹 Retinal (C20H28O) [cite: 20]</h3>
          <p className="mb-4">O retinal, também chamado de retinaldeído, é a forma biologicamente ativa na visão[cite: 21].</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>É derivado da oxidação do retinol [cite: 22]</li>
            <li>Atua diretamente na retina [cite: 23]</li>
            <li>Essencial para a visão em ambientes com pouca luz [cite: 24]</li>
            <li>Pode ser convertido de volta em retinol (processo reversível) [cite: 25]</li>
          </ul>
          <p className="mb-10 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            Essa interconversão entre retinol e retinal permite que o corpo mantenha equilíbrio conforme a demanda fisiológica[cite: 26].
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">🔹 Ácido retinóico (C20H28O2) [cite: 27]</h3>
          <p className="mb-4">O ácido retinóico é a forma mais oxidada da vitamina A e tem uma função completamente diferente[cite: 28].</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>Atua na expressão gênica [cite: 29]</li>
            <li>Regula crescimento e diferenciação celular [cite: 30]</li>
            <li>Fundamental para saúde da pele e sistema imunológico [cite: 31]</li>
            <li>Não participa da visão [cite: 32]</li>
            <li>Não pode ser convertido de volta em retinal ou retinol (processo irreversível) [cite: 33]</li>
          </ul>
          <p className="mb-12 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
            Essa irreversibilidade torna o ácido retinóico uma espécie de “forma final” da vitamina A no metabolismo[cite: 34].
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">Como ocorre o metabolismo da vitamina A? [cite: 35]</h2>
          <p className="mb-6">
            Quando ingerimos vitamina A (como em alimentos ou suplementos), ela pode estar na forma de ésteres de retinil ou carotenoides[cite: 36]. O processo básico é[cite: 37]:
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-3 marker:text-green-600 font-bold">
            <li><span className="font-medium text-slate-700">Digestão e absorção intestinal [cite: 38]</span></li>
            <li><span className="font-medium text-slate-700">Conversão em retinol [cite: 39]</span></li>
            <li><span className="font-medium text-slate-700">Transporte via lipoproteínas (como quilomícrons) [cite: 40]</span></li>
            <li><span className="font-medium text-slate-700">Armazenamento no fígado [cite: 41]</span></li>
            <li><span className="font-medium text-slate-700">Conversão em retinal ou ácido retinóico conforme a necessidade [cite: 42]</span></li>
          </ol>
          <p className="mb-10 bg-green-50 text-green-800 p-6 rounded-2xl border border-green-100">
            <strong>Um ponto importante:</strong> retinol e retinal são interconvertíveis, mas o ácido retinóico não volta às formas anteriores[cite: 43].
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">Afinal, vitamina A para que serve? [cite: 44]</h2>
          <p className="mb-6">De forma resumida, a vitamina A é essencial para[cite: 45]:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">👁️</span> Visão, especialmente noturna (retinal) [cite: 46]</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">🧬</span> Regulação genética (ácido retinóico) [cite: 47]</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">🛡️</span> Sistema imunológico [cite: 48]</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3"><span className="text-2xl">🧴</span> Saúde da pele e mucosas [cite: 49]</div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 md:col-span-2"><span className="text-2xl">📈</span> Crescimento e desenvolvimento celular [cite: 50]</div>
          </div>
          <p className="mb-12">
            Cada uma dessas funções depende diretamente da forma ativa envolvida — por isso entender retinol, retinal e ácido retinóico é tão importante na prática clínica e nutricional[cite: 51].
          </p>

          <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 italic uppercase">Conclusão [cite: 52]</h2>
          <p className="mb-4">A vitamina A não é uma molécula única com uma única função[cite: 53]. Na verdade, ela atua como um sistema integrado de compostos, onde[cite: 54]:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-green-600">
            <li>O <strong>retinol</strong> armazena e transporta [cite: 55]</li>
            <li>O <strong>retinal</strong> atua na visão [cite: 56]</li>
            <li>O <strong>ácido retinóico</strong> regula genes e crescimento celular [cite: 57]</li>
          </ul>
          <p className="mb-6">
            Essa dinâmica mostra como a nutrição vai muito além do consumo de nutrientes — envolve também a forma como o corpo transforma e utiliza cada substância[cite: 58]. Se você quer aprofundar sua prática ou melhorar sua alimentação, entender esse metabolismo é um diferencial enorme[cite: 59].
          </p>
        </div>

      </div>
    </article>
  );
}
