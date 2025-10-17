// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero3 from "../../Assests/hero3.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Join from "../Components/Join";

export default function HomePage() {
  

  // NEW: about expand state (for Read More)
  const [aboutOpen, setAboutOpen] = useState(false);

  // Prevent background scroll when mobile menu open
  
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
     <Navbar />
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero3} alt="Mauritius aerial" fill priority className="object-cover absolute z-0" />
        <div className="relative z-10 flex w-[90%] max-w-[1300px] mx-auto items-end justify-center h-full">
          <div className="flex justify-center items-center flex-wrap gap-8 mb-24" >
          <h1 className="md:text-6xl text-4xl text-white">Refresh Your Soul with <br /> Exclusive West Tours </h1>
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
      <li>• Visit Casela Zoo</li>
      <li>• You will have the opportunity to engage in activities such as quad biking, zipline, nepalese bridge, canyon swing, toboggan, tulawaka and racer doub doub</li>
      <li>• Walk with lions, animal feeding, fish feeding, 4D cinema and paddock camel ride.</li>
      <li>• Predator kingdom guided tour.</li>
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
      <li>• Pickup time if opting for <b>group</b> outing may be very early in the morning because we need to reach before 9am</li>
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
    <li>• Payment can be made in cash to the driver in MUR, USD or EUR.</li>
    <li>• Pricing is per vehicle, not per person.</li>
    <li>• Full-day transportation to all the places mentioned above.</li>
    <li>• A friendly English/French speaking driver will provide you valuable information during travels.</li>
    <li>• Entry ticket fees not included.</li>
    <li>• When it comes to lunch, rest assured that your driver will recommend the best local restaurants along the way, ensuring you get a taste of delicious cuisine.</li>
    <li>• <b>Arrangements can be made with your driver if you want to combine 2 packages</b>.</li>
    <li>• <b>NOTE: 15 and 30 seaters available</b>.</li>
  </ul>
</div>

    </div>
 </section>

{/* === Existing Attractions Section (your current code) === */}
<div className="flex max-w-[1300px] w-[90%] mx-auto flex-wrap justify-center items-center gap-6  pb-10 bg-white">
  {[
    {
      img: "https://islandridemauritius.com/wp-content/uploads/2024/03/entrance-to-the-park-1.jpg",
      title: "CASELA NATURE AND LEISURE PARK",
      desc: "Casela Nature and Leisure Park in Mauritius is an exhilarating blend of wildlife encounters, adventure activities, and natural beauty. Visitors enjoy safari tours, ziplining, and interactions with diverse animals.",
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
      <div className="absolute inset-0" />

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
<Join/>
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
