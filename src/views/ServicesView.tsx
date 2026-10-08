import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';

interface ServicesViewProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultationModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectService,
  onOpenConsultationModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Legal', 'Finance', 'Banking', 'Assets'];

  const filteredServices = SERVICES_DATA.filter((service: ServiceItem) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      service.category === selectedCategory;

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.scopeOfWork.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            PAGE HEADER
        ========================================================= */}
        <header className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-red-600 sm:text-sm">
            Professional Advisory Services
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Legal, Financial &amp; Business Services in Tamil Nadu
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore SSS Associate&apos;s professional advisory services covering
            legal matters, land and property support, accounts and auditing,
            bank loan assistance, loan takeover and restructuring, debt
            settlement, real estate solutions, and SARFAESI bank auction
            support across Tamil Nadu.
          </p>

          <p className="mt-4 text-xs font-semibold text-slate-500 sm:text-sm">
            Select a service to view its dedicated scope, key deliverables,
            and consultation options.
          </p>
        </header>

        {/* =========================================================
            FILTER + SEARCH
        ========================================================= */}
        <section
          aria-label="Service search and category filters"
          className="mb-10 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            {/* Category Tabs */}
            <div className="w-full md:w-auto">
              <div
                className="flex flex-wrap items-center gap-2"
                role="tablist"
                aria-label="Filter services by category"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'All' ? 'All Services' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <label htmlFor="service-search" className="sr-only">
                Search services or topics
              </label>

              <input
                id="service-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or topics..."
                autoComplete="off"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-10 text-xs text-slate-800 outline-none placeholder:text-slate-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 sm:text-sm"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-400"
              >
                🔍
              </span>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-2.5 cursor-pointer text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Status */}
          {(selectedCategory !== 'All' || searchQuery) && (
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-500">
                Showing{' '}
                <span className="font-bold text-slate-800">
                  {filteredServices.length}
                </span>{' '}
                matching services
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="cursor-pointer text-xs font-bold text-red-600 hover:text-red-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* =========================================================
            SERVICES GRID
        ========================================================= */}
        {filteredServices.length > 0 && (
          <section
            aria-label="SSS Associate services"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredServices.map((srv) => (
              <article
                key={srv.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-100 hover:shadow-xl"
              >
                <div>

                  {/* Icon + Badge */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-600 shadow-sm transition-colors group-hover:bg-red-600 group-hover:text-white">
                      {srv.icon}
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-red-600">
                    {srv.category}
                  </p>

                  {/* Service Title */}
                  <h2 className="mb-2.5 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-red-600">
                    {srv.title}
                  </h2>

                  {/* Service Description */}
                  <p className="mb-6 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {srv.shortDesc}
                  </p>

                  {/* Scope Preview */}
                  <div className="mb-6 space-y-2 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Key Deliverables:
                    </span>

                    {srv.scopeOfWork.slice(0, 3).map((sc, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 font-bold text-red-500"
                        >
                          ✓
                        </span>

                        <span>{sc}</span>
                      </div>
                    ))}

                    {srv.scopeOfWork.length > 3 && (
                      <span className="block pt-1 text-[10px] font-semibold text-red-600">
                        + {srv.scopeOfWork.length - 3} more specialized items
                      </span>
                    )}
                  </div>
                </div>

                {/* =====================================================
                    SERVICE ACTION AREA
                ===================================================== */}
                <div className="space-y-2 border-t border-slate-100 pt-4">

                  {/* Main Service CTA */}
                  <button
                    type="button"
                    onClick={() => onSelectService(srv.id)}
                    aria-label={`View details for ${srv.title}`}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-red-700 sm:text-sm"
                  >
                    <span>View Service Details</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>

                  {/* Phone + WhatsApp */}
                  <div className="flex items-center justify-between gap-3 pt-1 text-xs">

                    <a
                      href="tel:+919385954338"
                      aria-label="Call SSS Associate at 9385954338"
                      className="flex items-center gap-1 font-semibold text-slate-600 transition-colors hover:text-emerald-700"
                    >
                      <span aria-hidden="true">📞</span>
                      <span>9385954338</span>
                    </a>

                    <a
                      href={`https://wa.me/919385954338?text=${encodeURIComponent(
                        `Hello SSS Associate, I would like to inquire about ${srv.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Contact SSS Associate on WhatsApp about ${srv.title}`}
                      className="flex items-center gap-1 font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                    >
                      <span aria-hidden="true">💬</span>
                      <span>WhatsApp</span>
                    </a>

                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* =========================================================
            NO RESULTS
        ========================================================= */}
        {filteredServices.length === 0 && (
          <section
            aria-live="polite"
            className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-12 text-center"
          >
            <span
              className="text-4xl"
              aria-hidden="true"
            >
              🔍
            </span>

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              No Services Matched
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Try searching for something else like &quot;auction&quot;,
              &quot;loans&quot;, &quot;audit&quot;, &quot;legal&quot;,
              &quot;property&quot;, or &quot;debt settlement&quot;.
            </p>

            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800"
            >
              Reset Search Filter
            </button>
          </section>
        )}

        {/* =========================================================
            GLOBAL CONSULTATION CTA
        ========================================================= */}
        <section
          aria-labelledby="consultation-heading"
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 p-8 text-white shadow-xl md:flex-row sm:p-10"
        >
          <div className="space-y-2 text-center md:text-left">
            <h2
              id="consultation-heading"
              className="text-2xl font-bold"
            >
              Not Sure Which Service You Need?
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Talk directly with our lead consultant. We can understand your
              requirements and guide you toward the relevant legal, financial,
              property, loan, debt, or banking advisory service.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">

            <a
              href="tel:+919385954338"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-md transition-colors hover:bg-emerald-700 sm:text-sm"
            >
              📞 Call 9385954338
            </a>

            <button
              type="button"
              onClick={onOpenConsultationModal}
              className="cursor-pointer rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-md transition-colors hover:bg-red-700 sm:text-sm"
            >
              Request Consultation
            </button>

          </div>
        </section>

      </div>
    </div>
  );
};
