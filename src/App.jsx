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
  Zap,
  CheckCircle,
  GraduationCap,
  Calendar,
  Users,
  Dumbbell,
  Target,
  FlaskConical,
  Brain,
  Apple,
  Microscope,
  ShieldCheck,
  Truck,
  Eye,
  BookText,
  Clock,
  Activity,
  Stethoscope,
  ChevronLeft,
  Search,
  PlayCircle,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Configuração dinâmica do Favicon, Título e Meta Description (SEO)
    const setupSEO = () => {
      // Favicon
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png';
      
      // Títulos dinâmicos
      const titles = {
        home: 'Nutrição com Marco | Performance e Ciência',
        certificacoes: 'Currículo e Certificações | Nutrição com Marco',
        blog: 'Blog de Nutrição e Ciência | Nutrição com Marco'
      };
      document.title = titles[currentPage] || titles.home;

      // Meta Description dinâmica para o Google
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }

      const descriptions = {
        home: 'Especialista em Nutrição e Antropometria no Rio de Janeiro e Online. Performance física e saúde baseada em evidências científicas.',
        certificacoes: 'Conheça a trajetória acadêmica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.',
        blog: 'Conteúdo científico sobre antropometria, emagrecimento e fisiologia para transformar a sua saúde.'
      };
      
      if (selectedPost === 'antropometria') {
        metaDesc.content = 'Entenda o que é Antropometria e como a composição corporal revela resultados que a balança não mostra. Ciência aplicada ao emagrecimento.';
      } else {
        metaDesc.content = descriptions[currentPage] || descriptions.home;
      }
    };
    
    setupSEO();

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, selectedPost]);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Certificações', id: 'certificacoes' },
    { name: 'Blog', id: 'blog' },
    { name: 'E-books', id: 'home', hash: '#ebooks' }
  ];

  const handleNavClick = (link) => {
    setCurrentPage(link.id);
    setSelectedPost(null);
    setIsMenuOpen(false);
    if (link.hash) {
      setTimeout(() => {
        const element = document.querySelector(link.hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openPost = (postId) => {
    setSelectedPost(postId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-green-50 to-white selection:bg-green-200">
      {/* Navegação Principal */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img 
              src={`${githubImgBase}logoN_pingus.png`} 
              alt="Logo Pingus Nutrição com Marco" 
              className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain drop-shadow-md"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/Imagens/logoN_pingus.png";
              }}
            />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">
              NUTRIÇÃO COM <span className="text-green-600">MARCO</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${currentPage === link.id ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-800 hover:text-green-600'}`}
              >
                {link.name}
              </button>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
              <Instagram size={18} /> @Nutricao_com_Marco
            </a>
          </div>

          <button className="md:hidden text-slate-800 hover:text-green-600 transition-colors p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-green-100 shadow-xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link)}
                className={`text-lg font-black text-left uppercase tracking-widest border-b border-slate-50 pb-2 transition-colors ${currentPage === link.id ? 'text-green-600' : 'text-slate-800'}`}
              >
                {link.name}
              </button>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2">
              <Instagram size={20} /> Instagram
            </a>
          </div>
        )}
      </nav>

      {/* ROTEAMENTO DE PÁGINAS */}
      {currentPage === 'home' && (
        <>
          <header id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left z-10">
                  <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">
                    Estudante de Nutrição • Unicesumar
                  </span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase leading-tight">
                    NUTRIÇÃO <br/> COM CIÊNCIA
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium mx-auto md:mx-0">
                    Transformando vidas através da antropometria e estratégias baseadas em evidências. Resultados reais para atendimento presencial e online em todo o Brasil.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button onClick={() => {
                      const element = document.querySelector('#ebooks');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl group">
                      Ver Meus E-books <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 relative mt-10 md:mt-0">
                  <div className="w-full aspect-[4/5] max-w-md mx-auto bg-white p-3 rounded-[2.5rem] rotate-2 shadow-2xl border border-slate-100 overflow-hidden">
                    <img src={`${githubImgBase}marco-aurelio.png`} alt="Nutricionista Marco Aurélio Jr - Especialista em Antropometria e Emagrecimento" title="Marco Aurélio Jr - Nutrição com Ciência" className="w-full h-full object-cover rounded-[2rem] scale-105 transition-transform hover:scale-110 duration-500" />
                  </div>
                  <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-8 flex flex-col gap-3">
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg shadow-inner overflow-hidden p-1.5 border border-slate-50">
                        <img src={`${githubImgBase}isak-logo.png`} alt="Certificação Internacional ISAK" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Certificação</p>
                        <p className="font-black text-slate-800 text-xs md:text-sm">ISAK Level 1</p>
                      </div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg shadow-inner overflow-hidden p-1.5 border border-slate-50">
                        <img src={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} alt="Faculdade Uniguaçu - Especialização em Metabolismo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Pós-Graduando</p>
                        <p className="font-black text-slate-800 text-xs md:text-sm leading-tight">Uniguaçú - Emagrecimento e Metabolismo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="sobre" className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 text-center md:text-left">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic">Olá, sou o Marco Aurélio Jr.👋</h2>
                  <div className="w-20 h-2 bg-green-600 rounded-full mx-auto md:mx-0"></div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Sou estudante do 4º ano de Nutrição na Unicesumar e um entusiasta da antropometria. Acredito que a nutrição deve ser prática, acessível e humana. Atendo pacientes de todo o Brasil através da modalidade online.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                      <h4 className="font-black text-green-600 uppercase text-sm mb-1">Foco</h4>
                      <p className="font-bold text-slate-700">Antropometria e Emagrecimento</p>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                      <h4 className="font-black text-green-600 uppercase text-sm mb-1">Local</h4>
                      <p className="font-bold text-slate-700">Freguesia e Online</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-600 p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <Zap className="absolute -top-10 -right-10 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                  <h3 className="text-2xl font-black mb-6 uppercase italic text-center md:text-left">Minha Missão</h3>
                  <p className="text-green-50 text-xl leading-relaxed mb-10 font-medium text-center md:text-left">
                    "Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <img src={`${githubImgBase}logoN_pingus.png`} alt="Mascote Pingus" className="w-16 h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col">
                      <span className="font-bold uppercase tracking-widest text-[10px] opacity-80">Mascote Oficial</span>
                      <span className="font-black uppercase tracking-tighter text-lg leading-none">Pingus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="ebooks" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Conteúdo gratuito para sua evolução</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {[
                  { title: "Guia de Receitas", desc: "Praticidade e muito sabor para o seu dia a dia.", image: `${githubImgBase}capa_receitas.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Ebook-Receitas.pdf" },
                  { title: "Entendendo a Fome", desc: "Aprenda a diferenciar fome física da emocional.", image: `${githubImgBase}capa_fome.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf" },
                  { title: "Manual de Antropometria", desc: "Entenda como a ciência mede o seu resultado real.", image: `${githubImgBase}capa_antropometria.jpeg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf" },
                  { title: "Casca de Banana na Cozinha", desc: "Aproveitamento integral com receitas surpreendentes.", image: `${githubImgBase}Capa_pancs.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf" },
                  { title: "Guia de Vitaminas", desc: "Tudo o que você precisa saber com receitas exclusivas.", image: `${githubImgBase}Vitaminas_Capa.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf" }
                ].map((ebook, i) => (
                  <a key={i} href={ebook.link} target="_blank" rel="noreferrer" className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[360px] bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col cursor-pointer">
                    <div className="w-full aspect-[3/4] mb-8 rounded-[2rem] overflow-hidden shadow-inner bg-slate-50 p-6 flex items-center justify-center">
                      <img src={ebook.image} alt={`E-book de Nutrição - ${ebook.title}`} className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-slate-800 leading-tight min-h-[64px]">{ebook.title}</h3>
                    <p className="text-slate-600 text-lg font-medium mb-8 italic flex-grow">{ebook.desc}</p>
                    <div className="mt-auto"><span className="inline-block px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest bg-green-600 text-white shadow-lg group-hover:bg-green-700 transition-colors">Baixar PDF</span></div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === 'certificacoes' && (
        <section className="pt-40 pb-24 min-h-screen bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20 text-center">
               <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4">Currículo</h1>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Trajetória e Qualificação Profissional</p>
            </div>
            <div className="space-y-24">
              <div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4"><span className="w-12 h-1 bg-green-600 rounded-full"></span>Formação Principal</h2>
                <div className="grid gap-8">
                  <CertCard image={`${githubImgBase}unicesumar.png`} badge="Graduação" title="Bacharelado em Nutrição" org="Unicesumar" hours="3470 horas" date="Conclusão: 12/2026" desc="Formação completa preparando para atuar em diversas áreas da Nutrição." color="slate" />
                  <CertCard image={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} badge="Pós-Graduação" title="Emagrecimento e Metabolismo" org="Faculdade Uniguaçú" hours="Especialização" desc="Focado nas bases fisiológicas para a prática clínica de performance." color="green" />
                  <CertCard image={`${githubImgBase}isak-logo.png`} badge="Internacional" title="ISAK Level 1" org="ISAK" hours="Antropometria" desc="Acreditação internacional para avaliações físicas de alta precisão técnica." color="blue" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4"><span className="w-12 h-1 bg-blue-600 rounded-full"></span>Prática Clínica</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <MiniCertCard image={`${githubImgBase}logo-temporaria.svg`} bgColor="bg-black" title="Farmacologia da Obesidade" org="Gustavo Stocker" hours="Treinamento Avançado" desc="Estudo da farmacologia aplicada ao emagrecimento." />
                  <MiniCertCard image={`${githubImgBase}medsize_logo-branco-png.png`} bgColor="bg-black" title="Medsize Klinik" org="Medsize" hours="Capacitação" desc="Protocolos de atendimento para profissionais de alta performance." />
                  <MiniCertCard image={`${githubImgBase}antropometria-obesidade.jpg`} title="Antropometria na Obesidade" org="Icaro Andrade" hours="Especialização" desc="Técnicas de mensuração específicas para pacientes com obesidade." />
                  <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="ProNutri (Ciclo 12)" org="Secad Artmed" hours="190h - Concluído" desc="Microbiota, Longevidade e Doenças Autoimunes." />
                  <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="ProNutri (Ciclo 14)" org="Secad Artmed" hours="190h - Em curso" desc="Novas evidências e condutas dietoterápicas modernas." />
                  <MiniCertCard image={`${githubImgBase}hormonios.jpg`} title="Metabolismo Hormonal" org="Prof. Dr. Rodrigo Vargas" hours="12h" desc="Estudo dos hormônios esteroides e ajustes dietéticos." />
                  <MiniCertCard image={`${githubImgBase}ellocursos.webp`} title="Psicologia e Obesidade" org="Ellocursos Psicologia" hours="100h" desc="Trabalho de mudança de comportamentos e emoções." />
                  <MiniCertCard image={`${githubImgBase}comer_intuitivo.jpg`} title="Comer Intuitivo" org="Inst. Nutrição Comportamental" hours="4h" desc="Sinais de fome/saciedade e razões físicas para comer." />
                </div>
              </div>
            </div>
            <button onClick={() => handleNavClick({id: 'home'})} className="mt-20 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors mx-auto">Voltar para o início <ArrowUpRight size={20} /></button>
          </div>
        </section>
      )}

      {currentPage === 'blog' && (
        <section className="pt-40 pb-24 min-h-screen bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            {selectedPost === null ? (
              <>
                <div className="mb-20 text-center">
                  <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4">Blog</h1>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Nutrição baseada em evidência para transformar sua vida</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Card do Artigo 1 */}
                  <div onClick={() => openPost('antropometria')} className="bg-white rounded-[3rem] shadow-xl border border-slate-100 flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="h-64 overflow-hidden border-b border-slate-50">
                      <img 
                        src={`${githubImgBase}Blog/O_que_e_antropometria.png`} 
                        alt="Capa do Artigo: O que é Antropometria - Nutrição com Marco" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest">Ciência</span>
                      <h3 className="text-2xl font-black text-slate-800 mt-4 leading-tight">O que é Antropometria e por que ela é o GPS do seu corpo?</h3>
                      <p className="text-slate-500 mt-4 line-clamp-2 font-medium">Entenda por que o peso na balança é apenas a ponta do iceberg no seu emagrecimento técnico...</p>
                      <div className="mt-6 flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Artigo Completo <ChevronRight size={16} /></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-[3rem] p-4 shadow-xl border border-slate-100 flex flex-col group opacity-60">
                    <div className="h-64 bg-blue-100 rounded-[2.5rem] mb-6 flex items-center justify-center">
                      <Target size={80} className="text-blue-600 opacity-20" />
                    </div>
                    <div className="px-4 pb-4">
                      <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-widest">Emagrecimento</span>
                      <h3 className="text-2xl font-black text-slate-800 mt-4 leading-tight">Por que a balança mente sobre seus resultados?</h3>
                      <p className="text-slate-500 mt-4 line-clamp-3 font-medium">A composição corporal diz muito mais sobre sua saúde do que o peso total...</p>
                      <div className="mt-6 font-bold uppercase text-[10px] tracking-widest text-slate-400 italic">Em breve...</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
                <button onClick={() => setSelectedPost(null)} className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors">
                  <ChevronLeft size={20} /> Voltar para o Blog
                </button>
                
                <article className="prose prose-lg prose-slate max-w-none">
                  <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Educação Científica</span>
                  <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 uppercase italic leading-tight text-center md:text-left">O que é Antropometria?</h1>
                  
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                    <p>A <strong>Antropometria</strong> é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano, sendo uma ferramenta indispensável para profissionais das áreas de saúde, nutrição e esportes. Etimologicamente, o termo deriva do grego <em>anthropos</em> (homem) e <em>metron</em> (medida), definindo-se objetivamente como o método de mensurar as características de um indivíduo para entender seu crescimento, estado nutricional e potencial de performance.</p>
                    
                    <p>Diferente do que muitos acreditam, ela vai muito além de uma simples pesagem em balança de banheiro, oferecendo uma análise profunda do que o peso total realmente representa em termos de tecidos biológicos.</p>
                    
                    {/* IMAGEM ESTRATÉGICA APÓS O 2º PARÁGRAFO - Otimizada para SEO */}
                    <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                      <img 
                        src={`${githubImgBase}Blog/O_que_e_antropometria.png`} 
                        alt="O que é Antropometria - Avaliação da Composição Corporal por Nutricionista Marco Aurélio Jr" 
                        title="Antropometria e Composição Corporal - Nutrição com Ciência"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="bg-slate-900/5 p-4 text-center">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">A ciência da medida humana aplicada ao seu emagrecimento real.</p>
                      </div>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">Antropometria: A evolução da Ciência</h2>
                    <p>Historicamente, a preocupação com as formas corporais remonta aos antigos egípcios e gregos, mas o nascimento da antropometria científica consolidou-se com pesquisadores como Lambert Quételet no século XIX. No entanto, a verdadeira revolução técnica ocorreu na década de 1980, com estudos liderados por William Ross que demonstraram falhas nos sistemas da época, servindo como base para a criação da <strong>ISAK</strong>, que hoje é o padrão ouro mundial.</p>

                    {/* VÍDEO DO INSTAGRAM INCORPORADO */}
                    <div className="my-16 bg-slate-50 p-6 md:p-10 rounded-[3.5rem] border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <PlayCircle size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none">Explicação em Vídeo</h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Assista aos detalhes direto do Instagram</p>
                            </div>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-white flex justify-center">
                            <iframe 
                                src="https://www.instagram.com/p/DUV4gfkkcab/embed" 
                                width="400" 
                                height="600" 
                                frameBorder="0" 
                                scrolling="no" 
                                allowtransparency="true"
                                className="max-w-full"
                            ></iframe>
                        </div>
                    </div>

                    <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold">
                      "O grande diferencial de uma avaliação baseada no padrão ISAK é a sua padronização rigorosa. Isso garante que os dados sejam fidedignos e comparáveis em qualquer lugar do mundo."
                    </div>

                    <p>Na prática, o antropometrista utiliza instrumentos de precisão calibrados para coletar diversas medidas, como o estadiômetro para a estatura, a balança para a massa corporal, a trena metálica para os perímetros e o plicômetro (ou bússola de dobras) para a aferição das dobras cutâneas. Essas medições permitem o fracionamento da massa corporal em componentes fundamentais: <strong>massa gorda, massa muscular, massa óssea e massa residual.</strong></p>

                    <p>Para o paciente que busca saúde e bem-estar, a antropometria atua como um verdadeiro <strong>GPS</strong>. Ela identifica riscos cardiovasculares e permite que o nutricionista ajuste dietas com base no volume exato de massa muscular que precisa ser preservado ou hipertrofiado, garantindo que a evolução seja monitorada por dados concretos e científicos.</p>

                    {/* SECÇÃO FAQ - EXCELENTE PARA SEO (Featured Snippets) */}
                    <div className="mt-16 pt-10 border-t border-slate-100">
                      <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-8 flex items-center gap-3">
                        <HelpCircle className="text-green-600" /> Perguntas Frequentes
                      </h3>
                      <div className="space-y-6">
                        <div className="bg-slate-50 p-6 rounded-3xl">
                          <h4 className="font-black text-slate-800 mb-2">Para que serve a antropometria na nutrição?</h4>
                          <p className="text-slate-600 font-medium">Serve para mapear a composição corporal do paciente, distinguindo massa gorda de massa muscular, o que permite um ajuste dietético muito mais preciso do que apenas olhar o peso na balança.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl">
                          <h4 className="font-black text-slate-800 mb-2">Qual a vantagem da certificação ISAK?</h4>
                          <p className="text-slate-600 font-medium">A certificação ISAK garante que o profissional segue um protocolo mundial de medidas, minimizando erros técnicos e permitindo que os seus resultados sejam comparáveis e fidedignos ao longo do tempo.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl">
                          <h4 className="font-black text-slate-800 mb-2">Posso fazer avaliação antropométrica online?</h4>
                          <p className="text-slate-600 font-medium">Embora as dobras exijam presença física, na consulta online orientamos o paciente a recolher métricas estratégicas e perímetros que, combinados com análise visual, oferecem um excelente parâmetro de evolução.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="font-bold text-slate-400 uppercase text-xs tracking-widest italic text-center md:text-left">Escrito por Marco Aurélio Jr. • ISAK Level 1 • Estudante de Nutrição</p>
                  <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all">Seguir no Instagram <Instagram size={16}/></a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer Profissional */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-10 cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo Pingus Nutrição com Marco" className="w-12 h-12 object-contain drop-shadow-lg" />
            <span className="text-xl font-black tracking-tighter uppercase italic">Nutrição com Marco</span>
          </div>
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10"><Instagram size={24}/></a>
            <a href="mailto:nutricaocommarco@gmail.com" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10"><Mail size={24}/></a>
          </div>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-1">#NutriçãoComCiência #Antropometria #ISAK1 #ConsultaOnline</p>
          <p className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase">© 2026 Nutrição com Marco • Rio de Janeiro</p>
        </div>
      </footer>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,900;1,900&display=swap');
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .titulo-vazado { font-family: 'Poppins', sans-serif; -webkit-text-stroke: 2px #1e3a8a; text-shadow: 3px 3px 0px #1e3a8a; }
        @media (min-width: 768px) { .titulo-vazado { -webkit-text-stroke: 4px #1e3a8a; text-shadow: 5px 5px 0px #1e3a8a; } }
      `}</style>
    </div>
  );
}

// Componentes Auxiliares
function CertCard({ icon, image, badge, title, org, hours, date, desc, color }) {
  const colorMap = { green: 'bg-green-100 text-green-600', blue: 'bg-blue-100 text-blue-600', purple: 'bg-purple-100 text-purple-600', slate: 'bg-slate-100 text-slate-600' };
  return (
    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center group hover:scale-[1.02] transition-all">
      <div className={`w-32 h-32 bg-white rounded-3xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform overflow-hidden shadow-inner p-3 border border-slate-50`}>
        {image ? <img src={image} className="w-full h-full object-contain" alt={title} /> : <div className={colorMap[color]}>{icon}</div>}
      </div>
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
          <span className={`${colorMap[color]} font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full w-fit mx-auto md:mx-0`}>{badge}</span>
          {date && <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{date}</span>}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-1">{title}</h3>
        <p className="text-green-600 font-black text-sm uppercase tracking-tighter mb-3">{org} • {hours}</p>
        <p className="text-slate-600 text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function MiniCertCard({ image, icon, title, org, hours, desc, bgColor = "bg-white" }) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col min-h-[400px]">
      <div className={`h-48 w-full overflow-hidden ${bgColor} flex items-center justify-center p-6 border-b border-slate-50`}>
        {image ? <img src={image} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" alt={title} /> : <div className="text-blue-600 opacity-40">{icon}</div>}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
        <p className="text-green-600 font-black text-[10px] uppercase tracking-widest mb-4">{org} • {hours}</p>
        <p className="text-slate-600 text-sm leading-relaxed italic">{desc}</p>
      </div>
    </div>
  );
}

function IvisaItem({ title, org, hours }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck className="text-red-500" size={20} /></div>
      <div><h4 className="font-black text-slate-800 uppercase italic text-sm leading-tight">{title}</h4><p className="text-slate-400 font-bold text-[9px] uppercase tracking-tighter">{org} • {hours}</p></div>
    </div>
  );
}
