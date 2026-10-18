import React from 'react';

interface HomeTrustNoticeProps {
  onNavigate: (view: string) => void;
}

export const HomeTrustNotice: React.FC<HomeTrustNoticeProps> = ({
  onNavigate,
}) => {
  return (
    <section
      aria-labelledby="business-information-heading"
      className="bg-slate-50 border-y border-slate-200 py-14 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
            Business Information
          </p>

          <h2
            id="business-information-heading"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900"
          >
            SSS Associate — Contact &amp; Service Information
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
            SSS Associate is an MSME-registered business providing enquiries
            and assistance relating to legal advisory, property documentation,
            land survey, accounts, auditing, loans and debt-related matters.
            Please contact our team to confirm the scope of a specific service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-4">
              Office &amp; Contact
            </h3>

            <address className="not-italic text-sm text-slate-600 leading-7">
              9, Gandhi Nagar, Coimbatore, Irugur,
              Tamil Nadu 641103, India.
            </address>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-semibold text-slate-900">Phone: </span>
                <a
                  href="tel:9385954338"
                  className="text-red-700 underline underline-offset-4"
                >
                  9385954338
                </a>
              </p>

              <p>
                <span className="font-semibold text-slate-900">Phone: </span>
                <a
                  href="tel:9087853733"
                  className="text-red-700 underline underline-offset-4"
                >
                  9087853733
                </a>
              </p>

              <p className="break-words">
                <span className="font-semibold text-slate-900">Email: </span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sssassociateservices@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 underline underline-offset-4"
                >
                  sssassociateservices@gmail.com
                </a>
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/SSS+Associate+services/data=!4m2!3m1!1s0x3ba857585b7660d3:0x8976a69b1d21bdd3?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-5 text-sm font-bold text-slate-900 underline underline-offset-4"
            >
              View office on Google Maps
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-3">
              Registration &amp; Important Information
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              SSS Associate holds an MSME registration certificate. Registration
              does not, by itself, establish a professional licence or
              qualification for every service. Please verify any specific
              professional credentials required for your matter.
            </p>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <h4 className="font-bold text-slate-900 text-sm mb-2">
                Legal &amp; Financial Disclaimer
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                Website content is provided for general information and is not
                a substitute for advice from an appropriately qualified
                professional. Outcomes, loan approvals and settlements are
                not guaranteed and may depend on applicable requirements,
                individual circumstances and third-party decisions.
              </p>

              <a
                href="/disclaimer"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate('disclaimer');
                }}
                className="inline-flex mt-3 text-sm font-bold text-red-700 underline underline-offset-4"
              >
                Read the full disclaimer
              </a>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-500">
                Website information owner: SSS Associate Editorial Team
              </p>

              <a
                href="/editorial-policy"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate('editorial-policy');
                }}
                className="inline-flex mt-2 text-sm font-bold text-red-700 underline underline-offset-4"
              >
                Read our editorial policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};