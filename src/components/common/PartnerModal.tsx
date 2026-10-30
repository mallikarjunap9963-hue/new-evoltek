import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Building2, MapPin, Zap, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

interface PartnerModalProps {
  partnerModalOpen: boolean;
  setPartnerModalOpen: (open: boolean) => void;
  modalOption: string;
  setModalOption: (option: string) => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  partnerModalOpen,
  setPartnerModalOpen,
  modalOption,
  setModalOption
}) => {
  // Tab state: 'franchise' (Franchise Partner Form) or 'landowner' (Landowner Host Form)
  const [activeTab, setActiveTab] = useState<'franchise' | 'landowner'>('franchise');

  // Form 1: Franchise Partner State
  const [franchiseForm, setFranchiseForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    investmentRange: '₹25 Lakhs – ₹50 Lakhs',
    landStatus: 'Own Land Available',
    notes: ''
  });

  // Form 2: Landowner Partner State
  const [landownerForm, setLandownerForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyLocation: '',
    propertyType: 'Highway Dhaba / Restaurant',
    spaceAvailable: '2 – 4 Parking Bays (~1,000 sq ft)',
    powerStatus: '3-Phase Power Available',
    revenuePreference: 'Fixed Monthly Rental',
    notes: ''
  });

  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    type: string;
  }>({ name: '', phone: '', type: '' });

  // Sync tab with initial modal option when opened
  useEffect(() => {
    if (modalOption.toLowerCase().includes('land')) {
      setActiveTab('landowner');
    } else {
      setActiveTab('franchise');
    }
  }, [modalOption]);

  if (!partnerModalOpen) return null;

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({
      name: franchiseForm.name,
      phone: franchiseForm.phone,
      type: 'Franchise Partner'
    });
    setModalSubmitted(true);
  };

  const handleLandownerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({
      name: landownerForm.name,
      phone: landownerForm.phone,
      type: 'Landowner Partnership'
    });
    setModalSubmitted(true);
  };

  const handleResetAndClose = () => {
    setModalSubmitted(false);
    setPartnerModalOpen(false);
    setFranchiseForm({
      name: '',
      phone: '',
      email: '',
      city: '',
      investmentRange: '₹25 Lakhs – ₹50 Lakhs',
      landStatus: 'Own Land Available',
      notes: ''
    });
    setLandownerForm({
      name: '',
      phone: '',
      email: '',
      propertyLocation: '',
      propertyType: 'Highway Dhaba / Restaurant',
      spaceAvailable: '2 – 4 Parking Bays (~1,000 sq ft)',
      powerStatus: '3-Phase Power Available',
      revenuePreference: 'Fixed Monthly Rental',
      notes: ''
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setPartnerModalOpen(false)}
    >
      <div
        className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[92vh] md:h-[min(92vh,760px)] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <aside className="relative hidden md:flex md:w-[40%] lg:w-[42%] shrink-0 flex-col justify-between overflow-hidden bg-[#102c2e] p-7 lg:p-9 text-white">
          <img
            src="/breadcrumb.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[66%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/15 to-[#06251c]/95" />

          <div className="relative z-10">
            <img src="/logo.png" alt="Evoltek" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>

          <div className="relative z-10 mt-auto">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8df36f]">
              Clean energy. Better opportunities.
            </p>
            <h2 className="max-w-sm text-3xl lg:text-4xl font-black leading-[1.08] tracking-tight">
              Partner With <span className="text-[#8df36f]">Evoltek Network</span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
              Be part of India’s growing EV charging network and build a sustainable future together.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/20 pt-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#32aa15]/70 bg-[#32aa15]/20 text-[#8df36f]">
                  <Building2 className="h-4 w-4" />
                </span>
                Growing EV market
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#32aa15]/70 bg-[#32aa15]/20 text-[#8df36f]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Turnkey support
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#32aa15]/70 bg-[#32aa15]/20 text-[#8df36f]">
                  <Zap className="h-4 w-4" />
                </span>
                Reliable charging
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#32aa15]/70 bg-[#32aa15]/20 text-[#8df36f]">
                  <PhoneCall className="h-4 w-4" />
                </span>
                Long-term growth
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="relative h-28 shrink-0 overflow-hidden md:hidden">
            <img
              src="/breadcrumb.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-[66%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-slate-950/10" />
            <img
              src="/logo.png"
              alt="Evoltek"
              className="absolute left-5 top-1/2 h-9 w-auto -translate-y-1/2 object-contain brightness-0 invert"
            />
          </div>
          <div className="relative shrink-0 border-b border-slate-100 bg-white px-5 pb-4 pt-5 sm:px-7 sm:pt-7">
            <button
              onClick={() => setPartnerModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 pr-10 text-[10px] font-bold uppercase tracking-[0.18em] text-[#218d12] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span>Franchise Opportunity Portal</span>
            </div>
            <h3 className="mt-2 pr-8 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Start Your <span className="text-[#168f30]">{activeTab === 'franchise' ? 'Franchise' : 'Landowner'} Journey</span>
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Fill in your details and our team will get in touch with you.
            </p>

            {!modalSubmitted && (
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('franchise');
                    setModalOption('Franchise Opportunity');
                  }}
                  className={`flex min-w-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all cursor-pointer ${
                    activeTab === 'franchise'
                      ? 'border-[#32aa15] bg-[#32aa15] text-white shadow-md shadow-[#32aa15]/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#32aa15]/50'
                  }`}
                >
                  <Building2 className="h-5 w-5 shrink-0" />
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-bold sm:text-sm">Franchise Partner</span>
                    <span className={`hidden truncate text-[10px] sm:block ${activeTab === 'franchise' ? 'text-white/80' : 'text-slate-500'}`}>
                      Set up an EV charging station
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('landowner');
                    setModalOption('Landowner Partnership');
                  }}
                  className={`flex min-w-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all cursor-pointer ${
                    activeTab === 'landowner'
                      ? 'border-[#32aa15] bg-[#32aa15] text-white shadow-md shadow-[#32aa15]/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-[#32aa15]/50'
                  }`}
                >
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-bold sm:text-sm">Landowner Partner</span>
                    <span className={`hidden truncate text-[10px] sm:block ${activeTab === 'landowner' ? 'text-white/80' : 'text-slate-500'}`}>
                      Monetize your vacant land
                    </span>
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Modal Scrollable Body */}
          <div className="min-h-0 flex-1 overflow-y-auto p-5 text-slate-800 sm:p-7">
          {modalSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-[#32aa15] rounded-full flex items-center justify-center mx-auto shadow-inner animate-in zoom-in-50 duration-300">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-[#32aa15]/10 text-[#32aa15] rounded-full text-xs font-bold uppercase tracking-wider">
                  Application Confirmed
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Thank You, {submittedData.name}!
                </h4>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your <strong>{submittedData.type}</strong> application has been successfully submitted.
                </p>
              </div>

              {/* Follow-up Note Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <PhoneCall className="w-4 h-4 text-[#32aa15]" />
                  <span>Next Steps (Within 24 Hours):</span>
                </div>
                <p>
                  1. Our EV Infrastructure Feasibility specialist will call you at <strong className="text-slate-900">{submittedData.phone}</strong>.
                </p>
                <p>
                  2. We will share location footfall metrics, projected ROI models, and equipment sanction details.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm rounded-full shadow-lg shadow-[#32aa15]/20 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* FORM 1: FRANCHISE PARTNER FORM */}
              {activeTab === 'franchise' && (
                <form onSubmit={handleFranchiseSubmit} className="space-y-3">
                  <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-700">
                    <Zap className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                    <span>
                      <strong>Franchise Co-Investment Model:</strong> Evoltek funds 50% of the hardware and project cost with turnkey setup & management.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={franchiseForm.name}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={franchiseForm.phone}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={franchiseForm.email}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Target City / Region *
                      </label>
                      <input
                        type="text"
                        required
                        value={franchiseForm.city}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, city: e.target.value }))}
                        placeholder="e.g. Bangalore, Hyderabad, Pune Highway"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Planned Investment Range
                      </label>
                      <select
                        value={franchiseForm.investmentRange}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, investmentRange: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs (Dual DC Fast Charger)</option>
                        <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore (Multi-Gun Highway Station)</option>
                        <option value="₹1 Crore+">₹1 Crore+ (Mega EV Hub with Cafeteria)</option>
                        <option value="Flexible / Need Guidance">Flexible / Need Guidance</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Site / Land Readiness
                      </label>
                      <select
                        value={franchiseForm.landStatus}
                        onChange={(e) => setFranchiseForm((prev) => ({ ...prev, landStatus: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="Own Land Available">I own suitable land / commercial property</option>
                        <option value="Leased Site Ready">I have leased land ready for EV setup</option>
                        <option value="Need Evoltek Site Selection">Need Evoltek assistance for location & setup</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Additional Message / Experience (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={franchiseForm.notes}
                      onChange={(e) => setFranchiseForm((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Tell us about your business background or target highway/city location..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#32aa15]/25 transition-all cursor-pointer active:scale-98"
                  >
                    <span>Submit Franchise Application</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}

              {/* FORM 2: LANDOWNER PARTNER FORM */}
              {activeTab === 'landowner' && (
                <form onSubmit={handleLandownerSubmit} className="space-y-3">
                  <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-[#32aa15] shrink-0 mt-0.5" />
                    <span>
                      <strong>Host an EV Station:</strong> Transform idle land or parking bays into steady monthly revenue with zero equipment investment.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Property Owner / Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={landownerForm.name}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Suresh Kumar"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={landownerForm.phone}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={landownerForm.email}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="suresh@example.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Property Location / Highway *
                      </label>
                      <input
                        type="text"
                        required
                        value={landownerForm.propertyLocation}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, propertyLocation: e.target.value }))}
                        placeholder="e.g. NH-44 near toll plaza, or City Prime Road"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Property Type
                      </label>
                      <select
                        value={landownerForm.propertyType}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, propertyType: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="Highway Dhaba / Restaurant">Highway Dhaba / Food Court / Restaurant</option>
                        <option value="Petrol Pump / Fuel Outlet">Petrol Pump / Fuel Station</option>
                        <option value="Commercial Complex / Mall / Hotel">Commercial Complex / Mall / Hotel</option>
                        <option value="Open Highway Land Parcel">Open Highway Roadside Land Parcel</option>
                        <option value="City Parking Lot / Commercial Plot">City Parking Lot / Commercial Plot</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Available Area
                      </label>
                      <select
                        value={landownerForm.spaceAvailable}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, spaceAvailable: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="2 – 4 Parking Bays (~1,000 sq ft)">2 – 4 Parking Bays (~1,000 sq ft)</option>
                        <option value="5 – 10 Parking Bays (~2,500 sq ft)">5 – 10 Parking Bays (~2,500 sq ft)</option>
                        <option value="Large Land Parcel (0.25 - 1+ Acre)">Large Land Parcel (0.25 – 1+ Acre)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Power / Grid Connection
                      </label>
                      <select
                        value={landownerForm.powerStatus}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, powerStatus: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="3-Phase Power Available">Commercial 3-Phase Power Available</option>
                        <option value="Dedicated Transformer on Site">Dedicated HT / LT Transformer on Site</option>
                        <option value="Need Evoltek Power Sanction Support">Need Evoltek Support for Power Connection</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Preferred Earning Model
                      </label>
                      <select
                        value={landownerForm.revenuePreference}
                        onChange={(e) => setLandownerForm((prev) => ({ ...prev, revenuePreference: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium transition-colors"
                      >
                        <option value="Fixed Monthly Rental">Fixed Monthly Land Rental</option>
                        <option value="Revenue Share per Unit">Revenue Share per EV Charging Session</option>
                        <option value="Hybrid (Base Rent + Revenue Share)">Hybrid (Base Rent + Revenue Share)</option>
                        <option value="Open to Discussion">Open to Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Property Details & Landmarks (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={landownerForm.notes}
                      onChange={(e) => setLandownerForm((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Share road frontage, nearby amenities, or specific property features..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#32aa15] text-slate-900 text-sm font-medium resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#32aa15] hover:bg-[#288a11] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#32aa15]/25 transition-all cursor-pointer active:scale-98"
                  >
                    <span>Submit Landowner Proposal</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}

              {/* Trust Badges Strip */}
              <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#32aa15]" />
                  <span>50/50 Co-Investment</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <Zap className="w-4 h-4 text-[#32aa15]" />
                  <span>Turnkey Setup & Mgmt</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600">
                  <PhoneCall className="w-4 h-4 text-[#32aa15]" />
                  <span>24hr Quick Callback</span>
                </div>
              </div>
            </>
          )}
        </div>

        </div>
      </div>
    </div>
  );
};
