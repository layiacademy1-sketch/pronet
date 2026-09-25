import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/cleaningData';
import { PronetLogo } from './PronetLogo';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
  onOpenLegal: (tab: 'mentions' | 'confidentialite' | 'cgv') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onSelectService,
  onOpenLegal,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Col 1: Brand Logo, Presentation Text & Agent Photo in Fade */}
          <div className="lg:col-span-4 space-y-4">
            <PronetLogo variant="dark" size="lg" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {COMPANY_INFO.shortBio}
            </p>

            {/* Photo in fade with head clearly visible */}
            <div className="relative pt-2">
              <div className="relative w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900/60 group">
                <img
                  src="/assets/agent-pronet.jpg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://image.noelshack.com/fichiers/2026/39/5/1790300427-lllll.jpg';
                  }}
                  alt="Agent professionnel PRONET"
                  className="w-full h-56 sm:h-64 object-cover object-top filter brightness-[0.98] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Col 2: Services List (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Nos prestations
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv.id)}
                    className="hover:text-sky-400 text-left transition-colors cursor-pointer text-slate-400 hover:underline"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation rapide (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('accueil')}
                  className="hover:text-sky-400 transition-colors text-slate-400 cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-sky-400 transition-colors text-slate-400 cursor-pointer"
                >
                  Nos services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('realisations')}
                  className="hover:text-sky-400 transition-colors text-slate-400 cursor-pointer"
                >
                  Nos réalisations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('apropos')}
                  className="hover:text-sky-400 transition-colors text-slate-400 cursor-pointer"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('processus')}
                  className="hover:text-sky-400 transition-colors text-slate-400 cursor-pointer"
                >
                  Processus de travail
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-sky-400 transition-colors text-slate-400 cursor-pointer"
                >
                  Contact & Agences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="text-sky-400 font-bold hover:underline cursor-pointer"
                >
                  Demander un devis
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordonnées & Permanence (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Contact & Permanence
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="block text-[10px] text-slate-500">
                    Astreinte d'urgence 24h/24
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}, {COMPANY_INFO.city}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full py-2.5 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-sky-600/20"
              >
                <span>Obtenir un devis en 24h</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 – Tous droits réservés. {COMPANY_INFO.legalName}.</p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegal('mentions')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('confidentialite')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Politique de confidentialité
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('cgv')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Conditions d'intervention
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
