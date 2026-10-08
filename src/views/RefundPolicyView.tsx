import React from 'react';

interface RefundPolicyViewProps {
  onNavigate: (view: string) => void;
}

export const RefundPolicyView: React.FC<RefundPolicyViewProps> = ({ onNavigate }) => {
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
          <span className="text-slate-900 font-bold">Refund & Cancellation Policy</span>
        </nav>

        {/* Card Container */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8 text-slate-700">
          
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              Client Protection & Transparency
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-slate-400">
              Clear & Transparent Service Terms • SSS ASSOCIATE [ MSME ] REGISTERED
            </p>
          </div>

          <section className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h2 className="text-base font-bold text-slate-900">
              Preamble & Commitment to Fairness
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At <strong className="text-slate-900">SSS Associate [ MSME ] Registered</strong>, we believe in complete commercial transparency and professional ethics. This Refund & Cancellation Policy outlines the conditions governing fee payments, service cancellations, statutory out-of-pocket expenses, and refund evaluations for our clients across Tamil Nadu and India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Scope of the Policy</h2>
            <p className="text-sm leading-relaxed">
              This policy applies to professional advisory fees and consultation retainers for all 8 practice areas: Legal Advisory, Accounts Management, Auditing, Loan Assistance, Takeovers, Sales & Assets, Debt Settlement (OTS), and SARFAESI Bank Auction Support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Cancellation of Consultation & Case Dockets</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Prior Notice Cancellation:</strong> Clients may reschedule or cancel an initial consultation appointment by notifying our desk at least 24 hours prior to the scheduled slot via phone (<strong className="text-slate-900">9385954338</strong> / <strong className="text-slate-900">9087853733</strong>) or WhatsApp without any cancellation fee.
              </li>
              <li>
                <strong>Cancellation Before Work Inception:</strong> If a formal case engagement retainer is paid but the client requests cancellation before our team has initiated document audit, legal drafting, or CMA financial structuring, an administrative processing charge (up to 10%) will be deducted and the balance amount refunded.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Non-Refundable Statutory & Third-Party Out-of-Pocket Expenses</h2>
            <p className="text-sm leading-relaxed">
              All statutory and government expenses incurred on behalf of the client are strictly <strong>non-refundable once disbursed</strong>, as these payments are remitted directly to state/central government bodies or digital registry portals. These include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Stamp paper duties, franking, and Sub-Registrar registration charges.</li>
              <li>Court filing fees, vakalatnama welfare stamps, and process server fees.</li>
              <li>E-auction portal participant registration fees and digital signature (DSC) charges.</li>
              <li>Official encumbrance certificate (EC) search fees, patta transfer fees, and certified copy procurement costs.</li>
              <li>Statutory GST, MCA, or Income Tax portal late fees or challan payments.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Professional Advisory Retainers & Work-in-Progress</h2>
            <p className="text-sm leading-relaxed">
              Professional advisory involves substantial intellectual labor, legal scrutiny, and financial analysis. In the event of mid-stage case withdrawal by the client:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Partial Work Completed:</strong> Fees will be computed on a quantum meruit basis for the specific hours and drafting stages already delivered; any unearned advance retainer will be returned.
              </li>
              <li>
                <strong>Completed Deliverables:</strong> Once final legal opinion reports, drafted contracts, title search certificates, CMA project dossiers, or representation dockets have been formally delivered to the client, the associated professional fee is deemed earned and is non-refundable.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Third-Party Decisions & Institutional Outcomes</h2>
            <p className="text-sm leading-relaxed">
              SSS Associate provides expert guidance, document vetting, and institutional liaising. However, the final approval or rejection of bank credit facilities, acceptance of OTS debt waivers by bank recovery committees, judicial orders in litigation, or outbidding by third parties in SARFAESI e-auctions depend entirely on the legal authority and discretion of respective banks, courts, or lenders.
            </p>
            <p className="text-sm leading-relaxed">
              An unfavorable institutional decision does not constitute a deficiency in professional advisory service and does not entitle the client to a refund of advisory fees for services duly rendered.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Refund Request Procedure & Turnaround Timelines</h2>
            <p className="text-sm leading-relaxed">
              To request a refund under eligible conditions:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                Submit a written refund request detailing client name, case docket reference, payment receipt, and reason for cancellation via official communication.
              </li>
              <li>
                Our administrative team will review the work logs and communicate the audit outcome within <strong>48 to 72 hours</strong>.
              </li>
              <li>
                Approved refunds will be processed and credited directly to the original bank account / payment source within <strong>5 to 7 business days</strong>.
              </li>
            </ol>
          </section>

          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900">7. Grievance & Administrative Desk</h2>
            <p className="text-sm leading-relaxed">
              For any refund inquiries or billing clarifications:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-700">
              <p><strong>SSS ASSOCIATE [ MSME ] REGISTERED</strong></p>
              <p>Primary Helpline: <strong>9385954338</strong> | Secondary Helpline: <strong>9087853733</strong></p>
              <p>Hours: Monday – Saturday: 9:30 AM – 7:30 PM</p>
              <p>Location: Professional Legal & Financial Consultancy, Tamil Nadu, India.</p>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
};
