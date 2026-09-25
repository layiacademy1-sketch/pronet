import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuoteSection } from './components/QuoteSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnersSection } from './components/PartnersSection';
import { EcoCommitment } from './components/EcoCommitment';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';
import { QuoteModal } from './components/QuoteModal';
import { SERVICES_LIST } from './data/cleaningData';
import { ServiceItem } from './types';

export default function App() {
  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteServiceId, setSelectedQuoteServiceId] = useState<string | undefined>('bureaux');

  // Service Detail Modal state
  const [detailedService, setDetailedService] = useState<ServiceItem | null>(null);

  // Legal modal state
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    tab: 'mentions' | 'confidentialite' | 'cgv';
  }>({
    isOpen: false,
    tab: 'mentions',
  });

  // Handlers
  const handleOpenQuoteModal = (serviceId?: string) => {
    if (serviceId) {
      setSelectedQuoteServiceId(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    const srv = SERVICES_LIST.find((s) => s.id === serviceId);
    if (srv) {
      setDetailedService(srv);
    }
  };

  const handleOpenLegal = (tab: 'mentions' | 'confidentialite' | 'cgv') => {
    setLegalModalState({
      isOpen: true,
      tab,
    });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-sky-600 selection:text-white">
      {/* 1. Header with sticky navigation, logo & fast CTA */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onSelectService={handleSelectService}
      />

      <main className="flex-1">
        {/* 2. Hero Section with high-end photo, strong headline & reassurance checklist */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={scrollToServices}
        />

        {/* 3. Section Devis Express ultra-visible with client-side validation & anti-spam */}
        <QuoteSection preselectedServiceId={selectedQuoteServiceId} />

        {/* 4. Section Partenaires & Références: "Ils nous font confiance" carrousel continu vers la gauche */}
        <PartnersSection />

        {/* 5. Section Présentation: "Des experts du nettoyage à votre service" with editable stats cards */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 6. Section Services with 8 comprehensive cards, photos, badges and detail views */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 7. Section Pourquoi nous choisir: 6 main advantages & certified expertise */}
        <WhyUsSection />

        {/* 8. Section Processus de travail: 4 connected steps (horizontal on desktop, vertical on mobile) */}
        <ProcessSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 9. Section Réalisations: Interactive Before / After comparison sliders with category filter */}
        <ProjectsSection />

        {/* 10. Section Témoignages: Carousel with 5-star verified reviews, auto-scroll with pause on hover */}
        <TestimonialsSection />

        {/* 11. Eco / CSR Commitment: 100% Ecolabel European & environmental safety */}
        <EcoCommitment />

        {/* 12. FAQ Section: Answers to top questions */}
        <FaqSection />

        {/* 13. Section CTA Attractive: "Besoin d'une solution de nettoyage adaptée à votre entreprise ?" */}
        <CtaBanner
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToContact={scrollToContact}
        />

        {/* 14. Section Contact: Phone, Email, Hours, Zone d'intervention, Message form & Google Map */}
        <ContactSection />
      </main>

      {/* 15. Footer: Logo, description, navigation, services, RGPD & © 2026 – Tous droits réservés */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onSelectService={handleSelectService}
        onOpenLegal={handleOpenLegal}
      />

      {/* Floating WhatsApp Button in bottom-right with pre-filled message */}
      <WhatsAppButton />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={detailedService}
        onClose={() => setDetailedService(null)}
        onOpenQuoteModal={(serviceId) => {
          setDetailedService(null);
          handleOpenQuoteModal(serviceId);
        }}
      />

      {/* Quick Quote Modal from buttons */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        preselectedServiceId={selectedQuoteServiceId}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Legal & Privacy Policy Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
