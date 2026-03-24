import React, { useState } from 'react';
// 🧠 Importando o Cérebro Central!
import { posts } from '../data/posts'; 

export default function GeradorEmailSecreto() {
  const [copiado, setCopiado] = useState(false);

  // Pega os 4 artigos mais recentes do Cérebro Central e adapta para o formato do e-mail
  const ultimosArtigos = posts.slice(0, 4).map(post => ({
    titulo: post.titulo,
    link: `https://www.nutricaocommarco.com.br${post.link}`,
    descricao: post.desc,
    imagem: post.img
  }));

  const gerarHTML = () => {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 40px; overflow: hidden; border: 1px solid #e2e8f0; }
        .header { padding: 30px 20px; text-align: left; border-bottom: 2px solid #f1f5f9; }
        .content { padding: 40px 30px; text-align: left;}
        .badge { display: inline-block; background-color: #f0fdf4; color: #16a34a; padding: 6px 16px; border-radius: 9999px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 15px; }
        .title { color: #0f172a; font-size: 26px; font-weight: 900; text-transform: uppercase; font-style: italic; line-height: 1.2; margin-bottom: 20px; text-decoration: none; display: block; font-family: sans-serif;}
        .text { color: #475569; font-size: 15px; line-height: 1.6; margin-bottom: 25px; font-weight: 500; }
        .featured-image { width: 100%; border-radius: 24px; margin-bottom: 20px; display: block;}
        .button { display: inline-block; background-color: #16a34a; color: #ffffff; padding: 14px 28px; border-radius: 16px; text-decoration: none; font-weight: 900; text-transform: uppercase; font-size: 12px; font-style: italic; font-family: sans-serif;}
        .section-divider { background-color: #f1f5f9; padding: 15px 30px; color: #64748b; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; text-align: center; }
        .article-card-table { width: 100%; border-bottom: 1px solid #f1f5f9; table-layout: fixed; }
        .card-image-cell { width: 115px; vertical-align: top; padding: 25px 0 25px 25px; }
        .card-content-cell { vertical-align: top; padding: 25px 25px 25px 15px; text-align: left;}
        .card-thumbnail { width: 100px; height: 100px; object-fit: cover; border-radius: 12px; display: block;}
        .card-title { color: #0f172a; font-size: 17px; font-weight: 900; text-transform: uppercase; font-style: italic; text-decoration: none; line-height: 1.3; display: block; margin-bottom: 6px; font-family: sans-serif; }
        .card-text { color: #475569; font-size: 13px; line-height: 1.5; font-weight: 500; margin-bottom: 10px; margin-top: 0; font-family: sans-serif;}
        .footer { background-color: #f8fafc; padding: 40px 30px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="vertical-align: middle;"><img src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png" width="60"></td>
                    <td style="vertical-align: middle; padding-left: 12px;">
                        <span style="font-size: 24px; font-weight: 900; color: #0f172a; text-transform: uppercase; letter-spacing: -1px; font-family: sans-serif;">Nutrição com <span style="color: #16a34a;">Marco</span></span>
                    </td>
                </tr>
            </table>
        </div>

        <div class="content">
            <span class="badge">Destaque da Semana</span>
            <a href="${ultimosArtigos[0].link}" class="title">${ultimosArtigos[0].titulo}</a>
            <img src="${ultimosArtigos[0].imagem}" class="featured-image" alt="Destaque">
            <p class="text">${ultimosArtigos[0].descricao}</p>
            <div style="text-align: center;"><a href="${ultimosArtigos[0].link}" class="button">Ler Artigo Completo</a></div>
        </div>

        <div class="section-divider">Mais do nosso Blog</div>

        <table border="0" cellpadding="0" cellspacing="0" class="article-card-table">
            <tr>
                <td class="card-image-cell"><img src="${ultimosArtigos[1].imagem}" class="card-thumbnail" alt="Thumbnail"></td>
                <td class="card-content-cell">
                    <a href="${ultimosArtigos[1].link}" class="card-title">${ultimosArtigos[1].titulo}</a>
                    <p class="card-text">${ultimosArtigos[1].descricao}</p>
                    <a href="${ultimosArtigos[1].link}" style="color: #16a34a; font-weight: 800; font-size: 11px; text-transform: uppercase; text-decoration: none;">Ver no Blog →</a>
                </td>
            </tr>
        </table>

        <table border="0" cellpadding="0" cellspacing="0" class="article-card-table">
            <tr>
                <td class="card-image-cell"><img src="${ultimosArtigos[2].imagem}" class="card-thumbnail" alt="Thumbnail"></td>
                <td class="card-content-cell">
                    <a href="${ultimosArtigos[2].link}" class="card-title">${ultimosArtigos[2].titulo}</a>
                    <p class="card-text">${ultimosArtigos[2].descricao}</p>
                    <a href="${ultimosArtigos[2].link}" style="color: #16a34a; font-weight: 800; font-size: 11px; text-transform: uppercase; text-decoration: none;">Ver no Blog →</a>
                </td>
            </tr>
        </table>

        <table border="0" cellpadding="0" cellspacing="0" class="article-card-table" style="border-bottom: none;">
            <tr>
                <td class="card-image-cell"><img src="${ultimosArtigos[3].imagem}" class="card-thumbnail" alt="Thumbnail"></td>
                <td class="card-content-cell">
                    <a href="${ultimosArtigos[3].link}" class="card-title">${ultimosArtigos[3].titulo}</a>
                    <p class="card-text">${ultimosArtigos[3].descricao}</p>
                    <a href="${ultimosArtigos[3].link}" style="color: #16a34a; font-weight: 800; font-size: 11px; text-transform: uppercase; text-decoration: none;">Ver no Blog →</a>
                </td>
            </tr>
        </table>

        <div class="footer">
            <p style="margin: 0; color: #0f172a; font-size: 14px; font-weight: 900; text-transform: uppercase; font-family: sans-serif;">Marco Aurélio Jr.</p>
            <p style="margin: 5px 0 20px; color: #94a3b8; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; font-family: sans-serif;">Nutrição Clinico-Esportiva • Especialista em Metabolismo 🐧</p>
            <a href="https://instagram.com/nutricao_com_marco" style="color: #16a34a; text-decoration: none; font-weight: 900; font-size: 12px; text-transform: uppercase; font-family: sans-serif;">@Nutricao_com_Marco</a>
        </div>
    </div>
</body>
</html>`;
  };

  const copiarCodigo = () => {
    navigator.clipboard.writeText(gerarHTML());
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[3rem] shadow-xl text-center max-w-lg w-full border border-slate-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🐧</span>
        </div>
        <h1 className="text-2xl font-black text-slate-800 uppercase italic mb-2">Gerador de Email</h1>
        <p className="text-slate-500 mb-8 font-medium">Clique no botão abaixo para gerar o código HTML atualizado com os últimos artigos do blog.</p>
        
        <button 
          onClick={copiarCodigo}
          className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg text-sm ${copiado ? 'bg-slate-800 text-green-400' : 'bg-green-600 text-white hover:bg-green-700 hover:-translate-y-1'}`}
        >
          {copiado ? 'CÓDIGO COPIADO!' : 'COPIAR CÓDIGO HTML'}
        </button>
      </div>
    </div>
  );
}
