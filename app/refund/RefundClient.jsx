'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { RefundPolicyView } from '../../src/views/RefundPolicyView';
import { WhatsAppWidget } from '../../src/components/WhatsAppWidget';
import { MobileBottomBar } from '../../src/components/MobileBottomBar';

export default function RefundClient() {
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-600 selection:text-white relative pb-16 sm:pb-0">
      <Header
        currentView="refund"
        selectedServiceId={null}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => router.push('/contact')}
      />
      <main id="main-content">
        <RefundPolicyView onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppWidget />
      <MobileBottomBar />
    </div>
  );
}
