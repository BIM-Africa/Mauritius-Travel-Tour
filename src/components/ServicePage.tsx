"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion, type Variants } from "framer-motion";
import { Poppins, Kalam } from "next/font/google";
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CalendarDays,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Camera,
  Heart,
  Hotel,
  Map as MapIcon,
  MapPin,
  Moon,
  Mountain,
  Phone,
  Plane,
  Signpost,
  Star,
  Sun,
  TreePalm,
  Users,
} from "lucide-react";

import heroBg from "@/assets/bg.jpg";
import underwater from "@/assets/hero2.jpg";
import adilHero from "@/assets/home/adil-hero.jpg";
import adilBuddy from "@/assets/home/adil-buddy.jpg";
import airportImg from "@/assets/home/airport.jpg";
import resortImg from "@/assets/first.jpeg";
import boatImg from "@/assets/second.jpg";
import islandImg from "@/assets/third.jpg";
import leMorneImg from "@/assets/fourth.jpg";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { T } from "@/lib/i18n-global";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-home" });
const kalam = Kalam({ subsets: ["latin"], weight: ["700"], variable: "--font-script" });

const WHATSAPP = "https://wa.me/23057526968?text=Hi%20Adil!%20I'd%20like%20to%20book%20a%20ride%20in%20Mauritius.";
const AIRPORT_WHATSAPP = "https://wa.me/23057526968?text=Hi%20Adil!%20I'd%20like%20to%20book%20an%20airport%20transfer.";

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.43 9.45-9.43a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.44 9.43zm8.04-17.47A11.3 11.3 0 0 0 12.04.7C5.77.7.67 5.8.67 12.06c0 2 .52 3.96 1.52 5.68L.57 23.65l6.04-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.04-1.18-5.89-3.33-8.04z" />
    </svg>
  );
}

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path fill="#fff" d="M13.3 19.5v-6.2h2.1l.3-2.4h-2.4V9.4c0-.7.2-1.2 1.2-1.2h1.3V6.1c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.8H8.6v2.4h2.1v6.2h2.6z" />
    </svg>
  );
}

