import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  openModalWithOption?: (option: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  openModalWithOption
}) => {
  const location = useLocation();

  const NAV_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Charging Solutions', path: '/charging-stations' },
    { label: 'Investment', path: '/investment' },
    { label: 'Franchise', path: '/franchise' },
    { label: 'App & Network', path: '/app-network' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/charging-stations') {
      return location.pathname === '/charging-stations' || location.pathname === '/charging-solutions';
    }
    if (path === '/app-network') {
      return location.pathname === '/app-network' || location.pathname === '/roi-calculator';
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* TOP WHITE NAVIGATION HEADER */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full shrink-0 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 transition-all duration-300 py-0 text-slate-900 rounded-none ${
          isScrolled ? 'shadow-lg bg-white/98' : ''
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap w-full">
          {/* Logo (Left) */}
          <Link to="/" className="flex items-center group py-0 shrink-0">
            <img
              src="/logo.png"
              alt="Evoltek Logo"
              className={`w-auto max-w-[190px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] object-contain group-hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-12 md:h-13 lg:h-14' : 'h-12 sm:h-14 md:h-15 lg:h-16'
              }`}
            />
          </Link>

          {/* Navigation Links (Right) */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-1.5 ml-auto">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex items-center rounded-full px-2.5 xl:px-3 py-2 text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32aa15] focus-visible:ring-offset-2 ${
                    active
                      ? 'bg-[#32aa15]/10 text-[#278510]'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#278510]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#32aa15] transition-colors ml-auto cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-primary-navigation"
          className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 animate-in slide-in-from-top duration-200 text-slate-900 absolute top-[68px] left-0 right-0 z-40 shadow-xl rounded-b-2xl"
        >
          <nav aria-label="Mobile navigation" className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32aa15] ${
                    active
                      ? 'bg-[#32aa15]/10 font-bold text-[#278510]'
                      : 'font-medium text-slate-700 hover:bg-slate-100 hover:text-[#278510]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          {openModalWithOption && (
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModalWithOption('General Enquiry');
                }}
                className="w-full py-3 rounded-xl bg-[#32aa15] text-white font-bold text-sm shadow-md"
              >
                Partner Enquiry
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
