import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';

// 🧠 Importando o Cérebro Central!
import { posts } from '../data/posts'; // Ajuste o caminho se necessário

export default function Blog() {
  // Configuração da Paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const postsPorPagina = 20;

  // Matemática da Paginação
  const indiceUltimoPost = paginaAtual * postsPorPagina;
  const indicePrimeiroPost = indiceUltimoPost - postsPorPagina;
  
  // Pega apenas os 20 artigos da página atual
  const postsAtuais = posts.slice(indicePrimeiroPost, indiceUltimoPost);
  
  // Calcula o total de páginas
  const totalPaginas = Math.ceil(posts.length / postsPorPagina);

  // Função para formatar a data (De "2026-03-24" para "24/03/2026")
  const formatarData = (dataString) => {
    if (!dataString) return '';
    const [ano, mes, dia] = dataString.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center min-h-screen flex flex-col">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Nutrição baseada em evidência científica</p>
      
      {/* GRID DE ARTIGOS AUTOMÁTICO */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex-grow">
        {postsAtuais.map((post) => (
          <Link key={post.id} to={post.link} className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
            <div className="h-64 overflow-hidden border-b border-slate-50 relative">
              <img 
                src={post.img} 
                alt={post.titulo} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                  {post.tag}
                </span>
                {/* Aqui entra o Clock que você importou, usando a data do Cérebro Central! */}
                <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase">
                  <Clock size={12} />
                  {formatarData(post.data)}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4 group-hover:text-green-600 transition-colors">
                {post.titulo}
              </h3>
              
              <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3 flex-grow">
                {post.desc}
              </p>
              
              <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs mt-auto">
                Ler Página do Artigo <ChevronRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CONTROLES DE PAGINAÇÃO (Só aparecem se tiver mais de 1 página) */}
      {totalPaginas > 1 && (
        <div className="mt-16 flex justify-center items-center gap-4">
          <button 
            onClick={() => setPaginaAtual(prev => Math.max(prev - 1, 1))}
            disabled={paginaAtual === 1}
            className={`px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-all ${paginaAtual === 1 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-green-50 hover:text-green-600 shadow-md border border-slate-100'}`}
          >
            Anterior
          </button>
          
          <span className="text-slate-500 font-bold text-sm">
            Página {paginaAtual} de {totalPaginas}
          </span>
          
          <button 
            onClick={() => setPaginaAtual(prev => Math.min(prev + 1, totalPaginas))}
            disabled={paginaAtual === totalPaginas}
            className={`px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-all ${paginaAtual === totalPaginas ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-700 hover:bg-green-50 hover:text-green-600 shadow-md border border-slate-100'}`}
          >
            Próxima
          </button>
        </div>
      )}
    </section>
  );
}
