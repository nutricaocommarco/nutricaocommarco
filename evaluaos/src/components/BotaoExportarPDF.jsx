import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// --- ESTILOS DO PDF ---
const styles = StyleSheet.create({
  page: { padding: 35, backgroundColor: '#FFFFFF', fontFamily: 'Helvetica' },
  header: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#E5E7EB', paddingBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#047857' },
  subtitle: { fontSize: 10, color: '#6B7280', marginTop: 4 },
  section: { marginBottom: 12 },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', color: '#374151', backgroundColor: '#F3F4F6', padding: 6, marginBottom: 6, borderRadius: 3 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  item: { width: '48%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#F9FAFB', paddingVertical: 4 },
  itemFull: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#F9FAFB', paddingVertical: 4 },
  label: { fontSize: 9, color: '#4B5563' },
  value: { fontSize: 9, fontWeight: 'bold', color: '#111827' },
  footer: { position: 'absolute', bottom: 25, left: 35, right: 35, fontSize: 8, color: '#9CA3AF', textAlign: 'center', borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingTop: 10 }
});

// --- COMPONENTE DE LINHA ---
const Item = ({ label, value, unit, fullWidth }) => {
  const displayValue = value !== undefined && value !== null && value !== '' && !Number.isNaN(value) ? value : '-';
  return (
    <View style={fullWidth ? styles.itemFull : styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {typeof displayValue === 'number' && displayValue % 1 !== 0 ? displayValue.toFixed(2) : displayValue} {unit && displayValue !== '-' ? unit : ''}
      </Text>
    </View>
  );
};

// --- ESTRUTURA DO DOCUMENTO ---
const RelatorioPDF = ({ dados, idade, statusCintura, iamVal, imoVal }) => {
  const aval = dados?.avaliacoes || {};
  const pac = dados?.pacientes || {};

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Laudo Antropométrico</Text>
          <Text style={styles.subtitle}>Nutrição com Marco | Avaliação em Consultório</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil do Paciente</Text>
          <View style={styles.grid}>
            <Item label="Nome:" value={pac.nome_completo} fullWidth />
            <Item label="Data da Avaliação:" value={formatDate(aval.data_avaliacao)} />
            <Item label="Idade Calculada:" value={idade} unit="anos" />
            <Item label="Sexo:" value={pac.sexo === 'M' ? 'Masculino' : pac.sexo === 'F' ? 'Feminino' : '-'} />
            <Item label="Etnia:" value={pac.etnia} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Medidas Básicas & Composição Corporal</Text>
          <View style={styles.grid}>
            <Item label="Peso:" value={aval.peso_paciente} unit="kg" />
            <Item label="Estatura:" value={aval.altura_paciente} unit="cm" />
            <Item label="IMC:" value={dados.imc} unit="kg/m²" />
            <Item label="% Gordura:" value={aval.percentual_de_gordura} unit="%" />
            <Item label="Massa Gorda:" value={dados.massa_gorda} unit="kg" />
            <Item label="Massa Magra:" value={dados.massa_magra} unit="kg" />
            <Item label="Massa Muscular:" value={dados.massa_muscular} unit="kg" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Dobras Cutâneas</Text>
          <View style={styles.grid}>
            <Item label="Tríceps:" value={aval.dobra_cutanea_triceps} unit="mm" />
            <Item label="Subescapular:" value={aval.dobra_cutanea_subescapular} unit="mm" />
            <Item label="Bíceps:" value={aval.dobra_cutanea_biceps} unit="mm" />
            <Item label="Crista Ilíaca:" value={aval.dobra_cutanea_crista_iliaca} unit="mm" />
            <Item label="Supraespinhal:" value={aval.dobra_cutanea_supraespinhal} unit="mm" />
            <Item label="Abdominal:" value={aval.dobra_cutanea_abdominal} unit="mm" />
            <Item label="Coxa Média:" value={aval.dobra_cutanea_coxa_media} unit="mm" />
            <Item label="Panturrilha:" value={aval.dobra_cutanea_panturrilha} unit="mm" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Perímetros & Diâmetros</Text>
          <View style={styles.grid}>
            <Item label="Braço Relaxado:" value={aval.perimetro_braco_relaxado} unit="cm" />
            <Item label="Braço Contraído:" value={aval.perimetro_braco_contraido} unit="cm" />
            <Item label="Cintura:" value={aval.perimetro_cintura} unit="cm" />
            <Item label="Abdominal:" value={aval.perimetro_abdominal} unit="cm" />
            <Item label="Quadril:" value={aval.perimetro_quadril} unit="cm" />
            <Item label="Coxa Média:" value={aval.perimetro_coxa_media} unit="cm" />
            <Item label="Panturrilha:" value={aval.perimetro_panturrilha} unit="cm" />
            <Item label="Diâmetro Fêmur:" value={aval.diametro_femur} unit="cm" />
            <Item label="Diâmetro Úmero:" value={aval.diametro_umero} unit="cm" />
            <Item label="Diâmetro Punho:" value={aval.diametro_punho} unit="cm" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Saúde, Somatotipo & Índices Especiais</Text>
          <View style={styles.grid}>
            <Item label="Relação Cintura-Quadril:" value={dados.relacao_cintura_quadril} />
            <Item label="Relação Cintura-Estatura:" value={dados.relacao_cintura_estatura} />
            <Item label="Status da Cintura:" value={statusCintura} />
            <Item label="Soma 6 Dobras:" value={dados.somatorio_6_dobras} unit="mm" />
            <Item label="Soma 8 Dobras:" value={dados.somatorio_8_dobras} unit="mm" />
            <Item label="Índice Adiposo Muscular (IAM):" value={iamVal > 0 ? Number(iamVal.toFixed(2)) : '-'} />
            <Item label="Índice de Músculo Ósseo (IMO):" value={imoVal > 0 ? Number(imoVal.toFixed(3)) : '-'} />
            <Item label="Endomorfia:" value={dados.somatotipo_endomorfia} />
            <Item label="Mesomorfia:" value={dados.somatotipo_mesomorfia} />
            <Item label="Ectomorfia:" value={dados.somatotipo_ectomorfia} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Documento gerado pelo sistema EvaluaOS - Nutrição com Marco | {formatDate(aval.data_avaliacao)}</Text>
        </View>

      </Page>
    </Document>
  );
};

// --- BOTÃO ---
const BotaoExportarPDF = ({ dados, idade, statusCintura, iamVal, imoVal }) => {
  const pac = dados?.pacientes || {};
  const nomeArquivo = pac.nome_completo ? pac.nome_completo.replace(/\s+/g, '_') : 'Paciente';
  
  return (
    <PDFDownloadLink
      document={<RelatorioPDF dados={dados} idade={idade} statusCintura={statusCintura} iamVal={iamVal} imoVal={imoVal} />}
      fileName={`Laudo_${nomeArquivo}.pdf`}
      className="flex items-center justify-center w-full px-4 py-3 mt-4 bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-emerald-700 transition-colors"
    >
      {({ loading }) => (loading ? 'Preparando documento completo...' : 'Baixar Laudo Completo em PDF')}
    </PDFDownloadLink>
  );
};

export default BotaoExportarPDF;