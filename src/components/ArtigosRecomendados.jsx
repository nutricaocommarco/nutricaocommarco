import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// 🧠 1. Importando o Cérebro Central! 
// Ajuste o caminho '../data/posts' dependendo de onde a sua pasta components está
import { posts } from '../data/posts'; 

export default function ArtigosRecomendados({ currentPath }) {
  const [artigosSorteados, setArtigosSorteados] = useState([]);

  useEffect(() => {
    // 2. Filtra a lista central para NÃO incluir o artigo que o paciente já está lendo
    const artigosFiltrados = posts.filter(artigo => artigo.link !== currentPath);
    
    // 3. Embaralha os artigos restantes e escolhe 3
    const embaralhados = [...artigosFiltrados].sort(() => 0.5 - Math.random());
    setArtigosSorteados(embaralhados.slice(0, 3));
  }, [currentPath]);

  return (
    <div className="mt-20 pt-16 border-t-2 border-slate-100">
      <h2 className="text-3xl font-black text-slate-900 mb-10 italic uppercase text-center md:text-left">Leia também</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {artigosSorteados.map((artigo, index) => (
          <Link key={artigo.id || index} to={artigo.link} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col text-left">
            <div className="h-40 overflow-hidden">
              <img src={artigo.img} alt={artigo.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow text-left">
              <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-widest mb-3 w-fit">{artigo.tag}</span>
              <h3 className="text-lg font-black text-slate-800 leading-tight mb-2">{artigo.titulo}</h3>
              <p className="text-slate-500 text-xs font-medium italic mb-4 line-clamp-3 flex-grow">{artigo.desc}</p>
              <div className="flex items-center gap-1 text-green-600 font-bold uppercase text-[10px]">Acessar Artigo <ChevronRight size={14} /></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
