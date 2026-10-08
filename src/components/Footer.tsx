import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onNavigate: (view: string, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact-footer" className="bg-indigo-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & MSME Info */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center gap-3 text-left cursor-pointer focus:outline-none"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                🏛️
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight block text-white">SSS ASSOCIATE</span>
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest block -mt-1">
                  [ MSME ] REGISTERED
                </span>
              </div>
            </a>

            <p className="text-slate-300 text-sm leading-relaxed">
              Providing top-tier, MSME certified professional legal advisory, financial audits, accounts management, loan facilitation, debt takeover, settlement solutions, and bank auction support across Tamil Nadu.
            </p>

            <div className="pt-1">
              <span className="inline-block bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
                🛡️ Government of India MSME Registered Entity
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-xs"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-xs"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-600 text-white flex items-center justify-center transition-colors shadow-xs"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-400 text-white flex items-center justify-center transition-colors shadow-xs"
                title="Twitter / X"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Navigation</h4>
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
                  All 8 Services
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
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left text-xs text-slate-400 block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('disclaimer');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left text-xs text-slate-400 block"
                >
                  Bar Council Compliance / Advocate Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left text-xs text-slate-400 block"
                >
                  Terms of Use (User Agreement)
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('refund');
                  }}
                  className="hover:text-red-400 transition-colors cursor-pointer text-left text-xs text-slate-400 block"
                >
                  Refund & Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Individual Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Our Specialized Services</h4>
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
                  >
                    <span>{srv.icon}</span>
                    <span className="truncate">{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Helplines */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Helplines & Regional Desk</h4>
            <div className="space-y-3 text-sm text-slate-300">
              
              <a
                href="tel:9385954338"
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 transition-all group"
              >
                <span className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-base group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  📞
                </span>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Primary Helpline</div>
                  <div className="text-sm font-bold text-white">9385954338</div>
                </div>
              </a>

              <a
                href="tel:9087853733"
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 transition-all group"
              >
                <span className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-base group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  📞
                </span>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Secondary Helpline</div>
                  <div className="text-sm font-bold text-white">9087853733</div>
                </div>
              </a>

              <div className="text-xs text-slate-300 pt-1 space-y-1">
                <div className="flex items-start gap-2 text-slate-300">
                  <span>📍</span>
                  <span>MSME Registered Professional Consultancy, Tamil Nadu, India.</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-1">
                  <span>⏰</span>
                  <span>Office Hours: 9:30 AM – 7:30 PM (Mon – Sat)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} SSS Associate [ MSME ] Registered. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <a
              href="/privacy"
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
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use (User Agreement)
            </a>
            <a
              href="/refund"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('refund');
              }}
              className="hover:text-white transition-colors cursor-pointer text-amber-300 hover:text-white"
            >
              Refund & Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
