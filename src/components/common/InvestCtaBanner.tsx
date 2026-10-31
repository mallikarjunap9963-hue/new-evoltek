import React from 'react';
import { ChevronRight, Download } from 'lucide-react';

interface InvestCtaBannerProps {
  openModalWithOption: (option: string) => void;
  className?: string;
}

export const InvestCtaBanner: React.FC<InvestCtaBannerProps> = ({
  openModalWithOption,
  className = 'py-12'
}) => {
  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[250px] sm:min-h-[290px] lg:min-h-[330px] shadow-2xl bg-cover bg-[position:center_70%] bg-no-repeat flex items-center justify-between p-4 sm:p-10 lg:p-12 text-white"
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

            <div className="flex flex-nowrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => openModalWithOption('Partner With Us')}
                className="inline-flex min-w-0 items-center justify-center gap-1.5 px-3 py-2 sm:gap-2 sm:px-6 sm:py-3 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-[10px] sm:text-sm font-bold shadow-lg hover:shadow-[#32aa15]/40 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => openModalWithOption('Download Brochure')}
                className="inline-flex min-w-0 items-center justify-center gap-1.5 px-3 py-2 sm:gap-2 sm:px-5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 text-[10px] sm:text-sm font-bold backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Download Brochure</span>
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
