import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. 3D Terreno / Área Total (3.120 m²) - Relevo em Platina e Safira
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
        <linearGradient id="tTopV2" x1="8" y1="12" x2="56" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="tLeftV2" x1="8" y1="22" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id="tRightV2" x1="32" y1="22" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id="goldPin" x1="26" y1="6" x2="38" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>

      {/* 3D Isometric Land Parcel */}
      <polygon points="32,8 56,22 32,36 8,22" fill="url(#tTopV2)" stroke="#ffffff" strokeWidth="1" />
      {/* Top Gridlines in Bright Specular White */}
      <line x1="20" y1="15" x2="44" y2="29" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.9" />
      <line x1="44" y1="15" x2="20" y2="29" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.9" />

      {/* Left 3D Relief Face */}
      <polygon points="8,22 32,36 32,54 8,40" fill="url(#tLeftV2)" stroke="#38bdf8" strokeWidth="0.8" />
      {/* Right 3D Relief Face */}
      <polygon points="32,36 56,22 56,40 32,54" fill="url(#tRightV2)" stroke="#38bdf8" strokeWidth="0.8" />
      {/* Central Bevel Ridge */}
      <line x1="32" y1="36" x2="32" y2="54" stroke="#e0f2fe" strokeWidth="2" />

      {/* Floating 3D Geolocation Pin in Gold & Platinum */}
      <g className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
        <path
          d="M32 4 C27 4 23 8 23 13 C23 19 32 27 32 27 C32 27 41 19 41 13 C41 8 37 4 32 4 Z"
          fill="url(#goldPin)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <circle cx="32" cy="12" r="3.5" fill="#0369a1" />
        <circle cx="32" cy="12" r="1.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

// 2. 3D Casa / Área Construída (320 m²) - Mansão com Fachada de Vidro e Luz
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
        <linearGradient id="hRoofL2" x1="12" y1="10" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="hRoofR2" x1="32" y1="10" x2="52" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="hWallL2" x1="16" y1="28" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="hWallR2" x1="32" y1="28" x2="48" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      {/* Roof Left & Right 3D Facets */}
      <polygon points="32,6 10,22 32,32" fill="url(#hRoofL2)" stroke="#ffffff" strokeWidth="0.8" />
      <polygon points="32,6 32,32 54,22" fill="url(#hRoofR2)" stroke="#bae6fd" strokeWidth="0.8" />
      {/* Roof Bevel Peak Highlight */}
      <line x1="32" y1="6" x2="32" y2="32" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />

      {/* House Front Walls */}
      <polygon points="14,26 32,34 32,54 14,46" fill="url(#hWallL2)" stroke="#38bdf8" strokeWidth="0.8" />
      <polygon points="32,34 50,26 50,46 32,54" fill="url(#hWallR2)" stroke="#7dd3fc" strokeWidth="0.8" />

      {/* Glowing Architectural Window (Bright Cyan / White) */}
      <polygon points="18,32 26,35 26,44 18,41" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
      <line x1="18" y1="36" x2="26" y2="40" stroke="#0284c7" strokeWidth="1" />

      {/* Contemporary High-Gloss Door */}
      <polygon points="36,38 44,35 44,50 36,53" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
      <circle cx="38" cy="45" r="1.4" fill="#0284c7" />

      {/* Ground Foundation Line in Platinum */}
      <line x1="10" y1="48" x2="32" y2="57" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="57" x2="54" y2="48" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 3. 3D Quarto / Bedroom (2) - Cama Imperial Conforto
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
        <linearGradient id="bHeadV2" x1="10" y1="12" x2="54" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
        <linearGradient id="bDuvetV2" x1="10" y1="32" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
      </defs>

      {/* Upholstered Headboard in High Relief */}
      <rect x="10" y="12" width="44" height="24" rx="5" fill="url(#bHeadV2)" stroke="#ffffff" strokeWidth="1.2" />
      {/* Headboard Tufting Lines */}
      <line x1="24" y1="12" x2="24" y2="36" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />
      <line x1="40" y1="12" x2="40" y2="36" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.6" />

      {/* Double Crisp White Luxury Pillows */}
      <rect x="14" y="22" width="16" height="10" rx="3.5" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />
      <rect x="34" y="22" width="16" height="10" rx="3.5" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />

      {/* Mattress Top Layer */}
      <rect x="8" y="30" width="48" height="20" rx="4" fill="#f8fafc" stroke="#38bdf8" strokeWidth="1" />

      {/* Satin Cyan / Azure Duvet Quilt */}
      <path d="M8 35 C8 33, 56 33, 56 35 L56 50 C56 52, 8 52, 8 50 Z" fill="url(#bDuvetV2)" stroke="#ffffff" strokeWidth="0.8" />
      {/* Specular Fold on Quilt */}
      <line x1="8" y1="36" x2="56" y2="36" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />

      {/* Chrome Bed Feet */}
      <rect x="12" y="50" width="5" height="5" rx="1.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
      <rect x="47" y="50" width="5" height="5" rx="1.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
    </svg>
  );
}

