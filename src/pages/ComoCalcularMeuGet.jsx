import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import YouTubeLazy from '../components/YouTubeLazy';
import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import { 
  ChevronLeft, ChevronRight, Activity, Calculator, 
  PlayCircle, Headphones, ChevronDown, Zap, 
  BarChart, HeartPulse, Scale, AlertTriangle, 
  ShoppingCart, Flame, Apple, CheckCircle2 
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const dateModifiedISO = "2026-07-22";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

// Imagens
const artigoCapa = `${githubImgBase}Blog/CalculoGET_Capa.webp`;
const planilhaImg = `${githubImgBase}Afiliado/PlanilhaAntropometrica.webp`; // Imagem ilustrativa para o afiliado
const fotoAutor = `${githubImgBase}Eu_1.webp`;

export default function ComoCalcularMeuGet() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Estados da Calculadora
  const [sexo, setSexo] = useState('M');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [naf, setNaf] = useState('1.2'); // Sedentário padrão
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const calcularGET = (e) => {
    e.preventDefault();
    if (!peso || !altura || !idade) return;

    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const i = parseFloat(idade);
    const fatorAtividade = parseFloat(naf);

    // Fórmula Mifflin-St Jeor (mais atual para população geral/sobrepeso)
    let tmb = 0;
    if (sexo === 'M') {
      tmb = (10 * p) + (6.25 * a) - (5 * i) + 5;
    } else {
      tmb = (10 * p) + (6.25 * a) - (5 * i) - 161;
    }

    const gastoTotal = tmb * fatorAtividade;

    setResultado({
      tmb: tmb.toFixed(0),
      get: gastoTotal.toFixed(0),
      perda: (gastoTotal - 500).toFixed(0),
      ganho: (gastoTotal + 500).toFixed(0)
    });
  };

  const faqs = [
    {
      pergunta: "A fórmula de Mifflin-St Jeor é melhor que a de Harris-Benedict?",
      resposta: "Estudos recentes apontam que a fórmula de Mifflin-St Jeor é mais precisa para estimar a Taxa Metabólica Basal (TMB), especialmente em indivíduos com sobrepeso ou obesidade, com uma margem de erro menor em comparação à equação de Harris-Benedict (criada em 1919 e revisada em 1984)."
    },
    {
      pergunta: "O que acontece se eu comer menos calorias que a minha TMB?",
      resposta: "Comer menos que a sua Taxa Metabólica Basal por longos períodos obriga o corpo a desacelerar funções essenciais para poupar energia, prejudicando a imunidade, a cognição e causando forte perda de massa muscular, além de aumentar as chances do efeito sanfona."
    },
    {
      pergunta: "O fator de atividade física (NAF) muda se eu treino 1 hora por dia?",
      resposta: "Treinar 1 hora por dia (musculação ou aeróbico) geralmente enquadra você no nível 'Levemente Ativo' ou 'Moderadamente Ativo' (NAF 1.375 a 1.55), dependendo da intensidade do treino e do quão sedentário você é nas outras 23 horas do seu dia."
    },
    {
      pergunta: "A bioimpedância calcula meu GET com mais precisão?",
      resposta: "As balanças de bioimpedância de boa qualidade calculam sua TMB com base na sua massa magra livre de gordura real, o que tende a ser mais preciso do que fórmulas genéricas, que levam em conta apenas o peso total. Porém, o cálculo do GET (multiplicador de atividade) ainda dependerá da sua estimativa manual do gasto diário."
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-12 lg:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        {/* Botão de Voltar */}
        <button 
          onClick={() => state?.fromBlog ? navigate(-1) : navigate('/blog')}
          className="mb-10 flex items-center gap-2 font-black uppercase tracking-widest text-slate-600 hover:text-green-700 transition-colors bg-transparent border-none cursor-pointer p-0"
          aria-label="Voltar para a página anterior"
        >
          <ChevronLeft size={20} /> Voltar
        </button>

        <article className="prose prose-lg max-w-none text-left">
          {/* Categoria e Data */}
          <div className="mb-6 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-green-100">
              Fisiologia e Metabolismo
            </span>
            <span className="text-xs text-slate-600 font-bold tracking-wider uppercase">
              Atualizado em: {formattedDate}
            </span>
          </div>

          {/* Título Principal H1 */}
          <h1 className="text-4xl md:text-5xl font-black mb-8 uppercase italic leading-tight text-slate-900">
            Como Calcular Meu GET (Gasto Energético Total): Fórmulas e Calculadora Interativa
          </h1>

          {/* Resposta Rápida (Featured Snippet) */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-200 shadow-sm flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 flex items-center gap-2 border-b border-green-200 pb-4">
              <Zap className="text-green-700" size={28} /> Resposta Direta
            </h2>
            <p className="m-0 text-lg text-green-900 font-medium leading-relaxed">
              Para descobrir <strong>como calcular meu GET (Gasto Energético Total)</strong>, você precisa primeiro calcular a sua <strong>TMB (Taxa Metabólica Basal)</strong> usando uma equação validada como a de Mifflin-St Jeor ou Harris-Benedict. Em seguida, basta multiplicar esse valor pelo seu <strong>NAF (Nível de Atividade Física)</strong>, que varia de 1.2 (sedentário) a 1.9 (muito ativo). Esse resultado representa o total exato de calorias que você queima em 24 horas para manter seu peso atual.
            </p>
          </div>

          {/* Player de Áudio */}
          <div className="my-10 border border-green-100 rounded-3xl shadow-sm overflow-hidden bg-slate-50">
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center shadow-md">
                  <Headphones className="text-white w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-800 italic uppercase tracking-widest m-0">Ouça o Artigo Completo</h3>
              </div>
              <audio preload="none" controls className="w-full h-12 outline-none" aria-label="Player de áudio do artigo">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/ComoCalcularGET.mp3" type="audio/mpeg" />
                Seu navegador não suporta a tag de áudio.
              </audio>
            </div>
            
            <div className="h-px bg-green-100 w-full"></div>

            {/* Índice (TOC) Acordeão */}
            <div className="bg-white">
              <button 
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer border-none bg-transparent"
                aria-expanded={isTocOpen}
                aria-label="Abrir ou fechar índice de conteúdo"
              >
                <div className="flex items-center gap-3">
                  <Activity size={20} className="text-green-700" />
                  <span className="text-sm font-black text-slate-800 uppercase tracking-widest italic m-0">Índice do Conteúdo</span>
                </div>
                <ChevronRight size={20} className={`text-slate-600 transition-transform duration-300 ${isTocOpen ? 'rotate-90' : ''}`} />
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isTocOpen ? 'max-h-[800px] border-t border-green-100' : 'max-h-0'}`}>
                <ul className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 list-none m-0">
                  <li><a href="#o-que-e-get" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">1. O que é Gasto Energético Total?</a></li>
                  <li><a href="#taxa-metabolica-basal" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">2. Taxa Metabólica Basal (TMB)</a></li>
                  <li><a href="#formulas-cientificas" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">3. Como Calcular na Mão (Fórmulas)</a></li>
                  <li><a href="#fator-atividade" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">4. Fator de Atividade Física (NAF)</a></li>
                  <li><a href="#regra-de-bolso" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">5. A Regra de Bolso Prática</a></li>
                  <li><a href="#calculadora-get" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">6. Calculadora Automática de GET</a></li>
                  <li><a href="#video-especialista" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">7. Vídeo: Especialista Explica</a></li>
                  <li><a href="#faq" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">8. Perguntas Frequentes (FAQ)</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Imagem de Capa Hero */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 relative bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden">
              <ImagemOtimizada 
                src={artigoCapa}
                alt="Pinguim Nutricionista Pingus utilizando uma calculadora e equações em um laboratório para descobrir como calcular o Gasto Energético Total (GET)."
                title="Calculando o GET na Prática"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                priority="high"
              />
            </div>
            <figcaption className="bg-white p-5 text-center border-t border-slate-100 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest m-0">
                Aprender a calcular suas necessidades energéticas é o primeiro passo para a liberdade alimentar.
              </p>
            </figcaption>
          </figure>

          {/* Corpo do Texto */}
          <h2 id="o-que-e-get" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <BarChart className="text-green-700 shrink-0" size={32} /> O que é o Gasto Energético Total (GET)?
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed">
            Se você já se fez a pergunta "<strong>como calcular meu GET</strong>", você está a um passo de entender o principal pilar do emagrecimento ou do ganho de massa muscular. O Gasto Energético Total (GET) representa a somatória de todas as calorias que o seu organismo consome no período de 24 horas. Ele engloba não apenas a energia gasta no seu treino na academia, mas principalmente a energia usada para manter você vivo e as pequenas calorias gastas caminhando até o trabalho ou tomando banho.
          </p>
          <p className="text-slate-700 font-medium leading-relaxed">
            Dominar essa métrica é fundamental para saber exatamente <Link to="/quantas-calorias-gasto-por-dia" className="text-green-700 font-bold underline">quantas calorias você gasta por dia</Link> e evitar abordagens radicais que resultam no <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold underline">efeito sanfona e inflamação invisível</Link>.
          </p>

          <h2 id="taxa-metabolica-basal" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <HeartPulse className="text-green-700 shrink-0" size={32} /> Taxa Metabólica Basal (TMB): A Base da Equação
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed">
            Antes de calcularmos o GET, é vital calcularmos a Taxa Metabólica Basal (TMB) ou Gasto Energético Basal (GEB). A TMB é a quantidade mínima de energia (em calorias) que o seu corpo precisa para sustentar suas funções vitais básicas se você passasse 24 horas dormindo ou deitado (respiração, batimentos cardíacos, atividade cerebral e regulação da temperatura).
          </p>
          <p className="text-slate-700 font-medium leading-relaxed">
            Muitas pessoas cometem o erro de consumir calorias em valores inferiores à sua própria TMB em dietas drásticas. Esse erro desacelera fortemente o metabolismo e costuma ser o grande desencadeador de compulsões, nos fazendo entender na prática <Link to="/o-que-e-fome-emocional" className="text-green-700 font-bold underline">o que é fome emocional</Link> por pura privação calórica extrema.
          </p>

          <h2 id="formulas-cientificas" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <Scale className="text-green-700 shrink-0" size={32} /> Fórmulas Científicas: Como Calcular na Mão
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-8">
            Na prática da nutrição clínica e esportiva, nós não chutamos valores. Utilizamos equações preditivas extremamente estudadas e validadas. Você precisará de três variáveis: Peso (em kg), Altura (em cm) e Idade (em anos). Veja como os cálculos são feitos:
          </p>

          {/* TABELAS DESKTOP (Hidden no Mobile) */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm mb-10">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest w-1/3">Equação de Harris-Benedict (Revisão 1984)</th>
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Fórmula Matemática</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Masculino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm bg-slate-50/50">TMB = 66 + (13,8 × Peso) + (5 × Altura) - (6,8 × Idade)</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Feminino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm bg-slate-50/50">TMB = 655 + (9,6 × Peso) + (1,9 × Altura) - (4,7 × Idade)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-green-50 border-b border-green-100">
                  <th className="p-4 font-black uppercase text-xs text-green-900 tracking-widest w-1/3">Equação de Mifflin-St Jeor (Atualizada)</th>
                  <th className="p-4 font-black uppercase text-xs text-green-900 tracking-widest">Fórmula Matemática</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-green-50/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Masculino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm">TMB = (10 × Peso) + (6,25 × Altura) - (5,0 × Idade) + 5</td>
                </tr>
                <tr className="hover:bg-green-50/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Feminino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm">TMB = (10 × Peso) + (6,25 × Altura) - (5,0 × Idade) - 161</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CARDS MOBILE (Hidden no Desktop) */}
          <div className="md:hidden space-y-6 mb-12">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-5">
              <h3 className="font-black text-slate-800 text-sm uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Harris-Benedict (1984)</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-bold text-slate-600 mb-1">Masculino:</span>
                  <div className="bg-slate-50 p-3 rounded-xl font-mono text-xs text-slate-700 border border-slate-100">66 + (13,8 × P) + (5 × A) - (6,8 × I)</div>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-600 mb-1">Feminino:</span>
                  <div className="bg-slate-50 p-3 rounded-xl font-mono text-xs text-slate-700 border border-slate-100">655 + (9,6 × P) + (1,9 × A) - (4,7 × I)</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-3xl shadow-sm p-5">
              <h3 className="font-black text-green-900 text-sm uppercase tracking-widest mb-4 border-b border-green-100 pb-2">Mifflin-St Jeor</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-bold text-green-800 mb-1">Masculino:</span>
                  <div className="bg-white p-3 rounded-xl font-mono text-xs text-slate-700 border border-green-100">(10 × P) + (6,25 × A) - (5,0 × I) + 5</div>
                </div>
                <div>
                  <span className="block text-xs font-bold text-green-800 mb-1">Feminino:</span>
                  <div className="bg-white p-3 rounded-xl font-mono text-xs text-slate-700 border border-green-100">(10 × P) + (6,25 × A) - (5,0 × I) - 161</div>
                </div>
              </div>
            </div>
          </div>

          <h2 id="fator-atividade" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <Flame className="text-green-700 shrink-0" size={32} /> Fator de Atividade Física (NAF): O Multiplicador
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-6">
            Com o valor da sua TMB em mãos, o último passo de <strong>como calcular o GET</strong> é fazer a multiplicação pelo seu <strong>Nível de Atividade Física (NAF)</strong>. Seja brutalmente honesto consigo mesmo nesta etapa: uma hora de musculação leve não o torna um "Atleta Profissional". Multiplique a sua TMB pelos índices abaixo:
          </p>

          {/* TABELA NAF DESKTOP */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Nível de Atividade</th>
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Multiplicador (NAF)</th>
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Sedentário</td>
                  <td className="p-4 font-black text-green-700 text-base">TMB × 1.20</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Trabalho de escritório, sem atividades físicas.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Leve</td>
                  <td className="p-4 font-black text-green-700 text-base">TMB × 1.375</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Exercício leve de 1 a 3 dias por semana.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Moderado</td>
                  <td className="p-4 font-black text-green-700 text-base">TMB × 1.55</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Exercício moderado de 3 a 5 dias por semana.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Intenso</td>
                  <td className="p-4 font-black text-green-700 text-base">TMB × 1.725</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Treinos intensos ou diários (6-7 dias por semana).</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CARDS NAF MOBILE */}
          <div className="md:hidden space-y-4 mb-12">
            {[
              { titulo: "Sedentário", mult: "TMB × 1.20", desc: "Trabalho de escritório, sem atividades físicas." },
              { titulo: "Levemente Ativo", mult: "TMB × 1.375", desc: "Exercício leve de 1 a 3 dias por semana." },
              { titulo: "Moderadamente Ativo", mult: "TMB × 1.55", desc: "Exercício moderado de 3 a 5 dias por semana." },
              { titulo: "Muito Ativo / Intenso", mult: "TMB × 1.725", desc: "Treinos intensos ou diários (6-7 dias na semana)." }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-start gap-4">
                <div className="bg-green-50 text-green-700 p-2 rounded-lg font-black shrink-0 border border-green-100">
                  {item.mult.replace("TMB × ", "")}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase m-0 mb-1">{item.titulo}</h4>
                  <p className="text-xs text-slate-600 font-medium m-0 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="regra-de-bolso" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <Apple className="text-green-700 shrink-0" size={32} /> A Regra de Bolso: Estimativa Rápida
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-6">
            Para feiras de saúde ou atendimentos de triagem rápida, onde o tempo é escasso, utilizamos na nutrição a chamada "Regra de Bolso" (proposta por diversos autores clássicos da nutrição clínica e esportiva). Basta pegar o seu peso em kg e multiplicar pelas calorias da faixa do seu objetivo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 text-center shadow-sm">
              <h4 className="text-blue-900 font-black uppercase text-sm tracking-widest mb-2 m-0">Emagrecimento</h4>
              <span className="text-3xl font-black italic text-blue-700 block mb-2">20 a 25 kcal</span>
              <p className="text-xs text-blue-800 font-medium m-0">Multiplicado por kg de peso.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
              <h4 className="text-slate-900 font-black uppercase text-sm tracking-widest mb-2 m-0">Manutenção</h4>
              <span className="text-3xl font-black italic text-slate-700 block mb-2">25 a 30 kcal</span>
              <p className="text-xs text-slate-600 font-medium m-0">Multiplicado por kg de peso.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-3xl p-6 text-center shadow-sm">
              <h4 className="text-green-900 font-black uppercase text-sm tracking-widest mb-2 m-0">Hipertrofia</h4>
              <span className="text-3xl font-black italic text-green-700 block mb-2">30 a 35 kcal</span>
              <p className="text-xs text-green-800 font-medium m-0">Multiplicado por kg de peso.</p>
            </div>
          </div>

          {/* Destaque Visual para a Calculadora Principal do Site */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl mb-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <Calculator size={48} className="text-green-400 mb-6" />
              <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase mb-4 m-0 leading-tight">
                Acesse a Calculadora Avançada Oficial
              </h3>
              <p className="text-slate-300 font-medium mb-8 max-w-xl mx-auto">
                Quer ir além das estimativas rápidas? Acesse nossa ferramenta gratuita exclusiva. Ela leva em conta macros, objetivos específicos e distribui as proporções ideais para sua dieta.
              </p>
              <Link 
                to="/calculadora-de-gasto-calorico"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                aria-label="Acessar calculadora de gasto calórico avançada"
              >
                Acessar Calculadora Gratuita
              </Link>
            </div>
          </div>

          {/* Calculadora In-Page React */}
          <h2 id="calculadora-get" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-8 flex items-center gap-3">
            <Calculator className="text-green-700 shrink-0" size={32} /> Simulador Básico do GET (Equação de Mifflin)
          </h2>

          <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-6 md:p-10 shadow-xl mb-16">
            <form onSubmit={calcularGET} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="col-span-1">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-sexo">Sexo</label>
                <select 
                  id="calc-sexo"
                  value={sexo} 
                  onChange={(e) => setSexo(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl h-[55px] px-4 font-bold outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Selecione o sexo biológico"
                >
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-idade">Idade (anos)</label>
                <input 
                  id="calc-idade"
                  type="number" 
                  value={idade} 
                  onChange={(e) => setIdade(e.target.value)}
                  placeholder="Ex: 30"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl h-[55px] px-4 font-bold outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Digite sua idade em anos"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-peso">Peso (kg)</label>
                <input 
                  id="calc-peso"
                  type="number" 
                  step="0.1"
                  value={peso} 
                  onChange={(e) => setPeso(e.target.value)}
                  placeholder="Ex: 75.5"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl h-[55px] px-4 font-bold outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Digite seu peso em quilos"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-altura">Altura (cm)</label>
                <input 
                  id="calc-altura"
                  type="number" 
                  value={altura} 
                  onChange={(e) => setAltura(e.target.value)}
                  placeholder="Ex: 175"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl h-[55px] px-4 font-bold outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Digite sua altura em centímetros"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-naf">Nível de Atividade (NAF)</label>
                <select 
                  id="calc-naf"
                  value={naf} 
                  onChange={(e) => setNaf(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl h-[55px] px-4 font-bold outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  aria-label="Selecione seu nível de atividade física diária"
                >
                  <option value="1.2">Sedentário (Trabalho sentado, sem exercício)</option>
                  <option value="1.375">Levemente Ativo (Exercício leve 1 a 3 dias/semana)</option>
                  <option value="1.55">Moderadamente Ativo (Treino moderado 3 a 5 dias/semana)</option>
                  <option value="1.725">Muito Ativo (Treino pesado 6 a 7 dias/semana)</option>
                </select>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <button 
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white h-[60px] rounded-2xl font-black uppercase tracking-widest transition-colors shadow-lg border-none cursor-pointer"
                  aria-label="Calcular o Gasto Energético Total"
                >
                  Descobrir Meu GET
                </button>
              </div>
            </form>

            {/* Resultado da Calculadora Interna */}
            {resultado && (
              <div className="mt-10 bg-green-50 border border-green-200 rounded-[2rem] p-8 text-center animate-fade-in shadow-inner">
                <div className="flex flex-col items-center justify-center gap-2 mb-6 border-b border-green-200 pb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-green-800">Seu Gasto Energético Total (GET)</span>
                  <span className="text-5xl md:text-6xl font-black italic text-green-700 drop-shadow-sm">{resultado.get} <span className="text-2xl text-green-800">kcal</span></span>
                  <p className="text-sm text-green-900 font-medium m-0 mt-2">Você gasta essa energia diariamente para manter o peso atual.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Sua TMB (Basal)</span>
                    <strong className="text-lg text-slate-800">{resultado.tmb} kcal/dia</strong>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Para Emagrecer (Aprox.)</span>
                    <strong className="text-lg text-blue-700">{resultado.perda} kcal/dia</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          <h2 id="video-especialista" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <PlayCircle className="text-green-700 shrink-0" size={32} /> Visão de Especialista: O Gasto Calórico
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-8">
            Para enriquecer ainda mais o seu conhecimento e não depender de <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-700 font-bold underline">balanças de bioimpedância de qualidade duvidosa</Link>, deixo a recomendação de um excelente vídeo do Dr. Danillo de Jesus Pereira, Médico do Esporte, detalhando em profundidade as vias do nosso gasto diário.
          </p>

          <div className="bg-green-50 rounded-[3rem] p-6 md:p-10 shadow-inner border border-green-100 mb-16">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="Lsa2FkAlWUU" title="COMO CALCULAR GASTO CALÓRICO DIÁRIO? - Médico do Esporte" />
            </div>
          </div>

          {/* Afiliado: Planilha Antropométrica */}
          <div className="my-16 bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute top-0 right-0 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[10px] tracking-widest shadow-md z-10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-white" />
              <span>Pingus Aprova</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-4 relative z-10">
              <div className="w-full max-w-[200px] shrink-0">
                <div className="relative bg-slate-50 p-2 rounded-2xl shadow-lg border border-slate-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <ImagemOtimizada 
                    src={planilhaImg} 
                    alt="Planilha Antropométrica Exclusiva do Marco Aurélio para cálculo de macros e avaliação física." 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
                    priority="low"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic m-0">
                  Planilha Antropométrica: <span className="text-green-700">Automação Completa</span>
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">
                  Se você é estudante de nutrição, personal trainer ou um entusiasta que detesta fazer cálculos manuais, eu criei a <strong>Planilha Definitiva</strong> baseada nos ensinamentos da ISAK. Com ela você calcula a <Link to="/o_que_e_antropometria" className="text-green-700 font-bold underline">antropometria completa</Link>, % de gordura e o Gasto Calórico Total em poucos cliques.
                </p>
                <div className="flex justify-center md:justify-start">
                  <a 
                    href="https://www.nutricaocommarco.com.br/planilha" 
                    rel="noopener noreferrer" 
                    target="_blank"
                    aria-label="Adquirir a Planilha Antropométrica"
                    className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl hover:bg-green-800 transition-all duration-300 italic no-underline"
                  >
                    <ShoppingCart size={16} />
                    Adquirir Planilha Agora
                  </a>
                </div>
              </div>
            </div> 
          </div>

          <h2 id="faq" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
            <Activity className="text-green-700 shrink-0" size={32} /> Dúvidas Frequentes (FAQ)
          </h2>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none group bg-transparent border-none cursor-pointer"
                >
                  <h3 className={`text-base font-black mb-0 italic transition-colors m-0 ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>
                    {faq.pergunta}
                  </h3>
                  <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                </button>
                <div id={`faq-answer-${index}`} className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6 pb-0'}`}>
                  <p className="text-slate-600 text-sm font-medium m-0 leading-relaxed border-t border-slate-200 pt-4">
                    {faq.resposta}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 mb-16 shadow-sm">
            <h3 className="text-xl font-black text-blue-900 italic uppercase mb-4 m-0">Conclusão</h3>
            <p className="text-blue-800 font-medium leading-relaxed m-0 text-sm md:text-base">
              Aprender <strong>como calcular o GET</strong> não é apenas uma curiosidade matemática, mas sim o passaporte para a libertação de dietas restritivas e ineficazes. Quando você sabe exatamente o quanto seu corpo demanda de combustível para existir e se movimentar, é possível elaborar um déficit ou superávit calórico inteligente, mantendo a ingestão de nutrientes essenciais. Use nossa ferramenta, aplique os fatores de atividade física de maneira realista e construa o seu metabolismo de forma sustentável e saudável!
            </p>
          </div>

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* Cartão do Autor */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <ImagemOtimizada 
              src={fotoAutor} 
              alt="Marco Aurélio Jr. - Avaliador Antropométrico ISAK 1" 
              title="Marco Aurélio Jr. - Estudante de Nutrição ISAK 1"
              className="w-full h-full object-cover"
              priority="low"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1 m-0">Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-sm md:text-base">
              Como avaliador antropométrico certificado internacionalmente, trabalho ensinando você a entender a própria composição corporal. Longe dos mitos do emagrecimento fácil, meu objetivo é trazer clareza matemática e fisiológica para que você tome o controle do seu metabolismo e alcance resultados reais e duradouros.
            </p>
            <a 
              href="https://instagram.com/nutricao_com_marco" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest shadow-md hover:bg-green-800 transition-all italic no-underline"
              aria-label="Siga o autor no Instagram"
            >
              Siga @nutricao_com_marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}