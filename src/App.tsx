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
import { ValueCTA } from './components/ValueCTA';
import { BrokerFooter } from './components/BrokerFooter';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#070b16] text-slate-100 flex flex-col font-sans-modern selection:bg-sky-500/30 selection:text-white">
      {/* 1. CABEÇALHO */}
      <Header />

      {/* Main Content Flow */}
      <main className="flex-1 w-full space-y-4 sm:space-y-8">
        {/* 2. APRESENTAÇÃO DO IMÓVEL */}
        <PropertyHero />

        {/* 3. CARROSSEL DE FOTOS */}
        <Carousel onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* 4. INFORMAÇÕES PRINCIPAIS (DETALHES DO IMÓVEL) */}
        <PropertyDetails />

        {/* 5. CARACTERÍSTICAS (DESTAQUES) */}
        <PropertyHighlights />

        {/* 6. VALOR + CTA */}
        <ValueCTA />
      </main>

      {/* 7. CORRETOR (RODAPÉ DISCRETO) */}
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