// 4. 3D Suíte Master (1) - Coroa Imperial & Emblema Nobre
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
        <linearGradient id="crownGold" x1="12" y1="8" x2="52" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fef08a" />
          <stop offset="65%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="suiteBadge" x1="14" y1="30" x2="50" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* Golden Master Suite Crown in 3D High Relief */}
      <path
        d="M12 28 L18 10 L32 20 L46 10 L52 28 L42 32 L32 27 L22 32 Z"
        fill="url(#crownGold)"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Crown Jewels (Pure White Pearls / Diamonds) */}
      <circle cx="18" cy="10" r="3" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
      <circle cx="32" cy="20" r="3.5" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />
      <circle cx="46" cy="10" r="3" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" />

      {/* Master Suite Plaque with Key & Privacy Crest */}
      <rect x="16" y="32" width="32" height="24" rx="6" fill="url(#suiteBadge)" stroke="#ffffff" strokeWidth="1.2" />
      {/* Golden Keyhole */}
      <circle cx="32" cy="41" r="4" fill="#fef08a" stroke="#ffffff" strokeWidth="0.8" />
      <polygon points="29.5,43 34.5,43 33.5,50 30.5,50" fill="#fef08a" />
      <circle cx="32" cy="41" r="1.5" fill="#0369a1" />
    </svg>
  );
}

// 5. 3D Banheiro / Bath (2) - Banheira de Imersão e Ducha Cromada
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
        <linearGradient id="tubPorcelain" x1="8" y1="26" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="tubWater" x1="12" y1="28" x2="52" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Chrome Shower Arch & Fixture */}
      <path
        d="M50 28 L50 12 C50 8, 44 7, 38 8 L35 9"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Rainfall Showerhead */}
      <circle cx="34" cy="11" r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
      {/* Droplets of Water */}
      <circle cx="30" cy="17" r="1.5" fill="#7dd3fc" />
      <circle cx="33" cy="22" r="1.5" fill="#ffffff" />
      <circle cx="37" cy="19" r="1.5" fill="#7dd3fc" />

      {/* Freestanding 3D Bathtub */}
      <path
        d="M8 30 C8 30, 10 50, 32 50 C54 50, 56 30, 56 30 Z"
        fill="url(#tubPorcelain)"
        stroke="#ffffff"
        strokeWidth="1.2"
      />

      {/* Crystal Blue Water Surface */}
      <ellipse cx="32" cy="30" rx="22" ry="6" fill="url(#tubWater)" stroke="#ffffff" strokeWidth="1" />

      {/* Chrome Claw Feet in Bright Metallic */}
      <path d="M16 48 L13 55 M48 48 L51 55" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// 6. 3D Garagem / Carro (3) - Veículo Esportivo de Luxo
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
        <linearGradient id="carBodyGrad" x1="8" y1="24" x2="56" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="carRoofGrad" x1="16" y1="12" x2="48" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Garage Architectural Canopy Beam */}
      <path d="M6 14 L32 6 L58 14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="6" x2="32" y2="12" stroke="#38bdf8" strokeWidth="2" />

      {/* Car Cabin Roof & Tinted Windshield */}
      <path d="M16 26 L22 13 L42 13 L48 26 Z" fill="url(#carRoofGrad)" stroke="#ffffff" strokeWidth="1" />
      <polygon points="23,15 41,15 44,24 20,24" fill="#e0f2fe" stroke="#0284c7" strokeWidth="0.8" />

      {/* Car Monocoque Body in Bright Cyan */}
      <rect x="8" y="25" width="48" height="18" rx="6" fill="url(#carBodyGrad)" stroke="#ffffff" strokeWidth="1" />

      {/* Xenon LED Headlights */}
      <circle cx="14" cy="33" r="3.5" fill="#fef08a" stroke="#ffffff" strokeWidth="1" />
      <circle cx="50" cy="33" r="3.5" fill="#fef08a" stroke="#ffffff" strokeWidth="1" />

      {/* Bright Silver Alloy Wheels */}
      <circle cx="18" cy="43" r="6" fill="#1e293b" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="18" cy="43" r="3" fill="#ffffff" />
      <circle cx="46" cy="43" r="6" fill="#1e293b" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="46" cy="43" r="3" fill="#ffffff" />
    </svg>
  );
}

