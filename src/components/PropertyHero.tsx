import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { MapPin } from 'lucide-react';

export function PropertyHero() {
  return (
    <section className="pt-6 pb-12 px-4 text-center relative overflow-hidden">
      {/* 3D Atmospheric projector lighting in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        {/* Etiqueta 3D: IMÓVEL À VENDA */}
        <div className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.25)] text-xs font-mono font-bold tracking-widest text-sky-300 uppercase mb-5 animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_#34d399]" />
          <span>IMÓVEL À VENDA</span>
        </div>

        {/* Nome do Imóvel com presença 3D imponente */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-extrabold text-white tracking-wide leading-tight uppercase text-3d-glow">
          CHÁCARA <br />
          <span className="bg-gradient-to-r from-sky-200 via-white to-sky-300 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(56,189,248,0.3)]">
            CONDOMÍNIO ALPHAVILLE
          </span>
        </h2>

        {/* Localização com marcador luminoso */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm sm:text-base text-slate-300 font-medium">
          <div className="p-1 rounded-full bg-sky-500/20 text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
          </div>
          <span className="tracking-wide">{PROPERTY_INFO.city}</span>
        </div>

        {/* Valor em Placa 3D de Alto Padrão */}
        <div className="mt-8 perspective-1000 w-full max-w-md">
          <div className="relative rounded-2xl p-px bg-gradient-to-b from-sky-400/50 via-sky-500/20 to-transparent shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.15)] transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="rounded-2xl px-6 py-5 bg-gradient-to-b from-[#0e1b38] to-[#080f22] backdrop-blur-xl flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-extrabold text-white tracking-tight tabular-nums text-3d-glow drop-shadow-2xl">
                {PROPERTY_INFO.valueFormatted}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
