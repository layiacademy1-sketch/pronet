import React from 'react';
import { CLIENT_PARTNERS } from '../data/cleaningData';
import { ShieldCheck } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  // Double the list for seamless continuous infinite looping
  const carouselItems = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <section className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>Partenaires & Références</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Ils nous font confiance au quotidien
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          Partenaire privilégié des syndics de copropriété, gestionnaires de patrimoine, sièges sociaux et acteurs majeurs de l’immobilier.
        </p>
      </div>

      {/* Infinite scrolling carousel moving slowly to the left */}
      <div className="relative w-full overflow-hidden mask-fade">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

        <div className="animate-marquee flex items-center py-2">
          {carouselItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="mx-3 sm:mx-4 shrink-0"
            >
              <div
                className={`flex items-center justify-center h-28 sm:h-32 w-52 sm:w-64 px-4 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-300 group cursor-default overflow-hidden ${
                  partner.darkBg ? 'bg-slate-950 border-slate-800' : 'bg-white'
                }`}
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/assets/partners/carousel-${partner.id}.jpeg`;
                    }}
                    className="max-h-20 sm:max-h-24 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300 rounded-lg"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                    {partner.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
