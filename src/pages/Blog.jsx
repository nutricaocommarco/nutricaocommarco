import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Blog() {
  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Nutrição baseada em evidência científica</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <Link to="/quantas_frutas_posso_comer" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img src={${githubImgBase}Blog/frutas.jpg} alt="Quantas frutas posso comer por dia?" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Nutrição Clínica</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Quantas frutas posso comer por dia?</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">Entenda o metabolismo da frutose, a diferença entre o açúcar natural e o refinado, e descubra a verdade sobre a fruta e a gordura no fígado.</p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>
        
        {/* Card Vitamina A (NOVO - Primeiro da lista) */}
        <Link to="/vitamina_a_para_que_serve" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img src={`${githubImgBase}Blog/vitamina_a.jpg`} alt="Metabolismo da Vitamina A" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Metabolismo</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Vitamina A para que serve?</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão.</p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Página do Artigo <ChevronRight size={16} /></div>
          </div>
        </Link>

        {/* Card Antropometria */}
        <Link to="/o_que_e_antropometria" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img src={`${githubImgBase}Blog/O_que_e_antropometria.png`} alt="Antropometria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Educação Científica</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">O que é Antropometria?</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">A Antropometria é uma ciência fundamental que estuda as proporções do corpo humano...</p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Página do Artigo <ChevronRight size={16} /></div>
          </div>
        </Link>

        {/* Card Bioimpedância */}
        <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img src={`${githubImgBase}Blog/Bia1.jpg`} alt="Bioimpedância" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Tecnologia e Medida</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">A balança de bioimpedância é confiável?</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">Entenda se a balança de bioimpedância é confiável e os fatores que alteram o resultado.</p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Página do Artigo <ChevronRight size={16} /></div>
          </div>
        </Link>

      </div>
    </section>
  );
}
