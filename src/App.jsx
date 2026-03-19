import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X, Mail } from 'lucide-react';

// Importando as páginas
import Home from './pages/Home';
import Certificacoes from './pages/Certificacoes';
import Blog from './pages/Blog';
import Antropometria from './pages/Antropometria';
import Bioimpedancia from './pages/Bioimpedancia';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const baseUrl = 'https://nutricaocommarco.vercel.app';
    const seoData = {
      '/': { title: 'Nutrição com Marco | Performance e Ciência', desc: 'Especialista em Nutrição e Antropometria no RJ e Online.' },
      '/certificacoes': { title: 'Currículo e Certificações | Nutrição com Marco', desc: 'Conheça a trajetória técnica e as certificações ISAK.' },
      '/blog': { title: 'Blog de Nutrição e Ciência | Nutrição com Marco', desc: 'Conteúdo científico sobre antropometria e saúde.' },
      '/o_que_e_antropometria': { title: 'O que é Antropometria? | Nutrição com Marco', desc: 'Descubra como a avaliação física ISAK revela sua real composição.' },
      '/a_balanca_de_bioimpedancia_e_confiavel': { title: 'A bioimpedância é confiável? | Nutrição com Marco', desc: 'Entenda como funciona a balança de bioimpedância.' }
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
    canonicalLink.href = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className={`fixed w-full z-50 transition-all ${scrolled || location.pathname !== '/' ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-slate-900 uppercase">Nutrição com Marco</span>
          </Link>
          <div className="hidden md:flex gap-6 font-bold uppercase text-sm">
            <Link to="/">Início</Link>
            <Link to="/certificacoes">Certificações</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <main className="flex-grow pt-20">{children}</main>
      <footer className="bg-slate-900 text-white py-10 text-center">
        <p>© 2026 Nutrição com Marco</p>
      </footer>
    </div>
  );
}

// AQUI ESTÁ A MUDANÇA: Exportação explícita e direta
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificacoes" element={<Certificacoes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/o_que_e_antropometria" element={<Antropometria />} />
          <Route path="/a_balanca_de_bioimpedancia_e_confiavel" element={<Bioimpedancia />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
