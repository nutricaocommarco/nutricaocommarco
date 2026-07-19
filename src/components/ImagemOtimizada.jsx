import React from 'react';

export default function ImagemOtimizada({ src, alt, title, className = "", priority = "low" }) {
  const imgCleanUrl = src ? src.replace('https://', '') : '';
  const isHighPriority = priority === "high";
  
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={`https://wsrv.nl/?url=${imgCleanUrl}&w=500&output=webp`} />
      <source media="(max-width: 1024px)" srcSet={`https://wsrv.nl/?url=${imgCleanUrl}&w=800&output=webp`} />
      <img 
        src={src} 
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