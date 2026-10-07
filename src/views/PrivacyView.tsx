import React from 'react';

interface PrivacyViewProps {
  onNavigate: (view: string) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigate }) => {
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
          <span className="text-slate-900 font-bold">Privacy Policy</span>
        </nav>

        {/* Card Container */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Legal Compliance
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Privacy Policy & Client Data Protection
            </h1>
            <p className="text-xs text-slate-400">
              Last Updated: October 2026 • SSS ASSOCIATE [ MSME ] REGISTERED
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Commitment to Client Confidentiality</h2>
            <p className="text-sm leading-relaxed">
              At <strong className="text-slate-900">SSS Associate</strong>, we recognize that our clients entrust us with sensitive personal, commercial, and financial information, including property title deeds, tax filings, financial statements, bank notices, and legal agreements. We are committed to safeguarding this information with the highest standards of professional care in strict compliance with the Indian Digital Personal Data Protection (DPDP) Act and established fiduciary norms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              We collect information provided directly by you during consultations, phone calls (to 9385954338 or 9087853733), WhatsApp interactions, or website submission forms, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Contact Identifiers:</strong> Name, phone number, email address, postal address, and business location in Tamil Nadu.</li>
              <li><strong>Financial & Accounting Records:</strong> Balance sheets, profit and loss statements, GST filing histories, and bank statements submitted for audits, CMA data, or loan processing.</li>
              <li><strong>Property & Legal Documentation:</strong> Title deeds, encumbrance certificates (EC), sale agreements, SARFAESI bank auction notices, and litigation records provided for title scrutiny or settlement advisory.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Purpose and Use of Collected Information</h2>
            <p className="text-sm leading-relaxed">
              Collected client records are utilized solely for legitimate advisory and professional service purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Formulating accurate legal opinions, contract drafts, and regulatory compliance reports.</li>
              <li>Preparing CMA data and loan proposals for presentation to banks or lending institutions on your behalf.</li>
              <li>Conducting title searches, encumbrance verifications, and auction due diligence under the SARFAESI Act.</li>
              <li>Representing client interests in One-Time Settlement (OTS) and bank debt restructuring discussions.</li>
              <li>Maintaining statutory audit trails as required by Indian accounting and taxation authorities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Absolute Non-Disclosure & Third-Party Protection</h2>
            <p className="text-sm leading-relaxed">
              <strong>We do not sell, rent, trade, or commercialize your personal or corporate data under any circumstances.</strong> Client documentation is shared strictly with banks, registration authorities, or relevant regulatory bodies only upon your explicit written or oral instruction and consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Data Storage and Security Safeguards</h2>
            <p className="text-sm leading-relaxed">
              We employ administrative, physical, and technical measures to protect your physical and electronic documents against unauthorized access, loss, or disclosure. Access to client files is restricted exclusively to senior consultants and professionals actively handling your docket.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Retention and Client Rights</h2>
            <p className="text-sm leading-relaxed">
              We retain documents only for the duration necessary to conclude your professional engagement or satisfy statutory retention mandates under Indian law. Clients hold the right to request verification, correction, or return of their original records upon written request.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">7. Grievance & Privacy Inquiries</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions or concerns regarding our privacy practices, please contact our administrative desk:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-700">
              <p><strong>Entity:</strong> SSS ASSOCIATE [ MSME ] REGISTERED</p>
              <p><strong>Primary Contact:</strong> 9385954338 | Secondary: 9087853733</p>
              <p><strong>Location:</strong> Professional Legal & Financial Consultancy, Tamil Nadu, India.</p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
