
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleReset();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
        aria-describedby="consultation-modal-description"
        className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative border border-slate-800 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white text-xl p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close consultation modal"
        >
          <span aria-hidden="true">✕</span>
        </button>

        {/* Modal Heading */}
        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase tracking-wider mb-2">
            Priority Docket Desk
          </div>

          <h2
            id="consultation-modal-title"
            className="text-2xl font-bold"
          >
            Request a Consultation
          </h2>

          <p
            id="consultation-modal-description"
            className="text-slate-300 text-xs sm:text-sm mt-1"
          >
            Connect directly with SSS Associate [ MSME ] registered senior consultants.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-4 animate-in fade-in duration-150"
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
                . Our lead consultant will reach out shortly at{' '}
                <span className="text-emerald-400 font-bold">
                  {formData.phone}
                </span>
                .
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/919385954338?text=${encodeURIComponent(
                  `Hello SSS Associate, I requested a consultation for ${formData.service}. Name: ${formData.fullName}, Phone: ${formData.phone}${formData.email ? `, Email: ${formData.email}` : ''}${formData.notes ? `, Details: ${formData.notes}` : ''}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2"
                aria-label="Continue consultation request on WhatsApp"
              >
                <span>Continue on WhatsApp Now</span>
                <span aria-hidden="true">➤</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl font-medium transition-colors cursor-pointer"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-3.5"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="consultation-fullName"
                className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
              >
                Full Name <span className="text-red-400">*</span>
              </label>

              <input
                id="consultation-fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Phone Number and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="consultation-phone"
                  className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                >
                  Phone Number <span className="text-red-400">*</span>
                </label>

                <input
                  id="consultation-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="e.g. 9385954338"
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="consultation-email"
                  className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
                >
                  Email Address
                </label>

                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@example.com"
                  className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Service Specialty */}
            <div>
              <label
                htmlFor="consultation-service"
                className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
              >
                Service Specialty <span className="text-red-400">*</span>
              </label>

              <select
                id="consultation-service"
                name="service"
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
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

            {/* Case Description */}
            <div>
              <label
                htmlFor="consultation-notes"
                className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1"
              >
                Brief Description of Case / Timeline
              </label>

              <textarea
                id="consultation-notes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                placeholder="Mention urgent deadlines or auction notice dates..."
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
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
                <a
                  href="tel:9385954338"
                  className="text-emerald-400 font-bold hover:underline"
                  aria-label="Call SSS Associate at 9385954338"
                >
                  9385954338
                </a>

                <span aria-hidden="true">|</span>

                <a
                  href="tel:9087853733"
                  className="text-indigo-400 font-bold hover:underline"
                  aria-label="Call SSS Associate at 9087853733"
                >
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
