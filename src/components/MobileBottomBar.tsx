import React from 'react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden shadow-lg flex items-center justify-around gap-2">
      <a
        href="tel:9385954338"
        className="flex-1 bg-emerald-600 active:bg-emerald-700 text-white py-2.5 px-2 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
      >
        <span>📞</span>
        <span className="truncate">Call 9385954338</span>
      </a>

      <a
        href="tel:9087853733"
        className="flex-1 bg-indigo-950 active:bg-indigo-900 text-white py-2.5 px-2 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
      >
        <span>📞</span>
        <span className="truncate">Call 9087853733</span>
      </a>

      <a
        href="https://wa.me/919385954338?text=Hello%20SSS%20Associate%2C%20I%20would%20like%20to%20consult%20regarding%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-10 bg-[#25D366] active:bg-[#20ba5a] text-white rounded-xl flex items-center justify-center text-lg shadow-xs"
        title="WhatsApp chat"
      >
        💬
      </a>
    </div>
  );
};
