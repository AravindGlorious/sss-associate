import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Legal Advisory & Services',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-100 pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
            Direct Communication Desks
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact SSS Associate
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out directly to our senior financial and legal consultants. We provide prompt, confidential guidance on legal advisory, loans, audits, and bank auction queries across Tamil Nadu.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Top 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Primary Call */}
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                📞
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                  Primary Helpline
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">9385954338</h3>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Direct line for urgent legal consultations, auction deadlines, and loan inquiries.
            </p>
            <a
              href="tel:9385954338"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Instant Call Now</span>
              <span>→</span>
            </a>
          </div>

          {/* Secondary Call */}
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">
                📞
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                  Secondary Helpline
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">9087853733</h3>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Support desk for ongoing case tracking, account audits, and document submissions.
            </p>
            <a
              href="tel:9087853733"
              className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Call Secondary Helpline</span>
              <span>→</span>
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                💬
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                  WhatsApp Support
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">9385954338</h3>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Send documents or discuss requirements instantly on WhatsApp with our team.
            </p>
            <a
              href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20consult%20regarding%20my%20case."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Open WhatsApp Chat</span>
              <span>➤</span>
            </a>
          </div>

        </div>

        {/* Main Grid: Contact Form + Location / Operating Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Detailed Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase text-red-600 tracking-widest block mb-1">
                Official Case Docket Form
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Send Us a Detailed Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Provide basic details of your legal or financial query and our lead consultant will respond with concrete next steps.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-md">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. A senior consultant has been assigned to your query regarding{' '}
                  <span className="font-bold text-red-600">{formData.service}</span>. We will call you at{' '}
                  <span className="font-bold text-slate-900">{formData.phone}</span> shortly.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/919385954338?text=${encodeURIComponent(
                      `Hello SSS Associate, I submitted an inquiry via website for ${formData.service}. Name: ${formData.fullName}, Phone: ${formData.phone}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold py-2.5 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <span>Instant WhatsApp Connect</span>
                    <span>➤</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        service: 'Legal Advisory & Services',
                        location: '',
                        message: '',
                      });
                    }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-xl text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Anandha Kumar"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9385954338"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      District / City in Tamil Nadu
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Chennai, Coimbatore, Madurai..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-red-500 transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.icon} {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Case Summary / Special Requirement
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your query, relevant notice dates, or property details..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  Submit Inquiry to SSS Associate →
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 All client discussions and shared records are protected under strict MSME consultancy confidentiality.
                </p>
              </form>
            )}
          </div>

          {/* Regional Office & Operational Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Info Card */}
            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-xl font-bold">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-lg">Office & Service Region</h3>
                  <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                    [ MSME ] Registered
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-1">
                    Registered Headquarters:
                  </span>
                  <p className="text-sm text-white font-medium">
                    SSS ASSOCIATE [ MSME ] REGISTERED
                  </p>
                  <p className="text-slate-300">
                    Professional Legal & Financial Consultancy, Tamil Nadu, India.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-1">
                    Operational Working Hours:
                  </span>
                  <div className="space-y-1 text-white">
                    <p className="flex justify-between">
                      <span className="text-slate-300">Monday – Saturday:</span>
                      <span className="font-bold text-emerald-400">9:30 AM – 7:30 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-300">Sunday:</span>
                      <span className="text-amber-300 font-medium">Emergency Case Calls By Appointment</span>
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-1">
                    Regional Scope:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Full jurisdiction and representation coverage across all 38 districts of Tamil Nadu, including Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, and Tiruppur.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:9385954338"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-center text-xs shadow-md transition-colors"
                >
                  📞 Direct Dial: 9385954338
                </a>
              </div>
            </div>

            {/* Quick Consultation FAQ Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Common Contact Questions
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <p className="font-bold text-slate-800">Can I discuss documents over WhatsApp?</p>
                  <p className="mt-0.5">Yes, send scanned PDFs or clear photographs of notices/deeds directly to 9385954338 for initial evaluation.</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Do you offer in-person consultations?</p>
                  <p className="mt-0.5">Yes, in-person advisory sessions are arranged across Tamil Nadu by prior appointment.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
