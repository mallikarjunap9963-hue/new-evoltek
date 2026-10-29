import React from 'react';
import {
  MapPin,
  CreditCard,
  Zap,
  Calendar,
  Headphones,
  Fuel,
  Clock,
  ShieldCheck,
  ChevronRight,
  Car,
  Globe,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvestCtaBanner } from '../components/common/InvestCtaBanner';

interface AppNetworkPageProps {
  openModalWithOption: (option: string) => void;
}

// Apple App Store Button Badge
const AppleStoreBadge: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl transition-all shadow-lg shadow-black/10 group cursor-pointer"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white shrink-0 group-hover:scale-105 transition-transform">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.58-.72.97-1.72.86-2.72-.88.04-1.95.59-2.58 1.33-.56.64-.97 1.66-.84 2.64 1 .08 2-.53 2.56-1.25z" />
    </svg>
    <div className="text-left leading-tight">
      <span className="block text-[9px] uppercase tracking-wider text-white/70 font-medium">Download on the</span>
      <span className="block text-sm sm:text-base font-bold text-white tracking-tight -mt-0.5">App Store</span>
    </div>
  </button>
);

// Google Play Store Button Badge
const GooglePlayBadge: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xl transition-all shadow-lg shadow-black/10 group cursor-pointer"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 group-hover:scale-105 transition-transform">
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.323-.61-.798-.61-1.342V3.156c0-.544.24-1.019.61-1.342z"
        fill="#00E676"
      />
      <path
        d="M17.18 8.613L4.95 1.554c-.45-.259-.96-.341-1.341-.186L13.792 12l3.388-3.387z"
        fill="#FFD600"
      />
      <path
        d="M3.609 22.632c.381.155.891.073 1.341-.186l12.23-7.059L13.792 12l3.388 3.387z"
        fill="#FF3D00"
      />
      <path
        d="M20.472 10.513l-3.292-1.9-3.388 3.387 3.388 3.387 3.292-1.9c.94-.543.94-1.431 0-1.974z"
        fill="#00B0FF"
      />
    </svg>
    <div className="text-left leading-tight">
      <span className="block text-[9px] uppercase tracking-wider text-white/70 font-medium">GET IT ON</span>
      <span className="block text-sm sm:text-base font-bold text-white tracking-tight -mt-0.5">Google Play</span>
    </div>
  </button>
);

