import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { 
  Instagram, ChevronRight, Menu, X, ArrowUpRight, Mail, Zap, CheckCircle, 
  PlayCircle, HelpCircle, ShieldCheck, Droplets, ChevronLeft
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// --- BANCO DE DADOS DE CONTEÚDO INTEGRAL ---
const BLOG_POSTS = {
  "o_que_e_antropometria": {
    slug: "o_que_e_antropometria",
    categoria: "Educação Científica",
    titulo: "O que é Antropometria?",
    imagemCapa: "Blog/O_que_e_antropometria.png",
    metaDesc: "Descubra o que é Antropometria, sua história e a importância do padrão ISAK para sua saúde e performance física.",
    resumo: "A Antropometria é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano...",
    html: (base) => (
      <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
        <p>A <strong>Antropometria</strong> é uma ciência fundamental que estuda as proporções, o tamanho e as medidas do corpo humano, sendo uma ferramenta indispensável para profissionais das áreas de saúde, nutrição e esportes. Etimologicamente, o termo deriva do grego <em>anthropos</em> (homem) e <em>metron</em> (medida), definindo-se objetivamente como o método de mensurar as características fenotípicas de um indivíduo para entender seu crescimento, estado nutricional e potencial de performance. Diferente do que muitos acreditam, ela vai muito além de uma simples pesagem em balança de banheiro, oferecendo uma análise profunda do que o peso total realmente representa.</p>
        <p>Historicamente, a preocupação com as formas corporais remonta aos antigos egípcios e gregos, que buscavam proporções ideais para o "homem perfeito" ou para atletas olímpicos. No entanto, o nascimento da antropometria científica consolidou-se com pesquisadores como Lambert Quételet, o pai da estatística aplicada ao homem, que propôs o Índice de Massa Corporal (IMC) em 1841. Mais recentemente, na década de 1980, estudos liderados por William Ross revolucionaram a área ao demonstrar falhas nos sistemas de estimativa de composição corporal da época, servindo como base para a criação da Sociedade Internacional para o Avanço da Cineantropometria, o método <strong>ISAK</strong>.</p>
        
        <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
          <img src={`${base}Blog/O_que_e_antropometria.png`} alt="O que é Antropometria - Avaliação Física Profissional" title="Ciência da Antropometria e Composição Corporal" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest">Precisão técnica para resultados que a balança comum não consegue mostrar.</p></div>
        </div>
        
        <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <PlayCircle size={32} className="text-green-600" />
            <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none">Explicação Técnica em Vídeo</h3>
          </div>
          <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
            <iframe src="https://www.instagram.com/p/DUV4gfkkcab/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
          </div>
        </div>
        
        <p>O grande diferencial de uma avaliação física baseada no padrão ISAK é a sua padronização rigorosa. Esse protocolo internacional garante que os dados coletados sejam fidedignos e comparáveis em qualquer lugar do mundo, minimizando erros técnicos e de medição. Essas medições permitem o fracionamento da massa corporal em componentes fundamentais: <strong>massa gorda, massa muscular, massa óssea e massa residual.</strong></p>
        
        <div className="bg-green-600 text-white p-8 rounded-[3rem] shadow-xl my-12 italic font-bold text-center text-xl">
          "A antropometria atua como um GPS, retirando a pessoa da rota da incerteza das balanças comuns."
        </div>
        
        <div className="mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes</h3>
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-black text-slate-800 mb-2 italic">Qual a vantagem da certificação ISAK?</h4>
              <p className="text-slate-600">Garante um protocolo mundial de medidas, minimizando erro técnico e assegurando precisão absoluta.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-black text-slate-800 mb-2 italic">A antropometria é melhor que a bioimpedância?</h4>
              <p className="text-slate-600">São complementares, mas a antropometria é imune a variações rápidas de hidratação, sendo mais fiel à gordura real.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  "a_balanca_de_bioimpedancia_e_confiavel": {
    slug: "a_balanca_de_bioimpedancia_e_confiavel",
    categoria: "Tecnologia e Medida",
    titulo: "A balança de bioimpedância é confiável?",
    imagemCapa: "Blog/Bia1.jpg",
    metaDesc: "Entenda se a balança de bioimpedância é confiável e como o seu resultado pode variar com a hidratação.",
    resumo: "A balança de bioimpedância é uma ferramenta bastante utilizada para estimar a composição corporal...",
    html: (base) => (
      <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
        <p>A balança de bioimpedância é uma ferramenta bastante utilizada para estimar a composição corporal. Mas afinal, <strong>ela é realmente confiável?</strong> A resposta mais honesta é: depende de como ela é usada.</p>
        
        <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
          <img src={`${base}Blog/Bia1.jpg`} alt="Balança de Bioimpedância" title="Confiabilidade da Bioimpedância" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A bioimpedância estima o corpo através da água e não mede a gordura diretamente.</p></div>
        </div>
        
        <p>E aqui está o ponto-chave: ela não mede gordura diretamente — ela mede a quantidade de água corporal. Por isso, qualquer fator que altere a hidratação (café, treino, ciclo menstrual) impacta o resultado. Por isso, a bioimpedância não é 100% confiável sem um protocolo rígido.</p>
        
        <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
          <div className="flex items-center gap-4 mb-8">
            <PlayCircle size={32} className="text-green-600" />
            <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Entenda no Vídeo</h3>
          </div>
          <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
            <iframe src="https://www.instagram.com/p/DUYdSIukaS_/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
          </div>
        </div>
        
        <div className="bg-green-600 text-white p-10 rounded-[3.5rem] shadow-xl my-12 relative overflow-hidden">
          <Droplets className="absolute -top-5 -right-5 w-24 h-24 opacity-20" />
          <h2 className="text-white text-2xl font-black uppercase italic mb-6 leading-tight">O que interfere no resultado?</h2>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            <li className="flex items-center gap-3"><CheckCircle size={20}/> Hidratação</li>
            <li className="flex items-center gap-3"><CheckCircle size={20}/> Exercício Prévio</li>
            <li className="flex items-center gap-3"><CheckCircle size={20}/> Café/Álcool</li>
            <li className="flex items-center gap-3"><CheckCircle size={20}/> Ciclo Menstrual</li>
          </ul>
        </div>
        
        <div className="mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> FAQ Estratégico</h3>
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
              <h4 className="font-black text-slate-800 mb-2 italic">O percentual de gordura muda por que?</h4>
              <p className="text-slate-600">Raramente é gordura real; são variações na água corporal interpretadas pela balança como mudança de composição.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

// --- COMPONENTES DE CONFIGURAÇÃO ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SEOTags({ title, description }) {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png';
  }, [title, description]);
  return null;
}

// --- PÁGINAS DO SITE ---
function Home() {
  return (
    <>
      <SEOTags title="Nutrição com Marco | Performance e Ciência" description="Especialista em Nutrição e Antropometria no Rio de Janeiro e Online. Performance física e saúde baseada em evidências científicas." />
      
      <header className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-green-100 to-white text-center md:text-left">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 z-10">
              <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-green-200">Estudante de Nutrição • Unicesumar</span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 text-white italic titulo-vazado uppercase leading-tight">NUTRIÇÃO <br/> COM CIÊNCIA</h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl font-medium leading-relaxed mx-auto md:mx-0 text-left">Transformando vidas através da antropometria e estratégias baseadas em evidências. Atendimento presencial e online em todo o Brasil.</p>
              <Link to="/blog" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl group mx-auto md:mx-0 w-fit">Ver Conteúdo Técnico <ChevronRight size={20} /></Link>
            </div>
            <div className="flex-1 relative mt-10 md:mt-0">
              <div className="w-full aspect-[4/5] max-w-md mx-auto bg-white p-3 rounded-[2.5rem] rotate-2 shadow-2xl border border-slate-100 overflow-hidden">
                <img src={`${githubImgBase}marco-aurelio.png`} alt="Marco Aurélio Jr" className="w-full h-full object-cover rounded-[2rem] scale-105" />
              </div>
              <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-8 flex flex-col gap-3">
                <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black shadow-inner p-1.5 border border-slate-50"><img src={`${githubImgBase}isak-logo.png`} className="w-full h-full object-contain" alt="ISAK" /></div>
                  <div className="text-left"><p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Certificação</p><p className="font-black text-slate-800 text-xs md:text-sm">ISAK Level 1</p></div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black shadow-inner p-1.5 border border-slate-50"><img src={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} className="w-full h-full object-contain" alt="Uniguacu" /></div>
                  <div className="text-left"><p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400">Pós-Graduando</p><p className="font-black text-slate-800 text-xs md:text-sm leading-tight">Uniguaçú - Metabolismo</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white text-center md:text-left container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic mb-6">Olá, sou o Marco Aurélio Jr.👋</h2>
            <div className="w-20 h-2 bg-green-600 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">Sou estudante do 4º ano de Nutrição na Unicesumar e entusiasta da antropometria técnica. Minha missão é levar clareza nutricional para quem busca resultados reais.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-green-50"><h4 className="font-black text-green-600 text-sm uppercase">Foco</h4><p className="font-bold text-slate-800">Antropometria e Emagrecimento</p></div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-green-50"><h4 className="font-black text-green-600 text-sm uppercase">Local</h4><p className="font-bold text-slate-800 leading-tight text-sm">Rio de Janeiro, Freguesia e Online</p></div>
            </div>
          </div>
          <div className="flex-1 bg-green-600 p-8 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
            <Zap className="absolute -top-10 -right-10 w-40 h-40 opacity-10" />
            <h3 className="text-2xl font-black mb-6 italic uppercase">Minha Missão</h3>
            <p className="text-xl leading-relaxed mb-10 font-medium italic text-left">"Levar clareza nutricional para quem busca resultados reais, sem modismos e com total base científica."</p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img src={`${githubImgBase}logoN_pingus.png`} alt="Pingus" className="w-16 h-16 object-contain drop-shadow-lg" />
              <div className="text-left font-black uppercase text-white"><span className="block text-[10px] opacity-80">Mascote Oficial</span>Pingus</div>
            </div>
          </div>
        </div>
      </section>

      <section id="ebooks" className="py-24 bg-slate-50 text-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Meus Materiais</h2>
          <p className="text-slate-500 font-bold uppercase text-sm tracking-widest mb-16">Conteúdo gratuito para sua evolução</p>
          <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
            {[
              { title: "Guia de Receitas", desc: "Praticidade e muito sabor para o seu dia a dia.", image: `${githubImgBase}capa_receitas.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Ebook-Receitas.pdf" },
              { title: "Entendendo a Fome", desc: "Aprenda a diferenciar fome física da emocional.", image: `${githubImgBase}capa_fome.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Fome_Ebook.pdf" },
              { title: "Manual de Antropometria", desc: "Entenda como medimos o seu resultado real.", image: `${githubImgBase}capa_antropometria.jpeg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Antropometria-ebook.pdf" },
              { title: "Casca de Banana", desc: "Aproveitamento integral inteligente.", image: `${githubImgBase}Capa_pancs.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Casca_de_Banana_na_Cozinha.pdf" },
              { title: "Guia de Vitaminas", desc: "Tudo sobre micronutrientes com receitas exclusivas.", image: `${githubImgBase}Vitaminas_Capa.jpg`, link: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Vitaminas.pdf" }
            ].map((ebook, i) => (
              <a key={i} href={ebook.link} target="_blank" rel="noreferrer" className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-[360px] bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group border border-slate-100">
                <div className="aspect-[3/4] mb-8 rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner"><img src={ebook.image} alt={ebook.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" /></div>
                <h3 className="text-2xl font-black mb-4 text-slate-800 leading-tight min-h-[64px] text-center md:text-left">{ebook.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow font-medium italic leading-relaxed text-center md:text-left">{ebook.desc}</p>
                <span className="bg-green-600 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase text-center shadow-lg group-hover:bg-green-700 transition-colors">Baixar PDF</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Certificacoes() {
  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-left">
      <SEOTags title="Currículo e Certificações | Nutrição com Marco" description="Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr." />
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-20 text-center">Currículo</h1>
      <div className="space-y-24">
        <div>
          <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-green-600 rounded-full"></span> Formação Principal</h2>
          <div className="grid gap-8">
            <CertCard image={`${githubImgBase}unicesumar.png`} badge="Graduação" title="Bacharelado em Nutrição" org="Unicesumar" desc="Formação completa focada em Nutrição Clínica e Esportiva." color="slate" />
            <CertCard image={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} badge="Pós-Graduação" title="Emagrecimento e Metabolismo" org="Faculdade Uniguaçú" desc="Especialização avançada nas bases fisiológicas." color="green" />
            <CertCard image={`${githubImgBase}isak-logo.png`} badge="Internacional" title="ISAK Level 1" org="ISAK" desc="Certificação mundial para padronização de medidas." color="green" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-green-600 rounded-full"></span> Prática Clínica e Comportamental</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MiniCertCard image={`${githubImgBase}logo-temporaria.svg`} bgColor="bg-black" title="Farmacologia da Obesidade" org="Gustavo Stocker" desc="Estudo da farmacologia aplicada ao emagrecimento." />
            <MiniCertCard image={`${githubImgBase}medsize_logo-branco-png.png`} bgColor="bg-black" title="Medsize Klinik" org="Medsize" desc="Focado em protocolos de atendimento e gestão clínica." />
            <MiniCertCard image={`${githubImgBase}antropometria-clínica-obesidade.jpg`} title="Antropometria na Obesidade" org="Icaro Andrade" desc="Técnicas de mensuração específicas para o paciente com obesidade." />
            <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="Programa ProNutri (Ciclo 12)" org="Secad Artmed" desc="Atualização cobrindo Microbiota e Doenças Autoimunes." />
            <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="Programa ProNutri (Ciclo 14)" org="Secad Artmed" desc="Continuidade da formação clínica de vanguarda." />
            <MiniCertCard image={`${githubImgBase}hormonios.jpg`} title="Metabolismo Hormonal" org="Prof. Dr. Rodrigo Vargas" desc="Hormônios esteroides e ajustes dietéticos esportivos." />
            <MiniCertCard image={`${githubImgBase}ellocursos.webp`} title="Psicologia e Obesidade" org="Ellocursos" desc="Saúde mental e comportamento alimentar." />
            <MiniCertCard image={`${githubImgBase}comer_intuitivo.jpg`} title="Comer Intuitivo" org="Inst. Nutrição Comportamental" desc="Abordagem focada em sinais de fome e razões físicas." />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-left mb-24">
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
      <Link to="/" className="mx-auto mt-20 flex items-center gap-2 font-black uppercase text-slate-400 hover:text-green-600 transition-colors w-fit">Voltar ao Início <ArrowUpRight size={20} /></Link>
    </section>
  );
}

function BlogList() {
  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      <SEOTags title="Blog de Nutrição e Ciência | Nutrição com Marco" description="Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real." />
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Nutrição baseada em evidência científica</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.values(BLOG_POSTS).map((post) => (
          <Link key={post.slug} to={`/${post.slug}`} className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
            <div className="h-64 overflow-hidden border-b border-slate-50">
              <img src={`${githubImgBase}${post.imagemCapa}`} alt={post.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-grow">
              <span className="text-[10px] font-black bg-green-50 text-green-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{post.categoria}</span>
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-4">{post.titulo}</h3>
              <p className="text-slate-500 text-sm font-medium italic mb-6 line-clamp-3">{post.resumo}</p>
              <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs">Ler Página do Artigo <ChevronRight size={16} /></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <div className="py-40 text-center container mx-auto">
        <h1 className="text-4xl font-black mb-6">Artigo não encontrado</h1>
        <Link to="/blog" className="text-green-600 font-bold underline">Voltar para o blog</Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <SEOTags title={`${post.titulo} | Nutrição com Marco`} description={post.metaDesc} />
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">{post.categoria}</span>
          <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">{post.titulo}</h1>
          {post.html(githubImgBase)}
        </article>
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg text-2xl">M</div>
            <div className="text-left font-bold"><p className="text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black">ISAK Level 1 • Nutrição com Ciência</p></div>
          </div>
          <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
        </div>
      </div>
    </section>
  );
}

// --- LAYOUT PRINCIPAL (Navbar e Footer) ---
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
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo" className="w-12 h-12 group-hover:rotate-6 transition-transform object-contain" />
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase ml-1">NUTRIÇÃO COM <span className="text-green-600">MARCO</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className={`py-1 border-b-2 transition-all ${location.pathname === '/' ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Início</Link>
            <Link to="/certificacoes" className={`py-1 border-b-2 transition-all ${location.pathname === '/certificacoes' ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Certificações</Link>
            <Link to="/blog" className={`py-1 border-b-2 transition-all ${location.pathname.includes('/blog') || BLOG_POSTS[location.pathname.substring(1)] ? 'text-green-600 border-green-600' : 'text-slate-800 border-transparent hover:text-green-600'}`}>Blog</Link>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md italic">Instagram</a>
          </div>
          <button className="md:hidden text-slate-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-green-100 shadow-xl py-6 px-6 flex flex-col gap-6">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-lg font-black uppercase tracking-widest pb-2 border-b ${location.pathname === '/' ? 'text-green-600' : 'text-slate-800'}`}>Início</Link>
            <Link to="/certificacoes" onClick={() => setIsMenuOpen(false)} className={`text-lg font-black uppercase tracking-widest pb-2 border-b ${location.pathname === '/certificacoes' ? 'text-green-600' : 'text-slate-800'}`}>Certificações</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={`text-lg font-black uppercase tracking-widest pb-2 border-b ${location.pathname.includes('/blog') ? 'text-green-600' : 'text-slate-800'}`}>Blog</Link>
          </div>
        )}
      </nav>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-20 text-center mt-auto">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="flex items-center justify-center gap-3 mb-10 group">
            <img src={`${githubImgBase}logoN_pingus.png`} alt="Logo" className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform" />
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
    </>
  );
}

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificacoes" element={<Certificacoes />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/:slug" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,900;1,900&display=swap');
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .titulo-vazado { font-family: 'Poppins', sans-serif; -webkit-text-stroke: 2px #1e3a8a; text-shadow: 3px 3px 0px #1e3a8a; }
        @media (min-width: 768px) { .titulo-vazado { -webkit-text-stroke: 4px #1e3a8a; text-shadow: 5px 5px 0px #1e3a8a; } }
      `}</style>
    </>
  );
}

// --- COMPONENTES AUXILIARES ---
function CertCard({ image, badge, title, org, desc, color }) {
  const colorMap = { green: 'bg-green-100 text-green-600', blue: 'bg-blue-100 text-blue-600', slate: 'bg-slate-100 text-slate-600' };
  return (
    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center group transition-all hover:scale-[1.02] text-left">
      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-inner p-3 border border-slate-50 group-hover:rotate-3 transition-transform"><img src={image} className="w-full h-full object-contain" alt={title} /></div>
      <div className="flex-grow text-left">
        <span className={`${colorMap[color]} font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full mb-2 inline-block`}>{badge}</span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
        <p className="text-green-600 font-black text-sm uppercase mb-3">{org}</p>
        <p className="text-slate-600 leading-relaxed font-medium italic">{desc}</p>
      </div>
    </div>
  );
}

function MiniCertCard({ image, title, org, desc, bgColor = "bg-white" }) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col min-h-[380px] text-left">
      <div className={`h-48 w-full overflow-hidden ${bgColor} flex items-center justify-center p-6 border-b border-slate-50`}><img src={image} className="w-full h-full object-contain group-hover:scale-105 transition-transform" alt={title} /></div>
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
    <div className="flex items-start gap-4 text-left">
      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck className="text-red-500" size={20} /></div>
      <div className="text-left"><h4 className="font-black text-slate-800 uppercase italic text-sm leading-tight text-left">{title}</h4><p className="text-slate-400 font-bold text-[9px] uppercase tracking-tighter text-left">{org} • {hours}</p></div>
    </div>
  );
}
