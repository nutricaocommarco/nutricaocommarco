import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X, Mail } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';

// Importando as páginas exclusivas
import Home from './pages/Home';
import Certificacoes from './pages/Certificacoes';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Planos from './pages/Planos';
import Antropometria from './pages/Antropometria';
import Bioimpedancia from './pages/Bioimpedancia';
import VitaminaA from './pages/VitaminaA';
import Frutose from './pages/Frutose';
import EfeitoSanfona from './pages/EfeitoSanfona';
import Eritropoetina from './pages/Eritropoetina';
import Feijao from './pages/Feijao';
import HormoniosFome from './pages/HormoniosFome';
import Ironman703 from './pages/Ironman703';
import GeradorEmailSecreto from './pages/GeradorEmailSecreto';
import MelhorHorarioPesagem from './pages/MelhorHorarioPesagem';
import BeterrabaDiabetes from './pages/BeterrabaDiabetes';
import ConfirmacaoPendente from './pages/kitkit'; 
import RetatrutidaOQueE from './pages/Retatrutida';
import InscricaoConfirmada from './pages/InscricaoConfirmada';
import OvoColesterol from './pages/ovoecolesterol'; 
import TirzepatidaParaQueServe from './pages/tirzepatidapraqueserve'; 
import FomeEmocional from './pages/oqueefomeemocional';
import Prebioticos from './pages/prebioticos'; 
import Probioticos from './pages/Probioticos'; 
import Simbioticos from './pages/Simbioticos'; // Nova Página 

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png';

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const baseUrl = 'https://www.nutricaocommarco.com.br';

    const seoData = {
      '/': { 
        title: 'Nutrição com Marco | Performance e Ciência', 
        desc: 'Especialista em Nutrição e Antropometria no RJ e Online. Performance física e saúde baseada em evidências científicas.' 
      },
      '/sobre': { 
        title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco', 
        desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista, fotógrafo esportivo e especialista em avaliação física ISAK 1 no Rio de Janeiro.' 
      },
      '/confirmacao-pendente': {
        title: 'Quase lá! Confirme seu e-mail | Nutrição com Marco',
        desc: 'Falta apenas um clique para confirmar sua inscrição e receber nossos conteúdos exclusivos.'
      },
      '/inscricao-confirmada': { 
        title: 'Inscrição Confirmada! | Nutrição com Marco',
        desc: 'Tudo pronto! Você agora faz parte da nossa comunidade de nutrição e antropometria.'
      },
      '/retatrutida_o_que_e': {
        title: 'Retatrutida o que é? A nova fronteira da ciência | Nutrição com Marco',
        desc: 'Descubra o que é a retatrutida, o novo medicamento agonista triplo (GLP-1, GIP e Glucagon) e seus resultados na perda de peso.'
      },
'/ovo_e_colesterol': {
        title: 'Ovo e Colesterol: Benefícios, Mitos e Verdades Científicas | Nutrição com Marco',
        desc: 'Comer ovo todo dia faz mal? Quem tem gordura no fígado pode comer? Desvendamos tudo com base em estudos científicos atualizados.'
      },
      '/tirzepatida-para-que-serve': {
        title: 'Tirzepatida: Para que serve? Emagrecimento, Mounjaro e Rebote | Nutrição com Marco',
        desc: 'Descubra para que serve a Tirzepatida (Mounjaro), como funciona no emagrecimento, quanto peso se perde e como evitar o temido efeito rebote.'
      },
      '/o-que-e-fome-emocional': {
        title: 'O que é Fome Emocional? Diferenças e Como Controlar | Nutrição com Marco',
        desc: 'Entenda o que é fome emocional, como diferenciá-la da fome física e estratégias práticas para lidar com o impulso de comer por emoção.'
      },
      '/o-que-sao-prebioticos': { 
        title: 'O que são Prebióticos? Alimentos e Benefícios | Nutrição com Marco', 
        desc: 'Descubra o que são prebióticos, para que servem no seu intestino, quais alimentos são fontes naturais e como eles blindam a sua flora intestinal.' 
      },
      '/o-que-sao-probioticos': { 
        title: 'O que são Probióticos? Lactobacillus e Benefícios | Nutrição com Marco', 
        desc: 'Descubra o que são probióticos e Lactobacillus, para que servem no intestino, seus benefícios para a imunidade e quais as melhores fontes naturais.' 
      },
      '/o-que-sao-simbioticos': { 
  title: 'O que são Simbióticos? A Sinergia Intestinal | Nutrição com Marco', 
  desc: 'Descubra o que são os alimentos simbióticos, como a união de prebióticos e probióticos transforma a sua flora e as melhores combinações.' 
}
    };

    const currentSEO = seoData[location.pathname] || seoData['/'];
    document.title = currentSEO.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = currentSEO.desc;

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    canonicalLink.href = `${baseUrl}${cleanPath}`;

    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-green-50 to-white flex flex-col selection:bg-green-200">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo Pingus" title="Nutrição com Marco - Fisiologia, Composição Corporal e Saúde" className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain" />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">NUTRIÇÃO COM <span className="text-green-600">MARCO</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className={`py-1 border-b-2 transition-all ${location.pathname === '/' ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Início</Link>
            <Link to="/sobre" className={`py-1 border-b-2 transition-all ${location.pathname === '/sobre' ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Sobre</Link>
            <Link to="/certificacoes" className={`py-1 border-b-2 transition-all ${location.pathname === '/certificacoes' ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Certificações</Link>
            <Link to="/blog" className={`py-1 border-b-2 transition-all ${location.pathname.includes('/blog') ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Blog</Link>
            <Link to="/planos" className={`py-1 border-b-2 transition-all ${location.pathname === '/planos' ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Planos</Link>
            <a href="/#ebooks" className="py-1 border-b-2 border-transparent text-slate-800 hover:text-green-600 transition-all">E-books</a>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md italic">Instagram</a>
          </div>
          <button className="md:hidden text-slate-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-green-100 shadow-xl py-6 px-6 flex flex-col gap-6">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Início</Link>
            <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Sobre</Link>
            <Link to="/certificacoes" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Certificações</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Blog</Link>
            <Link to="/planos" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">Planos</Link>
            <a href="/#ebooks" onClick={() => setIsMenuOpen(false)} className="text-lg font-black uppercase tracking-widest pb-2 border-b text-slate-800">E-books</a>
          </div>
        )}
      </nav>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-20 text-center mt-auto">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="flex items-center justify-center gap-3 mb-10 group">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo" title="Nutrição com Marco - Fisiologia, Composição Corporal e Saúde" className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform" />
            <span className="text-xl font-black uppercase italic tracking-tighter text-white">Nutrição com Marco</span>
          </Link>
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10 text-white"><Instagram size={24}/></a>
            <a href="mailto:nutricaocommarco@gmail.com" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10 text-white"><Mail size={24}/></a>
          </div>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-1">#NutriçãoComCiência #Antropometria #ISAK1 #ConsultaOnline</p>
          <p className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase">© 2026 Nutrição com Marco • Rio de Janeiro</p>
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
          </Routes>
        </Layout>
      </Router>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,900;1,900&display=swap');
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
