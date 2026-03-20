import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Check, X, CalendarClock, Activity, Dumbbell } from 'lucide-react';

export default function Planos() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const renderIcon = (value) => {
    if (value === true) return <Check size={24} strokeWidth={3} className="text-green-500 mx-auto" />;
    if (value === false) return <X size={24} strokeWidth={3} className="text-slate-200 mx-auto" />;
    return <span className="font-black text-slate-700">{value}</span>;
  };

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      
      <Link to="/" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit mx-auto md:mx-0">
        <ChevronLeft size={20} /> Voltar para o Início
      </Link>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 italic uppercase mb-6 leading-tight">
        Planos de <span className="text-green-600">Acompanhamento</span>
      </h1>
      <p className="text-slate-500 font-bold uppercase mb-16 tracking-widest max-w-2xl mx-auto">
        Escolha o nível de suporte ideal para transformar a sua composição corporal com base na ciência. <span className="text-green-600 block mt-2">Abertura de vagas em breve!</span>
      </p>

      {/* NÍVEL 1: ATENDIMENTO ONLINE */}
      <div className="mb-20 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden text-left">
        <div className="bg-slate-900 p-6 md:p-8 flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            <CalendarClock size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-green-400 font-black uppercase tracking-widest text-[10px] md:text-xs">Nível 1</span>
            {/* TÍTULO AJUSTADO PARA MOBILE */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic uppercase leading-tight mt-1 break-words">Atendimento Nutricional Online</h2>
          </div>
        </div>
        
        <div className="p-8 overflow-x-auto">
          <table className="w-full text-center border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="p-4 text-left font-black text-slate-400 uppercase tracking-widest text-sm w-1/3">O que está incluso?</th>
                <th className="p-4 font-black text-slate-800 uppercase text-lg">Avulso</th>
                <th className="p-4 font-black text-amber-700 uppercase text-lg bg-amber-50 rounded-t-2xl">Bronze <span className="block text-[10px] text-amber-600">3 Meses</span></th>
                <th className="p-4 font-black text-slate-500 uppercase text-lg bg-slate-50 rounded-t-2xl">Prata <span className="block text-[10px] text-slate-400">6 Meses</span></th>
                <th className="p-4 font-black text-yellow-600 uppercase text-lg bg-yellow-50 rounded-t-2xl">Ouro <span className="block text-[10px] text-yellow-500">12 Meses</span></th>
              </tr>
            </thead>
            <tbody className="text-slate-600 font-medium">
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Consultas Online</td>
                <td className="p-4">{renderIcon('1')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('6')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('12')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Planos Alimentares</td>
                <td className="p-4">{renderIcon('1')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('1')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('2')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('4')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Suporte via WhatsApp</td>
                <td className="p-4">{renderIcon('30 dias')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Acesso ao App de Nutrição</td>
                <td className="p-4">{renderIcon('30 dias')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Ajustes Conforme Evolução</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Feedback Semanal</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Kit Exclusivo em Casa</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(false)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(false)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left font-bold text-slate-800">Preço</td>
                <td className="p-4">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-amber-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-slate-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-yellow-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* NÍVEL 2: AVALIAÇÃO ISAK */}
      <div className="mb-20 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden text-left">
        <div className="bg-slate-900 p-6 md:p-8 flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            <Activity size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-green-400 font-black uppercase tracking-widest text-[10px] md:text-xs">Nível 2</span>
            {/* TÍTULO AJUSTADO PARA MOBILE */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic uppercase leading-tight mt-1 break-words">Avaliação Antropométrica (ISAK 1)</h2>
          </div>
        </div>
        
        <div className="p-8 overflow-x-auto">
          <table className="w-full text-center border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="p-4 text-left font-black text-slate-400 uppercase tracking-widest text-sm w-1/3">O que está incluso?</th>
                <th className="p-4 font-black text-slate-800 uppercase text-lg">Avulso</th>
                <th className="p-4 font-black text-amber-700 uppercase text-lg bg-amber-50 rounded-t-2xl">Bronze <span className="block text-[10px] text-amber-600">6 Meses</span></th>
                <th className="p-4 font-black text-slate-500 uppercase text-lg bg-slate-50 rounded-t-2xl">Prata <span className="block text-[10px] text-slate-400">10 Meses</span></th>
                <th className="p-4 font-black text-yellow-600 uppercase text-lg bg-yellow-50 rounded-t-2xl">Ouro <span className="block text-[10px] text-yellow-500">12 Meses</span></th>
              </tr>
            </thead>
            <tbody className="text-slate-600 font-medium">
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Nº de Avaliações ISAK</td>
                <td className="p-4">{renderIcon('1')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('5')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('6')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Relatório Completo</td>
                <td className="p-4">{renderIcon(true)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Somatotipo + Somatocarta</td>
                <td className="p-4">{renderIcon(true)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Comparativo Evolutivo</td>
                <td className="p-4">{renderIcon('Básico')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Vídeo de Interpretação</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left font-bold text-slate-800">Preço</td>
                <td className="p-4">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-amber-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-slate-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-yellow-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* NÍVEL 3: PRESENCIAL PREMIUM */}
      <div className="mb-20 bg-white rounded-[3rem] shadow-2xl border border-green-600 overflow-hidden text-left relative">
        <div className="absolute top-6 right-6 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
          Experiência Completa
        </div>
        
        <div className="bg-slate-900 p-6 md:p-8 flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            <Dumbbell size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-green-400 font-black uppercase tracking-widest text-[10px] md:text-xs">Nível 3</span>
            {/* TÍTULO AJUSTADO PARA MOBILE */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic uppercase leading-tight mt-1 break-words">Atendimento Presencial Premium</h2>
          </div>
        </div>
        
        <div className="p-8 overflow-x-auto">
          <table className="w-full text-center border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="p-4 text-left font-black text-slate-400 uppercase tracking-widest text-sm w-1/3">O que está incluso?</th>
                <th className="p-4 font-black text-slate-800 uppercase text-lg">Avulso</th>
                <th className="p-4 font-black text-amber-700 uppercase text-lg bg-amber-50 rounded-t-2xl">Bronze <span className="block text-[10px] text-amber-600">4 Meses</span></th>
                <th className="p-4 font-black text-slate-500 uppercase text-lg bg-slate-50 rounded-t-2xl">Prata <span className="block text-[10px] text-slate-400">6 Meses</span></th>
                <th className="p-4 font-black text-yellow-600 uppercase text-lg bg-yellow-50 rounded-t-2xl">Ouro <span className="block text-[10px] text-yellow-500">12 Meses</span></th>
              </tr>
            </thead>
            <tbody className="text-slate-600 font-medium">
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Consultas Presenciais</td>
                <td className="p-4">{renderIcon('1')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('2')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('6')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Consultas Online</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('2')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('6')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Avaliações ISAK Nível 1</td>
                <td className="p-4">{renderIcon('1')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('2')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('6')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Planos Alimentares</td>
                <td className="p-4">{renderIcon('1')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('2')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('6')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Vídeos de Interpretação</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon('2')}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon('3')}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon('6')}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Relatórios & Somatotipo</td>
                <td className="p-4">{renderIcon(true)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Ajustes & Feedback Semanal</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Suporte & App</td>
                <td className="p-4">{renderIcon('30 dias')}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left">Kit Exclusivo em Casa</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(false)}</td>
                <td className="p-4 bg-slate-50/50">{renderIcon(true)}</td>
                <td className="p-4 bg-yellow-50/50">{renderIcon(true)}</td>
              </tr>
              {/* !!! NOVA LINHA: PREÇO !!! */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left font-bold text-slate-800">Preço</td>
                <td className="p-4">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-amber-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-slate-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
                <td className="p-4 bg-yellow-50/50 rounded-b-2xl">{renderIcon('Em Breve')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}


