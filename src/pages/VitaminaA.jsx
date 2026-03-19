import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function VitaminaA() {
  // Garante que a página abra sempre no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Botão de Voltar */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm mb-12 hover:text-green-700 transition-colors">
          <ChevronLeft size={20} />
          Voltar para o Blog
        </Link>

        {/* Cabeçalho do Artigo */}
        <header className="mb-12">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">Metabolismo</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-tight mb-6">
            Vitamina A para que serve? Entenda as diferenças entre retinol, retinal e ácido retinóico
          </h1>
          <div className="w-20 h-2 bg-green-600 rounded-full"></div>
        </header>

        {/* Corpo do Texto */}
        <div className="text-lg text-slate-700 font-medium leading-relaxed">
          <p className="mb-6">
            A vitamina A é um nutriente essencial para o funcionamento adequado do organismo, mas a sua atuação vai muito além da visão. Ela participa ativamente da imunidade, da saúde da pele, do crescimento celular e da regulação genética. Para entender melhor suas funções, é fundamental conhecer as três principais formas ativas desta vitamina no corpo humano: o retinol, o retinal e o ácido retinóico. Apesar de estarem intimamente relacionadas, cada uma possui características químicas e funções muito específicas no nosso metabolismo.
          </p>
          
          <p className="mb-6">
            A vitamina A é lipossolúvel, o que significa que ela é absorvida junto com as gorduras da dieta e pode ser armazenada no organismo, tendo o fígado como seu principal reservatório. Ela pode ser obtida basicamente de duas formas na nossa alimentação. A primeira é a vitamina A pré-formada, conhecida como retinol, que é encontrada em alimentos de origem animal. A segunda forma é a pró-vitamina A, composta pelos carotenoides presentes em vegetais coloridos, como cenoura, abóbora e manga. Ao ser ingerida, independentemente da fonte, a vitamina A passa por diversas conversões no organismo até chegar às suas formas ativas.
          </p>

          <p className="mb-6">
            O retinol é a forma mais comum e armazenável da vitamina A, sendo frequentemente chamado de vitamina A1. Ele atua como a principal forma de transporte e reserva do nutriente, podendo ser convertido em retinal conforme a necessidade do corpo para participar da saúde da pele, da imunidade e da visão. É importante destacar que, no organismo, o retinol não circula sozinho, precisando se ligar a proteínas específicas para ser transportado com segurança pela corrente sanguínea.
          </p>

          <p className="mb-6">
            Por outro lado, o retinal, também conhecido como retinaldeído, é a forma biologicamente ativa focada exclusivamente na visão. Ele é derivado da oxidação do retinol e atua diretamente na retina, sendo absolutamente essencial para a nossa capacidade de enxergar em ambientes com pouca luz. Uma característica fascinante do retinal é que ele pode ser convertido de volta em retinol, formando um processo reversível que permite ao corpo manter o equilíbrio perfeito conforme a demanda fisiológica do momento.
          </p>

          <p className="mb-6">
            Já o ácido retinóico representa a forma mais oxidada da vitamina A e assume uma função completamente diferente das anteriores. Ele atua diretamente na expressão gênica, regulando o crescimento e a diferenciação celular, sendo fundamental para a renovação da pele e para a modulação avançada do sistema imunológico. Diferente do retinal, o ácido retinóico não participa da visão e não pode ser convertido de volta em retinal ou retinol. Essa irreversibilidade metabólica torna o ácido retinóico uma espécie de forma final e definitiva da vitamina A no nosso metabolismo.
          </p>

          <p className="mb-6">
            Quando analisamos o caminho da vitamina A como um todo, percebemos uma cascata de eventos muito bem orquestrada. Ao ingerirmos a vitamina através de alimentos ou suplementos na forma de ésteres de retinil ou carotenoides, ela passa pela digestão e absorção intestinal, sendo imediatamente convertida em retinol. Em seguida, ocorre o transporte via lipoproteínas, como os quilomícrons, até o seu armazenamento seguro no fígado. A partir daí, ocorre a conversão em retinal ou ácido retinóico estritamente conforme a necessidade das células, lembrando sempre que retinol e retinal são vias de mão dupla, mas o ácido retinóico segue um caminho sem volta.
          </p>

          <p className="mb-6">
            De forma prática, a vitamina A é absolutamente essencial para a visão noturna através do retinal, para a regulação dos nossos genes via ácido retinóico, e para a manutenção de um sistema imunológico robusto. Ela também garante a integridade da pele e das mucosas, além de comandar o crescimento celular adequado. Cada uma dessas funções depende da forma ativa envolvida, justificando a importância de compreender essa bioquímica na prática clínica.
          </p>

          <p className="mb-6">
            A vitamina A definitivamente não é uma molécula solitária com uma única função, mas sim um sistema integrado de compostos onde o retinol armazena, o retinal enxerga e o ácido retinóico regula. Essa dinâmica fascinante mostra como a nutrição vai muito além do simples ato de comer, envolvendo a forma magistral como o corpo transforma e utiliza cada miligrama ingerido. Compreender esse metabolismo é um diferencial enorme para quem busca resultados reais, duradouros e baseados em ciência.
          </p>
        </div>

      </div>
    </article>
  );
}
