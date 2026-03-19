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
  Stethoscope
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Configuração dinâmica do Favicon e Título da Página
    const setupFaviconAndTitle = () => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png';
      document.title = currentPage === 'home' 
        ? 'Nutrição com Marco | Performance e Ciência' 
        : 'Certificações | Nutrição com Marco';
    };
    
    setupFaviconAndTitle();

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Certificações', id: 'certificacoes' },
    { name: 'E-books', id: 'home', hash: '#ebooks' }
  ];

  const handleNavClick = (link) => {
    setCurrentPage(link.id);
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

  const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-br from-green-50 to-white selection:bg-green-200">
      {/* Navegação Principal */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img 
              src={`${githubImgBase}logoN_pingus.png`} 
              alt="Logo Pingus" 
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
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${currentPage === link.id ? 'text-green-600' : 'text-slate-800 hover:text-green-600'}`}
              >
                {link.name}
              </button>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
              <Instagram size={18} /> @Nutricao_com_Marco
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button className="md:hidden text-slate-800 hover:text-green-600 transition-colors p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Suspenso Mobile */}
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

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <header id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left z-10">
                  <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">
                    Estudante de Nutrição • Unicesumar
                  </span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase">
                    NUTRIÇÃO <br/> COM <br className="md:hidden" /> CIÊNCIA
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium mx-auto md:mx-0">
                    Simplificando a alimentação e transformando vidas através de evidências científicas. Conheça meu trabalho e meus materiais exclusivos.
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
                    <img 
                      src={`${githubImgBase}marco-aurelio.png`} 
                      alt="Marco Aurélio Jr." 
                      className="w-full h-full object-cover rounded-[2rem] scale-105 transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  
                  <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-8 flex flex-col gap-3">
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg shadow-inner overflow-hidden p-1.5 border border-slate-50">
                        <img src={`${githubImgBase}isak-logo.png`} alt="ISAK" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Certificação</p>
                        <p className="font-black text-slate-800 text-xs md:text-sm">ISAK Level 1</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg shadow-inner overflow-hidden p-1.5 border border-slate-50">
                        <img src={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} alt="Uniguacu" className="w-full h-full object-contain" />
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
                    Sou estudante do 4º ano de Nutrição na Unicesumar e um entusiasta da antropometria. Acredito que a nutrição deve ser prática, acessível e, acima de tudo, humana.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                      <h4 className="font-black text-green-600 uppercase text-sm mb-1">Foco</h4>
                      <p className="font-bold text-slate-700">Antropometria e Emagrecimento</p>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                      <h4 className="font-black text-green-600 uppercase text-sm mb-1">Local</h4>
                      <p className="font-bold text-slate-700">Freguesia, Rio de Janeiro</p>
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
                    <img 
                      src={`${githubImgBase}logoN_pingus.png`} 
                      alt="Mascote Pingus" 
                      className="w-16 h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold uppercase tracking-widest text-[10px] opacity-80">Mascote Oficial</span>
                      <span className="font-black uppercase tracking-tighter text-lg leading-none">Pingus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção E-books - Ajustada para 3 em cima e 2 em baixo */}
          <section id="ebooks" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">E-books pensados na sua evolução</p>
              </div>
              <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                {[
                  { 
                    title: "Guia de Receitas", 
                    desc: "Praticidade e muito sabor para o seu dia a dia.", 
                    status: "Baixar PDF", 
                    image: `${githubImgBase}capa_receitas.jpg`,
                    link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Ebook-Receitas.pdf"
                  },
                  { 
                    title: "Entendendo a Fome", 
                    desc: "Aprenda a diferenciar fome física da emocional.", 
                    status: "Baixar PDF", 
                    image: `${githubImgBase}capa_fome.jpg`,
                    link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf"
                  },
                  { 
                    title: "Manual de Antropometria", 
                    desc: "Conceitos básicos fundamentais para estudantes.", 
                    status: "Baixar PDF", 
                    image: `${githubImgBase}capa_antropometria.jpeg`,
                    link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf"
                  },
                  { 
                    title: "Casca de Banana na Cozinha", 
                    desc: "Aproveitamento integral e receitas surpreendentes.", 
                    status: "Baixar PDF", 
                    image: `${githubImgBase}Capa_pancs.jpg`,
                    link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf"
                  },
                  { 
                    title: "Vitaminas, um Guia com Receitas", 
                    desc: "Tudo o que você precisa saber sobre micronutrientes.", 
                    status: "Baixar PDF", 
                    image: `${githubImgBase}Vitaminas_Capa.jpg`,
                    link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf"
                  }
                ].map((ebook, i) => (
                  <a 
                    key={i} 
                    href={ebook.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] max-w-[380px] bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col cursor-pointer text-center md:text-left"
                  >
                    <div className="w-full aspect-[3/4] mb-8 rounded-[2rem] overflow-hidden shadow-inner bg-slate-100 p-6 flex items-center justify-center">
                      <img 
                        src={ebook.image} 
                        alt={`Capa do E-book ${ebook.title}`} 
                        className="w-full h-full object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-slate-800 leading-tight min-h-[64px]">{ebook.title}</h3>
                    <p className="text-slate-600 text-lg font-medium mb-8 italic flex-grow">{ebook.desc}</p>
                    <div className="mt-auto">
                      <span className="inline-block px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest bg-green-600 text-white shadow-lg group-hover:bg-green-700 transition-colors">
                        {ebook.status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Página de Currículo / Certificações */
        <section id="certificacoes-page" className="pt-40 pb-24 min-h-screen bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20 text-center">
               <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4">Currículo</h1>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Trajetória e Qualificação Profissional</p>
            </div>

            <div className="space-y-24">
              
              {/* Formação Principal */}
              <div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4">
                  <span className="w-12 h-1 bg-green-600 rounded-full"></span>
                  Formação Principal e Especializações
                </h2>
                <div className="grid gap-8">
                  <CertCard 
                    image={`${githubImgBase}unicesumar.png`}
                    badge="Graduação"
                    title="Bacharelado em Nutrição"
                    org="Unicesumar"
                    hours="3470 horas"
                    date="Conclusão: 12/2026"
                    desc="O curso oferece uma formação híbrida completa, preparando para atuar em diversas áreas da Nutrição com experiências práticas e estágios clínicos."
                    color="slate"
                  />
                  <CertCard 
                    image={`${githubImgBase}oficial-uniguacu_vertical-edited.png`}
                    badge="Pós-Graduação"
                    title="Emagrecimento e Metabolismo"
                    org="Faculdade Uniguaçú"
                    hours="Especialização"
                    desc="Focado nas bases fisiológicas e estratégias nutricionais avançadas para a prática clínica de emagrecimento e performance."
                    color="green"
                  />
                  <CertCard 
                    image={`${githubImgBase}isak-logo.png`}
                    badge="Internacional"
                    title="ISAK Level 1"
                    org="ISAK"
                    hours="Antropometria"
                    desc="Acreditação internacional para avaliações físicas de alta precisão técnica e mensuração rigorosa de dobras cutâneas."
                    color="blue"
                  />
                </div>
              </div>

              {/* Prática Clínica e Comportamental */}
              <div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4">
                  <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                  Prática Clínica e Comportamental
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <MiniCertCard 
                    image={`${githubImgBase}logo-temporaria.svg`}
                    bgColor="bg-black"
                    title="Farmacologia da Obesidade"
                    org="Gustavo Stocker"
                    hours="Treinamento Avançado"
                    desc="Estudo da farmacologia aplicada ao emagrecimento, otimizando resultados clínicos com base em evidências."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}medsize_logo-branco-png.png`}
                    bgColor="bg-black"
                    title="Medsize Klinik"
                    org="Medsize"
                    hours="Capacitação"
                    desc="Focado em protocolos de atendimento e gestão clínica para profissionais de alta performance."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}antropometria-obesidade.jpg`}
                    title="Antropometria na Obesidade"
                    org="Icaro Andrade"
                    hours="Especialização"
                    desc="Técnicas de mensuração e avaliação específicas para o paciente com obesidade, focando em precisão técnica."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}pronutri.webp`}
                    title="Programa ProNutri (Ciclo 12)"
                    org="Secad Artmed"
                    hours="190h - Concluído"
                    desc="Atualização em Nutrição Clínica cobrindo Microbiota, Longevidade, Doenças Autoimunes e diversos temas de vanguarda."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}pronutri.webp`}
                    title="Programa ProNutri (Ciclo 14)"
                    org="Secad Artmed"
                    hours="190h - Em curso"
                    desc="Continuidade da formação avançada, explorando novas evidências e condutas dietoterápicas modernas em ambiente clínico."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}hormonios.jpg`}
                    title="Metabolismo Hormonal na Hipertrofia"
                    org="Prof. Dr. Rodrigo Vargas"
                    hours="12h"
                    desc="Estudo detalhado do metabolismo de hormônios esteroides e ajustes dietéticos para o público esportivo."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}ellocursos.webp`}
                    title="Psicologia e Obesidade"
                    org="Ellocursos Psicologia"
                    hours="100h"
                    desc="Trabalho de mudança de comportamentos e emoções, focando na relação entre obesidade e saúde mental."
                  />
                  <MiniCertCard 
                    image={`${githubImgBase}comer_intuitivo.jpg`}
                    title="Comer Intuitivo"
                    org="Inst. Nutrição Comportamental"
                    hours="4h"
                    desc="Este curso apresentou os pilares e princípios: permissão incondicional, sinais de fome/saciedade e razões físicas."
                  />
                </div>
              </div>

              {/* Segurança Alimentar e Simpósios */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-red-600 rounded-full"></span>
                    Segurança Alimentar
                  </h2>
                  <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-slate-100 space-y-6">
                    <IvisaItem title="Boas Práticas na Indústria" org="Ivisa-Rio / Min. Saúde" hours="4h" />
                    <IvisaItem title="Boas Práticas em Serviços" org="Ivisa-Rio / Min. Saúde" hours="4h" />
                    <IvisaItem title="Supervisão de Manipulação" org="Ivisa-Rio / Min. Saúde" hours="4h" />
                    <IvisaItem title="Transporte Seguro de Alimentos" org="Ivisa-Rio / Min. Saúde" hours="2h" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                    Eventos e Simpósios
                  </h2>
                  <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col gap-6">
                    <div className="flex gap-6 items-center">
                      <div className="w-24 h-24 bg-white rounded-2xl shadow-md overflow-hidden p-2 border border-slate-50">
                        <img 
                          src={`${githubImgBase}simposio_obesidade.jpg`} 
                          className="w-full h-full object-contain" 
                          alt="Simpósio Hcor" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">I Simpósio de Obesidade (Hcor)</h3>
                        <p className="text-slate-500 text-sm mt-1">Discussão avançada sobre tratamento multidisciplinar e novos desafios da obesidade.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            <button 
              onClick={() => handleNavClick({id: 'home'})}
              className="mt-20 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors mx-auto"
            >
              Voltar para o início <ArrowUpRight size={20} />
            </button>
          </div>
        </section>
      )}

      {/* Footer Profissional */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-10 cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img 
              src={`${githubImgBase}logoN_pingus.png`} 
              alt="Logo Pingus" 
              className="w-12 h-12 object-contain drop-shadow-lg"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/Imagens/logoN_pingus.png";
              }}
            />
            <span className="text-xl font-black tracking-tighter uppercase italic">Nutrição com Marco</span>
          </div>
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10"><Instagram size={24}/></a>
            <a href="mailto:nutricaocommarco@gmail.com" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 border border-white/10"><Mail size={24}/></a>
          </div>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-1">#NutriçãoComCiência #Antropometria #ISAK1</p>
          <p className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase">© 2026 Nutrição com Marco • Rio de Janeiro</p>
        </div>
      </footer>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,900;1,900&display=swap');

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .titulo-vazado {
          font-family: 'Poppins', sans-serif;
          line-height: 1.3;
          -webkit-text-stroke: 2px #1e3a8a;
          text-shadow: 3px 3px 0px #1e3a8a;
        }
        
        @media (min-width: 768px) {
          .titulo-vazado {
            line-height: 1.2;
            -webkit-text-stroke: 4px #1e3a8a;
            text-shadow: 5px 5px 0px #1e3a8a;
          }
        }
      `}</style>
    </div>
  );
}

// Componentes de Interface Refinados
function CertCard({ icon, image, badge, title, org, hours, date, desc, color }) {
  const colorMap = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    slate: 'bg-slate-100 text-slate-600'
  };
  
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
        {image ? (
          <img src={image} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" alt={title} />
        ) : (
          <div className="text-blue-600 opacity-40">{icon}</div>
        )}
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
      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
        <ShieldCheck className="text-red-500" size={20} />
      </div>
      <div>
        <h4 className="font-black text-slate-800 uppercase italic text-sm leading-tight">{title}</h4>
        <p className="text-slate-400 font-bold text-[9px] uppercase tracking-tighter">{org} • {hours}</p>
      </div>
    </div>
  );
}
