import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { MapPin } from 'lucide-react';

export function PropertyHero() {
  return (
    <section className="pt-6 pb-12 px-4 text-center relative overflow-hidden z-10">
      {/* Intense High-Voltage Spotlight Aura behind the Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] max-w-full h-[360px] bg-gradient-to-r from-sky-500/20 via-blue-600/25 to-sky-400/20 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Emblema 3D em Alto Relevo Metálico: IMÓVEL À VENDA */}
        <div className="relative group inline-flex items-center rounded-full p-px bg-gradient-to-b from-sky-200 via-sky-400/70 to-slate-950 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_25px_rgba(56,189,248,0.4)] mb-6 transform hover:scale-[1.03] transition-transform duration-300">
          <div className="rounded-full px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-b from-[#142854] via-[#0b1632] to-[#060c1c] shadow-[inset_0_2px_3px_rgba(255,255,255,0.65),inset_0_-2px_4px_rgba(0,0,0,0.85)] flex items-center gap-2.5 sm:gap-3.5 relative overflow-hidden">
            {/* Feixe de Luz Especular em Movimento Suave sobre o Emblema */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-light-sweep" />
            </div>

            {/* Cabochão 3D Esmeralda (Indicador de Status Ativo Lapidado em Alto Relevo) */}
            <div className="relative flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-ping opacity-60 absolute" />
              <div className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-br from-emerald-200 via-emerald-400 to-emerald-800 shadow-[inset_0_1.5px_2px_#ffffff,0_0_10px_#10b981] border border-emerald-100/70" />
            </div>

            {/* Texto em Alto Relevo Estampado / Cunhado em Platina */}
            <span className="text-xs sm:text-sm font-mono font-black tracking-[0.28em] bg-gradient-to-b from-white via-slate-100 to-sky-200 bg-clip-text text-transparent uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] select-none">
              IMÓVEL À VENDA
            </span>

            {/* Ícone 3D em Alto Relevo: Diamante Nobre Lapidado com Facetas e Brilho */}
            <div className="relative flex items-center justify-center shrink-0 pl-0.5">
              <svg
                viewBox="0 0 28 28"
                className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_2px_8px_rgba(56,189,248,0.9)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Selo Diamante Nobre 3D"
              >
                <defs>
                  {/* Gradientes Especulares de Iluminação 3D */}
                  <linearGradient id="facetCrown" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#bae6fd" />
                    <stop offset="100%" stopColor="#7dd3fc" />
                  </linearGradient>
                  <linearGradient id="facetLeft" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                  <linearGradient id="facetCenter" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </linearGradient>
                  <linearGradient id="facetRight" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#bae6fd" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>

                {/* Mesa Superior do Diamante (Lapidação Brilhante com Luz Direta) */}
                <polygon points="9,5 19,5 24,11 4,11" fill="url(#facetCrown)" stroke="#ffffff" strokeWidth="0.6" strokeLinejoin="round" />
                <polygon points="9,5 14,11 19,5" fill="#ffffff" opacity="0.95" />

                {/* Facetas Inferiores com Profundidade 3D e Sombra Projetada */}
                <polygon points="4,11 9,11 14,24" fill="url(#facetLeft)" stroke="#38bdf8" strokeWidth="0.4" />
                <polygon points="9,11 19,11 14,24" fill="url(#facetCenter)" stroke="#7dd3fc" strokeWidth="0.4" />
                <polygon points="19,11 24,11 14,24" fill="url(#facetRight)" stroke="#38bdf8" strokeWidth="0.4" />

                {/* Brilho Especular Reflexivo Superior (Gleam 3D) */}
                <line x1="7" y1="7" x2="13" y2="7" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
                <circle cx="10" cy="7" r="1.1" fill="#ffffff" filter="drop-shadow(0 0 3px #ffffff)" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Nome do Imóvel em Platina, Branco Puro e Ciano Diamante */}
        <div className="w-full relative py-2">
          {/* Subtítulo: CHÁCARA em Branco Platina e Prata Escovada (sem amarelo) */}
          <span className="block text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-black uppercase tracking-[0.3em] bg-gradient-to-b from-white via-slate-100 to-sky-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)] mb-2">
            CHÁCARA
          </span>

          {/* Divisor Ornamental Geométrico com Diamante Ciano */}
          <div className="flex items-center justify-center gap-3 my-3 sm:my-4 max-w-md mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-sky-400" />
            <div className="w-2.5 h-2.5 rotate-45 bg-sky-300 shadow-[0_0_12px_#38bdf8]" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-sky-400/60 to-sky-400" />
          </div>

          {/* Título Principal: CONDOMÍNIO ALPHAVILLE com Brilho Diamante e Relevo */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-black text-diamond-cyan tracking-wide leading-tight uppercase drop-shadow-[0_4px_25px_rgba(56,189,248,0.45)]">
            CONDOMÍNIO ALPHAVILLE
          </h1>
        </div>

        {/* 3. Localização em Placa com Ícone Luminoso */}
        <div className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#081329]/80 border border-sky-400/30 backdrop-blur-md shadow-md text-sm sm:text-base text-slate-200 font-medium">
          <div className="p-1 rounded-full bg-sky-500/20 text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
          </div>
          <span className="tracking-wider font-semibold text-slate-200">{PROPERTY_INFO.city}</span>
        </div>

        {/* 4. Valor em Placa 3D de Alto Luxo com Borda Chanfrada Safira */}
        <div className="mt-8 perspective-1000 w-full max-w-lg">
          <div className="relative rounded-3xl p-px bg-gradient-to-b from-sky-400/60 via-sky-500/30 to-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(56,189,248,0.25)] transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="rounded-3xl px-8 py-6 bg-gradient-to-b from-[#0f2147] via-[#0b1633] to-[#070e20] backdrop-blur-2xl flex flex-col items-center justify-center relative overflow-hidden">
              {/* Top metallic reflection line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-80" />

              <span className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-black text-white tracking-tight tabular-nums text-3d-glow drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {PROPERTY_INFO.valueFormatted}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
