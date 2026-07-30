import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// 1. Estilos do PDF (Funciona de forma semelhante ao React Native)
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#047857', // Equivalente ao text-emerald-700
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
    backgroundColor: '#F3F4F6',
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 11,
    color: '#4B5563',
  },
  value: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 10,
  }
});

// 2. Componente que desenha o Documento PDF
const RelatorioPDF = ({ avaliacao, paciente, imoVal }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Relatório Antropométrico</Text>
        <Text style={styles.subtitle}>Nutrição com Marco | Avaliação em Consultório</Text>
      </View>

      {/* Dados do Paciente */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados do Paciente</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{paciente?.nome || 'Nome do Paciente'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Data da Avaliação:</Text>
          <Text style={styles.value}>{avaliacao?.data_avaliacao || 'DD/MM/AAAA'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Estatura:</Text>
          <Text style={styles.value}>{avaliacao?.altura_paciente ? `${avaliacao.altura_paciente} cm` : '-'}</Text>
        </View>
      </View>

      {/* Composição Corporal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Composição Corporal e Índices</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Índice de Músculo Ósseo (IMO):</Text>
          {/* Recebendo o valor exato do IMO que validamos anteriormente */}
          <Text style={styles.value}>{imoVal > 0 ? imoVal.toFixed(3) : '-'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Perímetro da Coxa Média:</Text>
          <Text style={styles.value}>{avaliacao?.perimetro_coxa_media || '-'} cm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Dobra Cutânea da Coxa:</Text>
          <Text style={styles.value}>{avaliacao?.dobra_cutanea_coxa_media || '-'} mm</Text>
        </View>
        {/* Você pode ir adicionando mais Views "row" aqui para cada dado do Heath-Carter ou ISAK */}
      </View>

      {/* Rodapé fixo */}
      <View style={styles.footer}>
        <Text>Documento gerado pelo sistema EvaluaOS - Nutrição com Marco</Text>
      </View>

    </Page>
  </Document>
);

// 3. Componente do Botão (Este é o que você importa no seu arquivo principal)
const BotaoExportarPDF = ({ avaliacao, paciente, imoVal }) => {
  return (
    <PDFDownloadLink
      document={<RelatorioPDF avaliacao={avaliacao} paciente={paciente} imoVal={imoVal} />}
      fileName={`Avaliacao_${paciente?.nome?.replace(/\s+/g, '_') || 'Paciente'}.pdf`}
      className="flex items-center justify-center w-full px-4 py-3 mt-4 bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-emerald-700 transition-colors"
    >
      {({ loading }) =>
        loading ? 'Preparando documento...' : 'Baixar Relatório em PDF'
      }
    </PDFDownloadLink>
  );
};

export default BotaoExportarPDF;