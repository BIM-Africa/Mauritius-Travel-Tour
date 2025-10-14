// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero3 from "../../Assests/hero3.png";
import logo from "../../Assests/logo.jpeg";
import join from "../../Assests/join.png";
import fast from "../../Assests/fast.png";
import e from "../../Assests/e.png"
import call from "../../Assests/call.png"
import whatsapp from "../../Assests/whatsapp.png"

import servive from "../../Assests/service.png";
import flexible from "../../Assests/flexible.png";
import { Instagram, Facebook, Music2 } from "lucide-react";
import Link from "next/link";
import { big } from "framer-motion/client";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // NEW: about expand state (for Read More)
  const [aboutOpen, setAboutOpen] = useState(false);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
   const WHATSAPP_NUMBER_INTL = "23057526968"; // no + and no spaces
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=Hi!%20I%27d%20like%20to%20book%20a%20tour.`;

  // NEW: IntersectionObserver to reveal sections on scroll
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
          {/* thin inner hairline like screenshot */}
          <div className="pointer-events-none absolute left-4 right-4 top-[54px] h-px bg-white/70/80 opacity-80" />

          <div className="w-[70px] h-[70px] absolute left-[-18px]">
            <img
              src={logo.src}
              alt="Logo"
              className="w-[70px] absolute left-[-10] h-[70px] rounded-full object-cover border-2 border-white/80 bg-white"
            />
          </div>



          <div className="flex items-center gap-40">
            {/* Desktop nav */}
            <nav className="hidden md:flex justify-center gap-[clamp(24px,5vw,48px)] font-medium">
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/">
                Home
              </Link>
              <a className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#about">
                About
              </a>
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
            {/* simple icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu (on top, not behind) */}
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

      <section id="home" className="relative min-h-screen overflow-hidden">
        <Image src={hero3} alt="Mauritius aerial" fill priority className="absolute object-cover h-full w-full" />
        <div className=" inset-x-0 bottom-0 top-[40%]  z-[1]" />

        <div
          className="absolute z-[2] text-white"
          style={{
            left: "clamp(18px, 6vw, 80px)",
            bottom: "clamp(90px, 16vh, 220px)",
            textShadow: "0 18px 38px rgba(0,0,0,.45)",
          }}
        >
          <h1
            className="lg:ml-24 font-medium leading-[1.04] text-center justify-center  text-[clamp(34px,6.2vw,76px)]"
            style={{ fontFamily: `'Playfair Display', Georgia, 'Times New Roman', serif` }}
          >
            Taking you to the
            <br />
            Best Places in Mauritius
          </h1>
        </div>

        <div
          className="
 absolute z-[2]
    right-[40px] md:right-[40px] lg:right-[270px]
    bottom-[8%] md:bottom-[14%] lg:bottom-[25%]
  "
        >
          <a
            href="#book"
            className="
      inline-flex items-center justify-center
      px-5 py-2 w-[180px] min-w-[180px]
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

      {/* About — exact layout: left small image, right text */}
  
<div className="bg-white">
  <section className="relative bg-[#062E3D] text-white overflow-hidden rounded-b-[500px]">
    {/* --- Content --- */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-medium mb-2 text-teal-300">Package 1</h2>
      <h1 className="text-4xl md:text-5xl font-medium text-teal-300 mb-2">
        Dreamy Mauritius
      </h1>
      <p className="text-4xl md:text-5xl  mb-8 text-teal-300">As from Rs 3000 per trip</p>

      {/* Intro */}
      <p className="text-white mb-2">
        At Mauritius Travel & Tour, we take pride in offering a fleet of vehicles that go beyond expectations — combining safety, <br /> comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.
      </p>
      <p className="text-white mb-12">
        At Mauritius Travel & Tour, we take pride in offering a fleet of vehicles that go beyond expectations — combining safety, <br /> comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.
      </p>

      {/* Info Boxes */}
      {/* Info Boxes */}
<div className="grid md:grid-cols-2 gap-6 mb-10 justify-center">
  {/* PLACES TO VISIT */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl p-6 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        PLACES TO VISIT
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
      <li>• Pick-up from any hotel/residence in the morning</li>
      <li>• Visit Pamplemousses Botanical Garden</li>
      <li>• Visit Aventure du Sucre Museum</li>
      <li>• Visit Grand Baie Bazar</li>
      <li>• Sea Turtle sighting at Trou aux Biches Beach</li>
      <li>• Visit the Red Church at Cap Malheureux</li>
      <li>• Drop-off at hotel/residence</li>
    </ul>
  </div>

  {/* TOUR DESCRIPTION */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl p-6 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        TOUR DESCRIPTION
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
      <li>• Tour Availability: Daily</li>
      <li>• Tour Duration: 8 Hours (Day Tour)</li>
      <li>• With our flexible Pick-Up time you can start your <br /> adventure anytime between 8:30 Am to 10:00 Am</li>
      <li>• Free Wi-Fi available in Vehicle</li>
    </ul>
  </div>
</div>

{/* ADDITIONAL DETAILS */}
<div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl 
                p-6 text-left shadow-md w-full max-w-[800px] mx-auto mb-50">
  <div className="text-center">
    <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold 
                   px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
      ADDITIONAL DETAILS
    </h3>
  </div>

  <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
    <li>• Payment can be made in cash to the driver in MUR, USD or EUR.</li>
    <li>• Pricing is per vehicle, not per person.</li>
    <li>• Full-day transportation to all the places mentioned above.</li>
    <li>• A friendly English/French speaking driver will provide you valuable information during travels.</li>
    <li>• Entry ticket fees not included.</li>
    <li>• When it comes to lunch, rest assured that your driver will recommend the best local restaurants along the way, ensuring you get a taste of delicious cuisine.</li>
    <li>• Arrangements can be made with your driver if you want to combine 2 packages.</li>
    <li>• NOTE: 15 and 30 seaters available.</li>
  </ul>
</div>

    </div>
 </section>

{/* === Existing Attractions Section (your current code) === */}
<div className="flex flex-wrap justify-center items-center gap-6 px-4 pb-10 bg-white">
  {[
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-10-at-16.25.40-1-1-768x597.jpeg",
      title: "PAMPLEMOUSSES BOTANICAL GARDEN",
      desc: "Pamplemousses Botanical Garden in Mauritius, established in the 18th century, spans 60 acres with diverse flora. Highlights include giant water lilies, rare palms, and the historic Château de Mon Plaisir.",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/LAventure-du-Sucre-in-Mauritius-2.jpg",
      title: "AVENTURE DU SUCRE",
      desc: "Aventure du Sucre is a museum within a former sugar factory. It explores the island’s sugar industry history, showcasing the process, artifacts, and cultural impact in a captivating setting.",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/Chateau-de-Labourdonnais-ezgif.com-webp-to-png-converter-1.png",
      title: "CHATEAU DE LABOURDONNAIS",
      desc: "Château de Labourdonnais is a historic estate offering a glimpse into colonial life. The 19th-century mansion is surrounded by lush gardens, orchards, and a distillery producing premium products.",
    },
  ].map((item, idx) => (
    <article
      key={idx}
      className="relative w-full sm:w-[390px] h-[420px] sm:h-[520px] md:h-[620px] rounded-[22px] overflow-hidden ring-4 ring-gray-400 shadow-lg md:-mt-24 transition-transform duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl flex-shrink-0 z-10 mx-auto"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* content area */}
      <div className="relative z-[1] px-6 pb-6 flex flex-col text-center justify-end h-full text-white">
        <h3 className="m-0 text-[18px] font-semibold text-white/95">
          {item.title}
        </h3>
        <p className="mt-2 text-[15px] leading-5 text-white/90 max-w-[60ch] mx-auto">
          {item.desc}
        </p>
      </div>
    </article>
  ))}
</div>


{/* === New 4-Image Section (same style/size as above) === */}
<div className="flex flex-wrap justify-center items-center gap-6 px-4 pb-10 bg-white">
  {[
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/pic-flora-bay-residence-touristique-grand-baie-3-1-768x597.jpg",
      title: "GRAND BAIE BAZAR",
      desc: "Grand Baie Bazar in Mauritius is a vibrant market offering local crafts, textiles, and souvenirs in a lively atmosphere. Visitors can stroll through colorful stalls filled with handmade jewelry, spices, and tropical clothing.",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/greenseaturtle-1-768x597.webp",
      title: "SEA TURTLE SIGHTING",
      desc: "Trou aux Biches Beach is a stunning locale for sea turtle sightings. Crystal-clear waters provide a magical backdrop for this unique experience. Snorkelers often find themselves swimming alongside these gentle creatures.",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/1000_F_130330369_5GnslMvsC6o96x0DKXHTY2FjyXff68z1-1-600x467.jpg",
      title: "RED CHURCH",
      desc: "The Red Church at Cap Malheureux is an iconic landmark with stunning sea views and vibrant architecture — perfect for photos. Its striking red roof contrasts beautifully with the turquoise lagoon.",
    },
  ].map((item, idx) => (
    <article
      key={idx}
      className="relative w-full sm:w-[390px] h-[420px] sm:h-[520px] md:h-[620px] rounded-[22px] overflow-hidden ring-4 ring-gray-400 shadow-lg transition-transform duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl flex-shrink-0 z-10 mx-auto"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* content area */}
      <div className="relative z-[1] px-6 pb-6 flex flex-col text-center justify-end h-full text-white">
        <h3 className="m-0 text-[18px] font-semibold text-white/95">
          {item.title}
        </h3>
        <p className="mt-2 text-[15px] leading-5 text-white/90 max-w-[60ch] mx-auto">
          {item.desc}
        </p>
      </div>
    </article>
  ))}
</div>

</div>




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

      {/* responsive + animation tweaks */}
      <style>{`
        /* Section reveal */
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
          /* compact nav pill on mobile */
          .brand strong{ display: none; }
        }
      `}</style>
    </main>
  );
}
