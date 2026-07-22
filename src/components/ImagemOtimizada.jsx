import React from 'react';

export default function ImagemOtimizada({ src, alt, title, className = "", priority = "low" }) {
  let secureSrc = src ? src.replace('raw.githubusercontent.com/', 'cdn.jsdelivr.net/gh/') : '';
  secureSrc = secureSrc.replace('/main/main/', '/main/');
  const imgCleanUrl = secureSrc ? secureSrc.replace(/^https?:\/\//i, '') : '';
  const isHighPriority = priority === "high";
  
  return (
    <picture>
      {/* Mudamos de /?url= para apenas / na frente do domínio */}
      <source media="(max-width: 480px)" srcSet={`https://wsrv.nl/${imgCleanUrl}?w=400&output=webp&q=70`} />
      <source media="(max-width: 768px)" srcSet={`https://wsrv.nl/${imgCleanUrl}?w=600&output=webp&q=75`} />
      <source media="(max-width: 1024px)" srcSet={`https://wsrv.nl/${imgCleanUrl}?w=800&output=webp&q=80`} />
      <img 
        src={`https://wsrv.nl/${imgCleanUrl}?w=1280&output=webp&q=80`}
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