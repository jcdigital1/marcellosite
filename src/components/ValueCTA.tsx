import React from 'react';
import { PROPERTY_INFO, BROKER_INFO } from '../data/propertyData';

export function ValueCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto relative z-10">
      {/* Card Monólito de Conversão de Alto Padrão */}
      <div className="relative rounded-3xl p-px bg-gradient-to-b from-sky-400/40 via-sky-500/20 to-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(56,189,248,0.15)]">
        <div className="rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#0c1936] via-[#081226] to-[#040814] text-center overflow-hidden relative">
          {/* Top Specular Rim */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />

          {/* Subtítulo / Chamada */}
          <span className="inline-block text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-sky-400 uppercase mb-3">
            Oportunidade Exclusiva
          </span>

          {/* Título Principal */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-black text-white tracking-wide uppercase text-3d-glow">
            TENHO INTERESSE NESTE IMÓVEL
          </h3>

          {/* Valor de Destaque */}
          <div className="my-6 sm:my-8">
            <span className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-black text-white tracking-tight tabular-nums text-3d-glow drop-shadow-2xl">
              {PROPERTY_INFO.valueFormatted}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            Fale diretamente com o corretor responsável para tirar dúvidas, verificar detalhes da documentação ou agendar sua visita ao imóvel.
          </p>

          {/* Botão Oficial e Exclusivo do WhatsApp */}
          <div className="flex justify-center">
            <a
              href={BROKER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3.5 sm:gap-4 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white shadow-[0_12px_35px_rgba(37,211,102,0.45)] hover:shadow-[0_16px_45px_rgba(37,211,102,0.65)] transition-all duration-200 cursor-pointer min-w-[290px] sm:min-w-[360px]"
            >
              {/* Logo Oficial Canônica do WhatsApp (vetor oficial sem distorções) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 175.216 175.552"
                className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                aria-label="Logo Oficial do WhatsApp"
              >
                <defs>
                  <linearGradient id="waGrad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                  </linearGradient>
                </defs>
                {/* Balão de fundo branco */}
                <path
                  fill="#ffffff"
                  d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                />
                {/* Balão verde com gradiente oficial */}
                <path
                  fill="url(#waGrad)"
                  d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                />
                {/* Ícone do telefone oficial em branco */}
                <path
                  fill="#ffffff"
                  fillRule="evenodd"
                  d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                />
              </svg>

              {/* Textos do Botão */}
              <div className="text-left flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-wider uppercase text-white drop-shadow-sm leading-tight">
                  FALAR COM O VENDEDOR
                </span>
                <span className="text-xs sm:text-xs font-semibold text-emerald-950/80 tracking-wide">
                  Chamar no WhatsApp agora
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
