import React from 'react';
import { BookOpen } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Cartão de divulgação do livro "Antropometria — Do Zero ao Avançado (Vol. 1)" dentro dos artigos.
// A página do livro é um HTML estático (fora do roteador React), por isso o link é um <a> comum.
export default function LivroAntropometria({ titulo = 'Quer ir além? Conheça o livro de antropometria', texto }) {
  return (
    <aside className="not-prose my-12 bg-slate-900 text-white rounded-[2.5rem] p-6 md:p-8 shadow-xl border-4 border-green-500/20 flex flex-col sm:flex-row items-center gap-6 text-left" aria-label="Livro Antropometria — Do Zero ao Avançado">
      <a href="/livro-antropometria" className="block w-28 sm:w-32 shrink-0 hover:-translate-y-1 transition-transform duration-300" aria-label="Conhecer o livro Antropometria — Do Zero ao Avançado, Volume 1">
        <img src={`${githubImgBase}Antropometria_Livro_Vol1_Capa.webp`} alt="Capa do livro Antropometria — Do Zero ao Avançado, Volume 1, de Marco Aurélio Neves Júnior" width="1365" height="2000" loading="lazy" className="w-full h-auto rounded-md shadow-2xl border border-white/10" />
      </a>
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-400 mb-2"><BookOpen size={14} /> Livro impresso • Volume 1</span>
        <p className="text-xl md:text-2xl font-black italic uppercase leading-tight text-white m-0 mb-2">{titulo}</p>
        <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed m-0 mb-4">
          {texto || 'Em “Antropometria — Do Zero ao Avançado”, eu explico a avaliação antropométrica passo a passo: dobras cutâneas, perímetros, diâmetros ósseos e o protocolo ISAK. Frete grátis.'}
        </p>
        <a href="/livro-antropometria" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-colors no-underline">Conhecer o livro</a>
      </div>
    </aside>
  );
}
