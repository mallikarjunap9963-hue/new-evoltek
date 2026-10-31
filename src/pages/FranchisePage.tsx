import React from 'react';
import {
  Store,
  MapPin,
  Check,
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
  Gamepad2,
  Zap
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
      <section className="relative w-full text-white overflow-hidden py-12 sm:py-14 lg:py-16 bg-[#040906]">
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
          3. OUR FRANCHISE MODELS: "Choose the Right Model for Your Goals"
          ========================================================================= */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-1">
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>OUR FRANCHISE MODELS</span>
            </div>
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
                      <p className="text-sm text-slate-500 mt-0.5 leading-snug">
                        Ideal for malls, offices, residential complexes and public locations.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm pt-3 sm:pt-4 border-t border-slate-100">
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Space Required:</span>{' '}
                        <span className="text-slate-600 font-medium">Minimum 2,000 Sq. Ft.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Charging Capacity:</span>{' '}
                        <span className="text-slate-600 font-medium">60 kW – 480 kW</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Charger Type:</span>{' '}
                        <span className="text-slate-600 font-medium">DC Fast Charging</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Suitable For:</span>{' '}
                        <span className="text-slate-600 font-medium">City areas &amp; high footfall locations</span>
                      </div>
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
                      <p className="text-sm text-slate-500 mt-0.5 leading-snug">
                        Perfect for highways, travel hubs and large commercial locations.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm pt-3 sm:pt-4 border-t border-slate-100">
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Space Required:</span>{' '}
                        <span className="text-slate-600 font-medium">Minimum 1 Acre</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Charging Capacity:</span>{' '}
                        <span className="text-slate-600 font-medium">60 kW – 480 kW</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Charger Type:</span>{' '}
                        <span className="text-slate-600 font-medium">DC Fast Charging</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 group/item">
                      <div className="w-5 h-5 rounded-full bg-[#32aa15] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div className="leading-snug sm:leading-relaxed">
                        <span className="font-bold text-slate-900">Suitable For:</span>{' '}
                        <span className="text-slate-600 font-medium">Highways &amp; long-distance travel hubs</span>
                      </div>
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
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-1">
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>THE EVOLTEK ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              A Smarter Way to Build Your EV Business
            </h2>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
              Share the investment, build with an experienced operating partner, and create new opportunities around fast EV charging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                title: 'Shared Investment',
                desc: 'Evoltek funds half of the project, helping you launch with a shared commitment.',
                icon: Users
              },
              {
                title: 'Flexible Return Options',
                desc: 'Choose a percentage-based or fixed-return model to suit your investment goals.',
                icon: TrendingUp
              },
              {
                title: 'Long-Term Security',
                desc: 'Build on a long-term agreement of up to 10 years, with a clear foundation for your partnership.',
                icon: ShieldCheck
              },
              {
                title: 'Managed Operations',
                desc: 'Evoltek manages technical operations and maintenance so you can focus on your business.',
                icon: Settings
              },
              {
                title: 'Fast DC Charging',
                desc: 'Offer high-speed charging with solutions designed for both city locations and highways.',
                icon: Fuel
              },
              {
                title: 'Additional Income',
                desc: 'Explore added revenue opportunities with amenities such as a cafe, restaurant, or gaming area.',
                icon: Store
              },
              {
                title: 'Landowner Opportunity',
                desc: 'Put suitable land to work as a charging location and earn rental income.',
                icon: MapPin
              },
              {
                title: 'Quick Launch',
                desc: 'With planning and setup support, your station can be ready to launch in about two months.',
                icon: Zap
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
              <div
                key={item.title}
                className="group flex min-h-[190px] flex-col rounded-2xl border border-[#c3dc9b] bg-[#d1e7a7] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#32aa15]/50 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center text-[#32aa15]">
                    <Icon className="h-8 w-8 stroke-[1.8]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-['Wix_Madefor_Display',sans-serif] text-base sm:text-lg font-bold leading-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. MORE THAN JUST CHARGING: "Create a Charging Hub. Create More Opportunities."
          ========================================================================= */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-slate-900 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span>MORE THAN JUST CHARGING</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                  Create a Charging Hub.
                  <br />
                  Create More Opportunities.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
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
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-5 gap-y-5">

                {/* Tile 1: Cafeteria & Restaurants */}
                <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_cafe.jpg"
                    alt="Cafeteria & Restaurants"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-white drop-shadow-md">
                    <Store className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-bold text-sm sm:text-base">Cafeteria &amp; Restaurants</span>
                  </div>
                </div>

                {/* Tile 2: Wi-Fi & Workspaces */}
                <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_workspace.jpg"
                    alt="Wi-Fi & Workspaces"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-white drop-shadow-md">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-bold text-sm sm:text-base">Wi-Fi &amp; Workspaces</span>
                  </div>
                </div>

                {/* Tile 3: Rooms & Rest Facilities */}
                <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_rest_room.jpg"
                    alt="Rooms & Rest Facilities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-white drop-shadow-md">
                    <Bed className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-bold text-sm sm:text-base">Rooms &amp; Rest Facilities</span>
                  </div>
                </div>

                {/* Tile 4: Gaming Area & Playzone */}
                <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden h-[200px] sm:h-[220px] lg:h-[240px] border border-slate-200/80 shadow-md">
                  <img
                    src="/hub_amenity_gaming.jpg"
                    alt="Gaming Area & Playzone"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-white drop-shadow-md">
                    <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 stroke-[2.2]" />
                    <span className="font-bold text-sm sm:text-base">Gaming Area &amp; Playzone</span>
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
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-1">
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
              Our Franchise Process
            </h2>
          </div>

          {/* Six-step timeline with large outlined icon circles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-5">
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
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-[64px] left-[calc(50%+64px)] right-[calc(-50%+64px)] border-t-2 border-dotted border-[#15803d] z-0">
                      <ChevronRight className="absolute -right-2.5 -top-[11px] h-5 w-5 text-[#15803d] stroke-[2.5]" />
                    </div>
                  )}

                  <div className="relative z-10 mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-[#8bd878] bg-white shadow-[0_8px_18px_rgba(21,128,61,0.10)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-[136px] sm:w-[136px]">
                    <span className="absolute -left-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#32aa15] text-xs font-black text-white shadow-md">
                      {step.num}
                    </span>
                    <Icon className="h-12 w-12 text-[#32aa15] stroke-[1.7] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-bold text-[#32aa15] text-base sm:text-lg group-hover:text-[#288c10] transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-[190px]">
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
