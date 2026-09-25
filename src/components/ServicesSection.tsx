import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  ExternalLink,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/cleaningData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuoteModal: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuoteModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'industriel' | 'tertiaire' | 'technique'>('all');

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (filter === 'all') return true;
    if (filter === 'industriel') return srv.category === 'industriel' || srv.category === 'chantier';
    if (filter === 'tertiaire')
      return (
        srv.category === 'bureaux' ||
        srv.category === 'immeubles' ||
        srv.category === 'parties-communes' ||
        srv.category === 'locaux-commerces'
      );
    if (filter === 'technique') return srv.category === 'vitres' || srv.category === 'sols';
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Prestations Complètes & Certifiées</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Nos services de nettoyage professionnel
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-2xl mx-auto">
            Une expertise globale adaptée à chaque secteur d'activité : tertiaire, industriel,
            résidentiel et commercial. Des protocoles certifiés et du matériel de pointe.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Tous nos services ({SERVICES_LIST.length})
            </button>
            <button
              onClick={() => setFilter('tertiaire')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'tertiaire'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Bureaux, Immeubles & Commerces
            </button>
            <button
              onClick={() => setFilter('industriel')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'industriel'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Industrie & Fin de chantier
            </button>
            <button
              onClick={() => setFilter('technique')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'technique'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Vitrerie & Rénovation des sols
            </button>
          </div>
        </div>

        {/* Services Cards Grid (8 Core Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={`Prestation de ${service.title} par PRONET`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20">
                    {service.highlightBadge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>Fiche complète</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="px-3 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-sky-600 rounded-lg transition-colors cursor-pointer"
                  >
                    Devis rapide
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA below services */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-black">
              Vous avez un besoin spécifique ou un site multisites complexe ?
            </h3>
            <p className="text-sm text-slate-300">
              Nos chargés d’études industrielles réalisent des cahiers des charges personnalisés sur
              toute la France.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('industriel')}
            className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/30 whitespace-nowrap cursor-pointer transition-all hover:scale-105"
          >
            Consulter un ingénieur d'affaires
          </button>
        </div>
      </div>
    </section>
  );
};
