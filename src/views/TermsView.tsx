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
          <span className="text-slate-900 font-bold">Terms & Conditions</span>
        </nav>

        {/* Card Container */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Terms of Engagement
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Terms of Service & Engagement
            </h1>
            <p className="text-xs text-slate-400">
              Standard Professional Conditions • SSS ASSOCIATE [ MSME ] REGISTERED
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Scope of Engagement</h2>
            <p className="text-sm leading-relaxed">
              These Terms of Service govern professional services provided by <strong className="text-slate-900">SSS Associate</strong>, including Legal Advisory, Accounts Bookkeeping, Auditing, Loan Assistance, Takeovers, Asset Advisory, Debt Settlement (OTS), and SARFAESI Bank Auction Support. By engaging our firm or seeking consultation through our hotlines (9385954338 / 9087853733), clients agree to be bound by these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Client Obligations and Accuracy of Records</h2>
            <p className="text-sm leading-relaxed">
              Clients are obligated to provide complete, authentic, and accurate records, financial figures, title deeds, and communication histories. SSS Associate relies in good faith on the veracity of documents provided by clients or their authorized representatives. The firm is not liable for outcomes resulting from concealed information, fraudulent papers, or undisclosed liabilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Professional Advisory Standards</h2>
            <p className="text-sm leading-relaxed">
              Our consultants, legal counsels, and financial advisors apply reasonable skill, care, and diligence consistent with industry best practices and MSME certified guidelines. All opinions, audit notes, draft agreements, and representation letters reflect our professional assessment based on current Indian laws and institutional rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Professional Fees and Expenses</h2>
            <p className="text-sm leading-relaxed">
              Professional fees, consultation retainers, and success charges (where mutually agreed in writing) are communicated transparently prior to commencement. Statutory charges including court fees, stamp duties, sub-registrar registration charges, e-auction portal fees, and government taxes are to be borne directly by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Confidentiality & Intellectual Work Products</h2>
            <p className="text-sm leading-relaxed">
              All client documents remain strictly confidential. Similarly, customized legal opinions, CMA projections, audit work papers, and representation strategies prepared by SSS Associate are proprietary work products developed solely for the benefit of the designated client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Governing Law & Jurisdiction</h2>
            <p className="text-sm leading-relaxed">
              These terms, engagements, and any disputes arising therefrom shall be governed by and construed in accordance with the laws of India. The courts situated in Tamil Nadu, India shall have exclusive jurisdiction over all matters relating to professional engagements with SSS Associate.
            </p>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">7. Engagement Queries</h2>
            <p className="text-sm leading-relaxed">
              For any clarification regarding our engagement terms, contact our administrative desk:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-700">
              <p><strong>SSS ASSOCIATE [ MSME ] REGISTERED</strong></p>
              <p>Primary Helpline: <strong>9385954338</strong> | Secondary: <strong>9087853733</strong></p>
              <p>Tamil Nadu, India</p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
