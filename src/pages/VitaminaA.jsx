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
          <ul className="list-disc pl-6 mb-6 space
