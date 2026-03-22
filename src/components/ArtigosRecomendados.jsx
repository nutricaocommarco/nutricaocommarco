import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

// 1. A sua lista centralizada. Toda vez que criar um post novo, basta adicionar aqui!
export const listaArtigos = [
{
    link: "/nutricao_para_ironman_703",
    img: `${githubImgBase}Blog/nutricao_ironman_703.jpg`,
    tag: "Nutrição Esportiva",
    titulo: "Nutrição para Ironman 70.3: Guia Completo",
    desc: "Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos, hidratação e suplementação para o Ironman 70.3."
  },
  {
    link: "/hormonios_da_fome_emagrecimento",
    img: `${githubImgBase}Blog/Hormfome.jpg`,
    tag: "Fisiologia e Metabolismo",
    titulo: "Hormônios da Fome: Por que seu corpo luta contra a dieta?",
    desc: "Entenda como a Grelina e a Leptina controlam seu apetite e por que a ciência foca na inflamação celular para evitar o reganho de peso."
  },
  {
    link: "/por_que_o_feijao_da_gases",
    img: `${githubImgBase}Blog/feijao.jpg`,
    tag: "Saúde Intestinal",
    titulo: "Por que o Feijão dá Gases? (E como evitar)",
    desc: "Descubra a ciência por trás dos antinutrientes e como o remolho pode salvar sua digestão." 
    },
  {
    link: "/o_dilema_do_sangue_na_altitude",
    img: `${githubImgBase}Blog/eritropoietina.jpg`,
    tag: "Fisiologia do Esporte",
    titulo: "O Dilema do Sangue na Altitude",
    desc: "Como o hormônio eritropoetina e a transfusão de hemácias afetam a biologia do atleta e a ética no esporte."
  },
  {
    link: "/efeito_sanfona_inflamacao_invisivel",
    img: `${githubImgBase}Blog/efeito_sanfona.jpg`,
    tag: "Fisiopatologia",
    titulo: "O Efeito Sanfona e a Inflamação Invisível",
    desc: "Por que o reganho de peso é tão perigoso e como a memória das suas células de gordura dificulta o emagrecimento real."
  },
  {
    link: "/quantas_frutas_posso_comer",
    img: `${githubImgBase}Blog/frutose_bananas.jpg`,
    tag: "Nutrição Clínica",
    titulo: "Quantas frutas posso comer por dia?",
    desc: "Entenda o metabolismo da frutose e descubra a verdade sobre a fruta e a gordura no fígado."
  },
  {
    link: "/vitamina_a_para_que_serve",
    img: `${githubImgBase}Blog/vitamina_a.jpg`,
    tag: "Metabolismo",
    titulo: "Vitamina A para que serve?",
    desc: "Descubra como a Vitamina A atua no seu metabolismo muito além da visão."
  },
  {
    link: "/o_que_e_antropometria",
    img: `${githubImgBase}Blog/O_que_e_antropometria.png`,
    tag: "Educação Científica",
    titulo: "O que é Antropometria?",
    desc: "A Antropometria é uma ciência fundamental que estuda as proporções do corpo humano."
  },
  {
    link: "/a_balanca_de_bioimpedancia_e_confiavel",
    img: `${githubImgBase}Blog/Bia1.jpg`,
    tag: "Tecnologia e Medida",
    titulo: "A balança de bioimpedância é confiável?",
    desc: "Entenda se a balança de bioimpedância é confiável e os fatores que alteram o resultado."
  }
];

export default function ArtigosRecomendados({ currentPath }) {
  const [artigosSorteados, setArtigosSorteados] = useState([]);

  useEffect(() => {
    // 2. Filtra a lista para NÃO incluir o artigo que o paciente já está lendo
    const artigosFiltrados = listaArtigos.filter(artigo => artigo.link !== currentPath);
    
    // 3. Embaralha os artigos restantes e escolhe 3
    const embaralhados = [...artigosFiltrados].sort(() => 0.5 - Math.random());
    setArtigosSorteados(embaralhados.slice(0, 3));
  }, [currentPath]);

  return (
    <div className="mt-20 pt-16 border-t-2 border-slate-100">
      <h2 className="text-3xl font-black text-slate-900 mb-10 italic uppercase text-center md:text-left">Leia também</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {artigosSorteados.map((artigo, index) => (
          <Link key={index} to={artigo.link} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col text-left">
            <div className="h-40 overflow-hidden">
              <img src={artigo.img} alt={artigo.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow text-left">
              <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-widest mb-3 w-fit">{artigo.tag}</span>
              <h3 className="text-lg font-black text-slate-800 leading-tight mb-2">{artigo.titulo}</h3>
              <p className="text-slate-500 text-xs font-medium italic mb-4 line-clamp-3 flex-grow">{artigo.desc}</p>
              <div className="flex items-center gap-1 text-green-600 font-bold uppercase text-[10px]">Acessar Artigo <ChevronRight size={14} /></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
