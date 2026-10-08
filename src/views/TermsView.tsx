import React from 'react';

interface TermsViewProps {
  onNavigate: (view: string) => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Terms of Use (User Agreement)</span>
        </nav>

        {/* Card Container */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              User Agreement & Terms
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Terms of Use (User Agreement)
            </h1>
            <p className="text-xs text-slate-400">
              Standard User Agreement & Conditions of Service • SSS ASSOCIATE [ MSME ] REGISTERED
            </p>
          </div>

          <section className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-900">
              User Agreement Preamble
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              This Terms of Use (User Agreement) constitutes a legally binding contract between you (the &quot;User&quot; or &quot;Client&quot;) and <strong className="text-slate-900">SSS Associate [ MSME ] Registered</strong>. By accessing this website, utilizing our callback or consultation booking features, contacting us via our helplines (<strong className="text-slate-900">9385954338</strong> / <strong className="text-slate-900">9087853733</strong>) or WhatsApp, or retaining our advisory services, you accept and agree to comply with this User Agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Scope of Services & User Eligibility</h2>
            <p className="text-sm leading-relaxed">
              SSS Associate provides professional advisory and consultancy across 8 core verticals: Legal Advisory, Accounts Management, Auditing, Loan Assistance, Takeovers, Sales & Assets, Debt Settlement (OTS), and SARFAESI Bank Auction Support. By using this service, you represent that you are at least 18 years of age, legally competent to enter into contracts under Indian law, and seeking professional consultancy in good faith.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Client Obligations and Accuracy of Records</h2>
            <p className="text-sm leading-relaxed">
              The User agrees to provide authentic, accurate, and unadulterated documentation (including KYC, title deeds, financial statements, bank notices, and GST records). SSS Associate relies in good faith on the veracity of representations and papers submitted. SSS Associate shall not be liable for adverse outcomes or regulatory penalties arising from inaccurate, forged, or concealed client information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Advisory Standards & Institutional Discretion</h2>
            <p className="text-sm leading-relaxed">
              All advisory opinions, legal drafts, CMA data, and settlement proposals represent our professional analysis consistent with Indian statutory regulations and MSME standards. The User acknowledges that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Bank loan sanctions, interest rate decisions, and disbursements are governed solely by respective lending institutions.</li>
              <li>SARFAESI bank auction bidding decisions and property conditions are subject to the respective bank&apos;s published tender notices and independent buyer due diligence.</li>
              <li>Debt settlement (OTS) compromises depend upon formal sanction letters from bank recovery committees under RBI guidelines.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Professional Fees, Statutory Costs & Retainers</h2>
            <p className="text-sm leading-relaxed">
              Professional consultation fees and retainer amounts are communicated transparently before case commencement. All statutory government expenses (stamp duties, sub-registrar fees, court fees, e-auction portal charges, and filing taxes) are the exclusive responsibility of the User and are payable directly to concerned authorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Confidentiality & Non-Disclosure</h2>
            <p className="text-sm leading-relaxed">
              Both parties agree to treat all communications, records, and commercial information as confidential. SSS Associate shall not disclose client records to third parties without prior authorization, except when mandated by statutory authorities or required for banking/legal submissions on the client&apos;s behalf.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Intellectual Property & Work Products</h2>
            <p className="text-sm leading-relaxed">
              All customized representation drafts, legal opinions, CMA models, audit workbooks, and templates prepared by SSS Associate are proprietary professional work products intended exclusively for the specific client case. Users may not reproduce, resell, or distribute these materials for third-party commercial exploitation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">7. Governing Law & Exclusive Jurisdiction</h2>
            <p className="text-sm leading-relaxed">
              This User Agreement and all client engagements shall be governed by and construed in accordance with the laws of India. Any legal dispute, arbitration, or proceeding shall be subject to the exclusive jurisdiction of the competent courts in Tamil Nadu, India.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">8. Contact Information</h2>
            <p className="text-sm leading-relaxed">
              For any clarification regarding this User Agreement:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-700">
              <p><strong>SSS ASSOCIATE [ MSME ] REGISTERED</strong></p>
              <p>Primary Helpline: <strong>9385954338</strong> | Secondary: <strong>9087853733</strong></p>
              <p>Location: Professional Legal & Financial Consultancy, Tamil Nadu, India.</p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
