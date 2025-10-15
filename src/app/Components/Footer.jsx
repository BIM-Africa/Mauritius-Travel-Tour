// src/app/Components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Music2 } from "lucide-react";

// ✅ adjust paths if your folder structure is different
import logo from "../../Assests/logo.jpeg";
import call from "../../Assests/call.png";
import e from "../../Assests/e.png";

export default function Footer() {
  return (
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
            <Image
              src={logo}
              alt="Mauritius Logo"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mr-3 object-cover"
            />
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
                <Image
                  src={call}
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
                />
                <a href="mailto:info@mauritiustraveltour.com" className="hover:underline">
                  info@mauritiustraveltour.com
                </a>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <Image
                  src={e}
                  alt="Call"
                  width={20}
                  height={20}
                  className="w-6 h-6 sm:w-5 sm:h-5 invert brightness-0 object-contain"
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
  );
}
