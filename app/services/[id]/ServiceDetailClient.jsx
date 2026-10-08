'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../../src/components/Header';
import { Footer } from '../../../src/components/Footer';
import { ServiceDetailView } from '../../../src/views/ServiceDetailView';
import { WhatsAppWidget } from '../../../src/components/WhatsAppWidget';
import { MobileBottomBar } from '../../../src/components/MobileBottomBar';
import { ConsultationModal } from '../../../src/components/ConsultationModal';

export default function ServiceDetailClient({ serviceId }) {
  const router = useRouter();
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const handleNavigate = (view, sId) => {
    if (view === 'home') router.push('/');
    else if (view === 'services') router.push('/services');
    else if (view === 'service-detail' && sId) router.push(`/services/${sId}`);
    else if (view === 'about') router.push('/about');
    else if (view === 'contact') router.push('/contact');
    else if (view === 'privacy') router.push('/privacy');
    else if (view === 'disclaimer') router.push('/disclaimer');
    else if (view === 'terms') router.push('/terms');
    else if (view === 'refund') router.push('/refund');
    else router.push(`/${view}`);
  };

  const handleSelectService = (sId) => {
    router.push(`/services/${sId}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-600 selection:text-white relative pb-16 sm:pb-0">
      <Header
        currentView="service-detail"
        selectedServiceId={serviceId}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />
      <main id="main-content">
        <ServiceDetailView
          serviceId={serviceId}
          onNavigate={handleNavigate}
          onSelectService={handleSelectService}
        />
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget />
      <MobileBottomBar />
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialServiceId={serviceId}
      />
    </div>
  );
}
