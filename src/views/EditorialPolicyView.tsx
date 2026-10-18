
import React from 'react';

interface EditorialPolicyViewProps {
  onNavigate: (view: string) => void;
}

export const EditorialPolicyView: React.FC<EditorialPolicyViewProps> = ({
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-500 mb-6"
        >
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('home');
            }}
            className="hover:text-red-600 underline underline-offset-4"
          >
            Home
          </a>

          <span aria-hidden="true">/</span>
          <span className="text-slate-900 font-semibold">
            Editorial Policy
          </span>
        </nav>

        <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-8">
          <header className="border-b border-slate-100 pb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
              Transparency &amp; Content Standards
            </p>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Editorial Policy
            </h1>

            <p className="mt-4 text-sm text-slate-600">
              Content owner: SSS Associate Editorial Team
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Policy last updated:{' '}
              <time dateTime="2026-10-18">18 October 2026</time>
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Purpose of Our Content
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              SSS Associate publishes website information to explain its
              service categories, enquiry process, contact information and
              general topics relevant to its services. Website content is
              intended to help visitors understand what they may need to
              discuss with our team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Accuracy and Verification
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              We aim to keep business information and service descriptions
              clear and accurate. Information should be checked against
              relevant official sources and applicable requirements where
              appropriate. Visitors should independently verify important
              legal, financial, tax, audit, property and lending information
              before making decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Authors and Professional Qualifications
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              General website information is published under the SSS Associate
              Editorial Team name. Individual authors, reviewers and their
              qualifications will be identified where applicable and where
              those details have been verified. We do not claim professional
              qualifications or licences that have not been established.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Updates and Corrections
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              We may revise content when business information, service scope
              or relevant requirements change. Where appropriate, material
              editorial updates should show a genuine review or modification
              date. Visitors can contact us to report inaccurate or outdated
              website information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Sources and External Information
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              Where a page discusses specific legal, regulatory or financial
              requirements, relevant official sources should be consulted
              where available. External websites are managed by their
              respective owners, and their content may change independently
              of this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Reviews, Testimonials and Claims
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              We do not publish fabricated customer reviews, ratings, client
              counts, success rates, credentials or service outcomes.
              Testimonials, where published in the future, should be genuine
              and used with appropriate permission. Registration information
              does not imply professional licensing for every service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Legal and Financial Limitations
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              Website content is general information and is not a substitute
              for advice from an appropriately qualified professional.
              Legal positions, tax obligations, audit requirements, loan
              approvals, debt settlements and property decisions depend on
              the facts of each matter and the relevant authorities or
              institutions. No specific result is guaranteed.
            </p>

            <a
              href="/disclaimer"
              onClick={(event) => {
                event.preventDefault();
                onNavigate('disclaimer');
              }}
              className="inline-flex text-sm font-bold text-red-700 underline underline-offset-4"
            >
              Read the full legal and financial disclaimer
            </a>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              8. Contact and Corrections
            </h2>

            <p className="text-sm text-slate-600 leading-7">
              To report an error or ask about published website information,
              contact SSS Associate using the contact details below.
            </p>

            <address className="not-italic text-sm text-slate-600 leading-7">
              SSS Associate
              <br />
              9, Gandhi Nagar, Coimbatore, Irugur,
              Tamil Nadu 641103, India.
              <br />
              Phone:{' '}
              <a
                href="tel:9385954338"
                className="text-red-700 underline underline-offset-4"
              >
                9385954338
              </a>
              <br />
              Phone:{' '}
              <a
                href="tel:9087853733"
                className="text-red-700 underline underline-offset-4"
              >
                9087853733
              </a>
              <br />
              Email:{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sssassociateservices@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 underline underline-offset-4"
              >
                sssassociateservices@gmail.com
              </a>
            </address>
          </section>
        </article>
      </div>
    </div>
  );
};