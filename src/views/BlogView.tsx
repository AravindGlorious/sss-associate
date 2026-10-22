import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileSearch,
  Home,
  ShieldCheck,
  Scale,
} from 'lucide-react';

interface BlogViewProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenConsultationModal?: () => void;
}

const WHATSAPP_URL =
  'https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20need%20guidance%20regarding%20property%20document%20verification.';

const articleSections = [
  { id: 'why-verification', label: 'Why document verification matters' },
  { id: 'documents', label: 'Documents to check' },
  { id: 'ownership', label: 'Ownership and title checks' },
  { id: 'encumbrance', label: 'Encumbrance and registration' },
  { id: 'survey', label: 'Survey and boundaries' },
  { id: 'common-mistakes', label: 'Common mistakes to avoid' },
  { id: 'faq', label: 'Frequently asked questions' },
];

const faqs = [
  {
    question: 'Why should property documents be verified before buying?',
    answer:
      'Document verification helps identify potential ownership issues, inconsistencies in records, recorded encumbrances and other matters that may require further investigation before a purchase.',
  },
  {
    question: 'Is an Encumbrance Certificate enough to verify a property?',
    answer:
      'No. An Encumbrance Certificate is one part of due diligence. It should be considered alongside title documents, registration records, revenue records and other relevant documents. Its coverage and limitations should also be checked.',
  },
  {
    question: 'Should I check the patta and survey details?',
    answer:
      'Yes, where applicable. Compare the available revenue records and survey particulars with the property documents. A patta or revenue entry alone should not be treated as conclusive proof of ownership.',
  },
  {
    question: 'Can I rely only on photocopies provided by the seller?',
    answer:
      'Photocopies can help with an initial review, but relevant originals or reliable official records should be verified wherever possible. Ask for clarification if documents are missing, inconsistent or difficult to authenticate.',
  },
  {
    question: 'Can property document verification guarantee a risk-free purchase?',
    answer:
      'No review can guarantee that a property is entirely risk-free. The scope of verification, available records, facts and applicable law all matter. Obtain advice from an appropriately qualified legal professional before committing to a transaction.',
  },
];

const SectionHeading: React.FC<{ number: string; children: React.ReactNode }> = ({
  number,
  children,
}) => (
  <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-red-600">
      {number}
    </span>
    {children}
  </h2>
);

