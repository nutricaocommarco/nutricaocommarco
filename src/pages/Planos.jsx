import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Check, X, CalendarClock, Activity, Dumbbell } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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

  const renderMobileIcon = (value) => {
    if (value === true) return <Check size={20} strokeWidth={3} className="text-green-500 shrink-0" />;
    if (value === false) return <X size={20} strokeWidth={3} className="text-slate-200 shrink-0" />;
    return <span className="font-black text-slate-700 text-sm">{value}</span>;
  };

  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-center">
      
      <Helmet>
        <title>Planos de Acompanhamento | Nutrição com Marco</title>
        <meta name="description" content="Escolha o nível de suporte ideal para transformar a sua composição corporal com base na ciência." />
        <meta property="og:title" content="Planos de Acompanhamento | Nutrição com Marco" />
        <meta property="og:description" content="Escolha o nível de suporte ideal para transformar a sua composição corporal com base na ciência." />
        <meta property="og:url" content="https://www.nutricaocommarco.com.br/planos" />
      </Helmet>

      <Link to="/" className="mb-12 flex items-center gap-2 font-black uppercase tracking-widest text-slate-400 hover:text-green-600 transition-colors w-fit mx-auto md:mx-0">
        <ChevronLeft size={20} /> Voltar para o Início
      </Link>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 italic uppercase mb-6 leading-tight">
        Planos de <span className="text-green-600">Acompanhamento</span>
      </h1>
      <p className="text-slate-500 font-bold uppercase mb-16 tracking-widest max-w-2xl mx-auto">
        Escolha o nível de suporte ideal para transformar a sua composição corporal com base na ciência. <span className="text-green-600 block mt-2">Abertura de vagas em breve!</span>
      </p>

      {/* NÍVEL 1: AVALIAÇÃO ISAK */}
      <div className="mb-20 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden text-left">
        <div className="bg-slate-900 p-6 md:p-8 flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            <Activity size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-green-400 font-black uppercase tracking-widest text-[10px] md:text-xs">Nível 1</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic uppercase leading-tight mt-1 break-words">Avaliação Antropométrica (ISAK 1)</h2>
          </div>
        </div>
        
        {/* VISÃO DESKTOP (Tabela) */}
        <div className="hidden lg:block p-8 overflow-x-auto">
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
                <td className="p-4 text-left font-bold text-slate-800 align-middle">Preço</td>
                <td className="p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-black text-slate-800 text-sm md:text-base whitespace-nowrap">2x de R$ 109</span>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1 whitespace-nowrap">R$ 199 no Pix</span>
                  </div>
                </td>
                <td className="p-4 bg-amber-50/50">
                  <div className="flex flex-col items-center">
                    <span className="font-black text-slate-800 text-sm md:text-base whitespace-nowrap">6x de R$ 99</span>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1 whitespace-nowrap">R$ 499 no Pix</span>
                  </div>
                </td>
                <td className="p-4 bg-slate-50/50">
                  <div className="flex flex-col items-center">
                    <span className="font-black text-slate-800 text-sm md:text-base whitespace-nowrap">10x de R$ 95</span>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1 whitespace-nowrap">R$ 799 no Pix</span>
                  </div>
                </td>
                <td className="p-4 bg-yellow-50/50">
                  <div className="flex flex-col items-center">
                    <span className="font-black text-slate-800 text-sm md:text-base whitespace-nowrap">12x de R$ 90</span>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1 whitespace-nowrap">R$ 899 no Pix</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 text-left font-bold text-slate-800">Reserva</td>
                <td className="p-4"><a href="https://calendar.app.google/R9UBU3ANzW93K5wv7" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-xl font-black uppercase text-[10px] shadow-lg hover:bg-green-700 transition-all inline-block">Agendar</a></td>
                <td className="p-4 bg-amber-50/50 rounded-b-2xl"><a href="https://calendar.app.google/VHNNaQinSa5YuhJ1A" target="_blank" rel="noreferrer" className="bg-amber-600 text-white px-4 py-2 rounded-xl font-black uppercase text-[10px] shadow-lg hover:bg-amber-700 transition-all inline-block">Agendar</a></td>
                <td className="p-4 bg-slate-50/50 rounded-b-2xl"><a href="https://calendar.app.google/Fh9inQ1dQD6G6SWZ7" target="_blank" rel="noreferrer" className="bg-slate-600 text-white px-4 py-2 rounded-xl font-black uppercase text-[10px] shadow-lg hover:bg-slate-800 transition-all inline-block">Agendar</a></td>
                <td className="p-4 bg-yellow-50/50 rounded-b-2xl"><a href="https://calendar.app.google/3oktJvEmQhGJGqrm8" target="_blank" rel="noreferrer" className="bg-yellow-500 text-white px-4 py-2 rounded-xl font-black uppercase text-[10px] shadow-lg hover:bg-yellow-600 transition-all inline-block">Agendar</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* VISÃO MOBILE (Cards) */}
        <div className="lg:hidden p-4 sm:p-6 grid grid-cols-1 gap-6 bg-slate-50 border-t border-slate-100">
          
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-md flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 uppercase text-center mb-1">Avulso</h3>
            <div className="text-center mb-6 pb-6 border-b border-slate-100">
              <span className="text-2xl font-black text-slate-800 block">2x de R$ 109</span>
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest mt-1 block">R$ 199 no Pix</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">{renderMobileIcon('1')} <span className="text-sm font-medium text-slate-600">Nº de Avaliações ISAK</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Relatório Completo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Somatotipo + Somatocarta</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon('Básico')} <span className="text-sm font-medium text-slate-600">Comparativo Evolutivo</span></li>
              <li className="flex items-center gap-3 opacity-50">{renderMobileIcon(false)} <span className="text-sm font-medium text-slate-400 line-through">Vídeo de Interpretação</span></li>
            </ul>
            <a href="https://calendar.app.google/R9UBU3ANzW93K5wv7" target="_blank" rel="noreferrer" className="w-full bg-slate-800 text-white text-center py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 shadow-lg">Agendar Avulso</a>
          </div>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 shadow-md flex flex-col">
            <h3 className="text-2xl font-black text-amber-800 uppercase text-center mb-1">Bronze</h3>
            <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest block text-center mb-2">6 Meses</span>
            <div className="text-center mb-6 pb-6 border-b border-amber-200/50">
              <span className="text-2xl font-black text-slate-800 block">6x de R$ 99</span>
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest mt-1 block">R$ 499 no Pix</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">{renderMobileIcon('3')} <span className="text-sm font-medium text-slate-600">Nº de Avaliações ISAK</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Relatório Completo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Somatotipo + Somatocarta</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Comparativo Evolutivo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Vídeo de Interpretação</span></li>
            </ul>
            <a href="https://calendar.app.google/VHNNaQinSa5YuhJ1A" target="_blank" rel="noreferrer" className="w-full bg-amber-600 text-white text-center py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-amber-700 shadow-lg">Agendar Bronze</a>
          </div>

          <div className="bg-slate-100 border-2 border-slate-300 rounded-3xl p-6 shadow-md flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-[-35px] bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest py-1 px-10 rotate-45 shadow-sm">Mais Vendido</div>
            <h3 className="text-2xl font-black text-slate-700 uppercase text-center mb-1">Prata</h3>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block text-center mb-2">10 Meses</span>
            <div className="text-center mb-6 pb-6 border-b border-slate-200">
              <span className="text-2xl font-black text-slate-800 block">10x de R$ 95</span>
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest mt-1 block">R$ 799 no Pix</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">{renderMobileIcon('5')} <span className="text-sm font-medium text-slate-600">Nº de Avaliações ISAK</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Relatório Completo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Somatotipo + Somatocarta</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Comparativo Evolutivo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Vídeo de Interpretação</span></li>
            </ul>
            <a href="https://calendar.app.google/Fh9inQ1dQD6G6SWZ7" target="_blank" rel="noreferrer" className="w-full bg-slate-600 text-white text-center py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-slate-700 shadow-lg">Agendar Prata</a>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-3xl p-6 shadow-md flex flex-col">
            <h3 className="text-2xl font-black text-yellow-600 uppercase text-center mb-1">Ouro</h3>
            <span className="text-[10px] text-yellow-600 font-bold uppercase tracking-widest block text-center mb-2">12 Meses</span>
            <div className="text-center mb-6 pb-6 border-b border-yellow-200">
              <span className="text-2xl font-black text-slate-800 block">12x de R$ 90</span>
              <span className="text-xs font-bold text-green-600 uppercase tracking-widest mt-1 block">R$ 899 no Pix</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">{renderMobileIcon('6')} <span className="text-sm font-medium text-slate-600">Nº de Avaliações ISAK</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Relatório Completo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Somatotipo + Somatocarta</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Comparativo Evolutivo</span></li>
              <li className="flex items-center gap-3">{renderMobileIcon(true)} <span className="text-sm font-medium text-slate-600">Vídeo de Interpretação</span></li>
            </ul>
            <a href="https://calendar.app.google/3oktJvEmQhGJGqrm8" target="_blank" rel="noreferrer" className="w-full bg-yellow-500 text-white text-center py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-yellow-600 shadow-lg">Agendar Ouro</a>
          </div>
        </div>
      </div>

      {/* NÍVEL 2: ATENDIMENTO ONLINE */}
      <div className="mb-20 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden text-left">
        <div className="bg-slate-900 p-6 md:p-8 flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            <CalendarClock size={24} className="md:w-7 md:h-7" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-green-400 font-black uppercase tracking-widest text-[10px] md:text-xs">Nível 2</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic uppercase leading-tight mt-1 break-words">Atendimento Nutricional Online</h2>
          </div>
        </div>
        
        {/* VISÃO DESKTOP (Tabela) */}
        <div className="hidden lg:block p-8 overflow-x-auto">
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

        {/* VISÃO MOBILE (Cards) */}
        <div className="lg:hidden p-4 sm:p-6 grid grid-cols-1 gap-6 bg-slate-50 border-t border-slate-100">
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-md flex flex-col items-center justify-center py-12">
            <CalendarClock size={48} className="text-slate-300 mb-4" />
            <h3 className="text-xl font-black text-slate-800 uppercase text-center mb-2">Vagas Online</h3>
            <p className="text-slate-500 font-bold text-sm text-center">Os planos para atendimento 100% online serão liberados em breve. Fique de olho no Instagram!</p>
          </div>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic uppercase leading-tight mt-1 break-words">Atendimento Presencial Premium</h2>
          </div>
        </div>
        
        {/* VISÃO DESKTOP (Tabela) */}
        <div className="hidden lg:block p-8 overflow-x-auto">
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
                <td className="p-4 text-left">Kit Exclusivo</td>
                <td className="p-4">{renderIcon(false)}</td>
                <td className="p-4 bg-amber-50/50">{renderIcon(false)}</td>
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

        {/* VISÃO MOBILE (Cards) */}
        <div className="lg:hidden p-4 sm:p-6 grid grid-cols-1 gap-6 bg-slate-50 border-t border-slate-100">
          <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 shadow-md flex flex-col items-center justify-center py-12">
            <Dumbbell size={48} className="text-slate-300 mb-4" />
            <h3 className="text-xl font-black text-slate-800 uppercase text-center mb-2">Vagas Presenciais</h3>
            <p className="text-slate-500 font-bold text-sm text-center">Os planos para atendimento e avaliação no consultório serão liberados em breve. Fique de olho no Instagram!</p>
          </div>
        </div>
      </div>

    </section>
  );
}
