import { useEffect } from 'react';

export default function Newsletter() {
  useEffect(() => {
    const formContainer = document.getElementById('convertkit-form');
    
    // Verifica se o formulário já foi carregado para não duplicar
    if (formContainer && formContainer.innerHTML === '') {
      // ⏳ Otimização de Performance: Aumenta o atraso para 4 segundos
      const timer = setTimeout(() => {
        const script = document.createElement('script');
        script.src = 'https://nutricao-com-marco.kit.com/6649233149/index.js';
        script.async = true;
        script.setAttribute('data-uid', '6649233149');
        formContainer.appendChild(script);
      }, 4000);

      // Limpa o timer se o paciente sair da página antes dos 4 segundos
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto my-12 p-4 bg-white rounded-[2rem] shadow-sm border border-slate-100">
      <div id="convertkit-form" className="flex justify-center w-full"></div>
    </div>
  );
}
