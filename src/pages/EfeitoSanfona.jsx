import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function EfeitoSanfona() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        
        {/* Botão de Voltar */}
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        
        <article className="prose prose-lg max-w-none text-left">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiopatologia e Metabolismo</span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Efeito Sanfona e a Inflamação Invisível: Por que o reganho de peso é tão perigoso?
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>Você já sentiu que, logo após terminar uma dieta e perder peso, o seu corpo parece fazer um esforço enorme para ganhar tudo de novo? Esse vaivém da balança, conhecido como efeito sanfona ou ciclo de peso, é um dos maiores desafios para quem busca saúde, já que a grande maioria das pessoas que tentam emagrecer acaba enfrentando dificuldades reais para manter o peso mais baixo a longo prazo.</p>

            {/* IMAGEM DE CAPA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/efeito_sanfona.jpg`} alt="Metabolismo e efeito sanfona" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">O reganho de peso é um evento inflamatório agressivo para as células.</p></div>
            </div>

            <p>A ciência moderna nos mostra que isso acontece porque o nosso corpo não encara o emagrecimento apenas como uma mudança estética, mas como um evento que mexe profundamente com o funcionamento das nossas células de gordura e com o equilíbrio do nosso metabolismo. Essa oscilação constante está ligada a riscos aumentados de doenças cardiovasculares e diabetes, provando que o impacto vai muito além do que vemos no espelho.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Sua gordura é mais do que um "estoque" de energia</h2>
            <p>Muitas vezes, olhamos para a gordura apenas como um estoque de energia, mas ela funciona como um verdadeiro órgão endócrino. Em um estado de saúde, esse tecido é flexível, mas o excesso crônico de nutrientes desencadeia uma inflamação silenciosa de baixo grau.</p>

            {/* QUADRO DE DESTAQUE COM LINK CORRIGIDO */}
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "A obesidade causa uma reprogramação profunda nas células (epigenética) que não se resolve completamente apenas com a dieta."
            </div>

            <p>Estudos recentes de 2025 mostram que a formação de tecidos mais rígidos, conhecidos como fibrose, faz com que o sistema de defesa do tecido continue em um estado de alerta disfuncional. Essa memória persistente explica por que qualquer descuido que leve ao reganho de peso pode reacender a inflamação com uma rapidez e gravidade surpreendentes. É aqui que entra a importância de uma <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">avaliação física detalhada</Link> para identificar se o que você está ganhando é realmente tecido inflamado ou massa magra.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">O que acontece quando o peso volta?</h2>
            <p>O reganho de peso costuma ser muito mais agressivo para o corpo do que o ganho inicial. Quando você volta a engordar, as suas células de gordura crescem rápido demais, gerando falta de oxigênio no tecido e reativando a inflamação de forma ainda mais severa.</p>

            {/* VÍDEO COMPLEMENTAR INTEGRADO */}
            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">Como quebrar o ciclo do efeito sanfona?</h3>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic text-left">Entenda como as flutuações de peso impactam o seu metabolismo basal e o que a ciência recomenda para manter a estabilidade a longo prazo.</p>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/3dy2cotfAWM" 
                  title="Como Evitar o Efeito Sanfona" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">O segredo está na constância, não na pressa</h2>
            <p>A mensagem principal aqui é que o nosso tecido adiposo é dinâmico. Para quebrar esse ciclo de inflamação e proteger o seu metabolismo, o foco não deve ser em dietas milagrosas que prometem perdas rápidas, mas sim em estratégias sustentáveis. Evitar essas flutuações bruscas na balança (que muitas vezes são apenas variações de água, como vemos nos problemas de <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">confiabilidade da bioimpedância</Link>) é a melhor forma de garantir que o seu corpo realmente recupere a saúde.</p>

            {/* FAQ REVISADO */}
            <div className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">O efeito sanfona estraga o metabolismo para sempre?</h4>
                  <p className="text-slate-600">Não é permanente, mas cria "memórias" nas células que as tornam propensas a inflamar novamente. O corpo precisa de tempo e estabilidade para se recuperar.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Por que sinto mais fome após emagrecer?</h4>
                  <p className="text-slate-600">É uma resposta de sobrevivência: o corpo reduz o gasto de energia e aumenta os hormônios da fome para tentar repor os estoques perdidos.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">É melhor ficar acima do peso do que viver no efeito sanfona?</h4>
                  <p className="text-slate-600">A ciência sugere que flutuações constantes podem ser mais prejudiciais ao coração do que manter um peso estável, devido à inflamação mais severa no reganho.</p>
                </div>
              </div>
            </div>
            
          </div>
        </article>
        
        {/* RODAPÉ DO AUTOR */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg text-2xl">M</div>
            <div className="text-left font-bold"><p className="text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black text-left">ISAK Level 1 • Nutrição com Ciência</p></div>
          </div>
          <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
        </div>
        
      </div>
    </section>
  );
}
