import React from 'react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenConsultationModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-indigo-50/60 via-white to-white border-b border-slate-100 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider">
              <span aria-hidden="true">🏛️</span>
              <span>MSME Registered Business</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              About SSS Associate
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              SSS Associate provides enquiries and assistance relating to
              legal advisory, property documentation, accounts, auditing,
              loan assistance and debt-related matters. Contact our team
              to understand the scope and requirements of your enquiry.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        {/* Business Background */}
        <section
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          aria-labelledby="about-background-heading"
        >
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Our Approach
            </span>

            <h2
              id="about-background-heading"
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight"
            >
              Clear Information. Responsible Guidance. Transparent Communication.
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              <strong className="text-slate-900">SSS Associate</strong>
              {' '}supports individuals and businesses seeking information
              about legal advisory, property-related matters, accounts,
              auditing, loan assistance and debt settlement enquiries.
              We aim to explain the service scope, information required
              and potential next steps clearly.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Every matter has its own facts, documentation and
              requirements. The appropriate process may depend on
              applicable law, lender policies, professional assessment
              and decisions made by relevant third parties. Contact us
              to discuss your specific enquiry before proceeding.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-lg font-extrabold text-slate-900">
                  MSME Registration
                </div>
                <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                  Business registration information can be verified
                  against the applicable registration certificate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-lg font-extrabold text-red-600">
                  Direct Contact
                </div>
                <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                  Contact our team to clarify service availability,
                  requirements and applicable terms.
                </p>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 p-8 rounded-3xl text-white shadow-xl border border-slate-800 space-y-6">
            <div
              className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-2xl font-bold"
              aria-hidden="true"
            >
              🏛️
            </div>

            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                Business Information
              </span>

              <h2 className="text-xl font-bold">
                SSS ASSOCIATE
              </h2>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                An MSME-registered business. Registration details
                should be checked against the official certificate.
                MSME registration alone does not establish a licence
                or professional qualification for every service.
              </p>
            </div>

            <div className="space-y-4 text-xs border-t border-slate-700 pt-5">
              <div className="flex flex-col gap-1 py-1">
                <span className="text-slate-400">Business Registration</span>
                <span className="font-bold text-white">
                  MSME registration
                </span>
              </div>

              <div className="flex flex-col gap-1 py-1">
                <span className="text-slate-400">Office Address</span>
                <address className="not-italic font-bold text-white leading-relaxed">
                  9, Gandhi Nagar, Coimbatore, Irugur,
                  Tamil Nadu 641103, India
                </address>
              </div>

              <div className="flex flex-col gap-1 py-1">
                <span className="text-slate-400">Contact Numbers</span>
                <a
                  href="tel:+919385954338"
                  className="font-bold text-white hover:text-red-300 underline underline-offset-4"
                >
                  +91 93859 54338
                </a>
                <a
                  href="tel:+919087853733"
                  className="font-bold text-white hover:text-red-300 underline underline-offset-4"
                >
                  +91 90878 53733
                </a>
              </div>
            </div>

            <a
              href="tel:+919385954338"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-center text-xs transition-colors shadow-md"
            >
              Call SSS Associate
            </a>

            <a
              href="https://wa.me/919385954338"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border border-slate-600 hover:bg-white/10 text-white font-bold py-3 rounded-xl text-center text-xs transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </section>

        {/* Core Principles */}
        <section
          className="space-y-10"
          aria-labelledby="core-principles-heading"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Our Approach
            </span>

            <h2
              id="core-principles-heading"
              className="text-3xl font-extrabold text-slate-900"
            >
              Principles That Guide Our Work
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              We aim to communicate clearly, handle enquiry information
              responsibly and explain service scope without promising
              outcomes that depend on other parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '⚖️',
                title: 'Careful Review',
                desc: 'Review relevant information and documents within the agreed service scope. Complex matters may require an appropriately qualified professional.',
              },
              {
                icon: '🛡️',
                title: 'Responsible Handling',
                desc: 'Handle enquiry details responsibly and use personal information in accordance with applicable requirements and the published privacy policy.',
              },
              {
                icon: '📋',
                title: 'Clear Process',
                desc: 'Explain the information required, expected process and relevant limitations before work proceeds, where applicable.',
              },
              {
                icon: '🤝',
                title: 'Transparent Communication',
                desc: 'Discuss applicable service terms, fees and limitations clearly. No particular loan approval, settlement or legal outcome is guaranteed.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-200 transition-all space-y-3"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
              Service Enquiries
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Contact Us About Your Requirements
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Contact SSS Associate to enquire about legal advisory,
              property documentation, land survey assistance, accounts,
              auditing, loan assistance and debt-related services.
              Service availability and the appropriate scope of assistance
              will need to be confirmed for your particular matter.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Contact Us
              </button>

              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Submit an Enquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};