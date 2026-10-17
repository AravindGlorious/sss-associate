import React from 'react';

interface DisclaimerViewProps {
  onNavigate: (view: string) => void;
}

export const DisclaimerView: React.FC<DisclaimerViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold">
            Legal & Financial Disclaimer
          </span>
        </nav>

        {/* Disclaimer Content */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          <header className="border-b border-slate-100 pb-6 space-y-2">
            <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Important Information
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Legal & Financial Disclaimer
            </h1>

            <p className="text-xs text-slate-400">
              SSS ASSOCIATE [MSME] REGISTERED
            </p>

            <p className="text-sm leading-relaxed">
              Please read this disclaimer before relying on information
              published on this website or contacting SSS Associate.
            </p>
          </header>

          {/* General Information */}
          <section className="space-y-4 bg-amber-50/80 p-6 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base sm:text-lg">
              <span aria-hidden="true">ℹ️</span>
              <span>General Information Notice</span>
            </div>

            <p className="text-sm text-amber-900 leading-relaxed">
              The information on this website is provided for general
              informational purposes only. It may not address your particular
              circumstances and should not be treated as a substitute for
              advice from a suitably qualified professional.
            </p>

            <p className="text-sm text-amber-900 leading-relaxed">
              Contacting SSS Associate, submitting an enquiry, calling,
              or sending a WhatsApp message does not by itself establish
              an advocate-client relationship or guarantee that a service
              will be provided.
            </p>
          </section>

          {/* Legal Advisory */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Legal Information & Professional Advice
            </h2>

            <p className="text-sm leading-relaxed">
              Website content is general information and is not a legal
              opinion, legal representation, or advice tailored to an
              individual matter. Laws, procedures, limitation periods, and
              outcomes depend on the facts and applicable law.
            </p>

            <p className="text-sm leading-relaxed">
              For a specific legal matter, consult a qualified advocate
              authorised to provide the relevant legal service in India.
              Do not delay court filings, statutory responses, payments,
              or other time-sensitive action based solely on website content
              or an informal discussion.
            </p>

            <p className="text-sm leading-relaxed">
              Any professional engagement, including legal representation,
              is subject to applicable law, the relevant professional's
              eligibility, conflict checks where applicable, and the
              agreed engagement terms.
            </p>
          </section>

          {/* Financial Services */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Financial, Loan & Banking Services
            </h2>

            <p className="text-sm leading-relaxed">
              Information about loans, accounting, financial documentation,
              loan takeover, and related services is general in nature
              unless expressly agreed otherwise in writing. Customers should
              independently review the terms, fees, interest rates, repayment
              obligations, and risks associated with any financial product.
            </p>

            <p className="text-sm leading-relaxed">
              Loan applications, credit limits, interest rates, disbursements,
              restructuring, and other lending decisions are made by the
              relevant bank or financial institution under its applicable
              policies and requirements. SSS Associate does not guarantee
              loan approval, a particular interest rate, or fund disbursement.
            </p>
          </section>

          {/* Property and Bank Auctions */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Property Matters & Bank Auctions
            </h2>

            <p className="text-sm leading-relaxed">
              Property-related information, document review, land survey
              assistance, and bank auction support depend on the documents
              available, the scope of the agreed service, and the facts
              of each property.
            </p>

            <p className="text-sm leading-relaxed">
              A website description or preliminary review is not a guarantee
              of clear title, vacant possession, freedom from encumbrances,
              legal compliance, or a successful auction purchase. Prospective
              buyers should review the official sale notice and auction terms
              and obtain appropriate independent legal and technical due
              diligence before bidding or making payment.
            </p>

            <p className="text-sm leading-relaxed">
              Auction conditions, including any stated sale basis, depend
              on the relevant official notice and applicable law. Users
              should verify the current terms directly with the authorised
              bank or auction platform.
            </p>
          </section>

          {/* Debt Settlement */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. One-Time Settlement (OTS) & Debt Settlement
            </h2>

            <p className="text-sm leading-relaxed">
              Any proposal, negotiation, restructuring request, or settlement
              application is subject to consideration by the relevant lender
              or authorised decision-maker. Only the relevant institution
              can confirm whether a settlement, waiver, revised repayment
              arrangement, or other concession has been approved.
            </p>

            <p className="text-sm leading-relaxed">
              No particular settlement amount, waiver, approval, timeline,
              or outcome is guaranteed. Customers should obtain written
              confirmation from the lender and understand the consequences
              before accepting a settlement or making payment.
            </p>
          </section>

          {/* Service Scope */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Service Scope & MSME Registration
            </h2>

            <p className="text-sm leading-relaxed">
              The availability and scope of any service depend on the
              customer's requirements, the documents supplied, the agreed
              engagement, and the applicable legal and regulatory framework.
              Please confirm the specific service and responsible professional
              before proceeding.
            </p>

            <p className="text-sm leading-relaxed">
              Any MSME registration held by the business is a business
              registration status. It should not be interpreted, by itself,
              as proof of advocate enrolment, a professional licence,
              government endorsement, or authorisation to provide every
              type of legal or financial service.
            </p>
          </section>

          {/* Accuracy and External Websites */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Website Accuracy & External Resources
            </h2>

            <p className="text-sm leading-relaxed">
              Reasonable care may be taken to maintain website information,
              but laws, procedures, fees, and third-party information can
              change. We do not warrant that every item of information is
              complete, current, or applicable to every situation.
            </p>

            <p className="text-sm leading-relaxed">
              Links to external websites are provided for convenience.
              SSS Associate does not control third-party content, availability,
              security, or policies. Users should verify information with
              the relevant official source.
            </p>
          </section>

          {/* Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Limitation of Liability
            </h2>

            <p className="text-sm leading-relaxed">
              To the extent permitted by applicable law, SSS Associate is
              not responsible for decisions made solely in reliance on
              general website information without appropriate verification
              or professional advice. Nothing in this disclaimer excludes
              or limits any liability or legal right that cannot lawfully
              be excluded or limited.
            </p>
          </section>

          {/* Privacy and Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              8. Enquiries & Contact
            </h2>

            <p className="text-sm leading-relaxed">
              For enquiries about services, scope, or appointment
              availability, contact SSS Associate using the details below.
              Avoid sending passwords, OTPs, banking credentials, or
              unnecessary sensitive personal or financial documents through
              an initial enquiry.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl text-sm space-y-2 text-slate-700">
              <p>
                <strong>SSS ASSOCIATE [MSME] REGISTERED</strong>
              </p>

              <p>
                Primary Helpline:{' '}
                <a
                  href="tel:+919385954338"
                  className="font-semibold text-slate-900 hover:text-red-600"
                >
                  9385954338
                </a>
              </p>

              <p>
                Secondary Helpline:{' '}
                <a
                  href="tel:+919087853733"
                  className="font-semibold text-slate-900 hover:text-red-600"
                >
                  9087853733
                </a>
              </p>

              <p>
                Location: 9, Gandhi Nagar, Coimbatore, Irugur,
                Tamil Nadu 641103, India.
              </p>
            </div>
          </section>

          <footer className="border-t border-slate-100 pt-5">
            <p className="text-xs text-slate-500 leading-relaxed">
              This page provides general website information and is not
              a substitute for reviewing the specific facts and applicable
              law. The disclaimer should be reviewed periodically and
              before publication by an appropriately qualified professional.
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};