import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ImagemOtimizada from '../components/ImagemOtimizada';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nutrição com Marco | Performance e Emagrecimento</title>
        <meta name="description" content="Especialista em Nutrição e Antropometria no RJ e Online. Performance física e saúde baseada em evidências científicas." />
        
        {/* INÍCIO DO SCHEMA.ORG (DADOS ESTRUTURADOS PARA O GOOGLE) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Nutrição com Marco",
            "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.webp",
            "@id": "https://www.nutricaocommarco.com.br/",
            "url": "https://www.nutricaocommarco.com.br/",
            "email": "nutricaocommarco@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rio de Janeiro",
              "addressRegion": "RJ",
              "addressCountry": "BR"
            },
            "founder": {
              "@type": "Person",
              "name": "Marco Aurélio Jr.",
              "jobTitle": "Nutricionista e Avaliador ISAK 1",
              "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/marco-aurelio.png"
            },
            "description": "Especialista em Nutrição Clínico-Esportiva e Antropometria ISAK 1 com atendimento no Rio de Janeiro e Online.",
            "priceRange": "$$"
          })}
        </script>
        {/* FIM DO SCHEMA.ORG */}
      </Helmet>

      <header className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white text-center md:text-left">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 z-10">
              <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">Estudante de Nutrição • Unicesumar</span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase leading-tight">NUTRIÇÃO COM<br/> MARCO</h1>
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
                  <div className="text-left"><p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Pós-Graduando</p><p className="font-black text-slate-800 text-xs md:text-sm leading-tight">Uniguaçú - Emagrecimento e Metabolismo</p></div>
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
            <div className="w-20 h-2 bg-green-700 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">Sou estudante do 4º ano de Nutrição na Unicesumar e entusiasta da antropometria técnica. Minha missão é levar clareza nutricional para quem busca resultados reais.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-green-50"><h4 className="font-black text-green-700 text-sm uppercase">Foco</h4><p className="font-bold text-slate-800">Antropometria e Emagrecimento</p></div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-green-50"><h4 className="font-black text-green-700 text-sm uppercase">Local</h4><p className="font-bold text-slate-800 leading-tight text-sm">Rio de Janeiro, Freguesia e Online</p></div>
            </div>
          </div>
          <div className="flex-1 bg-green-700 p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
            <Zap className="absolute -top-10 -right-10 w-40 h-40 opacity-10" />
            <h3 className="text-2xl font-black mb-6 italic uppercase">Minha Missão</h3>
            <p className="text-xl leading-relaxed mb-10 font-medium italic text-left">"Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."</p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img src={`${githubImgBase}logoN_pingus.webp`} alt="Pingus" className="w-16 h-16 object-contain drop-shadow-lg" />
              <div className="text-left font-black uppercase text-white"><span className="block text-[10px] opacity-80">Mascote Oficial</span>Pingus</div>
            </div>
          </div>
        </div>
      </section>

      <section id="livro" className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="container mx-auto max-w-5xl bg-slate-900 text-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-2xl grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center border-4 border-green-500/20">
          <a href="/livro-antropometria" className="mx-auto md:mx-0 block w-44 md:w-56 shrink-0 hover:-translate-y-2 transition-transform duration-300" aria-label="Conhecer o livro Antropometria — Do Zero ao Avançado, Volume 1">
            <img src={`${githubImgBase}Antropometria_Livro_Vol1_Capa.webp`} alt="Capa do livro Antropometria — Do Zero ao Avançado, Volume 1, de Marco Aurélio Neves Júnior" width="1365" height="2000" loading="lazy" className="w-full h-auto rounded-lg shadow-2xl border border-white/10" />
          </a>
          <div className="text-center md:text-left">
            <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest text-green-400 mb-3">Livro impresso • Volume 1</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic leading-tight mb-4">Livro de Antropometria: Do Zero ao Avançado</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">O livro de antropometria para quem quer aprender avaliação antropométrica com técnica e método: dobras cutâneas, perímetros, diâmetros ósseos e o protocolo ISAK passo a passo. Frete grátis.</p>
            <a href="/livro-antropometria" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-xl transition-all hover:scale-105">Conhecer o livro</a>
          </div>
        </div>
      </section>

      <section id="livro-fome" className="py-16 md:py-24 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl bg-[#123C2E] text-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-2xl grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center border-4 border-amber-400/30">
          <a href="/livro-entre-a-fome-e-a-saciedade" className="mx-auto md:mx-0 block w-44 md:w-56 shrink-0 hover:-translate-y-2 transition-transform duration-300" aria-label="Conhecer o livro Entre a Fome e a Saciedade">
            <img src={`${githubImgBase}Livro_Fome_Saciedade_Capa.webp`} alt="Capa do livro Entre a Fome e a Saciedade: Estratégias para uma alimentação consciente, de Marco Aurelio Neves Junior" width="620" height="940" loading="lazy" className="w-full h-auto rounded-lg shadow-2xl border border-white/10" />
          </a>
          <div className="text-center md:text-left">
            <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300 mb-3">Livro impresso • Alimentação consciente</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic leading-tight mb-4">Entre a Fome e a Saciedade</h2>
            <p className="text-emerald-50/90 font-medium leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">Você come porque está com fome ou porque quer outra coisa? Aprenda a ouvir a fome e a saciedade, sem dieta e sem culpa, com exercícios, escalas e um diário de 7 dias.</p>
            <a href="/livro-entre-a-fome-e-a-saciedade" className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 px-8 py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-xl transition-all hover:scale-105">Conhecer o livro • R$ 29,90</a>
          </div>
        </div>
      </section>

      <section id="ebooks" className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
          <p className="text-slate-500 font-bold uppercase text-sm tracking-widest mb-16">Conteúdo gratuito para sua evolução</p>
          <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
            {[
                            { title: "Manual de Antropometria", desc: "Entenda como medimos o seu resultado real.", image: `${githubImgBase}capa_antropometria.webp`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf" },
              { title: "Casca de Banana", desc: "Aproveitamento integral inteligente.", image: `${githubImgBase}Capa_pancs.webp`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf" },
              { title: "Guia de Vitaminas", desc: "Tudo sobre micronutrientes com receitas exclusivas.", image: `${githubImgBase}Vitaminas_Capa.webp`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf" }
            ].map((ebook, i) => (
              <a key={i} href={ebook.link} target="_blank" rel="noreferrer" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-[360px] bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group border border-slate-100">
                <div className="aspect-[3/4] mb-8 rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner"><img src={ebook.image} alt={ebook.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" /></div>
                <h3 className="text-2xl font-black mb-4 text-slate-800 leading-tight min-h-[64px] text-center md:text-left">{ebook.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow font-medium italic leading-relaxed text-center md:text-left">{ebook.desc}</p>
                <span className="bg-green-700 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase text-center shadow-lg group-hover:bg-green-700 transition-colors">Baixar PDF</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}