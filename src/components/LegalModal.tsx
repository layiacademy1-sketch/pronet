import React, { useState } from 'react';
import { X, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/cleaningData';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: 'mentions' | 'confidentialite' | 'cgv';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'mentions',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'mentions' | 'confidentialite' | 'cgv'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-600" />
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              Informations Légales & Conformité RGPD
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Fermer la modale"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2">
          <button
            onClick={() => setActiveTab('mentions')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'mentions'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Mentions légales
          </button>
          <button
            onClick={() => setActiveTab('confidentialite')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'confidentialite'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Politique de confidentialité (RGPD)
          </button>
          <button
            onClick={() => setActiveTab('cgv')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'cgv'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Conditions d'intervention
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {activeTab === 'mentions' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">1. Éditeur de la plateforme</h3>
              <p>
                Le présent site internet est édité par la société{' '}
                <strong>{COMPANY_INFO.legalName}</strong>, Société par Actions Simplifiée au capital
                de 50 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le
                numéro <strong>{COMPANY_INFO.rcs}</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Siège social :</strong> {COMPANY_INFO.address}, {COMPANY_INFO.city}
                </li>
                <li>
                  <strong>Numéro SIRET :</strong> {COMPANY_INFO.siret}
                </li>
                <li>
                  <strong>Code APE / NAF :</strong> {COMPANY_INFO.ape}
                </li>
                <li>
                  <strong>Directeur de la publication :</strong> Direction Générale PRONET
                </li>
                <li>
                  <strong>Téléphone :</strong> {COMPANY_INFO.phone}
                </li>
                <li>
                  <strong>E-mail :</strong> {COMPANY_INFO.email}
                </li>
              </ul>

              <h3 className="text-base font-bold text-slate-900 pt-3">
                2. Assurance Responsabilité Civile Professionnelle
              </h3>
              <p>
                {COMPANY_INFO.legalName} est titulaire d’une police d’assurance Responsabilité
                Civile Professionnelle souscrite auprès de <strong>{COMPANY_INFO.assurance}</strong>
                , couvrant l'ensemble de ses interventions sur site industriel, tertiaire ou
                résidentiel.
              </p>

              <h3 className="text-base font-bold text-slate-900 pt-3">3. Hébergement</h3>
              <p>
                Ce site web est hébergé sur des serveurs sécurisés situés dans l'Union Européenne
                (Google Cloud Platform / Cloud Run Europe-West, conforme ISO 27001 et SOC 2).
              </p>
            </div>
          )}

          {activeTab === 'confidentialite' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Traitement des données personnelles (RGPD)
              </h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE
                2016/679) et à la Loi Informatique et Libertés :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Finalité de la collecte :</strong> Les données saisies dans les formulaires
                  (devis et contact) sont uniquement utilisées pour l'établissement de propositions
                  commerciales, la gestion de la relation client et l'organisation des visites sur
                  site.
                </li>
                <li>
                  <strong>Absence de transmission :</strong> Vos coordonnées professionnelles ne
                  sont en aucun cas commercialisées, échangées ou transmises à des tiers.
                </li>
                <li>
                  <strong>Durée de conservation :</strong> Les données de devis sont conservées
                  pendant 36 mois maximum à compter du dernier contact.
                </li>
                <li>
                  <strong>Vos droits :</strong> Vous disposez d’un droit d’accès, de rectification,
                  d’effacement et de portabilité de vos données personnelles par simple demande par
                  e-mail à <span className="text-sky-600 font-semibold">{COMPANY_INFO.email}</span>.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'cgv' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Engagements de service et charte qualité
              </h3>
              <p>
                Toute intervention régulière ou ponctuelle fait l'objet d'un ordre de mission ou d'un
                contrat de prestations de propreté avec cahier des charges validé conjointement :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Contrôle contradictoire :</strong> Des visites d'inspection contradictoires
                  sont organisées périodiquement avec le superviseur et votre représentant.
                </li>
                <li>
                  <strong>Astreinte d'urgence :</strong> Les titulaires de contrats annuels disposent
                  d'une ligne d'astreinte 24h/24 en cas de sinistre ou dégât nécessitant un pompage ou
                  un nettoyage immédiat.
                </li>
                <li>
                  <strong>Sécurité & Habilitations :</strong> Nos agents interviennent munis de leurs
                  badges d'identification et respectent rigoureusement le règlement intérieur de vos
                  locaux.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Modal Bottom */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
