import fs from 'fs';
import path from 'path';

const artigos = [
  {
    titulo: "Diabético pode comer beterraba? O mito desvendado",
    link: "https://www.nutricaocommarco.com.br/diabetico_pode_comer_beterraba",
    descricao: "Descubra se diabéticos podem comer beterraba. Entenda como as fibras reduzem a carga glicêmica e os benefícios reais para o metabolismo no diabetes tipo 2.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/beterraba_diabetes.jpg",
    data: new Date("2026-03-21").toUTCString()
  },

  {
    titulo: "Qual o melhor horário para se pesar?",
    link: "https://www.nutricaocommarco.com.br/qual_melhor_horario_para_se_pesar",
    descricao: "Descubra o melhor horário para se pesar e entenda por que seu peso varia tanto de manhã para a noite.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/melhor_horario_pesagem.jpg",
    data: new Date("2026-03-30").toUTCString()
  },
  {
    titulo: "Nutrição para Ironman 70.3: Guia Completo",
    link: "https://www.nutricaocommarco.com.br/nutricao_para_ironman_703",
    descricao: "Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos, hidratação e suplementação para o Ironman 70.3.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/nutricao_ironman_703.jpg",
    data: new Date("2026-03-25").toUTCString()
  },
  {
    titulo: "Hormônios da Fome: Por que seu corpo luta contra a dieta?",
    link: "https://www.nutricaocommarco.com.br/hormonios_da_fome_emagrecimento",
    descricao: "Entenda como a Grelina e a Leptina controlam seu apetite e por que a ciência foca na inflamação celular para evitar o reganho de peso.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/Hormfome.jpg",
    data: new Date("2025-05-15").toUTCString()
  },
  {
    titulo: "Por que o Feijão dá Gases? (E como evitar)",
    link: "https://www.nutricaocommarco.com.br/por_que_o_feijao_da_gases",
    descricao: "Descubra a ciência por trás dos antinutrientes e como a técnica correta de remolho pode salvar sua digestão.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/feijao.jpg",
    data: new Date("2025-05-08").toUTCString()
  },
  {
    titulo: "O Dilema do Sangue na Altitude",
    link: "https://www.nutricaocommarco.com.br/o_dilema_do_sangue_na_altitude",
    descricao: "Entenda como a falta de oxigênio altera o sangue e o desempenho de atletas de elite na montanha.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/eritropoietina.jpg",
    data: new Date("2025-05-01").toUTCString()
  },
  {
    titulo: "Efeito Sanfona: A Inflamação Invisível",
    link: "https://www.nutricaocommarco.com.br/efeito_sanfona_inflamacao_invisivel",
    descricao: "Saiba por que recuperar o peso gera uma memória inflamatória nas suas células de gordura que trava seu progresso metabólico.",
    imagem: "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/efeito_sanfona.jpg",
    data: new Date("2025-04-24").toUTCString()
  }
];

const gerarXML = () => {
  let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
<channel>
  <title>Nutrição com Marco - Blog</title>
  <link>https://www.nutricaocommarco.com.br</link>
  <description>Artigos sobre metabolismo, fisiologia e composição corporal.</description>
  <language>pt-br</language>`;

  artigos.forEach(artigo => {
    rss += `
  <item>
    <title>${artigo.titulo}</title>
    <link>${artigo.link}</link>
    <description>${artigo.descricao}</description>
    <media:content url="${artigo.imagem}" type="image/jpeg" medium="image" />
    <pubDate>${artigo.data}</pubDate>
  </item>`;
  });

  rss += `
</channel>
</rss>`;

  return rss;
};

// Salva o arquivo na pasta public para o Vercel hospedar
const publicPath = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

fs.writeFileSync(path.join(publicPath, 'rss.xml'), gerarXML());
console.log('Arquivo RSS gerado com sucesso em public/rss.xml!');
