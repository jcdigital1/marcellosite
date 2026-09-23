import React from 'react';
import { BROKER_INFO } from '../data/propertyData';

export function BrokerFooter() {
  return (
    <footer className="w-full py-12 px-4 border-t border-white/5 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-sm font-serif-luxury font-bold text-slate-200 tracking-wider">
          {BROKER_INFO.name}
        </p>
        <p className="mt-1 text-xs text-slate-400 tracking-wide">
          {BROKER_INFO.profession}
        </p>
        <p className="mt-0.5 text-xs font-mono text-slate-500">
          {BROKER_INFO.creci}
        </p>
      </div>
    </footer>
  );
}
