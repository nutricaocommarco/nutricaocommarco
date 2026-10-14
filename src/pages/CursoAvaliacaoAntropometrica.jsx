import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImagemOtimizada from '../components/ImagemOtimizada';
import {
  Ruler, Armchair, Pencil, FileSpreadsheet, GraduationCap, Coffee, BookOpen,
  Monitor, MapPin, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown,
  Users, Navigation, CalendarDays, ExternalLink, Info
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
const mensagemWhatsApp = 'Olá, Marco! Quero garantir minha vaga no Curso de Avaliação Antropométrica (1º lote).';
const linkInscricao = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagemWhatsApp)}`;

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
    resposta: 'O valor do primeiro lote é R$ 500,00. O segundo lote custa R$ 600,00 e o terceiro, R$ 700,00. O preço sobe a cada lote, então garantir a vaga agora é pagar o menor valor.'
  },
  {
    pergunta: 'Este curso dá certificação ISAK?',
    resposta: 'Não. Este não é um curso ISAK e não emite certificação ISAK: a certificação é emitida apenas por cursos oficiais credenciados pela própria ISAK. Este é um curso independente, que ensina e treina as técnicas de medição com base nos protocolos ISAK.'
  },
];

export default function CursoAvaliacaoAntropometrica() {
  const { pathname } = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
                <span className="block text-[10px] font-black uppercase tracking-widest text-green-400 mb-1">Primeiro Lote</span>
                <span className="block text-4xl font-black italic tracking-tighter"><span className="text-xl text-green-400 mr-1">R$</span>500<span className="text-xl text-green-400">,00</span></span>
                <span className="block text-[11px] font-bold text-slate-300 mt-2 leading-snug">2º lote: R$ 600 • 3º lote: R$ 700</span>
                <span className="block text-[10px] font-black uppercase tracking-widest text-green-400 mt-1">O preço sobe a cada lote</span>
              </div>
              <a
                href={linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Garantir minha vaga no curso de avaliação antropométrica pelo WhatsApp"
                className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-5 rounded-full font-black uppercase text-xs md:text-sm tracking-widest shadow-xl hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full sm:w-auto italic"
              >
                <MessageCircle size={20} /> Garantir minha vaga
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

      {/* CTA FINAL */}
      <section className="px-4 md:px-6 pb-24">
        <div className="container mx-auto max-w-4xl p-8 md:p-12 bg-green-50 border border-green-200 rounded-[3rem] md:rounded-[3.5rem] flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <img src={`${githubImgBase}logoN_pingus.webp`} alt="Píngus, mascote do Nutrição com Marco" width="128" height="128" loading="lazy" className="w-28 md:w-32 h-auto" />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-2">Garanta sua vaga no primeiro lote</h2>
            <p className="text-slate-700 font-medium mb-6">Valor do primeiro lote: <strong>R$ 500,00</strong>. O 2º lote custa R$ 600 e o 3º, R$ 700: quanto antes você garantir a vaga, menos paga. A inscrição e as dúvidas são atendidas pelo WhatsApp.</p>
            <a
              href={linkInscricao}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Garantir minha vaga no curso de avaliação antropométrica pelo WhatsApp"
              className="inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-lg hover:bg-green-800 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
            >
              <MessageCircle size={18} /> Garantir minha vaga
            </a>
            <p className="text-[11px] text-slate-500 font-medium mt-5 mb-0">Curso independente, baseado nos protocolos ISAK. Não é um curso ISAK e não emite certificação ISAK.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