function Stars({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-[#f5b700]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={className} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

/** Small yellow "spark" lines used next to headings in the design. */
function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={`spark w-7 h-7 text-[#f6b928] ${className}`} aria-hidden="true">
      <path d="M6 22 L12 16 M10 8 L13 14 M20 4 L17 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Brush-stroke underline drawn under script words. */
function Underline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 14" preserveAspectRatio="none" className={`h-3 text-[#f6b928] ${className}`} aria-hidden="true">
      <path d="M3 10 C 50 3, 120 2, 197 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11.5px] font-semibold tracking-[.08em] uppercase ${
        light ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-[#e3f6f3] text-[#0b5a55]"
      }`}
    >
      <TreePalm className={`w-4 h-4 ${light ? "text-[#4fe0c9]" : "text-[#16a596]"}`} />
      <T>{children}</T>
    </span>
  );
}

function WhatsAppButton({
  href = WHATSAPP,
  children,
  className = "",
  arrow = true,
}: {
  href?: string;
  children: string;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex max-w-full items-center justify-center gap-2.5 overflow-hidden rounded-full text-center bg-gradient-to-b from-[#2fbf5b] to-[#1a9a43] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(26,154,67,.35)] ring-1 ring-white/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(26,154,67,.45)] hover:brightness-110 active:translate-y-0 ${className}`}
    >
      {/* light sweep on hover */}
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/35 blur-[2px] transition-all duration-700 ease-out group-hover:left-[120%]" />
      <WhatsAppIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110" />
      <T>{children}</T>
      {arrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Motion helpers                                                      */
/* ------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50, rotate: 1.5 },
  show: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger = (gap = 0.12, delay = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } } as const;

/** Fades and slides its content up the first time it scrolls into view. */
function Reveal({ children, className = "", variants = fadeUp }: { children: React.ReactNode; className?: string; variants?: Variants }) {
  return (
    <motion.div className={className} variants={variants} {...inView}>
      {children}
    </motion.div>
  );
}

const hoverLift = { y: -6, transition: { duration: 0.25 } };

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

function Hero() {
  const features = [
    { icon: Plane, label: "Airport Transfers" },
    { icon: TreePalm, label: "Island Tours" },
    { icon: Car, label: "Private Taxi Service" },
    { icon: MapPin, label: "Discover Mauritius" },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden text-white">
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image src={heroBg} alt="" fill priority className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062f36]/95 via-[#0a4a4f]/85 to-[#0a4a4f]/30" />
      {/* soft glow blobs */}
      <div className="hero-blob pointer-events-none absolute -left-24 top-1/3 -z-10 h-72 w-72 rounded-full bg-[#3fe0c5]/20 blur-3xl" />
      <div className="hero-blob pointer-events-none absolute right-10 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#2fbf5b]/15 blur-3xl [animation-delay:-4s]" />

      <div className="mx-auto grid w-[90%] max-w-[1360px] items-center gap-10 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div variants={stagger(0.12, 0.15)} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12.5px] font-medium ring-1 ring-white/25 backdrop-blur"
          >
            <Car className="w-4 h-4 text-[#4fe0c9]" />
            <T>Taxi Service in Mauritius</T>
          </motion.span>

          <motion.h1 variants={fadeUp} className="mt-5 text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.1]">
            <T>Discover Mauritius with</T>{" "}
            <span className="shimmer-text">Adil,</span> <T>Your Local Taxi Driver</T>
          </motion.h1>
          <motion.span
            className="mt-4 block h-1.5 w-20 origin-left rounded-full bg-[#3fe0c5]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          />

          <motion.p variants={fadeUp} className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-white/90">
            <T>
              Explore Mauritius with a licensed local taxi driver. From airport transfers to private island tours, Adil offers friendly, reliable and personalised transportation to help you discover the island with confidence.
            </T>
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-7 grid grid-cols-2 gap-y-4 sm:flex sm:flex-wrap sm:divide-x sm:divide-white/25">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="group flex items-center gap-2.5 sm:px-5 first:sm:pl-0">
                <Icon className="w-7 h-7 shrink-0 text-[#3fe0c5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={1.8} />
                <span className="max-w-[90px] text-[13px] font-semibold leading-tight">
                  <T>{label}</T>
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton>Book Your Taxi on WhatsApp</WhatsAppButton>
            <Link
              href="/#tours"
              className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-semibold text-white ring-1 ring-white/70 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0b2930]"
            >
              <Mountain className="w-5 h-5" />
              <T>Explore Our Tours</T>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Meet Adil card */}
        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, x: 60, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
        >
          <div className="float-slow overflow-hidden rounded-[22px] bg-white/10 p-1.5 ring-2 ring-white/80 shadow-[0_24px_60px_rgba(0,0,0,.45)] backdrop-blur">
            <div className="group relative aspect-[588/400] overflow-hidden rounded-[18px]">
              <Image
                src={adilHero}
                alt="Adil, your local taxi driver in Mauritius"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width:1024px) 520px, 90vw"
              />
              {/* pulse around the play button in the photo */}
              <span className="pointer-events-none absolute top-[61%] left-[49.3%] h-[26%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white/70 animate-ping [animation-duration:2.2s]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06262c]/95 via-[#06262c]/70 to-transparent px-5 pt-12 pb-4">
                <p className="text-[18px] font-bold">
                  <T>Meet Adil</T>
                </p>
                <p className="text-[13px] text-white/85">
                  <T>Your local taxi driver in Mauritius</T>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Reviews                                                          */
/* ------------------------------------------------------------------ */

// TODO: replace with real customer reviews before going live.
const REVIEWS = [
  {
    name: "Emma Carter",
    source: "google",
    text: "Excellent service! Adil was friendly, professional and very knowledgeable about Mauritius. Highly recommended!",
    date: "15 Oct 2026",
  },
  {
    name: "Mark Davies",
    source: "facebook",
    text: "A fantastic experience from airport pickup to our island tour! Comfortable, punctual and great local tips.",
    date: "08 Oct 2026",
  },
  {
    name: "Sophie Laurent",
    source: "google",
    text: "Our tour with Adil was the highlight of our trip. Very safe, flexible and truly a local experience.",
    date: "03 Oct 2026",
  },
] as const;

const slide: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 90 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -90, transition: { duration: 0.35, ease: EASE } }),
};

