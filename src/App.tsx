import React, { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationModal';
import { SEO } from './components/SEO';
import { HomeTrustNotice } from './components/HomeTrustNotice';

import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { PrivacyView } from './views/PrivacyView';
import { DisclaimerView } from './views/DisclaimerView';
import { TermsView } from './views/TermsView';
import { RefundPolicyView } from './views/RefundPolicyView';
import { EditorialPolicyView } from './views/EditorialPolicyView';
import { BlogView } from './views/BlogView';

import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');

  const [selectedServiceId, setSelectedServiceId] =
    useState<string>('legal-advisory');

  const [consultationModalOpen, setConsultationModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    const parseCurrentRoute = () => {
      const pathname =
        window.location.pathname.replace(/\/$/, '') || '/';

      const hash = window.location.hash.replace('#', '');

      if (pathname === '/about') {
        setCurrentView('about');
      } else if (pathname === '/services') {
        setCurrentView('services');
      } else if (pathname.startsWith('/services/')) {
        const id = pathname.replace('/services/', '');

        if (SERVICES_DATA.some((service) => service.id === id)) {
          setSelectedServiceId(id);
          setCurrentView('service-detail');
        } else {
          setCurrentView('services');
        }
      } else if (pathname === '/contact') {
        setCurrentView('contact');
      } else if (pathname === '/blog') {
        setCurrentView('blog');
      } else if (
        pathname ===
        '/blog/how-to-verify-land-documents-before-buying-property'
      ) {
        setCurrentView('blog-post');
      } else if (pathname === '/editorial-policy') {
        setCurrentView('editorial-policy');
      } else if (
        pathname === '/privacy' ||
        pathname === '/privacy-policy'
      ) {
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
        if (hash === 'home') {
          setCurrentView('home');
        } else if (hash === 'services') {
          setCurrentView('services');
        } else if (hash.startsWith('service-')) {
          const id = hash.replace('service-', '');

          if (SERVICES_DATA.some((service) => service.id === id)) {
            setSelectedServiceId(id);
            setCurrentView('service-detail');
          } else {
            setCurrentView('services');
          }
        } else if (hash === 'about') {
          setCurrentView('about');
        } else if (hash === 'contact') {
          setCurrentView('contact');
        } else if (hash === 'blog') {
          setCurrentView('blog');
        } else if (
          hash ===
          'blog-how-to-verify-land-documents-before-buying-property'
        ) {
          setCurrentView('blog-post');
        } else if (hash === 'editorial-policy') {
          setCurrentView('editorial-policy');
        } else if (hash === 'privacy') {
          setCurrentView('privacy');
        } else if (
          hash === 'disclaimer' ||
          hash === 'bar-council-compliance'
        ) {
          setCurrentView('disclaimer');
        } else if (
          hash === 'terms' ||
          hash === 'terms-of-use'
        ) {
          setCurrentView('terms');
        } else if (
          hash === 'refund' ||
          hash === 'refund-policy'
        ) {
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
    } else if (view === 'blog') {
      targetPath = '/blog';
      setCurrentView('blog');
    } else if (view === 'blog-post') {
      targetPath =
        '/blog/how-to-verify-land-documents-before-buying-property';
      setCurrentView('blog-post');
    } else if (view === 'editorial-policy') {
      targetPath = '/editorial-policy';
      setCurrentView('editorial-policy');
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
      const fallbackHash =
        view === 'blog-post'
          ? 'blog-how-to-verify-land-documents-before-buying-property'
          : targetPath === '/'
            ? 'home'
            : targetPath.replace('/', '');

      window.location.hash = fallbackHash;
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

  const selectedService = SERVICES_DATA.find(
    (service) => service.id === selectedServiceId
  );

  const seoConfig = (() => {
    switch (currentView) {
      case 'services':
        return {
          title: 'Legal & Financial Services | SSS Associate',
          description:
            'Explore legal advisory, property document verification, loan assistance, auditing and debt settlement services from SSS Associate, Coimbatore, Tamil Nadu.',
          keywords:
            'legal advisory, property document verification, loan assistance, auditing, debt settlement, Coimbatore, Tamil Nadu',
          path: '/services',
        };

      case 'service-detail':
        return {
          title:
            selectedService?.metaTitle ||
            'Legal & Financial Advisory Services | SSS Associate',
          description:
            selectedService?.metaDescription ||
            'Explore legal and financial consultancy services from SSS Associate, Coimbatore, Tamil Nadu.',
          keywords: [
            selectedService?.title || 'legal and financial services',
            'Coimbatore',
            'Tamil Nadu',
            'SSS Associate',
          ].join(', '),
          path: `/services/${selectedServiceId}`,
        };

      case 'about':
        return {
          title: 'About SSS Associate | Coimbatore',
          description:
            'Learn about SSS Associate, its business information and approach to legal, financial and property-related enquiries in Coimbatore, Tamil Nadu.',
          keywords:
            'SSS Associate, legal advisory, financial consultancy, Coimbatore, Tamil Nadu',
          path: '/about',
        };

      case 'contact':
        return {
          title: 'Contact SSS Associate | Coimbatore',
          description:
            'Contact SSS Associate in Coimbatore for enquiries about legal advisory, property services, loan assistance, auditing and debt settlement.',
          keywords:
            'contact SSS Associate, legal advisory Coimbatore, loan assistance, property services, debt settlement',
          path: '/contact',
        };

      case 'blog':
        return {
          title: 'Property Document Verification Guide | SSS Associate',
          description:
            'Read practical guides about property document verification, land records and property due diligence in Tamil Nadu.',
          keywords:
            'property document verification, land records, property due diligence, Coimbatore, Tamil Nadu',
          path: '/blog',
        };

      case 'blog-post':
        return {
          title:
            'How to Verify Land Documents Before Buying Property | SSS Associate',
          description:
            'Learn which property documents to review before buying land in Tamil Nadu, including title deeds, EC, Patta and survey records.',
          keywords:
            'verify land documents, property document verification, Patta, Encumbrance Certificate, Tamil Nadu',
          path:
            '/blog/how-to-verify-land-documents-before-buying-property',
        };

      case 'editorial-policy':
        return {
          title: 'Editorial Policy | SSS Associate',
          description:
            'Read the editorial policy explaining how SSS Associate reviews, updates and maintains website information.',
          keywords:
            'SSS Associate editorial policy, content accuracy, website information',
          path: '/editorial-policy',
        };

      case 'privacy':
        return {
          title: 'Privacy Policy | SSS Associate',
          description:
            'Read the privacy policy explaining how SSS Associate handles website visitor information.',
          keywords: 'SSS Associate privacy policy',
          path: '/privacy',
        };

      case 'disclaimer':
        return {
          title: 'Disclaimer | SSS Associate',
          description:
            'Read the website disclaimer and important information about SSS Associate services.',
          keywords: 'SSS Associate disclaimer',
          path: '/disclaimer',
        };

      case 'terms':
        return {
          title: 'Terms of Use | SSS Associate',
          description:
            'Read the terms and conditions governing the use of the SSS Associate website.',
          keywords: 'SSS Associate terms of use',
          path: '/terms',
        };

      case 'refund':
        return {
          title: 'Refund Policy | SSS Associate',
          description:
            'Read the refund and cancellation policy published by SSS Associate.',
          keywords: 'SSS Associate refund policy, cancellation policy',
          path: '/refund',
        };

      default:
        return {
          title:
            'SSS Associate | Legal & Financial Services in Coimbatore',
          description:
            'Contact SSS Associate in Coimbatore for legal advisory, property documents, land survey, loan assistance, accounts, auditing and debt settlement.',
          keywords:
            'SSS Associate, legal advisory Coimbatore, financial consultancy Coimbatore, property document verification, loan assistance, debt settlement, land survey, auditing, Tamil Nadu',
          path: '/',
        };
    }
  })();

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-600 selection:text-white relative pb-16 sm:pb-0">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        path={seoConfig.path}
      />

      {/* Accessibility: Skip navigation link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Header
        currentView={currentView}
        selectedServiceId={selectedServiceId}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />

      <main id="main-content" tabIndex={-1}>
        {currentView === 'home' && (
          <>
            <HomeView
              onNavigate={handleNavigate}
              onSelectService={handleSelectService}
            />

            <HomeTrustNotice onNavigate={handleNavigate} />
          </>
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

        {(currentView === 'blog' || currentView === 'blog-post') && (
          <BlogView
            currentView={currentView}
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        )}

        {currentView === 'editorial-policy' && (
          <EditorialPolicyView onNavigate={handleNavigate} />
        )}

        {currentView === 'privacy' && (
          <PrivacyView onNavigate={handleNavigate} />
        )}

        {currentView === 'disclaimer' && (
          <DisclaimerView onNavigate={handleNavigate} />
        )}

        {currentView === 'terms' && (
          <TermsView onNavigate={handleNavigate} />
        )}

        {currentView === 'refund' && (
          <RefundPolicyView onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <WhatsAppWidget />

      <MobileBottomBar />

      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}