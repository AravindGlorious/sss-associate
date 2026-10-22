import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileSearch,
  HelpCircle,
  Home,
  ShieldCheck,
  Scale,
  MessageCircle,
  MapPin,
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

// Helper components for clean formatting
const SectionHeading: React.FC<{ number: string; children: React.ReactNode }> = ({
  number,
  children,
}) => (
  <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-800">
      {number}
    </span>
    {children}
  </h2>
);

const Checklist: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="my-4 space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
        <CheckCircle2 size={18} className="mt-1 shrink-0 text-indigo-600" />
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
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-red-100/40 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b08_1px,transparent_1px),linear-gradient(to_bottom,#64748b08_1px,transparent_1px)] bg-[size:36px_36px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-indigo-700"
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
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-indigo-800">
                <BookOpen size={14} aria-hidden="true" />
                SSS Associate Insights
              </span>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Practical insights for
                <span className="block text-indigo-700">
                  property & financial decisions.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore practical guides on property documentation, land records,
                financial matters and due diligence to help you make more informed
                decisions.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                  <FileSearch size={16} className="text-indigo-700" />
                  Property documentation
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
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
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="hover:text-indigo-700"
              >
                Home
              </button>
              <ChevronRight size={14} aria-hidden="true" />
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="hover:text-indigo-700"
              >
                Insights & Guides
              </button>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-slate-700">Property Document Verification</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-800">
                Property Due Diligence
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                How to Verify Land Documents Before Buying Property
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
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
              <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {/* Featured image */}
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

                <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-indigo-800 px-6 py-9 sm:px-10 sm:py-12">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-2 -top-6 h-44 w-44 rounded-full border border-white/10"
                  />

                  <div className="relative max-w-2xl">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-100">
                      Featured guide
                    </span>

                    <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                      Property Document Verification in Coimbatore: A Practical
                      Guide for Buyers
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
                      Understand the key records to review, ownership questions
                      to ask and common issues to investigate before purchasing
                      land or a property.
                    </p>

                    <button
                      type="button"
                      onClick={() => onNavigate('blog-post')}
                      className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-900 transition-colors hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
                    >
                      Read the full guide
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>
                  </div>
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

                      {/* Document verification image */}
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

                      {/* Land and survey image */}
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
                              <span className="mt-0.5 shrink-0 text-indigo-700 transition-transform group-open:rotate-45">
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

                  {/* Article disclaimer */}
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
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-800 hover:text-indigo-950"
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
            <div className="rounded-3xl border border-indigo-100 bg-indigo-900 p-6 text-white shadow-sm">
              <h3 className="text-lg font-bold">Need Help with Verification?</h3>
              <p className="mt-2 text-sm leading-relaxed text-indigo-200">
                Get guidance on document checks and property due diligence from our experts.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-600"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
            </div>

            {isArticlePage && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  On this page
                </h3>
                <nav className="mt-4 flex flex-col space-y-2">
                  {articleSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm text-slate-600 hover:text-indigo-600"
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