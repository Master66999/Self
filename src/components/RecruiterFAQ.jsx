import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { recruiterFAQ } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export default function RecruiterFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    sounds.playClick();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
      
      {/* Section Header */}
      <div className="gsap-section-header mb-14 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-700 font-semibold mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          HIRING MANAGER FAST-TRACK
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Recruiter Quick FAQs.
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
          Direct answers to key screening and interview readiness questions.
        </p>
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {recruiterFAQ.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`gsap-faq-item rounded-2xl border transition-all overflow-hidden ${
                isOpen 
                  ? 'bg-white border-emerald-300 shadow-soft' 
                  : 'bg-white/60 border-slate-200 hover:bg-white'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <div className="flex items-center gap-3.5 pr-4">
                  <div className={`p-2 rounded-xl text-xs font-mono font-bold ${
                    isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                  }`}>
                    0{idx + 1}
                  </div>
                  <span className="font-display font-bold text-base sm:text-lg text-slate-900">
                    {item.question}
                  </span>
                </div>
                <div className={`p-2 rounded-xl text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed font-sans border-t border-slate-100 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-xs sm:text-sm font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}

