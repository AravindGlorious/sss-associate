import React from 'react';

interface DisclaimerViewProps {
  onNavigate: (view: string) => void;
}

export const DisclaimerView: React.FC<DisclaimerViewProps> = ({ onNavigate }) => {
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
          <span className="text-slate-900 font-bold">Regulatory Disclaimer</span>
        </nav>

        {/* Card Container */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Legal Notice
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Regulatory & Professional Disclaimer
            </h1>
            <p className="text-xs text-slate-400">
              Applicable to all services rendered by SSS ASSOCIATE [ MSME ] REGISTERED
            </p>
          </div>

          <section className="space-y-3 bg-amber-50/70 p-5 rounded-2xl border border-amber-200/80">
            <h2 className="text-base font-bold text-amber-900 flex items-center gap-2">
              <span>⚠️</span>
              <span>Important Regulatory Notice</span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              The information made available on this website is for general informational, educational, and professional awareness purposes only. In adherence to applicable professional standards and the Bar Council of India guidelines, this website does not constitute an advertisement, personal communication, solicitation, or invitation to solicit work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. No Advocate-Client Relationship by Mere Viewing</h2>
            <p className="text-sm leading-relaxed">
              Browsing, reviewing material, or submitting inquiries on this website does not automatically create a formal advocate-client or professional advisory relationship. A binding client engagement is established exclusively upon formal mutual consultation, terms acceptance, and execution of a specific mandate letter or authorization docket with SSS Associate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Financial, Loan & Banking Sanction Disclaimers</h2>
            <p className="text-sm leading-relaxed">
              SSS Associate acts as an independent financial consultant, accounting manager, and loan facilitation advisor. While our team prepares professional CMA data, business project reports (DPR), and liaises with institutional lenders, <strong>all credit sanctions, loan approvals, interest rates, collateral haircuts, and disbursement timelines remain strictly within the sole discretion of the respective banks, NBFCs, or regulatory authorities</strong> based on their prevailing credit policies and CIBIL appraisal parameters. SSS Associate does not provide any unlawful "guaranteed sanction" promises.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. SARFAESI Bank Auction Due Diligence Notice</h2>
            <p className="text-sm leading-relaxed">
              Properties auctioned by banks and asset reconstruction companies (ARCs) under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) are sold on an <em>"As is where is, As is what is, and Whatever there is"</em> basis in accordance with statutory auction notices.
            </p>
            <p className="text-sm leading-relaxed">
              SSS Associate conducts thorough title verification, encumbrance certificate inspection, court order searches, and bidding procedure assistance. However, prospective auction bidders are advised that physical inspection, independent assessment of property condition, and compliance with e-auction terms remain integral parts of an informed investment decision. SSS Associate is not a property vendor or auctioneer; we provide independent technical, financial, and legal advisory to safeguard buyer interests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. One-Time Settlement (OTS) & Debt Restructuring</h2>
            <p className="text-sm leading-relaxed">
              One-Time Settlement (OTS) approvals and waiver of compound interest or penal charges are subject to compromise policy frameworks established by individual lending banks under Reserve Bank of India (RBI) guidelines. SSS Associate formulates viable representations, represents the borrower’s bona fide financial hardship, and negotiates within permissible regulatory limits; the final settlement sanction letter is formally issued solely by the lender’s competent authority.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              SSS Associate and its consultants shall not be held liable for any loss, damage, or delay arising from unexpected regulatory policy changes, bank credit committee rejections, court stay modifications, or incomplete/inaccurate documents supplied by clients.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">6. Contact for Advisory Inquiries</h2>
            <p className="text-sm leading-relaxed">
              For verified case assessments or clarifications regarding our advisory scope:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-700">
              <p><strong>SSS ASSOCIATE [ MSME ] REGISTERED</strong></p>
              <p>Helplines: <strong>9385954338</strong> / <strong>9087853733</strong></p>
              <p>Tamil Nadu, India</p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
