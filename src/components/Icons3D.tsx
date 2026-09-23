import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. 3D Terreno / Área Total (3.120 m²)
export function IconTerrain3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tTop" x1="10" y1="12" x2="54" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="tLeft" x1="8" y1="26" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0369a1" />
          <stop offset="1" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id="tRight" x1="32" y1="26" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="1" stopColor="#0c4a6e" />
        </linearGradient>
        <filter id="glowTerrain" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0284c7" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowTerrain)">
        {/* Isometric 3D Terrain Block */}
        <polygon points="32,8 56,22 32,36 8,22" fill="url(#tTop)" />
        {/* Top Specular Grid & Landmark Pin */}
        <line x1="20" y1="15" x2="44" y2="29" stroke="#e0f2fe" strokeWidth="1.2" strokeOpacity="0.8" />
        <line x1="44" y1="15" x2="20" y2="29" stroke="#e0f2fe" strokeWidth="1.2" strokeOpacity="0.8" />
        <circle cx="32" cy="22" r="3.5" fill="#f0f9ff" />
        <circle cx="32" cy="22" r="1.5" fill="#0284c7" />
        {/* Left 3D Face */}
        <polygon points="8,22 32,36 32,56 8,42" fill="url(#tLeft)" />
        {/* Right 3D Face */}
        <polygon points="32,36 56,22 56,42 32,56" fill="url(#tRight)" />
        {/* Specular Ridge Line */}
        <line x1="32" y1="36" x2="32" y2="56" stroke="#7dd3fc" strokeWidth="1.5" strokeOpacity="0.7" />
      </g>
    </svg>
  );
}

// 2. 3D Casa / Área Construída (320 m²)
export function IconHouse3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hRoofL" x1="12" y1="10" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="hRoofR" x1="32" y1="10" x2="52" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="hWallL" x1="14" y1="28" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="hWallR" x1="32" y1="28" x2="50" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <filter id="glowHouse" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#glowHouse)">
        {/* Roof Left & Right 3D Facets */}
        <polygon points="32,6 12,22 32,32" fill="url(#hRoofL)" />
        <polygon points="32,6 32,32 52,22" fill="url(#hRoofR)" />
        {/* Overhanging Bevel Ridge */}
        <line x1="32" y1="6" x2="32" y2="32" stroke="#bae6fd" strokeWidth="1.8" />
        {/* Walls */}
        <polygon points="16,28 32,36 32,56 16,48" fill="url(#hWallL)" />
        <polygon points="32,36 48,28 48,48 32,56" fill="url(#hWallR)" />
        {/* Glowing Architectural Glass Window */}
        <polygon points="20,34 27,37 27,45 20,42" fill="#7dd3fc" fillOpacity="0.9" />
        <line x1="20" y1="38" x2="27" y2="41" stroke="#ffffff" strokeWidth="0.8" />
        {/* Modern Front Door */}
        <polygon points="36,40 43,37 43,51 36,54" fill="#f8fafc" />
        <circle cx="38" cy="47" r="1" fill="#0284c7" />
      </g>
    </svg>
  );
}

// 3. 3D Quarto / Bedroom (2)
export function IconBed3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bHead" x1="12" y1="12" x2="52" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="bDuvet" x1="14" y1="32" x2="50" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284c7" />
          <stop offset="0.6" stopColor="#0369a1" />
          <stop offset="1" stopColor="#0c4a6e" />
        </linearGradient>
        <filter id="glowBed" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#glowBed)">
        {/* Padded Headboard */}
        <rect x="12" y="12" width="40" height="22" rx="4" fill="url(#bHead)" />
        {/* Pillows */}
        <rect x="16" y="24" width="13" height="8" rx="3" fill="#ffffff" />
        <rect x="35" y="24" width="13" height="8" rx="3" fill="#ffffff" />
        {/* Mattress Layer */}
        <rect x="10" y="30" width="44" height="20" rx="4" fill="#e2e8f0" />
        {/* Luxury Quilt */}
        <path d="M10 36 C10 34, 54 34, 54 36 L54 50 C54 52, 10 52, 10 50 Z" fill="url(#bDuvet)" />
        {/* Specular Fold */}
        <line x1="10" y1="37" x2="54" y2="37" stroke="#7dd3fc" strokeWidth="1.5" strokeOpacity="0.8" />
        {/* Legs */}
        <rect x="14" y="50" width="4" height="5" rx="1" fill="#334155" />
        <rect x="46" y="50" width="4" height="5" rx="1" fill="#334155" />
      </g>
    </svg>
  );
}

