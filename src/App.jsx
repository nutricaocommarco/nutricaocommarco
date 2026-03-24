import React, { useState, useEffect } from 'react'; // Corrigido de 'Import' para 'import'
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
import InscricaoConfirmada from './pages/InscricaoConfirmada';
import RetatrutidaOQueE from './pages/retratrutida'; 

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
    link.href = `${githubImgBase}logoN_pingus.png`;

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const baseUrl = 'https://www.nutricaocommarco.com.br';

    const seoData = {
      '/': { title: 'Nutrição com Marco | Performance e Ciência', desc: 'Especialista em Nutrição e Antropometria no RJ e Online.' },
      '/sobre': { title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco', desc: 'Conheça a história de Marco Aurélio Jr.' },
      '/retatrutida_o_que_e': {
        title: 'Retatrutida o que é? A nova fronteira da ciência | Nutrição com Marco',
        desc: 'Descubra o que é a retatrutida e seus resultados na perda de peso.'
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

    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-green-50 to-white flex flex-col selection:bg-green-200">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo Pingus" className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain" />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">NUTRIÇÃO COM <span className="text-green-600">MARCO</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className="text-slate-800 hover:text-green-600">Início</Link>
            <Link to="/sobre" className="text-slate-800 hover:text-green-600">Sobre</Link>
            <Link to="/blog" className="text-slate-800 hover:text-green-600">Blog</Link>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full italic">Instagram</a>
          </div>
        </div>
      </nav>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-20 text-center mt-auto">
        <div className="container mx-auto px-6">
          <p className="text-slate-600 text-xs font-bold uppercase">© 2026 Nutrição com Marco • Rio de Janeiro</p>
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
            <Route path="/certificacoes" element={<Certificacoes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/retatrutida_o_que_e" element={<RetatrutidaOQueE />} />
            {/* Outras rotas permanecem aqui */}
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

