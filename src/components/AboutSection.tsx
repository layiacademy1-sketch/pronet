import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle,
  TrendingUp,
  Leaf,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { KEY_STATS, COMPANY_INFO, CLIENT_PARTNERS } from '../data/cleaningData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="apropos" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-50 pointer-events-none blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-50 pointer-events-none blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual presentation with Partenaires & Références Carousel */}
          <div className="lg:col-span-6 relative">
            {/* Partenaires & Références Card with continuous leftward carousel */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/90 border border-slate-200/80 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-600" />
                  <span className="text-sm font-black uppercase tracking-wider text-slate-800">
                    Partenaires & Références
                  </span>
                </div>
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                  Ils nous font confiance
                </span>
              </div>

              <p className="text-xs text-slate-500 mb-4 px-1">
                Entreprises tertiaires, syndics et gestionnaires immobiliers qui délèguent la propreté de leurs sites à nos équipes :
              </p>

              {/* Slow leftward carousel of partner logos */}
              <div className="relative w-full overflow-hidden mask-fade py-2">
                <div className="animate-marquee flex items-center">
                  {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((partner, idx) => (
                    <div
                      key={`about-partner-${partner.id}-${idx}`}
                      className="mx-2 shrink-0 flex items-center justify-center h-14 w-32 px-3 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
                      title={partner.name}
                    >
                      {partner.logoUrl ? (
                        <img
                          src={partner.logoUrl}
                          alt={partner.name}
                          className="max-h-9 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-[11px] font-bold text-slate-700 truncate">
                          {partner.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Value proposition badges inside the card */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <div className="text-base font-black text-sky-600">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Contrats renouvelés</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                  <div className="text-base font-black text-emerald-600">&lt; 24h</div>
                  <div className="text-[11px] text-slate-500 font-medium">Délai d'intervention</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Qui sommes-nous</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Des experts du nettoyage à votre service
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Fondée sur des valeurs d'exigence, de rigueur et de discrétion,{' '}
              <strong className="text-slate-900">Société PRONET</strong> s’est imposée comme
              le partenaire privilégié des directeurs d'immeubles, gestionnaires de sites
              industriels, syndics de copropriété et chefs d'entreprises en Île-de-France.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Nos agents font l'objet d'un recrutement rigoureux (contrôle des références, casier
              judiciaire vierge, formations continues CQP) et sont équipés de machines
              professionnelles de pointe (autolaveuses Kärcher / Nilfisk, injection-extraction,
              osmose inverse pour vitrerie). Nous intervenons en horaires sur-mesure pour respecter
              le confort de vos occupants.
            </p>

            {/* Checklist pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">
                  Agents en CDI qualifiés & fidélisés
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">
                  Cahier de liaison numérique avec photos
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">
                  Produits 100% Écolabel respectueux
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800">
                  Interlocuteur dédié joignable 7j/7
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Programmer un audit de vos locaux</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Key Stats Cards Grid (Requested: easily editable from cleaningData.ts) */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-100">
          <div className="text-center mb-8">
            <h3 className="text-xs uppercase tracking-widest font-black text-slate-400">
              Nos chiffres clés d'activité
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_STATS.map((stat) => (
              <div
                key={stat.id}
                className={`relative p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
                  stat.highlight
                    ? 'bg-gradient-to-br from-sky-600 to-sky-700 text-white shadow-xl shadow-sky-600/20 -translate-y-1'
                    : 'bg-slate-50 border border-slate-200/80 text-slate-900 hover:shadow-md'
                }`}
              >
                <div
                  className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 ${
                    stat.highlight ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm sm:text-base font-bold leading-snug mb-1 ${
                    stat.highlight ? 'text-sky-100' : 'text-slate-800'
                  }`}
                >
                  {stat.label}
                </div>
                <p
                  className={`text-xs ${
                    stat.highlight ? 'text-sky-200' : 'text-slate-500'
                  }`}
                >
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
