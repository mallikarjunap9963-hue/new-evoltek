import React from 'react';
import {
  Zap,
  ShieldCheck,
  Leaf,
  Network,
  Home,
  ChevronRight,
  Info,
  Building2,
  ShoppingBag,
  Navigation,
  Truck,
  Bed,
  Clock,
  Gauge,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChargingStationsPageProps {
  openModalWithOption: (option: string) => void;
}

export const ChargingStationsPage: React.FC<ChargingStationsPageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =========================================================================
          1. HERO BANNER WITH OFFICIAL EVOLTEK DC FAST CHARGER & WHITE SUV
          ========================================================================= */}
      <section className="relative w-full text-white overflow-hidden pt-14 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-36 bg-[#040906]">
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
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
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

        {/* Bottom Smooth Curved Wave Mask */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full h-[45px] sm:h-[65px] lg:h-[85px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,35 C340,95 720,105 1100,45 C1260,18 1360,32 1440,45 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>


      {/* =========================================================================
          2. "POWER YOUR JOURNEY. YOUR WAY." + 4 FEATURE CARDS
          ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block">
                Our CHARGING Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
                Power Your Journey.
                <br />
                <span className="text-[#32aa15]">Your Way.</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md pt-1">
                We offer AC and DC charging solutions engineered for different needs. Choose the right level of charging for your home, business or public locations.
              </p>
            </div>

            {/* Right Column: 4 Feature Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Multiple Options</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  AC &amp; DC solutions for every requirement
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Safe &amp; Reliable</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Built with advanced safety and reliability
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Smart Technology</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Intelligent systems for seamless experience
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Sustainable Future</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Driving green mobility for a better tomorrow
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. "CHOOSE THE RIGHT CHARGING LEVEL" (TABLE & 3 LEVEL CARDS)
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-12 sm:py-16 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="mb-8 sm:mb-10">
            <p className="text-[#32aa15] text-xs font-extrabold uppercase tracking-[0.2em] mb-1.5">
              THE THREE LEVELS OF CHARGING SPEED
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Choose the Right <span className="text-[#32aa15]">Charging Level</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              EV charging is globally categorized into three distinct levels based on voltage, power output, and charging duration.
            </p>
          </div>

          {/* Grid Layout: Table (Left) + 3 Level Cards (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Comparison Table */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[580px]">
                    {/* Dark Green Header */}
                    <thead>
                      <tr className="bg-[#062c16] text-white">
                        <th className="py-3.5 px-4 font-bold text-[11px] sm:text-xs uppercase tracking-wider">Level</th>
                        <th className="py-3.5 px-4 font-bold text-[11px] sm:text-xs uppercase tracking-wider">Power Type</th>
                        <th className="py-3.5 px-4 font-bold text-[11px] sm:text-xs uppercase tracking-wider">Typical Power Output</th>
                        <th className="py-3.5 px-4 font-bold text-[11px] sm:text-xs uppercase tracking-wider">Charging Speed (Up to 80%)</th>
                        <th className="py-3.5 px-4 font-bold text-[11px] sm:text-xs uppercase tracking-wider">Best Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      
                      {/* Row 1 - Level 1 */}
                      <tr className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#32aa15] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                              1
                            </span>
                            <span className="font-bold text-slate-900">Level 1</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 leading-snug">
                          AC<br />
                          <span className="text-[11px] text-slate-500">(Alternating Current)</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">
                          1.4 kW to 1.9 kW
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">
                          20 to 50 hours
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600 leading-snug">
                          Standard home wall outlets (overnight)
                        </td>
                      </tr>

                      {/* Row 2 - Level 2 */}
                      <tr className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#32aa15] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                              2
                            </span>
                            <span className="font-bold text-slate-900">Level 2</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 leading-snug">
                          AC<br />
                          <span className="text-[11px] text-slate-500">(Alternating Current)</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">
                          3.7 kW to 22 kW
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">
                          4 to 8 hours
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600 leading-snug">
                          Homes, workplaces, hotels &amp; public parking
                        </td>
                      </tr>

                      {/* Row 3 - Level 3 */}
                      <tr className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#32aa15] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                              3
                            </span>
                            <span className="font-bold text-slate-900">Level 3</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 leading-snug">
                          DC Fast Charging<br />
                          <span className="text-[11px] text-slate-500">(Direct Current)</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">
                          50 kW to 350+ kW
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">
                          20 to 60 minutes
                        </td>
                        <td className="py-4 px-4 text-xs text-slate-600 leading-snug">
                          Highway stops, commercial hubs &amp; fleet depots
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>

              {/* Disclaimer Notice Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center gap-2.5 text-xs text-slate-700">
                <Info className="w-4 h-4 text-[#32aa15] shrink-0" />
                <span>
                  Charging time depends on the vehicle, battery capacity, charger output and operating conditions.
                </span>
              </div>
            </div>

            {/* Right Column: 3 Level Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Level 1 Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                <div className="space-y-1.5 pr-2">
                  <h4 className="text-[#32aa15] font-extrabold text-xs sm:text-sm tracking-wide uppercase">
                    LEVEL 1 - AC CHARGING
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Perfect for overnight home charging using a standard wall outlet.
                  </p>
                </div>
                <div className="w-28 sm:w-36 h-24 sm:h-26 shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-inner">
                  <img
                    src="/level1_ac_wall_socket.jpg"
                    alt="Level 1 AC Wall Socket Charging"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Level 2 Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                <div className="space-y-1.5 pr-2">
                  <h4 className="text-[#32aa15] font-extrabold text-xs sm:text-sm tracking-wide uppercase">
                    LEVEL 2 - AC CHARGING
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Ideal for faster charging at homes, workplaces, and public locations.
                  </p>
                </div>
                <div className="w-28 sm:w-36 h-24 sm:h-26 shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-inner">
                  <img
                    src="/level2_ac_wallbox.jpg"
                    alt="Level 2 AC Wallbox EV Charger"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Level 3 Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex items-center justify-between gap-4">
                <div className="space-y-1.5 pr-2">
                  <h4 className="text-[#32aa15] font-extrabold text-xs sm:text-sm tracking-wide uppercase">
                    LEVEL 3 - DC FAST CHARGING
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    High-speed charging for quick top-ups on the go. Built for highways and commercial hubs.
                  </p>
                </div>
                <div className="w-28 sm:w-36 h-24 sm:h-26 shrink-0 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-inner">
                  <img
                    src="/level3_dc_fast_charger.jpg"
                    alt="Level 3 DC Fast Charging Station"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. "UNDERSTANDING THE DIFFERENCE" (AC CHARGING VS DC FAST CHARGING)
          ========================================================================= */}
      <section className="w-full bg-white py-14 sm:py-20 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-block border-b-2 border-[#32aa15] pb-0.5 mb-2">
              <span className="text-[#32aa15] font-bold text-xs uppercase tracking-wider">
                AC CHARGING VS. DC FAST CHARGING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Understanding the Difference
            </h2>
          </div>

          {/* Side-by-Side Comparison Container */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Card: AC Charging (Levels 1 & 2) */}
            <div className="bg-[#f0faf4] rounded-3xl p-6 sm:p-8 border border-[#d2ecda] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                {/* Circular AC Badge */}
                <div className="w-14 h-14 rounded-full bg-[#32aa15] text-white flex items-center justify-center font-black text-lg shadow-sm mb-4">
                  AC
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">
                  AC Charging (Levels 1 &amp; 2)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                  Power flows from the grid into the vehicle as Alternating Current (AC). The car's on-board charger converts it into DC before feeding it to the battery.
                </p>
              </div>

              {/* 3 AC Features */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-[#d8eee0]">
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#32aa15] flex items-center justify-center shadow-xs mb-2">
                    <Zap className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight">
                    Uses vehicle's on-board charger
                  </p>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#32aa15] flex items-center justify-center shadow-xs mb-2">
                    <Clock className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight">
                    Slower charging speed
                  </p>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#32aa15] flex items-center justify-center shadow-xs mb-2">
                    <Home className="w-5 h-5 text-[#32aa15]" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight">
                    Ideal for homes &amp; workplaces
                  </p>
                </div>
              </div>
            </div>

            {/* Central Floating "VS" Badge */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl border border-slate-200 items-center justify-center font-black text-base text-[#32aa15] z-10 pointer-events-none">
              VS
            </div>

            {/* Mobile "VS" separator */}
            <div className="flex lg:hidden justify-center -my-3 z-10">
              <span className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center font-bold text-xs text-[#32aa15]">
                VS
              </span>
            </div>

            {/* Right Card: DC Fast Charging (Level 3) */}
            <div className="bg-[#eff6ff] rounded-3xl p-6 sm:p-8 border border-[#bfdbfe] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                {/* Circular DC Badge */}
                <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-black text-lg shadow-sm mb-4">
                  DC
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-['Wix_Madefor_Display',sans-serif]">
                  DC Fast Charging (Level 3)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                  The converter is built inside the charging station. It converts AC to DC externally and delivers power directly to the battery, drastically reducing charging time.
                </p>
              </div>

              {/* 3 DC Features */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-[#dbeafe]">
                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xs mb-2">
                    <Cpu className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight">
                    Built-in high power converter
                  </p>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xs mb-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight">
                    Faster charging speed
                  </p>
                </div>

                <div className="text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xs mb-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 leading-tight">
                    Ideal for highways &amp; commercial hubs
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. "SOLUTIONS FOR EVERY NEED, EVERYWHERE" (PERFECT FOR EVERY USE CASE)
          ========================================================================= */}
      <section className="w-full bg-white pb-16 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Deep Forest Green Rounded Container */}
          <div className="bg-[#062c16] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Subtle background ambient glow */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#32aa15]/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Tagline */}
            <div className="inline-block border-b-2 border-[#4ade80] pb-0.5 mb-3">
              <span className="text-[#4ade80] font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em]">
                PERFECT FOR EVERY USE CASE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Wix_Madefor_Display',sans-serif] mb-8 sm:mb-10">
              Solutions for Every Need, <span className="text-[#4ade80]">Everywhere</span>
            </h2>

            {/* 6 White Use Case Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative z-10">
              
              {/* Card 1: Homes */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[190px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mx-auto mb-3">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Homes</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Convenient charging for your everyday journeys.
                  </p>
                </div>
              </div>

              {/* Card 2: Workplaces */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[190px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Workplaces</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Empower employees with reliable charging at work.
                  </p>
                </div>
              </div>

              {/* Card 3: Malls & Retail */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[190px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Malls &amp; Retail</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Attract more visitors and enhance customer experience.
                  </p>
                </div>
              </div>

              {/* Card 4: Highways */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[190px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mx-auto mb-3">
                  <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Highways</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Fast charging on the go for long-distance travelers.
                  </p>
                </div>
              </div>

              {/* Card 5: Fleets */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[190px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Fleets</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Reliable charging solutions for electric fleets.
                  </p>
                </div>
              </div>

              {/* Card 6: Hotels & Hospitality */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 text-center text-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[190px]">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mx-auto mb-3">
                  <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-[#32aa15]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Hotels &amp; Hospitality</h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Offer premium charging for your guests.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Feasibility CTA button */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-xs sm:text-sm text-slate-300">
                Ready to deploy customized charging solutions for your property?
              </span>
              <button
                onClick={() => openModalWithOption('Charging Station Enquiry')}
                className="px-6 py-2.5 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Solution Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
