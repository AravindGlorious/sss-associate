import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onNavigate: (view: string, serviceId?: string) => void;
}

const SITE_NAME = 'SSS Associate';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigation =
    (view: string, serviceId?: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onNavigate(view, serviceId);
    };

  return (
    <footer
      id="contact-footer"
      className="bg-indigo-950 text-white pt-16 pb-12 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">

            <a
              href="/"
              onClick={handleNavigation('home')}
              aria-label="SSS Associate - Home"
              className="flex items-center gap-3 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-xl"
            >
              <div
                aria-hidden="true"
                className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
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

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              SSS Associate provides legal advisory, land survey and boundary
              verification, accounts management, auditing, loan assistance,
              debt restructuring, debt settlement, OTS, real estate and
              SARFAESI bank auction support across Tamil Nadu.
            </p>

            <div>
              <span className="inline-block bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg">
                Government of India MSME Registered Entity
              </span>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-3 pt-2"
              aria-label="Social media links"
            >
              {/* Add only verified official profiles here */}
              {/*
              <a
                href="YOUR_REAL_FACEBOOK_URL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SSS Associate on Facebook"
                className="..."
              >
                ...
              </a>
              */}

            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">

            <h2 className="font-bold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h2>

            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5 text-sm text-slate-300">

                <li>
                  <a
                    href="/"
                    onClick={handleNavigation('home')}
                    className="hover:text-red-400 transition-colors cursor-pointer block"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/services"
                    onClick={handleNavigation('services')}
                    className="hover:text-red-400 transition-colors cursor-pointer block"
                  >
                    All Services
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    onClick={handleNavigation('about')}
                    className="hover:text-red-400 transition-colors cursor-pointer block"
                  >
                    About SSS Associate
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    onClick={handleNavigation('contact')}
                    className="hover:text-red-400 transition-colors cursor-pointer block"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="/faq"
                    onClick={handleNavigation('faq')}
                    className="hover:text-red-400 transition-colors cursor-pointer block"
                  >
                    Frequently Asked Questions
                  </a>
                </li>

                <li>
                  <a
                    href="/blog"
                    onClick={handleNavigation('blog')}
                    className="hover:text-red-400 transition-colors cursor-pointer block"
                  >
                    Insights & Guides
                  </a>
                </li>

              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">

            <h2 className="font-bold text-white text-sm uppercase tracking-wider">
              Our Services
            </h2>

            <nav aria-label="Services navigation">
              <ul className="space-y-2 text-xs text-slate-300">

                {SERVICES_DATA.map((service) => (
                  <li key={service.id}>

                    <a
                      href={`/services/${service.id}`}
                      onClick={handleNavigation(
                        'service-detail',
                        service.id
                      )}
                      className="hover:text-red-400 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                    >
                      <span aria-hidden="true">
                        {service.icon}
                      </span>

                      <span>
                        {service.title}
                      </span>
                    </a>

                  </li>
                ))}

              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">

            <h2 className="font-bold text-white text-sm uppercase tracking-wider">
              Contact SSS Associate
            </h2>

            <div className="space-y-3 text-sm text-slate-300">

              {/* Primary Phone */}
              <a
                href="tel:+919385954338"
                aria-label="Call SSS Associate at 9385954338"
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 transition-all group"
              >
                <span
                  aria-hidden="true"
                  className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-base group-hover:bg-emerald-600 group-hover:text-white transition-colors"
                >
                  📞
                </span>

                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Primary Helpline
                  </div>

                  <div className="text-sm font-bold text-white">
                    +91 93859 54338
                  </div>
                </div>
              </a>

              {/* Secondary Phone */}
              <a
                href="tel:+919087853733"
                aria-label="Call SSS Associate at 9087853733"
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-800 transition-all group"
              >
                <span
                  aria-hidden="true"
                  className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-base group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                >
                  📞
                </span>

                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Secondary Helpline
                  </div>

                  <div className="text-sm font-bold text-white">
                    +91 90878 53733
                  </div>
                </div>
              </a>

              {/* Service Area */}
              <div className="text-xs text-slate-300 pt-1 space-y-2">

                <div className="flex items-start gap-2">
                  <span aria-hidden="true">📍</span>

                  <span>
                    Professional consultancy services available across
                    Tamil Nadu, India.
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">

          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </div>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >

            <a
              href="/privacy-policy"
              onClick={handleNavigation('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              onClick={handleNavigation('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </a>

            <a
              href="/disclaimer"
              onClick={handleNavigation('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Disclaimer
            </a>

            <a
              href="/refund-cancellation-policy"
              onClick={handleNavigation('refund-cancellation')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Refund & Cancellation Policy
            </a>

          </nav>
        </div>
      </div>
    </footer>
  );
};
