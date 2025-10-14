// app/contact/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import e from "../../Assests/e.png"
import call from "../../Assests/call.png"
import whatsapp from "../../Assests/whatsapp.png"
import logo from "../../Assests/logo.jpeg";
import Link from "next/link";
import { Instagram, Facebook, Music2, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const WHATSAPP_NUMBER_INTL = "23057526968"; // no + and no spaces
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=Hi!%20I%27d%20like%20to%20book%20a%20tour.`;


  // lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // simple reveal on scroll (matches home page pattern)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const faqs = [
    {
      q: "How do I book a tour?",
      a: "Send us a WhatsApp message or call us with your preferred date, pickup point, and number of guests. We’ll confirm availability and share payment options."
    },
    {
      q: "What's included in the tour price?",
      a: "Private vehicle with experienced driver, hotel pickup/drop-off, fuel, and parking. Attraction tickets and meals are usually not included unless specified."
    },
    {
      q: "Can tours be customized?",
      a: "Yes. We happily tailor itineraries to your schedule and interests—family-friendly, photography stops, restaurant choices, and more."
    },
    {
      q: "What if the weather is bad?",
      a: "We monitor forecasts. If weather is unsafe, we’ll reschedule at no cost or suggest safe alternatives for the day."
    },
    {
      q: "How many people can join a tour?",
      a: "Our standard vehicle fits up to 4 passengers comfortably. Bigger groups can be arranged—just let us know the headcount."
    },
    {
      q: "Do you provide airport transfers?",
      a: "Yes, 24/7 airport pickups and drop-offs with flight tracking. Ask for our fixed rates by zone."
    },
  ];

  return (
    <main className="bg-[#082733] text-[#0d1b1e]">
      {/* Top strip */}
      <div className="backdrop-blur-md bg-white/5 text-white">
        <div className="max-w-[1300px] mx-auto px-4 py-2 flex flex-wrap items-start gap-2 sm:gap-3 justify-start sm:justify-between text-[15px]">
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 opacity-95">
  {/* Email */}
  <div className="flex items-center gap-2">
    <img
      src={call.src}
      alt="Email"
      className="w-6 h-6 sm:w-5 sm:h-5 object-contain invert brightness-0"
    />
    <a
      href="mailto:info@mauritiustraveltour.com"
      className="text-white/90 hover:text-white transition"
    >
      info@mauritiustraveltour.com
    </a>
  </div>

  {/* Divider */}
  <span className="opacity-50 hidden sm:inline">•</span>

  {/* Call */}
  <div className="flex items-center gap-2">
    <img
      src={e.src}
      alt="Call"
      className="w-6 h-6 sm:w-5 sm:h-5 object-contain invert brightness-0"
    />
    <a
      href="tel:+23057526968"
      className="text-white/90 hover:text-white transition"
    >
      +230 5752 6968
    </a>
  </div>
</div>
<a
  className="inline-flex items-center gap-2 text-white/95 hover:text-white"
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
>
  <img
    src={whatsapp.src}
    alt="WhatsApp"
    width={20}
    height={20}
    className="inline-block w-6 h-6 sm:w-5 sm:h-5"
  />
  Whatsapp Us
</a>
        </div>
      </div>

      {/* Glassy rounded navbar */}
      <div className="relative z-[60]">
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-5
            w-[min(1180px,calc(100%-28px))]
            flex justify-end items-center gap-5 rounded-xl pr-1 text-white
            border border-white/80 bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,.25)]
          "
        >
          <div className="pointer-events-none absolute left-4 right-4 top-[54px] h-px bg-white/70/80 opacity-80" />
          <div className="w-[70px] h-[70px] absolute left-[-18px]">
            <img
              src={logo.src}
              alt="Logo"
              className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/80 bg-white"
            />
          </div>

          <div className="flex items-center gap-40">
            {/* Desktop nav */}
            <nav className="hidden md:flex justify-center gap-[clamp(24px,5vw,48px)] font-medium">
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/">Home</Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/#about">About</Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/#tours">Tours</Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/#transfer">Airport Transfers</Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/ContactUs">Contact</Link>
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/#book"
              className="hidden md:inline-flex items-center justify-center rounded-xl font-semibold px-5 py-1 my-1 min-w-[126px] bg-[#1ad1a3] text-[#083438] border-2 border-white/80 hover:brightness-110 transition"
            >
              Book Now <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden ml-auto inline-flex items-center justify-center rounded-full  px-3 py-2"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div className="relative z-[1000] flex h-full w-full flex-col items-center justify-center text-white px-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 p-2"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <img src={logo.src} alt="Logo" className="w-[92px] h-[82px] rounded-full object-cover border-2 border-white/80 bg-white mb-6" />

            <nav className="flex flex-col items-center gap-5 text-lg font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
              <Link href="/#about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
              <Link href="/#tours" onClick={() => setMenuOpen(false)} className="hover:underline">Tours</Link>
              <Link href="/#transfer" onClick={() => setMenuOpen(false)} className="hover:underline">Airport Transfers</Link>
              <Link href="/ContactUs" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</Link>
              <Link
                href="/#book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full font-semibold px-5 py-2 min-w-[160px] bg-[#1ad1a3] text-[#083438] border-2 border-white/80 shadow-[0_6px_20px_rgba(0,0,0,.25)] hover:brightness-110 transition"
              >
                Book Now <span className="ml-1">›</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="pt-[120px] pb-6 text-white">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl text-blue-400 font-bold">Get In Touch</h1>
          <p className="mt-2 text-white/85 max-w-[89ch] mx-auto">
            Ready to explore Mauritius? Contact us to discuss your dream tour, ask questions, or get <br /> personalized recommendations.
            We’re here to help you create unforgettable memories.
          </p>
        </div>
      </section>

      {/* Main two column cards */}
      <section id="contact" className="pb-10">
        <div className="max-w-[1100px] mx-auto px-4 grid gap-5 md:grid-cols-2 items-start">
          {/* Left column */}
          <div className="space-y-5">
            {/* WhatsApp card */}
            <div className="rounded-xl bg-[#22c55e] text-white p-5 shadow-[0_12px_28px_rgba(0,0,0,.25)]">
              <div className="flex items-center gap-2 text-[17px] font-semibold">
                <span>🟢</span>
                <span>WhatsApp – Fastest Response</span>
              </div>
              <p className="mt-2 text-white/95 text-[14.5px]">
                Get instant replies and share photos of places you’d like to visit. Available 24/7 for your convenience.
              </p>

              {/* fake input pill like screenshot */}
              <a
                href="#"
                className="mt-3 inline-flex w-[220px] h-[38px] items-center justify-center rounded-full bg-white text-[#14532d] font-medium"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Alternative contact methods */}
            <div className="rounded-xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,.18)]">
              <h3 className="text-blue-400 text-xl font-semibold">Alternative Contact Methods</h3>

              <div className="mt-4 space-y-4 text-[15px] text-[#0b1e21]">
                <div className="flex gap-3">
                  <Phone size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Phone Call</div>
                    <a href="tel:+23057526968" className="text-blue-400 hover:underline">+230 5752 6968</a>
                    <div className="text-[13px] text-[#527177]">Available daily 6:00 AM – 8:00 PM</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:info@mauritiustraveltour.com" className="text-blue-400 hover:underline">info@mauritiustraveltour.com</a>
                    <div className="text-[13px] text-[#527177]">Response within 2 hours during business hours</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-blue-400">Flic en Flac, West Coast</div>
                    <div className="text-[13px] text-blue-400">Mauritius, Indian Ocean</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={18} className="mt-[3px]" />
                  <div>
                    <div className="font-medium">Operating Hours</div>
                    <div className="text-blue-400">Daily: 6:00 AM – 8:00 PM</div>
                    <div className="text-[13px] text-blue-400">WhatsApp available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* FAQ accordion */}
            <div className="rounded-xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,.18)]">
              <h3 className="text-2xl text-blue-400 font-semibold">Frequently Asked Questions</h3>

              <div className="mt-3 divide-y divide-[#e8f0f1]">
                {faqs.map((item, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={i}>
                      <button
                        className="w-full flex items-center justify-between gap-4 py-3 text-left"
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                      >
                        <span className="text-[15px] text-[#0b1e21]">{item.q}</span>
                        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} size={18} />
                      </button>
                      {open && (
                        <div className="pb-3 pt-1 text-[14px] text-[#33575c]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <a
                href="#"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#f0d7ac] text-[#6b4b1b] py-3 text-[14.5px] font-medium"
              >
                Have a different question? <span className="ml-1 underline">Contact us directly</span>
              </a>
            </div>

            {/* Quick information card */}
            <div className="rounded-xl bg-[#f3e5c7] text-[#1b2b2e] p-5 shadow-[0_10px_24px_rgba(0,0,0,.18)]">
              <h4 className="sr-only">Quick Information</h4>
              <div className="grid gap-4 sm:grid-cols-2 text-[14.5px]">
                <div>
                  <div className="text-[#6d5530] text-[13px] uppercase tracking-wide">Languages:</div>
                  <div>English, French, Creole</div>
                  <div className="mt-3 text-[#6d5530] text-[13px] uppercase tracking-wide">License:</div>
                  <div>Experienced Driver</div>
                </div>
                <div>
                  <div className="text-[#6d5530] text-[13px] uppercase tracking-wide">Vehicle:</div>
                  <div>7-seater, air-conditioned</div>
                  <div className="mt-3 text-[#6d5530] text-[13px] uppercase tracking-wide">Authenticity:</div>
                  <div>Born in Mauritius</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (same as home) */}
      
     <footer id="contact" data-animate="fade" className="bg-[#071f24] text-[#cfe]">
      <div
        className="
          mx-auto w-full max-w-[1300px] 2xl:max-w-[1400px]
          px-6 py-12
          grid gap-8 md:gap-10
          grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.2fr]
          justify-items-center md:justify-items-start
          text-center md:text-left
          items-start
        "
      >
        {/* Left Section */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-3">Keep in Touch</h3>
          <h2 className="text-[#3ec6c3] text-3xl font-bold mb-4">Travel With Us</h2>

          <div className="flex items-center justify-center md:justify-start mb-4">
            <img src={logo.src} alt="Mauritius Logo" className="w-16 h-16 rounded-full mr-3 object-cover" />
          </div>

          <p className="text-sm leading-5 text-white max-w-md mx-auto md:mx-0">
            Welcome to Island Ride, your trusted partner of <br /> more than 10 years in transportation services{" "}
            <br /> across the breathtaking landscapes of Mauritius. <br /> With a commitment to exceptional service,{" "}
            <br /> reliability, and passenger satisfaction, we stand as <br /> a leading taxi company.
          </p>

          <div className="mt-5 flex items-center justify-center md:justify-start space-x-4">
            <span className="text-white font-medium">Follow Us</span>
            <div className="flex space-x-3 text-xl">
              <a href="#" className="hover:text-[#3ec6c3] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#3ec6c3] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#3ec6c3] transition-colors" aria-label="TikTok">
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:pt-3">
          <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#tours" className="hover:underline">Tour</a>
            </li>
            <li>
              <a href="#transfer" className="hover:underline">Airport Transfer</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="md:pt-3">
          <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        {/* Communication */}
        <div className="md:pt-3">
          <h4 className="text-[#3ec6c3] mb-3 text-lg font-semibold">Communication</h4>
          <ul className="space-y-2 whitespace-nowrap">
  <li>
    <span className="inline-flex items-center gap-2">
      <img
        src={call.src}
        alt="Email"
        className="w-6 h-6 sm:w-5 sm:h-5 object-contain invert brightness-0"
      />
      <a href="mailto:info@mauritiustraveltour.com" className="hover:underline">
        info@mauritiustraveltour.com
      </a>
    </span>
  </li>
  <li>
    <span className="inline-flex items-center gap-2">
      <img
        src={e.src}
        alt="Call"
        className="w-6 h-6 sm:w-5 sm:h-5 object-contain invert brightness-0"
      />
      <a href="tel:+23057526968" className="hover:underline">
        +230 5752 6968
      </a>
    </span>
  </li>
</ul>
        </div>
      </div>
    </footer>
      {/* reveal + small tweaks */}
      <style>{`
        [data-animate] { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
        [data-animate].in-view { opacity: 1; transform: translateY(0); }

        @media (max-width: 780px){ .brand strong{ display: none; } }
      `}</style>
    </main>
  );
}
