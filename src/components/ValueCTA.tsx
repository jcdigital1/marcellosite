import React from 'react';
import { PROPERTY_INFO, BROKER_INFO } from '../data/propertyData';

export function ValueCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative z-10">
      {/* 3D Monolith Conversion Card */}
      <div className="relative rounded-3xl p-px bg-gradient-to-b from-sky-400/50 via-sky-500/20 to-sky-950 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(56,189,248,0.2)]">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0c1836] via-[#081024] to-[#050a17] text-center overflow-hidden relative">
          {/* Top Specular Rim */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-70" />

          {/* Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-luxury font-extrabold text-slate-200 tracking-[0.2em] uppercase text-3d-glow">
            TENHO INTERESSE NESTE IMÓVEL
          </h3>

          {/* 3D Value Highlight */}
          <div className="my-6 sm:my-8">
            <span className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-extrabold text-white tracking-tight tabular-nums text-3d-glow drop-shadow-2xl">
              {PROPERTY_INFO.valueFormatted}
            </span>
          </div>

          {/* Tactile 3D Action Button com Logo Brilhante do WhatsApp */}
          <div className="mt-8 flex justify-center">
            <a
              href={BROKER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full sm:w-auto min-h-[60px] px-8 sm:px-12 py-4 rounded-2xl btn-3d text-white font-bold text-sm sm:text-base tracking-[0.15em] uppercase inline-flex items-center justify-center gap-3.5 cursor-pointer shadow-2xl transition-all group"
            >
              {/* Brilliant light glint sweeping across button */}
              <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none -skew-x-12 animate-shimmer-glint" />

              {/* Glowing Shiny WhatsApp Logo with Radiant Aura */}
              <div className="relative flex items-center justify-center shrink-0">
                {/* Expanding emerald ring pulse */}
                <span className="absolute -inset-1.5 rounded-full bg-emerald-400/40 animate-whatsapp-ring pointer-events-none" />

                {/* Intense emerald radial backlight */}
                <span className="absolute -inset-1 rounded-full bg-emerald-500/60 blur-md pointer-events-none" />

                {/* Sparkling WhatsApp SVG Icon */}
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="relative z-10 text-white animate-whatsapp-glow transition-transform duration-300 group-hover:scale-115"
                  style={{
                    filter:
                      'drop-shadow(0 0 8px #22c55e) drop-shadow(0 0 16px #4ade80) drop-shadow(0 0 24px rgba(34,197,94,0.9))',
                  }}
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.417 0-8.001 3.584-8.001 8 0 1.423.376 2.76 1.031 3.921l-1.069 3.909 3.998-1.049c1.124.616 2.41 1.219 4.041 1.219 4.418 0 8.001-3.583 8.001-8s-3.583-8-8.001-8z" />
                </svg>
              </div>

              <span className="relative z-10 text-white font-extrabold tracking-widest drop-shadow-md">
                FALAR COM O VENDEDOR
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
