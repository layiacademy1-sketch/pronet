import React from 'react';
import { ArrowRight, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/cleaningData';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
  onScrollToContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenQuoteModal,
  onScrollToContact,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-sky-600 via-sky-700 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative light elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-sky-200" />
            <span>Chiffrage sur mesure & sans engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Besoin d’une solution de nettoyage adaptée à votre entreprise ?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Que vous gériez un siège social, un entrepôt logistique ou un parc d’immeubles, nous
            concevons le cahier des charges optimal adapté à vos exigences et à vos horaires.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-base rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </button>

            <button
              onClick={onScrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base rounded-xl backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Nous contacter</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-sky-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              Devis détaillé sous 24h
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-sky-300" />
              Ligne directe : {COMPANY_INFO.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
