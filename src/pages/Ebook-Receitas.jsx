import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock, 
  BookOpen, 
  ShoppingCart, 
  ChefHat, 
  Star, 
  ArrowRight, 
  Zap, 
  TrendingUp,
  ShieldCheck,
  Award
} from 'lucide-react';
import ImagemOtimizada from '../components/ImagemOtimizada';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";
const artigoCapa = `${githubImgBase}capa_receitas.webp`; 

export default function EbookReceitas() {
  const navigate = useNavigate();
  const location = useLocation();

  const checkoutLink = "https://pay.hotmart.com/R106813023M";
  const afiliadoLink = "https://affiliate.hotmart.com/affiliate-recruiting/view/7371R106813044";

  // Depoimentos Estratégicos (Prova Social)
  const depoimentos = [
    {
      id: 1,
      nome: "Ana Carolina, 34 anos",
      texto: "Trabalho o dia todo e chegava em casa exausta, acabava sempre pedindo delivery. Esse e-book salvou minha rotina! A técnica 3x3 e os pré-preparos me fazem cozinhar em 15 minutos. Recomendo demais!"
    },
    {
      id: 2,
      nome: "Ricardo M., 41 anos",
      texto: "Minha gaveta de legumes vivia cheia de coisas estragando, hoje eu uso 100% do que compro com as técnicas de congelamento. O bolso agradece e a saúde também. Por R$ 9,90, foi o melhor investimento do ano."
    },
    {
      id: 3,
      nome: "Mariana S., 28 anos",
      texto: "Sempre odiei fazer dieta porque a comida ficava sem graça. O alho em pasta e as bases de refogado do Marco deixam qualquer prato delicioso! Já perdi 4kg sem sentir que estou de dieta."
    },
    {
      id: 4,
      nome: "Fernanda L., 39 anos",
      texto: "Mudou a dinâmica aqui em casa. Agora faço as marmitas da semana no domingo e tenho lanches práticos (o pão de queijo fit é perfeito!) para as crianças. Simples e muito direto ao ponto."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 font-sans selection:bg-green-200 selection:text-green-900">
      <main className="max-w-4xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 p-6 md:p-12 text-slate-700">
        
        {/* HERO SECTION */}
        <header className="flex flex-col items-center text-center mb-16 mt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6 border border-green-100">
            <Star size={16} aria-hidden="true" />
            <span>Lançamento Exclusivo - Praticidade na Cozinha</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Ebook Receitas Saudáveis e Nutritivas: <span className="text-green-700">O Caminho da Praticidade</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Manter uma alimentação saudável não precisa ser sinônimo de complicação! Descubra que comer bem pode (e deve) ser algo prazeroso, prático e que se encaixa perfeitamente na sua rotina, mesmo nos dias mais corridos.
          </p>

          {/* CAPA DO EBOOK - CORRIGIDA PARA PROPORÇÃO DE LIVRO */}
          <div className="w-full max-w-xs md:max-w-sm mx-auto mb-12 relative group mt-4">
            {/* Sombra/Fundo com efeito 3D inclinado */}
            <div className="absolute inset-0 bg-green-700 rounded-3xl transform rotate-3 opacity-10 transition-transform group-hover:rotate-6 duration-500" aria-hidden="true"></div>
            
            {/* Container principal da Capa (Formato Retrato/A4) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-[1/1.41]">
              <ImagemOtimizada 
                src={artigoCapa}
                alt="Capa do Ebook Receitas Saudáveis e Nutritivas" 
                title="Capa do Ebook Receitas Saudáveis e Nutritivas"
                className="transition-transform duration-700 group-hover:scale-105"
                priority="high"
              />
            </div>
          </div>

          <a 
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar o Ebook Receitas Saudáveis e Nutritivas agora por R$ 9,90"
            className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-5 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-green-700/40 transition-transform hover:-translate-y-1 w-full md:w-auto"
          >
            <ShoppingCart size={28} aria-hidden="true" />
            Garantir Meu Ebook por R$ 9,90
          </a>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-600">
            <ShieldCheck size={16} className="text-green-700" aria-hidden="true" />
            <span>Pagamento 100% seguro via Hotmart. Acesso imediato.</span>
          </div>
        </header>

        <hr className="border-slate-100 mb-12" aria-hidden="true" />

        {/* SECTION: A DOR E A SOLUÇÃO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Por que o <strong className="text-green-700">Ebook Receitas Saudáveis e Nutritivas</strong> é diferente?
          </h2>
          <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
            <p>
              Você já sentiu que fazer dieta toma muito tempo? A maioria das pessoas desiste da reeducação alimentar porque a rotina atropela o planejamento. Chegar cansado do trabalho e ainda ter que descascar, picar e cozinhar alimentos do zero é a receita certa para acabar pedindo um aplicativo de delivery.
            </p>
            <p>
              Muito mais do que um simples livro de receitas, este material é um convite estruturado para você se reconectar com a comida de verdade e transformar a sua relação com a alimentação sem viver escravo do fogão. 
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 my-8 flex items-start gap-4">
              <BookOpen className="text-blue-700 shrink-0 mt-1" size={28} aria-hidden="true" />
              <p className="text-blue-800 text-base">
                <strong>O Segredo:</strong> O sucesso de uma dieta não está em fazer pratos complexos dignos de restaurante todos os dias, mas sim em aplicar inteligência no pré-preparo. É exatamente isso que você vai dominar com este material.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: O QUE TEM DENTRO (BENEFÍCIOS) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            O que você vai encontrar neste material:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <TrendingUp className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fundamentos e Planejamento</h3>
              <p className="text-slate-600">
                Aprenda a contabilizar suas refeições, porcionar corretamente e domine a exclusiva <strong>Técnica do 3x3</strong> para montar cardápios variados com uma única lista de compras.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <Clock className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mise en Place (Pré-preparos)</h3>
              <p className="text-slate-600">
                Segredos de cozinha para economizar horas no fogão, incluindo o passo a passo para fazer tabletes de cebola, caldo de legumes cru, base de talos, alho em pasta e salsinha em pó.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <Zap className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lanches e Snacks Funcionais</h3>
              <p className="text-slate-600">
                Opções rápidas como Pão de Queijo Fit, Guacamole, Chips de Batata-doce na Airfryer e Barrinhas Proteicas Caseiras para saciar a fome com saúde.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-green-100">
                <ChefHat className="text-green-700" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pratos & Sobremesas</h3>
              <p className="text-slate-600">
                Refeições como Escondidinho Fit de Frango com Abóbora e doces incríveis sem culpa, como Brigadeiro de Tâmara Proteica e Morango Fit do Amor.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: RESPONSIVE TABLE VS CARDS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            A Diferença do Nosso Método
          </h2>

          {/* Versão Desktop (Tabela) */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Característica</th>
                  <th className="p-4 font-bold text-slate-900 border-b border-slate-200">Dietas Tradicionais</th>
                  <th className="p-4 font-bold text-green-700 bg-green-50 border-b border-green-100">Ebook: O Caminho da Praticidade</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Tempo na Cozinha</td>
                  <td className="p-4">Horas perdidas todos os dias na beira do fogão.</td>
                  <td className="p-4 bg-green-50/50">Pré-preparos inteligentes feitos em um único dia.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Variedade de Pratos</td>
                  <td className="p-4">Cardápios monótonos (frango seco e batata doce).</td>
                  <td className="p-4 bg-green-50/50">Técnica do 3x3: Crie até 27 variações saborosas.</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Desperdício</td>
                  <td className="p-4">Vegetais estragam com frequência na gaveta da geladeira.</td>
                  <td className="p-4 bg-green-50/50">Tudo é porcionado e congelado: Zero desperdício.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">Sabor</td>
                  <td className="p-4">Sem graça, o que gera vontade de fugir da dieta.</td>
                  <td className="p-4 bg-green-50/50">Comida com afeto, bases ricas e temperos de verdade.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Versão Mobile (Cards) */}
          <div className="md:hidden flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-100 pb-2">Tempo na Cozinha</h3>
              <p className="mb-2"><span className="text-red-600 font-semibold">❌ Tradicional:</span> Horas perdidas todos os dias.</p>
              <p><span className="text-green-600 font-semibold">✅ Nosso Método:</span> Pré-preparos em um único dia.</p>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-100 pb-2">Variedade</h3>
              <p className="mb-2"><span className="text-red-600 font-semibold">❌ Tradicional:</span> Monótono e sem graça.</p>
              <p><span className="text-green-600 font-semibold">✅ Nosso Método:</span> Técnica 3x3 com dezenas de variações.</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 border-b border-slate-100 pb-2">Desperdício e Sabor</h3>
              <p className="mb-2"><span className="text-red-600 font-semibold">❌ Tradicional:</span> Comida estraga e falta sabor.</p>
              <p><span className="text-green-600 font-semibold">✅ Nosso Método:</span> Congelamento tático, temperos frescos e bases ricas.</p>
            </div>
          </div>
        </section>

        {/* SECTION: DEPOIMENTOS (PROVA SOCIAL) */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Quem aplicou, <span className="text-green-700">não vive mais sem!</span>
            </h2>
            <p className="text-lg text-slate-600">Veja o que estão falando sobre a praticidade do nosso método.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-6">
                    "{depoimento.texto}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold uppercase">
                    {depoimento.nome.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">{depoimento.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: AUTOR E MASCOTE */}
        <section className="bg-green-50 rounded-3xl p-8 md:p-10 mb-16 border border-green-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 shrink-0 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white overflow-hidden">
             <ChefHat className="text-green-700 w-24 h-24" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Criado por Marco Aurelio Neves Junior & Píngus
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Tudo neste material foi elaborado com ingredientes acessíveis e combinações inteligentes testadas na prática. Meu objetivo sempre foi democratizar o acesso à nutrição de qualidade, mostrando que o simples funciona quando aplicado com técnica.
            </p>
            <p className="text-slate-700 font-semibold">
              Adquira agora, junte-se a mim e ao Píngus (nosso amado mascote), e leve muito mais organização, saúde e sabor para a sua vida!
            </p>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Não Perca Mais Tempo (Nem Comida)
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Por apenas <strong>R$ 9,90</strong>, você adquire o passo a passo definitivo para parar de sofrer na cozinha. É mais barato que um lanche na padaria!
          </p>
          
          <a 
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar Ebook Receitas Saudáveis e Nutritivas por R$ 9,90"
            className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl shadow-green-700/40 transition-transform hover:-translate-y-2 w-full md:w-auto"
          >
            Quero Mais Praticidade na Cozinha <ArrowRight size={28} aria-hidden="true" />
          </a>
        </section>

        {/* AFFILIATE SECTION (PÚBLICO-ALVO VENDEDOR) */}
        <section className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-slate-300 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-green-400" size={32} aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Programa de Afiliados: Venda este Ebook!
            </h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            Seja muito bem-vindo(a) ao programa de afiliados do e-book <strong className="text-white">"Receitas Saudáveis e Nutritivas"</strong>! O nicho de alimentação saudável e praticidade é um dos que mais cresce no mercado digital. 
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={20} aria-hidden="true" />
              <span><strong className="text-white">Comissão Atrativa de 15%:</strong> Uma excelente margem para um produto de entrada, ideal para vendas rápidas e em volume.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={20} aria-hidden="true" />
              <span><strong className="text-white">Forte Apelo Visual:</strong> Material com design impecável e direto ao ponto, gerando autoridade imediata.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={20} aria-hidden="true" />
              <span><strong className="text-white">Dor Forte do Público:</strong> O produto resolve a falta de tempo e a dificuldade de variar o cardápio. É um e-book que "se vende sozinho".</span>
            </li>
          </ul>

          <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
            <p className="mb-4">Pronto para rentabilizar indicando saúde e organização?</p>
            <a 
              href={afiliadoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar painel de afiliação na Hotmart para revender o Ebook"
              className="inline-block underline text-green-400 font-bold hover:text-green-300 transition-colors text-lg"
            >
              Clique aqui e afilie-se agora na Hotmart
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}