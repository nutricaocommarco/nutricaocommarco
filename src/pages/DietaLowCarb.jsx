import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronLeft, HelpCircle, Activity, Clock, Shield, 
  Zap, ChevronRight, Headphones, ChevronDown, ShoppingCart, 
  Target, Flame, Coffee, Dumbbell, Brain, Check, X, AlertTriangle, 
  Video, PlayCircle, Apple, PieChart, Utensils, Scale, PlusCircle, Trash2, Droplet, Search
} from 'lucide-react';

import ArtigosRecomendados from '../components/ArtigosRecomendados';
import Newsletter from '../components/Newsletter';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

const datePublishedISO = "2026-07-15";
const dateModifiedISO = "2026-07-15";
const formattedDate = dateModifiedISO.split('-').reverse().join('/');

const artigoCapa = `${githubImgBase}Blog/LowCarb_Capa.jpg`; 

const foodDatabase = [
  { id: 1, name: "Arroz Branco (Cozido)", carbs: 28.2 },
  { id: 2, name: "Arroz Integral (Cozido)", carbs: 25.8 },
  { id: 3, name: "Feijão Carioca (Cozido)", carbs: 13.6 },
  { id: 4, name: "Batata Doce (Cozida)", carbs: 18.4 },
  { id: 5, name: "Pão Francês (1 uni = 50g)", carbs: 50.0 },
  { id: 6, name: "Ovo de Galinha Inteiro", carbs: 1.1 },
  { id: 7, name: "Ovo de Codorna Inteiro", carbs: 0.8 },
  { id: 8, name: "Peito de Frango / Coxinha", carbs: 0.0 },
  { id: 9, name: "Carne Bovina (Moída / Bife)", carbs: 0.0 },
  { id: 10, name: "Salmão / Atum Fresco", carbs: 0.0 },
  { id: 11, name: "Azeite de Oliva / Manteiga", carbs: 0.0 },
  { id: 12, name: "Abacate", carbs: 6.0 },
  { id: 13, name: "Maçã (com casca)", carbs: 16.6 },
  { id: 14, name: "Banana Prata", carbs: 26.0 },
  { id: 15, name: "Laranja (crua)", carbs: 11.5 },
  { id: 16, name: "Melancia", carbs: 8.1 },
  { id: 17, name: "Brócolis (Cozido)", carbs: 4.4 },
  { id: 18, name: "Couve Manteiga (Crua)", carbs: 4.3 },
  { id: 19, name: "Alface (Americana/Crespa)", carbs: 1.7 },
  { id: 20, name: "Tomate", carbs: 3.1 },
  { id: 21, name: "Cenoura (Crua)", carbs: 7.7 },
  { id: 22, name: "Cebola", carbs: 8.9 },
  { id: 23, name: "Amendoim Torrado", carbs: 18.7 },
  { id: 24, name: "Castanha-de-caju Torrada", carbs: 29.1 },
  { id: 25, name: "Pastel Frito de Queijo", carbs: 48.1 }
];

