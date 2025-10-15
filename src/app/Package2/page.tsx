// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero3 from "../../Assests/hero3.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Join from "../Components/Join";

export default function HomePage() {

  const [aboutOpen, setAboutOpen] = useState(false);
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
    <main className=" bg-[#082733] text-[#0d1b1e]">
      <Navbar />
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
      <h2 className="text-3xl md:text-5xl font-medium mb-2 text-teal-300">Package 2</h2>
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
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl sm:p-6 p-2 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        PLACES TO VISIT
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
      <li>• Pick-up from any hotel/residence in the morning</li>
      <li>• Visit Caudan Waterfront</li>
      <li>• Visit Port Louis Bazar (Local Market)</li>
      <li>• Visit Fort Adelaide at Citadel</li>
      <li>• Visit Kuanfu Tea (Medicinal Tea)</li>
      <li>• Visit Odysseo Oceanarium</li>
      <li>• Drop off from at hotel/residence </li>
    </ul>
  </div>

  {/* TOUR DESCRIPTION */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl sm:p-6 p-2 text-left shadow-md w-full max-w-[520px] mx-auto">
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
                sm:p-6 p-2 text-left shadow-md w-full max-w-[800px] mx-auto mb-50">
  <div className="text-center">
    <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold 
                   px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
      ADDITIONAL DETAILS
    </h3>
  </div>

  <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
    <li>• Payment can be made in cash to the driver in MUR, USD, or EUR.</li>
    <li>• Pricing is per vehicle, not per person.</li>
    <li>• Full day transportation to all the places mentioned above.</li>
    <li>• A friendly English/ French speaking driver will provide you valuable information during your travels. </li>
    <li>• Entry ticket fees not included.</li>
    <li>• When it comes to lunch, rest assured that your driver will recommend the best local restaurants along the way, ensuring you get a taste of delicious cuisine.</li>
    <li>• <b>Arrangements can be made with your driver if you want to combine 2 packages.</b></li>
    <li>• <b> NOTE: 15 and 30 seaters available.</b></li>
  </ul>
</div>

    </div>
  </section>
 {/* === Existing Attractions Section (your current code) === */}
<div className="flex max-w-[1300px] w-[90%] mx-auto flex-wrap justify-center items-center gap-6  pb-10 bg-white">
  {[
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/71305298-Le-Caudan-Waterfront-Shopping-Mile-in-Port-Louis-Mauritius-1-768x597.jpg",
      title: "CAUDAN WATERFRONT",
      desc: "Caudan Waterfront, located in Port Louis, Mauritius, is a vibrant shopping and entertainment destination. Boasting a scenic harbor, it offers a mix of retail outlets, dining options, cultural experiences, and lively events.",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-10.14.10-1-600x467.jpeg",
      title: "BAZAR PORT LOUIS",
      desc: "Bazar Port Louis, the local market in the heart of Mauritius, is a bustling haven of colors and flavors. Discover an array of local goods, spices, textiles, and crafts in a lively atmosphere. The market’s energetic vibe, friendly vendors, ",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/100g1f000001gr0kzFC70-1-600x467.jpg",
      title: "FORT ADELAIDE AT CITADELLE",
      desc: "Fort Adelaide at Citadelle is a historic fortress in Mauritius, offering panoramic views of Port Louis. Built in the 19th century, it stands as a cultural landmark with a blend of military architecture and scenic beauty.",
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

{/* === New 4-Image Section (same style/size as above) === */}
<div className="flex flex-wrap justify-center items-center gap-6 max-w-[1300px] w-[90%] mx-auto pb-10 bg-white">
  {[
    
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/b-6-1.jpg",
      title: "KUANFU TEA",
      desc: "Kuanfu Tea is a renowned tea brand known for its premium quality and diverse selection of traditional and innovative teas. Embracing Chinese tea culture, they offer a unique and delightful tea experience.",
    },
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/1c-1.jpg",
      title: "ODYSSEO OCEANARIUM",
      desc: "Odysseo Oceanarium is a captivating underwater sanctuary, showcasing diverse marine life through immersive exhibits. With state-of-the-art facilities, it educates and entertains, emphasizing conservation and fostering a deep appreciation for oceans.",
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
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* text content */}
      <div className="relative z-[1] px-6 pb-6 flex flex-col text-center justify-end h-full text-white">
        <h3 className="m-0 text-[18px] font-semibold text-white/95">{item.title}</h3>
        <p className="mt-2 text-[15px] leading-5 text-white/90 max-w-[60ch] mx-auto">
          {item.desc}
        </p>
      </div>
    </article>
  ))}
</div>

</div>
<Join />


    <Footer/>

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
