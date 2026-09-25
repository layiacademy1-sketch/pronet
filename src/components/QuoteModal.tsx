import React, { useEffect, useState } from 'react';
import { X, Sparkles, Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/cleaningData';
import { QuoteFormData } from '../types';
import {
  buildQuoteWhatsAppUrl,
  openWhatsApp,
  DIRECT_PHONE,
  DIRECT_PHONE_RAW,
} from '../utils/whatsapp';

interface QuoteModalProps {
  isOpen: boolean;
  preselectedServiceId?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  preselectedServiceId,
  onClose,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'bureaux',
    surface: '',
    address: '',
    postalCode: '',
    city: '',
    frequency: 'hebdomadaire',
    message: '',
    acceptTerms: true,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Votre nom est requis.';
    if (!formData.company.trim()) errs.company = 'Nom de votre entreprise ou syndic requis.';
    if (!formData.phone.trim()) errs.phone = 'Numéro de téléphone requis.';
    if (!formData.email.trim()) errs.email = 'E-mail professionnel requis.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errs.email = 'E-mail invalide.';
    if (!formData.city.trim()) errs.city = 'Ville ou code postal requis.';
    if (!formData.acceptTerms) errs.acceptTerms = 'Veuillez accepter les conditions.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    const ref = `RDV-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const waUrl = buildQuoteWhatsAppUrl({
      ...formData,
      reference: ref,
      type: 'rendez-vous',
    });

    setSubmittedRef(ref);
    setSubmittedWhatsAppUrl(waUrl);

    // Send everything to WhatsApp directly
    openWhatsApp(waUrl);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setSubmittedRef(null);
    setSubmittedWhatsAppUrl(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">Prendre rendez-vous & Devis express</h3>
              <p className="text-[11px] text-slate-500">Transmission directe sur WhatsApp ({DIRECT_PHONE})</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submittedRef ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">Demande envoyée sur WhatsApp !</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Toutes vos informations (dossier référence{' '}
                <span className="font-mono font-bold text-emerald-600">{submittedRef}</span>) sont
                transmises à notre conseiller sur WhatsApp au{' '}
                <strong className="text-slate-900">{DIRECT_PHONE}</strong>.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                {submittedWhatsAppUrl && (
                  <a
                    href={submittedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Ouvrir la conversation WhatsApp</span>
                  </a>
                )}
                <a
                  href={`tel:${DIRECT_PHONE_RAW}`}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Appeler le {DIRECT_PHONE}</span>
                </a>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Fermer cette fenêtre
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Direct call banner without filling the form */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-950 block text-xs">
                      Vous préférez appeler sans remplir le formulaire ?
                    </span>
                    <span className="text-emerald-800 text-[11px]">
                      Ligne directe 7j/7 : intervention & chiffrage immédiat
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${DIRECT_PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Appeler {DIRECT_PHONE}</span>
                </a>
              </div>

              {/* Anti-bot honeypot */}
              <input
                type="text"
                tabIndex={-1}
                className="hidden"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nom et Prénom *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : Isabelle Martin"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Entreprise ou Copropriété *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : SAS Innovatech"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: '' });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                  {errors.company && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    placeholder="06 31 91 46 71"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail professionnel *
                  </label>
                  <input
                    type="email"
                    placeholder="isabelle@entreprise.fr"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Prestation souhaitée *
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Ville ou Code Postal *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : Paris 9e ou 92200"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (errors.city) setErrors({ ...errors, city: '' });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                  {errors.city && (
                    <p className="text-[11px] text-red-600 mt-0.5">{errors.city}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Surface estimée (m²)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex : 250 m²"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Fréquence souhaitée
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white"
                  >
                    <option value="quotidien">Quotidienne (5 à 7j/7)</option>
                    <option value="hebdomadaire">Hebdomadaire (1 à 3 fois/semaine)</option>
                    <option value="ponctuel">Ponctuel / Remise en état / Fin de chantier</option>
                    <option value="urgence">Urgence / Dégât / Astreinte</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message ou précisions
                </label>
                <textarea
                  rows={2}
                  placeholder="Horaires souhaités, contraintes d'accès ou spécificités..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, acceptTerms: e.target.checked })
                    }
                    className="mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                  />
                  <span>J'accepte le traitement de mes coordonnées pour l'élaboration du devis.</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmission sur WhatsApp en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer la demande sur WhatsApp ({DIRECT_PHONE})</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
