import React from 'react';
import {
  ShieldCheck,
  Users,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Store,
  Rocket,
  Handshake,
  Shield,
  UserCheck,
  Compass,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoiCalculatorSection } from '../components/sections/RoiCalculatorSection';
import type { RoiCalculatorState } from '../types';

interface InvestmentPageProps {
  openModalWithOption: (option: string) => void;
  roiState: RoiCalculatorState;
  setRoiState: React.Dispatch<React.SetStateAction<RoiCalculatorState>>;
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

export const InvestmentPage: React.FC<InvestmentPageProps> = ({
  openModalWithOption,
  roiState,
  setRoiState
}) => {

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
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.08] font-['Plus_Jakarta_Sans',sans-serif]">
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
          4. YOUR INVESTMENT, MULTIPLE BENEFITS & STATION SHOWCASE
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

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
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
                <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>YOUR INVESTMENT, MULTIPLE BENEFITS</span>
              </div>

              <div className="space-y-4 sm:space-y-4.5">

                {/* Benefit 1 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15] stroke-[2.2]" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Shared investment</strong> – You invest only half the cost.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15] stroke-[2.2]" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Hassle-free maintenance</strong> – Evoltek takes care of setup, operations and station maintenance.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15] stroke-[2.2]" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Secure agreement</strong> – 10-year agreement with renewal option.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15] stroke-[2.2]" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-normal">
                    <strong className="font-bold text-slate-900">Transparency</strong> – Track your station's performance through the Evoltek mobile app.
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="flex items-center gap-3.5 sm:gap-4 group">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15] stroke-[2.2]" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-normal">
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
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* Left Card: 28% Return (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="inline-flex items-center gap-2 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-5">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  RETURNS AND AGREEMENT
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">

                  {/* Left Content with Large Circular Icon Badge */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Big Circular Chart Icon */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#e8f7ea] border border-[#32aa15]/20 flex items-center justify-center shrink-0 shadow-xs">
                      <TrendingBarChartIcon className="w-11 h-11 sm:w-13 sm:h-13 text-[#32aa15]" />
                    </div>

                    {/* Text Block */}
                    <div className="space-y-1">
                      <span className="text-xs sm:text-sm font-bold text-[#32aa15] block">
                        Option: Percentage Return
                      </span>

                      <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#32aa15] font-['Wix_Madefor_Display',sans-serif] tracking-tight leading-tight">
                        28% Return
                      </h3>

                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pt-1">
                        <li className="flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0" />
                          <span>10-year agreement</span>
                        </li>
                        <li className="flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0" />
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
          6. WHY INVEST IN EV CHARGING?
          ========================================================================= */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column Text (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>WHY INVEST IN EV CHARGING?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                A High-Growth Opportunity
                <br />
                for a <span className="text-[#32aa15]">Cleaner Future</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                The EV revolution is accelerating, and charging infrastructure is at the core of it. Investing with Evoltek means being part of a future-ready industry with long-term growth, stable returns and a positive impact on the environment.
              </p>
            </div>

            {/* Right Column: 4 Feature Cards (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              {/* Card 1 */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-[#32aa15]/25 bg-[#d1e7a7] p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#32aa15]/50 hover:shadow-md">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#f0f9e8] flex items-center justify-center">
                  <img
                    src="/icon_3d_scalable_network.png"
                    alt="High Growth Potential"
                    className="w-11 h-11 object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Wix_Madefor_Display',sans-serif]">High Growth Potential</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Rising EV adoption is driving demand for charging infrastructure.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-[#32aa15]/25 bg-[#d1e7a7] p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#32aa15]/50 hover:shadow-md">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#f0f9e8] flex items-center justify-center">
                  <img
                    src="/icon_3d_flexible_returns.jpg"
                    alt="Attractive Returns"
                    className="w-11 h-11 object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Wix_Madefor_Display',sans-serif]">Attractive Returns</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Earn 28% return on a 10-year agreement.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-[#32aa15]/25 bg-[#d1e7a7] p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#32aa15]/50 hover:shadow-md">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#f0f9e8] flex items-center justify-center">
                  <img
                    src="/icon_3d_val_sustainability.png"
                    alt="Future-Proof Investment"
                    className="w-11 h-11 object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Wix_Madefor_Display',sans-serif]">Future-Proof Investment</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Be part of a sustainable ecosystem shaping the future.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-[#32aa15]/25 bg-[#d1e7a7] p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#32aa15]/50 hover:shadow-md">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#f0f9e8] flex items-center justify-center">
                  <img
                    src="/icon_3d_val_partnership.png"
                    alt="Partner With Experts"
                    className="w-11 h-11 object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Wix_Madefor_Display',sans-serif]">Partner With Experts</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    End-to-end support from planning to operations and beyond.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          7. OUR INVESTMENT MODEL: "Shared Investment. Shared Success."
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-5xl mx-auto space-y-2.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>OUR INVESTMENT MODEL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              Shared Investment. Shared Success.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
              Evoltek and the investor contribute equally to set up a charging station, creating a profitable and sustainable business together.
            </p>
          </div>

          {/* 2 Column Layout: Dual-Pill Card + Partner Handshake Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* Left Dual-Pill Card (7 cols) */}
            <div className="lg:col-span-7 relative flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 relative items-stretch h-full">

                {/* Left Sub-card: EVOLTEK 50% */}
                <div className="bg-[#d1e7a7] rounded-3xl p-6 sm:p-7 sm:pr-14 lg:pr-16 flex flex-col justify-center border border-[#32aa15]/20 shadow-xs">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#32aa15] bg-white text-[#32aa15] flex items-center justify-center shrink-0 shadow-md">
                        <Handshake className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs uppercase font-extrabold text-[#32aa15] tracking-wider block leading-tight">
                          EVOLTEK
                        </span>
                        <h4 className="text-3xl sm:text-4xl font-black text-[#32aa15] leading-none mt-0.5">
                          50%
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-slate-800">
                      <li className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0 mt-0.5" />
                        <span className="min-w-0">Co-invests</span>
                      </li>
                      <li className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0 mt-0.5" />
                        <span className="min-w-0">Sets up and runs the station</span>
                      </li>
                      <li className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0 mt-0.5" />
                        <span className="min-w-0">Handles operations and maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Center Floating Handshake Badge (Desktop sm+) - Increased Size */}
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-[#32aa15] shadow-2xl items-center justify-center text-white border-4 border-white hover:scale-105 transition-transform duration-300">
                  <Handshake className="w-11 h-11 sm:w-13 sm:h-13 text-white stroke-[2.3]" />
                </div>

                {/* Right Sub-card: INVESTOR 50% */}
                <div className="bg-[#d1e7a7] rounded-3xl p-6 sm:p-7 sm:pl-14 lg:pl-16 flex flex-col justify-center border border-[#32aa15]/20 shadow-xs">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#32aa15] bg-white text-[#32aa15] flex items-center justify-center shrink-0 shadow-md">
                        <Users className="w-8 h-8 sm:w-9 sm:h-9 text-[#32aa15] stroke-[2.2]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs uppercase font-extrabold text-[#32aa15] tracking-wider block leading-tight">
                          INVESTOR
                        </span>
                        <h4 className="text-3xl sm:text-4xl font-black text-[#32aa15] leading-none mt-0.5">
                          50%
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-slate-800">
                      <li className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0 mt-0.5" />
                        <span className="min-w-0">Co-invests</span>
                      </li>
                      <li className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0 mt-0.5" />
                        <span className="min-w-0">Provides location and capital</span>
                      </li>
                      <li className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#32aa15] fill-[#32aa15] text-white shrink-0 mt-0.5" />
                        <span className="min-w-0">Earns attractive returns</span>
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
          8. ROI CALCULATOR ("Calculate Your ROI Potential")
          ========================================================================= */}
      <RoiCalculatorSection
        roiState={roiState}
        setRoiState={setRoiState}
        openModalWithOption={openModalWithOption}
      />


      {/* =========================================================================
          9. HOW TO GET STARTED ("Simple Steps to Your EV Charging Business")
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-5xl mx-auto space-y-2.5 mb-10 sm:mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>HOW TO GET STARTED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              Simple Steps to Your EV Charging Business
            </h2>
          </div>

          {/* 4 Process Steps connected with dotted lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-6 relative">
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

                  {/* Dotted arrow connecting each step on desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-[72px] left-[calc(50%+76px)] right-[calc(-50%+76px)] items-center pointer-events-none z-0">
                      <div className="w-full border-t-2 border-dashed border-[#15803d]" />
                      <ChevronRight className="w-4 h-4 text-[#15803d] shrink-0 -ml-1" />
                    </div>
                  )}

                  {/* Large icon circle with overlapping step number */}
                  <div className="relative z-10 mb-4">
                    <div className="w-36 h-36 rounded-full border border-emerald-400 bg-white flex items-center justify-center text-[#15803d] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-[#32aa15] stroke-[1.8]" />
                    </div>
                    <span className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-[#32aa15] text-white text-sm font-bold flex items-center justify-center shadow-sm">
                      {Number(step.num)}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-[#32aa15] text-lg sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-snug max-w-[240px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          10. BOTTOM CALL-TO-ACTION BANNER ("Ready to Invest in the Future of Mobility?")
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
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight font-['Wix_Madefor_Display',sans-serif] text-white leading-[1.15] sm:leading-[1.18]">
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

          </div>

        </div>
      </section>

    </div>
  );
};
