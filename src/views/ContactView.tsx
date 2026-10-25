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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            'Unable to send your enquiry. Please try again.'
        );
      }

      // Google Ads conversion: trigger only after successful submission.
      const gtag = (
        window as Window & {
          gtag?: (...args: any[]) => void;
        }
      ).gtag;

      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          send_to: 'AW-18511083261/qQdWCMGv5ZwdEP3t4vpE',
        });
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to send your enquiry. Please contact us on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-100 pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
            Contact & Enquiries
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact SSS Associate
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Contact SSS Associate for enquiries about legal advisory,
            property-related assistance, loans, accounts, auditing,
            debt settlement and bank auction support. Our office is
            located in Irugur, Coimbatore, Tamil Nadu. Contact us to
            discuss your requirements and confirm the availability of
            the relevant service.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Primary Call */}
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                📞
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                  Primary Contact
                </span>
                <h2 className="text-xl font-extrabold text-slate-900">
                  9385954338
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Call us to enquire about available services and discuss
              your requirements.
            </p>

            <a
              href="tel:9385954338"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
              aria-label="Call SSS Associate at 9385954338"
            >
              <span>Call Now</span>
              <span aria-hidden="true">→</span>
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
                  Additional Contact
                </span>
                <h2 className="text-xl font-extrabold text-slate-900">
                  9087853733
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Contact us for service enquiries and information about
              the documents relevant to your requirements.
            </p>

            <a
              href="tel:9087853733"
              className="w-full bg-indigo-950 hover:bg-indigo-900 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
              aria-label="Call SSS Associate at 9087853733"
            >
              <span>Call Contact Number</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">
                💬
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
                  WhatsApp Enquiries
                </span>
                <h2 className="text-xl font-extrabold text-slate-900">
                  9385954338
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Message us to describe your requirements and ask which
              documents may be needed.
            </p>

            <a
              href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
              aria-label="Contact SSS Associate on WhatsApp"
            >
              <span>Open WhatsApp</span>
              <span aria-hidden="true">➤</span>
            </a>
          </div>
        </div>

        {/* Contact Form and Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase text-red-600 tracking-widest block mb-1">
                Enquiry Form
              </span>

              <h2 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Share your contact details and a brief description of
                the service you are enquiring about. Our team can review
                your enquiry and advise you on the next steps.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto shadow-md">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Enquiry Submitted Successfully
                </h3>

                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you,{' '}
                  <span className="font-bold text-slate-900">
                    {formData.fullName}
                  </span>
                  . Your enquiry about{' '}
                  <span className="font-bold text-red-600">
                    {formData.service}
                  </span>{' '}
                  has been submitted. The contact number provided is{' '}
                  <span className="font-bold text-slate-900">
                    {formData.phone}
                  </span>
                  .
                </p>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/919385954338?text=${encodeURIComponent(
                      `Hello SSS Associate, I submitted an enquiry through your website about ${formData.service}. Name: ${formData.fullName}, Phone: ${formData.phone}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold py-2.5 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <span>Continue on WhatsApp</span>
                    <span aria-hidden="true">➤</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError('');
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
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Your Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={100}
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Enter your phone number"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      District / City
                    </label>

                    <input
                      id="contact-location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={100}
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g. Chennai, Madurai"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Service Required <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
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
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Enquiry Details
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe the service you need. Do not include passwords, OTPs, or unnecessary confidential information."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                {submitError && (
                  <p
                    role="alert"
                    aria-live="polite"
                    className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-3"
                  >
                    {submitError}
                    <br />
                    You can also contact us directly using the call or
                    WhatsApp options above.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-sm shadow-md transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? 'Sending Enquiry...'
                    : 'Submit Enquiry to SSS Associate →'}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Share only the information needed to process your
                  enquiry. Do not submit passwords, OTPs, or unnecessary
                  sensitive personal or financial documents.
                </p>

                <p className="text-[11px] text-slate-400 text-center">
                  Submitting this form sends your enquiry to SSS Associate.
                  It does not, by itself, establish an advocate-client
                  relationship or guarantee that a service will be provided.
                </p>
              </form>
            )}
          </div>

          {/* Office and Service Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Information */}
            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-xl font-bold">
                  📍
                </div>

                <div>
                  <h2 className="font-bold text-lg">Office & Contact Details</h2>
                  <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                    SSS Associate
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-1">
                    Office Address
                  </span>

                  <address className="not-italic text-sm text-white font-medium leading-relaxed">
                    SSS Associate
                    <br />
                    9, Gandhi Nagar,
                    <br />
                    Coimbatore, Irugur,
                    <br />
                    Tamil Nadu 641103, India.
                  </address>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=9%2C%20Gandhi%20Nagar%2C%20Irugur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                    aria-label="Find SSS Associate office on Google Maps"
                  >
                    View Location on Google Maps
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-2">
                    Contact Numbers
                  </span>

                  <div className="space-y-2">
                    <a
                      href="tel:9385954338"
                      className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
                    >
                      <span aria-hidden="true">📞</span>
                      9385954338
                    </a>

                    <a
                      href="tel:9087853733"
                      className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
                    >
                      <span aria-hidden="true">📞</span>
                      9087853733
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sssassociateservices@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-white hover:text-red-300 transition-colors break-all"
                    >
                      <span aria-hidden="true">✉️</span>
                      <span>sssassociateservices@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-2">
                    Office Hours
                  </span>

                  <p className="text-white">
                    Monday – Saturday: 9:30 AM – 7:30 PM
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold mb-1">
                    Service Enquiries
                  </span>

                  <p className="text-slate-300 leading-relaxed">
                    Our office is located in Coimbatore, Tamil Nadu.
                    Contact us to enquire about services for your
                    requirements and to confirm service availability
                    for your location.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:9385954338"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-center text-xs shadow-md transition-colors"
                >
                  📞 Call SSS Associate
                </a>
              </div>
            </div>

            {/* Contact FAQ */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-2xs space-y-4">
              <h2 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Common Contact Questions
              </h2>

              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <h3 className="font-bold text-slate-800">
                    Can I enquire through WhatsApp?
                  </h3>

                  <p className="mt-0.5 leading-relaxed">
                    Yes. Use the WhatsApp link to describe your requirements
                    and ask which documents may be needed. Avoid sending
                    passwords, OTPs, or sensitive documents before confirming
                    a secure and appropriate way to share them.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    Do you offer in-person consultations?
                  </h3>

                  <p className="mt-0.5 leading-relaxed">
                    Contact us to confirm appointment availability and
                    whether an in-person consultation is suitable for
                    your enquiry.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    Does submitting an enquiry guarantee a service?
                  </h3>

                  <p className="mt-0.5 leading-relaxed">
                    No. Submitting an enquiry allows the team to review
                    your request. Service availability, scope, fees and
                    any formal professional engagement must be confirmed
                    separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
