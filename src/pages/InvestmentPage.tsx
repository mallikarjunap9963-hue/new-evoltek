import React, { useState } from 'react';
import {
  ShieldCheck,
  Users,
  CheckCircle2,
  ChevronRight,
  Download,
  Leaf,
  FileText,
  Store,
  Calculator,
  Rocket,
  BarChart3,
  Handshake,
  Shield,
  UserCheck,
  Compass,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvestmentPageProps {
  openModalWithOption: (option: string) => void;
}

const TrendingBarChartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none">
    <rect x="3.5" y="18" width="4" height="11" rx="2" fill="currentColor" />
    <rect x="10" y="13" width="4" height="16" rx="2" fill="currentColor" />
    <rect x="16.5" y="8" width="4" height="21" rx="2" fill="currentColor" />
    <rect x="23" y="4" width="4" height="25" rx="2" fill="currentColor" />
    <path
      d="M3 13.5 L9.5 7 L16.5 12 L28 2.5"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 2.5 H28 V8"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InvestmentPage: React.FC<InvestmentPageProps> = ({ openModalWithOption }) => {
  // Interactive ROI Calculator State matching the reference mockup defaults
  const [numChargers, setNumChargers] = useState<number>(1);
  const [chargerCapacity, setChargerCapacity] = useState<string>('60 KW');
  const [investmentAmount, setInvestmentAmount] = useState<number>(2500000); // 25 Lakh
  const [sessionsPerDay, setSessionsPerDay] = useState<number>(35);
  const [energyPerSession, setEnergyPerSession] = useState<number>(28);
  const [customerRate, setCustomerRate] = useState<number>(19);
  const [energyPurchaseCost, setEnergyPurchaseCost] = useState<number>(8);
  const [annualOpex, setAnnualOpex] = useState<number>(600000);

  // Dynamic calculations matching reference
  // Daily Energy Sold = sessionsPerDay * energyPerSession * numChargers
  const dailyEnergyKwh = sessionsPerDay * energyPerSession * numChargers;
  const annualEnergyKwh = dailyEnergyKwh * 365;

  // Annual Revenue = Annual Energy Sold * customerRate
  const annualRevenue = Math.round(annualEnergyKwh * customerRate);

  // Annual Energy Cost = Annual Energy Sold * energyPurchaseCost
  const annualEnergyCost = Math.round(annualEnergyKwh * energyPurchaseCost);

  // Net Annual Profit = Annual Revenue - Annual Energy Cost - annualOpex
  const netAnnualProfit = Math.max(0, annualRevenue - annualEnergyCost - annualOpex);

  // Payback Period (years) = Investment / Net Annual Profit
  const paybackPeriodYears = netAnnualProfit > 0 ? (investmentAmount / netAnnualProfit).toFixed(1) : '0';

  // 10 Year Return (28% guaranteed annual partnership return) = investmentAmount * 0.28 * 10
  const tenYearReturn = Math.round(investmentAmount * 0.28 * 10);

  // Estimated ROI % = (Net Profit * 10 - Investment) / Investment * 100 or 10-year cumulative ROI
  const estimatedRoiPercent = investmentAmount > 0 
    ? Math.round(((netAnnualProfit * 10) / investmentAmount) * 100) 
    : 0;

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const formatLakhsPill = (val: number) => {
    const lakhs = val / 100000;
    return `₹${lakhs} Lakh`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =========================================================================
          1. HERO SECTION: "Invest Together. Power a Greener Tomorrow."
          ========================================================================= */}
      <section className="relative w-full text-white overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-[#040906]">
        {/* Background EV Charging Station Scene at Twilight */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[position:78%_center] bg-no-repeat pointer-events-none brightness-105"
          style={{ backgroundImage: `url('/breadcrumb.png')` }}
        />
        {/* Left Directional Dark Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[68%] lg:w-[56%] bg-gradient-to-r from-black/95 via-black/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-extrabold text-[#32aa15] uppercase tracking-[0.2em]">
              INVEST WITH EVOLTEK
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-white tracking-tight leading-[1.06] font-['Wix_Madefor_Display',sans-serif]">
              Invest Together.
              <br />
              <span className="text-[#32aa15]">Power a Greener Tomorrow.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Be part of the EV revolution with a reliable business model, attractive returns and a sustainable future.
            </p>

            {/* Breadcrumb Glass Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs shadow-lg text-white">
                <Link
                  to="/"
                  className="flex items-center gap-1.5 hover:text-[#32aa15] transition-colors font-medium"
                >
                  <Home className="w-3.5 h-3.5 text-white" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#32aa15] font-semibold">Investment</span>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* =========================================================================
          2. WHY INVEST IN EV CHARGING?
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column Text (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block">
                WHY INVEST IN EV CHARGING?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug font-['Wix_Madefor_Display',sans-serif]">
                A High-Growth Opportunity
                <br />
                for a <span className="text-[#32aa15]">Cleaner Future</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                The EV revolution is accelerating, and charging infrastructure is at the core of it. Investing with Evoltek means being part of a future-ready industry with long-term growth, stable returns and a positive impact on the environment.
              </p>
            </div>

            {/* Right Column: 4 Feature Cards (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_scalable_network.png"
                    alt="High Growth Potential"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">High Growth Potential</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1.5 leading-snug">
                  Rising EV adoption is driving demand for charging infrastructure.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_flexible_returns.jpg"
                    alt="Attractive Returns"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">Attractive Returns</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1.5 leading-snug">
                  Earn 28% return on a 10-year agreement.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_val_sustainability.png"
                    alt="Future-Proof Investment"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">Future-Proof Investment</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1.5 leading-snug">
                  Be part of a sustainable ecosystem shaping the future.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_val_partnership.png"
                    alt="Partner With Experts"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">Partner With Experts</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1.5 leading-snug">
                  End-to-end support from planning to operations and beyond.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. OUR INVESTMENT MODEL: "Shared Investment. Shared Success."
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-2">
              OUR INVESTMENT MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Shared Investment. Shared Success.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
              Evoltek and the investor contribute equally to set up a charging station, creating a profitable and sustainable business together.
            </p>
          </div>

          {/* 2 Column Layout: Dual-Pill Card + Partner Handshake Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Dual-Pill Card (7 cols) */}
            <div className="lg:col-span-7 relative flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 relative items-stretch h-full">
                
                {/* Left Sub-card: EVOLTEK 50% */}
                <div className="bg-[#eaf7ec] rounded-3xl p-6 sm:p-7 sm:pr-14 lg:pr-16 flex flex-col justify-between border border-[#32aa15]/20 shadow-xs">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#15803d] text-white flex items-center justify-center shrink-0 shadow-md">
                        <Handshake className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-extrabold text-[#15803d] tracking-wider block">
                          EVOLTEK
                        </span>
                        <h4 className="text-3xl sm:text-4xl font-black text-[#15803d] leading-none mt-0.5">
                          50%
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-800">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                        <span>Co-invests</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                        <span>Sets up and runs the station</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                        <span>Handles operations and maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Center Floating Handshake Badge (Desktop sm+) - Increased Size */}
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-[#15803d] shadow-2xl items-center justify-center text-white border-4 border-white hover:scale-105 transition-transform duration-300">
                  <Handshake className="w-11 h-11 sm:w-13 sm:h-13 text-white stroke-[2.3]" />
                </div>

                {/* Right Sub-card: INVESTOR 50% */}
                <div className="bg-[#eaf7ec] rounded-3xl p-6 sm:p-7 sm:pl-14 lg:pl-16 flex flex-col justify-between border border-[#32aa15]/20 shadow-xs">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#15803d] bg-white text-[#15803d] flex items-center justify-center shrink-0 shadow-md">
                        <Users className="w-8 h-8 sm:w-9 sm:h-9 text-[#15803d] stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-extrabold text-[#15803d] tracking-wider block">
                          INVESTOR
                        </span>
                        <h4 className="text-3xl sm:text-4xl font-black text-[#15803d] leading-none mt-0.5">
                          50%
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-800">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                        <span>Co-invests</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                        <span>Provides location and capital</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                        <span>Earns attractive returns</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Photo: Partners Handshake in front of Charger (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[280px] sm:min-h-[320px] relative group">
              <img
                src="/investor_handshake_evoltek.png"
                alt="Business partners handshake in front of Evoltek EV charging station"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. YOUR INVESTMENT, MULTIPLE BENEFITS & STATION SHOWCASE
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Photo: Wide Station Canopy with Cars Charging (6 cols) */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-md h-full min-h-[300px] sm:min-h-[360px] relative group">
              <img
                src="/investment_station_hub.jpg"
                alt="Evoltek Highway EV Charging Station Hub"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Column: 5 Benefit Items (6 cols) */}
            <div className="lg:col-span-6 space-y-5 lg:pl-2">
              <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-2">
                YOUR INVESTMENT, MULTIPLE BENEFITS
              </span>

              <div className="space-y-4 sm:space-y-4.5">
                
                {/* Benefit 1 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0fdf4] border border-[#32aa15]/30 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#e6f9ea] transition-all">
                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803d] stroke-[2.2]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Shared investment</strong> – You invest only half the cost.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0fdf4] border border-[#32aa15]/30 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#e6f9ea] transition-all">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803d] stroke-[2.2]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Hassle-free maintenance</strong> – Evoltek takes care of setup, operations and station maintenance.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0fdf4] border border-[#32aa15]/30 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#e6f9ea] transition-all">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803d] stroke-[2.2]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Secure agreement</strong> – 10-year agreement with renewal option.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0fdf4] border border-[#32aa15]/30 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#e6f9ea] transition-all">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803d] stroke-[2.2]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Transparency</strong> – Track your station's performance through the Evoltek mobile app.
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0fdf4] border border-[#32aa15]/30 text-[#15803d] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#e6f9ea] transition-all">
                    <Store className="w-5 h-5 sm:w-6 sm:h-6 text-[#15803d] stroke-[2.2]" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Extra income potential</strong> – Highway hubs can include cafeteria, restaurant or gaming area.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          5. RETURNS AND AGREEMENT & "INVEST IN CLEAN ENERGY" BANNER
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Card: 28% Return (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-5">
                  RETURNS AND AGREEMENT
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
                  
                  {/* Left Content with Large Circular Icon Badge */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Big Circular Chart Icon */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#e8f7ea] border border-[#32aa15]/20 flex items-center justify-center shrink-0 shadow-xs">
                      <TrendingBarChartIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#16a34a]" />
                    </div>

                    {/* Text Block */}
                    <div className="space-y-1">
                      <span className="text-xs sm:text-sm font-bold text-[#15803d] block">
                        Option: Percentage Return
                      </span>

                      <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#15803d] font-['Wix_Madefor_Display',sans-serif] tracking-tight leading-tight">
                        28% Return
                      </h3>

                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pt-1">
                        <li className="flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#16a34a] fill-[#16a34a] text-white shrink-0" />
                          <span>10-year agreement</span>
                        </li>
                        <li className="flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#16a34a] fill-[#16a34a] text-white shrink-0" />
                          <span>Renewal after 10 years</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Graphic: 3D Rising Green Chart sitting naturally directly on the card */}
                  <div className="w-60 sm:w-72 lg:w-80 xl:w-92 shrink-0 flex items-center justify-center relative">
                    <img
                      src="/returns_growth_chart.png"
                      alt="28% Return Investment Growth Chart"
                      className="w-full h-auto max-h-[250px] sm:max-h-[280px] lg:max-h-[310px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Right Card: "Invest in Clean Energy. Build a Better Tomorrow." (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[260px] sm:min-h-[290px] relative flex flex-col justify-end p-6 sm:p-8 group">
              <img
                src="/clean_energy_invest_charger.png"
                alt="Electric vehicle charging with Evoltek DC fast charger"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-1.5 text-white">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black font-['Wix_Madefor_Display',sans-serif] leading-tight tracking-tight">
                  Invest in
                  <br />
                  <span className="text-[#32aa15]">Clean Energy.</span>
                  <br />
                  Build a <span className="text-[#32aa15]">Better</span>
                  <br />
                  Tomorrow.
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          6. ROI CALCULATOR ("Calculate Your ROI Potential")
          ========================================================================= */}
      <section id="roi-calculator-section" className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 sm:mb-8">
            <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-1">
              ROI CALCULATOR
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Calculate Your ROI Potential
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Compare normal charging with Evoltek charging and see what your investment can earn. Enter the details below to view estimated returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Inputs Column (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              
              {/* Row 1: Number of Chargers + Charger Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Number of Chargers
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={numChargers}
                    onChange={(e) => setNumChargers(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Charger Capacity
                  </label>
                  <select
                    value={chargerCapacity}
                    onChange={(e) => setChargerCapacity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 bg-white"
                  >
                    <option value="60 KW">60 KW</option>
                    <option value="120 KW">120 KW</option>
                    <option value="240 KW">240 KW</option>
                    <option value="360 KW">360 KW</option>
                    <option value="480 KW">480 KW</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Investment Amount (Slider + Pill) + Sessions per day */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Investment Amount
                    </label>
                    <span className="px-2 py-0.5 rounded-full bg-[#f0f9f1] text-[#32aa15] font-bold text-xs border border-[#32aa15]/20">
                      {formatLakhsPill(investmentAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1000000}
                    max={10000000}
                    step={500000}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full accent-[#32aa15] cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Sessions per day
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={200}
                    value={sessionsPerDay}
                    onChange={(e) => setSessionsPerDay(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Row 3: Energy per session + Customer rate */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Energy per session (kWh)
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={150}
                    value={energyPerSession}
                    onChange={(e) => setEnergyPerSession(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Customer rate (₹ / kWh)
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={50}
                    value={customerRate}
                    onChange={(e) => setCustomerRate(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Row 4: Energy purchase cost + Annual operating costs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Energy purchase cost (₹/kWh)
                    </label>
                    <span className="text-xs font-bold text-slate-900">
                      ₹{energyPurchaseCost}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={15}
                    step={1}
                    value={energyPurchaseCost}
                    onChange={(e) => setEnergyPurchaseCost(Number(e.target.value))}
                    className="w-full accent-[#32aa15] cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Annual operating costs (₹)
                  </label>
                  <input
                    type="number"
                    min={100000}
                    max={2000000}
                    step={50000}
                    value={annualOpex}
                    onChange={(e) => setAnnualOpex(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Action Button: Calculate ROI */}
              <div className="pt-2">
                <button
                  onClick={() => openModalWithOption('ROI Calculation Inquiry')}
                  className="w-auto px-6 py-3 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-[#32aa15]/30 transition-all cursor-pointer"
                >
                  <span>Calculate ROI</span>
                  <Calculator className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Results Column: ESTIMATED RETURNS OVERVIEW (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block">
                ESTIMATED RETURNS OVERVIEW
              </span>

              {/* 6 Grid Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* 1. Total Investment */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    Total Investment
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    {formatCurrency(investmentAmount)}
                  </span>
                </div>

                {/* 2. Annual Revenue */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    Annual Revenue
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    {formatCurrency(annualRevenue)}
                  </span>
                </div>

                {/* 3. Net Annual Profit (Green Card) */}
                <div className="bg-[#009b3a] text-white rounded-2xl p-5 shadow-sm">
                  <span className="text-xs text-emerald-100 font-medium block mb-1">
                    Net Annual Profit
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                    {formatCurrency(netAnnualProfit)}
                  </span>
                </div>

                {/* 4. Payback Period (Dark Green Card) */}
                <div className="bg-[#062c16] text-white rounded-2xl p-5 shadow-sm">
                  <span className="text-xs text-emerald-200 font-medium block mb-1">
                    Payback Period
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-['Wix_Madefor_Display',sans-serif]">
                    {paybackPeriodYears} years
                  </span>
                </div>

                {/* 5. 10 Year Return (28%) */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-1">
                      10 Year Return (28%)
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#15803d] font-['Wix_Madefor_Display',sans-serif]">
                      {formatCurrency(tenYearReturn)}+
                    </span>
                  </div>
                  <BarChart3 className="w-6 h-6 text-[#15803d] shrink-0" />
                </div>

                {/* 6. Estimated ROI */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-1">
                      Estimated ROI
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#15803d] font-['Wix_Madefor_Display',sans-serif]">
                      {estimatedRoiPercent}%
                    </span>
                  </div>
                  <BarChart3 className="w-6 h-6 text-[#15803d] shrink-0" />
                </div>

              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                Estimate only. Actual returns vary by utilization, uptime, taxes, financing, demand charges and site specific tariffs.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          7. HOW TO GET STARTED ("Simple Steps to Your EV Charging Business")
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-2">
              HOW TO GET STARTED
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Simple Steps to Your EV Charging Business
            </h2>
          </div>

          {/* 4 Process Steps connected with dotted lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                num: '01',
                title: 'Book',
                desc: 'Pay a ₹25,000 booking advance and receive a receipt.',
                icon: FileText
              },
              {
                num: '02',
                title: 'Agree',
                desc: 'Sign the agreement (10 years).',
                icon: Handshake
              },
              {
                num: '03',
                title: 'Launch',
                desc: 'Your Station is set up in about 2 months.',
                icon: Rocket
              },
              {
                num: '04',
                title: 'Track',
                desc: 'Monitor everything on the Evoltek mobile app.',
                icon: TrendingBarChartIcon
              }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex flex-col items-center text-center group relative">
                  
                  {/* Connecting Dotted Line to next step on Desktop (steps 1, 2, 3) */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-[23px] left-[calc(50%+52px)] right-[calc(-50%+52px)] items-center pointer-events-none z-0 px-2">
                      <div className="w-full border-t-[3px] border-dotted border-[#32aa15]/75" />
                    </div>
                  )}

                  {/* Connecting Dotted Line on Tablet (step 1 -> 2, step 3 -> 4) */}
                  {(idx === 0 || idx === 2) && (
                    <div className="hidden sm:flex lg:hidden absolute top-[23px] left-[calc(50%+52px)] right-[calc(-50%+52px)] items-center pointer-events-none z-0 px-2">
                      <div className="w-full border-t-[3px] border-dotted border-[#32aa15]/75" />
                    </div>
                  )}

                  {/* Icon & Number Badge */}
                  <div className="flex items-center gap-2.5 mb-3 relative z-10">
                    <span className="w-8 h-8 rounded-full bg-[#32aa15] text-white text-xs font-black flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#f0f9f1] border border-[#32aa15]/25 flex items-center justify-center text-[#32aa15] shadow-xs group-hover:scale-105 group-hover:bg-[#e4f6e6] transition-all">
                      <Icon className="w-6 h-6 text-[#32aa15] stroke-[2.2]" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#15803d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-snug max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          8. BOTTOM CALL-TO-ACTION BANNER ("Ready to Invest in the Future of Mobility?")
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[250px] sm:min-h-[290px] lg:min-h-[330px] shadow-2xl bg-cover bg-[position:center_70%] bg-no-repeat flex items-center justify-between p-6 sm:p-10 lg:p-12 text-white"
            style={{ backgroundImage: `url('/breadcrumb.png')` }}
          >
            {/* Left Directional Dark Gradient Overlay */}
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
                  onClick={() => openModalWithOption('Investment Partner Enquiry')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-[#32aa15]/40 transition-all cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
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

    </div>
  );
};
