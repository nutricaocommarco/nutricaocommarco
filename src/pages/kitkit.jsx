import React, { useEffect } from 'react';
import { Mail, AlertCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ConfirmacaoPendente() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Quase lá! Confirme seu e-mail | Nutrição com Marco</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-3xl text-center min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center">
          
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
            <Mail className="text-green-600 w-12 h-12" />
          </div>
          
          <span className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Ação Necessária
          </span>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase italic leading-tight text-slate-900">
            Falta só um clique!
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-xl">
            Nós acabamos de enviar uma mensagem para você com o link de confirmação. Para receber nossos conteúdos exclusivos e garantir que o Pingus não fique triste, você precisa abrir o seu e-mail agora e clicar no botão de confirmação lá dentro.
          </p>

          <div className="bg-orange-50 border border-orange-100 p-6 md:p-8 rounded-3xl w-full flex flex-col sm:flex-row items-center gap-5 text-left mb-10">
            <AlertCircle className="text-orange-500 w-12 h-12 shrink-0" />
            <p className="text-orange-950 font-medium m-0 leading-relaxed">
              <strong className="font-black uppercase text-orange-900 block mb-1">Não achou o e-mail?</strong> 
              Dê uma olhada rápida na sua caixa de Spam ou na aba de Promoções. Às vezes, nosso e-mail de confirmação vai parar lá por engano!
            </p>
          </div>

          <a 
            href="https://mail.google.com" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-green-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-green-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
          >
            Abrir meu E-mail <ArrowRight size={18} />
          </a>
          
        </div>
      </section>
    </>
  );
}
