import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Instagram, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowUpRight,
  MapPin,
  Mail,
  Zap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Certificações', href: '#conquistas' },
    { name: 'E-books', href: '#ebooks' }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-green-50 to-white selection:bg-green-200">
      {/* Navegação */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform">M</div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              NUTRIÇÃO COM <span className="text-green-600">MARCO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold hover:text-green-600 transition-colors uppercase tracking-wider">{link.name}</a>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
              <Instagram size={18} /> @Nutricao_com_Marco
            </a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section - Estilo Visual Personalizado */}
      <header id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left z-10">
              <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm border border-green-200">
                Estudante de Nutrição • Unicesumar
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight text-white" 
                  style={{ WebkitTextStroke: '4px #1e3a8a', textShadow: '4px 4px 0px #1e3a8a' }}>
                NUTRIÇÃO <br/> COM CIÊNCIA
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
                Simplificando a alimentação e transformando vidas através de evidências científicas. Conheça meu trabalho e meus materiais exclusivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#ebooks" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl group">
                  Ver Meus E-books <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-green-200 rounded-[3rem] rotate-3 relative overflow-hidden shadow-2xl border-4 border-white">
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold">
                  [Sua Foto Profissional Aqui]
                </div>
              </div>
              {/* Badge ISAK */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black">1</div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">Certificação</p>
                  <p className="font-black text-slate-800">ISAK Level 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Sobre */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">OI, SOU O MARCO AURELIO JR.</h2>
              <div className="w-20 h-2 bg-green-600 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Estudante do 2º ano de Nutrição na Unicesumar, sou apaixonado por antropometria e performance. Acredito que a nutrição deve ser prática, acessível e, acima de tudo, humana.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-green-600">Foco</h4>
                  <p className="text-sm">Antropometria</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-green-600">Local</h4>
                  <p className="text-sm">Rio de Janeiro</p>
                </div>
              </div>
            </div>
            <div className="bg-green-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <Zap className="absolute -top-10 -right-10 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Minha Missão</h3>
              <p className="text-green-50 text-lg leading-relaxed mb-6">
                "Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold italic">Pingus</div>
                 <span className="font-medium">Mascote Oficial da Marca</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-books */}
      <section id="ebooks" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">MEUS MATERIAIS</h2>
            <p className="text-slate-500">Conteúdo prático para facilitar a sua jornada nutricional.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Limite de Cafeína", desc: "O que a ANVISA diz sobre o consumo seguro.", status: "Grátis", icon: <Zap /> },
              { title: "Manual de Antropometria", desc: "Conceitos básicos para estudantes.", status: "Em breve", icon: <Award /> },
              { title: "Guia de Marmitas", desc: "Praticidade para a sua semana.", status: "Em breve", icon: <BookOpen /> }
            ].map((ebook, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {ebook.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{ebook.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{ebook.desc}</p>
                <span className="text-xs font-black uppercase tracking-widest text-green-600">{ebook.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center font-bold">M</div>
            <span className="text-lg font-black tracking-tighter uppercase">Nutrição com Marco</span>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://instagram.com/nutricao_com_marco" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-all"><Instagram size={20}/></a>
            <a href="mailto:contato@nutricaomarco.com" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-all"><Mail size={20}/></a>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Nutrição com Marco • Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
