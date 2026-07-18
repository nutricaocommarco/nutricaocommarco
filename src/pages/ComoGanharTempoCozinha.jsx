import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, HelpCircle, Activity, ChefHat, Clock, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Snowflake, Utensils, AlertTriangle, CheckCircle2, Beef, Calculator
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas
const datePublishedISO = "2026-07-18";
const dateModifiedISO = "2026-07-18";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const artigoCapa = `${githubImgBase}Blog/GanharTempo_Capa.webp`;
const ebookCapa = `${githubImgBase}capa_receitas.webp`;

// Dados do Comparativo de Embalagens
const comparativoEmbalagens = [
  {
    id: 1,
    alimento: "Carnes Cruas / Bifes",
    pote: "Excelente (Evita vazamentos)",
    ziplock: "Excelente (Tire todo o ar)",
    dica: "Porcione bifes com 2 cm de espessura para descongelar fácil.",
    icone: <Beef className="w-6 h-6 text-rose-500" />
  },
  {
    id: 2,
    alimento: "Arroz Cozido",
    pote: "Excelente",
    ziplock: "Excelente",
    dica: "Cozinhe 'al dente', esfrie espalhado e borrife água ao reaquecer.",
    icone: <Utensils className="w-6 h-6 text-amber-500" />
  },
  {
    id: 3,
    alimento: "Legumes Branqueados",
    pote: "Excelente",
    ziplock: "Excelente",
    dica: "Secar muito bem antes de embalar para não formar gelo.",
    icone: <Leaf className="w-6 h-6 text-green-500" />
  },
  {
    id: 4,
    alimento: "Molho Branco / Estrogonofe",
    pote: "Evite (Pode talhar)",
    ziplock: "Evite",
    dica: "Congele a base sem o creme de leite e adicione o lácteo só na hora.",
    icone: <AlertTriangle className="w-6 h-6 text-orange-500" />
  }
];

// Dados da Calculadora de Rendimento de Carnes (Baseado no Source 30)
const dadosCarnes = [
  { nome: "Peito de Frango (Grelhado)", perda: 0.17 },
  { nome: "Sobrecoxa Desossada (Grelhada)", perda: 0.22 },
  { nome: "Carne Moída Patinho (Refogada)", perda: 0.23 },
  { nome: "Acém em Cubos (Cozido)", perda: 0.33 },
  { nome: "Filé Mignon (Grelhado)", perda: 0.20 },
  { nome: "Filé de Tilápia (Grelhado)", perda: 0.28 },
  { nome: "Costela Bovina (Assada)", perda: 0.60 }
];

