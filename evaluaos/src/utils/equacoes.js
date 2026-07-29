// ============================================================
// EVALUAOS - Módulo de Equações Antropométricas (Alinhado ao BD)
// Baseado na extração de fórmulas do Excel (DIGITAÇÃO V52:AC96)
// ============================================================

// --- FUNÇÕES AUXILIARES DE CONVERSÃO ---

const converterDCparaSiri = (dc) => {
  if (!dc || dc <= 0) return 0;
  const pgc = (495 / dc) - 450;
  return Number(Math.max(0.1, pgc).toFixed(2)); // Volta a retornar só o número
};

const converterDCparaBrozek = (dc) => {
  if (!dc || dc <= 0) return 0;
  const pgc = (497.1 / dc) - 451.9;
  return Number(Math.max(0.1, pgc).toFixed(2)); // Volta a retornar só o número
};

const safeLog10 = (valor) => {
  if (valor <= 0) return 0;
  return Math.log10(valor);
};

// --- MAPEAMENTO DE ENTRADAS ---
const prepararDados = (medidas = {}, paciente = {}) => {
  let idade = 0;

  // 1. Tenta pegar a idade enviada nas medidas (ex: idade_anos)
  if (medidas.idade_anos && Number(medidas.idade_anos) > 0) {
    idade = Number(medidas.idade_anos);
  } 
  // 2. Se não tiver, calcula pela data de nascimento (data_nascimento) e data da avaliação
  else {
    const dataNascStr = paciente.data_nascimento || paciente.data_nasc;
    
    if (dataNascStr) {
      // Converte data tratando fuso horário sem recuar 1 dia
      const parseData = (dStr) => {
        if (!dStr) return new Date();
        const str = String(dStr).split('T')[0];
        const parts = str.split('-');
        if (parts.length === 3) {
          return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        }
        return new Date(dStr);
      };

      const nasc = parseData(dataNascStr);
      const dataRef = parseData(medidas.data_avaliacao);

      idade = dataRef.getFullYear() - nasc.getFullYear();
      const m = dataRef.getMonth() - nasc.getMonth();
      if (m < 0 || (m === 0 && dataRef.getDate() < nasc.getDate())) {
        idade--;
      }
    }
  }

  // Trava/Aviso no console se continuar zerada
  if (idade <= 0) {
    console.warn("ATENÇÃO: A idade do paciente não pôde ser calculada (verifique se data_nascimento existe)!");
  }

  const peso = medidas.peso_paciente || medidas.massa_kg || medidas.peso_kg || 0;
  const alturaCm = medidas.altura_paciente || medidas.estatura_cm || medidas.altura_cm || 0;
  const imc = (peso > 0 && alturaCm > 0) ? (peso / Math.pow(alturaCm / 100, 2)) : 0;
  const estaturaSentado = Number(m.altura_sentado_paciente || m.estatura_sentado || 0);

  const tr = medidas.dobra_cutanea_triceps || 0;             
  const sub = medidas.dobra_cutanea_subescapular || 0;       
  const bi = medidas.dobra_cutanea_biceps || 0;               
  const si = medidas.dobra_cutanea_crista_iliaca || medidas.dobra_cutanea_supra_iliaca || 0; 
  const se = medidas.dobra_cutanea_supraespinhal || medidas.dobra_cutanea_supra_espinhal || 0;       
  const ab = medidas.dobra_cutanea_abdominal || 0;           
  const cx = medidas.dobra_cutanea_coxa_media || 0;         
  const pa = medidas.dobra_cutanea_panturrilha || 0;         

  const perCintura = medidas.perimetro_cintura || 0;         
  const perAbdome = medidas.perimetro_abdominal || 0;         
  const perQuadril = medidas.perimetro_quadril || 0; 
  const perBracoRelax = medidas.perimetro_braco_relaxado || 0;        
  const diamUmero = medidas.diametro_umero || 0;

  const somaDurnin = tr + sub + bi + si;                      
  const somaWithers4 = tr + sub + se + pa;
  const somaWithers6 = somaWithers4 + ab + cx;

  return {
    idade, peso, alturaCm, imc, estaturaSentado,
    tr, sub, bi, si, se, ab, cx, pa,
    perCintura, perAbdome, perQuadril, perBracoRelax,
    diamUmero, somaDurnin, somaWithers4, somaWithers6
  };
};

// ============================================================
// --- AS EQUAÇÕES DE REGRESSÃO - NÃO APAGAR (MULHERES) ---
// ============================================================

