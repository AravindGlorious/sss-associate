import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationModal';

import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { PrivacyView } from './views/PrivacyView';
import { DisclaimerView } from './views/DisclaimerView';
import { TermsView } from './views/TermsView';
import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('legal-advisory');
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);

  // Sync with browser URL hash on mount & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'services') {
        setCurrentView('services');
      } else if (hash.startsWith('service-')) {
        const id = hash.replace('service-', '');
        if (SERVICES_DATA.some((s) => s.id === id)) {
          setSelectedServiceId(id);
          setCurrentView('service-detail');
        } else {
          setCurrentView('services');
        }
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'contact') {
        setCurrentView('contact');
      } else if (hash === 'privacy') {
        setCurrentView('privacy');
      } else if (hash === 'disclaimer') {
        setCurrentView('disclaimer');
      } else if (hash === 'terms') {
        setCurrentView('terms');
      } else if (hash === 'consultation') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('consultation');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string, serviceId?: string) => {
    if (view === 'service-detail' && serviceId) {
      setSelectedServiceId(serviceId);
      setCurrentView('service-detail');
      window.location.hash = `service-${serviceId}`;
    } else {
      setCurrentView(view);
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service-detail');
    window.location.hash = `service-${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-600 selection:text-white relative pb-16 sm:pb-0">
      
      {/* Header */}
      <Header
        currentView={currentView}
        selectedServiceId={selectedServiceId}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />

      {/* Main View Router */}
      <main id="main-content">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            onSelectService={handleSelectService}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        )}

        {currentView === 'service-detail' && (
          <ServiceDetailView
            serviceId={selectedServiceId}
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        )}

        {currentView === 'contact' && <ContactView />}

        {currentView === 'privacy' && <PrivacyView onNavigate={handleNavigate} />}

        {currentView === 'disclaimer' && <DisclaimerView onNavigate={handleNavigate} />}

        {currentView === 'terms' && <TermsView onNavigate={handleNavigate} />}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Mobile Sticky Quick Action Bar (Call 9385954338 & 9087853733 & WhatsApp) */}
      <MobileBottomBar />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialServiceId={selectedServiceId}
      />

    </div>
  );
}
