import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

interface ReturnsSectionProps {
  openModalWithOption: (option: string) => void;
}

export const ReturnsSection: React.FC<ReturnsSectionProps> = ({ openModalWithOption }) => {
  return (
    <section id="returns" className="w-full bg-white py-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#32aa15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#32aa15]/10 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <Zap className="w-4 h-4 fill-[#32aa15]" />
            <span>INVESTMENT RETURNS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
            Choose Your Return Model
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-snug">
            Tailored investment structures designed to maximize yield with 50/50 shared capital and hassle-free EVOLTEK management.
          </p>
        </div>

        {/* OPTION A: RETURN CARD WITH BENEFITS */}
        <div className="max-w-5xl mx-auto w-full">

          {/* ================= OPTION A: PERCENTAGE RETURN ================= */}
          <div className="bg-[#d1e7a7] rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 shadow-xl border border-[#32aa15]/20 transition-shadow duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-5 sm:gap-6 lg:gap-8">
              {/* Return summary card */}
              <div className="bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-7 shadow-sm border border-emerald-100/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <span className="text-[#32aa15] font-extrabold text-xs uppercase tracking-widest block mb-1">
                        OPTION A
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
                        Percentage Return
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#32aa15]/10 flex items-center justify-center text-[#32aa15] shrink-0">
                      <Zap className="w-6 h-6 fill-[#32aa15]" />
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm font-medium mb-6">
                    High annual yield potential backed by long-term EV charging growth.
                  </p>
                </div>

                {/* Giant Metric Display */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 pt-3 border-t border-slate-100">
                  <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                    28%
                  </span>
                  <span className="text-slate-500 text-base sm:text-lg font-bold">
                    / Per Turnover
                  </span>
                </div>
              </div>

              {/* Partnership benefits */}
              <div className="flex flex-col justify-center py-2 sm:py-4 lg:py-6 lg:pl-2">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-5">
                  Partnership benefits
                </h4>
                <div className="grid gap-3 sm:gap-4">
                {[
                  '28% Per TurnOver',
                  '10-Year Agreement',
                  'Renewal Option After 10 Years',
                  '50/50 Capital Collaboration',
                  'Complete EVOLTEK Operational Support',
                  'Real-time App Performance Monitoring'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 text-slate-800 font-semibold text-sm sm:text-base">
                    <div className="w-7 h-7 rounded-full bg-[#32aa15] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-5 sm:pt-6">
              <button
                type="button"
                onClick={() => openModalWithOption('Option A: 28% Percentage Return')}
                className="w-full py-4 px-6 bg-[#171E23] hover:bg-[#32aa15] text-white font-bold text-sm sm:text-base rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>CHOOSE PERCENTAGE MODEL</span>
                <ArrowRight className="w-5 h-5 transition-transform hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
