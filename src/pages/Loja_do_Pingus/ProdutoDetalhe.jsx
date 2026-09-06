import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, PackageCheck } from 'lucide-react';
import ImagemOtimizada from '../../components/ImagemOtimizada';
import { produtosData } from './produtosData';

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = produtosData.find(p => p.id === id);
  const [imagemPrincipal, setImagemPrincipal] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setImagemPrincipal(0);
  }, [id]);

  // 🔀 Outros produtos, em ordem aleatória a cada visita
  const outrosProdutos = useMemo(() => {
    return produtosData
      .filter(p => p.id !== id)
      .sort(() => Math.random() - 0.5);
  }, [id]);

  if (!produto) {
    return <Navigate to="/loja" replace />;
  }

  return (
    <section className="py-24 bg-slate-50 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">
          <a href="/loja" className="hover:text-green-700 transition-colors">Loja</a>
          <ChevronRight size={12} />
          <span className="text-slate-800">{produto.nome}</span>
        </div>

        <div className="bg-white p-6 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12">
          
          {/* Coluna Esquerda - Carrossel de Imagens */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="w-full aspect-square bg-slate-50 rounded-3xl p-6 border border-slate-100 flex items-center justify-center">
              <ImagemOtimizada 
                src={produto.imagens[imagemPrincipal]} 
                alt={produto.nome} 
                priority="high"
                className="w-full h-full object-contain drop-shadow-xl transition-all duration-300"
              />
            </div>
            {/* Miniaturas */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {produto.imagens.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setImagemPrincipal(idx)}
                  className={`w-20 h-20 shrink-0 bg-slate-50 rounded-2xl p-2 border-2 transition-all ${imagemPrincipal === idx ? 'border-green-700 shadow-md scale-105' : 'border-transparent hover:border-slate-300 opacity-70 hover:opacity-100'}`}
                >
                  <ImagemOtimizada src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Coluna Direita - Informações */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 italic uppercase leading-tight mb-4">
              {produto.nome}
            </h1>
            <p className="text-4xl font-black text-green-700 mb-8">
              {produto.precoFormatado}
            </p>
            
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              {produto.descricao}
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
              <h3 className="font-black text-slate-800 uppercase italic text-sm mb-4 flex items-center gap-2">
                <PackageCheck size={18} className="text-green-700" /> Especificações
              </h3>
              <ul className="text-sm text-slate-600 font-medium space-y-2 m-0 p-0 list-none">
                {produto.especificacoes.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-700 font-black">·</span> {spec}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={produto.linkHotmart} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-700 text-white py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 italic"
            >
              <ShoppingCart size={20} /> Comprar Agora
            </a>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4">
              Pagamento 100% seguro via Hotmart
            </p>
          </div>
        </div>

        {/* 🛍️ OUTROS PRODUTOS DA LOJA (ordem aleatória) */}
        {outrosProdutos.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mb-8 flex items-center gap-3">
              <ShoppingCart className="text-green-700" /> Outros Produtos da Loja
            </h2>
            <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto pb-4 md:pb-0 md:overflow-visible snap-x snap-mandatory">
              {outrosProdutos.map((p) => (
                <Link
                  key={p.id}
                  to={`/loja/${p.id}`}
                  className="shrink-0 w-64 md:w-auto snap-start bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center no-underline"
                  aria-label={`Ver produto: ${p.nome}`}
                >
                  <div className="w-32 h-32 bg-slate-50 rounded-2xl p-4 mb-4 flex items-center justify-center">
                    <ImagemOtimizada src={p.imagens[0]} alt={p.nome} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-black text-slate-800 uppercase italic text-sm mb-1">{p.nome}</h3>
                  <p className="text-green-700 font-black text-lg m-0">{p.precoFormatado}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}