// 7. 3D Espaço Gourmet - Cloche de Alta Gastronomia em Ouro e Prata
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
        <linearGradient id="clocheGoldV2" x1="12" y1="12" x2="52" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="plateSilverV2" x1="6" y1="42" x2="58" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>

      {/* Golden Cloche Handle / Finial */}
      <circle cx="32" cy="14" r="4.5" fill="#fef08a" stroke="#ffffff" strokeWidth="1.2" />

      {/* Golden Cloche Dome */}
      <path d="M12 40 C12 18, 52 18, 52 40 Z" fill="url(#clocheGoldV2)" stroke="#ffffff" strokeWidth="1.2" />

      {/* Specular Light Reflection Sweep on Dome */}
      <path d="M20 36 C20 25, 30 22, 38 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

      {/* Mirror Silver Serving Platter */}
      <rect x="6" y="41" width="52" height="8" rx="4" fill="url(#plateSilverV2)" stroke="#ffffff" strokeWidth="1.2" />
      <line x1="10" y1="44" x2="54" y2="44" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// 8. 3D Piscina - Resort Privativo com Água Cristalina e Escada Cromada
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
        <linearGradient id="pEdgeV2" x1="6" y1="14" x2="58" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="pWaterV2" x1="10" y1="18" x2="54" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Porcelain Pool Deck Coping */}
      <rect x="6" y="14" width="52" height="36" rx="10" fill="url(#pEdgeV2)" stroke="#ffffff" strokeWidth="1.2" />

      {/* Crystal Clear Swimming Pool Basin */}
      <rect x="10" y="18" width="44" height="28" rx="7" fill="url(#pWaterV2)" stroke="#ffffff" strokeWidth="1" />

      {/* Sunlit Wave Ripples */}
      <path
        d="M14 26 C19 23, 24 29, 29 26 C34 23, 39 29, 44 26"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16 34 C21 32, 26 36, 31 34 C36 32, 41 36, 46 34"
        stroke="#e0f2fe"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Chrome Pool Ladder */}
      <line x1="44" y1="12" x2="44" y2="28" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="50" y1="12" x2="50" y2="28" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="44" y1="18" x2="50" y2="18" stroke="#ffffff" strokeWidth="2" />
      <line x1="44" y1="23" x2="50" y2="23" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}

