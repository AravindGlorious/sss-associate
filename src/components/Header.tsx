import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface HeaderProps {
  currentView: string;
  selectedServiceId: string | null;
  onNavigate: (view: string, serviceId?: string) => void;
  onOpenConsultationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  selectedServiceId,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNav = (view: string, serviceId?: string) => {
    onNavigate(view, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Notification / Geo Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Govt. of India [ MSME ] Registered Legal & Financial Consultancy
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Serving all districts across Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">🕒 Mon – Sat: 9:30 AM – 7:30 PM</span>
            <div className="flex items-center gap-3">
              <a href="tel:9385954338" className="text-white hover:text-emerald-400 font-bold transition-colors">
                📞 9385954338
              </a>
              <span className="text-slate-600">|</span>
              <a href="tel:9087853733" className="text-white hover:text-indigo-400 font-bold transition-colors">
                📞 9087853733
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('home');
            }}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              🏛️
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight block">SSS ASSOCIATE</span>
              <span className="text-[10px] font-bold text-red-600 tracking-wider uppercase block -mt-1">[ MSME ] REGISTERED</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 font-medium text-slate-600">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className={`transition-colors py-2 cursor-pointer font-semibold ${
                currentView === 'home' ? 'text-red-600' : 'hover:text-red-600'
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('services');
                }}
                className={`flex items-center gap-1.5 py-2 cursor-pointer transition-colors font-semibold ${
                  currentView === 'services' || currentView === 'service-detail'
                    ? 'text-red-600'
                    : 'hover:text-red-600'
                }`}
              >
                <span>Services</span>
                <span className="text-xs transition-transform duration-200">
                  {servicesDropdownOpen ? '▲' : '▼'}
                </span>
              </a>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 pt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Core Verticals
                    </span>
                    <a
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav('services');
                      }}
                      className="text-xs text-red-600 font-bold hover:underline cursor-pointer"
                    >
                      View All 8 Services →
                    </a>
                  </div>
                  <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1">
                    {SERVICES_DATA.map((srv) => (
                      <a
                        key={srv.id}
                        href={`/services/${srv.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav('service-detail', srv.id);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          selectedServiceId === srv.id && currentView === 'service-detail'
                            ? 'bg-red-50 text-red-700'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="text-lg">{srv.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate text-slate-900">{srv.title}</p>
                          <p className="text-[11px] text-slate-500 truncate">{srv.shortDesc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNav('about');
              }}
              className={`transition-colors py-2 cursor-pointer font-semibold ${
                currentView === 'about' ? 'text-red-600' : 'hover:text-red-600'
              }`}
            >
              About Us
            </a>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('contact');
              }}
              className={`transition-colors py-2 cursor-pointer font-semibold ${
                currentView === 'contact' ? 'text-red-600' : 'hover:text-red-600'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Professional Call Us & CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9385954338"
              className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-4 py-2.5 rounded-xl font-bold transition-all border border-emerald-200 shadow-xs"
              title="Click to dial 9385954338 directly"
            >
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs animate-pulse">
                📞
              </span>
              <div className="text-left text-xs">
                <span className="block text-[10px] text-emerald-600 uppercase font-semibold">
                  Instant Call
                </span>
                <span>9385954338</span>
              </div>
            </a>
            <button
              onClick={onOpenConsultationModal}
              className="bg-indigo-950 hover:bg-indigo-900 text-white px-5 py-3 rounded-xl font-semibold shadow-md transition-all text-sm cursor-pointer"
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900 text-2xl focus:outline-none p-2 rounded-lg hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-5 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('home');
                }}
                className={`text-left font-semibold py-2.5 px-3 rounded-lg ${
                  currentView === 'home' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                🏠 Home
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('services');
                }}
                className={`text-left font-semibold py-2.5 px-3 rounded-lg ${
                  currentView === 'services' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                📑 All Services (8 Specialties)
              </a>
              
              {/* Quick Individual Service links in mobile */}
              <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-slate-100 ml-2">
                {SERVICES_DATA.slice(0, 4).map((s) => (
                  <a
                    key={s.id}
                    href={`/services/${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('service-detail', s.id);
                    }}
                    className="block w-full text-left text-xs text-slate-600 py-1.5 hover:text-red-600 truncate"
                  >
                    {s.icon} {s.title}
                  </a>
                ))}
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services');
                  }}
                  className="block w-full text-left text-xs text-red-600 font-bold pt-1"
                >
                  + View all 8 services →
                </a>
              </div>

              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('about');
                }}
                className={`text-left font-semibold py-2.5 px-3 rounded-lg ${
                  currentView === 'about' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                ℹ️ About Us & MSME Credentials
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('contact');
                }}
                className={`text-left font-semibold py-2.5 px-3 rounded-lg ${
                  currentView === 'contact' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                📍 Contact & Offices
              </a>
            </div>

            {/* Direct Helplines in Mobile Menu */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Direct Helpline Calls:
              </p>
              <a
                href="tel:9385954338"
                className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl font-bold justify-center shadow-xs text-sm"
              >
                <span>📞 Call Helpline: 9385954338</span>
              </a>
              <a
                href="tel:9087853733"
                className="flex items-center gap-3 bg-indigo-900 hover:bg-indigo-800 text-white p-3 rounded-xl font-bold justify-center shadow-xs text-sm"
              >
                <span>📞 Call Support: 9087853733</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold shadow-md text-sm cursor-pointer"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
