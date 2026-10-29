import React from 'react';
import { ChevronRight, Download, Leaf, BarChart3 } from 'lucide-react';

interface InvestCtaBannerProps {
  openModalWithOption: (option: string) => void;
}

export const InvestCtaBanner: React.FC<InvestCtaBannerProps> = ({ openModalWithOption }) => {
  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[250px] sm:min-h-[290px] lg:min-h-[330px] shadow-2xl bg-cover bg-[position:center_70%] bg-no-repeat flex items-center justify-between p-6 sm:p-10 lg:p-12 text-white"
          style={{ backgroundImage: `url('/breadcrumb.png')` }}
        >
          {/* Left Directional Dark Gradient Overlay for Crisp Text Readability */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[64%] lg:w-[52%] bg-gradient-to-r from-[#031108] via-[#031108]/95 sm:via-[#031108]/90 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-20 max-w-xl space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-['Wix_Madefor_Display',sans-serif] text-white leading-tight">
              Ready to Invest in the
              <br />
              <span className="text-[#32aa15]">Future of Mobility?</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Partner with EVOLTEK and build a profitable, sustainable EV charging business.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => openModalWithOption('Partner With Us')}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-[#32aa15]/40 transition-all cursor-pointer"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => openModalWithOption('Download Brochure')}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-sm transition-all cursor-pointer"
              >
                <span>Download Brochure</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Floating Frosted Card with Badges */}
          <div className="relative z-20 hidden md:flex flex-col gap-3.5 p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 shadow-2xl w-52 sm:w-60 shrink-0">
            {/* Item 1: Clean Energy Today */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#32aa15]/20 border border-[#32aa15]/40 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">Clean Energy</p>
                <p className="text-[11px] sm:text-xs text-slate-300">Today</p>
              </div>
            </div>

            {/* Item 2: Stronger Tomorrow */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#32aa15]/20 border border-[#32aa15]/40 flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">Stronger</p>
                <p className="text-[11px] sm:text-xs text-slate-300">Tomorrow</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
