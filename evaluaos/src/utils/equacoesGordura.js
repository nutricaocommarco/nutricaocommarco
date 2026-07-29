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