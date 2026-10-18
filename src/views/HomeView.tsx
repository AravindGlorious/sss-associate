import { ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params: { send_to: string }
    ) => void;
  }
}

interface HomeViewProps {
  onNavigate: (view: string, serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Legal Advisory & Services',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          service: formData.service,
          location: '',
          message: formData.notes.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || 'Unable to send your enquiry. Please try again.'
        );
      }

      // Track the conversion only after successful form submission.
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18511083261/qQdWCMGv5ZwdEP3t4vpE',
        });
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Consultation form submission failed:', error);
      window.alert(
        error instanceof Error
          ? error.message
          : 'Unable to send your enquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What services does SSS Associate provide?',
      a: 'SSS Associate provides legal advisory, land survey assistance, accounts management, auditing, loan assistance, debt settlement, property-related services and bank auction support. Contact our team to discuss your requirements.',
    },
    {
      q: 'Can you help with bank auction properties?',
      a: 'We assist with property document checks and bank auction-related enquiries. The checks required depend on the property and available documents. Independent legal verification may also be necessary before bidding.',
    },
    {
      q: 'Can you help with loan settlement or loan takeover?',
      a: 'We provide guidance for eligible loan settlement and loan takeover cases. The available options depend on your lender, outstanding balance, financial position and supporting documents. Any settlement or approval remains subject to the lender’s decision.',
    },
    {
      q: 'How can I request a consultation?',
      a: 'Submit the consultation form on this website or contact SSS Associate by phone or WhatsApp. Briefly explain your requirement so our team can guide you on the next steps. Any consultation fee can be confirmed directly with the team.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-28 bg-linear-to-b from-indigo-50/50 via-white to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 font-semibold text-xs sm:text-sm tracking-wide uppercase border border-red-100 shadow-2xs">
                <ShieldCheck
                  size={16}
                  strokeWidth={2.2}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span>
                  MSME-Registered Financial &amp; Legal Consultancy
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Professional Financial &amp; Legal Solutions{' '}
                <span className="text-red-600">That Make Sense</span> For You.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                SSS Associate supports individuals and businesses with
                property documents, accounts, audits, loan assistance and
                debt-related matters. Contact our Coimbatore team to discuss
                your requirements.
              </p>

              {/* CTAs and Consultancy Information */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <span aria-hidden="true">→</span>
                </button>

                <div className="flex items-center gap-4 bg-white p-3.5 px-4 rounded-2xl shadow-md border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={26} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      MSME Registered Consultancy
                    </div>
                    <div className="text-xs text-slate-600 font-semibold mt-1">
                      Multiple Service Solutions
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Dial Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="text-slate-500 text-xs sm:text-sm">
                  Need Immediate Assistance?
                </span>

                <a
                  href="tel:9385954338"
                  aria-label="Call SSS Associate at 9385954338"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl transition-colors shadow-xs text-xs sm:text-sm font-bold"
                >
                  <span aria-hidden="true">📞</span> 9385954338
                </a>

                <a
                  href="tel:9087853733"
                  aria-label="Call SSS Associate at 9087853733"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl transition-colors shadow-xs text-xs sm:text-sm font-bold"
                >
                  <span aria-hidden="true">📞</span> 9087853733
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <span
                    className="text-emerald-600 font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Enquiry Support
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="text-emerald-600 font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  MSME Registration
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="text-emerald-600 font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Clear Next Steps
                </span>
              </div>
            </div>

            {/* Right Hero Card - Consultation Form */}
            <div className="lg:col-span-5" id="consultation">
              <div className="bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative border border-slate-800">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Consultation Enquiry
                </div>

                <div className="mb-5">
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block">
                    Contact Our Team
                  </span>

                  <h2 className="text-2xl font-bold text-white">
                    Request a Consultation
                  </h2>

                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Share your requirements and our team can guide you on the
                    next steps.
                  </p>
                </div>

                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-4 animate-in fade-in duration-200"
                  >
                    <div
                      className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto shadow-md"
                      aria-hidden="true"
                    >
                      ✓
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-white">
                        Consultation Request Received!
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Thank you{' '}
                        <span className="text-white font-bold">
                          {formData.fullName}
                        </span>
                        . Our team can contact you at{' '}
                        <span className="text-emerald-400 font-bold">
                          {formData.phone}
                        </span>{' '}
                        regarding your enquiry.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={`https://wa.me/919385954338?text=${encodeURIComponent(
                          `Hello SSS Associate, I submitted a consultation request for ${formData.service}. My Name: ${formData.fullName}, Phone: ${formData.phone}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Continue consultation request on WhatsApp"
                        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
                      >
                        <span>Chat Instantly on WhatsApp</span>
                        <span aria-hidden="true">➤</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            service: 'Legal Advisory & Services',
                            notes: '',
                          });
                        }}
                        className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded-xl font-medium transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="home-consultation-fullName"
                        className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>

                      <input
                        id="home-consultation-fullName"
                        aria-label="Full Name"
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    {/* Phone Number and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="home-consultation-phone"
                          className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                        >
                          Phone Number <span className="text-red-400">*</span>
                        </label>

                        <input
                          id="home-consultation-phone"
                          aria-label="Phone Number"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9385954338"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="home-consultation-email"
                          className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                        >
                          Email Address
                        </label>

                        <input
                          id="home-consultation-email"
                          aria-label="Email Address"
                          type="email"
                          name="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label
                        htmlFor="home-consultation-service"
                        className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                      >
                        Select Specialized Service{' '}
                        <span className="text-red-400">*</span>
                      </label>

                      <select
                        id="home-consultation-service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option
                            key={srv.id}
                            value={srv.title}
                            className="bg-slate-900 text-white"
                          >
                            {srv.icon} {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        htmlFor="home-consultation-notes"
                        className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                      >
                        Brief Note / Problem Description (Optional)
                      </label>

                      <textarea
                        id="home-consultation-notes"
                        aria-label="Brief Note / Problem Description (Optional)"
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your requirement..."
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/30 text-sm cursor-pointer mt-1"
                    >
                      {isSubmitting
                        ? 'Sending Request...'
                        : 'Submit Consultation Request'}
                    </button>

                    <p className="text-[10px] text-slate-400 text-center pt-1">
                      🔒 We handle your enquiry details with care.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Service Information */}
      <section className="bg-indigo-950 text-white py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-center mb-3">
                <ShieldCheck
                  size={32}
                  className="text-amber-400"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm sm:text-base font-bold">
                MSME Registered
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Business Registration
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-center mb-3">
                <ShieldCheck
                  size={32}
                  className="text-emerald-400"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm sm:text-base font-bold">
                Personalised Support
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Guidance for Your Requirements
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl font-extrabold text-white mb-1">
                {SERVICES_DATA.length}
              </div>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">
                Service Categories
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-center mb-3">
                <ShieldCheck
                  size={32}
                  className="text-red-400"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm sm:text-base font-bold">
                Clear Next Steps
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Understand the Process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Our Services
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Comprehensive Financial &amp; Legal Services
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Get practical support for business records, property documents,
              loans and debt-related matters. Our team explains the process
              and helps you understand the next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs"
                    aria-hidden="true"
                  >
                    {srv.icon}
                  </div>

                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                    {srv.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(srv.id)}
                    className="text-xs font-bold text-red-600 group-hover:text-red-700 hover:underline flex items-center gap-1 cursor-pointer"
                    aria-label={`View full details for ${srv.title}`}
                  >
                    <span>Full Details &amp; Documents</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  <span className="text-xs text-slate-400 group-hover:text-slate-600">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              <span>Explore All {SERVICES_DATA.length} Service Pages</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SARFAESI Bank Auction & Loan Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block bg-red-600/30 text-red-400 border border-red-500/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Specialized Services
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Need Help With SARFAESI Notices or Bank Auction Properties?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our team assists with One-Time Settlement (OTS) enquiries,
                  loan repayment concerns, property document reviews and bank
                  auction processes. The checks required depend on the property,
                  lender and documents available.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectService('bank-auction')}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    Bank Auction Support →
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService('debt-settlement')}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                  >
                    OTS &amp; Debt Settlement →
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-3">
                <div className="text-3xl" aria-hidden="true">
                  📞
                </div>

                <h3 className="text-lg font-bold text-white">
                  Speak With Our Team
                </h3>

                <p className="text-xs text-slate-300">
                  Contact us to discuss your requirements:
                </p>

                <a
                  href="tel:9385954338"
                  aria-label="Call SSS Associate at 9385954338"
                  className="block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm shadow-md transition-all"
                >
                  Dial 9385954338
                </a>

                <a
                  href="tel:9087853733"
                  aria-label="Call SSS Associate at 9087853733"
                  className="block bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all border border-slate-700"
                >
                  Dial 9087853733
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
                Why Choose SSS Associate
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Practical Guidance for Property, Loans and Business Matters
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                SSS Associate is an MSME-registered consultancy. We help
                individuals and businesses understand their options for
                property documents, business accounts, loans and debt-related
                matters. Our team explains the process and the documents
                needed for each case.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'MSME Registration',
                  'Legal and Financial Guidance',
                  'Transparent Communication',
                  'Loan and Settlement Assistance',
                  'Careful Handling of Enquiries',
                  'Tamil Nadu Service Coverage',
                ].map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs"
                  >
                    <span
                      className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-red-600 font-bold hover:underline flex items-center gap-1.5 text-sm cursor-pointer"
                >
                  <span>Learn more about SSS Associate</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="lg:col-span-6">
              <div className="bg-linear-to-br from-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative border border-slate-800">
                <h3 className="text-2xl font-bold mb-2">
                  Contact Our Team
                </h3>

                <p className="text-slate-300 text-sm mb-6">
                  Call us to discuss your requirements and available next steps.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:9385954338"
                    aria-label="Call SSS Associate primary helpline 9385954338"
                    className="flex items-center gap-4 bg-slate-800/90 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform"
                      aria-hidden="true"
                    >
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">
                        Primary Helpline
                      </div>
                      <div className="text-xl font-bold text-white">
                        9385954338
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:9087853733"
                    aria-label="Call SSS Associate secondary helpline 9087853733"
                    className="flex items-center gap-4 bg-slate-800/90 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 transition-all group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform"
                      aria-hidden="true"
                    >
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">
                        Secondary Helpline
                      </div>
                      <div className="text-xl font-bold text-white">
                        9087853733
                      </div>
                    </div>
                  </a>

                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <span aria-hidden="true">📍</span>
                    <span>
                      MSME-registered consultancy serving Tamil Nadu, India.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Our Process
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How We Work With You
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              We review your requirements, check the available documents,
              explain the options and guide you through the next steps.
              The process depends on your case and the relevant approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Understand Your Needs',
                desc: 'Discuss your property documents, loan requirements or business accounting needs.',
              },
              {
                step: '02',
                title: 'Review Documents',
                desc: 'Review the available records, property documents, loan details or notices relevant to your enquiry.',
              },
              {
                step: '03',
                title: 'Explain Your Options',
                desc: 'Discuss possible next steps, documentation requirements and relevant processes.',
              },
              {
                step: '04',
                title: 'Guide the Next Steps',
                desc: 'Help you understand the follow-up process, required documents and any decisions that depend on third parties.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative space-y-3"
              >
                <div
                  className="text-3xl font-black text-red-600"
                  aria-hidden="true"
                >
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Support Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Our Approach
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Support Built Around Your Requirements
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Every enquiry is different. We help you understand the relevant
              process, documents and possible next steps based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Understand Your Requirement',
                text: 'Discuss your property, loan, accounting or legal advisory enquiry with our team.',
                tag: 'Step 1',
              },
              {
                title: 'Review Relevant Documents',
                text: 'Identify the documents and details needed to understand your specific case.',
                tag: 'Step 2',
              },
              {
                title: 'Discuss the Next Steps',
                text: 'Understand the available process, further requirements and decisions that may depend on third parties.',
                tag: 'Step 3',
              },
            ].map((item) => (
              <div
                key={item.tag}
                className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100"
              >
                <span className="inline-block text-[10px] bg-red-50 text-red-600 font-bold px-2.5 py-1 rounded-full mb-5">
                  {item.tag}
                </span>
                <h3 className="font-bold text-slate-900 text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Frequently Asked Questions
            </span>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Common Questions About Our Services
            </h2>

            <p className="text-slate-600 text-sm">
              Find answers about our services, document checks and consultation
              process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isExpanded = activeFaq === idx;
              const answerId = `home-faq-answer-${idx}`;

              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isExpanded}
                    aria-controls={answerId}
                    className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className="text-red-600 text-lg shrink-0"
                      aria-hidden="true"
                    >
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div
                      id={answerId}
                      className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Need Help With Property, Loans or Business Matters?
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact SSS Associate to discuss your requirements. Our team can
            explain the process, documents needed and possible next steps.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:9385954338"
              aria-label="Call SSS Associate at 9385954338"
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              <span aria-hidden="true">📞</span> Call Helpline: 9385954338
            </a>

            <a
              href="tel:9087853733"
              aria-label="Call SSS Associate at 9087853733"
              className="bg-indigo-950 hover:bg-indigo-900 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              <span aria-hidden="true">📞</span> Call Secondary: 9087853733
            </a>

            <a
              href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact SSS Associate on WhatsApp"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              <span aria-hidden="true">💬</span> WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};