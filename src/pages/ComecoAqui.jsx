import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Calculator, FileText, Table2, GraduationCap, Store, ChevronRight, Instagram, Mail, Truck, CheckCircle2 } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const githubRaw = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/";
const URL_PAGINA = "https://www.nutricaocommarco.com.br/comece-aqui";
const OG_IMG = "https://www.nutricaocommarco.com.br/comece-aqui-og.jpg";

// Mesmo endpoint do formulário do curso: o e-mail chega identificado pelo campo "formulario".
const FORMSPREE_URL = 'https://formspree.io/f/xbgdzqpe';

const UTM = 'utm_source=instagram&utm_medium=bio&utm_campaign=comece-aqui';
const comUtm = (caminho, conteudo) => `${caminho}${caminho.includes('?') ? '&' : '?'}${UTM}&utm_content=${conteudo}`;

// Clique medido no GA4 que o site já carrega (nenhum rastreador novo).
const registrarClique = (item) => {
  try {
    if (typeof window.loadTrackingScripts === 'function') window.loadTrackingScripts();
    window.dataLayer = window.dataLayer || [];
    const gtag = function () { window.dataLayer.push(arguments); };
    gtag('event', 'click_comece_aqui', { item, transport_type: 'beacon' });
  } catch (err) { /* medição nunca bloqueia o clique */ }
};

const classeLinha = "group flex items-center gap-4 w-full min-h-[64px] bg-white rounded-3xl border border-slate-200 p-3 pr-4 shadow-sm hover:shadow-lg hover:border-green-200 transition-all no-underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-green-700";

// Linha de link: <Link> para rotas do React, <a> para páginas estáticas e PDFs.
function Linha({ item, to, href, externo, icone, imagem, alt = '', titulo, texto, selo }) {
  const miolo = (
    <>
      <span className="shrink-0 w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center overflow-hidden">
        {imagem
          ? <img src={imagem} alt={alt} width="56" height="56" loading="lazy" decoding="async" className="w-full h-full object-contain" />
          : icone}
      </span>
      <span className="flex-1 min-w-0 text-left">
        <span className="block text-base font-black text-slate-900 leading-tight">{titulo}</span>
        <span className="block text-sm font-medium text-slate-600 leading-snug mt-0.5">{texto}</span>
      </span>
      {selo && <span className="shrink-0 bg-white text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide">{selo}</span>}
      <ChevronRight size={20} className="shrink-0 text-slate-400 group-hover:text-green-700" aria-hidden="true" />
    </>
  );
  if (to) return <Link to={to} onClick={() => registrarClique(item)} className={classeLinha}>{miolo}</Link>;
  return <a href={href} onClick={() => registrarClique(item)} {...(externo ? { target: '_blank', rel: 'noreferrer' } : {})} className={classeLinha}>{miolo}</a>;
}

