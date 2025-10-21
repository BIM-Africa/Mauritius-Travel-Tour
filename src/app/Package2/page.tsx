// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero3 from "../../Assests/hero3.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Join from "../Components/Join";
import { T } from "@/lib/i18n-global";

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
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero3} alt="Mauritius aerial" fill priority className="object-cover absolute z-0" />
        <div className="relative z-10 flex w-[90%] max-w-[1300px] mx-auto items-end justify-center h-full">
          <div className="flex justify-center items-center flex-wrap gap-8 mb-24" >
          <h1 className="md:text-6xl text-4xl text-white"><T>Refresh Your Soul with</T> <br /> <T>Exclusive North Tours</T> </h1>
          <a
  href="https://wa.me/23057526968?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20tours."
  target="_blank"
  aria-label="WhatsApp Us"
  rel="noopener noreferrer"
>
  <button className="bg-slate-600 text-white px-6 py-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
    <span>Book Your Ride Now</span> &#8250;
  </button>
</a>
          </div>
        </div>
      
      </section>

      {/* About — exact layout: left small image, right text */}
 
<div className="bg-white">
  <section className="relative bg-[#062E3D] text-white overflow-hidden rounded-b-[500px]">
    {/* --- Content --- */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-medium mb-2 text-teal-300"><T>Package 2</T></h2>
      <h1 className="text-4xl md:text-5xl font-medium text-teal-300 mb-2">
        <T>Dreamy Mauritius</T>
      </h1>
      <p className="text-4xl md:text-5xl  mb-8 text-teal-300"><T>As from Rs 3000 per trip</T></p>

      {/* Intro */}
      <p className="text-white mb-2">
        <T>
                     At mauritius travel & tour, we take pride in offering a fleet of vehicles that go beyond expectations — combining safety, comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.
                   </T>
      </p>
      <p className="text-white mb-12">
         <T>
                      At mauritius travel & tour, we take pride in offering a fleet of vehicles that go beyond expectations — combining safety, comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.
                    </T>
      </p>

      {/* Info Boxes */}
      {/* Info Boxes */}
<div className="grid md:grid-cols-2 gap-6 mb-10 justify-center">
  {/* PLACES TO VISIT */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl sm:p-6 p-2 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        <T>PLACES TO VISIT</T>
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
      <li>• <T>Pick-up from any hotel/residence in the morning</T></li>
      <li>• <T>Visit Caudan Waterfront</T></li>
      <li>• <T>Visit Port Louis Bazar (Local Market)</T></li>
      <li>• <T>Visit Fort Adelaide at Citadel</T></li>
      <li>• <T>Visit Kuanfu Tea (Medicinal Tea)</T></li>
      <li>• <T>Visit Odysseo Oceanarium</T></li>
      <li>• <T>Drop-off at hotel/residence</T></li>
    </ul>
  </div>

  {/* TOUR DESCRIPTION */}
  <div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl sm:p-6 p-2 text-left shadow-md w-full max-w-[520px] mx-auto">
    <div className="text-center">
      <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
        <T>TOUR DESCRIPTION</T>
      </h3>
    </div>

    <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
      <li>• <T>Tour Availability: Daily</T></li>
            <li>• <T>Tour Duration: 8 Hours (Day Tour)</T></li>
            <li>•<T>With our flexible Pick-Up time you can start your adventure anytime between 8:30 Am to 10:00 Am</T></li>
            <li>•<T>Free Wi-Fi available in Vehicle</T></li>
    </ul>
  </div>
</div>

{/* ADDITIONAL DETAILS */}
<div className="bg-gray-500/80 ring-1 ring-white/30 backdrop-blur-sm rounded-2xl 
                sm:p-6 p-2 text-left shadow-md w-full max-w-[800px] mx-auto mb-50">
  <div className="text-center">
    <h3 className="inline-block bg-teal-400 text-[#062E3D] text-sm md:text-base font-semibold 
                   px-6 py-2 rounded-full mb-5 shadow-md hover:bg-teal-300 transition">
      <T>ADDITIONAL DETAILS</T>
    </h3>
  </div>

  <ul className="space-y-2 text-gray-200 text-lg leading-relaxed">
     <li>• <T>Payment can be made in cash to the driver in MUR, USD or EUR</T>.</li>
      <li>• <T>Pricing is per vehicle, not per person.</T></li>
      <li>• <T>Full-day transportation to all the places mentioned above.</T></li>
      <li>• <T>A friendly English/French speaking driver will provide you valuable information during travels.</T></li>
      <li>• <T>Entry ticket fees not included.</T></li>
      <li>• <T>When it comes to lunch, rest assured that your driver will recommend the best local restaurants along the way, ensuring you get a taste of delicious cuisine.</T></li>
      <li>• <T>Arrangements can be made with your driver if you want to combine 2 packages.</T></li>
      <li>• <T>NOTE: 15 and 30 seaters available.</T></li>
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
<div className="flex flex-wrap justify-center items-center gap-6 max-w-[1300px] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] mx-auto pb-10 bg-white">
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
      className="
        relative
        w-[95%] 
        xs:w-[300px]
        sm:w-[360px]
        md:w-[380px]
        lg:w-[400px]
        xl:w-[420px]
        h-[420px]
        sm:h-[520px]
        md:h-[620px]
        lg:h-[620px]
        xl:h-[620px]
        rounded-[22px]
        overflow-hidden
        ring-4 ring-gray-300
        shadow-lg
        transition-transform duration-500 ease-out
        hover:scale-[1.03] hover:shadow-2xl
        flex-shrink-0 z-10 mx-auto
      "
   
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
