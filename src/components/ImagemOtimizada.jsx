import React from 'react';

export default function ImagemOtimizada({ src, alt, title, className = "", priority = "low" }) {
  // Converte a URL do GitHub para o CDN Oficial de alta velocidade (Livre de bloqueios)
  const cdnUrl = src ? src.replace(
    'https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/', 
    'https://cdn.jsdelivr.net/gh/nutricaocommarco/nutricaocommarco@main/'
  ) : '';
  
  const isHighPriority = priority === "high";
  
  return (
    <img 
      src={cdnUrl}
      alt={alt} 
      title={title} 
      className={`w-full h-full object-cover ${className}`} 
      loading={isHighPriority ? "eager" : "lazy"} 
      fetchpriority={isHighPriority ? "high" : "auto"}
      decoding="async" 
    />
  );
}