Import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, PlayCircle, HelpCircle, Zap } from 'lucide-react';
import ArtigosRecomendados from '../components/ArtigosRecomendados';
import { Helmet } from 'react-helmet-async';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Bioimpedancia() {
  // CORREÇÃO: Capturando o pathname e garantindo que a página abra no topo
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
   <>
  <Helmet>
        <title>A balança de bioimpedância é confiável? | Nutrição com Marco</title>
        <meta name="description" content="Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura." />

{/* SESSÃO DO ÁUDIO (OUVIR O ARTIGO) */}
<div className="my-8 p-6 md:p-8 bg-slate-50 rounded-[2.5rem] border border-green-100 flex flex-col sm:flex-row items-center gap-6 shadow-inner">
  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg">
    <PlayCircle size={28} />
  </div>
  <div className="flex-grow w-full text-left">
    <h3 className="text-xl font-black text-slate-800 italic mb-2">Ouça este artigo</h3>
    <audio controls className="w-full h-12 outline-none rounded-full">
      <source src="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Audio/Bioimpedancia.mp3" type="audio/mpeg" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  </div>
</div>
{/* FIM DA SESSÃO DO ÁUDIO */}

        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="A balança de bioimpedância é confiável? | Nutrição com Marco" />
        <meta property="og:description" content="Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura." />
        <meta property="og:image" content="https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/bioimpedancia.png" />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/a_balanca_de_bioimpedancia_e_confiavel" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "A Balança de Bioimpedância é Realmente Confiável?",
            "image": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Blog/bioimpedancia.png",
            "author": {"@type": "Person", "name": "Marco Aurélio Jr.", "url": "https://www.nutricaocommarco.com.br/sobre"},
            "publisher": {"@type": "Organization", "name": "Nutrição com Marco", "logo": {"@type": "ImageObject", "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/logoN_pingus.png"}},
            "datePublished": "2026-03-20",
            "description": "Entenda se a balança de bioimpedância é confiável, como ela funciona e o que altera o seu percentual de gordura."
          })}
        </script>
      </Helmet>
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-4xl">
      <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100">
        
        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Tecnologia e Medida</span>
          <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight text-slate-900 text-left">A balança de bioimpedância é confiável?</h1>

          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed text-left">
            <p>A balança de bioimpedância é uma ferramenta bastante utilizada para estimar a composição corporal — como percentual de gordura, massa muscular e água corporal. Mas afinal, <strong>ela é realmente confiável?</strong> A resposta mais honesta é: depende de como ela é usada.</p>
            <p>A bioimpedância funciona a partir da passagem de uma corrente elétrica de baixa intensidade pelo corpo. Essa corrente percorre os tecidos com diferentes níveis de resistência: a água conduz eletricidade com facilidade, enquanto a gordura oferece maior resistência. A partir dessa diferença, o aparelho faz estimativas sobre a composição corporal.</p>

            <div className="my-12 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <img src={`${githubImgBase}Blog/Bia1.jpg`} alt="Balança de Bioimpedância" title="Confiabilidade da Bioimpedância" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="bg-green-50 p-4 text-center"><p className="text-xs text-green-700 font-bold uppercase tracking-widest text-center">A bioimpedância estima o corpo através da água e não mede a gordura diretamente.</p></div>
            </div>

            <p>E aqui está o ponto-chave: <strong>ela não mede gordura diretamente — ela mede, principalmente, a quantidade de água corporal.</strong> A partir disso, utiliza equações para estimar os demais componentes. Ou seja, qualquer fator que altere a quantidade ou a distribuição de água no corpo pode impactar significativamente o resultado. Por isso, a bioimpedância não é 100% confiável, especialmente quando o protocolo não é seguido corretamente.</p>

            <div className="my-16 bg-green-50 p-6 md:p-10 rounded-[3.5rem] border border-green-100">
              <div className="flex items-center gap-4 mb-8">
                <PlayCircle size={32} className="text-green-600" />
                <h3 className="text-xl font-black text-slate-800 uppercase italic leading-none text-center md:text-left">Entenda no Vídeo</h3>
              </div>
              <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl flex justify-center bg-white border border-green-100">
                <iframe src="https://www.instagram.com/p/DUYdSIukaS_/embed" width="400" height="600" frameBorder="0" scrolling="no" allowtransparency="true" className="max-w-full"></iframe>
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">O que pode interferir no resultado?</h2>
            <p>Diversos fatores influenciam a quantidade de água corporal e, consequentemente, a leitura da bioimpedância: estado de hidratação, consumo recente de alimentos, exercício físico, álcool, cafeína e até a fase do ciclo menstrual. Por exemplo, uma pessoa pode apresentar um percentual de gordura maior simplesmente por estar desidratada naquele momento.</p>

            <h2 className="text-2xl font-black text-slate-900 uppercase italic mt-12 mb-4 text-center md:text-left">Frequências e Balanças Octapolares</h2>
            <p>Nem toda bioimpedância é igual. Aparelhos multifrequenciais permitem uma análise mais completa, e as chamadas <strong>balanças octapolares</strong> utilizam oito pontos de contato (mãos e pés) para garantir maior precisão.</p>

            {/* QUADRO DE DESTAQUE COM LINK INTERNO */}
            <div className="bg-green-600 text-white p-10 rounded-[3.5rem] shadow-xl my-12 relative overflow-hidden">
              <Zap className="absolute -top-5 -right-5 w-24 h-24 opacity-20" />
              <h2 className="text-white text-2xl font-black uppercase italic mb-6 leading-tight text-center md:text-left">E a certificação ISAK?</h2>
              <p className="text-green-50 font-bold leading-relaxed">
                Diferente da bioimpedância, a <Link to="/o_que_e_antropometria" className="text-white underline underline-offset-4 hover:text-green-200 transition-colors font-black">antropometria</Link> bem aplicada por um profissional certificado pela ISAK tende a ser mais consistente ao longo do tempo e menos sensível a variações agudas de hidratação. É o padrão ouro para acompanhamento da evolução corporal.
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100">
              <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 italic"><HelpCircle className="text-green-600" /> FAQ Estratégico</h3>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">A balança de bioimpedância acerta meu percentual de gordura?</h4>
                  <p className="text-slate-600">Não exatamente. Ela fornece uma estimativa baseada na água corporal. Os valores variam dependendo da sua hidratação e fatores momentâneos.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Qual o melhor horário para fazer bioimpedância?</h4>
                  <p className="text-slate-600">Pela manhã, em jejum, após ir ao banheiro e antes de qualquer atividade física. Padronizar é o segredo da precisão.</p>
                </div>
                {/* FAQ COM LINK INTERNO */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">A bioimpedância substitui as dobras cutâneas?</h4>
                  <p className="text-slate-600">
                    Não. Para quem busca precisão absoluta imune a oscilações de água, a <Link to="/o_que_e_antropometria" className="text-green-600 hover:text-green-700 underline underline-offset-2 font-bold transition-colors">antropometria (ISAK)</Link> é mais consistente e o método ideal para medir a gordura real abaixo da pele.
                  </p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-green-100">
                  <h4 className="font-black text-slate-800 mb-2 italic">Por que meu percentual muda tanto de um dia para o outro?</h4>
                  <p className="text-slate-600">Isso raramente é gordura real; são variações na água corporal causadas por sódio, hidratação ou rotina.</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* COMPONENTE INTELIGENTE ADICIONADO COM SUCESSO */}
        <ArtigosRecomendados currentPath={pathname} />

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-black italic shadow-lg text-2xl">M</div>
            <div className="text-left font-bold"><p className="text-slate-900 text-sm">Marco Aurélio Jr.</p><p className="text-xs text-slate-400 uppercase tracking-widest font-black">ISAK Level 1 • Nutrição com Ciência</p></div>
          </div>
          <a href="https://instagram.com/nutricao_com_marco" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs shadow-lg hover:bg-green-700 transition-all italic">@Nutricao_com_Marco</a>
        </div>
      </div>
    </section>
   </>
  );
}
