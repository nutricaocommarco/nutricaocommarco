import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X, Mail, ChevronDown, Store, Calculator, BookOpen, Flame, Rocket } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import Loja from './pages/Loja_do_Pingus/Loja';
import ProdutoDetalhe from './pages/Loja_do_Pingus/ProdutoDetalhe';

const lazyRetry = (importFn) => {
  return lazy(async () => {
    try {
      return await importFn();
    } catch (err) {
      window.location.reload();
      return { default: () => null };
    }
  });
};

const Home = lazyRetry(() => import('./pages/Home'));
const Certificacoes = lazyRetry(() => import('./pages/Certificacoes')); 
const Sobre = lazyRetry(() => import('./pages/Sobre'));
const Blog = lazyRetry(() => import('./pages/Blog'));
const Planos = lazyRetry(() => import('./pages/Planos'));
const Antropometria = lazyRetry(() => import('./pages/Antropometria'));
const Bioimpedancia = lazyRetry(() => import('./pages/Bioimpedancia'));
const VitaminaA = lazyRetry(() => import('./pages/VitaminaA'));
const Frutose = lazyRetry(() => import('./pages/Frutose'));
const EfeitoSanfona = lazyRetry(() => import('./pages/EfeitoSanfona'));
const Eritropoetina = lazyRetry(() => import('./pages/Eritropoetina'));
const Feijao = lazyRetry(() => import('./pages/Feijao'));
const HormoniosFome = lazyRetry(() => import('./pages/HormoniosFome'));
const Ironman703 = lazyRetry(() => import('./pages/Ironman703'));
const GeradorEmailSecreto = lazyRetry(() => import('./pages/GeradorEmailSecreto'));
const MelhorHorarioPesagem = lazyRetry(() => import('./pages/MelhorHorarioPesagem'));
const BeterrabaDiabetes = lazyRetry(() => import('./pages/BeterrabaDiabetes'));
const ConfirmacaoPendente = lazyRetry(() => import('./pages/kitkit')); 
const RetatrutidaOQueE = lazyRetry(() => import('./pages/Retatrutida'));
const InscricaoConfirmada = lazyRetry(() => import('./pages/InscricaoConfirmada'));
const OvoColesterol = lazyRetry(() => import('./pages/ovoecolesterol')); 
const TirzepatidaParaQueServe = lazyRetry(() => import('./pages/tirzepatidapraqueserve')); 
const FomeEmocional = lazyRetry(() => import('./pages/oqueefomeemocional'));
const Prebioticos = lazyRetry(() => import('./pages/prebioticos')); 
const Probioticos = lazyRetry(() => import('./pages/Probioticos')); 
const Simbioticos = lazyRetry(() => import('./pages/Simbioticos')); 
const CicloCircadiano = lazyRetry(() => import('./pages/CicloCircadiano'));
const Melatonina = lazyRetry(() => import('./pages/Melatonina'));
const TpmeAlimentacao = lazyRetry(() => import('./pages/TpmeAlimentacao'));
const CalculadoraGastoCalorico = lazyRetry(() => import('./pages/CalculadoraGastoCalorico')); 
const QuantasCaloriasGasto = lazyRetry(() => import('./pages/QuantasCaloriasGasto'));
const PercentualGorduraFeminino = lazyRetry(() => import('./pages/PercentualGorduraFeminino'));
const HorarioFerro = lazyRetry(() => import('./pages/HorarioFerro'));
const ConfirmacaoAvAntropometrica = lazyRetry(() => import('./pages/ConfirmacaoAvAntropometrica'));
const InatividadeZero = lazyRetry(() => import('./pages/InatividadeZero'));
const PlanilhaAntropometriaVendas = lazyRetry(() => import('./pages/PlanilhaAntropometricaMarcoAurelio'));
const JejumIntermitente = lazyRetry(() => import('./pages/JejumIntermitente'));
const DietaCetogenica = lazyRetry(() => import('./pages/DietaCetogenica'));
const DietaLowCarb = lazyRetry(() => import('./pages/DietaLowCarb'));
const DietaMediterranea = lazyRetry(() => import('./pages/DietaMediterranea'));
const ComoGanharTempoCozinha = lazyRetry(() => import('./pages/ComoGanharTempoCozinha'));
const EbookReceitas = lazyRetry(() => import('./pages/Ebook-Receitas'));
const ComoCalcularMeuGet = lazyRetry(() => import('./pages/ComoCalcularMeuGet'));
const AvaliacaoAntropometrica = lazyRetry(() => import('./pages/AvaliacaoAntropometrica'));
const SoftwareAvaliacaoAntropometrica = lazyRetry(() => import('./pages/SoftwareAvaliacaoAntropometrica'));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen text-green-700 font-black">
    Carregando...
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
      
    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsMenuOpen(false);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-green-50 to-white flex flex-col selection:bg-green-200">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logoN_pingus.webp" alt="Logo Pingus" title="Nutrição com Marco - Fisiologia, Composição Corporal e Saúde" className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain" />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">NUTRIÇÃO COM <span className="text-green-700">MARCO</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className={`py-1 border-b-2 transition-all ${location.pathname === '/' ? 'text-green-700 border-green-600' : 'text-slate-800 border-transparent hover:text-green-700'}`}>Início</Link>

            <div className="relative group">
              <span className={`cursor-pointer py-1 border-b-2 transition-all flex items-center gap-1 ${['/sobre', '/certificacoes'].includes(location.pathname) ? 'text-green-700 border-green-600' : 'text-slate-800 border-transparent group-hover:text-green-700'}`}>
                Sobre <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </span>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-green-100 shadow-xl rounded-xl py-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50">
                <Link to="/sobre" className={`px-5 py-2 text-sm font-bold transition-all ${location.pathname === '/sobre' ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'}`}>Quem Sou Eu</Link>
                <Link to="/certificacoes" className={`px-5 py-2 text-sm font-bold transition-all ${location.pathname === '/certificacoes' ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'}`}>Certificações</Link>
              </div>
            </div>

            <Link to="/blog" className={`py-1 border-b-2 transition-all ${location.pathname.includes('/blog') ? 'text-green-700 border-green-600' : 'text-slate-800 border-transparent hover:text-green-700'}`}>Blog</Link>
            <Link to="/planos" className={`py-1 border-b-2 transition-all ${location.pathname === '/planos' ? 'text-green-700 border-green-600' : 'text-slate-800 border-transparent hover:text-green-700'}`}>Planos</Link>

            {/* DROPDOWN LOJA E FERRAMENTAS */}
            <div className="relative group">
              <span className={`cursor-pointer py-1 border-b-2 transition-all flex items-center gap-1 ${['/loja', '/calculadora-de-gasto-calorico', '/planilha', '/ebook-receitas', '/software-de-avaliacao-antropometrica'].some(path => location.pathname.startsWith(path)) ? 'text-green-700 border-green-600' : 'text-slate-800 border-transparent group-hover:text-green-700'}`}>
                Loja <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </span>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-green-100 shadow-xl rounded-xl py-3 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50">
                <Link to="/loja" className={`px-5 py-2.5 text-sm font-black transition-all border-b border-slate-100 flex items-center gap-2 ${location.pathname === '/loja' ? 'text-green-700 bg-green-50' : 'text-slate-900 hover:text-green-700 hover:bg-slate-50'}`}>
                  <Store size={16} className="text-green-700" /> Ver Toda a Loja
                </Link>
                <Link to="/software-de-avaliacao-antropometrica" className={`px-5 py-2.5 text-sm font-bold transition-all flex items-center gap-2 ${location.pathname === '/software-de-avaliacao-antropometrica' ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'}`}>
                  <Rocket size={16} className="text-emerald-600" /> Software Antropometria (EvaluaOS)
                </Link>
                <Link to="/calculadora-de-gasto-calorico" className={`px-5 py-2 text-sm font-bold transition-all flex items-center gap-2 ${location.pathname === '/calculadora-de-gasto-calorico' ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'}`}>
                  <Calculator size={16} className="text-green-700" /> Gasto Calórico (Grátis)
                </Link>
                <Link to="/ebook-receitas" className={`px-5 py-2 text-sm font-bold transition-all flex items-center gap-2 ${location.pathname === '/ebook-receitas' ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'}`}>
                  <BookOpen size={16} className="text-green-700" /> E-book de Receitas
                </Link>
                <Link to="/planilha" className={`px-5 py-2 text-sm font-bold transition-all flex items-center gap-2 ${location.pathname === '/planilha' ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-slate-50'}`}>
                  <Flame size={16} className="text-green-700" /> Planilha Antropométrica (VBA)
                </Link>
              </div>
            </div>

            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-700 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md italic">Instagram</a>
          </div>

          <button 
            className="md:hidden text-slate-800 p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-green-100 shadow-xl py-6 px-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Início</Link>

            <div className="flex flex-col gap-3 pb-2 border-b border-green-50">
              <span className="text-lg font-black uppercase tracking-widest text-slate-800">Sobre</span>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-green-200">
                <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="text-base font-bold uppercase tracking-widest text-slate-600 hover:text-green-700">Quem Sou Eu</Link>
                <Link to="/certificacoes" onClick={() => setIsMenuOpen(false)} className="text-base font-bold uppercase tracking-widest text-slate-600 hover:text-green-700">Certificações</Link>
              </div>
            </div>

            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Blog</Link>
            <Link to="/planos" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Planos</Link>

            <div className="flex flex-col gap-3 pb-2 border-b border-green-50">
              <span className="text-lg font-black uppercase tracking-widest text-slate-800">Loja & Ferramentas</span>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-green-200">
                <Link to="/loja" onClick={() => setIsMenuOpen(false)} className="text-base font-black uppercase tracking-widest text-green-700 flex items-center gap-2">
                  <Store size={18} /> Ver Toda a Loja
                </Link>
                <Link to="/software-de-avaliacao-antropometrica" onClick={() => setIsMenuOpen(false)} className="text-base font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                  <Rocket size={18} /> Software EvaluaOS
                </Link>
                <Link to="/calculadora-de-gasto-calorico" onClick={() => setIsMenuOpen(false)} className="text-base font-bold uppercase tracking-widest text-slate-600 hover:text-green-700 flex items-center gap-2">
                  <Calculator size={18} /> Gasto Calórico (Grátis)
                </Link>
                <Link to="/ebook-receitas" onClick={() => setIsMenuOpen(false)} className="text-base font-bold uppercase tracking-widest text-slate-600 hover:text-green-700 flex items-center gap-2">
                  <BookOpen size={18} /> E-book de Receitas
                </Link>
                <Link to="/planilha" onClick={() => setIsMenuOpen(false)} className="text-base font-bold uppercase tracking-widest text-slate-600 hover:text-green-700 flex items-center gap-2">
                  <Flame size={18} /> Planilha Antropométrica
                </Link>
              </div>
            </div> 

            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all shadow-md italic text-center text-sm font-bold uppercase tracking-widest">Instagram</a>
          </div>
        )}
      </nav>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-20 text-center mt-auto">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="flex items-center justify-center gap-3 mb-10 group">
            <img src="/logoN_pingus.webp" alt="Logo" title="Nutrição com Marco - Fisiologia, Composição Corporal e Saúde" className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform" />
            <span className="text-xl font-black uppercase italic tracking-tighter text-white">Nutrição com Marco</span>
          </Link>
          
          <div className="flex justify-center gap-8 mb-16">
            <a 
              href="https://instagram.com/nutricao_com_marco" 
              target="_blank" 
              rel="noreferrer" 
              className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all duration-300 border border-white/10 text-white"
              aria-label="Acessar o perfil do Instagram de Nutrição com Marco"
            >
              <Instagram size={24}/>
            </a>
            <a 
              href="mailto:contato@nutricaocommarco.com.br" 
              className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all duration-300 border border-white/10 text-white"
              aria-label="Enviar um e-mail de contato para Marco Aurélio"
            >
              <Mail size={24}/>
            </a>
          </div>
          
          <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase mb-1">#NutriçãoComCiência #Antropometria #ISAK1 #ConsultaOnline</p>
          <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">
            © 2026 Nutrição com Marco • Rio de Janeiro
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin-pingus-email" element={<GeradorEmailSecreto />} />
              <Route path="/certificacoes" element={<Certificacoes />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/planos" element={<Planos />} />
              <Route path="/efeito_sanfona_inflamacao_invisivel" element={<EfeitoSanfona />} />
              <Route path="/quantas_frutas_posso_comer" element={<Frutose />} />
              <Route path="/vitamina_a_para_que_serve" element={<VitaminaA />} />
              <Route path="/o_que_e_antropometria" element={<Antropometria />} />
              <Route path="/a_balanca_de_bioimpedancia_e_confiavel" element={<Bioimpedancia />} />
              <Route path="/o_dilema_do_sangue_na_altitude" element={<Eritropoetina />} />
              <Route path="/por_que_o_feijao_da_gases" element={<Feijao />} />
              <Route path="/hormonios_da_fome_emagrecimento" element={<HormoniosFome />} />
              <Route path="/nutricao_para_ironman_703" element={<Ironman703 />} />
              <Route path="/qual_melhor_horario_para_se_pesar" element={<MelhorHorarioPesagem />} />
              <Route path="/diabetico_pode_comer_beterraba" element={<BeterrabaDiabetes />} />
              <Route path="/confirmacao-pendente" element={<ConfirmacaoPendente />} />
              <Route path="/inscricao-confirmada" element={<InscricaoConfirmada />} />
              <Route path="/retatrutida_o_que_e" element={<RetatrutidaOQueE />} />
              <Route path="/comer-ovo-todo-dia-aumenta-o-colesterol" element={<OvoColesterol />} />
              <Route path="/tirzepatida-para-que-serve" element={<TirzepatidaParaQueServe />} />
              <Route path="/o-que-e-fome-emocional" element={<FomeEmocional />} />
              <Route path="/o-que-sao-prebioticos" element={<Prebioticos />} />
              <Route path="/o-que-sao-probioticos" element={<Probioticos />} />
              <Route path="/o-que-sao-simbioticos" element={<Simbioticos />} />
              <Route path="/o-que-e-ciclo-circadiano" element={<CicloCircadiano />} />
              <Route path="/efeitos-colaterais-da-melatonina" element={<Melatonina />} />
              <Route path="/o-que-comer-na-tpm" element={<TpmeAlimentacao />} />
              <Route path="/calculadora-de-gasto-calorico" element={<CalculadoraGastoCalorico />} />
              <Route path="/quantas-calorias-gasto-por-dia" element={<QuantasCaloriasGasto />} />
              <Route path="/percentual-gordura-feminino-ideal" element={<PercentualGorduraFeminino />} />
              <Route path="/melhor-horario-para-tomar-ferro" element={<HorarioFerro />} />
              <Route path="/confirmacao-av-antropometrica" element={<ConfirmacaoAvAntropometrica />} />
              <Route path="/parceria-inatividade-zero" element={<InatividadeZero />} />
              <Route path="/planilha-de-avaliacao-antropometrica-marco-aurelio" element={<PlanilhaAntropometriaVendas />} />
              <Route path="/planilha" element={<PlanilhaAntropometriaVendas />} />
              <Route path="/o-que-e-jejum-intermitente" element={<JejumIntermitente />} />
              <Route path="/o-que-e-dieta-cetogenica" element={<DietaCetogenica />} />
              <Route path="/o-que-e-dieta-low-carb" element={<DietaLowCarb />} />
              <Route path="/o-que-e-dieta-mediterranea" element={<DietaMediterranea />} />
              <Route path="/como-ganhar-tempo-na-cozinha" element={<ComoGanharTempoCozinha />} />
              <Route path="/ebook-receitas" element={<EbookReceitas />} />
              <Route path="/como-calcular-meu-get" element={<ComoCalcularMeuGet />} />
              <Route path="/loja" element={<Loja />} />
              <Route path="/loja/:id" element={<ProdutoDetalhe />} />
              <Route path="/avaliacao-antropometrica" element={<AvaliacaoAntropometrica />} />
              <Route path="/software-de-avaliacao-antropometrica" element={<SoftwareAvaliacaoAntropometrica />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
      
      <style>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes bounce-short { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-bounce-short { animation: bounce-short 1.5s ease-in-out infinite; }
        .titulo-vazado { font-family: 'Poppins', sans-serif; -webkit-text-stroke: 2px #1e3a8a; text-shadow: 3px 3px 0px #1e3a8a; }
        @media (min-width: 768px) { .titulo-vazado { -webkit-text-stroke: 4px #1e3a8a; text-shadow: 5px 5px 0px #1e3a8a; } }
      `}</style>
    </HelmetProvider>
  );
}