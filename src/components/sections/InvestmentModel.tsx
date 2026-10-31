import React from 'react';

export const InvestmentModel: React.FC = () => {
  return (
    <>
      {/* ================= INVESTMENT MODEL SECTION (50/50 COLLABORATION) ================= */}
      <section id="investment" className="w-full bg-[#eef7e3] py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-8 py-6 overflow-hidden">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-1.5 mb-10 sm:mb-14 lg:mb-16 relative z-10">
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>INVESTMENT MODEL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.1] font-['Wix_Madefor_Display',sans-serif]">
                Invest Together. Grow Together.
              </h2>
            </div>

            {/* 3 Column Graphic: Left Circle (Evoltek Plaza) | Center 50%/50% Handshake | Right Circle (Investment Coins) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full mt-8 sm:mt-12 lg:mt-14 mb-8 relative z-10">

              {/* Left Circle: EVOLTEK Charging Station Plaza */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="relative rounded-full overflow-hidden max-w-[280px] sm:max-w-[320px] w-full aspect-square group z-10 shadow-md">
                  <img
                    src="/evoltek_charging_plaza_circle.jpg"
                    onError={(e) => { e.currentTarget.src = '/highway charger.png'; }}
                    alt="Evoltek Charging Station Plaza"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Center: 50% EVOLTEK | Handshake | 50% INVESTOR */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-3 py-4 lg:py-0 relative z-20">
                <div>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#32aa15] tracking-tight leading-none block">
                    50%
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#32aa15] uppercase block mt-1">
                    EVOLTEK
                  </span>
                </div>

                {/* Handshake Badge flanked by lines */}
                <div className="flex items-center justify-center gap-3 my-2 w-full">
                  <div className="h-[2px] w-8 sm:w-12 bg-[#38c838]" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 bg-white shadow-md border border-slate-100/80 flex items-center justify-center group">
                    <img
                      src="/shake hand.jpg"
                      alt="Handshake Partnership"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/handshake.png'; }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="h-[2px] w-8 sm:w-12 bg-[#38c838]" />
                </div>

                <div>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#32aa15] tracking-tight leading-none block">
                    50%
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#32aa15] uppercase block mt-1">
                    INVESTOR
                  </span>
                </div>
              </div>

              {/* Right Circle: Investment Coins Growth */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="relative rounded-full overflow-hidden max-w-[280px] sm:max-w-[320px] w-full aspect-square group z-10 shadow-md">
                  <img
                    src="/investment_growth_coins_circle.jpg"
                    onError={(e) => { e.currentTarget.src = '/investor_growth_circle.jpg'; }}
                    alt="Investment Growth Coins"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>

            {/* Bottom 4 Feature Columns - 2 per row on Mobile, 4 on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-emerald-200/60 w-full relative z-10 text-center">

              {/* 1. Shared Investment */}
              <div className="flex flex-col items-center p-3 space-y-2 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 flex items-center justify-center">
                  <img
                    src="/icon_3d_shared_investment_green.png"
                    alt="Shared Investment"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Shared Investment
                </h4>
                <p className="text-sm text-slate-900 font-medium leading-relaxed max-w-[210px]">
                  You invest only half the cost, and Evoltek invests the other half.
                </p>
              </div>

              {/* 2. Hassle-free Maintenance */}
              <div className="flex flex-col items-center p-3 space-y-2 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 flex items-center justify-center">
                  <img
                    src="/icon_3d_hassle_free_green.png"
                    alt="Hassle-free Maintenance"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Hassle-free Maintenance
                </h4>
                <p className="text-sm text-slate-900 font-medium leading-relaxed max-w-[210px]">
                  Evoltek takes care of setup, operations and station maintenance.
                </p>
              </div>

              {/* 3. Secure Agreements */}
              <div className="flex flex-col items-center p-3 space-y-2 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 flex items-center justify-center">
                  <img
                    src="/icon_3d_secure_agreements_green.png"
                    alt="Secure Agreements"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Secure Agreements
                </h4>
                <p className="text-sm text-slate-900 font-medium leading-relaxed max-w-[210px]">
                  Long-term agreement of 5 or 10 years, renewable.
                </p>
              </div>

              {/* 4. Transparency with App */}
              <div className="flex flex-col items-center p-3 space-y-2 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-2 flex items-center justify-center">
                  <img
                    src="/icon_3d_app_transparency_green.png"
                    alt="Transparency with App"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#1C2029] leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  Transparency with App
                </h4>
                <p className="text-sm text-slate-900 font-medium leading-relaxed max-w-[210px]">
                  Track your station's performance through the Evoltek mobile app.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