// 9. 3D Projeto Chalés (Projeto pronto para construir dois chalés) - A-Frame com Régua Dourada
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
        <linearGradient id="chaletGradV2" x1="12" y1="6" x2="52" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="rulerGradV2" x1="6" y1="46" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#fef08a" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* Alpine Chalet A-Frame Roof & Timber Frame */}
      <polygon points="32,6 12,42 52,42" fill="url(#chaletGradV2)" stroke="#ffffff" strokeWidth="1.2" />

      {/* Panoramic Alpine Glass Facade */}
      <polygon points="32,13 18,39 46,39" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />

      {/* Central Modern Timber Beam */}
      <line x1="32" y1="6" x2="32" y2="39" stroke="#0284c7" strokeWidth="2.5" />
      <line x1="22" y1="28" x2="42" y2="28" stroke="#0284c7" strokeWidth="2" />

      {/* Golden Architectural Blueprint Ruler with Scale Markings */}
      <rect x="6" y="45" width="52" height="10" rx="3.5" fill="url(#rulerGradV2)" stroke="#ffffff" strokeWidth="1.2" />
      <line x1="14" y1="45" x2="14" y2="51" stroke="#451a03" strokeWidth="1.6" />
      <line x1="23" y1="45" x2="23" y2="51" stroke="#451a03" strokeWidth="1.6" />
      <line x1="32" y1="45" x2="32" y2="53" stroke="#451a03" strokeWidth="2.2" />
      <line x1="41" y1="45" x2="41" y2="51" stroke="#451a03" strokeWidth="1.6" />
      <line x1="50" y1="45" x2="50" y2="51" stroke="#451a03" strokeWidth="1.6" />
    </svg>
  );
}

// 10. 3D 7 Câmeras - Monitoramento Avançado com Câmera e Selo 7
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
        <linearGradient id="camHousingV2" x1="16" y1="12" x2="48" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="badge7Grad" x1="6" y1="6" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>

      {/* Articulated Wall Mount Bracket in Bright Chrome */}
      <path d="M10 42 L18 42 L18 28 L24 28" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />

      {/* 3D Security Camera Body */}
      <polygon points="20,20 44,14 48,36 24,42" fill="url(#camHousingV2)" stroke="#ffffff" strokeWidth="1.2" />

      {/* High-Grade Optical Glass Lens */}
      <ellipse cx="46" cy="25" rx="5" ry="11" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
      <circle cx="46" cy="25" r="3.2" fill="#7dd3fc" />

      {/* Active Infrared Indicator (Gleaming Emerald) */}
      <circle cx="38" cy="18" r="2.5" fill="#34d399" stroke="#ffffff" strokeWidth="0.8" />

      {/* 3D Gold / Cyan Badge "7" (Selo de 7 Câmeras) */}
      <circle cx="14" cy="14" r="10" fill="url(#badge7Grad)" stroke="#ffffff" strokeWidth="1.5" />
      <text
        x="14"
        y="18.5"
        fill="#ffffff"
        fontSize="13"
        fontWeight="900"
        fontFamily="sans-serif"
        textAnchor="middle"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
      >
        7
      </text>
    </svg>
  );
}

// 11. 3D Portaria - Escudo de Segurança e Guarita
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
        <linearGradient id="shieldGradV2" x1="12" y1="6" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>

      {/* 3D Security Armor Shield */}
      <path
        d="M32 6 L52 13 C52 35, 40 50, 32 56 C24 50, 12 35, 12 13 Z"
        fill="url(#shieldGradV2)"
        stroke="#ffffff"
        strokeWidth="1.5"
      />

      {/* Inner Metallic Bevel Crest */}
      <path
        d="M32 10 L48 16 C48 33, 38 46, 32 52 C26 46, 16 33, 16 16 Z"
        stroke="#ffffff"
        strokeWidth="1.2"
        fill="none"
        strokeOpacity="0.8"
      />

      {/* Gatehouse / Portaria Arch */}
      <path
        d="M32 18 L42 22 C42 32, 37 40, 32 44 C27 40, 22 32, 22 22 Z"
        fill="#07132a"
        stroke="#38bdf8"
        strokeWidth="1"
      />

      {/* Gatehouse Security Vault Keyhole & Padlock */}
      <circle cx="32" cy="28" r="4.5" stroke="#ffffff" strokeWidth="1.8" fill="#38bdf8" />
      <rect x="27" y="32" width="10" height="8" rx="2.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
    </svg>
  );
}
