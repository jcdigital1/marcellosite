import React, { useState, useEffect } from 'react';
import { PROPERTY_INFO, BROKER_INFO } from '../data/propertyData';

export function FloatingScrollCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Contato rápido"
      className="fixed bottom-4 inset-x-0 z-40 px-4 flex justify-center pointer-events-none transition-all duration-500 animate-fade-in"
    >
      <div className="pointer-events-auto max-w-md w-full p-2.5 sm:p-3 rounded-2xl bg-[#091329]/90 backdrop-blur-xl border border-sky-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(56,189,248,0.25)] flex items-center justify-between gap-3">
        {/* Left Property Info */}
        <div className="flex flex-col pl-2 min-w-0">
          <span className="text-xs font-bold text-white uppercase tracking-wider truncate">
            {PROPERTY_INFO.title}
          </span>
          <span className="text-xs font-extrabold text-sky-300 tabular-nums">
            {PROPERTY_INFO.valueFormatted}
          </span>
        </div>

        {/* Right Shiny WhatsApp Button */}
        <a
          href={BROKER_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden shrink-0 px-4 sm:px-5 py-2.5 rounded-xl btn-3d text-white font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer shadow-lg group"
        >
          {/* Shimmer sweep */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none -skew-x-12 animate-shimmer-glint" />

          {/* Glowing WhatsApp icon */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="absolute -inset-1 rounded-full bg-emerald-400/50 blur-sm pointer-events-none" />
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="relative z-10 text-white animate-whatsapp-glow shrink-0"
              style={{
                filter: 'drop-shadow(0 0 6px #22c55e) drop-shadow(0 0 12px #4ade80)',
              }}
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.417 0-8.001 3.584-8.001 8 0 1.423.376 2.76 1.031 3.921l-1.069 3.909 3.998-1.049c1.124.616 2.41 1.219 4.041 1.219 4.418 0 8.001-3.583 8.001-8s-3.583-8-8.001-8z" />
            </svg>
          </div>

          <span className="relative z-10 whitespace-nowrap">Falar com o Vendedor</span>
        </a>
      </div>
    </aside>
  );
}
