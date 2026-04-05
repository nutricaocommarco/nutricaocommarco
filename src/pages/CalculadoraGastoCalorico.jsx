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
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Idade (anos)</label>
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="Ex: 30" required className="w-full p-3 md:p-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white font-medium text-slate-700 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Peso (kg)</label>
                    <input type="number" step="0.1" name="weight" value={formData.weight} onChange={handleInputChange} placeholder="Ex: 75.5" required className="w-full p-3 md:p-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white font-medium text-slate-700 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Altura (cm)</label>
                    <input type="number" name="height" value={formData.height} onChange={handleInputChange} placeholder="Ex: 175" required className="w-full p-3 md:p-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white font-medium text-slate-700 transition-all outline-none" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs md:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Percentual de Gordura (%) <span className="text-slate-400 font-normal normal-case block sm:inline mt-1 sm:mt-0">- Opcional, aumenta a precisão</span>
                    </label>
                    <input type="number" name="bf" value={formData.bf} onChange={handleInputChange} placeholder="Ex: 15" className="w-full p-3 md:p-4 border-2 border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white font-medium text-slate-700 transition-all outline-none" />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase italic mb-5 md:mb-6 flex items-center gap-2">
                  <Activity className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> 2. Seu Perfil Físico
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    {id: 'average', label: 'Padrão Geral'},
                    {id: 'obese', label: 'Sobrepeso / Obesidade'},
                    {id: 'bodybuilder', label: 'Fisiculturista'},
                    {id: 'endurance', label: 'Atleta Endurance'}
                  ].map(item => (
                    <label key={item.id} className={`p-3 md:p-4 border-2 rounded-xl md:rounded-2xl cursor-pointer transition-all flex items-center justify-center text-center ${formData.bodyType === item.id ? 'border-green-600 bg-green-50 text-green-800 shadow-sm' : 'border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'}`}>
                      <input type="radio" name="bodyType" value={item.id} checked={formData.bodyType === item.id} onChange={handleInputChange} className="hidden" />
                      <span className="font-bold text-sm md:text-base">{item.label}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase italic mb-5 md:mb-6 flex items-center gap-2">
                  <HeartPulse className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> 3. Rotina e Movimento
                </h3>
                
                <div className="space-y-6 md:space-y-8 bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm">
                  <div>
                    <label className="block font-bold text-slate-800 mb-3 md:mb-4">Trabalho ou rotina principal:</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                      {[{id: 'sedentary', label: 'Sentado a maior parte do dia'},
                        {id: 'standing', label: 'Em pé ou caminhando'},
                        {id: 'physical', label: 'Trabalho físico pesado'}].map(item => (
                        <label key={item.id} className={`p-3 md:p-4 border-2 rounded-xl md:rounded-2xl cursor-pointer transition-all ${formData.routine === item.id ? 'border-green-600 bg-green-50 text-green-800' : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-700'}`}>
                          <input type="radio" name="routine" value={item.id} checked={formData.routine === item.id} onChange={handleInputChange} className="hidden" />
                          <span className="text-sm font-bold block text-center">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-3 md:mb-4">Treinos físicos semanais:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      {[{id: 'none', label: 'Não treino'},
                        {id: 'light', label: 'Leve (1 a 3h)'},
                        {id: 'moderate', label: 'Moderado (4 a 5h)'},
                        {id: 'intense', label: 'Intenso (6h+)'}].map(item => (
                        <label key={item.id} className={`p-3 md:p-4 border-2 rounded-xl md:rounded-2xl cursor-pointer transition-all ${formData.exercise === item.id ? 'border-green-600 bg-green-50 text-green-800' : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-700'}`}>
                          <input type="radio" name="exercise" value={item.id} checked={formData.exercise === item.id} onChange={handleInputChange} className="hidden" />
                          <span className="text-sm font-bold block text-center">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase italic mb-5 md:mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> 4. Seleção da Fórmula
                </h3>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6 md:mb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="calculationMode" value="auto" checked={formData.calculationMode === 'auto'} onChange={handleInputChange} className="w-5 h-5 text-green-600 focus:ring-green-500 accent-green-600 flex-shrink-0" />
                    <span className="font-bold text-slate-800">Modo Automático</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="calculationMode" value="manual" checked={formData.calculationMode === 'manual'} onChange={handleInputChange} className="w-5 h-5 text-green-600 focus:ring-green-500 accent-green-600 flex-shrink-0" />
                    <span className="font-bold text-slate-800">Modo Manual</span>
                  </label>
                </div>

                {formData.calculationMode === 'auto' ? (
                  <div className="bg-green-50 text-green-900 p-5 md:p-6 rounded-2xl border border-green-200 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 sm:mt-1 text-green-600" />
                    <p className="text-sm md:text-base font-medium leading-relaxed">
                      <strong>Sistema Inteligente Ativado.</strong> O sistema vai analisar o seu perfil físico, se você preencheu seu percentual de gordura e o seu nível de treino para selecionar matematicamente a equação mais precisa para o seu corpo no momento.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {[
                        { id: 'mifflin', name: 'Mifflin-St Jeor', desc: 'A mais recomendada hoje para a população em geral e pessoas com sobrepeso.' },
                        { id: 'harris', name: 'Harris-Benedict', desc: 'A fórmula mais antiga e famosa, boa para estimativas gerais.' },
                        { id: 'cunningham', name: 'Cunningham', desc: 'Excelente para atletas. Utiliza a massa muscular livre de gordura.' },
                        { id: 'tinsley', name: 'Tinsley', desc: 'Ótima para praticantes de musculação e endurance.' }
                      ].map(formula => (
                        <label key={formula.id} className={`p-4 md:p-6 border-2 rounded-xl md:rounded-2xl cursor-pointer flex flex-col gap-2 transition-all ${formData.manualFormula === formula.id ? 'border-green-600 bg-green-50 shadow-md' : 'border-slate-200 bg-slate-50 hover:border-green-300'}`}>
                          <div className="flex items-center gap-3">
                            <input type="radio" name="manualFormula" value={formula.id} checked={formData.manualFormula === formula.id} onChange={handleInputChange} className="w-5 h-5 text-green-600 focus:ring-green-500 accent-green-600 flex-shrink-0" />
                            <span className="font-black text-slate-900 text-base md:text-lg uppercase italic">{formula.name}</span>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 pl-8 font-medium leading-relaxed">{formula.desc}</p>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              <button type="submit" className="w-full bg-slate-900 hover:bg-green-600 text-white font-black py-5 md:py-6 px-6 md:px-8 rounded-[1.5rem] md:rounded-full shadow-xl transform transition-all hover:-translate-y-1 hover:shadow-2xl text-lg md:text-xl uppercase tracking-widest flex justify-center items-center gap-2 md:gap-3">
                Calcular <span className="hidden sm:inline">Meu Gasto Calórico</span>
              </button>
            </form>

            {results && (
              <div className="mt-12 md:mt-16 bg-slate-900 text-white p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] animate-in fade-in slide-in-from-bottom-8 duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
                
                <h2 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-center uppercase italic flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                  <CheckCircle2 className="text-green-500 w-6 h-6 md:w-8 md:h-8" /> Seus Resultados
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                  <div className="bg-slate-800/50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-700 text-center flex flex-col justify-center">
                    <h3 className="text-slate-400 font-bold mb-3 md:mb-4 uppercase tracking-widest text-[10px] md:text-xs">Taxa Metabólica Basal (TMB)</h3>
                    <div className="text-5xl md:text-6xl font-black text-white mb-2">{results.bmr}</div>
                    <span className="text-base md:text-lg text-slate-500 font-medium mb-4 md:mb-6">kcal / dia</span>
                    <p className="text-xs md:text-sm text-slate-400 text-left pt-4 md:pt-6 border-t border-slate-700 font-medium leading-relaxed">
                      A energia exata que o seu corpo queima parado em repouso absoluto, apenas para manter os órgãos vitais funcionando.
                    </p>
                  </div>

                  <div className="bg-green-900/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-green-800 text-center flex flex-col justify-center relative mt-4 md:mt-0">
                    <span className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-[10px] md:text-xs font-black px-4 md:px-6 py-1.5 md:py-2 rounded-full tracking-widest uppercase shadow-lg whitespace-nowrap">Meta Principal</span>
                    <h3 className="text-green-300 font-bold mb-3 md:mb-4 uppercase tracking-widest text-[10px] md:text-xs mt-3 md:mt-4">Gasto Energético Total (GET)</h3>
                    <div className="text-5xl md:text-6xl font-black text-green-400 mb-2">{results.tdee}</div>
                    <span className="text-base md:text-lg text-green-600 font-medium mb-4 md:mb-6">kcal / dia</span>
                    <p className="text-xs md:text-sm text-green-200/80 text-left pt-4 md:pt-6 border-t border-green-800 font-medium leading-relaxed">
                      Sua queima total estimada para o dia inteiro. Consuma esse valor para manter o peso atual.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-800 p-5 md:p-6 rounded-2xl text-xs md:text-sm border border-slate-700 gap-4 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                    <Info className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-slate-300">Equação matemática utilizada: <strong className="text-white ml-1 block sm:inline">{results.formulaUsed}</strong></span>
                  </div>
                  <div className="bg-slate-900 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-green-400 font-black text-[10px] md:text-xs uppercase tracking-widest border border-slate-700 flex-shrink-0">
                    Fator: x{results.activityFactor}
                  </div>
                </div>

                <div className="mt-6 md:mt-8 bg-slate-800/80 border-t-4 sm:border-t-0 sm:border-l-4 border-green-500 p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-5 text-center sm:text-left">
                  <AlertTriangle className="w-8 h-8 text-green-500 flex-shrink-0 sm:mt-1" />
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    <strong className="text-white block mb-1 md:mb-2 text-sm md:text-base uppercase tracking-wider">Atenção Profissional:</strong> 
                    Esta calculadora matemática entrega uma estimativa científica confiável. No entanto, para um plano alimentar de excelência, focado nos seus resultados reais e totalmente adaptado à sua biologia única e exames bioquímicos, é indispensável procurar a orientação e o acompanhamento de um nutricionista.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
