import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  ChevronLeft, HelpCircle, Activity, Heart, FileText,
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart,
  CheckCircle2, BookOpen, AlertTriangle, Baby, Apple, Sparkles
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

// 🔗 Link base oficial das imagens no CDN jsDelivr
const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas E-E-A-T
const datePublishedISO = "2026-08-28";
const dateModifiedISO = "2026-08-28";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const capaArtigo = `${githubImgBase}Blog/AlimentacaoSaudavelCriancas_Capa.webp`;

export default function AlimentacaoSaudavelCriancas() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [quizResposta, setQuizResposta] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "O que fazer quando a criança se recusa a comer legumes e verduras?",
      resposta: "Apresentação sem pressão: Ofereça o mesmo alimento de 10 a 15 vezes em momentos diferentes antes de considerar que a criança não gosta. Mude a apresentação (cozido, assado, ralado, em purê ou em bolinhos) e evite brigas ou chantagens à mesa, pois a pressão aumenta a aversão ao alimento."
    },
    {
      pergunta: "A partir de qual idade a criança pode consumir açúcar e produtos industrializados?",
      resposta: "Recomendação aos 2 anos: O açúcar adicionado e os produtos ultra processados (refrigerantes, salgadinhos, biscoitos recheados) devem ser totalmente evitados até os 2 anos de idade. Após essa fase, o consumo deve ser pontual e moderado para não prejudicar a palatabilidade dos alimentos naturais nem impactar a saúde metabólica."
    },
    {
      pergunta: "Como saber se meu filho está se alimentando o suficiente ou se precisa de suplementos?",
      resposta: "Sinais e acompanhamento: O melhor indicador de boa nutrição é o acompanhamento das curvas de ganho de peso e altura nas consultas com o pediatra, e não a quantidade de comida que sobra no prato. Respeite os sinais de saciedade da criança e nunca ofereça suplementos vitamínicos sem orientação médica ou nutricional prévia."
    },
    {
      pergunta: "O que enviar na lancheira escolar para manter uma alimentação equilibrada fora de casa?",
      resposta: "Regra dos 3 grupos: Monte a lancheira combinando três pilares essenciais — Fruta ou vegetal (maçã, banana, uva sem semente, tomate-cereja ou bastões de cenoura); Carboidrato de boa qualidade (pão integral, bolo caseiro sem açúcar refinado, tapioca ou biscoito de polvilho); e Proteína ou laticínio (queijo branco, iogurte natural, ovo de codorna ou patê caseiro de frango)."
    }
  ];

  const quizOpcoes = {
    vermelho: {
      emoji: "🔴",
      titulo: "Batalha Naval",
      frase: "\"Tenho que negociar cada garfada e esconder os legumes no feijão.\"",
      diagnostico: "Fase de Seletividade em Alta.",
      dica: "Retire a pressão. Substitua a frase \"Só ganha sobremesa se comer o brócolis\" por \"Você não precisa comer, mas o brócolis vai ficar aqui no cantinho se quiser experimentar\".",
      cor: "red"
    },
    amarelo: {
      emoji: "🟡",
      titulo: "Prato Monocromático",
      frase: "\"Meu filho só quer comer alimentos amarelos/brancos (arroz, batata, nuggets).\"",
      diagnostico: "Busca por Zona de Conforto Alimentar.",
      dica: "Aplique a regra da ponte de cor. Se ele ama batata (amarela), ofereça mandioquinha ou cenoura cozida no mesmo formato (bastões) para mudar o sabor mantendo a textura.",
      cor: "amber"
    },
    verde: {
      emoji: "🟢",
      titulo: "Arco-Íris em Ação",
      frase: "\"O prato é colorido e aceita provar coisas novas sem grandes dramas.\"",
      diagnostico: "Modo Super Explorador.",
      dica: "Mantenha a variedade! Convide a criança para escolher um legume diferente na feira ou no mercado esta semana para manter a curiosidade alta.",
      cor: "green"
    }
  };

  const respostaAtiva = quizResposta ? quizOpcoes[quizResposta] : null;

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        {/* Botão Dinâmico */}
        <button
          onClick={() => state?.fromBlog ? navigate(-1) : navigate('/blog')}
          className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-600 hover:text-green-700 transition-colors w-fit bg-transparent border-none cursor-pointer p-0"
          aria-label="Voltar para a página anterior"
        >
          <ChevronLeft size={20} /> Voltar para o Blog
        </button>

        <article className="prose prose-lg max-w-none text-left">

          {/* Categoria e Data */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Infantil</span>
            <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 Principal (SEO) */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Alimentação Saudável das Crianças a Cada Fase da Infância
          </h1>

          {/* 🚀 RESPOSTA RÁPIDA - FEATURED SNIPPET GEO/AIO */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Direta: Como Funciona a Alimentação Saudável das Crianças?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              A <strong>alimentação saudável das crianças</strong> muda em cada fase da infância: aleitamento materno exclusivo até os 6 meses, introdução de "comida de verdade" a partir daí, consolidação de hábitos e enfrentamento da neofobia alimentar entre 2 e 6 anos, e suporte nutricional ao aprendizado e crescimento dos 6 aos 12 anos — sempre priorizando alimentos in natura e evitando açúcar e ultraprocessados.
            </p>
          </div>

          {/* 🎧 PLAYER DE ÁUDIO OTIMIZADO */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-green-700 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic uppercase tracking-widest m-0">Ouça este artigo</h3>
              </div>
              <audio preload="none" controls className="w-full h-10 outline-none" aria-label="Áudio do artigo completo">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Alimentacao_Saudavel_Criancas.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
            <div className="h-px bg-green-100/60 w-full"></div>

            {/* 📑 ÍNDICE ACORDEÃO */}
            <nav className="bg-slate-50">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group cursor-pointer border-none bg-transparent"
                aria-expanded={isTocOpen}
                aria-label="Abrir Índice do Conteúdo"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-700 text-white' : 'bg-white text-slate-500 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-500 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-700' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1500px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#primeira-fase" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Baby size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Primeira Fase: 0 a 2 Anos</a></li>
                  <li><a href="#segunda-fase" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Apple size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Segunda Fase: 2 a 6 Anos</a></li>
                  <li><a href="#terceira-fase" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><BookOpen size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Terceira Fase: 6 a 12 Anos</a></li>
                  <li><a href="#tabela" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tabela por Fase e Nutrientes</a></li>
                  <li><a href="#diagnostico" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Sparkles size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Diagnóstico do Almoço</a></li>
                  <li><a href="#neofobia" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Neofobia Alimentar</a></li>
                  <li><a href="#dicas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><CheckCircle2 size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />5 Dicas Práticas</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* 🖼️ IMAGEM HERO OTIMIZADA */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group flex flex-col bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
              <picture>
                <source media="(max-width: 480px)" srcSet={`${capaArtigo}?w=400&strip=all&quality=70`} />
                <source media="(max-width: 768px)" srcSet={`${capaArtigo}?w=600&strip=all&quality=70`} />
                <source media="(max-width: 1024px)" srcSet={`${capaArtigo}?w=800&strip=all&quality=85`} />
                <ImagemOtimizada
                  src={`${capaArtigo}?w=1280&strip=all&quality=85`}
                  alt="Pinguim Píngus vestindo jaleco de pediatra e chapéu de explorador em estilo Disney Pixar 3D, medindo a altura de uma criança em um consultório verde e iluminado, com a mãe sentada ao lado, um pôster de alimentação equilibrada na parede e uma mesa com frutas e legumes frescos."
                  title="Alimentação Saudável das Crianças e o Píngus"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  priority="high"
                />
              </picture>
            </div>
            <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest text-center m-0">
Acompanhar o crescimento é tão importante quanto o que está no prato.
              </p>
            </figcaption>
          </figure>

          {/* 📝 INTRODUÇÃO */}
          <p className="mb-4">
            A alimentação na infância é a base para um desenvolvimento físico, cognitivo e emocional pleno. Nos primeiros anos de vida, o corpo passa por um crescimento acelerado, e os nutrientes ingeridos desempenham um papel direto na construção do sistema imunológico, no fortalecimento ósseo e na consolidação de hábitos que acompanharão a criança por toda a vida.
          </p>

          <h2 id="primeira-fase" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Baby className="text-green-700" /> Alimentação Saudável das Crianças na Primeira Fase da Infância
          </h2>
          <p className="mb-4">
            A alimentação nos primeiros dois anos de vida é decisiva para o desenvolvimento infantil. Com base nas diretrizes e estudos sobre os "Dez Passos para uma Alimentação Saudável", o aleitamento materno deve ser exclusivo até os 6 meses e mantido de forma complementada até os 2 anos ou mais. A introdução alimentar deve ser gradual a partir dos 6 meses, priorizando a oferta de "comida de verdade", como frutas, legumes, cereais e carnes amassadas, para estimular a mastigação. É fundamental evitar açúcar, sal em excesso e produtos ultra processados para garantir a formação de hábitos saudáveis desde cedo.
          </p>

          <h2 id="segunda-fase" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <Apple className="text-green-700" /> Alimentação Saudável das Crianças na Segunda Fase da Infância
          </h2>
          <p className="mb-4">
            É uma fase de crescimento constante, desenvolvimento cognitivo e consolidação de hábitos alimentares. Nesse período, é comum ocorrer uma desaceleração do apetite e a <strong>neofobia alimentar</strong> (receio de provar novos sabores). Compreender esse comportamento previne conflitos à mesa e garante uma nutrição adequada.
          </p>
          <p className="mb-4">
            A alimentação deve priorizar alimentos in natura e minimamente processados. Carboidratos complexos, como grãos integrais, batata e aveia, fornecem energia para o dia a dia. As leguminosas (feijão, lentilha) oferecem fibras e proteínas vegetais, formando uma combinação completa quando somadas aos cereais.
          </p>
          <p className="mb-4">
            Proteínas animais, como ovos, carnes magras e peixes ricos em Ômega-3 (sardinha e salmão) apoiam o desenvolvimento muscular e neurológico. A diversidade de legumes e verduras garante micronutrientes essenciais, enquanto as frutas inteiras mantêm as fibras e estimulam a mastigação, sendo preferíveis aos sucos. Laticínios sem açúcar asseguram o cálcio necessário para os ossos.
          </p>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-orange-800 mt-6 mb-6">
            <p className="m-0">Em contrapartida, deve-se evitar ultra processados (refrigerantes, salgadinhos e embutidos) e limitar o açúcar de adição, prevenindo a obesidade e cáries. Durante as refeições, é importante desligar telas para estimular a atenção aos sinais de fome e saciedade.</p>
          </div>
          <p className="mb-4">
            Estratégias como envolver a criança no preparo, oferecer alimentos recusados em diferentes formatos sem coerção e respeitar sua saciedade fortalecem a autonomia. O exemplo saudável da família é o pilar fundamental para escolhas duradouras.
          </p>

          <h2 id="terceira-fase" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <BookOpen className="text-green-700" /> Alimentação Saudável das Crianças na Terceira Fase da Infância
          </h2>
          <p className="mb-4">
            O foco da alimentação saudável volta-se ao suporte do rendimento escolar, crescimento e prática de atividades físicas. A ingestão de <Link to="/o-que-sao-probioticos" className="text-green-700 font-bold hover:underline">ômega-3</Link> e vitaminas do complexo B impulsiona a concentração, enquanto o cálcio, a vitamina D e o ferro fortalecem ossos e previnem a fadiga. A autonomia da criança exige atenção para evitar ultra processados, bebidas açucaradas e a omissão do café da manhã. Promover refeições em família sem telas e envolver a criança na escolha e preparo dos alimentos são estratégias essenciais para consolidar escolhas nutritivas e manter a energia diária.
          </p>

          {/* TABELA COMPARATIVA */}
          <h2 id="tabela" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <FileText className="text-green-700" /> Fases, Focos Nutricionais e Melhor Tipo de Alimentação
          </h2>
          <p className="mb-4">Resumo prático das principais fases da infância, seus focos nutricionais, os nutrientes essenciais de cada uma e o melhor tipo de alimentação a oferecer:</p>

          <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/5">Fase da Infância</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-1/5">Focos Nutricionais</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-blue-700 bg-blue-50/50 w-1/5">Nutrientes Essenciais</th>
                  <th className="p-5 font-black uppercase tracking-widest text-[11px] text-red-700 bg-red-50/50 w-2/5">Melhor Tipo de Alimentação</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">0 a 6 Meses (Lactente)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Imunidade, maturação digestiva e proteção neurológica inicial.</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Anticorpos, DHA e água (presentes naturalmente no leite).</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Aleitamento materno exclusivo (ou fórmula infantil adequada sob orientação médica). Isenção total de água, chás ou outros alimentos.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">6 Meses a 2 Anos (Introdução Alimentar)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Apresentação de texturas/sabores, expansão do paladar e crescimento acelerado.</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Ferro, Zinco, Vitaminas A, C e D.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Comida de verdade in natura ou minimamente processada (frutas, legumes, cereais, tubérculos e carnes amassados/em pedaços). Zero açúcar e ultra processados.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">2 a 6 Anos (Pré-Escolar)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Consolidação de hábitos alimentares, autonomia e manutenção da variedade contra a seletividade.</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Proteínas, Fibras, Cálcio e Carboidratos complexos.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Alimentação variada e colorida baseada na rotina da família, dividida em refeições regulares. Alimentos apresentados em diferentes formatos e preparações.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 border-r border-slate-100 font-black text-slate-800 italic">6 a 12 Anos (Escolar / Pré-Adolescência)</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Suporte à concentração, aprendizado, energia para atividades e preparação para o pico de crescimento.</td>
                  <td className="p-5 border-r border-slate-100 text-slate-700 leading-relaxed">Ômega-3, Complexo B, Cálcio, Vitamina D e Ferro.</td>
                  <td className="p-5 text-slate-600 leading-relaxed">Refeições equilibradas e lanches escolares caseiros (combinação de carboidratos integrais, proteínas e frutas). Prioridade para água e pratos sem distrações (telas).</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* VERSÃO MOBILE EM CARDS DA TABELA */}
          <div className="md:hidden space-y-4 my-8">
            {[
              { fase: "0 a 6 Meses (Lactente)", foco: "Imunidade, maturação digestiva e proteção neurológica inicial.", nutrientes: "Anticorpos, DHA e água (presentes naturalmente no leite).", alimentacao: "Aleitamento materno exclusivo (ou fórmula infantil sob orientação médica). Isenção total de água, chás ou outros alimentos." },
              { fase: "6 Meses a 2 Anos (Introdução Alimentar)", foco: "Apresentação de texturas/sabores, expansão do paladar e crescimento acelerado.", nutrientes: "Ferro, Zinco, Vitaminas A, C e D.", alimentacao: "Comida de verdade in natura ou minimamente processada (frutas, legumes, cereais, tubérculos e carnes amassados/em pedaços). Zero açúcar e ultra processados." },
              { fase: "2 a 6 Anos (Pré-Escolar)", foco: "Consolidação de hábitos alimentares, autonomia e manutenção da variedade contra a seletividade.", nutrientes: "Proteínas, Fibras, Cálcio e Carboidratos complexos.", alimentacao: "Alimentação variada e colorida baseada na rotina da família, dividida em refeições regulares." },
              { fase: "6 a 12 Anos (Escolar / Pré-Adolescência)", foco: "Suporte à concentração, aprendizado, energia e preparação para o pico de crescimento.", nutrientes: "Ômega-3, Complexo B, Cálcio, Vitamina D e Ferro.", alimentacao: "Refeições equilibradas e lanches escolares caseiros. Prioridade para água e pratos sem telas." },
            ].map((item) => (
              <div key={item.fase} className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
                <div className="px-5 py-3 bg-green-50 border-b border-green-100 font-black text-green-800 italic text-sm">
                  {item.fase}
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <span className="text-slate-500 font-black uppercase text-[11px] tracking-widest block mb-1.5">Focos Nutricionais</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.foco}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-blue-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Nutrientes Essenciais</span>
                    <p className="text-slate-700 text-sm m-0 leading-relaxed">{item.nutrientes}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <span className="text-red-700 font-black uppercase text-[11px] tracking-widest block mb-1.5">Melhor Alimentação</span>
                    <p className="text-slate-600 text-sm m-0 leading-relaxed">{item.alimentacao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 italic mb-8">*A Primeira Fase é dividida em 2 períodos: lactente e introdução alimentar.</p>

          {/* VÍDEO LAZY YOUTUBE OBRIGATÓRIO */}
          <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Qual o Papel da Alimentação no Desenvolvimento das Crianças?</h3>
            </div>
            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="s2cB4I2fbHo" title="Qual é o Papel da Alimentação na Qualidade de Vida e Desenvolvimento das Crianças?" />
            </div>
          </div>

          {/* ELEMENTO INTERATIVO OBRIGATÓRIO — QUIZ DIAGNÓSTICO */}
          <h2 id="diagnostico" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <Sparkles className="text-green-700" /> Diagnóstico Rápido: Como Está o Almoço na Sua Casa?
          </h2>
          <p className="mb-8">Escolha abaixo qual frase melhor descreve a hora do almoço na sua casa hoje e receba seu diagnóstico instantâneo!</p>

          <div className="my-10 bg-slate-900 border border-slate-800 shadow-2xl rounded-[3rem] overflow-hidden">
            <div className="p-6 md:p-8 text-center border-b border-slate-800">
              <strong className="text-xl md:text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                <Sparkles className="text-green-500" /> Clique em Apenas 1 Opção
              </strong>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              {Object.entries(quizOpcoes).map(([chave, opcao]) => (
                <button
                  key={chave}
                  onClick={() => setQuizResposta(chave)}
                  aria-label={`Selecionar diagnóstico: ${opcao.titulo}`}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    quizResposta === chave
                      ? opcao.cor === 'red' ? 'bg-red-950/40 border-red-600' : opcao.cor === 'amber' ? 'bg-amber-950/30 border-amber-500' : 'bg-green-950/30 border-green-500'
                      : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span className="text-2xl shrink-0">{opcao.emoji}</span>
                  <span>
                    <strong className="block text-white font-black uppercase text-xs tracking-widest mb-1">{opcao.titulo}</strong>
                    <span className="text-slate-300 text-sm italic">{opcao.frase}</span>
                  </span>
                </button>
              ))}
            </div>

            {respostaAtiva && (
              <div className="bg-slate-800 p-6 md:p-8 border-t border-slate-700" aria-live="polite">
                <span className="inline-block bg-slate-700 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-inner mb-4">
                  🏆 Seu Resultado: {respostaAtiva.titulo}
                </span>
                <p className="text-white font-bold mb-2">Diagnóstico: {respostaAtiva.diagnostico}</p>
                <p className="text-slate-300 text-sm leading-relaxed m-0"><strong className="text-green-400">Dica de Ouro:</strong> {respostaAtiva.dica}</p>
              </div>
            )}
          </div>

          <h2 id="neofobia" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <AlertTriangle className="text-green-700" /> Neofobia Alimentar: O Que É e Como Lidar
          </h2>
          <p className="mb-4">
            É a recusa ou receio em experimentar novos alimentos, uma fase comum entre as crianças principalmente entre os 2 aos 6 anos. Trata-se de um mecanismo evolutivo de proteção, mas que pode ser trabalhado com paciência e estratégias comportamentais, como:
          </p>
          <ul className="list-disc pl-5 text-slate-600 marker:text-green-700 mb-8 space-y-2">
            <li>Manter no prato algo que a criança já conhece e gosta ao lado de apenas uma pequena porção (uma colher de chá) do alimento novo. Isso reduz a ansiedade e não sobrecarrega o prato.</li>
            <li>Evitar reações exageradas de frustração quando o alimento for recusado, assim como comemorações excessivas quando for aceito. Trate o ato de provar como algo natural da rotina.</li>
            <li>Uma criança pode precisar de 10 a 15 contatos com um novo alimento antes de aceitá-lo. O contato inclui ver, cheirar, tocar ou ter o alimento no prato, sem a obrigação imediata de engolir.</li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 mt-6 mb-6">
            <p className="m-0"><strong>Dica Extra:</strong> Se a recusa for extrema e restringir o cardápio a pouquíssimos alimentos, vale consultar um pediatra ou nutricionista infantil para avaliar a necessidade de acompanhamento especializado.</p>
          </div>

          {/* VENDAS DO EBOOK - "O PINGUS APROVA" */}
          <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
              <Zap size={14} className="fill-white" />
              <span>O Pingus Aprova!</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                <ImagemOtimizada src={`${githubImgBase}logoN_pingus.webp`} alt="Selo de Qualidade Pingus para Alimentação Saudável das Crianças" className="w-full h-full object-contain" width="160" height="160" loading="lazy" />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                  Ebook Receitas <span className="text-green-700">Saudáveis e Nutritivas</span>
                </h4>
                <p className="text-slate-600 text-[15px] mb-8 leading-relaxed font-medium">
                  Colocar em prática tudo isso na correria do dia a dia é o maior desafio de qualquer família. O nosso <strong>Ebook de Receitas Saudáveis e Nutritivas</strong> traz a Técnica do 3x3 e pré-preparos inteligentes para você montar lanches e refeições coloridas, práticas e aprovadas pelas crianças, sem perder tempo nem abrir mão da comida de verdade.
                </p>
                <Link to="/ebook-receitas" className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic" aria-label="Conhecer o Ebook de Receitas Saudáveis e Nutritivas">
                  <ShoppingCart size={16} />
                  Conheça o Ebook de Receitas Agora
                </Link>
              </div>
            </div>
          </div>

          <h2 id="dicas" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> 5 Dicas Para as Crianças Comerem Melhor
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> 1. Envolva os pequenos no processo
              </h3>
              <p className="text-slate-600 m-0">Leve a criança à feira ou ao mercado e peça ajuda para escolher frutas e legumes. Na cozinha, atribua tarefas simples e seguras para a idade, como lavar folhas ou misturar ingredientes. Quando a criança participa do preparo, a curiosidade para provar o resultado aumenta significativamente.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> 2. Evite distrações durante as refeições
              </h3>
              <p className="text-slate-600 m-0">Mantenha telas (televisão, celulares e tablets) desligadas na hora das refeições. O foco no prato ajuda a criança a prestar atenção aos sabores e texturas, além de permitir que ela reconheça os próprios sinais corporais de fome e saciedade.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500" /> 3. Apresente os alimentos de formas variadas
              </h3>
              <p className="text-slate-600 m-0">A rejeição inicial a um ingrediente é comum. Experimente mudar a textura e a apresentação: a cenoura pode ser servida crua ralada, cozida em rodelas, assada em palitos ou misturada em bolinhos e purês. Alimentos cortados em formatos divertidos também atraem o interesse visual.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-500" /> 4. Não force nem use comida como recompensa
              </h3>
              <p className="text-slate-600 m-0">Pressionar a criança a "limpar o prato" pode gerar uma associação negativa com a hora da refeição. Da mesma forma, prometer sobremesa como prêmio por comer vegetais transforma o doce em algo altamente desejável e o alimento saudável em uma obrigação desagradável.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" /> 5. Seja o exemplo
              </h3>
              <p className="text-slate-600 m-0">As crianças aprendem prioritariamente pela observação dos adultos ao seu redor. Mantenha uma rotina alimentar equilibrada e mostre prazer ao consumir frutas, verduras e legumes à mesa junto com a família.</p>
            </div>
          </div>

          <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
            <CheckCircle2 className="text-green-700" /> Conclusão: Um Hábito de Cada Vez
          </h2>
          <p className="mb-4">
            A alimentação saudável das crianças não se constrói em uma única refeição, mas na soma de pequenas escolhas repetidas ao longo de cada fase da infância. Do aleitamento exclusivo aos primeiros seis meses até os lanches escolares equilibrados na fase pré-adolescente, o que sustenta hábitos duradouros é paciência, exemplo familiar e comida de verdade à mesa, sem pressão e sem culpa.
          </p>

          {/* FAQ DINÂMICO AIO */}
          <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
              <HelpCircle className="text-green-700" /> Perguntas Frequentes Sobre Alimentação Saudável das Crianças (FAQ)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    aria-expanded={openFaqIndex === index}
                    aria-label={`Abrir resposta para: ${faq.pergunta}`}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group bg-transparent border-none cursor-pointer"
                  >
                    <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>
                      {faq.pergunta}
                    </h3>
                    <ChevronDown className={`text-slate-500 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[2000px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                    <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🚀 E-E-A-T (FONTES CIENTÍFICAS E AVISO LEGAL) */}
          <div className="my-12 p-6 bg-slate-100 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-3">Referências Acadêmicas e Fontes da Alimentação Saudável das Crianças</h3>
            <ul className="text-xs text-slate-500 leading-relaxed m-0 list-disc pl-4 space-y-1">
              <li><a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/guia-alimentar-para-criancas-menores-de-2-anos" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">BRASIL. Ministério da Saúde. <em>Guia alimentar para crianças brasileiras menores de 2 anos.</em> Brasília, DF: Ministério da Saúde, 2019.</a></li>
              <li><a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">ORGANIZAÇÃO MUNDIAL DA SAÚDE (OMS). <em>Alimentação saudável e nutrição infantil.</em> Genebra: OMS, 2021.</a></li>
              <li>PLINER, Patrícia; HOBDEN, Karen. <em>Development of a scale to measure the trait of food neophobia in humans.</em> Appetite, v. 19, n. 2, p. 105-120, 1992.</li>
              <li><a href="https://www.scielo.br/j/rpp" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">REVISTA PAULISTA DE PEDIATRIA. <em>Acervo de artigos sobre neofobia e comportamento alimentar infantil.</em> São Paulo: Sociedade de Pediatria de São Paulo / SciELO, 2020-2024.</a></li>
              <li><a href="https://www.sbp.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">SOCIEDADE BRASILEIRA DE PEDIATRIA (SBP). <em>Manual prático de alimentação da infância à adolescência.</em> 4. ed. Rio de Janeiro: SBP, 2018.</a></li>
              <li><a href="https://www.scielosp.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 hover:underline">VITOLO, Márcia Regina; BORTOLINI, Gisele Ane; FELDENS, Carlos Alberto; DRACHLER, Maria de Lourdes. <em>Impactos da implementação dos dez passos da alimentação saudável para crianças: ensaio de campo randomizado.</em> Cadernos de Saúde Pública, Rio de Janeiro, v. 21, n. 5, p. 1448-1457, set./out. 2005.</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-start gap-2">
              <AlertTriangle size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold text-slate-500">Aviso Nutricional: Este conteúdo tem fim meramente educativo e informativo e não substitui o acompanhamento de um pediatra ou nutricionista infantil. Cada criança tem necessidades individuais que devem ser avaliadas por um profissional habilitado.</span>
            </div>
          </div>

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* 💳 CARTÃO AUTOR (E-E-A-T) */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <ImagemOtimizada
              src={`${githubImgBase}Liliane_Borges.webp`}
              alt="Liliane Borges - Autora e Colaboradora do Blog Nutrição com Marco"
              title="Liliane Borges - Estudante de Jornalismo"
              className="w-full h-full object-cover"
              priority="low"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Liliane Borges</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Jornalismo • Colaboradora do Blog Nutrição com Marco</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Moradora do Rio de Janeiro, estudante de jornalismo do último ano, entusiasta de história e cultura pop asiática, atualmente estagiando em um blog de nutrição e fotografia esportiva.
            </p>
            <a href="https://instagram.com/asianeewslab" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @asianeewslab
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
