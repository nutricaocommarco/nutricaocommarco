import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Activity } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function EfeitoSanfona() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        
        {/* Botão de Voltar */}
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiopatologia</span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">
            Efeito Sanfona e a Inflamação Invisível: Por que o reganho de peso é tão perigoso?
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>Você já sentiu que, logo após terminar uma dieta e perder peso, o seu corpo parece fazer um esforço enorme para ganhar tudo de novo? Esse vaivém da balança, conhecido como efeito sanfona ou ciclo de peso, é um dos maiores desafios para quem busca saúde, já que a grande maioria das pessoas que tentam emagrecer acaba enfrentando dificuldades reais para manter o peso mais baixo a longo prazo.</p>

            <p>A ciência moderna nos mostra que isso acontece porque o nosso corpo não encara o emagrecimento apenas como uma mudança estética, mas como um evento que mexe profundamente com o funcionamento das nossas células de gordura e com o equilíbrio do nosso metabolismo. Essa oscilação constante não é apenas frustrante; ela está ligada a riscos aumentados de doenças cardiovasculares e diabetes, provando que o impacto vai muito além do que vemos no espelho.</p>
            
            {/* IMAGEM DE CAPA */}
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/efeito_sanfona.jpg`} alt="Ciclo de peso e metabolismo" title="O perigo do efeito sanfona" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">O corpo possui mecanismos de defesa potentes contra a perda de peso rápida.</p></div>
            </div>

            <p>Essa "luta" biológica ocorre porque o organismo ativa mecanismos potentes de defesa para proteger suas reservas de energia, resultando em uma queda do metabolismo em repouso e em um aumento marcante dos hormônios que nos fazem sentir fome. Ao mesmo tempo, o tecido adiposo passa por uma remodelação física intensa e inflamatória que pode prejudicar a sensibilidade à insulina e sobrecarregar o sistema circulatório. Entender que o corpo possui essa complexidade interna é o primeiro passo para perceber que o sucesso no emagrecimento depende de estratégias sustentáveis que respeitem a biologia das nossas células, e não apenas de restrições passageiras que ignoram como o corpo realmente funciona.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              Sua gordura é mais do que um "estoque" de energia
            </h2>

            <p>Muitas vezes, olhamos para a gordura apenas como um estoque de energia acumulado que queremos eliminar a qualquer custo, mas a ciência nos revela que o tecido adiposo é, na verdade, uma complexa central de controle metabólico. Ele funciona como um verdadeiro órgão endócrino, comunicando-se com o restante do corpo através da secreção de hormônios, lipídios e substâncias chamadas citocinas. Essas substâncias têm o papel fundamental de regular o nosso apetite, a nossa sensibilidade à insulina e a forma como gastamos energia diariamente.</p>

            <p>Em um estado de saúde, esse tecido é flexível e mantém um equilíbrio vital, mas quando há um excesso crônico de nutrientes, ele se expande e começa a emitir sinais de socorro, desencadeando uma inflamação silenciosa de baixo grau que serve como ponto de partida para doenças sérias. Emagrecer ajuda muito a reduzir o tamanho das células de gordura e a acalmar essa inflamação, mas o corpo costuma guardar uma espécie de "cicatriz invisível".</p>

            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "A obesidade causa uma reprogramação profunda nas células (epigenética) que não se resolve completamente apenas com a dieta."
            </div>

            <p>Estudos recentes de 2025 mostram que a formação de tecidos mais rígidos, conhecidos como fibrose, faz com que o sistema de defesa do tecido continue em um estado de alerta disfuncional. Essa memória persistente explica por que qualquer descuido que leve ao reganho de peso pode reacender a inflamação com uma rapidez e gravidade surpreendentes. É aqui que entra a importância de uma <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-white font-bold transition-colors">avaliação física detalhada</Link> para identificar se o que você está ganhando é realmente tecido inflamado ou massa magra.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O que acontece quando o peso volta?
            </h2>

            <p>O grande perigo do efeito sanfona está no que acontece quando recuperamos o peso perdido. De acordo com pesquisas, o reganho de peso costuma ser muito mais agressivo para o corpo do que o ganho inicial. Quando você volta a engordar, as suas células de gordura crescem rápido demais (hipertrofia), gerando falta de oxigênio no tecido e reativando a inflamação de forma ainda mais forte. Esse estresse celular pode ser mais prejudicial ao coração do que manter um peso estável, mesmo que um pouco acima do ideal.</p>

            <p>Para quem busca estabilidade, entender o funcionamento dos micronutrientes é vital. Por exemplo, a <Link to="/vitamina_a_para_que_serve" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">Vitamina A</Link> possui um papel importante na regulação do metabolismo celular que muitas vezes é negligenciado em dietas de gaveta.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">
              O segredo está na constância, não na pressa
            </h2>
            
            <p>A mensagem principal aqui é que o nosso tecido adiposo é dinâmico. Para quebrar esse ciclo de inflamação e proteger o seu metabolismo, o foco não deve ser em dietas milagrosas que prometem perdas rápidas, mas sim em estratégias sustentáveis. Evitar essas flutuações bruscas na balança (que muitas vezes são apenas variações de água, como vemos nos problemas de <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">confiabilidade da bioimpedância</Link>) é a melhor forma de garantir que o seu corpo realmente recupere a saúde.</p>
            
            {/* FAQ */}
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">O efeito sanfona estraga o metabolismo para sempre?</h4>
                  <p className="text-slate-600">Não é permanente, mas cria "memórias" nas células de gordura que as tornam mais propensas a inflamar novamente. O corpo precisa de tempo e hábitos estáveis para se recuperar desse estresse celular.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Por que eu sinto mais fome depois de emagrecer?</h4>
                  <p className="text-slate-600">É uma resposta biológica de sobrevivência. O gasto de energia diminui e o corpo aumenta a produção de hormônios da fome para tentar recuperar o estoque de energia perdido.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">É melhor ficar acima do peso do que viver no efeito sanfona?</h4>
                  <p className="text-slate-600">A ciência sugere que flutuações constantes podem ser mais prejudiciais ao coração e ao controle do açúcar no sangue do que manter um peso estável, devido à inflamação mais severa no reganho.</p>
                </div>
              </div>
            </div>
            
          </div>
        </article>
        
        {/* RODAPÉ DO AUTOR */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg text-2xl">M</div>
            <div className="text-left font-bold"><p className="text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black">ISAK Level 1 • Nutrição com Ciência</p></div>
          </div>
          <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
        </div>
        
      </div>
    </section>
  );
}
