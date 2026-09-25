import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Building,
  ArrowRight,
  Clock,
  Sparkles,
  Phone,
  Tag,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/cleaningData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Accueil</span>
            <span>/</span>
            <span>Nos services</span>
            <span>/</span>
            <span className="font-bold text-sky-600 truncate max-w-[200px] sm:max-w-xs">
              {service.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Fermer la fiche détaillée"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-21/9 bg-slate-900 shadow-md">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
              <span className="px-3 py-1 bg-sky-500 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-sm mb-2 inline-block">
                {service.highlightBadge}
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">{service.title}</h2>
            </div>
          </div>

          {/* Long Description & Presentation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Présentation de la prestation</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.longDesc}
            </p>
          </div>

          {/* Grid of Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interventions types */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Protocoles & Interventions incluses</span>
              </div>
              <ul className="space-y-2">
                {service.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Matériel & Équipements */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Wrench className="w-4 h-4 text-sky-600" />
                <span>Matériel & Équipements déployés</span>
              </div>
              <ul className="space-y-2">
                {service.equipment.map((eq, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lieux d'intervention & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Building className="w-4 h-4 text-sky-600" />
                <span>Lieux et types de locaux traités</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.typicalInterventions.map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg border border-sky-200/60 shadow-xs"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garanties & Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing indicator banner */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Tag className="w-4 h-4 text-sky-600" />
              <span>
                Tarification indicative :{' '}
                <strong className="text-slate-900">{service.startingPrice}</strong>
              </span>
            </div>
            <span className="text-slate-500 text-[11px]">
              Visite technique sur site & devis précis gratuits sous 24h
            </span>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-emerald-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>Appel direct sans formulaire : {COMPANY_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(service.id);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Demander un devis pour ce service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