function Secao({ titulo, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-3 px-1">{titulo}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

const classeCampo = "w-full min-h-[48px] rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-medium text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700";

function ListaInteresseCurso() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', site: '' });
  const [estado, setEstado] = useState('parado'); // parado | enviando | ok | erro

  const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    if (form.site) return; // campo-isca: robôs preenchem, pessoas não veem
    setEstado('enviando');
    try {
      const resposta = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Lista de interesse — Curso de Antropometria (Comece aqui)',
          formulario: 'lista-interesse-curso-comece-aqui',
          nome: form.nome.trim(),
          email: form.email.trim(),
          whatsapp: form.whatsapp.trim(),
          origem: 'instagram-bio',
        }),
      });
      if (resposta.ok) {
        setEstado('ok');
        registrarClique('lista_interesse_curso_enviada');
      } else setEstado('erro');
    } catch (err) {
      setEstado('erro');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="shrink-0 w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center"><GraduationCap size={24} className="text-green-700" aria-hidden="true" /></span>
        <div>
          <p className="text-base font-black text-slate-900 leading-tight m-0">Curso de Antropometria</p>
          <span className="inline-block mt-1 bg-white text-green-700 border border-green-200 rounded-full px-3 py-0.5 text-xs font-black uppercase tracking-wide">Em breve</span>
        </div>
      </div>
      <p className="text-sm font-medium text-slate-600 leading-snug mb-4">Quer ser avisado quando abrir? Deixe seu contato na lista de interesse.</p>

      {estado === 'ok' ? (
        <p role="status" className="flex items-start gap-2 bg-green-50 border border-green-200 text-green-900 rounded-2xl p-4 text-sm font-bold m-0">
          <CheckCircle2 size={20} className="shrink-0 text-green-700 mt-0.5" aria-hidden="true" /> Pronto! Você está na lista e será avisado por e-mail.
        </p>
      ) : (
        <form onSubmit={enviar} className="flex flex-col gap-3" noValidate={false}>
          <div>
            <label htmlFor="ca-nome" className="block text-sm font-bold text-slate-800 mb-1">Nome</label>
            <input id="ca-nome" name="nome" type="text" autoComplete="name" required value={form.nome} onChange={mudar('nome')} className={classeCampo} />
          </div>
          <div>
            <label htmlFor="ca-email" className="block text-sm font-bold text-slate-800 mb-1">E-mail</label>
            <input id="ca-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={mudar('email')} className={classeCampo} />
          </div>
          <div>
            <label htmlFor="ca-whatsapp" className="block text-sm font-bold text-slate-800 mb-1">WhatsApp <span className="font-medium text-slate-600">(opcional)</span></label>
            <input id="ca-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" value={form.whatsapp} onChange={mudar('whatsapp')} className={classeCampo} />
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label htmlFor="ca-site">Não preencha</label>
            <input id="ca-site" name="site" type="text" tabIndex={-1} autoComplete="off" value={form.site} onChange={mudar('site')} />
          </div>
          <button type="submit" disabled={estado === 'enviando'} className="min-h-[52px] bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold shadow-xl hover:bg-slate-800 disabled:opacity-60 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-green-700">
            {estado === 'enviando' ? 'Enviando…' : 'Entrar na lista'}
          </button>
          {estado === 'erro' && <p role="alert" className="text-sm font-bold text-red-700 m-0">Não foi possível enviar agora. Tente de novo em instantes ou escreva para contato@nutricaocommarco.com.br.</p>}
          <p className="text-xs font-medium text-slate-600 leading-snug m-0">Ao entrar, você aceita receber avisos sobre o curso. Dá para sair quando quiser.</p>
        </form>
      )}
    </div>
  );
}

