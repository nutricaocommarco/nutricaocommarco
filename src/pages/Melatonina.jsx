import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Shield, FileText, 
  Zap, ChevronRight, PlayCircle, Headphones, ChevronDown, ShoppingCart, 
  Brain, Clock, AlertCircle, Moon, EyeOff, BookOpen, Database, 
  AlertTriangle, XCircle, CheckCircle, Thermometer
} from 'lucide-react';

import Newsletter from '../components/Newsletter';
import ArtigosRecomendados from '../components/ArtigosRecomendados';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-04-01";
const dateModifiedISO = "2026-04-01";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');
const melatoninaCapa = `${githubImgBase}Blog/Melatonina.jpg`;

export default function Melatonina() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = [
    {
      pergunta: "A melatonina emagrece ou engorda?",
      resposta: "A melatonina não tem calorias e não faz você engordar. Pelo contrário, ao regular o seu ciclo circadiano e proporcionar um sono profundo, ela ajuda a controlar hormônios relacionados à fome, como a grelina e a leptina, otimizando o seu metabolismo e auxiliando indiretamente no processo de emagrecimento."
    },
    {
      pergunta: "Qual é o melhor horário para tomar melatonina?",
      resposta: "Para a maioria das pessoas que buscam melhorar a latência do sono (o tempo que se leva para adormecer), a recomendação clínica geral é ingerir o suplemento de 30 a 60 minutos antes do horário desejado para dormir, em um ambiente já com luzes baixas e sem telas."
    },
    {
      pergunta: "Posso tomar melatonina todos os dias?",
      resposta: "O uso diário a curto e médio prazo é considerado seguro para a maioria dos adultos, mas não deve ser uma muleta para o resto da vida. O objetivo ideal é tratar a causa raiz da insônia através da higiene do sono. O uso crônico sem acompanhamento pode gerar dependência psicológica, onde o paciente acredita que só consegue dormir se tomar a pílula."
    },
    {
      pergunta: "Por que acordo cansado e com dor de cabeça quando tomo melatonina?",
      resposta: "Esse é o efeito colateral mais comum de superdosagem ou do uso em horários muito tardios da madrugada. Quando você consome uma dose maior do que o seu fígado consegue metabolizar durante a noite, níveis residuais do hormônio continuam na corrente sanguínea pela manhã, causando letargia, tontura e cefaleia."
    },
    {
      pergunta: "Melatonina corta o efeito de outros medicamentos?",
      resposta: "Ela pode interagir com certas classes de medicamentos. Remédios para pressão alta (como betabloqueadores), imunossupressores, anticoagulantes e medicamentos para diabetes podem ter seus efeitos alterados pela melatonina. Por isso, pacientes com doenças crônicas devem consultar o médico antes de iniciar a suplementação."
    }
  ];

  const referenciasCientificas = [
    { id: 1, tema: "Segurança e Eficácia", orgao: "ANVISA", desc: "Análise oficial sobre a liberação da melatonina como suplemento alimentar.", link: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2021/proposta-de-consulta-publica-inclui-a-melatonina-como-constituinte-autorizado/analise-da-seguranca-e-eficacia-da-melatonina_versao-para-publicacao.pdf" },
    { id: 2, tema: "Posicionamento Clínico", orgao: "SBEM", desc: "Diretrizes e posicionamento da Sociedade Brasileira de Endocrinologia e Metabologia.", link: "https://www.endocrino.org.br/media/uploads/PDFs/posicionamento_sobre_melatonina_sbem.pdf" },
    { id: 3, tema: "Ciclo Circadiano", orgao: "PubMed", desc: "Estudo clínico sobre os impactos da melatonina na qualidade do sono.", link: "https://pubmed.ncbi.nlm.nih.gov/36235587/" },
    { id: 4, tema: "Vias Metabólicas", orgao: "SciELO", desc: "Relação profunda entre a melatonina e a fisiologia do corpo humano.", link: "https://www.scielo.br/j/ramb/a/MNfzLJffHz4vBbMTDcdNWLG/?format=html&lang=pt" },
  ];

  const tabelaInteracoes = [
    { id: 1, condicao: "Doenças Autoimunes (Artrite, Lúpus, etc)", causa: "Possui fortes propriedades imunomoduladoras, podendo superestimular células de defesa e exacerbar a inflamação.", recomendacao: "Uso estritamente contraindicado sem avaliação e acompanhamento médico rigoroso." },
    { id: 2, condicao: "Uso de Betabloqueadores (Hipertensão)", causa: "Esta classe de medicamentos costuma suprimir a produção natural (endógena) de melatonina pelo corpo.", recomendacao: "A suplementação pode ser muito útil para o sono do paciente, mas exige prescrição médica detalhada." },
    { id: 3, condicao: "Gestantes e Lactantes", causa: "O hormônio ultrapassa a barreira placentária e vai para o leite materno. Há estudos em animais apontando riscos à prole.", recomendacao: "Evitar a suplementação. Focar 100% em técnicas de higiene do sono naturais." },
    { id: 4, condicao: "Anticoagulantes e Antiplaquetários", causa: "A combinação pode alterar os parâmetros de coagulação e aumentar as chances de sangramentos leves.", recomendacao: "Exige monitoramento de coagulação frequente e ajuste de dose pelo cardiologista." }
  ];

  const tabelaEstimulantes = [
    { id: 1, inimigo: "Luz Azul e Telas (Celular/TV)", estimulante: "Quarto 100% Escuro e Luz Quente", impacto: "A luz das telas inibe instantaneamente a glândula pineal, parando a produção hormonal. O escuro absoluto é o principal gatilho para o corpo liberar a melatonina endógena." },
    { id: 2, inimigo: "Álcool e Café Noturno", estimulante: "Suco de Cereja (Tart Cherry)", impacto: "Cafeína e álcool bloqueiam a adenosina e fragmentam o sono profundo. A cereja é uma das raras fontes alimentares cientificamente comprovadas com fitomelatonina." },
    { id: 3, inimigo: "Estresse e Agitação Noturna", estimulante: "Banho Quente antes de deitar", impacto: "O cortisol (estresse) destrói a indução do sono. Um banho quente induz a redução da temperatura corporal central, mecanismo que o cérebro exige para começar a adormecer." }
  ];

  return (
    <>
      <Helmet>
        <title>Efeitos Colaterais da Melatonina: Vicia? Riscos e Doses | Nutrição com Marco</title>
        <meta name="description" content="Descubra a verdade científica sobre a melatonina: ela vicia? Faz mal? Entenda os efeitos colaterais, riscos psicológicos e como dosar corretamente para dormir bem." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Efeitos Colaterais da Melatonina: Vicia? Riscos e Doses | Nutrição com Marco" />
        <meta property="og:description" content="A ciência por trás do hormônio do sono. Riscos, benefícios, quem não pode tomar e a verdade sobre a dependência psicológica." />
        <meta property="og:image" content={melatoninaCapa} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />
      </Helmet>

      <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
        <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

          <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
            <ChevronLeft size={20} /> Voltar para o Blog
          </Link>

          <article className="prose prose-lg max-w-none text-left">

            <div className="mb-8 flex flex-col items-start gap-2">
              <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Fisiologia do Sono</span>
              <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
              Efeitos Colaterais da Melatonina: Vicia? Faz Mal? A Verdade Científica
            </h1>

            <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
                <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                  Efeitos Colaterais da Melatonina: Resposta Direta
                </h2>
                <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                  A melatonina é amplamente considerada segura para a maioria das pessoas, mas não é isenta de reações indesejadas. Os efeitos colaterais mais comuns relatados na literatura científica incluem dores de cabeça, sensação de cansaço ou letargia matinal e desconfortos gastrointestinais. Diferente de medicamentos controlados para dormir, ela não causa dependência química clássica. No entanto, o seu uso incorreto pode gerar uma forte dependência psicológica e mascarar problemas reais de higiene do sono, prejudicando o seu metabolismo a longo prazo.
              </p>
            </div>

            <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Headphones className="text-green-600 w-6 h-6" />
                  <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
                </div>
                <audio controls className="w-full h-10 outline-none rounded-full">
                  <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Melatonina.mp3" type="audio/mpeg" />
                  O seu navegador não suporta o áudio.
                </audio>
              </div>

              <div className="h-px bg-green-100/60 w-full"></div>

              <nav className="bg-slate-50">
                <button 
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full px-5 py-4 md:px-6 md:py-4 flex items-center justify-between hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${isTocOpen ? 'bg-green-600 text-white' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}`}>
                      <Activity size={18} />
                    </div>
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">Índice do Conteúdo</h3>
                  </div>
                  <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} />
                </button>

                <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                  <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                    <li><a href="#introducao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Brain size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />O que ela faz no corpo</a></li>
                    <li><a href="#efeitos-colaterais" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><AlertCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Quais são os Riscos?</a></li>
                    <li><a href="#dependencia" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Shield size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dependência Psicológica</a></li>
                    <li><a href="#contraindicacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Quem NÃO deve tomar</a></li>
                    <li><a href="#indicacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Indicações Corretas</a></li>
                    <li><a href="#dose" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Clock size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />A Dose Certa</a></li>
                    <li><a href="#video" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Vídeo Explicativo</a></li>
                    <li><a href="#dormir-naturalmente" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><Moon size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Dormir Naturalmente</a></li>
                    <li><a href="#estudos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0"><BookOpen size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />Tabela de Estudos</a></li>
                  </ul>
                </div>
              </nav>
            </div>

<div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

              <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group relative">
                <img 
                  src={melatoninaCapa} 
                  alt="Pingus, o pinguim mascote do portal Nutrição com Marco, com cara de sono e máscara de dormir na cabeça, pingando gotas de um frasco de Melatonina na boca ao lado de sua cama." 
                  title="Pingus tomando sua dose em gotas de Melatonina antes de deitar"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-200" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="bg-green-50/90 backdrop-blur-sm p-4 text-center absolute bottom-0 w-full border-t border-green-100">
                  <p className="text-xs text-green-800 font-bold uppercase tracking-widest text-center m-0">
                    O hormônio do sono orquestra o nosso relógio biológico: a dose certa faz toda a diferença.
                  </p>
                </div>
              </div>

              <h2 id="introducao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Brain className="text-green-600"/> O que a Melatonina faz no corpo
              </h2>
              <p>
                Antes de falarmos dos riscos, é fundamental entender que a melatonina não é um simples "sedativo". Ela é um hormônio produzido naturalmente pela nossa glândula pineal quase que exclusivamente na ausência de luz. A sua principal função é atuar como um mensageiro químico que avisa a todo o seu corpo que a noite chegou, orquestrando com precisão o nosso <Link to="/o-que-e-ciclo-circadiano" className="text-green-600 font-bold hover:underline">ciclo circadiano</Link> (relógio biológico). Muito além de apenas induzir o sono, ela desempenha um papel essencial na sincronização do nosso metabolismo, ajudando a regular o balanço energético e a forma como armazenamos ou gastamos energia, agindo em sintonia com outros <Link to="/hormonios_da_fome_emagrecimento" className="text-green-600 font-bold hover:underline">hormônios do emagrecimento</Link>.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 py-4 my-8 bg-slate-50 rounded-r-2xl italic text-slate-700 shadow-sm relative">
                <span className="absolute -left-3 -top-3 bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-serif text-2xl">"</span>
                <p className="mb-2">A melatonina é um neuro-hormônio que atua como cronobiótico e não um hipnótico clássico... Seu uso requer prescrição cautelosa, focada na real necessidade fisiológica de sincronização circadiana.</p>
                <footer className="text-sm font-bold text-green-700 not-italic uppercase tracking-wider">— Posicionamento da SBEM (Sociedade Brasileira de Endocrinologia e Metabologia)</footer>
              </blockquote>

              <h2 id="efeitos-colaterais" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <AlertCircle className="text-red-500"/> Quais são os Efeitos Colaterais da Melatonina?
              </h2>
              <p>
                Embora possua um perfil de segurança bastante favorável, referendado por análises rigorosas da Anvisa, o uso indiscriminado da melatonina suplementar pode trazer consequências indesejadas. Quando ingerida em dosagens inadequadas ou horários errados, os pacientes frequentemente relatam dores de cabeça intensas, episódios de tontura e uma letargia persistente no dia seguinte. Além desses sintomas físicos, o maior perigo silencioso é a cronorruptura. Isso ocorre quando a suplementação artificial confunde o relógio biológico interno, causando um desalinhamento total entre o seu ciclo natural de sono e o seu metabolismo diário.
              </p>

              <h2 id="dependencia" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Shield className="text-green-600"/> Melatonina Vicia? Entenda a Dependência Psicológica
              </h2>
              <p>
                A ciência é clara ao afirmar que a melatonina não causa o mesmo tipo de dependência química que os remédios tarja preta, como os tradicionais benzodiazepínicos. O corpo não sofre crises de abstinência física ao interromper o uso. Contudo, o grande risco mora na dependência psicológica. O paciente começa a acreditar que perdeu a capacidade de adormecer naturalmente e passa a depender do comprimido todas as noites. Esse hábito perigoso acaba por mascarar a verdadeira raiz da insônia, como a falta de rotina, o excesso de telas antes de deitar ou o estresse crônico, fatores que muitas vezes também servem de gatilho para a <Link to="/o-que-e-fome-emocional" className="text-green-600 font-bold hover:underline">fome emocional</Link>.
              </p>

              <h2 id="contraindicacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Zap className="text-green-600"/> Interações e Perigos: Quem NÃO deve tomar
              </h2>
              <p>
                A suplementação requer cuidados especiais e avaliação profissional para determinados grupos. Gestantes e lactantes devem ter extrema cautela, pois alguns estudos em animais mostraram riscos preocupantes. Pessoas com doenças autoimunes também precisam de acompanhamento rigoroso, dado que a melatonina possui fortes propriedades imunomoduladoras, estimulando células de defesa e a liberação de <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-bold hover:underline">citocinas inflamatórias</Link>. Além disso, indivíduos em uso de certos medicamentos anti-hipertensivos, como os betabloqueadores, sofrem supressão da produção natural do hormônio, exigindo uma estratégia médica detalhada.
              </p>

              {/* TABELA: INTERAÇÕES MEDICAMENTOSAS */}
              <div className="my-10 bg-white rounded-[2rem] border border-amber-200 shadow-xl overflow-hidden">
                <div className="bg-amber-50 text-amber-900 font-black uppercase tracking-widest text-sm p-5 border-b border-amber-200 flex items-center gap-3">
                   <AlertTriangle size={20} className="text-amber-600" /> Interações Medicamentosas e Grupos de Risco
                </div>
                
                <div className="hidden md:grid grid-cols-12 bg-slate-50 text-slate-500 font-bold uppercase tracking-widest text-[10px] p-4 border-b border-slate-100">
                  <div className="col-span-3">Condição / Medicamento</div>
                  <div className="col-span-5">O que a Melatonina Causa no Corpo</div>
                  <div className="col-span-4">Recomendação Clínica</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {tabelaInteracoes.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 md:p-4 items-start hover:bg-slate-50 transition-colors">
                      <div className="col-span-3 font-bold text-slate-800 text-sm md:text-base">
                        <span className="md:hidden text-amber-600 font-black uppercase tracking-widest text-[10px] block mb-1">Condição ou Uso</span>
                        {item.condicao}
                      </div>
                      <div className="col-span-5 text-sm text-slate-600 leading-relaxed">
                        <span className="md:hidden text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-1">Risco e Efeito</span>
                        {item.causa}
                      </div>
                      <div className="col-span-4 bg-amber-50/50 p-3 rounded-xl border border-amber-100/50 text-sm text-amber-900 font-medium">
                        <span className="md:hidden text-amber-600 font-bold uppercase tracking-widest text-[10px] block mb-1">Recomendação</span>
                        {item.recomendacao}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="indicacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <FileText className="text-green-600"/> Para quem a Melatonina é indicada?
              </h2>
              <p>
                A indicação clínica mais sólida e com o maior grau de evidência científica foca na população idosa, especialmente a partir dos 55 anos de idade, fase em que a produção natural desse hormônio costuma despencar significativamente. Outro uso clássico e amplamente validado é no tratamento do famoso "jet lag" e para auxiliar trabalhadores de turnos noturnos. Nesses casos específicos, a melatonina age como um poderoso cronobiótico, ajudando o cérebro a ressincronizar o relógio biológico com o novo fuso horário ou com a rotina de trabalho invertida.
              </p>

              <h2 id="dose" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Clock className="text-green-600"/> A Dose Certa: Tomar muito diminui a produção natural?
              </h2>
              <p>
                Um mito extremamente comum é o de que tomar o suplemento faz a sua glândula pineal "ficar preguiçosa" e parar de trabalhar. Na realidade, a produção de melatonina não obedece a mecanismos de retroalimentação negativa, o que significa que a alta concentração do hormônio no sangue não inibe a sua própria fabricação endógena. O verdadeiro problema das superdosagens é que o corpo demora muito mais para metabolizar o excesso da substância, resultando em sonolência no dia seguinte. Por isso, abordagens clínicas assertivas recomendam iniciar o tratamento com doses muito baixas, na casa de 1 mg por dia.
              </p>

              {/* VÍDEO DO YOUTUBE */}
              <h2 id="video" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <PlayCircle className="text-green-600"/> Aprofunde-se: A Fisiologia da Melatonina
              </h2>
              <p>
                Quer entender exatamente como o seu cérebro produz esse hormônio e por que a luz é a sua maior inimiga? Assista a esta excelente explicação visual detalhando a fisiologia da melatonina e o seu impacto direto na saúde do corpo inteiro.
              </p>

              <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase italic leading-tight">Como a melatonina funciona</h3>
                </div>
                <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <iframe 
                    src="https://www.youtube.com/embed/g94wfvhMl14" 
                    title="Vídeo sobre a Fisiologia da Melatonina" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* TABELA: INIMIGOS VS ESTIMULANTES */}
              <div className="my-14 bg-slate-50 p-6 md:p-10 rounded-[3rem] border border-slate-200 shadow-inner">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tight m-0">
                    O que <span className="text-red-500">Destrói</span> vs O que <span className="text-green-600">Estimula</span>
                  </h3>
                  <p className="text-slate-600 mt-3 font-medium max-w-2xl mx-auto">
                    A produção natural de melatonina pelo seu cérebro é extremamente sensível aos seus hábitos noturnos. Entenda como o seu ambiente molda o seu sono:
                  </p>
                </div>

                <div className="space-y-6">
                  {tabelaEstimulantes.map((fator) => (
                    <div key={fator.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
                      <div className="flex-1 p-5 md:p-6 bg-red-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-red-600 font-black uppercase text-[11px] tracking-widest">
                          <XCircle size={16} /> O que Destrói
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg m-0">{fator.inimigo}</h4>
                      </div>
                      <div className="flex-1 p-5 md:p-6 bg-green-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-green-600 font-black uppercase text-[11px] tracking-widest">
                          <CheckCircle size={16} /> O que Estimula
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg m-0">{fator.estimulante}</h4>
                      </div>
                      <div className="flex-[1.5] p-5 md:p-6 flex flex-col gap-3 bg-white">
                        <div className="flex items-center gap-2 text-slate-400 font-black uppercase text-[11px] tracking-widest">
                          <Thermometer size={16} /> O Impacto no Corpo
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium m-0">
                          {fator.impacto}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="dormir-naturalmente" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
                <Moon className="text-green-600"/> Como dormir rápido sem depender de suplementos
              </h2>
              <p>
                A estratégia mais inteligente e duradoura para o seu metabolismo sempre será estimular a produção natural do seu próprio corpo. Como a síntese de melatonina pode ser bloqueada completamente pela simples presença de luz, especialmente a luz azul emitida pelas telas, garantir um ambiente de escuridão absoluta é inegociável. É exatamente por isso que bloqueadores de luz tornam-se essenciais. Ao eliminar as interferências visuais, você cria o cenário perfeito para que o seu cérebro libere a melatonina endógena no volume ideal, garantindo um sono profundo e reparador sem a necessidade de engolir pílulas diariamente.
              </p>

           {/* AFILIADO MERCADO LIVRE (MÁSCARA DE DORMIR) */}
            <div className="my-16 bg-white rounded-[3rem] border border-green-100 shadow-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-6 py-2 rounded-bl-3xl font-black uppercase text-[11px] tracking-widest shadow-md z-10 flex items-center gap-2 border-b border-l border-green-700">
                    <Zap size={14} className="fill-white" />
                    <span>O Pingus Aprova!</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mt-6 relative z-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-slate-50 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-inner border-4 border-white">
                        <img 
                            src={`${githubImgBase}logoN_pingus.png`} 
                            alt="Selo de Qualidade Pingus" 
                            className="w-full h-full object-contain" 
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight uppercase italic">
                            Máscara de Dormir <span className="text-green-700">Premium 3D Blackout</span>
                        </h4>

                        <div className="w-full max-w-[200px] mx-auto md:mx-0 mb-4 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                            <img 
                              src={`${githubImgBase}Afiliado/MascaraDormir.jpg`} 
                              alt="Máscara de Dormir Premium 3D Blackout" 
                              className="w-full h-auto object-cover" 
                            />
                        </div>

                        <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                            Para produzir melatonina naturalmente e dormir rápido, o seu cérebro precisa de <strong>escuridão total</strong>. Como nem sempre conseguimos bloquear toda a luz da rua ou dos pequenos LEDs no quarto, usar uma boa máscara de dormir é um investimento barato e 100% seguro (sem contraindicações) para blindar a qualidade do seu sono profundo.
                        </p>

                        <a 
                            href="https://meli.la/1Jn51p4" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300 w-full md:w-fit italic"
                        >
                            <ShoppingCart size={16} />
                            Comprar no Mercado Livre
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-green-50 text-center">
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md mx-auto m-0">
                        Ao comprar pelo link, recebo uma pequena comissão que apoia este blog científico. Você não paga nada a mais por isso!
                    </p>
                </div>
            </div>

              {/* TABELA DE REFERÊNCIAS CIENTÍFICAS */}
              <div id="estudos" className="my-16 bg-slate-50 py-12 px-4 md:px-8 rounded-[3rem] border border-slate-200 shadow-inner">
                <div className="text-center mb-10">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
                    Revisão Baseada em Evidências
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tight mb-4 flex justify-center items-center gap-3">
                    <Database className="text-green-600" /> Tabela de Referências e Estudos
                  </h2>
                  <p className="text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    Este artigo foi embasado nos documentos oficiais e publicações mais rigorosas disponíveis na literatura médica. Acesse as fontes originais abaixo:
                  </p>
                </div>

                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-lg overflow-hidden">
                  <div className="hidden md:grid grid-cols-4 bg-green-600 text-white font-black uppercase tracking-widest text-[11px] p-4">
                    <div>Foco de Estudo</div>
                    <div>Órgão / Fonte</div>
                    <div className="col-span-2">Descrição e Link de Acesso</div>
                  </div>
                  
                  {referenciasCientificas.map((ref, idx) => (
                    <div key={ref.id} className={`grid grid-cols-1 md:grid-cols-4 gap-4 p-5 md:p-4 items-center border-b border-slate-100 last:border-0 hover:bg-green-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <div className="font-bold text-slate-800 text-sm md:text-base"><span className="md:hidden text-green-600 font-black uppercase text-xs block mb-1">Foco</span>{ref.tema}</div>
                      <div className="text-sm font-black text-green-700 bg-green-100 px-3 py-1 rounded-full w-fit"><span className="md:hidden text-slate-500 uppercase text-[10px] mr-2">Fonte:</span>{ref.orgao}</div>
                      <div className="col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                        <p className="text-sm text-slate-600 leading-snug m-0">{ref.desc}</p>
                        <a href={ref.link} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-green-600 transition-colors flex items-center gap-1">
                          <BookOpen size={14} /> Ler
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ SECTION */}
              <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
                <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic">
                  <HelpCircle className="text-green-600" /> Perguntas Frequentes sobre Melatonina
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-3xl border border-green-100 overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                      >
                        <h3 className={`text-lg font-black mb-0 italic transition-colors ${openFaqIndex === index ? 'text-green-600' : 'text-slate-800 group-hover:text-green-600'}`}>
                          {faq.pergunta}
                        </h3>
                        <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-green-600' : ''}`} size={24} />
                      </button>
                      <div className={`transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100 pb-6 md:pb-8 px-6 md:px-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'}`}>
                        <p className="text-slate-600 m-0 leading-relaxed border-t border-green-100/60 pt-4">{faq.resposta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Newsletter />
            </div>
          </article>

          <ArtigosRecomendados currentPath={pathname} />

          {/* AUTHOR BLOCK */}
          <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
              <img 
                src={`${githubImgBase}Eu_1.png`} 
                alt="Marco Aurélio Jr." 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' font-size='50' text-anchor='middle' dominant-baseline='middle'>👨‍⚕️</text></svg>";
                }}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 italic mb-1">Escrito por Marco Aurélio Jr.</h3>
              <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK 1</p>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
                Apaixonado pela fisiologia e pelo comportamento humano, Marco foca em traduzir o rigor científico para a prática do dia a dia, ajudando você a construir uma relação mais leve e sem radicalismos com a comida, cuidando do corpo desde o intestino até a mente.
              </p>
              <a href="https://instagram.com/Nutricao_com_Marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
                Siga @Nutricao_com_Marco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