function Reviews() {
  const count = REVIEWS.length;
  const [start, setStart] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (step: number) => {
      setDir(step > 0 ? 1 : -1);
      setStart((s) => (s + step + count) % count);
    },
    [count]
  );

  // Auto-advance 5s after the last change unless the visitor is hovering / touching the carousel.
  // Depending on `start` restarts the timer after every manual click.
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(1), 5000);
    return () => window.clearTimeout(t);
  }, [paused, go, start]);

  // The carousel loops: the visible cards are the reviews starting at `start`.
  const ordered = Array.from({ length: count }, (_, i) => REVIEWS[(start + i) % count]);

  const arrowBtn =
    "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0b2930] shadow-[0_6px_18px_rgba(11,41,48,.15)] ring-1 ring-black/5 transition hover:scale-110 hover:bg-[#139a8c] hover:text-white active:scale-95";

  return (
    <section className="bg-gradient-to-b from-white to-[#f1faf9] py-16">
      <Reveal className="mx-auto w-[92%] max-w-[1360px] text-center">
        <p className="flex items-center justify-center gap-3 text-[12.5px] font-semibold tracking-[.12em] text-[#0b3a40] uppercase">
          <span className="h-px w-8 bg-[#0b3a40]/50" />
          <T>Real Customer Reviews</T>
          <span className="h-px w-8 bg-[#0b3a40]/50" />
        </p>
        <h2 className="mt-2 text-[clamp(28px,3.6vw,42px)] font-extrabold text-[#0b2930]">
          <T>What</T> <span className="text-[#139a8c]"><T>Holidaymakers</T></span> <T>Say</T>
        </h2>
        <p className="mt-2 text-[15px] text-[#3b4c4f]">
          <T>Trusted by visitors from around the world for reliable, friendly and personalised taxi tours in Mauritius.</T>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-3 text-left">
            <GoogleIcon className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-2 text-[20px] font-bold text-[#0b2930]">
                4.9/5 <Stars className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-[#3b4c4f]">(120+ <T>reviews</T>)</p>
            </div>
          </div>
          <span className="hidden h-12 w-px bg-[#0b2930]/20 sm:block" />
          <div className="flex items-center gap-3 text-left">
            <FacebookIcon className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-2 text-[20px] font-bold text-[#0b2930]">
                4.8/5 <Stars className="w-5 h-5" />
              </div>
              <p className="text-[13px] text-[#3b4c4f]">(60+ <T>recommendations</T>)</p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 px-6 md:px-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <button type="button" onClick={() => go(-1)} aria-label="Previous review" className={`${arrowBtn} -left-3 md:-left-2`}>
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden py-3">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={start}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
                className="grid cursor-grab gap-5 active:cursor-grabbing sm:grid-cols-2 lg:grid-cols-3"
              >
            {ordered.map((r, i) => (
              <article
                key={r.name}
                className={`select-none rounded-2xl bg-white p-5 text-left shadow-[0_10px_30px_rgba(11,41,48,.08)] ring-1 ring-[#0b2930]/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,41,48,.14)] ${
                  i === 1 ? "hidden sm:block" : i >= 2 ? "hidden lg:block" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e3f6f3] text-[18px] font-bold text-[#139a8c]">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0b2930]">{r.name}</p>
                    <p className="flex items-center gap-1.5 text-[12px] text-[#3b4c4f]">
                      {r.source === "google" ? <GoogleIcon className="w-3.5 h-3.5" /> : <FacebookIcon className="w-3.5 h-3.5" />}
                      {r.source === "google" ? <T>Google Review</T> : <T>Facebook Recommendation</T>}
                    </p>
                    <Stars />
                  </div>
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[#1c2b2d]">&ldquo;<T>{r.text}</T>&rdquo;</p>
                <p className="mt-3 flex items-center gap-1.5 text-[12.5px] text-[#3b4c4f]">
                  <CalendarDays className="w-4 h-4 text-[#139a8c]" />
                  {r.date}
                </p>
              </article>
            ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button type="button" onClick={() => go(1)} aria-label="Next review" className={`${arrowBtn} -right-3 md:-right-2`}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {REVIEWS.map((r, i) => (
            <button
              key={r.name}
              type="button"
              aria-label={`Show review ${i + 1}`}
              aria-current={i === start}
              onClick={() => {
                setDir(i > start ? 1 : -1);
                setStart(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === start ? "w-7 bg-[#139a8c]" : "w-2.5 bg-[#0b2930]/20 hover:bg-[#0b2930]/40"}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. How booking works                                                */
/* ------------------------------------------------------------------ */

function HowBooking() {
  const steps = [
    { icon: <WhatsAppIcon className="w-8 h-8" />, label: "Message Adil on WhatsApp", tone: "bg-[#25b14c] text-white" },
    { icon: <CalendarCheck className="w-8 h-8" />, label: "Get your price and confirmation", tone: "bg-white text-[#0b5a55] ring-2 ring-[#0b5a55]/20" },
    { icon: <Car className="w-8 h-8" />, label: "Adil picks you up", tone: "bg-[#0b5a55] text-white" },
  ];

  return (
    <section className="bg-[#f1faf9] pb-16">
      <Reveal className="relative mx-auto w-[92%] max-w-[1360px] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#dff4f0] to-[#eaf8f5] px-6 py-10 text-center ring-1 ring-[#0b5a55]/10">
        <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#3fe0c5]/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#2fbf5b]/10 blur-2xl" />
        <h2 className="relative inline-flex items-start gap-1 text-[clamp(26px,3.2vw,38px)] font-extrabold text-[#0b2930]">
          <span>
            <T>How</T> <span className="text-[#139a8c]"><T>Booking Works?</T></span>
          </span>
          <Spark className="-mt-2" />
        </h2>

        <motion.ol
          variants={stagger(0.18, 0.15)}
          {...inView}
          className="relative mx-auto mt-8 flex max-w-[860px] flex-col items-center gap-6 md:flex-row md:justify-between"
        >
          {steps.map((s, i) => (
            <React.Fragment key={s.label}>
              <motion.li variants={fadeUp} className="group flex items-center gap-4">
                <span className="relative">
                  <span className={`grid h-16 w-16 place-items-center rounded-2xl shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-hover:shadow-lg ${s.tone}`}>
                    {s.icon}
                  </span>
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[#0b2930] text-[12px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <span className="max-w-[150px] text-left text-[15px] font-semibold leading-snug text-[#0b2930]">
                  <T>{s.label}</T>
                </span>
              </motion.li>
              {i < steps.length - 1 && (
                <motion.span variants={fadeUp} className="hidden md:block">
                  <ChevronRight className="nudge-x w-7 h-7 text-[#139a8c]" />
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.ol>

        <div className="relative mt-8">
          <WhatsAppButton className="pulse-glow">Start Booking On WhatsApp</WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. More than just a ride                                            */
/* ------------------------------------------------------------------ */

function LocalBuddy() {
  const cards = [
    {
      icon: MapIcon,
      title: "Tailored to Your Travel Style",
      text: "Whether it’s a relaxed day at the beach, a cultural tour or a full island adventure, Adil adapts to your plans.",
    },
    {
      icon: Mountain,
      title: "Local Tips & Hidden Gems",
      text: "Discover authentic places, great food and scenic spots that most visitors miss.",
    },
    {
      icon: Heart,
      title: "A Friendly, Personal Service",
      text: "A warm welcome, clear communication and a genuine passion for sharing Mauritius with you.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto w-[92%] max-w-[1360px]">
        <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal variants={fadeLeft}>
            <Eyebrow>Your Mauritius Experience</Eyebrow>
            <h2 className="mt-4 text-[clamp(30px,3.8vw,46px)] font-extrabold leading-[1.12] text-[#0b2930]">
              <T>More Than Just a Ride.</T>
              <br />
              <T>Explore Mauritius with</T>
              <span className="relative mt-1 block w-fit font-[family-name:var(--font-script)] text-[1.15em] font-bold text-[#139a8c]">
                <T>Your Local Buddy!</T>
                <Underline className="absolute -bottom-2 left-6 w-[75%]" />
              </span>
            </h2>
            <p className="mt-7 max-w-[540px] text-[15.5px] leading-relaxed text-[#2b3b3e]">
              <T>With Adil, it’s not just a taxi service — it’s a friendly, flexible and fun way to discover Mauritius. Whether it’s</T>{" "}
              <strong><T>tasting local food</T></strong>, <T>soaking in a</T> <strong><T>stunning viewpoint</T></strong>, <T>or</T>{" "}
              <strong><T>exploring hidden gems</T></strong>, <T>Adil is your local buddy who makes the journey part of the adventure.</T>
            </p>
          </Reveal>

          <Reveal variants={fadeRight} className="relative mx-auto w-full max-w-[640px]">
            <motion.div whileHover={{ rotate: -1.2, scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
              <Image
                src={adilBuddy}
                alt="Adil pointing at Le Morne Brabant – Explore Mauritius like a local"
                className="h-auto w-full drop-shadow-[0_20px_30px_rgba(11,41,48,.12)]"
                sizes="(min-width:1024px) 640px, 90vw"
                placeholder="blur"
              />
            </motion.div>
          </Reveal>
        </div>

        <motion.div variants={stagger(0.14)} {...inView} className="mt-12 grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={hoverLift}
              className="group flex items-start gap-4 rounded-2xl bg-gradient-to-b from-white to-[#f4fbfa] p-4 shadow-[0_6px_20px_rgba(11,41,48,.06)] ring-1 ring-[#0b5a55]/8 transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(11,41,48,.12)]"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#e3f6f2] text-[#139a8c] transition duration-300 group-hover:bg-[#139a8c] group-hover:text-white">
                <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-[#0b2930]">
                  <T>{title}</T>
                </h3>
                <p className="mt-1 text-[13.5px] leading-snug text-[#2b3b3e]">
                  <T>{text}</T>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-4">
          <WhatsAppButton>Chat with Adil on WhatsApp</WhatsAppButton>
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#0b5a55] ring-2 ring-[#0b5a55]/70 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b5a55] hover:text-white"
          >
            <CalendarDays className="w-5 h-5" />
            <T>Plan Your Mauritius Trip</T>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Airport transfer                                                 */
/* ------------------------------------------------------------------ */

function AirportTransfer() {
  return (
    <section id="transfer" className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a4148] to-[#062f36]" />
      {/* Airport photo (desktop): behind the right side, fading into the teal */}
      <motion.div
        className="absolute top-0 right-[2%] -z-10 hidden aspect-[815/328] w-[58%] xl:block"
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <Image src={airportImg} alt="Sir Seewoosagur Ramgoolam International Airport" fill className="object-cover" sizes="58vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a4148] via-[#0a4148]/0 via-30% to-transparent" />
        <div className="absolute inset-y-0 -right-px w-3 bg-gradient-to-l from-[#0a4148] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-[#083a40]" />
      </motion.div>

      <div className="mx-auto w-[92%] max-w-[1360px] py-16 md:py-20">
        <div className="xl:min-h-[250px]">
          <Reveal variants={fadeLeft} className="max-w-[580px]">
            <p className="flex items-center gap-2 text-[13px] font-semibold tracking-[.1em] uppercase">
              <Plane className="w-4 h-4 text-[#3fe0c5]" />
              <T>Airport Transfer</T>
              <span className="h-0.5 w-12 bg-[#3fe0c5]" />
            </p>
            <h2 className="mt-3 text-[clamp(30px,3.8vw,44px)] font-extrabold leading-[1.12]">
              <T>Start Your Mauritius Trip</T>
              <br />
              <T>with a</T> <em className="text-[#3fe0c5]"><T>Hassle-Free Airport Transfer</T></em>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/90">
              <T>
                Arriving in Mauritius? Let Adil take care of your transfer. Enjoy a punctual, comfortable and stress-free ride from the airport to your hotel, with well-maintained vehicles and a friendly, local service you can count on.
              </T>
            </p>
            <p className="mt-4 inline-flex flex-wrap items-center gap-x-2 rounded-full bg-white/10 px-4 py-1.5 text-[14px] ring-1 ring-white/25">
              <T>As from</T> <strong className="text-[#3fe0c5]">Rs 1,500 – Rs 2,500</strong> <T>for up to 4 persons</T>
            </p>
          </Reveal>

          {/* Airport photo (mobile / tablet) */}
          <Reveal className="relative mt-8 aspect-[815/328] overflow-hidden rounded-[20px] xl:hidden">
            <Image src={airportImg} alt="Sir Seewoosagur Ramgoolam International Airport" fill className="object-cover" sizes="90vw" />
          </Reveal>
        </div>

        {/* Route bar */}
        <Reveal className="mt-10 grid grid-cols-1 items-center gap-6 rounded-[26px] bg-[#06262c]/70 px-6 py-6 ring-1 ring-white/40 backdrop-blur transition-colors duration-300 hover:ring-[#3fe0c5]/70 md:grid-cols-[1fr_auto_1fr_auto] md:px-10">
          <div>
            <p className="pl-11 text-[13px] text-white/80"><T>From</T></p>
            <p className="mt-1 flex items-center gap-3 text-[18px] font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0b2930]"><MapPin className="w-4 h-4" /></span>
              <T>Airport (Mauritius)</T>
            </p>
          </div>
          <ArrowLeftRight className="nudge-x hidden w-7 h-7 text-[#3fe0c5] md:block" />
          <div>
            <p className="pl-11 text-[13px] text-white/80"><T>To</T></p>
            <p className="mt-1 flex items-center gap-3 text-[18px] font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0b2930]"><MapPin className="w-4 h-4" /></span>
              <T>Hotel / Accommodation</T>
            </p>
          </div>
          <div className="flex items-center gap-5 md:border-l md:border-white/30 md:pl-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[13px]"><T>Day</T></span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#3fe0c5] text-white shadow-[0_0_18px_rgba(63,224,197,.6)]"><Sun className="spin-slow w-5 h-5" /></span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[13px]"><T>Night</T></span>
              <span className="grid h-10 w-10 place-items-center rounded-full ring-2 ring-white"><Moon className="w-5 h-5" /></span>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-10 lg:px-[6%]">
          <a
            href="tel:+23057526968"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-white to-[#e6f6f3] px-6 py-3 text-[15px] font-semibold text-[#0b2930] shadow-[0_6px_18px_rgba(0,0,0,.2)] ring-1 ring-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(0,0,0,.28)]"
          >
            <Phone className="ring-phone w-5 h-5 text-[#139a8c]" fill="currentColor" strokeWidth={0} />
            +230 5752 6968 (<T>Call or WhatsApp</T>)
          </a>
          <WhatsAppButton href={AIRPORT_WHATSAPP} arrow={false}>Book Your Airport Transfer on WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Dream it, tell Adil + pre-planned tours                          */
/* ------------------------------------------------------------------ */

function DreamAndTours() {
  const services = [
    { icon: Plane, label: "Airport Transfers" },
    { icon: Car, label: "Island Tours" },
    { icon: Mountain, label: "Customised Tours" },
    { icon: CalendarDays, label: "Flexible & Private Service" },
  ];

  const tours = [
    // Order and photos follow the design.
    { img: resortImg, title: "North Tour", text: "Beaches, capital city and cultural sites.", href: "/north-tour" },
    { img: boatImg, title: "West Tour", text: "Dolphins, coastal views and sunset spots.", href: "/west-tour" },
    { img: islandImg, title: "East Tour", text: "Beautiful beaches and island charm.", href: "/east-tour" },
    { img: leMorneImg, title: "South Tour", text: "Waterfalls, nature parks and scenic landscapes.", href: "/south-tour" },
  ];

  return (
    <section
      id="tours"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#f7fcfd] via-white to-[#f3fafb] pt-10 pb-14 md:pt-12 md:pb-16"
    >
      {/* Palm leaves in the top corners */}
      <PalmLeaf className="sway pointer-events-none absolute -top-16 -left-16 -z-10 w-[130px] rotate-[10deg] opacity-90 md:w-[170px]" />
      <PalmLeaf className="sway sway-rev pointer-events-none absolute -top-16 -right-16 -z-10 w-[130px] -scale-x-100 rotate-[-10deg] opacity-90 md:w-[170px]" />

      <div className="mx-auto w-[92%] max-w-[1360px]">
        {/* Dream it */}
        <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)_minmax(0,1fr)] xl:gap-0">
          <Reveal variants={fadeLeft} className="relative z-10">
            <h2 className="text-[clamp(30px,3.2vw,46px)] font-extrabold leading-[1.08] text-[#0b2930] xl:whitespace-nowrap">
              <span className="relative inline-block pr-8">
                <T>Dream It, Tell Adil!</T>
                <Spark className="absolute -top-3 right-0" />
              </span>
              <span className="relative mt-1 block w-fit font-[family-name:var(--font-script)] text-[1.08em] text-[#139a3c]">
                <T>Let’s Make It Happen!</T>
                <Underline className="absolute -bottom-2 left-4 w-[85%]" />
              </span>
            </h2>
            <p className="mt-6 max-w-[440px] text-[15.5px] leading-relaxed text-[#1c2b2d]">
              <T>Have a specific place in mind? A mix of stops? Or a special experience you’d like to include? Just tell Adil your idea and he’ll create a personalised trip for you.</T>
            </p>
          </Reveal>

          {/* Beach photo that melts into the background on every side */}
          <div className="relative -mx-[6%] hidden h-[300px] xl:block [mask-image:linear-gradient(to_right,transparent,black_22%,black_78%,transparent)]">
            <motion.div
              className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_70%,transparent)]"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              <Image src={leMorneImg} alt="Le Morne beach, Mauritius" fill className="object-cover object-[70%_center]" sizes="460px" />
            </motion.div>
          </div>

          <Reveal variants={fadeRight} className="relative z-10 rounded-[22px] bg-white/95 px-5 py-6 shadow-[0_18px_44px_rgba(11,41,48,.13)] ring-1 ring-[#0b5a55]/10 sm:px-7">
            <h3 className="flex items-start justify-center gap-1 text-[21px] font-bold text-[#0b2930]">
              <T>Our Awesome Services</T>
              <Spark className="-mt-2 w-6 h-6" />
            </h3>
            <motion.ul variants={stagger(0.1, 0.3)} {...inView} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.04 }}
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-b from-white to-[#f2faf9] py-2 pr-4 pl-2 shadow-[0_3px_10px_rgba(11,41,48,.07)] ring-1 ring-[#0b5a55]/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e3f6f2] text-[#0b5a55] transition duration-300 group-hover:bg-[#139a8c] group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[14px] font-semibold leading-tight text-[#0b2930]">
                    <T>{label}</T>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        </div>

        {/* Pre-planned tours */}
        <Reveal className="relative mt-12 text-center md:mt-14">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <span className="hidden shrink-0 items-center gap-2 text-[#139a8c] md:flex">
              <Camera className="bob w-10 h-10 -rotate-12" strokeWidth={1.7} />
              <DashedSwoosh className="w-24 lg:w-36" />
            </span>
            <h2 className="text-[clamp(24px,3vw,38px)] font-extrabold italic leading-tight text-[#0b2930]">
              <T>View Some of Our Pre-Planned Tours</T>
            </h2>
            <span className="hidden shrink-0 items-center gap-2 text-[#139a8c] md:flex">
              <DashedSwoosh className="w-24 -scale-x-100 lg:w-36" />
              <IslandOutline className="bob w-12 h-12 [animation-delay:-1.5s]" />
            </span>
          </div>
          <p className="mx-auto mt-3 max-w-[680px] text-[15.5px] leading-relaxed text-[#1c2b2d]">
            <T>Explore Mauritius with our popular island tours, from stunning beaches and waterfalls to scenic viewpoints and cultural sites. Comfortable, private and at your own pace.</T>
          </p>
        </Reveal>

        <motion.div variants={stagger(0.12)} {...inView} className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {tours.map((t) => (
            <motion.div key={t.title} variants={fadeUp} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <Link
              href={t.href}
              aria-label={`Open ${t.title}`}
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[18px] text-white shadow-[0_12px_30px_rgba(11,41,48,.16)] transition-shadow duration-300 hover:shadow-[0_22px_44px_rgba(11,41,48,.3)]"
            >
              <Image
                src={t.img}
                alt={t.title}
                fill
                placeholder="blur"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                sizes="(min-width:1024px) 330px, (min-width:480px) 46vw, 92vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04414a] via-[#04414a]/75 via-35% to-transparent to-65%" />
              <span className="absolute top-2.5 right-2.5 grid h-7 w-7 place-items-center rounded-full bg-[#06262c]/85 transition duration-300 group-hover:rotate-45 group-hover:bg-[#3fe0c5] group-hover:text-[#06262c]">
                <ArrowUpRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-left transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="flex items-center gap-1.5 text-[17px] font-bold">
                  <MapPin className="w-4.5 h-4.5" fill="currentColor" stroke="#04414a" />
                  <T>{t.title}</T>
                </h3>
                <p className="mt-1 max-w-[220px] text-[13px] leading-snug text-white/95">
                  <T>{t.text}</T>
                </p>
                <span className="mt-2.5 inline-flex items-center gap-1 rounded-full px-3.5 py-1 text-[12.5px] font-semibold ring-[1.5px] ring-white/90 transition group-hover:bg-white group-hover:text-[#0b2930]">
                  <T>View Tour</T> <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** Simple palm frond used as corner decoration. */
function PalmLeaf({ className = "" }: { className?: string }) {
  const leaflets = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="palm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f9e3a" />
          <stop offset="1" stopColor="#1f6b2a" />
        </linearGradient>
      </defs>
      <path d="M8 10 Q 90 40 190 150" stroke="#2d7a2f" strokeWidth="3" fill="none" />
      {leaflets.map((i) => {
        const t = (i + 1) / 14;
        // point along the quadratic curve
        const x = (1 - t) * (1 - t) * 8 + 2 * (1 - t) * t * 90 + t * t * 190;
        const y = (1 - t) * (1 - t) * 10 + 2 * (1 - t) * t * 40 + t * t * 150;
        const len = 58 - Math.abs(i - 5) * 3.2;
        const angle = 20 + t * 35;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <ellipse cx={len / 2} cy="0" rx={len / 2} ry="5.5" fill="url(#palm-g)" transform={`rotate(${angle + 70})`} />
            <ellipse cx={len / 2} cy="0" rx={len / 2} ry="5.5" fill="url(#palm-g)" transform={`rotate(${angle - 75})`} />
          </g>
        );
      })}
    </svg>
  );
}

function DashedSwoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 30" className={`h-auto ${className}`} aria-hidden="true">
      <path d="M2 20 C 30 2, 50 30, 80 14 S 110 10, 118 16" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Rough outline of Mauritius island. */
function IslandOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M26 3c4 1 7 4 9 7 3 3 6 5 7 9 1 4-1 7-2 10-1 4-2 8-5 11-3 3-7 5-11 5-4 0-7-2-9-5-3-3-6-5-7-9-1-4 1-8 3-11 2-3 2-7 5-10 3-3 6-7 10-7z"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 7 + 8. Special request and FAQ                                      */
/* ------------------------------------------------------------------ */

// TODO: confirm these answers with Adil before going live.
const FAQS = [
  {
    q: "How do I book a tour?",
    a: "Simply send Adil a message on WhatsApp with your dates, pickup location and the places you’d like to visit. He’ll reply with a price and confirm your booking.",
  },
  {
    q: "What’s included in the tour price?",
    a: "The price covers a private vehicle with Adil as your driver for the agreed route and duration. Entrance fees, meals and activities are paid separately, so you only pay for what you choose to do.",
  },
  {
    q: "Can tours be customized?",
    a: "Yes, every tour is fully customisable. Add a stop, spend more time somewhere or build your own route from scratch — just tell Adil what you have in mind.",
  },
  {
    q: "What if the weather is bad?",
    a: "Mauritius weather can change quickly. If it rains, Adil can suggest a different part of the island or reschedule your tour to another day.",
  },
  {
    q: "How many people can join a tour?",
    a: "Standard prices are for up to 4 persons. For larger groups, Adil can arrange a bigger vehicle or multiple vehicles — just ask on WhatsApp.",
  },
  {
    q: "Do you provide airport transfers?",
    a: "Yes. Adil offers day and night transfers between the airport and your hotel or villa, as from Rs 1,500 to Rs 2,500 for up to 4 persons.",
  },
];

function SpecialRequestAndFaq() {
  const [open, setOpen] = useState<number | null>(null);

  const cards = [
    { icon: Signpost, title: "Special Stops", text: "Visit specific places that matter to you." },
    { icon: Users, title: "Group & Family Trips", text: "Comfortable travel for families and friends." },
    { icon: Hotel, title: "Hotel & Villa", text: "Pickups & Drop-offs Reliable and on time." },
    { icon: CalendarCheck, title: "Flexible Plans", text: "Adjust your itinerary to suit your needs." },
  ];

  return (
    <section className="relative isolate overflow-hidden text-white">
      <Image src={underwater} alt="" fill className="-z-20 object-cover" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a4a4a]/85 via-[#073a40]/90 to-[#06262c]" />

      <div className="mx-auto w-[92%] max-w-[1360px] pt-12 pb-14 md:pt-14">
        {/* Special request */}
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-[clamp(28px,3.4vw,42px)] font-extrabold leading-[1.12] md:pl-[4%]">
            <T>Have a Special Request</T>
            <br />
            <T>or a</T> <span className="text-[#3fe0c5]"><T>Custom Plan</T></span> <T>in Mind?</T>
          </h2>
          <WhatsAppButton arrow={false} className="self-start md:self-center">Chat with Adil on WhatsApp</WhatsAppButton>
        </Reveal>

        <motion.div variants={stagger(0.12)} {...inView} className="mt-7 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4 lg:px-[3%]">
          {cards.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={hoverLift}
              className="group flex flex-col items-center gap-1.5 rounded-[18px] bg-[#0b4f52]/55 px-3 py-5 text-center ring-1 ring-[#7fe6d6]/45 backdrop-blur-sm transition duration-300 hover:bg-[#0e6062]/70 hover:ring-[#7fe6d6] hover:shadow-[0_0_30px_rgba(63,224,197,.25)] md:px-5"
            >
              <Icon className="mb-1 w-9 h-9 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="text-[15.5px] font-bold leading-snug">
                <T>{title}</T>
              </h3>
              <p className="max-w-[190px] text-[13.5px] leading-snug text-white/90">
                <T>{text}</T>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <Reveal className="mt-10 grid gap-6 rounded-[26px] bg-white p-6 text-[#0b2930] shadow-[0_20px_50px_rgba(0,0,0,.25)] md:p-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-10">
          <div className="lg:pt-4">
            <h2 className="text-[clamp(28px,3.2vw,40px)] font-extrabold leading-[1.12] text-[#126e55]">
              <T>Frequently</T>
              <br />
              <T>Asked Questions</T>
            </h2>
            <Underline className="mt-2 w-36" />
          </div>

          <div>
            <motion.ul variants={stagger(0.07, 0.2)} {...inView} className="flex flex-col gap-2.5">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <motion.li
                    key={f.q}
                    variants={fadeUp}
                    className={`rounded-xl bg-gradient-to-b from-white to-[#f6f9f9] shadow-[0_2px_8px_rgba(11,41,48,.06)] ring-1 transition duration-300 hover:ring-[#139a8c]/40 ${isOpen ? "ring-[#139a8c]/50" : "ring-[#0b2930]/8"}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-[15px] font-semibold text-[#0b2930] hover:text-[#139a8c]"
                    >
                      <T>{f.q}</T>
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <p className="overflow-hidden px-4 text-[14px] leading-relaxed text-[#3b4c4f]">
                        <span className="block pb-3">
                          <T>{f.a}</T>
                        </span>
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>

            <p className="mt-6 rounded-xl bg-[#f3e3bd] px-5 py-3 text-center text-[15px] text-[#0b2930]">
              <T>Have a different question?</T>{" "}
              <Link href="/contact-us" className="font-semibold underline underline-offset-2 hover:text-[#139a8c]">
                <T>Contact us directly.</T>
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-animate]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <main className={`${poppins.variable} ${kalam.variable} overflow-x-clip bg-[#082733] font-[family-name:var(--font-home)] text-[#0d1b1e]`}>
      <Navbar />
      <Hero />
      <Reviews />
      <HowBooking />
      <LocalBuddy />
      <AirportTransfer />
      <DreamAndTours />
      <SpecialRequestAndFaq />
      <Footer />

      <style>{`
        /* Footer reveal (Footer uses data-animate) */
        [data-animate="fade"]{
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .6s ease, transform .6s ease;
        }
        [data-animate="fade"].in-view{
          opacity: 1;
          transform: translateY(0);
        }

        /* Decorative loops */
        @keyframes float-slow { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-12px) } }
        .float-slow{ animation: float-slow 6s ease-in-out infinite; }

        @keyframes blob { 0%,100%{ transform: translate(0,0) scale(1) } 33%{ transform: translate(30px,-20px) scale(1.1) } 66%{ transform: translate(-20px,15px) scale(.95) } }
        .hero-blob{ animation: blob 12s ease-in-out infinite; }

        @keyframes shimmer { 0%{ background-position: -200% 0 } 100%{ background-position: 200% 0 } }
        .shimmer-text{
          background: linear-gradient(90deg,#3fe0c5 0%,#3fe0c5 40%,#c9fff4 50%,#3fe0c5 60%,#3fe0c5 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: shimmer 4s linear infinite;
        }

        @keyframes spark { 0%,100%{ transform: scale(1) rotate(0) } 50%{ transform: scale(1.18) rotate(-8deg) } }
        .spark{ animation: spark 2.4s ease-in-out infinite; transform-origin: bottom left; }

        /* Tailwind's rotate/scale utilities use separate CSS properties, so these only add the sway on top. */
        @keyframes sway { 0%,100%{ transform: rotate(0) } 50%{ transform: rotate(6deg) } }
        @keyframes sway-rev { 0%,100%{ transform: rotate(0) } 50%{ transform: rotate(-6deg) } }
        .sway{ animation: sway 6s ease-in-out infinite; transform-origin: top left; }
        .sway.sway-rev{ animation-name: sway-rev; transform-origin: top right; }

        @keyframes nudge-x { 0%,100%{ transform: translateX(0) } 50%{ transform: translateX(5px) } }
        .nudge-x{ animation: nudge-x 1.6s ease-in-out infinite; }

        @keyframes bob { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } }
        .bob{ animation: bob 3.2s ease-in-out infinite; }

        @keyframes spin-slow { to { transform: rotate(360deg) } }
        .spin-slow{ animation: spin-slow 10s linear infinite; }

        @keyframes ring-phone { 0%,86%,100%{ transform: rotate(0) } 88%{ transform: rotate(-16deg) } 90%{ transform: rotate(14deg) } 92%{ transform: rotate(-12deg) } 94%{ transform: rotate(10deg) } 96%{ transform: rotate(-4deg) } }
        .ring-phone{ animation: ring-phone 3.5s ease-in-out infinite; }

        @keyframes pulse-glow { 0%,100%{ box-shadow: 0 8px 22px rgba(26,154,67,.35), 0 0 0 0 rgba(47,191,91,.45) } 50%{ box-shadow: 0 8px 22px rgba(26,154,67,.35), 0 0 0 12px rgba(47,191,91,0) } }
        .pulse-glow{ animation: pulse-glow 2.4s ease-out infinite; }

        @media (prefers-reduced-motion: reduce){
          [data-animate="fade"]{ opacity: 1; transform: none; transition: none; }
          .float-slow,.hero-blob,.shimmer-text,.spark,.sway,.nudge-x,.bob,.spin-slow,.ring-phone,.pulse-glow,.animate-ping{ animation: none !important; }
          .shimmer-text{ color: #3fe0c5; background: none; }
        }
      `}</style>
    </main>
    </MotionConfig>
  );
}
