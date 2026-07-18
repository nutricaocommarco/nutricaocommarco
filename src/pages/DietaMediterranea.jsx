import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, HelpCircle, Activity, Leaf, Heart, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Droplet, Fish, Wheat, Wine, CheckCircle2, XCircle, Globe
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import YouTubeLazy from '../components/YouTubeLazy';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Datas
const datePublishedISO = "2026-07-20";
const dateModifiedISO = "2026-07-20";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const dietaCapa = `${githubImgBase}Blog/DietaMediterranea_Capa.webp`;

// Dados do Comparativo
const comparativoDieta = [
  {
    id: 1,
    fator: "Base da Alimentação",
    mediterranea: "Vegetais, frutas, leguminosas, grãos integrais e azeite de oliva extra virgem.",
    ocidental: "Alimentos ultraprocessados, farinhas refinadas, açúcares e fast-food.",
    icone: <Leaf className="w-6 h-6 text-green-600" />
  },
  {
    id: 2,
    fator: "Fontes de Proteína",
    mediterranea: "Peixes, aves, ovos e leguminosas. Carne vermelha muito raramente.",
    ocidental: "Excesso de carnes vermelhas gordurosas e embutidos (salsicha, bacon).",
    icone: <Fish className="w-6 h-6 text-blue-500" />
  },
  {
    id: 3,
    fator: "Gorduras Utilizadas",
    mediterranea: "Gorduras mono e poli-insaturadas (Azeite de oliva, nozes, castanhas).",
    ocidental: "Gorduras saturadas e trans (Margarina, óleo de soja frito, gordura vegetal).",
    icone: <Droplet className="w-6 h-6 text-amber-500" />
  },
  {
    id: 4,
    fator: "Impacto Metabólico",
    mediterranea: "Reduz inflamação, melhora sensibilidade à insulina e protege o coração.",
    ocidental: "Gera inflamação crônica, resistência à insulina e acúmulo de gordura visceral.",
    icone: <Activity className="w-6 h-6 text-rose-500" />
  }
];

