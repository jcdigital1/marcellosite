import React, { useRef, useState } from 'react';
import {
  IconGourmet3D,
  IconPool3D,
  IconChalet3D,
  IconCamera3D,
  IconPortaria3D,
} from './Icons3D';

interface HighlightCardProps {
  label: string;
  icon: React.ReactNode;
  featured?: boolean;
}

function HighlightCard3D({ label, icon, featured }: HighlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
    setShinePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={`perspective-1000 w-full ${featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-6px) scale(1.02)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className={`relative rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-[#02050e] via-[#07142c] to-[#010207] border flex items-center gap-4 sm:gap-5 overflow-hidden cursor-pointer group shadow-[0_18px_40px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.18)] transition-all duration-300 ${
          featured
            ? 'border-sky-300/60 hover:border-sky-200 shadow-[0_20px_45px_rgba(56,189,248,0.25)]'
            : 'border-sky-400/30 hover:border-sky-300'
        }`}
      >
        {/* Top Edge Specular Metallic Highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Specular 3D light reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(56, 189, 248, 0.45) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* 3D Elevated Pedestal Base for Icon */}
        <div className="relative shrink-0 translate-z-30">
          <div className="absolute inset-0 rounded-2xl bg-sky-500/25 blur-lg animate-pulse-glow" />
          <div className="relative w-15 h-15 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-[#13274f] via-[#081328] to-[#02050d] border border-sky-300/50 shadow-[0_10px_25px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110">
            <div className="animate-float-3d">{icon}</div>
          </div>
        </div>

        {/* Label text em Branco Puro em Alto Relevo */}
        <div className="flex-1 translate-z-20">
          <span
            className={`text-sm sm:text-base md:text-lg font-bold tracking-wide block text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] ${
              featured ? 'font-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]' : ''
            }`}
          >
            {label}
          </span>
          {featured && (
            <span className="inline-block mt-1 text-[11px] font-mono font-bold tracking-widest text-sky-300 uppercase">
              POTENCIAL DE EXCLUSIVIDADE
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function PropertyHighlights() {
  const highlights = [
    {
      label: 'Espaço gourmet',
      icon: <IconGourmet3D className="w-9 h-9 sm:w-10 sm:h-10" />,
    },
    {
      label: 'Piscina',
      icon: <IconPool3D className="w-9 h-9 sm:w-10 sm:h-10" />,
    },
    {
      label: 'Projeto pronto para construir dois chalés',
      icon: <IconChalet3D className="w-9 h-9 sm:w-10 sm:h-10" />,
      featured: true,
    },
    {
      label: '7 câmeras',
      icon: <IconCamera3D className="w-9 h-9 sm:w-10 sm:h-10" />,
    },
    {
      label: 'Portaria',
      icon: <IconPortaria3D className="w-9 h-9 sm:w-10 sm:h-10" />,
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto relative">
      {/* Moldura de Fundo em Degradê Preto com Azul Safira Noturno */}
      <div className="absolute inset-0 -mx-4 sm:-mx-8 rounded-[40px] bg-gradient-to-b from-[#010308] via-[#051126]/80 to-[#010308] border border-white/5 pointer-events-none -z-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)]" />

      {/* 3D Glowing Section Title */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-sky-500/10 blur-2xl pointer-events-none rounded-full" />
        <h2 className="relative text-2xl sm:text-4xl font-serif-luxury font-black text-white tracking-[0.2em] uppercase text-3d-glow">
          CARACTERÍSTICAS
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-sky-400" />
          <div className="w-1.5 h-1.5 rotate-45 bg-sky-300 shadow-[0_0_8px_#38bdf8]" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-sky-400" />
        </div>
      </div>

      {/* Grid of Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {highlights.map((item, index) => (
          <HighlightCard3D
            key={index}
            label={item.label}
            icon={item.icon}
            featured={item.featured}
          />
        ))}
      </div>
    </section>
  );
}
