import React, { useState } from "react";
import {
  TrendingUp,
  ShieldCheck,
  Handshake,
  Users,
  Clock,
  MapPin,
  Phone,
  X,
  CheckCircle,
  ArrowRight,
  Calendar,
} from "lucide-react";

export default function App() {
  // Website kholte hi Location Popup dikhane ke liye state
  const [showLocationModal, setShowLocationModal] = useState(true);

  // Inquiry Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plan: "10 Days Duration — As Per The Market Rate",
  });
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      days: 10,
      label: "Starter Plan",
      desc: "Short-term flexible investment option",
    },
    {
      days: 20,
      label: "Growth Plan",
      desc: "Balanced medium-term trading plan",
    },
    {
      days: 30,
      label: "Pro Wealth Plan",
      desc: "Complete monthly wealth growth plan",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: "",
      phone: "",
      plan: "10 Days Duration — As Per The Market Rate",
    });
  };

  return (
    <div className="min-h-screen bg-[#060B19] text-white font-sans">
      {/* OPENING LOCATION POPUP MODAL */}
      {showLocationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0D1630] border-2 border-amber-400 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-amber-400"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="bg-amber-400/20 p-2.5 rounded-full text-amber-400">
                <MapPin size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">
                  Our Office Location
                </h3>
                <p className="text-xs text-gray-300">
                  Shree Kashi Trading Company (SKT)
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-200 mb-4 bg-[#060B19] p-3 rounded-lg border border-blue-900">
              <strong>Address:</strong> A Wing, 10th Floor, Office No. 1006,
              Lokmat Bhawan, Nagpur, Maharashtra
            </p>

            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden border border-amber-400/50 h-52 mb-4">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Lokmat+Bhawan,+Nagpur,+Maharashtra&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex gap-3">
              <a
                href="https://maps.google.com/?q=Lokmat+Bhawan,+Nagpur,+Maharashtra"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2.5 rounded-lg text-center text-sm transition"
              >
                Open in Google Maps
              </a>
              <button
                onClick={() => setShowLocationModal(false)}
                className="px-5 py-2.5 bg-blue-900/60 hover:bg-blue-800 rounded-lg text-sm font-medium transition"
              >
                Explore Website
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-[#060B19]/95 backdrop-blur border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-amber-500 to-yellow-300 text-black font-extrabold text-xl px-3 py-1.5 rounded-lg shadow">
              SKT
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-amber-400 leading-tight">
                Shree Kashi Trading Company
              </h1>
              <p className="text-[11px] text-gray-400 tracking-wider uppercase">
                Trade • Grow • Prosper
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-amber-400 transition">
              Home
            </a>
            <a href="#plans" className="hover:text-amber-400 transition">
              Investment Plans
            </a>
            <a href="#features" className="hover:text-amber-400 transition">
              Why Us
            </a>
            <a href="#location" className="hover:text-amber-400 transition">
              Location & Contact
            </a>
          </div>

          <button
            onClick={() => setShowLocationModal(true)}
            className="flex items-center gap-1.5 bg-amber-400/10 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-3.5 py-2 rounded-lg text-xs font-semibold transition"
          >
            <MapPin size={16} />
            View Location
          </button>
        </div>
      </nav>

      {/* HERO SECTION WITH BULL IMAGE */}
      <section
        id="home"
        className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-[#0C1938] to-[#060B19] border-b border-amber-500/10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Content */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-amber-400/10 border border-amber-400/40 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              Your Trusted Partner in Financial Growth
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              “Invest Today...{" "}
              <span className="text-amber-400">Secure Tomorrow...”</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-200 italic mb-8">
              Because Your Financial Freedom Matters...
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#plans"
                className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold px-7 py-3.5 rounded-xl shadow-lg hover:scale-105 transition flex items-center gap-2"
              >
                Start Your Investment Journey <ArrowRight size={18} />
              </a>
              <a
                href="#location"
                className="bg-blue-950 border border-blue-700 hover:border-amber-400 text-white font-semibold px-7 py-3.5 rounded-xl transition"
              >
                Visit Nagpur Office
              </a>
            </div>
          </div>

          {/* Right Side Bull Image (public/hero-bull.jpg) */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl shadow-amber-500/10 max-w-md w-full">
              <img
                src="/hero-bull.jpg"
                alt="Shree Kashi Trading Company Bull"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT PLANS SECTION (As Per The Market Rate) */}
      <section id="plans" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-amber-400 mb-2">
            Amazing Returns On Your Capital
          </h3>
          <p className="text-gray-400 text-sm">
            Choose an investment tenure tailored to your financial goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.days}
              className="bg-gradient-to-b from-[#101C3D] to-[#0A1124] border border-amber-400/30 hover:border-amber-400 rounded-2xl p-7 text-center shadow-xl transition transform hover:-translate-y-1"
            >
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                {plan.label}
              </span>
              <h4 className="text-2xl font-bold text-white mt-2 flex items-center justify-center gap-2">
                <Calendar className="text-amber-400" size={22} />
                {plan.days} Days Duration
              </h4>
              <div className="my-6 py-5 px-3 bg-[#060B19] rounded-xl border border-blue-900">
                <span className="text-xl md:text-2xl font-extrabold text-amber-400 block">
                  As Per The Market Rate
                </span>
                <p className="text-xs text-gray-400 mt-1.5">Return Policy</p>
              </div>
              <p className="text-xs text-gray-400 mb-5">{plan.desc}</p>
              <a
                href="#contact-form"
                onClick={() =>
                  setFormData({
                    ...formData,
                    plan: `${plan.days} Days Duration — As Per The Market Rate`,
                  })
                }
                className="block w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition"
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION (5 Highlights) */}
      <section
        id="features"
        className="py-16 px-4 bg-[#0A1229] border-y border-amber-500/10"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-400 mb-10">
            Why Invest With Shree Kashi Trading Company?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: TrendingUp, title: "Attractive Returns" },
              { icon: ShieldCheck, title: "Safe & Secure Trading" },
              { icon: Handshake, title: "Transparent Process" },
              { icon: Users, title: "Expert Guidance" },
              { icon: Clock, title: "Flexible Duration" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#060B19] border border-blue-900/80 p-5 rounded-xl text-center hover:border-amber-400/60 transition"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-400/15 text-amber-400 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-sm text-gray-100">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section id="location" className="py-16 px-4 bg-[#091126]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left: Office Details & Map */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2">
              Visit Our Office
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              “Dream Big... Invest Smart... Grow Wealth Together...”
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#060B19] p-4 rounded-xl border border-blue-900 flex items-start gap-3">
                <Users className="text-amber-400 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs text-gray-400">
                    Managing Director / Contact Person
                  </p>
                  <p className="font-bold text-lg text-white">
                    Ram Shankar Gupta
                  </p>
                </div>
              </div>

              <div className="bg-[#060B19] p-4 rounded-xl border border-blue-900 flex items-start gap-3">
                <Phone className="text-amber-400 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs text-gray-400">
                    Mobile Numbers (Click to Call)
                  </p>
                  <div className="flex flex-wrap gap-3 mt-1 font-semibold text-amber-300">
                    <a href="tel:8303302245" className="hover:underline">
                      8303302245
                    </a>
                    <span>|</span>
                    <a href="tel:6306508861" className="hover:underline">
                      6306508861
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#060B19] p-4 rounded-xl border border-blue-900 flex items-start gap-3">
                <MapPin className="text-amber-400 shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs text-gray-400">Office Address</p>
                  <p className="text-sm text-gray-200 mt-0.5">
                    A Wing, 10th Floor, Office No. 1006, Lokmat Bhawan, Nagpur,
                    Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Live Google Map */}
            <div className="rounded-xl overflow-hidden border border-amber-400/40 h-60">
              <iframe
                title="Shree Kashi Trading Company Location"
                src="https://www.google.com/maps?q=Lokmat+Bhawan,+Nagpur,+Maharashtra&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Callback / Inquiry Form */}
          <div
            id="contact-form"
            className="bg-[#060B19] border border-amber-400/30 rounded-2xl p-6 md:p-8 h-fit"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Request a Callback
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Fill in your details and our team will guide you step-by-step.
            </p>

            {submitted && (
              <div className="mb-4 p-3 rounded-lg bg-green-500/20 border border-green-500 text-green-300 text-sm flex items-center gap-2">
                <CheckCircle size={18} /> Thank you! Ram Shankar Gupta's team
                will contact you shortly.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#0D1630] border border-blue-900 focus:border-amber-400 rounded-xl px-4 py-3 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#0D1630] border border-blue-900 focus:border-amber-400 rounded-xl px-4 py-3 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Preferred Investment Plan
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) =>
                    setFormData({ ...formData, plan: e.target.value })
                  }
                  className="w-full bg-[#0D1630] border border-blue-900 focus:border-amber-400 rounded-xl px-4 py-3 text-sm outline-none"
                >
                  <option value="10 Days Duration — As Per The Market Rate">
                    10 Days Duration → As Per The Market Rate
                  </option>
                  <option value="20 Days Duration — As Per The Market Rate">
                    20 Days Duration → As Per The Market Rate
                  </option>
                  <option value="30 Days Duration — As Per The Market Rate">
                    30 Days Duration → As Per The Market Rate
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold py-3.5 rounded-xl hover:opacity-95 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 text-center text-xs text-gray-500 border-t border-blue-950">
        © {new Date().getFullYear()} Shree Kashi Trading Company (SKT). All
        Rights Reserved.
      </footer>
    </div>
  );
}
