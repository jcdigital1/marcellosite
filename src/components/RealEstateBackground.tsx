import React from 'react';

export function RealEstateBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Architectural Blueprint Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="0.75"
              strokeDasharray="2,4"
            />
            <circle cx="0" cy="0" r="1.5" fill="#38bdf8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#archGrid)" />
      </svg>

      {/* 2. Top-Right Architectural Luxury Estate Wireframe / Floorplan */}
      <div className="absolute top-10 right-4 sm:right-12 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-[0.045] transform rotate-12">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Villa perimeter boundary */}
          <polygon points="40,60 360,60 360,340 40,340" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" />
          {/* Main House blueprint layout */}
          <polygon points="80,100 280,100 280,240 80,240" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="80" y1="160" x2="280" y2="160" stroke="#38bdf8" strokeWidth="1" />
          <line x1="180" y1="100" x2="180" y2="240" stroke="#38bdf8" strokeWidth="1" />
          {/* Master suite & veranda */}
          <polygon points="100,120 160,120 160,150 100,150" stroke="#7dd3fc" strokeWidth="1" />
          <circle cx="230" cy="130" r="15" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="3 2" />
          {/* Pool & Gourmet Area Blueprint */}
          <rect x="220" y="260" width="110" height="60" rx="12" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="230" y="270" width="90" height="40" rx="8" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
          {/* Chalet Expansion Project footprint indication */}
          <polygon points="90,260 140,260 140,310 90,310" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 2" />
          <polygon points="150,260 200,260 200,310 150,310" stroke="#fbbf24" strokeWidth="1.2" strokeDasharray="4 2" />
          {/* Architectural Compass */}
          <circle cx="340" cy="90" r="22" stroke="#38bdf8" strokeWidth="1" />
          <line x1="340" y1="72" x2="340" y2="108" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="322" y1="90" x2="358" y2="90" stroke="#38bdf8" strokeWidth="1" />
          <polygon points="340,70 344,85 336,85" fill="#38bdf8" />
        </svg>
      </div>

      {/* 3. Bottom-Left Architectural Contour Lines & Elevation Curves */}
      <div className="absolute bottom-20 left-2 sm:left-10 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] opacity-[0.04]">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0 100 Q 150 150 250 80 T 500 120" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 0 180 Q 180 230 300 160 T 500 200" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 0 260 Q 200 310 350 240 T 500 280" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 0 340 Q 220 390 380 320 T 500 360" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 0 420 Q 250 470 420 400 T 500 440" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Topography coordinates notation */}
          <text x="20" y="90" fill="#7dd3fc" fontSize="9" fontFamily="monospace" letterSpacing="2">AREA: 3.120 m²</text>
          <text x="20" y="170" fill="#7dd3fc" fontSize="9" fontFamily="monospace" letterSpacing="2">ELEV: +780m</text>
          <text x="20" y="250" fill="#7dd3fc" fontSize="9" fontFamily="monospace" letterSpacing="2">COND. ALPHAVILLE</text>
        </svg>
      </div>

      {/* 4. Deep Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-sky-500/[0.04] blur-[150px] rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[350px] bg-blue-600/[0.035] blur-[140px] rounded-full" />
    </div>
  );
}
