import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface HomeViewProps {
  onNavigate: (view: string, serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Legal Advisory & Services',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What makes SSS Associate distinct from generic consultants?',
      a: 'SSS Associate is a Government of India MSME Registered consultancy operating across Tamil Nadu. We combine multi-disciplinary expertise covering high-stakes legal scrutiny, statutory accounts, internal auditing, debt restructuring (OTS), and SARFAESI bank auction due diligence under one single trusted roof.',
    },
    {
      q: 'How does SSS Associate assist with SARFAESI Bank Auction properties?',
      a: 'We perform end-to-end 360° due diligence: 30-year parent document title clearance, verification of physical vs. symbolic possession with bank Authorised Officers, court/DRT stay order searches, e-auction bidding strategy, and post-auction sale certificate conveyance.',
    },
    {
      q: 'Can you help our business if our loan account is classified as NPA or facing auction?',
      a: 'Yes. We specialize in RBI-compliant One-Time Settlement (OTS) structuring, interest waiver representations, and bank loan takeovers before recovery actions escalate, protecting your valuable mortgaged assets.',
    },
    {
      q: 'What is the consultation fee or procedure to get started?',
      a: 'You can initiate an immediate consultation by dialing our primary helpline 9385954338 or secondary helpline 9087853733, or sending us a message via WhatsApp. We evaluate your case documentation and provide clear, upfront advisory steps.',
    },
  ];

  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-28 bg-gradient-to-b from-indigo-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-600 font-semibold text-xs sm:text-sm tracking-wide uppercase border border-red-100 shadow-2xs">
                <span>🛡️</span>
                <span>Trusted MSME Registered Financial & Legal Experts</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Professional Financial & Legal Solutions <span className="text-red-600">That Make Sense</span> For You.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Empowering businesses and individuals across Tamil Nadu with top-tier MSME registered expertise in Legal advisory, Accounts, Auditing, Loan facilitation, Takeovers, Sales, Settlements, and Bank Auctions.
              </p>

              {/* CTAs and Rating */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Explore Our 8 Services</span>
                  <span>→</span>
                </button>
                
                <div className="flex items-center gap-4 bg-white p-3.5 px-4 rounded-2xl shadow-md border border-slate-100">
                  <div className="text-2xl font-black text-slate-900">4.9</div>
                  <div>
                    <div className="text-amber-400 text-xs tracking-wider">★★★★★</div>
                    <div className="text-xs text-slate-600 font-semibold">1,000+ Satisfied Clients</div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Dial Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="text-slate-500 text-xs sm:text-sm">Need Immediate Assistance?</span>
                <a
                  href="tel:9385954338"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl transition-colors shadow-xs text-xs sm:text-sm font-bold"
                >
                  📞 9385954338
                </a>
                <a
                  href="tel:9087853733"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl transition-colors shadow-xs text-xs sm:text-sm font-bold"
                >
                  📞 9087853733
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> MSME Certified Standards
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> Fast Resolution Turnaround
                </span>
              </div>
            </div>

            {/* Right Hero Card - Quick Callback Consultation Form */}
            <div className="lg:col-span-5" id="consultation">
              <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative border border-slate-800">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Priority Callback
                </div>
                
                <div className="mb-5">
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest block">
                    Fast Response Desk
                  </span>
                  <h3 className="text-2xl font-bold text-white">Request a Consultation</h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Fill out the form & our senior consultant will reach out shortly.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-4 animate-in fade-in duration-200">
                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto shadow-md">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Consultation Request Received!</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Thank you <span className="text-white font-bold">{formData.fullName}</span>. Our senior consultant will call you at{' '}
                        <span className="text-emerald-400 font-bold">{formData.phone}</span>.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={`https://wa.me/919385954338?text=${encodeURIComponent(
                          `Hello SSS Associate, I submitted a consultation request for ${formData.service}. My Name: ${formData.fullName}, Phone: ${formData.phone}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
                      >
                        <span>Chat Instantly on WhatsApp</span>
                        <span>➤</span>
                      </a>

                      <button
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
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9385954338"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Select Specialized Service <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                            {srv.icon} {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Brief Note / Problem Description (Optional)
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your requirement or timeline..."
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/30 text-sm cursor-pointer mt-1"
                    >
                      Submit Consultation Request →
                    </button>

                    <p className="text-[10px] text-slate-400 text-center pt-1">
                      🔒 Your details are strictly confidential under MSME compliance.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Credentials Strip */}
      <section className="bg-indigo-950 text-white py-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">1,000+</div>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">Satisfied Clients</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">10+</div>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">Years Collective Experience</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">8</div>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">Core Practice Verticals</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-400">100%</div>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold tracking-wider">MSME Certified Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Our Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Comprehensive Financial & Legal Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tailored, MSME-certified solutions designed to protect, grow, and streamline your business operations with end-to-end documentation and legal safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
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
                    onClick={() => onSelectService(srv.id)}
                    className="text-xs font-bold text-red-600 group-hover:text-red-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Details & Documents</span>
                    <span>→</span>
                  </button>
                  <span className="text-xs text-slate-400 group-hover:text-slate-600">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick View All Services CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              <span>Explore All 8 Individual Service Pages</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* High-Impact Spotlight: SARFAESI Bank Auction & Loan Restructuring */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block bg-red-600/30 text-red-400 border border-red-500/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Specialized High-Value Desk
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Facing SARFAESI Bank Notices or Seeking Below-Market Auction Properties?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our dedicated Banking & SARFAESI wing guides you through One-Time Settlements (OTS), NPA regularizations, title scrutiny of distressed assets, and e-auction bidding with 100% legal clearance across Tamil Nadu.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => onSelectService('bank-auction')}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    Bank Auction Support →
                  </button>
                  <button
                    onClick={() => onSelectService('debt-settlement')}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                  >
                    OTS & Debt Settlement →
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-3">
                <div className="text-3xl">📞</div>
                <h4 className="text-lg font-bold text-white">Direct Advisory Call</h4>
                <p className="text-xs text-slate-300">Speak directly with our senior consultant:</p>
                <a
                  href="tel:9385954338"
                  className="block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm shadow-md transition-all"
                >
                  Dial 9385954338
                </a>
                <a
                  href="tel:9087853733"
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
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
                Why Choose SSS Associate
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Your Reliable Partner in Financial Success & Legal Safety
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                As an <strong className="text-slate-900">[ MSME ] Registered</strong> firm, SSS Associate brings uncompromising professional integrity, deep industry insights, and meticulous execution to every case we handle. We combine legal defense with financial foresight to shield your capital and advance your commercial goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'MSME Certified Standards',
                  'Expert Legal & Financial Advisors',
                  '100% Transparent Process',
                  'Fast Loan & Settlement Turnaround',
                  'Complete Data Confidentiality',
                  'Tamil Nadu Wide Representation',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-red-600 font-bold hover:underline flex items-center gap-1.5 text-sm cursor-pointer"
                >
                  <span>Learn more about our credentials & advisory philosophy</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Contact Cards */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative border border-slate-800">
                <h3 className="text-2xl font-bold mb-2">Direct Contact Helplines</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Speak directly with our senior financial and legal consultants today.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:9385954338"
                    className="flex items-center gap-4 bg-slate-800/90 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform">
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">
                        Primary Helpline
                      </div>
                      <div className="text-xl font-bold text-white">9385954338</div>
                    </div>
                  </a>

                  <a
                    href="tel:9087853733"
                    className="flex items-center gap-4 bg-slate-800/90 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform">
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">
                        Secondary Helpline
                      </div>
                      <div className="text-xl font-bold text-white">9087853733</div>
                    </div>
                  </a>

                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                    <span>📍</span>
                    <span>MSME Registered Professional Consultancy, Tamil Nadu, India.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Working Methodology Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How We Deliver Measurable Results
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A transparent 4-stage advisory workflow ensuring zero guesswork, strict timelines, and full regulatory conformity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Confidential Briefing',
                desc: 'Initial evaluation of your legal challenge, loan requirement, or financial audit scope.',
              },
              {
                step: '02',
                title: 'Meticulous Document Audit',
                desc: 'Reviewing title deeds, accounting ledgers, loan sanction clauses, or court notices.',
              },
              {
                step: '03',
                title: 'Strategic Representation',
                desc: 'Formulating legal opinion, drafting settlement proposals, or filing bank dossiers.',
              },
              {
                step: '04',
                title: 'Closure & Handover',
                desc: 'Achieving sanction disbursement, OTS No Dues Certificate, or registered sale deeds.',
              },
            ].map((st, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative space-y-3">
                <div className="text-3xl font-black text-red-600">{st.step}</div>
                <h3 className="text-lg font-bold text-slate-900">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Trusted by 1,000+ Entrepreneurs & Property Buyers
            </h2>
            <p className="text-slate-600 text-sm">
              Real stories from business promoters and individuals across Tamil Nadu who relied on SSS Associate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'K. Senthil Kumar',
                role: 'Managing Director, Textile Processing Unit',
                text: 'SSS Associate handled our multi-crore working capital loan takeover from an NBFC to a nationalized bank. They saved us 4% in annual interest and secured additional top-up funds within 20 days.',
                stars: '★★★★★',
                tag: 'Loan Takeover',
              },
              {
                name: 'V. Muruganandam',
                role: 'Commercial Real Estate Investor',
                text: 'Bidding on a SARFAESI bank auction property can be risky. SSS Associate conducted full parent document scrutiny and handled the sub-registrar registration cleanly. Truly unmatched professional diligence.',
                stars: '★★★★★',
                tag: 'Bank Auction Support',
              },
              {
                name: 'P. Anandharaj',
                role: 'Proprietor, Engineering Works',
                text: 'When our bank issued a 13(2) notice during the pandemic slowdown, SSS Associate represented us before the recovery committee and negotiated an OTS waiver of 45% on compound interest.',
                stars: '★★★★★',
                tag: 'Debt Settlement (OTS)',
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-400 text-sm">{t.stars}</span>
                    <span className="text-[10px] bg-red-50 text-red-600 font-bold px-2.5 py-1 rounded-full">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO-Optimized FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Everything You Need to Know
            </h2>
            <p className="text-slate-600 text-sm">
              Clear, transparent answers to questions frequently asked by clients across Tamil Nadu.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-red-600 text-lg shrink-0">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready To Speak Banner */}
      <section className="py-14 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Safeguard Your Financial & Legal Interests?
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with SSS Associate today for dependable MSME registered guidance. Fast turnaround, transparent consultation, and zero false promises.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:9385954338"
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              📞 Call Helpline: 9385954338
            </a>
            <a
              href="tel:9087853733"
              className="bg-indigo-950 hover:bg-indigo-900 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              📞 Call Secondary: 9087853733
            </a>
            <a
              href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-colors text-sm"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
