import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Headphones, Activity, ChevronRight, Leaf, Scale, Heart, HelpCircle } from 'lucide-react';

// Importando componentes fixos
import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function RetatrutidaOQueE() {
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Informações fixas para SEO (Independente do cérebro central)
  const tituloPagina = "Retatrutida o que é? A nova fronteira contra a obesidade";
  const descricaoPagina = "Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados na perda de peso.";

  return (
    <>
      <Helmet>
        <title>{tituloPagina} | Nutrição com Marco</title>
        <meta name="description" content={descricaoPagina} />
      </Helmet>

      <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
        <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none text-left">

            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Tratamento Metabólico</span>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              {tituloPagina}
            </h1>

            {/* BLOCO DE RESPOSTA DIRETA */}
            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Resposta rápida: O que é a Retatrutida?
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  [span_0](start_span)A retatrutida (LY3437943) é uma medicação em fase de estudos classificada como um <strong>agonista triplo</strong>[span_0](end_span). [span_1](start_span)Ela simula a ação dos hormônios GLP-1, GIP e Glucagon simultaneamente, promovendo saciedade e aumentando o gasto energético[span_1](end_span). [span_2](start_span)Nos estudos de Fase 2 (TRIUMPH-1), pacientes alcançaram uma perda de peso média de até 24,2% em 48 semanas[span_2](end_span).
                </p>
            </div>

            {/* SUMÁRIO RETRÁTIL */}
            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden bg-slate-50">
                <button 
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Activity size={18} className="text-green-600" />
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Artigo</h3>
                  </div>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform ${isTocOpen ? 'rotate-90' : ''}`} />
                </button>

                {isTocOpen && (
                  <ul className="p-5 bg-white border-t border-green-100 list-none m-0 space-y-2">
                    <li><a href="#mecanismo" className="text-slate-500 hover:text-green-600 font-bold">O Mecanismo Triplo</a></li>
                    <li><a href="#resultados" className="text-slate-500 hover:text-green-600 font-bold">Resultados Clínicos</a></li>
                    <li><a href="#nutricao" className="text-slate-500 hover:text-green-600 font-bold">Importância da Dieta</a></li>
                  </ul>
                )}
            </div>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 flex items-center gap-3">
                <Leaf className="text-green-600"/> O Poder do Agonista Triplo
              </h2>
              [span_3](start_span)<p>Diferente de medicamentos anteriores que focavam apenas em uma via, a retatrutida atua em três frentes hormonais simultâneas[span_3](end_span):</p>
              
              

              <ul className="list-disc pl-5 space-y-2">
                [span_4](start_span)[span_5](start_span)<li><strong>GLP-1:</strong> Atua no hipotálamo regulando o apetite e aumentando a saciedade[span_4](end_span)[span_5](end_span).</li>
                [span_6](start_span)<li><strong>GIP:</strong> Melhora a sensibilidade à insulina e a captação de glicose[span_6](end_span).</li>
                [span_7](start_span)<li><strong>Glucagon:</strong> Potencializa a termogênese e a queima de gordura (oxidação de ácidos graxos)[span_7](end_span).</li>
              </ul>

              <h2 id="resultados" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 flex items-center gap-3">
                <Scale className="text-green-600"/> Resultados do Estudo TRIUMPH-1
              </h2>
              [span_8](start_span)<p>Os dados de Fase 2 demonstram que a retatrutida oferece eficácia superior aos fármacos injetáveis anteriores[span_8](end_span). [span_9](start_span)Com doses semanais que variam de 1 mg a 12 mg[span_9](end_span)[span_10](start_span), a perda de peso média chegou a 24,2% nas doses mais altas após 48 semanas[span_10](end_span). [span_11](start_span)[span_12](start_span)Além disso, observou-se melhorias significativas na pressão arterial e nos níveis de hemoglobina glicada (HbA1c)[span_11](end_span)[span_12](end_span).</p>

              <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
                [span_13](start_span)“O tratamento é mais eficaz quando integra farmacoterapia, nutrição personalizada e mudanças comportamentais[span_13](end_span).”
              </div>

              <h2 id="nutricao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 flex items-center gap-3">
                <Heart className="text-green-600"/> O Pilar Nutricional e Manejo
              </h2>
              [span_14](start_span)[span_15](start_span)<p>O sucesso prolongado depende da manutenção da massa magra. É recomendado um aporte proteico de 1,2 a 1,5g/kg de peso por dia[span_14](end_span)[span_15](end_span). [span_16](start_span)[span_17](start_span)[span_18](start_span)Além disso, o monitoramento nutricional é essencial para minimizar efeitos gastrointestinais comuns, como náuseas (20-40% dos pacientes) e constipação, através do fracionamento das refeições e hidratação adequada[span_16](end_span)[span_17](end_span)[span_18](end_span).</p>

              <Newsletter />
            </div> 
          </article>

          <ArtigosRecomendados currentPath="/retatrutida_o_que_e" />

          {/* CARTÃO DE AUTOR */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img src={`${githubImgBase}Eu_1.png`} alt="Marco Aurélio Jr." className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">Especialista em traduzir evidências científicas e fisiologia metabólica em resultados práticos para a saúde.</p>
              <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md">Siga @Nutricao_com_Marco</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}


