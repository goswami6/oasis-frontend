"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import {
  Settings, Cpu, Layout, Smartphone,
  ArrowRight, ShieldCheck, Box,
  Zap, Clock, MousePointer2, Layers,
  Compass, ChevronDown, Plus, Minus,
  Quote, Star, CheckCircle2, Play,
  MapPin, TrendingUp, BarChart3, Coffee,
  Building2
} from "lucide-react";

import Image from "next/image";

const MenuArchitecture = () => {
  const items = [
    { name: "Cutting Chai", desc: "Traditional 60ml serving", image: "/assets/menu/oasis_cutting_chai.png" },
    { name: "Specialty Green Tea", desc: "Organic loose-leaf restoration", image: "/assets/menu/oasis_specialty_green_tea.png" },
    { name: "Masala Chai", desc: "Signature spice blend", image: "/assets/menu/oasis_masala_chai.png" },
    { name: "Cold Coffee", desc: "Frothy, layered brew", image: "/assets/menu/oasis_cold_coffee.png" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] border-y border-primary-deep/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            Kiosk Exclusive Menu
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep italic mb-4 md:mb-10 leading-tight">
            High-Efficiency{" "}
            <span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-4 md:underline-offset-8">
              Menu.
            </span>
          </h2>

          <p className="text-primary-deep/60 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto italic">
            "Optimized for 24/7 managed flow with precise operational overhead."
          </p>
        </div>

        {/* ================= MOBILE SCROLL ================= */}
        <div className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
          {items.map((item, i) => (
            <div key={i} className="min-w-[240px] snap-center">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 border border-primary-deep/5 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-deep/10" />
                </div>

                <div className="text-center px-2">
                  <h4 className="text-lg font-serif text-primary-deep mb-1">
                    {item.name}
                  </h4>

                  <p className="text-[10px] uppercase tracking-widest text-primary-deep/40">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-3 gap-12 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 rounded-[48px] overflow-hidden mb-8 border border-primary-deep/5 shadow-2xl transition-all duration-700 group-hover:scale-95">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-deep/10" />
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-serif text-primary-deep mb-2 group-hover:text-primary-mist transition-colors">
                  {item.name}
                </h4>

                <p className="text-[10px] uppercase font-bold tracking-widest text-primary-deep/30">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};



const MediaHub = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/assets/oasis_kiosk_main.png", type: "video" },
    { src: "/assets/kiosk1.png", type: "image", title: "Industrial Build" },
    { src: "/assets/kiosk2.png", type: "image", title: "Smart Node" },
    { src: "/assets/kiosk3.png", type: "image", title: "Autonomous Flow" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24 text-center md:text-left">
          <span className="text-primary-mist tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
            The Media Mesh
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif text-white italic leading-tight">
            Unified <br />
            <span className="text-primary-mist not-italic">Engineering Narrative.</span>
          </h2>
        </div>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
        >
          {images.map((item, i) => (
            <div key={i} className="min-w-[280px] snap-center">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl group">

                <NextImage
                  src={item.src}
                  alt="Media"
                  fill
                  className="object-cover opacity-80"
                />

                {/* VIDEO PLAY */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <Play className="text-white ml-1" size={18} />
                    </div>
                  </div>
                )}

                {/* LABEL */}
                {item.title && (
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] uppercase tracking-widest text-primary-mist">
                      {item.title}
                    </span>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP GRID (UNCHANGED) ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 auto-rows-[300px]">

          {[
            { src: "/assets/oasis_kiosk_main.png", span: "col-span-2 row-span-2", type: "video" },
            { src: "/assets/kiosk1.png", span: "", type: "image", title: "Industrial Build" },
            { src: "/assets/kiosk2.png", span: "", type: "image", title: "Smart Node" },
            { src: "/assets/kiosk3.png", span: "col-span-2", type: "image", title: "Autonomous Flow" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[56px] overflow-hidden border border-white/10 group shadow-3xl bg-white/5 ${item.span}`}
            >
              <NextImage
                src={item.src}
                alt="Media"
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition duration-1000"
              />

              {/* VIDEO */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center">
                    <Play className="text-white ml-2" size={30} />
                  </div>
                </div>
              )}

              {/* LABEL */}
              {item.title && (
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary-mist">
                    {item.title}
                  </span>
                </div>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

const PrecisionShowcase = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white text-primary-deep relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

        {/* ================= TEXT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-gold tracking-[0.25em] md:tracking-[0.3em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            The Engineering Heart
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic mb-6 md:mb-10 leading-tight">
            Mechanical <br />
            Precision,{" "}
            <span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-4 md:underline-offset-8">
              Perfect Cup.
            </span>
          </h2>

          <p className="text-primary-deep/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-12">
            The Kiosk integrates industrial-grade precision tools with bespoke coffee mixology sensors. It maintains the same quality standard as our flagship Lounge+, optimized for efficiency.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Cpu, title: "AI-Prep", desc: "Humidity & grind control." },
              { icon: Settings, title: "Precision", desc: "Minimal maintenance." },
              { icon: Smartphone, title: "Pulse Cloud", desc: "Live analytics." },
              { icon: Layers, title: "Modular", desc: "Setup in 24 hours." }
            ].map((item, i) => (
              <div key={i} className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg md:rounded-xl bg-primary-deep/5 flex items-center justify-center text-primary-mist hover:bg-primary-mist hover:text-white transition">
                  <item.icon size={18} className="sm:size-[20px] md:size-[24px]" />
                </div>

                <h4 className="text-sm sm:text-base md:text-lg font-serif uppercase">
                  {item.title}
                </h4>

                <p className="text-[11px] sm:text-xs md:text-sm opacity-50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="relative order-first lg:order-none">

          <div className="relative h-[260px] sm:h-[350px] md:h-[500px] lg:h-[650px] rounded-2xl sm:rounded-3xl md:rounded-[48px] lg:rounded-[64px] border border-primary-deep/5 overflow-hidden shadow-xl bg-[#FAF9F6]">

            <NextImage
              src="/assets/oasis_kiosk_main.png"
              alt="Oasis Kiosk View"
              fill
              className="object-cover transition-transform duration-700 md:duration-1000 group-hover:scale-110 opacity-90"
            />

            <div className="absolute inset-0 bg-primary-deep/5" />

            {/* STAT CARD */}
            <div className="absolute bottom-3 sm:bottom-5 md:bottom-10 right-3 sm:right-5 md:right-10 p-3 sm:p-4 md:p-8 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[32px] text-primary-deep shadow-xl border border-primary-deep/5">

              <div className="text-lg sm:text-2xl md:text-4xl font-serif uppercase tracking-tight">
                100%
              </div>

              <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary-deep/50">
                Human-Managed
              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
);

const EconomicsPlacement = () => {
  const economics = [
    { label: "Daily Avg Cups", value: "200-350", suffix: "High Traffic" },
    { label: "Net Margin", value: "45%", suffix: "Low Overhead" },
    { label: "Break-Even", value: "8-12", suffix: "Months" },
    { label: "Setup Time", value: "21", suffix: "Days Genesis" }
  ];

  const placements = [
    { area: "Airports & Rail", icon: <MapPin />, desc: "High churn, 24/7 managed revenue flow." },
    { area: "Malls & Lobbies", icon: <Building2 />, desc: "Elite visibility with minimal footprint." },
    { area: "Corporate Hubs", icon: <Coffee />, desc: "Steady subscription-based member flow." }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#FAF9F6] text-primary-deep border-y border-primary-deep/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        <div className="grid lg:grid-cols-2 gap-12 md:gap-32">

          {/* ================= ECONOMICS ================= */}
          <div>
            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
              Unit Economics
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif italic mb-6 md:mb-12">
              The ROI <span className="text-primary-mist not-italic">Matrix.</span>
            </h2>

            {/* -------- MOBILE BULLET -------- */}
            <ul className="md:hidden space-y-4">
              {economics.map((e, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-mist shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">
                      {e.label}: <span className="text-primary-deep">{e.value}</span>
                    </p>
                    <p className="text-xs text-primary-deep/50">{e.suffix}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* -------- DESKTOP CARDS -------- */}
            <div className="hidden md:grid grid-cols-2 gap-10">
              {economics.map((e, i) => (
                <div key={i} className="p-10 bg-white rounded-[40px] border border-primary-deep/5 shadow-xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary-deep/30 mb-2">
                    {e.label}
                  </div>
                  <div className="text-4xl font-serif text-primary-deep mb-1">
                    {e.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-primary-mist font-bold">
                    {e.suffix}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PLACEMENTS ================= */}
          <div className="flex flex-col justify-center">

            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
              Strategic Context
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic mb-6 md:mb-12 leading-tight">
              Where It <span className="text-primary-deep/30 italic">Dominates.</span>
            </h2>

            {/* -------- MOBILE BULLET -------- */}
            <ul className="md:hidden space-y-5">
              {placements.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary-mist shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">{p.area}</p>
                    <p className="text-xs text-primary-deep/50">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* -------- DESKTOP ORIGINAL -------- */}
            <div className="hidden md:block space-y-10">
              {placements.map((p, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-deep text-white flex items-center justify-center shrink-0 group-hover:bg-primary-mist group-hover:text-primary-deep transition-all duration-500">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif uppercase tracking-tight text-primary-deep mb-2">
                      {p.area}
                    </h4>
                    <p className="text-sm text-primary-deep/50">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

const CustomerReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      name: "Sameer Khan",
      role: "Metro Hub Investor",
      quote:
        "The Kiosk was our entry point into the OASIS ecosystem. It's incredibly low maintenance and the digital tracking is a game changer.",
      metrics: "32% MoM Growth",
    },
    {
      name: "Aparna Reddy",
      role: "Airport Spoke Owner",
      quote:
        "Minimum staff requirement and perfect consistency. We've scaled to 3 kiosks in 6 months because the unit economics just work.",
      metrics: "9-Month Break-Even",
    },
  ];

  // Duplicate for infinite feel
  const extended = [...reviews, ...reviews];

  useEffect(() => {
    if (isPaused) return;

    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-20 bg-white text-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
            Investor Proof
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif italic">
            Partner <span className="text-primary-mist not-italic">Voices.</span>
          </h2>
        </div>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6"
        >
          {extended.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[480px] snap-center"
            >
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-[#FAF9F6] rounded-3xl md:rounded-[64px] border border-primary-deep/5 relative">

                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 md:top-10 md:right-10 text-primary-mist/10" size={50} />

                {/* Stars */}
                <div className="flex gap-1 mb-4 md:mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg md:text-2xl font-serif italic mb-6 md:mb-10 text-primary-deep/80 leading-relaxed">
                  "{rev.quote}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-primary-deep/5 pt-4 md:pt-8">
                  <div>
                    <h5 className="text-[11px] md:text-xs font-black uppercase tracking-widest text-primary-deep mb-1">
                      {rev.name}
                    </h5>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary-deep/40">
                      {rev.role}
                    </p>
                  </div>

                  <div className="bg-primary-mist/10 px-3 py-1 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase text-primary-mist tracking-widest">
                    {rev.metrics}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is the kiosk restocked?",
      a: "Restocking is managed by the central Regional Hub (Lounge+). Our AI predicts consumption and triggers a replenishment window for the hub team."
    },
    {
      q: "What are the power requirements?",
      a: "The Kiosk runs on a standard 15A industrial socket with built-in power conditioning and UPS back-up for consistent precision operations."
    },
    {
      q: "Is local labor required?",
      a: "Minimum. A daily 15-minute maintenance check is required, which can be handled by your hub team or local property staff."
    },
    {
      q: "How does the OASIS Credit system work?",
      a: "Users pay via the Oasis App or Card. Credits are cleared in real-time to the owner's account after platform commission."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-deep text-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-24">
          <span className="text-primary-mist tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
            FAQ Hub
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight">
            Technical{" "}
            <span className="text-primary-mist not-italic">Queries.</span>
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-primary-mist/30 transition-colors"
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-8 flex items-center justify-between gap-4 text-left group"
              >
                <h4 className="text-sm sm:text-base md:text-xl font-serif leading-snug">
                  {faq.q}
                </h4>

                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center transition-all shrink-0 ${openIndex === i
                    ? "bg-primary-mist text-primary-deep"
                    : "group-hover:bg-white/5"
                    }`}
                >
                  {openIndex === i ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-8 text-white/60 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const KioskPage = () => {
  const specs = [
    { label: "Optimal Area", value: "50 - 120 SQFT" },
    { label: "Technical Nodes", value: "Precision Brew Interface" },
    { label: "Investment", value: "₹5 - 10 Lakhs" },
    { label: "Setup Time", value: "21 Days Genesis" },
    { label: "Brew Precision", value: "0.01mm Grind" },
    { label: "Connectivity", value: "5G Cloud Sync" }
  ];

  return (
    <>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-primary-deep overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/oasis_kiosk_main.png"
            alt="Oasis Kiosk Hero"
            fill
            priority
            className="object-cover opacity-50 md:opacity-60"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/70 md:via-primary-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl sm:max-w-2xl md:max-w-4xl"
          >

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight">
              Oasis Kiosk
            </h1>

            {/* BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">

              <Link
                href="/"
                className="text-white/50 hover:text-primary-mist transition-colors"
              >
                Home
              </Link>

              <span className="text-white/30">/</span>

              <Link
                href="/models"
                className="text-white/50 hover:text-primary-mist transition-colors"
              >
                Models
              </Link>

              <span className="text-white/30">/</span>

              <span className="text-primary-mist">Kiosk</span>

            </div>

          </motion.div>
        </div>
      </section>

      <PrecisionShowcase />
      <EconomicsPlacement />
      <MenuArchitecture />

      {/* Tech Specifications (Grid Style) */}
      <section className="py-12 md:py-20 bg-white text-primary-deep border-b border-primary-deep/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">

          {/* HEADER */}
          <div className="text-center mb-10 md:mb-24">
            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
              The Tech Sheet
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic">
              Project{" "}
              <span className="text-primary-mist not-italic">Parameters.</span>
            </h2>
          </div>

          {/* ================= MOBILE BULLET ================= */}
          <ul className="md:hidden space-y-5">
            {specs.map((s: any, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary-mist shrink-0" />

                <div>
                  <p className="text-sm font-semibold text-primary-deep">
                    {s.label}
                  </p>

                  <p className="text-base font-serif text-primary-deep">
                    {s.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {specs.map((s: any, i: number) => (
              <div key={i} className="flex flex-col gap-4 group">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-deep/30 group-hover:text-primary-mist transition-colors">
                  {s.label}
                </span>

                <span className="text-4xl font-serif text-primary-deep border-b border-primary-deep/10 pb-4">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <MediaHub />
      <CustomerReviews />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10">

          <div className="relative p-6 sm:p-10 md:p-16 lg:p-20 
          bg-primary-deep 
          rounded-none sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] 
          text-white flex flex-col md:flex-row items-center justify-between 
          gap-8 md:gap-12 lg:gap-16 shadow-xl md:shadow-3xl overflow-hidden">

            {/* BACKGROUND ICON */}
            <div className="absolute top-0 right-0 p-6 sm:p-10 md:p-12 opacity-5">
              <TrendingUp size={120} className="sm:size-[160px] md:size-[200px]" />
            </div>

            {/* CONTENT */}
            <div className="max-w-xl md:max-w-2xl relative z-10 text-center md:text-left px-4 sm:px-0">

              <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 md:mb-8 leading-tight italic">
                The Perfect Spoke for <br />
                Your Cluster.
              </h4>

              <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-12">
                Low overhead, 24/7 managed profitability, and elite technical status. Ideal for malls, lobbies, and luxury campuses.
              </p>

              {/* BUTTON */}
              <Link
                href="/reserve/kiosk"
                className="inline-block bg-primary-mist text-primary-deep px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] sm:text-xs hover:bg-white hover:scale-105 transition-all shadow-lg md:shadow-xl"
              >
                Initiate Kiosk Onboarding
              </Link>

            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default KioskPage;
