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
  glowColor?: string;
}

function HighlightCard3D({ label, icon, featured, glowColor = 'rgba(14, 165, 233, 0.3)' }: HighlightCardProps) {
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
        className={`relative rounded-2xl card-3d p-5 sm:p-6 border flex items-center gap-4 sm:gap-5 overflow-hidden cursor-pointer group ${
          featured
            ? 'border-amber-400/40 hover:border-amber-400/80 shadow-[0_10px_30px_rgba(245,158,11,0.15)]'
            : 'border-sky-400/20 hover:border-sky-400/60'
        }`}
      >
        {/* Specular 3D light reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, ${glowColor} 0%, transparent 60%)`,
            }}
          />
        )}

        {/* 3D Elevated Pedestal Base */}
        <div className="relative shrink-0 translate-z-30">
          <div
            className="absolute inset-0 rounded-2xl blur-md opacity-60 animate-pulse-glow"
            style={{ backgroundColor: glowColor }}
          />
          <div className="relative w-15 h-15 sm:w-16 sm:h-16 rounded-2xl pedestal-3d flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110">
            <div className="animate-float-3d">{icon}</div>
          </div>
        </div>

        {/* Label text */}
        <div className="flex-1 translate-z-20">
          <span
            className={`text-sm sm:text-base md:text-lg font-semibold tracking-wide block ${
              featured
                ? 'text-amber-200 group-hover:text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]'
                : 'text-white group-hover:text-sky-100'
            }`}
          >
            {label}
          </span>
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
      glowColor: 'rgba(245, 158, 11, 0.4)',
    },
    {
      label: 'Piscina',
      icon: <IconPool3D className="w-9 h-9 sm:w-10 sm:h-10" />,
      glowColor: 'rgba(14, 165, 233, 0.4)',
    },
    {
      label: 'Projeto pronto para construir dois chalés',
      icon: <IconChalet3D className="w-9 h-9 sm:w-10 sm:h-10" />,
      featured: true,
      glowColor: 'rgba(245, 158, 11, 0.45)',
    },
    {
      label: '7 câmaras',
      icon: <IconCamera3D className="w-9 h-9 sm:w-10 sm:h-10" />,
      glowColor: 'rgba(56, 189, 248, 0.4)',
    },
    {
      label: 'Portaria',
      icon: <IconPortaria3D className="w-9 h-9 sm:w-10 sm:h-10" />,
      glowColor: 'rgba(14, 165, 233, 0.4)',
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* 3D Glowing Section Title */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-sky-500/10 blur-2xl pointer-events-none rounded-full" />
        <h2 className="relative text-2xl sm:text-4xl font-serif-luxury font-extrabold text-white tracking-[0.2em] uppercase text-3d-glow">
          DESTAQUES
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sky-400" />
          <div className="w-2 h-2 rotate-45 bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sky-400" />
        </div>
      </div>

      {/* 3D Interactive Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {highlights.map((item, idx) => (
          <HighlightCard3D
            key={idx}
            label={item.label}
            icon={item.icon}
            featured={item.featured}
            glowColor={item.glowColor}
          />
        ))}
      </div>
    </section>
  );
}