// ============================================================
// 1. Durnin et al. (1974) - 4skf Feminina
// População: Generalizada (Escócia) | Idade: 16 a 68 anos | Ref: PH
// Refs Excel: X53 (DC) e X54 (%G Siri)
// Fórmula Excel: =1,1567-0,0717*LOG(F55+F56+F57+F59)
// ============================================================
export const calcularFemDurnin1974 = (m, p) => {
  // Metadados da Equação
  const info = {
    autor: 'Durnin & Womersley',
    ano: 1974,
    protocolo: '4 Dobras Cutâneas',
    populacao: 'Generalizada (Escócia)',
    faixaEtaria: '16 a 68 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { somaDurnin } = prepararDados(m, p);
  // Trava de segurança
  if (somaDurnin <= 0) return { valor: 0, info };
  // Cálculo da Densidade Corporal (DC)
  const dc = 1.1567 - (0.0717 * safeLog10(somaDurnin));
// Retorna o pacote completo aqui!
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 2. Jackson et al. (1980) - 3skf Feminina
// População: Adultas (EUA) | Idade: 18 a 55 anos | Ref: PH
// Refs Excel: X56 (DC) e X57 (%G Siri)
// Fórmula Excel: =1,0994921-0,0009929*(F55+F59+F62)+0,0000023*(F55+F59+F62)^2-0,0001392*(C57)
// ============================================================
export const calcularFemJacksonPollock1980_3skf = (m, p) => {
  const info = {
    autor: 'Jackson, Pollock & Ward',
    ano: 1980,
    protocolo: '3 Dobras (Tríceps, Supra-ilíaca, Coxa)',
    populacao: 'Adultas, generalizada (EUA)',
    faixaEtaria: '18 a 55 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, si, cx, peso } = prepararDados(m, p);
  const soma3 = tr + si + cx;
  if (soma3 <= 0 || peso <= 0) return { valor: 0, info };
  // C57 na planilha representa o Peso
  const dc = 1.0994921 - 0.0009929 * (soma3) + 0.0000023 * (Math.pow(soma3, 2)) - 0.0001392 * (peso);
// Retorna o pacote completo aqui!
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 3. Petroski (1995) - 4skf (Modelo Brasileiro F9)
// População: Generalizada (Sul/Brasil) | Idade: 18 a 61 anos | Ref: PH
// Refs Excel: X68 (DC) e X69 (%G Siri)
// Fórmula Excel: =1,02902361-0,00067159*(F56+F55+F59+F63)+0,00000242*(F56+F55+F59+F63)^2-0,00026073*(C56)-0,00056009*(C57)+0,00054649*(C58)
// ============================================================
export const calcularFemPetroski1995_4skf = (m, p) => {
  const info = {
    autor: 'Petroski',
    ano: 1995,
    protocolo: '4 Dobras (Subescapular, Tríceps, Supra-ilíaca, Panturrilha)',
    populacao: 'Generalizada (Sul/Brasil)',
    faixaEtaria: '18 a 61 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, sub, si, pa, idade, peso, alturaCm } = prepararDados(m, p);
  const soma4 = sub + tr + si + pa;
  if (soma4 <= 0 || peso <= 0 || alturaCm <= 0) return { valor: 0, info };
  const dc = 1.02902361 - 0.00067159 * (soma4) + 0.00000242 * (Math.pow(soma4, 2)) - 0.00026073 * (idade) - 0.00056009 * (peso) + 0.00054649 * (alturaCm);
// Retorna o pacote completo aqui!
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 4. Guedes (1985) - 3skf (Modelo Brasileiro Universitárias)
// População: Universitárias (Brasil) | Idade: 17 a 29 anos | Ref: PH
// Refs Excel: X71 (DC) e X72 (%G Brozek Adaptado)
// Fórmula Excel: =1,1665-0,0706*LOG10(F62+F59+F56) | %G: =((5,01/X71)-4,57)*100
// ============================================================
export const calcularFemGuedes1985_3skf = (m, p) => {
  const info = {
    autor: 'Guedes',
    ano: 1985,
    protocolo: '3 Dobras (Coxa, Supra-ilíaca, Subescapular)',
    populacao: 'Universitárias (Brasil)',
    faixaEtaria: '17 a 29 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { cx, si, sub } = prepararDados(m, p);
  const soma3 = cx + si + sub;
  if (soma3 <= 0) return { valor: 0, info };
  const dc = 1.1665 - (0.0706 * safeLog10(soma3));
  // Conversão específica do protocolo de Guedes: ((5.01 / DC) - 4.57) * 100
  const pgc = ((5.01 / dc) - 4.57) * 100;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 5. Withers et al. (1987) - 4skf (Padrão ISAK)
// População: Atletas Australianas | Idade: 11 a 41 anos | Ref: PH
// Refs Excel: X92 (DC) e X93 (%G Siri)
// Fórmula Excel: =1,17484-0,07229*LOG10(F55+F56+F60+F63)
// ============================================================
export const calcularFemWithers1987_4skf = (m, p) => {
  const info = {
    autor: 'Withers et al.',
    ano: 1987,
    protocolo: '4 Dobras (Tríceps, Subescapular, Supraespinhal, Panturrilha)',
    populacao: 'Atletas (Austrália)',
    faixaEtaria: '11 a 41 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { somaWithers4 } = prepararDados(m, p);
  if (somaWithers4 <= 0) return { valor: 0, info };
  const dc = 1.17484 - (0.07229 * safeLog10(somaWithers4));
// Retorna o pacote completo aqui!
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 6. Withers et al. (1987) - 6skf (Padrão ISAK)
// População: Fit/Ativas Australianas | Idade: 17 a 35 anos | Ref: PH
// Refs Excel: X95 (DC) e X96 (%G Siri)
// Fórmula Excel: =1,20953-0,08294*LOG10(F55+F56+F60+F61+F62+F63)
// ============================================================
export const calcularFemWithers1987_6skf = (m, p) => {
  const info = {
    autor: 'Withers et al.',
    ano: 1987,
    protocolo: '6 Dobras (Tríceps, Subescapular, Supraespinhal, Abdominal, Coxa, Panturrilha)',
    populacao: 'Fit / Ativas (Austrália)',
    faixaEtaria: '17 a 35 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { somaWithers6 } = prepararDados(m, p);
  if (somaWithers6 <= 0) return { valor: 0, info };
  const dc = 1.20953 - (0.08294 * safeLog10(somaWithers6));
// Retorna o pacote completo aqui!
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 7. Slaughter et al. (1988) - 2skf (Crianças/Adolescentes)
// População: Meninas | Idade: 8 a 17 anos | Ref: PH
// Ref Excel: X79 (%G Direto)
// Fórmula Excel: =0,61*(F55+F63)+5,1
// ============================================================
export const calcularFemSlaughter1988_2skf = (m, p) => {
  const info = {
    autor: 'Slaughter et al.',
    ano: 1988,
    protocolo: '2 Dobras (Tríceps e Panturrilha)',
    populacao: 'Meninas / Adolescentes',
    faixaEtaria: '8 a 17 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, pa } = prepararDados(m, p);
  const soma2 = tr + pa;
  if (soma2 <= 0) return { valor: 0, info };
  const pgc = (0.61 * soma2) + 5.1;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 8. Yuhasz (1974) - 6skf (Modelo Clássico)
// População: Jovens Estudantes (Canadá) | Ref: PH
// Ref Excel: X81 (%G Direto)
// Fórmula Excel: =0,1548*(F64)+3,58
// ============================================================
export const calcularFemYuhasz1974_6skf = (m, p) => {
  const info = {
    autor: 'Yuhasz',
    ano: 1974,
    protocolo: '6 Dobras Clássico',
    populacao: 'Jovens estudantes (Canadá)',
    faixaEtaria: 'Jovens Adultos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, sub, se, ab, cx, pa } = prepararDados(m, p);
  const soma6 = tr + sub + se + ab + cx + pa;
  if (soma6 <= 0) return { valor: 0, info };
  const pgc = (0.1548 * soma6) + 3.58;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 9. Katch & McArdle (1973) - 3skf
// População: Universitárias (EUA) | Idade: ~20 anos | Ref: PH
// Refs Excel: X83 (DC) e X84 (%G Brozek)
// Fórmula Excel: =1,09246-0,00049*(F56)-0,00075*(F59)+0,0071*(F69)-0,00121*(C79)
// ============================================================
export const calcularFemKatchMcArdle1973_3skf = (m, p) => {
  const info = {
    autor: 'Katch & McArdle',
    ano: 1973,
    protocolo: '3 Dobras + Perímetro/Diâmetro',
    populacao: 'Universitárias (EUA)',
    faixaEtaria: '~20 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { sub, si, diamUmero } = prepararDados(m, p);
  // C79 na planilha é Perímetro/Dobra da Coxa Média
  const coxaMedia = m.perimetro_coxa_media || m.dobra_cutanea_coxa_media || 0;
  if (sub <= 0) return { valor: 0, info };
  // F56=Subescapular, F59=Crista Ilíaca, F69=Diâmetro Úmero, C79=Coxa Média
  const dc = 1.09246 - (0.00049 * sub) - (0.00075 * si) + (0.0071 * diamUmero) - (0.00121 * coxaMedia);
return { valor: converterDCparaBrozek(dc), info };
};

// ============================================================
// 10. Sloan et al. (1962) - 2skf
// População: Universitárias (EUA) | Idade: 17 a 25 anos | Ref: PH
// Refs Excel: X86 (DC) e X87 (%G Siri)
// Fórmula Excel: =1,0764-0,00081*(F59)-0,00088*(F55)
// ============================================================
export const calcularFemSloan1962_2skf = (m, p) => {
  const info = {
    autor: 'Sloan, Burt & Blyth',
    ano: 1962,
    protocolo: '2 Dobras (Supra-ilíaca e Tríceps)',
    populacao: 'Universitárias (EUA)',
    faixaEtaria: '17 a 25 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { si, tr } = prepararDados(m, p);
  const soma2 = si + tr;
  if (soma2 <= 0) return { valor: 0, info };
  const dc = 1.0764 - (0.00081 * si) - (0.00088 * tr);
return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 11. Wilmore & Behnke (1970) - 3skf
// População: Universitárias (EUA) | Idade: 17 a 48 anos | Ref: PH
// Refs Excel: X89 (DC) e X90 (%G Siri)
// Fórmula Excel: =1,06234-0,00068*(F56)-0,00039*(F55)-0,00025*(F62)
// ============================================================
export const calcularFemWilmoreBehnke1970_3skf = (m, p) => {
  const info = {
    autor: 'Wilmore & Behnke',
    ano: 1970,
    protocolo: '3 Dobras (Subescapular, Tríceps, Coxa)',
    populacao: 'Universitárias (EUA)',
    faixaEtaria: '17 a 48 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { sub, tr, cx } = prepararDados(m, p);
  const soma3 = sub + tr + cx;
  if (soma3 <= 0) return { valor: 0, info };
  const dc = 1.06234 - (0.00068 * sub) - (0.00039 * tr) - (0.00025 * cx);
return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 12. Thorland et al. (1984) - Generalizada Feminina
// População: Jovens Atletas de Elite (EUA) | Idade: ~16 anos | Ref: PH
// Refs Excel: X65 (DC) e X66 (%G Siri)
// Fórmula Excel: =1,0987-0,00122*(F55+F56+F59)+0,00000263*(F55+F56+F59)^2
// ============================================================
export const calcularFemThorlandGeneralizada1984 = (m, p) => {
  const info = {
    autor: 'Thorland et al.',
    ano: 1984,
    protocolo: '3 Dobras (Tríceps, Subescapular, Supra-ilíaca)',
    populacao: 'Jovens Atletas de Elite (EUA)',
    faixaEtaria: '~16 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, sub, si } = prepararDados(m, p);
  const soma3 = tr + sub + si;
  if (soma3 <= 0) return { valor: 0, info };
  const dc = 1.0987 - (0.00122 * soma3) + (0.00000263 * Math.pow(soma3, 2));
return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 13. Lewis et al. (1978) - Modelo por Dobras e Perímetros
// População: Corredoras (EUA) | Idade: 30 a 59 anos | Ref: PH
// Refs Excel: X62 (DC) e X63 (%G Siri)
// Fórmula Excel: =0,97845-0,0002*(F55)+0,00088*(C58)-0,00122*(F56)-0,00234*(C71)
// ============================================================
export const calcularFemLewis1978 = (m, p) => {
  const info = {
    autor: 'Lewis et al.',
    ano: 1978,
    protocolo: 'Dobras + Perímetro Braço + Estatura',
    populacao: 'Corredoras (EUA)',
    faixaEtaria: '30 a 59 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, alturaCm, sub, perBracoRelax } = prepararDados(m, p);
  if (tr <= 0 || alturaCm <= 0) return { valor: 0, info };
  // F55=Tríceps, C58=Estatura, F56=Subescapular, C71=Braço Relaxado
  const dc = 0.97845 - (0.0002 * tr) + (0.00088 * alturaCm) - (0.00122 * sub) - (0.00234 * perBracoRelax);
 return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 14. Jackson et al. (1980) - 4skf
// População: Adultas Generalizada (EUA) | Idade: 18 a 55 anos | Ref: PH
// Refs Excel: X76 (DC) e X77 (%G Siri)
// Fórmula Excel: =1,096095-0,0006952*(F55+F59+F61+F62)+0,0000011*(F55+F59+F61+F62)^2-0,0000714*(E5)
// ============================================================
export const calcularFemJacksonPollock1980_4skf = (m, p) => {
  const info = {
    autor: 'Jackson, Pollock & Ward',
    ano: 1980,
    protocolo: '4 Dobras (Tríceps, Supra-ilíaca, Abdominal, Coxa)',
    populacao: 'Adultas, generalizada (EUA)',
    faixaEtaria: '18 a 55 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { tr, si, ab, cx, idade } = prepararDados(m, p);
  const soma4 = tr + si + ab + cx;
  if (soma4 <= 0) return { valor: 0, info };
  // E5 na planilha representa a Idade (C56)
  const dc = 1.096095 - (0.0006952 * soma4) + (0.0000011 * Math.pow(soma4, 2)) - (0.0000714 * idade);
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 15. Tran & Weltman (1989) - Modelo por Perímetros
// População: Brancas / Usual para Idosas | Idade: 15 a 79 anos | Ref: PH
// Refs Excel: X59 (DC) e X60 (%G Brozek Adaptado)
// Fórmula Excel: =1,168297-0,002824*((C75+C76)/2)+0,0000122098*((C75+C76)/2)^2-0,000733128*(C77)+0,000510477*(C58)-0,000216161*(E5)
// ============================================================
export const calcularFemTranWeltman1989_Perimetros = (m, p) => {
  const info = {
    autor: 'Tran & Weltman',
    ano: 1989,
    protocolo: 'Perímetros (Cintura, Abdome, Quadril) + Estatura',
    populacao: 'Brancas / Usual para idosas',
    faixaEtaria: '15 a 79 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { perCintura, perAbdome, perQuadril, alturaCm, idade } = prepararDados(m, p);
  const mediaAbdintura = (perCintura + perAbdome) / 2;
  if (mediaAbdintura <= 0) return { valor: 0, info };
  // E5 representa a Idade na planilha
  const dc = 1.168297 - 0.002824 * (mediaAbdintura) + 0.0000122098 * Math.pow(mediaAbdintura, 2) - 0.000733128 * (perQuadril) + 0.000510477 * (alturaCm) - 0.000216161 * (idade);
  // Conversão adaptada da célula X60: ((5.01 / DC) - 4.57) * 100
  const pgc = ((5.01 / dc) - 4.57) * 100;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 16. Weltman et al. (1988) - Modelo Direto por Perímetros
// População: Mulheres com Obesidade | Idade: 20 a 60 anos | Ref: PH
// Ref Excel: X74 (%G Direto)
// Fórmula Excel: =0,11077*((C75+C76)/2)-0,17666*(C58)+0,14354*(C57)+51,03301
// ============================================================
export const calcularFemWeltman1988_Perimetros = (m, p) => {
  const info = {
    autor: 'Weltman et al.',
    ano: 1988,
    protocolo: 'Perímetros (Cintura, Abdome) + Estatura + Peso',
    populacao: 'Mulheres com Obesidade',
    faixaEtaria: '20 a 60 anos',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { perCintura, perAbdome, alturaCm, peso } = prepararDados(m, p);
  const mediaAbdintura = (perCintura + perAbdome) / 2;
  if (mediaAbdintura <= 0 || peso <= 0) return { valor: 0, info };
  const pgc = (0.11077 * mediaAbdintura) - (0.17666 * alturaCm) + (0.14354 * peso) + 51.03301;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// PARTE 2: AS 19 EQUAÇÕES DA COLUNA DIREITA (AC) DO EXCEL
// ============================================================

// ============================================================
// 17. Woolcott & Bergman (2018) - RFM (Relative Fat Mass)
// População: Obesas | Idade: 20 a 69 anos | Ref: DXA
// Ref Excel: AC53 (%G Direto)
// Fórmula Excel: =76-(20*(C58/C75))
// ============================================================
export const calcularFemWoolcottBergman2018 = (m, p) => {
  const info = {
    autor: 'Woolcott & Bergman',
    ano: 2018,
    protocolo: 'RFM (Relative Fat Mass)',
    populacao: 'Obesas',
    faixaEtaria: '20 a 69 anos',
    referencia: 'DXA'
  };
  const { alturaCm, perCintura } = prepararDados(m, p);
  if (perCintura <= 0 || alturaCm <= 0) return { valor: 0, info };
  const pgc = 76 - (20 * (alturaCm / perCintura));
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 18. Deurenberg et al. (1991) - Por IMC
// População: Adultas e Idosas | Ref: PH
// Ref Excel: AC55 (%G Direto)
// Fórmula Excel: =1,2*C61+(0,23*C56)-(10,8*0)-(5,4)
// ============================================================
export const calcularFemDeurenberg1991_IMC = (m, p) => {
  const info = {
    autor: 'Deurenberg et al.',
    ano: 1991,
    protocolo: 'Por IMC e Idade',
    populacao: 'Adultas e Idosas',
    faixaEtaria: 'Generalizada',
    referencia: 'PH (Pesagem Hidrostática)'
  };
  const { imc, idade } = prepararDados(m, p);
  if (imc <= 0 || idade <= 0) return { valor: 0, info };
  const pgc = (1.2 * imc) + (0.23 * idade) - 5.4;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 19. Mitchell et al. (2020) - 7skf ISAK
// População: Nadadoras de Elite | Idade: 15 a 28 anos | Ref: DXA
// Refs Excel: Y57 (Massa G) e AC57 (%G Direto)
// Fórmula Y57: =(0,16*C57)+(8,78*LN(F55+F56+F57+F60+F61+F62+F63)-(1,83*0)-32,77)
// ============================================================
export const calcularFemMitchell2020_7skf = (m, p) => {
  const info = {
    autor: 'Mitchell et al.',
    ano: 2020,
    protocolo: '7 Dobras ISAK',
    populacao: 'Nadadoras de Elite',
    faixaEtaria: '15 a 28 anos',
    referencia: 'DXA'
  };
  const { peso, tr, sub, bi, se, ab, cx, pa } = prepararDados(m, p);
  // F55, F56, F57, F60(Supraespinhal), F61, F62, F63
  const soma7 = tr + sub + bi + se + ab + cx + pa;
  if (soma7 <= 0 || peso <= 0) return { valor: 0, info };
  // LN no JS é Math.log() (Logaritmo natural de base e)
  const y57 = (0.16 * peso) + (8.78 * Math.log(soma7)) - 32.77;
  const pgc = (y57 / peso) * 100;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 20. Eston et al. (2005) - 3skf ISAK
// População: Jovens Ativas do Reino Unido | Ref: 4C, DXA, PH, BIA
// Ref Excel: AC59 (%G Direto)
// Fórmula Excel: =6,15+0,39*(F62)+0,42*(F63)+0,23*(F59)
// ============================================================
export const calcularFemEston2005_3skf = (m, p) => {
  const info = {
    autor: 'Eston et al.',
    ano: 2005,
    protocolo: '3 Dobras ISAK (Coxa, Panturrilha, Crista Ilíaca)',
    populacao: 'Jovens Ativas (Reino Unido)',
    faixaEtaria: 'Jovens Adultas',
    referencia: 'Multicomponente (4C, DXA, PH, BIA)'
  };
  const { cx, pa, si } = prepararDados(m, p);
  if (cx <= 0 && pa <= 0 && si <= 0) return { valor: 0, info };
  // F62(Coxa) + F63(Panturrilha) + F59(Crista Ilíaca)
  const pgc = 6.15 + (0.39 * cx) + (0.42 * pa) + (0.23 * si);
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 21. Evans et al. (2005) - 3skf Brancas
// População: Atletas Brancas | Idade: 18 a 34 anos | Ref: 4C, DXA, PH, 2H2O
// Ref Excel: AC61 (%G Direto)
// Fórmula Excel: =8,997+(0,24658*(F55+F61+F62))-(6,343*0)-(1,998*0)
// ============================================================
export const calcularFemEvans2005_3skf_Brancas = (m, p) => {
  const info = {
    autor: 'Evans et al.',
    ano: 2005,
    protocolo: '3 Dobras (Tríceps, Abdominal, Coxa)',
    populacao: 'Atletas Brancas',
    faixaEtaria: '18 a 34 anos',
    referencia: 'Multicomponente (4C, DXA, PH, 2H2O)'
  };
  const { tr, ab, cx } = prepararDados(m, p);
  if (tr <= 0 && ab <= 0 && cx <= 0) return { valor: 0, info };
  // Multiplicadores baseados no Excel (Constantes zeradas subtraídas)
  const pgc = 8.997 + (0.24658 * (tr + ab + cx));
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 22. Evans et al. (2005) - 3skf Negras
// População: Atletas Negras | Idade: 18 a 26 anos | Ref: 4C, DXA, PH, 2H2O
// Ref Excel: AC63 (%G Direto)
// Fórmula Excel: =8,997+(0,24658*(F55+F61+F62))-(6,343*0)-(1,998*1)
// ============================================================
export const calcularFemEvans2005_3skf_Negras = (m, p) => {
  const info = {
    autor: 'Evans et al.',
    ano: 2005,
    protocolo: '3 Dobras (Tríceps, Abdominal, Coxa)',
    populacao: 'Atletas Negras',
    faixaEtaria: '18 a 26 anos',
    referencia: 'Multicomponente (4C, DXA, PH, 2H2O)'
  };
  const { tr, ab, cx } = prepararDados(m, p);
  if (tr <= 0 && ab <= 0 && cx <= 0) return { valor: 0, info }; 
  // Diferença: constante étnica = -1.998
  const pgc = 8.997 + (0.24658 * (tr + ab + cx)) - 1.998;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// --- GRUPO DURNIN & WOMERSLEY (Variações de Idade) ---

// ============================================================
// 23. Durnin et al. (1974) - 4skf (< 17 anos)
// População: Generalizada (Escócia) | Idade: < 17 anos | Ref: PH
// Ref Excel: AC65 (DC) e AC66 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_Menor17 = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '4 Dobras Cutâneas (< 17 anos)', populacao: 'Generalizada (Escócia)', faixaEtaria: 'Menores de 17 anos', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const dc = 1.1369 - (0.0598 * safeLog10(somaDurnin));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 24. Durnin et al. (1974) - 4skf (16 a 19 anos)
// População: Generalizada (Escócia) | Idade: 16 a 19 anos | Ref: PH
// Ref Excel: AC68 (DC) e AC69 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_16a19anos = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '4 Dobras Cutâneas (16 a 19 anos)', populacao: 'Generalizada (Escócia)', faixaEtaria: '16 a 19 anos', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const dc = 1.1549 - (0.0678 * safeLog10(somaDurnin));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 25. Durnin et al. (1974) - 4skf (20 a 29 anos)
// População: Generalizada (Escócia) | Idade: 20 a 29 anos | Ref: PH
// Ref Excel: AC71 (DC) e AC72 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_20a29anos = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '4 Dobras Cutâneas (20 a 29 anos)', populacao: 'Generalizada (Escócia)', faixaEtaria: '20 a 29 anos', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const dc = 1.1599 - (0.0717 * safeLog10(somaDurnin));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 26. Durnin et al. (1974) - 4skf (30 a 39 anos)
// População: Generalizada (Escócia) | Idade: 30 a 39 anos | Ref: PH
// Ref Excel: AC74 (DC) e AC75 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_30a39anos = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '4 Dobras Cutâneas (30 a 39 anos)', populacao: 'Generalizada (Escócia)', faixaEtaria: '30 a 39 anos', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const dc = 1.1423 - (0.0632 * safeLog10(somaDurnin));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 27. Durnin et al. (1974) - 4skf (40 a 49 anos)
// População: Generalizada (Escócia) | Idade: 40 a 49 anos | Ref: PH
// Ref Excel: AC77 (DC) e AC78 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_40a49anos = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '4 Dobras Cutâneas (40 a 49 anos)', populacao: 'Generalizada (Escócia)', faixaEtaria: '40 a 49 anos', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const dc = 1.1333 - (0.0612 * safeLog10(somaDurnin));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 28. Durnin et al. (1974) - 4skf (50 a 58 anos)
// População: Generalizada (Escócia) | Idade: 50 a 58 anos | Ref: PH
// Ref Excel: AC80 (DC) e AC81 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_50a58anos = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '4 Dobras Cutâneas (50 a 58 anos)', populacao: 'Generalizada (Escócia)', faixaEtaria: '50 a 58 anos', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const dc = 1.1339 - (0.0645 * safeLog10(somaDurnin));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 29. Durnin et al. (1974) - 1skf (Só Tríceps)
// População: Generalizada (Escócia) | Idade: 16 a 68 anos | Ref: PH
// Ref Excel: AC83 (DC) e AC84 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_1skf = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '1 Dobra Cutânea (Tríceps)', populacao: 'Generalizada (Escócia)', faixaEtaria: '16 a 68 anos', referencia: 'PH' };
  const { tr } = prepararDados(m, p);
  if (tr <= 0) return { valor: 0, info };
  const dc = 1.1278 - (0.0775 * safeLog10(tr));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 30. Durnin et al. (1974) - 2skf (Tríceps e Subescapular)
// População: Generalizada (Escócia) | Idade: 16 a 68 anos | Ref: PH
// Ref Excel: AC86 (DC) e AC87 (%G Siri)
// ============================================================
export const calcularFemDurnin1974_2skf = (m, p) => {
  const info = { autor: 'Durnin & Womersley', ano: 1974, protocolo: '2 Dobras Cutâneas (Tríceps, Subescapular)', populacao: 'Generalizada (Escócia)', faixaEtaria: '16 a 68 anos', referencia: 'PH' };
  const { tr, sub } = prepararDados(m, p);
  const soma2 = tr + sub;
  if (soma2 <= 0) return { valor: 0, info };
  const dc = 1.1507 - (0.0785 * safeLog10(soma2));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 31. Nagamine & Suzuki (1964) - 2skf Linear
// População: Japonesas | Idade: 18 a 23 anos | Ref: PH
// Ref Excel: AC89 (DC) e AC90 (%G Siri)
// ============================================================
export const calcularFemNagamineSuzuki1964_2skf = (m, p) => {
  const info = { autor: 'Nagamine & Suzuki', ano: 1964, protocolo: '2 Dobras (Tríceps, Subescapular)', populacao: 'Asiáticas', faixaEtaria: '18 a 23 anos', referencia: 'PH' };
  const { tr, sub } = prepararDados(m, p);
  if (tr <= 0 || sub <= 0) return { valor: 0, info };
  const dc = 1.0897 - (0.00133 * (tr + sub));
  return { valor: converterDCparaSiri(dc), info };
};

// ============================================================
// 32. Deurenberg et al. (1990) - 4skf (Pré-Púberes)
// População: Meninas Adolescentes (Pré-Púberes) | Ref: PH
// Ref Excel: AC92 (%G Direto)
// ============================================================
export const calcularFemDeurenberg1990_PrePuberes = (m, p) => {
  const info = { autor: 'Deurenberg et al.', ano: 1990, protocolo: '4 Dobras Cutâneas', populacao: 'Meninas (Pré-Púberes)', faixaEtaria: 'Adolescentes', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const pgc = 29.85 * safeLog10(somaDurnin) - 25.87;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 33. Deurenberg et al. (1990) - 4skf (Púberes)
// População: Meninas Adolescentes (Púberes) | Ref: PH
// Ref Excel: AC93 (%G Direto)
// ============================================================
export const calcularFemDeurenberg1990_Puberes = (m, p) => {
  const info = { autor: 'Deurenberg et al.', ano: 1990, protocolo: '4 Dobras Cutâneas', populacao: 'Meninas (Púberes)', faixaEtaria: 'Adolescentes', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const pgc = 23.94 * safeLog10(somaDurnin) - 18.89;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 34. Deurenberg et al. (1990) - 4skf (Pós-Púberes)
// População: Meninas Adolescentes (Pós-Púberes) | Ref: PH
// Ref Excel: AC94 (%G Direto)
// ============================================================
export const calcularFemDeurenberg1990_PosPuberes = (m, p) => {
  const info = { autor: 'Deurenberg et al.', ano: 1990, protocolo: '4 Dobras Cutâneas', populacao: 'Meninas (Pós-Púberes)', faixaEtaria: 'Adolescentes', referencia: 'PH' };
  const { somaDurnin } = prepararDados(m, p);
  if (somaDurnin <= 0) return { valor: 0, info };
  const pgc = 39.02 * safeLog10(somaDurnin) - 43.49;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// 35. Ortiz-Hernández et al. (2016) - Equação Mista
// População: Meninas Mexicanas | Idade: 5 a 19 anos | Ref: DXA
// Ref Excel: AC96 (%G Direto)
// ============================================================
export const calcularFemOrtizHernandez2016 = (m, p) => {
  const info = { autor: 'Ortiz-Hernández et al.', ano: 2016, protocolo: 'Estatura Sentado + IMC + Perímetro + Dobras + Diâmetro', populacao: 'Meninas Mexicanas', faixaEtaria: '5 a 19 anos', referencia: 'DXA' };
  const { imc, perCintura, tr, sub, pa, diamUmero, estaturaSentado } = prepararDados(m, p);
  // F17 agora é a estaturaSentado extraída do banco de dados!
  if (estaturaSentado <= 0 || tr <= 0 || imc <= 0) return { valor: 0, info };
  const parte1 = -7.299 - (21.436 * safeLog10(estaturaSentado));
  const parte2 = (17.739 * safeLog10(imc)) + (20.143 * safeLog10(perCintura));
  const parte3 = (7.813 * safeLog10(tr)) + (6.379 * safeLog10(sub)) + (6.051 * safeLog10(pa));
  const parte4 = - (16.364 * safeLog10(diamUmero));
  const pgc = parte1 + parte2 + parte3 + parte4;
  return { valor: Number(Math.max(0.1, pgc).toFixed(2)), info };
};

// ============================================================
// --- AS EQUAÇÕES DE REGRESSÃO - NÃO APAGAR (HOMENS) ---
// ============================================================

// 1. Mitchell et al. (2020) - 7skd ISAK
// Ref Excel: X56 (%G) através de Y56
export const calcularMascMitchell2020_7skd = (m, p) => {
  const { tr, sub, bi, se, ab, cx, pa, peso } = prepararDados(m, p);
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
export const calcularMascWoolcottBergman2018 = (m, p) => {
  const { alturaCm, perCintura } = prepararDados(m, p);
  if (perCintura <= 0) return 0;
  // Excel AC56: =64-(20*(C58/C75))
  const pgc = 64 - (20 * (alturaCm / perCintura));
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 3. Guedes (1985) - 3skd 
// Refs Excel: X58 (DC) e X59 (%G Siri)
export const calcularMascGuedes1985_3skd = (m, p) => {
  const { tr, si, ab } = prepararDados(m, p);
  const soma3 = tr + si + ab;
  if (soma3 <= 0) return 0;
  // Excel X58: =1,1714-0,0671*LOG10(F55+F59+F61)
  const dc = 1.1714 - (0.0671 * safeLog10(soma3));
  return converterDCparaSiri(dc);
};

// 4. Deurenberg et al. (1991) - Por IMC
// Ref Excel: AC58 (%G Direto)
export const calcularMascDeurenberg1991_IMC = (m, p) => {
  const { imc, idade } = prepararDados(m, p);
  if (imc <= 0) return 0;
  // Excel AC58: =1,2*C61+(0,23*C56)-(10,8*1)-(5,4*1)
  const pgc = (1.2 * imc) + (0.23 * idade) - 10.8 - 5.4;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 5. Weltman et al. (1987) - Por Perímetros
// Ref Excel: AC60 (%G Direto)
export const calcularMascWeltman1987 = (m, p) => {
  const { perCintura, perAbdome, peso } = prepararDados(m, p);
  const mediaAbdintura = (perCintura + perAbdome) / 2;
  // Excel AC60: =0,31457*((C75+C76)/2)-0,10969*(C57)+10,8336
  if (mediaAbdintura <= 0) return 0;
  const pgc = (0.31457 * mediaAbdintura) - (0.10969 * peso) + 10.8336;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 6. Petroski (1995) - 4skd
// Refs Excel: X61 (DC) e X62 (%G Siri)
export const calcularMascPetroski1995_4skd = (m, p) => {
  const { sub, tr, si, pa, idade } = prepararDados(m, p);
  const soma4 = sub + tr + si + pa;
  if (soma4 <= 0) return 0;
  // Excel X61: =1,10756863-0,00081201*(F56+F55+F59+F63)+0,00000212*(F56+F55+F59+F63)^2-0,00041761*(C56)
  const dc = 1.10756863 - (0.00081201 * soma4) + (0.00000212 * Math.pow(soma4, 2)) - (0.00041761 * idade);
  return converterDCparaSiri(dc);
};

// 7. Stewart & Hannan - 2skd (Usa peso, abdome e coxa)
// Ref Excel: X64 (%G) através de Y64
export const calcularMascStewartHannan_2skd = (m, p) => {
  const { ab, cx, peso } = prepararDados(m, p);
  if (peso <= 0) return 0;
  // Excel Y64: =((331,5*F61)+(356,2*F62)+(111,9*C57)-9108)/1000
  const y64 = ((331.5 * ab) + (356.2 * cx) + (111.9 * peso) - 9108) / 1000;
  // Excel X64: =(Y64/C57)*100
  const pgc = (y64 / peso) * 100;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 8. Faulkner (1968) - 4skd
// Ref Excel: X66 (%G Direto)
export const calcularMascFaulkner1968_4skd = (m, p) => {
  const { tr, sub, si, ab } = prepararDados(m, p);
  const soma4 = tr + sub + si + ab;
  if (soma4 <= 0) return 0;
  // Excel X66: =5,783+0,153*(F55+F56+F59+F61)
  const pgc = 5.783 + (0.153 * soma4);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 9. Reilly et al. (2009) - 4skd ISAK
// Ref Excel: X68 (%G Direto)
export const calcularMascReilly2009_4skd = (m, p) => {
  const { cx, ab, tr, pa } = prepararDados(m, p);
  if (cx <= 0) return 0;
  // Excel X68: =5,174+0,124*(F62)+0,147*(F61)+0,196*(F55)+0,13*(F63)
  const pgc = 5.174 + (0.124 * cx) + (0.147 * ab) + (0.196 * tr) + (0.13 * pa);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 10. Evans et al. (2005) - 3skd (Brancos)
// Ref Excel: X70 (%G Direto)
export const calcularMascEvans2005_3skd_White = (m, p) => {
  const { tr, ab, cx } = prepararDados(m, p);
  if (tr <= 0) return 0;
  // Excel X70: =8,997+(0,24658*(F55+F61+F62))-(6,343*1)-(1,998*0)
  const pgc = 8.997 + (0.24658 * (tr + ab + cx)) - 6.343;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 11. Evans et al. (2005) - 3skd (Negros)
// Ref Excel: X72 (%G Direto)
export const calcularMascEvans2005_3skd_Black = (m, p) => {
  const { tr, ab, cx } = prepararDados(m, p);
  if (tr <= 0) return 0;
  // Excel X72: =8,997+(0,24658*(F55+F61+F62))-(6,343*1)-(1,998*1)
  const pgc = 8.997 + (0.24658 * (tr + ab + cx)) - 6.343 - 1.998;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 12. Katch & McArdle (1973) - 3skd
// Refs Excel: X74 (DC) e X75 (%G Brozek)
export const calcularMascKatchMcArdle1973_3skd = (m, p) => {
  const { tr, sub, ab } = prepararDados(m, p);
  if (tr <= 0) return 0;
  // Excel X74: =1,09665-(0,00103*F55)-(0,00056*F56)-(0,00054*F61)
  const dc = 1.09665 - (0.00103 * tr) - (0.00056 * sub) - (0.00054 * ab);
  return converterDCparaBrozek(dc);
};

// 13. Withers et al. (1987) - 7skd
// Refs Excel: X77 (DC) e X78 (%G Siri)
export const calcularMascWithers1987_7skd = (m, p) => {
  const { tr, bi, sub, se, ab, cx, pa } = prepararDados(m, p);
  const soma7 = tr + bi + sub + se + ab + cx + pa;
  if (soma7 <= 0) return 0;
  // Excel X77: =1,0988-0,0004*(F55+F57+F56+F60+F61+F62+F63)
  const dc = 1.0988 - (0.0004 * soma7);
  return converterDCparaSiri(dc);
};

// 14. Slaughter et al. (1988) - 2skd
// Ref Excel: X80 (%G Direto)
export const calcularMascSlaughter1988_2skd = (m, p) => {
  const { tr, pa } = prepararDados(m, p);
  const soma2 = tr + pa;
  if (soma2 <= 0) return 0;
  // Excel X80: =0,735*(F55+F63)+1
  const pgc = (0.735 * soma2) + 1;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 15. Yuhasz (1974) - 6skd
// Ref Excel: X82 (%G Direto)
export const calcularMascYuhasz1974_6skd = (m, p) => {
  const { tr, sub, si, ab, cx, pa } = prepararDados(m, p);
  const soma6 = tr + sub + si + ab + cx + pa; // F64 (Soma 6)
  if (soma6 <= 0) return 0;
  // Excel X82: =0,1051*(F64)+2,585
  const pgc = (0.1051 * soma6) + 2.585;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 16. Wilmore & Behnke (1969) - 2skd
// Refs Excel: X84 (DC) e X85 (%G Siri)
export const calcularMascWilmoreBehnke1969_2skd = (m, p) => {
  const { ab, cx } = prepararDados(m, p);
  if (ab <= 0) return 0;
  // Excel X84: =1,08543-0,000889*(F61)-0,0004*(F62)
  const dc = 1.08543 - (0.000889 * ab) - (0.0004 * cx);
  return converterDCparaSiri(dc);
};

// 17. Boileau et al. (1985) - 2skd
// Ref Excel: X87 (%G Direto)
export const calcularMascBoileau1985_2skd = (m, p) => {
  const { tr, sub } = prepararDados(m, p);
  const soma2 = tr + sub;
  if (soma2 <= 0) return 0;
  // Excel X87: =1,35*(F55+F56)-0,012*(F55+F56)^2-4,4
  const pgc = (1.35 * soma2) - (0.012 * Math.pow(soma2, 2)) - 4.4;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 18. Deurenberg et al. (1990) - 4skd (3 Variações Logarítmicas)
// Refs Excel: X89, X91, X93
export const calcularMascDeurenberg1990_4skd_Var1 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel X89: =26,56*LOG10(F55+F56+F57+F59)-22,23
  const pgc = 26.56 * safeLog10(soma4Durnin) - 22.23;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

export const calcularMascDeurenberg1990_4skd_Var2 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel X91: =18,7*LOG10(F55+F56+F57+F59)-11,91
  const pgc = 18.7 * safeLog10(soma4Durnin) - 11.91;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

export const calcularMascDeurenberg1990_4skd_Var3 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel X93: =18,88*LOG10(F55+F56+F57+F59)-15,58
  const pgc = 18.88 * safeLog10(soma4Durnin) - 15.58;
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 19. Eston et al. (2005) - 2skd ISAK
// Ref Excel: X95 (%G Direto)
export const calcularMascEston2005_2skd = (m, p) => {
  const { cx, pa } = prepararDados(m, p);
  if (cx <= 0) return 0;
  // Excel X95: =4,05+0,52*(F62)+0,32*(F63)
  const pgc = 4.05 + (0.52 * cx) + (0.32 * pa);
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// 20. Eston et al. (2005) - 6skd ISAK
// Ref Excel: X96 (%G Direto)
export const calcularMascEston2005_6skd = (m, p) => {
  const { tr, sub, bi, si, cx, pa } = prepararDados(m, p);
  if (tr <= 0) return 0;
  // Excel X96: =1,61+0,12*(F55+F56+F57+F59)+0,36*(F62+F63)
  const pgc = 1.61 + (0.12 * (tr + sub + bi + si)) + (0.36 * (cx + pa));
  return Number(Math.max(0.1, pgc).toFixed(2));
};

// --- EQUAÇÕES DA COLUNA DIREITA (AC) PARA HOMENS ---

// 21. Durnin & Womersley 1974 - Várias Idades
export const calcularMascDurnin1974_Var1 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC62: =1,1765-0,0744*LOG(F55+F56+F57+F59)
  const dc = 1.1765 - (0.0744 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var2 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC68: =1,162-0,063*LOG(F55+F56+F57+F59)
  const dc = 1.162 - (0.063 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var3 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC71: =1,1631-0,0632*LOG(F55+F56+F57+F59)
  const dc = 1.1631 - (0.0632 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var4 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC74: =1,1422-0,0544*LOG(F55+F56+F57+F59)
  const dc = 1.1422 - (0.0544 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var5 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC77: =1,162-0,07*LOG(F55+F56+F57+F59)
  const dc = 1.162 - (0.07 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

export const calcularMascDurnin1974_Var6 = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC80: =1,1715-0,0779*LOG(F55+F56+F57+F59)
  const dc = 1.1715 - (0.0779 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 22. Durnin & Womersley 1974 - 1skd (Só Tríceps)
export const calcularMascDurnin1974_1skd = (m, p) => {
  const { tr } = prepararDados(m, p);
  if (tr <= 0) return 0;
  // Excel AC94: =1,1143-0,0618*LOG10(F55)
  const dc = 1.1143 - (0.0618 * safeLog10(tr));
  return converterDCparaSiri(dc);
};

// 23. Durnin & Rahaman 1967 - 4skd
export const calcularMascDurninRahaman1967_4skd = (m, p) => {
  const { soma4Durnin } = prepararDados(m, p);
  if (soma4Durnin <= 0) return 0;
  // Excel AC65: =1,1533-0,0643*LOG(F55+F56+F57+F59)
  const dc = 1.1533 - (0.0643 * safeLog10(soma4Durnin));
  return converterDCparaSiri(dc);
};

// 24. Forsyth & Sinning 1973 - 2skd (Usa Brozek)
export const calcularMascForsythSinning1973_2skd = (m, p) => {
  const { sub, ab } = prepararDados(m, p);
  if (sub <= 0) return 0;
  // Excel AC85: =1,103-0,00168*(F56)-0,00127*(F61)
  const dc = 1.103 - (0.00168 * sub) - (0.00127 * ab);
  return converterDCparaBrozek(dc);
};

// 25. Nagamine & Suzuki 1964 - 2skd
export const calcularMascNagamineSuzuki1964_2skd = (m, p) => {
  const { tr, sub } = prepararDados(m, p);
  if (tr <= 0) return 0;
  // Excel AC88: =1,0913-0,00116*(F55+F56)
  const dc = 1.0913 - (0.00116 * (tr + sub));
  return converterDCparaSiri(dc);
};

// 26. Sloan 1967 - 2skd (Usa Brozek)
export const calcularMascSloan1967_2skd = (m, p) => {
  const { cx, sub } = prepararDados(m, p);
  if (cx <= 0) return 0;
  // Excel AC91: =1,1043-0,001327*(F62)-0,00131*(F56)
  const dc = 1.1043 - (0.001327 * cx) - (0.00131 * sub);
  return converterDCparaBrozek(dc);
};

// 27. Hortobagyi et al. 1992
// Obs: Ref AC83 usa fórmula linear de massa para encontrar algo. No Excel não tinha o %G associado.
export const calcularMascHortobagyi1992 = (m, p) => {
  const { peso, alturaCm } = prepararDados(m, p);
  if (peso <= 0) return 0;
  // Excel AC83: =55,2+0,481*(C57)-0,468*(C58)
  const calc = 55.2 + (0.481 * peso) - (0.468 * alturaCm);
  return Number(Math.max(0.1, calc).toFixed(2));
};

// 28. Ortiz-Hernández et al. 2016 - %G Complexo
export const calcularMascOrtizHernandez2016 = (m, p) => {
  const { alturaCm, peso, imc, tr, sub, si, pa, perBracoRelax, perCintura } = prepararDados(m, p);
  if (peso <= 0) return 0;
  // C71 = Braço relaxado (Assumindo que seja o perímetro C71 no Excel, mas o dicionário diz C71=Braço relax e I71=Massa Sugerida)
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