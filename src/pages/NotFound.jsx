import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Newspaper, Search } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans flex items-center">
      <div className="container mx-auto max-w-2xl bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 text-center">
        <img
          src="/logoN_pingus.webp"
          alt="Píngus, o mascote de Nutrição com Marco, confuso procurando a página"
          title="Página não encontrada"
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 object-contain"
          width="160"
          height="160"
        />

        <p className="text-7xl md:text-8xl font-black text-green-700 italic mb-2 leading-none">404</p>
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-4">
          O Píngus Procurou e Não Achou Essa Página
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          O link pode estar quebrado ou a página pode ter mudado de endereço. Que tal voltar para um lugar seguro?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            aria-label="Voltar para a página inicial"
            className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-sm shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full sm:w-auto italic"
          >
            <Home size={18} />
            Página Inicial
          </Link>
          <Link
            to="/blog"
            aria-label="Ver os artigos do blog"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-slate-200 transition-all duration-300 w-full sm:w-auto italic"
          >
            <Newspaper size={18} />
            Ver o Blog
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <Search size={14} />
          Ou pesquise pelo assunto direto no Google
        </div>
      </div>
    </section>
  );
}
