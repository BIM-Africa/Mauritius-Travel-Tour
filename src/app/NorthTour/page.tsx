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
import Navbar from "../Components/Navbar";
import Join from "../Components/Join";

export default function HomePage() {
  
  const [aboutOpen, setAboutOpen] = useState(false);

  
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
      <Navbar />
      {/* Hero (typo fixed + mobile CTA width like first page) */}
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero} alt="Mauritius aerial" fill priority className="object-cover absolute z-0" />
       <div className="relative z-10 flex w-[90%] max-w-[1300px] mx-auto items-end justify-center h-full">
          <div className="flex justify-center items-center flex-wrap gap-8 mb-24" >
          <h1 className="md:text-6xl text-4xl text-white">Refresh Your Soul with <br /> Exclusive North Tours </h1>
          <button className="bg-slate-600 text-white px-4 py-2 rounded-4xl" >
            Book Your Ride Now &#8250;

          </button>
          </div>
        </div>
      </section>

      {/* Tours + Services */}
      <section id="tours" data-animate="fade" className="py-16 bg-white overflow-x-hidden">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          {/* header row */}
          <div className="grid gap-6 md:gap-4 md:grid-cols-2 xl:max-w-[1100px] max-w-[900px] mx-auto items-start mb-12">
            <div>
              <h2 className="text-[clamp(28px,3.2vw,52px)]   leading-[1.12] text-[#11c6c1] m-0">
                Choose a Tour that<br className="hidden md:block" /> satisfies your Soul
              </h2>

              {/* aligned like first page: center on small, preserve your layout on larger */}
              <p className="mt-3  text-[15.5px] text-black max-w-[66ch] md:w-[75%] max-sm:mx-auto break-words">
                At Mauritius Travel &amp; Tour, we take pride in offering a fleet of vehicles that go beyond expectations — 
                combining safety, comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.
              </p>
            </div>

            {/* pills right */}
            <div className="lex flex-col items-center md:pt-1">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 xl:px-24 py-12 bg-white max-w-[1400px] mx-auto">
  {[
    {
      title: "Package 1: North Tour 1",
      desc: "Pamplemousses Botanical Garden in Mauritius, established in the 18th century, spans 60 acres with diverse flora. Highlights include giant water lilies, rare palms.",
      img: hero1.src,
      link: "/Pricing&Detail",
    },
    {
      title: "Package 2: North Tour 2",
      desc: "Grand Baie Bazar in Mauritius is a vibrant market offering a fusion of local crafts, textiles, and souvenirs. Visitors explore stalls filled with colorful items, spices, and unique finds in a lively atmosphere.",
      img: hero1.src,
      link: "/Package2",
    },
  ].map((card, idx) => (
    <article
      key={idx}
      className="relative w-full max-w-[480px] h-[620px] rounded-[22px] overflow-hidden ring-4 ring-gray-300"
      style={{
        backgroundImage: `url(${card.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* subtle top-to-bottom gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

      <div className="relative z-[1] px-6 pb-6 flex flex-col justify-end h-full text-white">
        <h3 className="m-0 text-[20px] tracking-[.08em] font-semibold text-white/95">
          {card.title}
        </h3>

        <p className="mt-1 text-[15px] leading-5 text-white/90 max-w-[62ch]">{card.desc}</p>

        <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
          {[
            {
              icon: money,
              text: (
                <>
                  Pricing - <br />as from Rs 3000
                </>
              ),
            },
            {
              icon: group,
              text: (
                <>
                  Travel Members <br />1–4 persons
                </>
              ),
            },
            {
              icon: timing,
              text: (
                <>
                  Timing - <br />2.5 hrs
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px]
                rounded-[18px] bg-white/25 ring-1 ring-white/35 backdrop-blur-[2px] text-center"
            >
              <Image src={item.icon} alt="" width={26} height={26} className="opacity-95" />
              <span className="text-[12px] leading-tight">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href={card.link}
            className="inline-flex items-center justify-center text-center rounded-full px-6 py-3 text-[14px]
              bg-[#11c6c1] text-[#073436] font-medium shadow-[0_8px_24px_rgba(0,0,0,.25)] hover:bg-[#0fb0ad] transition"
          >
            Get Details &amp; Pricing
          </Link>
        </div>

        <div className="mt-3 text-[12px] text-center text-white/85">
          place | place | place
        </div>
      </div>
    </article>
  ))}
</div>

        </div>
      </section>

      {/* Join / WhatsApp CTA block */}
    <Join/>

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
