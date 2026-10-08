'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { ServicesView } from '../../src/views/ServicesView';
import { WhatsAppWidget } from '../../src/components/WhatsAppWidget';
import { MobileBottomBar } from '../../src/components/MobileBottomBar';
import { ConsultationModal } from '../../src/components/ConsultationModal';

export default function ServicesClient() {
  const router = useRouter();
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const handleNavigate = (view, serviceId) => {
    if (view === 'home') router.push('/');
    else if (view === 'services') router.push('/services');
    else if (view === 'service-detail' && serviceId) router.push(`/services/${serviceId}`);
    else if (view === 'about') router.push('/about');
    else if (view === 'contact') router.push('/contact');
    else if (view === 'privacy') router.push('/privacy');
    else if (view === 'disclaimer') router.push('/disclaimer');
    else if (view === 'terms') router.push('/terms');
    else if (view === 'refund') router.push('/refund');
    else router.push(`/${view}`);
  };

  const handleSelectService = (serviceId) => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-600 selection:text-white relative pb-16 sm:pb-0">
      <Header
        currentView="services"
        selectedServiceId={null}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />
      <main id="main-content">
        <ServicesView
          onSelectService={handleSelectService}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget />
      <MobileBottomBar />
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