// 4. 3D Suíte Master (1)
export function IconSuite3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sCrown" x1="14" y1="8" x2="50" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" />
          <stop offset="0.4" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="sShield" x1="16" y1="28" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <filter id="glowSuite" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#f59e0b" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowSuite)">
        {/* Golden Master Crown */}
        <path
          d="M14 26 L20 12 L32 20 L44 12 L50 26 L42 30 L32 26 L22 30 Z"
          fill="url(#sCrown)"
        />
        <circle cx="20" cy="12" r="2.5" fill="#ffffff" />
        <circle cx="32" cy="20" r="2.5" fill="#ffffff" />
        <circle cx="44" cy="12" r="2.5" fill="#ffffff" />
        {/* Master Suite Plaque with Keyhole */}
        <rect x="18" y="32" width="28" height="22" rx="5" fill="url(#sShield)" />
        <circle cx="32" cy="40" r="3.5" fill="#ffffff" />
        <polygon points="30,42 34,42 33,48 31,48" fill="#ffffff" />
      </g>
    </svg>
  );
}

// 5. 3D Banheiro / Bath (2)
export function IconBath3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tubGrad" x1="8" y1="26" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#e2e8f0" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="14" y1="30" x2="50" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <filter id="glowBath" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#glowBath)">
        {/* Fixture Chrome Arm */}
        <path
          d="M48 26 L48 12 C48 9, 44 8, 40 9 L37 10"
          stroke="#cbd5e1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="36" cy="11" r="2.5" fill="#38bdf8" />
        <circle cx="33" cy="17" r="1.5" fill="#7dd3fc" />
        <circle cx="35" cy="22" r="1.5" fill="#7dd3fc" />
        {/* Freestanding 3D Bathtub */}
        <path
          d="M10 30 C10 30, 12 50, 32 50 C52 50, 54 30, 54 30 Z"
          fill="url(#tubGrad)"
        />
        {/* Water Surface Oval */}
        <ellipse cx="32" cy="30" rx="20" ry="5" fill="url(#waterGrad)" />
        {/* Rim Specular Shine */}
        <ellipse cx="32" cy="30" rx="20" ry="5" stroke="#ffffff" strokeWidth="1.2" fill="none" strokeOpacity="0.8" />
        {/* Chrome Tub Feet */}
        <path d="M16 48 L14 54 M48 48 L50 54" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 6. 3D Garagem / Carro (3)
export function IconGarage3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cRoof" x1="18" y1="12" x2="46" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="cBody" x1="10" y1="24" x2="54" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.6" stopColor="#0284c7" />
          <stop offset="1" stopColor="#075985" />
        </linearGradient>
        <filter id="glowCar" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowCar)">
        {/* Garage Roofline Indicator */}
        <path d="M6 14 L32 6 L58 14" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
        {/* Car Cabin */}
        <path d="M18 26 L22 14 L42 14 L46 26 Z" fill="url(#cRoof)" />
        <polygon points="24,16 40,16 43,24 21,24" fill="#e0f2fe" fillOpacity="0.9" />
        {/* Car Body Monocoque */}
        <rect x="10" y="25" width="44" height="17" rx="6" fill="url(#cBody)" />
        {/* Xenon Headlights */}
        <circle cx="15" cy="33" r="3" fill="#fef08a" />
        <circle cx="49" cy="33" r="3" fill="#fef08a" />
        {/* Alloy Wheels */}
        <circle cx="18" cy="42" r="5.5" fill="#0f172a" />
        <circle cx="18" cy="42" r="2.8" fill="#e2e8f0" />
        <circle cx="46" cy="42" r="5.5" fill="#0f172a" />
        <circle cx="46" cy="42" r="2.8" fill="#e2e8f0" />
      </g>
    </svg>
  );
}

// 7. 3D Espaço Gourmet
export function IconGourmet3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="clocheGold" x1="12" y1="12" x2="52" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" />
          <stop offset="0.4" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="silverPlate" x1="6" y1="42" x2="58" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="0.5" stopColor="#cbd5e1" />
          <stop offset="1" stopColor="#64748b" />
        </linearGradient>
        <filter id="glowGourmet" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#f59e0b" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowGourmet)">
        {/* Cloche Handle */}
        <circle cx="32" cy="14" r="4" fill="#fef08a" />
        {/* Golden Cloche Dome */}
        <path d="M14 40 C14 20, 50 20, 50 40 Z" fill="url(#clocheGold)" />
        {/* Specular Light Reflection */}
        <path d="M22 36 C22 26, 32 23, 36 23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
        {/* Platter Base */}
        <rect x="8" y="42" width="48" height="7" rx="3.5" fill="url(#silverPlate)" />
        <line x1="12" y1="45" x2="52" y2="45" stroke="#ffffff" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// 8. 3D Piscina
