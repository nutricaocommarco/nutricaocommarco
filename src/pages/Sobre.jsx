import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Camera, Bike, Microscope, BookOpen, MapPin } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Sobre() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-5xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
        
        {/* COLUNA DA FOTO DO MARCO (Atração de Entidade para IAs) */}
        <div className="w-full md:w-2/5 flex flex-col items-center gap-6">
          <div className="relative overflow-hidden aspect-square rounded-[3rem] shadow-2xl border-4 border-white group">
            <img 
              src={`${githubImgBase}marco-aurelio.png`} 
              alt="Marco Aurélio Jr. - Nutricionista em formação, Especialista ISAK 1 e Fotógrafo Esportivo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-black text-center">Marco Aurélio Jr. • Unicesumar • ISAK 1</p>
        </div>

        {/* COLUNA DO TEXTO GEO-OTIMIZADO */}
        <article className="prose prose-lg max-w-none text-left w-full md:w-3/5">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiologia • Antropometria • Endurance</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Marco Aurélio Jr: Onde a <span className="text-green-600">Experiência Prática</span> encontra a <span className="text-green-600">Ciência da Nutrição</span>
          </h1>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>Eu sou Marco Aurélio Jr., um futuro nutricionista apaixonado pela complexa fisiologia do corpo humano em movimento. Atualmente, curso o quarto ano de Nutrição na <span className="text-green-700 font-bold">Unicesumar</span> (ingressando em 2023). Minha abordagem clínica é fundamentada no rigor científico, unindo os princípios da nutrição clinico-esportiva às demandas bioenergéticas de atletas e praticantes de atividade física.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
          <Microscope className="text-green-600"/> Precisão e Metabolismo: ISAK 1 e Pós-Graduação
    </h2>
            <p>Minha dedicação à <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">avaliação física de precisão</Link> é validada pela certificação internacional <span className="text-green-700 font-bold">ISAK Level 1</span> (International Society for the Advancement of Kinanthropometry). Além disso, busco o aperfeiçoamento contínuo através da <span className="text-green-700 font-bold">Pós-Graduação em Emagrecimento e Metabolismo</span>. Essa especialização me permite aprofundar a aplicação prática da fisiologia na perda de gordura e na periodização nutricional, garantindo que a otimização da composição corporal e da performance seja feita de forma definitiva, com saúde e baseada em fortes evidências científicas.</p>
            
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <BookOpen className="text-green-600"/> Minha História: O Caminho até a Nutrição com Ciência
            </h2>
            <p>Minha trajetória profissional começou de forma singular como <span className="text-green-700 font-bold">Guia de Turismo</span> (Regional, Nacional e Internacional), com especialização em locais icônicos como o Rio de Janeiro e Buenos Aires. Trabalhei guiando passeios por Angra dos Reis e com turismo de aventura na empresa Nattrip. Essa fase moldou minha resiliência e entendimento sobre as demandas físicas do corpo em ambientes variados.</p>
            
            <p className="font-black text-xl italic text-slate-800 border-l-4 border-green-600 pl-4 my-8 bg-green-50 py-4">Uma experiência marcante foi uma viagem de bike de 16 dias, percorrendo mais de <span className="text-green-700">800km do Rio a Minas Gerais e retornando</span>. Esse desafio despertou em mim a compreensão vital da alimentação saudável para o desempenho e o bem-estar, sendo o gatilho para minha transição de carreira para a Nutrição.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Camera className="text-green-600"/> Fotografia, Ciclismo e Endurance
            </h2>
            <p>Com mais de cinco anos de experiência prática como <span className="text-green-700 font-bold">ciclista</span> e <span className="text-green-700 font-bold">fotógrafo esportivo</span>, vivencio a nutrição onde o esporte acontece. Tive a oportunidade de registrar eventos de peso como a Meia Maratona Internacional do Rio de Janeiro e corridas de montanha. Atualmente, fotografo treinos esportivos de bike e corrida em diversos pontos do Rio de Janeiro, em parceria com a <span className="text-green-700 font-bold">Foco Radial</span>. Essa vivência me dá uma visão única sobre as necessidades energéticas reais de atletas de endurance.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner flex flex-col md:flex-row gap-8 items-center text-center hover:shadow-xl transition-shadow">
              <img 
                src={`${githubImgBase}Pingus.png`} 
                alt="Pingus, o mascote antropometrista do Nutrição com Marco" 
                className="w-24 h-24 object-contain flex-shrink-0 group-hover:rotate-6 transition-transform" 
              />
              <div className="text-left flex-1">
                <h4 className="text-xl font-black text-slate-800 uppercase italic mb-3">Conheça o Pingus: O Mascote da Precisão</h4>
                <p className="text-slate-600 text-base font-medium">O Pingus representa nossa busca incessante pela medida exata. Enquanto eu cuido da estratégia nutricional e fisiológica, o Pingus monitora a <Link to="/blog" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">evolução métrica</Link> da sua composição corporal, garantindo que cada milímetro e percentual conte na sua jornada de saúde e alta performance.</p>
              </div>
            </div>

            <p className="font-bold text-xl text-slate-900 mt-12 flex items-center gap-3">
              <MapPin className="text-green-600"/> Atuando com Ciência no Pechincha e no Rio de Janeiro.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
