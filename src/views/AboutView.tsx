import React from 'react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenConsultationModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50/60 via-white to-white border-b border-slate-100 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider">
            <span>🏛️</span>
            <span>Government of India [ MSME ] Registered Entity</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About SSS Associate
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A trusted multi-disciplinary consultancy providing institutional-grade legal advisory, accounting precision, statutory audits, loan facilitation, and SARFAESI bank auction solutions across Tamil Nadu, India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        
        {/* Story & Background */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Our Heritage & Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Rooted in Integrity, Driven by Measurable Legal & Financial Results
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded to provide Indian enterprises, MSME entrepreneurs, and private individuals with transparent, institutional-quality advisory, <strong className="text-slate-900">SSS Associate</strong> bridges the critical gap between complex Indian statutory laws and pragmatic commercial business execution.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Whether evaluating multi-crore property title deeds under the SARFAESI Act, restructuring high-interest bank debt through RBI-compliant OTS, or managing routine monthly GST and auditing compliances, our firm operates with uncompromising diligence and strict confidentiality.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-black text-slate-900">1,000+</div>
                <p className="text-xs text-slate-500 font-medium mt-1">Clients Successfully Represented</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-black text-red-600">100%</div>
                <p className="text-xs text-slate-500 font-medium mt-1">MSME Regulatory Compliance</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 p-8 rounded-3xl text-white shadow-xl border border-slate-800 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-2xl font-bold">
              🏛️
            </div>
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                Firm Credentials
              </span>
              <h3 className="text-xl font-bold">SSS ASSOCIATE</h3>
              <p className="text-xs text-slate-300 mt-1">
                Registered under the Micro, Small & Medium Enterprises Development Act, Government of India.
              </p>
            </div>

            <div className="space-y-3 text-xs border-t border-slate-800 pt-5">
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Status:</span>
                <span className="font-bold text-emerald-400">Certified Active MSME</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Headquarters / Regional Base:</span>
                <span className="font-bold text-white">Tamil Nadu, India</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Primary Practice Areas:</span>
                <span className="font-bold text-white">Legal, Audit, Banking, SARFAESI</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Direct Contact:</span>
                <span className="font-bold text-white">9385954338 / 9087853733</span>
              </div>
            </div>

            <a
              href="tel:9385954338"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-center text-xs transition-colors shadow-md"
            >
              📞 Call Official Helpline: 9385954338
            </a>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Our Core Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              The Standard of Excellence We Uphold
            </h2>
            <p className="text-slate-600 text-sm">
              Four non-negotiable principles that shape how we counsel, represent, and advise our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '⚖️',
                title: 'Legal Accuracy',
                desc: 'Every clause, title document, and statutory return is scrutinized to leave zero room for legal ambiguity or regulatory disputes.',
              },
              {
                icon: '🛡️',
                title: 'Client Privilege & Privacy',
                desc: 'Strict non-disclosure protocols protect sensitive financial ledgers, property deeds, and borrower credit histories.',
              },
              {
                icon: '⚡',
                title: 'Turnaround Agility',
                desc: 'In legal notices, loan sanctions, and SARFAESI auctions, time is critical. We guarantee rapid turnaround within realistic timelines.',
              },
              {
                icon: '🤝',
                title: 'Transparent Truth',
                desc: 'No unrealistic false promises or hidden costs. We provide factual risk assessments so you make confident commercial decisions.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-red-200 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Reach in Tamil Nadu */}
        <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
              Geographic Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Serving Clients Across All Regions of Tamil Nadu
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              From industrial manufacturing hubs to commercial metropolitan districts, our legal counsels and financial consultants assist clients in Chennai, Coimbatore, Madurai, Tiruchirappalli (Trichy), Salem, Tiruppur, Erode, Vellore, Tirunelveli, and surrounding districts.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Contact Regional Desk
              </button>
              <button
                onClick={onOpenConsultationModal}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Book Case Review
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
