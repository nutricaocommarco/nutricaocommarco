import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Home() {
  return (
    <>
      <header className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white text-center md:text-left">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 z-10">
              <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">Estudante de Nutrição • Unicesumar</span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase leading-tight">NUTRIÇÃO <br/> COM CIÊNCIA</h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl font-medium leading-relaxed mx-auto md:mx-0 text-left">Transformando vidas através da antropometria e estratégias baseadas em evidências. Atendimento presencial e online em todo o Brasil.</p>
              <Link to="/blog" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl group mx-auto md:mx-0 w-fit">Ver Conteúdo Técnico <ChevronRight size={20} /></Link>
            </div>
            <div className="flex-1 relative mt-10 md:mt-0">
              <div className="w-full aspect-[4/5] max-w-md mx-auto bg-white p-3 rounded-[2.5rem] rotate-2 shadow-2xl border border-slate-100 overflow-hidden">
                <img src={`${githubImgBase}marco-aurelio.png`} alt="Marco Aurélio Jr" className="w-full h-full object-cover rounded-[2rem] scale-105" />
              </div>
              <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-8 flex flex-col gap-3">
                <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black shadow-inner p-1.5 border border-slate-50"><img src={`${githubImgBase}isak-logo.png`} className="w-full h-full object-contain" alt="ISAK" /></div>
                  <div className="text-left"><p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Certificação</p><p className="font-black text-slate-800 text-xs md:text-sm">ISAK Level 1</p></div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black shadow-inner p-1.5 border border-slate-50"><img src={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} className="w-full h-full object-contain" alt="Uniguacu" /></div>
                  <div className="text-left"><p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Pós-Graduando</p><p className="font-black text-slate-800 text-xs md:text-sm leading-tight">Uniguaçú - Metabolismo</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white text-center md:text-left container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic mb-6">Olá, sou o Marco Aurélio Jr.👋</h2>
            <div className="w-20 h-2 bg-green-600 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">Sou estudante do 4º ano de Nutrição na Unicesumar e entusiasta da antropometria técnica. Minha missão é levar clareza nutricional para quem busca resultados reais.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-green-50"><h4 className="font-black text-green-600 text-sm uppercase">Foco</h4><p className="font-bold text-slate-800">Antropometria e Emagrecimento</p></div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-green-50"><h4 className="font-black text-green-600 text-sm uppercase">Local</h4><p className="font-bold text-slate-800 leading-tight text-sm">Rio de Janeiro, Freguesia e Online</p></div>
            </div>
          </div>
          <div className="flex-1 bg-green-600 p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
            <Zap className="absolute -top-10 -right-10 w-40 h-40 opacity-10" />
            <h3 className="text-2xl font-black mb-6 italic uppercase">Minha Missão</h3>
            <p className="text-xl leading-relaxed mb-10 font-medium italic text-left">"Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."</p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img src={`${githubImgBase}logoN_pingus.png`} alt="Pingus" className="w-16 h-16 object-contain drop-shadow-lg" />
              <div className="text-left font-black uppercase text-white"><span className="block text-[10px] opacity-80">Mascote Oficial</span>Pingus</div>
            </div>
          </div>
        </div>
      </section>

      <section id="ebooks" className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
          <p className="text-slate-500 font-bold uppercase text-sm tracking-widest mb-16">Conteúdo gratuito para sua evolução</p>
          <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
            {[
              { title: "Guia de Receitas", desc: "Praticidade e muito sabor para o seu dia a dia.", image: `${githubImgBase}capa_receitas.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Ebook-Receitas.pdf" },
              { title: "Entendendo a Fome", desc: "Aprenda a diferenciar fome física da emocional.", image: `${githubImgBase}capa_fome.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf" },
              { title: "Manual de Antropometria", desc: "Entenda como medimos o seu resultado real.", image: `${githubImgBase}capa_antropometria.jpeg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf" },
              { title: "Casca de Banana", desc: "Aproveitamento integral inteligente.", image: `${githubImgBase}Capa_pancs.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf" },
              { title: "Guia de Vitaminas", desc: "Tudo sobre micronutrientes com receitas exclusivas.", image: `${githubImgBase}Vitaminas_Capa.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf" }
            ].map((ebook, i) => (
              <a key={i} href={ebook.link} target="_blank" rel="noreferrer" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-[360px] bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group border border-slate-100">
                <div className="aspect-[3/4] mb-8 rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner"><img src={ebook.image} alt={ebook.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" /></div>
                <h3 className="text-2xl font-black mb-4 text-slate-800 leading-tight min-h-[64px] text-center md:text-left">{ebook.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow font-medium italic leading-relaxed text-center md:text-left">{ebook.desc}</p>
                <span className="bg-green-600 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase text-center shadow-lg group-hover:bg-green-700 transition-colors">Baixar PDF</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
