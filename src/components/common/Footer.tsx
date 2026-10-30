import React from 'react';
import {
  Mail,
  PhoneCall,
  ArrowUp,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  openModalWithOption?: (option: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ openModalWithOption }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0b0f19] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-800">
      {/* Top Subtle Green Accent Line */}
      <div className="h-1 w-full bg-[#32aa15]" />

      {/* Subtle Background Radial Glow Effects */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#32aa15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-[#32aa15]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-10 pb-4">

        {/* 4-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-8 border-b border-slate-800">

          {/* COL 1: BRAND & TAGLINE (LG: 4 COLS) */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="inline-block focus:outline-none -ml-1">
              <img
                src="/logo.png"
                alt="Evoltek Logo"
                className="h-10 sm:h-12 lg:h-14 max-w-[240px] sm:max-w-[280px] w-auto object-contain"
              />
            </Link>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Wix_Madefor_Display',sans-serif]">
              Powering Every Journey.
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Building India&apos;s premier high-speed EV charging network across expressways, urban centers, and highway lifestyle hubs.
            </p>
          </div>

          {/* COL 2: QUICK LINKS (LG: 2 COLS) */}
          <div className="lg:col-span-2 space-y-3 pt-1">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Quick Links
              <span className="block h-0.5 w-8 bg-[#32aa15] mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2 text-sm font-medium pt-1">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Charging Stations', path: '/charging-stations' },
                { label: 'Investment', path: '/investment' },
                { label: 'Franchise Model', path: '/franchise' },
                { label: 'App & Network', path: '/app-network' },
                { label: 'Contact', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: BUSINESS (LG: 3 COLS) */}
          <div className="lg:col-span-3 space-y-3 pt-1">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              Opportunities
              <span className="block h-0.5 w-8 bg-[#32aa15] mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300 pt-1">
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Become an Investor') : null}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">50/50 Co-Investment</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Franchise Opportunity') : null}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Franchise Ownership</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openModalWithOption ? openModalWithOption('Landowner Partnership') : null}
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Monetize Highway Land</span>
                </button>
              </li>
              <li>
                <Link
                  to="/charging-stations"
                  className="group inline-flex items-center gap-2 text-slate-300 hover:text-[#32aa15] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#32aa15] group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Hardware &amp; EV Hubs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & SUPPORT (LG: 3 COLS) */}
          <div className="lg:col-span-3 space-y-3 pt-1">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight font-['Wix_Madefor_Display',sans-serif] relative inline-block">
              24/7 Operations
              <span className="block h-0.5 w-8 bg-[#32aa15] mt-1 rounded-full" />
            </h4>

            <div className="space-y-3 text-sm font-medium pt-1">
              <a
                href="mailto:contact@evoltek.in"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#32aa15] group-hover:bg-[#32aa15] group-hover:text-white transition-colors shadow-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all sm:break-normal">contact@evoltek.in</span>
              </a>

              <a
                href="tel:18003865835"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#32aa15] group-hover:bg-[#32aa15] group-hover:text-white transition-colors shadow-sm shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>1800-386-5835 (Toll-Free)</span>
              </a>

              {/* Social Media */}
              <div className="pt-1">
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700/80 hover:border-[#00c04b]/40 transition-all shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-current text-[#00c04b] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0-.01-3.01 1.5 1.5 0 0 0 .01 3.01m1.37 9.74v-8.37H5.1v8.37h2.73z" />
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700/80 hover:border-[#00c04b]/40 transition-all shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-current text-[#00c04b] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700/80 hover:border-[#00c04b]/40 transition-all shadow-sm group"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-[#00c04b] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & CREDITS */}
        <div className="pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left flex-wrap">
            <p>© 2026 Evoltek. All Rights Reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p>India’s Premier 50/50 EV Infrastructure Network</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="text-slate-300">
              Designed by the{' '}
              <a
                href="https://sunseaz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#32aa15] hover:text-[#288a11] hover:underline transition-colors"
              >
                Sunseaz
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 sm:p-2.5 bg-[#32aa15] text-white hover:bg-[#288a11] rounded-xl transition-all cursor-pointer group shadow-sm shrink-0"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
