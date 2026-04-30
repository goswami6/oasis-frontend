"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, Play, ArrowRight, Building2, Coffee, Zap,
  Layers, ChefHat, Truck, Monitor, Users, TrendingUp, Wallet,
  BarChart3, ArrowUpRight, Award, Crown, ShieldCheck,
  Globe, Phone, MapPin, Plus, Minus, Mail,
  Wifi, Scissors, MessageSquare, Clock, Check, X, Lock as LockIcon,
  Star, Medal, Gem, Calendar, Newspaper, ExternalLink
} from "lucide-react";
import { api } from "@/utility/api";


// --- SUB-COMPONENTS (IN-LINE SECTIONS) ---

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/oasis_slider_1.png",
    "/assets/oasis_slider_2.png",
    "/assets/oasis_slider_3.png",
    "/assets/oasis_slider_4.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-primary-deep min-h-[65vh] md:min-h-[100vh] flex items-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide]}
              alt={`Oasis Experience ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Premium Multi-Layered Gradient Overlay - Darkened */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/80 via-transparent to-primary-mist/30 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-deep/20 to-primary-deep/90" />
            <div className="absolute inset-0 bg-black/30 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-20 w-full mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-accent-gold"
            />
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[9px] md:text-[11px] block">
              Elite Franchise Ecosystem
            </span>
          </div>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[6rem] font-serif font-bold text-white mb-4 md:mb-12 leading-none tracking-tighter flex items-baseline gap-3 md:gap-8 whitespace-nowrap">
            OASIS
            <span className="font-sans font-extralight opacity-20 text-[1.2rem] sm:text-2xl md:text-5xl tracking-[0.2em] md:tracking-[0.3em]">GLOBAL</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-2 md:mb-4 font-light leading-relaxed uppercase tracking-[0.1em] md:tracking-[0.15em]">
            SIP • SAVOR • SUCCEED • <br className="md:hidden" />
            <span className="text-accent-gold font-medium">GROW WITH OASIS</span>
          </p>


          <div className="hidden md:flex flex-col sm:flex-row gap-6 md:gap-10 items-start sm:items-center">
            <Link href="#models" className="group relative bg-primary-mist text-primary-deep px-10 md:px-14 py-5 md:py-7 rounded-full font-bold text-[12px] md:text-sm uppercase transition-all shadow-[0_20px_50px_rgba(123,227,214,0.3)] hover:shadow-[0_25px_60px_rgba(123,227,214,0.5)] hover:-translate-y-1 flex items-center gap-4 w-full sm:w-auto justify-center">
              <span className="relative z-10">Explore Ecosystem</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <button className="flex items-center gap-5 md:gap-6 text-white/95 font-bold text-[12px] md:text-sm uppercase group w-full sm:w-auto justify-start">
              <div className="relative shrink-0">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover:bg-primary-mist group-hover:border-primary-mist group-hover:text-primary-deep transition-all duration-500 shadow-2xl">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
                <div className="absolute inset-0 rounded-full border border-primary-mist animate-ping opacity-0 group-hover:opacity-40" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="tracking-[0.2em] md:tracking-[0.3em] font-black group-hover:text-primary-mist transition-colors">Watch Vision</span>
                <span className="text-[9px] md:text-[10px] text-white/40 font-light lowercase">The future of coffee</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Slider Indicators - Enhanced Mobile Layout */}
        <div className="absolute -bottom-10 md:-bottom-20 left-6 md:left-10 flex items-end gap-3 md:gap-5 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group flex flex-col-reverse gap-2 md:gap-3 items-start"
            >
              <span className={`text-[8px] md:text-[10px] font-bold transition-all duration-500 ${currentSlide === i ? "text-primary-mist" : "text-white/20"}`}>
                0{i + 1}
              </span>
              <div className={`h-[2px] md:h-1 rounded-full transition-all duration-700 ${currentSlide === i ? "w-10 md:w-16 bg-primary-mist" : "w-5 md:w-8 bg-white/10 group-hover:bg-white/30"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueMarquee = () => {
  const items = ["100% Vegetarian", "Multi-Format", "High Returns", "Low Risk", "Elite Support", "Scalable Tech"];
  // Duplicate items for a seamless infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-primary-deep py-6 md:py-8 border-y border-white/5 overflow-hidden relative z-30">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear"
        }}
        className="flex whitespace-nowrap gap-10 md:gap-20 items-center w-fit"
      >
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-6">
            <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
            <span className="text-white font-serif italic text-lg md:text-4xl tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity duration-500">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BrandStory = () => (
  <section id="brand-story" className="py-16 bg-white relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-mist/5 blur-[150px] rounded-full pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-gold/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="max-w-[1400px] mx-auto px-4 md:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-accent-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">
            Our Heritage
          </span>
          <h2 className="text-[25px] sm:text-3xl md:text-5xl lg:text-5xl font-serif text-primary-deep mb-6 md:mb-10 leading-tight whitespace-nowrap">
            A Legacy of <span className="text-primary-mist italic">Mist & Aroma</span>
          </h2>
          <div className="space-y-6 md:space-y-8 text-primary-deep/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            <p>
              T-CAFE MIST was born from a singular vision: to marry the ethereal
              tranquility of nature with the sophisticated utility of a modern
              ecosystem.
            </p>
            <p>
              Our signature mist-infused environments are not just a design choice;
              they are a tribute to the high-altitude plantations where our
              beans are meticulously sourced.
            </p>
            <div className="relative pl-6 md:pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent-gold/40" />
              <p className="text-primary-deep italic font-serif text-xl md:text-2xl leading-relaxed">
                &quot;We don&apos;t just serve coffee; we curate an atmospheric sanctuary
                for the visionaries of tomorrow.&quot;
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-20 flex items-center gap-8 md:gap-10">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif text-primary-deep">2025</span>
              <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-accent-gold">Founded</span>
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-primary-deep/10" />
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif text-primary-deep">45+</span>
              <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-accent-gold">Locations</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Immersive Staggered Images */}
        <div className="relative pt-0 md:pt-20 pb-10 md:pb-20">
          {/* Back Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-5 md:-top-10 -right-5 md:-right-10 w-2/3 aspect-[4/5] z-0 hidden sm:block"
          >
            <div className="relative h-full w-full rounded-[30px] md:rounded-[40px] overflow-hidden border border-primary-deep/5 shadow-2xl">
              <Image
                src="/assets/brand_story_2.png"
                alt="Brewing Detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-deep/10" />
            </div>
          </motion.div>

          {/* Front Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full sm:w-5/6 mx-auto sm:mx-0"
          >
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[30px] md:rounded-[40px] overflow-hidden border border-primary-deep/10 shadow-[0_40px_80px_rgba(0,0,0,0.15)] bg-white">
              <Image
                src="/assets/brand_story_1.png"
                alt="Cafe Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Label Overlay */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 glass px-4 md:px-6 py-3 md:py-4 border-white/20">
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-white tracking-[0.2em] md:tracking-[0.3em]">Signature Concept</span>
              </div>
            </div>
          </motion.div>

          {/* Floater Element */}
          <div className="absolute -bottom-4 md:-bottom-6 right-4 md:right-12 w-24 h-24 md:w-32 md:h-32 bg-accent-gold rounded-full flex items-center justify-center p-3 md:p-4 shadow-xl z-20 animate-spin-slow">
            <div className="w-full h-full border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
              <div className="text-[7px] md:text-[9px] font-black text-white text-center uppercase tracking-tighter leading-none">
                Mist <br /> Technology <br /> Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LoungePlus = () => {
  const features = [
    { icon: <Wifi size={20} />, title: "Digital Workstations", desc: "Gigabit WiFi & charging ports" },
    { icon: <Users size={20} />, title: "Private Meeting Rooms", desc: "Soundproof glass pods" },
    { icon: <Coffee size={20} />, title: "Premium Seating", desc: "Ergonomic lounge" },
    { icon: <Scissors size={20} />, title: "Grooming Services", desc: "Quick premium touch-ups" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ================= LEFT IMAGES ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3 md:gap-6"
          >
            {/* Main Image */}
            <div className="col-span-2 relative h-[260px] sm:h-[320px] md:h-[500px] rounded-3xl md:rounded-[48px] overflow-hidden shadow-xl group">
              <Image
                src="/assets/lounge_plus_branded_1.png"
                alt="Lounge+"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <span className="absolute top-4 left-4 md:top-8 md:left-8 px-4 md:px-6 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-[8px] md:text-[10px] uppercase text-primary-mist border border-white/20">
                FLAGSHIP
              </span>
            </div>

            {/* Small Images */}
            <div className="relative h-32 sm:h-40 md:h-64 rounded-2xl md:rounded-[40px] overflow-hidden group">
              <Image
                src="/assets/lounge_plus_branded_2.png"
                alt="Meeting"
                fill
                className="object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-3 left-3 text-[8px] md:text-[10px] text-white bg-white/10 px-2 py-1 rounded">
                Meeting Pods
              </span>
            </div>

            <div className="relative h-32 sm:h-40 md:h-64 rounded-2xl md:rounded-[40px] overflow-hidden group">
              <Image
                src="/assets/lounge_plus_branded_3.png"
                alt="Cafe"
                fill
                className="object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/30" />
              <span className="absolute bottom-3 right-3 text-[8px] md:text-[10px] text-white bg-white/10 px-2 py-1 rounded">
                OASIS Bar
              </span>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8 md:space-y-12"
          >
            {/* Heading */}
            <div>
              <span className="text-accent-gold tracking-[0.3em] text-[10px] uppercase block mb-3">
                The Next Level
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep mb-4 leading-tight">
                Lounge+ Premium <br />
                <span className="text-primary-mist italic">Experience</span>
              </h2>

              <p className="text-primary-deep/60 text-sm md:text-lg">
                Co-working | Meetings | Lifestyle Café
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 md:gap-5">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center text-primary-deep shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-serif text-primary-deep">
                      {f.title}
                    </h4>
                    <p className="text-xs md:text-sm text-primary-deep/50">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Card */}
            <div className="p-5 md:p-8 rounded-2xl md:rounded-[24px] bg-primary-deep text-white">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-primary-mist uppercase block mb-1">
                    Financial Potential
                  </span>
                  <div className="text-xl md:text-3xl font-serif font-bold">
                    ₹60L – ₹1.2Cr
                  </div>
                </div>

                <TrendingUp size={26} className="text-primary-mist" />
              </div>
            </div>

            {/* Button */}
            <Link
              href="/models/lounge-plus"
              className="inline-flex items-center gap-2 bg-primary-deep text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-xs md:text-sm font-bold uppercase hover:bg-primary-mist hover:text-primary-deep transition"
            >
              Explore Lounge+
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Models = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const modelsData = [
    {
      title: "Kiosk",
      image: "/assets/oasis_kiosk_main.png",
      desc: "Ultra-compact autonomous node for high-traffic corridors.",
      investment: "₹5 L - 10 L",
      revenue: "₹1.5 L - 3 L",
      roi: "12-18 Months",
      badge: "Compact",
      icon: <Zap className="text-primary-deep" size={18} />,
      slug: "kiosk",
    },
    {
      title: "Express",
      image: "/assets/oasis_express_main.png",
      desc: "High-velocity modular unit for urban corporate zones.",
      investment: "₹8 L - 15 L",
      revenue: "₹2.5 L - 4.5 L",
      roi: "12-16 Months",
      badge: "High Velocity",
      icon: <Zap className="text-primary-deep" size={18} />,
      slug: "express",
    },
    {
      title: "City Cafe",
      image: "/assets/oasis_citycafe_main.png",
      desc: "Vibrant urban cafe balancing dine-in and quick delivery.",
      investment: "₹15 L - 30 L",
      revenue: "₹4.5 L - 9 L",
      roi: "14-20 Months",
      badge: "Popular",
      icon: <Coffee className="text-primary-deep" size={18} />,
      slug: "city-cafe",
    },
    {
      title: "Premium (Green Cafe)",
      image: "/assets/oasis_premium_main.png",
      desc: "Lush biophilic experience center with restorative tech.",
      investment: "₹40 L - 80 L",
      revenue: "₹7 L - 18 L",
      roi: "18-30 Months",
      badge: "Biophilic",
      icon: <Layers className="text-primary-deep" size={18} />,
      slug: "premium",
    },
    {
      title: "Recharge Hub",
      image: "/assets/model_recharge.png",
      desc: "Instant satisfaction node for quick grab-and-go energy.",
      investment: "₹3 L - 7 L",
      revenue: "₹1 L - 2 L",
      roi: "10-15 Months",
      badge: "Micro",
      icon: <Zap className="text-primary-deep" size={18} />,
      slug: "recharge",
    },
    {
      title: "Lounge+",
      image: "/assets/lounge_plus_branded_1.png",
      desc: "Co-working integrated lifestyle café.",
      investment: "₹60 L - 1.2 Cr",
      revenue: "₹12 L - 25 L",
      roi: "18-24 Months",
      badge: "Lifestyle",
      icon: <Layers className="text-primary-deep" size={18} />,
      slug: "lounge-plus",
    },
  ];

  // Auto scroll
  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({
          left: window.innerWidth < 768 ? 260 : 420,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-primary-deep/80 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <span className="text-accent-gold font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-4">
            Territory Opportunity
          </span>

          <h2 className="text-2xl md:text-5xl font-serif text-white mb-5">
            Our <span className="text-primary-mist italic">Business</span> Models
          </h2>

          <p className="text-white/60 text-sm md:text-lg leading-relaxed">
            Multi-tier investment architecture designed for scalability and
            growth.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar"
        >
          {modelsData.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[420px] snap-start"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                {/* Image */}
                <div className="relative h-40 sm:h-48 md:h-64">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover"
                  />

                  <span className="absolute top-3 left-3 px-3 py-1 text-[8px] md:text-[10px] bg-primary-deep text-white rounded-full uppercase tracking-widest">
                    {m.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-base md:text-xl font-serif text-primary-deep">
                        {m.title}
                      </h3>
                      <p className="text-[11px] md:text-sm text-primary-deep/60">
                        {m.desc}
                      </p>
                    </div>

                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-primary-deep/5 rounded-lg">
                      {m.icon}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 my-3">
                    <div className="p-2 md:p-3 bg-primary-deep/5 rounded-xl">
                      <p className="text-[8px] md:text-[10px] uppercase text-primary-deep/50">
                        Investment
                      </p>
                      <p className="text-xs md:text-sm font-bold text-primary-deep">
                        {m.investment}
                      </p>
                    </div>

                    <div className="p-2 md:p-3 bg-primary-deep/5 rounded-xl">
                      <p className="text-[8px] md:text-[10px] uppercase text-primary-deep/50">
                        Revenue
                      </p>
                      <p className="text-xs md:text-sm font-bold text-primary-deep">
                        {m.revenue}
                      </p>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="flex justify-between items-center mb-4 text-xs">
                    <span className="text-primary-deep/40 uppercase">
                      ROI
                    </span>
                    <span className="px-2 py-1 bg-accent-gold/10 text-accent-gold rounded text-[10px] font-bold">
                      {m.roi}
                    </span>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/models/${m.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-xl bg-primary-deep text-white text-[10px] md:text-xs uppercase font-bold tracking-wider hover:bg-primary-mist hover:text-primary-deep transition"
                  >
                    Explore
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {modelsData.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
          ))}
        </div>
      </div>
    </section>
  );
};


const VisionSeparator = () => {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fdfc] via-white to-[#eef7f5]" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-[-80px] left-[-60px] w-[200px] h-[200px] bg-primary-mist/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[200px] h-[200px] bg-accent-gold/10 rounded-full blur-3xl" />

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center"
        >
          {/* Tag */}
          <span className="text-accent-gold font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase block mb-6">
            The Core Philosophy
          </span>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif text-primary-deep italic leading-relaxed md:leading-[1.4]">
            “Architecting the future of café culture through”
          </h2>

          {/* Highlight Line */}
          <p className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-primary-mist">
            integrated intelligence & precision
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-accent-gold mx-auto mt-6 mb-4 rounded-full" />

          {/* Sub Text */}
          <p className="text-xs md:text-sm text-primary-deep/50 max-w-md mx-auto">
            Blending technology, design, and experience to redefine modern café ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Cluster = () => {
  const spokes = [
    { name: "Lounge+", angle: 0, icon: <Layers size={10} /> },
    { name: "Express", angle: 36, icon: <Zap size={10} /> },
    { name: "Recharge", angle: 72, icon: <Coffee size={10} /> },
    { name: "Flagship", angle: 108, icon: <Building2 size={10} /> },
    { name: "Express", angle: 144, icon: <Zap size={10} /> },
    { name: "Lounge+", angle: 180, icon: <Layers size={10} /> },
    { name: "Flagship", angle: 216, icon: <Building2 size={10} /> },
    { name: "Recharge", angle: 252, icon: <Coffee size={10} /> },
    { name: "Express", angle: 288, icon: <Zap size={10} /> },
    { name: "Lounge+", angle: 324, icon: <Layers size={10} /> },
  ];

  const benefits = [
    { title: "Cost Efficiency", desc: "Bulk procurement reduces waste by 30%.", icon: <TrendingUp size={18} /> },
    { title: "Faster Operations", desc: "2-hour restock cycles.", icon: <Zap size={18} /> },
    { title: "High Margins", desc: "Shared logistics boosts profit.", icon: <Wallet size={18} /> },
    { title: "Scalable Growth", desc: "Easy expansion model.", icon: <BarChart3 size={18} /> },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#0f2f2a] via-[#14413b] to-[#1b4d47] relative overflow-hidden">

      {/* Light Glow BG */}
      <div className="absolute inset-0 bg-primary-mist/5 blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT VISUAL */}
          <div className="relative w-full flex justify-center items-center">

            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px]">

              {/* CENTER */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full bg-primary-mist flex items-center justify-center shadow-xl">
                  <ChefHat size={24} className="text-primary-deep" />
                </div>
              </motion.div>

              {/* SPOKES */}
              {spokes.map((s, i) => {
                const x = 50 + 42 * Math.cos((s.angle * Math.PI) / 180);
                const y = 50 + 42 * Math.sin((s.angle * Math.PI) / 180);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="absolute flex flex-col items-center justify-center text-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-mist">
                      {s.icon}
                    </div>
                    <span className="text-[7px] sm:text-[9px] md:text-[10px] text-white/70 mt-1">
                      {s.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase block mb-4">
                Regional Strategy
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl text-white font-serif leading-tight mb-6">
                Cluster-Based <br />
                <span className="text-primary-mist italic">Café Ecosystem</span>
              </h2>

              <p className="text-white/70 text-sm md:text-lg mb-8 max-w-xl">
                Our hub-and-spoke model connects a central kitchen with optimized outlets for speed and efficiency.
              </p>

              {/* BENEFITS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
                  >
                    <div className="mb-3 text-primary-mist">{b.icon}</div>
                    <h4 className="text-white text-sm md:text-lg font-semibold mb-1">
                      {b.title}
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};



const ROI = () => (
  <section className="py-12 md:py-16 bg-white overflow-hidden">

    {/* Light Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, #0f2f2a 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

      {/* ================= LEFT GRAPH ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-5 sm:p-6 md:p-10 rounded-3xl md:rounded-[40px] bg-[#f7faf9] border border-primary-deep/5 shadow-sm"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-serif text-primary-deep">
              Yield Analytics
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-primary-mist font-bold">
              Performance Overview
            </span>
          </div>

          <div className="flex gap-3 text-[9px] uppercase text-primary-deep/50 bg-white px-3 py-2 rounded-full border">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary-mist rounded-full" /> Growth
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-accent-gold rounded-full" /> Revenue
            </span>
          </div>
        </div>

        {/* GRAPH */}
        <div className="relative h-48 sm:h-56 md:h-72 w-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">

            {/* Grid */}
            {[0, 25, 50, 75, 100].map((line) => (
              <line
                key={line}
                x1="0"
                y1={line}
                x2="100"
                y2={line}
                stroke="#0f2f2a"
                strokeOpacity="0.05"
              />
            ))}

            {/* Lines */}
            <motion.path
              d="M 0 40 Q 25 20, 50 15 T 100 12"
              fill="none"
              stroke="#7BE3D6"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />

            <motion.path
              d="M 0 95 Q 30 90, 50 40 T 100 8"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            />
          </svg>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t text-[10px] flex justify-between text-primary-deep/40">
          <span>Simulation v4</span>
          <span className="text-primary-mist font-semibold">
            Verified Growth
          </span>
        </div>
      </motion.div>

      {/* ================= RIGHT CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase block mb-4">
          Wealth Engineering
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-primary-deep mb-6 leading-tight">
          Predictive <span className="text-primary-mist italic">ROI</span>
        </h2>

        {/* CARDS */}
        <div className="grid gap-4 md:gap-6">

          <div className="p-4 md:p-6 rounded-2xl bg-[#f7faf9] flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-primary-mist/10 rounded-xl flex items-center justify-center text-primary-mist">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-lg md:text-2xl font-serif text-primary-deep">
                  12–18 Months
                </div>
                <div className="text-[10px] uppercase text-primary-mist">
                  Break-even
                </div>
              </div>
            </div>
            <TrendingUp className="text-primary-mist" size={18} />
          </div>

          <div className="p-4 md:p-6 rounded-2xl bg-[#f7faf9] flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold">
                <Wallet size={20} />
              </div>
              <div>
                <div className="text-lg md:text-2xl font-serif text-primary-deep">
                  32% – 45%
                </div>
                <div className="text-[10px] uppercase text-accent-gold">
                  Net Margins
                </div>
              </div>
            </div>
            <BarChart3 className="text-accent-gold" size={18} />
          </div>

        </div>

        <p className="mt-6 text-sm md:text-base text-primary-deep/60 max-w-md">
          Our financial models are optimized for stability and long-term scalable growth across multiple revenue streams.
        </p>
      </motion.div>

    </div>
  </section>
);



const TokenPayment = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const benefits = [
    { icon: <ShieldCheck size={20} />, title: "Territory Lockdown", desc: "Instant pin-code protection for your preferred zone." },
    { icon: <MessageSquare size={20} />, title: "Strategic Access", desc: "Priority 1-on-1 strategy call with the founding team." },
    { icon: <ArrowUpRight size={20} />, title: "Professional Survey", desc: "Expert technical evaluation of your proposed site." },
  ];

  return (
    <section id="payment" className="py-12 md:py-20 bg-primary-deep relative overflow-hidden">

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 md:top-6 right-4 md:right-6 text-slate-400"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl md:text-3xl font-serif text-primary-deep mb-2 italic">
                Confirm <span className="not-italic text-primary-mist">Payment</span>
              </h3>

              <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-8">
                You are about to secure your strategic territory.
              </p>

              <div className="bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 space-y-4">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-slate-500 uppercase tracking-widest text-[9px] md:text-[10px]">
                    Required Tokens
                  </span>
                  <span className="font-bold text-primary-deep">50,000</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm border-t pt-3">
                  <span className="text-slate-500 uppercase tracking-widest text-[9px] md:text-[10px]">
                    Wallet Balance
                  </span>
                  <span className="font-bold">{walletBalance}</span>
                </div>
              </div>

              <button className="w-full py-3 md:py-5 rounded-xl bg-primary-deep text-white text-xs md:text-sm">
                Pay Tokens
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BG GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-accent-gold/5 blur-[120px] md:blur-[160px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT */}
          <div>
            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase block mb-4 md:mb-6">
              Final Milestone
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif text-white mb-6 md:mb-10 leading-tight">
              Secure Your <br />
              <span className="text-primary-mist italic">Strategic Territory</span>
            </h2>

            <p className="text-white/50 text-sm md:text-xl mb-8 md:mb-12 max-w-xl">
              Take the first step towards your cafe empire.
            </p>

            <div className="space-y-5 md:space-y-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border flex items-center justify-center text-primary-mist">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-lg text-white">{b.title}</h4>
                    <p className="text-xs md:text-sm text-white/40">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="glass p-6 sm:p-8 md:p-16 rounded-3xl md:rounded-[48px] text-center">

            <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold mx-auto mb-6 md:mb-10">
              🔒
            </div>

            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30 mb-3 md:mb-4">
              Reservation Token
            </div>

            <div className="text-2xl sm:text-3xl md:text-6xl font-serif text-white mb-3 md:mb-4">
              50,000
            </div>

            <div className="text-xs md:text-sm text-primary-mist mb-6 md:mb-12">
              Fully Refundable Milestone
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full py-4 md:py-8 rounded-full bg-accent-gold text-primary-deep text-xs md:text-sm font-bold uppercase tracking-[0.2em]"
            >
              Pay Token & Reserve
            </button>

            <div className="mt-6 md:mt-10 text-[9px] md:text-[10px] text-white/30 flex justify-center gap-2">
              <ShieldCheck size={12} />
              Secure Checkout
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const [tiers, setTiers] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.membership.getAll()
      .then(data => {
        if (data && data.length > 0) setTiers(data);
      })
      .catch(err => console.error("Failed:", err));

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer && window.innerWidth < 768) {
        const isLastItem = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 50;
        if (isLastItem) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 280, behavior: "smooth" });
        }
      }
    }, 4000); // Slightly slower for memberships

    return () => clearInterval(interval);
  }, []);

  const displayTiers = tiers.length > 0 ? tiers : [
    {
      tier: "Silver",
      tag: "Essential",
      amount: 5000,
      perks: ["Basic discounts", "Café credits", "Standard access"],
    },
    {
      tier: "Gold",
      tag: "Priority",
      amount: 15000,
      perks: ["Priority booking", "Extra benefits", "Meeting credits"],
      featured: true
    },
    {
      tier: "Platinum",
      tag: "Elite",
      amount: 50000,
      perks: ["Premium rewards", "Franchise priority", "Equity benefits"],
    }
  ];

  const getIcon = (tier: string) => {
    if (tier === "Gold") return <Medal size={26} />;
    if (tier === "Platinum") return <Gem size={26} />;
    return <Star size={26} />;
  };

  const handleJoin = (tier: string) => {
    alert(`Joining ${tier}`);
  };

  return (
    <section className="py-14 md:py-20 bg-[#111616] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
          <span className="text-accent-gold text-[10px] tracking-[0.3em] uppercase block mb-4">
            Membership
          </span>

          <h2 className="text-2xl md:text-5xl text-white font-serif mb-4">
            Member Benefits
          </h2>

          <p className="text-white/50 text-sm md:text-lg">
            Unlock rewards, credits and premium access across the ecosystem.
          </p>
        </div>

        {/* ================= MOBILE SCROLL ================= */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar md:hidden"
        >
          {displayTiers.map((t, i) => (
            <div key={i} className="min-w-[260px] snap-center">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-white">

                <div className="mb-6 text-primary-mist">
                  {getIcon(t.tier)}
                </div>

                <h3 className="text-xl font-serif mb-1">{t.tier}</h3>
                <p className="text-white/50 text-xs mb-4">{t.tag}</p>

                <div className="text-2xl font-bold mb-4">
                  ₹{t.amount.toLocaleString()}
                </div>

                <ul className="text-sm text-white/60 mb-6 space-y-2">
                  {t.perks.map((p: string, idx: number) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleJoin(t.tier)}
                  className="w-full py-3 rounded-xl bg-primary-mist text-primary-deep text-xs font-bold"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {displayTiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[40px] bg-white/5 border border-white/10 text-white"
            >
              <div className="mb-8 text-primary-mist">
                {getIcon(t.tier)}
              </div>

              <h3 className="text-3xl font-serif mb-2">{t.tier}</h3>
              <p className="text-white/50 mb-6">{t.tag}</p>

              <div className="text-3xl font-bold mb-8">
                ₹{t.amount.toLocaleString()}
              </div>

              <ul className="space-y-3 text-white/60 mb-10">
                {t.perks.map((p: string, idx: number) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>

              <button
                onClick={() => handleJoin(t.tier)}
                className="w-full py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
              >
                Join {t.tier}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


const NewsSection = () => {
  const posts = [
    {
      date: "Oct 12, 2026",
      category: "Lifestyle",
      title: "The Art of the Roast: Engineering the Perfect Cup",
      desc: "An inside look at our technical approach to micro-roasting and precision brewing.",
      image: "/assets/blog_roast.png"
    },
    {
      date: "Oct 05, 2026",
      category: "Expansion",
      title: "Q3 Roadmap: Expanding the MIST Footprint",
      desc: "Analyzing our strategic entry into Tier-2 markets and the growth of the Cluster Model.",
      image: "/assets/blog_expansion.png"
    },
    {
      date: "Sep 28, 2026",
      category: "Technology",
      title: "OASIS 2.0: The Future of Café Loyalty",
      desc: "How our closed-loop credit system is redefining customer retention in the digital age.",
      image: "/assets/blog_tech.png"
    }
  ];

  return (
    <section id="news" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-4 md:gap-8">
          <div>
            <span className="text-accent-gold font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] mb-4 md:mb-6 block">
              Latest Insights
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-7xl font-serif text-primary-deep italic leading-tight">
              Brand <span className="text-primary-mist not-italic">Editorial</span>
            </h2>
          </div>

          <Link
            href="/news"
            className="flex items-center gap-2 md:gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-primary-deep hover:text-primary-mist border-b border-primary-deep/10 pb-1 md:pb-2"
          >
            View All News
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>

        {/* ================= MOBILE (NEW UI) ================= */}
        <div className="md:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
          {posts.map((post, i) => (
            <div key={i} className="min-w-[260px] snap-center">
              <motion.div
                whileTap={{ scale: 0.96 }}
                className="rounded-3xl overflow-hidden shadow-lg bg-white border border-primary-deep/5"
              >
                {/* IMAGE */}
                <div className="relative h-44">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />

                  {/* CATEGORY */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[8px] uppercase tracking-widest text-primary-deep rounded-full shadow">
                    {post.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <p className="text-[9px] text-primary-deep/40 mb-2 uppercase">
                    {post.date} • 5 min read
                  </p>

                  <h3 className="text-base font-serif text-primary-deep mb-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-primary-deep/60 mb-3">
                    {post.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-primary-deep">
                    Read Article
                    <ChevronRight size={14} className="text-primary-mist" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-10 border border-primary-deep/5 shadow-2xl group-hover:shadow-primary-mist/10 transition-all duration-700">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent opacity-60" />

                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 bg-white/90 rounded-full text-[9px] font-black uppercase tracking-widest text-primary-deep">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* META */}
              <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-primary-deep/40 uppercase tracking-widest">
                <span>{post.date}</span>
                <div className="w-1 h-1 rounded-full bg-primary-mist" />
                <span>5 min read</span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-3xl font-serif text-primary-deep mb-5 group-hover:text-primary-mist transition-colors leading-tight">
                {post.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-primary-deep/50 mb-8 pr-4">
                {post.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-3 text-[11px] font-black text-primary-deep/70 uppercase tracking-[0.2em] group-hover:gap-6 transition-all duration-500">
                Read Article
                <ChevronRight size={14} className="text-primary-mist" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const PopularMenu = () => {
  const menuItems = [
    { name: "Cutting Chai", category: "Tea", image: "/assets/menu/oasis_cutting_chai.png" },
    { name: "Masala Chai", category: "Tea", image: "/assets/menu/oasis_masala_chai.png" },
    { name: "Cold Coffee", category: "Coffee", image: "/assets/menu/oasis_cold_coffee.png" },
    { name: "Sandwich", category: "Snacks", image: "/assets/menu/oasis_sandwich.png" },
    { name: "Maggi", category: "Snacks", image: "/assets/menu/oasis_maggi.png" },
    { name: "Pakora", category: "Snacks", image: "/assets/menu/oasis_pakora.png" },
    { name: "Toast", category: "Snacks", image: "/assets/menu/oasis_toast.png" },
    { name: "Combo Meals", category: "Full", image: "/assets/menu/oasis_combo_meal.png" },
  ];

  return (
    <section id="menu" className="py-14 md:py-20 bg-white text-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* HEADER (same) */}
        <div className="text-center mb-12 md:mb-24">
          <span className="text-accent-gold font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            Product Fidelity
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-7xl font-serif mb-6 md:mb-10">
            Popular <span className="text-primary-mist italic">Menu.</span>
          </h2>

          <p className="text-primary-deep/60 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto">
            High-demand vegetarian selection engineered for repeat customers.
          </p>
        </div>

        {/* ================= MOBILE DESIGN ================= */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
          {menuItems.map((item, i) => (
            <div key={i} className="min-w-[220px] snap-center">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="rounded-3xl overflow-hidden shadow-lg bg-white"
              >
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-[8px] uppercase tracking-widest text-accent-gold rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-serif text-primary-deep">
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP SAME ================= */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-[40px] overflow-hidden mb-6 border border-primary-deep/5 shadow-xl group-hover:scale-95 transition-all duration-700">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-deep/10" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 rounded-full text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">
                  {item.category}
                </div>
              </div>
              <h4 className="text-xl font-serif text-center group-hover:text-primary-mist transition-colors">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* BANNER (responsive tweak only) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 md:mt-20 py-6 md:py-10 bg-[#FAF9F6] border-y border-primary-deep/5 flex flex-wrap justify-center items-center gap-4 md:gap-12 text-center"
        >
          <div className="text-primary-deep font-black text-sm sm:text-lg md:text-3xl uppercase tracking-[0.2em] md:tracking-[0.3em] flex flex-wrap justify-center items-center gap-2 md:gap-4">
            MORE <span className="text-primary-mist italic font-serif lowercase font-normal">Variety</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-accent-gold rounded-full" />
            MORE <span className="text-primary-mist italic font-serif lowercase font-normal">Taste</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-accent-gold rounded-full" />
            MORE <span className="text-primary-mist italic font-serif lowercase font-normal">Profit</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the Oasis Cluster Model?",
      a: "It's a strategic territorial play where one flagship Luxury Hub supports multiple high-efficiency Kiosk and Express spokes, maximizing operational efficiency and ROI."
    },
    {
      q: "Is the menu 100% vegetarian?",
      a: "Yes, OASIS T-CAFE maintains a strict global standard of 100% vegetarian offerings across all beverage and snack categories."
    },
    {
      q: "How long does it take to become operational?",
      a: "Depending on the model, setup times range from 21 days for a Kiosk to 120 days for a full Luxury Elite Lounge."
    },
    {
      q: "What kind of training is provided?",
      a: "We provide comprehensive 360-degree training for owners and staff, covering brewing precision, customer experience tech, and business analytics."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF9F6] text-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* ================= LEFT (HIDE ON MOBILE) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative lg:sticky lg:top-32"
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">
              Support Center
            </span>

            <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
              Frequently Asked <br />
              <span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-8">
                Questions.
              </span>
            </h2>

            <div className="relative h-[500px] rounded-[48px] overflow-hidden shadow-2xl border border-primary-deep/5">
              <Image
                src="/assets/lounge_experience.png"
                alt="FAQ Visual"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-4 lg:pt-24">

            {/* MOBILE HEADING */}
            <div className="lg:hidden mb-6 text-center">
              <span className="text-accent-gold tracking-[0.3em] text-[10px] uppercase block mb-3">
                Support Center
              </span>
              <h2 className="text-2xl font-serif italic">
                Frequently Asked{" "}
                <span className="text-primary-mist not-italic">Questions</span>
              </h2>
            </div>

            {/* FAQ LIST */}
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-primary-deep/5 rounded-2xl md:rounded-[32px] overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-4 md:p-8 flex items-center justify-between text-left"
                >
                  <h4 className={`text-sm md:text-xl font-serif ${openIndex === i ? 'text-primary-mist' : 'text-primary-deep'}`}>
                    {faq.q}
                  </h4>

                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${openIndex === i
                    ? "bg-primary-mist text-primary-deep"
                    : "bg-primary-deep/5 text-primary-deep/40"
                    }`}>
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-4 md:px-8 pb-4 md:pb-8 text-xs md:text-base text-primary-deep/60 border-t pt-4 md:pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="mt-8 md:mt-12 p-5 md:p-8 bg-primary-deep text-white rounded-2xl md:rounded-[32px] flex items-center justify-between">
              <div>
                <h4 className="text-lg md:text-xl font-serif italic">
                  Still have questions?
                </h4>
                <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest">
                  Connect with our team
                </p>
              </div>

              <Link
                href="/contact"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-mist text-primary-deep flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => (
  <section className="py-12 md:py-16 bg-gradient-to-br from-[#0f2f2a] via-[#14413b] to-[#1b4d47] relative overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary-mist/10 blur-[80px] md:blur-[100px] rounded-full" />
    </div>

    <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] mb-4 md:mb-6 block">
            Direct Advisory
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
            The Future is{" "}
            <span className="text-primary-mist italic">Brewing.</span>
          </h2>

          {/* CONTACT INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mt-6 md:mt-12">

            <div>
              <span className="text-white/30 text-[9px] uppercase block mb-1">
                Email
              </span>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={14} className="text-primary-mist" />
                advisors@tcafemist.global
              </div>
            </div>

            <div>
              <span className="text-white/30 text-[9px] uppercase block mb-1">
                Support
              </span>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={14} className="text-primary-mist" />
                +1 (555) 800-MIST
              </div>
            </div>

            <div className="sm:col-span-2">
              <span className="text-white/30 text-[9px] uppercase block mb-1">
                Headquarters
              </span>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} className="text-primary-mist" />
                Sustainable Silicon Valley Corridor, CA 94025
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[48px] border border-white/10"
        >
          <h3 className="text-xl md:text-2xl font-serif text-white mb-4 md:mb-6">
            Secure Your Territory
          </h3>

          <p className="text-white/50 text-sm mb-6 md:mb-10">
            Join the elite network of T-CAFE MIST partners.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 md:gap-4">

            <Link
              href="/contact"
              className="w-full px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-primary-mist text-primary-deep text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <Calendar size={14} /> Book Call
            </Link>

            <Link
              href="/contact"
              className="w-full px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <Mail size={14} /> Pitch Deck
            </Link>

          </div>

          {/* FOOTER */}
          <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-white/10 flex flex-wrap gap-4 md:gap-6 text-[9px] text-white/30 uppercase">

            <div className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-primary-mist" />
              Transparent
            </div>

            <div className="flex items-center gap-2">
              <Users size={12} className="text-primary-mist" />
              24/7 Support
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  </section>
);


const GlobalExpansion = () => {
  const locations = [
    { city: "Hong Kong", country: "China", flag: "https://flagcdn.com/hk.svg", status: "Coming Soon 2026", image: "/assets/global_hongkong.png" },
    { city: "Bangkok", country: "Thailand", flag: "https://flagcdn.com/th.svg", status: "In Discussion", image: "/assets/global_thailand.png" },
    { city: "Singapore", country: "Singapore", flag: "https://flagcdn.com/sg.svg", status: "Planning Phase", image: "/assets/global_singapore.png" },
    { city: "Zurich", country: "Switzerland", flag: "https://flagcdn.com/ch.svg", status: "Market Entry", image: "/assets/global_switzerland.png" },
    { city: "London", country: "United Kingdom", flag: "https://flagcdn.com/gb.svg", status: "Scheduled 2026", image: "/assets/global_london.png" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer) {
        const isLastItem = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 50;
        if (isLastItem) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 280, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 md:py-20 bg-[#05110F] overflow-hidden relative">

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto">
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase block mb-4 md:mb-6">
            International Strategy
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-7xl font-serif text-white mb-6 md:mb-8">
            Upcoming <span className="text-primary-mist italic">Global</span> Locations
          </h2>

          <p className="text-white/50 text-sm md:text-xl">
            Expanding into the world's most vibrant hubs.
          </p>
        </div>

        {/* ================= MOBILE ================= */}
        <div
          ref={scrollRef}
          className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
        >
          {locations.map((loc, i) => (
            <div key={i} className="min-w-[260px] snap-center">
              <div className="relative h-[350px] rounded-3xl overflow-hidden border border-white/10">

                <Image
                  src={loc.image}
                  alt={loc.city}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={loc.flag} className="w-6 h-6 rounded-full" />
                    <h3 className="text-lg text-white font-serif">
                      {loc.city}
                    </h3>
                  </div>

                  <p className="text-[10px] text-white/60 uppercase tracking-widest mb-2">
                    {loc.country}
                  </p>

                  <span className="text-[10px] px-3 py-1 bg-white/10 rounded-full text-primary-mist">
                    {loc.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden lg:flex gap-6 min-h-[600px]">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              layout
              className="relative h-[600px] rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer flex-[1] hover:flex-[3] transition-all duration-700"
            >
              <Image src={loc.image} alt={loc.city} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />

              <div className="absolute bottom-0 p-12">
                <h3 className="text-5xl text-white font-serif flex items-center gap-4">
                  <img src={loc.flag} className="w-14 h-14 rounded-full" />
                  {loc.city}
                </h3>

                <p className="text-white/40 text-xs tracking-[0.5em] mt-2">
                  {loc.country}
                </p>

                <span className="inline-block mt-6 px-6 py-2 bg-white/10 text-primary-mist text-xs rounded-full">
                  {loc.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-14 md:mt-24 flex flex-row items-center justify-between gap-4 md:gap-10">

          {/* LEFT TEXT */}
          <div className="flex items-center gap-4 md:gap-10">

            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl text-white">2026</h3>
              <p className="text-[9px] md:text-[10px] text-accent-gold uppercase">Launch</p>
            </div>

            {/* Divider (show on all screens) */}
            <div className="w-[1px] h-8 md:h-12 bg-white/10" />

            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl text-white">5+</h3>
              <p className="text-[9px] md:text-[10px] text-accent-gold uppercase">Cities</p>
            </div>

          </div>

          {/* BUTTON */}
          <Link
            href="/franchise"
            className="px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 border border-primary-mist text-primary-mist text-[10px] md:text-xs uppercase rounded-full flex items-center gap-2 whitespace-nowrap"
          >
            <Globe size={14} /> Explore
          </Link>

        </div>

      </div>
    </section>
  );
};


// --- MAIN HOME COMPONENT ---

export default function Home() {
  return (
    <>
      <Hero />
      <ValueMarquee />
      <BrandStory />
      <Models />
      <VisionSeparator />
      <Cluster />
      <LoungePlus />
      <Membership />
      <ROI />
      <TokenPayment />
      <PopularMenu />
      <GlobalExpansion />
      <NewsSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
