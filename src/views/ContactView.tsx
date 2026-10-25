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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Unable to send your enquiry. Please try again.');
      }
      const gtag = (window as Window & { gtag?: (...args: any[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', { send_to: 'AW-18511083261/qQdWCMGv5ZwdEP3t4vpE' });
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your enquiry. Please contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100';
  const labelClass = 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600';

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-800">
      {/* Contact-page hero */}
      <section className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#0b1830] sm:min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85"
          alt="Modern commercial building architecture"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08152b]/95 via-[#0b1b34]/80 to-[#0b1b34]/35" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-200 via-[#c9a45c] to-amber-100" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/50 bg-white/95 p-1.5 shadow-xl">
                <img src="/logo-192.webp" alt="SSS Associate logo" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="text-lg font-extrabold tracking-[0.12em] text-white">SSS ASSOCIATE</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">MSME Registered · Tamil Nadu</p>
              </div>
            </div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">We’re here to help</p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let’s discuss your <span className="text-amber-300">next step.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
              Connect with SSS Associate for property and legal assistance, financial consultancy,
              loan support, accounts, auditing and bank-auction related enquiries.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-enquiry" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#c9a45c] px-6 py-3 text-sm font-bold text-[#101b2e] shadow-lg transition hover:bg-amber-300">
                Send an Enquiry <span className="ml-2" aria-hidden="true">↘</span>
              </a>
              <a href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-[#0c1b32]/75 p-7 text-white shadow-2xl backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Contact our team</p>
              <h2 className="mt-3 text-2xl font-bold">A conversation starts here.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Tell us what you need. We’ll review your enquiry and discuss the suitable next steps.</p>
              <div className="mt-6 space-y-4 border-t border-white/15 pt-5 text-sm">
                <a href="tel:9385954338" className="flex items-center gap-3 hover:text-amber-300"><span className="text-xl text-amber-300">☎</span><span><span className="block text-xs text-slate-400">Call us</span><strong>9385954338</strong></span></a>
                <a href="tel:9087853733" className="flex items-center gap-3 hover:text-amber-300"><span className="text-xl text-amber-300">☎</span><span><span className="block text-xs text-slate-400">Additional contact</span><strong>9087853733</strong></span></a>
                <a href="mailto:sssassociateservices@gmail.com" className="flex items-center gap-3 break-all hover:text-amber-300"><span className="text-xl text-amber-300">✉</span><span>sssassociateservices@gmail.com</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="relative z-10 mx-auto -mt-5 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-3">
          <a href="tel:9385954338" className="group flex items-center gap-4 border-b border-slate-100 p-5 transition hover:bg-amber-50/60 md:border-b-0 md:border-r">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0c1b32] text-xl text-amber-300">☎</span>
            <span><span className="block text-xs text-slate-500">Call our team</span><strong className="mt-1 block text-base text-[#0c1b32]">9385954338</strong></span>
            <span className="ml-auto text-lg text-amber-600 transition group-hover:translate-x-1">→</span>
          </a>
          <a href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 border-b border-slate-100 p-5 transition hover:bg-amber-50/60 md:border-b-0 md:border-r">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0c1b32] text-xl text-amber-300">✉</span>
            <span><span className="block text-xs text-slate-500">WhatsApp enquiries</span><strong className="mt-1 block text-base text-[#0c1b32]">Message us</strong></span>
            <span className="ml-auto text-lg text-amber-600 transition group-hover:translate-x-1">→</span>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=9%2C%20Gandhi%20Nagar%2C%20Irugur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641103" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 transition hover:bg-amber-50/60">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0c1b32] text-xl text-amber-300">⌖</span>
            <span><span className="block text-xs text-slate-500">Visit our office</span><strong className="mt-1 block text-base text-[#0c1b32]">Irugur, Coimbatore</strong></span>
            <span className="ml-auto text-lg text-amber-600 transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Enquiry form and details */}
      <section id="contact-enquiry" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">Contact & enquiries</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0c1b32] sm:text-4xl">How can we assist you?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Share a few details and our team can review your requirements. Please do not include passwords, OTPs or sensitive confidential information.</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div><h3 className="text-xl font-bold text-[#0c1b32]">Send us a message</h3><p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p></div>
              <span className="hidden rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800 sm:inline-block">QUICK ENQUIRY</span>
            </div>
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white">✓</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Enquiry submitted</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Thank you, {formData.fullName}. Your enquiry about {formData.service} has been received.</p>
                <a href={`https://wa.me/919385954338?text=${encodeURIComponent(`Hello SSS Associate, I submitted an enquiry through your website about ${formData.service}. Name: ${formData.fullName}, Phone: ${formData.phone}`)}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700">Continue on WhatsApp ↗</a>
                <button type="button" onClick={() => { setSubmitted(false); setSubmitError(''); setFormData({ fullName: '', phone: '', email: '', service: 'Legal Advisory & Services', location: '', message: '' }); }} className="ml-2 mt-5 inline-flex rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-300">New enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div><label htmlFor="contact-full-name" className={labelClass}>Full name *</label><input id="contact-full-name" name="fullName" required autoComplete="name" maxLength={100} value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} placeholder="Your full name" className={fieldClass} /></div>
                  <div><label htmlFor="contact-phone" className={labelClass}>Phone number *</label><input id="contact-phone" name="phone" type="tel" required autoComplete="tel" maxLength={20} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="Your contact number" className={fieldClass} /></div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div><label htmlFor="contact-email" className={labelClass}>Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className={fieldClass} /></div>
                  <div><label htmlFor="contact-location" className={labelClass}>District / city</label><input id="contact-location" name="location" autoComplete="address-level2" maxLength={100} value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Coimbatore" className={fieldClass} /></div>
                </div>
                <div><label htmlFor="contact-service" className={labelClass}>Service required *</label><select id="contact-service" name="service" required value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} className={fieldClass}>{SERVICES_DATA.map(s => <option key={s.id} value={s.title}>{s.icon} {s.title}</option>)}</select></div>
                <div><label htmlFor="contact-message" className={labelClass}>How can we help?</label><textarea id="contact-message" name="message" rows={4} maxLength={5000} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Briefly describe your enquiry..." className={fieldClass + ' resize-y'} /></div>
                {submitError && <p role="alert" aria-live="polite" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{submitError} You can also contact us directly by phone or WhatsApp.</p>}
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c1b32] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#162c4b] disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? 'Sending enquiry…' : 'Submit Enquiry'} <span className="text-amber-300">→</span></button>
                <p className="text-center text-xs leading-5 text-slate-500">Your information is used to respond to your enquiry.</p>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-[#0c1b32] p-7 text-white shadow-lg sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Our office</p>
              <h3 className="mt-3 text-2xl font-bold">SSS Associate</h3>
              <address className="mt-5 not-italic text-sm leading-7 text-slate-200">9, Gandhi Nagar,<br />Irugur, Coimbatore,<br />Tamil Nadu 641103, India.</address>
              <div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm">
                <a href="tel:9385954338" className="flex items-center gap-3 text-white hover:text-amber-300">☎ <span>9385954338</span></a>
                <a href="tel:9087853733" className="flex items-center gap-3 text-white hover:text-amber-300">☎ <span>9087853733</span></a>
                <a href="mailto:sssassociateservices@gmail.com" className="flex items-start gap-3 break-all text-white hover:text-amber-300">✉ <span>sssassociateservices@gmail.com</span></a>
              </div>
              <p className="mt-6 border-t border-white/15 pt-5 text-sm text-slate-300"><strong className="text-white">Office hours</strong><br />Monday – Saturday: 9:30 AM – 7:30 PM</p>
              <a href="https://www.google.com/maps/search/?api=1&query=9%2C%20Gandhi%20Nagar%2C%20Irugur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641103" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#c9a45c] px-5 py-3 text-sm font-bold text-[#0c1b32] transition hover:bg-amber-300">Open in Google Maps ↗</a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0c1b32]">Before you contact us</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3"><span className="font-bold text-amber-700">01</span><span>Tell us which service you need and your preferred location.</span></li>
                <li className="flex gap-3"><span className="font-bold text-amber-700">02</span><span>We’ll review your enquiry and explain the next steps.</span></li>
                <li className="flex gap-3"><span className="font-bold text-amber-700">03</span><span>Fees, scope and service availability are confirmed separately.</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Map section */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">Find us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0c1b32]">Visit our office in Coimbatore</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Our office is in Irugur, Coimbatore, Tamil Nadu. Use the map to plan your route or open directions in Google Maps.</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=9%2C%20Gandhi%20Nagar%2C%20Irugur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641103" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl border border-[#c9a45c] px-5 py-3 text-sm font-bold text-[#0c1b32] transition hover:bg-amber-50">Get directions ↗</a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
            <iframe title="Map showing SSS Associate office in Irugur, Coimbatore" src="https://maps.google.com/maps?q=9%2C%20Gandhi%20Nagar%2C%20Irugur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641103&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="360" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Contact-page footer band; global site footer remains unchanged */}
      <section className="bg-[#08152b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <img src="/logo-192.webp" alt="SSS Associate logo" className="h-12 w-12 rounded-lg bg-white p-1 object-contain" />
            <div><p className="font-extrabold tracking-wider text-white">SSS ASSOCIATE</p><p className="mt-1 text-xs text-amber-300">Property · Legal · Financial Assistance</p></div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">For enquiries, call <a className="font-bold text-white hover:text-amber-300" href="tel:9385954338">9385954338</a> or message us on WhatsApp. Service scope and availability are confirmed after review.</p>
          <a href="#contact-enquiry" className="inline-flex shrink-0 justify-center rounded-xl bg-[#c9a45c] px-5 py-3 text-sm font-bold text-[#08152b] hover:bg-amber-300">Contact us ↑</a>
        </div>
      </section>
    </main>
  );
};