export default function ComoGanharTempoCozinha() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Estados da Calculadora
  const [carneSelecionada, setCarneSelecionada] = useState(dadosCarnes[0].nome);
  const [quantidadeCrua, setQuantidadeCrua] = useState(500);
  const [resultadoCalculadora, setResultadoCalculadora] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCalcularRendimento = () => {
    const carne = dadosCarnes.find(c => c.nome === carneSelecionada);
    if (carne && quantidadeCrua > 0) {
      const pesoPerdido = quantidadeCrua * carne.perda;
      const pesoCozido = quantidadeCrua - pesoPerdido;
      setResultadoCalculadora({
        cozido: pesoCozido.toFixed(0),
        perda: pesoPerdido.toFixed(0),
        percentual: (carne.perda * 100).toFixed(0)
      });
    }
  };

  const faqs = [
    {
      pergunta: "Posso congelar marmita de estrogonofe completa?",
      resposta: "Pode, mas o creme vai perder a cremosidade e talhar[cite: 23]. O método inteligente é congelar a carne e a base do molho. O creme de leite entra apenas na panela, na hora de aquecer[cite: 23]."
    },
    {
      pergunta: "Arroz congelado fica com textura de mingau?",
      resposta: "Só se você cozinhar demais antes de congelar. Para o arroz ficar soltinho, cozinhe 'al dente', esfrie espalhado em uma assadeira para não reter vapor, e guarde em embalagens rasas[cite: 23, 27]."
    },
    {
      pergunta: "Quais legumes nunca devem ir para o freezer?",
      resposta: "Pepino, alface, rúcula, tomate cru para salada, chuchu cru e abobrinha crua fatiada[cite: 22]. Eles possuem muita água e paredes celulares finas. Ao descongelar, viram uma 'esponja aguada'[cite: 22, 23]."
    },
    {
      pergunta: "Por que cria uma 'neve' de gelo grossa dentro do meu pote?",
      resposta: "Isso acontece porque a comida entrou quente no pote ou sobrou muito ar na embalagem[cite: 27]. O vapor vira cristais de gelo. O conserto é espalhar a comida até parar o vapor e tirar todo o ar antes de fechar[cite: 27]."
    },
    {
      pergunta: "Quanto tempo dura uma marmita congelada?",
      resposta: "A regra de ouro do congelamento inteligente é: 90 dias no freezer[cite: 26]. Depois disso, o alimento continua seguro para consumo, mas perde muita qualidade de sabor e textura[cite: 26]."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        {/* BOTÃO INTELIGENTE DE VOLTAR */}
        <button 
          onClick={() => state?.fromBlog ? navigate(-1) : navigate('/blog')}
          className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-600 hover:text-green-700 transition-colors w-fit bg-transparent border-none cursor-pointer p-0"
        >
          <ChevronLeft size={20} /> Voltar para o Blog
        </button>

        <article className="prose prose-lg max-w-none text-left">
          
          {/* TAGS E DATA */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Nutrição Comportamental</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* TÍTULO PRINCIPAL H1 */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Como Ganhar Tempo na Cozinha: O Guia Definitivo da Organização e "Mise en Place"
          </h1>

          {/* RESPOSTA RÁPIDA (FEATURED SNIPPET) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3 flex items-center gap-2">
              <Zap className="text-green-700" /> Resposta Rápida: Como ganhar tempo na cozinha?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              A melhor forma de ganhar tempo na cozinha é adotar a técnica profissional de <strong>Mise en Place</strong> (Praça Pronta). Isso significa tirar um dia na semana para higienizar, branquear legumes, pré-assar tubérculos e porcionar proteínas cruas ou em molhos[cite: 18, 21]. Combinando essa praça com o <strong>congelamento inteligente em potes herméticos</strong>, você finaliza refeições variadas em apenas 15 a 30 minutos todos os dias[cite: 21, 26].
            </p>
          </div>

          {/* CAIXA COMBINADA: ÁUDIO + TOC */}
          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            
            {/* ÁUDIO (PERFORMANCE: preload="none") */}
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-green-700 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic uppercase tracking-widest m-0">Ouça este artigo</h3>
              </div>
              <audio preload="none" controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/GanharTempoCozinha.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <div className="h-px bg-green-100/60 w-full"></div>

            {/* ÍNDICE (TOC) */}
            <nav className="bg-slate-50">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-700 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-700' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1200px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#miseenplace" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><ChefHat size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O Segredo: Mise en Place</a></li>
                  <li><a href="#matriz3x3" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Matriz 3x3 de Cardápios</a></li>
                  <li><a href="#congelamento" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Snowflake size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Congelamento Inteligente</a></li>
                  <li><a href="#embalagens" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Guia de Embalagens</a></li>
                  <li><a href="#calculadora" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Calculator size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Calculadora de Rendimento</a></li>
                  <li><a href="#solucao-problemas" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><AlertTriangle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Solução de Problemas no Freezer</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                  <li><a href="#afiliado" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><ShoppingCart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Recomendação do Nutri</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes (FAQ)</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            
            <p>
              Quem nunca chegou cansado do trabalho, abriu a geladeira, encarou uma bandeja de frango congelado e uma alface murcha, e acabou pedindo um delivery? A frustração de tentar manter uma alimentação saudável, aliada à <Link to="/o-que-e-fome-emocional" className="text-green-700 font-bold hover:underline">fome emocional</Link>, destrói a disciplina de qualquer um. 
            </p>
            <p>
              A verdade é que fazer dieta não é sobre ter força de vontade infinita, é sobre ter um <strong>ambiente preparado</strong>. O segredo para não engordar e proteger o seu <Link to="/quantas-calorias-gasto-por-dia" className="text-green-700 font-bold hover:underline">gasto calórico</Link> não está em cozinhar todos os dias, mas sim em aplicar metodologias de restaurantes na cozinha da sua casa.
            </p>

            {/* IMAGEM DE CAPA COM LAZY LOADING E DIMENSÕES */}
            <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative bg-slate-200">
              <img 
                src={artigoCapa} 
                alt="Pinguim Pingus chef com potes herméticos organizados, ensinando como ganhar tempo na cozinha." 
                title="Mise en Place e Organização Semanal"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                width="800"
                height="500"
                loading="lazy"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"; }}
              />
              <figcaption className="bg-slate-50 p-4 md:p-6 text-center border-t border-slate-200 relative z-10">
                <p className="text-sm md:text-base text-slate-600 font-bold uppercase tracking-widest text-center m-0">
                  Uma geladeira organizada é a melhor arma contra o ganho de peso.
                </p>
              </figcaption>
            </figure>

            <h2 id="miseenplace" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <ChefHat className="text-green-700"/> O Segredo dos Restaurantes: O que é Mise en Place?
            </h2>
            <p>
              Você já reparou que, ao pedir um prato em um bom restaurante, ele chega na sua mesa em 15 a 30 minutos? Você realmente acha que eles começaram a picar a cebola e cozinhar a batata quando o seu pedido chegou[cite: 18]? 
            </p>
            <p>
              O grande truque da alta gastronomia chama-se <strong>Mise en Place</strong> (pronuncia-se "miz an plas"), que significa "Praça Pronta"[cite: 18]. Isso quer dizer ter todos os ingredientes já higienizados, cortados, branqueados e porcionados antes mesmo de a panela ir ao fogo[cite: 18]. Ao invés de cozinhar refeições completas todos os dias, você deve tirar algumas horas do seu domingo para criar "módulos" de ingredientes que duram a semana toda.
            </p>

            <h2 id="matriz3x3" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-700"/> A Matriz 3x3: Como Variar o Cardápio da Semana
            </h2>
            <p>
              Um erro comum que destrói a <Link to="/o-que-sao-simbioticos" className="text-green-700 font-bold hover:underline">saúde do seu intestino</Link> e a sua vontade de comer bem é a monotonia de comer frango com batata-doce todos os dias. Para evitar isso e ganhar tempo, usamos a técnica da <strong>Matriz 3x3</strong>[cite: 16]. 
            </p>
            <p>
              A estratégia consiste em preparar, em lote, 3 fontes de Proteína, 3 de Carboidratos e 3 tipos de Legumes[cite: 16]. Com esses 9 itens pré-prontos (armazenados em potes herméticos), você consegue fazer até <strong>27 combinações diferentes</strong> na hora de finalizar o prato[cite: 16]. Veja um exemplo prático:
            </p>

            <ul className="list-none space-y-4 my-8 p-0">
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Beef className="w-8 h-8 text-rose-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Módulo 1: Proteínas</strong>
                  <span className="text-slate-600 text-base">Deixe preparado: Acém em cubos guisado na panela de pressão (dura 2 dias na geladeira ou 3 meses no freezer), bifes de contra-filé já cortados e porcionados crus, e sassami de frango temperado[cite: 21].</span>
                </div>
              </li>
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Utensils className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Módulo 2: Carboidratos</strong>
                  <span className="text-slate-600 text-base">Cozinhe no mínimo 1 kg de arroz de uma vez, resfrie espalhado em uma assadeira e porcione. Deixe batatas cozidas <em>al dente</em> prontas na geladeira (duram 5 a 7 dias) e mandioca pré-cozida[cite: 21].</span>
                </div>
              </li>
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Leaf className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Módulo 3: Legumes e Vegetais</strong>
                  <span className="text-slate-600 text-base">Folhas de espinafre já higienizadas; floretes de couve-flor branqueados por 1-2 minutos; cenouras raladas cruas e guardadas em potes[cite: 21].</span>
                </div>
              </li>
            </ul>

            <p className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 italic mt-6">
              Com essa praça pronta, o seu prato de terça-feira pode ser o Acém cozido, finalizado na panela com a mandioca pré-cozida e a cenoura, ficando pronto em exatos 15 minutos[cite: 21]!
            </p>

            <h2 id="congelamento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Snowflake className="text-green-700"/> Congelamento Inteligente: Pare de Estragar Comida
            </h2>
            <p>
              Congelar não é apenas jogar a sobra da panela no freezer[cite: 26]. Para não sofrer com a <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold hover:underline">inflamação e o efeito sanfona</Link>, a sua comida precisa estar apetitosa ao ser descongelada. Para isso, existem 4 regras âncoras fundamentais[cite: 26]:
            </p>

            <ol className="list-decimal pl-6 space-y-4 my-8 marker:font-black marker:text-green-700">
              <li><strong className="text-slate-800">A Regra dos 90 Dias:</strong> A qualidade máxima do alimento no freezer se mantém por 90 dias[cite: 26]. Depois disso, ele não estraga, mas perde sabor e textura[cite: 26].</li>
              <li><strong className="text-slate-800">A Regra das 48h (Geladeira):</strong> Cozinhou no domingo? Terça-feira é o limite: ou você come o que está na geladeira, ou congela imediatamente, ou joga fora[cite: 26].</li>
              <li><strong className="text-slate-800">Embale SEM Ar:</strong> Quanto mais oxigênio dentro do pote, maior a formação de cristais de gelo e "queimaduras de frio" na comida[cite: 26].</li>
              <li><strong className="text-slate-800">Resfriamento Rápido:</strong> Os alimentos devem ser cozidos <em>al dente</em>, e o calor deve ser dispersado rapidamente (espalhando na assadeira) antes de ir para o pote, para não virar papa no descongelamento[cite: 26].</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">O Segredo do Branqueamento de Legumes</h3>
            <p>
              Você já congelou uma vagem e ela ficou molenga e cinza? Faltou o <strong>Branqueamento</strong>. Essa técnica consiste em ferver os legumes firmes (brócolis, cenoura, couve-flor) por 1 a 3 minutos e, em seguida, mergulhá-los imediatamente em água gelada para dar um choque térmico[cite: 22, 27]. Isso mantém a cor viva e a textura crocante no freezer por até 90 dias[cite: 22].
            </p>

            {/* SEÇÃO INTERATIVA: TABELA (DESKTOP) E CARDS (MOBILE) */}
            <h2 id="embalagens" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-700"/> O Guia Definitivo: O que pode e como embalar?
            </h2>
            <p className="mb-8">
              A escolha da embalagem dita se a sua marmita vai ficar com gosto de "geladeira velha" ou se parecerá fresca. Veja as melhores práticas de armazenamento[cite: 20, 28]:
            </p>

            {/* TABELA DESKTOP */}
            <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/4">Alimento</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-1/4">Pote Hermético</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-blue-700 bg-blue-50/50 w-1/4">Saco Ziplock</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/4">Dica de Ouro</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {comparativoEmbalagens.map((item) => (
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 border-r border-slate-100">
                        <div className="flex items-center gap-3 font-black text-slate-800 italic">
                          <div className="p-2 bg-slate-100 rounded-lg shrink-0">{item.icone}</div>
                          {item.alimento}
                        </div>
                      </td>
                      <td className="p-5 border-r border-slate-100 text-slate-700">{item.pote}</td>
                      <td className="p-5 border-r border-slate-100 text-slate-700">{item.ziplock}</td>
                      <td className="p-5 text-slate-500">{item.dica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CARDS MOBILE */}
            <div className="md:hidden space-y-6 my-8">
              {comparativoEmbalagens.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col gap-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="p-2 bg-slate-50 rounded-xl">{item.icone}</div>
                    <span className="font-black text-lg italic uppercase text-slate-800">{item.alimento}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-green-50/50 p-3 rounded-xl border border-green-100">
                      <span className="block text-[10px] uppercase tracking-widest font-black text-green-700 mb-1">Pote Hermético:</span>
                      <span className="text-sm font-bold text-slate-700">{item.pote}</span>
                    </div>
                    <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                      <span className="block text-[10px] uppercase tracking-widest font-black text-blue-700 mb-1">Ziplock:</span>
                      <span className="text-sm font-bold text-slate-700">{item.ziplock}</span>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-2">{item.dica}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CALCULADORA DE RENDIMENTO DE CARNES */}
            <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <Calculator className="text-green-700"/> Calculadora Interativa: Rendimento de Proteínas
            </h2>
            <p className="mb-8">
              Um dos maiores erros de quem tenta organizar a semana é não calcular o quanto a carne "encolhe" na panela[cite: 30]. Se você precisa de 120g de frango pronto na marmita, comprar exatos 120g no mercado não vai funcionar, pois a perda de água e gordura altera o peso final[cite: 30]. Use nossa ferramenta baseada nas tabelas oficiais de rendimento para não faltar comida na sua dieta!
            </p>

            <div className="my-10 bg-white border border-slate-200 shadow-xl rounded-[3rem] overflow-hidden">
              <div className="bg-slate-900 p-6 md:p-8 text-center">
                <strong className="text-2xl font-black text-white italic uppercase flex items-center justify-center gap-3 m-0 block">
                  <Calculator className="text-green-500" /> Rendimento Real
                </strong>
                <p className="text-slate-300 font-medium mt-2 m-0 text-sm md:text-base">
                  Descubra o peso real da proteína depois de pronta para organizar suas compras.
                </p>
              </div>

              <div className="p-6 md:p-10 flex flex-col items-center gap-6">
                <div className="w-full max-w-md space-y-4">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Selecione o Corte e Preparo</label>
                    <select 
                      value={carneSelecionada}
                      onChange={(e) => setCarneSelecionada(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 p-4 outline-none transition-all shadow-inner"
                    >
                      {dadosCarnes.map((carne, idx) => (
                        <option key={idx} value={carne.nome}>{carne.nome}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Peso Cru Comprado (em gramas)</label>
                    <input 
                      type="number" 
                      value={quantidadeCrua}
                      onChange={(e) => setQuantidadeCrua(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xl font-black rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block p-4 text-center outline-none transition-all shadow-inner"
                      placeholder="Ex: 500"
                    />
                  </div>

                  <button 
                    onClick={handleCalcularRendimento}
                    className="w-full bg-green-700 text-white h-[60px] rounded-2xl font-black uppercase text-sm tracking-widest shadow-lg hover:bg-green-800 transition-all mt-4"
                  >
                    Calcular Peso Final
                  </button>
                </div>

                {resultadoCalculadora && (
                  <div className="w-full max-w-md mt-6 p-6 rounded-[2rem] border-2 bg-green-50 border-green-200 text-center animate-fade-in">
                    <span className="text-xs font-black uppercase tracking-widest text-green-800 block mb-2">O peso final pronto será de aprox:</span>
                    <span className="text-5xl font-black italic text-green-700 drop-shadow-sm block mb-4">
                      {resultadoCalculadora.cozido}g
                    </span>
                    <div className="flex flex-col gap-1 text-sm font-medium text-green-900 bg-white p-4 rounded-xl border border-green-100 text-left">
                      <p className="m-0 flex justify-between"><span>Perda de água/gordura:</span> <strong>{resultadoCalculadora.perda}g</strong></p>
                      <p className="m-0 flex justify-between"><span>Percentual de redução:</span> <strong>{resultadoCalculadora.percentual}%</strong></p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h2 id="solucao-problemas" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <AlertTriangle className="text-green-700"/> Solução Rápida: Consertando Erros Comuns no Freezer
            </h2>
            <p>
              Cometeu um erro ao embalar? Aqui estão as soluções definitivas para os maiores pesadelos das marmitas congeladas[cite: 19, 27]:
            </p>

            <ul className="list-none space-y-4 my-8 p-0">
              <li className="bg-rose-50 p-6 rounded-3xl border border-rose-100 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-rose-900 block text-lg mb-1">O Problema: Manchas brancas e secas na comida ("queimadura de frio").</strong>
                  <span className="text-rose-800 text-base"><strong>A Causa:</strong> O ar seco do freezer entrou em contato direto com o alimento devido a um plástico fino ou tampa frouxa[cite: 19, 27].<br/><strong>A Solução:</strong> Use filme plástico bem colado na comida e envolva com um saco Ziplock grosso, retirando o máximo de ar possível[cite: 19, 27].</span>
                </div>
              </li>
              <li className="bg-amber-50 p-6 rounded-3xl border border-amber-100 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-amber-900 block text-lg mb-1">O Problema: Pacotinhos grudados uns nos outros.</strong>
                  <span className="text-amber-800 text-base"><strong>A Causa:</strong> O exterior do pote ou do saco estava úmido no momento de ir para o freezer[cite: 19, 27].<br/><strong>A Solução:</strong> Seque muito bem o lado de fora de todas as embalagens com um pano de prato antes de empilhá-las no gelo[cite: 19, 27].</span>
                </div>
              </li>
              <li className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-blue-900 block text-lg mb-1">O Problema: Sopa separou em água e parte sólida.</strong>
                  <span className="text-blue-800 text-base"><strong>A Causa:</strong> A água livre se solta durante o processo de congelamento de líquidos[cite: 19, 27].<br/><strong>A Solução:</strong> Bata ligeiramente o caldo ao reaquecer. Se necessário, dissolva 1 colher de chá de amido e ferva por 1 minuto para reestruturar[cite: 19, 27].</span>
                </div>
              </li>
            </ul>

            <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-700"/> Aprofunde-se: Organização na Prática
            </h2>
            <p>
              Para ver com clareza como aplicar essas estratégias na sua cozinha e acabar com o estresse da semana, deixo aqui um vídeo excelente detalhando a rotina de marmitas.
            </p>

            {/* VIDEO LAZY LOADING */}
            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Aprenda o Passo a Passo das Marmitas</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <YouTubeLazy videoId="vT4n0o_iKus" title="Como Fazer Marmitas para a Semana" />
              </div>
            </div>

            {/* BLOCO AFILIADO (PRODUTO PRÓPRIO) */}
            <div id="afiliado" className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
                <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>Recomendação do Nutri!</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-[2rem] overflow-hidden flex items-center justify-center p-0 shadow-inner border border-slate-100">
                        <img 
                            src={ebookCapa} 
                            alt="Capa do Ebook de Receitas do Marco Aurélio" 
                            className="w-full h-full object-cover" 
                            width="160"
                            height="160"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Livro Digital: <span className="text-green-700">25 Receitas Práticas & Mise en Place</span>
                        </h4>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Gostou das dicas de organização deste artigo? Para não errar na hora de estruturar a sua semana, baixe o meu E-book Completo. Você terá acesso a 25 receitas divididas entre lanches, pratos principais e sobremesas, além de um guia prático de <em>Mise en Place</em> para transformar ingredientes básicos em pratos incríveis em menos de 15 minutos!
                        </p>

                        <a 
                            href="https://pay.hotmart.com" 
                            rel="noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-800 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Adquirir E-book por R$ 9,90
                        </a>
                    </div>
                </div>
            </div>

            {/* SEÇÃO DE CONCLUSÃO */}
            <h2 id="conclusao" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <CheckCircle2 className="text-green-700"/> Conclusão: Organização é Liberdade
            </h2>
            <p>
              Ganhar tempo na cozinha não tem a ver com cozinhar apressado ou pular etapas, mas sim com inteligência logística[cite: 18]. Ao implementar as técnicas de restaurantes (como o branqueamento e a Praça Pronta) na sua casa, você reduz drasticamente o trabalho diário, o desperdício de dinheiro e, de quebra, domina a sua <Link to="/o-que-e-jejum-intermitente" className="text-green-700 font-bold hover:underline">janela alimentar</Link>[cite: 18, 22]. Uma geladeira bem estruturada é o maior investimento que você pode fazer pelo seu metabolismo e pela sua paz mental.
            </p>

            {/* FAQ DINÂMICO */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-700" /> Dúvidas Frequentes (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>
                        {faq.pergunta}
                      </h3>
                      <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                      <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Newsletter />
          </div>
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* CARTÃO AUTOR */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <img 
              src={`${githubImgBase}Eu_1.webp`} 
              alt="Marco Aurélio Jr. - Nutricionista focado em Comportamento" 
              title="Marco Aurélio Jr. - Estudante de Nutrição ISAK 1"
              className="w-full h-full object-cover"
              width="96"
              height="96"
              loading="lazy"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Acredito que a nutrição precisa ser prática e aplicável à vida real. Ao invés de focar em restrições impossíveis de manter, dedico meus estudos a ensinar você a organizar o seu ambiente e entender a resposta metabólica do seu corpo, unindo a ciência clínica a uma rotina leve e descomplicada.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
