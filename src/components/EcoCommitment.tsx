import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, Recycle, Droplets, Sparkles } from 'lucide-react';

export const EcoCommitment: React.FC = () => {
  return (
    <section className="py-16 bg-emerald-950 text-white relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-emerald-800/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              <Leaf className="w-3.5 h-3.5" />
              <span>Engagement RSE & Éco-responsabilité</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Une propreté impeccable dans le respect absolu de la planète
            </h2>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              Nous sélectionnons exclusivement des solutions éco-certifiées préservant la santé de
              vos salariés tout en réduisant l'empreinte environnementale de vos bâtiments.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-emerald-900/50 border border-emerald-700/50 backdrop-blur-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Produits 100% Écolabel</h3>
              <p className="text-xs text-emerald-200/80">
                Formules végétales d’origine naturelle, biodégradables et sans COV agressifs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-900/50 border border-emerald-700/50 backdrop-blur-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Économie d'eau & énergie</h3>
              <p className="text-xs text-emerald-200/80">
                Lavage par imprégnation microfibre réduisant la consommation hydrique de 70%.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-900/50 border border-emerald-700/50 backdrop-blur-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Bien-être au travail</h3>
              <p className="text-xs text-emerald-200/80">
                Matériel ergonomique réduisant les TMS pour nos agents de propreté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
