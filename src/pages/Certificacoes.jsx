import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const githubImgBase = "https://raw.githubusercontent.com/nutricaocommarco/nutricaocommarco/main/Imagens/";

export default function Certificacoes() {
  return (
    <section className="py-24 bg-slate-50 px-6 container mx-auto max-w-6xl text-left">
      <h1 className="text-5xl md:text-8xl font-black text-white italic titulo-vazado uppercase mb-20 text-center">Currículo</h1>
      <div className="space-y-24">
        <div>
          <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-green-600 rounded-full"></span> Formação Principal</h2>
          <div className="grid gap-8">
            <CertCard image={`${githubImgBase}unicesumar.png`} badge="Graduação" title="Bacharelado em Nutrição" org="Unicesumar" desc="Formação completa focada em Nutrição Clínica e Esportiva." color="slate" />
            <CertCard image={`${githubImgBase}oficial-uniguacu_vertical-edited.png`} badge="Pós-Graduação" title="Emagrecimento e Metabolismo" org="Faculdade Uniguaçú" desc="Especialização avançada nas bases fisiológicas." color="green" />
            <CertCard image={`${githubImgBase}isak-logo.png`} badge="Internacional" title="ISAK Level 1" org="ISAK" desc="Certificação mundial para padronização de medidas." color="green" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-green-600 rounded-full"></span> Prática Clínica e Comportamental</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MiniCertCard image={`${githubImgBase}logo-temporaria.svg`} bgColor="bg-black" title="Farmacologia da Obesidade" org="Gustavo Stocker" desc="Estudo da farmacologia aplicada ao emagrecimento." />
            <MiniCertCard image={`${githubImgBase}medsize_logo-branco-png.png`} bgColor="bg-black" title="Medsize Klinik" org="Medsize" desc="Focado em protocolos de atendimento e gestão clínica." />
            
            {/* --- IMAGEM ATUALIZADA AQUI --- */}
            <MiniCertCard image={`${githubImgBase}antropometria-obesidade.jpg`} title="Antropometria na Obesidade" org="Icaro Andrade" desc="Técnicas de mensuração específicas para o paciente com obesidade." />
            
            <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="Programa ProNutri (Ciclo 12)" org="Secad Artmed" desc="Atualização cobrindo Microbiota e Doenças Autoimunes." />
            <MiniCertCard image={`${githubImgBase}pronutri.webp`} title="Programa ProNutri (Ciclo 14)" org="Secad Artmed" desc="Continuidade da formação clínica de vanguarda." />
            <MiniCertCard image={`${githubImgBase}hormonios.jpg`} title="Metabolismo Hormonal" org="Prof. Dr. Rodrigo Vargas" desc="Hormônios esteroides e ajustes dietéticos esportivos." />
            <MiniCertCard image={`${githubImgBase}ellocursos.webp`} title="Psicologia e Obesidade" org="Ellocursos" desc="Saúde mental e comportamento alimentar." />
            <MiniCertCard image={`${githubImgBase}comer_intuitivo.jpg`} title="Comer Intuitivo" org="Inst. Nutrição Comportamental" desc="Abordagem focada em sinais de fome e razões físicas." />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-left mb-24">
          <div>
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-red-600 rounded-full"></span> Segurança Alimentar</h2>
            <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-slate-100 space-y-6">
              <IvisaItem title="Boas Práticas na Indústria" org="Ivisa-Rio" hours="4h" />
              <IvisaItem title="Boas Práticas em Serviços" org="Ivisa-Rio" hours="4h" />
              <IvisaItem title="Supervisão de Manipulação" org="Ivisa-Rio" hours="4h" />
              <IvisaItem title="Transporte Seguro de Alimentos" org="Ivisa-Rio" hours="2h" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 uppercase italic mb-10 flex items-center gap-4 justify-center md:justify-start"><span className="w-12 h-1 bg-purple-600 rounded-full"></span> Eventos</h2>
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 flex items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-md overflow-hidden p-2"><img src={`${githubImgBase}simposio_obesidade.jpg`} className="w-full h-full object-contain" alt="Hcor" /></div>
              <h3 className="text-xl font-black text-slate-800 uppercase italic leading-tight text-left">I Simpósio de Obesidade (Hcor)</h3>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="mx-auto mt-20 flex items-center gap-2 font-black uppercase text-slate-400 hover:text-green-600 transition-colors w-fit">Voltar ao Início <ArrowUpRight size={20} /></Link>
    </section>
  );
}

// Componentes internos de Certificações
function CertCard({ image, badge, title, org, desc, color }) {
  const colorMap = { green: 'bg-green-100 text-green-600', blue: 'bg-blue-100 text-blue-600', slate: 'bg-slate-100 text-slate-600' };
  return (
    <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center group transition-all hover:scale-[1.02] text-left">
      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-inner p-3 border border-slate-50 group-hover:rotate-3 transition-transform"><img src={image} className="w-full h-full object-contain" alt={title} /></div>
      <div className="flex-grow text-left">
        <span className={`${colorMap[color]} font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full mb-2 inline-block`}>{badge}</span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
        <p className="text-green-600 font-black text-sm uppercase mb-3">{org}</p>
        <p className="text-slate-600 leading-relaxed font-medium italic">{desc}</p>
      </div>
    </div>
  );
}

function MiniCertCard({ image, title, org, desc, bgColor = "bg-white" }) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col min-h-[380px] text-left">
      <div className={`h-48 w-full overflow-hidden ${bgColor} flex items-center justify-center p-6 border-b border-slate-50`}><img src={image} className="w-full h-full object-contain group-hover:scale-105 transition-transform" alt={title} /></div>
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-black text-slate-800 uppercase italic mb-1 leading-tight">{title}</h3>
        <p className="text-green-600 font-black text-[10px] uppercase mb-4">{org}</p>
        <p className="text-slate-600 text-sm leading-relaxed italic font-medium">{desc}</p>
      </div>
    </div>
  );
}

function IvisaItem({ title, org, hours }) {
  return (
    <div className="flex items-start gap-4 text-left">
      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck className="text-red-500" size={20} /></div>
      <div className="text-left"><h4 className="font-black text-slate-800 uppercase italic text-sm leading-tight text-left">{title}</h4><p className="text-slate-400 font-bold text-[9px] uppercase tracking-tighter text-left">{org} • {hours}</p></div>
    </div>
  );
}
