import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import { posts } from '../data/posts';
import {
  Gift, FileSpreadsheet, GraduationCap, Coffee, BookOpen,
  Monitor, MapPin, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ChevronRight,
  Users, Navigation, CalendarDays, ExternalLink, Info, ClipboardList, CreditCard
} from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const capaLivro = `${githubImgBase}Antropometria_Livro_Vol1_Capa.webp`;
const fotoCurso = `${githubImgBase}Curso_Antropometria_Pratica.webp`;

const aulas = {
  online: { titulo: 'Aula Online', curta: '16/01/2027 • 18h às 21h', quando: 'Sábado, 16 de janeiro de 2027', horario: 'das 18h às 21h' },
  presencial: { titulo: 'Aula Presencial', curta: '23/01/2027 • 8h às 17h', quando: 'Sábado, 23 de janeiro de 2027', horario: 'das 8h às 17h' },
};

const equipamentosRecomendados = [
  {
    nome: 'Plicômetro Clínico Preto',
    marca: 'Avanutri',
    uso: 'Para medir as dobras cutâneas.',
    imagem: `${githubImgBase}Curso_Plicometro_Avanutri_recorte.webp`,
    alt: 'Plicômetro clínico preto Avanutri, com escala graduada e mola',
    link: 'https://www.loja.avanutri.com.br/prod,idproduto,5486796,linha-nutricao-plicometro---adipometro-plicometro-clinico-preto-avanutri',
  },
  {
    nome: 'Paquímetro Ósseo 16 cm Preto',
    marca: 'Avanutri',
    uso: 'Para medir os diâmetros ósseos.',
    imagem: `${githubImgBase}Curso_Paquimetro_Osseo_Avanutri_recorte.webp`,
    alt: 'Paquímetro ósseo preto de 16 cm Avanutri, com hastes curvas e escala',
    link: 'https://www.loja.avanutri.com.br/prod,idproduto,5736088,linha-nutricao-paquimetro-osseo-paquimetro-osseo-16cm-preto-avanutri',
  },
];

const artigosAntropometria = ['/avaliacao-antropometrica', '/o_que_e_antropometria'].map((l) => posts.find((p) => p.link === l)).filter(Boolean);

