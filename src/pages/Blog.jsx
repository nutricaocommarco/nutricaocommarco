import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight, Filter, Tag as TagIcon } from 'lucide-react';
import ImagemOtimizada from '../components/ImagemOtimizada';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const postsData = [
  {
    id: 36,
    link: "/como-calcular-meu-get",
    imgSrc: `${githubImgBase}Blog/GET_Capa.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "Como Calcular Meu GET (Gasto Energético Total): Fórmulas e Calculadora Interativa",
    desc: "Aprenda de verdade como calcular seu GET com equações validadas (Mifflin-St Jeor e Harris-Benedict). Acesse nossa calculadora gratuita e descubra sua TMB exata.",
    isNew: true
  },
  {
    id: 35,
    link: "/o-que-sao-microplasticos",
    imgSrc: `${githubImgBase}Blog/OQueSaoMicroplasticos_Capa.webp`,
    tag: "Nutrição Clínica",
    title: "O Que São Microplásticos? Como Eles Afetam Sua Saúde e Fertilidade",
    desc: "Entenda o que são microplásticos, como eles entram no corpo humano, seus efeitos na fertilidade e 5 dicas práticas para reduzir a exposição no dia a dia.",
    isNew: true
  },
  {
    id: 34,
    link: "/como-dormir-rapido",
    imgSrc: `${githubImgBase}Blog/ComoDormirRapido_Capa.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "Como Dormir Rápido: Técnicas Comprovadas para Adormecer em Minutos",
    desc: "Descubra como dormir rápido com técnicas de relaxamento, ajustes no ambiente, alimentação e a Terapia Cognitivo-Comportamental para Insônia (TCC-I).",
    isNew: true
  },
  {
    id: 33,
    link: "/alimentacao-anti-inflamatoria-para-lipedema",
    imgSrc: `${githubImgBase}Blog/AlimentacaoAntiInflamatoriaLipedema_Capa.webp`,
    tag: "Nutrição Clínica",
    title: "Alimentação Anti-Inflamatória para Lipedema: O Que a Ciência Já Sabe",
    desc: "Entenda o que a ciência já sabe sobre alimentação anti-inflamatória para lipedema, a diferença entre lipedema, linfedema e obesidade, e o papel da tirzepatida.",
    isNew: false
  },
  {
    id: 32,
    link: "/alimentacao-saudavel-das-criancas",
    imgSrc: `${githubImgBase}Blog/AlimentacaoSaudavelCriancas_Capa.webp`,
    tag: "Nutrição Infantil",
    title: "Alimentação Saudável das Crianças a Cada Fase da Infância",
    desc: "Entenda como a alimentação saudável das crianças muda em cada fase da infância, do aleitamento materno aos lanches escolares, e como lidar com a neofobia alimentar.",
    isNew: false
  },
  {
    id: 31,
    link: "/relacao-cintura-quadril",
    imgSrc: `${githubImgBase}Blog/RelacaoCinturaQuadril_Capa.webp`,
    tag: "Composição Corporal",
    title: "Relação Cintura-Quadril: O Que É e Como Calcular Seu Risco Cardiovascular",
    desc: "Descubra o que é a relação cintura-quadril, como medir corretamente, os pontos de corte da OMS por sexo e use nossa calculadora gratuita para saber seu risco cardiovascular agora.",
    isNew: false
  },
  {
    id: 30,
    link: "/avaliacao-antropometrica",
    imgSrc: `${githubImgBase}Blog/Avaliacao_Antropometrica_Capa.webp`,
    tag: "Composição Corporal",
    title: "Como fazer uma Avaliação Antropométrica de Qualidade?",
    desc: "Aprenda como fazer uma avaliação antropométrica completa. Domine o protocolo ISAK, Pollock, dobras cutâneas, calcule seu somatotipo online e descubra como automatizar seus relatórios!",
    isNew: true
  },
  {
    id: 29,
    link: "/o-que-e-dieta-mediterranea",
    imgSrc: `${githubImgBase}Blog/DietaMediterranea_Capa.webp`,
    tag: "Dietas da Moda",
    title: "O Que É Dieta Mediterrânea? O Segredo para Saúde e Longevidade",
    desc: "Descubra o que é dieta mediterrânea na prática. Entenda como o consumo de azeite extra virgem, peixes e vegetais protege o coração e ajuda a emagrecer sem restrições extremas.",
    isNew: true
  },
  {
    id: 28,
    link: "/como-ganhar-tempo-na-cozinha",
    imgSrc: `${githubImgBase}Blog/GanharTempo_Capa.webp`,
    tag: "Nutrição Comportamental",
    title: "Como Ganhar Tempo na Cozinha: O Guia Definitivo da Organização e Mise en Place",
    desc: "Descubra como ganhar tempo na cozinha adotando a técnica profissional de Mise en Place. Aprenda a organizar cardápios e usar o congelamento inteligente a seu favor.",
    isNew: true
  },
  {
    id: 27,
    link: "/o-que-comer-na-tpm",
    imgSrc: `${githubImgBase}Blog/TPM.webp`,
    tag: "Saúde da Mulher",
    title: "O Que Comer na TPM: O Guia Definitivo Para Controlar a Fome e Emagrecer",
    desc: "Descubra exatamente o que comer na TPM para aliviar os sintomas, controlar a fome por doces e manter o emagrecimento, entendendo a fisiologia do seu ciclo.",
  },
  {
    id: 26,
    link: "/o-que-e-dieta-low-carb",
    imgSrc: `${githubImgBase}Blog/LowCarb_Capa.webp`,
    tag: "Dietas da Moda",
    title: "O Que é Dieta Low Carb? A Diferença para a Cetogênica e Como Começar",
    desc: "Entenda a estratégia de redução inteligente de carboidratos, aprenda a diferença entre low carb e cetogênica e descubra como começar sua jornada metabólica com nossa calculadora exclusiva.",
  },
  {
    id: 25,
    link: "/o-que-e-dieta-cetogenica",
    imgSrc: `${githubImgBase}Blog/DietaCetogenica_Capa.webp`,
    tag: "Dietas da Moda",
    title: "O Que é Dieta Cetogênica? Guia Definitivo e Científico",
    desc: "Aprenda como a restrição inteligente de carboidratos força o seu corpo a entrar em cetose, transformando gordura estocada na sua principal fonte de energia.",
  },
  {
    id: 24,
    link: "/o-que-e-jejum-intermitente",
    imgSrc: `${githubImgBase}Blog/JejumIntermitente_Capa.webp`,
    tag: "Dietas da Moda",
    title: "O Que é Jejum Intermitente? Guia Definitivo e Científico",
    desc: "Descubra o que é o jejum intermitente, como ele afeta o metabolismo, o limite do corpo humano sem comer e se ele realmente emagrece mais que a dieta tradicional.",    
  },
  {
    id: 23,
    link: "/melhor-horario-para-tomar-ferro",
    imgSrc: `${githubImgBase}Blog/HorarioFerro.webp`,
    tag: "Nutrição Clínica",
    title: "Melhor Horário Para Tomar Ferro: O Guia Definitivo Contra a Anemia",
    desc: "Descubra o melhor horário para tomar ferro, sintomas de falta no organismo, o que inibe a absorção e quanto tempo dura o tratamento para anemia ferropriva.",
  },
  {
    id: 22,
    link: "/percentual-gordura-feminino-ideal",
    imgSrc: `${githubImgBase}Blog/PercentualGorduraFeminino_Capa.webp`,
    tag: "Saúde da Mulher",
    title: "Qual o Percentual de Gordura Feminino Ideal? A Ciência Explica",
    desc: "Pare de brigar com a balança. Descubra qual é a faixa ideal para sua saúde e estética, e entenda como hormônios, ciclo menstrual e idade influenciam sua composição corporal.",
  },
  {
    id: 21,
    link: "/quantas-calorias-gasto-por-dia",
    imgSrc: `${githubImgBase}Blog/QuantasCaloriasGasto.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "Quantas Calorias Gasto Por Dia? Pare de Chutar e Entenda o Seu Metabolismo",
    desc: "Descubra como calcular seu gasto calórico diário. Entenda a sua Taxa Metabólica Basal (TMB), fator de atividade, METs e as fórmulas de Mifflin e Cunningham.",
  },
  {
    id: 20,
    link: "/efeitos-colaterais-da-melatonina",
    imgSrc: `${githubImgBase}Blog/Melatonina.webp`,
    tag: "Nutrição Clínica",
    title: "Efeitos Colaterais da Melatonina: Vicia? Faz Mal? A Verdade Científica",
    desc: "Descubra a verdade científica sobre a melatonina: ela vicia? Faz mal? Entenda os efeitos colaterais, riscos psicológicos e como dosar corretamente para dormir bem.",
  },
  {
    id: 19, 
    link: "/o-que-e-ciclo-circadiano", 
    imgSrc: `${githubImgBase}Blog/CicloCircadiano.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "O Que é Ciclo Circadiano? Relógio Biológico e Emagrecimento",
    desc: "Guia completo sobre ciclo circadiano: como emagrecer, melhorar o sono, horários corretos das refeições, a verdade sobre a melatonina e controle hormonal.",
    isNew: false
  },
  {
    id: 18, 
    link: "/o-que-sao-simbioticos", 
    imgSrc: `${githubImgBase}Blog/Simbioticos.webp`,
    tag: "Nutrição Clínica",
    title: "O que são Simbióticos? A Sinergia Intestinal",
    desc: "Descubra o que são os alimentos simbióticos, como a união de prebióticos e probióticos transforma a sua flora e as melhores combinações.",
    isNew: false
  },
  {
    id: 17, 
    link: "/o-que-sao-probioticos", 
    imgSrc: `${githubImgBase}Blog/Probioticos.webp`,
    tag: "Nutrição Clínica",
    title: "O que são Probióticos? Lactobacillus e Benefícios",
    desc: "Descubra o que são probióticos e Lactobacillus, para que servem no intestino, seus benefícios para a imunidade e quais as melhores fontes naturais.",
    isNew: false
  },
  {
    id: 16, 
    link: "/o-que-sao-prebioticos", 
    imgSrc: `${githubImgBase}Blog/Prebioticos.webp`,
    tag: "Nutrição Clínica",
    title: "O que são Prebióticos? Alimentos, Benefícios e Para Que Servem",
    desc: "Descubra o que são prebióticos, para que servem no seu intestino, quais alimentos são ricos em FOS e inulina, e como eles alimentam sua flora intestinal.",
    isNew: false
  },
  {
    id: 15, 
    link: "/o-que-e-fome-emocional", 
    imgSrc: `${githubImgBase}Blog/Fome-Emocional-Capa.webp`,
    tag: "Nutrição Comportamental",
    title: "O que é Fome Emocional? Como Identificar e Controlar o Impulso",
    desc: "Descubra os sintomas da fome emocional, entenda o ciclo da compulsão e aprenda estratégias práticas como a Escala de Fome e a técnica do atraso para retomar o controle.",
  },
  {
    id: 14,
    link: "/tirzepatida-para-que-serve",
    imgSrc: `${githubImgBase}Blog/Tirzepatida-para-que-serve.webp`,
    tag: "Tratamento Farmacológico",
    title: "Tirzepatida: Para Que Serve, Como Funciona e Seus Efeitos",
    desc: "Descubra para que serve a Tirzepatida, entenda seu mecanismo de ação duplo (GLP-1 e GIP), os principais efeitos colaterais e o potencial na perda de peso.",
  },
  {
    id: 13,
    link: "/comer-ovo-todo-dia-aumenta-o-colesterol",
    imgSrc: `${githubImgBase}Blog/comer-ovo-todo-dia-aumenta-o-colesterol.webp`,
    tag: "Nutrição Clínica",
    title: "Comer Ovo Todo Dia Aumenta o Colesterol? A Verdade Científica",
    desc: "Descubra a verdade científica, entenda o impacto no HDL/LDL e quantos ovos você pode consumir com segurança."
  },
  {
    id: 12,
    link: "/retatrutida_o_que_e",
    imgSrc: `${githubImgBase}Blog/retatrutida_molecula.webp`,
    tag: "Tratamento Farmacológico",
    title: "Retatrutida o que é? A nova fronteira da ciência",
    desc: "Descubra o que é a retatrutida, o novo medicamento agonista triplo e seus resultados impressionantes na perda de peso."
  },
  {
    id: 11,
    link: "/diabetico_pode_comer_beterraba",
    imgSrc: `${githubImgBase}Blog/beterraba_diabetes.webp`,
    tag: "Nutrição Clínica",
    title: "Diabético pode comer beterraba? O mito desvendado",
    desc: "Descubra por que o sabor doce da beterraba engana e como suas fibras na verdade ajudam a controlar os picos de glicemia no seu dia a dia."
  },
  {
    id: 10,
    link: "/qual_melhor_horario_para_se_pesar",
    imgSrc: `${githubImgBase}Blog/melhor_horario_pesagem.webp`,
    tag: "Composição Corporal",
    title: "Qual o melhor horário para se pesar?",
    desc: "Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite. Peso na balança não é igual a gordura corporal."
  },
  {
    id: 9,
    link: "/nutricao_para_ironman_703",
    imgSrc: `${githubImgBase}Blog/nutricao_ironman_703.webp`,
    tag: "Nutrição Esportiva",
    title: "Nutrição para Ironman 70.3: O Guia Definitivo",
    desc: "Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos, hidratação e suplementação para o triatlo."
  },
  {
    id: 8,
    link: "/hormonios_da_fome_emagrecimento",
    imgSrc: `${githubImgBase}Blog/Hormfome.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "Hormônios da Fome: A Verdadeira Razão do Efeito Rebote",
    desc: "Entenda como Grelina, Leptina e GLP-1 sabotam sua dieta. Descubra por que a fome aumenta após emagrecer e a ciência por trás do reganho de peso."
  },
  {
    id: 7,
    link: "/por_que_o_feijao_da_gases",
    imgSrc: `${githubImgBase}Blog/feijao.webp`,
    tag: "Nutrição Clínica",
    title: "Por que o feijão dá gases e como evitar de vez",
    desc: "Descubra por que o feijão causa gases, quais alimentos fermentam no intestino e veja dicas práticas para melhorar sua digestão."
  },
  {
    id: 6,
    link: "/o_dilema_do_sangue_na_altitude",
    imgSrc: `${githubImgBase}Blog/eritropoietina.webp`,
    tag: "Nutrição Esportiva",
    title: "O Dilema do Sangue na Altitude",
    desc: "Como o hormônio eritropoetina e a transfusão de hemácias afetam a biologia do atleta e a ética no esporte."
  },
  {
    id: 5,
    link: "/efeito_sanfona_inflamacao_invisivel",
    imgSrc: `${githubImgBase}Blog/efeito_sanfona.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "O Efeito Sanfona e a Inflamação Invisível",
    desc: "Por que o reganho de peso é tão perigoso e como a memória das suas células de gordura dificulta o emagrecimento real."
  },
  {
    id: 4,
    link: "/quantas_frutas_posso_comer",
    imgSrc: `${githubImgBase}Blog/frutose_bananas.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "Quantas frutas posso comer por dia?",
    desc: "Entenda o metabolismo da frutose, a diferença entre o açúcar natural e o refinado, e descubra a verdade sobre a fruta e a gordura no fígado."
  },
  {
    id: 3,
    link: "/vitamina_a_para_que_serve",
    imgSrc: `${githubImgBase}Blog/vitamina_a.webp`,
    tag: "Fisiologia e Metabolismo",
    title: "Vitamina A para que serve?",
    desc: "Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão."
  },
  {
    id: 2,
    link: "/o_que_e_antropometria",
    imgSrc: `${githubImgBase}Blog/O_que_e_antropometria.webp`,
    tag: "Composição Corporal",
    title: "O que é Antropometria?",
    desc: "A Antropometria é uma ciência fundamental que estuda as proporções do corpo humano..."
  },
  {
    id: 1,
    link: "/a_balanca_de_bioimpedancia_e_confiavel",
    imgSrc: `${githubImgBase}Blog/Bia1.webp`,
    tag: "Composição Corporal",
    title: "A balança de bioimpedância é confiável?",
    desc: "Entenda se a balança de bioimpedância é confiável e os fatores que alteram o resultado."
  }
];

// Lista única de tags baseada nos posts + opção "Todas"
const categories = ["Todas", ...new Set(postsData.map(post => post.tag))];

export default function Blog() {
  // Substituímos o useState pelo useSearchParams para espelhar o estado na URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Lê os valores da URL. Se não existirem, usa os padrões (Página 1 e "Todas")
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const selectedTag = searchParams.get('tag') || 'Todas';
  const postsPerPage = 9;

  // Filtragem dos posts
  const filteredPosts = selectedTag === "Todas" 
    ? postsData 
    : postsData.filter(post => post.tag === selectedTag);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;

  // Atualiza a URL quando o usuário escolhe um novo filtro (e volta pra pág 1)
  const handleTagChange = (e) => {
    setSearchParams({ tag: e.target.value, page: 1 });
  };

  // Atualiza a URL quando o usuário clica na paginação
  const goToPage = (pageNumber) => {
    setSearchParams({ tag: selectedTag, page: pageNumber });
  };

  const nextPage = () => goToPage(Math.min(currentPage + 1, totalPages));
  const prevPage = () => goToPage(Math.max(currentPage - 1, 1));

  // Efeito para rolar suavemente para o topo quando a página mudar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const PaginationControls = () => {
    if (totalPages <= 1) return null;
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex justify-center items-center gap-2 sm:gap-4 my-12 flex-wrap">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold uppercase text-xs sm:text-sm transition-all ${currentPage === 1 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-green-700 text-white hover:bg-green-700 shadow-md hover:-translate-y-1'}`}
        >
          Anterior
        </button>
        <div className="flex gap-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-bold text-sm transition-all flex items-center justify-center ${currentPage === number ? 'bg-green-700 text-white shadow-lg scale-110' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-green-700'}`}
            >
              {number}
            </button>
          ))}
        </div>
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold uppercase text-xs sm:text-sm transition-all ${currentPage === totalPages ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-green-700 text-white hover:bg-green-700 shadow-md hover:-translate-y-1'}`}
        >
          Próxima
        </button>
      </div>
    );
  };

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-8 tracking-widest">Nutrição baseada em evidência científica</p>

      {/* Menu Dropdown Superior (Discreto) */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex items-center">
          <Filter size={14} className="absolute left-3 text-green-700 pointer-events-none" />
          <select 
            value={selectedTag}
            onChange={handleTagChange}
            className="appearance-none bg-white border border-slate-200 text-slate-600 py-2 pl-9 pr-8 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:border-green-300 transition-colors focus:outline-none shadow-sm"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <PaginationControls />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentPosts.map((post, index) => (
          <Link 
            key={post.id} 
            to={post.link} 
            state={{ fromBlog: true }} 
            className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left"
          >
            <div className="relative w-full h-64 overflow-hidden border-b border-slate-50 bg-slate-100">
              <ImagemOtimizada 
                src={post.imgSrc} 
                alt={post.title} 
                title={post.title}
                className="absolute inset-0 group-hover:scale-110 transition-transform duration-500" 
                priority={index < 3 ? "high" : "low"}
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${post.isNew ? 'bg-green-100 text-green-700' : 'bg-green-50 text-green-700'}`}>
                  {post.tag}
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-3 italic group-hover:text-green-700 transition-colors uppercase leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-600 text-sm mb-6 flex-grow font-medium leading-relaxed">
                {post.desc}
              </p>
              <div className="flex items-center gap-2 text-green-700 font-bold uppercase text-xs mt-auto">
                Ler Página do Artigo <ChevronRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tags Inferiores para Filtro Rápido - Atualizado para Dropdown */}
      <div className="mt-20 mb-4 flex flex-col items-center justify-center border-t border-slate-100 pt-10">
        <div className="mb-4 flex items-center justify-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest">
           <TagIcon size={12} /> Explorar por tema
        </div>
        <div className="relative inline-flex items-center">
          <Filter size={14} className="absolute left-3 text-green-700 pointer-events-none" />
          <select 
            value={selectedTag}
            onChange={handleTagChange}
            className="appearance-none bg-white border border-slate-200 text-slate-600 py-2 pl-9 pr-8 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:border-green-300 transition-colors focus:outline-none shadow-sm"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <PaginationControls />
    </section>
  );
}