export default function ComecoAqui() {
  return (
    <>
      <Helmet>
        <title>Comece aqui | Nutrição com Marco</title>
        <meta name="description" content="Antropometria na prática: livro, e-book, ferramentas gratuitas e artigos para aprender a medir certo e a ler o resultado. Por Marco Aurélio Neves Júnior." />
        <link rel="canonical" href={URL_PAGINA} />
        <meta property="og:title" content="Comece aqui | Nutrição com Marco" />
        <meta property="og:description" content="Antropometria na prática: aprenda a medir certo e a ler o resultado." />
        <meta property="og:image" content={OG_IMG} />
        <meta property="og:url" content={URL_PAGINA} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="px-4 py-8 pb-12">
        <div className="max-w-md mx-auto">

          {/* TOPO */}
          <header className="text-center">
            <img src="/logoN_pingus.webp" alt="Píngus, o mascote do Nutrição com Marco, de chapéu e jaqueta de safári" width="96" height="96" className="w-24 h-24 mx-auto mb-3" />
            <h1 className="text-5xl font-black text-white italic titulo-vazado uppercase leading-tight mb-4">Comece aqui</h1>
            <p className="text-lg font-black text-slate-900 m-0">Marco Aurélio Neves Júnior</p>
            <span className="inline-block bg-white text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest my-3 shadow-sm border border-green-200">Antropometrista ISAK Nível 1 · Estudante de Nutrição</span>
            <p className="text-base font-medium text-slate-700 leading-relaxed m-0">Antropometria na prática: aprenda a medir certo e a ler o resultado.</p>
          </header>

          {/* DESTAQUE: LIVRO */}
          <section className="mt-8" aria-label="Livro em destaque">
            <div className="bg-white rounded-[2rem] border-2 border-green-200 shadow-xl p-5">
              <div className="flex gap-4 items-center">
                <img src={`${githubImgBase}Antropometria_Livro_Vol1_Capa.webp`} alt="Capa do livro Antropometria: Do Zero ao Avançado, Volume 1" width="112" height="168" decoding="async" className="shrink-0 w-28 h-auto rounded-md shadow-lg border border-slate-100" />
                <div className="min-w-0">
                  <span className="inline-block bg-white text-green-700 border border-green-200 rounded-full px-3 py-0.5 text-xs font-black uppercase tracking-wide mb-2">Livro impresso</span>
                  <h2 className="text-xl font-black text-slate-900 leading-tight m-0 mb-1">Antropometria: Do Zero ao Avançado, Vol. 1</h2>
                  <p className="text-sm font-medium text-slate-600 m-0">369 páginas</p>
                </div>
              </div>
              <p className="text-3xl font-black text-slate-900 mt-4 mb-0">R$ 149,90 <span className="text-sm font-bold text-slate-600">ou 12x de R$ 14,20</span></p>
              <p className="flex items-center gap-2 text-sm font-bold text-green-700 mt-1 mb-4"><Truck size={16} aria-hidden="true" /> Frete grátis</p>
              <a href={comUtm('/livro-antropometria', 'livro-antropometria')} onClick={() => registrarClique('livro_antropometria')} className="flex items-center justify-center min-h-[52px] bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all no-underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-green-700">Quero meu exemplar</a>
            </div>
          </section>

          <Secao titulo="Para ler e estudar">
            <Linha item="ebook_receitas" to={comUtm('/ebook-receitas', 'ebook-receitas')} imagem={`${githubImgBase}capa_receitas.webp`} alt="Capa do e-book Receitas Saudáveis e Nutritivas" titulo="Receitas Saudáveis e Nutritivas" texto="E-book para a cozinha do dia a dia" selo="R$ 9,90" />
            <Linha item="livro_fome" href={comUtm('/livro-entre-a-fome-e-a-saciedade', 'livro-fome')} imagem={`${githubImgBase}Livro_Fome_Saciedade_Capa.webp`} alt="Capa do livro Entre a Fome e a Saciedade" titulo="Entre a Fome e a Saciedade" texto="Livro impresso sobre alimentação consciente" selo="R$ 29,90" />
            <Linha item="planilha" to={comUtm('/planilha', 'planilha')} icone={<Table2 size={26} className="text-green-700" aria-hidden="true" />} titulo="Planilha Antropométrica" texto="Para organizar suas avaliações" selo="R$ 50,00" />
          </Secao>

          <Secao titulo="Materiais gratuitos">
            <Linha item="manual_antropometria" href={comUtm(`${githubRaw}Ebooks/Antropometria-ebook.pdf`, 'manual-antropometria')} externo icone={<FileText size={26} className="text-green-700" aria-hidden="true" />} titulo="Manual de Antropometria" texto="PDF para baixar" selo="Grátis" />
            <Linha item="calculadora_gasto" to={comUtm('/calculadora-de-gasto-calorico', 'calculadora-gasto')} icone={<Calculator size={26} className="text-green-700" aria-hidden="true" />} titulo="Calculadora de Gasto Calórico" texto="Estime seu gasto energético" selo="Grátis" />
          </Secao>

          <Secao titulo="Curso">
            <ListaInteresseCurso />
          </Secao>

          <Secao titulo="Loja Píngus">
            <Linha item="loja" to={comUtm('/loja', 'loja')} icone={<Store size={26} className="text-green-700" aria-hidden="true" />} titulo="Ver todos os produtos" texto="Livros, e-books e ferramentas" />
          </Secao>

          <Secao titulo="Comece pelos artigos">
            <Linha item="artigo_antropometria" to={comUtm('/o_que_e_antropometria', 'artigo-antropometria')} icone={<BookOpen size={26} className="text-green-700" aria-hidden="true" />} titulo="O que é antropometria?" texto="Muito além do peso da balança" />
            <Linha item="artigo_bioimpedancia" to={comUtm('/a_balanca_de_bioimpedancia_e_confiavel', 'artigo-bioimpedancia')} icone={<BookOpen size={26} className="text-green-700" aria-hidden="true" />} titulo="A balança de bioimpedância é confiável?" texto="O que muda o resultado" />
            <Linha item="artigo_cintura_quadril" to={comUtm('/relacao-cintura-quadril', 'artigo-cintura-quadril')} icone={<BookOpen size={26} className="text-green-700" aria-hidden="true" />} titulo="Relação cintura-quadril" texto="Como medir e calcular" />
          </Secao>

          {/* RODAPÉ */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center">
            <div className="flex justify-center gap-4 mb-5">
              <a href={comUtm('https://instagram.com/nutricao_com_marco', 'rodape-instagram')} target="_blank" rel="noreferrer" aria-label="Instagram @nutricao_com_marco" className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-green-700 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-green-700"><Instagram size={22} /></a>
              <a href="mailto:contato@nutricaocommarco.com.br" aria-label="E-mail contato@nutricaocommarco.com.br" className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-green-700 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-green-700"><Mail size={22} /></a>
            </div>
            <p className="text-sm font-bold text-slate-700 m-0 mb-1">contato@nutricaocommarco.com.br</p>
            <Link to={comUtm('/', 'site-completo')} className="inline-flex items-center min-h-[44px] text-sm font-bold text-green-700 underline">Ver o site completo</Link>
            <p className="text-xs font-medium text-slate-600 leading-snug mt-3 mb-0">Conteúdo educativo. Não substitui avaliação individual por profissional habilitado.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
