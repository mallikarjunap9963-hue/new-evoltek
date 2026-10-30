import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  Flag,
  Factory,
  Zap,
  Globe,
  ChevronRight,
  Home,
  ArrowUpRight,
  MapPin,
  Handshake,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';

const AnimatedCounter: React.FC<{ target: number; suffix?: string; isVisible: boolean }> = ({
  target,
  suffix = '+',
  isVisible
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

interface AboutPageProps {
  openModalWithOption: (option: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openModalWithOption }) => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. CINEMATIC BREADCRUMB HERO BANNER WITH OFFICIAL EVOLTEK DC FAST CHARGER */}
      <section className="relative w-full text-white overflow-hidden py-12 sm:py-14 lg:py-16 bg-[#040906]">
        {/* Background EV Charging Station with Official EVOLTEK DC Fast Charger */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[position:78%_100%] bg-no-repeat pointer-events-none brightness-105"
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
              <span>WHO WE ARE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-white tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
              About <span className="text-[#32aa15]">EVOLTEK</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Building reliable, connected EV charging infrastructure for a cleaner, smarter journey.
            </p>

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
                <span className="text-[#32aa15] font-semibold">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION (MATCHING HOME PAGE SIGNATURE DESIGN) */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

            {/* Left Column: Driver Charging EV Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[480px] lg:max-w-none h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <img
                  src="/about_who_we_are_man.jpg"
                  alt="Young professional charging electric vehicle at Evoltek charging hub"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/about us.png';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Content & 4 Features */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-2 sm:space-y-3 text-left">

              {/* Tagline Badge */}
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#32aa15] fill-[#32aa15] shrink-0" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#32aa15] font-sans">
                  WHO WE ARE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semibold text-[#1C2029] tracking-tight leading-[1.08] font-['Wix_Madefor_Display',sans-serif]">
                A Connected Ecosystem for <span className="text-[#32aa15]">Sustainable Mobility</span>
              </h2>

              {/* Sub-paragraphs */}
              <p className="text-sm sm:text-base text-slate-600 leading-snug font-normal max-w-2xl">
                Evoltek is developing a connected EV charging ecosystem designed for drivers, businesses and investors. From high-quality manufacturing to intelligent technology, we ensure a seamless charging experience while creating sustainable value for the communities we serve.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-snug font-normal max-w-2xl">
                We combine innovation, reliability and partnerships to accelerate the global transition to electric mobility.
              </p>

              {/* 4 Feature Items with Background Circle & Cursor 3D Flip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-7 sm:gap-y-8 pt-3">

                {/* Item 1: Reliable Infrastructure */}
                <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center [perspective:800px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="8" y="41" width="22" height="3" rx="1.5" fill="white" stroke="currentColor" strokeWidth="2.3" />
                        <rect x="10" y="8" width="18" height="33" rx="2.5" fill="white" stroke="currentColor" strokeWidth="2.3" />
                        <rect x="13" y="11" width="12" height="9" rx="1" strokeWidth="2" />
                        <line x1="10" y1="23.5" x2="28" y2="23.5" strokeWidth="2" />
                        <circle cx="12.5" cy="26" r="0.8" fill="currentColor" />
                        <circle cx="25.5" cy="26" r="0.8" fill="currentColor" />
                        <circle cx="12.5" cy="37" r="0.8" fill="currentColor" />
                        <circle cx="25.5" cy="37" r="0.8" fill="currentColor" />
                        <path d="M20.5 26 L17 32 L21 32 L17.5 38" strokeWidth="2.2" strokeLinejoin="miter" />
                        <path d="M28 27 L31 27 C34 27 35.5 29 35.5 33 L35.5 37 C35.5 41 34 43 32 43 C30 43 29 41 29 37 L29 28" strokeWidth="2.3" />
                        <path d="M27 22 L31 22 C32.5 22 33.5 23 33.5 24.5 L33.5 27 C33.5 28.5 32.5 29.5 31 29.5 L27 29.5 C25.5 29.5 24.5 28.5 24.5 27 L24.5 24.5 C24.5 23 25.5 22 27 22 Z" fill="white" stroke="currentColor" strokeWidth="2" />
                        <line x1="27.5" y1="22" x2="27.5" y2="17" strokeWidth="2.3" />
                        <line x1="30.5" y1="22" x2="30.5" y2="17" strokeWidth="2.3" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1 pt-1">
                    <h4 className="text-[17px] sm:text-[19px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                      Reliable Infrastructure
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-700 font-medium leading-relaxed">
                      High-performance charging stations built for uptime and safety.
                    </p>
                  </div>
                </div>

                {/* Item 2: Smart Technology */}
                <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center [perspective:800px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M28 19 L35 19 C38 19 39.5 20.5 40.5 22.5 L43 25" />
                        <path d="M40 22 C41.5 22 42.5 23 42.5 24 C42.5 25 41.5 26 40 26" />
                        <rect x="38" y="27" width="4.5" height="2.5" rx="1" />
                        <path d="M28 29 L41 29 C42.5 29 43.5 30 43.5 31.5 L43.5 33 C43.5 34.5 42.5 35.5 41 35.5 L28 35.5" />
                        <line x1="30" y1="32.5" x2="38" y2="32.5" />
                        <rect x="37" y="35.5" width="5" height="5" rx="1.5" />
                        <rect x="8" y="8" width="20" height="36" rx="4" fill="white" stroke="currentColor" strokeWidth="2.3" />
                        <path d="M13 11 L16 11 L17 13 L19 13 L20 11 L23 11" strokeWidth="1.8" />
                        <circle cx="18" cy="25" r="6" strokeWidth="2.1" />
                        <path d="M19 20 L16.5 25 L19.5 25 L17 30" strokeWidth="2" strokeLinejoin="miter" />
                        <line x1="14" y1="39" x2="22" y2="39" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1 pt-1">
                    <h4 className="text-[17px] sm:text-[19px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                      Smart Technology
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-700 font-medium leading-relaxed">
                      Intelligent systems for easy access, monitoring and seamless payments.
                    </p>
                  </div>
                </div>

                {/* Item 3: Sustainable Growth */}
                <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center [perspective:800px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 6 C15.5 6 10 11.5 10 18 C10 27 22 37 22 37 C22 37 34 27 34 18 C34 11.5 28.5 6 22 6 Z" fill="white" stroke="currentColor" strokeWidth="2.3" />
                        <path d="M23 11 L19 17 L24 17 L21 23" strokeWidth="2" strokeLinejoin="miter" />
                        <ellipse cx="22" cy="42" rx="10" ry="3.2" strokeWidth="2.1" />
                        <circle cx="36" cy="42" r="3" strokeWidth="2.1" />
                        <line x1="32" y1="42" x2="33" y2="42" strokeWidth="2.1" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1 pt-1">
                    <h4 className="text-[17px] sm:text-[19px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                      Sustainable Growth
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-700 font-medium leading-relaxed">
                      Creating long-term value for society, businesses and the planet.
                    </p>
                  </div>
                </div>

                {/* Item 4: Strong Partnerships */}
                <div className="flex items-start gap-4 sm:gap-5 group cursor-pointer">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center [perspective:800px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EAEAEA] group-hover:bg-[#32aa15]/15 transition-all duration-300 group-hover:scale-110" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#32aa15]" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13.5 9 C13.5 7.5 14.5 7 16 7 L18 7 C19.5 7 20.5 7.5 20.5 9" strokeWidth="2.1" />
                        <rect x="9" y="9" width="18" height="32" rx="3.5" fill="white" stroke="currentColor" strokeWidth="2.3" />
                        <path d="M19 18 L15.5 24 L20.5 24 L17 30" strokeWidth="2" strokeLinejoin="miter" />
                        <path d="M27 25 L30 25 C33 25 34 27 34 31 L34 36 C34 40 32.5 42 30.5 42 C28.5 42 27.5 40 27.5 36 L27.5 28" strokeWidth="2.3" />
                        <path d="M25.5 22 L29.5 22 C31 22 32 23 32 24.5 L32 27 C32 28.5 31 29.5 29.5 29.5 L25.5 29.5 C24 29.5 23 28.5 23 27 L23 24.5 C23 23 24 22 25.5 22 Z" fill="white" stroke="currentColor" strokeWidth="2" />
                        <line x1="26" y1="22" x2="26" y2="17.5" strokeWidth="2.3" />
                        <line x1="29" y1="22" x2="29" y2="17.5" strokeWidth="2.3" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1 pt-1">
                    <h4 className="text-[17px] sm:text-[19px] font-semibold text-[#0f172a] leading-tight group-hover:text-[#32aa15] transition-colors">
                      Strong Partnerships
                    </h4>
                    <p className="text-sm sm:text-[15px] text-slate-700 font-medium leading-relaxed">
                      Working together with investors, businesses and communities.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Button: Read More / Partner With Us */}
              <div className="pt-2">
                <button
                  onClick={() => openModalWithOption('Partner With Us')}
                  className="inline-flex items-center gap-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base pl-7 pr-2.5 py-2.5 rounded-full shadow-lg shadow-[#32aa15]/25 hover:shadow-xl hover:shadow-[#32aa15]/30 transition-all duration-300 group cursor-pointer active:scale-95"
                >
                  <span>Partner With Us</span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#32aa15] shadow-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <ArrowUpRight className="w-4.5 h-4.5 text-[#32aa15] stroke-[2.8]" />
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION SECTION (MATCHING INDEX PAGE) */}
      <VisionMissionSection />

      {/* 4. VALUES THAT DRIVE US */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#32aa15] font-['Wix_Madefor_Display',sans-serif]">
              Values That Drive Us
            </h2>
            <div className="w-10 h-0.5 bg-[#32aa15] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                iconSrc: '/icon_3d_val_sustainability.png',
                title: 'Sustainability',
                desc: 'We build a cleaner, greener tomorrow with sustainable practices and a healthier planet for future generations.'
              },
              {
                iconSrc: '/icon_3d_val_reliability.png',
                title: 'Reliability',
                desc: 'Dependable infrastructure and services you can count on, always.'
              },
              {
                iconSrc: '/icon_3d_val_innovation.png',
                title: 'Innovation',
                desc: 'We turn new ideas into real solutions and deliver smarter, cleaner outcomes.'
              },
              {
                iconSrc: '/icon_3d_val_partnership.png',
                title: 'Partnership',
                desc: 'We grow together with our partners, customers and communities.'
              }
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[22px] p-5 sm:p-6 text-center flex flex-col items-center justify-between group cursor-pointer transition-all duration-300 h-full min-h-[285px] sm:min-h-[295px] border-2 border-slate-200/80 hover:border-[#00b853] shadow-sm hover:shadow-xl hover:shadow-[#00b853]/15 hover:-translate-y-1.5"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={val.iconSrc}
                    alt={val.title}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <h4 className="text-base sm:text-lg font-bold mb-2 font-['Wix_Madefor_Display',sans-serif] text-slate-900 group-hover:text-[#00b853] transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed font-normal max-w-[220px]">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DRIVING THE FUTURE OF MOBILITY (CINEMATIC INTERACTIVE BANNER - SLEEK COMPACT SIZE) */}
      <section ref={statsRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 min-h-[380px] sm:min-h-[400px] lg:min-h-[430px] flex flex-col justify-center items-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
          {/* Background Image: Sunset EV station with car */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{ backgroundImage: `url('/mobility_sunset_clean_bg.jpg')` }}
          />
          {/* Natural Atmospheric Overlay preserving golden hour & greenery */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/25 pointer-events-none" />

          {/* Centered Content Wrapper (Positioned in the Middle) */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto space-y-5 sm:space-y-6 lg:space-y-7">

            {/* Top Center Headline */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-white tracking-normal font-['Wix_Madefor_Display',sans-serif] drop-shadow-md">
                Driving the <span className="text-[#34d399]">Future</span> of Mobility
              </h2>
              <div className="w-12 sm:w-14 h-1 bg-[#10b981] mx-auto mt-2 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
            </div>

            {/* 4 Frosted Emerald Glass Stat Cards (Sleeker Compact Size) */}
            <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 items-center">

              {/* Card 1: 50+ Charging Locations */}
              <div
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(6, 46, 26, 0.22) 100%)'
                }}
                className="backdrop-blur-md border border-white/35 rounded-2xl p-4 sm:p-4.5 lg:p-5 text-center text-white hover:border-[#34d399]/80 hover:bg-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px] group cursor-default"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10b981] flex items-center justify-center text-white mb-2 shadow-[0_0_14px_rgba(16,185,129,0.55)] group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 stroke-[2.2] text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-none font-['Wix_Madefor_Display',sans-serif] drop-shadow-md">
                  <AnimatedCounter target={50} suffix="+" isVisible={statsVisible} />
                </div>
                <p className="font-bold text-xs sm:text-[13.5px] mt-1.5 leading-tight drop-shadow-sm">
                  Charging Locations
                </p>
                <p className="text-white/90 text-[11px] sm:text-xs mt-0.5 font-medium drop-shadow-sm">
                  (Deployed &amp; Growing)
                </p>
              </div>

              {/* Card 2: 200+ DC & AC Chargers Installed */}
              <div
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(6, 46, 26, 0.22) 100%)'
                }}
                className="backdrop-blur-md border border-white/35 rounded-2xl p-4 sm:p-4.5 lg:p-5 text-center text-white hover:border-[#34d399]/80 hover:bg-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px] group cursor-default"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10b981] flex items-center justify-center text-white mb-2 shadow-[0_0_14px_rgba(16,185,129,0.55)] group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-0.5 text-white font-mono font-bold">
                    <span className="text-sm font-black opacity-90">[</span>
                    <Zap className="w-4 h-4 text-white fill-white stroke-[1.5]" />
                    <span className="text-sm font-black opacity-90">]</span>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-none font-['Wix_Madefor_Display',sans-serif] drop-shadow-md">
                  <AnimatedCounter target={200} suffix="+" isVisible={statsVisible} />
                </div>
                <p className="font-bold text-xs sm:text-[13.5px] mt-1.5 leading-tight max-w-[190px] drop-shadow-sm">
                  DC &amp; AC Chargers Installed
                </p>
              </div>

              {/* Card 3: 25+ Partner Collaborations */}
              <div
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(6, 46, 26, 0.22) 100%)'
                }}
                className="backdrop-blur-md border border-white/35 rounded-2xl p-4 sm:p-4.5 lg:p-5 text-center text-white hover:border-[#34d399]/80 hover:bg-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px] group cursor-default"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10b981] flex items-center justify-center text-white mb-2 shadow-[0_0_14px_rgba(16,185,129,0.55)] group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-5 h-5 stroke-[2.2] text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-none font-['Wix_Madefor_Display',sans-serif] drop-shadow-md">
                  <AnimatedCounter target={25} suffix="+" isVisible={statsVisible} />
                </div>
                <p className="font-bold text-xs sm:text-[13.5px] mt-1.5 leading-tight drop-shadow-sm">
                  Partner Collaborations
                </p>
                <p className="text-white/90 text-[11px] sm:text-xs mt-0.5 font-medium drop-shadow-sm">
                  Across India
                </p>
              </div>

              {/* Card 4: 24/7 Monitoring & Support */}
              <div
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(6, 46, 26, 0.22) 100%)'
                }}
                className="backdrop-blur-md border border-white/35 rounded-2xl p-4 sm:p-4.5 lg:p-5 text-center text-white hover:border-[#34d399]/80 hover:bg-white/[0.18] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px] group cursor-default"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10b981] flex items-center justify-center text-white mb-2 shadow-[0_0_14px_rgba(16,185,129,0.55)] group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-5 h-5 stroke-[2.2] text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-none font-['Wix_Madefor_Display',sans-serif] drop-shadow-md">
                  24/7
                </div>
                <p className="font-bold text-xs sm:text-[13.5px] mt-1.5 leading-tight drop-shadow-sm">
                  Monitoring &amp; Support
                </p>
                <p className="text-white/90 text-[11px] sm:text-xs mt-0.5 font-medium drop-shadow-sm">
                  Always On
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR JOURNEY (TIMELINE) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#32aa15] font-['Wix_Madefor_Display',sans-serif]">
              Our Journey
            </h2>
            <div className="w-10 h-0.5 bg-[#32aa15] mx-auto mt-2 rounded-full" />
          </div>

          <div className="relative">
            {/* Horizontal Connecting Dashed Line on Large Screens */}
            <div className="hidden lg:block absolute top-10 sm:top-11 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-300 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  icon: <Flag className="w-9 h-9 sm:w-10 sm:h-10 text-[#32aa15] stroke-[2.2]" />,
                  title: 'The Beginning',
                  desc: 'Evoltek was founded with a mission to make EV charging simple, reliable and accessible for everyone.'
                },
                {
                  step: '02',
                  icon: <Factory className="w-9 h-9 sm:w-10 sm:h-10 text-[#32aa15] stroke-[2.2]" />,
                  title: 'Built to Deliver',
                  desc: 'We started manufacturing advanced charging equipment and building in-house technology platforms.'
                },
                {
                  step: '03',
                  icon: <Zap className="w-9 h-9 sm:w-10 sm:h-10 text-[#32aa15] stroke-[2.2]" />,
                  title: 'Expanding Impact',
                  desc: 'We expanded our solutions across cities, businesses, highways and communities across India.'
                },
                {
                  step: '04',
                  icon: <Users className="w-9 h-9 sm:w-10 sm:h-10 text-[#32aa15] stroke-[2.2]" />,
                  title: 'Stronger Together',
                  desc: 'We partner with landowners, investors and businesses to create a stronger charging ecosystem.'
                },
                {
                  step: '05',
                  icon: <Globe className="w-9 h-9 sm:w-10 sm:h-10 text-[#32aa15] stroke-[2.2]" />,
                  title: 'Future Ready',
                  desc: 'We continue to innovate, expand and drive the future of electric mobility together.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-default">
                  {/* Circular Icon with Badge */}
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#edf6eb] border-4 border-white shadow-lg flex items-center justify-center text-[#32aa15] group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#32aa15] text-white text-xs font-black shadow-md">
                      {item.step}
                    </span>
                  </div>

                  <div className="pt-3">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif] group-hover:text-[#32aa15] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed max-w-[220px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. "LET'S BUILD A GREENER TOMORROW" CTA BANNER */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="bg-[#0b1f13] rounded-3xl overflow-hidden shadow-2xl border border-[#32aa15]/20 grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Left Text */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Wix_Madefor_Display',sans-serif]">
              Let’s Build a <span className="text-[#4ade80]">Greener</span> Tomorrow.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Join us in building the EV charging network India can rely on.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openModalWithOption('Partner With Us')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4 text-slate-800" />
              </button>
            </div>
          </div>

          {/* Right EV Canopy Image */}
          <div className="lg:col-span-6 h-[260px] sm:h-[320px] lg:h-full min-h-[260px] relative overflow-hidden">
            <img
              src="/about_cta_green_canopy.jpg"
              alt="Electric car charging at twilight under illuminated green canopy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f13] via-transparent to-transparent lg:block hidden" />
          </div>

        </div>
      </section>


    </div>
  );
};
