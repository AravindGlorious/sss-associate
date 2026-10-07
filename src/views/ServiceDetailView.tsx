import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';

interface ServiceDetailViewProps {
  serviceId: string;
  onNavigate: (view: string, serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId,
  onNavigate,
  onSelectService,
}) => {
  const service: ServiceItem =
    SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Find next and prev service
  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === service.id);
  const prevService =
    SERVICES_DATA[(currentIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const nextService = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Breadcrumbs & Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50/70 via-white to-white border-b border-slate-100 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              All Services
            </button>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate">{service.title}</span>
          </nav>

          {/* Hero Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                  {service.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  MSME Certified Practice
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-3xl shadow-sm border border-red-100 shrink-0">
                  {service.icon}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {service.title}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                {service.detailedOverview}
              </p>

              {/* Quick Helplines */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="tel:9385954338"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>📞 Call: 9385954338</span>
                </a>
                <a
                  href="tel:9087853733"
                  className="inline-flex items-center gap-2 bg-indigo-950 hover:bg-indigo-900 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>📞 Call: 9087853733</span>
                </a>
                <a
                  href={`https://wa.me/919385954338?text=${encodeURIComponent(
                    `Hello SSS Associate, I need immediate assistance for: ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>💬 WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Service Quick Highlights Box */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
              <span className="text-[11px] font-bold uppercase text-red-600 tracking-wider block mb-2">
                Core Value Proposition
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Problem Solved For You:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                {service.problemSolved}
              </p>
              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>100% Confidentiality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>End-to-End Legal & Regulatory Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Dedicated Senior Case Consultant</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (Detailed Breakdown) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Scope of Work */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  📋
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  What We Handle (Scope of Services)
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.scopeOfWork.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 transition-all flex items-start gap-3 shadow-2xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents Checklist */}
            <section className="space-y-5 bg-gradient-to-br from-indigo-50/60 to-slate-50 p-6 sm:p-8 rounded-3xl border border-indigo-100/60">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                    📑
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Documents Required for Consultation
                  </h2>
                </div>
                <span className="text-[11px] font-bold text-indigo-700 bg-white px-3 py-1 rounded-full border border-indigo-200">
                  Preparation Checklist
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Having these records ready enables our team to evaluate your case immediately and formulate an actionable plan without turnaround delays:
              </p>

              <div className="space-y-2.5">
                {service.documentsRequired.map((doc, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-3 shadow-2xs"
                  >
                    <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                      📄
                    </span>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Note: If any documents are missing or pending, our consultants will guide you on how to procure certified copies or regularize paperwork.
              </p>
            </section>

            {/* Key Advantages */}
            <section className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  🛡️
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Key Benefits & Advantages
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyBenefits.map((ben, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3"
                  >
                    <span className="text-emerald-600 font-bold text-base">✦</span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {ben}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4-Step Process Timeline */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
                  ⚡
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Execution Workflow
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((stp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-red-600 uppercase tracking-wider">
                        Stage {stp.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{stp.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{stp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Service-Specific FAQs */}
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">
                Frequently Asked Questions about {service.title}
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 font-semibold text-slate-900 text-sm cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="text-red-600 font-bold shrink-0">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar & Dedicated Inquiry Form) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Form Card Pre-Selected For This Service */}
            <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 p-6 sm:p-7 rounded-3xl text-white shadow-xl border border-slate-800 sticky top-24">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Direct Case Desk
                </span>
              </div>
              <h3 className="text-xl font-bold">Consult On This Service</h3>
              <p className="text-xs text-slate-300 mt-1 mb-5">
                Inquiring specifically regarding{' '}
                <span className="text-red-400 font-bold">{service.title}</span>.
              </p>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-2xl text-center space-y-3">
                  <div className="text-2xl">✅</div>
                  <h4 className="font-bold text-base text-white">Inquiry Received</h4>
                  <p className="text-xs text-slate-300">
                    Our lead consultant will contact you at{' '}
                    <span className="text-emerald-400 font-bold">{formData.phone}</span>{' '}
                    within working hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs bg-white text-slate-900 font-bold px-4 py-2 rounded-lg cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9385954338"
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Case Notes / Requirement
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell us what you need regarding ${service.title}...`}
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md text-xs cursor-pointer mt-1"
                  >
                    Submit Case Details →
                  </button>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/919385954338?text=${encodeURIComponent(
                        `Hello SSS Associate, I want to inquire about ${service.title}. Name: ${formData.fullName || 'Client'}, Phone: ${formData.phone || 'Provided in chat'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Direct WhatsApp with Specialist</span>
                      <span>➤</span>
                    </a>
                  </div>
                </form>
              )}

              {/* Direct Call Helplines In Sidebar */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5 text-xs">
                <span className="text-slate-400 font-semibold block text-[10px] uppercase tracking-wider">
                  Urgent Question? Call Immediately:
                </span>
                <a
                  href="tel:9385954338"
                  className="flex items-center justify-between bg-slate-800/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-white"
                >
                  <span className="font-semibold">📞 Primary Helpline</span>
                  <span className="font-bold text-emerald-400">9385954338</span>
                </a>
                <a
                  href="tel:9087853733"
                  className="flex items-center justify-between bg-slate-800/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-white"
                >
                  <span className="font-semibold">📞 Secondary Helpline</span>
                  <span className="font-bold text-indigo-400">9087853733</span>
                </a>
              </div>
            </div>

            {/* Other Services Navigation List */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Explore Other Services
              </h4>
              <div className="space-y-1.5">
                {SERVICES_DATA.filter((s) => s.id !== service.id).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSelectService(s.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-red-50 hover:text-red-700 border border-slate-100 flex items-center gap-2.5 transition-colors text-xs font-semibold text-slate-700 cursor-pointer shadow-2xs"
                  >
                    <span>{s.icon}</span>
                    <span className="truncate">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Prev / Next Service Switcher Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onSelectService(prevService.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto p-4 rounded-2xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-all text-left flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Previous Service</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{prevService.title}</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
          >
            View All 8 Services Catalog
          </button>

          <button
            onClick={() => {
              onSelectService(nextService.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto p-4 rounded-2xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-all text-right flex items-center gap-3 justify-end cursor-pointer group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Next Service</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{nextService.title}</span>
            </div>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>

    </div>
  );
};
