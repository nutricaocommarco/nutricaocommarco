
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, PlayCircle } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';


const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Eritropoetina() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Fisiologia do Esporte</span>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Dilema do Sangue na Altitude: Como o Hormônio Eritropoetina e a Transfusão de Hemácias Afetam a Ética no Esporte
          </h1>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>Correr uma maratona em um lugar como San Pedro do Atacama, a 2.500 metros acima do nível do mar, é um teste de fogo para qualquer ser humano. Para um corredor que sai do Rio de Janeiro, acostumado com a abundância de oxigênio do litoral, o impacto é imediato. O ar rarefeito da altitude faz com que cada respiração pareça insuficiente, forçando o organismo a buscar saídas para não entrar em colapso. É nesse cenário de pressão extrema que muitos atletas se veem diante de propostas tentadoras, porém perigosas e ilegais, que prometem melhorar o desempenho de forma artificial, mas que colocam a vida em risco.</p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/eritropoietina.jpg`} alt="Esporte em alta altitude e o hormônio eritropoetina" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">O ar rarefeito impõe desafios extremos ao sistema cardiovascular do atleta.</p></div>
            </div>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Entenda o papel do hormônio eritropoetina no desempenho físico</h2>
            <p>O hormônio eritropoetina, também conhecido pela sigla EPO, é uma substância produzida naturalmente pelos nossos rins com uma função muito clara, que é estimular a medula óssea a fabricar mais glóbulos vermelhos. Essas células são os veículos que transportam o oxigênio para os <Link to="/o_que_e_antropometria" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">músculos</Link> durante o exercício. Em condições normais de altitude, o corpo aumenta a produção desse hormônio de forma gradual para se adaptar à falta de O2.</p>
            <p>No entanto, quando um atleta utiliza a versão sintética desse hormônio, ele está forçando uma produção exagerada de células sanguíneas. Isso cria uma vantagem artificial de resistência, mas faz com que o sangue perca sua fluidez natural e se torne perigosamente viscoso, aumentando o esforço do coração para bombear esse líquido pesado pelo corpo.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">Os riscos fatais da transfusão de hemácias e do sangue viscoso</h2>
            <p>Outro método frequentemente discutido nos bastidores do doping é a transfusão de hemácias. Essa prática consiste em injetar glóbulos vermelhos extras na corrente sanguínea do atleta pouco antes da competição, com o objetivo de turbinar a oxigenação muscular de forma instantânea.</p>
            <p>O grande perigo aqui é que, ao elevar o hematócrito além dos limites fisiológicos, o sangue fica tão "grosso" que o risco de formação de coágulos dispara. Essa viscosidade excessiva pode levar a consequências catastróficas, como o acidente vascular cerebral (AVC), o infarto agudo do miocárdio e a trombose. O que era para ser um ganho de performance acaba se tornando uma bomba-relógio para o <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">sistema circulatório</Link>, podendo causar morte súbita em momentos de esforço intenso.</p>

            <h2 className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2">A importância da ética no esporte e o valor do jogo limpo</h2>
            <p>Além dos perigos físicos, precisamos olhar para a ética no esporte como o pilar que sustenta qualquer competição saudável. O uso de substâncias ilícitas ou métodos proibidos quebra o princípio da igualdade e desrespeita todos os outros competidores que se dedicaram anos a fio com treinos honestos e <Link to="/quantas_frutas_posso_comer" className="text-green-600 underline hover:text-green-700 font-bold transition-colors">alimentação adequada</Link>.</p>
            <p>A vitória conquistada através de manipulações químicas perde seu brilho e sua legitimidade, transformando o esporte em uma disputa de laboratórios em vez de uma celebração do potencial humano. Manter-se fiel aos princípios da honestidade não é apenas uma questão de passar nos exames antidoping, mas sim de preservar a integridade da modalidade e a própria dignidade como atleta profissional.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg text-left">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">Os Incríveis Efeitos do Treinamento na Altitude</h3>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic text-left">Descubra como os atletas de elite realizam o processo de aclimatização natural, aumentando a produção de hemoglobina de forma segura através do chamado "camping" na altitude.</p>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/tKQfYgjkbLI?start=19" 
                  title="Os incríveis efeitos do treinamento na altitude" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Qual é o principal perigo de usar o hormônio eritropoetina sintético sem indicação médica?</h4>
                  <p className="text-slate-600">O maior risco é o aumento exagerado da viscosidade do sangue, o que obriga o coração a trabalhar com uma carga muito pesada e facilita a formação de trombos que podem causar infartos ou derrames cerebrais fatais.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Por que a transfusão de hemácias é proibida mesmo que o sangue seja do próprio atleta?</h4>
                  <p className="text-slate-600">Ela é proibida porque altera artificialmente a capacidade de transporte de oxigênio, criando uma vantagem injusta sobre os adversários e oferecendo riscos graves à saúde devido ao espessamento súbito do sangue circulante.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Como a ética no esporte influencia a carreira de um maratonista a longo prazo?</h4>
                  <p className="text-slate-600">A ética garante que a carreira do atleta seja construída sobre bases sólidas de saúde e reconhecimento real. O doping pode trazer vitórias temporárias, mas o banimento e os danos permanentes ao corpo e à reputação costumam encerrar carreiras de forma trágica.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Existe alguma forma legal de aumentar o oxigênio no sangue para provas na altitude?</h4>
                  <p className="text-slate-600">Sim, a forma legal e segura é o processo natural de aclimatização. Ao chegar ao local da prova com semanas de antecedência, o corpo produz seu próprio hormônio eritropoetina em níveis seguros, adaptando-se gradualmente ao ar rarefeito sem comprometer a saúde.</p>
                </div>
              </div>
            </div>

          </div>
        </article>

<ArtigosRecomendados currentPath={pathname} />

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
