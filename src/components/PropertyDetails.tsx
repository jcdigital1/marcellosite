import React, { useRef, useState } from 'react';
import {
  IconTerrain3D,
  IconHouse3D,
  IconBed3D,
  IconSuite3D,
  IconBath3D,
  IconGarage3D,
} from './Icons3D';

interface DetailCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function Card3DTilt({ value, label, icon }: DetailCardProps) {
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

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

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
      className="perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-8px) scale(1.02)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative rounded-2xl card-3d p-6 sm:p-7 border border-sky-400/20 hover:border-sky-400/60 transition-colors duration-300 flex flex-col items-center text-center overflow-hidden cursor-pointer group"
      >
        {/* Dynamic Specular 3D Light Reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(56, 189, 248, 0.45) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* 3D Elevated Pedestal Base for Icon */}
        <div className="relative mb-4 translate-z-30">
          <div className="absolute inset-0 rounded-2xl bg-sky-500/20 blur-xl animate-pulse-glow" />
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl pedestal-3d flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110">
            <div className="animate-float-3d">{icon}</div>
          </div>
        </div>

        {/* 3D Dimensional Value (Stands out sharply) */}
        <span className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-extrabold text-white tracking-tight tabular-nums text-3d-glow translate-z-20">
          {value}
        </span>

        {/* Label with 3D Depth */}
        <span className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-300 translate-z-10">
          {label}
        </span>

        {/* Subtle Bottom 3D Bevel Bar */}
        <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent mt-3 group-hover:w-16 group-hover:via-sky-400 transition-all duration-300" />
      </div>
    </div>
  );
}

export function PropertyDetails() {
  const items = [
    {
      value: '3.120 m²',
      label: 'Área total',
      icon: <IconTerrain3D className="w-10 h-10 sm:w-11 sm:h-11" />,
    },
    {
      value: '320 m²',
      label: 'Área construída',
      icon: <IconHouse3D className="w-10 h-10 sm:w-11 sm:h-11" />,
    },
    {
      value: '2',
      label: 'Quartos',
      icon: <IconBed3D className="w-10 h-10 sm:w-11 sm:h-11" />,
    },
    {
      value: '1',
      label: 'Suíte',
      icon: <IconSuite3D className="w-10 h-10 sm:w-11 sm:h-11" />,
    },
    {
      value: '2',
      label: 'Banheiros',
      icon: <IconBath3D className="w-10 h-10 sm:w-11 sm:h-11" />,
    },
    {
      value: '3',
      label: 'Vagas na garagem',
      icon: <IconGarage3D className="w-10 h-10 sm:w-11 sm:h-11" />,
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* 3D Glowing Section Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-sky-500/10 blur-2xl pointer-events-none rounded-full" />
        <h2 className="relative text-2xl sm:text-4xl font-serif-luxury font-extrabold text-white tracking-[0.2em] uppercase text-3d-glow">
          DETALHES DO IMÓVEL
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sky-400" />
          <div className="w-2 h-2 rotate-45 bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sky-400" />
        </div>
      </div>

      {/* Grid of 6 Interactive 3D Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {items.map((item, idx) => (
          <Card3DTilt
            key={idx}
            value={item.value}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
