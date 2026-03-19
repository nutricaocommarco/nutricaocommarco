import React, { useState, useEffect } from 'react';
import { 
  User, BookOpen, Award, MessageCircle, Instagram, ChevronRight, Menu, X, 
  ArrowUpRight, MapPin, Mail, Zap, CheckCircle, GraduationCap, Calendar, 
  Users, Dumbbell, Target, FlaskConical, Brain, Apple, Microscope, ShieldCheck, 
  Truck, Eye, BookText, Clock, Activity, Stethoscope, ChevronLeft, Search, 
  PlayCircle, HelpCircle, ExternalLink, Scale, Droplets
} from 'lucide-react';

// --- BANCO DE DADOS DE CONTEÚDO (Para evitar que os textos sumam ou sejam resumidos) ---
const CONTEUDO_BLOG = {
  antropometria: {
    id: 'antropometria',
    categoria: 'Educação Científica',
    titulo: 'O que é Antropometria?',
    resumo: 'Entenda por que o peso na balança é apenas a ponta do iceberg no seu emagrecimento técnico...',
    imagemCapa: 'Blog/O_que_e_antropometria.png',
    textoCompleto: (githubImgBase) => (
      <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
        <p>A <strong>Antropometria</strong> é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano, sendo uma ferramenta indispensável para profissionais das áreas de saúde, nutrição e esportes. Etimologicamente, o termo deriva do grego <em>anthropos</em> (homem) e <em>metron</em> (medida), definindo-se objetivamente como o método de mensurar as características fenotípicas de um indivíduo para entender seu crescimento, estado nutricional e potencial de performance.</p>
        
        <p>Diferente do que muitos acreditam, ela vai muito além de uma simples pesagem em balança de banheiro, oferecendo uma análise profunda do que o peso total realmente representa. Ela permite enxergar a história que seu corpo conta, separando os tecidos para uma intervenção nutricional verdadeiramente personalizada e científica.</p>

        {/* IMAGEM ESTRATÉGICA COM SEO */}
        <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
          <img 
            src={`${githubImgBase}Blog/O_que_e_antropometria.png`} 
            alt="O que é Antropometria - Avaliação da Composição Corporal por Nutricionista Marco Aurélio Jr" 
            title="Ciência da Antropometria e Composição Corporal"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="bg-green-50 p-4 text-center">
            <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A ciência da medida humana aplicada ao seu emagrecimento real.</p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4">Antropometria: A evolução da Ciência</h2>
        <p>Historicamente, a preocupação com as formas corporais remonta aos antigos egípcios e gregos, que buscavam proporções ideais para o "homem perfeito" ou para atletas olímpicos. No entanto, o nascimento da antropometria científica consolidou-se com pesquisadores como Lambert Quételet, o pai da estatística aplicada ao homem, que propôs o Índice de Massa Corporal (IMC) em 1841. Mais recentemente, na década de 1980, estudos liderados por William Ross revolucionaram a área ao demonstrar falhas nos sistemas de estimativa de composição corporal da época, servindo como base para a criação da Sociedade Internacional para o Avanço da Cineantropometria, o método <strong>ISAK</strong>.</p>

        {/* VÍDEO DO INSTAGRAM INCORPORADO */}
        <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <PlayCircle size={32} className="text-green-600" />
            <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Explicação na Prática</h3>
          </div>
          <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
            <iframe src="https://www.instagram.com/p/DUV4gfkkcab/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
          </div>
        </div>

        <p>O grande diferencial de uma avaliação física baseada no padrão ISAK é a sua padronização rigorosa. Esse protocolo internacional garante que os dados coletados sejam fidedignos e comparáveis em qualquer lugar do mundo, minimizando erros técnicos e de medição. Na prática, o antropometrista utiliza instrumentos de precisão para coletar diversas medidas, como o estadiômetro para a estatura, a balança para a massa corporal, a trena metálica para os perímetros e o plicômetro (ou bússola de dobras) para as dobras cutâneas.</p>

        <p>Essas medições permitem o fracionamento da massa corporal em componentes como <strong>massa gorda, massa muscular, massa óssea e massa residual.</strong> Para estimar o percentual de gordura de forma precisa, o avaliador realiza o destaque das dobras cutâneas em pontos anatômicos específicos, conhecidos como landmarks. Um erro de poucos milímetros na marcação desses pontos pode comprometer significativamente o resultado final, o que reforça a necessidade de um profissional qualificado.</p>

        <p>Além do foco na gordura corporal, a antropometria é vital para o cálculo do somatotipo, que descreve o físico em três componentes: <strong>endomorfia</strong> (adiposidade), <strong>mesomorfia</strong> (robustez muscular) e <strong>ectomorfia</strong> (linearidade ou magreza). Essa classificação ajuda a planejar intervenções específicas para melhora da performance esportiva ou para o monitoramento da saúde em casos de obesidade e doenças metabólicas.</p>

        <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold">
          "Para quem busca saúde e bem-estar, a antropometria atua como um GPS, retirando a pessoa da rota da incerteza das balanças comuns."
        </div>

        <p>Ela identifica riscos cardiovasculares através de medidas como a circunferência da cintura e permite que nutricionistas ajustem dietas com base no volume exato de massa muscular e gordura, garantindo que a evolução do paciente seja monitorada por dados concretos e científicos, e não apenas por achismos. Portanto, investir em uma avaliação antropométrica de qualidade é o primeiro passo para qualquer pessoa que deseje entender a história que seu corpo conta e otimizar seus resultados de forma segura e precisa.</p>

        {/* FAQ */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic text-center md:text-left"><HelpCircle className="text-green-600" /> Perguntas Frequentes</h3>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-green-100">
              <h4 className="font-black text-slate-800 mb-2 italic">Qual a vantagem da certificação ISAK?</h4>
              <p className="text-slate-600">Garante um protocolo mundial de medidas, minimizando erro técnico e assegurando precisão absoluta. Visite <a href="https://isak.global/" target="_blank" rel="noreferrer" className="text-green-600 font-black hover:underline">isak.global</a>.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  bioimpedancia: {
    id: 'bioimpedancia',
    categoria: 'Tecnologia e Medida',
    titulo: 'A balança de bioimpedância é confiável?',
    resumo: 'Descubra a verdade científica por trás desse aparelho e como não ser enganado pelos números flutuantes...',
    imagemCapa: 'Blog/Bia1.jpg',
    textoCompleto: (githubImgBase) => (
      <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
        <p>A balança de bioimpedância é uma ferramenta bastante utilizada para estimar a composição corporal — como percentual de gordura, massa muscular e água corporal. Mas afinal, <strong>a balança de bioimpedância é confiável?</strong></p>
        <p>A resposta mais honesta é: depende de como ela é usada.</p>
        <p>A bioimpedância funciona a partir da passagem de uma corrente elétrica de baixa intensidade pelo corpo. Essa corrente percorre os tecidos com diferentes níveis de resistência: a água conduz eletricidade com facilidade, enquanto a gordura oferece maior resistência. A partir dessa diferença, o aparelho faz estimativas sobre a composição corporal.</p>

        {/* IMAGEM COM SEO TRABALHADO */}
        <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
          <img 
            src={`${githubImgBase}Blog/Bia1.jpg`} 
            alt="A balança de bioimpedância é confiável? Entenda a medição do percentual de gordura e massa muscular." 
            title="Balança de Bioimpedância: Confiabilidade e Composição Corporal"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="bg-green-50 p-4 text-center">
            <p className="text-xs text-green-700 font-bold uppercase tracking-widest leading-relaxed text-center">
              Para entender se a balança de bioimpedância é confiável, é preciso saber que ela estima a composição corporal através da água e não mede a gordura diretamente.
            </p>
          </div>
        </div>

        <p>E aqui está o ponto-chave: ela não mede gordura diretamente — ela mede, principalmente, a quantidade de água corporal. A partir disso, utiliza equações para estimar os demais componentes. Ou seja, qualquer fator que altere a quantidade ou a distribuição de água no corpo pode impactar significativamente o resultado. Por isso, a bioimpedância não é 100% confiável, especialmente quando o protocolo não é seguido corretamente.</p>

        <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <PlayCircle size={32} className="text-green-600" />
            <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Entenda no Vídeo</h3>
          </div>
          <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
            <iframe src="https://www.instagram.com/p/DUYdSIukaS_/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
          </div>
        </div>

        <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">O que pode interferir no resultado?</h2>
        <p>Diversos fatores influenciam a quantidade de água corporal e, consequentemente, a leitura da bioimpedância:</p>
        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
          <li className="flex items-center justify-center md:justify-start gap-3 font-bold"><CheckCircle size={20} className="text-green-600"/> Estado de hidratação</li>
          <li className="flex items-center justify-center md:justify-start gap-3 font-bold"><CheckCircle size={20} className="text-green-600"/> Consumo recente de alimentos</li>
          <li className="flex items-center justify-center md:justify-start gap-3 font-bold"><CheckCircle size={20} className="text-green-600"/> Exercício físico antes da avaliação</li>
          <li className="flex items-center justify-center md:justify-start gap-3 font-bold"><CheckCircle size={20} className="text-green-600"/> Consumo de álcool ou cafeína</li>
          <li className="flex items-center justify-center md:justify-start gap-3 font-bold"><CheckCircle size={20} className="text-green-600"/> Fase do ciclo menstrual</li>
          <li className="flex items-center justify-center md:justify-start gap-3 font-bold"><CheckCircle size={20} className="text-green-600"/> Horário do dia</li>
        </ul>
        <p>Por exemplo, uma pessoa pode apresentar um percentual de gordura maior simplesmente por estar desidratada naquele momento — não porque ganhou gordura de fato.</p>

        <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">Frequências e Balanças Octapolares</h2>
        <p>Nem toda bioimpedância é igual. Baixa frequência (ex: 50 kHz) avalia principalmente a água extracelular. Aparelhos multifrequenciais permitem uma análise mais completa. Já as chamadas <strong>balanças octapolares</strong> utilizam oito pontos de contato, permitindo que a corrente elétrica percorra diferentes segmentos do corpo (braços, pernas e tronco separadamente), o que traz maior precisão, embora a tecnologia não elimine a dependência do estado de hidratação.</p>

        <div className="bg-green-600 text-white p-10 rounded-[3.5rem] shadow-xl my-12 relative overflow-hidden text-center md:text-left">
          <Zap className="absolute -top-5 -right-5 w-24 h-24 opacity-20" />
          <h2 className="text-white text-2xl font-black uppercase italic mb-6 leading-tight">E a certificação ISAK?</h2>
          <p className="text-green-50 font-bold leading-relaxed">Diferente da bioimpedância, a antropometria profissional certificado pela ISAK tende a ser mais consistente ao longo do tempo e menos sensível a variações agudas de hidratação.</p>
        </div>

        <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">Conclusão: Vale a pena usar?</h2>
        <p>Sim, mas com consciência. A bioimpedância ajuda a observar tendências, desde que as medições sejam feitas sempre nas mesmas condições (horário, jejum, sem treino). O problema não está na ferramenta, mas no uso sem critério. No fim das contas, mais importante do que um número isolado é entender o contexto e a evolução do corpo com o auxílio de profissionais qualificados.</p>

        {/* FAQ SELECIONADO */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic text-center md:text-left"><HelpCircle className="text-green-600" /> Perguntas Frequentes</h3>
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-black text-slate-800 mb-2 italic text-left">A balança de bioimpedância acerta meu percentual de gordura?</h4>
              <p className="text-slate-600 text-left">Não exatamente. Ela fornece uma estimativa baseada na água corporal. Os valores variam dependendo da sua hidratação e fatores momentâneos.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-black text-slate-800 mb-2 italic text-left">A bioimpedância substitui a avaliação com dobras cutâneas?</h4>
              <p className="text-slate-600 text-left">Não. A antropometria (ISAK) é mais consistente e imune a flutuações rápidas de água corporal, sendo o padrão ouro para acompanhamento clínico.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
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

      if (selectedPost) {
        document.title = `${CONTEUDO_BLOG[selectedPost].titulo} | Blog Nutrição com Marco`;
      } else {
        document.title = titles[currentPage] || titles.home;
      }

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }

      const descriptions = {
        home: 'Especialista em Nutrição e Antropometria no Rio de Janeiro e Online. Performance física e saúde baseada em evidências científicas.',
        certificacoes: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.',
        blog: 'Conteúdo científico aprofundado sobre antropometria, bioimpedância e emagrecimento real.'
      };
      
      metaDesc.content = selectedPost ? CONTEUDO_BLOG[selectedPost].resumo : (descriptions[currentPage] || descriptions.home);
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
      {/* NAVEGAÇÃO */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo Pingus" className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain" />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">NUTRIÇÃO COM <span className="text-green-600">MARCO</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => handleNavClick(link)} className={`transition-colors py-1 border-b-2 ${currentPage === link.id ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>
                {link.name}
              </button>
            ))}
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </a>
          </div>
          <button className="md:hidden text-slate-800 hover:text-green-600 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* HOME */}
      {currentPage === 'home' && (
        <>
          <header id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white text-center md:text-left">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 z-10">
                  <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">Estudante de Nutrição • Unicesumar</span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase leading-tight">NUTRIÇÃO <br/> COM CIÊNCIA</h1>
                  <p className="text-lg text-slate-600 mb-8 max-w-xl font-medium leading-relaxed mx-auto md:mx-0">Transformando vidas através da antropometria e estratégias baseadas em evidências. Atendimento presencial e online em todo o Brasil.</p>
                  <button onClick={() => document.querySelector('#ebooks').scrollIntoView({ behavior: 'smooth' })} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl group mx-auto md:mx-0">
                    Ver Meus E-books <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 relative mt-10 md:mt-0">
                  <div className="w-full aspect-[4/5] max-w-md mx-auto bg-white p-3 rounded-[2.5rem] rotate-2 shadow-2xl border border-slate-100 overflow-hidden">
                    <img src={`${githubImgBase}marco-aurelio.png`} alt="Nutricionista Marco Aurélio Jr" className="w-full h-full object-cover rounded-[2rem] scale-105" />
                  </div>
                  {/* MOLDURAS FLUTUANTES (BADGES) */}
                  <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-8 flex flex-col gap-3">
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg shadow-inner overflow-hidden p-1.5 border border-slate-50">
                        <img src={`${githubImgBase}isak-logo.png`} alt="ISAK" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Certificação</p>
                        <p className="font-black text-slate-800 text-xs md:text-sm">ISAK Level 1</p>
                      </div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-base md:text-lg shadow-inner overflow-hidden p-1.5 border border-slate-50">
                        <img src={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} alt="Uniguacu" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Pós-Graduando</p>
                        <p className="font-black text-slate-800 text-xs md:text-sm leading-tight">Uniguaçú - Metabolismo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section id="sobre" className="py-24 bg-white text-center md:text-left">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-4xl font-black text-slate-900 uppercase italic mb-6">Olá, sou o Marco Aurélio Jr.👋</h2>
                <div className="w-20 h-2 bg-green-600 rounded-full mb-6 mx-auto md:mx-0"></div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">Sou estudante do 4º ano de Nutrição na Unicesumar e entusiasta da antropometria técnica. Minha missão é levar clareza nutricional para quem busca resultados reais.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-green-50 text-center">
                    <h4 className="font-black text-green-600 text-sm uppercase">Foco</h4>
                    <p className="font-bold text-slate-800">Antropometria e Emagrecimento</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-green-50 text-center">
                    <h4 className="font-black text-green-600 text-sm uppercase">Local</h4>
                    <p className="font-bold text-slate-800 leading-tight">Rio de Janeiro, Freguesia e Online</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-green-600 p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden text-center md:text-left">
                <Zap className="absolute -top-10 -right-10 w-40 h-40 opacity-10" />
                <h3 className="text-2xl font-black mb-6 italic uppercase">Minha Missão</h3>
                <p className="text-xl leading-relaxed mb-10 font-medium italic">"Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."</p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <img src={`${githubImgBase}logoN_pingus.png`} alt="Mascote" className="w-16 h-16 object-contain drop-shadow-lg" />
                  <div><span className="font-bold block text-xs opacity-80 uppercase tracking-widest text-white">Mascote Oficial</span><span className="font-black text-lg uppercase tracking-tighter text-white">Pingus</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* E-BOOKS GRID 3-2 */}
          <section id="ebooks" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
                <p className="text-slate-500 font-bold uppercase text-sm tracking-widest mb-16">Conteúdo gratuito para sua evolução</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {[
                  { title: "Guia de Receitas", desc: "Praticidade e muito sabor para o seu dia a dia.", image: `${githubImgBase}capa_receitas.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Ebook-Receitas.pdf" },
                  { title: "Entendendo a Fome", desc: "Aprenda a diferenciar fome física da emocional.", image: `${githubImgBase}capa_fome.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf" },
                  { title: "Manual de Antropometria", desc: "Entenda como medimos o seu resultado real.", image: `${githubImgBase}capa_antropometria.jpeg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf" },
                  { title: "Casca de Banana", desc: "Aproveitamento integral com receitas surpreendentes.", image: `${githubImgBase}Capa_pancs.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf" },
                  { title: "Guia de Vitaminas", desc: "Tudo sobre micronutrientes com receitas exclusivas.", image: `${githubImgBase}Vitaminas_Capa.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf" }
                ].map((ebook, i) => (
                  <a key={i} href={ebook.link} target="_blank" rel="noreferrer" className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[360px] bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group border border-slate-100">
                    <div className="aspect-[3/4] mb-8 rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner">
                      <img src={ebook.image} alt={ebook.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 min-h-[64px] text-slate-800 text-center md:text-left leading-tight">{ebook.title}</h3>
                    <p className="text-slate-600 mb-8 flex-grow font-medium italic leading-relaxed text-center md:text-left">{ebook.desc}</p>
                    <span className="bg-green-600 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase text-center shadow-lg group-hover:bg-green-700 transition-colors">Baixar PDF</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CERTIFICAÇÕES (RESTAURADO COMPLETO) */}
      {currentPage === 'certificacoes' && (
        <section className="pt-40 pb-24 min-h-screen bg-slate-50 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-20 text-center">Currículo</h1>
            <div className="space-y-24">
              <div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-green-600 rounded-full"></span> Formação Principal</h2>
                <div className="grid gap-8">
                  <CertCard image={`${githubImgBase}unicesumar.png`} badge="Graduação" title="Bacharelado em Nutrição" org="Unicesumar" desc="Formação híbrida completa focada em Nutrição Clínica e Esportiva." color="slate" />
                  <CertCard image={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} badge="Pós-Graduação" title="Emagrecimento e Metabolismo" org="Faculdade Uniguaçú" desc="Especialização avançada nas bases fisiológicas para a prática clínica." color="green" />
                  <CertCard image={`${githubImgBase}isak-logo.png`} badge="Internacional" title="ISAK Level 1" org="ISAK" desc="Certificação mundial para padronização de medidas antropométricas baseada nos manuais de Norton e Olds." color="green" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-green-600 rounded-full"></span> Prática Clínica e Comportamental</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <MiniCertCard image={`${githubImgBase}logo-temporaria.svg`} bgColor="bg-black" title="Farmacologia da Obesidade" org="Gustavo Stocker" desc="Estudo da farmacologia aplicada ao emagrecimento." />
                  <MiniCertCard image={`${githubImgBase}medsize_logo-branco-png.png`} bgColor="bg-black" title="Medsize Klinik" org="Medsize" desc="Focado em protocolos de atendimento de alta performance." />
                  <MiniCertCard image={`${githubImgBase}antropometria-clínica-obesidade.jpg`} title="Antropometria na Obesidade" org="Icaro Andrade" desc="Técnicas específicas para o paciente com obesidade." />
                  <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="ProNutri (Ciclo 12)" org="Secad Artmed" desc="Microbiota, Longevidade e Doenças Autoimunes." />
                  <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="ProNutri (Ciclo 14)" org="Secad Artmed" desc="Continuidade da formação com novas evidências." />
                  <MiniCertCard image={`${githubImgBase}hormonios.jpg`} title="Metabolismo Hormonal" org="Prof. Dr. Rodrigo Vargas" desc="Estudo do metabolismo de hormônios esteroides." />
                  <MiniCertCard image={`${githubImgBase}ellocursos.webp`} title="Psicologia e Obesidade" org="Ellocursos Psicologia" desc="Trabalho focado na relação com a saúde mental." />
                  <MiniCertCard image={`${githubImgBase}comer_intuitivo.jpg`} title="Comer Intuitivo" org="Inst. Nutrição Comportamental" desc="Abordagem focada em sinais de fome e razões físicas." />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 mb-24">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-red-600 rounded-full"></span> Segurança Alimentar</h2>
                  <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-slate-100 space-y-6">
                    <IvisaItem title="Boas Práticas na Indústria" org="Ivisa-Rio" hours="4h" />
                    <IvisaItem title="Boas Práticas em Serviços" org="Ivisa-Rio" hours="4h" />
                    <IvisaItem title="Supervisão de Manipulação" org="Ivisa-Rio" hours="4h" />
                    <IvisaItem title="Transporte Seguro de Alimentos" org="Ivisa-Rio" hours="2h" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-purple-600 rounded-full"></span> Eventos</h2>
                  <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 flex items-center gap-6">
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-md overflow-hidden p-2"><img src={`${githubImgBase}simposio_obesidade.jpg`} className="w-full h-full object-contain" alt="Hcor" /></div>
                    <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">I Simpósio de Obesidade (Hcor)</h3>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => handleNavClick({id: 'home'})} className="mx-auto flex items-center gap-2 font-black uppercase text-slate-400 hover:text-green-600 transition-colors">Voltar ao Início <ArrowUpRight size={20} /></button>
          </div>
        </section>
      )}

      {/* BLOG */}
      {currentPage === 'blog' && (
        <section className="pt-40 pb-24 min-h-screen bg-slate-50 px-6">
          <div className="container mx-auto max-w-6xl">
            {selectedPost === null ? (
              <>
                <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
                <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest text-center">Nutrição baseada em evidência científica</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {Object.values(CONTEUDO_BLOG).map((post) => (
                    <div key={post.id} onClick={() => openPost(post.id)} className="bg-white rounded-[3rem] shadow-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all group border border-slate-100">
                      <div className="h-64 overflow-hidden border-b border-slate-50">
                        <img src={`${githubImgBase}${post.imagemCapa}`} alt={post.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-8">
                        <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest text-center md:text-left">{post.categoria}</span>
                        <h3 className="text-2xl font-black mt-4 leading-tight text-slate-800 text-center md:text-left">{post.titulo}</h3>
                        <div className="mt-6 flex items-center gap-2 text-green-600 font-bold uppercase text-xs justify-center md:justify-start">Ler Artigo Completo <ChevronRight size={16} /></div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-slate-100 opacity-60 flex flex-col items-center justify-center text-center">
                    <Target size={48} className="text-slate-300 mb-4" />
                    <h3 className="text-xl font-black text-slate-400 uppercase italic">Em Breve</h3>
                    <p className="text-slate-400 text-sm italic mt-2">Novos temas sobre performance e saúde.</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
                <button onClick={() => setSelectedPost(null)} className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors">
                  <ChevronLeft size={20} /> Voltar para o Blog
                </button>
                <article className="prose prose-lg max-w-none">
                  <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">{CONTEUDO_BLOG[selectedPost].categoria}</span>
                  <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-center md:text-left">{CONTEUDO_BLOG[selectedPost].titulo}</h1>
                  {CONTEUDO_BLOG[selectedPost].textoCompleto(githubImgBase)}
                </article>
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg">M</div>
                    <div className="text-left"><p className="font-bold text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black">Estudante de Nutrição • ISAK Level 1</p></div>
                  </div>
                  <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all">Seguir no Instagram</a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FOOTER RESTAURADO */}
      <footer className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-10 cursor-pointer" onClick={() => handleNavClick({id: 'home'})}>
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-black uppercase italic tracking-tighter text-white">Nutrição com Marco</span>
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

function CertCard({ image, badge, title, org, desc, color }) {
  const colorMap = { green: 'bg-green-100 text-green-600', blue: 'bg-blue-100 text-blue-600', slate: 'bg-slate-100 text-slate-600' };
  return (
    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center group transition-all hover:scale-[1.02]">
      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-inner p-3 border border-slate-50 group-hover:rotate-3 transition-transform">
        <img src={image} className="w-full h-full object-contain" alt={title} />
      </div>
      <div className="flex-grow text-left">
        <span className={`${colorMap[color]} font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full mb-2 inline-block`}>{badge}</span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
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
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
        <p className="text-green-600 font-black text-[10px] uppercase mb-4">{org}</p>
        <p className="text-slate-600 text-sm leading-relaxed italic font-medium">{desc}</p>
      </div>
    </div>
  );
}

function IvisaItem({ title, org, hours }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck className="text-red-500" size={20} /></div>
      <div className="text-left"><h4 className="font-black text-slate-800 uppercase italic text-sm leading-tight">{title}</h4><p className="text-slate-400 font-bold text-[9px] uppercase tracking-tighter">{org} • {hours}</p></div>
    </div>
  );
}
