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
// Selecionei a imagem com os cálculos de GET (TDEE) e BMR flutuando, achei perfeita para o tema!
const artigoCapa = `${githubImgBase}Blog/GET_Capa.webp`;
const planilhaImg = `${githubImgBase}PlanilhaImagem/Planilha_Capa.webp`; // Imagem atualizada da Planilha
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
      resposta: "Treinar 1 hora por dia (musculação ou aeróbico) geralmente enquadra você no nível 'Levemente Ativo' ou 'Moderadamente Ativo' (NAF 1.375 a 1.55), dependendo da intensidade do treino e do quão sedentário você é nas outras 23 horas do seu dia. O Professor Dudu Haluch destaca que os gastos fora do exercício (NEAT) frequentemente impactam mais no GET do que o próprio treino."
    },
    {
      pergunta: "A bioimpedância calcula meu GET com mais precisão?",
      resposta: "As balanças de bioimpedância de boa qualidade calculam sua TMB com base na sua massa magra livre de gordura real, o que tende a ser mais preciso do que fórmulas genéricas. Porém, o cálculo do GET (multiplicador de atividade) ainda dependerá da sua estimativa correta e realista do gasto diário."
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

          {/* Resposta Rápida (Featured Snippet) focada em "Como calcular meu GET" */}
          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-200 shadow-sm flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 flex items-center gap-2 border-b border-green-200 pb-4">
              <Zap className="text-green-700" size={28} /> Resposta Direta: Como Calcular Meu GET
            </h2>
            <p className="m-0 text-lg text-green-900 font-medium leading-relaxed">
              Para descobrir <strong>como calcular meu GET (Gasto Energético Total)</strong>, você precisa primeiro calcular a sua <strong>TMB (Taxa Metabólica Basal)</strong> usando uma equação científica, como a de Mifflin-St Jeor ou Harris-Benedict. Em seguida, basta multiplicar esse valor da TMB pelo seu <strong>NAF (Nível de Atividade Física)</strong>, que varia de 1.2 (sedentário) a 1.9 (muito ativo). Esse resultado numérico representa o total exato de calorias que você gasta em 24 horas para manter seu peso e metabolismo funcionando.
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
                  <li><a href="#video-especialista" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">7. Vídeo: Dudu Haluch Explica o GET</a></li>
                  <li><a href="#afiliado" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">8. Planilha Antropométrica Exclusiva</a></li>
                  <li><a href="#conclusao" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">9. Conclusão da Análise</a></li>
                  <li><a href="#faq" className="text-slate-700 hover:text-green-700 font-bold text-sm underline transition-colors">10. Perguntas Frequentes (FAQ)</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Imagem de Capa Hero com o Pinguim */}
          <figure className="my-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 relative bg-slate-200">
            <div className="relative w-full aspect-video overflow-hidden">
              <ImagemOtimizada 
                src={artigoCapa}
                alt="Pinguim Nutricionista Pingus utilizando uma calculadora e equações em um laboratório moderno para descobrir como calcular o Gasto Energético Total (GET)."
                title="Calculando o GET na Prática"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                priority="high"
                width="800"
                height="450"
              />
            </div>
            <figcaption className="bg-white p-5 text-center border-t border-slate-100 relative z-10">
              <p className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-widest m-0">
                Entender <strong>como calcular meu GET</strong> é o primeiro passo definitivo para a liberdade metabólica.
              </p>
            </figcaption>
          </figure>

          {/* Corpo do Texto */}
          <h2 id="o-que-e-get" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <BarChart className="text-green-700 shrink-0" size={32} /> O que é o Gasto Energético Total (GET)?
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed">
            Muitas vezes em consultório, os pacientes me perguntam aflitos: "Afinal, <strong>como calcular meu GET</strong>?". O Gasto Energético Total (GET) representa a somatória completa de todas as calorias que o seu organismo consome no período exato de 24 horas. Ele engloba não apenas a energia gasta no seu treino na academia, mas principalmente a energia usada para manter você vivo e as pequenas calorias gastas caminhando até o trabalho, lavando a louça ou tomando banho.
          </p>
          <p className="text-slate-700 font-medium leading-relaxed">
            Dominar essa métrica é fundamental para saber exatamente <Link to="/quantas-calorias-gasto-por-dia" className="text-green-700 font-bold underline">quantas calorias você gasta por dia</Link> e evitar abordagens radicais. Sem o cálculo do GET, você corre o risco constante de comer de menos, resultando no <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-700 font-bold underline">efeito sanfona e na inflamação invisível</Link>, ou de comer demais, acumulando gordura visceral.
          </p>

          <h2 id="taxa-metabolica-basal" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <HeartPulse className="text-green-700 shrink-0" size={32} /> Taxa Metabólica Basal (TMB): A Base da Equação
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed">
            A principal variável para resolver a charada de <strong>como calcular meu GET</strong> é, invariavelmente, descobrir primeiro a sua Taxa Metabólica Basal (TMB) ou Gasto Energético Basal (GEB). A TMB é a quantidade mínima de energia (em calorias) que o seu corpo precisa para sustentar suas funções vitais básicas se você passasse 24 horas dormindo ou absolutamente em repouso absoluto (respiração, batimentos cardíacos, atividade cerebral e regulação térmica).
          </p>
          <p className="text-slate-700 font-medium leading-relaxed">
            Muitas pessoas cometem o erro drástico de consumir calorias em valores inferiores à sua própria TMB em dietas muito restritivas. Esse erro fisiológico desacelera fortemente o metabolismo e costuma ser o grande desencadeador de compulsões severas, nos fazendo entender na prática clínica <Link to="/o-que-e-fome-emocional" className="text-green-700 font-bold underline">o que é fome emocional</Link> por pura privação calórica irresponsável.
          </p>

          <h2 id="formulas-cientificas" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <Scale className="text-green-700 shrink-0" size={32} /> Fórmulas Científicas: Como Calcular na Mão o GET
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-8">
            Na prática profissional de <Link to="/o_que_e_antropometria" className="text-green-700 font-bold underline">antropometria e nutrição</Link>, nós não chutamos valores baseados no achismo. Utilizamos equações preditivas extremamente estudadas e validadas por décadas de ciência. Para aprender a calcular o GET na mão, você precisará de três variáveis do seu corpo: Peso (em kg), Altura (em cm) e Idade (em anos). Veja como os cálculos da TMB são estruturados antes da multiplicação:
          </p>

          {/* TABELAS DESKTOP (Hidden no Mobile) */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm mb-10">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest w-1/3">Equação de Harris-Benedict (Revisão 1984)</th>
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Fórmula Matemática (TMB)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Masculino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm bg-slate-50/50">TMB = 66 + (13,8 × Peso em kg) + (5 × Altura em cm) - (6,8 × Idade em anos)</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Feminino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm bg-slate-50/50">TMB = 655 + (9,6 × Peso em kg) + (1,9 × Altura em cm) - (4,7 × Idade em anos)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-green-50 border-b border-green-100">
                  <th className="p-4 font-black uppercase text-xs text-green-900 tracking-widest w-1/3">Equação de Mifflin-St Jeor (A Mais Atual)</th>
                  <th className="p-4 font-black uppercase text-xs text-green-900 tracking-widest">Fórmula Matemática (TMB)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-green-50/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Masculino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm">TMB = (10 × Peso em kg) + (6,25 × Altura em cm) - (5,0 × Idade em anos) + 5</td>
                </tr>
                <tr className="hover:bg-green-50/30 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Feminino</td>
                  <td className="p-4 text-slate-600 font-medium font-mono text-sm">TMB = (10 × Peso em kg) + (6,25 × Altura em cm) - (5,0 × Idade em anos) - 161</td>
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
            <Flame className="text-green-700 shrink-0" size={32} /> Fator de Atividade Física (NAF): O Multiplicador do GET
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-6">
            Com o valor da sua TMB calculado, o último passo crucial da sua busca de <strong>como calcular meu GET</strong> é fazer a multiplicação da Taxa Basal pelo seu <strong>Nível de Atividade Física (NAF)</strong>. Seja brutalmente honesto consigo mesmo nesta etapa: uma hora de musculação leve, seguida de 10 horas sentado em um escritório, não o torna uma pessoa "Muito Ativa". O conceito de NEAT (Termogênese das Atividades Não Ligadas ao Exercício) pesa muito aqui. Multiplique a sua TMB pelos índices clássicos definidos por pesquisadores:
          </p>

          {/* TABELA NAF DESKTOP */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Nível de Atividade</th>
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Fórmula do GET</th>
                  <th className="p-4 font-black uppercase text-xs text-slate-800 tracking-widest">Descrição Realista</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Sedentário</td>
                  <td className="p-4 font-black text-green-700 text-base">GET = TMB × 1.20</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Trabalho de escritório, sem atividades físicas sistematizadas ou esforços.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Levemente Ativo</td>
                  <td className="p-4 font-black text-green-700 text-base">GET = TMB × 1.375</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Exercício leve de 1 a 3 dias na semana. Movimentação diária razoável.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Moderado</td>
                  <td className="p-4 font-black text-green-700 text-base">GET = TMB × 1.55</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Exercício moderado de 3 a 5 dias por semana.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 text-sm">Intenso</td>
                  <td className="p-4 font-black text-green-700 text-base">GET = TMB × 1.725</td>
                  <td className="p-4 text-slate-600 font-medium text-sm">Treinos exaustivos diários ou ofícios que exigem esforço físico contínuo.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CARDS NAF MOBILE */}
          <div className="md:hidden space-y-4 mb-12">
            {[
              { titulo: "Sedentário", mult: "TMB × 1.20", desc: "Trabalho de escritório, sem atividades físicas sistematizadas ou esforços." },
              { titulo: "Levemente Ativo", mult: "TMB × 1.375", desc: "Exercício leve de 1 a 3 dias na semana. Movimentação diária razoável." },
              { titulo: "Moderadamente Ativo", mult: "TMB × 1.55", desc: "Exercício moderado de 3 a 5 dias por semana." },
              { titulo: "Muito Ativo / Intenso", mult: "TMB × 1.725", desc: "Treinos exaustivos diários ou ofícios pesados." }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-start gap-4">
                <div className="bg-green-50 text-green-700 p-2 rounded-lg font-black shrink-0 border border-green-100 text-xs">
                  {item.mult}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase m-0 mb-1">{item.titulo}</h4>
                  <p className="text-xs text-slate-600 font-medium m-0 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="regra-de-bolso" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <Apple className="text-green-700 shrink-0" size={32} /> A Regra de Bolso: Estimativa Rápida para Consultório
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-6">
            Para feiras de saúde, triagens hospitalares rápidas ou avaliações de corredor, onde o tempo para equações complexas é escasso, nós nutricionistas utilizamos a famosa "Regra de Bolso". Para descobrir de forma estimada <strong>como calcular meu GET</strong> a partir do peso bruto, basta pegar o seu peso em kg e multiplicar pelas constantes energéticas (kcal) da faixa do seu objetivo. Exemplo: um homem de 80kg que busca hipertrofia: 80 * 35 = 2800 kcal/dia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 text-center shadow-sm">
              <h4 className="text-blue-900 font-black uppercase text-sm tracking-widest mb-2 m-0">Déficit (Perda)</h4>
              <span className="text-3xl font-black italic text-blue-700 block mb-2">20 a 25 kcal</span>
              <p className="text-xs text-blue-800 font-medium m-0">Multiplicado pelo Peso (kg).</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
              <h4 className="text-slate-900 font-black uppercase text-sm tracking-widest mb-2 m-0">Manutenção</h4>
              <span className="text-3xl font-black italic text-slate-700 block mb-2">25 a 30 kcal</span>
              <p className="text-xs text-slate-600 font-medium m-0">Multiplicado pelo Peso (kg).</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-3xl p-6 text-center shadow-sm">
              <h4 className="text-green-900 font-black uppercase text-sm tracking-widest mb-2 m-0">Hipertrofia (Ganho)</h4>
              <span className="text-3xl font-black italic text-green-700 block mb-2">30 a 35 kcal</span>
              <p className="text-xs text-green-800 font-medium m-0">Multiplicado pelo Peso (kg).</p>
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
                Quer ir além das estimativas matemáticas manuais? Acesse nossa ferramenta gratuita e robusta. Ela automatiza toda a equação de Mifflin, leva em conta macros, e distribui as proporções ideais para a sua dieta estruturada.
              </p>
              <Link 
                to="/calculadora-de-gasto-calorico"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] no-underline"
                aria-label="Acessar calculadora de gasto calórico avançada"
              >
                Acessar Calculadora Exclusiva
              </Link>
            </div>
          </div>

          {/* Calculadora In-Page React */}
          <h2 id="calculadora-get" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-8 flex items-center gap-3">
            <Calculator className="text-green-700 shrink-0" size={32} /> Simulador Prático do GET (Mifflin-St Jeor)
          </h2>

          <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-6 md:p-10 shadow-xl mb-16">
            <form onSubmit={calcularGET} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="col-span-1">
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-sexo">Sexo Biológico</label>
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
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-peso">Peso Total (kg)</label>
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
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-altura">Estatura (cm)</label>
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
                <label className="block text-xs font-black uppercase text-slate-600 tracking-widest mb-2" htmlFor="calc-naf">Fator de Multiplicação NAF</label>
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
                  Descobrir Meu GET Oficial
                </button>
              </div>
            </form>

            {/* Resultado da Calculadora Interna */}
            {resultado && (
              <div className="mt-10 bg-green-50 border border-green-200 rounded-[2rem] p-8 text-center animate-fade-in shadow-inner">
                <div className="flex flex-col items-center justify-center gap-2 mb-6 border-b border-green-200 pb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-green-800">Resultado: O Seu Gasto Energético Total (GET)</span>
                  <span className="text-5xl md:text-6xl font-black italic text-green-700 drop-shadow-sm">{resultado.get} <span className="text-2xl text-green-800">kcal</span></span>
                  <p className="text-sm text-green-900 font-medium m-0 mt-2">Você gasta essa energia exata diariamente para manter o peso atual.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">A Sua TMB (Basal)</span>
                    <strong className="text-lg text-slate-800">{resultado.tmb} kcal/dia</strong>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-green-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Para Emagrecimento (-500 kcal)</span>
                    <strong className="text-lg text-blue-700">{resultado.perda} kcal/dia</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          <h2 id="video-especialista" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-6 flex items-center gap-3">
            <PlayCircle className="text-green-700 shrink-0" size={32} /> Visão Crítica: Dudu Haluch Explica o Gasto Calórico
          </h2>
          <p className="text-slate-700 font-medium leading-relaxed mb-8">
            Para enriquecer sua base teórica e não depender de <Link to="/a_balanca_de_bioimpedancia_e_confiavel" className="text-green-700 font-bold underline">exames de bioimpedância que utilizam fórmulas de software obscuras</Link>, indico este vídeo espetacular do Dudu Haluch, grande referência na nutrição esportiva e professor da Pós-Graduação na Uniguaçú. Ele destrincha com rigor por que a termogênese das atividades não relacionadas ao exercício (o chamado NEAT) pode ter uma importância colossal, muitas vezes até superior à própria sessão de musculação na hora de contabilizar o GET. 
          </p>

          <div className="bg-green-50 rounded-[3rem] p-6 md:p-10 shadow-inner border border-green-100 mb-16">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <YouTubeLazy videoId="hzC7GWcGaXo" title="Como calcular o gasto calórico - Dudu Haluch - UNIGUAÇU" />
            </div>
          </div>

          {/* Afiliado: Planilha Antropométrica */}
          <div id="afiliado" className="my-16 bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(22,163,74,0.1)]">
            <div className="absolute top-0 right-0 bg-green-700 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[10px] tracking-widest shadow-md z-10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-white" />
              <span>Pingus Indica e Aprova</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-4 relative z-10">
              <div className="w-full max-w-[220px] shrink-0">
                <div className="relative bg-slate-50 p-2 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden aspect-[4/3]">
                  <img 
                    src={planilhaImg} 
                    alt="Planilha Antropométrica Exclusiva de Nutrição desenvolvida pelo Marco Aurélio para o cálculo automatizado de macros, dobras cutâneas e avaliação física completa." 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                    width="220"
                    height="165"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic m-0">
                  Planilha Antropométrica Oficial: <span className="text-green-700">Automação Completa para Nutricionistas e Pacientes</span>
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium">
                  Se você é estudante de nutrição em busca de precisão clínica, ou alguém que detesta perder horas fazendo os cálculos da dieta na mão, eu criei a <strong>Planilha Definitiva</strong> baseada nos estritos ensinamentos da certificação internacional ISAK. Com ela, você digita os dados e o sistema calcula instantaneamente sua <Link to="/o_que_e_antropometria" className="text-green-700 font-bold underline">antropometria completa</Link>, % de gordura por somatória de dobras e o Gasto Calórico Total exato em poucos cliques, sem planilhas de Excel travadas.
                </p>
                <div className="flex justify-center md:justify-start">
                  <a 
                    href="https://www.nutricaocommarco.com.br/planilha" 
                    rel="noopener noreferrer" 
                    target="_blank"
                    aria-label="Adquirir a Planilha Antropométrica Oficial"
                    className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl hover:bg-green-800 transition-all duration-300 italic no-underline"
                  >
                    <ShoppingCart size={16} />
                    Adquirir Planilha Agora
                  </a>
                </div>
              </div>
            </div> 
          </div>

          <div id="conclusao" className="bg-blue-50 border border-blue-200 rounded-3xl p-8 mb-16 shadow-sm">
            <h3 className="text-xl font-black text-blue-900 italic uppercase mb-4 m-0">Conclusão Final da Análise</h3>
            <p className="text-blue-800 font-medium leading-relaxed m-0 text-sm md:text-base">
              Aprender <strong>como calcular o GET</strong> não é apenas uma curiosidade matemática restrita aos consultórios; mas sim o passaporte definitivo para a sua libertação de dietas restritivas, ineficazes e sem respaldo científico. Quando você sabe com precisão o quanto o seu corpo demanda de combustível para existir (TMB) e para se movimentar (NAF/NEAT), é plenamente possível elaborar um déficit ou superávit calórico inteligente, mantendo a ingestão de macronutrientes alinhada. Use nossas fórmulas de Mifflin-St Jeor, aplique o fator de atividade física com sinceridade analítica e blinde o seu metabolismo contra o efeito sanfona, construindo resultados consistentes a longo prazo!
            </p>
          </div>

          <h2 id="faq" className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mt-16 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
            <Activity className="text-green-700 shrink-0" size={32} /> Dúvidas Frequentes sobre Cálculo Calórico
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

          <Newsletter />
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        {/* Cartão do Autor */}
        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <img 
              src={fotoAutor} 
              alt="Marco Aurélio Jr. - Avaliador Antropométrico ISAK 1" 
              title="Marco Aurélio Jr. - Estudante de Nutrição ISAK 1"
              className="w-full h-full object-cover"
              loading="lazy"
              width="96"
              height="96"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1 m-0">Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Estudante de Nutrição Clínica • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-sm md:text-base">
              Como avaliador antropométrico certificado internacionalmente, trabalho ensinando você a entender a própria composição e os cálculos reais do seu metabolismo, combatendo as falácias da internet. Longe dos mitos do emagrecimento fácil e do terrorismo nutricional, meu objetivo diário é trazer extrema clareza matemática e respaldo da fisiologia para que você assuma o controle da sua dieta e alcance resultados saudáveis.
            </p>
            <a 
              href="https://instagram.com/nutricao_com_marco" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest shadow-md hover:bg-green-800 transition-all italic no-underline"
              aria-label="Siga o autor e receba dicas diárias no Instagram"
            >
              Siga @nutricao_com_marco
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}