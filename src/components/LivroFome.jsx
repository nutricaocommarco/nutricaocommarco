import React from 'react';
import { BookOpen } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Cartão de divulgação do livro "Entre a Fome e a Saciedade" dentro dos artigos.
// A página do livro é um HTML estático (fora do roteador React), por isso o link é um <a> comum.
export default function LivroFome({ texto }) {
  return (
    <aside className="not-prose my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 group" aria-label="Livro Entre a Fome e a Saciedade">
      <a href="/livro-entre-a-fome-e-a-saciedade" className="block w-40 md:w-1/4 shrink-0 hover:-translate-y-1 transition-transform duration-300" aria-label="Conhecer o livro Entre a Fome e a Saciedade">
        <img src={`${githubImgBase}Livro_Fome_Saciedade_Capa.webp`} alt="Capa do livro Entre a Fome e a Saciedade: Estratégias para uma alimentação consciente, de Marco Aurelio Neves Junior" width="620" height="940" loading="lazy" className="w-full h-auto rounded-md shadow-xl border border-slate-100" />
      </a>
      <div className="flex-1 text-center md:text-left flex flex-col justify-center">
        <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mx-auto md:mx-0 mb-4"><BookOpen size={14} /> Livro impresso</span>
        <p className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic leading-tight m-0 mb-3">Livro: Entre a Fome e a Saciedade</p>
        <p className="text-slate-600 font-medium leading-relaxed mb-8">{texto}</p>
        <a href="/livro-entre-a-fome-e-a-saciedade" className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full md:w-fit italic no-underline">Conhecer o livro • R$ 29,90</a>
      </div>
    </aside>
  );
}
