import React from 'react';
import {
  ShieldCheck,
  Users,
  Leaf,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { KEY_STATS } from '../data/cleaningData';

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
          {/* Left Column: Text presentation & story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Qui sommes-nous</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Des experts du nettoyage à votre service
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Fondée sur des valeurs d'exigence, de rigueur et de discrétion,{' '}
              <strong className="text-slate-900 font-bold">Société PRONET</strong> s’est imposée comme
              le partenaire privilégié des directeurs d'immeubles, gestionnaires de sites
              tertiaires, syndics de copropriété et chefs d'entreprises en Île-de-France.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nos agents font l'objet d'un recrutement rigoureux (contrôle des références, casier
              judiciaire vierge, formations continues CQP) et sont équipés de machines
              professionnelles de pointe (autolaveuses Kärcher / Nilfisk, injection-extraction,
              osmose inverse pour vitrerie). Nous adaptons nos horaires d'intervention pour respecter
              le confort et la sérénité de vos occupants.
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

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Programmer un audit de vos locaux</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Engagements Fondamentaux Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Réactivité &amp; Urgences</h3>
                  <span className="text-xs font-semibold text-sky-600">Intervention sous 24h</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Une astreinte et des équipes mobiles prêtes à intervenir rapidement en cas d'imprévu ou de sinistre.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Traçabilité &amp; Contrôle</h3>
                  <span className="text-xs font-semibold text-emerald-600">Cahier de liaison digital</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Suivi transparent des passages, rapports réguliers et fiches de contrôle transmises après chaque intervention.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Personnel Qualifié en CDI</h3>
                  <span className="text-xs font-semibold text-blue-600">Stabilité &amp; Discrétion</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Des agents attitrés et fidélisés pour garantir une parfaite connaissance de vos locaux et de vos habitudes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Santé &amp; Éco-responsabilité</h3>
                  <span className="text-xs font-semibold text-teal-600">100% Produits Écolabel</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Des formulations saines sans perturbateurs endocriniens pour préserver la qualité de l’air et vos collaborateurs.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Key Stats Cards Grid (easily editable from cleaningData.ts) */}
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
