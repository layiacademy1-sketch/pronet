import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Award,
  PhoneCall,
  Star,
  Calendar,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/cleaningData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onExploreServices }) => {
  return (
    <section id="accueil" className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background video & overlays of professional office cleaning */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/office-cleaning-poster.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.10] scale-105"
        >
          <source src="/assets/office-cleaning.mp4" type="video/mp4" />
          {/* Fallback image if video cannot play */}
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85"
            alt="Agents professionnels de propreté et nettoyage multi-services PRONET"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.08]"
          />
        </video>
        {/* Cinematic gradient overlays for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(2,132,199,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              <span>Entreprise de nettoyage industriel & tertiaire certifiée</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Votre partenaire de confiance pour un{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                environnement impeccable
              </span>
            </h1>

            {/* Subtitle / Short description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {COMPANY_INFO.shortBio}
            </p>

            {/* Reassurance Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Intervention professionnelle
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Équipe qualifiée & formée
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Solutions sur mesure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Devis gratuit sous 24h
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 rounded-xl shadow-xl shadow-sky-600/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <Calendar className="w-5 h-5 text-sky-200" />
                <span>Prendre rendez-vous</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-xl border border-white/15 transition-all cursor-pointer"
              >
                <span>Découvrir nos services</span>
              </button>
            </div>

            {/* Bottom rating & certification badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5</span>
                <span className="text-slate-400">(180+ avis pros vérifiés)</span>
              </div>
              <div className="hidden sm:block text-slate-600">•</div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Assurance AXA RC Pro 10 000 000 €</span>
              </div>
            </div>
          </div>

          {/* Quick Glass Card on Right */}
          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-7 shadow-2xl text-slate-100 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                      Intervention Express
                    </h2>
                    <p className="text-[11px] text-sky-200">Partout en France métropolitaine</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-md uppercase border border-emerald-400/30">
                  Disponible
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Chiffrage sous 24h chrono</strong>
                    <span className="text-slate-300 text-xs">Visite sur site gratuite et sans engagement</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Award className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Produits Écolabel Européen</strong>
                    <span className="text-slate-300 text-xs">0% de solvants nocifs pour la santé</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <PhoneCall className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Ligne directe entreprise</strong>
                    <span className="text-slate-300 text-xs">Astreinte opérationnelle joignable 24h/24</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3.5 px-4 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/30 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calculer mon devis maintenant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
