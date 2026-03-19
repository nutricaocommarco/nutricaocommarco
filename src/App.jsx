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
  HelpCircle,
  ExternalLink,
  Scale,
  Droplets,
  Waves
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Configuração dinâmica do Favicon, Título e Meta Description (SEO)
    const setupSEO = () => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png';
      
      const titles = {
        home: 'Nutrição com Marco | Performance e Ciência',
        certificacoes: 'Currículo e Certificações | Nutrição com Marco',
        blog: 'Blog de Nutrição e Ciência | Nutrição com Marco'
      };

      if (selectedPost === 'antropometria') {
        document.title = 'O que é Antropometria? | Blog Nutrição com Marco';
      } else if (selectedPost === 'bioimpedancia') {
        document.title = 'A balança de bioimpedância é confiável? | Nutrição com Marco';
      } else {
        document.title = titles[currentPage] || titles.home;
      }

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }

      const postDescriptions = {
        antropometria: 'Descubra o que é Antropometria, sua história e por que o padrão ISAK é o GPS para sua saúde e performance física.',
        bioimpedancia: 'A balança de bioimpedância é confiável? Entenda como ela funciona, os fatores que interferem no resultado e como interpretá-la com ciência.'
      };

      const descriptions = {
        home: 'Especialista em Nutrição e Antropometria no Rio de Janeiro e Online. Performance física e saúde baseada em evidências científicas.',
        certificacoes: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.',
        blog: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.'
      };
      
      metaDesc.content = selectedPost ? postDescriptions[selectedPost] : (descriptions[currentPage] || descriptions.home);
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo Pingus Nutrição" className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain" />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">NUTRIÇÃO COM <span className="text-green-600">MARCO</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => handleNavClick(link)} className={`text-sm font-bold uppercase tracking-wider transition-colors ${currentPage === link.id ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-800 hover:text-green-600'}`}>
                {link.name}
              </button>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </a>
          </div>

          <button className="md:hidden text-slate-800 hover:text-green-600 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* PÁGINA INICIAL */}
      {currentPage === 'home' && (
        <>
          <header id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left z-10">
                  <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200 text-center">Estudante de Nutrição • Unicesumar</span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase leading-tight">NUTRIÇÃO <br/> COM CIÊNCIA</h1>
                  <p className="text-lg text-slate-600 mb-8 max-w-xl font-medium leading-relaxed">Transformando vidas através da antropometria e estratégias baseadas em evidências. Atendimento presencial e online em todo o Brasil.</p>
                  <button onClick={() => document.querySelector('#ebooks').scrollIntoView({ behavior: 'smooth' })} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl group mx-auto md:mx-0">
                    Ver Meus E-books <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 relative">
                  <div className="w-full aspect-[4/5] max-w-md mx-auto bg-white p-3 rounded-[2.5rem] rotate-2 shadow-2xl border border-slate-100 overflow-hidden">
                    <img src={`${githubImgBase}marco-aurelio.png`} alt="Nutricionista Marco Aurélio Jr - Especialista em Emagrecimento" className="w-full h-full object-cover rounded-[2rem] scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="sobre" className="py-24 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-black text-slate-900 uppercase italic mb-6">Olá, sou o Marco Aurélio Jr.👋</h2>
                <div className="w-20 h-2 bg-green-600 rounded-full mb-6 mx-auto md:mx-0"></div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">Sou estudante do 4º ano de Nutrição e entusiasta da antropometria técnica. Minha missão é levar clareza nutricional para quem busca resultados reais através de ciência e precisão.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-green-50">
                    <h4 className="font-black text-green-600 text-sm uppercase">Foco</h4>
                    <p className="font-bold text-slate-800">Antropometria ISAK</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-green-50">
                    <h4 className="font-black text-green-600 text-sm uppercase">Local</h4>
                    <p className="font-bold text-slate-800">Rio de Janeiro e Online</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-green-600 p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                <Zap className="absolute -top-10 -right-10 w-40 h-40 opacity-10" />
                <h3 className="text-2xl font-black mb-6 italic uppercase">Minha Missão</h3>
                <p className="text-xl leading-relaxed mb-10 font-medium italic">"Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."</p>
                <div className="flex items-center gap-4">
                  <img src={`${githubImgBase}logoN_pingus.png`} alt="Mascote" className="w-16 h-16 object-contain drop-shadow-lg" />
                  <div><span className="font-bold block text-xs opacity-80 uppercase tracking-widest">Mascote Oficial</span><span className="font-black text-lg uppercase tracking-tighter text-white">Pingus</span></div>
                </div>
              </div>
            </div>
          </section>

          <section id="ebooks" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
                <p className="text-slate-500 font-bold uppercase text-sm tracking-widest">Conteúdo gratuito para sua evolução</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {[
                  { title: "Guia de Receitas", desc: "Praticidade e muito sabor para o seu dia a dia.", image: `${githubImgBase}capa_receitas.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Ebook-Receitas.pdf" },
                  { title: "Entendendo a Fome", desc: "Aprenda a diferenciar fome física da emocional.", image: `${githubImgBase}capa_fome.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf" },
                  { title: "Manual de Antropometria", desc: "Entenda como medimos o seu resultado real.", image: `${githubImgBase}capa_antropometria.jpeg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf" },
                  { title: "Casca de Banana", desc: "Aproveitamento integral inteligente.", image: `${githubImgBase}Capa_pancs.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf" },
                  { title: "Guia de Vitaminas", desc: "Tudo sobre micronutrientes com receitas exclusivas.", image: `${githubImgBase}Vitaminas_Capa.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf" }
                ].map((ebook, i) => (
                  <a key={i} href={ebook.link} target="_blank" rel="noreferrer" className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[360px] bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group border border-slate-100">
                    <div className="aspect-[3/4] mb-8 rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner">
                      <img src={ebook.image} alt={ebook.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 min-h-[64px] text-slate-800">{ebook.title}</h3>
                    <p className="text-slate-600 mb-8 flex-grow font-medium italic leading-relaxed">{ebook.desc}</p>
                    <span className="bg-green-600 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase text-center shadow-lg group-hover:bg-green-700 transition-colors">Baixar PDF</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CURRÍCULO */}
      {currentPage === 'certificacoes' && (
        <section className="pt-40 pb-24 min-h-screen bg-slate-50 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-12 text-center">Currículo</h1>
            <div className="grid gap-8 mb-24">
              <CertCard image={`${githubImgBase}unicesumar.png`} badge="Graduação" title="Bacharelado em Nutrição" org="Unicesumar" desc="Formação híbrida completa focada em Nutrição Clínica e Esportiva." color="slate" />
              <CertCard image={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} badge="Pós-Graduação" title="Emagrecimento e Metabolismo" org="Faculdade Uniguaçú" desc="Especialização avançada nas bases fisiológicas para a prática clínica." color="green" />
              <CertCard image={`${githubImgBase}isak-logo.png`} badge="Internacional" title="ISAK Level 1" org="ISAK" desc="Certificação mundial para padronização de medidas antropométricas de alta precisão." color="green" />
            </div>
            <button onClick={() => handleNavClick({id: 'home'})} className="mx-auto flex items-center gap-2 font-black uppercase text-slate-400 hover:text-green-600 transition-colors">Voltar ao Início <ArrowUpRight size={20} /></button>
          </div>
        </section>
      )}

      {/* BLOG LIST */}
      {currentPage === 'blog' && (
        <section className="pt-40 pb-24 min-h-screen bg-slate-50 px-6">
          <div className="container mx-auto max-w-6xl">
            {selectedPost === null ? (
              <>
                <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
                <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest text-center">Nutrição baseada em evidência científica</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  
                  <div onClick={() => openPost('antropometria')} className="bg-white rounded-[3rem] shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all group border border-slate-100">
                    <div className="h-64 overflow-hidden border-b border-slate-50">
                      <img src={`${githubImgBase}Blog/O_que_e_antropometria.png`} alt="Post: O que é Antropometria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-8">
                      <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest">Ciência</span>
                      <h3 className="text-2xl font-black mt-4 leading-tight text-slate-800">O que é Antropometria e por que ela é o GPS do seu corpo?</h3>
                      <div className="mt-6 flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Artigo Completo <ChevronRight size={16} /></div>
                    </div>
                  </div>

                  <div onClick={() => openPost('bioimpedancia')} className="bg-white rounded-[3rem] shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all group border border-slate-100">
                    <div className="h-64 overflow-hidden border-b border-slate-50">
                      <img src={`${githubImgBase}Blog/Bia1.jpg`} alt="Post: A balança de bioimpedância é confiável?" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-8">
                      <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest">Tecnologia</span>
                      <h3 className="text-2xl font-black mt-4 leading-tight text-slate-800">A balança de bioimpedância é confiável? O que você precisa saber.</h3>
                      <div className="mt-6 flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Artigo Completo <ChevronRight size={16} /></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
                <button onClick={() => setSelectedPost(null)} className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors">
                  <ChevronLeft size={20} /> Voltar para o Blog
                </button>
                
                {selectedPost === 'antropometria' ? (
                  <article className="prose prose-lg max-w-none">
                    <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Educação Científica</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight text-slate-900">O que é Antropometria?</h1>
                    <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                      <p>A <strong>Antropometria</strong> é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano, sendo uma ferramenta indispensável para profissionais das áreas de saúde, nutrição e esportes.</p>
                      <p>Etimologicamente, o termo deriva do grego <em>anthropos</em> (homem) e <em>metron</em> (medida), definindo-se objetivamente como o método de mensurar as características fenotípicas de um indivíduo para entender seu crescimento, estado nutricional e potencial de performance.</p>
                      
                      <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                        <img src={`${githubImgBase}Blog/O_que_e_antropometria.png`} alt="O que é Antropometria - Avaliação da Composição Corporal" title="Ciência da Antropometria e Composição Corporal" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="bg-green-50 p-4 text-center">
                          <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A ciência da medida humana aplicada ao seu emagrecimento real.</p>
                        </div>
                      </div>

                      <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">Antropometria: A evolução da Ciência</h2>
                      <p>Historicamente, a preocupação com as formas corporais remonta aos antigos egípcios e gregos, mas o nascimento da antropometria científica consolidou-se com Quételet no século XIX e explodiu na década de 80 com o método <strong>ISAK</strong>.</p>
                      
                      <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
                        <div className="flex items-center gap-4 mb-8">
                          <PlayCircle size={32} className="text-green-600" />
                          <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Explicação na Prática</h3>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                          <iframe src="https://www.instagram.com/p/DUV4gfkkcab/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
                        </div>
                      </div>

                      <p>O padrão ISAK garante dados fidedignos e comparáveis mundialmente. Através de instrumentos como plicômetro, trena metálica e estadiômetro, realizamos o <strong>fracionamento da massa corporal</strong> em massa gorda, muscular, óssea e residual.</p>

                      <div className="mt-16 pt-10 border-t border-slate-100">
                        <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic text-center md:text-left"><HelpCircle className="text-green-600" /> Perguntas Frequentes</h3>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                          <h4 className="font-black text-slate-800 mb-2 italic">Qual a vantagem da certificação ISAK?</h4>
                          <p className="text-slate-600">Garante um protocolo mundial de medidas, minimizando erro técnico e assegurando precisão absoluta. Visite <a href="https://isak.global/" target="_blank" rel="noreferrer" className="text-green-600 font-black hover:underline">isak.global</a>.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  /* POST: BIOIMPEDÂNCIA (SEO OTIMIZADO) */
                  <article className="prose prose-lg max-w-none">
                    <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Composição Corporal e Tecnologia</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight text-slate-900">A balança de bioimpedância é confiável?</h1>
                    
                    <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                      <p>A balança de bioimpedância é uma ferramenta bastante utilizada para estimar a composição corporal — como percentual de gordura, massa muscular e água corporal. Mas afinal, <strong>a balança de bioimpedância é confiável?</strong> A resposta mais honesta é: depende de como ela é usada.</p>
                      
                      <p>A bioimpedância funciona a partir da passagem de uma corrente elétrica de baixa intensidade pelo corpo. Essa corrente percorre os tecidos com diferentes níveis de resistência: a água conduz eletricidade com facilidade, enquanto a gordura oferece maior resistência. A partir dessa diferença, o aparelho faz estimativas sobre a composição corporal.</p>

                      {/* IMAGEM COM SEO TRABALHADO - ALT, TITLE E LEGENDA */}
                      <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
                        <img 
                          src={`${githubImgBase}Blog/Bia1.jpg`} 
                          alt="A balança de bioimpedância é confiável? Entenda como funciona a medição do percentual de gordura e massa muscular." 
                          title="Balança de Bioimpedância: Confiabilidade e Composição Corporal"
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="bg-green-50 p-4 text-center">
                          <p className="text-xs text-green-700 font-bold uppercase tracking-widest leading-relaxed">
                            Para entender se a balança de bioimpedância é confiável, é preciso saber que ela estima a composição corporal através da água e não mede a gordura diretamente.
                          </p>
                        </div>
                      </div>

                      <p>E aqui está o ponto-chave: ela não mede gordura diretamente — ela mede, principalmente, a quantidade de água corporal. A partir disso, utiliza equações para estimar os demais componentes. Ou seja, qualquer fator que altere a quantidade ou a distribuição de água no corpo pode impactar significativamente o resultado.</p>
                      
                      <p>Por isso, a bioimpedância não é 100% confiável, especialmente quando o protocolo não é seguido corretamente.</p>

                      <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
                        <div className="flex items-center gap-4 mb-8">
                          <PlayCircle size={32} className="text-green-600" />
                          <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Assista à explicação técnica</h3>
                        </div>
                        <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                          <iframe src="https://www.instagram.com/p/DUYdSIukaS_/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
                        </div>
                      </div>

                      <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">O que pode interferir no resultado?</h2>
                      <p>Diversos fatores influenciam a quantidade de água corporal e, consequentemente, a leitura da bioimpedância:</p>
                      <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                        <li className="flex items-center gap-3 font-bold"><CheckCircle size={20} className="text-green-600" /> Estado de hidratação</li>
                        <li className="flex items-center gap-3 font-bold"><CheckCircle size={20} className="text-green-600" /> Consumo recente de alimentos</li>
                        <li className="flex items-center gap-3 font-bold"><CheckCircle size={20} className="text-green-600" /> Exercício físico antes da avaliação</li>
                        <li className="flex items-center gap-3 font-bold"><CheckCircle size={20} className="text-green-600" /> Consumo de álcool ou cafeína</li>
                        <li className="flex items-center gap-3 font-bold"><CheckCircle size={20} className="text-green-600" /> Fase do ciclo menstrual</li>
                        <li className="flex items-center gap-3 font-bold"><CheckCircle size={20} className="text-green-600" /> Horário do dia</li>
                      </ul>

                      <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">Frequências da bioimpedância: por que isso importa?</h2>
                      <p>Nem toda bioimpedância é igual — e um dos principais fatores que diferenciam os equipamentos é a frequência da corrente elétrica utilizada. Baixas frequências avaliam apenas a água extracelular. Aparelhos multifrequenciais (BIA multifrequência) utilizam várias frequências, permitindo uma análise mais completa da distribuição de líquidos no corpo.</p>

                      <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">Balanças octapolares: mais tecnologia, mais precisão?</h2>
                      <p>As chamadas balanças octapolares utilizam oito pontos de contato (mãos e pés), permitindo que a corrente percorra diferentes segmentos do corpo. Isso reduz a margem de erro em comparação com modelos simples, mas tecnologia ajuda — mas não elimina as limitações do método.</p>

                      <div className="bg-green-600 text-white p-10 rounded-[3.5rem] shadow-xl my-12 relative overflow-hidden">
                        <Zap className="absolute -top-5 -right-5 w-24 h-24 opacity-20" />
                        <h2 className="text-white text-2xl font-black uppercase italic mb-6 leading-tight">E a certificação ISAK?</h2>
                        <p className="text-green-50 font-bold leading-relaxed">Diferente da bioimpedância, a antropometria profissional certificado pela ISAK tende a ser mais consistente ao longo do tempo e menos sensível a variações agudas de hidratação.</p>
                      </div>

                      <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">Conclusão: Vale a pena usar?</h2>
                      <p>Sim, mas com consciência. A bioimpedância ajuda a observar tendências, desde que as medições sejam feitas sempre nas mesmas condições (horário, jejum, sem treino). O problema não está na ferramenta, mas no uso sem critério.</p>

                      <div className="mt-16 pt-10 border-t border-slate-100">
                        <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic text-center md:text-left"><HelpCircle className="text-green-600" /> Perguntas Frequentes</h3>
                        <div className="space-y-6">
                          <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                            <h4 className="font-black text-slate-800 mb-2 italic">A balança de bioimpedância acerta meu percentual de gordura?</h4>
                            <p className="text-slate-600">Não exatamente. Ela fornece uma estimativa baseada na água corporal. Os valores variam dependendo da sua hidratação e fatores momentâneos.</p>
                          </div>
                          <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                            <h4 className="font-black text-slate-800 mb-2 italic">Qual o melhor horário para fazer bioimpedância?</h4>
                            <p className="text-slate-600">Pela manhã, em jejum, após ir ao banheiro e antes de qualquer atividade física. A padronização é o segredo da evolução.</p>
                          </div>
                          <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                            <h4 className="font-black text-slate-800 mb-2 italic">Fazer exercício antes da avaliação altera o resultado?</h4>
                            <p className="text-slate-600">Altera bastante. O exercício muda a distribuição de líquidos no corpo e pode reduzir artificialmente o percentual de gordura na leitura.</p>
                          </div>
                          <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                            <h4 className="font-black text-slate-800 mb-2 italic">Qual a diferença entre balança comum e balança octapolar?</h4>
                            <p className="text-slate-600">As octapolares têm 8 pontos de contato (mãos e pés), permitindo uma análise segmentar mais precisa por braços, pernas e tronco separadamente.</p>
                          </div>
                          <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                            <h4 className="font-black text-slate-800 mb-2 italic">A bioimpedância substitui a avaliação com dobras cutâneas?</h4>
                            <p className="text-slate-600">Não. A antropometria (ISAK) é mais consistente e imune a variações de hidratação. O ideal é usar os métodos de forma complementar.</p>
                          </div>
                          <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                            <h4 className="font-black text-slate-800 mb-2 italic">Por que meu percentual muda tanto de um dia para o outro?</h4>
                            <p className="text-slate-600">Raramente é mudança real de gordura. São flutuações na água corporal causadas por hidratação, sódio, carboidratos ou rotina.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )}

                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black">M</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Marco Aurélio Jr.</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Estudante de Nutrição • ISAK Level 1</p>
                    </div>
                  </div>
                  <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all">Seguir no Instagram</a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-10 cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo Pingus" className="w-12 h-12 object-contain" />
            <span className="text-xl font-black uppercase italic tracking-tighter text-white">Nutrição com Marco</span>
          </div>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-1">#NutriçãoComCiência #Antropometria #Bioimpedancia #ISAK1</p>
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

function CertCard({ image, badge, title, org, desc, color }) {
  const colorMap = { green: 'bg-green-100 text-green-600', blue: 'bg-blue-100 text-blue-600', slate: 'bg-slate-100 text-slate-600' };
  return (
    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center group transition-all hover:scale-[1.02]">
      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-inner p-3 border border-slate-50 group-hover:rotate-3 transition-transform">
        <img src={image} className="w-full h-full object-contain" alt={title} />
      </div>
      <div className="flex-grow">
        <span className={`${colorMap[color]} font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full mb-2 inline-block`}>{badge}</span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-1">{title}</h3>
        <p className="text-green-600 font-black text-sm uppercase mb-3">{org}</p>
        <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}

function MiniCertCard({ image, title, org, desc, bgColor = "bg-white" }) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col min-h-[400px]">
      <div className={`h-48 w-full overflow-hidden ${bgColor} flex items-center justify-center p-6 border-b border-slate-50`}>
        <img src={image} className="w-full h-full object-contain group-hover:scale-105 transition-transform" alt={title} />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
        <p className="text-green-600 font-black text-[10px] uppercase mb-4">{org}</p>
        <p className="text-slate-600 text-sm leading-relaxed italic font-medium">{desc}</p>
      </div>
    </div>
  );
}
