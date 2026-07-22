import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, MonitorPlay, BookOpen, ExternalLink } from 'lucide-react';
import ImagemOtimizada from '../../components/ImagemOtimizada';
import { produtosData } from './produtosData';

// 🔄 COMPONENTE INTERNO: O Carrossel Automático no Hover para Produtos Físicos
function CarrosselVitrine({ imagens, nome, priority }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalo;
    if (isHovered && imagens.length > 1) {
      intervalo = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
      }, 800);
    } else {
      setCurrentIndex(0);
    }
    return () => clearInterval(intervalo);
  }, [isHovered, imagens.length]);

  return (
    <div 
      className="relative w-full h-80 overflow-hidden bg-slate-100 border-b border-slate-50 group-hover:bg-slate-200/50 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {imagens.map((img, idx) => (
         <div 
           key={idx} 
           className={`absolute inset-0 p-6 flex items-center justify-center transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
         >
            <ImagemOtimizada 
              src={img} 
              alt={`${nome} - Ângulo ${idx + 1}`} 
              title={nome}
              className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700" 
              priority={idx === 0 ? priority : "low"}
            />
         </div>
      ))}
      
      {imagens.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {imagens.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-green-700' : 'w-1.5 bg-slate-400'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// 🛍️ PÁGINA PRINCIPAL DA LOJA
export default function Loja() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Dados manuais para os produtos digitais já existentes no site
  const produtosDigitais = [
    {
      id: "planilha",
      nome: "Planilha Antropométrica Inteligente PRO",
      link: "/planilha",
      imagem: "https://cdn.jsdelivr.net/gh/nutricaocommarco/nutricaocommarco@main/Imagens/PlanilhaImagem/Planilha_Capa.webp",
      tipo: "Software / Excel",
      icone: <MonitorPlay size={18} className="text-green-700" />
    },
    {
      id: "ebook-receitas",
      nome: "E-book Receitas Saudáveis e Nutritivas",
      link: "/ebook-receitas",
      imagem: "https://cdn.jsdelivr.net/gh/nutricaocommarco/nutricaocommarco@main/Imagens/Receitas_Saudáveis.png",
      tipo: "E-book / PDF",
      icone: <BookOpen size={18} className="text-green-700" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center min-h-screen">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4">Loja do Píngus</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Ferramentas e Produtos Exclusivos</p>

      {/* ==================================================== */}
      {/* 💻 CATEGORIA 1: PRODUTOS DIGITAIS                    */}
      {/* ==================================================== */}
      <div className="mb-20">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
          <h2 className="text-3xl font-black text-slate-800 uppercase italic m-0">Produtos Digitais</h2>
          <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
          {produtosDigitais.map((produto) => (
            <Link 
              key={produto.id} 
              to={produto.link} 
              className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col"
            >
              <div className="relative w-full h-80 overflow-hidden bg-slate-100 p-6 flex items-center justify-center border-b border-slate-50 group-hover:bg-slate-200/50 transition-colors">
                <ImagemOtimizada 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  title={produto.nome}
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700" 
                  priority="high"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-30 bg-white">
                <div className="flex items-center gap-2 mb-3 font-black text-[10px] uppercase tracking-widest text-slate-400 bg-slate-50 w-fit px-3 py-1 rounded-full">
                  {produto.icone} {produto.tipo}
                </div>
                <h2 className="text-xl font-black text-slate-800 mb-6 italic group-hover:text-green-700 transition-colors uppercase leading-tight">
                  {produto.nome}
                </h2>
                <div className="mt-auto flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-full font-bold uppercase text-xs tracking-widest group-hover:bg-green-700 transition-colors">
                  <ExternalLink size={16} /> Conhecer Produto
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ==================================================== */}
      {/* 👕 CATEGORIA 2: PRODUTOS FÍSICOS                     */}
      {/* ==================================================== */}
      <div>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
          <h2 className="text-3xl font-black text-slate-800 uppercase italic m-0">Produtos Físicos</h2>
          <div className="h-px bg-slate-200 flex-grow max-w-[100px]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {produtosData.map((produto, index) => (
            <Link 
              key={produto.id} 
              to={`/loja/${produto.id}`} 
              className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col"
            >
              <CarrosselVitrine 
                imagens={produto.imagens} 
                nome={produto.nome} 
                priority={index < 3 ? "high" : "low"} 
              />

              <div className="p-8 flex flex-col flex-grow relative z-30 bg-white">
                <div className="flex items-center gap-2 mb-3 font-black text-[10px] uppercase tracking-widest text-slate-400 bg-slate-50 w-fit px-3 py-1 rounded-full">
                  <ShoppingCart size={14} className="text-green-700" /> Sob Demanda
                </div>
                <h2 className="text-xl font-black text-slate-800 mb-2 italic group-hover:text-green-700 transition-colors uppercase leading-tight">
                  {produto.nome}
                </h2>
                <p className="text-green-700 text-2xl font-black mb-6 mt-auto">
                  {produto.precoFormatado}
                </p>
                <div className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-full font-bold uppercase text-xs tracking-widest group-hover:bg-green-700 transition-colors">
                  Ver Detalhes <ShoppingCart size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}