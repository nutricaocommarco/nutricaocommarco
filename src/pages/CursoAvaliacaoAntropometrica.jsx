import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  Ruler, Armchair, Pencil, FileSpreadsheet, GraduationCap, Coffee, BookOpen,
  Monitor, MapPin, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown,
  Users, Navigation, CalendarDays, ExternalLink, Info, ClipboardList, CreditCard, Copy, Check
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const capaLivro = `${githubImgBase}Antropometria_Livro_Vol1_Capa.webp`;
const fotoCurso = `${githubImgBase}Curso_Antropometria_Pratica.webp`;

const aulas = {
  online: { titulo: 'Aula Online', curta: '16/01/2027 • 18h', quando: 'Sábado, 16 de janeiro de 2027', horario: 'às 18h' },
  presencial: { titulo: 'Aula Presencial', curta: '23/01/2027 • 8h às 17h', quando: 'Sábado, 23 de janeiro de 2027', horario: 'das 8h às 17h' },
};

const equipamentosRecomendados = [
  {
    nome: 'Plicômetro Clínico Preto',
    marca: 'Avanutri',
    uso: 'Para medir as dobras cutâneas.',
    link: 'https://www.loja.avanutri.com.br/prod,idproduto,5486796,linha-nutricao-plicometro---adipometro-plicometro-clinico-preto-avanutri',
  },
  {
    nome: 'Paquímetro Ósseo 16 cm Preto',
    marca: 'Avanutri',
    uso: 'Para medir os diâmetros ósseos.',
    link: 'https://www.loja.avanutri.com.br/prod,idproduto,5736088,linha-nutricao-paquimetro-osseo-paquimetro-osseo-16cm-preto-avanutri',
  },
];

