// ============================================================
// EVALUAOS - Módulo de Equações Antropométricas (Apenas Mulheres)
// Baseado na extração de fórmulas do Excel (DIGITAÇÃO V52:AC96)
// ============================================================

// --- FUNÇÕES AUXILIARES DE CONVERSÃO ---

/**
 * Converte Densidade Corporal para %Gordura usando a fórmula de Siri (1961)
 * Utilizada na maioria dos protocolos extraídos.
 */
const converterDCparaSiri = (dc) => {
  if (!dc || dc <= 0) return 0;
  // Fórmula Excel: =((495/DC)-450)
  const pgc = (495 / dc) - 450;
  // Garante que o valor não seja negativo e limita a 2 casas decimais
  return Number(Math.max(0.1, pgc).toFixed(2));
};

/**
 * Converte Densidade Corporal para %Gordura usando a fórmula de Brozek et al. (1963)
 * Utilizada especificamente no protocolo Katch & McArdle (X84).
 */
const converterDCparaBrozek = (dc) => {
  if (!dc || dc <= 0) return 0;
  // Fórmula Excel: =((497,1/DC)-451,9)
  const pgc = (497.1 / dc) - 451.9;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

/**
 * Função auxiliar para garantir que valores zerados não quebrem o logaritmo.
 */
const safeLog10 = (valor) => {
  if (valor <= 0) return 0;
  return Math.log10(valor);
};

// --- MAPEAMENTO DE ENTRADAS (Tradução das variáveis do Excel) ---

/**
 * Prepara os dados brutos recebidos do formulário para o formato exigido pelas fórmulas.
 * Mapeia as células do dicionário (C52:I81) para as propriedades do objeto 'medidas'.
 */
const prepararDadosEntrada = (medidas) => {
  // Entradas Básicas (Coluna C)
  const idade = medidas.idade_anos || 0;                     // C56
  const peso = medidas.massa_kg || medidas.peso_kg || 0;       // C57
  const alturaCm = medidas.estatura_cm || medidas.altura_cm || 0; // C58

  // Dobras Cutâneas (Coluna F)
  const tr = medidas.dobra_cutanea_triceps || 0;             // F55
  const sub = medidas.dobra_cutanea_subescapular || 0;       // F56
  const bi = medidas.dobra_cutanea_biceps || 0;               // F57
  const si = medidas.dobra_cutanea_supra_iliaca || 0;         // F59 (Crista Ilíaca na planilha)
  const se = medidas.dobra_cutanea_supra_espinhal || 0;       // F60
  const ab = medidas.dobra_cutanea_abdominal || 0;           // F61
  const cx = medidas.dobra_cutanea_coxa_media || 0;         // F62
  const pa = medidas.dobra_cutanea_panturrilha || 0;         // F63

  // Perímetros (Coluna C - inferior)
  const perCintura = medidas.perimetro_cintura || 0;         // C68 e C75
  const perAbdome = medidas.perimetro_abdominal || 0;         // C76
  const perQuadril = medidas.perimetro_quadril || 0;         // C77

  // Soma de Dobras usadas nas fórmulas
  const somaDurnin = tr + sub + bi + si;                      // Refs das fórmulas V52:AC96
  const somaWithers4 = tr + sub + se + pa;
  const somaWithers6 = somaWithers4 + ab + cx;

  /**
 * Variáveis extras que descobrimos nas equações da coluna direita
 */
const prepararDadosExtras = (medidas) => {
  const idade = medidas.idade_anos || 0;
  const peso = medidas.massa_kg || medidas.peso_kg || 0;
  const alturaCm = medidas.estatura_cm || medidas.altura_cm || 0;
  
  // IMC (C61)
  const imc = (peso > 0 && alturaCm > 0) ? (peso / Math.pow(alturaCm / 100, 2)) : 0;
  const perCintura = medidas.perimetro_cintura || 0; // C75
  const diamUmero = medidas.diametro_umero || 0;     // F69
  
  // Dobras
  const tr = medidas.dobra_cutanea_triceps || 0;       // F55
  const sub = medidas.dobra_cutanea_subescapular || 0; // F56
  const bi = medidas.dobra_cutanea_biceps || 0;         // F57
  const si = medidas.dobra_cutanea_supra_iliaca || 0;   // F59
  const se = medidas.dobra_cutanea_supra_espinhal || 0; // F60
  const ab = medidas.dobra_cutanea_abdominal || 0;     // F61
  const cx = medidas.dobra_cutanea_coxa_media || 0;    // F62
  const pa = medidas.dobra_cutanea_panturrilha || 0;   // F63

  // Soma de 4 dobras padrão de Durnin
  const soma4Durnin = tr + sub + bi + si;

  return {
    idade, peso, alturaCm, imc, perCintura, diamUmero,
    tr, sub, bi, si, se, ab, cx, pa, soma4Durnin
  };
};

// ============================================================
// --- AS EQUAÇÕES DE REGRESSÃO - NÃO APAGAR (MULHERES) ---
// ============================================================

// 1. Durnin et al. (1974) - 4skf
// Refs Excel: X53 (DC) e X54 (%G)
export const calcularFemDurnin1974 = (medidasBrutas) => {
  const { somaDurnin } = prepararDadosEntrada(medidasBrutas);
  if (somaDurnin <= 0) return 0;
  // Excel: =1,1567-0,0717*LOG(F55+F56+F57+F59)
  const dc = 1.1567 - (0.0717 * safeLog10(somaDurnin));
  return converterDCparaSiri(dc);
};

// 2. Jackson et al. (1980) - 3skf
// Refs Excel: X56 (DC) e X57 (%G)
export const calcularFemJacksonPollock1980_3skf = (medidasBrutas) => {
  const { tr, si, cx, idade } = prepararDadosEntrada(medidasBrutas);
  const soma3 = tr + si + cx;
  if (soma3 <= 0) return 0;
  // Excel: =1,0994921-0,0009929*(F55+F59+F62)+0,0000023*(F55+F59+F62)^2-0,0001392*(C57)
  // AJUSTE CIENTÍFICO: Trocado C57 (Peso) por C56 (Idade) no fator final.
  const dc = 1.0994921 - (0.0009929 * soma3) + (0.0000023 * Math.pow(soma3, 2)) - (0.0001392 * idade);
  return converterDCparaSiri(dc);
};

// 3. Petroski (1995) - 4skf (Modelo Brasileiro F9)
// Refs Excel: X68 (DC) e X69 (%G)
export const calcularFemPetroski1995_4skf = (medidasBrutas) => {
  const { tr, sub, si, pa, idade, peso, alturaCm } = prepararDadosEntrada(medidasBrutas);
  const soma4 = tr + sub + si + pa;
  if (soma4 <= 0) return 0;
  // Excel: =1,02902361-0,00067159*(F56+F55+F59+F63)+0,00000242*(F56+F55+F59+F63)^2-0,00026073*(C56)-0,00056009*(C57)+0,00054649*(C58)
  const dc = 1.02902361 - (0.00067159 * soma4) + (0.00000242 * Math.pow(soma4, 2)) - (0.00026073 * idade) - (0.00056009 * peso) + (0.00054649 * alturaCm);
  return converterDCparaSiri(dc);
};

// 4. Guedes (1985) - 3skf (Modelo Brasileiro Universitárias)
// Refs Excel: X71 (DC) e X72 (%G)
export const calcularFemGuedes1985_3skf = (medidasBrutas) => {
  const { si, cx, sub } = prepararDadosEntrada(medidasBrutas);
  const soma3 = si + cx + sub;
  if (soma3 <= 0) return 0;
  // Excel: =1,1665-0,0706*LOG10(F62+F59+F56)
  const dc = 1.1665 - (0.0706 * safeLog10(soma3));
  return converterDCparaSiri(dc);
};

// 5. Withers et al. (1987) - 4skf (Padrão ISAK)
// Refs Excel: X92 (DC) e X93 (%G)
export const calcularFemWithers1987_4skf = (medidasBrutas) => {
  const { somaWithers4 } = prepararDadosEntrada(medidasBrutas);
  if (somaWithers4 <= 0) return 0;
  // Excel: =1,17484-0,07229*LOG10(F55+F56+F60+F63)
  const dc = 1.17484 - (0.07229 * safeLog10(somaWithers4));
  return converterDCparaSiri(dc);
};

// 6. Withers et al. (1987) - 6skf (Padrão ISAK)
// Refs Excel: X95 (DC) e X96 (%G)
export const calcularFemWithers1987_6skf = (medidasBrutas) => {
  const { somaWithers6 } = prepararDadosEntrada(medidasBrutas);
  if (somaWithers6 <= 0) return 0;
  // Excel: =1,20953-0,08294*LOG10(F55+F56+F60+F61+F62+F63)
  const dc = 1.20953 - (0.08294 * safeLog10(somaWithers6));
  return converterDCparaSiri(dc);
};

// 7. Slaughter et al. (1988) - 2skf (Crianças/Adolescentes)
// Refs Excel: X79 (%G Direto)
export const calcularFemSlaughter1988_2skf = (medidasBrutas) => {
  const { tr, pa } = prepararDadosEntrada(medidasBrutas);
  const soma2 = tr + pa;
  if (soma2 <= 0) return 0;
  // Excel: =0,61*(F55+F63)+5,1 (Cálculo direto de %G, sem DC prévia)
  const pgc = (0.61 * soma2) + 5.1;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 8. Yuhasz (1974) - 6skf (Modelo Clássico)
// Refs Excel: X81 (%G Direto)
export const calcularFemYuhasz1974_6skf = (medidasBrutas) => {
  const { tr, sub, si, ab, cx, pa } = prepararDadosEntrada(medidasBrutas);
  const soma6 = tr + sub + si + ab + cx + pa;
  if (soma6 <= 0) return 0;
  // Excel: =0,1548*(F64)+3,58 (Cálculo direto de %G)
  // Nota: F64 no dicionário é Soma 6, mas refere-se à soma das dobras acima.
  const pgc = (0.1548 * soma6) + 3.58;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 9. Katch & McArdle (1973) - 3skf (Usa Brozek)
// Refs Excel: X83 (DC) e X84 (%G Brozek)
export const calcularFemKatchMcArdle1973_3skf = (medidasBrutas) => {
  const { sub, si, coxaMédia } = prepararDadosEntrada(medidasBrutas);
  const soma3 = sub + si + coxaMédia;
  if (soma3 <= 0) return 0;
  // Excel: =1,09246-0,00049*(F56)-0,00075*(F59)+0,0071*(F69)-0,00121*(C79)
  // TODO: F69 e C79 não constam no dicionário gerado pela macro, verifique o Excel.
  // Deixando o cálculo comentado até confirmar as variáveis F69 (Úmero?) e C79 (Coxa?).
  // const dc = 1.09246 - (0.00049 * sub) - (0.00075 * si) + (0.0071 * F69) - (0.00121 * C79);
  // return converterDCparaBrozek(dc);
  return 0; // Temporário
};

// 10. Sloan et al. (1962) - 2skf
// Refs Excel: X86 (DC) e X87 (%G)
export const calcularFemSloan1962_2skf = (medidasBrutas) => {
  const { si, tr } = prepararDadosEntrada(medidasBrutas);
  const soma2 = si + tr;
  if (soma2 <= 0) return 0;
  // Excel: =1,0764-0,00081*(F59)-0,00088*(F55)
  const dc = 1.0764 - (0.00081 * si) - (0.00088 * tr);
  return converterDCparaSiri(dc);
};

// 11. Wilmore & Behnke (1970) - 3skf
// Refs Excel: X89 (DC) e X90 (%G)
export const calcularFemWilmoreBehnke1970_3skf = (medidasBrutas) => {
  const { sub, tr, cx } = prepararDadosEntrada(medidasBrutas);
  const soma3 = sub + tr + cx;
  if (soma3 <= 0) return 0;
  // Excel: =1,06234-0,00068*(F56)-0,00039*(F55)-0,00025*(F62)
  const dc = 1.06234 - (0.00068 * sub) - (0.00039 * tr) - (0.00025 * cx);
  return converterDCparaSiri(dc);
};

// 12. Thorland et al. (1984) - Generalizada Feminina
// Refs Excel: X65 (DC) e X66 (%G)
export const calcularFemThorlandGeneralizada1984 = (medidasBrutas) => {
  const { tr, sub, si } = prepararDadosEntrada(medidasBrutas);
  const soma3 = tr + sub + si;
  if (soma3 <= 0) return 0;
  // Excel: =1,0987-0,00122*(F55+F56+F59)+0,00000263*(F55+F56+F59)^2
  const dc = 1.0987 - (0.00122 * soma3) + (0.00000263 * Math.pow(soma3, 2));
  return converterDCparaSiri(dc);
};

// 13. Lewis et al. (1978) - Modelo por Dobras e Perímetros
// Refs Excel: X62 (DC) e X63 (%G)
export const calcularFemLewis1978 = (medidasBrutas) => {
  const { tr, alturaCm, sub, perToral } = prepararDadosEntrada(medidasBrutas);
  // TODO: F60 (Supra Espinhal) ou Perímetro Tórax (C74/F74?) em X62?
  // Excel usa Lewis mas a fórmula parece customizada. C71 é Braço Relax.
  // Fórmula Excel: =0,97845-0,0002*(F55)+0,00088*(C58)-0,00122*(F56)-0,00234*(C71)
  // dc = 0.97845 - (0.0002 * tr) + (0.00088 * alturaCm) - (0.00122 * sub) - (0.00234 * C71);
  // return converterDCparaSiri(dc);
  return 0; // Temporário
};

// 14. Jackson et al. (1980) - 4skf
// Refs Excel: X76 (DC) e X77 (%G)
export const calcularFemJackson Pollock1980_4skf = (medidasBrutas) => {
  const { tr, si, ab, cx, idade } = prepararDadosEntrada(medidasBrutas);
  const soma4 = tr + si + ab + cx;
  if (soma4 <= 0) return 0;
  // TODO: Descobrir o que é E5 (referenciado no fator final)
  const E5 = 0; // Temporário, costuma ser fator de gênero.
  // Excel: =1,096095-0,0006952*(F55+F59+F61+F62)+0,0000011*(F55+F59+F61+F62)^2-0,0000714*(E5)
  const dc = 1.096095 - (0.0006952 * soma4) + (0.0000011 * Math.pow(soma4, 2)) - (0.0000714 * E5);
  return converterDCparaSiri(dc);
};

// 15. Tran & Weltman (1989) - Modelo por Perímetros
// Refs Excel: X59 (DC) e X60 (%G)
export const calcularFemTranWeltman1989_Perimetros = (medidasBrutas) => {
  const { perCintura, perAbdome, perQuadril, alturaCm } = prepararDadosEntrada(medidasBrutas);
  const mediaAbdintura = (perCintura + perAbdome) / 2;
  // TODO: Descobrir o que é E5 (referenciado no fator final)
  const E5 = 0; // Temporário
  // Excel: =1,168297-0,002824*((C75+C76)/2)+0,0000122098*((C75+C76)/2)^2-0,000733128*(C77)+0,000510477*(C58)-0,000216161*(E5)
  const dc = 1.168297 - (0.002824 * mediaAbdintura) + (0.0000122098 * Math.pow(mediaAbdintura, 2)) - (0.000733128 * perQuadril) + (0.000510477 * alturaCm) - (0.000216161 * E5);
  // Nota: Fórmula de Tran & Weltman costuma usar conversão direta diferente de Siri. Excel usa Siri (495/DC-450).
  return converterDCparaSiri(dc);
};

// 16. Weltman et al. (1988) - Modelo Direto por Perímetros
// Refs Excel: X74 (%G Direto)
export const calcularFemWeltman1988_Perimetros = (medidasBrutas) => {
  const { perCintura, perAbdome, alturaCm, peso } = prepararDadosEntrada(medidasBrutas);
  const mediaAbdintura = (perCintura + perAbdome) / 2;
  // Excel: =0,11077*((C75+C76)/2)-0,17666*(C58)+0,14354*(C57)+51,03301
  const pgc = (0.11077 * mediaAbdintura) - (0.17666 * alturaCm) + (0.14354 * peso) + 51.03301;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// ============================================================
// PARTE 2: AS 19 EQUAÇÕES DA COLUNA DIREITA (AC) DO EXCEL
// ============================================================

// 17. Equação Baseada em Estatura e Cintura (AC53)
export const calcularFemEstaturaCintura = (medidasBrutas) => {
  const { alturaCm, perCintura } = prepararDadosExtras(medidasBrutas);
  if (perCintura <= 0) return 0;
  // Excel (AC53): =76-(20*(C58/C75))
  const pgc = 76 - (20 * (alturaCm / perCintura));
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 18. Deurenberg et al. (1991) por IMC (AC55)
export const calcularFemDeurenberg1991_IMC = (medidasBrutas) => {
  const { imc, idade } = prepararDadosExtras(medidasBrutas);
  if (imc <= 0) return 0;
  // Excel (AC55): =1,2*C61+(0,23*C56)-(10,8*0)-(5,4) (0 é o sexo feminino)
  const pgc = (1.2 * imc) + (0.23 * idade) - 5.4;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 19. Equação Log Natural de 7 Dobras (Y57 / AC57)
export const calcularFem7Dobras_LogNatural = (medidasBrutas) => {
  const { peso, tr, sub, bi, se, ab, cx, pa } = prepararDadosExtras(medidasBrutas);
  const soma7 = tr + sub + bi + se + ab + cx + pa;
  if (soma7 <= 0 || peso <= 0) return 0;
  // Excel Y57: =(0,16*C57)+(8,78*LN(F55+F56+F57+F60+F61+F62+F63)-(1,83*0)-32,77)
  // LN no JS é Math.log()
  const y57 = (0.16 * peso) + (8.78 * Math.log(soma7)) - 32.77;
  // Excel AC57: =(Y57/C57)*100
  const pgc = (y57 / peso) * 100;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 20. Equação Linear 3 Dobras (AC59)
export const calcularFemLinear_CoxaPanturrilhaCrista = (medidasBrutas) => {
  const { cx, pa, si } = prepararDadosExtras(medidasBrutas);
  // Excel (AC59): =6,15+0,39*(F62)+0,42*(F63)+0,23*(F59)
  const pgc = 6.15 + (0.39 * cx) + (0.42 * pa) + (0.23 * si);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 21. Equação Linear 3 Dobras A (AC61)
export const calcularFemLinear_TricAbdCoxa_A = (medidasBrutas) => {
  const { tr, ab, cx } = prepararDadosExtras(medidasBrutas);
  // Excel (AC61): =8,997+(0,24658*(F55+F61+F62))
  const pgc = 8.997 + (0.24658 * (tr + ab + cx));
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 22. Equação Linear 3 Dobras B (AC63 - Variação com constante)
export const calcularFemLinear_TricAbdCoxa_B = (medidasBrutas) => {
  const { tr, ab, cx } = prepararDadosExtras(medidasBrutas);
  // Excel (AC63): =8,997+(0,24658*(F55+F61+F62))-(1,998*1)
  const pgc = 8.997 + (0.24658 * (tr + ab + cx)) - 1.998;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// --- GRUPO DURNIN & WOMERSLEY (Variações de Idade) ---

// 23. Durnin 4skf Variação A (AC65 / AC66) -> Geralmente Mulheres 40-49 anos
export const calcularFemDurnin_VarA = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =1,1369-0,0598*LOG(F55+F56+F57+F59)
  const dc = 1.1369 - (0.0598 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 24. Durnin 4skf Variação B (AC68 / AC69) -> Geralmente Mulheres 30-39 anos
export const calcularFemDurnin_VarB = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =1,1549-0,0678*LOG(F55+F56+F57+F59)
  const dc = 1.1549 - (0.0678 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 25. Durnin 4skf Variação C (AC71 / AC72) -> Geralmente Mulheres 17-29 anos
export const calcularFemDurnin_VarC = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =1,1599-0,0717*LOG(F55+F56+F57+F59)
  const dc = 1.1599 - (0.0717 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 26. Durnin 4skf Variação D (AC74 / AC75) -> Geralmente Mulheres 20-29 anos (outra tabela)
export const calcularFemDurnin_VarD = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =1,1423-0,0632*LOG(F55+F56+F57+F59)
  const dc = 1.1423 - (0.0632 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 27. Durnin 4skf Variação E (AC77 / AC78) -> Geralmente Mulheres 50+ anos
export const calcularFemDurnin_VarE = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =1,1333-0,0612*LOG(F55+F56+F57+F59)
  const dc = 1.1333 - (0.0612 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 28. Durnin 4skf Variação F (AC80 / AC81) -> Outra variação 50+
export const calcularFemDurnin_VarF = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =1,1339-0,0645*LOG(F55+F56+F57+F59)
  const dc = 1.1339 - (0.0645 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// --- FÓRMULAS DIRETAS (LOG E LINEARES) ---

// 29. DC por Tríceps Logarítmica (AC83 / AC84)
export const calcularFemDC_TricepsLog = (medidasBrutas) => {
  const { tr } = prepararDadosExtras(medidasBrutas);
  if (tr <= 0) return 0;
  // Excel: =1,1278-0,0775*LOG(F55)
  const dc = 1.1278 - (0.0775 * safeLog10(tr));
  return converterDCparaSiri(dc);
};

// 30. DC Tríceps e Subescapular Logarítmica (AC86 / AC87)
export const calcularFemDC_TricSubLog = (medidasBrutas) => {
  const { tr, sub } = prepararDadosExtras(medidasBrutas);
  const soma2 = tr + sub;
  if (soma2 <= 0) return 0;
  // Excel: =1,1507-0,0785*LOG10(F55+F56)
  const dc = 1.1507 - (0.0785 * safeLog10(soma2));
  return converterDCparaSiri(dc);
};

// 31. DC Tríceps e Subescapular Linear (AC89 / AC90)
export const calcularFemDC_TricSubLinear = (medidasBrutas) => {
  const { tr, sub } = prepararDadosExtras(medidasBrutas);
  // Excel: =1,0897-0,00133*(F55+F56)
  const dc = 1.0897 - (0.00133 * (tr + sub));
  return converterDCparaSiri(dc);
};

// 32. %G Direto por Log de 4 Dobras Variação A (AC92)
export const calcularFemPercGord_Log4Dobras_A = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =29,85*LOG10(F57+F55+F56+F59)-25,87
  const pgc = 29.85 * safeLog10(soma4Durnin) - 25.87;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 33. %G Direto por Log de 4 Dobras Variação B (AC93)
export const calcularFemPercGord_Log4Dobras_B = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =23,94*LOG10(F57+F55+F56+F59)-18,89
  const pgc = 23.94 * safeLog10(soma4Durnin) - 18.89;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 34. %G Direto por Log de 4 Dobras Variação C (AC94)
export const calcularFemPercGord_Log4Dobras_C = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel: =39,02*LOG10(F57+F55+F56+F59)-43,49
  const pgc = 39.02 * safeLog10(soma4Durnin) - 43.49;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 35. %G Equação Complexa - Logaritmos Mistos (AC96)
export const calcularFemComplexa_Mista = (medidasBrutas) => {
  const { imc, perCintura, tr, sub, pa, diamUmero } = prepararDadosExtras(medidasBrutas);
  
  // Como F17 não apareceu no dicionário, utilizaremos 0 temporariamente (pode ser peso ideal ou outra medida de cima da planilha)
  const F17 = 0; 
  
  // Excel: =-7,299-(21,436*LOG10(F17))+(17,739*LOG10(C61))+(20,143*LOG10(C75))+(7,813*LOG10(F55))+(6,379*LOG10(F56))+(6,051*LOG10((F63))-(16,364*LOG10(F69)))
  const parte1 = -7.299 - (21.436 * safeLog10(F17));
  const parte2 = (17.739 * safeLog10(imc)) + (20.143 * safeLog10(perCintura));
  const parte3 = (7.813 * safeLog10(tr)) + (6.379 * safeLog10(sub)) + (6.051 * safeLog10(pa));
  const parte4 = - (16.364 * safeLog10(diamUmero));
  
  const pgc = parte1 + parte2 + parte3 + parte4;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// ============================================================
// --- AS EQUAÇÕES DE REGRESSÃO - NÃO APAGAR (HOMENS) ---
// ============================================================

// 1. Mitchell et al. (2020) - 7skd ISAK
// Ref Excel: X56 (%G) através de Y56
export const calcularMascMitchell2020_7skd = (medidasBrutas) => {
  const { tr, sub, bi, se, ab, cx, pa, peso } = prepararDadosExtras(medidasBrutas);
  const soma7 = tr + sub + bi + se + ab + cx + pa;
  if (soma7 <= 0 || peso <= 0) return 0;
  // Excel Y56: =(0,16*C57)+(8,78*LN(F55+F56+F57+F60+F61+F62+F63)-(1,83*1)-32,77)
  const y56 = (0.16 * peso) + (8.78 * Math.log(soma7)) - 1.83 - 32.77;
  // Excel X56: =(Y56/C57)*100
  const pgc = (y56 / peso) * 100;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 2. Woolcott & Bergman (2018) - RFM (Relative Fat Mass)
// Ref Excel: AC56 (%G Direto)
export const calcularMascWoolcottBergman2018 = (medidasBrutas) => {
  const { alturaCm, perCintura } = prepararDadosExtras(medidasBrutas);
  if (perCintura <= 0) return 0;
  // Excel AC56: =64-(20*(C58/C75))
  const pgc = 64 - (20 * (alturaCm / perCintura));
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 3. Guedes (1985) - 3skd 
// Refs Excel: X58 (DC) e X59 (%G Siri)
export const calcularMascGuedes1985_3skd = (medidasBrutas) => {
  const { tr, si, ab } = prepararDadosExtras(medidasBrutas);
  const soma3 = tr + si + ab;
  if (soma3 <= 0) return 0;
  // Excel X58: =1,1714-0,0671*LOG10(F55+F59+F61)
  const dc = 1.1714 - (0.0671 * safeLog10(soma3));
  return converterDCparaSiri(dc);
};

// 4. Deurenberg et al. (1991) - Por IMC
// Ref Excel: AC58 (%G Direto)
export const calcularMascDeurenberg1991_IMC = (medidasBrutas) => {
  const { imc, idade } = prepararDadosExtras(medidasBrutas);
  if (imc <= 0) return 0;
  // Excel AC58: =1,2*C61+(0,23*C56)-(10,8*1)-(5,4*1)
  const pgc = (1.2 * imc) + (0.23 * idade) - 10.8 - 5.4;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 5. Weltman et al. (1987) - Por Perímetros
// Ref Excel: AC60 (%G Direto)
export const calcularMascWeltman1987 = (medidasBrutas) => {
  const { perCintura, perAbdome, peso } = prepararDadosExtras(medidasBrutas);
  const mediaAbdintura = (perCintura + perAbdome) / 2;
  // Excel AC60: =0,31457*((C75+C76)/2)-0,10969*(C57)+10,8336
  const pgc = (0.31457 * mediaAbdintura) - (0.10969 * peso) + 10.8336;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 6. Petroski (1995) - 4skd
// Refs Excel: X61 (DC) e X62 (%G Siri)
export const calcularMascPetroski1995_4skd = (medidasBrutas) => {
  const { sub, tr, si, pa, idade } = prepararDadosExtras(medidasBrutas);
  const soma4 = sub + tr + si + pa;
  if (soma4 <= 0) return 0;
  // Excel X61: =1,10756863-0,00081201*(F56+F55+F59+F63)+0,00000212*(F56+F55+F59+F63)^2-0,00041761*(C56)
  const dc = 1.10756863 - (0.00081201 * soma4) + (0.00000212 * Math.pow(soma4, 2)) - (0.00041761 * idade);
  return converterDCparaSiri(dc);
};

// 7. Stewart & Hannan - 2skd (Usa peso, abdome e coxa)
// Ref Excel: X64 (%G) através de Y64
export const calcularMascStewartHannan_2skd = (medidasBrutas) => {
  const { ab, cx, peso } = prepararDadosExtras(medidasBrutas);
  if (peso <= 0) return 0;
  // Excel Y64: =((331,5*F61)+(356,2*F62)+(111,9*C57)-9108)/1000
  const y64 = ((331.5 * ab) + (356.2 * cx) + (111.9 * peso) - 9108) / 1000;
  // Excel X64: =(Y64/C57)*100
  const pgc = (y64 / peso) * 100;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 8. Faulkner (1968) - 4skd
// Ref Excel: X66 (%G Direto)
export const calcularMascFaulkner1968_4skd = (medidasBrutas) => {
  const { tr, sub, si, ab } = prepararDadosExtras(medidasBrutas);
  const soma4 = tr + sub + si + ab;
  if (soma4 <= 0) return 0;
  // Excel X66: =5,783+0,153*(F55+F56+F59+F61)
  const pgc = 5.783 + (0.153 * soma4);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 9. Reilly et al. (2009) - 4skd ISAK
// Ref Excel: X68 (%G Direto)
export const calcularMascReilly2009_4skd = (medidasBrutas) => {
  const { cx, ab, tr, pa } = prepararDadosExtras(medidasBrutas);
  // Excel X68: =5,174+0,124*(F62)+0,147*(F61)+0,196*(F55)+0,13*(F63)
  const pgc = 5.174 + (0.124 * cx) + (0.147 * ab) + (0.196 * tr) + (0.13 * pa);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 10. Evans et al. (2005) - 3skd (Brancos)
// Ref Excel: X70 (%G Direto)
export const calcularMascEvans2005_3skd_White = (medidasBrutas) => {
  const { tr, ab, cx } = prepararDadosExtras(medidasBrutas);
  // Excel X70: =8,997+(0,24658*(F55+F61+F62))-(6,343*1)-(1,998*0)
  const pgc = 8.997 + (0.24658 * (tr + ab + cx)) - 6.343;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 11. Evans et al. (2005) - 3skd (Negros)
// Ref Excel: X72 (%G Direto)
export const calcularMascEvans2005_3skd_Black = (medidasBrutas) => {
  const { tr, ab, cx } = prepararDadosExtras(medidasBrutas);
  // Excel X72: =8,997+(0,24658*(F55+F61+F62))-(6,343*1)-(1,998*1)
  const pgc = 8.997 + (0.24658 * (tr + ab + cx)) - 6.343 - 1.998;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 12. Katch & McArdle (1973) - 3skd
// Refs Excel: X74 (DC) e X75 (%G Brozek)
export const calcularMascKatchMcArdle1973_3skd = (medidasBrutas) => {
  const { tr, sub, ab } = prepararDadosExtras(medidasBrutas);
  // Excel X74: =1,09665-(0,00103*F55)-(0,00056*F56)-(0,00054*F61)
  const dc = 1.09665 - (0.00103 * tr) - (0.00056 * sub) - (0.00054 * ab);
  return converterDCparaBrozek(dc);
};

// 13. Withers et al. (1987) - 7skd
// Refs Excel: X77 (DC) e X78 (%G Siri)
export const calcularMascWithers1987_7skd = (medidasBrutas) => {
  const { tr, bi, sub, se, ab, cx, pa } = prepararDadosExtras(medidasBrutas);
  const soma7 = tr + bi + sub + se + ab + cx + pa;
  if (soma7 <= 0) return 0;
  // Excel X77: =1,0988-0,0004*(F55+F57+F56+F60+F61+F62+F63)
  const dc = 1.0988 - (0.0004 * soma7);
  return converterDCparaSiri(dc);
};

// 14. Slaughter et al. (1988) - 2skd
// Ref Excel: X80 (%G Direto)
export const calcularMascSlaughter1988_2skd = (medidasBrutas) => {
  const { tr, pa } = prepararDadosExtras(medidasBrutas);
  const soma2 = tr + pa;
  if (soma2 <= 0) return 0;
  // Excel X80: =0,735*(F55+F63)+1
  const pgc = (0.735 * soma2) + 1;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 15. Yuhasz (1974) - 6skd
// Ref Excel: X82 (%G Direto)
export const calcularMascYuhasz1974_6skd = (medidasBrutas) => {
  const { tr, sub, si, ab, cx, pa } = prepararDadosExtras(medidasBrutas);
  const soma6 = tr + sub + si + ab + cx + pa; // F64 (Soma 6)
  if (soma6 <= 0) return 0;
  // Excel X82: =0,1051*(F64)+2,585
  const pgc = (0.1051 * soma6) + 2.585;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 16. Wilmore & Behnke (1969) - 2skd
// Refs Excel: X84 (DC) e X85 (%G Siri)
export const calcularMascWilmoreBehnke1969_2skd = (medidasBrutas) => {
  const { ab, cx } = prepararDadosExtras(medidasBrutas);
  // Excel X84: =1,08543-0,000889*(F61)-0,0004*(F62)
  const dc = 1.08543 - (0.000889 * ab) - (0.0004 * cx);
  return converterDCparaSiri(dc);
};

// 17. Boileau et al. (1985) - 2skd
// Ref Excel: X87 (%G Direto)
export const calcularMascBoileau1985_2skd = (medidasBrutas) => {
  const { tr, sub } = prepararDadosExtras(medidasBrutas);
  const soma2 = tr + sub;
  if (soma2 <= 0) return 0;
  // Excel X87: =1,35*(F55+F56)-0,012*(F55+F56)^2-4,4
  const pgc = (1.35 * soma2) - (0.012 * Math.pow(soma2, 2)) - 4.4;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 18. Deurenberg et al. (1990) - 4skd (3 Variações Logarítmicas)
// Refs Excel: X89, X91, X93
export const calcularMascDeurenberg1990_4skd_Var1 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel X89: =26,56*LOG10(F55+F56+F57+F59)-22,23
  const pgc = 26.56 * safeLog10(soma4Durnin) - 22.23;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

export const calcularMascDeurenberg1990_4skd_Var2 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel X91: =18,7*LOG10(F55+F56+F57+F59)-11,91
  const pgc = 18.7 * safeLog10(soma4Durnin) - 11.91;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

export const calcularMascDeurenberg1990_4skd_Var3 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel X93: =18,88*LOG10(F55+F56+F57+F59)-15,58
  const pgc = 18.88 * safeLog10(soma4Durnin) - 15.58;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 19. Eston et al. (2005) - 2skd ISAK
// Ref Excel: X95 (%G Direto)
export const calcularMascEston2005_2skd = (medidasBrutas) => {
  const { cx, pa } = prepararDadosExtras(medidasBrutas);
  // Excel X95: =4,05+0,52*(F62)+0,32*(F63)
  const pgc = 4.05 + (0.52 * cx) + (0.32 * pa);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 20. Eston et al. (2005) - 6skd ISAK
// Ref Excel: X96 (%G Direto)
export const calcularMascEston2005_6skd = (medidasBrutas) => {
  const { tr, sub, bi, si, cx, pa } = prepararDadosExtras(medidasBrutas);
  // Excel X96: =1,61+0,12*(F55+F56+F57+F59)+0,36*(F62+F63)
  const pgc = 1.61 + (0.12 * (tr + sub + bi + si)) + (0.36 * (cx + pa));
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// --- EQUAÇÕES DA COLUNA DIREITA (AC) PARA HOMENS ---

// 21. Durnin & Womersley 1974 - Várias Idades
export const calcularMascDurnin1974_Var1 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC62: =1,1765-0,0744*LOG(F55+F56+F57+F59)
  const dc = 1.1765 - (0.0744 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var2 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC68: =1,162-0,063*LOG(F55+F56+F57+F59)
  const dc = 1.162 - (0.063 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var3 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC71: =1,1631-0,0632*LOG(F55+F56+F57+F59)
  const dc = 1.1631 - (0.0632 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var4 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC74: =1,1422-0,0544*LOG(F55+F56+F57+F59)
  const dc = 1.1422 - (0.0544 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var5 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC77: =1,162-0,07*LOG(F55+F56+F57+F59)
  const dc = 1.162 - (0.07 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var6 = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC80: =1,1715-0,0779*LOG(F55+F56+F57+F59)
  const dc = 1.1715 - (0.0779 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 22. Durnin & Womersley 1974 - 1skd (Só Tríceps)
export const calcularMascDurnin1974_1skd = (medidasBrutas) => {
  const { tr } = prepararDadosExtras(medidasBrutas);
  if (tr <= 0) return 0;
  // Excel AC94: =1,1143-0,0618*LOG10(F55)
  const dc = 1.1143 - (0.0618 * safeLog10(tr));
  return converterDCparaSiri(dc);
};

// 23. Durnin & Rahaman 1967 - 4skd
export const calcularMascDurninRahaman1967_4skd = (medidasBrutas) => {
  const { soma4Durnin } = prepararDadosExtras(medidasBrutas);
  if (soma4Durnin <= 0) return 0;
  // Excel AC65: =1,1533-0,0643*LOG(F55+F56+F57+F59)
  const dc = 1.1533 - (0.0643 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 24. Forsyth & Sinning 1973 - 2skd (Usa Brozek)
export const calcularMascForsythSinning1973_2skd = (medidasBrutas) => {
  const { sub, ab } = prepararDadosExtras(medidasBrutas);
  // Excel AC85: =1,103-0,00168*(F56)-0,00127*(F61)
  const dc = 1.103 - (0.00168 * sub) - (0.00127 * ab);
  return converterDCparaBrozek(dc);
};

// 25. Nagamine & Suzuki 1964 - 2skd
export const calcularMascNagamineSuzuki1964_2skd = (medidasBrutas) => {
  const { tr, sub } = prepararDadosExtras(medidasBrutas);
  // Excel AC88: =1,0913-0,00116*(F55+F56)
  const dc = 1.0913 - (0.00116 * (tr + sub));
  return converterDCparaSiri(dc);
};

// 26. Sloan 1967 - 2skd (Usa Brozek)
export const calcularMascSloan1967_2skd = (medidasBrutas) => {
  const { cx, sub } = prepararDadosExtras(medidasBrutas);
  // Excel AC91: =1,1043-0,001327*(F62)-0,00131*(F56)
  const dc = 1.1043 - (0.001327 * cx) - (0.00131 * sub);
  return converterDCparaBrozek(dc);
};

// 27. Hortobagyi et al. 1992
// Obs: Ref AC83 usa fórmula linear de massa para encontrar algo. No Excel não tinha o %G associado.
export const calcularMascHortobagyi1992 = (medidasBrutas) => {
  const { peso, alturaCm } = prepararDadosExtras(medidasBrutas);
  // Excel AC83: =55,2+0,481*(C57)-0,468*(C58)
  const calc = 55.2 + (0.481 * peso) - (0.468 * alturaCm);
  return Number(Math.max(0.1, calc).toFixed(2));
};

// 28. Ortiz-Hernández et al. 2016 - %G Complexo
export const calcularMascOrtizHernandez2016 = (medidasBrutas) => {
  const { alturaCm, peso, imc, tr, sub, si, pa } = prepararDadosExtras(medidasBrutas);
  
  // C71 = Braço relaxado (Assumindo que seja o perímetro C71 no Excel, mas o dicionário diz C71=Braço relax e I71=Massa Sugerida)
  const perBracoRelax = medidasBrutas.perimetro_braco_relaxado || 0;
  const perCintura = medidasBrutas.perimetro_cintura || 0;
  
  if (peso <= 0) return 0;
  
  // Excel AC97: =-8,739-(0,384*(C58))+(35,371*(LOG10(C57))-(0,892*(C61))-(0,299*(C71))+(0,258*(C75))+(17,732*LOG10(F55))+(6,698*LOG10(F56))+(3,545*LOG10(F59))+(4,019*LOG10((F63))))
  const parte1 = -8.739 - (0.384 * alturaCm) + (35.371 * safeLog10(peso));
  const parte2 = - (0.892 * imc) - (0.299 * perBracoRelax) + (0.258 * perCintura);
  const parte3 = (17.732 * safeLog10(tr)) + (6.698 * safeLog10(sub)) + (3.545 * safeLog10(si)) + (4.019 * safeLog10(pa));
  
  const pgc = parte1 + parte2 + parte3;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// Nota sobre a célula X97: (Musc., De Rose 1984)
// Excel X97: =C57-(I57+AA100+AA101) 
// Essa fórmula não calcula %G, mas sim Massa Muscular, subtraindo do peso total (C57) a Massa de Gordura (I57) e possivelmente Massa Óssea e Residual (AA100 e AA101, que não estão no dicionário).