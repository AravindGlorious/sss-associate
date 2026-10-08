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
import { RefundPolicyView } from './views/RefundPolicyView';
import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('legal-advisory');
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);

  // Sync with browser URL pathname and hash on mount, popstate & hashchange
  useEffect(() => {
    const parseCurrentRoute = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      const hash = window.location.hash.replace('#', '');

      // Check pathname first (clean URLs like /about, /services, /services/legal-advisory)
      if (pathname === '/about') {
        setCurrentView('about');
      } else if (pathname === '/services') {
        setCurrentView('services');
      } else if (pathname.startsWith('/services/')) {
        const id = pathname.replace('/services/', '');
        if (SERVICES_DATA.some((s) => s.id === id)) {
          setSelectedServiceId(id);
          setCurrentView('service-detail');
        } else {
          setCurrentView('services');
        }
      } else if (pathname === '/contact') {
        setCurrentView('contact');
      } else if (pathname === '/privacy' || pathname === '/privacy-policy') {
        setCurrentView('privacy');
      } else if (
        pathname === '/disclaimer' ||
        pathname === '/bar-council-compliance' ||
        pathname === '/advocate-disclaimer'
      ) {
        setCurrentView('disclaimer');
      } else if (
        pathname === '/terms' ||
        pathname === '/terms-of-use' ||
        pathname === '/user-agreement'
      ) {
        setCurrentView('terms');
      } else if (
        pathname === '/refund' ||
        pathname === '/refund-policy' ||
        pathname === '/cancellation-policy'
      ) {
        setCurrentView('refund');
      } else if (hash) {
        // Fallback to hash if present
        if (hash === 'home') {
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
        } else if (hash === 'disclaimer' || hash === 'bar-council-compliance') {
          setCurrentView('disclaimer');
        } else if (hash === 'terms' || hash === 'terms-of-use') {
          setCurrentView('terms');
        } else if (hash === 'refund' || hash === 'refund-policy') {
          setCurrentView('refund');
        }
      } else {
        setCurrentView('home');
      }
    };

    parseCurrentRoute();
    window.addEventListener('popstate', parseCurrentRoute);
    window.addEventListener('hashchange', parseCurrentRoute);
    return () => {
      window.removeEventListener('popstate', parseCurrentRoute);
      window.removeEventListener('hashchange', parseCurrentRoute);
    };
  }, []);

  const handleNavigate = (view: string, serviceId?: string) => {
    let targetPath = '/';
    if (view === 'home') {
      targetPath = '/';
      setCurrentView('home');
    } else if (view === 'services') {
      targetPath = '/services';
      setCurrentView('services');
    } else if (view === 'service-detail' && serviceId) {
      targetPath = `/services/${serviceId}`;
      setSelectedServiceId(serviceId);
      setCurrentView('service-detail');
    } else if (view === 'about') {
      targetPath = '/about';
      setCurrentView('about');
    } else if (view === 'contact') {
      targetPath = '/contact';
      setCurrentView('contact');
    } else if (view === 'privacy') {
      targetPath = '/privacy';
      setCurrentView('privacy');
    } else if (view === 'disclaimer') {
      targetPath = '/disclaimer';
      setCurrentView('disclaimer');
    } else if (view === 'terms') {
      targetPath = '/terms';
      setCurrentView('terms');
    } else if (view === 'refund') {
      targetPath = '/refund';
      setCurrentView('refund');
    }

    try {
      window.history.pushState({}, '', targetPath);
    } catch {
      // Fallback for restricted iframe environments
      window.location.hash = targetPath === '/' ? 'home' : targetPath.replace('/', '');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service-detail');
    try {
      window.history.pushState({}, '', `/services/${serviceId}`);
    } catch {
      window.location.hash = `service-${serviceId}`;
    }
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

        {currentView === 'refund' && <RefundPolicyView onNavigate={handleNavigate} />}
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
