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
    <main className="bg-[#082733] text-[#0d1b1e]">
     <Navbar />
      <section id="home" className="relative h-[100vh] min-h-[560px] max-h-[940px] overflow-hidden">
        <Image src={hero3} alt="Mauritius aerial" fill priority className="object-cover absolute z-0" />
        <div className="relative z-10 flex w-[90%] max-w-[1300px] mx-auto items-end justify-center h-full">
          <div className="flex justify-center items-center flex-wrap gap-8 mb-24" >
          <h1 className="md:text-6xl text-4xl text-white"><T>Refresh Your Soul with</T> <br /> <T>Exclusive South Tours</T> </h1>
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
      <h2 className="text-3xl md:text-5xl font-medium mb-2 text-teal-300"><T>Package 3</T></h2>
      <h1 className="text-4xl md:text-5xl font-medium text-teal-300 mb-2">
        <T>Dreamy Mauritius</T>
      </h1>
      <p className="text-4xl md:text-5xl  mb-8 text-teal-300"><T>As from Rs 3000 per trip</T></p>

      {/* Intro */}
<p className="text-white mb-12">
  <T>
              At Mauritius Travel & Tour, we’re dedicated to providing service that exceeds expectations — blending safety, comfort, and spotless cleanliness to make every journey both dependable and delightful.
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
    <li><T>Pick-up from your hotel or residence in the morning.</T></li>
    <li><T>Discover the breathtaking cliffs and roaring waves of Gris Gris (The Angry Sea).</T></li>
    <li><T>Explore the lush landscapes and fascinating wildlife at La Vanille Crocodile Park.</T></li>
    <li><T>Experience the beauty of Blue Bay Marine Park and its vibrant coral reefs.</T></li>
    <li><T>Drop-off at your hotel or residence at the end of the tour.</T></li>
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
      <li>• <T>Tour Availability: Operates Daily.</T></li>
      <li>• <T>Tour Duration: Approximately 8 Hours (Full-Day Tour).</T></li>
      <li>• <T>Enjoy flexible pick-up times — start your adventure anytime between 8:30 AM and 10:00 AM.</T></li>
      <li>• <T>Free Wi-Fi available onboard the vehicle.</T></li>
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
  <li>• <T>Payment can be made directly to the driver in MUR, USD, or EUR.</T></li>
  <li>• <T>Prices are charged per vehicle — not per person.</T></li>
  <li>• <T>Includes full-day private transportation to all the listed attractions.</T></li>
  <li>• <T>Your friendly English- or French-speaking driver will share local tips and insights throughout the journey.</T></li>
  <li>• <T>Entrance fees to attractions are not included.</T></li>
  <li>• <T>For lunch, your driver will gladly suggest the best local restaurants where you can enjoy authentic Mauritian cuisine.</T></li>
  <li>• <T>Customized arrangements can be made if you wish to combine this tour with another package.</T></li>
  <li>• <T>NOTE: 15-seater and 30-seater vehicles are available upon request.</T></li>
</ul>

</div>

    </div>
 </section>

{/* === Existing Attractions Section (your current code) === */}
<div className="flex max-w-[1300px] w-[90%] mx-auto flex-wrap justify-center items-center gap-6  pb-10 bg-white">
  {[
    {
      img: "https://explora.mu/media/k2/items/cache/ca70f255bd2394191d82d5fae8f6827e_XL.jpg",
      title: "GRIS GRIS ANGRY SEA",
      desc: "Gris Gris, located on the wild southern coast of Mauritius, is famous for its dramatic waves and untamed beauty. Without a coral reef barrier, the ocean crashes powerfully against dark cliffs, creating a spectacular and unforgettable view.",
    },
    {
      img: "https://toursmauritius.mu/wp-content/uploads/2018/07/7585923632_IMG_4239.jpg",
      title: "CROCODILE PARK",
      desc: "La Vanille Crocodile Park is a tropical haven filled with wildlife, including Nile crocodiles, giant tortoises, monkeys, and lush greenery. This eco-park blends conservation, education, and adventure for visitors of all ages.",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d8/4d/2c/the-inner-edge-of-the.jpg?w=1200&h=-1&s=1",
      title: "MARINE PARK",
      desc: "Blue Bay Marine Park is one of Mauritius’ most stunning natural lagoons, known for its crystal-clear waters and colorful coral gardens. Perfect for snorkeling, it offers a glimpse into the island’s incredible underwater world.",
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
          <T>{item.title}</T>
        </h3>
        <p className="mt-2 text-[15px] leading-5 text-white/90 max-w-[60ch] mx-auto">
          <T>{item.desc}</T>
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
