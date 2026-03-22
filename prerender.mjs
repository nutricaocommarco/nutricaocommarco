import fs from 'fs';
import path from 'path';

// O mapa do tesouro: Definimos aqui o que o WhatsApp deve ver em cada página
const routes = [
  { 
    path: 'sobre', 
    title: 'Sobre Marco Aurélio Jr. | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conheça a história de Marco Aurélio Jr., futuro nutricionista e especialista em avaliação física ISAK 1.'
  },
  { 
    path: 'certificacoes', 
    title: 'Currículo e Certificações | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conheça a trajetória técnica e as certificações internacionais ISAK do nutricionista Marco Aurélio Jr.'
  },
  { 
    path: 'planos', 
    title: 'Planos de Acompanhamento | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conheça os níveis de acompanhamento nutricional e avaliação física ISAK 1.'
  },
  { 
    path: 'blog', 
    title: 'Blog de Nutrição e Ciência | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png',
    desc: 'Conteúdo científico sobre antropometria, bioimpedância e emagrecimento real.'
  },
  { 
    path: 'efeito_sanfona_inflamacao_invisivel', 
    title: 'Efeito Sanfona e Inflamação Invisível | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/efeito_sanfona.jpg',
    desc: 'Descubra por que o reganho de peso é mais perigoso que a obesidade estável.'
  },
  { 
    path: 'o_dilema_do_sangue_na_altitude', 
    title: 'Doping na Altitude: Eritropoetina | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/eritropoetina.jpg',
    desc: 'Entenda os riscos do uso sintético de hormônios e a ética no esporte de alta performance.'
  },
  { 
    path: 'quantas_frutas_posso_comer', 
    title: 'A frutose das frutas faz mal? | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/frutose_bananas.jpg',
    desc: 'Entenda o metabolismo da frutose e a verdade sobre a fruta e a gordura no fígado.'
  },
  { 
    path: 'vitamina_a_para_que_serve', 
    title: 'Vitamina A para que serve? | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/vitamina_a.jpg',
    desc: 'Descubra como a Vitamina A atua no seu metabolismo muito além da visão.'
  },
  { 
    path: 'o_que_e_antropometria', 
    title: 'O que é Antropometria? | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/antropometria.jpg',
    desc: 'Descubra como a avaliação ISAK revela sua real composição corporal, além da balança.'
  },
  { 
    path: 'a_balanca_de_bioimpedancia_e_confiavel', 
    title: 'A balança de bioimpedância é confiável? | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/bioimpedancia.jpg',
    desc: 'Entenda como funciona a bioimpedância e o que pode alterar seu percentual de gordura.'
  },
  { 
    path: 'por_que_o_feijao_da_gases', 
    title: 'Por que o feijão dá gases? | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/feijao.jpg',
    desc: 'Descubra por que o feijão causa gases e o que fazer para evitar o desconforto.'
  },
  { 
    path: 'nutricao_para_ironman_703', 
    title: 'Nutrição para Ironman 70.3: Guia Completo | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/nutricao_ironman_703.jpg',
    desc: 'Aprenda a estratégia nutricional para triatletas de endurance: calorias, carboidratos, hidratação e suplementação.'
  },
  { 
    path: 'hormonios_da_fome_emagrecimento', 
    title: 'Hormônios da Fome: O corpo contra a dieta | Nutrição com Marco',
    image: 'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/Hormfome.jpg',
    desc: 'Entenda como a Grelina e a Leptina controlam seu apetite e a relação da inflamação celular com o reganho de peso.'
  }
];

const distPath = path.resolve('dist');
const template = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log('🚀 Iniciando Robô de SEO do Marco...');

routes.forEach(route => {
  const routePath = path.join(distPath, route.path);
  if (!fs.existsSync(routePath)) fs.mkdirSync(routePath);

  // Injetamos as tags do WhatsApp direto no HTML "congelado"
  const html = template
    .replace('<title>Nutrição com Marco</title>', `<title>${route.title}</title>`)
    .replace('</head>', `
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${route.title}" />
      <meta property="og:image" content="${route.image}" />
      <meta property="og:url" content="https://www.nutricaocommarco.com.br/${route.path}" />
      <meta property="og:description" content="${route.desc}" />
    </head>`);

  fs.writeFileSync(path.join(routePath, 'index.html'), html);
  console.log(`✅ Página [${route.path}] preparada para o WhatsApp!`);
});

