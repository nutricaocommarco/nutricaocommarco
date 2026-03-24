import React from 'react';
import { Link } from 'react-router-dom';
// IMPORT CORRIGIDO AQUI: Adicionado 'Clock'
import { ChevronRight, Clock } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Blog() {
  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Nutrição baseada em evidência científica</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card Beterraba e Diabetes (NOVO) */}
        <Link to="/diabetico_pode_comer_beterraba" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/beterraba_diabetes.jpg`} 
              alt="Diabético pode comer beterraba?" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Nutrição Clínica
              </span>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-3 italic group-hover:text-green-600 transition-colors uppercase leading-tight">
              Diabético pode comer beterraba? O mito desvendado
            </h2>
            <p className="text-slate-600 text-sm mb-6 flex-grow font-medium leading-relaxed">
              Descubra por que o sabor doce da beterraba engana e como suas fibras na verdade ajudam a controlar os picos de glicemia no seu dia a dia.
            </p>
            <div className="mt-auto flex items-center text-green-600 font-black text-sm uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
              Ler Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>

        {/* Card Melhor Horário para Pesar */}
        <Link to="/qual_melhor_horario_para_se_pesar" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/melhor_horario_pesagem.jpg`} 
              alt="Qual o melhor horário para se pesar?" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Avaliação e Medidas</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Qual o melhor horário para se pesar?</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">
              Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite. Peso na balança não é igual a gordura corporal.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
              Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>

        {/* Card Ironman 70.3 */}
        <Link to="/nutricao_para_ironman_703" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/nutricao_ironman_703.jpg`} 
              alt="Nutrição para Ironman 70.3" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Nutrição Esportiva</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Nutrição para Ironman 70.3: O Guia Definitivo</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">
              Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos, hidratação e suplementação para o triatlo.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
              Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>

        {/* Card Hormônios da Fome */}
        <Link to="/hormonios_da_fome_emagrecimento" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/Hormfome.jpg`} 
              alt="Hormônios da fome: Grelina e Leptina" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Fisiologia e Metabolismo</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Hormônios da Fome: A Verdadeira Razão do Efeito Rebote</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">
              Entenda como Grelina, Leptina e GLP-1 sabotam sua dieta. Descubra por que a fome aumenta após emagrecer e a ciência por trás do reganho de peso.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
              Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>

        {/* Card Feijão */}
        <Link to="/por_que_o_feijao_da_gases" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/feijao.jpg`} 
              alt="Por que o feijão dá gases" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Saúde Intestinal</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Por que o feijão dá gases e como evitar de vez</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">
              Descubra por que o feijão causa gases, quais alimentos fermentam no intestino e veja dicas práticas para melhorar sua digestão.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
              Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>
        
        {/* Card Eritropoetina */}
        <Link to="/o_dilema_do_sangue_na_altitude" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/eritropoietina.jpg`} 
              alt="O Dilema do Sangue na Altitude" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Fisiologia do Esporte</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">O Dilema do Sangue na Altitude</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">
              Como o hormônio eritropoetina e a transfusão de hemácias afetam a biologia do atleta e a ética no esporte.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
              Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>

        {/* Card Efeito Sanfona */}
        <Link to="/efeito_sanfona_inflamacao_invisivel" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img src={`${githubImgBase}Blog/efeito_sanfona.jpg`} alt="O Efeito Sanfona e a Inflamação Invisível" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Fisiopatologia</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">O Efeito Sanfona e a Inflamação Invisível</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">Por que o reganho de peso é tão perigoso e como a memória das suas células de gordura dificulta o emagrecimento real.</p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Página do Artigo <ChevronRight size={16} /></div>
          </div>
        </Link>

        {/* Card Frutose */}
        <Link to="/quantas_frutas_posso_comer" className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
          <div className="h-64 overflow-hidden border-b border-slate-50">
            <img 
              src={`${githubImgBase}Blog/frutose_bananas.jpg`} 
              alt="Quantas frutas posso comer por dia?" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Metabolismo</span>
            <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">Quantas frutas posso comer por dia?</h3>
            <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">
              Entenda o metabolismo da frutose, a diferença entre o açúcar natural e o refinado, e descubra a verdade sobre a fruta e a gordura no fígado.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">
              Ler Página do Artigo <ChevronRight size={16} />
            </div>
          </div>
        </Link>
        
        {/* Card Vitamina A */}
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
