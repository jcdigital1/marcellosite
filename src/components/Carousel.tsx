import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PROPERTY_IMAGES } from '../data/propertyData';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface CarouselProps {
  onOpenLightbox: (index: number) => void;
}

export function Carousel({ onOpenLightbox }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchMoveX, setTouchMoveX] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const total = PROPERTY_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay suave (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Efeito carrossel ao descer a página (scroll-responsive perspective)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far the carousel is relative to center of screen (-1 to 1)
      const centerOffset = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
      const clampedOffset = Math.max(-1, Math.min(1, centerOffset));
      setScrollProgress(clampedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchMoveX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchMoveX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchMoveX === null) return;
    const diff = touchStartX - touchMoveX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchMoveX(null);
  };

  const currentPhoto = PROPERTY_IMAGES[currentIndex];

  // Calculate 3D tilt based on scrolling descent
  const scrollTiltX = scrollProgress * 3;
  const scrollScale = 1 - Math.abs(scrollProgress) * 0.02;

  return (
    <section ref={containerRef} className="py-6 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto relative z-10">
      {/* 3D Ambient Projector Glow behind Carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/4 bg-sky-500/10 blur-[100px] pointer-events-none rounded-3xl" />

      {/* Main 3D Beveled Theater Frame with Scroll Reaction */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${scrollTiltX}deg) scale(${scrollScale})`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-sky-400/25 bg-[#070d1e] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_20px_rgba(56,189,248,0.15)] select-none transition-all duration-300 hover:border-sky-400/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Metallic Specular Rim */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent z-30 opacity-60" />

        {/* 3D Photo Counter & Zoom button */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-sky-200 tracking-wider shadow-lg">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
          <button
            onClick={() => onOpenLightbox(currentIndex)}
            className="p-2 rounded-full bg-black/75 hover:bg-sky-950/90 backdrop-blur-md border border-sky-400/30 text-sky-300 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            title="Ampliar foto em tela cheia"
            aria-label="Ampliar foto em tela cheia"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Image Container */}
        <div
          onClick={() => onOpenLightbox(currentIndex)}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] cursor-pointer overflow-hidden flex items-center justify-center bg-black/50"
        >
          <img
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />

          {/* Depth vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* 3D Left Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-sky-950/90 border border-white/20 hover:border-sky-400/60 text-white transition-all transform hover:scale-110 active:scale-95 backdrop-blur-md shadow-xl cursor-pointer"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 3D Right Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-sky-950/90 border border-white/20 hover:border-sky-400/60 text-white transition-all transform hover:scale-110 active:scale-95 backdrop-blur-md shadow-xl cursor-pointer"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 3D Thumbnails Scrub Bar */}
      <div className="mt-5 flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {PROPERTY_IMAGES.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className={`relative rounded-xl overflow-hidden shrink-0 w-13 h-9 sm:w-16 sm:h-11 border transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'border-sky-400 ring-2 ring-sky-400/50 opacity-100 scale-105 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                : 'border-white/10 opacity-40 hover:opacity-85 hover:border-sky-400/40'
            }`}
            aria-label={`Foto ${idx + 1}`}
          >
            <img
              src={item.url}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Efeito Carrossel Contínuo Dinâmico ao descer (Smooth continuous photo stream) */}
      <div className="mt-8 pt-4 overflow-hidden relative">
        {/* Soft edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#070b16] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#070b16] to-transparent z-10 pointer-events-none" />

        {/* Gliding carousel ribbon */}
        <div className="animate-carousel-stream flex gap-3">
          {[...PROPERTY_IMAGES, ...PROPERTY_IMAGES].map((img, i) => (
            <div
              key={`${img.id}-stream-${i}`}
              onClick={() => onOpenLightbox(i % PROPERTY_IMAGES.length)}
              className="relative shrink-0 w-36 sm:w-48 aspect-[16/10] rounded-xl overflow-hidden border border-sky-400/20 hover:border-sky-400/70 shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={img.url}
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-sky-950/20 hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