export default function DietaLowCarb() {
  const { pathname } = useLocation();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Estados da Calculadora com Busca
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [foodQty, setFoodQty] = useState('');
  const [plate, setPlate] = useState([]);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredFoods = foodDatabase.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setSearchTerm(food.name);
    setIsDropdownOpen(false);
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    if (!selectedFood || !foodQty) return;
    
    const carbsForQty = (selectedFood.carbs * parseFloat(foodQty)) / 100;
    setPlate([...plate, { ...selectedFood, qty: parseFloat(foodQty), totalCarbs: carbsForQty, idInstance: Date.now() }]);
    
    setFoodQty('');
    setSearchTerm('');
    setSelectedFood(null);
  };

  const handleRemoveFood = (idInstance) => {
    setPlate(plate.filter(item => item.idInstance !== idInstance));
  };

  const totalCarbsInPlate = plate.reduce((acc, curr) => acc + curr.totalCarbs, 0);
  const progressPercentage = Math.min((totalCarbsInPlate / 130) * 100, 100);

  const faqs = [
    { pergunta: "Posso comer frutas na Dieta Low Carb?", resposta: "Sim! Na dieta low carb não há exclusão total de frutas, mas prioriza-se aquelas com menor densidade de açúcar e maior teor de fibras, como morangos, mirtilos, coco, abacate e limão." },
    { pergunta: "A dieta low carb faz perder massa muscular?", resposta: "Não, desde que você consuma proteínas adequadamente. A base da dieta low carb permite uma boa ingestão de carnes, ovos e laticínios." },
    { pergunta: "Preciso contar calorias fazendo low carb?", resposta: "No início, muitas pessoas emagrecem apenas pelo aumento da saciedade. Porém, para continuar perdendo gordura, o déficit calórico ainda é importante." },
    { pergunta: "Dieta low carb dá dor de cabeça?", resposta: "Nos primeiros dias, o corpo elimina muito glicogênio e água. Aumentar a ingestão de água mineral e o sal na comida resolve rapidamente." }
  ];

  return (
    <>
      <Helmet>
        <title>O Que é Dieta Low Carb? Guia, Diferenças e Cardápio</title>
        <meta name="description" content="Aprenda o que é dieta low carb. Descubra a diferença entre low carb e cetogênica, como começar, cardápio e os mitos da gordura saturada vs insaturada." />
      </Helmet>

    <section className="py-12 md:py-24 bg-slate-50 px-4 md:px-6 min-h-screen font-sans">
      <div className="container mx-auto max-w-4xl bg-white p-6 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100">

        <Link to="/blog" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit">
          <ChevronLeft size={20} /> Voltar para o Blog
        </Link>

        <article className="prose prose-lg max-w-none text-left">
          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase italic leading-tight text-slate-900">
            O Que é Dieta Low Carb? A Diferença para a Cetogênica e Como Começar
          </h1>
          
          {/* CALCULADORA DE CARBOIDRATOS COM BUSCA */}
          <h2 id="calculadora" className="text-2xl font-black text-slate-800 uppercase italic mt-12 mb-6 border-b border-green-100 pb-2 flex items-center gap-3">
              <PieChart className="text-green-600"/> Calculadora Low Carb
          </h2>

          <div className="my-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-visible p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8 relative">
                {/* Input de Busca */}
                <div className="flex-1 bg-slate-50 p-6 rounded-3xl border border-slate-200 relative" ref={dropdownRef}>
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest mb-4">Adicionar Alimento</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ex: Melancia..." 
                      value={searchTerm} 
                      onChange={(e) => { setSearchTerm(e.target.value); setIsDropdownOpen(true); }}
                      onFocus={() => setIsDropdownOpen(true)}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl outline-none font-medium text-slate-700 pl-10"
                    />
                    <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
                  </div>

                  {/* Dropdown de Resultados */}
                  {isDropdownOpen && searchTerm && (
                    <ul className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-48 overflow-y-auto left-0">
                      {filteredFoods.length > 0 ? filteredFoods.map(food => (
                        <li key={food.id} onClick={() => handleSelectFood(food)} className="p-3 hover:bg-green-50 cursor-pointer text-sm font-bold text-slate-700 border-b border-slate-50 last:border-0">
                          {food.name}
                        </li>
                      )) : (
                        <li className="p-3 text-sm text-slate-400 italic">Nenhum alimento encontrado</li>
                      )}
                    </ul>
                  )}

                  <form onSubmit={handleAddFood} className="flex gap-4 mt-4">
                    <input 
                      type="number" 
                      placeholder="Qtd (g)" 
                      value={foodQty} 
                      onChange={(e) => setFoodQty(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl outline-none font-medium text-slate-700"
                    />
                    <button type="submit" className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition w-12 h-12 flex items-center justify-center">
                      <PlusCircle size={20} />
                    </button>
                  </form>
                </div>

                {/* Resumo do Prato */}
                <div className="flex-1 bg-slate-900 p-6 rounded-3xl border border-slate-800 text-white flex flex-col">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span>Meu Cardápio</span>
                    <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm">{totalCarbsInPlate.toFixed(1)}g</span>
                  </h3>
                  
                  <div className="flex-1 overflow-y-auto max-h-[150px] pr-2 space-y-2 mb-4">
                    {plate.map(item => (
                        <div key={item.idInstance} className="flex justify-between items-center bg-slate-800 p-3 rounded-xl border border-slate-700">
                          <p className="font-bold text-sm m-0">{item.name} ({item.qty}g)</p>
                          <div className="flex items-center gap-3">
                            <span className="font-black text-green-400 text-sm">{item.totalCarbs.toFixed(1)}g</span>
                            <button onClick={() => handleRemoveFood(item.idInstance)} className="text-red-400 hover:text-red-300">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-700">
                    <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden relative">
                      <div className={`h-full transition-all duration-500 ${totalCarbsInPlate > 130 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ... Restante do seu conteúdo abaixo ... */}
            
        </article>
      </div>
    </section>
    </>
  );
}
