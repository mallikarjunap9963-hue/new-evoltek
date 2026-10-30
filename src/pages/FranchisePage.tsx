import React from 'react';
import {
  Store,
  MapPin,
  CheckCircle2,
  ChevronRight,
  FileText,
  Users,
  Monitor,
  TrendingUp,
  Settings,
  ShieldCheck,
  Fuel,
  Home,
  Bed,
  Gamepad2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvestCtaBanner } from '../components/common/InvestCtaBanner';

interface FranchisePageProps {
  openModalWithOption: (option: string) => void;
}

export const FranchisePage: React.FC<FranchisePageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =========================================================================
          1. HERO SECTION: "Build Your Future. Power the Change." (AboutPage Cinematic Style)
          ========================================================================= */}
      <section className="relative w-full text-white overflow-hidden pt-14 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32 bg-[#040906]">
        {/* Background EV Charging Station with Official EVOLTEK DC Fast Charger */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[position:78%_center] bg-no-repeat pointer-events-none brightness-105"
          style={{ backgroundImage: `url('/breadcrumb.png')` }}
        />
        {/* Directional gradient restricted to the left for text contrast, keeping the charger and car bright and vibrant */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[54%] bg-gradient-to-r from-black/95 via-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl space-y-4 sm:space-y-5">

            {/* Tagline / Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest uppercase text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#32aa15]" />
              <span>EVOLTEK FRANCHISE MODEL</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.08] font-['Plus_Jakarta_Sans',sans-serif]">
              Build Your Future.
              <br />
              <span className="text-[#32aa15]">Power the Change.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Join the EV revolution with EVOLTEK and own a profitable, future-ready EV charging business with our proven franchise model.
            </p>

            {/* Breadcrumb Glass Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs shadow-lg text-white">
                <Link
                  to="/"
                  className="flex items-center gap-1.5 hover:text-[#32aa15] transition-colors font-medium"
                >
                  <Home className="w-3.5 h-3.5 text-white" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#32aa15] font-semibold">Franchise Model</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          2. WHY CHOOSE EVOLTEK FRANCHISE?
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

            {/* Left Column Text (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block">
                Why Choose Evoltek Franchise?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                A Profitable Opportunity.
                <br />
                A <span className="text-[#32aa15]">Greener Tomorrow.</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                Be a part of a trusted EV charging network and build a long-term, sustainable business with the support of EVOLTEK. Our franchise model is designed for individuals, businesses and landowners who want to invest in the future of mobility.
              </p>
            </div>

            {/* Right Column: 4 Cards Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">

              {/* Card 1: High Demand */}
              <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex flex-col items-center text-center group hover:shadow-md hover:border-[#32aa15]/30 transition-all duration-300">
                <div className="w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_high_demand.png"
                    alt="High Demand"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">High Demand</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                  Rising EV adoption creating strong growth potential.
                </p>
              </div>

              {/* Card 2: Attractive Returns */}
              <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex flex-col items-center text-center group hover:shadow-md hover:border-[#32aa15]/30 transition-all duration-300">
                <div className="w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_flexible_returns.png"
                    alt="Attractive Returns"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">Attractive Returns</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                  Profitable business model with long-term revenue.
                </p>
              </div>

              {/* Card 3: Trusted Brand */}
              <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex flex-col items-center text-center group hover:shadow-md hover:border-[#32aa15]/30 transition-all duration-300">
                <div className="w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_trusted_brand.png"
                    alt="Trusted Brand"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">Trusted Brand</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                  Be part of a reliable and innovative EV ecosystem.
                </p>
              </div>

              {/* Card 4: Complete Support */}
              <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex flex-col items-center text-center group hover:shadow-md hover:border-[#32aa15]/30 transition-all duration-300">
                <div className="w-18 h-18 sm:w-20 sm:h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/icon_3d_complete_support.png"
                    alt="Complete Support"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">Complete Support</h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                  End-to-end support from site selection to operations.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. OUR FRANCHISE MODELS: "Choose the Right Model for Your Goals"
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-8 sm:py-12 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6 sm:mb-8">
            <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-1">
              OUR FRANCHISE MODELS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              Choose the Right Model for Your Goals
            </h2>
          </div>

          {/* 2 Big Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

            {/* Model 1: City Franchise (Separate Image & Separate Content) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">

              {/* Separate Image Card (5 cols) */}
              <div className="sm:col-span-5 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group min-h-[220px] sm:min-h-full bg-white">
                <img
                  src="/city chareger.png"
                  alt="City Franchise EV Charging Canopy Station"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Separate Content Card (7 cols) */}
              <div className="sm:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f7ea] text-[#15803d] flex items-center justify-center shrink-0">
                      <Store className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif] leading-tight">
                        City Franchise
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Ideal for malls, offices, residential complexes and public locations.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Space Required:</strong> Minimum 2,000 Sq. Ft.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Charging Capacity:</strong> 60 kW – 480 kW</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Charger Type:</strong> DC Fast Charging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Suitable For:</strong> City areas &amp; high footfall locations</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openModalWithOption('City Franchise Model')}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl border border-[#32aa15] text-[#32aa15] text-xs font-bold hover:bg-[#32aa15] hover:text-white transition-all cursor-pointer shadow-2xs group/btn"
                  >
                    <span>Know More</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>

            </div>

            {/* Model 2: Highway Franchise (Separate Image & Separate Content) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">

              {/* Separate Image Card (5 cols) */}
              <div className="sm:col-span-5 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm relative group min-h-[220px] sm:min-h-full bg-white">
                <img
                  src="/highway charger.png"
                  alt="Highway Franchise EV Charging Station"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Separate Content Card (7 cols) */}
              <div className="sm:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f7ea] text-[#15803d] flex items-center justify-center shrink-0">
                      <Fuel className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif] leading-tight">
                        Highway Franchise
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Perfect for highways, travel hubs and large commercial locations.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Space Required:</strong> Minimum 1 Acre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Charging Capacity:</strong> 60 kW – 480 kW</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Charger Type:</strong> DC Fast Charging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] fill-[#15803d] text-white shrink-0 mt-0.5" />
                      <span><strong>Suitable For:</strong> Highways &amp; long-distance travel hubs</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openModalWithOption('Highway Franchise Model')}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl border border-[#32aa15] text-[#32aa15] text-xs font-bold hover:bg-[#32aa15] hover:text-white transition-all cursor-pointer shadow-2xs group/btn"
                  >
                    <span>Know More</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. WHAT YOU GET AS AN EVOLTEK FRANCHISE PARTNER
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              What You Get as an Evoltek Franchise Partner
            </h2>
          </div>

          {/* 8 Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
            {[
              { title: 'Site Selection Support', iconSrc: '/icon_3d_trust_solutions.png' },
              { title: 'Design & Civil Guidance', iconSrc: '/icon_3d_trust_quality.png' },
              { title: 'EV Charging Equipment', iconSrc: '/icon_3d_charging.png' },
              { title: 'Installation & Commissioning', iconSrc: '/icon_3d_hassle_free.jpg' },
              { title: 'Software & Backend Access', iconSrc: '/icon_3d_digital_transparency.jpg' },
              { title: 'Marketing & Brand Support', iconSrc: '/icon_3d_trust_future.png' },
              { title: 'Operations Training', iconSrc: '/icon_3d_val_customer_focus.png' },
              { title: 'Ongoing Maintenance Support', iconSrc: '/icon_3d_trust_support.png' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f9fbf9] rounded-2xl p-3 sm:p-3.5 border border-slate-100/90 shadow-2xs flex flex-col items-center text-center group hover:border-[#32aa15]/40 hover:shadow-md hover:bg-white transition-all duration-300"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={item.iconSrc}
                    alt={item.title}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <h4 className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. MORE THAN JUST CHARGING: "Create a Charging Hub. Create More Opportunities."
          ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-12 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Large Light Card Container */}
          <div className="rounded-3xl bg-[#f8fbf8] p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm text-slate-900 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-3.5">
                <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block">
                  MORE THAN JUST CHARGING
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                  Create a Charging Hub.
                  <br />
                  Create More Opportunities.
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                  Highway stations can be developed into full EV hubs with cafeteria, restaurant, gaming area, rest rooms and more — giving travellers a place to relax while their vehicle charges and helping you generate additional revenue.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openModalWithOption('Explore EV Hubs')}
                    className="px-6 py-3 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore EV Hubs</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: 4 Amenity Photo Tiles (7 cols in 2x2 Grid) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                {/* Tile 1: Cafeteria & Restaurants */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] group border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_cafe.jpg"
                    alt="Cafeteria & Restaurants"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-3.5 py-1.5 sm:py-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-2 sm:gap-2.5 shadow-lg group-hover:bg-black/85 transition-all">
                    <Store className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ade80] stroke-[2.2]" />
                    <span className="text-[#4ade80] font-bold text-xs sm:text-sm tracking-wide">
                      Cafeteria &amp; Restaurants
                    </span>
                  </div>
                </div>

                {/* Tile 2: Wi-Fi & Workspaces */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] group border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_workspace.jpg"
                    alt="Wi-Fi & Workspaces"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-3.5 py-1.5 sm:py-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-2 sm:gap-2.5 shadow-lg group-hover:bg-black/85 transition-all">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ade80] stroke-[2.2]" />
                    <span className="text-[#4ade80] font-bold text-xs sm:text-sm tracking-wide">
                      Wi-Fi &amp; Workspaces
                    </span>
                  </div>
                </div>

                {/* Tile 3: Rooms & Rest Facilities */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] group border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_rest_room.jpg"
                    alt="Rooms & Rest Facilities"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-3.5 py-1.5 sm:py-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-2 sm:gap-2.5 shadow-lg group-hover:bg-black/85 transition-all">
                    <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ade80] stroke-[2.2]" />
                    <span className="text-[#4ade80] font-bold text-xs sm:text-sm tracking-wide">
                      Rooms &amp; Rest Facilities
                    </span>
                  </div>
                </div>

                {/* Tile 4: Gaming Area & Playzone */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] group border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_gaming.jpg"
                    alt="Gaming Area & Playzone"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 px-3.5 py-1.5 sm:py-2 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-2 sm:gap-2.5 shadow-lg group-hover:bg-black/85 transition-all">
                    <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ade80] stroke-[2.2]" />
                    <span className="text-[#4ade80] font-bold text-xs sm:text-sm tracking-wide">
                      Gaming Area &amp; Playzone
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. OUR FRANCHISE PROCESS
          ========================================================================= */}
      <section className="w-full bg-[#fbfdfa] py-8 sm:py-12 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              Our Franchise Process
            </h2>
          </div>

          {/* 6 Step Cards Grid with Connecting Dotted Line */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 relative">
            {[
              { num: '01', title: 'Apply', desc: 'Submit your franchise application.', icon: FileText },
              { num: '02', title: 'Discussion', desc: 'Our team will connect with you.', icon: Users },
              { num: '03', title: 'Site Evaluation', desc: 'We evaluate and finalize the site.', icon: MapPin },
              { num: '04', title: 'Agreement', desc: 'Sign the agreement (10 years).', icon: ShieldCheck },
              { num: '05', title: 'Setup & Installation', desc: 'We setup, install and test the chargers.', icon: Settings },
              { num: '06', title: 'Go Live & Earn', desc: 'Start operations and earn from day one.', icon: TrendingUp }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex flex-col items-center text-center group relative">

                  {/* Connecting Dotted Line to next step on Desktop (steps 1 to 5) */}
                  {idx < 5 && (
                    <div className="hidden lg:flex absolute top-[16px] left-[calc(50%+40px)] right-[calc(-50%+40px)] items-center pointer-events-none z-0 px-1">
                      <div className="w-full border-t-[2.5px] border-dotted border-[#32aa15]/60" />
                    </div>
                  )}

                  {/* Icon & Number Badge */}
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <span className="w-7 h-7 rounded-full bg-[#32aa15] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-[#f0f9f1] border border-[#32aa15]/25 flex items-center justify-center text-[#32aa15] shadow-xs group-hover:scale-105 group-hover:bg-[#e4f6e6] transition-all">
                      <Icon className="w-5 h-5 text-[#32aa15] stroke-[2.2]" />
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#15803d] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug max-w-[170px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          7. BOTTOM CTA BANNER: "Ready to Invest in the Future of Mobility?"
          ========================================================================= */}
      <InvestCtaBanner openModalWithOption={openModalWithOption} />

    </div>
  );
};
