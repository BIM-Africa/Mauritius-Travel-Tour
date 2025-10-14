// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero from "../../Assests/hero2.png";
import hero1 from "../../Assests/hero.png";
import money from "../../Assests/money.png";
import group from "../../Assests/groups.png";
import timing from "../../Assests/timing.png";
import logo from "../../Assests/logo.jpeg";
import e from "../../Assests/e.png";
import call from "../../Assests/call.png";
import whatsapp from "../../Assests/whatsapp.png";
import join from "../../Assests/join.png";
import fast from "../../Assests/Fast.png";
import servive from "../../Assests/service.png";
import flexible from "../../Assests/Flexible.png";
import Link from "next/link";
import { Instagram, Facebook, Music2 } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const WHATSAPP_NUMBER_INTL = "23057526968"; // no + and no spaces
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=Hi!%20I%27d%20like%20to%20book%20a%20tour.`;

  // Reveal on scroll (same as first page)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-[#082733] text-[#0d1b1e]">
      {/* Top strip */}
      <div className="backdrop-blur-md bg-white/5 text-white">
        <div className="max-w-[1300px] mx-auto px-4 py-2 flex flex-wrap items-start gap-2 sm:gap-3 justify-start sm:justify-between text-[15px]">
          <div className="flex items-center flex-wrap gap-2 sm:gap-6 opacity-95">
            {/* Email */}
            <div className="flex items-center gap-2">
              <img src={call.src} alt="Email" className="w-6 h-6 sm:w-5 sm:h-5 object-contain invert brightness-0" />
              <a href="mailto:info@mauritiustraveltour.com" className="text-white/90 hover:text-white transition">
                info@mauritiustraveltour.com
              </a>
            </div>

            {/* Divider */}
            <span className="opacity-50 hidden sm:inline">•</span>

            {/* Call */}
            <div className="flex items-center gap-2">
              <img src={e.src} alt="Call" className="w-6 h-6 sm:w-5 sm:h-5 object-contain invert brightness-0" />
              <a href="tel:+23057526968" className="text-white/90 hover:text-white transition">
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
            <img src={whatsapp.src} alt="WhatsApp" width={20} height={20} className="inline-block w-6 h-6 sm:w-5 sm:h-5" />
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
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/">
                Home
              </Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#about">
                About
              </Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#tours">
                Tours
              </Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#transfer">
                Airport Transfers
              </Link>
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/ContactUs">
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
            className="md:hidden ml-auto inline-flex items-center justify-center rounded-full  px-3 py-2"
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

            <img
              src={logo.src}
              alt="Logo"
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

      {/* Hero (typo fixed + mobile CTA width like first page) */}
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero} alt="Mauritius aerial" fill priority className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-b from-transparent via-black/45 to-black/70 z-[1]" />

        <div
          className="absolute z-[2] text-white"
          style={{
            left: "clamp(18px, 6vw, 80px)",
            bottom: "clamp(90px, 16vh, 220px)",
            textShadow: "0 18px 38px rgba(0,0,0,.45)",
          }}
        >
          <h1
            className="font-medium text-center justify-center leading-[1.04] text-[clamp(34px,6.2vw,76px)]"
            style={{ fontFamily: `'Playfair Display', Georgia, 'Times New Roman', serif` }}
          >
            Refresh your soul with
            <br />
            Exclusive North Tours
          </h1>
        </div>

        <div
          className="
            absolute z-[2]
            right-[40px] md:right-[40px] lg:right-[230px]
            bottom-[8%] md:bottom-[14%] lg:bottom-[25%]
          "
        >
          <a
            href="#book"
            className="
              inline-flex items-center justify-center
              px-5 py-2 w-[180px] min-w-[180px]
              max-[480px]:w-[88vw] max-[480px]:min-w-0 max-[480px]:mx-auto
              rounded-[18px] text-[14px]
              text-white bg-gray-500
              active:translate-y-[1px]
              transition
            "
            style={{ backdropFilter: "blur(3px)" }}
          >
            Book Your Ride Now ›
          </a>
        </div>
      </section>

      {/* Tours + Services */}
      <section id="tours" data-animate="fade" className="py-16 bg-white overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1500px] px-4">
          {/* header row */}
          <div className="grid gap-6 md:gap-4 md:grid-cols-2 items-start mb-12">
            <div>
              <h2 className="text-[clamp(28px,3.2vw,52px)] text-center leading-[1.12] text-[#11c6c1] m-0">
                Choose a Tour that<br className="hidden md:block" /> satisfies your Soul
              </h2>

              {/* aligned like first page: center on small, preserve your layout on larger */}
              <p className="mt-3  text-[15.5px] text-black max-w-[66ch] w-[90%] md:w-[60%] max-sm:mx-auto sm:ml-42 break-words">
                At Mauritius Travel &amp; Tour, we take pride in offering a fleet of vehicles that go beyond expectations — 
                combining safety, comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.
              </p>
            </div>

            {/* pills right */}
            <div className="flex flex-col items-center md:pt-1">
              <h3 className="text-[#0e4f53] text-[24px] font-medium mb-3 text-center">
                Our Awesome Services
              </h3>

              <div className="flex flex-wrap justify-center gap-8">
                <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#11c6c1] text-[#073436] shadow-sm ring-1 ring-[#0e4f53]/10">
                  North Tour
                </button>
                <button className="sm:w-44 w-36 rounded-full py-3 text-[14px]  bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10">
                  South Tour
                </button>
              </div>

              <div className="mt-3 flex flex-wrap justify-center gap-8">
                <button className="sm:w-44 w-36 rounded-full py-3 text-[14px]  bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10">
                  East Tour
                </button>
                <button className="sm:w-44 w-36 rounded-full py-3 text-[14px]  bg-[#0f2f33] text-[#e8ffff] shadow-sm ring-1 ring-[#0e4f53]/10">
                  West Tour
                </button>
              </div>
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center px-80 py-12 bg-white">
            {[
              {
                title: "Package 1: North Tour 1",
                desc:
                  "Pamplemousses Botanical Garden in Mauritius, established in the 18th century, spans 60 acres with diverse flora. Highlights include giant water lilies, rare palms.",
                img: hero1.src,
                link: "/Pricing&Detail",
              },
              {
                title: "Package 2: North Tour 2",
                desc:
                  "Grand Baie Bazar in Mauritius is a vibrant market offering a fusion of local crafts, textiles, and souvenirs. Visitors explore stalls filled with colorful items, spices, and unique finds in a lively atmosphere.",
                img: hero1.src,
                link: "/Package2",
              },
            ].map((card, idx) => (
              <article
                key={idx}
                className="relative w-full max-w-[390px] h-[620px] rounded-[22px] overflow-hidden ring-7 ring-gray-400"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0" />

                <div className="relative z-[1] px-6 pb-6 flex flex-col justify-end h-full text-white">
                  <h3 className="m-0 text-[19px] tracking-[.12em] font-semibold text-white/95">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-[15px] leading-5 text-white/90 max-w-[62ch]">{card.desc}</p>

                  <div className="mt-4 flex justify-center items-center gap-5 flex-nowrap">
                    <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px]
                      rounded-[18px] bg-white/25 ring-1 ring-white/35 backdrop-blur-[1px] text-center">
                      <Image src={money} alt="" width={26} height={26} className="opacity-95" />
                      <span className="text-[12px] leading-tight">Pricing - <br />as from rs 3000</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px]
                      rounded-[18px] bg-white/25 ring-1 ring-white/35 backdrop-blur-[1px] text-center">
                      <Image src={group} alt="" width={26} height={26} className="opacity-95" />
                      <span className="text-[12px] leading-tight">Travel Members <br />1–4 persons</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px]
                      rounded-[18px] bg-white/25 ring-1 ring-white/35 backdrop-blur-[1px] text-center">
                      <Image src={timing} alt="" width={26} height={26} className="opacity-95" />
                      <span className="text-[12px] leading-tight">Timing - <br />2.5 hrs</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Link
                      href={card.link}
                      className="inline-flex items-center justify-center text-center rounded-full px-6 py-3 text-[14px]
                        bg-[#11c6c1] text-[#073436] font-medium shadow-[0_8px_24px_rgba(0,0,0,.25)]"
                    >
                      Get Details &amp; Pricing
                    </Link>
                  </div>

                  <div className="mt-3 text-[12px] text-center text-white/85">place | place | place</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join / WhatsApp CTA block */}
       <section
  id="join"
  data-animate="fade"
  className="relative isolate bg-cover bg-center"
  style={{ backgroundImage: `url(${join.src})` }}
>
  {/* dark overlay for contrast */}
  <div className="absolute inset-0 -z-10" />

  <div className="mx-auto max-w-[1200px] px-5 py-14 text-white">
    {/* heading row + WhatsApp button */}
    <div
      className="
         mb-6 flex flex-wrap items-start justify-between gap-3
    max-[423px]:flex-col max-[423px]:items-start
      "
      style={{ textShadow: "0 2px 8px rgba(0,0,0,.35)" }}
    >
      {/* Left: heading text */}
      <div>
        <h3 className="m-0 text-[clamp(22px,3vw,34px)] leading-tight">
          Want to Join Us,
          <br className="hidden md:block" />
          have customised requests?
        </h3>
        <p className="m-0 mt-2 text-[15px] text-white">Leave a request</p>
      </div>

      {/* Right: WhatsApp button (kept small gap) */}
     <a
  href="#"
  aria-label="Whatsapp Us"
  className="
     inline-flex items-center justify-center whitespace-nowrap
  rounded-md px-6 py-3.5 text-[16px] font-semibold tracking-wide
  bg-[#35c9c3] text-[#073436] shadow-[0_6px_24px_rgba(0,0,0,.25)]
  w-full sm:w-auto text-center
  max-[423px]:mt-2
  sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px]
  "
  style={{ backdropFilter: "blur(3px)" }}
>
  Whatsapp Us
</a>
    </div>

    {/* 4 glass cards in one line (kept) */}
    <div className="grid grid-flow-col auto-cols-max justify-center xl:justify-between gap-4 md:gap-5 mb-7">
      {/* cards row with precise spacers */}
    </div>

    {/* Cards row (unchanged, just responsive-safe) */}
    <div className="flex flex-wrap justify-center xl:justify-start items-stretch gap-3 md:gap-4 mb-7 overflow-visible">
      {/* 1 */}
      <div
        className="shrink-0 flex w-[170px] h-[150px]
           max-[480px]:w-[calc(50%-8px)] max-[480px]:h-[170px] max-[480px]:p-2
           flex-col items-center justify-center gap-3
           rounded-[22px] bg-white/30 backdrop-blur-md
           ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
      >
        <Image src={fast.src} alt="Fast responses" width={38} height={38} />
        <p className="m-0  sm:px-4 text-center text-[13.5px] leading-snug">
          <span className="font-medium">Fast responses</span> – We reply promptly during our working hours.
        </p>
      </div>

      <div className="w-2 hidden sm:block md:w-3" />

      {/* 2 */}
      <div
        className="shrink-0 flex w-[170px] h-[150px]
           max-[480px]:w-[calc(50%-8px)] max-[480px]:h-[170px] max-[480px]:p-2
           flex-col items-center justify-center gap-3
           rounded-[22px] bg-white/30 backdrop-blur-md
           ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
      >
        <Image src={servive.src} alt="Personalised service" width={38} height={38} />
        <p className="m-0  sm:px-4 text-center text-[13.5px] leading-snug">
          <span className="font-medium">Personalised service</span> – Tailored transfers and tours to suit your needs.
        </p>
      </div>

      <div className="w-4 hidden sm:block md:w-5" />

      {/* 3 */}
      <div
        className="shrink-0 flex w-[170px] h-[150px]
           max-[480px]:w-[calc(50%-8px)] max-[480px]:h-[170px] max-[480px]:p-2
           flex-col items-center justify-center gap-3
           rounded-[22px] bg-white/30 backdrop-blur-md
           ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
      >
        <Image src={servive.src} alt="Friendly support" width={38} height={38} />
        <p className="m-0  sm:px-4 text-center text-[13.5px] leading-snug">
          <span className="font-medium">Friendly support</span> – Experienced driver ready to assist and guide you.
        </p>
      </div>

      <div className="w-4 hidden sm:block md:w-5" />

      {/* 4 */}
      <div
        className="shrink-0 flex w-[170px] h-[150px]
           max-[480px]:w-[calc(50%-8px)] max-[480px]:h-[170px] max-[480px]:p-2
           flex-col items-center justify-center gap-3
           rounded-[22px] bg-white/30 backdrop-blur-md
           ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
      >
        <Image src={flexible.src} alt="Flexible options" width={38} height={38} />
        <p className="m-0  sm:px-4 text-center text-[13.5px] leading-snug">
          <span className="font-medium">Flexible options</span> – We arrange tours and transfers for all groups.
        </p>
      </div>
    </div>
  </div>
</section>

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

      {/* responsive + animation tweaks (same as first file) */}
      <style>{`
        [data-animate="fade"]{
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .6s ease, transform .6s ease;
        }
        [data-animate="fade"].in-view{
          opacity: 1;
          transform: translateY(0);
        }

        /* Card text legibility on very small devices */
        @media (max-width: 380px){
          #tours article .text-[17px]{ font-size: 16px; }
          #tours article .text-[13.5px]{ font-size: 13px; }
        }

        /* Hero CTA: keep off edges on tiny screens */
        @media (max-width: 480px){
          #home a[href="#book"]{
            width: 85vw !important;
            min-width: 0 !important;
          }
        }

        @media (max-width: 780px){
          .brand strong{ display: none; }
        }
      `}</style>
    </main>
  );
}
