import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X, Mail } from 'lucide-react';

// IMPORTANTE: Verifique se na sua pasta /pages os nomes são exatamente esses
import Home from './pages/Home';
import Certificacoes from './pages/Certificacoes';
import Blog from './pages/Blog';
import Antropometria from './pages/Antropometria';
import Bioimpedancia from './pages/Bioimpedancia';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className={`fixed w-full z-50 transition-all ${scrolled || location.pathname !== '/' ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex font-bold uppercase tracking-tighter text-slate-900 items-center gap-2">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo" className="w-10 h-10" />
            <span>Nutrição com Marco</span>
          </Link>
          <div className="hidden md:flex gap-8 font-bold uppercase text-xs tracking-widest">
            <Link to="/">Início</Link>
            <Link to="/certificacoes">Certificações</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <main className="flex-grow pt-20">{children}</main>
      <footer className="bg-slate-900 text-white py-10 text-center uppercase text-xs font-bold tracking-widest">
        <p>© 2026 Nutrição com Marco</p>
      </footer>
    </div>
  );
}

// DEFINIÇÃO DA FUNÇÃO
function App() {
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
}

// EXPORTAÇÃO ÚNICA E NO FINAL (Para evitar o erro do Rollup)
export default App;