export function IconPool3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pEdge" x1="8" y1="16" x2="56" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64748b" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="pWater" x1="12" y1="20" x2="52" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <filter id="glowPool" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0ea5e9" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#glowPool)">
        {/* Stone Border */}
        <rect x="8" y="16" width="48" height="32" rx="9" fill="url(#pEdge)" />
        {/* Crystal Pool Basin */}
        <rect x="12" y="20" width="40" height="24" rx="6" fill="url(#pWater)" />
        {/* Water Ripples */}
        <path
          d="M16 28 C20 25, 25 31, 29 28 C33 25, 38 31, 42 28"
          stroke="#f0f9ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 35 C22 33, 27 37, 31 35 C35 33, 40 37, 44 35"
          stroke="#bae6fd"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        {/* Chrome Pool Ladder */}
        <line x1="44" y1="14" x2="44" y2="28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="49" y1="14" x2="49" y2="28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="44" y1="20" x2="49" y2="20" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="44" y1="25" x2="49" y2="25" stroke="#cbd5e1" strokeWidth="2" />
      </g>
    </svg>
  );
}

// 9. 3D Projeto Chalés (Projeto pronto para construir dois chalés)
export function IconChalet3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="chaletGrad" x1="14" y1="8" x2="50" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="rulerGrad" x1="6" y1="46" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" />
          <stop offset="0.5" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <filter id="glowChalet" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowChalet)">
        {/* Twin Chalets Silhouette / A-Frame Architecture */}
        <polygon points="32,6 14,40 50,40" fill="url(#chaletGrad)" />
        {/* Glass Facade */}
        <polygon points="32,13 21,38 43,38" fill="#e0f2fe" fillOpacity="0.8" />
        {/* Alpine Timber Beams */}
        <line x1="32" y1="6" x2="32" y2="38" stroke="#0284c7" strokeWidth="2" />
        <line x1="24" y1="28" x2="40" y2="28" stroke="#0284c7" strokeWidth="2" />
        {/* Architectural Blueprint Ruler & Project Scale */}
        <rect x="6" y="46" width="52" height="9" rx="3" fill="url(#rulerGrad)" />
        <line x1="14" y1="46" x2="14" y2="51" stroke="#451a03" strokeWidth="1.5" />
        <line x1="23" y1="46" x2="23" y2="51" stroke="#451a03" strokeWidth="1.5" />
        <line x1="32" y1="46" x2="32" y2="53" stroke="#451a03" strokeWidth="2" />
        <line x1="41" y1="46" x2="41" y2="51" stroke="#451a03" strokeWidth="1.5" />
        <line x1="50" y1="46" x2="50" y2="51" stroke="#451a03" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// 10. 3D 7 Câmeras
export function IconCamera3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="camHousing" x1="14" y1="14" x2="46" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64748b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="camGlass" x1="36" y1="18" x2="48" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
        <filter id="glowCamera" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#0284c7" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowCamera)">
        {/* Wall Bracket */}
        <path d="M10 40 L16 40 L16 26 L22 26" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />
        {/* 3D CCTV Housing */}
        <polygon points="18,20 42,14 46,36 22,42" fill="url(#camHousing)" />
        {/* Optical Lens */}
        <ellipse cx="44" cy="25" rx="5" ry="11" fill="url(#camGlass)" />
        <circle cx="44" cy="25" r="3" fill="#0369a1" />
        {/* Active Infrared Indicator LED */}
        <circle cx="36" cy="18" r="2" fill="#22c55e" />
        {/* 3D Badge "7" */}
        <circle cx="14" cy="14" r="9" fill="#0284c7" />
        <circle cx="14" cy="14" r="9" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="14" y="18" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
          7
        </text>
      </g>
    </svg>
  );
}

// 11. 3D Portaria
export function IconPortaria3D({ className = 'w-10 h-10', size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="14" y1="8" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#0284c7" />
          <stop offset="1" stopColor="#082f49" />
        </linearGradient>
        <filter id="glowPortaria" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#glowPortaria)">
        {/* 3D Security Armor Shield */}
        <path
          d="M32 8 L50 14 C50 34, 38 48, 32 54 C26 48, 14 34, 14 14 Z"
          fill="url(#shieldGrad)"
        />
        {/* Shield Bevel Highlight */}
        <path
          d="M32 10 L48 15 C48 32, 37 45, 32 51"
          stroke="#e0f2fe"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.7"
        />
        {/* Gate Arch / Vault Crest */}
        <path
          d="M32 16 L42 20 C42 30, 36 39, 32 44 C28 39, 22 30, 22 20 Z"
          fill="#050e24"
          fillOpacity="0.8"
        />
        <circle cx="32" cy="27" r="5" stroke="#ffffff" strokeWidth="2" fill="none" />
        <rect x="27" y="32" width="10" height="8" rx="2" fill="#ffffff" />
      </g>
    </svg>
  );
}
