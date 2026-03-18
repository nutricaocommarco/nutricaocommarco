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

export default function App() {
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
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase">
              NUTRIÇÃO COM <span className="text-green-600">MARCO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold hover:text-green-600 transition-colors uppercase tracking-wider">{link.name}</a>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
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
              <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">
                Estudante de Nutrição • Unicesumar
              </span>
              {/* Estilo Canva: Contorno azul grosso e sombra */}
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-white italic" 
                  style={{ WebkitTextStroke: '4px #1e3a8a', textShadow: '5px 5px 0px #1e3a8a' }}>
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
              {/* Moldura para a foto */}
              <div className="w-full aspect-[4/5] max-w-md mx-auto bg-white p-3 rounded-[2.5rem] rotate-2 shadow-2xl border border-slate-100 overflow-hidden">
                <img 
                  src="Imagens/marco-aurelio.jpg" 
                  alt="Marco Aurélio Jr. Nutricionista" 
                  className="w-full h-full object-cover rounded-[2rem] -rotate-2 scale-105 transition-transform hover:scale-110 duration-500"
                />
              </div>
              
              {/* Badge Flutuante de Certificação */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-inner">1</div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400">Certificação</p>
                  <p className="font-black text-slate-800 text-lg">ISAK Level 1</p>
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
              <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic">Olá, sou o Marco Aurélio Jr.👋</h2>
              <div className="w-20 h-2 bg-green-600 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sou estudante do 2º ano de Nutrição na Unicesumar e um entusiasta da antropometria. Acredito que a nutrição deve ser prática, acessível e, acima de tudo, humana.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-green-600 uppercase text-sm mb-1">Foco</h4>
                  <p className="font-bold text-slate-700">Antropometria</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-black text-green-600 uppercase text-sm mb-1">Local</h4>
                  <p className="font-bold text-slate-700">Rio de Janeiro</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
              <Zap className="absolute -top-10 -right-10 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              <h3 className="text-2xl font-black mb-6 uppercase italic">Minha Missão</h3>
              <p className="text-green-50 text-xl leading-relaxed mb-10 font-medium">
                "Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center font-black italic text-xs border border-white/30">PINGUS</div>
                 <span className="font-bold uppercase tracking-widest text-sm">Mascote Oficial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-books */}
      <section id="ebooks" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">E-books pensados na sua evolução</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Limite de Cafeína", desc: "O que a ANVISA diz sobre o consumo seguro.", status: "Grátis", icon: <Zap />, color: "green" },
              { title: "Manual de Antropometria", desc: "Conceitos básicos para estudantes.", status: "Em breve", icon: <Award />, color: "blue" },
              { title: "Guia de Marmitas", desc: "Praticidade para a sua semana.", status: "Em breve", icon: <BookOpen />, color: "orange" }
            ].map((ebook, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-${ebook.color}-100 text-${ebook.color}-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                  {ebook.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-800">{ebook.title}</h3>
                <p className="text-slate-500 font-medium mb-8 italic">{ebook.desc}</p>
                <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${ebook.status === 'Grátis' ? 'bg-green-600 text-white shadow-md' : 'bg-slate-200 text-slate-500'}`}>
                  {ebook.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center font-black text-xl">M</div>
            <span className="text-xl font-black tracking-tighter uppercase italic">Nutrição com Marco</span>
          </div>
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://instagram.com/nutricao_com_marco" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10"><Instagram size={24}/></a>
            <a href="mailto:contato@nutricaomarco.com" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10"><Mail size={24}/></a>
          </div>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-1">#NutriçãoComCiência #Antropometria #ISAK1</p>
          <p className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase">© 2026 Nutrição com Marco • Rio de Janeiro</p>
        </div>
      </footer>
      
      {/* Estilos CSS extras para animações */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
