import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Calendar,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/cleaningData';
import { PronetLogo } from './PronetLogo';

interface HeaderProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3'
            : 'bg-white shadow-xs py-3.5 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation (>= lg) */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {/* Left Links */}
            <div className="flex-1 flex items-center justify-start gap-6 xl:gap-8">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
              >
                Accueil
              </button>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors flex items-center gap-1 cursor-pointer py-2"
                >
                  <span>Nos services</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Prestations certifiées</span>
                      <span className="text-sky-600">8 domaines d'intervention</span>
                    </div>
                    {SERVICES_LIST.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onSelectService(srv.id);
                        }}
                        className="flex items-start gap-3 p-2 rounded-xl text-left hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {srv.shortDesc}
                          </div>
                        </div>
                      </button>
                    ))}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          scrollToSection('services');
                        }}
                        className="w-full text-center text-xs font-semibold text-sky-600 hover:text-sky-700 py-1 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Voir tous les services en détail <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('realisations')}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
              >
                Nos réalisations
              </button>

              <button
                onClick={() => scrollToSection('apropos')}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
              >
                À propos
              </button>
            </div>

            {/* Center Enlarged Logo with Prendre rendez-vous in green below */}
            <div className="flex flex-col items-center justify-center shrink-0 px-2 sm:px-4 py-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center group focus:outline-none"
                aria-label="PRONET Propreté & Multi-Services - Retour à l'accueil"
              >
                <PronetLogo size="header" showText={false} />
              </a>

              {/* Bouton Prendre rendez-vous en vert en bas du logo */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="mt-1 sm:mt-1.5 inline-flex items-center gap-1.5 px-4 py-1 sm:px-5 sm:py-1.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-full shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer tracking-wide"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-100" />
                <span>Prendre rendez-vous</span>
              </button>
            </div>

            {/* Right Action / Contact */}
            <div className="flex-1 flex items-center justify-end gap-5">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation (< lg) */}
          <div className="flex lg:hidden items-center justify-between w-full py-1">
            {/* Left: Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>

            {/* Center: Enlarged Logo with Prendre rendez-vous in green below */}
            <div className="flex flex-col items-center justify-center py-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center group focus:outline-none"
                aria-label="PRONET Propreté & Multi-Services - Retour à l'accueil"
              >
                <PronetLogo size="header" showText={false} />
              </a>

              {/* Bouton Prendre rendez-vous en vert en bas du logo */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="mt-1 inline-flex items-center gap-1 px-3 py-1 text-[11px] sm:text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-3 h-3 text-emerald-100" />
                <span>Prendre rendez-vous</span>
              </button>
            </div>

            {/* Right: spacer to keep center logo perfectly balanced */}
            <div className="w-10" />
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="grid gap-1">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
              >
                <span>Nos services</span>
                <span className="text-xs px-2 py-0.5 bg-sky-100 text-sky-800 rounded-full font-bold">
                  8 prestations
                </span>
              </button>
              <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                {SERVICES_LIST.slice(0, 4).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectService(s.id);
                    }}
                    className="w-full text-left text-xs py-1.5 text-slate-600 hover:text-sky-600 font-medium"
                  >
                    • {s.title}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left text-xs py-1 text-sky-600 font-bold"
                >
                  + Voir toutes les prestations...
                </button>
              </div>

              <button
                onClick={() => scrollToSection('realisations')}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Nos réalisations (Avant/Après)
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                À propos & Chiffres clés
              </button>
              <button
                onClick={() => scrollToSection('pourquoi-nous')}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Pourquoi nous choisir
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact & Zones
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-900 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Appeler : {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-600/20 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre rendez-vous</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
