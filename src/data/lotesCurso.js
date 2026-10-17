// Lotes do Curso de Avaliação Antropométrica (espelham os lotes da Hotmart).
// Para virar de lote, troque apenas LOTE_ATIVO (0 = 1º, 1 = 2º, 2 = 3º).
// Páginas e dados estruturados (prerender.mjs) leem tudo daqui.
export const LOTES = [
  { nome: '1º lote', ordinal: 'primeiro', preco: 600, vagas: 3, link: 'https://pay.hotmart.com/T108024284B?off=z0uu725b' },
  { nome: '2º lote', ordinal: 'segundo', preco: 700, vagas: 6, link: 'https://pay.hotmart.com/T108024284B?off=1oieppo9' },
  { nome: '3º lote', ordinal: 'terceiro', preco: 800, vagas: 10, link: 'https://pay.hotmart.com/T108024284B?off=nunzhzdq' },
];

export const LOTE_ATIVO = 1;

export const LOTE = LOTES[LOTE_ATIVO];
export const PROXIMOS_LOTES = LOTES.slice(LOTE_ATIVO + 1);
export const ULTIMO_LOTE = PROXIMOS_LOTES.length === 0;

const reais = (v) => `R$ ${v},00`;

// Ex.: "O 3º lote custa R$ 800." / "O 2º lote custa R$ 700 e o 3º, R$ 800."
export const textoProximosLotes = () => {
  if (ULTIMO_LOTE) return 'Este é o último lote.';
  if (PROXIMOS_LOTES.length === 1) return `O ${PROXIMOS_LOTES[0].nome} custa R$ ${PROXIMOS_LOTES[0].preco}.`;
  return `O ${PROXIMOS_LOTES[0].nome} custa R$ ${PROXIMOS_LOTES[0].preco} e o ${PROXIMOS_LOTES[1].nome.replace(' lote', '')}, R$ ${PROXIMOS_LOTES[1].preco}.`;
};

export const respostaQuantoCusta = () => {
  const base = `O valor do ${LOTE.ordinal} lote é ${reais(LOTE.preco)}, e o ${LOTE.ordinal} lote tem ${LOTE.vagas} vagas disponíveis.`;
  const prox = PROXIMOS_LOTES.length
    ? ` ${PROXIMOS_LOTES.map((l) => `O ${l.ordinal} lote custa ${reais(l.preco)}`).join(' e o ').replace(/^(.*)$/, '$1')}.`.replace(' e o terceiro lote', ' e o terceiro')
    : ' Este é o último lote.';
  const fim = PROXIMOS_LOTES.length
    ? ' O preço sobe a cada lote, então garantir a vaga agora é pagar o menor valor.'
    : '';
  return `${base}${prox}${fim} O pagamento pode ser feito em Pix, boleto ou cartão em até 12x, com juros.`;
};
