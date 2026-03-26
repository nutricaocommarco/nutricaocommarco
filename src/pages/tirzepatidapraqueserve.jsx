import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, HelpCircle, Activity, Leaf, Scale, Heart, FileText, Zap, ChevronRight, PlayCircle, Headphones } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Variáveis de data centralizadas para o Schema e para o visual
const datePublishedISO = "2026-03-26";
const dateModifiedISO = "2026-03-26";
// Converte "YYYY-MM-DD" para "DD/MM/YYYY"
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

export default function TirzepatidaParaQueServe() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Array de dados para a Tabela Comparativa
  const comparativoTratamentos = [
    {
      id: 1,
      molecula: 'Tirzepatida',
      nomeComercial: 'Mounjaro / Zepbound',
      mecanismo: 'Duplo Agonista (GLP-1 + GIP)',
      frequencia: 'Injeção Semanal',
      perdaPeso: 'Até 22,5%',
      fase: 'Aprovado (Anvisa)',
      cor: 'bg-green-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      molecula: 'Retatrutida',
      nomeComercial: 'Em Desenvolvimento',
      mecanismo: 'Triplo Agonista (GLP-1 + GIP + Glucagon)',
      frequencia: 'Injeção Semanal',
      perdaPeso: 'Até 24,2%',
      fase: 'Fase 3 Clínica',
      cor: 'bg-white',
      textColor: 'text-slate-800'
    }
  ];

  return (
    <>
      <Helmet>
        {/* SEO OTIMIZADO - TÍTULO DO SNIPPET (aprox 60 caracteres) */}
        <title>Tirzepatida: Para que serve? Emagrecimento, Mounjaro e Rebote | Nutrição com Marco</title>

        {/* META DESCRIPTION OTIMIZADA (aprox 155 caracteres) */}
        <meta name="description" content="Descubra para que serve a Tirzepatida (Mounjaro), como funciona no emagrecimento, quanto peso se perde e como evitar o temido efeito rebote." />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tirzepatida: Para que serve? Emagrecimento, Mounjaro e Rebote | Nutrição com Marco" />
        <meta property="og:description" content="Tudo sobre a Tirzepatida: mecanismo de ação, perda de peso esperada, necessidade de musculação, desmame e alertas sobre falsificações." />
        <meta property="og:image" content={`${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`} />
        <meta property="og:url" content={`https://www.nutricaocommarco.com.br${pathname}`} />

        {/* SCHEMA.ORG PARA ARTIGO OTIMIZADO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tirzepatida: Para que serve e como funciona no corpo?",
            "image": `${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`,
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": `${githubImgBase}logoN_pingus.png`}},
            "datePublished": datePublishedISO,
            "dateModified": dateModifiedISO,
            "description": "Guia completo sobre a Tirzepatida, princípio ativo do Mounjaro. Entenda seu mecanismo, efeitos no emagrecimento, como evitar o efeito rebote e os riscos de falsificações."
          })}
        </script>

        {/* INÍCIO DO SCHEMA.ORG PARA FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Qual o melhor horário para tomar a Tirzepatida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não há um horário obrigatório, mas muitas pessoas preferem aplicar à noite para 'dormir' durante os possíveis efeitos colaterais iniciais, como náuseas. O importante é manter o mesmo dia da semana."
                }
              },
              {
                "@type": "Question",
                "name": "A tirzepatida faz mal para os rins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Geralmente não, mas a desidratação causada por vômitos ou diarreia (efeitos colaterais) pode sobrecarregar os rins. Beber água é fundamental."
                }
              },
              {
                "@type": "Question",
                "name": "Mounjaro é seguro para quem não tem diabetes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, a tirzepatida já é aprovada em vários países (sob o nome Zepbound) especificamente para obesidade, com um perfil de segurança bem estabelecido quando acompanhado por profissionais."
                }
              },
              {
                "@type": "Question",
                "name": "O que comer se eu sentir muita náusea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Priorize alimentos secos, como torradas integrais, e evite frituras ou alimentos muito temperados, que demoram mais para sair do estômago."
                }
              }
            ]
          })}
        </script>
        {/* FIM DO SCHEMA.ORG PARA FAQ */}
      </Helmet>

    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl text-left">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">

          {/* TAG E DATA DE ATUALIZAÇÃO */}
          <div className="mb-8 flex flex-col items-start gap-2">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Tratamento Farmacológico</span>
            <span className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">Atualizado em: {formattedDate}</span>
          </div>

          {/* H1 OTIMIZADO COM KEYWORD EXATA NO INÍCIO */}
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            Tirzepatida: Para que serve e como funciona no corpo?
          </h1>

          <div className="my-10 p-6 md:p-8 bg-green-50 rounded-3xl border border-green-100 shadow-inner flex flex-col gap-4 text-left">
              <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase italic m-0 border-b border-green-200 pb-3">
                A revolução do Mounjaro
              </h2>
              <p className="m-0 text-lg md:text-xl text-green-950 font-medium leading-relaxed">
                Este guia completo foi desenvolvido para responder às principais dúvidas sobre a <strong>tirzepatida</strong>, o princípio ativo do Mounjaro, que se tornou a grande revolução no tratamento metabólico e de emagrecimento no Brasil em 2026. Entenda como funciona, os riscos e como evitar o reganho de peso com base científica.
            </p>
          </div>

          {/* IMAGEM DE CAPA COM SEO OTIMIZADO */}
          <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
            <img 
              src={`${githubImgBase}Blog/Tirzepatida-para-que-serve.jpg`} 
              alt="Caixa e caneta injetável de Tirzepatida 5mg, conhecida comercialmente como Mounjaro, utilizada para tratamento metabólico e emagrecimento." 
              title="Tirzepatida 5mg (Mounjaro) - Medicação para Emagrecimento e Controle Metabólico"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="bg-green-50 p-4 text-center">
              <p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">
                A tirzepatida representa um marco científico no tratamento da obesidade e saúde metabólica.
              </p>
            </div>
          </div>

          <div className="my-8 border border-green-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col transition-all duration-300 bg-slate-50">
            <div className="p-5 md:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Headphones className="text-green-600 w-6 h-6" />
                <h3 className="text-base font-black text-slate-800 italic m-0 uppercase tracking-widest">Ouça este artigo</h3>
              </div>
              <audio controls className="w-full h-10 outline-none">
                <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Tirzepatida.mp3" type="audio/mpeg" />
                Seu navegador não suporta o elemento de áudio.
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
                  <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest italic m-0">
                    Índice do Conteúdo
                  </h3>
                </div>
                <ChevronRight 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${isTocOpen ? 'rotate-90 text-green-600' : ''}`} 
                />
              </button>

              <div className={`transition-all duration-500 ease-in-out ${isTocOpen ? 'max-h-[1000px] opacity-100 border-t border-green-100/60' : 'max-h-0 opacity-0'} overflow-hidden bg-white`}>
                <ul className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0">
                  <li>
                    <a href="#mecanismo" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Para que serve e mecanismo
                    </a>
                  </li>
                  <li>
                    <a href="#indicacoes" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Heart size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Quem pode usar?
                    </a>
                  </li>
                  <li>
                    <a href="#perda-peso" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Quanto peso se perde?
                    </a>
                  </li>
                  <li>
                    <a href="#base-sucesso" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Leaf size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Alimentação e Musculação
                    </a>
                  </li>
                  <li>
                    <a href="#efeito-rebote" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Activity size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Efeito Rebote e o Desmame
                    </a>
                  </li>
                  <li>
                    <a href="#estrategias" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <FileText size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Estratégias contra reganho
                    </a>
                  </li>
                  <li>
                    <a href="#video-especialista" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <PlayCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Como Multiplicar os Efeitos
                    </a>
                  </li>
                  <li>
                    <a href="#comparacao" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Scale size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Tirzepatida x Retatrutida
                    </a>
                  </li>
                  <li>
                    <a href="#perigos" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <Zap size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      O Perigo da Tirzepatida Paraguaia
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="group flex items-center gap-3 text-slate-500 hover:text-green-600 transition-all font-bold text-base m-0">
                      <HelpCircle size={16} className="text-slate-300 group-hover:text-green-500 shrink-0" />
                      Perguntas Frequentes (FAQ)
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">

            <h2 id="mecanismo" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> O Mecanismo no Corpo
            </h2>
            <p>A tirzepatida é uma medicação inovadora aprovada pela Anvisa inicialmente para o tratamento do diabetes tipo 2, mas que ganhou destaque global pelo seu potente efeito no controle da obesidade. Diferente de medicações mais antigas, ela é um duplo agonista, o que significa que ela imita dois hormônios naturais do nosso intestino: o GLP-1 (peptídeo semelhante ao glucagon 1) e o GIP (polipeptídeo insulinotrópico dependente de glicose). Enquanto o GLP-1 é amplamente conhecido por retardar o esvaziamento gástrico e sinalizar saciedade ao cérebro, o GIP atua de forma complementar melhorando a sensibilidade à insulina e a maneira como o corpo processa a gordura.</p>

            <p>O mecanismo de ação da tirzepatida é tão profundo que ela não apenas reduz a fome, mas altera a "recompensa" cerebral associada à comida, ajudando a silenciar o chamado "barulho mental" por alimentos hipercalóricos. Isso explica por que, nos estudos clínicos, os pacientes alcançaram resultados superiores a outros tratamentos injetáveis disponíveis no mercado brasileiro.</p>

            <h2 id="indicacoes" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Heart className="text-green-600"/> Quem pode usar Tirzepatida?
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 marker:text-green-600 my-8">
              <p className="m-0"><strong>• Critérios de IMC:</strong> IMC ≥ 30 kg/m² (obesidade) ou IMC ≥ 27 kg/m² + comorbidades associadas à obesidade.</p>
              <p className="m-0"><strong>• Falha Terapêutica Prévia:</strong> Insucesso da terapia comportamental isolada (dieta, atividade física e modificação comportamental) ou tentativas anteriores de perda de peso sem resultados satisfatórios.</p>
              <p className="m-0"><strong>• Avaliação Individual:</strong> Paciente sem contraindicações ao uso do medicamento proposto e com condições para acompanhamento médico regular.</p>
            </div>

            <h2 id="perda-peso" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Quanto peso se perde com a Tirzepatida?
            </h2>
            <p>Os dados dos estudos da linha SURMOUNT mostram que a perda de peso com a tirzepatida é dose-dependente e altamente significativa. Em média, pacientes utilizando a dose máxima de 15mg chegaram a perder entre <strong>15% e 22,5% do seu peso corporal total</strong> ao longo de 72 semanas de tratamento.</p>

            <p>Para se ter uma ideia prática, em um indivíduo de 100 kg, isso representa uma redução de mais de 20 kg, aproximando os resultados farmacológicos daqueles observados em cirurgias bariátricas menos invasivas. No entanto, é fundamental entender que esses números dependem diretamente da resposta individual e da adesão às mudanças de estilo de vida.</p>

            <h2 id="base-sucesso" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Leaf className="text-green-600"/> A base do sucesso: Alimentação e Musculação
            </h2>
            <p>Muitas pessoas cometem o erro de achar que a injeção faz todo o trabalho sozinha, mas a verdade é que a alimentação e a musculação são os pilares que garantem que o peso perdido seja gordura e não músculo. Durante o uso da tirzepatida, a saciedade é muito alta, o que pode levar a uma ingestão proteica insuficiente. É essencial focar em uma dieta densa em nutrientes, priorizando proteínas magras e fibras para evitar a constipação, um efeito colateral comum.</p>

            <p className="bg-green-50/50 p-6 rounded-2xl border border-green-100 border-dashed text-green-950 font-medium">A musculação é inegociável. A perda de peso rápida pode induzir a sarcopenia (perda de massa muscular), o que reduz o metabolismo basal e facilita o efeito rebote no futuro.</p>

            <p>O treinamento de força sinaliza ao corpo que ele deve preservar o tecido muscular, mantendo a "máquina" metabólica ativa. Sem exercício resistido, você corre o risco de se tornar um "falso magro" com metabolismo lento.</p>

            <h2 id="efeito-rebote" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Activity className="text-green-600"/> O medo do Efeito Rebote e a importância do Desmame
            </h2>
            <p>O <strong>mounjaro efeito rebote</strong> é uma preocupação real e acontece quando o paciente interrompe o uso de forma abrupta sem ter consolidado novos hábitos. Como a medicação controla a fome de forma química, ao retirá-la, o apetite retorna e, muitas vezes, de forma mais intensa. Para evitar isso, o <strong>desmame da tirzepatida</strong> deve ser planejado com um médico, reduzindo as doses gradualmente ou aumentando o espaçamento entre as aplicações (de 7 para 10 ou 14 dias), enquanto se monitora a manutenção do peso. O objetivo é que o corpo se acostume a manter o novo "set point" metabólico sem o auxílio total do fármaco.</p>

            <p className="font-semibold text-slate-800 bg-slate-100 p-6 rounded-2xl border border-slate-200">Aqui é importante dizer que a prescrição de GLP-1 não cura a obesidade, mas a trata de forma muito semelhante à que um medicamento para pressão arterial atenua a hipertensão. Remova a medicação e, na ausência de uma intervenção significativa e contínua de medicina do estilo de vida, o reganho de peso ocorrerá no paciente obeso com a mesma certeza que a pressão arterial cronicamente alta retornará no paciente hipertenso.</p>

           {/* Inserção do Gráfico SURMOUNT-3 */}
            <div className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
                <img
                    src={`${githubImgBase}Blog/Tirzepatida-Grafico.jpg`}
                    alt="Gráfico mostrando a variação percentual média de peso corporal ao longo de 84 semanas no estudo SURMOUNT-3, comparando o grupo que continuou com Tirzepatida versus o grupo que mudou para Placebo após 12 semanas de intervenção intensiva de estilo de vida. Fonte: Nature Medicine, 2023."
                    title="Evidência SURMOUNT-3: Tirzepatida previne o reganho de peso após intervenção de estilo de vida"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="p-4 bg-slate-50 text-center text-xs text-slate-500 font-medium">
                    Gráfico adaptado de Jastreboff et al., 2023 (Nature Medicine). Mostra a variação percentual média de peso desde o início da fase de intervenção intensiva de estilo de vida lead-in (semana -12) até a semana 72 do período de tratamento randomizado duplo-cego (totalizando 84 semanas). O grupo placebo demonstra a rápida recuperação de peso comum no "efeito sanfona".
                </div>
            </div>

            {/* Explicação baseada no PDF com link interno */}
            <p>Os dados científicos do estudo <strong>SURMOUNT-3</strong> (Jastreboff et al., 2023), publicado na prestigiada revista <em>Nature Medicine</em>, trazem evidências visuais devastadoramente claras sobre a necessidade de gerenciamento contínuo da obesidade.</p>

            <p>O gráfico acima ilustra os resultados de participantes que alcançaram uma perda de peso média de ~6.9% durante um período "lead-in" de 12 semanas de intervenção intensiva de estilo de vida (dieta de baixas calorias, exercícios e aconselhamento). Após essas 12 semanas, eles foram randomizados para continuar o tratamento com Tirzepatida (dose máxima tolerada) ou mudar para um Placebo.</p>

            <div>
              <p className="mb-2">Observe as trajetórias após a randomização (Semana 0):</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>O grupo que continuou com <strong>Tirzepatida (linha azul escura)</strong> experimentou uma perda de peso adicional e significativa de <strong>18.4%</strong>. No final das 84 semanas de estudo, a redução total de peso desde o início do estilo de vida foi de <strong>~24.3%</strong>.</li>
                <li>Em contraste, o grupo que mudou para <strong>Placebo (linha cinza)</strong>, que parou a intervenção farmacológica ativa mas continuou com aconselhamento de estilo de vida, rapidamente começou a recuperar o peso perdido, terminando o estudo com apenas ~2.2% de redução total desde o início.</li>
              </ul>
            </div>

            <p className="bg-slate-100 p-6 rounded-2xl border border-slate-200 font-semibold mt-6">Este gráfico prova visualmente que a obesidade é uma doença crônica e que os esforços puramente comportamentais, embora essenciais, muitas vezes são sobrecarregados por contra-adaptações biológicas quando a intervenção principal (neste caso, farmacológica) é removida. A curva do grupo placebo é o exemplo clássico e documentado cientificamente do <Link to="/efeito_sanfona_inflamacao_invisivel" className="text-green-600 font-semibold hover:underline">efeito sanfona</Link>. Provando que sem uma intervenção significativa e contínua de medicina do estilo de vida ou suporte farmacológico, o reganho de peso ocorrerá no paciente obeso.</p>

            <h2 id="estrategias" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <FileText className="text-green-600"/> Estratégias para minimizar o reganho de peso
            </h2>

            <div className="flex flex-col gap-6 my-8">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">1</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Monitoramento Contínuo</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Envolve pesagem semanal durante a manutenção, ajuste imediato caso haja reganho maior que 2kg, acompanhamento trimestral com a equipe e avaliação periódica da composição corporal.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">2</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Ajuste Nutricional Progressivo</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Aumento gradual das calorias (+100 a 200 kcal/semana), manutenção da adequação proteica (1,2 a 1,5g/kg/dia), além de um plano alimentar flexível e sustentável que permita adaptações para eventos sociais.</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl shadow-inner">3</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">Atividade Física e Farmacologia</h3>
                  <p className="m-0 text-slate-600 leading-relaxed">Aumento progressivo para 300 min/semana de aeróbico e mínimo de 3 sessões de treinamento resistido. Na parte farmacológica, considerar a manutenção do GLP-1 na dose efetiva mínima ou um plano de descontinuação gradual.</p>
                </div>
              </div>
            </div>

            {/* VÍDEO RECOMENDADO EM DESTAQUE */}
            <h2 id="video-especialista" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <PlayCircle className="text-green-600"/> Palavra do Especialista: Multiplicando os Efeitos
            </h2>

            <p>Para aprofundar ainda mais o seu entendimento e descobrir estratégias práticas para potencializar os resultados do tratamento com Mounjaro (Tirzepatida), assista a este excelente material explicativo feito pelo Dr. Stocker abordando as principais dúvidas sobre os medicamentos injetáveis.</p>

            <div className="my-10 p-6 md:p-10 bg-green-50 rounded-[3.5rem] border border-green-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <PlayCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight">Como Multiplicar o Efeito do Mounjaro</h3>
              </div>
              <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <iframe 
                  src="https://www.youtube.com/embed/TBPP_wa087k" 
                  title="Como Multiplicar o Efeito do Mounjaro - Dr Stocker" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <h2 id="comparacao" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Scale className="text-green-600"/> Comparação Tirzepatida x Retatrutida (LY3437943)
            </h2>
            <p>Enquanto a tirzepatida é um duplo agonista atuando no GLP-1 e GIP, a ciência já estuda o próximo passo: a Retatrutida. Esta nova molécula é um triplo agonista (GIP, GLP-1 e Glucagon). Os estudos de fase 2 mostram que a retatrutida pode levar a uma redução média de peso ainda maior (cerca de 24,2% após 48 semanas) e atua de forma muito potente na redução da gordura hepática e níveis de LDL. A tirzepatida já é uma realidade impressionante, mas a evolução dos tratamentos aponta para resultados ainda mais expressivos no futuro.</p>

            {/* TABELA COMPARATIVA (DESKTOP) OTIMIZADA PARA NAO QUEBRAR */}
            <div className="my-10 bg-white border border-slate-100 shadow-2xl rounded-[3rem] overflow-hidden hidden md:block">
              <div className="grid grid-cols-12 text-center font-black uppercase tracking-widest text-[10px] border-b border-slate-100 items-stretch">
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-3">Tratamento / Molécula</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-5">Mecanismo e Uso</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 border-r border-slate-100 col-span-2">Perda de Peso (%)</div>
                <div className="p-4 flex items-center justify-center bg-slate-50 text-slate-500 col-span-2">Status</div>
              </div>

              {comparativoTratamentos.map((farmaco) => (
                <div key={farmaco.id} className={`grid grid-cols-12 items-stretch ${farmaco.cor === 'bg-green-600' ? 'bg-green-600 text-white' : farmaco.cor === 'bg-slate-800' ? 'bg-slate-800 text-white' : 'hover:bg-slate-50' } transition-colors border-b border-slate-100 last:border-b-0`}>

                  {/* Molécula/Tratamento */}
                  <div className="p-4 border-r border-slate-100 flex flex-col justify-center items-center text-center col-span-3">
                    <span className={`font-black text-lg lg:text-xl italic uppercase ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-white' : 'text-slate-900' } leading-tight`}>{farmaco.molecula}</span>
                    {farmaco.nomeComercial && (
                      <span className={`block text-[11px] font-bold mt-1 ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' } leading-tight`}>({farmaco.nomeComercial})</span>
                    )}
                  </div>

                  {/* Mecanismo e Frequência */}
                  <div className="p-4 border-r border-slate-100 flex flex-col justify-center gap-1 col-span-5">
                    <span className={`text-sm lg:text-base font-bold leading-tight ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-100' : 'text-slate-800' }`}>{farmaco.mecanismo}</span>
                    <span className={`text-xs font-medium ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' }`}>{farmaco.frequencia}</span>
                  </div>

                  {/* Perda Peso */}
                  <div className="p-4 border-r border-slate-100 flex flex-col justify-center items-center text-center col-span-2">
                    <span className={`font-black text-xl lg:text-2xl ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-white' : 'text-green-700' }`}>{farmaco.perdaPeso}</span>
                  </div>

                  {/* Fase */}
                  <div className="p-4 flex flex-col justify-center items-center text-center col-span-2">
                    {farmaco.fase.includes('Aprovado') || farmaco.fase.includes('Ouro') ? (
                      <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase text-center leading-none flex items-center justify-center h-fit w-fit mx-auto">Aprovado</span>
                    ) : (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase text-center leading-none flex items-center justify-center h-fit w-fit mx-auto">Em Testes</span>
                    )}
                    <span className={`block text-[9px] lg:text-[10px] font-bold mt-2 ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' } leading-tight`}>{farmaco.fase}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* FIM DA TABELA COMPARATIVA (DESKTOP) */}

            {/* CARDS COMPARATIVOS (MOBILE) - HIDDEN ON DESKTOP */}
            <div className="space-y-6 md:hidden my-10">
              {comparativoTratamentos.map((farmaco) => (
                <div key={farmaco.id} className={`${farmaco.cor} ${farmaco.textColor} p-6 rounded-3xl shadow-lg border ${farmaco.cor === 'bg-green-600' ? 'border-green-500' : farmaco.cor === 'bg-slate-800' ? 'border-slate-700' : 'border-slate-100'}`}>
                  <div className="flex justify-between items-center mb-4 border-b pb-3 gap-3 border-opacity-20">
                    <div className="flex flex-col">
                      <span className="font-black text-xl italic uppercase">{farmaco.molecula}</span>
                      {farmaco.nomeComercial && (
                        <span className={`text-xs font-bold ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500' }`}>({farmaco.nomeComercial})</span>
                      )}
                    </div>
                    {farmaco.fase.includes('Aprovado') || farmaco.fase.includes('Ouro') ? (
                      <span className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase shrink-0">Aprovado</span>
                    ) : (
                      <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase shrink-0">Em Testes</span>
                    )}
                  </div>

                  <div className="space-y-3 font-medium text-sm">
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Mecanismo:</span> <span className="text-right">{farmaco.mecanismo}</span></p>
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Uso:</span> <span className="text-right">{farmaco.frequencia}</span></p>
                    <p className="flex justify-between items-center gap-3"><span className="font-bold opacity-80">Perda de Peso:</span> <span className={`font-black text-xl ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-white' : 'text-green-700'}`}>{farmaco.perdaPeso}</span></p>
                    <p className="flex justify-between gap-3"><span className="font-bold opacity-80">Status:</span> <span className={`text-right text-xs font-bold ${farmaco.cor.includes('600') || farmaco.cor.includes('800') ? 'text-slate-300' : 'text-slate-500'}`}>{farmaco.fase}</span></p>
                  </div>
                </div>
              ))}
            </div>
            {/* FIM DOS CARDS COMPARATIVOS (MOBILE) */}

            <h2 id="perigos" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-4 border-b border-green-100 pb-2 flex items-center gap-3">
              <Zap className="text-green-600"/> O perigo da Tirzepatida Paraguaia e Manipulada
            </h2>
            <p>Com o sucesso do Mounjaro, surgiu um mercado paralelo perigoso, muitas vezes referido como "tirzepatida paraguaia". Esse termo vem do fato de que no Paraguai a medicação não exige receita médica e é comercializada a preços muito menores. Porém, os produtos são contrabandeados para o Brasil sem os devidos cuidados de conservação. Um ponto crítico é a necessidade estrita de guardar o medicamento na geladeira, o que é frequentemente ignorado por atravessadores e vendedores ilegais.</p>

            <p>O uso de versões manipuladas sem procedência garantida ou medicamentos mal armazenados traz riscos gravíssimos. Você expõe seu corpo a infecções no local da aplicação, contaminação com substâncias tóxicas ou doses incorretas, pois a tirzepatida é uma molécula complexa e sua estabilidade depende de tecnologia de ponta. Comprar medicação fora das redes de farmácias oficiais do Brasil coloca sua vida em risco em troca de uma falsa economia.</p>

            {/* INÍCIO DO FAQ VISUAL OTIMIZADO COM PERGUNTAS EXATAS */}
            <div id="faq" className="mt-16 pt-10 border-t border-slate-100 text-left">
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> Perguntas Frequentes (FAQ)</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Qual o melhor horário para tomar a Tirzepatida?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Não há um horário obrigatório, mas muitas pessoas preferem aplicar à noite para "dormir" durante os possíveis efeitos colaterais iniciais, como náuseas. O importante é manter sempre o mesmo dia da semana.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">A tirzepatida faz mal para os rins?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Geralmente não, mas a desidratação causada por efeitos colaterais como vômitos ou diarreia pode sobrecarregar a função renal. Manter-se adequadamente hidratado bebendo água é fundamental durante o tratamento.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">Mounjaro é seguro para quem não tem diabetes?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Sim, a molécula da tirzepatida já é aprovada em vários países (comercializada sob o nome Zepbound) especificamente para o controle da obesidade, demonstrando um perfil de segurança bem estabelecido quando o uso é acompanhado por profissionais.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h3 className="text-lg font-black text-slate-800 mb-2 italic">O que comer se eu sentir muita náusea?</h3>
                  <p className="text-slate-600 m-0 leading-relaxed">Se as náuseas ocorrerem, priorize o consumo de alimentos mais secos, como torradas integrais ou biscoitos de água e sal. Evite rigorosamente frituras ou alimentos muito temperados e gordurosos, pois eles demoram mais para sair do estômago.</p>
                </div>
              </div>
            </div>
            {/* FIM DO FAQ VISUAL OTIMIZADO */}

            <Newsletter />
          </div>
        </article>

        <ArtigosRecomendados currentPath={pathname} />

        <div className="mt-20 p-8 md:p-10 bg-slate-50 border border-green-100 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8 text-left shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white bg-green-600">
            <img 
              src={`${githubImgBase}Eu_1.png`} 
              alt="Marco Aurélio Jr. - Autor do Artigo." 
              title="Marco Aurélio Jr. - Estudante de Nutrição e Avaliador Antropométrico ISAK Nível 1."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-900 italic mb-1">Conteúdo escrito por Marco Aurélio Jr.</h3>
            <p className="text-xs text-green-600 uppercase tracking-widest font-black mb-4">Estudante de Nutrição • Avaliador Antropométrico ISAK Nível 1</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6 text-lg">
              Apaixonado pela ciência da nutrição, Marco dedica seus estudos a compreender a fisiologia humana de forma aprofundada. Especialista em composição corporal com certificação internacional, ele foca em traduzir o rigor dos artigos científicos para a prática do dia a dia. Seu objetivo é ajudar você a entender como o próprio corpo funciona através da educação nutricional baseada em evidências reais.
            </p>
            <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-md hover:bg-green-700 transition-all italic">
              Siga @Nutricao_com_Marco
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
