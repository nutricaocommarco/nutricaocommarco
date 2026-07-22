import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import ImagemOtimizada from '../../components/ImagemOtimizada';
import { produtosData } from './produtosData';

// 🔄 COMPONENTE INTERNO: O Carrossel Automático no Hover
function CarrosselVitrine({ imagens, nome, priority }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalo;
    // Se o mouse estiver em cima e tiver mais de 1 imagem, inicia a rotação
    if (isHovered && imagens.length > 1) {
      intervalo = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
      }, 1200); // Troca a imagem a cada 1.2 segundos
    } else {
      // Se tirar o mouse, volta pra primeira foto
      setCurrentIndex(0);
    }
    
    // Limpa o intervalo para não bugar a memória
    return () => clearInterval(intervalo);
  }, [isHovered, imagens.length]);

  return (
    <div 
      className="relative w-full h-80 overflow-hidden bg-slate-100 border-b border-slate-50 group-hover:bg-slate-200/50 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)} // Permite funcionar com toque no celular também
    >
      {/* Mapeia e renderiza as imagens sobrepostas. A opacidade muda suavemente. */}
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
      
      {/* Pontinhos indicadores (Dots) na base da imagem */}
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
            
            {/* Chamamos o nosso novo carrossel inteligente aqui */}
            <CarrosselVitrine 
              imagens={produto.imagens} 
              nome={produto.nome} 
              priority={index < 3 ? "high" : "low"} 
            />

            <div className="p-8 flex flex-col flex-grow relative z-30 bg-white">
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