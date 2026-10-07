import React, { useState } from 'react';

interface WhatsAppWidgetProps {
  defaultMessage?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ defaultMessage }) => {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [whatsappMsg, setWhatsappMsg] = useState(defaultMessage || '');

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const messageToSend =
      whatsappMsg.trim() || 'Hello SSS Associate, I would like to inquire about your professional services.';
    const encodedMsg = encodeURIComponent(messageToSend);
    window.open(`https://wa.me/919385954338?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Popup Box */}
      {whatsappOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                💬
              </div>
              <div>
                <h4 className="font-bold text-sm">SSS Associate Support</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online • Reply in minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setWhatsappOpen(false)}
              className="text-white/80 hover:text-white text-lg font-bold p-1 cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border border-slate-100 max-w-[90%] text-slate-700">
              Hello! 👋 Welcome to <strong className="text-slate-900">SSS Associate [ MSME ] Registered</strong>.
              How can our consultants assist you with Legal, Loans, Audits, or Bank Auctions today?
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setWhatsappMsg('I need urgent consultation regarding Bank Auction property verification.')}
                className="bg-emerald-50 text-emerald-800 text-[11px] px-2.5 py-1 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors text-left"
              >
                🏛️ Bank Auction Inquiry
              </button>
              <button
                type="button"
                onClick={() => setWhatsappMsg('I would like assistance for MSME Business Loan sanction.')}
                className="bg-emerald-50 text-emerald-800 text-[11px] px-2.5 py-1 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors text-left"
              >
                💳 MSME Loan Query
              </button>
              <button
                type="button"
                onClick={() => setWhatsappMsg('I need advice for Bank Loan Takeover & OTS Debt Settlement.')}
                className="bg-emerald-50 text-emerald-800 text-[11px] px-2.5 py-1 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors text-left"
              >
                📑 OTS Settlement
              </button>
            </div>

            <form onSubmit={handleWhatsAppSend} className="pt-2 space-y-2">
              <textarea
                rows={3}
                value={whatsappMsg}
                onChange={(e) => setWhatsappMsg(e.target.value)}
                placeholder="Type your inquiry here or choose above..."
                className="w-full p-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-800 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-xs cursor-pointer"
              >
                <span>Start WhatsApp Chat (9385954338)</span>
                <span>➤</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setWhatsappOpen(!whatsappOpen)}
        className="group relative bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-transform hover:scale-105 focus:outline-none cursor-pointer"
        title="Chat on WhatsApp (9385954338)"
        aria-label="Open WhatsApp conversation"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"></span>

        {/* WhatsApp SVG Icon */}
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Tooltip on hover */}
        {!whatsappOpen && (
          <span className="hidden sm:block absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp 👋
          </span>
        )}
      </button>
    </div>
  );
};
