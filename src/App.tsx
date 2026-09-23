/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { PropertyHero } from './components/PropertyHero';
import { Carousel } from './components/Carousel';
import { PropertyDetails } from './components/PropertyDetails';
import { PropertyHighlights } from './components/PropertyHighlights';
import { LocationLifestyle } from './components/LocationLifestyle';
import { ValueCTA } from './components/ValueCTA';
import { BrokerFooter } from './components/BrokerFooter';
import { LightboxModal } from './components/LightboxModal';
import { RealEstateBackground } from './components/RealEstateBackground';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-[#070b16] text-slate-100 flex flex-col font-sans-modern selection:bg-sky-500/30 selection:text-white">
      {/* Fundo Arquitetônico com Efeitos Estilo Motion e Luzes Suaves em Movimento */}
      <RealEstateBackground />

      {/* 1. CABEÇALHO */}
      <Header />

      {/* Main Content Flow */}
      <main className="relative z-10 flex-1 w-full space-y-4 sm:space-y-8">
        {/* 2. APRESENTAÇÃO DO IMÓVEL */}
        <PropertyHero />

        {/* 3. CARROSSEL DE FOTOS */}
        <Carousel onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* 4. INFORMAÇÕES PRINCIPAIS (DETALHES DO IMÓVEL) */}
        <PropertyDetails />

        {/* 5. CARACTERÍSTICAS (DESTAQUES) */}
        <PropertyHighlights />

        {/* 6. TEXTOS PERSUASIVOS: POR QUE O LOCAL É EXCELENTE (ESTILO DE VIDA & SEGURANÇA) */}
        <LocationLifestyle />

        {/* 7. VALOR + CTA ÚNICO COM LOGO OFICIAL DO WHATSAPP */}
        <ValueCTA />
      </main>

      {/* 8. CORRETOR (RODAPÉ DISCRETO) */}
      <BrokerFooter />

      {/* Modal Lightbox para ampliação ao tocar nas fotos */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
