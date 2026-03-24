import React, { useEffect } from 'react';
import { CheckCircle, Home, ArrowRight, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function InscricaoConfirmada() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inscrição Confirmada! | Nutrição com Marco</title>
        <meta name="description" content="Tudo pronto! Você agora faz parte da nossa comunidade de nutrição." />
      </Helmet>
      
      <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-3xl text-center min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center relative overflow-hidden">
          
          {/* Detalhe visual de brilho para celebração */}
          <div className="absolute top-0 right-0 p-8 text-green-100">
            <Sparkles size={120} />
          </div>

          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-200 animate-bounce-short">
            <CheckCircle className="text-white w-12 h-12" />
          </div>
          
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Tudo Pronto!
          </span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase italic leading-tight text-slate-900">
            Você está dentro!
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-xl">
            Sua inscrição foi confirmada com sucesso. O Pingus já está com as barbatanas prontas para te enviar as melhores dicas de nutrição e antropometria!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Link 
              to="/" 
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Home size={18} /> Voltar à Home
            </Link>

            <a 
              href="https://nutricaocommarco.com.br/blog" 
              className="bg-green-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Ler o Blog <ArrowRight size={18} />
            </a>
          </div>

          <p className="mt-12 text-slate-400 text-sm font-medium">
            Fique de olho na sua caixa de entrada, novidades chegam em breve.
          </p>
          
        </div>
      </section>
    </>
  );
}
