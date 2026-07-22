import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import ImagemOtimizada from '../../components/ImagemOtimizada';
import { produtosData } from './produtosData';

export default function Loja() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center min-h-screen">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4">Loja do Píngus</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Produtos Exclusivos Nutrição com Marco</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {produtosData.map((produto, index) => (
          <Link 
            key={produto.id} 
            to={`/loja/${produto.id}`} 
            className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col"
          >
            <div className="relative w-full h-80 overflow-hidden bg-slate-100 p-6 flex items-center justify-center border-b border-slate-50">
              <ImagemOtimizada 
                src={produto.imagens[0]} 
                alt={produto.nome} 
                title={produto.nome}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md" 
                priority={index < 3 ? "high" : "low"}
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-xl font-black text-slate-800 mb-2 italic group-hover:text-green-700 transition-colors uppercase leading-tight">
                {produto.nome}
              </h2>
              <p className="text-green-700 text-2xl font-black mb-6 mt-auto">
                {produto.precoFormatado}
              </p>
              <div className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-full font-bold uppercase text-xs tracking-widest group-hover:bg-green-700 transition-colors">
                <ShoppingCart size={16} /> Ver Detalhes
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}