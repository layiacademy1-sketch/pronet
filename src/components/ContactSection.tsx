import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  Building,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/cleaningData';
import {
  buildContactWhatsAppUrl,
  openWhatsApp,
  DIRECT_PHONE,
  DIRECT_PHONE_RAW,
} from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Renseignement général',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!contactForm.name.trim()) errs.name = 'Veuillez saisir votre nom.';
    if (!contactForm.email.trim()) errs.email = 'Veuillez saisir votre e-mail.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim()))
      errs.email = 'Format d’e-mail invalide.';
    if (!contactForm.phone.trim()) errs.phone = 'Numéro de téléphone requis.';
    if (!contactForm.message.trim()) errs.message = 'Veuillez préciser votre message.';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSending(true);

    const waUrl = buildContactWhatsAppUrl({
      name: contactForm.name,
      company: contactForm.company,
      phone: contactForm.phone,
      email: contactForm.email,
      subject: contactForm.subject,
      message: contactForm.message,
    });

    setSubmittedWhatsAppUrl(waUrl);
    openWhatsApp(waUrl);
    setSentSuccess(true);
    setIsSending(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Échangeons sur votre projet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contactez PRONET Propreté & Multi-Services
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Notre service client et nos ingénieurs d'affaires sont à votre disposition pour vous
            conseiller et organiser un audit technique immédiat de vos locaux.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Contact details & Zones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900">Coordonnées de l'entreprise</h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">
                      Téléphone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-black text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-slate-500">
                      Du lundi au samedi 6h-21h • Astreinte 24h/24
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">E-mail</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="block text-[11px] text-slate-500">
                      Réponse garantie sous 2 heures ouvrées
                    </span>
                  </div>
                </div>

                {/* Siège social */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">
                      Siège social
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {COMPANY_INFO.address}, {COMPANY_INFO.city}
                    </p>
                    <span className="block text-[11px] text-slate-500">
                      Accueil clientèle et rendez-vous professionnels
                    </span>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">
                      Horaires d'ouverture
                    </span>
                    <p className="text-sm font-semibold text-slate-900">{COMPANY_INFO.hours}</p>
                    <span className="block text-[11px] text-emerald-600 font-medium">
                      Interventions possibles en horaires décalés (nuit & week-end)
                    </span>
                  </div>
                </div>
              </div>

              {/* Zone d'intervention banner */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-4 h-4 text-sky-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Périmètre d'intervention
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Intervention immédiate sur tout Paris intra-muros et l'ensemble de l'Île-de-France
                  (75, 92, 93, 94, 78, 91, 95, 77) ainsi que sur les métropoles régionales pour les
                  comptes industriels et plateformes logistiques.
                </p>
              </div>
            </div>

            {/* Embedded Interactive Google Map Preview */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-2 pb-3">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  Localisation Siège & Agence
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Gagny (93)</span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 relative">
                <iframe
                  title="Plan d'accès PRONET - Gagny"
                  src="https://maps.google.com/maps?q=3%20Domaine%20des%207%20Iles%2C%2093220%20Gagny&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Envoyez-nous un message direct
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Pour une demande de renseignements, un partenariat ou une question administrative,
                complétez ce formulaire. Pour un devis précis, utilisez le module devis dédié.
              </p>

              {sentSuccess ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Message transmis sur WhatsApp !</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Merci {contactForm.name}, votre message a été préparé et transmis à notre conseiller sur WhatsApp au <strong className="text-slate-900">{DIRECT_PHONE}</strong>.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {submittedWhatsAppUrl && (
                      <a
                        href={submittedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      >
                        <span>Ouvrir sur WhatsApp</span>
                      </a>
                    )}
                    <a
                      href={`tel:${DIRECT_PHONE_RAW}`}
                      className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Appeler le {DIRECT_PHONE}</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSentSuccess(false);
                        setSubmittedWhatsAppUrl(null);
                        setContactForm({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          subject: 'Renseignement général',
                          message: '',
                        });
                      }}
                      className="px-6 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Direct call without form */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-emerald-950 block">
                          Vous préférez appeler sans remplir le formulaire ?
                        </span>
                        <span className="text-emerald-800 text-[11px]">
                          Ligne directe 7j/7 sans attente
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Votre Nom *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : Marc Dubois"
                        value={contactForm.name}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          formErrors.name
                            ? 'border-red-300 focus:ring-red-100 bg-red-50/20'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Société ou Copropriété
                      </label>
                      <input
                        type="text"
                        placeholder="Ex : Cabinet Alpha"
                        value={contactForm.company}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-sky-500 focus:ring-sky-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        placeholder="Ex : marc@cabinetalpha.fr"
                        value={contactForm.email}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          formErrors.email
                            ? 'border-red-300 focus:ring-red-100 bg-red-50/20'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        placeholder="Ex : 06 12 34 56 78"
                        value={contactForm.phone}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          formErrors.phone
                            ? 'border-red-300 focus:ring-red-100 bg-red-50/20'
                            : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-600">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Objet de votre demande
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500"
                    >
                      <option value="Renseignement général">Renseignement général</option>
                      <option value="Demande d'intervention urgente">Demande d'intervention urgente</option>
                      <option value="Partenariat / Appel d'offres">Partenariat / Réponse à Appel d'offres</option>
                      <option value="Recrutement / Candidature agent">Recrutement / Candidature agent de propreté</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Votre Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez votre besoin..."
                      value={contactForm.message}
                      onChange={(e) => {
                        setContactForm({ ...contactForm, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        formErrors.message
                          ? 'border-red-300 focus:ring-red-100 bg-red-50/20'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-xs text-red-600">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmission sur WhatsApp en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer tout sur WhatsApp ({DIRECT_PHONE})</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