const WHATSAPP_NUMERO = '5521997704300';
const mensagemWhatsApp = 'Olá, Marco! Tenho uma dúvida sobre o Curso de Avaliação Antropométrica.';
const linkDuvidas = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemWhatsApp)}`;

// Inscrição: a ficha é enviada ao Formspree e, em seguida, o pagamento é liberado na tela.
const FORMSPREE_URL = 'https://formspree.io/f/xbgdzqpe';
// Lotes da Hotmart. Para virar de lote, troque LOTE_ATIVO (0 = 1º, 1 = 2º, 2 = 3º).
const LOTES = [
  { nome: '1º lote', preco: 600, vagas: 4, link: 'https://pay.hotmart.com/T108024284B?off=z0uu725b' },
  { nome: '2º lote', preco: 700, vagas: 7, link: 'https://pay.hotmart.com/T108024284B?off=1oieppo9' },
  { nome: '3º lote', preco: 800, vagas: 9, link: 'https://pay.hotmart.com/T108024284B?off=nunzhzdq' },
];
const LOTE_ATIVO = 0;
const LOTE = LOTES[LOTE_ATIVO];
const PRECO_CURSO = LOTE.preco;
const PRECO_LIVRO_FISICO = 80; // valor promocional, vendido na Hotmart em checkout próprio
const VAGAS_PRIMEIRO_LOTE = LOTES[0].vagas;
const CHAVE_STORAGE = 'inscricao_curso_antropometria';

const formatarReais = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

const formatarTelefone = (valor) => {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const formVazio = { nome: '', email: '', telefone: '', paquimetro: '', plicometro: '', aceite: false };

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
  { icone: MessageCircle, titulo: 'Grupo exclusivo da turma no WhatsApp', texto: 'Acesso ao grupo exclusivo da turma no WhatsApp.', largo: true },
];

const kitBrinde = [
  {
    nome: 'Fita antropométrica Cescorf',
    uso: 'Para medir os perímetros (circunferências) do corpo.',
    imagem: `${githubImgBase}Curso_Kit_Fita_Antropometrica_Cescorf.webp`,
    alt: 'Fita antropométrica Cescorf amarela, retrátil, com caixa cromada',
  },
  {
    nome: 'Segmômetro',
    uso: 'Para medir o comprimento dos segmentos do corpo.',
    imagem: `${githubImgBase}Curso_Kit_Segmometro.webp`,
    alt: 'Segmômetro com trena encaixada entre duas hastes brancas',
  },
  {
    nome: 'Caneta',
    uso: 'Para marcar os pontos anatômicos.',
    imagem: `${githubImgBase}Curso_Kit_Canetas.webp`,
    alt: 'Canetas marcadoras Pilot Board Master nas cores azul, vermelha e preta',
  },
  {
    nome: 'Banqueta Vonder',
    uso: 'Apoio durante as medições.',
    imagem: `${githubImgBase}Curso_Kit_Banqueta_Vonder.webp`,
    alt: 'Banqueta dobrável Vonder preta com tampo vazado',
  },
];

const faqs = [
  {
    pergunta: 'O que está incluso no valor do curso?',
    resposta: 'Aula teórica online, aula prática presencial de 8 horas, o livro digital "Antropometria: Do Zero ao Avançado — Volume 1", a Planilha de Avaliação Antropométrica, acesso ao grupo exclusivo da turma no WhatsApp e coffee break. Também vem um kit de brinde que fica com você, para levar para casa: fita antropométrica (Cescorf), segmômetro, caneta e banqueta Vonder.'
  },
  {
    pergunta: 'Quando acontecem as aulas?',
    resposta: 'A aula online é no sábado, 16 de janeiro de 2027, das 18h às 21h. A aula presencial é no sábado, 23 de janeiro de 2027, das 8h às 17h.'
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
    resposta: 'O valor do primeiro lote é R$ 600,00, e o primeiro lote tem 4 vagas. O segundo lote custa R$ 700,00 e o terceiro, R$ 800,00. O preço sobe a cada lote, então garantir a vaga agora é pagar o menor valor. O pagamento pode ser feito em Pix, boleto ou cartão em até 12x, com juros.'
  },
  {
    pergunta: 'Como faço a inscrição e o pagamento?',
    resposta: 'Preencha a ficha de inscrição no fim desta página, com nome, e-mail, telefone e os equipamentos que você já tem. Ao enviar, a ficha chega ao Marco e o link de pagamento do curso é liberado. O livro físico tem valor promocional de R$ 80,00, com entrega grátis em mãos no dia da aula presencial. Depois da inscrição, o link para comprar o livro fica disponível na área do curso, na plataforma da Hotmart.'
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
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);
  const [erros, setErros] = useState({});
  const painelRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const linkPagamento = LOTE.link;

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
    `Olá, Marco! Quero me inscrever no Curso de Avaliação Antropométrica (${LOTE.nome}).`,
    '',
    `*Nome:* ${form.nome.trim()}`,
    `*E-mail:* ${form.email.trim()}`,
    `*Telefone:* ${form.telefone}`,
    `*Paquímetro:* ${resumoEquipamento(form.paquimetro)}`,
    `*Plicômetro:* ${resumoEquipamento(form.plicometro)}`,
  ].join('\n');
  const linkFichaWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemFicha)}`;

  const avisoLivroFisico = (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-3">
      <BookOpen size={20} className="text-orange-600 shrink-0 mt-0.5" />
      <p className="text-sm text-orange-900 font-medium leading-relaxed m-0">
        <strong>Livro físico com desconto:</strong> valor promocional de <strong>{formatarReais(PRECO_LIVRO_FISICO)}</strong>, com entrega grátis em mãos no dia da aula presencial (23/01/2027). Depois da inscrição, o link para comprar o livro fica disponível na área do curso, na plataforma da Hotmart.
      </p>
    </div>
  );

  const liberarPagamento = () => {
    setFichaEnviada(true);
    setErroEnvio(false);
    try {
      sessionStorage.setItem(CHAVE_STORAGE, JSON.stringify({ form }));
    } catch (err) { /* sem storage: o painel só não sobrevive ao recarregar */ }
    setTimeout(() => painelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
  };

  const enviarFicha = async (e) => {
    e.preventDefault();
    if (enviando) return;
    const novosErros = validarForm(form);
    setErros(novosErros);
    const primeiroErro = Object.keys(novosErros)[0];
    if (primeiroErro) {
      document.getElementById(`inscricao-${primeiroErro}`)?.focus();
      return;
    }
    setEnviando(true);
    setErroEnvio(false);
    try {
      const resposta = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Nova inscrição — Curso de Avaliação Antropométrica (1º lote)',
          formulario: 'inscricao-curso-avaliacao-antropometrica',
          nome: form.nome.trim(),
          email: form.email.trim(),
          telefone: form.telefone,
          paquimetro: resumoEquipamento(form.paquimetro),
          plicometro: resumoEquipamento(form.plicometro),
          lote: `${LOTE.nome} (${formatarReais(PRECO_CURSO)})`,
        }),
      });
      if (resposta.ok) liberarPagamento();
      else setErroEnvio(true);
    } catch (err) {
      setErroEnvio(true);
    } finally {
      setEnviando(false);
    }
  };

  const corrigirDados = () => {
    setFichaEnviada(false);
    try { sessionStorage.removeItem(CHAVE_STORAGE); } catch (err) { /* ignora */ }
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
                <span className="block text-4xl font-black italic tracking-tighter"><span className="text-xl text-green-400 mr-1">R$</span>{LOTES[0].preco}<span className="text-xl text-green-400">,00</span></span>
                <span className="block text-[11px] font-bold text-slate-300 mt-2 leading-snug">2º lote: R$ {LOTES[1].preco} • 3º lote: R$ {LOTES[2].preco}</span>
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
          <p className="text-slate-600 font-medium text-center max-w-2xl mx-auto mb-10">Conteúdo, um kit de materiais para levar para casa e conforto, tudo no valor da inscrição.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {conteudo.map((item) => (
              <div key={item.titulo} className={`bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-4 items-start ${item.largo ? 'md:col-span-2' : ''}`}>
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

          <div className="bg-green-50 border border-green-200 rounded-3xl p-5 sm:p-7 mb-6">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
              <Gift size={24} className="text-green-700 shrink-0" />
              <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic m-0">Seu kit de brinde</h3>
            </div>
            <p className="text-slate-700 font-medium text-center sm:text-left mb-6 max-w-3xl">
              Fita antropométrica, segmômetro, caneta e banqueta são usados na prática e <strong>ficam com você</strong>: é brinde do curso, você leva tudo para casa.
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0">
              {kitBrinde.map((item) => (
                <li key={item.nome} className="bg-white border border-green-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] bg-white [&>picture]:block [&>picture]:h-full">
                    <ImagemOtimizada src={item.imagem} alt={item.alt} title={item.nome} className="!object-contain p-2 sm:p-3" />
                  </div>
                  <div className="p-3 sm:p-4 border-t border-green-50">
                    <span className="inline-block bg-green-700 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1.5">Brinde</span>
                    <h4 className="text-sm sm:text-base font-black text-slate-800 mb-1 leading-snug">{item.nome}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug m-0">{item.uso}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-500 font-medium mt-4 mb-0 text-center sm:text-left">Imagens ilustrativas dos itens.</p>
          </div>

          <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-4 text-slate-800 font-bold mb-6">
            <Coffee size={20} className="text-green-700 shrink-0" />
            Coffee break incluso
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-orange-800 flex items-start gap-3 mb-8">
            <AlertTriangle size={20} className="shrink-0 mt-0.5" />
            <p className="m-0 font-medium"><strong>Não incluso:</strong> paquímetro e plicômetro. Veja abaixo os modelos que eu recomendo.</p>
          </div>

          <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Equipamentos recomendados</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl items-stretch">
            {equipamentosRecomendados.map((eq) => (
              <a
                key={eq.nome}
                href={eq.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${eq.nome} (${eq.marca}) na loja Avanutri`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:border-green-600 hover:shadow-lg transition-all no-underline"
              >
                <div className="aspect-[4/3] bg-white [&>picture]:block [&>picture]:h-full">
                  <ImagemOtimizada src={eq.imagem} alt={eq.alt} title={eq.nome} className="!object-contain p-2 sm:p-3" />
                </div>
                <div className="p-3 sm:p-4 border-t border-slate-100 flex flex-col flex-grow">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-green-700 mb-1">{eq.marca}</span>
                  <span className="block text-sm sm:text-base font-black text-slate-800 mb-1 leading-snug group-hover:text-green-700 transition-colors">{eq.nome}</span>
                  <span className="block text-xs sm:text-sm text-slate-600 font-medium leading-snug mb-2 flex-grow">{eq.uso}</span>
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-green-700 underline">Ver na loja <ExternalLink size={12} /></span>
                </div>
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
          <div className="mt-10 pt-8 border-t border-slate-100">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic mb-2 text-center">Quer entender o assunto antes de se inscrever?</h3>
            <p className="text-slate-600 font-medium text-center mb-6">Leia os artigos do blog sobre antropometria.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artigosAntropometria.map((artigo) => (
                <Link key={artigo.link} to={artigo.link} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col text-left no-underline">
                  <div className="h-40 overflow-hidden">
                    <img src={artigo.img} alt={artigo.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width="280" height="160" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-widest mb-3 w-fit">{artigo.tag}</span>
                    <h4 className="text-lg font-black text-slate-800 leading-tight mb-2">{artigo.titulo}</h4>
                    <p className="text-slate-500 text-xs font-medium italic mb-4 line-clamp-3 flex-grow">{artigo.desc}</p>
                    <div className="flex items-center gap-1 text-green-700 font-bold uppercase text-[10px]">Acessar Artigo <ChevronRight size={14} /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
                O primeiro lote tem <strong>{VAGAS_PRIMEIRO_LOTE} vagas</strong>, por <strong>{formatarReais(LOTES[0].preco)}</strong>. O 2º lote custa R$ {LOTES[1].preco} e o 3º, R$ {LOTES[2].preco}: quanto antes você se inscrever, menos paga. Cartão em até 12x, com juros.
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

              {avisoLivroFisico}

              <div>
                <label htmlFor="inscricao-aceite" className="flex items-start gap-3 cursor-pointer">
                  <input id="inscricao-aceite" type="checkbox" checked={form.aceite} onChange={(e) => atualizar('aceite', e.target.checked)} className="mt-0.5 h-5 w-5 accent-green-700 shrink-0" aria-invalid={Boolean(erros.aceite)} />
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">Autorizo o uso dos meus dados (nome, e-mail e telefone) para contato e organização deste curso.</span>
                </label>
                {erros.aceite && <p role="alert" className="text-xs font-bold text-red-600 mt-1 mb-0">{erros.aceite}</p>}
              </div>

              {erroEnvio && (
                <div role="alert" className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-900 font-medium leading-relaxed m-0">
                    Não foi possível enviar sua ficha agora. Tente de novo ou{' '}
                    <a href={linkFichaWhatsApp} onClick={liberarPagamento} target="_blank" rel="noopener noreferrer" className="font-bold underline">envie a ficha pelo WhatsApp</a>.
                  </p>
                </div>
              )}

              <button type="submit" disabled={enviando} className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-lg hover:bg-green-800 transition-all duration-300 w-full italic disabled:opacity-70 disabled:cursor-wait">
                <ClipboardList size={18} /> {enviando ? 'Enviando...' : 'Enviar ficha e liberar pagamento'}
              </button>
              <p className="text-xs text-slate-500 font-medium text-center m-0">
                Ao enviar, o pagamento é liberado aqui mesmo, na próxima etapa.
              </p>
            </form>
          ) : (
            <div ref={painelRef} className="bg-white rounded-3xl border border-green-100 shadow-sm p-5 sm:p-7 flex flex-col gap-5" role="status">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-700 shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="text-lg font-black text-slate-800 m-0">Ficha enviada! Falta só o pagamento.</h3>
                  <p className="text-sm text-slate-600 font-medium mt-1 mb-0">
                    Pague o curso pelo link abaixo, em Pix, cartão (até 12x, com juros) ou boleto, conforme as opções do checkout.
                  </p>
                </div>
              </div>

              {avisoLivroFisico}

              <a
                href={linkPagamento}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-lg hover:bg-green-800 transition-all duration-300 w-full italic"
              >
                <CreditCard size={18} /> Pagar o curso ({formatarReais(PRECO_CURSO)})
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
