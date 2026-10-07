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
      selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.scopeOfWork.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-red-600 font-bold text-xs sm:text-sm tracking-widest uppercase bg-red-100 px-3.5 py-1 rounded-full">
            Complete Practice Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 8 Professional Legal & Financial Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Click any service below to open its dedicated individual page featuring in-depth scope of work, document preparation checklists, workflow timelines, and direct consultation booking.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/80 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All 8 Services' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or topics..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500"
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:border-red-100 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {srv.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-red-600 transition-colors">
                  {srv.title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {srv.shortDesc}
                </p>

                {/* Scope Preview Highlights */}
                <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  {srv.scopeOfWork.slice(0, 3).map((sc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-red-500 font-bold shrink-0">✓</span>
                      <span className="truncate">{sc}</span>
                    </div>
                  ))}
                  {srv.scopeOfWork.length > 3 && (
                    <span className="text-[10px] text-red-600 font-semibold block pt-1">
                      + {srv.scopeOfWork.length - 3} more specialized items
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onSelectService(srv.id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Open Individual Service Page</span>
                  <span>→</span>
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <a
                    href="tel:9385954338"
                    className="text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1"
                  >
                    <span>📞 9385954338</span>
                  </a>
                  <a
                    href={`https://wa.me/919385954338?text=${encodeURIComponent(
                      `Hello SSS Associate, I would like to inquire about ${srv.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="bg-white p-12 rounded-3xl text-center space-y-4 max-w-lg mx-auto border border-slate-200">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-slate-900">No Services Matched</h3>
            <p className="text-xs text-slate-500">
              Try searching for something else like &quot;auction&quot;, &quot;loans&quot;, &quot;audit&quot;, or &quot;legal&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Global Consultation Trigger Banner */}
        <div className="mt-16 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Unsure which service best fits your situation?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Talk directly with our lead consultant. We evaluate your requirements across legal, financial, and banking facets to tailor the right solution.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:9385954338"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
            >
              📞 Instant Call: 9385954338
            </a>
            <button
              onClick={onOpenConsultationModal}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              Request Free Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
