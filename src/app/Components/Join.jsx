/* eslint-disable @next/next/no-img-element */
import React from "react";

// If you keep assets in /src/Assests and import them:
import join from "../../Assests/join.png";
import fast from "../../Assests/Fast.png";
import servive from "../../Assests/service.png"; // <-- if your file is actually "service.png"
import flexible from "../../Assests/Flexible.png";

export default function Join() {
  return (
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

          {/* Right: WhatsApp button */}
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

        {/* ✅ Fixed Cards Section */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
            justify-items-center mb-7
          "
        >
          {/* 1 */}
          <div
            className="flex flex-col items-center justify-center gap-3
              w-full max-w-[190px] h-[160px]
              rounded-[22px] bg-white/30 backdrop-blur-md
              ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]
              text-center p-3"
          >
            <img src={fast.src} alt="Fast responses" width={38} height={38} />
            <p className="m-0 text-[13.5px] leading-snug">
              <span className="font-medium">Fast responses</span> – We reply
              promptly during our working hours.
            </p>
          </div>

          {/* 2 */}
          <div
            className="flex flex-col items-center justify-center gap-3
              w-full max-w-[190px] h-[160px]
              rounded-[22px] bg-white/30 backdrop-blur-md
              ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]
              text-center p-3"
          >
            <img
              src={servive.src}
              alt="Personalised service"
              width={38}
              height={38}
            />
            <p className="m-0 text-[13.5px] leading-snug">
              <span className="font-medium">Personalised service</span> –
              Tailored transfers and tours to suit your needs.
            </p>
          </div>

          {/* 3 */}
          <div
            className="flex flex-col items-center justify-center gap-3
              w-full max-w-[190px] h-[160px]
              rounded-[22px] bg-white/30 backdrop-blur-md
              ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]
              text-center p-3"
          >
            <img
              src={servive.src}
              alt="Friendly support"
              width={38}
              height={38}
            />
            <p className="m-0 text-[13.5px] leading-snug">
              <span className="font-medium">Friendly support</span> –
              Experienced driver ready to assist and guide you.
            </p>
          </div>

          {/* 4 */}
          <div
            className="flex flex-col items-center justify-center gap-3
              w-full max-w-[190px] h-[160px]
              rounded-[22px] bg-white/30 backdrop-blur-md
              ring-1 ring-white/40 shadow-[0_8px_28px_rgba(0,0,0,.25)]
              text-center p-3"
          >
            <img
              src={flexible.src}
              alt="Flexible options"
              width={38}
              height={38}
            />
            <p className="m-0 text-[13.5px] leading-snug">
              <span className="font-medium">Flexible options</span> – We arrange
              tours and transfers for all groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
