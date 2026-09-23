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
import { RealEstateBackground } from './components/RealEstateBackground';
import { FloatingScrollCTA } from './components/FloatingScrollCTA';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-[#070b16] text-slate-100 flex flex-col font-sans-modern selection:bg-sky-500/30 selection:text-white">
      {/* Fundo Arquitetônico Imobiliário Transparente */}
      <RealEstateBackground />

      {/* 1. CABEÇALHO */}
      <Header />

      {/* Main Content Flow */}
      <main className="relative z-10 flex-1 w-full space-y-4 sm:space-y-8">
        {/* 2. APRESENTAÇÃO DO IMÓVEL */}
        <PropertyHero />

        {/* 3. CARROSSEL DE FOTOS COM EFEITO DE DESCIDA */}
        <Carousel onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* 4. INFORMAÇÕES PRINCIPAIS (DETALHES DO IMÓVEL) */}
        <PropertyDetails />

        {/* 5. CARACTERÍSTICAS (DESTAQUES) */}
        <PropertyHighlights />

        {/* 6. VALOR + CTA COM LOGO BRILHANTE DO WHATSAPP */}
        <ValueCTA />
      </main>

      {/* 7. CORRETOR (RODAPÉ DISCRETO) */}
      <BrokerFooter />

      {/* Botão de Ação Rápida Flutuante ao Descer */}
      <FloatingScrollCTA />

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
