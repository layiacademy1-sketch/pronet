import React from 'react';
import {
  Award,
  Cog,
  Leaf,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  Zap,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/cleaningData';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-sky-600" />;
      case 'Cog':
        return <Cog className="w-6 h-6 text-sky-600" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-sky-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-sky-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-sky-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="pourquoi-nous" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Nos engagements d'excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Pourquoi choisir PRONET Propreté & Multi-Services ?
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Au-delà d'un simple prestataire, nous sommes un partenaire stratégique de votre hygiène
            d'entreprise. Découvrez les piliers qui font notre réputation auprès des grands comptes.
          </p>
        </div>

        {/* 6 Advantages Grid with modern cards, subtle borders and rounded corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-600 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {getIcon(item.icon)}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Norme qualité garantie</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance banner on safety & insurance */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400 flex items-center justify-center shrink-0 text-sky-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Garantie Zéro Rupture de Service
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Remplacement immédiat d'agent garanti en moins de 2 heures en cas d'absence
                imprévue. Votre site reste toujours irréprochable.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right hidden sm:block">
              <span className="block text-xs font-bold text-emerald-400">Astreinte 24h/24</span>
              <span className="text-[11px] text-slate-400">Superviseur d'astreinte dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
