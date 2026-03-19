import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, PlayCircle, HelpCircle } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Antropometria() {
  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Educação Científica</span>
          <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">O que é Antropometria?</h1>
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>A <strong>Antropometria</strong> é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano, sendo uma ferramenta indispensável para profissionais das áreas de saúde, nutrição e esportes. Etimologicamente, o termo deriva do grego <em>anthropos</em> (homem) e <em>metron</em> (medida), definindo-se objetivamente como o método de mensurar as características fenotípicas de um indivíduo para entender seu crescimento, estado nutricional e potencial de performance. Diferente do que muitos acreditam, ela vai muito além de uma simples pesagem em balança de banheiro, oferecendo uma análise profunda do que o peso total realmente representa.</p>
            <p>Historicamente, a preocupação com as formas corporais remonta aos antigos egípcios e gregos, que buscavam proporções ideais para o "homem perfeito" ou para atletas olímpicos. No entanto, o nascimento da antropometria científica consolidou-se com pesquisadores como Lambert Quételet, o pai da estatística aplicada ao homem, que propôs o Índice de Massa Corporal (IMC) em 1841. Mais recentemente, na década de 1980, estudos liderados por William Ross revolucionaram a área ao demonstrar falhas nos sistemas de estimativa de composição corporal da época, servindo como base para a criação da Sociedade Internacional para o Avanço da Cineantropometria, o método <strong>ISAK</strong>.</p>
            
            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/O_que_e_antropometria.png`} alt="O que é Antropometria - Avaliação Física Profissional" title="Ciência da Antropometria e Composição Corporal" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">Precisão técnica para resultados que a balança comum não consegue mostrar.</p></div>
            </div>
            
            <p>O grande diferencial de uma avaliação física baseada no padrão ISAK é a sua padronização rigorosa. Esse protocolo internacional garante que os dados coletados sejam fidedignos e comparáveis em qualquer lugar do mundo, minimizando erros técnicos e de medição. Na prática, o antropometrista utiliza instrumentos de precisão para coletar diversas medidas antropométricas, como o estadiômetro para a estatura, a balança para a massa corporal, a trena metálica para os perímetros e o plicômetro (ou bússola de dobras) para as dobras cutâneas.</p>
            
            <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
              <div className="flex items-center gap-4 mb-8">
                <PlayCircle size={32} className="text-green-600" />
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none">Explicação Técnica em Vídeo</h3>
              </div>
              <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                <iframe src="https://www.instagram.com/p/DUV4gfkkcab/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
              </div>
            </div>
            
            <p>Essas medições permitem o fracionamento da massa corporal em componentes como massa gorda, massa muscular, massa óssea e massa residual. Para estimar o percentual de gordura de forma precisa, o avaliador realiza o destaque das dobras cutâneas em pontos anatômicos específicos, conhecidos como landmarks. Um erro de poucos milímetros na marcação desses pontos pode comprometer significativamente o resultado final, o que reforça a necessidade de um profissional qualificado.</p>
            <p>Além do foco na gordura corporal, a antropometria é vital para o cálculo do somatotipo, que descreve o físico em três componentes: endomorfia (adiposidade), mesomorfia (robustez muscular) e ectomorfia (linearidade ou magreza). Essa classificação ajuda a planejar intervenções específicas para melhora da performance esportiva ou para o monitoramento da saúde em casos de obesidade e doenças metabólicas.</p>
            
            <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
              "Para quem busca saúde e bem-estar, a antropometria atua como um GPS, retirando a pessoa da rota da incerteza das balanças comuns."
            </div>
            
            <p>Ela identifica riscos cardiovasculares através de medidas como a circunferência da cintura e permite que nutricionistas ajustem dietas com base no volume exato de massa muscular e gordura, garantindo que a evolução do paciente seja monitorada por dados concretos e científicos, e não apenas por "achismos". Portanto, investir em uma avaliação antropométrica de qualidade é o primeiro passo para qualquer pessoa que deseje entender a história que seu corpo conta e otimizar seus resultados de forma segura e precisa.</p>
            
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes</h3>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Qual a vantagem da certificação ISAK?</h4>
                  <p className="text-slate-600">Garante um protocolo mundial de medidas, minimizando erro técnico e assegurando precisão absoluta. Visite o site oficial em <a href="https://isak.global/" target="_blank" rel="noreferrer" className="text-green-600 font-black hover:underline">isak.global</a>.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">A antropometria é melhor que a bioimpedância?</h4>
                  <p className="text-slate-600">Ambas são complementares, mas a antropometria (dobras cutâneas) é menos sensível a variações momentâneas de hidratação, sendo mais consistente para medir a gordura real abaixo da pele.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Posso fazer avaliação antropométrica online?</h4>
                  <p className="text-slate-600">Na consulta online, orientamos métricas alternativas e perímetros que, aliados a uma análise visual técnica, fornecem parâmetros sólidos de evolução, embora as dobras manuais exijam o adipômetro presencial.</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
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
