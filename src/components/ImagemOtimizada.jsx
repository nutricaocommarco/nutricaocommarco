import React from 'react';

export default function ImagemOtimizada({ src, alt, title, className = "", priority = "low" }) {
  // Pegamos a URL e tiramos o https:// para enviar ao otimizador do WordPress
  const imgCleanUrl = src ? src.replace(/^https?:\/\//i, '') : '';
  const isHighPriority = priority === "high";

  return (
    <picture>
      {/* Reduz a foto de 1.8MB para poucos KBs on-the-fly, carregando super rápido! */}
      <source media="(max-width: 480px)" srcSet={`https://i0.wp.com/${imgCleanUrl}?w=400&strip=all`} />
      <source media="(max-width: 768px)" srcSet={`https://i0.wp.com/${imgCleanUrl}?w=600&strip=all`} />
      <source media="(max-width: 1024px)" srcSet={`https://i0.wp.com/${imgCleanUrl}?w=800&strip=all`} />
      <img 
        src={`https://i0.wp.com/${imgCleanUrl}?w=1280&strip=all`}
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