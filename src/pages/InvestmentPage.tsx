import React, { useState } from 'react';
import {
  TrendingUp,
  Coins,
  ShieldCheck,
  Users,
  CheckCircle2,
  ChevronRight,
  Home,
  Calculator,
  Smartphone,
  Wallet,
  Handshake,
  PieChart,
  MapPin,
  Wrench,
  Monitor,
  Headphones,
  Building2,
  Fuel,
  Truck,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvestmentPageProps {
  openModalWithOption: (option: string) => void;
}

export const InvestmentPage: React.FC<InvestmentPageProps> = ({ openModalWithOption }) => {
  // Interactive ROI Calculator State
  const [totalInvestment, setTotalInvestment] = useState<number>(5000000);
  const [utilizationRate, setUtilizationRate] = useState<number>(70);
  const [dailySessions, setDailySessions] = useState<number>(20);
  const [avgEnergySold, setAvgEnergySold] = useState<number>(25);
  const [chargePrice, setChargePrice] = useState<number>(18);
  const [monthlyOpex, setMonthlyOpex] = useState<number>(15000);
  const [electricityCost, setElectricityCost] = useState<number>(7);
  const [revenueSharePercent, setRevenueSharePercent] = useState<number>(50);

  // Dynamic calculations
  // Daily Energy Sold = dailySessions * avgEnergySold (e.g. 20 * 25 = 500 kWh/day)
  // Monthly Energy Sold = 500 * 30 = 15,000 kWh/month
  const monthlyEnergyKwh = dailySessions * avgEnergySold * 30;
  // Monthly Revenue = 15,000 * 18 = ₹ 2,70,000
  const calculatedMonthlyRevenue = Math.round(monthlyEnergyKwh * chargePrice);
  // Monthly Electricity Cost = 15,000 * 7 = ₹ 1,05,000
  const calculatedElectricityCost = Math.round(monthlyEnergyKwh * electricityCost);
  // Monthly Net Profit Before Tax = Revenue - Electricity - OPEX - Maintenance buffer
  // E.g. 2,70,000 - 1,05,000 - 15,000 - 25,000 (discom/platform/buffer) = 1,25,000
  const platformBuffer = 25000;
  const calculatedNetProfit = Math.max(0, calculatedMonthlyRevenue - calculatedElectricityCost - monthlyOpex - platformBuffer);
  // Your Share = Net Profit * (revenueSharePercent / 100) -> 1,25,000 * 0.5 = ₹ 62,500
  const calculatedYourShare = Math.round(calculatedNetProfit * (revenueSharePercent / 100));

  const formatCurrency = (val: number) => {
    return '₹ ' + val.toLocaleString('en-IN');
  };

  const scrollToRoi = () => {
    const el = document.getElementById('roi-calculator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =========================================================================
          1. HERO SECTION: "Invest Together. Grow Together."
          ========================================================================= */}
      <section className="relative w-full text-white overflow-hidden pt-14 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 lg:pb-36 bg-[#040906]">
        {/* Background EV Charging Station Scene at Twilight */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[position:78%_center] bg-no-repeat pointer-events-none brightness-105"
          style={{ backgroundImage: `url('/breadcrumb.png')` }}
        />
        {/* Left Directional Dark Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[54%] bg-gradient-to-r from-black/95 via-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-extrabold text-[#32aa15] uppercase tracking-[0.2em]">
              INVEST WITH EVOLTEK
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
              Invest Together.
              <br />
              <span className="text-[#32aa15]">Grow</span> Together.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Smart EV infrastructure. Strong partnerships.
              <br className="hidden sm:inline" />
              Sustainable returns for the future.
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
          2. "POWERING TOMORROW, PROFITABLY." (WHY INVEST IN EV CHARGING?)
          ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block">
                WHY INVEST IN EV CHARGING?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
                Powering Tomorrow,
                <br />
                <span className="text-slate-900">Profitably.</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md pt-1">
                The EV revolution is here, and charging infrastructure is at the core of it. Invest today and be part of a high-growth, future-ready industry.
              </p>
            </div>

            {/* Right Column: 4 Value Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">High Growth Potential</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Rising EV adoption is driving demand for charging infrastructure.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Attractive Returns</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Recurring revenue with high utilization and long-term profitability.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Future-Proof Investment</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  Be part of a sustainable ecosystem shaping the future.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#32aa15]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Partner With Experts</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  End-to-end support from planning to operations and beyond.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. "CHOOSE YOUR INVESTMENT MODEL" (MODEL A & MODEL B)
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-12 sm:py-16 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <p className="text-[#32aa15] text-xs font-extrabold uppercase tracking-[0.2em] mb-1.5">
              CHOOSE YOUR INVESTMENT MODEL
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Flexible Models. Shared Success.
            </h2>
          </div>

          {/* Two Model Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Model A: Turnkey Investment */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center mb-4">
                  {/* Image */}
                  <div className="md:col-span-5 rounded-2xl overflow-hidden h-44 sm:h-52 bg-slate-100 border border-slate-100 shadow-inner">
                    <img
                      src="/model_a_turnkey.jpg"
                      alt="Model A Turnkey Investment EV Hub"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-[#32aa15]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#16a34a] font-['Wix_Madefor_Display',sans-serif]">
                        Model A: Turnkey Investment
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                        <span>You invest 100% of the project cost.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                        <span>Evoltek delivers the complete turnkey solution.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                        <span>You own and operate the station.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                        <span>You earn 100% of the charging revenue.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                        <span>Optional: Software licensing &amp; AMC as per agreement.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openModalWithOption('Model A: Turnkey Investment')}
                  className="px-5 py-2.5 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Model B: 50/50 Partnership */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center mb-4">
                  {/* Image */}
                  <div className="md:col-span-5 rounded-2xl overflow-hidden h-44 sm:h-52 bg-slate-100 border border-slate-100 shadow-inner">
                    <img
                      src="/model_b_partnership.jpg"
                      alt="Model B 50/50 Partnership EV Hub"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Handshake className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#2563eb] font-['Wix_Madefor_Display',sans-serif]">
                        Model B: 50/50 Partnership
                      </h3>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>You invest 50% of the project cost.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Evoltek invests the remaining 50%.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Evoltek handles installation, software &amp; maintenance.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Revenue is shared as per agreed percentage.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>Long-term partnership for mutual growth.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openModalWithOption('Model B: 50/50 Partnership')}
                  className="px-5 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-blue-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>


          {/* =========================================================================
              4. REVENUE SHARING (HYBRID MODEL) BANNER
              ========================================================================= */}
          <div className="mt-8 bg-[#062c16] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Left Content */}
            <div className="flex items-start sm:items-center gap-4 max-w-xl">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <PieChart className="w-7 h-7 text-[#4ade80]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-['Wix_Madefor_Display',sans-serif]">
                  Revenue Sharing (Hybrid Model)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Charging revenue collected through the EVOLTEK platform is automatically settled at the end of every month as per the agreed revenue sharing ratio.
                </p>
              </div>
            </div>

            {/* Right Flowchart Steps */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 shrink-0 w-full lg:w-auto">
              
              {/* Step 1 */}
              <div className="text-center flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-1.5 shadow-sm">
                  <Smartphone className="w-5 h-5 text-[#4ade80]" />
                </div>
                <p className="text-xs font-bold text-white">User Charges</p>
                <p className="text-[10px] text-slate-300">via EVOLTEK App</p>
              </div>

              {/* Arrow */}
              <span className="text-slate-400 font-bold text-sm sm:text-base px-1">→</span>

              {/* Step 2 */}
              <div className="text-center flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-1.5 shadow-sm">
                  <Wallet className="w-5 h-5 text-[#4ade80]" />
                </div>
                <p className="text-xs font-bold text-white">Monthly Settlement</p>
                <p className="text-[10px] text-slate-300">Automatic Payout</p>
              </div>

              {/* Arrow */}
              <span className="text-slate-400 font-bold text-sm sm:text-base px-1">→</span>

              {/* Step 3 */}
              <div className="text-center flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-1.5 shadow-sm">
                  <Handshake className="w-5 h-5 text-[#4ade80]" />
                </div>
                <p className="text-xs font-bold text-white">Revenue Share</p>
                <p className="text-[10px] text-slate-300">As per Agreement</p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. "CALCULATE YOUR ROI POTENTIAL" (INTERACTIVE CALCULATOR)
          ========================================================================= */}
      <section id="roi-calculator-section" className="w-full bg-white py-14 sm:py-20 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 sm:mb-10">
            <p className="text-[#32aa15] text-xs font-extrabold uppercase tracking-[0.2em] mb-1.5">
              CALCULATE YOUR ROI POTENTIAL
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              See How Profitable Your Investment Can Be
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Column 1: Interactive Input Form (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Total Investment */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Total Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={totalInvestment}
                    onChange={(e) => setTotalInvestment(Number(e.target.value))}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Utilization Rate */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Utilization Rate (%)
                  </label>
                  <select
                    value={utilizationRate}
                    onChange={(e) => setUtilizationRate(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-white"
                  >
                    <option value={50}>50%</option>
                    <option value={60}>60%</option>
                    <option value={70}>70%</option>
                    <option value={80}>80%</option>
                    <option value={90}>90%</option>
                  </select>
                </div>

                {/* Daily Charging Sessions */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Daily Charging Sessions
                  </label>
                  <input
                    type="number"
                    value={dailySessions}
                    onChange={(e) => setDailySessions(Number(e.target.value))}
                    placeholder="e.g., 20"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Avg Energy Sold per Session */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Average Energy Sold per Session (kWh)
                  </label>
                  <input
                    type="number"
                    value={avgEnergySold}
                    onChange={(e) => setAvgEnergySold(Number(e.target.value))}
                    placeholder="e.g., 25"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Average Charge Price */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Average Charge Price (₹/kWh)
                  </label>
                  <input
                    type="number"
                    value={chargePrice}
                    onChange={(e) => setChargePrice(Number(e.target.value))}
                    placeholder="e.g., 18"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Operating Expenses */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Operating Expenses (Monthly) (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyOpex}
                    onChange={(e) => setMonthlyOpex(Number(e.target.value))}
                    placeholder="e.g., 15000"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Electricity Cost */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Electricity Cost (₹/kWh)
                  </label>
                  <input
                    type="number"
                    value={electricityCost}
                    onChange={(e) => setElectricityCost(Number(e.target.value))}
                    placeholder="e.g., 7"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Revenue Sharing */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Revenue Sharing (%)
                  </label>
                  <select
                    value={revenueSharePercent}
                    onChange={(e) => setRevenueSharePercent(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[#32aa15] text-slate-900 bg-white"
                  >
                    <option value={50}>50% (You)</option>
                    <option value={70}>70% (You)</option>
                    <option value={100}>100% (You)</option>
                  </select>
                </div>

              </div>

              {/* Calculate Button */}
              <div className="pt-5">
                <button
                  onClick={() => {
                    // Trigger recalculation notification or visual cue
                  }}
                  className="w-auto px-5 py-2.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <span>Calculate ROI</span>
                  <Calculator className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Column 2: Estimated Returns Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#f0faf4] rounded-2xl p-6 border border-[#d2ecda] flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-6 font-['Wix_Madefor_Display',sans-serif]">
                  Estimated Returns
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e1f3e7]">
                    <span className="text-xs text-slate-600">Monthly Revenue</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#15803d]">
                      {formatCurrency(calculatedMonthlyRevenue)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#e1f3e7]">
                    <span className="text-xs text-slate-600">Monthly Net Profit (Before Tax)</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#15803d]">
                      {formatCurrency(calculatedNetProfit)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3">
                    <span className="text-xs text-slate-600">Your Share (Monthly)</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#15803d]">
                      {formatCurrency(calculatedYourShare)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estimated ROI Payback Period Box */}
              <div className="mt-6 p-4 rounded-xl bg-[#dcfce7]/70 border border-[#bbf7d0] text-center">
                <p className="text-xs font-semibold text-slate-600">Estimated ROI</p>
                <p className="text-lg sm:text-xl font-black text-[#15803d] mt-0.5">
                  18 – 24 Months
                </p>
                <p className="text-[11px] text-slate-500">Payback Period</p>
              </div>
            </div>

            {/* Column 3: Photo with Floating Note Card (3 cols) */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-slate-200 min-h-[340px] shadow-sm">
              <img
                src="/roi_station_dusk.jpg"
                alt="Electric vehicle charging station at dusk"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Floating Note */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white text-[10px] leading-relaxed">
                <p className="font-bold text-slate-200 mb-0.5">Note:</p>
                <p className="text-slate-300">
                  This is an estimated projection. Actual returns may vary based on location, utilization, electricity cost, tariff changes and operating expenses.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. "HOW WE MAXIMIZE YOUR RETURNS" (5 PILLARS)
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-14 sm:py-20 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <p className="text-[#32aa15] text-xs font-extrabold uppercase tracking-[0.2em]">
              HOW WE MAXIMIZE YOUR RETURNS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#32aa15]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Prime Location Assessment</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                We help you choose high-traffic, high-demand locations.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5 text-[#32aa15]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Top-Tier Equipment &amp; Technology</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Reliable, efficient &amp; future-ready charging solutions.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Monitor className="w-5 h-5 text-[#32aa15]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Smart Software Platform</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Real-time monitoring, dynamic pricing &amp; seamless operations.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Headphones className="w-5 h-5 text-[#32aa15]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Operations &amp; Maintenance</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                24/7 support and preventive maintenance for uptime.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-[#32aa15]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Marketing &amp; Network Growth</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Stronger visibility through the EVOLTEK network &amp; app.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          7. "WHO CAN INVEST?" (5 STAKEHOLDERS)
          ========================================================================= */}
      <section className="w-full bg-white py-14 sm:py-20 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <p className="text-[#32aa15] text-xs font-extrabold uppercase tracking-[0.2em]">
              WHO CAN INVEST?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Stakeholder 1 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Landowners &amp; Developers</h3>
                <p className="text-slate-500 text-xs mt-1">Monetize your property</p>
              </div>
            </div>

            {/* Stakeholder 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Business Owners</h3>
                <p className="text-slate-500 text-[11px] font-medium">(Malls, Hotels, Offices)</p>
                <p className="text-slate-500 text-xs mt-1">Enhance customer experience &amp; footfall</p>
              </div>
            </div>

            {/* Stakeholder 3 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Fuel className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Highway &amp; Fuel Station Owners</h3>
                <p className="text-slate-500 text-xs mt-1">Drive additional revenue at high-traffic areas</p>
              </div>
            </div>

            {/* Stakeholder 4 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Truck className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Fleet Operators &amp; Companies</h3>
                <p className="text-slate-500 text-xs mt-1">Power your fleet with reliable charging</p>
              </div>
            </div>

            {/* Stakeholder 5 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#32aa15] flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5 text-[#32aa15]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Investors &amp; Entrepreneurs</h3>
                <p className="text-slate-500 text-xs mt-1">Build a profitable &amp; sustainable business</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          8. BOTTOM CALL-TO-ACTION BANNER: "READY TO INVEST IN THE FUTURE OF MOBILITY?"
          ========================================================================= */}
      <section className="w-full bg-white pb-16 sm:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#062c16] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Wix_Madefor_Display',sans-serif] leading-tight">
                Ready to Invest in the
                <br />
                <span className="text-[#4ade80]">Future of Mobility?</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Partner with EVOLTEK and build a profitable, sustainable EV charging business.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => openModalWithOption('Investment Partner Enquiry')}
                  className="px-6 py-3 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={scrollToRoi}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Calculate ROI Now</span>
                  <Calculator className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="w-full lg:w-[480px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/15 shadow-xl shrink-0">
              <img
                src="/breadcrumb.png"
                alt="Evoltek EV Charging Station Canopy with Electric SUV"
                className="w-full h-full object-cover object-[center_70%] hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
