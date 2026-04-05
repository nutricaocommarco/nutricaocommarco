import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calculator, Activity, Info, CheckCircle2, User, HeartPulse, AlertTriangle } from 'lucide-react';

export default function CalculadoraGastoCalorico() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [formData, setFormData] = useState({
    gender: 'M',
    age: '',
    weight: '',
    height: '',
    bf: '',
    calculationMode: 'auto',
    manualFormula: 'mifflin',
    routine: 'sedentary',
    exercise: 'none',
    bodyType: 'average'
  });

  const [results, setResults] = useState(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Calculadora de Gasto Calórico",
        "url": "https://nutricaocommarco.com.br/calculadora-de-gasto-calorico",
        "description": "Ferramenta inteligente para calcular o gasto energético total (GET) e a taxa metabólica basal (TMB) de forma precisa e adaptada ao seu perfil físico.",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "All",
        "author": {
          "@type": "Person",
          "name": "Marco Aurélio Jr."
        }
      },
      {
        "@type": "Article",
        "headline": "A Importância de Usar uma Calculadora de Gasto Calórico",
        "author": {
          "@type": "Person",
          "name": "Marco Aurélio Jr.",
          "url": "https://nutricaocommarco.com.br"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Nutrição com Marco",
          "logo": {
            "@type": "ImageObject",
            "url": "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/Pingus.png"
          }
        }
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateActivityFactor = () => {
    let base = 1.1;
    if (formData.routine === 'sedentary') base = 1.15;
    if (formData.routine === 'standing') base = 1.30;
    if (formData.routine === 'physical') base = 1.50;

    let exerciseBonus = 0;
    if (formData.exercise === 'light') exerciseBonus = 0.15;
    if (formData.exercise === 'moderate') exerciseBonus = 0.25;
    if (formData.exercise === 'intense') exerciseBonus = 0.45;

    return base + exerciseBonus;
  };

  const determineBestFormula = (hasBF, bodyType) => {
    if (bodyType === 'obese') return 'mifflin';
    if (bodyType === 'bodybuilder' && hasBF) return 'cunningham';
    if (bodyType === 'bodybuilder' && !hasBF) return 'tinsley';
    if (bodyType === 'endurance') return 'tinsley';
    return 'mifflin'; 
  };

  const calculateCalories = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseInt(formData.age);
    const bf = parseFloat(formData.bf);
    
    if (!weight || !height || !age) return;

    let lbm = weight;
    let hasBF = false;
    
    if (bf && bf > 0) {
      lbm = weight * (1 - (bf / 100));
      hasBF = true;
    }

    let bmr = 0;
    let selectedFormulaName = '';

    let activeFormula = formData.calculationMode === 'manual' 
      ? formData.manualFormula 
      : determineBestFormula(hasBF, formData.bodyType);

    switch (activeFormula) {
      case 'mifflin':
        bmr = formData.gender === 'M' 
          ? (10 * weight) + (6.25 * height) - (5 * age) + 5
          : (10 * weight) + (6.25 * height) - (5 * age) - 161;
        selectedFormulaName = 'Mifflin-St Jeor';
        break;
      case 'harris':
        bmr = formData.gender === 'M'
          ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
          : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        selectedFormulaName = 'Harris-Benedict';
        break;
      case 'cunningham':
        bmr = 500 + (22 * lbm);
        selectedFormulaName = 'Cunningham';
        break;
      case 'tinsley':
        if (hasBF) {
          bmr = 25.9 * lbm + 284;
        } else {
          bmr = 24.8 * weight + 10;
        }
        selectedFormulaName = 'Tinsley';
        break;
      default:
        bmr = 0;
    }

    const activityFactor = calculateActivityFactor();
    const tdee = bmr * activityFactor;

    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      activityFactor: activityFactor.toFixed(2),
      formulaUsed: selectedFormulaName
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateCalories();
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <section className="py-16 md:py-24 bg-slate-50 px-4 sm:px-6 container mx-auto max-w-5xl text-left">
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col gap-8 md:gap-12">

          <article className="prose prose-base md:prose-lg max-w-none text-left w-full">
            <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 md:mb-6">Nutrição • Metabolismo • Precisão</span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-10 uppercase italic leading-tight text-slate-900">
              A Importância de Usar uma Calculadora de <span className="text-green-600">Gasto Calórico</span>
            </h1>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              <p>Se você está se perguntando como calcular meu gasto calórico diário de forma precisa, a resposta mais eficiente e segura é utilizar uma calculadora de gasto calórico desenvolvida com base científica. Entender exatamente a quantidade de energia que o seu corpo consome todos os dias é o primeiro passo absoluto para qualquer objetivo estético ou de saúde, seja ele emagrecer de forma sustentável, manter o peso atual ou focar no ganho de massa muscular. Muitas pessoas tentam adivinhar a sua taxa metabólica basal ou o seu gasto energético total e acabam frustradas com a falta de resultados práticos na balança ou no espelho por estarem consumindo a quantidade errada de nutrientes.</p>
              
              <p>Nossa ferramenta gratuita foi desenhada para acabar de vez com essas dúvidas e facilitar a sua vida, agindo como uma verdadeira calculadora TDEE inteligente que se adapta à sua realidade biológica. Ao invés de exigir que você escolha multiplicadores confusos em tabelas genéricas, o nosso sistema cruza os seus dados básicos com o seu nível real de atividade física diária e o seu perfil corporal específico. Com essas informações em mãos, a inteligência da plataforma seleciona automaticamente a equação matemática mais adequada para o seu biotipo, podendo utilizar a fórmula de Mifflin-St Jeor para a população geral e pessoas com sobrepeso, a clássica equação de Harris-Benedict, ou até mesmo os métodos avançados de Cunningham e Tinsley, que são perfeitos para atletas de musculação e fisiculturistas que buscam o máximo de precisão na dieta.</p>
              
              <p>Descobrir o seu déficit calórico exato para secar ou a sua necessidade energética ideal para hipertrofia nunca foi tão simples, rápido e acessível. Basta preencher os seus dados básicos no formulário logo abaixo, informar como é a sua rotina de trabalho e a frequência dos seus treinos semanais, e deixar que o sistema faça toda a matemática complexa por você em questão de segundos. Aproveite esta ferramenta poderosa para estruturar a sua alimentação com inteligência e descubra agora mesmo os números exatos que vão guiar a transformação do seu corpo.</p>
            </div>
          </article>

          <div className="bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] p-5 sm:p-8 md:p-12 border border-slate-200 shadow-inner mt-2 md:mt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-8 md:mb-10 border-b border-green-200 pb-4 flex items-center gap-3">
              <Calculator className="text-green-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/> Ferramenta de Cálculo
            </h2>

            <form onSubmit={handleCalculate} className="space-y-10 md:space-y-12">
              
              <section>
                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase italic mb-5 md:mb-6 flex items-center gap-2">
                  <User className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> 1. Sobre Você
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Sexo</label>
                    <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full p-3 md:p-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white font-medium text-slate-700 transition-all outline-none">
                      <option value="
