import React, { useEffect, useState } from 'react';
import { PROPERTY_IMAGES, PropertyImage } from '../data/propertyData';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  currentIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = PROPERTY_IMAGES.length;
  const currentImage: PropertyImage = PROPERTY_IMAGES[currentIndex] || PROPERTY_IMAGES[0];

  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + total) % total);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % total);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, total, onClose, onSelectIndex]);

  if (!isOpen) return null;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsZoomed(false);
    onSelectIndex((currentIndex - 1 + total) % total);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsZoomed(false);
    onSelectIndex((currentIndex + 1) % total);
  };

  // Mobile swipe inside lightbox
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl text-white select-none animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da foto"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 sm:px-6 bg-gradient-to-b from-black/90 to-transparent z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline text-slate-500 text-xs">|</span>
          <span className="hidden sm:inline text-xs text-slate-300 font-medium">
            Chácara Condomínio Alphaville
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isZoomed ? 'Reduzir zoom' : 'Ampliar foto'}
            aria-label={isZoomed ? 'Reduzir zoom' : 'Ampliar foto'}
          >
            {isZoomed ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Fechar visualização"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center p-2 sm:p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-black/50 hover:bg-slate-800 border border-white/10 text-white transition-all transform hover:scale-105 backdrop-blur-md cursor-pointer"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Photo */}
        <div
          className={`relative max-w-full max-h-full transition-transform duration-300 ease-out flex items-center justify-center ${
            isZoomed ? 'cursor-zoom-out scale-125' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            key={currentImage.id}
            src={currentImage.url}
            alt={currentImage.alt}
            referrerPolicy="no-referrer"
            decoding="async"
            loading="eager"
            className="max-h-[70vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-black/50 hover:bg-slate-800 border border-white/10 text-white transition-all transform hover:scale-105 backdrop-blur-md cursor-pointer"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Caption */}
        <div className="mt-3 text-center px-4 z-20">
          <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-xl mx-auto drop-shadow-md">
            {currentImage.alt}
          </p>
        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="px-4 py-3 bg-black/80 border-t border-white/10 overflow-x-auto scrollbar-none z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-2 min-w-max mx-auto">
          {PROPERTY_IMAGES.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => {
                setIsZoomed(false);
                onSelectIndex(idx);
              }}
              className={`relative rounded-lg overflow-hidden transition-all duration-200 w-14 h-10 sm:w-16 sm:h-11 shrink-0 cursor-pointer ${
                idx === currentIndex
                  ? 'ring-2 ring-amber-400 scale-105 opacity-100'
                  : 'opacity-40 hover:opacity-80'
              }`}
              aria-label={`Ir para foto ${idx + 1}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