const WHATSAPP_NUMERO = '5521997704300';
const mensagemWhatsApp = 'Olá, Marco! Tenho uma dúvida sobre o Curso de Avaliação Antropométrica.';
const linkDuvidas = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemWhatsApp)}`;

// Inscrição: a ficha segue pelo WhatsApp do Marco e, em seguida, o pagamento é liberado na tela.
const LINK_PAGAMENTO = 'https://mpago.li/2uPUaTR';
const LINK_PAGAMENTO_COM_LIVRO = 'https://mpago.li/2qQQpcR'; // R$ 580,00 (curso + livro físico)
const PIX_CHAVE = '21997704300';
const PIX_CHAVE_EXIBIDA = '(21) 99770-4300';
const PRECO_CURSO = 500;
const PRECO_LIVRO_FISICO = 80;
const VAGAS_PRIMEIRO_LOTE = 4;
const CHAVE_STORAGE = 'inscricao_curso_antropometria';

const formatarReais = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

const formatarTelefone = (valor) => {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const formVazio = { nome: '', email: '', telefone: '', paquimetro: '', plicometro: '', livroFisico: false, aceite: false };

const lerInscricaoSalva = () => {
  try {
    const bruto = sessionStorage.getItem(CHAVE_STORAGE);
    return bruto ? JSON.parse(bruto) : null;
  } catch (e) {
    return null;
  }
};

const validarForm = (f) => {
  const erros = {};
  if (f.nome.trim().length < 3) erros.nome = 'Informe seu nome completo.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) erros.email = 'Informe um e-mail válido.';
  const digitos = f.telefone.replace(/\D/g, '');
  if (digitos.length < 10 || digitos.length > 11) erros.telefone = 'Informe o telefone com DDD.';
  if (!f.aceite) erros.aceite = 'É necessário autorizar o uso dos dados para enviar a ficha.';
  return erros;
};

const enderecoLocal = 'R. Salinópolis, 44 - Taquara, Rio de Janeiro - RJ, 22720-000';
const linkMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Estrela Café, ${enderecoLocal}`)}`;

const conteudo = [
  { icone: Monitor, titulo: 'Aula Teórica Online', texto: 'A parte teórica do curso, em formato online.' },
  { icone: Users, titulo: 'Aula Prática Presencial', texto: '8 horas de prática de medição, presencialmente, no Estrela Café (Taquara – RJ).' },
  { icone: BookOpen, titulo: 'Livro Digital', texto: 'Antropometria: Do Zero ao Avançado — Volume 1: Fundamentos, História e Protocolo de Medidas.' },
  { icone: FileSpreadsheet, titulo: 'Planilha de Avaliação Antropométrica', texto: 'Planilha de avaliação antropométrica incluída no curso.', link: { to: '/planilha', rotulo: 'Conhecer a planilha' } },
];

const materiais = [
  { icone: Ruler, nome: 'Fita antropométrica (Cescorf)' },
  { icone: Ruler, nome: 'Segmômetro' },
  { icone: Pencil, nome: 'Caneta' },
  { icone: Armchair, nome: 'Banqueta Vonder' },
];

const faqs = [
  {
    pergunta: 'O que está incluso no valor do curso?',
    resposta: 'Aula teórica online, aula prática presencial de 8 horas, o livro digital "Antropometria: Do Zero ao Avançado — Volume 1", a Planilha de Avaliação Antropométrica, fita antropométrica (Cescorf), segmômetro, caneta, banqueta Vonder e coffee break.'
  },
  {
    pergunta: 'Quando acontecem as aulas?',
    resposta: 'A aula online é no sábado, 16 de janeiro de 2027, às 18h. A aula presencial é no sábado, 23 de janeiro de 2027, das 8h às 17h.'
  },
  {
    pergunta: 'Paquímetro e plicômetro estão inclusos?',
    resposta: 'Não. O paquímetro e o plicômetro não estão inclusos no valor do curso. Os modelos recomendados são o Plicômetro Clínico Preto e o Paquímetro Ósseo 16 cm Preto, ambos da Avanutri, com os links de compra na seção "Equipamentos recomendados" desta página. Se tiver dúvidas, chame no WhatsApp antes de se inscrever.'
  },
  {
    pergunta: 'Onde acontece a aula prática?',
    resposta: 'No Estrela Café, na R. Salinópolis, 44 - Taquara, Rio de Janeiro - RJ, 22720-000.'
  },
  {
    pergunta: 'Quanto custa o curso?',
    resposta: 'O valor do primeiro lote é R$ 500,00, e o primeiro lote tem 4 vagas. O segundo lote custa R$ 600,00 e o terceiro, R$ 700,00. O preço sobe a cada lote, então garantir a vaga agora é pagar o menor valor.'
  },
  {
    pergunta: 'Como faço a inscrição e o pagamento?',
    resposta: 'Preencha a ficha de inscrição no fim desta página, com nome, e-mail, telefone e os equipamentos que você já tem. Ao enviar, a ficha segue para o WhatsApp do Marco e o pagamento é liberado por link de pagamento ou por Pix. Se quiser, você pode incluir o livro físico por mais R$ 80,00.'
  },
  {
    pergunta: 'Este curso dá certificação ISAK?',
    resposta: 'Não. Este não é um curso ISAK e não emite certificação ISAK: a certificação é emitida apenas por cursos oficiais credenciados pela própria ISAK. Este é um curso independente, que ensina e treina as técnicas de medição com base nos protocolos ISAK.'
  },
];

export default function CursoAvaliacaoAntropometrica() {
  const { pathname } = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [form, setForm] = useState(() => lerInscricaoSalva()?.form || formVazio);
  const [fichaEnviada, setFichaEnviada] = useState(() => Boolean(lerInscricaoSalva()));
  const [erros, setErros] = useState({});
  const [pixCopiado, setPixCopiado] = useState(false);
  const painelRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const total = PRECO_CURSO + (form.livroFisico ? PRECO_LIVRO_FISICO : 0);
  const linkPagamento = form.livroFisico && LINK_PAGAMENTO_COM_LIVRO ? LINK_PAGAMENTO_COM_LIVRO : LINK_PAGAMENTO;
  const livroForaDoLink = form.livroFisico && !LINK_PAGAMENTO_COM_LIVRO;

  const irParaInscricao = (e) => {
    e.preventDefault();
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const atualizar = (campo, valor) => {
    setForm((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => (atual[campo] ? { ...atual, [campo]: undefined } : atual));
  };

  const resumoEquipamento = (valor) => valor.trim() || 'Não possui';

  const mensagemFicha = [
    'Olá, Marco! Quero me inscrever no Curso de Avaliação Antropométrica (1º lote).',
    '',
    `*Nome:* ${form.nome.trim()}`,
    `*E-mail:* ${form.email.trim()}`,
    `*Telefone:* ${form.telefone}`,
    `*Paquímetro:* ${resumoEquipamento(form.paquimetro)}`,
    `*Plicômetro:* ${resumoEquipamento(form.plicometro)}`,
    `*Livro físico (+ ${formatarReais(PRECO_LIVRO_FISICO)}):* ${form.livroFisico ? 'Sim' : 'Não'}`,
    `*Total:* ${formatarReais(total)}`,
  ].join('\n');
  const linkFichaWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemFicha)}`;
  const linkPagoWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(`Olá, Marco! Já fiz o pagamento da inscrição no Curso de Avaliação Antropométrica (${formatarReais(total)}). Nome: ${form.nome.trim()}.`)}`;

  const enviarFicha = (e) => {
    e.preventDefault();
    const novosErros = validarForm(form);
    setErros(novosErros);
    const primeiroErro = Object.keys(novosErros)[0];
    if (primeiroErro) {
      document.getElementById(`inscricao-${primeiroErro}`)?.focus();
      return;
    }
    window.open(linkFichaWhatsApp, '_blank', 'noopener,noreferrer');
    setFichaEnviada(true);
    try {
      sessionStorage.setItem(CHAVE_STORAGE, JSON.stringify({ form }));
    } catch (err) { /* sem storage: o painel só não sobrevive ao recarregar */ }
    setTimeout(() => painelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  };

  const corrigirDados = () => {
    setFichaEnviada(false);
    try { sessionStorage.removeItem(CHAVE_STORAGE); } catch (err) { /* ignora */ }
  };

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CHAVE);
      setPixCopiado(true);
      setTimeout(() => setPixCopiado(false), 2500);
    } catch (err) {
      window.prompt('Copie a chave Pix:', PIX_CHAVE);
    }
  };

  const classeCampo = (campo) =>
    `w-full rounded-2xl border bg-white px-4 py-3 text-base font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${erros[campo] ? 'border-red-400' : 'border-slate-200'}`;

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-green-200 selection:text-green-900">

      {/* HERO */}
      <section className="relative px-4 md:px-6 pt-12 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <div className="flex items-center gap-2 md:gap-3 mb-5 md:mb-6 bg-white px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm border border-slate-200">
              <GraduationCap className="text-green-700 w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider md:tracking-widest text-slate-700 whitespace-nowrap">Curso Presencial + Online • 1º Lote</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic leading-tight mb-6 text-slate-900">
              Curso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Avaliação Antropométrica</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl leading-relaxed mb-8">
              Aula teórica online, 8 horas de prática presencial no Rio de Janeiro e o livro digital <strong>Antropometria: Do Zero ao Avançado</strong>. Tudo para você sair da insegurança na hora de pegar o instrumento e aprender a medir de verdade.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6 max-w-xl text-left flex items-start gap-3">
              <Info size={20} className="text-blue-700 shrink-0 mt-0.5" />
              <p className="m-0 text-sm text-blue-900 font-medium leading-relaxed"><strong>Baseado nos protocolos ISAK, mas não é um curso ISAK.</strong> É um curso independente e não emite certificação ISAK.</p>
            </div>

            <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3 mb-6 w-full sm:w-auto">
              {[aulas.online, aulas.presencial].map((aula) => (
                <div key={aula.titulo} className="flex items-center justify-center sm:justify-start gap-3 bg-white border border-green-100 rounded-2xl px-3 sm:px-4 py-3 text-left shadow-sm">
                  <CalendarDays className="text-green-700 shrink-0 hidden sm:block" size={20} />
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-green-700">{aula.titulo}</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-800">{aula.curta}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 bg-white p-4 rounded-[2rem] shadow-xl border border-slate-100 w-full sm:w-fit">
              <div className="bg-slate-900 text-white px-8 py-4 rounded-3xl text-center min-w-[190px]">
                <span className="block text-[10px] font-black uppercase tracking-widest text-green-400 mb-1">Primeiro Lote • {VAGAS_PRIMEIRO_LOTE} vagas</span>
                <span className="block text-4xl font-black italic tracking-tighter"><span className="text-xl text-green-400 mr-1">R$</span>500<span className="text-xl text-green-400">,00</span></span>
                <span className="block text-[11px] font-bold text-slate-300 mt-2 leading-snug">2º lote: R$ 600 • 3º lote: R$ 700</span>
                <span className="block text-[10px] font-black uppercase tracking-widest text-green-400 mt-1">O preço sobe a cada lote</span>
              </div>
              <a
                href="#inscricao"
                onClick={irParaInscricao}
                aria-label="Ir para a ficha de inscrição do curso de avaliação antropométrica"
                className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-5 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full sm:w-auto italic"
              >
                <ClipboardList size={20} /> Garantir minha vaga
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-none sm:w-72 lg:w-96 aspect-[4/3] sm:aspect-[1493/2000] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <ImagemOtimizada
                src={fotoCurso}
                alt="Medição de dobra cutânea com plicômetro (adipômetro) na região do abdômen, com o ponto anatômico marcado na pele, durante uma avaliação antropométrica"
                title="Aula prática de avaliação antropométrica"
                className="absolute inset-0 w-full h-full object-cover object-[50%_40%] sm:object-center"
                priority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-5xl bg-white p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-3 text-center">O que está incluso</h2>
          <p className="text-slate-600 font-medium text-center max-w-2xl mx-auto mb-10">Conteúdo, materiais e conforto no mesmo valor do primeiro lote.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {conteudo.map((item) => (
              <div key={item.titulo} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-700 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <item.icone size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 mb-1">{item.titulo}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed m-0">{item.texto}</p>
                  {item.link && (
                    <Link to={item.link.to} className="inline-block mt-2 text-sm font-bold text-green-700 underline">{item.link.rotulo}</Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Materiais incluídos</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 mb-6">
            {materiais.map((m) => (
              <li key={m.nome} className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-4 text-slate-800 font-bold">
                <m.icone size={20} className="text-green-700 shrink-0" />
                {m.nome}
              </li>
            ))}
            <li className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-4 text-slate-800 font-bold sm:col-span-2">
              <Coffee size={20} className="text-green-700 shrink-0" />
              Coffee break
            </li>
          </ul>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-orange-800 flex items-start gap-3 mb-8">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <p className="m-0 font-medium"><strong>Não incluso:</strong> paquímetro e plicômetro. Veja abaixo os modelos que eu recomendo.</p>
          </div>

          <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Equipamentos recomendados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {equipamentosRecomendados.map((eq) => (
              <a
                key={eq.nome}
                href={eq.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${eq.nome} (${eq.marca}) na loja Avanutri`}
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-green-600 hover:shadow-lg transition-all no-underline"
              >
                <span className="block text-[10px] font-black uppercase tracking-widest text-green-700 mb-1">{eq.marca}</span>
                <span className="block text-lg font-black text-slate-800 mb-1 group-hover:text-green-700 transition-colors">{eq.nome}</span>
                <span className="block text-sm text-slate-600 font-medium mb-3">{eq.uso}</span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-green-700 underline">Ver na loja <ExternalLink size={14} /></span>
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 mb-0">Os links levam à loja Avanutri, que é a responsável pela venda, pelo preço e pela entrega.</p>
        </div>
      </section>

      {/* LIVRO DIGITAL */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-5xl bg-slate-900 rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-2xl border-4 border-green-500/20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-40 md:w-56 shrink-0 aspect-[1365/2000] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-800">
            <ImagemOtimizada
              src={capaLivro}
              alt="Capa do livro digital Antropometria: Do Zero ao Avançado, Volume 1 — Fundamentos, História e Protocolo de Medidas, de Marco Aurélio Neves Júnior"
              title="Antropometria: Do Zero ao Avançado — Volume 1"
              className="absolute inset-0 w-full h-full object-cover"
              priority="low"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="inline-block bg-green-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Incluso no curso</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic leading-tight mb-3">Antropometria: Do Zero ao Avançado</h2>
            <p className="text-green-400 font-black uppercase tracking-widest text-xs mb-4">Volume 1 • Fundamentos, História e Protocolo de Medidas</p>
            <p className="text-slate-300 font-medium leading-relaxed m-0">Livro digital de Marco Aurélio Neves Júnior que acompanha o curso, com os fundamentos, a história da antropometria e o protocolo de medidas.</p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-8 text-center">Para quem é</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Estudantes de Nutrição e Educação Física que querem treinar a técnica de medição além da teoria.',
              'Profissionais recém-formados que buscam mais segurança com o plicômetro, a fita e o protocolo de medidas.',
              'Quem já avalia e quer revisar a técnica e o protocolo de medidas com aula prática presencial.',
            ].map((texto) => (
              <div key={texto} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-3 items-start">
                <CheckCircle2 size={22} className="text-green-700 shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium leading-relaxed m-0">{texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 font-medium mt-8">
            Quer entender o assunto antes de se inscrever? Leia o guia <Link to="/avaliacao-antropometrica" className="text-green-700 font-bold underline">como fazer uma avaliação antropométrica de qualidade</Link> e veja <Link to="/o_que_e_antropometria" className="text-green-700 font-bold underline">o que é antropometria</Link>.
          </p>
        </div>
      </section>

      {/* LOCAL */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-5xl bg-slate-900 rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-2xl border-4 border-green-500/20">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-8">Onde e quando</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">
              <MapPin className="text-green-400 mb-3" size={26} />
              <h3 className="text-xl font-black text-white mb-2">Estrela Café</h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-5">R. Salinópolis, 44<br />Taquara, Rio de Janeiro - RJ<br />CEP 22720-000</p>
              <a
                href={linkMapa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o endereço do Estrela Café no Google Maps"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-green-100 transition-colors"
              >
                <Navigation size={16} /> Ver no mapa
              </a>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6">
              <CalendarDays className="text-green-400 mb-3" size={26} />
              <h3 className="text-xl font-black text-white mb-4">Data e horário</h3>
              <ul className="list-none p-0 m-0 space-y-4">
                {[aulas.online, aulas.presencial].map((aula) => (
                  <li key={aula.titulo} className="text-slate-300 font-medium leading-relaxed">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-green-400 mb-0.5">{aula.titulo}</span>
                    <span className="block text-white font-bold">{aula.quando}</span>
                    <span className="block">{aula.horario}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUTOR */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-5xl bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-700">
            <ImagemOtimizada
              src={`${githubImgBase}marco-aurelio.png`}
              alt="Marco Aurélio Neves Júnior, instrutor do curso e autor do livro Antropometria: Do Zero ao Avançado"
              title="Marco Aurélio Neves Júnior"
              className="w-full h-full object-cover"
              priority="low"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic mb-1">Quem vai te ensinar</h2>
            <p className="text-xs text-green-700 uppercase tracking-widest font-black mb-4">Marco Aurélio Neves Júnior • Antropometrista ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-4">
              Estudante de Nutrição na Unicesumar, autor do livro <em>Antropometria: Do Zero ao Avançado</em> e responsável pelo blog Nutrição com Marco. Realizo avaliações antropométricas presenciais no Rio de Janeiro.
            </p>
            <p className="text-sm font-bold m-0">
              <Link to="/sobre" className="text-green-700 underline">Conheça minha história</Link>
              <span className="text-slate-400 mx-2">•</span>
              <Link to="/certificacoes" className="text-green-700 underline">Ver certificações</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-6 pb-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase italic mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.pergunta} className="bg-white rounded-3xl border border-green-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  aria-expanded={openFaqIndex === index}
                  aria-label={`Abrir resposta para: ${faq.pergunta}`}
                  className="w-full p-6 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
                >
                  <h3 className={`text-base md:text-lg font-black m-0 italic transition-colors ${openFaqIndex === index ? 'text-green-700' : 'text-slate-800 group-hover:text-green-700'}`}>{faq.pergunta}</h3>
                  <ChevronDown className={`text-slate-500 shrink-0 ml-4 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-700' : ''}`} size={24} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[600px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6 pb-0'}`}>
                  <p className="text-slate-600 font-medium leading-relaxed m-0 border-t border-green-100/60 pt-4">{faq.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSCRIÇÃO */}
      <section id="inscricao" className="px-4 md:px-6 pb-24 scroll-mt-24">
        <div className="container mx-auto max-w-3xl p-6 sm:p-8 md:p-12 bg-green-50 border border-green-200 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-8 text-center sm:text-left">
            <img src={`${githubImgBase}logoN_pingus.webp`} alt="Píngus, mascote do Nutrição com Marco" width="128" height="128" loading="lazy" className="w-24 md:w-28 h-auto shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-2">Garanta sua vaga no primeiro lote</h2>
              <p className="text-slate-700 font-medium m-0">
                O primeiro lote tem <strong>{VAGAS_PRIMEIRO_LOTE} vagas</strong>, por <strong>R$ 500,00</strong>. O 2º lote custa R$ 600 e o 3º, R$ 700: quanto antes você se inscrever, menos paga.
              </p>
            </div>
          </div>

          {!fichaEnviada ? (
            <form onSubmit={enviarFicha} noValidate className="bg-white rounded-3xl border border-green-100 shadow-sm p-5 sm:p-7 flex flex-col gap-5">
              <div>
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest m-0">Ficha de inscrição</h3>
                <p className="text-sm text-slate-600 font-medium mt-1 mb-0">Preencha para liberar o pagamento.</p>
              </div>

              <div>
                <label htmlFor="inscricao-nome" className="block text-sm font-bold text-slate-700 mb-1.5">Nome completo</label>
                <input id="inscricao-nome" type="text" autoComplete="name" value={form.nome} onChange={(e) => atualizar('nome', e.target.value)} className={classeCampo('nome')} aria-invalid={Boolean(erros.nome)} />
                {erros.nome && <p role="alert" className="text-xs font-bold text-red-600 mt-1 mb-0">{erros.nome}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inscricao-email" className="block text-sm font-bold text-slate-700 mb-1.5">E-mail</label>
                  <input id="inscricao-email" type="email" autoComplete="email" inputMode="email" value={form.email} onChange={(e) => atualizar('email', e.target.value)} className={classeCampo('email')} aria-invalid={Boolean(erros.email)} />
                  {erros.email && <p role="alert" className="text-xs font-bold text-red-600 mt-1 mb-0">{erros.email}</p>}
                </div>
                <div>
                  <label htmlFor="inscricao-telefone" className="block text-sm font-bold text-slate-700 mb-1.5">Telefone / WhatsApp</label>
                  <input id="inscricao-telefone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(21) 99999-9999" value={form.telefone} onChange={(e) => atualizar('telefone', formatarTelefone(e.target.value))} className={classeCampo('telefone')} aria-invalid={Boolean(erros.telefone)} />
                  {erros.telefone && <p role="alert" className="text-xs font-bold text-red-600 mt-1 mb-0">{erros.telefone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="inscricao-paquimetro" className="block text-sm font-bold text-slate-700 mb-1.5">Possui paquímetro? Qual?</label>
                  <input id="inscricao-paquimetro" type="text" placeholder="Marca/modelo (vazio se não tiver)" value={form.paquimetro} onChange={(e) => atualizar('paquimetro', e.target.value)} className={classeCampo('paquimetro')} />
                </div>
                <div>
                  <label htmlFor="inscricao-plicometro" className="block text-sm font-bold text-slate-700 mb-1.5">Possui plicômetro? Qual?</label>
                  <input id="inscricao-plicometro" type="text" placeholder="Marca/modelo (vazio se não tiver)" value={form.plicometro} onChange={(e) => atualizar('plicometro', e.target.value)} className={classeCampo('plicometro')} />
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium -mt-2 mb-0">Paquímetro e plicômetro não estão inclusos. Se ainda não tem, veja os modelos recomendados em &ldquo;Equipamentos recomendados&rdquo;, acima.</p>

              <label htmlFor="inscricao-livro" className={`flex items-start gap-3 rounded-2xl border p-4 cursor-pointer transition-colors ${form.livroFisico ? 'border-green-600 bg-green-50' : 'border-slate-200 bg-slate-50'}`}>
                <input id="inscricao-livro" type="checkbox" checked={form.livroFisico} onChange={(e) => atualizar('livroFisico', e.target.checked)} className="mt-1 h-5 w-5 accent-green-700 shrink-0" />
                <span className="text-sm font-bold text-slate-800 leading-snug">
                  Quero também o livro físico (+ {formatarReais(PRECO_LIVRO_FISICO)})
                  <span className="block text-xs font-medium text-slate-500 mt-0.5">O livro digital já está incluso no curso.</span>
                </span>
              </label>

              <div className="flex items-center justify-between bg-slate-900 text-white rounded-2xl px-5 py-4">
                <span className="text-xs font-black uppercase tracking-widest text-green-400">Total</span>
                <span className="text-2xl font-black italic tracking-tighter whitespace-nowrap">{formatarReais(total)}</span>
              </div>

              <div>
                <label htmlFor="inscricao-aceite" className="flex items-start gap-3 cursor-pointer">
                  <input id="inscricao-aceite" type="checkbox" checked={form.aceite} onChange={(e) => atualizar('aceite', e.target.checked)} className="mt-0.5 h-5 w-5 accent-green-700 shrink-0" aria-invalid={Boolean(erros.aceite)} />
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">Autorizo o uso dos meus dados (nome, e-mail e telefone) para contato e organização deste curso.</span>
                </label>
                {erros.aceite && <p role="alert" className="text-xs font-bold text-red-600 mt-1 mb-0">{erros.aceite}</p>}
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-lg hover:bg-green-800 transition-all duration-300 w-full italic">
                <ClipboardList size={18} /> Enviar ficha e liberar pagamento
              </button>
              <p className="text-xs text-slate-500 font-medium text-center m-0">
                Ao enviar, o WhatsApp abre com a sua ficha pronta para o Marco. É só tocar em enviar.
              </p>
            </form>
          ) : (
            <div ref={painelRef} className="bg-white rounded-3xl border border-green-100 shadow-sm p-5 sm:p-7 flex flex-col gap-5" role="status">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-700 shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="text-lg font-black text-slate-800 m-0">Ficha pronta! Falta só o pagamento.</h3>
                  <p className="text-sm text-slate-600 font-medium mt-1 mb-0">
                    Se o WhatsApp não abriu, ou você ainda não tocou em enviar,{' '}
                    <a href={linkFichaWhatsApp} target="_blank" rel="noopener noreferrer" className="font-bold text-green-700 underline">envie sua ficha pelo WhatsApp</a>.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-slate-900 text-white rounded-2xl px-5 py-4">
                <span className="text-xs font-black uppercase tracking-widest text-green-400">Total a pagar</span>
                <span className="text-2xl font-black italic tracking-tighter whitespace-nowrap">{formatarReais(total)}</span>
              </div>

              {livroForaDoLink && (
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
                  <AlertTriangle size={20} className="text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-900 font-medium leading-relaxed m-0">
                    Você escolheu o livro físico, então o total é <strong>{formatarReais(total)}</strong>. O link de pagamento abaixo é do curso ({formatarReais(PRECO_CURSO)}): pague os {formatarReais(PRECO_LIVRO_FISICO)} do livro por Pix, ou pague o total direto no Pix.
                  </p>
                </div>
              )}

              <a
                href={linkPagamento}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-lg hover:bg-green-800 transition-all duration-300 w-full italic"
              >
                <CreditCard size={18} /> Pagar pelo link de pagamento
              </a>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center sm:text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Ou pague por Pix (chave celular)</span>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xl font-black text-slate-800 tracking-tight">{PIX_CHAVE_EXIBIDA}</span>
                  <button type="button" onClick={copiarPix} className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors w-full sm:w-auto">
                    {pixCopiado ? <><Check size={16} className="text-green-700" /> Chave copiada</> : <><Copy size={16} /> Copiar chave</>}
                  </button>
                </div>
              </div>

              <a
                href={linkPagoWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-green-700 text-green-800 px-8 py-3.5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-green-100 transition-colors w-full italic"
              >
                <MessageCircle size={18} /> Já paguei: avisar no WhatsApp
              </a>

              <button type="button" onClick={corrigirDados} className="text-xs font-bold text-slate-500 underline self-center bg-transparent border-0 cursor-pointer">Corrigir meus dados</button>
            </div>
          )}

          <p className="text-center text-sm text-slate-600 font-medium mt-6 mb-0">
            Ficou com alguma dúvida?{' '}
            <a href={linkDuvidas} target="_blank" rel="noopener noreferrer" className="font-bold text-green-700 underline">Chame no WhatsApp</a>.
          </p>
          <p className="text-[11px] text-slate-500 font-medium mt-4 mb-0 text-center">Curso independente, baseado nos protocolos ISAK. Não é um curso ISAK e não emite certificação ISAK.</p>
        </div>
      </section>
    </div>
  );
}