export default function DietaMediterranea() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "A Dieta Mediterrânea emagrece rápido?",
      resposta: "Nenhuma dieta saudável promove emagrecimento 'mágico'. A dieta mediterrânea foca na saúde a longo prazo. Ela promove o emagrecimento de forma sustentável quando combinada com um déficit calórico, evitando o temido efeito sanfona causado por dietas altamente restritivas."
    },
    {
      pergunta: "Posso beber vinho todos os dias?",
      resposta: "O consumo de vinho (especialmente o tinto) faz parte da cultura mediterrânea devido aos seus polifenóis, mas deve ser feito com extrema moderação (geralmente uma taça para mulheres e até duas para homens). Se você não bebe, não é necessário começar apenas pela dieta; você pode obter antioxidantes de uvas, chás e frutas vermelhas."
    },
    {
      pergunta: "A dieta mediterrânea é muito cara no Brasil?",
      resposta: "Pode parecer cara se você focar apenas em salmão e azeites importados premium. No entanto, a base da dieta são alimentos acessíveis: feijão, grão-de-bico, lentilha, vegetais da estação, frutas locais, ovos e sardinha. A adaptação para a 'mediterrânea brasileira' é totalmente possível e barata."
    },
    {
      pergunta: "Pode comer pão e macarrão nessa dieta?",
      resposta: "Sim! A dieta mediterrânea não é uma dieta 'Low Carb' (baixa em carboidratos). O segredo está na qualidade: os carboidratos consumidos devem ser, de preferência, integrais (pão integral, aveia, massas integrais) e sempre acompanhados de uma boa fonte de gordura (azeite) e fibras (vegetais) para não gerar picos de açúcar no sangue."
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
            <span className="inline-block bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Saúde e Estilo de Vida</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* TÍTULO PRINCIPAL H1 */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O que é Dieta Mediterrânea? O Segredo da Ciência para Saúde e Longevidade
          </h1>

          {/* RESPOSTA RÁPIDA (FEATURED SNIPPET) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
              O que é Dieta Mediterrânea?
            </h2>
            <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
              A <strong>Dieta Mediterrânea</strong> não é um regime restritivo, mas sim um estilo de vida baseado na cultura alimentar dos países banhados pelo Mar Mediterrâneo (como Grécia e Itália)[span_0](start_span)[span_0](end_span). Ela é rica em vegetais, frutas, leguminosas, grãos integrais, peixes e tem o <strong>azeite de oliva extra virgem</strong> como principal fonte de gordura[span_1](start_span)[span_1](end_span). A ciência a considera uma das melhores dietas do mundo para proteger o coração e promover a longevidade.
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
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Dieta-Mediterranea.mp3" type="audio/mpeg" />
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

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li><a href="#origem" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Globe size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Origem nas Blue Zones</a></li>
                  <li><a href="#piramide" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que comer na prática?</a></li>
                  <li><a href="#coracao" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Proteção ao Coração (PREDIMED)</a></li>
                  <li><a href="#emagrecimento" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dieta Mediterrânea Emagrece?</a></li>
                  <li><a href="#comparativo" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Comparativo vs Dieta Ocidental</a></li>
                  <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                  <li><a href="#afiliado" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><ShoppingCart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Recomendação do Nutri</a></li>
                  <li><a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-700 transition-all font-bold text-base m-0"><HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Perguntas Frequentes</a></li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            
            <p>
              Quando pensamos em "dieta", a primeira imagem que costuma vir à cabeça é a de um prato vazio, fome constante e restrições severas. No entanto, existe um padrão alimentar que vai na contramão de tudo isso, permitindo comer com prazer, fartura e muito sabor, ao mesmo tempo em que blinda o nosso corpo contra doenças graves. Saber <strong>o que é dieta mediterrânea</strong> é entender que a nutrição vai muito além de contar calorias; trata-se da qualidade e da sinergia dos alimentos que colocamos para dentro do nosso corpo.
            </p>

            {/* IMAGEM DE CAPA COM LAZY LOADING E DIMENSÕES */}
            <figure className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src={dietaCapa} 
                alt="Mesa farta ilustrando o que é dieta mediterrânea, com azeite, peixe, vegetais, nozes e vinho tinto." 
                title="Base Alimentar da Dieta Mediterrânea"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                width="800"
                height="500"
                loading="lazy"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"; }}
              />
              <figcaption className="bg-slate-50 p-4 text-center border-t border-slate-200">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest text-center m-0">
                  Azeite, vegetais frescos e peixes formam o coração do estilo de vida mediterrâneo.
                </p>
              </figcaption>
            </figure>

            <h2 id="origem" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Globe className="text-green-700"/> A Origem: O Estudo dos 7 Países e as Blue Zones
            </h2>
            <p>
              A dieta mediterrânea começou a chamar a atenção da ciência e do mundo na década de 1950, graças ao fisiologista Ancel Keys[span_2](start_span)[span_2](end_span). Ele conduziu o famoso "Estudo dos Sete Países", onde notou algo impressionante: pessoas que viviam em regiões como a Grécia, sul da Itália e ilhas do Mediterrâneo tinham taxas incrivelmente baixas de mortalidade por doenças coronarianas, mesmo consumindo uma quantidade considerável de gorduras[span_3](start_span)[span_3](end_span).
            </p>
            <p>
              O segredo não estava em comer pouca gordura, mas sim no <strong>tipo</strong> de gordura. Eles consumiam quase exclusivamente gorduras monoinsaturadas (do azeite de oliva) e poli-insaturadas (dos peixes e castanhas), ignorando quase por completo os alimentos ultraprocessados[span_4](start_span)[span_4](end_span).
            </p>
            <p>
              Hoje, sabemos que algumas das chamadas <strong>"Blue Zones"</strong> (Zonas Azuis) — locais no planeta onde as pessoas vivem mais e melhor, ultrapassando frequentemente os 100 anos de idade — estão exatamente nessas regiões, como a ilha de Ikaria, na Grécia, e Sardenha, na Itália[span_5](start_span)[span_5](end_span). 
            </p>

            <h2 id="piramide" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-700"/> A Pirâmide da Dieta Mediterrânea: O que comer?
            </h2>
            <p>
              Diferente das dietas tradicionais focadas apenas em macronutrientes (carboidratos, proteínas e gorduras), a dieta mediterrânea é considerada um "modo de vida" (a palavra dieta vem do grego <em>diaita</em>, que significa justamente isso)[span_6](start_span)[span_6](end_span). Veja como a alimentação é estruturada na prática[span_7](start_span)[span_7](end_span):
            </p>

            <ul className="list-none space-y-4 my-8 p-0">
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Leaf className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Base Diária (Obrigatório):</strong>
                  <span className="text-slate-600 text-base">Consumo farto de vegetais de todas as cores, frutas frescas, grãos e cereais integrais (aveia, arroz integral), leguminosas (feijão, lentilha, grão-de-bico) e sementes/nozes. O <strong>azeite de oliva</strong> é a gordura de eleição para cozinhar e temperar. A hidratação farta com água e infusões (chás) também é diária[span_8](start_span)[span_8](end_span).</span>
                </div>
              </li>
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Fish className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">Consumo Semanal Frequente (2 a 4x na semana):</strong>
                  <span className="text-slate-600 text-base">Peixes e frutos do mar (fontes incríveis de ômega-3, que desinflamam o corpo), aves (carnes brancas), ovos e laticínios, preferencialmente magros (como iogurtes naturais e queijos frescos)[span_9](start_span)[span_9](end_span).</span>
                </div>
              </li>
              <li className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-800 block text-lg mb-1">No Topo da Pirâmide (Raramente):</strong>
                  <span className="text-slate-600 text-base">Carnes vermelhas, carnes processadas (embutidos como linguiça e bacon) e doces. Devem ser consumidos com extrema moderação, no máximo algumas poucas vezes ao mês[span_10](start_span)[span_10](end_span). Alimentos ultraprocessados são praticamente inexistentes na dieta tradicional.</span>
                </div>
              </li>
            </ul>

            <h2 id="coracao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-700"/> A Ciência: Proteção Cardíaca e o Poder do Azeite
            </h2>
            <p>
              O status de "melhor dieta do mundo" não é achismo. Um dos estudos mais respeitados do mundo, publicado no prestigiado <em>The New England Journal of Medicine</em> (o estudo PREDIMED), avaliou os efeitos dessa alimentação na prevenção primária de doenças cardiovasculares[span_11](start_span)[span_11](end_span). 
            </p>
            <p>
              Os pesquisadores testaram uma dieta mediterrânea suplementada com azeite de oliva extra virgem ou com oleaginosas (nozes) contra uma dieta padrão de baixo teor de gordura (Low Fat)[span_12](start_span)[span_12](end_span). O resultado foi tão claro que o estudo precisou ser interrompido precocemente: o grupo que seguiu o padrão mediterrâneo teve uma redução significativa nos maiores eventos cardiovasculares (morte por causa cardíaca, infarto e, principalmente, <strong>AVC - Acidente Vascular Cerebral</strong>) quando comparado ao grupo que apenas cortou gorduras[span_13](start_span)[span_13](end_span).
            </p>

            <blockquote className="my-10 border-l-4 border-green-600 bg-green-50 p-6 md:p-8 rounded-r-3xl shadow-sm">
              <p className="m-0 text-xl md:text-2xl font-black text-green-900 italic leading-relaxed">
                Grande parte dessa "mágica" protetora vem do <strong>azeite de oliva extra virgem</strong>. Ele contém compostos fenólicos potentíssimos, como a <em>oleuropeína</em> e o <em>hidroxitirosol</em>, que atuam como varredores de radicais livres, possuindo efeito cardioprotetor, anti-inflamatório e neuroprotetor[span_14](start_span)[span_14](end_span).
              </p>
            </blockquote>

            <h2 id="emagrecimento" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-700"/> Afinal, Dieta Mediterrânea Emagrece?
            </h2>
            <p>
              Essa é uma dúvida comum: se essa dieta é rica em azeite, nozes e peixes gordos, não vou acabar engordando? A resposta é: <strong>a dieta mediterrânea emagrece sim</strong>, mas ela não tem nenhuma "vantagem mágica" sobre a perda de peso quando comparada a outras dietas saudáveis.
            </p>
            <p>
              Um estudo clínico chamado CARDIVEG comparou diretamente a perda de peso entre uma dieta vegetariana de baixa caloria e uma dieta mediterrânea de baixa caloria por 3 meses[span_15](start_span)[span_15](end_span). A conclusão científica foi direta: <strong>ambas foram igualmente eficazes na redução do peso corporal e da massa gorda, sem diferenças significativas entre elas</strong>[span_16](start_span)[span_16](end_span). 
            </p>
            <p>
              O que muda é o impacto metabólico. No mesmo estudo, a dieta mediterrânea foi mais eficaz em baixar rapidamente os níveis de triglicerídeos do sangue[span_17](start_span)[span_17](end_span). Ou seja, para o <Link to="/calculadora-de-gasto-calorico" className="text-green-700 font-bold hover:underline">emagrecimento real</Link>, a regra de ouro continua sendo o déficit calórico. Mas se você busca perder peso sem comprometer o seu corpo e fugindo do terrível <Link to="/efeito-sanfona" className="text-green-700 font-bold hover:underline">efeito sanfona e inflamação invisível</Link>, esse padrão alimentar nutre as suas células e aumenta a saciedade, facilitando a adesão ao processo.
            </p>

            {/* SEÇÃO INTERATIVA: TABELA (DESKTOP) E CARDS (MOBILE) */}
            <h2 id="comparativo" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-700"/> Comparativo: Dieta Mediterrânea vs Dieta Ocidental
            </h2>
            <p className="mb-8">
              Para entender na prática o que é dieta mediterrânea, a forma mais fácil é contrastá-la com o padrão de alimentação que infelizmente domina o ocidente atual, repleto de produtos altamente palatáveis, mas vazios em nutrientes, o que desregula profundamente o nosso <Link to="/metabolismo-lento" className="text-green-700 font-bold hover:underline">metabolismo</Link>.
            </p>

            {/* TABELA DESKTOP */}
            <div className="hidden md:block my-8 bg-white border border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-slate-500 w-1/4">Aspecto</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-green-700 bg-green-50/50 w-3/8">Padrão Mediterrâneo</th>
                    <th className="p-5 font-black uppercase tracking-widest text-[11px] text-rose-700 bg-rose-50/50 w-3/8">Padrão Ocidental Moderno</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {comparativoDieta.map((item) => (
                    <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-5 border-r border-slate-100">
                        <div className="flex items-center gap-3 font-black text-slate-800 italic">
                          <div className="p-2 bg-slate-100 rounded-lg shrink-0">{item.icone}</div>
                          {item.fator}
                        </div>
                      </td>
                      <td className="p-5 border-r border-slate-100 text-slate-700">{item.mediterranea}</td>
                      <td className="p-5 text-slate-600">{item.ocidental}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CARDS MOBILE */}
            <div className="md:hidden space-y-6 my-8">
              {comparativoDieta.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col gap-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="p-2 bg-slate-50 rounded-xl">{item.icone}</div>
                    <span className="font-black text-lg italic uppercase text-slate-800">{item.fator}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black text-green-700 mb-1">Mediterrânea:</span>
                    <span className="text-sm font-bold text-slate-700">{item.mediterranea}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black text-rose-700 mb-1">Ocidental:</span>
                    <span className="text-sm font-medium text-slate-600">{item.ocidental}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 italic mt-6">
              Como mostrou um estudo na <em>Cell Metabolism</em> em 2019, dietas ricas em alimentos ultraprocessados induzem as pessoas a comerem até 500 calorias a mais por dia, simplesmente porque esses produtos não geram saciedade nutricional[span_18](start_span)[span_18](end_span). O estilo mediterrâneo, recheado de fibras e gorduras boas, atua exatamente cortando esse ciclo de fome descontrolada.
            </p>

            <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-16 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-700"/> Aprofunde-se: A Dieta Mediterrânea na Prática
            </h2>
            <p>
              Para ver com clareza como aplicar esse conhecimento poderoso na sua cozinha amanhã mesmo, deixo aqui uma excelente aula sobre os pilares práticos e benefícios dessa que é considerada por especialistas uma das intervenções alimentares mais seguras do mundo.
            </p>

            {/* VIDEO LAZY LOADING */}
            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight m-0">Entenda a Dieta Mediterrânea</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <YouTubeLazy videoId="v1bQmb2y7Lg" title="Guia Prático da Dieta Mediterrânea" />
              </div>
            </div>

            {/* BLOCO AFILIADO */}
            <div id="afiliado" className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
                <div className="absolute -top-1 -right-1 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.webp`} 
                            alt="Mascote Pingus endossando produto saudável para a Dieta Mediterrânea" 
                            className="w-full h-full object-contain" 
                            width="160"
                            height="160"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Azeite Extra Virgem <span className="text-green-700">Acidez Máxima 0,2%</span>
                        </h4>

                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-white p-2">
                            <img 
                                src={`${githubImgBase}Afiliado/Azeite.webp`} 
                                alt="Azeite de Oliva Extra Virgem Premium com Baixa Acidez" 
                                className="w-full h-auto object-contain" 
                                width="200"
                                height="200"
                                loading="lazy"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400"; }}
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Como vimos, o grande "remédio" dessa dieta é o azeite de oliva, rico em oleuropeína[span_19](start_span)[span_19](end_span). Mas não adianta comprar azeite misturado com óleo de soja! É crucial investir em um <strong>Azeite Extra Virgem genuíno, extraído a frio e com acidez menor que 0,2%</strong>. Esse é o padrão ouro que garante que os compostos antioxidantes que protegem o seu coração estejam vivos dentro da garrafa.
                        </p>

                        <a 
                            href="https://meli.la/2S5HJEg" 
                            rel="sponsored noopener noreferrer" 
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-700 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Ver no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, o blog recebe uma pequena comissão que financia nossos conteúdos científicos, sem gerar custo extra para você.
                    </p>
                </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                <HelpCircle className="text-green-700" /> Perguntas Frequentes (FAQ)
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
              alt="Marco Aurélio Jr. - Autor do Artigo sobre Dieta Mediterrânea." 
              title="Marco Aurélio Jr. - Nutrição Baseada em Evidências"
              className="w-full h-full object-cover"
              width="96"
              height="96"
              loading="lazy"
              onError={(e) => { e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>"; }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Estudante de nutrição apaixonado por ciência clínica e qualidade de vida. O meu objetivo é traduzir a linguagem complexa dos artigos científicos para que você possa entender, na prática, como blindar o seu metabolismo contra doenças, melhorando não só a sua estética, mas a sua longevidade.
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