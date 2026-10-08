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
          <span className="text-slate-900 font-bold">Bar Council Compliance / Advocate Disclaimer</span>
        </nav>

        {/* Card Container */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Legal Compliance & Ethics
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Bar Council Compliance / Advocate Disclaimer
            </h1>
            <p className="text-xs text-slate-400">
              Formulated in accordance with the Bar Council of India Rules & Advocates Act, 1961 • SSS ASSOCIATE [ MSME ] REGISTERED
            </p>
          </div>

          {/* Bar Council Notice Box */}
          <section className="space-y-4 bg-amber-50/80 p-6 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base sm:text-lg">
              <span>🏛️</span>
              <span>Bar Council of India Rule Compliance Undertaking</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              As per the rules framed by the <strong>Bar Council of India</strong>, advocates and professional legal consulting entities are not permitted to solicit work or advertise in any manner. By accessing and using this website (<span className="font-semibold text-slate-800">SSS Associate</span>), the user voluntarily acknowledges and confirms the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-amber-900">
              <li>
                There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from SSS Associate or any of its members/associates to solicit any work through this platform.
              </li>
              <li>
                The user wishes to gain information about SSS Associate for their own information, educational awareness, and personal/commercial use.
              </li>
              <li>
                The information provided on this platform is made available exclusively at the specific request of the user for general informational purposes.
              </li>
              <li>
                The information provided does not amount to legal advice or create an advocate-client relationship. SSS Associate shall not be liable for any consequence of any action taken by the user relying on material provided herein.
              </li>
            </ul>
          </section>

          {/* Advocate Disclaimer Detailed Points */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Advocate & Legal Advisory Disclaimer</h2>
            <p className="text-sm leading-relaxed">
              Any transmission, receipt, or use of the contents of this website and communications made via contact forms, phone calls to <strong className="text-slate-900">9385954338</strong> / <strong className="text-slate-900">9087853733</strong>, or WhatsApp do not establish a formal advocate-client relationship between SSS Associate and the user. A formal advocate-client or professional advisory engagement takes effect solely upon mutual execution of a specific written vakalatnama, retainer agreement, or written mandate docket.
            </p>
            <p className="text-sm leading-relaxed">
              Legal scenarios involve distinct factual complexities. Users should not act or refrain from acting based upon any general information contained on this website without seeking independent legal advice from qualified legal counsels licensed in India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Financial, Loan & Banking Approvals Disclaimer</h2>
            <p className="text-sm leading-relaxed">
              SSS Associate provides professional financial consultancy, accounting management, CMA report drafting, and loan facilitation advisory. <strong>All credit sanctions, interest rates, loan approvals, margin reliefs, and fund disbursements are strictly at the sole discretion of the respective banks, NBFCs, and financial institutions</strong> under their prevailing credit norms and RBI policies. SSS Associate makes no false or unlawful "guaranteed sanction" representations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. SARFAESI Bank Auction Due Diligence Notice</h2>
            <p className="text-sm leading-relaxed">
              Bank auction properties under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) are offered on an <em>"As is where is, As is what is, and Whatever there is"</em> basis in accordance with statutory bank auction sale notices.
            </p>
            <p className="text-sm leading-relaxed">
              SSS Associate conducts independent title search, encumbrance verification, and bidding guidance to assist buyers in risk assessment. Prospective bidders are advised that physical inspection and adherence to e-auction portal terms are mandatory. SSS Associate is an independent advisory firm and does not act as an auctioneer or seller of properties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. One-Time Settlement (OTS) & Debt Negotiations</h2>
            <p className="text-sm leading-relaxed">
              One-Time Settlement (OTS) sanction letters and waiver of penal charges are issued exclusively by the competent sanctioning authorities of lending banks in accordance with their board-approved compromise settlement policies. SSS Associate assists in evaluating financial distress and drafting bona fide representation proposals within statutory limits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              SSS Associate, its associates, counsels, and consultants disclaim all liability to any person for any loss or damage caused by errors or omissions, whether resulting from negligence, accident, or any other cause, in relation to the website contents or general discussions prior to a formal professional mandate.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">6. Compliance & Contact Inquiries</h2>
            <p className="text-sm leading-relaxed">
              For regulatory clarifications or to arrange an official consultation with our legal and financial panel:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-700">
              <p><strong>SSS ASSOCIATE [ MSME ] REGISTERED</strong></p>
              <p>Primary Helpline: <strong>9385954338</strong> | Secondary Helpline: <strong>9087853733</strong></p>
              <p>Location: Professional Legal & Financial Consultancy, Tamil Nadu, India.</p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
