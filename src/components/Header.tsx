import React from 'react';
import { BROKER_INFO } from '../data/propertyData';

export function Header() {
  return (
    <header className="w-full pt-12 pb-8 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Broker Name - Large, elegant, prominent */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold tracking-wider text-white uppercase">
          {BROKER_INFO.name}
        </h1>

        {/* Profession */}
        <p className="mt-2 text-xs sm:text-sm tracking-[0.3em] font-medium text-slate-300 uppercase">
          {BROKER_INFO.profession}
        </p>

        {/* CRECI */}
        <p className="mt-1 text-xs font-mono tracking-widest text-sky-400 font-semibold">
          {BROKER_INFO.creci}
        </p>

        {/* Subtle luxury divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent mx-auto mt-6" />
      </div>
    </header>
  );
}
