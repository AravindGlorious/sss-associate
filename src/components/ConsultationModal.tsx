import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const initialService =
    SERVICES_DATA.find((s) => s.id === initialServiceId)?.title ||
    'Legal Advisory & Services';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: initialService,
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative border border-slate-800 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white text-xl p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close consultation modal"
        >
          ✕
        </button>

        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase tracking-wider mb-2">
            Priority Docket Desk
          </div>
          <h3 className="text-2xl font-bold">Request a Consultation</h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Connect directly with SSS Associate [ MSME ] registered senior consultants.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-4 animate-in fade-in duration-150">
            <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto shadow-md">
              ✓
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Consultation Request Received!</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Thank you <span className="text-white font-bold">{formData.fullName}</span>. Our lead consultant will reach out shortly at{' '}
                <span className="text-emerald-400 font-bold">{formData.phone}</span>.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/919385954338?text=${encodeURIComponent(
                  `Hello SSS Associate, I requested a consultation for ${formData.service}. Name: ${formData.fullName}, Phone: ${formData.phone}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <span>Continue on WhatsApp Now</span>
                <span>➤</span>
              </a>

              <button
                onClick={handleReset}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl font-medium transition-colors cursor-pointer"
              >
                Close & Return
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
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your name"
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
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Service Specialty <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                Brief Description of Case / Timeline
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention urgent deadlines or auction notice dates..."
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/30 text-sm cursor-pointer mt-1"
            >
              Submit Consultation Request →
            </button>

            {/* Direct Dial Options Inside Modal */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 mt-2">
              <span>Direct Dial Helplines:</span>
              <div className="flex gap-2">
                <a href="tel:9385954338" className="text-emerald-400 font-bold hover:underline">
                  9385954338
                </a>
                <span>|</span>
                <a href="tel:9087853733" className="text-indigo-400 font-bold hover:underline">
                  9087853733
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
