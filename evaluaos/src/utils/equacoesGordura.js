// --- CONVERSÃO PADRÃO (Siri, 1961) ---
const converterDCparaSiri = (dc) => {
  if (!dc || dc <= 0) return 0;
  const pgc = (495 / dc) - 450;
  return Number(Math.max(1, pgc).toFixed(2));
};

// 1. Durnin & Womersley (1974) - Generalizada / Escócia (16-68 anos)
// Utiliza o logaritmo da soma de 4 dobras (Tríceps, Bicipital, Subescapular, Supra-ilíaca)[cite: 1]
export const calcularDurninWomersley1974 = (medidas) => {
  const tr = medidas.dobra_cutanea_triceps || 0;
  const bi = medidas.dobra_cutanea_biceps || 0;
  const sub = medidas.dobra_cutanea_subescapular || 0;
  const si = medidas.dobra_cutanea_supra_iliaca || 0;

  const soma4 = tr + bi + sub + si;
  if (soma4 <= 0) return 0;

  // Coeficiente geral para adultos (16-68 anos): D = 1.1567 - 0.0717 * log10(soma4)[cite: 1]
  const dc = 1.1567 - (0.0717 * Math.log10(soma4));
  return converterDCparaSiri(dc);
};

// 2. Jackson & Pollock (1978) - Homens (18-61 anos)
// Utiliza a soma quadrática de 3 dobras (Peitoral, Abdominal, Coxa) + Idade[cite: 1]
export const calcularJacksonPollock1978Masc = (medidas, idade) => {
  const pt = medidas.dobra_cutanea_peitoral || 0;
  const ab = medidas.dobra_cutanea_abdominal || 0;
  const cx = medidas.dobra_cutanea_coxa || 0;

  const soma3 = pt + ab + cx;
  if (soma3 <= 0) return 0;

  const dc = 1.109380 - (0.0008267 * soma3) + (0.0000016 * Math.pow(soma3, 2)) - (0.0002574 * idade);
  return converterDCparaSiri(dc);
};

// 3. Jackson, Pollock & Ward (1980) - Mulheres (18-55 anos)
// Utiliza a soma quadrática de 3 dobras (Tríceps, Supra-ilíaca, Coxa) + Idade[cite: 1]
export const calcularJacksonWard1980Fem = (medidas, idade) => {
  const tr = medidas.dobra_cutanea_triceps || 0;
  const si = medidas.dobra_cutanea_supra_iliaca || 0;
  const cx = medidas.dobra_cutanea_coxa || 0;

  const soma3 = tr + si + cx;
  if (soma3 <= 0) return 0;

  const dc = 1.0994921 - (0.0009929 * soma3) + (0.0000023 * Math.pow(soma3, 2)) - (0.0001392 * idade);
  return converterDCparaSiri(dc);
};

// 4. Thorland et al. (1984) - Jovens Atletas (Aprox. 16 anos)
// Utiliza a soma quadrática de 3 dobras (Tríceps, Subescapular, Supra-ilíaca para mulheres)[cite: 1, 4]
export const calcularThorland1984Fem = (medidas) => {
  const tr = medidas.dobra_cutanea_triceps || 0;
  const sub = medidas.dobra_cutanea_subescapular || 0;
  const si = medidas.dobra_cutanea_supra_iliaca || 0;

  const soma3 = tr + sub + si;
  if (soma3 <= 0) return 0;

  const dc = 1.0987 - (0.00122 * soma3) + (0.00000263 * Math.pow(soma3, 2));
  return converterDCparaSiri(dc);
};

// 5. Petroski (1995) - Sul do Brasil (18-61 anos) - Mulheres (Eq. F9)
// Utiliza 4 dobras (Subescapular, Tríceps, Supra-ilíaca, Panturrilha) + Peso, Estatura e Idade[cite: 1]
export const calcularPetroski1995Fem = (medidas, idade, pesoKg, estaturaCm) => {
  const sub = medidas.dobra_cutanea_subescapular || 0;
  const tr = medidas.dobra_cutanea_triceps || 0;
  const si = medidas.dobra_cutanea_supra_iliaca || 0;
  const pm = medidas.dobra_cutanea_panturrilha || 0;

  const soma4 = sub + tr + si + pm;
  if (soma4 <= 0) return 0;

  const dc = 1.02902361 - (0.00067159 * soma4) + (0.00000242 * Math.pow(soma4, 2)) - (0.00026073 * idade) - (0.00056009 * pesoKg) + (0.00054649 * estaturaCm);
  return converterDCparaSiri(dc);
};

// 6. Guedes (1985) - Universitárias Brasileiras (17-29 anos)
// Utiliza logaritmo de 3 dobras (Supra-ilíaca, Coxa, Subescapular)[cite: 1]
export const calcularGuedes1985Fem = (medidas) => {
  const si = medidas.dobra_cutanea_supra_iliaca || 0;
  const cx = medidas.dobra_cutanea_coxa || 0;
  const sub = medidas.dobra_cutanea_subescapular || 0;

  const soma3 = si + cx + sub;
  if (soma3 <= 0) return 0;

  const dc = 1.16650 - (0.07063 * Math.log10(soma3));
  return converterDCparaSiri(dc);
};

// 7. Slaughter et al. (1988) - Meninas (8 a 17 anos)
// Cálculo direto de percentual de gordura por dobras (Tríceps + Subescapular)[cite: 2]
export const calcularSlaughter1988Meninas = (medidas) => {
  const tr = medidas.dobra_cutanea_triceps || 0;
  const sub = medidas.dobra_cutanea_subescapular || 0;

  const soma2 = tr + sub;
  if (soma2 <= 0) return 0;

  const pgc = (1.33 * soma2) - 24.3;
  return Number(Math.max(1, pgc).toFixed(2));
};

// 8. Tran & Weltman (1989) / Weltman et al. (1988) - Perímetros
// Estimativa direta baseada em circunferências corporais (Cintura, Quadril, Coxa, etc.)
export const calcularPerimetrosWeltman = (medidas, sexo) => {
  const cintura = medidas.perimetro_cintura || 0;
  const quadril = medidas.perimetro_quadril || 0;
  const coxa = medidas.perimetro_coxa_media || 0;

  if (cintura <= 0) return 0;

  // Exemplo de estrutura preditiva direta por perímetros
  let pgc = 0;
  if (sexo === 'F') {
    pgc = -18.367 + (1.272 * cintura) - (0.697 * quadril) + (0.589 * coxa);
  } else {
    pgc = -29.5 + (1.15 * cintura) - (0.55 * quadril);
  }
  return Number(Math.max(1, pgc).toFixed(2));
};