const Checklist: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="my-4 space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
        <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-600" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const BlogView: React.FC<BlogViewProps> = ({
  currentView,
  onNavigate,
}) => {
  const isArticlePage = currentView === 'blog-post';

  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      {/* Hero — listing page only */}
      {!isArticlePage && (
        <section className="relative overflow-hidden border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900 cursor-pointer"
              >
                <Home size={14} aria-hidden="true" />
                Home
              </button>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="font-semibold text-slate-900">
                Insights & Guides
              </span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
                <BookOpen size={14} aria-hidden="true" />
                SSS Associate Insights
              </span>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Practical insights for{' '}
                <span className="text-red-600">
                  property & financial decisions.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Explore practical guides on property documentation, land records,
                financial matters and due diligence to help you make more informed
                decisions.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-xs">
                  <FileSearch size={16} className="text-red-600" />
                  Property documentation
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-xs">
                  <Scale size={16} className="text-red-600" />
                  Legal awareness
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article page heading */}
      {isArticlePage && (
        <section className="border-b border-slate-200 bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-slate-900 cursor-pointer"
              >
                Home
              </button>
              <ChevronRight size={14} aria-hidden="true" />
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="hover:text-slate-900 cursor-pointer"
              >
                Insights & Guides
              </button>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="font-medium text-slate-800">Property Document Verification</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-red-100 bg-red-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
                Property Due Diligence
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                How to Verify Land Documents Before Buying Property
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                A practical guide to reviewing ownership history, land records,
                encumbrances and property details before making a purchase.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={15} aria-hidden="true" />
                  October 22, 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} aria-hidden="true" />
                  7–9 min read
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
          <div className="min-w-0">
            {/* Featured article card — listing page only */}
            {!isArticlePage && (
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <figure className="overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85"
                    alt="Open land and countryside relevant to property purchase and land document checks"
                    className="h-56 w-full object-cover sm:h-72 lg:h-80"
                    width={1600}
                    height={800}
                    fetchPriority="high"
                    decoding="async"
                  />
                  <figcaption className="px-5 py-2 text-xs text-slate-500 sm:px-8">
                    Property due diligence starts with reviewing the relevant land
                    and ownership records.
                  </figcaption>
                </figure>

                <div className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-950 p-6 sm:p-10 text-white">
                  <span className="inline-flex rounded-full bg-red-600/30 border border-red-500/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
                    Featured guide
                  </span>

                  <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                    Property Document Verification in Coimbatore: A Practical Guide for Buyers
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    Understand the key records to review, ownership questions to ask and common issues to investigate before purchasing land or a property.
                  </p>

                  <button
                    type="button"
                    onClick={() => onNavigate('blog-post')}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-5 py-3 text-sm font-bold text-white transition-colors shadow-lg shadow-red-500/25 cursor-pointer"
                  >
                    Read the full guide
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-slate-100 px-6 py-5 text-xs text-slate-500 sm:px-8 sm:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} aria-hidden="true" />
                    October 22, 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={15} aria-hidden="true" />
                    7–9 min read
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FileCheck2 size={15} aria-hidden="true" />
                    Property due diligence
                  </span>
                </div>
              </article>
            )}

            {/* Full article — article page only */}
            {isArticlePage && (
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div
                  id="property-verification-guide"
                  className="scroll-mt-8 px-6 py-8 sm:px-10 sm:py-10"
                >
                  <div className="mb-8 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
                        <BookOpen size={19} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          In this guide
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          A general checklist for reviewing property documents
                          and identifying matters that may need further
                          verification.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="prose-content space-y-7">
                    <section>
                      <p className="text-base leading-8 text-slate-700">
                        Buying land, a house or another property is a significant
                        financial decision. Before paying an advance or signing
                        an agreement, buyers should understand the property's
                        documentation, ownership history and relevant records.
                        This process is commonly referred to as property due
                        diligence.
                      </p>
                      <p className="mt-4 text-base leading-8 text-slate-700">
                        In Coimbatore and other parts of Tamil Nadu, the
                        documents relevant to a transaction can vary depending
                        on the property type, location, history and nature of
                        ownership. No single document should automatically be
                        treated as sufficient for every purchase.
                      </p>
                    </section>

                    <section
                      id="why-verification"
                      className="scroll-mt-8 space-y-3"
                    >
                      <SectionHeading number="01">
                        Why is property document verification important?
                      </SectionHeading>
                      <p>
                        A document review helps buyers investigate whether the
                        available records are consistent and whether there are
                        issues requiring further professional advice. Depending
                        on the property, these may include:
                      </p>
                      <Checklist
                        items={[
                          'Inconsistencies in names, survey numbers, boundaries or property descriptions.',
                          'Gaps or questions in the available chain of title documents.',
                          'Recorded mortgages, charges or other encumbrances requiring investigation.',
                          'Differences between the physical property and the descriptions in records.',
                          'Missing approvals or permissions that may be relevant to the proposed use.',
                        ]}
                      />
                      <p>
                        Identifying a discrepancy does not necessarily establish
                        that a transaction is invalid. It means the issue should
                        be investigated and resolved appropriately before
                        proceeding.
                      </p>
                    </section>

                    <section
                      id="documents"
                      className="scroll-mt-8 space-y-3"
                    >
                      <SectionHeading number="02">
                        Documents buyers may need to check
                      </SectionHeading>
                      <p>
                        The appropriate checklist depends on the specific
                        transaction. The following records may be relevant,
                        where applicable:
                      </p>

                      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <img
                          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                          alt="Paperwork being reviewed and organised as part of property document verification"
                          className="h-48 w-full object-cover sm:h-60"
                          width={1200}
                          height={600}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption className="px-4 py-3 text-xs leading-5 text-slate-500 sm:px-5">
                          Compare the documents supplied with relevant official
                          records and seek clarification on inconsistencies.
                        </figcaption>
                      </figure>

                      <div className="overflow-hidden rounded-2xl border border-slate-200">
                        {[
                          {
                            title: 'Sale deed and prior title documents',
                            detail:
                              'Review the available registered conveyance documents and relevant ownership history.',
                          },
                          {
                            title: 'Encumbrance Certificate',
                            detail:
                              'Review the relevant period and recorded transactions, while understanding the certificate’s scope and limitations.',
                          },
                          {
                            title: 'Patta and applicable revenue records',
                            detail:
                              'Compare available revenue entries and land particulars with the other property documents.',
                          },
                          {
                            title: 'Survey records and property plan',
                            detail:
                              'Compare survey references, measurements and boundaries with the available records and actual site.',
                          },
                          {
                            title: 'Planning and building approvals',
                            detail:
                              'Where applicable, check relevant layout approvals, planning permissions and building approvals.',
                          },
                          {
                            title: 'Tax receipts and supporting records',
                            detail:
                              'Use available receipts and supporting documents as part of the wider review, not as conclusive proof of title.',
                          },
                        ].map((item, index) => (
                          <div
                            key={item.title}
                            className={`flex gap-4 p-4 sm:p-5 ${
                              index !== 0 ? 'border-t border-slate-100' : ''
                            }`}
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                              <FileCheck2 size={18} aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <p>
                        Not every item will apply to every property. Ask an
                        appropriately qualified professional to identify the
                        records required for the specific transaction.
                      </p>
                    </section>

                    <section id="ownership" className="scroll-mt-8 space-y-3">
                      <SectionHeading number="03">
                        Review ownership and title history
                      </SectionHeading>
                      <p>
                        Buyers should investigate how the seller acquired the
                        property and review the available title documents for
                        relevant transfers and links in the ownership history.
                        The period and scope of review should be determined
                        based on the facts and applicable legal requirements.
                      </p>
                      <p>Questions to discuss during the review include:</p>
                      <Checklist
                        items={[
                          'Do the names and property descriptions match across the relevant records?',
                          'Are there gaps, inconsistencies or unexplained transfers in the documents provided?',
                          'Are there co-owners, legal heirs, powers of attorney or other parties whose rights may need to be considered?',
                          'Are there pending disputes or other known issues that require independent verification?',
                        ]}
                      />
                      <p>
                        The legal effect of a document depends on its contents,
                        execution, registration where required, applicable law
                        and the facts of the case. A document checklist alone
                        cannot establish marketable title.
                      </p>
                    </section>

                    <section
                      id="encumbrance"
                      className="scroll-mt-8 space-y-3"
                    >
                      <SectionHeading number="04">
                        Check encumbrances and registration records
                      </SectionHeading>
                      <p>
                        An Encumbrance Certificate may help identify transactions
                        recorded in the relevant registration records for the
                        period covered. Buyers should confirm that the property
                        particulars and search period are appropriate.
                      </p>
                      <p>
                        However, an Encumbrance Certificate may not reveal every
                        possible claim, dispute, unregistered interest or issue
                        affecting a property. It should be reviewed together
                        with other records and appropriate enquiries.
                      </p>
                      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-5">
                        <p className="text-sm font-bold text-red-900">
                          Important
                        </p>
                        <p className="mt-2 text-sm leading-7 text-red-900">
                          Do not assume that the absence of an entry in one
                          record guarantees that a property is free from every
                          legal or financial claim.
                        </p>
                      </div>
                    </section>

                    <section id="survey" className="scroll-mt-8 space-y-3">
                      <SectionHeading number="05">
                        Verify survey details and property boundaries
                      </SectionHeading>
                      <p>
                        A site visit and comparison of available survey
                        particulars can help identify discrepancies in
                        measurements, access, boundary descriptions and the
                        physical extent of the property.
                      </p>

                      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <img
                          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                          alt="Landscape and open land illustrating the importance of checking property boundaries and survey details"
                          className="h-48 w-full object-cover sm:h-60"
                          width={1200}
                          height={600}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption className="px-4 py-3 text-xs leading-5 text-slate-500 sm:px-5">
                          Compare survey particulars and boundaries with the site
                          and relevant records; a visual inspection alone does
                          not prove ownership.
                        </figcaption>
                      </figure>

                      <p>
                        Where necessary, obtain assistance from an appropriately
                        qualified survey professional and check the relevant
                        official records. A site inspection by itself does not
                        settle questions of ownership or legal rights.
                      </p>
                    </section>

                    <section
                      id="common-mistakes"
                      className="scroll-mt-8 space-y-3"
                    >
                      <SectionHeading number="06">
                        Common mistakes property buyers should avoid
                      </SectionHeading>
                      <Checklist
                        items={[
                          'Paying a substantial advance before reviewing the available documents.',
                          'Relying only on a patta, tax receipt or Encumbrance Certificate.',
                          'Ignoring differences in survey numbers, measurements or property boundaries.',
                          'Assuming that a seller’s statements replace independent verification.',
                          'Overlooking applicable approvals, access issues or property-specific restrictions.',
                          'Signing documents without understanding their terms, obligations and legal consequences.',
                        ]}
                      />
                      <p>
                        Keep copies of the documents reviewed, record questions
                        that remain unresolved and obtain written clarification
                        before proceeding with the transaction.
                      </p>
                    </section>

                    <section className="space-y-3">
                      <SectionHeading number="07">
                        A practical checklist before making payment
                      </SectionHeading>
                      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
                        <Checklist
                          items={[
                            'Collect the relevant property documents from the seller.',
                            'Compare names, survey particulars and property descriptions.',
                            'Review the relevant ownership history and registration records.',
                            'Investigate identified encumbrances, discrepancies and disputes.',
                            'Verify applicable survey, planning and building details.',
                            'Obtain suitable professional advice on unresolved issues.',
                            'Read the sale agreement and payment conditions before signing.',
                          ]}
                        />
                      </div>
                    </section>

                    <section id="faq" className="scroll-mt-8 space-y-4">
                      <SectionHeading number="08">
                        Frequently asked questions
                      </SectionHeading>
                      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
                        {faqs.map((faq) => (
                          <details key={faq.question} className="group p-5">
                            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden">
                              <span>{faq.question}</span>
                              <span className="mt-0.5 shrink-0 text-red-600 transition-transform group-open:rotate-45">
                                <ArrowRight size={17} aria-hidden="true" />
                              </span>
                            </summary>
                            <p className="mt-3 pr-2 text-sm leading-7 text-slate-600">
                              {faq.answer}
                            </p>
                          </details>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-3">
                      <SectionHeading number="09">
                        Final thoughts
                      </SectionHeading>
                      <p>
                        Property document verification is an important part of
                        informed decision-making. The appropriate checks depend
                        on the property's location, document history, intended
                        use and individual circumstances.
                      </p>
                      <p>
                        Before committing funds, review the relevant records,
                        investigate inconsistencies and obtain advice from an
                        appropriately qualified professional. Verify current
                        requirements through the relevant official authorities
                        wherever necessary.
                      </p>
                    </section>
                  </div>

                  <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        className="mt-0.5 shrink-0 text-amber-800"
                        size={20}
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-sm font-bold text-amber-950">
                          Important disclaimer
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-amber-950/90">
                          This article is for general informational purposes
                          only. It is not a legal opinion, a title certificate
                          or a substitute for advice based on the facts of a
                          specific property. Requirements and records may change.
                          Obtain appropriate professional advice before making
                          a property purchase or financial commitment.
                        </p>
                        <button
                          type="button"
                          onClick={() => onNavigate('disclaimer')}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 cursor-pointer"
                        >
                          Read our full disclaimer
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            <div className="rounded-3xl border border-slate-800 bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-950 p-6 text-white shadow-xl">
              <h3 className="text-lg font-bold">Need Help with Verification?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Get guidance on document checks and property due diligence from our experts.
              </p>
              
              {/* Professional WhatsApp Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] px-4 py-3 text-sm font-bold text-white transition-colors shadow-lg shadow-emerald-900/20"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.12-1.334c1.463.797 3.111 1.218 4.887 1.218h.005c5.507 0 9.991-4.479 9.992-9.986 0-2.667-1.038-5.175-2.925-7.063A9.923 9.923 0 0012.012 2zM12.01 20.314h-.004c-1.5 0-2.972-.403-4.257-1.165l-.305-.181-3.163.824.842-3.08-.201-.318a8.318 8.318 0 01-1.272-4.41c.001-4.582 3.731-8.31 8.317-8.31 2.22 0 4.306.865 5.875 2.435a8.262 8.262 0 012.43 5.877c-.002 4.583-3.732 8.312-8.262 8.312zm4.557-6.223c-.25-.125-1.477-.728-1.706-.812-.228-.083-.395-.125-.561.125-.167.25-.645.812-.79.978-.146.167-.292.188-.542.063-.25-.125-1.056-.389-2.012-1.242-.743-.663-1.245-1.482-1.391-1.732-.146-.25-.015-.385.11-.509.112-.112.25-.292.375-.438.125-.145.166-.25.25-.416.083-.167.042-.313-.021-.438-.063-.125-.562-1.353-.77-1.85-.203-.485-.41-.419-.562-.427l-.48-.009c-.166 0-.437.063-.666.313-.229.25-.875.855-.875 2.084 0 1.23.896 2.417 1.021 2.584.125.167 1.763 2.693 4.272 3.778.597.258 1.063.412 1.427.527.6.19 1.146.163 1.577.099.48-.072 1.477-.604 1.686-1.188.208-.584.208-1.084.146-1.188-.063-.104-.229-.167-.479-.292z" />
                </svg>
                <span>WhatsApp Consultation</span>
              </a>
            </div>

            {isArticlePage && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  On this page
                </h3>
                <nav className="mt-4 flex flex-col space-y-2.5">
                  {articleSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm text-slate-600 hover:text-red-600 transition-colors"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
};