import React from 'react';
import {
  Zap,
  Home,
  ChevronRight,
  Navigation,
  Building2,
  Layers,
  Fuel
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvestCtaBanner } from '../components/common/InvestCtaBanner';

interface ChargingStationsPageProps {
  openModalWithOption: (option: string) => void;
}

export const ChargingStationsPage: React.FC<ChargingStationsPageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =========================================================================
          1. HERO BANNER WITH OFFICIAL EVOLTEK DC FAST CHARGER & WHITE SUV
          ========================================================================= */}
      <section className="relative w-full text-white overflow-hidden pt-12 sm:pt-16 lg:pt-18 pb-10 sm:pb-12 lg:pb-14 bg-[#040906]">
        {/* Background EV Charging Station Scene */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[position:78%_center] bg-no-repeat pointer-events-none brightness-105"
          style={{ backgroundImage: `url('/breadcrumb.png')` }}
        />
        {/* Directional gradient on left for ultra-crisp typography contrast while keeping the car & charger clear */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[54%] bg-gradient-to-r from-black/95 via-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-extrabold text-[#32aa15] uppercase tracking-[0.2em]">
              OUR SOLUTIONS
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.08] font-['Plus_Jakarta_Sans',sans-serif]">
              The Right Charging
              <br />
              Solution for
              <br />
              <span className="text-[#32aa15]">Every Journey</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              From home charging to highway fast charging, Evoltek offers the right solution for every need, every location, and every driver.
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
                <span className="text-[#32aa15] font-semibold">Charging Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================================
          2. HIGHWAY & CITY CHARGING STATIONS SHOWCASE (HALF CONTENT, HALF IMAGE)
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* 1. Highway Charging Station Card */}
            <div
              id="highway-stations"
              className="bg-white rounded-[28px] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#32aa15]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Upper Section: Half Content, Half Bleed Image with Soft Gradient Fade */}
              <div className="relative min-h-[300px] sm:min-h-[330px] flex items-center overflow-hidden">
                {/* Right side bleed image */}
                <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[58%] h-full">
                  <img
                    src="/highway charger.png"
                    alt="Highway Charging Station"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Seamless fade gradient overlay from white into image */}
                  <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
                </div>

                {/* Left side content */}
                <div className="relative z-10 w-full sm:w-[55%] p-6 sm:p-8 space-y-3 bg-gradient-to-r from-white via-white sm:via-white/95 to-transparent">
                  <span className="text-[#32aa15] font-extrabold text-[11px] sm:text-xs tracking-wider uppercase block">
                    HIGHWAY CHARGING STATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Wix_Madefor_Display',sans-serif]">
                    Built for <br />
                    <span className="text-[#32aa15]">Longer Journeys</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
                    Strategically located on highways, our charging stations provide high-speed charging along with traveller-friendly amenities, making long journeys comfortable and convenient.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => openModalWithOption('Highway Charging Station')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-[#32aa15]/30 transition-all cursor-pointer"
                    >
                      <span>View Highway Stations</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Lower Specs Strip */}
              <div className="border-t border-slate-100 p-5 sm:p-6 bg-white grid grid-cols-1 sm:grid-cols-[1.1fr_1.4fr_1.1fr] gap-3 sm:gap-4 relative z-10 items-start">
                {/* Spec 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-[#32aa15]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4.5 h-4.5 text-[#32aa15]" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-[#32aa15] font-extrabold uppercase tracking-wide block whitespace-nowrap">
                      Space Required
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight block mt-0.5">
                      Minimum 1 Acre
                    </span>
                  </div>
                </div>

                {/* Spec 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-[#32aa15]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4.5 h-4.5 text-[#32aa15]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-[#32aa15] font-bold uppercase tracking-wider block">
                      Power Options
                    </span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-slate-800 leading-snug block mt-0.5">
                      60 kW, 120 kW, 240 kW,<br className="hidden sm:inline" /> 360 kW &amp; 480 kW
                    </span>
                  </div>
                </div>

                {/* Spec 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-[#32aa15]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Fuel className="w-4.5 h-4.5 text-[#32aa15]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-[#32aa15] font-bold uppercase tracking-wider block">
                      Charger Type
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight block mt-0.5 whitespace-nowrap">
                      DC Fast Charging
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* 2. City Charging Station Card */}
            <div
              id="city-stations"
              className="bg-white rounded-[28px] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#32aa15]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Upper Section: Half Content, Half Bleed Image with Soft Gradient Fade */}
              <div className="relative min-h-[300px] sm:min-h-[330px] flex items-center overflow-hidden">
                {/* Right side bleed image */}
                <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[58%] h-full">
                  <img
                    src="/city chareger.png"
                    alt="City Charging Station"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Seamless fade gradient overlay from white into image */}
                  <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
                </div>

                {/* Left side content */}
                <div className="relative z-10 w-full sm:w-[52%] p-6 sm:p-8 space-y-3 bg-gradient-to-r from-white via-white sm:via-white/95 to-transparent">
                  <span className="text-[#32aa15] font-extrabold text-[11px] sm:text-xs tracking-wider uppercase block">
                    CITY CHARGING STATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Wix_Madefor_Display',sans-serif]">
                    Convenient <br />
                    <span className="text-[#32aa15]">Charging in the City</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
                    Located in prime city areas such as malls, offices, residential complexes and public places, our city charging stations provide reliable and fast charging for daily commuters.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => openModalWithOption('City Charging Station')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-[#32aa15]/30 transition-all cursor-pointer"
                    >
                      <span>View City Stations</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Lower Specs Strip */}
              <div className="border-t border-slate-100 p-5 sm:p-6 bg-white grid grid-cols-1 sm:grid-cols-[1.1fr_1.4fr_1.1fr] gap-3 sm:gap-4 relative z-10 items-start">
                {/* Spec 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-[#32aa15]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4.5 h-4.5 text-[#32aa15]" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-[#32aa15] font-extrabold uppercase tracking-wide block whitespace-nowrap">
                      Space Required
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight block mt-0.5">
                      Minimum 2000 Sq. Ft.
                    </span>
                  </div>
                </div>

                {/* Spec 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-[#32aa15]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4.5 h-4.5 text-[#32aa15]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-[#32aa15] font-bold uppercase tracking-wider block">
                      Power Options
                    </span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-slate-800 leading-snug block mt-0.5">
                      60 kW, 120 kW, 240 kW,<br className="hidden sm:inline" /> 360 kW &amp; 480 kW
                    </span>
                  </div>
                </div>

                {/* Spec 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-[#32aa15]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Fuel className="w-4.5 h-4.5 text-[#32aa15]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-[#32aa15] font-bold uppercase tracking-wider block">
                      Charger Type
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight block mt-0.5 whitespace-nowrap">
                      DC Fast Charging
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          4. OUR CHARGING EQUIPMENT - "A Range of Charging Solutions" (5 CHARGERS)
          ========================================================================= */}
      <section className="w-full bg-white py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-5xl mx-auto space-y-2.5 mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
              <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>OUR CHARGING EQUIPMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              A Range of Charging Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto pt-1 leading-relaxed">
              From 60 kW to 480 kW, Evoltek offers high-performance DC fast chargers to meet different charging needs.
            </p>
          </div>

          {/* 5 Charger Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">

            {/* Charger 1: 60 kW */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#32aa15] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div>
                <div className="w-full h-44 sm:h-52 flex items-center justify-center p-2 mb-3 bg-slate-50/60 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/charging%20station%20(1).png"
                    alt="60 kW DC Charger"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#32aa15] transition-colors font-['Wix_Madefor_Display',sans-serif] text-center mb-1">
                  60 kW DC Charger
                </h3>
              </div>
              <div className="mt-1 space-y-2 pt-1 border-t border-slate-100 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">60 kW</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Fuel className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">Dual Connectors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Building2 className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">Ideal for City Locations</span>
                </div>
              </div>
            </div>

            {/* Charger 2: 120 kW */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#32aa15] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div>
                <div className="w-full h-44 sm:h-52 flex items-center justify-center p-2 mb-3 bg-slate-50/60 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/charging%20station%20(1).png"
                    alt="120 kW DC Charger"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#32aa15] transition-colors font-['Wix_Madefor_Display',sans-serif] text-center mb-1">
                  120 kW DC Charger
                </h3>
              </div>
              <div className="mt-1 space-y-2 pt-1 border-t border-slate-100 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">120 kW</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Fuel className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">Dual Connectors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">For City &amp; Highway</span>
                </div>
              </div>
            </div>

            {/* Charger 3: 240 kW */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#32aa15] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div>
                <div className="w-full h-44 sm:h-52 flex items-center justify-center p-2 mb-3 bg-slate-50/60 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/charging%20station%20(1).png"
                    alt="240 kW DC Charger"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#32aa15] transition-colors font-['Wix_Madefor_Display',sans-serif] text-center mb-1">
                  240 kW DC Charger
                </h3>
              </div>
              <div className="mt-1 space-y-2 pt-1 border-t border-slate-100 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">240 kW</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Fuel className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">Dual Connectors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">For Highway Stations</span>
                </div>
              </div>
            </div>

            {/* Charger 4: 360 kW */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#32aa15] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div>
                <div className="w-full h-44 sm:h-52 flex items-center justify-center p-2 mb-3 bg-slate-50/60 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/charging%20station%20(1).png"
                    alt="360 kW DC Charger"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#32aa15] transition-colors font-['Wix_Madefor_Display',sans-serif] text-center mb-1">
                  360 kW DC Charger
                </h3>
              </div>
              <div className="mt-1 space-y-2 pt-1 border-t border-slate-100 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">360 kW</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Fuel className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">Multiple Connectors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">For Highway Hubs</span>
                </div>
              </div>
            </div>

            {/* Charger 5: 480 kW */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#32aa15] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              <div>
                <div className="w-full h-44 sm:h-52 flex items-center justify-center p-2 mb-3 bg-slate-50/60 rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/charging%20station%20(1).png"
                    alt="480 kW DC Charger"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#32aa15] transition-colors font-['Wix_Madefor_Display',sans-serif] text-center mb-1">
                  480 kW DC Charger
                </h3>
              </div>
              <div className="mt-1 space-y-2 pt-1 border-t border-slate-100 text-[11px] sm:text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Zap className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">480 kW</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Fuel className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">Multiple Connectors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#32aa15] shrink-0" />
                  <span className="font-medium">For Future-Ready Highway Stations</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. EV HUBS - "More Than Just Charging" (INCREASED SIZE & 5 AMENITIES)
          ========================================================================= */}
      <section className="w-full bg-white pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-18 lg:pb-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-2.5">
                <span className="text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] block">
                  EV HUBS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                  More Than <br />
                  <span className="text-[#32aa15]">Just Charging</span>
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our highway stations can grow into full EV hubs, giving travellers a place to relax, work and recharge while their vehicle charges. These amenities also create additional revenue opportunities for our partners.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openModalWithOption('EV Hub Partnership')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-[#32aa15]/30 transition-all cursor-pointer"
                >
                  <span>Explore EV Hubs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Amenities & Photos Column */}
            <div className="lg:col-span-8 space-y-5">

              {/* 5 Amenity Badges with 3D Glossy Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3.5">
                {/* Amenity 1 */}
                <div className="bg-[#d1e7a7] border border-[#32aa15]/15 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center gap-2.5 hover:bg-[#e4f5e6] hover:border-[#32aa15]/40 hover:-translate-y-1 transition-all shadow-2xs group cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/icon_3d_restaurant_trans.png"
                      alt="Cafeteria & Restaurants"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Cafeteria &amp; Restaurants
                  </span>
                </div>

                {/* Amenity 2 */}
                <div className="bg-[#d1e7a7] border border-[#32aa15]/15 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center gap-2.5 hover:bg-[#e4f5e6] hover:border-[#32aa15]/40 hover:-translate-y-1 transition-all shadow-2xs group cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/icon_3d_wifi_trans.png"
                      alt="Wi-Fi Connectivity"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Wi-Fi Connectivity
                  </span>
                </div>

                {/* Amenity 3 */}
                <div className="bg-[#d1e7a7] border border-[#32aa15]/15 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center gap-2.5 hover:bg-[#e4f5e6] hover:border-[#32aa15]/40 hover:-translate-y-1 transition-all shadow-2xs group cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/icon_3d_park_trans.png"
                      alt="Parks & Relaxation Areas"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Parks &amp; Relaxation Areas
                  </span>
                </div>

                {/* Amenity 4 */}
                <div className="bg-[#d1e7a7] border border-[#32aa15]/15 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center gap-2.5 hover:bg-[#e4f5e6] hover:border-[#32aa15]/40 hover:-translate-y-1 transition-all shadow-2xs group cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/icon_3d_bed_trans.png"
                      alt="Rooms & Rest Facilities"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Rooms &amp; Rest Facilities
                  </span>
                </div>

                {/* Amenity 5 */}
                <div className="bg-[#d1e7a7] border border-[#32aa15]/15 rounded-2xl p-3.5 sm:p-4 text-center flex flex-col items-center justify-center gap-2.5 hover:bg-[#e4f5e6] hover:border-[#32aa15]/40 hover:-translate-y-1 transition-all shadow-2xs group cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src="/icon_3d_lounge_trans.png"
                      alt="Comfortable Lounges"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                    Comfortable Lounges
                  </span>
                </div>
              </div>

              {/* 3 Facility Photos (Increased Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md group">
                  <img
                    src="/hub_amenity_cafe.jpg"
                    alt="Cafeteria & Restaurant"
                    className="w-full h-44 sm:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md group">
                  <img
                    src="/hub_amenity_park.jpg"
                    alt="Parks & Relaxation Areas"
                    className="w-full h-44 sm:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md group">
                  <img
                    src="/hub_amenity_lounge.jpg"
                    alt="Comfortable Lounges"
                    className="w-full h-44 sm:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <InvestCtaBanner openModalWithOption={openModalWithOption} className="py-4 sm:py-6" />

    </div>
  );
};
