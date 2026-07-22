import React from 'react';

export default function ImagemOtimizada({ src, alt, title, className = "", priority = "low" }) {
  // Intercepta a URL do GitHub e converte para o CDN seguro do Statically
  const staticUrl = src ? src.replace(
    'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/', 
    'https://cdn.statically.io/img/gh/nutricaocommarco/nutricaocommarco@main/'
  ) : '';
  
  const isHighPriority = priority === "high";
  
  return (
    <picture>
      <source media="(max-width: 480px)" srcSet={`${staticUrl}?w=400&f=auto`} />
      <source media="(max-width: 768px)" srcSet={`${staticUrl}?w=600&f=auto`} />
      <source media="(max-width: 1024px)" srcSet={`${staticUrl}?w=800&f=auto`} />
      <img 
        src={`${staticUrl}?w=1280&f=auto`}
        alt={alt} 
        title={title} 
        className={`w-full h-full object-cover ${className}`} 
        loading={isHighPriority ? "eager" : "lazy"} 
        fetchpriority={isHighPriority ? "high" : "auto"}
        decoding="async" 
      />
    </picture>
  );
}