// src/app/Components/Navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ adjust these paths if your component lives elsewhere
import call from "../../Assests/call.png";
import e from "../../Assests/e.png";
import whatsapp from "../../Assests/whatsapp.png";
import logo from "../../Assests/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const WHATSAPP_NUMBER_INTL = "23057526968"; // no + and no spaces
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=Hi!%20I%27d%20like%20to%20book%20a%20tour.`;

  return (
    <>
      {/* Top strip (hidden on mobile) */}
      <div className="backdrop-blur-md bg-white/5 text-white hidden sm:block">
        <div className="max-w-[1300px] mx-auto px-4 py-2 flex flex-wrap items-start gap-2 sm:gap-3 justify-start sm:justify-between text-[15px]">
          <div className="flex items-center flex-wrap gap-2 sm:gap-6 opacity-95">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Image
                src={call}
                alt="Email"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
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
              <Image
                src={e}
                alt="Call"
                width={20}
                height={20}
                className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
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
            <Image
              src={whatsapp}
              alt="WhatsApp"
              width={20}
              height={20}
              className="inline-block w-6 h-6 sm:w-5 sm:h-5"
            />
            Whatsapp Us
          </a>
        </div>
      </div>

      {/* Glassy rounded navbar centered over hero */}
      <div className="relative z-[60]">
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-5
            w-[min(1180px,calc(100%-28px))]
            flex justify-end items-center gap-5
            rounded-xl pr-1 text-white
            border border-white/80 bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,.25)]
          "
        >
          {/* thin inner hairline */}
          <div className="pointer-events-none absolute left-4 right-4 top-[54px] h-px bg-white/70/80 opacity-80" />

          <div className="w-[70px] h-[70px] absolute left-[-18px]">
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={70}
              className="w-[70px] h-[70px] rounded-full object-cover border-2 border-white/80 bg-white"
            />
          </div>

          <div className="flex items-center md:gap-18 lg:gap-40">
            {/* Desktop nav */}
            <nav className="hidden md:flex justify-center gap-4 lg:gap-[clamp(24px,5vw,48px)] font-medium">
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/">
                Home
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#about">
                About
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#tours">
                Tours
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#transfer">
                Airport Transfers
              </Link>
              <Link className="md:px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/ContactUs">
                Contact
              </Link>
            </nav>

            {/* Desktop Book Now */}
            <Link
              href="#book"
              className="
                hidden md:inline-flex items-center justify-center rounded-xl font-semibold
                px-5 py-1 my-1 min-w-[126px]
                bg-[#1ad1a3] text-[#083438]
                border-2 border-white/80
                hover:brightness-110 transition
              "
            >
              Book Now <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden ml-auto inline-flex items-center justify-center rounded-full px-3 py-2"
            aria-label="Open menu"
          >
            <span className="sr-only">Open menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          {/* dark blur layer */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          {/* menu panel */}
          <div className="relative z-[1000] flex h-full w-full flex-col items-center justify-center text-white px-6">
            {/* close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 p-2"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* logo */}
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="w-[92px] h-[82px] rounded-full object-cover border-2 border-white/80 bg-white mb-6"
            />

            <nav className="flex flex-col items-center gap-5 text-lg font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">
                Home
              </Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:underline">
                About
              </Link>
              <Link href="#tours" onClick={() => setMenuOpen(false)} className="hover:underline">
                Tours
              </Link>
              <Link href="#transfer" onClick={() => setMenuOpen(false)} className="hover:underline">
                Airport Transfers
              </Link>
              <Link href="/ContactUs" onClick={() => setMenuOpen(false)} className="hover:underline">
                Contact
              </Link>
              <Link
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full font-semibold
                  px-5 py-2 min-w-[160px]
                  bg-[#1ad1a3] text-[#083438]
                  border-2 border-white/80 shadow-[0_6px_20px_rgba(0,0,0,.25)]
                  hover:brightness-110 transition"
              >
                Book Now <span className="ml-1">›</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
