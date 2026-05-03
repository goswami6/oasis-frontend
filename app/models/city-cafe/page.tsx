"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Building2, Utensils, Users, Globe
} from "lucide-react";

import Image from "next/image";

const MenuArchitecture = () => {
  const items = [
    { name: "Cutting Chai", desc: "Signature 60ml brew", image: "/assets/menu/oasis_cutting_chai.png" },
    { name: "Masala Chai", desc: "Elite spice-infused tea", image: "/assets/menu/oasis_masala_chai.png" },
    { name: "Cold Coffee", desc: "Layered gourmet blend", image: "/assets/menu/oasis_cold_coffee.png" },
    { name: "Sandwich", desc: "Artisanal grilled club", image: "/assets/menu/oasis_sandwich.png" },
    { name: "Maggi", desc: "Gourmet vegetable noodles", image: "/assets/menu/oasis_maggi.png" },
    { name: "Pakora", desc: "Crispy vegetable fritters", image: "/assets/menu/oasis_pakora.png" },
    { name: "Toast", desc: "Golden buttered artisanal bread", image: "/assets/menu/oasis_toast.png" },
    { name: "Combo Meals", desc: "Full signature platter", image: "/assets/menu/oasis_combo_meal.png" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] border-y border-primary-deep/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            City Cafe Signature Menu
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif text-primary-deep italic mb-4 md:mb-10 leading-tight">
            Full{" "}
            <span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-4 md:underline-offset-8">
              Signature Suite.
            </span>
          </h2>

          <p className="text-primary-deep/60 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto italic">
            "The full spectrum of OASIS culinary mastery, engineered for social density and high-repeat loyalty."
          </p>
        </div>

        {/* ================= MOBILE SCROLL ================= */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar md:hidden">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="min-w-[200px] snap-center"
            >
              <div className="group">

                <div className="relative h-52 rounded-2xl overflow-hidden mb-4 border border-primary-deep/5 shadow-md transition-all duration-500 group-hover:scale-95">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-deep/10" />
                </div>

                <div className="text-center">
                  <h4 className="text-sm font-serif text-primary-deep mb-1">
                    {item.name}
                  </h4>
                  <p className="text-[8px] uppercase font-bold tracking-widest text-primary-deep/40">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-72 rounded-[48px] overflow-hidden mb-6 border border-primary-deep/5 shadow-xl transition-all duration-700 group-hover:scale-95">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-deep/10" />
              </div>

              <div className="text-center">
                <h4 className="text-xl font-serif text-primary-deep mb-1 group-hover:text-primary-mist transition-colors">
                  {item.name}
                </h4>
                <p className="text-[9px] uppercase font-bold tracking-widest text-primary-deep/30">
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
  const images = [
    { src: "/assets/oasis_citycafe_main.png", span: "md:col-span-2 md:row-span-2", type: "video" },
    { src: "/assets/lounge_experience.png", span: "md:col-span-1 md:row-span-1", type: "image", title: "Dine-in Vibe" },
    { src: "/assets/cafe_models.png", span: "md:col-span-1 md:row-span-1", type: "image", title: "Urban Pulse" },
    { src: "/assets/brand_story_2.png", span: "md:col-span-2 md:row-span-1", type: "image", title: "High-Street Asset" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-10 sm:mb-14 md:mb-24 text-center md:text-left">
          <span className="text-primary-mist tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
            The Media Mesh
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif text-white italic leading-tight">
            Urban <br />
            <span className="text-primary-mist not-italic">
              Lifestyle Center.
            </span>
          </h2>
        </div>

        {/* ================= MOBILE SCROLL ================= */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar md:hidden">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="min-w-[260px] snap-center"
            >
              <div className="relative h-52 rounded-2xl overflow-hidden border border-white/10 bg-white/5">

                {/* VIDEO */}
                {item.type === "video" ? (
                  <>
                    <NextImage
                      src={item.src}
                      alt="Video"
                      fill
                      className="object-cover opacity-60"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <Play size={20} className="text-white ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <NextImage
                      src={item.src}
                      alt="Image"
                      fill
                      className="object-cover opacity-80"
                    />

                    <div className="absolute bottom-3 left-3">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-primary-mist">
                        {item.title}
                      </span>
                    </div>
                  </>
                )}

              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[40px] md:rounded-[56px] overflow-hidden border border-white/10 group shadow-3xl bg-white/5 ${item.span}`}
            >

              {item.type === "video" ? (
                <div className="absolute inset-0 cursor-pointer">
                  <NextImage
                    src={item.src}
                    alt="City Cafe Video Showcase"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  />

                  <div className="absolute inset-0 bg-primary-mist/5 group-hover:bg-transparent transition-all" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-mist transition-all duration-500 shadow-2xl">
                      <Play className="text-white ml-2 group-hover:text-primary-deep" size={32} />
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-10 p-8 bg-primary-deep/60 backdrop-blur-2xl rounded-3xl border border-white/10 max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="text-primary-mist text-[10px] uppercase mb-1">
                      Play Experience
                    </div>
                    <h4 className="text-white font-serif text-xl">
                      The Modern Urban Third Space
                    </h4>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0">
                  <NextImage
                    src={item.src}
                    alt={`Detail ${i}`}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary-mist">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const ModelFeatures = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white text-primary-deep relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 lg:gap-24 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-gold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[9px] sm:text-[10px] md:text-[11px] mb-4 sm:mb-6 block">
            Model Density
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic mb-6 sm:mb-8 md:mb-10 leading-tight">
            Prime Urban <br />
            <span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-4 md:underline-offset-8">
              Third Space.
            </span>
          </h2>

          <p className="text-primary-deep/60 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10 md:mb-12">
            Choosing the City Cafe model is the best decision for premium urban locations. The balance between dine-in atmosphere and delivery efficiency is perfectly engineered for the modern metropolitan member.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: Utensils,
                title: "Full Menu",
                desc: "Access to the complete OASIS T-CAFE chai, coffee, and snack range."
              },
              {
                icon: Users,
                title: "Community Hub",
                desc: "Designed for social density and professional human connections."
              },
              {
                icon: MapPin,
                title: "Prime Density",
                desc: "Engineered for high-footfall regional urban districts."
              },
              {
                icon: Globe,
                title: "Global Standard",
                desc: "Interior architecture inspired by world-class lifestyle centers."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-deep/5 flex items-center justify-center text-primary-mist transition-colors hover:bg-primary-mist hover:text-white shrink-0">
                    <item.icon size={20} className="sm:size-[24px]" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg uppercase tracking-tight">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-primary-deep/50 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="relative h-[280px] sm:h-[400px] md:h-[550px] lg:h-[650px] rounded-2xl sm:rounded-3xl md:rounded-[64px] border border-primary-deep/5 overflow-hidden group shadow-xl md:shadow-3xl bg-[#FAF9F6]">

            <NextImage
              src="/assets/lounge_plus_branded_1.png"
              alt="Oasis City Cafe View"
              fill
              className="object-cover transition-transform duration-700 md:duration-1000 group-hover:scale-110 opacity-90"
            />

            <div className="absolute inset-0 bg-primary-deep/5" />

            {/* FLOATING BOX */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 p-4 sm:p-6 md:p-10 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[40px] text-primary-deep shadow-xl md:shadow-2xl border border-primary-deep/5">

              <div className="text-xl sm:text-2xl md:text-4xl font-serif mb-1 uppercase tracking-tighter">
                60 Days
              </div>

              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary-deep/40">
                From Genesis to Launch
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
    { label: "Daily Avg Cups", value: "400-600", suffix: "Urban Density" },
    { label: "Net Margin", value: "35%", suffix: "Sustainable Scale" },
    { label: "Break-Even", value: "18-22", suffix: "Months" },
    { label: "Investment", value: "₹20-35L", suffix: "High-Yield Asset" }
  ];

  const placements = [
    { area: "Urban Marketplaces", icon: <Building2 />, desc: "Primary high-street assets with massive daily throughput." },
    { area: "High-End Neighborhoods", icon: <MapPin />, desc: "Securing the lifestyle loyalty of local urban professionals." },
    { area: "Commercial Tech Parks", icon: <Coffee />, desc: "Serving as the third space for modern corporate clusters." }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] text-primary-deep border-y border-primary-deep/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32">

          {/* ================= ECONOMICS ================= */}
          <div>
            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
              Unit Economics
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif italic mb-8 md:mb-12 leading-tight">
              Urban <br />
              <span className="text-primary-mist not-italic">Performance.</span>
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
              {economics.map((e, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 md:p-10 bg-white rounded-2xl sm:rounded-3xl md:rounded-[40px] border border-primary-deep/5 shadow-md md:shadow-xl"
                >
                  <div className="text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary-deep/30 mb-1 md:mb-2">
                    {e.label}
                  </div>

                  <div className="text-lg sm:text-2xl md:text-4xl font-serif text-primary-deep mb-1">
                    {e.value}
                  </div>

                  <div className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-primary-mist font-bold">
                    {e.suffix}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PLACEMENTS ================= */}
          <div className="flex flex-col justify-center">

            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
              Strategic Context
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic mb-8 md:mb-12 leading-tight">
              Master <br />
              <span className="text-primary-deep/30 italic">
                Locality.
              </span>
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {placements.map((p, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 md:gap-8 group">

                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-primary-deep text-white flex items-center justify-center shrink-0 group-hover:bg-primary-mist group-hover:text-primary-deep transition-all duration-500">
                    {p.icon}
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-serif uppercase tracking-tight text-primary-deep mb-1 md:mb-2">
                      {p.area}
                    </h4>

                    <p className="text-xs sm:text-sm font-light text-primary-deep/60 leading-relaxed">
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
      name: "Neha Sharma",
      role: "City Cafe Partner",
      quote:
        "The City Cafe model redefined our local market. The balance between dine-in atmosphere and delivery efficiency is perfectly engineered for urban professionals.",
      metrics: "35% MoM Profitability",
    },
    {
      name: "Arjun Khanna",
      role: "Tech Park Asset Owner",
      quote:
        "By integrating the City Cafe into our corporate cluster, we’ve secured a 90% member retention rate. The brand’s tech-forward aesthetic is a huge draw.",
      metrics: "18-Month ROI",
    },
  ];

  // Auto-scroll (same kiosk behavior)
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
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white text-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-24">
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            Investor Proof
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif italic mb-4 md:mb-6">
            Partner{" "}
            <span className="text-primary-mist not-italic">
              Voices.
            </span>
          </h2>
        </div>

        {/* ================= MOBILE SCROLL ================= */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar md:hidden"
        >
          {reviews.map((rev, i) => (
            <div key={i} className="min-w-[280px] snap-center">
              <div className="p-6 bg-[#FAF9F6] rounded-2xl border border-primary-deep/5 relative">

                <Quote className="absolute top-4 right-4 text-primary-mist/10" size={40} />

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                <p className="text-sm font-serif italic mb-6 text-primary-deep/80 leading-relaxed">
                  "{rev.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-primary-deep/5 pt-4">
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-primary-deep">
                      {rev.name}
                    </h5>
                    <p className="text-[9px] uppercase text-primary-deep/40">
                      {rev.role}
                    </p>
                  </div>

                  <div className="bg-primary-mist/10 px-3 py-1 rounded-full text-[9px] font-black uppercase text-primary-mist">
                    {rev.metrics}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid md:grid-cols-2 gap-12">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-16 bg-[#FAF9F6] rounded-[64px] border border-primary-deep/5 relative"
            >

              <Quote className="absolute top-10 right-10 text-primary-mist/10" size={80} />

              <div className="flex gap-1 mb-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-accent-gold text-accent-gold" />
                ))}
              </div>

              <p className="text-2xl font-serif italic mb-12 text-primary-deep/80 leading-relaxed">
                "{rev.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-primary-deep/5 pt-10">
                <div>
                  <h5 className="font-black uppercase tracking-widest text-xs text-primary-deep mb-1">
                    {rev.name}
                  </h5>
                  <p className="text-[10px] uppercase tracking-widest text-primary-deep/40">
                    {rev.role}
                  </p>
                </div>

                <div className="bg-primary-mist/10 px-4 py-2 rounded-full text-[10px] font-black uppercase text-primary-mist tracking-widest">
                  {rev.metrics}
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
      q: "What is the optimal space layout?",
      a: "City Cafes perform best at 500-1000 sqft with a 60/40 split between dine-in area and high-efficiency kitchen nodes."
    },
    {
      q: "What menu items are supported?",
      a: "The City Cafe supports the full OASIS premium menu: signature chai blends, specialty roasts, and an expanded ethno-fusion snack range."
    },
    {
      q: "What are the labor requirements?",
      a: "Typically 4-6 staff members across shifts, including certified OASIS mixologists and node administrators."
    },
    {
      q: "How are regional benchmarks set?",
      a: "We provide data-driven target metrics based on local urban density and competitor proximity to ensure your ROI path is clear."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-primary-deep text-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-24">
          <span className="text-primary-mist tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            FAQ Hub
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif italic leading-tight">
            Technical{" "}
            <span className="text-primary-mist not-italic">
              Queries.
            </span>
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
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
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


const CityCafePage = () => {
  const specs = [
    { label: "Optimal Area", value: "500 - 1000 SQFT" },
    { label: "Peak Capacity", value: "Full Menu Support" },
    { label: "Asset Type", value: "Urban Core Asset" },
    { label: "Investment", value: "₹20 - 35 Lakhs" },
    { label: "Setup Time", value: "60 Days Genesis" },
    { label: "Throughput", value: "High Dine-in/Delivery" }
  ];

  return (
    <>

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 bg-primary-deep overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/oasis_citycafe_main.png"
            alt="Oasis City Cafe Hero"
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

            {/* HEADING */}
            <h1 className="
            font-serif text-white uppercase tracking-tight leading-[1.1]
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
            mb-4 md:mb-6
          ">
              Oasis City Cafe
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

              <span className="text-primary-mist">
                City Cafe
              </span>

            </div>

          </motion.div>
        </div>
      </section>

      <ModelFeatures />
      <EconomicsPlacement />
      <MenuArchitecture />

      {/* Tech Specifications (Grid Style) */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-primary-deep border-b border-primary-deep/5">

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">

          {/* HEADER */}
          <div className="text-center mb-10 sm:mb-14 md:mb-24">
            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
              The Tech Sheet
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic leading-tight">
              Project{" "}
              <span className="text-primary-mist not-italic">
                Parameters.
              </span>
            </h2>
          </div>

          {/* ================= MOBILE LIST ================= */}
          <div className="flex flex-col gap-5 sm:gap-6 md:hidden">
            {specs.map((s, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-primary-deep/10 pb-3"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary-deep/40">
                  {s.label}
                </span>

                <span className="text-lg font-serif text-primary-deep">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col gap-4 group">

                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-deep/30 group-hover:text-primary-mist transition-colors">
                  {s.label}
                </span>

                <span className="text-3xl lg:text-4xl font-serif text-primary-deep border-b border-primary-deep/10 pb-4">
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

          <div className="
      relative 
      p-6 sm:p-10 md:p-16 lg:p-20 
      bg-primary-deep 
      text-white 
      flex flex-col md:flex-row 
      items-center md:items-start 
      justify-between 
      gap-8 md:gap-12 lg:gap-16 
      shadow-xl md:shadow-3xl 
      overflow-hidden

      rounded-none sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px]
    ">

            {/* BG ICON */}
            <div className="absolute top-0 right-0 p-6 sm:p-10 md:p-12 opacity-5">
              <TrendingUp size={120} className="sm:size-[160px] md:size-[200px]" />
            </div>

            {/* CONTENT */}
            <div className="max-w-xl md:max-w-2xl relative z-10 text-center md:text-left">

              <h4 className="
          text-xl sm:text-2xl md:text-4xl lg:text-5xl 
          font-serif 
          mb-4 sm:mb-6 md:mb-8 
          leading-tight italic
        ">
                The Modern Urban Third Space.
              </h4>

              <p className="
          text-white/60 
          text-sm sm:text-base md:text-lg lg:text-xl 
          leading-relaxed 
          mb-6 sm:mb-8 md:mb-12
        ">
                Combining diner density with rapid-restock technical nodes. Ideal for market hubs and prime commercial high-streets.
              </p>

              {/* BUTTON */}
              <Link
                href="/reserve/city-cafe"
                className="
            inline-block 
            bg-primary-mist 
            text-primary-deep 

            px-6 sm:px-8 md:px-12 lg:px-16 
            py-3 sm:py-4 md:py-6 lg:py-8 

            rounded-full 
            font-black uppercase 
            tracking-[0.2em] md:tracking-[0.3em] 
            text-[10px] sm:text-xs 

            hover:bg-white hover:scale-105 
            transition-all 
            shadow-lg md:shadow-xl
          "
              >
                Secure Your City Node
              </Link>

            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default CityCafePage;
