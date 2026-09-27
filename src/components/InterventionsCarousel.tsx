import React, { useState } from 'react';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { PROCESS_CAROUSEL_PHOTOS } from '../data/cleaningData';

export const InterventionsCarousel: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Repeat list for seamless continuous infinite looping across all screen sizes
  const carouselPhotos = [
    ...PROCESS_CAROUSEL_PHOTOS,
    ...PROCESS_CAROUSEL_PHOTOS,
    ...PROCESS_CAROUSEL_PHOTOS,
    ...PROCESS_CAROUSEL_PHOTOS,
  ];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + PROCESS_CAROUSEL_PHOTOS.length) % PROCESS_CAROUSEL_PHOTOS.length
      );
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % PROCESS_CAROUSEL_PHOTOS.length);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0 shadow-xs">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 mb-0.5">
                <Sparkles className="w-3 h-3 text-sky-500" />
                <span>En direct du terrain</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Interventions en images
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Survolez les photos pour figer le défilement • Cliquez sur une image pour l'agrandir
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-semibold shrink-0 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chantiers récents &amp; en cours</span>
          </div>
        </div>
      </div>

      {/* Infinite scrolling carousel moving slowly to the left */}
      <div className="relative w-full overflow-hidden mask-fade py-2">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="animate-marquee-slow flex items-center gap-4">
          {carouselPhotos.map((photo, index) => {
            const originalIndex = index % PROCESS_CAROUSEL_PHOTOS.length;
            return (
              <div
                key={`intervention-photo-${photo.id}-${index}`}
                onClick={() => setSelectedPhotoIndex(originalIndex)}
                className="shrink-0 w-52 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = photo.fallbackUrl;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Gradient overlay on hover with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs font-semibold truncate pr-2">
                      {photo.title}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-sky-600/90 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-md">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for enlarged view */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-sky-300 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              title="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 text-white hover:text-sky-300 rounded-full bg-black/50 sm:bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-10"
              title="Photo précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[78vh] flex items-center justify-center bg-slate-950">
              <img
                src={PROCESS_CAROUSEL_PHOTOS[selectedPhotoIndex].url}
                alt={PROCESS_CAROUSEL_PHOTOS[selectedPhotoIndex].title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    PROCESS_CAROUSEL_PHOTOS[selectedPhotoIndex].fallbackUrl;
                }}
                className="max-h-[78vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Next button */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 text-white hover:text-sky-300 rounded-full bg-black/50 sm:bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-10"
              title="Photo suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption & Counter */}
            <div className="mt-3 text-center text-white text-xs sm:text-sm font-medium flex items-center gap-3">
              <span>{PROCESS_CAROUSEL_PHOTOS[selectedPhotoIndex].title}</span>
              <span className="text-white/40">•</span>
              <span className="text-sky-300 font-mono">
                {selectedPhotoIndex + 1} / {PROCESS_CAROUSEL_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
