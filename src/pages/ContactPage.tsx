import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  Download,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactPageProps {
  openModalWithOption?: (option: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ openModalWithOption }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    interest: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQ Accordion State (open FAQ indices)
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({
    0: false
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      interest: '',
      message: ''
    });
    setFormSubmitted(false);
  };

  // FAQ Data matching mockup
  const faqsLeft = [
    {
      q: 'How can I set up an EV charging station with Evoltek?',
      a: 'We provide end-to-end support—from site feasibility assessment, DISCOM electrical power sanctioning, and civil layout planning to hardware installation, cloud CMS integration, and turnkey commissioning.'
    },
    {
      q: 'What is the investment model?',
      a: 'Evoltek offers a transparent 50/50 joint co-investment model where you fund 50% of the project capital while Evoltek covers the other 50% alongside complete hardware warranty, ops, and network routing.'
    },
    {
      q: 'How long does it take to set up a station?',
      a: 'Typically 45 to 60 days from signing the partnership agreement, contingent on local DISCOM transformer sanctions and grid substation connectivity approvals.'
    },
    {
      q: 'Can Evoltek help assess a location for a charging station?',
      a: 'Yes. Share the proposed location with our team, and we can review factors such as site access, nearby demand, parking, and available electrical capacity as part of the feasibility assessment.'
    }
  ];

  const faqsRight = [
    {
      q: 'Do you provide support after installation?',
      a: 'Yes, 24/7/365 national network monitoring via our centralized NOC, proactive on-site maintenance engineers, automated software telemetry, and driver telephone assistance.'
    },
    {
      q: 'Can I become a franchise partner?',
      a: 'Absolutely. We offer both FOCO (Franchise Owned, Company Operated) and FOFO (Franchise Owned, Franchise Operated) business models with predictable recurring revenue sharing.'
    },
    {
      q: 'How can I track my station’s performance?',
      a: 'Through the real-time Evoltek Partner Dashboard and Mobile App, providing live session uptime metrics, energy consumption kWh analytics, and automated monthly revenue settlements.'
    },
    {
      q: 'What happens after I submit a project enquiry?',
      a: 'Our team will discuss your location, project goals, and partnership preferences, then outline the feasibility review and the next steps for planning your charging station.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#32aa15] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: GET IN TOUCH (MATCHING FRANCHISE CINEMATIC DESIGN STYLE) */}
      {/* ========================================================================= */}
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
              <span>GET IN TOUCH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[30px] xs:text-[36px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[0.88] sm:leading-[0.9] lg:leading-[0.92] font-['Plus_Jakarta_Sans',sans-serif]">
              Let’s Power the
              <br />
              <span className="text-[#32aa15]">Future Together.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Have questions, want to invest, or need a charging solution? Our team is here to help. Get in touch with EVOLTEK and let’s build a cleaner, greener tomorrow.
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
                <span className="text-[#32aa15] font-semibold">Contact Us</span>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TWO-COLUMN: FORM (LEFT) + VISIT OUR OFFICE & MAP (RIGHT) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-8 sm:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

            {/* ------------------------------------------------------------------- */}
            {/* LEFT COLUMN: SEND US A MESSAGE FORM */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-lg shadow-slate-200/50">
              {/* Header Label */}
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>SEND US A MESSAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif] mb-2">
                We’d Love to Hear from You.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-5 font-normal">
                Fill out the form below and our team will get back to you shortly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#32aa15] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#32aa15]/25">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Wix_Madefor_Display',sans-serif]">
                    Thank You! Your Enquiry Has Been Submitted
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    An Evoltek partnership specialist will contact you shortly regarding your enquiry.
                  </p>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-[#32aa15] text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  {/* Full Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name *"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent transition-all bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number *"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent transition-all bg-white"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address *"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent transition-all bg-white"
                    />
                  </div>

                  {/* City / Location */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City / Location"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent transition-all bg-white"
                    />
                  </div>

                  {/* I am interested in */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      I am interested in *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200/90 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Franchise Partnership">Franchise Partnership (FOCO / FOFO)</option>
                        <option value="50/50 Joint Investment">50/50 Joint Investment Model</option>
                        <option value="EV Charging Station Setup">Setup EV Charging Station (City / Highway)</option>
                        <option value="Landowner Monetization">Landowner Property Lease / Monetization</option>
                        <option value="Fleet Charging Solutions">Fleet & Commercial Fleet Charging</option>
                        <option value="General Enquiry">General / Customer Support Enquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your requirements..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#32aa15] focus:border-transparent transition-all bg-white resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] active:scale-[0.99] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg shadow-[#15803d]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      <span>{submitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: VISIT OUR OFFICE + FIND US ON MAP */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-6 space-y-5">

              {/* CARD 1: VISIT OUR OFFICE (Crisp Image Card with No White Overlay) */}
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-stretch min-h-[230px]">
                {/* Left Content (Text & Contact Items) */}
                <div className="w-full sm:w-[54%] p-5 sm:p-6 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <span>OUR OFFICE</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif] mb-2">
                      Visit Our Office
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                      Come and meet our team to learn more about our solutions, investment opportunities, and partnerships.
                    </p>
                  </div>

                  {/* Contact Detail Badges */}
                  <div className="space-y-2.5 pt-1">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <MapPin className="w-4 h-4 text-[#00c04b]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Address</p>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          Hyderabad, Telangana, India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Phone className="w-4 h-4 text-[#00c04b]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Phone</p>
                        <a
                          href="tel:+919392664710"
                          className="text-xs text-slate-600 hover:text-[#15803d] font-bold leading-relaxed transition-colors"
                        >
                          +91 93926 64710
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Mail className="w-4 h-4 text-[#00c04b]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Email</p>
                        <a
                          href="mailto:info@evoltek.in"
                          className="text-xs text-slate-600 hover:text-[#15803d] font-bold leading-relaxed transition-colors"
                        >
                          info@evoltek.in
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e8fbf0] text-[#00c04b] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Clock className="w-4 h-4 text-[#00c04b]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Working Hours</p>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          Mon - Sat | 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Building Image (Crisp, No white overlay) */}
                <div className="w-full sm:w-[46%] min-h-[220px] sm:min-h-full relative overflow-hidden bg-slate-100">
                  <img
                    src="/evoltek_hq_office.jpg"
                    alt="Evoltek Headquarters Office Building"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* CARD 2: FIND US ON MAP (Normal Google Maps Embed) */}
              <div className="relative h-[260px] sm:h-[280px] overflow-hidden rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/50 bg-slate-100">
                {/* Map Display Container with standard Google Maps & EVOLTEK Pin */}
                <div className="relative h-full w-full overflow-hidden group">
                  <iframe
                    title="Evoltek Hyderabad Office Map"
                    src="https://www.google.com/maps?q=17.4435,78.3772&z=14&output=embed"
                    className="absolute inset-0 block h-full w-full border-0 pointer-events-auto"
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  {/* Branded EVOLTEK Pin Overlay in Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                      {/* Brand Label Pill */}
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15803d] text-white shadow-xl shadow-black/40 border border-white/50">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse" />
                        <span className="text-xs sm:text-sm font-black tracking-wider font-['Wix_Madefor_Display',sans-serif]">
                          EVOLTEK
                        </span>
                        <span className="text-[11px] font-medium text-emerald-100">Hyderabad</span>
                      </div>
                      {/* Pin Pointer Arrow */}
                      <div className="w-3 h-3 bg-[#15803d] rotate-45 -mt-1.5 shadow-md border-r border-b border-white/40" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (2-COLUMN ACCORDION) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[#32aa15] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span>COMMON QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#1C2029] tracking-tight leading-[1.15] sm:leading-[1.18] font-['Wix_Madefor_Display',sans-serif]">
                Frequently Asked <span className="text-[#32aa15]">Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Quick answers to common questions. Can’t find what you’re looking for?{' '}
                <a href="#contact-form" className="text-[#15803d] font-semibold hover:underline">
                  Contact us.
                </a>
              </p>
            </div>


          </div>

          {/* 2-Column FAQs Grid (4 on left, 4 on right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Left Column (Indices 0-3) */}
            <div className="space-y-4">
              {faqsLeft.map((faq, idx) => {
                const isOpen = !!openFaqs[idx];
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-slate-900 hover:text-[#15803d] font-semibold text-sm sm:text-base cursor-pointer transition-colors"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column (Indices 4-7) */}
            <div className="space-y-4">
              {faqsRight.map((faq, idx) => {
                const globalIdx = idx + faqsLeft.length;
                const isOpen = !!openFaqs[globalIdx];
                return (
                  <div
                    key={globalIdx}
                    className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-slate-900 hover:text-[#15803d] font-semibold text-sm sm:text-base cursor-pointer transition-colors"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. BOTTOM CALL-TO-ACTION BANNER ("Ready to Invest in the Future of Mobility?")
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

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
                Partner with EVOLTEK and build a profitable, sustainable EV charging business.
              </p>

              <div className="flex flex-nowrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => openModalWithOption?.('Partner With Us')}
                  className="inline-flex min-w-0 items-center justify-center gap-1.5 px-3 py-2 sm:gap-2 sm:px-6 sm:py-3 rounded-full bg-[#32aa15] hover:bg-[#288c10] text-white text-[10px] sm:text-sm font-bold shadow-lg hover:shadow-[#32aa15]/40 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Partner With Us</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={() => openModalWithOption?.('Download Brochure')}
                  className="inline-flex min-w-0 items-center justify-center gap-1.5 px-3 py-2 sm:gap-2 sm:px-5 sm:py-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 text-[10px] sm:text-sm font-bold backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Download Brochure</span>
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </button>
              </div>
            </div>



          </div>

        </div>
      </section>

    </div>
  );
};
