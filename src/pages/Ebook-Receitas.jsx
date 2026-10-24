import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock, 
  BookOpen, 
  ShoppingCart, 
  ChefHat, 
  Star, 
  ArrowRight, 
  Zap, 
  TrendingUp,
  ShieldCheck,
  Award,
  Download,
  Book,
  Truck
} from 'lucide-react';
import ImagemOtimizada from '../components/ImagemOtimizada';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const artigoCapa = `${githubImgBase}capa_receitas.webp`; 

// Link do PDF de amostra
const pdfAmostra = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Ebooks/Receitas-Amostra-Gratis.pdf";

export default function EbookReceitas() {
  const navigate = useNavigate();
  const location = useLocation();

  const checkoutLinkDigital = "https://pay.hotmart.com/R106813023M";
  // "Levar os dois": o carrinho da Uiclap guarda os livros no navegador do visitante e aceita um livro por link.
  // No computador, abrimos o carrinho do Antropometria numa janela pequena, esperamos ele ser adicionado,
  // fechamos a janela e seguimos na aba principal com o carrinho do livro de receitas (os dois ficam juntos).
  // No celular (ou com pop-up bloqueado) seguimos só com o livro de receitas e avisamos.
  const carrinhoAntropometria = "https://loja.uiclap.com/carrinho/?add-to-cart=592548"; // título ua214517
  const [comboEstado, setComboEstado] = useState('parado'); // parado | montando | aviso
  const [comboEtapa, setComboEtapa] = useState(0);
  const [comboProgresso, setComboProgresso] = useState(false);
  const COMBO_ESPERA_MS = 6000;
  const comboEtapas = [
    'Abrindo a loja da Uiclap…',
    'Adicionando o livro Antropometria — Do Zero ao Avançado…',
    'Adicionando o livro Receitas Saudáveis e Nutritivas…',
    'Levando você para o carrinho…',
  ];

  const levarOsDois = (e) => {
    e.preventDefault();
    try {
      if (typeof window.loadTrackingScripts === 'function') window.loadTrackingScripts();
      window.dataLayer = window.dataLayer || [];
      const gtag = function () { window.dataLayer.push(arguments); };
      gtag('event', 'begin_checkout_combo_receitas_antropometria', { currency: 'BRL', value: 199.89, transport_type: 'beacon' });
      if (typeof window.fbq === 'function') window.fbq('track', 'InitiateCheckout', { value: 199.89, currency: 'BRL', content_name: 'Combo Receitas + Antropometria (livros impressos)' });
    } catch (err) { /* a medição nunca deve impedir a compra */ }

    const podeJanela = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    // janela pequena no canto da tela: só serve para a loja gravar o 1º livro no carrinho
    const l = Math.max(0, (window.screen.availWidth || 1280) - 340);
    const t = Math.max(0, (window.screen.availHeight || 800) - 260);
    const janela = podeJanela ? window.open(carrinhoAntropometria, 'uiclap_antropometria', `width=320,height=200,left=${l},top=${t}`) : null;
    if (!janela) {
      // celular ou pop-up bloqueado: segue só com o livro de receitas e mostra o aviso na tela
      setComboEstado('aviso');
      window.open(checkoutLinkFisico, '_blank', 'noopener');
      return;
    }
    try { window.focus(); } catch (err) { /* ignora */ }
    setComboEtapa(0);
    setComboProgresso(false);
    setComboEstado('montando');
    setTimeout(() => setComboProgresso(true), 60);
    setTimeout(() => setComboEtapa(1), 1200);
    setTimeout(() => setComboEtapa(2), Math.round(COMBO_ESPERA_MS * 0.55));
    setTimeout(() => setComboEtapa(3), COMBO_ESPERA_MS - 900);
    setTimeout(() => {
      try { janela.close(); } catch (err) { /* ignora */ }
      window.location.href = checkoutLinkFisico;
    }, COMBO_ESPERA_MS);
  };

  // Livro impresso: vendido na loja da Uiclap (impressão sob demanda). Frete calculado no carrinho.
  const checkoutLinkFisico = "https://loja.uiclap.com/carrinho/?add-to-cart=595059"; // 595059 = código do livro na Uiclap (título ua216140)

  // Medição do clique em "Comprar Livro Físico" (GA4 + Meta Pixel); a venda acontece fora do site.
  const registrarCompraFisico = () => {
    try {
      if (typeof window.loadTrackingScripts === 'function') window.loadTrackingScripts();
      window.dataLayer = window.dataLayer || [];
      const gtag = function () { window.dataLayer.push(arguments); };
      gtag('event', 'begin_checkout', {
        currency: 'BRL',
        value: 50,
        items: [{ item_id: 'ua216140', item_name: 'Receitas Saudáveis e Nutritivas (livro impresso)', price: 50, quantity: 1 }],
        transport_type: 'beacon',
      });
      gtag('event', 'begin_checkout_receitas_fisico', { currency: 'BRL', value: 50, transport_type: 'beacon' });
      if (typeof window.fbq === 'function') window.fbq('track', 'InitiateCheckout', { value: 50, currency: 'BRL', content_name: 'Receitas Saudáveis e Nutritivas (livro impresso)' });
    } catch (err) { /* a medição nunca deve impedir a compra */ }
  };
  const afiliadoLink = "https://affiliate.hotmart.com/affiliate-recruiting/view/7371R106813044";

  // Depoimentos Estratégicos (Prova Social)
  const depoimentos = [
    {
      id: 1,
      nome: "Ana Carolina, 34 anos",
      texto: "Trabalho o dia todo e chegava em casa exausta, acabava sempre pedindo delivery. Esse e-book salvou minha rotina! A técnica 3x3 e os pré-preparos me fazem cozinhar em 15 minutos. Recomendo demais!"
    },
    {
      id: 2,
      nome: "Ricardo M., 41 anos",
      texto: "Minha gaveta de legumes vivia cheia de coisas estragando, hoje eu uso 100% do que compro com as técnicas de congelamento. O bolso agradece e a saúde também. Por R$ 9,90, foi o melhor investimento do ano."
    },
    {
      id: 3,
      nome: "Mariana S., 28 anos",
      texto: "Sempre odiei fazer dieta porque a comida ficava sem graça. O alho em pasta e as bases de refogado do Marco deixam qualquer prato delicioso! Já perdi 4kg sem sentir que estou de dieta."
    },
    {
      id: 4,
      nome: "Fernanda L., 39 anos",
      texto: "Mudou a dinâmica aqui em casa. Agora faço as marmitas da semana no domingo e tenho lanches práticos (o pão de queijo fit é perfeito!) para as crianças. Simples e muito direto ao ponto."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 font-sans selection:bg-green-200 selection:text-green-900">
      <main className="max-w-4xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 p-6 md:p-12 text-slate-700">
        
        {/* HERO SECTION */}
        <header className="flex flex-col items-center text-center mb-16 mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6 border border-green-100">
            <Star size={16} aria-hidden="true" />
            <span>Lançamento Exclusivo - Praticidade na Cozinha</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Ebook Receitas Saudáveis e Nutritivas: <span className="text-green-700">O Caminho da Praticidade</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Manter uma alimentação saudável não precisa ser sinônimo de complicação! Descubra que comer bem pode (e deve) ser algo prazeroso, prático e que se encaixa perfeitamente na sua rotina, mesmo nos dias mais corridos.
          </p>

          {/* CAPA DO EBOOK */}
          <div className="w-full max-w-[260px] md:max-w-[280px] mx-auto mb-12 relative group mt-4">
            <div className="absolute inset-0 bg-green-700 rounded-2xl transform rotate-3 opacity-15 transition-transform group-hover:rotate-6 duration-500" aria-hidden="true"></div>
            
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 flex justify-center">
              <img 
                src={artigoCapa} 
                alt="Capa do Ebook Receitas Saudáveis e Nutritivas" 
                title="Capa do Ebook Receitas Saudáveis e Nutritivas"
                className="w-full h-auto rounded-xl transition-transform duration-700 group-hover:scale-[1.02] object-contain"
                loading="eager" 
                fetchpriority="high"
                decoding="async" 
              />
            </div>
          </div>

          <a 
            href="#formatos"
            aria-label="Ver opções de compra do Ebook"
            className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-5 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-green-700/40 transition-transform hover:-translate-y-1 w-full md:w-auto"
          >
            <ShoppingCart size={28} aria-hidden="true" />
            Quero Garantir o Meu!
          </a>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
            <ShieldCheck size={16} className="text-green-700" aria-hidden="true" />
            <span>Pagamento 100% seguro: Hotmart (digital) e Uiclap (livro impresso).</span>
          </div>
        </header>

        <hr className="border-slate-100 mb-12" aria-hidden="true" />

        {/* SECTION: A DOR E A SOLUÇÃO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Por que o <strong className="text-green-700">Livro de Receitas Saudáveis e Nutritivas</strong> é diferente?
          </h2>
          <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
            <p>
              Você já sentiu que fazer dieta toma muito tempo? A maioria das pessoas desiste da reeducação alimentar porque a rotina atropela o planejamento. Chegar cansado do trabalho e ainda ter que descascar, picar e cozinhar alimentos do zero é a receita certa para acabar pedindo um aplicativo de delivery.
            </p>
            <p>
              Muito mais do que um simples livro de receitas, este material é um convite estruturado para você se reconectar com a comida de verdade e transformar a sua relação com a alimentação sem viver escravo do fogão. 
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 my-8 flex items-start gap-4">
              <BookOpen className="text-blue-700 shrink-0 mt-1" size={28} aria-hidden="true" />
              <p className="text-blue-800 text-base">
                <strong>O Segredo:</strong> O sucesso de uma dieta não está em fazer pratos complexos dignos de restaurante todos os dias, mas sim em aplicar inteligência no pré-preparo. É exatamente isso que você vai dominar com este material.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: FORMATOS DE VENDA (NOVO) */}
        <section id="formatos" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Escolha o <span className="text-green-700">formato ideal</span> para você
            </h2>
            <p className="text-lg text-slate-600">Disponível em versão digital para acesso imediato ou impresso para ter sempre na bancada da sua cozinha.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD DIGITAL */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border-2 border-slate-100 flex flex-col hover:border-green-200 transition-colors relative">
              <div className="flex-grow">
                <div className="w-16 h-16 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">E-book Digital (PDF)</h3>
                <p className="text-slate-600 mb-6 min-h-[48px]">Acesso imediato no seu celular, tablet ou computador. Perfeito para ler em qualquer lugar.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle size={18} className="text-green-600 shrink-0" /> <span className="text-sm font-medium">Download imediato após pagamento</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle size={18} className="text-green-600 shrink-0" /> <span className="text-sm font-medium">Layout adaptado para telas</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <CheckCircle size={18} className="text-green-600 shrink-0" /> <span className="text-sm font-medium">Sem custo de frete</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="mb-4">
                  <span className="text-4xl font-black text-slate-900">R$ 9,90</span>
                </div>
                <a 
                  href={checkoutLinkDigital}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-full font-black uppercase text-sm tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> Comprar Digital
                </a>
              </div>
            </div>

            {/* CARD FÍSICO */}
            <div className="bg-green-50 p-8 rounded-[3rem] shadow-2xl border-2 border-green-500 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 right-8 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                Mais Vendido
              </div>
              
              <div className="flex-grow">
                <div className="w-16 h-16 bg-white text-green-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100">
                  <Book size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Livro Físico Impresso</h3>
                <p className="text-slate-700 mb-6 min-h-[48px]">Receba o livro em casa! Qualidade premium para você folhear enquanto cozinha.</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-800">
                    <CheckCircle size={18} className="text-green-600 shrink-0" /> <span className="text-sm font-bold">Papel Couchê Premium (90g/m²)</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-800">
                    <CheckCircle size={18} className="text-green-600 shrink-0" /> <span className="text-sm font-bold">100% Colorido e Ilustrado (48 págs)</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-800">
                    <CheckCircle size={18} className="text-green-600 shrink-0" /> <span className="text-sm font-bold">Capa com Laminação Fosca (Tamanho 16x23cm)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-green-200">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-green-900">R$ 50,00</span>
                </div>
                <p className="text-xs text-green-800 mb-4 font-semibold flex items-center gap-1">
                  <Truck size={14} /> *Frete calculado no momento do pagamento.
                </p>
                <a 
                  href={checkoutLinkFisico}
                  onClick={registrarCompraFisico}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-full font-black uppercase text-sm tracking-widest shadow-lg shadow-green-700/30 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> Comprar Livro Físico
                </a>
                <div className="mt-4 rounded-2xl border border-green-300 bg-white/70 p-4 text-left">
                  <p className="text-xs font-bold text-green-900 m-0 mb-2 flex items-center gap-1"><Truck size={14} /> Aproveite: leve também o livro Antropometria — Do Zero ao Avançado e ganhe frete grátis.</p>
                  <button
                    type="button"
                    onClick={levarOsDois}
                    disabled={comboEstado === 'montando'}
                    className="w-full border-2 border-green-700 text-green-800 hover:bg-green-700 hover:text-white disabled:opacity-60 py-3 rounded-full font-black uppercase text-xs tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer bg-transparent"
                  >
                    <ShoppingCart size={16} /> Levar os 2 livros (frete grátis)
                  </button>
                  {comboEstado === 'aviso' && (
                    <p role="status" className="text-xs text-green-900 mt-2 mb-0">
                      Abrimos o livro de receitas na loja. Para levar também o Antropometria,{' '}
                      <a href={carrinhoAntropometria} target="_blank" rel="noopener noreferrer" className="font-black underline">toque aqui para adicioná-lo ao carrinho</a>.
                    </p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: O QUE TEM DENTRO (BENEFÍCIOS) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            O que você vai encontrar neste material:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <TrendingUp className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fundamentos e Planejamento</h3>
              <p className="text-slate-600">
                Aprenda a contabilizar suas refeições, porcionar corretamente e domine a exclusiva <strong>Técnica do 3x3</strong> para montar cardápios variados com uma única lista de compras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <Clock className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mise en Place (Pré-preparos)</h3>
              <p className="text-slate-600">
                Segredos de cozinha para economizar horas no fogão, incluindo o passo a passo para fazer tabletes de cebola, caldo de legumes cru, base de talos, alho em pasta e salsinha em pó.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <Zap className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lanches e Snacks Funcionais</h3>
              <p className="text-slate-600">
                Opções rápidas como Pão de Queijo Fit, Guacamole, Chips de Batata-doce na Airfryer e Barrinhas Proteicas Caseiras para saciar a fome com saúde.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <ChefHat className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pratos & Sobremesas</h3>
              <p className="text-slate-600">
                Refeições como Escondidinho Fit de Frango com Abóbora e doces incríveis sem culpa, como Brigadeiro de Tâmara Proteica e Morango Fit do Amor.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: GALERIA DE RECEITAS */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Um gostinho do que <span className="text-green-700">espera por você</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Comida de verdade, fácil de fazer e incrivelmente deliciosa. Olha só algumas das receitas que você vai aprender:
          </p>
          <div className="w-full max-w-2xl mx-auto rounded-[2rem] overflow-hidden shadow-xl border border-slate-200">
            <img 
              src={`${githubImgBase}Receitas.webp`} 
              alt="Galeria com 6 receitas do Ebook: Mousse, Guacamole, Overnight Oats, Pasta Fit, Barrinhas e Tomates Recheados" 
              title="Receitas Saudáveis na Prática"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width="600"
              height="426"
            />
          </div>
        </section>

        {/* SECTION: AMOSTRA GRÁTIS PDF */}
        <section className="mb-16 bg-blue-50 p-8 md:p-10 rounded-[3rem] border border-blue-100 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center justify-center md:justify-start gap-3">
              <Download className="text-blue-700 shrink-0" size={28} aria-hidden="true" /> 
              Quer testar antes de comprar?
            </h3>
            <p className="text-slate-700 mb-0 leading-relaxed">
              Baixe uma amostra grátis com duas receitas completas direto do nosso livro: o super prático <strong>Tablete de Cebola</strong> para você ganhar tempo no preparo e o incrível <strong>Brigadeiro de Tâmara Proteica</strong> para matar a vontade de doce mantendo a saúde.
            </p>
          </div>
          <a 
            href={pdfAmostra} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar amostra grátis do e-book em PDF"
            className="shrink-0 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-blue-700/30 hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            Acessar Amostra Grátis
          </a>
        </section>

        {/* SECTION: SUMÁRIO COMPLETO */}
        <section className="mb-16 bg-slate-50 p-8 md:p-10 rounded-[3rem] border border-slate-200 shadow-inner">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Sumário <span className="text-green-700">Completo</span>
            </h2>
            <p className="text-lg text-slate-600">Tudo o que você terá acesso imediato ao garantir o seu exemplar hoje.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                📝 Fundamentos & Planejamento
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 font-medium ml-2">
                <li>Contabilizar Refeições</li>
                <li>Porcionamento Adequado</li>
                <li>Técnica do 3x3</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                🛒 Mise en Place
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 font-medium ml-2">
                <li>Tabletes de Cebola</li>
                <li>Tabletes de Caldo de Legumes Cru</li>
                <li>Base de Talos</li>
                <li>Alho em Pasta</li>
                <li>Salsinha em Pó</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                🥪 Lanches
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 font-medium ml-2">
                <li>Overnight Proteico</li>
                <li className="leading-tight">Crepioca Proteica com Recheio de Whey, Pasta de Amendoim e Banana</li>
                <li>Geleia da Saciedade</li>
                <li>Pão de Queijo Fit</li>
                <li>Pizza de Frigideira Fit</li>
                <li>Iogurte Caseiro</li>
                <li>Guacamole</li>
                <li>Pasta Fit de Queijo com Cenoura</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                🍽️ Pratos Principais
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 font-medium ml-2">
                <li>Almôndega Suína Fit</li>
                <li>Salada de Quinoa ao Molho de Maracujá</li>
                <li>Tortão de Legumes</li>
                <li>Salada de Pote Funcional</li>
                <li>Escondidinho Fit de Frango com Abóbora</li>
                <li>Tomates Recheados Proteicos</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                🍰 Sobremesas Saudáveis
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 font-medium ml-2">
                <li>Bolo de Maçã de Micro-ondas</li>
                <li>Brigadeiro de Tâmara Proteica</li>
                <li>Bolo de Banana de Micro-ondas</li>
                <li>Morango Fit do Amor</li>
                <li className="leading-tight">Sorvete Fit de Banana e Pasta de Amendoim</li>
                <li>Mousse Protéico de Ovo Cozido</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                🍟 Snacks Funcionais
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 font-medium ml-2">
                <li>Grão-de-bico Crocante na Airfryer</li>
                <li>Crepioca Crocante na Airfryer</li>
                <li>Chips de Batata-doce na Airfryer</li>
                <li>Barrinhas Proteicas Caseira</li>
                <li>Tirinhas Crocantes de Frango</li>
              </ol>
            </div>
          </div>
        </section>

        {/* SECTION: RESPONSIVE TABLE VS CARDS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            A Diferença do Nosso Método
          </h2>

          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Característica</th>
                  <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Dietas Tradicionais</th>
                  <th className="p-4 font-bold text-green-700 bg-green-50 border-b border-green-100">Ebook: O Caminho da Praticidade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Tempo na Cozinha</td>
                  <td className="p-4">Horas perdidas todos os dias na beira do fogão.</td>
                  <td className="p-4 bg-green-50/50">Pré-preparos inteligentes feitos em um único dia.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Variedade de Pratos</td>
                  <td className="p-4">Cardápios monótonos (frango seco e batata doce).</td>
                  <td className="p-4 bg-green-50/50">Técnica do 3x3: Crie até 27 variações saborosas.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Desperdício</td>
                  <td className="p-4">Vegetais estragam com frequência na gaveta da geladeira.</td>
                  <td className="p-4 bg-green-50/50">Tudo é porcionado e congelado: Zero desperdício.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Sabor</td>
                  <td className="p-4">Sem graça, o que gera vontade de fugir da dieta.</td>
                  <td className="p-4 bg-green-50/50">Comida com afeto, bases ricas e temperos de verdade.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:hidden flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-100 pb-2">Tempo na Cozinha</h3>
              <p className="mb-2"><span className="text-red-600 font-semibold">❌ Tradicional:</span> Horas perdidas todos os dias.</p>
              <p><span className="text-green-600 font-semibold">✅ Nosso Método:</span> Pré-preparos em um único dia.</p>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-100 pb-2">Variedade</h3>
              <p className="mb-2"><span className="text-red-600 font-semibold">❌ Tradicional:</span> Monótono e sem graça.</p>
              <p><span className="text-green-600 font-semibold">✅ Nosso Método:</span> Técnica 3x3 com dezenas de variações.</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-100 pb-2">Desperdício e Sabor</h3>
              <p className="mb-2"><span className="text-red-600 font-semibold">❌ Tradicional:</span> Comida estraga e falta sabor.</p>
              <p><span className="text-green-600 font-semibold">✅ Nosso Método:</span> Congelamento tático, temperos frescos e bases ricas.</p>
            </div>
          </div>
        </section>

        {/* SECTION: DEPOIMENTOS (PROVA SOCIAL) */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Quem aplicou, <span className="text-green-700">não vive mais sem!</span>
            </h2>
            <p className="text-lg text-slate-600">Veja o que estão falando sobre a praticidade do nosso método.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-6">
                    "{depoimento.texto}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold uppercase">
                    {depoimento.nome.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">{depoimento.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: AUTOR E MASCOTE */}
        <section className="bg-green-50 rounded-3xl p-8 md:p-10 mb-16 border border-green-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 shrink-0 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white overflow-hidden">
             <ChefHat className="text-green-700 w-24 h-24" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Criado por Marco Aurelio Neves Junior & Píngus
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Tudo neste material foi elaborado com ingredientes acessíveis e combinações inteligentes testadas na prática. Meu objetivo sempre foi democratizar o acesso à nutrição de qualidade, mostrando que o simples funciona quando aplicado com técnica.
            </p>
            <p className="text-slate-700 font-semibold">
              Adquira agora, junte-se a mim e ao Píngus (nosso amado mascote), e leve muito mais organização, saúde e sabor para a sua vida!
            </p>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Não Perca Mais Tempo (Nem Comida)
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Por apenas <strong>R$ 9,90</strong>, você adquire o passo a passo definitivo para parar de sofrer na cozinha. É mais barato que um lanche na padaria!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={checkoutLinkDigital}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-xl transition-transform hover:-translate-y-1 w-full md:w-auto"
            >
              <ShoppingCart size={24} aria-hidden="true" />
              Comprar Digital
            </a>

            <a 
              href={checkoutLinkFisico}
                  onClick={registrarCompraFisico}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl shadow-green-700/40 transition-transform hover:-translate-y-1 w-full md:w-auto"
            >
              <Book size={24} aria-hidden="true" />
              Comprar Livro Físico
            </a>
          </div>
        </section>

        {/* AFFILIATE SECTION (PÚBLICO-ALVO VENDEDOR) */}
        <section className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-slate-300 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-green-400" size={32} aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Programa de Afiliados: Venda este Ebook!
            </h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            Seja muito bem-vindo(a) ao programa de afiliados do e-book <strong className="text-white">"Receitas Saudáveis e Nutritivas"</strong>! O nicho de alimentação saudável e praticidade é um dos que mais cresce no mercado digital. 
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={20} aria-hidden="true" />
              <span><strong className="text-white">Comissão Atrativa de 15%:</strong> Uma excelente margem para um produto de entrada, ideal para vendas rápidas e em volume.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={20} aria-hidden="true" />
              <span><strong className="text-white">Forte Apelo Visual:</strong> Material com design impecável e direto ao ponto, gerando autoridade imediata.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={20} aria-hidden="true" />
              <span><strong className="text-white">Dor Forte do Público:</strong> O produto resolve a falta de tempo e a dificuldade de variar o cardápio. É um e-book que "se vende sozinho".</span>
            </li>
          </ul>

          <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
            <p className="mb-4">Pronto para rentabilizar indicando saúde e organização?</p>
            <a 
              href={afiliadoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar painel de afiliação na Hotmart para revender o Ebook"
              className="inline-block underline text-green-400 font-bold hover:text-green-300 transition-colors text-lg"
            >
              Clique aqui e afilie-se agora na Hotmart
            </a>
          </div>
        </section>

      </main>

      {comboEstado === 'montando' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm px-4" role="dialog" aria-modal="true" aria-labelledby="combo-titulo">
          <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 text-center border-4 border-green-100">
            <div className="flex items-end justify-center gap-3 mb-6">
              <img src={`${githubImgBase}Antropometria_Livro_Vol1_Capa.webp`} alt="" width="1365" height="2000" className="w-20 h-auto rounded-md shadow-lg border border-slate-200 -rotate-3" />
              <span className="text-3xl font-black text-green-700 pb-8" aria-hidden="true">+</span>
              <img src={`${githubImgBase}Receitas.webp`} alt="" className="w-24 h-auto rounded-md shadow-lg border border-slate-200 rotate-3" />
            </div>
            <h3 id="combo-titulo" className="text-xl font-black text-slate-900 uppercase italic mb-1">Montando seu carrinho</h3>
            <p className="text-sm text-slate-600 font-medium mb-5">2 livros impressos • frete grátis</p>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden mb-4" aria-hidden="true">
              <div className="h-full bg-green-600 rounded-full" style={{ width: comboProgresso ? '100%' : '4%', transition: `width ${COMBO_ESPERA_MS}ms linear` }} />
            </div>
            <p role="status" aria-live="polite" className="text-sm font-bold text-green-800 min-h-[40px] m-0">{comboEtapas[comboEtapa]}</p>
            <p className="text-xs text-slate-500 mt-3 mb-0">Não feche esta página. Uma janelinha da loja abre e fecha sozinha.</p>
          </div>
        </div>
      )}
    </div>
  );
}