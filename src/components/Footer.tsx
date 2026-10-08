import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onNavigate: (view: string, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="contact-footer"
      className="bg-indigo-950 text-white pt-16 pb-12 border-t border-slate-800"
      aria-label="SSS Associate website footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand & Business Information */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center gap-3 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-xl"
              aria-label="SSS Associate home page"
            >
              <div
                className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                aria-hidden="true"
              >
                🏛️
              </div>

              <div>
                <span className="text-xl font-extrabold tracking-tight block text-white">
                  SSS ASSOCIATE
                </span>

                <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest block -mt-1">
                  [ MSME ] REGISTERED
                </span>
              </div>
            </a>

            <p className="text-slate-300 text-sm leading-relaxed">
              SSS Associate provides professional legal advisory, financial
              advisory, accounts management, auditing, loan assistance, debt
              restructuring, settlement solutions, property-related support,
              and bank auction advisory services across Tamil Nadu.
            </p>

            <div className="pt-1">
              <span className="inline-block bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
                🛡️ Government of India MSME Registered Entity
              </span>
            </div>

            {/* Social Media Icons */}
            <div
              className="flex items-center gap-3 pt-2"
              aria-label="SSS Associate social media profiles"
            >
              {/* Facebook */}
              <a
                href="https://www.facebook.com/sundaramsuresh.sundaramsuresh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-xs"
                title="Facebook"
                aria-label="SSS Associate on Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-xs"
                title="Instagram"
                aria-label="SSS Associate on Instagram"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.204-.012-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>        
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h2>

            <ul className="space-y-2.5 text-sm text-slate-300">

              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left block"
                >
                  Home Page
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left block"
                >
                  All Services
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left block"
                >
                  About SSS Associate
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left block"
                >
                  Contact & Locations
                </a>
              </li>

            </ul>
          </div>

          {/* Individual Services */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">
              Our Specialized Services
            </h2>

            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={`/services/${srv.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('service-detail', srv.id);
                    }}
                    className="hover:text-red-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                    aria-label={`Learn more about ${srv.title}`}
                  >
                    <span aria-hidden="true">{srv.icon}</span>
                    <span className="truncate">{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Helplines */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-bold text-white text-sm uppercase tracking-wider">
              Helplines & Regional Desk
            </h2>

            <div className="space-y-3 text-sm text-slate-300">

              <a
                href="tel:9385954338"
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 transition-all group"
                aria-label="Call SSS Associate primary helpline 9385954338"
              >
                <span
                  className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-base group-hover:bg-emerald-600 group-hover:text-white transition-colors"
                  aria-hidden="true"
                >
                  📞
                </span>

                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Primary Helpline
                  </div>

                  <div className="text-sm font-bold text-white">
                    9385954338
                  </div>
                </div>
              </a>

              <a
                href="tel:9087853733"
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 transition-all group"
                aria-label="Call SSS Associate secondary helpline 9087853733"
              >
                <span
                  className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-base group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                  aria-hidden="true"
                >
                  📞
                </span>

                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Secondary Helpline
                  </div>

                  <div className="text-sm font-bold text-white">
                    9087853733
                  </div>
                </div>
              </a>

              <div className="text-xs text-slate-300 pt-1 space-y-1">

                <div className="flex items-start gap-2 text-slate-300">
                  <span aria-hidden="true">📍</span>
                  <span>
                    MSME Registered Professional Consultancy, Tamil Nadu, India.
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-1">
                  <span aria-hidden="true">⏰</span>
                  <span>
                    Office Hours: 9:30 AM – 7:30 PM (Mon – Sat)
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">

          {/* Automatic Copyright Year */}
          <div>
            &copy; {new Date().getFullYear()} SSS Associate [ MSME ] Registered.
            All rights reserved.
          </div>

          {/* Legal Links - One Location Only */}
          <nav
            aria-label="Legal and policy navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs"
          >

            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('privacy');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>

            <a
              href="/disclaimer"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('disclaimer');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Bar Council Compliance / Advocate Disclaimer
            </a>

            <a
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use (User Agreement)
            </a>

            <a
              href="/refund-cancellation-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('refund');
              }}
              className="hover:text-white transition-colors cursor-pointer text-amber-300 hover:text-white"
            >
              Refund & Cancellation Policy
            </a>

          </nav>
        </div>

      </div>
    </footer>
  );
};
