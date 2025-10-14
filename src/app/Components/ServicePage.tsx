  // app/page.tsx
  "use client";

  import React, { useState, useEffect } from "react";
  import Image from "next/image";
  import bg from "../../Assests/bg.png";
  import logo from "../../Assests/logo.jpeg";
  import about from "../../Assests/about.png";
  import first from "../../Assests/first.jpg";
  import second from "../../Assests/second.png";
  import third from "../../Assests/third.jpg";
  import fourth from "../../Assests/fourth.jpg";
  import airport from "../../Assests/airport.png";
  import cab from "../../Assests/cab.png";
  import community from "../../Assests/community.png";
  import location from "../../Assests/location.png";
  import arrows from "../../Assests/arrows.png";
  import day from "../../Assests/day.png";
  import night from "../../Assests/night.png";
  import org from "../../Assests/org.jpeg";
  import e from "../../Assests/e.png"
  import call from "../../Assests/call.png"
  import whatsapp from "../../Assests/whatsapp.png"
  import join from "../../Assests/join.png";
  import fast from "../../Assests/Fast.png";
  import servive from "../../Assests/service.png";
  import flexible from "../../Assests/Flexible.png";

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

  // Minimal WhatsApp icon (inline SVG so no extra assets needed)

      
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
            <div className="flex items-center flex-wrap gap-2 sm:gap-6 opacity-95">
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
              <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/">Home</Link>
  <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#about">About</Link>
  <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#tours">Tours</Link>
  <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="#transfer">Airport Transfers</Link>
  <Link className="px-2 py-1 rounded-md text-white/95 hover:bg-white/20" href="/ContactUs">Contact</Link>
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
                <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
  <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
  <Link href="#tours" onClick={() => setMenuOpen(false)} className="hover:underline">Tours</Link>
  <Link href="#transfer" onClick={() => setMenuOpen(false)} className="hover:underline">Airport Transfers</Link>
  <Link href="/ContactUs" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</Link>         
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

        {/* Hero */}
        <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
          <Image src={bg} alt="Mauritius aerial" fill priority className="object-cover" />
          {/* lower fade */}
          <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-b from-transparent via-black/45 to-black/70 z-[1]" />

          {/* headline */}
          <div
            className="absolute z-[2] text-white"
            style={{
              left: "clamp(18px, 6vw, 80px)",
              bottom: "clamp(90px, 16vh, 220px)",
              textShadow: "0 18px 38px rgba(0,0,0,.45)",
            }}
          >
            <h1
              className="sm:ml-14 font-medium leading-[1.04] text-center justify-center  text-[clamp(34px,6.2vw,76px)]"
              style={{ fontFamily: `'Playfair Display', Georgia, 'Times New Roman', serif` }}
            >
              Taking you to the
              <br />
              Best Places in Mauritius
            </h1>
          </div>

          {/* right CTA pill — match first screenshot */}
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
        <section id="about" data-animate="fade" className="bg-[#0b2930] text-white py-10 overflow-x-hidden">
          <div className="max-w-[1200px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[520px_1fr] gap-8 md:gap-12 items-start px-0 md:px-4">
            {/* Left: smaller image like screenshot */}
            <div className="justify-self-start self-start sm:-ml-8 md:-ml-14 xl:-ml-24 2xl:-ml-[120px]">
    <img
      src={about.src}
      alt="Lagoon"
      className="
        block
        w-[min(96vw,820px)] md:w-[min(52vw,780px)] lg:w-[740px] xl:w-[780px]
        h-auto
        ring-1 ring-white/15
        shadow-[0_12px_28px_rgba(0,0,0,.35)]
      "
    />
  </div>

            {/* Right: text */}
            <div className="self-center md:pl-8">
              <p className="text-xl tracking-[.14em] uppercase text-white mb-1">About Us</p>

              <h2 className="m-0 mb-3 text-[42px] leading-tight text-[#25c7e0]">
                Discover Your Next Adventure
              </h2>

              <p className="text-white leading-5">
                Welcome to Island Ride – Mauritius Travel &amp; Tour, your trusted travel partner for <br /> over 10 years.
                We take pride in offering reliable, comfortable, and personalized transportation services across the
                breathtaking island of Mauritius.
              </p>
              <br />

              {/* NEW: Expandable continuation without moving content elsewhere */}
              <p className="text-white leading-5">
                At Island Ride, every journey is more than just a ride — it&apos;s an experience of care, comfort, and
  convenience. Whether you&apos;re discovering Mauritius for the first time or commuting as a local, our modern
  fleet and professional chauffeurs ensure you travel safely and in style. From airport transfers to private tours
  and daily commutes, we&apos;re dedicated to making every mile memorable.
  {aboutOpen && (
                  <>
                    {" "}
                    Our
                    team focuses on punctuality, comfort, and transparent pricing — so you can relax and enjoy the island
                    while we handle the journey.
                  </>
                )}
              </p>

              {/* Grey medium-radius pill */}
              <a
                href="#about-more"
                onClick={(e) => {
                  e.preventDefault();
                  setAboutOpen((v) => !v);
                }}
                className="
            inline-flex mt-4 items-center justify-center gap-2
            px-5 py-2 w-[250px] rounded-[18px] text-[14px] 
            text-white
            bg-gray-500
            transition-transform active:translate-y-[1px]
          "
              >
                {aboutOpen ? "Show Less" : "Read More"} <span className="translate-y-[1px]">›</span>
              </a>
            </div>
          </div>
        </section>

        {/* Tours + Services */}
        <section id="tours" data-animate="fade" className="py-16 bg-white overflow-x-hidden">
          <div className="mx-auto w-full max-w-[1500px] px-4">
            {/* header row */}
            <div className="grid gap-6 md:gap-4 md:grid-cols-2 items-start mb-12">
              <div>
                <h2 className="text-[clamp(28px,3.2vw,52px)] text-center  leading-[1.12] text-[#11c6c1] m-0">
                  Choose a Tour that<br className="hidden md:block" /> satisfies your Soul
                </h2>

                <p className="mt-3  text-[15.5px] text-black max-w-[66ch] w-[90%] md:w-[60%] max-sm:mx-auto sm:ml-42 break-words">
                  At Mauritius Travel &amp; Tour, we take pride in offering a fleet <br/> of vehicles that go beyond expectations —
                  combining <br/> safety, comfort, and impeccable cleanliness to ensure <br/> every ride is as reliable as it is
                  enjoyable.
                </p>
              </div>

              {/* pills right */}
              <div className="flex flex-col items-center md:pt-1">
                <h3 className="text-[#0e4f53] text-[24px] font-medium mb-3 text-center">Our Awesome Services</h3>

                {/* first row */}
                <div className="flex flex-wrap justify-center gap-8">
                  <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#11c6c1] text-[#073436] shadow-sm ring-1 ring-[#0e4f53]/10">
                    Airport Transfer
                  </button>
                  <button className="sm:w-44 w-36 rounded-full py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] ring-1 ring-[#0e4f53]/10">
                    Hotel Transfer
                  </button>
                </div>

                {/* second row */}
                <div className="mt-3 flex flex-wrap justify-center gap-8">
                  <button className="sm:w-44 w-36  rounded-full  py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] ring-1 ring-[#0e4f53]/10">
                    Excursion
                  </button>
                  <button className="sm:w-44 w-36  rounded-full  py-3 text-[14px] bg-[#0f2f33] text-[#e8ffff] ring-1 ring-[#0e4f53]/10">
                    Door Step Service
                  </button>
                </div>
              </div>
            </div>

            
          
          {/* cards — now clickable to /NorthTour */}
  <div
    className="
      grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2
      xl:[grid-template-columns:var(--c1)_var(--c2)_var(--c3)_var(--c4)]
      xl:[--c1:1.60fr] xl:[--c2:0.90fr] xl:[--c3:0.90fr] xl:[--c4:0.90fr]
      xl:transition-[--c1,--c2,--c3,--c4] xl:duration-500 xl:ease-out

      /* 2nd card hover → widen col2, shrink others */
      xl:[&:has(>a:nth-child(2):hover)]:[--c1:0.90fr]
      xl:[&:has(>a:nth-child(2):hover)]:[--c2:1.60fr]

      /* 3rd card hover → widen col3, shrink others */
      xl:[&:has(>a:nth-child(3):hover)]:[--c1:0.90fr]
      xl:[&:has(>a:nth-child(3):hover)]:[--c3:1.60fr]

      /* 4th card hover → widen col4, shrink others */
      xl:[&:has(>a:nth-child(4):hover)]:[--c1:0.90fr]
      xl:[&:has(>a:nth-child(4):hover)]:[--c4:1.60fr]
    "
  >
    {[
      { img: first, alt: "North Tour 1" },
      { img: second, alt: "North Tour 2" },
      { img: third, alt: "North Tour 3" },
      { img: fourth, alt: "North Tour 4" },
    ].map((c, i) => (
      <Link
        key={i}
        href="/NorthTour"
        aria-label={`Open ${c.alt}`}
        className="group relative block
                  h-[560px] md:h-[600px] xl:h-[640px]
                  max-[480px]:h-[440px] max-[360px]:h-[380px]
                  rounded-[22px] overflow-hidden text-white
                  transition-transform duration-500 ease-out cursor-pointer
                  hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,.35)] focus:outline-none"
      >
        <Image
          src={c.img}
          alt={c.alt}
          fill
          className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:brightness-[1.05]"
          placeholder="blur"
        />

        {/* corner icon */}
        <div className="absolute  right-0 w-11 h-11 max-[360px]:w-9 max-[360px]:h-9
                        rounded-full grid place-items-center bg-[#0f2f33] text-[#e8ffff] ring-2 ring-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 max-[360px]:w-4 max-[360px]:h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 16 L16 8 M10 8h6v6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* text */}
        <div className="absolute inset-x-0 bottom-0 p-5 max-[360px]:p-4">
          <h3 className="m-0 mb-1 tracking-[.02em] text-[17px] font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,.35)]">
            NORTH TOUR
          </h3>
          <p className="m-0 text-[13.5px] leading-relaxed text-white/95 max-w-[36ch] drop-shadow-[0_1px_6px_rgba(0,0,0,.35)]">
            Welcome to Mauritius Travel &amp; Tours, your trusted partner for more than 10 years.
          </p>

          {/* Read More on every card */}
          <span className="mt-4 inline-block rounded-full px-4 py-2 text-[13px] text-white bg-gray-500/90 ring-1 ring-white/15 transition
                          group-hover:bg-gray-500 group-hover:shadow-[0_6px_20px_rgba(0,0,0,.35)]">
            Read More &#8250;
          </span>
        </div>

        <div className="absolute inset-0 ring-1 ring-white/10 rounded-[22px] pointer-events-none" />
      </Link>
    ))}
  </div>


          </div>

        </section>

        {/* Transfer Estimator */}
        <section
          id="transfer"
          data-animate="fade"
          className="relative isolate overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${airport.src})` }}
        >
          <div className="absolute inset-0 -z-10 bg-black/35" />

          <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-24 text-white">
            {/* top-right glass cards */}
            <div className="hidden md:flex absolute right-30 top-20 z-[2] gap-6">
              <div
                className="flex w-[170px] h-[150px] flex-col items-center justify-center gap-3
                    rounded-[22px] bg-white/30 backdrop-blur-md
                    ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
              >
                <Image src={cab} alt="Cab" width={42} height={42} />
                <p className="m-0 px-5 text-center text-[14px] leading-snug text-white">
                  Customised transfer options available as per your needs
                </p>
              </div>
              <div
                className="flex w-[170px] h-[150px] flex-col items-center justify-center gap-3
                    rounded-[22px] bg-white/30 backdrop-blur-md
                    ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]"
              >
                <Image src={community} alt="Group" width={42} height={42} />
                <p className="m-0 px-5 text-center text-[14px] leading-snug text-white">
                  We can arrange transfers for larger groups or multiple vehicles
                </p>
              </div>
            </div>

            {/* left heading */}
            <div style={{ textShadow: "0 2px 10px rgba(0,0,0,.45)" }}>
              <h2 className="ml-0 md:ml-20 text-4xl md:text-5xl leading-[1.08] text-[#3fd0ca]">
                Choose a Tour that
                <br className="hidden md:block" /> satisfies your Soul
              </h2>
              <p className="mt-3 ml-0 md:ml-20 max-w-[520px] text-[15px] text-[#e6ffff]">
                At Island Ride, we take great pride in maintaining <br /> a fleet of vehicles that not only meet but
                exceed <br />
                the highest standards of safety, cleanliness, <br /> and reliability.
              </p>
            </div>

            {/* ticket bar */}
            <div className="relative mt-10">
              <div className="relative mx-auto w-full max-w-[1060px] rounded-[30px] border border-white/35 bg-black/55 px-6 md:px-8 py-6 md:py-7 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
                {/* side notches */}
                <span className="pointer-events-none absolute -left-[22px] top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-transparent" />
                <span className="pointer-events-none absolute -right-[22px] top-1/2 h-11 w-11 -translate-y-1/2 rounded-full bg-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] items-center gap-6 md:gap-8">
                  {/* FROM (text, not dropdown) */}
                  <div className="">
                    <div className="flex flex-wrap items-center min-w-0 ml-0 md:ml-20 gap-2 text-[15px] sm:text-[16px] md:text-[18px] pl-3 md:pl-0 text-white">
                      <span>From</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={location} alt="" width={60} height={26} />
                      <div className="text-[20px] md:text-[22px] leading-none">
                        <span className="opacity-95">Select Location</span>
                      </div>
                    </div>
                  </div>

                  {/* arrows */}
                  <div className="hidden md:flex items-center justify-center">
                    <Image src={arrows} alt="Swap" width={44} height={44} />
                  </div>

                  {/* TO (text, not dropdown) */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center min-w-0 ml-0 md:ml-20 gap-2 text-[15px] sm:text-[16px] md:text-[18px] pl-6 md:pl-0 text-white">
                      <span>To</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image src={location} alt="" width={60} height={26} />
                      <div className="text-[20px] md:text-[22px] leading-none">
                        <span className="opacity-95">Select Location</span>
                      </div>
                    </div>
                  </div>

                  {/* divider + day/night */}
                  <div className="hidden md:flex items-center gap-4">
                    <div className="h-12 w-px bg-white/80" />

                    {/* Day: teal bg */}
                    <div className="grid place-items-center w-12 h-12 rounded-full bg-[#3fd0ca]">
                      <Image src={day} alt="Day" width={26} height={26} />
                    </div>

                    {/* Night: white bg, black icon */}
                    <div className="grid place-items-center w-12 h-12 rounded-full bg-white">
                      <Image src={night} alt="Night" width={26} height={26} className="invert" />
                      {/* if 'invert' doesn't exist in your Tailwind build, use: className="brightness-0" */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* price chip */}
            <div className="mt-6 flex justify-center">
              <div className="rounded-full border border-white/35 bg-black/55 px-6 md:px-8 py-3 text-[16px] shadow-[0_6px_30px_rgba(0,0,0,.35)]">
                Estimated Price – for upto 4 Persons
              </div>
            </div>
          </div>
        </section>

        {/* Organizer */}
        <section data-animate="fade" className="bg-[#f5fbfc]">
          <div className="mx-auto max-w-[1200px] px-5 py-16 grid gap-10 md:grid-cols-[1.05fr_.95fr] items-center">
            {/* LEFT: heading + copy */}
            <div>
              <h2 className="m-0 text-4xl md:text-5xl leading-[1.05] text-[#35c9c3]">
                Meet the Organizer
                <br />
                <span className="text-[#35c9c3]">The Vision Behind It All</span>
              </h2>

              <p className="mt-4 max-w-[560px] ml-0 md:ml-3 text-[15px] leading-[1.09] text-[#1c2b2d]">
                Behind every successful event is a passionate team working <br /> tirelessly to bring every detail to life.
                Dedicated to excellence <br /> and creativity, our organizers ensure each moment runs <br /> smoothly and
                leaves a lasting impression.
              </p>
            </div>

            {/* RIGHT: layered shapes + card */}
            <div className="relative flex justify-center">
              {/* layered rounded squares behind the card */}
              <div className="absolute -z-[1] top-6 right-10 w-[220px] md:w-[280px] h-[180px] md:h-[220px] rounded-[32px] bg-[#0b2930]/10 rotate-[8deg]" />
              <div className="absolute -z-[1] top-2 right-4  w-[240px] md:w-[300px] h-[200px] md:h-[240px] rounded-[32px] bg-[#0b2930]/20 rotate-[-6deg]" />
              <div className="absolute -z-[1] top-0 right-12 w-[210px] md:w-[260px] h-[170px] md:h-[210px] rounded-[32px] bg-[#0b2930]/30 rotate-[2deg]" />

              {/* foreground card */}
              <div className="w-[300px] md:w-[320px] rounded-[22px] bg-white text-[#0b2930] shadow-[0_20px_60px_rgba(0,0,0,.18)]">
                <div className="p-4 pb-3">
                  <img src={org.src} alt="Organizer" className="w-full h-[220px] md:h-[240px] object-cover rounded-[16px]" />
                </div>
                <div className="px-5 pb-6 text-center">
                  <div className="font-semibold tracking-wide text-[18px]">ADIL &amp; GROUP</div>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#3b4c4f]">
                    Welcome to Mauritius Travel &amp; Tour, your trusted partner of more than 10 years in transportation
                    services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
