import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/cleaningData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Retours d'expérience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            La satisfaction de nos clients professionnels
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Facility managers, syndics et directeurs de sites témoignent de la constance et de la
            qualité de nos prestations au quotidien.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-500">
            {/* Quote Icon */}
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center justify-center mb-6">
              <Quote className="w-7 h-7" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                5.0 / 5 • Prestation certifiée
              </span>
            </div>

            {/* Testimonial text */}
            <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic min-h-[110px]">
              « {current.content} »
            </p>

            {/* Author info & service used */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span>{current.name}</span>
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-sky-300">{current.role}</p>
                <p className="text-xs text-slate-400">
                  {current.company} • {current.location}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                  {current.serviceUsed}
                </span>
                <span className="block text-[11px] text-slate-500 mt-1">Avis du {current.date}</span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-4">
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-8 bg-sky-400' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Aller au témoignage ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Rating Reassurance Box */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center gap-4 text-xs text-slate-300">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            Index de satisfaction global certifié : <strong className="text-white">99.2%</strong> de
            renouvellement de contrats annuels.
          </span>
        </div>
      </div>
    </section>
  );
};
