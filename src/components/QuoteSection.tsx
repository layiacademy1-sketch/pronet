import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
  Clock,
  ShieldCheck,
  Building,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/cleaningData';
import { QuoteFormData } from '../types';
import {
  buildQuoteWhatsAppUrl,
  openWhatsApp,
  DIRECT_PHONE,
  DIRECT_PHONE_RAW,
} from '../utils/whatsapp';

interface QuoteSectionProps {
  preselectedServiceId?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ preselectedServiceId }) => {
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
  const [submittedData, setSubmittedData] = useState<{
    reference: string;
    clientName: string;
    serviceName: string;
    whatsappUrl?: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Veuillez renseigner votre nom complet ou interlocuteur.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Veuillez préciser le nom de votre société ou copropriété.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est obligatoire pour vous joindre.';
    } else if (!/^[0-9+.\s()-]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Format de téléphone invalide (ex: 06 31 91 46 71).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez saisir votre adresse e-mail professionnelle.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Veuillez renseigner une adresse e-mail valide.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Veuillez préciser la ville de l’intervention.';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Veuillez sélectionner un type de prestation.';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Veuillez accepter le traitement de vos coordonnées pour le devis.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam check: if honeypot is filled, treat as bot quietly
    if (formData.honeypot) {
      console.warn('Bot detected by honeypot field.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const generatedRef = `DEV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId);
    const waUrl = buildQuoteWhatsAppUrl({
      ...formData,
      reference: generatedRef,
      type: 'devis',
    });

    setSubmittedData({
      reference: generatedRef,
      clientName: formData.fullName,
      serviceName: selectedService ? selectedService.title : 'Nettoyage professionnel',
      whatsappUrl: waUrl,
    });

    openWhatsApp(waUrl);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      company: '',
      phone: '',
      email: '',
      serviceId: 'bureaux',
      surface: '',
      address: '',
      postalCode: '',
      city: '',
      frequency: 'hebdomadaire',
      message: '',
      acceptTerms: true,
      honeypot: '',
    });
    setErrors({});
  };

  return (
    <section id="devis" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Devis Express Gratuit & Sans Engagement</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Demandez votre devis sur mesure en 2 minutes
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Recevez un chiffrage clair, transparent et sans engagement sous 24h ouvrées. Un chargé
            d'affaires dédié analyse chaque spécificité de votre cahier des charges.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Left informational column */}
            <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-10 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-white">Pourquoi demander un devis ?</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Chaque espace tertiaire ou industriel a ses propres contraintes. Nous adaptons
                    nos cadences, nos agents et nos machines à vos besoins réels.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Réponse sous 24h</h4>
                      <p className="text-xs text-slate-400">
                        Audit sur site et chiffrage détaillé remis rapidement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Tarifs transparents</h4>
                      <p className="text-xs text-slate-400">
                        Zéro frais cachés. Détail main-d’œuvre, consommables et matériel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Visite technique offerte</h4>
                      <p className="text-xs text-slate-400">
                        Un expert se déplace sans frais pour métrer et calibrer le protocole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct call box without form */}
              <div className="mt-8 pt-6 border-t border-slate-800 space-y-2">
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                  Vous préférez appeler sans remplir le formulaire ?
                </p>
                <a
                  href={`tel:${DIRECT_PHONE_RAW}`}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 rounded-xl text-base font-black text-emerald-300 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-emerald-400 animate-pulse" />
                  <span>{DIRECT_PHONE}</span>
                </a>
                <p className="text-[11px] text-slate-400">
                  Ligne directe 7j/7 • Chiffrage immédiat par téléphone
                </p>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-8 p-6 sm:p-10">
              {submittedData ? (
                /* Success Screen */
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                      Demande transmise sur WhatsApp
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">
                      Merci {submittedData.clientName} !
                    </h3>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto">
                      Votre demande de devis pour la prestation «{' '}
                      <span className="font-semibold text-slate-900">
                        {submittedData.serviceName}
                      </span>{' '}
                      » a été préparée et transmise à notre conseiller sur WhatsApp ({DIRECT_PHONE}).
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between pb-1 border-b border-slate-200">
                      <span className="font-semibold">Référence dossier :</span>
                      <span className="font-mono font-bold text-emerald-700">
                        {submittedData.reference}
                      </span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-slate-200">
                      <span className="font-semibold">Destinataire WhatsApp :</span>
                      <span className="text-emerald-700 font-bold">{DIRECT_PHONE}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Chargé d'affaires :</span>
                      <span>Direction opérationnelle PRONET</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {submittedData.whatsappUrl && (
                      <a
                        href={submittedData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      >
                        <span>Ouvrir dans WhatsApp</span>
                      </a>
                    )}
                    <a
                      href={`tel:${DIRECT_PHONE_RAW}`}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Appeler le {DIRECT_PHONE}</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Nouveau calcul
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field (hidden from view for anti-spam) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_anti_bot_check"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Nom complet */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nom et Prénom *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : Philippe Lambert"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-300 focus:ring-red-200 bg-red-50/30'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Entreprise / Syndic */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Entreprise / Syndic / Organisme *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : Groupe Nexis / Syndic Rivoli"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.company
                            ? 'border-red-300 focus:ring-red-200 bg-red-50/30'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Téléphone professionnel *
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex : 06 31 91 46 71"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-200 bg-red-50/30'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Adresse E-mail professionnelle *
                      </label>
                      <input
                        type="email"
                        placeholder="Ex : contact@entreprise.fr"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-200 bg-red-50/30'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Prestation recherchée */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Prestation recherchée *
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.id}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Fréquence */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Fréquence
                      </label>
                      <select
                        value={formData.frequency}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                      >
                        <option value="quotidien">Quotidienne (5 à 7j/7)</option>
                        <option value="hebdomadaire">Hebdomadaire (1 à 3x/sem)</option>
                        <option value="mensuel">Mensuelle / Bimensuelle</option>
                        <option value="ponctuel">Ponctuelle / Remise en état</option>
                        <option value="urgence">Urgence / Astreinte immédiate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Surface */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Surface estimée (m²)
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : 350 m²"
                        value={formData.surface}
                        onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                      />
                    </div>

                    {/* Ville */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Ville ou Code Postal d'intervention *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : Paris 8e, Boulogne-Billancourt, Roissy..."
                        value={formData.city}
                        onChange={(e) => {
                          setFormData({ ...formData, city: e.target.value });
                          if (errors.city) setErrors({ ...errors, city: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.city
                            ? 'border-red-300 focus:ring-red-200 bg-red-50/30'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Détails de votre besoin ou cahier des charges
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Précisez ici les horaires souhaités, le type de sols (marbre, moquette, carrelage, béton), les contraintes d'accès ou toute demande spécifique..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                    />
                  </div>

                  {/* Terms & RGPD */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) =>
                          setFormData({ ...formData, acceptTerms: e.target.checked })
                        }
                        className="mt-0.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500 w-4 h-4"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        J'accepte que mes données soient utilisées par PRONET pour
                        l'établissement de mon devis et le suivi de ma demande commerciale.
                        Conformément au RGPD, aucune donnée n'est cédée à des tiers.
                      </span>
                    </label>
                    {errors.acceptTerms && (
                      <p className="mt-1 text-xs text-red-600">{errors.acceptTerms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmission sur WhatsApp en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer tout sur WhatsApp ({DIRECT_PHONE})</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2.5">
                      ✓ Réponse sous 24h ouvrées • ✓ Audit technique gratuit • ✓ Confidentialité
                      totale
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