export const AppNetworkPage: React.FC<AppNetworkPageProps> = ({ openModalWithOption }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* =========================================================================
          1. HERO SECTION: "Smart Charging. At Your Fingertips."
          ========================================================================= */}
      <section className="relative w-full bg-[#07130b] text-white overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-9 sm:pb-11 lg:pb-14 min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] flex items-center">
        {/* Full-bleed Panoramic Background Image uploaded by user */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="/app_hero_panoramic_bg.png"
            alt="Evoltek Mobile App & EV Charging Network"
            className="w-full h-full object-cover object-[center_right] sm:object-center brightness-100"
          />
          {/* Gradient contrast layer on the left for text readability */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[68%] lg:w-[48%] bg-gradient-to-r from-[#07130b] via-[#07130b]/95 sm:via-[#07130b]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#07130b]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07130b]/60 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading, Subtitle & Store Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#32aa15] font-extrabold text-xs uppercase tracking-widest block">
                EVOLTEK MOBILE APP &amp; NETWORK
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                Smart Charging.
                <br />
                <span className="text-[#32aa15]">At Your Fingertips.</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Find charging stations, check live availability, make secure payments and track your charging sessions with the Evoltek mobile app.
              </p>

              {/* App Store & Google Play Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <AppleStoreBadge onClick={() => openModalWithOption('Download iOS App')} />
                <GooglePlayBadge onClick={() => openModalWithOption('Download Android App')} />
              </div>

              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs shadow-lg text-white"
              >
                <Link
                  to="/"
                  className="flex items-center gap-1.5 hover:text-[#32aa15] transition-colors font-medium"
                >
                  <Home className="w-3.5 h-3.5 text-white" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[#32aa15] font-semibold">App &amp; Network</span>
              </nav>
            </div>

            {/* Right Column: Panoramic view with inline display on mobile (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="lg:hidden w-full max-w-xs mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 my-3">
                <img
                  src="/app_hero_panoramic_bg.png"
                  alt="Evoltek Mobile App in Hand"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          2. APP FEATURES: "A Smarter Charging Experience"
          ========================================================================= */}
      <section className="w-full bg-white py-10 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: 4 Feature Cards in 2x2 Grid (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-1">
                  APP FEATURES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug font-['Wix_Madefor_Display',sans-serif]">
                  A Smarter <span className="text-[#32aa15]">Charging Experience</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1.5">
                  The Evoltek mobile app is designed to make EV charging simple, convenient and reliable for every driver.
                </p>
              </div>

              {/* 4 Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* Feature 1 */}
                <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-[#32aa15]/35 shadow-xs hover:border-[#32aa15] hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                    <MapPin className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Find Charging Stations
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Locate nearby Evoltek stations on the map.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-[#32aa15]/35 shadow-xs hover:border-[#32aa15] hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Live Availability
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Check real-time charger status and power type.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-[#32aa15]/35 shadow-xs hover:border-[#32aa15] hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                    <Calendar className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Book Your Slot
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Reserve a charger before you arrive.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-[#32aa15]/35 shadow-xs hover:border-[#32aa15] hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                    <CreditCard className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Secure Payments
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs mt-1 leading-snug">
                    Multiple payment options with a safe and secure system.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: 3 Phones App Display (6 cols) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-xl">
                <img
                  src="/app_three_phones_clean.png"
                  alt="Evoltek Mobile App Screens - Hub, Map, and Live Charging"
                  className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)] hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          3. OUR CHARGING NETWORK: "Growing Across Cities & Highways"
          ========================================================================= */}
      <section className="w-full bg-white py-10 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Card Container Matching Mockup */}
          <div className="bg-[#f9fbf9] rounded-3xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              
              {/* Left Column: Heading, Subtitle, 4 Large Stats & Button (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-1.5">
                    OUR CHARGING NETWORK
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
                    Growing Across
                    <br />
                    <span className="text-[#32aa15]">Cities &amp; Highways</span>
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2 font-normal">
                    Evoltek is building a connected charging network across India, with strategic locations in cities, highways and key destinations.
                  </p>
                </div>

                {/* 4 Stats in 2 rows of 2 cards (Enlarged size) */}
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-7 pt-2 pb-2">
                  
                  {/* Stat 1 */}
                  <div className="space-y-1.5 group">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                      <MapPin className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif] tracking-tight leading-none">
                      50+
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-snug font-medium pt-1">
                      Charging Locations
                      <span className="text-slate-400 block text-[11px] sm:text-xs font-normal">(Deployed &amp; Growing)</span>
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="space-y-1.5 border-l-2 border-slate-200/80 pl-6 sm:pl-8 group">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                      <Fuel className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif] tracking-tight leading-none">
                      200+
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-snug font-medium pt-1">
                      DC &amp; AC Chargers
                      <span className="text-slate-400 block text-[11px] sm:text-xs font-normal">Installed</span>
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div className="space-y-1.5 pt-1 group">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                      <Globe className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif] tracking-tight leading-none">
                      25+
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-snug font-medium pt-1">
                      Partner Collaborations
                      <span className="text-slate-400 block text-[11px] sm:text-xs font-normal">Across India</span>
                    </p>
                  </div>

                  {/* Stat 4 */}
                  <div className="space-y-1.5 border-l-2 border-slate-200/80 pl-6 sm:pl-8 pt-1 group">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                      <Clock className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-['Wix_Madefor_Display',sans-serif] tracking-tight leading-none">
                      24/7
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-snug font-medium pt-1">
                      Monitoring &amp; Support
                      <span className="text-slate-400 block text-[11px] sm:text-xs font-normal">Always On</span>
                    </p>
                  </div>

                </div>

                {/* View Our Network Button */}
                <div className="pt-2">
                  <button
                    onClick={() => openModalWithOption('View Charging Network')}
                    className="px-7 py-3.5 rounded-xl bg-[#32aa15] hover:bg-[#288c10] text-white font-bold text-sm sm:text-base shadow-md shadow-[#32aa15]/25 hover:shadow-lg transition-all inline-flex items-center gap-2.5 cursor-pointer"
                  >
                    <span>View Our Network</span>
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>

              {/* Center Column: India Network Map (Enlarged) */}
              <div className="lg:col-span-4 flex items-center justify-center py-2">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img
                    src="/app_india_ev_map_transparent.png"
                    alt="Evoltek EV Charging Network Map Across India"
                    className="w-full h-auto object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-500 scale-105 sm:scale-110"
                  />
                </div>
              </div>

              {/* Right Column: 3 Location Photos Stack (Enlarged size) */}
              <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-4.5">
                
                {/* Tile 1: City Locations */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[125px] sm:h-[135px] lg:h-[145px] group border border-slate-200/90 shadow-md">
                  <img
                    src="/city_charging_card.jpg"
                    alt="City Locations"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-md font-['Wix_Madefor_Display',sans-serif]">
                    City Locations
                  </div>
                </div>

                {/* Tile 2: Highway Locations */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[125px] sm:h-[135px] lg:h-[145px] group border border-slate-200/90 shadow-md">
                  <img
                    src="/highway_charging_card.jpg"
                    alt="Highway Locations"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-md font-['Wix_Madefor_Display',sans-serif]">
                    Highway Locations
                  </div>
                </div>

                {/* Tile 3: Destination & EV Hubs */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[125px] sm:h-[135px] lg:h-[145px] group border border-slate-200/90 shadow-md">
                  <img
                    src="/ai_franchise_hub.jpg"
                    alt="Destination & EV Hubs"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3.5 text-white font-bold text-sm sm:text-base tracking-wide drop-shadow-md font-['Wix_Madefor_Display',sans-serif]">
                    Destination &amp; EV Hubs
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. FOR EV DRIVERS: "Why Use the Evoltek App?"
          ========================================================================= */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <span className="text-[#32aa15] text-xs font-bold uppercase tracking-wider block mb-1">
              FOR EV DRIVERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Why Use the Evoltek App?
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            
            {/* Card 1: Easy & Convenient */}
            <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex items-center gap-3.5 group hover:border-[#32aa15]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                <Car className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">
                  Easy &amp; Convenient
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  Find, book and pay in a few taps.
                </p>
              </div>
            </div>

            {/* Card 2: Reliable Network */}
            <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex items-center gap-3.5 group hover:border-[#32aa15]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                <Zap className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">
                  Reliable Network
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  Fast and high-power charging options.
                </p>
              </div>
            </div>

            {/* Card 3: Transparent Payments */}
            <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex items-center gap-3.5 group hover:border-[#32aa15]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">
                  Transparent Payments
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  Clear pricing with digital invoices.
                </p>
              </div>
            </div>

            {/* Card 4: Always Supported */}
            <div className="bg-[#f9fbf9] rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs flex items-center gap-3.5 group hover:border-[#32aa15]/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-2xs">
                <Headphones className="w-6 h-6 text-[#00c04b] stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-['Wix_Madefor_Display',sans-serif]">
                  Always Supported
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  24/7 customer assistance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. BOTTOM CTA BANNER: "Ready to Invest in the Future of Mobility?"
          ========================================================================= */}
      <InvestCtaBanner openModalWithOption={openModalWithOption} />

    </div>
  );
};
