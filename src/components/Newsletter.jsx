import React, { useEffect, useRef, useState } from 'react';

export default function Newsletter() {
  const containerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Inicializa o observador para injetar o formulário apenas quando ele estiver visível
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowForm(true);
          observer.disconnect();
        }
      },
      { rootMargin: '500px' } // Ativa 500px antes do componente aparecer na tela
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Só injeta o script do ConvertKit se o showForm for ativado pelo observador
    if (showForm) {
      const formContainer = document.getElementById('convertkit-form');
      if (formContainer && formContainer.innerHTML === '') {
        const script = document.createElement('script');
        script.src = 'https://nutricao-com-marco.kit.com/6649233149/index.js';
        script.async = true;
        script.setAttribute('data-uid', '6649233149');
        formContainer.appendChild(script);
      }
    }
  }, [showForm]);

  return (
    <div ref={containerRef} className="w-full min-h-[200px]">
      {showForm && (
        <div className="w-full max-w-3xl mx-auto my-12 p-4 bg-white rounded-[2rem] shadow-sm border border-slate-100">
          <div id="convertkit-form" className="flex justify-center w-full"></div>
        </div>
      )}
    </div>
  );
}