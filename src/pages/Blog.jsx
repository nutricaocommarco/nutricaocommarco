import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// Transformamos os cards em um array de dados para facilitar a paginação
const postsData = [
  {
    id: 1,
    link: "/retatrutida_o_que_e",
    imgSrc: `${githubImgBase}Blog/retatrutida_molecula.jpg`,
    tag: "Tratamento Metabólico",
    title: "Retatrutida o que é? A nova fronteira da ciência",
    desc: "Descubra o que é a retatrutida, o novo medicamento agonista triplo e seus resultados impressionantes na perda de peso.",
    isNew: true
  },
  {
    id: 2,
    link: "/diabetico_pode_comer_beterraba",
    imgSrc: `${githubImgBase}Blog/beterraba_diabetes.jpg`,
    tag: "Nutrição Clínica",
    title: "Diabético pode comer beterraba? O mito desvendado",
    desc: "Descubra por que o sabor doce da beterraba engana e como suas fibras na verdade ajudam a controlar os picos de glicemia no seu dia a dia."
  },
  {
    id: 3,
    link: "/qual_melhor_horario_para_se_pesar",
    imgSrc: `${githubImgBase}Blog/melhor_horario_pesagem.jpg`,
    tag: "Avaliação e Medidas",
    title: "Qual o melhor horário para se pesar?",
    desc: "Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite. Peso na balança não é igual a gordura corporal."
  },
  {
    id: 4,
    link: "/nutricao_para_ironman_703",
    imgSrc: `${githubImgBase}Blog/nutricao_ironman_703.jpg`,
    tag: "Nutrição Esportiva",
    title: "Nutrição para Ironman 70.3: O Guia Definitivo",
    desc: "Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos, hidratação e suplementação para o triatlo."
  },
  {
    id: 5,
    link: "/hormonios_da_fome_emagrecimento",
    imgSrc: `${githubImgBase}Blog/Hormfome.jpg`,
    tag: "Fisiologia e Metabolismo",
    title: "Hormônios da Fome: A Verdadeira Razão do Efeito Rebote",
    desc: "Entenda como Grelina, Leptina e GLP-1 sabotam sua dieta. Descubra por que a fome aumenta após emagrecer e a ciência por trás do reganho de peso."
  },
  {
    id: 6,
    link: "/por_que_o_feijao_da_gases",
    imgSrc: `${githubImgBase}Blog/feijao.jpg`,
    tag: "Saúde Intestinal",
    title: "Por que o feijão dá gases e como evitar de vez",
    desc: "Descubra por que o feijão causa gases, quais alimentos fermentam no intestino e veja dicas práticas para melhorar sua digestão."
  },
  {
    id: 7,
    link: "/o_dilema_do_sangue_na_altitude",
    imgSrc: `${githubImgBase}Blog/eritropoietina.jpg`,
    tag: "Fisiologia do Esporte",
    title: "O Dilema do Sangue na Altitude",
    desc: "Como o hormônio eritropoetina e a transfusão de hemácias afetam a biologia do atleta e a ética no esporte."
  },
  {
    id: 8,
    link: "/efeito_sanfona_inflamacao_invisivel",
    imgSrc: `${githubImgBase}Blog/efeito_sanfona.jpg`,
    tag: "Fisiopatologia",
    title: "O Efeito Sanfona e a Inflamação Invisível",
    desc: "Por que o reganho de peso é tão perigoso e como a memória das suas células de gordura dificulta o emagrecimento real."
  },
  {
    id: 9,
    link: "/quantas_frutas_posso_comer",
    imgSrc: `${githubImgBase}Blog/frutose_bananas.jpg`,
    tag: "Metabolismo",
    title: "Quantas frutas posso comer por dia?",
    desc: "Entenda o metabolismo da frutose, a diferença entre o açúcar natural e o refinado, e descubra a verdade sobre a fruta e a gordura no fígado."
  },
  {
    id: 10,
    link: "/vitamina_a_para_que_serve",
    imgSrc: `${githubImgBase}Blog/vitamina_a.jpg`,
    tag: "Metabolismo",
    title: "Vitamina A para que serve?",
    desc: "Entenda as diferenças entre retinol, retinal e ácido retinóico, e descubra como a Vitamina A atua no seu metabolismo muito além da visão."
  },
  {
    id: 11,
    link: "/o_que_e_antropometria",
    imgSrc: `${githubImgBase}Blog/O_que_e_antropometria.png`,
    tag: "Educação Científica",
    title: "O que é Antropometria?",
    desc: "A Antropometria é uma ciência fundamental que estuda as proporções do corpo humano..."
  },
  {
    id: 12,
    link: "/a_balanca_de_bioimpedancia_e_confiavel",
    imgSrc: `${githubImgBase}Blog/Bia1.jpg`,
    tag: "Tecnologia e Medida",
    title: "A balança de bioimpedância é confiável?",
    desc: "Entenda se a balança de bioimpedância é confiável e os fatores que alteram o resultado."
  }
];

export default function Blog() {
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Lógica matemática para fatiar o array baseado na página
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  // Calcula o total de páginas
  const totalPages = Math.ceil(postsData.length / postsPerPage);

  // Funções para mudar de página
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-4 text-center">Blog</h1>
      <p className="text-slate-500 font-bold uppercase text-center mb-16 tracking-widest">Nutrição baseada em evidência científica</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentPosts.map((post) => (
          <Link key={post.id} to={post.link} className="bg-white rounded-[3rem] shadow-xl overflow-hidden hover:-translate-y-2 transition-all group border border-slate-100 flex flex-col text-left">
            <div className="h-64 overflow-hidden border-b border-slate-50">
              <img 
                src={post.imgSrc} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest ${post.isNew ? 'bg-green-100 text-green-700' : 'bg-green-50 text-green-600'}`}>
                  {post.tag}
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-3 italic group-hover:text-green-600 transition-colors uppercase leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-600 text-sm mb-6 flex-grow font-medium leading-relaxed">
                {post.desc}
              </p>
              <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs mt-auto">
                Ler Página do Artigo <ChevronRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Controles de Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-16">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-full font-bold uppercase text-sm transition-all ${currentPage === 1 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:-translate-y-1'}`}
          >
            Anterior
          </button>
          
          <span className="text-slate-600 font-bold">
            Página {currentPage} de {totalPages}
          </span>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-full font-bold uppercase text-sm transition-all ${currentPage === totalPages ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:-translate-y-1'}`}
          >
            Próxima
          </button>
        </div>
      )}
    </section>
  );
}
