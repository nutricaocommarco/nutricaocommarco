import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Activity, Leaf, Shield, Heart, FileText, Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, Leaf, Apple, Coffee, Wheat, Flame, Beaker, CheckCircle2 } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas para SEO
const datePublishedISO = "2026-03-27";
const dateModifiedISO = "2026-03-27";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Caminho oficial da imagem de capa
const prebioticosCapa = `${githubImgBase}Blog/Prebioticos.jpg`;

// Componente principal da página
export default function Prebioticos() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Efeito para rolar para o topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "Qual a diferença entre prebiótico e probiótico?",
      resposta: "De forma simples, o prebiótico é o 'alimento' que nutre as bactérias boas, enquanto os probióticos são os próprios microrganismos vivos (as bactérias benéficas em si). Você precisa do prebiótico para manter o probiótico vivo e forte no seu intestino."
    },
    {
      pergunta: "Prebiótico engorda?",
      resposta: "Não. Na verdade, a fermentação dos prebióticos pelas bactérias intestinais produz ácidos graxos de cadeia curta que ajudam a aumentar a saciedade (estimulando hormônios como PYY e GLP-1) e podem até reduzir o acúmulo de gordura corporal."
    },
    {
      pergunta: "Faz mal tomar prebiótico todos os dias?",
      resposta: "Não faz mal, muito pelo contrário. O consumo diário é recomendado para manter a microbiota intestinal saudável. Apenas atente-se à dose: quantidades entre 5g e 10g são bem toleradas, mas doses acima de 14g por dia podem causar desconfortos como excesso de gases e estufamento."
    },
    {
      pergunta: "Posso usar prebióticos enquanto tomo antibióticos?",
      resposta: "Sim, e é uma excelente estratégia. Os antibióticos costumam varrer tanto as bactérias ruins quanto as boas do intestino. Fornecer prebióticos ajuda a nutrir as bactérias benéficas sobreviventes, acelerando a recuperação da sua flora intestinal e prevenindo diarreias associadas ao medicamento."
    },
    {
      pergunta: "Quanto tempo demora para o prebiótico fazer efeito?",
      resposta: "Os efeitos na regularidade intestinal podem ser notados em poucos dias. No entanto, para uma modulação real da microbiota, melhoria da imunidade e efeitos metabólicos (como auxílio no controle do colesterol e glicemia), o uso contínuo por algumas semanas é necessário para que as colônias de bactérias boas se estabeleçam firmemente."
    }
  ];

  const comparativoAlimentos = [
    {
      id: 1,
      tipo: 'Oligossacarídeos (FOS e Inulina)',
      fontes: 'Batata yacon, aveia, cebola, alho, banana, grão de bico e beterraba.',
      acao: 'Altamente fermentáveis, excelente substrato para bifidobactérias.',
      cor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      tipo: 'Polissacarídeos (Pectinas e Betaglucanas)',
      fontes: 'Bagaço de frutas cítricas, maçã, biomassa de banana verde.',
      acao: 'Formam géis viscosos, ajudando no controle do colesterol e glicemia.',
      cor: 'bg-slate-800',
      textColor: 'text-white'
    },
    {
      id: 3,
      tipo: 'Compostos Fenólicos',
      fontes: 'Chá verde, mirtilos, casca de jabuticaba.',
      acao: 'Potente ação antioxidante aliada à modulação da microbiota.',
      cor: 'bg-emerald-700',
      textColor: 'text-white'
    }
  ];

  // Componente Prebioticos lista
  const prebioticosDados = [
  {
    id: 1,
    nome: "Batata Yacon",
    tipo: "FOS e Inulina",
    descricao: "Excelente raiz para controle glicêmico e nutrição profunda das bifidobactérias.",
    icone: <Flame className="w-6 h-6 text-orange-500" />
  },
  {
    id: 2,
    nome: "Banana Verde (Biomassa)",
    tipo: "Amido Resistente",
    descricao: "Chega intacta ao intestino, servindo de banquete para as bactérias boas.",
    icone: <Leaf className="w-6 h-6 text-green-500" />
  },
  {
    id: 3,
    nome: "Aveia em Flocos",
    tipo: "Betaglucanas",
    descricao: "Fibra formadora de gel, fantástica para redução da absorção de colesterol.",
    icone: <Wheat className="w-6 h-6 text-amber-600" />
  },
  {
    id: 4,
    nome: "Cebola",
    tipo: "Inulina e FOS",
    descricao: "Tempero de uso diário que fortalece a imunidade e a flora intestinal.",
    icone: <CheckCircle2 className="w-6 h-6 text-purple-500" />
  },
  {
    id: 5,
    nome: "Alho",
    tipo: "Inulina",
    descricao: "Atua como um potente antimicrobiano natural contra bactérias patogênicas.",
    icone: <CheckCircle2 className="w-6 h-6 text-slate-500" />
  },
  {
    id: 6,
    nome: "Maçã (com casca)",
    tipo: "Pectina",
    descricao: "A fibra da casca ajuda na regulação do trânsito intestinal de forma suave.",
    icone: <Apple className="w-6 h-6 text-red-500" />
  },
  {
    id: 7,
    nome: "Raiz de Chicória",
    tipo: "Inulina Concentrada",
    descricao: "Uma das maiores fontes naturais, muito usada na indústria alimentícia.",
    icone: <Leaf className="w-6 h-6 text-emerald-600" />
  },
  {
    id: 8,
    nome: "Aspargos",
    tipo: "Inulina",
    descricao: "Vegetal nobre que auxilia na desinflamação e nutre o microbioma.",
    icone: <Leaf className="w-6 h-6 text-green-400" />
  },
  {
    id: 9,
    nome: "Beterraba",
    tipo: "Oligossacarídeos",
    descricao: "Além de prebiótica, melhora a oxigenação sanguínea e o metabolismo.",
    icone: <CheckCircle2 className="w-6 h-6 text-rose-600" />
  },
  {
    id: 10,
    nome: "Sementes de Linhaça",
    tipo: "Mucilagens",
    descricao: "Formam uma barreira protetora calmante na parede do estômago e intestino.",
    icone: <Coffee className="w-6 h-6 text-amber-800" />
  },
  {
    id: 11,
    nome: "Bagaço de Cítricos",
    tipo: "Pectina Cítrica",
    descricao: "As fibras brancas da laranja são tesouros desperdiçados na forma de suco.",
    icone: <Apple className="w-6 h-6 text-orange-400" />
  },
  {
    id: 12,
    nome: "Suplemento Prebiótico",
    tipo: "Blend FOS/Inulina em Pó",
    descricao: "A forma mais prática e dosada de garantir 5g diárias sem esforço.",
    icone: <Beaker className="w-6 h-6 text-blue-500" />
  }
];

  return (
    <>
      <Helmet>
        <title>O que são Prebióticos? Alimentos, Benefícios e Para Que Servem</title>
        <meta name="description" content="Descubra o que são prebióticos, para que servem no seu intestino, quais alimentos são ricos em FOS e inulina, e como eles alimentam sua flora intestinal." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="O que são Prebióticos? Alimentos, Benefícios e Para Que Servem | Nutrição com Marco" />
        <meta property="og:image" content={prebioticosCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
      </Helmet>

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde Intestinal</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que são Prebióticos? Alimentos, Benefícios e Para Que Servem
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                O que é prebiótico? Resposta Direta
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                Os prebióticos são ingredientes alimentares que o nosso corpo não consegue digerir, mas que servem como um "alimento" seletivo e poderoso para o crescimento e atividade das bactérias boas do nosso intestino, como as <em>Bifidobacterias</em> e <em>Lactobacillus</em>. Eles chegam intactos ao intestino grosso, onde são fermentados, promovendo a saúde de toda a sua microbiota intestinal e gerando benefícios que vão desde a melhora da imunidade até o controle do metabolismo.
            </p>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Prebioticos.mp3" type="audio/mpeg" />
                Seu navegador não suporta o áudio.
              </audio>
            </div>

            <div className="h-px bg-green-100/60 w-full"></div>

            <nav className="bg-slate-50">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                    <Activity size={18} />
                  </div>
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                </div>
                <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#fisiologia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Como funcionam no corpo</a></li>
                  <li><a href="#alimentos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Onde encontrar na dieta?</a></li>
                  <li><a href="#beneficios" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Benefícios Práticos</a></li>
                  <li><a href="#recomendacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Doses e Recomendações</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Aprofunde-se no tema</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <p>
              Passamos a vida inteira focados no que nós estamos comendo, mas frequentemente esquecemos que não estamos sozinhos nessa digestão. O nosso intestino abriga trilhões de microrganismos que trabalham incansavelmente na linha de frente da nossa imunidade, na digestão e na absorção de nutrientes. Para que esse exército microscópico trabalhe a seu favor, ele precisa ser muito bem alimentado. É exatamente aí que entram os prebióticos, os verdadeiros combustíveis da saúde intestinal.
            </p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={prebioticosCapa} 
                alt="Mesa repleta de alimentos prebióticos naturais como aveia, bananas, cebola, alho, aspargos e sementes em um ambiente claro e saudável." 
                title="Alimentos ricos em prebióticos para a saúde da microbiota intestinal"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://images.unsplash.com/photo-1607969391576-61e38da857b2?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="bg-green-50 p-4 text-center">
                <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                  Cuidar do intestino é nutrir as bactérias que protegem você todos os dias.
                </p>
              </div>
            </div>

            <h2 id="fisiologia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> A Viagem da Fibra: Como os prebióticos funcionam
            </h2>
            <p>
              Muitos componentes alimentares têm sido descritos como prebióticos, com grande destaque para os oligossacarídeos e alguns tipos de polissacarídeos. Para que um alimento ganhe esse título de nobreza na nutrição, ele precisa cumprir uma missão difícil: resistir bravamente ao pH ácido do nosso estômago e alcançar o intestino grosso intacto, onde será fermentado e estimulará de forma seletiva as bactérias benéficas. É durante essa mágica da fermentação pela microbiota que ocorre a produção de Ácidos Graxos de Cadeia Curta (AGCC), com destaque para o acetato, propionato e o butirato.
            </p>
            <p>
              Esses compostos gerados fornecem até 10% da nossa energia, nutrem as próprias células do intestino e, de quebra, reduzem o pH intestinal, o que inibe a proliferação de bactérias patogênicas causadoras de doenças. A sua saúde global passa pela integridade dessa barreira intestinal. Um intestino desregulado falha na absorção de nutrientes básicos e compromete toda a sua imunidade.
            </p>

            <blockquote className="my-10 border-l-4 border-green-600 bg-green-50 p-6 md:p-8 rounded-r-3xl shadow-sm">
              <p className="m-0 text-xl md:text-2xl font-black text-green-900 italic leading-relaxed">
                "As fibras alimentares e prebióticos são fermentadas e modulam a microbiota, ajudando a melhorar a glicemia, controlar o colesterol e até mesmo aumentar os hormônios da saciedade, reduzindo o acúmulo de gordura corporal."
              </p>
            </blockquote>

            <h2 id="alimentos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> Onde encontrar prebióticos naturais na dieta?
            </h2>
            <p>
              A melhor notícia é que você não precisa procurar ingredientes mágicos ou caros para nutrir sua flora intestinal. Prebióticos excelentes estão escondidos em alimentos do nosso cotidiano. Se você já leu nosso guia sobre <Link to="/quantas_frutas_posso_comer" className="text-green-600 font-semibold hover:underline">quantas frutas você pode comer por dia</Link>, sabe que o bagaço e a casca de frutas, como a maçã e a laranja, são riquíssimos em pectinas. Até mesmo o famoso desconforto discutido em <Link to="/por_que_o_feijao_da_gases" className="text-green-600 font-semibold hover:underline">por que o feijão dá gases</Link> tem um lado bom: os oligossacarídeos presentes nas leguminosas são altamente fermentáveis e alimentam as bactérias intestinais.
            </p>

            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch bg-slate-50">
                <div className="p-4 border-r border-slate-100 col-span-4 flex items-center justify-center">Classe de Prebiótico</div>
                <div className="p-4 border-r border-slate-100 col-span-4 flex items-center justify-center">Onde Encontrar</div>
                <div className="p-4 col-span-4 flex items-center justify-center">Ação Principal</div>
              </div>

              {comparativoAlimentos.map((item) => (
                <div key={item.id} className={`grid grid-cols-12 items-stretch ${item.cor} ${item.textColor} border-b border-slate-100 last:border-b-0`}>
                  <div className="p-4 border-r border-white/20 flex flex-col justify-center items-center text-center col-span-4">
                    <span className="font-black text-lg italic uppercase">{item.tipo}</span>
                  </div>
                  <div className="p-4 border-r border-white/20 flex flex-col justify-center items-center gap-1 col-span-4 text-sm font-bold text-center">
                    {item.fontes}
                  </div>
                  <div className="p-4 flex flex-col justify-center items-center text-center col-span-4 text-sm font-medium">
                    {item.acao}
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-6 my-10">
              {comparativoAlimentos.map((item) => (
                <div key={item.id} className={`${item.cor} ${item.textColor} p-8 rounded-[2.5rem] shadow-xl border border-white/10`}>
                  <div className="flex items-center gap-3 mb-6 border-b border-white/20 pb-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Leaf size={20} />
                    </div>
                    <span className="font-black text-xl italic uppercase tracking-tight">{item.tipo}</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest opacity-60 font-black mb-1">Onde Encontrar</span>
                      <span className="text-base font-bold leading-tight">{item.fontes}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest opacity-60 font-black mb-1">Ação Principal</span>
                      <span className="text-sm font-medium">{item.acao}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p>
              E para quem se pergunta se <Link to="/diabetico_pode_comer_beterraba" className="text-green-600 font-semibold hover:underline">o diabético pode comer beterraba</Link>, saiba que ela é uma ótima fonte de Fruto-oligossacarídeos (FOS), ajudando não só a microbiota, mas o metabolismo como um todo.
            </p>

            {/* AFILIADO MERCADO LIVRE - O PINGUS APROVA */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-slate-200">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="Selo de Qualidade Pingus" 
                            className="w-full h-full object-contain" 
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>🐧</text></svg>";
                            }}
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Kit de Potes Herméticos <span className="text-green-700">de Vidro</span>
                        </h4>
                        
                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                                src={`${githubImgBase}/Afiliado/Potes.JPG`} 
                                alt="Kit de Potes Herméticos de Vidro para conservação de alimentos" 
                                className="w-full h-auto" 
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            O segredo para consumir mais fibras prebióticas na correria (como frutas picadas, aveia e vegetais) é a organização da semana. Eu indico potes de <strong>vidro com tampa hermética</strong> porque eles não pegam cheiro, são livres de toxinas (BPA) e mantêm os alimentos frescos e crocantes por muito mais tempo.
                        </p>
                        
                        <a 
                            href="https://meli.la/2S5HJEg" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso! O Pingus agradece o apoio.
                    </p>
                </div>
            </div>

            <h2 id="beneficios" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Shield className="text-green-600"/> Para que serve o prebiótico? Benefícios Práticos
            </h2>
            <p>
              Os benefícios sistêmicos de manter a microbiota bem alimentada com prebióticos são extensos. Eles melhoram a integridade da barreira intestinal, auxiliam no controle do perfil glicêmico e lipídico e possuem efeitos imunomodulatórios e até antitumorais, atuando na quimioprevenção do câncer colorretal. Além disso, ajudam a prevenir alergias e promovem alívio contra diarreias e infecções entéricas.
            </p>
            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 italic mt-6">
              Em relação ao peso e apetite, a fermentação das fibras libera os hormônios GLP-1 e PYY, aumentando a saciedade de forma natural. Manter a microbiota bem alimentada auxilia no controle do colesterol e evita picos glicêmicos, fundamentais para a saúde a longo prazo.
            </p>

            <h2 id="recomendacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Doses e Recomendações: Quanto consumir?
            </h2>
            <p>
              Você precisa de pelo menos 4g de prebióticos por dia para promover o crescimento das culturas probióticas no intestino. A Sociedade Brasileira de Nutrição Parenteral e Enteral indica que quantidades entre 5g e 10g são muito bem toleradas e recomendadas para a manutenção da saúde. Para recuperação de bifidobactérias, as doses podem subir, mas cuidado: doses maiores que 14g por dia de uma só vez podem causar desconforto intestinal severo. O equilíbrio é a chave! Para medir seus resultados reais durante o processo de emagrecimento ou ganho de massa magra, descubra se sua <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-600 font-semibold hover:underline">balança de bioimpedância é confiável</Link> e entenda os conceitos de composição corporal no nosso artigo sobre <Link to="/o_que_e_antropometria" className="text-green-600 font-semibold hover:underline">o que é antropometria</Link>.
            </p>
            
// Inicio do Vídeo do Youtube
            <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Aprofunde-se: 6 Alimentos Prebióticos
            </h2>
            <p>
              Quer saber na prática o que colocar no carrinho do mercado? Neste vídeo curto e direto ao ponto, descubra 6 alimentos acessíveis e ricos em prebióticos para transformar a sua saúde intestinal hoje mesmo.
            </p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">6 Alimentos Prebióticos</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/ytMJD0TpEk0" 
                  title="Vídeo 6 Alimentos Prebióticos" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
// Fim do Vìdeo do Youtube

            // Inicio da Lista de alimentos
export default function ListaPrebioticos() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Lista */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
            Guia Prático
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tight mb-6">
            A Lista Definitiva de <span className="text-green-600">Prebióticos</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Nossa saúde começa na feira e na organização da dieta. Abaixo você encontra os melhores alimentos e suplementos para nutrir as suas bactérias boas, organizados para facilitar a sua próxima ida ao mercado.
          </p>
        </div>

        {/* Estrutura em Tabela / Grid de 3 Colunas */}
        <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden p-2 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prebioticosDados.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-slate-50 rounded-[2rem] p-6 border border-slate-100 hover:border-green-300 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {item.icone}
                  </div>
                  <span className="bg-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full group-hover:bg-green-200 group-hover:text-green-800 transition-colors">
                    {item.tipo}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-3 italic">
                  {item.nome}
                </h3>
                
                <p className="text-sm text-slate-600 font-medium leading-relaxed mt-auto">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé da Lista */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-bold uppercase tracking-widest italic">
            Nutrição com Marco • Saúde Intestinal Levada a Sério
          </p>
        </div>

      </div>
    </div>
  );
}
            // Fim da lista de Alimentos
            

            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre Prebióticos
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-600' : 'text-slate-800 group-hover:text-green-600'}`}>
                        {faq.pergunta}
                      </h3>
                      <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
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

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr." 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>";
              }}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando você a construir uma relação mais leve e sem radicalismos com a comida, cuidando do corpo desde o intestino até a mente.
            </p>
            <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
