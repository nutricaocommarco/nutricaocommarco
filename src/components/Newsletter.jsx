import { useEffect } from 'react';

export default function Newsletter() {
  useEffect(() => {
    const formContainer = document.getElementById('convertkit-form');
    // Verifica se o formulário já foi carregado para não duplicar
    if (formContainer && formContainer.innerHTML === '') {
      const script = document.createElement('script');
      script.src = 'https://nutricao-com-marco.kit.com/6649233149/index.js';
      script.async = true;
      script.setAttribute('data-uid', '6649233149');
      formContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto my-12 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div id="convertkit-form" className="flex justify-center w-full"></div>
    </div>
  );
}
