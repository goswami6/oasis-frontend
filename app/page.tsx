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
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary-deep">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide]}
              alt={`Oasis Experience ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Layered Gradients for Premium Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-transparent to-primary-deep/30 opacity-80" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-accent-gold"
            />
            <span className="text-accent-gold font-bold tracking-[0.5em] uppercase text-[11px] block">
              Elite Franchise Ecosystem
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-12 leading-[0.85] tracking-tighter">
            OASIS
            <span className="font-sans font-extralight opacity-30 text-3xl md:text-5xl ml-6 tracking-[0.2em]">GLOBAL</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-14 font-light leading-relaxed uppercase tracking-[0.15em]">
            SIP • SAVOR • SUCCEED • <span className="text-accent-gold font-medium">GROW WITH OASIS</span>
          </p>


          <div className="flex flex-wrap gap-10 items-center">
            <Link href="#models" className="group relative bg-primary-mist text-primary-deep px-14 py-7 rounded-full font-bold text-sm uppercase transition-all shadow-[0_20px_50px_rgba(123,227,214,0.3)] hover:shadow-[0_25px_60px_rgba(123,227,214,0.5)] hover:-translate-y-1 flex items-center gap-4">
              <span className="relative z-10">Explore Ecosystem</span>
              <ChevronRight className="group-hover:translate-x-2 transition-transform duration-300" size={22} />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <button className="flex items-center gap-6 text-white/95 font-bold text-sm uppercase group">
              <div className="relative">
                <div className="w-18 h-18 md:w-20 md:h-20 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-xl group-hover:bg-primary-mist group-hover:border-primary-mist group-hover:text-primary-deep transition-all duration-500 shadow-2xl">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </div>
                {/* Ping Animation */}
                <div className="absolute inset-0 rounded-full border border-primary-mist animate-ping opacity-0 group-hover:opacity-40" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="tracking-[0.3em] font-black group-hover:text-primary-mist transition-colors">Watch Vision</span>
                <span className="text-[10px] text-white/40 font-light lowercase">The future of coffee</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Slider Indicators - Modern Minimalist */}
        <div className="absolute -bottom-16 md:bottom-0 left-6 md:left-10 flex items-end gap-5 z-30 pb-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group flex flex-col gap-3 items-start"
            >
              <span className={`text-[10px] font-bold transition-all duration-500 ${currentSlide === i ? "text-primary-mist" : "text-white/20"}`}>
                0{i + 1}
              </span>
              <div className={`h-1 rounded-full transition-all duration-700 ${currentSlide === i ? "w-16 bg-primary-mist" : "w-8 bg-white/10 group-hover:bg-white/30"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueMarquee = () => {
  const items = ["100% Vegetarian", "Multi-Format", "High Returns", "Low Risk", "Elite Support", "Scalable Tech"];
  return (
    <div className="bg-primary-deep py-8 border-y border-white/5 overflow-hidden relative z-30">
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
        className="flex whitespace-nowrap gap-20 items-center w-fit"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
            <span className="text-white font-serif italic text-2xl md:text-4xl tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-500">
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

    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="text-accent-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
            Our Heritage
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep mb-10 leading-tight">
            A Legacy of <br />
            <span className="text-primary-mist italic">Mist & Aroma</span>
          </h2>
          <div className="space-y-8 text-primary-deep/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
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
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent-gold/40" />
              <p className="text-primary-deep italic font-serif text-2xl leading-relaxed">
                &quot;We don&apos;t just serve coffee; we curate an atmospheric sanctuary
                for the visionaries of tomorrow.&quot;
              </p>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-primary-deep">2025</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">Founded</span>
            </div>
            <div className="w-[1px] h-12 bg-primary-deep/10" />
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-primary-deep">45+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-gold">Locations</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Immersive Staggered Images */}
        <div className="relative pt-20 pb-20">
          {/* Back Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-10 -right-10 w-2/3 aspect-[4/5] z-0"
          >
            <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-primary-deep/5 shadow-2xl">
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
            className="relative z-10 w-5/6"
          >
            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden border border-primary-deep/10 shadow-[0_40px_80px_rgba(0,0,0,0.15)] bg-white">
              <Image
                src="/assets/brand_story_1.png"
                alt="Cafe Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Label Overlay */}
              <div className="absolute bottom-10 left-10 glass px-6 py-4 border-white/20">
                <span className="text-[10px] uppercase font-bold text-white tracking-[0.3em]">Signature Concept</span>
              </div>
            </div>
          </motion.div>

          {/* Floater Element */}
          <div className="absolute -bottom-6 right-12 w-32 h-32 bg-accent-gold rounded-full flex items-center justify-center p-4 shadow-xl z-20 animate-spin-slow">
            <div className="w-full h-full border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
              <div className="text-[9px] font-black text-white text-center uppercase tracking-tighter leading-none">
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
    { icon: <Wifi size={24} />, title: "Digital Workstations", desc: "Gigabit WiFi & charging ports" },
    { icon: <Users size={24} />, title: "Private Meeting Rooms", desc: "Soundproof glass pods" },
    { icon: <Coffee size={24} />, title: "Premium Seating", desc: "Ergonomic luxury lounge" },
    { icon: <Scissors size={24} />, title: "Grooming Services", desc: "Quick premium touch-ups" },
  ];

  return (
    <section id="lounge-plus" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="col-span-2 relative h-[500px] rounded-[48px] overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/assets/lounge_plus_branded_1.png"
                alt="Lounge+ Experience"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" />
              <div className="absolute top-8 left-8">
                <span className="px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-widest text-primary-mist border border-white/20">
                  旗舰店 | FLAGSHIP
                </span>
              </div>
            </div>

            <div className="relative h-64 rounded-[40px] overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/assets/lounge_plus_branded_2.png"
                alt="Meeting Pods"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white text-[9px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">Meeting Pods</div>
            </div>

            <div className="relative h-64 rounded-[40px] overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/assets/lounge_plus_branded_3.png"
                alt="Branded Cafe Bar"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 right-6 text-white text-[9px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-right">OASIS Bar</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[12px] mb-6 block">
                The Next Level
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep mb-6 leading-tight">
                Lounge+ Premium <br />
                <span className="text-primary-mist italic">Experience</span>
              </h2>
              <p className="text-primary-deep/60 text-xl font-light leading-relaxed max-w-xl">
                Co-working | Meetings | Lifestyle Café
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center text-primary-deep shadow-sm group-hover:bg-primary-mist group-hover:text-primary-deep transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary-deep mb-1">{f.title}</h4>
                    <p className="text-sm text-primary-deep/40 font-light leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[24px] bg-primary-deep text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-mist/10 blur-3xl rounded-full" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary-mist block mb-1">Financial Potential</span>
                  <div className="text-3xl md:text-4xl font-serif font-bold">₹60L – ₹1.2Cr <span className="text-lg font-light text-white/50">/ month</span></div>
                </div>
                <div className="text-right">
                  <TrendingUp className="text-primary-mist mb-2 ml-auto" size={32} />
                  <span className="text-[10px] uppercase font-bold text-white/40 tracking-tighter">Projected Yield</span>
                </div>
              </div>
            </div>

            <Link href="/models/lounge-plus" className="inline-flex bg-primary-deep text-white px-12 py-6 rounded-full font-bold text-sm uppercase hover:bg-primary-mist hover:text-primary-deep transition-all shadow-xl items-center gap-3">
              Explore Lounge+
              <ArrowUpRight size={20} />
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
      icon: <Zap className="text-primary-deep" size={20} />,
      slug: "kiosk"
    },
    {
      title: "Express",
      image: "/assets/oasis_express_main.png",
      desc: "High-velocity modular unit for urban corporate zones.",
      investment: "₹8 L - 15 L",
      revenue: "₹2.5 L - 4.5 L",
      roi: "12-16 Months",
      badge: "High Velocity",
      icon: <Zap className="text-primary-deep" size={20} />,
      slug: "express"
    },
    {
      title: "City Cafe",
      image: "/assets/oasis_citycafe_main.png",
      desc: "Vibrant urban cafe balancing dine-in and quick delivery.",
      investment: "₹15 L - 30 L",
      revenue: "₹4.5 L - 9 L",
      roi: "14-20 Months",
      badge: "Popular",
      icon: <Coffee className="text-primary-deep" size={20} />,
      slug: "city-cafe"
    },
    {
      title: "Premium (Green Cafe)",
      image: "/assets/oasis_premium_main.png",
      desc: "Lush biophilic experience center with restorative tech.",
      investment: "₹40 L - 80 L",
      revenue: "₹7 L - 18 L",
      roi: "18-30 Months",
      badge: "Biophilic",
      icon: <Layers className="text-primary-deep" size={20} />,
      slug: "premium"
    },
    {
      title: "Recharge Hub",
      image: "/assets/model_recharge.png",
      desc: "Instant satisfaction node for quick grab-and-go energy.",
      investment: "₹3 L - 7 L",
      revenue: "₹1 L - 2 L",
      roi: "10-15 Months",
      badge: "Micro",
      icon: <Zap className="text-primary-deep" size={20} />,
      slug: "recharge"
    },
    {
      title: "Lounge+",
      image: "/assets/lounge_plus_branded_1.png",
      desc: "Co-working integrated lifestyle café for the modern professional.",
      investment: "₹60 L - 1.2 Cr",
      revenue: "₹12 L - 25 L",
      roi: "18-24 Months",
      badge: "Lifestyle",
      icon: <Layers className="text-primary-deep" size={20} />,
      slug: "lounge-plus"
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section id="models" className="py-16 bg-primary-deep relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[12px] mb-6 block">
            Territory Opportunity
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
            Our <span className="text-primary-mist italic">Business</span> Models
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            Multi-tier investment architecture designed for portfolio diversification
            and operational excellence.
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-8 overflow-x-auto pb-16 no-scrollbar snap-x snap-mandatory"
        >
          {modelsData.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[420px] snap-start"
            >
              <div className="bg-white rounded-[32px] overflow-hidden border border-primary-deep/5 shadow-[0_20px_50px_rgba(15,47,42,0.05)] group hover:shadow-[0_40px_80px_rgba(15,47,42,0.1)] transition-all duration-500">
                <div className="relative h-64 w-full">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-2 bg-primary-deep text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                      {m.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-serif text-primary-deep mb-1 group-hover:text-primary-mist transition-colors">{m.title}</h3>
                      <p className="text-[12px] text-primary-deep/50 leading-relaxed font-light">{m.desc}</p>
                    </div>
                    <div className="w-10 h-10 bg-white/50 rounded-xl flex items-center justify-center">
                      {m.icon}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="p-3 bg-primary-deep/4 rounded-2xl border border-primary-deep/5">
                      <span className="text-[6px] uppercase font-bold text-primary-deep/40 block mb-0.5 tracking-widest">Investment</span>
                      <span className="text-[13px] font-bold text-primary-deep">{m.investment}</span>
                    </div>
                    <div className="p-3 bg-primary-deep/4 rounded-2xl border border-primary-deep/5">
                      <span className="text-[6px] uppercase font-bold text-primary-deep/40 block mb-0.5 tracking-widest">Monthly Rev</span>
                      <span className="text-[13px] font-bold text-primary-deep">{m.revenue}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-6 border-b border-primary-deep/5">
                    <span className="text-[10px] uppercase font-bold text-primary-deep/30 tracking-widest">ROI Analysis</span>
                    <span className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-[9px] font-black uppercase tracking-tighter rounded-md border border-accent-gold/20 leading-none">
                      {m.roi}
                    </span>
                  </div>

                  <Link href={`/models/${m.slug}`} className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-primary-deep text-white hover:bg-primary-mist hover:text-primary-deep transition-all font-bold tracking-widest text-xs uppercase shadow-xl">
                    Explore Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {modelsData.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary-deep/10" />
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionSeparator = () => (
  <section className="py-12 bg-white relative overflow-hidden border-y border-primary-deep/5">
    <div className="absolute inset-0 bg-gradient-to-r from-accent-beige/5 via-transparent to-accent-beige/5" />
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <span className="text-accent-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">The Core Philosophy</span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-primary-deep italic leading-[1.4] max-w-4xl mx-auto">
          "Architecting the future of café culture through <br />
          <span className="text-primary-mist italic">integrated intelligence</span> and precision."
        </h2>
      </motion.div>
    </div>
  </section>
);

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
    { title: "Cost Efficiency", desc: "Bulk procurement and centralized production reduce waste by 30%.", icon: <TrendingUp size={20} /> },
    { title: "Faster Operations", desc: "Localized hubs ensure 2-hour restock cycles for all outlets.", icon: <Zap size={20} /> },
    { title: "High Margins", desc: "Shared logistics and kitchen overhead boost net profitability.", icon: <Wallet size={20} /> },
    { title: "Scalable Growth", desc: "Rapidly replicable blueprints for city-wide domination.", icon: <BarChart3 size={20} /> },
  ];

  return (
    <section id="cluster" className="py-16 bg-primary-deep relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary-mist/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Modern Hub & Spoke Visualization */}
          <div className="relative aspect-square max-w-[650px] mx-auto w-full flex items-center justify-center perspective-[1000px]">
            <motion.div
              initial={{ rotateX: 10, rotateY: -10 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Ripple Effect Hub Backgrounds */}
              {[1, 2, 3].map((r) => (
                <motion.div
                  key={r}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1.5 + r * 0.2, opacity: [0, 0.1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: r * 1, ease: "easeOut" }}
                  className="absolute inset-x-1/4 inset-y-1/4 rounded-full border border-primary-mist/30"
                />
              ))}

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 400">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {spokes.map((s, i) => {
                  const x2 = Number((200 + 166 * Math.cos((s.angle * Math.PI) / 180)).toFixed(2));
                  const y2 = Number((200 + 166 * Math.sin((s.angle * Math.PI) / 180)).toFixed(2));
                  return (
                    <React.Fragment key={i}>
                      {/* Subtle Background Path */}
                      <path
                        d={`M 200 200 L ${x2} ${y2}`}
                        stroke="rgba(123, 227, 214, 0.05)"
                        strokeWidth="1"
                        fill="none"
                      />
                      {/* Animated Glow Path */}
                      <motion.path
                        d={`M 200 200 L ${x2} ${y2}`}
                        stroke="rgba(123, 227, 214, 0.4)"
                        strokeWidth="1.5"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.05 }}
                      />
                    </React.Fragment>
                  );
                })}
                {/* Comet Flow Dots */}
                {spokes.map((s, i) => {
                  const x2 = Number((200 + 166 * Math.cos((s.angle * Math.PI) / 180)).toFixed(2));
                  const y2 = Number((200 + 166 * Math.sin((s.angle * Math.PI) / 180)).toFixed(2));
                  return (
                    <motion.circle
                      key={`dot-${i}`}
                      r="2.5"
                      fill="#7BE3D6"
                      initial={{ offset: 0 }}
                      animate={{
                        cx: [200, x2],
                        cy: [200, y2],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 3 + i * 0.1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      style={{ filter: "drop-shadow(0 0 4px #7BE3D6)" }}
                    />
                  );
                })}
              </svg>

              {/* Central Kitchen Node (Modern) */}
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 15 }}
                className="relative z-10 w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary-mist via-primary-mist/90 to-primary-deep flex items-center justify-center border-[6px] border-white/5 shadow-[0_0_100px_rgba(123,227,214,0.4)]"
              >
                <div className="absolute inset-0 rounded-full bg-primary-mist/10 animate-ping" />
                <div className="text-center group relative z-10">
                  <div className="relative mb-2">
                    <ChefHat size={36} className="text-primary-deep mx-auto" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-primary-mist animate-bounce" />
                  </div>
                  <span className="text-[10px] md:text-[13px] font-black text-primary-deep uppercase tracking-[0.3em] leading-tight block">
                    Core<br />Cluster
                  </span>
                </div>
              </motion.div>

              {/* Spoke Nodes (Modern) */}
              {spokes.map((s, i) => {
                const x = (50 + 41.5 * Math.cos((s.angle * Math.PI) / 180)).toFixed(4);
                const y = (50 + 41.5 * Math.sin((s.angle * Math.PI) / 180)).toFixed(4);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, translateZ: -50 }}
                    whileInView={{ opacity: 1, scale: 1, translateZ: 0 }}
                    animate={{
                      y: [0, -6, 0],
                      rotateX: [0, 5, 0]
                    }}
                    transition={{
                      delay: 0.8 + i * 0.05,
                      y: { duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    viewport={{ once: true }}
                    className="absolute w-14 h-14 md:w-24 md:h-24 rounded-2xl border border-white/10 glass-dark flex flex-col items-center justify-center text-center p-2 hover:border-primary-mist hover:bg-primary-mist/5 group transition-all duration-500 cursor-pointer z-10"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="text-primary-mist group-hover:text-white transition-colors mb-2">
                      {s.icon}
                    </div>
                    <span className="text-[7px] md:text-[9px] font-bold text-white/50 group-hover:text-white uppercase tracking-widest leading-none">
                      {s.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Content & Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
                Regional Strategy
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Cluster-Based <br />
                <span className="text-primary-mist italic">Café Ecosystem</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                Our revolutionary Hub-and-Spoke model centers a high-capacity
                <span className="text-white font-medium"> Central Kitchen </span>
                at the heart of regional clusters, feeding optimized outlets with
                precision and speed.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-8 rounded-[24px] bg-white/5 border border-white/5 hover:border-primary-mist/20 transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary-mist/10 rounded-xl flex items-center justify-center mb-6 text-primary-mist group-hover:bg-primary-mist group-hover:text-primary-deep transition-all">
                      {b.icon}
                    </div>
                    <h4 className="text-white font-serif text-xl mb-3 tracking-wide">{b.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">
                      {b.desc}
                    </p>
                  </motion.div>
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
  <section id="roi" className="py-16 bg-primary-deep relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="glass p-10 md:p-14 rounded-[40px] relative border-white/10 shadow-3xl overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-mist/5 blur-3xl rounded-full -mr-20 -mt-20" />

        <div className="flex justify-between items-center mb-16 relative z-10">
          <div>
            <h3 className="text-2xl font-serif text-white mb-1">Yield Analytics</h3>
            <span className="text-[10px] uppercase tracking-widest text-primary-mist font-bold">Consolidated Performance Hub</span>
          </div>
          <div className="flex gap-6 uppercase font-bold text-[9px] text-white/40 tracking-widest bg-white/5 py-3 px-6 rounded-full border border-white/5">
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-mist shadow-[0_0_8px_#7BE3D6]" /> Growth</div>
            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-gold shadow-[0_0_8px_#D4AF37]" /> Revenue</div>
          </div>
        </div>

        <div className="relative h-72 w-full px-4">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mistGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7BE3D6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7BE3D6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map(line => (
              <line key={line} x1="0" y1={line} x2="100" y2={line} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
            ))}

            {/* Area Fills */}
            <motion.path
              d="M 0 40 Q 25 20, 50 15 T 100 12 L 100 100 L 0 100 Z"
              fill="url(#mistGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M 0 95 Q 30 90, 50 40 T 100 8 L 100 100 L 0 100 Z"
              fill="url(#goldGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            />

            {/* Paths */}
            <motion.path d="M 0 40 Q 25 20, 50 15 T 100 12" fill="none" stroke="#7BE3D6" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} />
            <motion.path d="M 0 95 Q 30 90, 50 40 T 100 8" fill="none" stroke="#D4AF37" strokeWidth="2.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.3 }} />

            {/* Legend Pins */}
            <motion.circle cx="50" cy="40" r="1.5" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
            <text x="52" y="38" fontSize="3" fill="white" fillOpacity="0.4" fontFamily="sans-serif">Projection Point</text>

            {/* Axis Labels */}
            <text x="0" y="105" fontSize="3" fill="white" fillOpacity="0.2">MONTH 0</text>
            <text x="45" y="105" fontSize="3" fill="white" fillOpacity="0.2">MONTH 18</text>
            <text x="90" y="105" fontSize="3" fill="white" fillOpacity="0.2">YEAR 3+</text>
          </svg>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] font-normal text-white/30">
          <span>Simulation v.4.0</span>
          <span className="text-primary-mist font-bold">Verified Scalability</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Wealth Engineering</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-tight">Predictive <span className="text-primary-mist italic text-4xl md:text-7xl">ROI</span> <br />Architecture</h2>

        <div className="grid gap-6">
          <div className="group p-8 glass border-white/5 flex items-center justify-between hover:bg-white/5 transition-all duration-500">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-primary-mist/10 rounded-2xl flex items-center justify-center text-primary-mist group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-3xl text-white font-serif mb-1">12-18 Months</div>
                <div className="text-[10px] uppercase tracking-widest text-primary-mist font-bold">Average Break-Even Cycle</div>
              </div>
            </div>
            <TrendingUp size={20} className="text-white/10 group-hover:text-primary-mist transition-colors" />
          </div>

          <div className="group p-8 glass border-white/5 flex items-center justify-between hover:bg-white/5 transition-all duration-500">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
                <Wallet size={24} />
              </div>
              <div>
                <div className="text-3xl text-white font-serif mb-1">32% - 45%</div>
                <div className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">Annualized Net Margins</div>
              </div>
            </div>
            <BarChart3 size={20} className="text-white/10 group-hover:text-accent-gold transition-colors" />
          </div>
        </div>

        <p className="mt-10 text-white/40 text-sm font-light leading-relaxed max-w-lg">
          Our financial models are stress-tested against localized market volatility, ensuring your investment is cushioned by diversified revenue streams.
        </p>
      </motion.div>
    </div>
  </section>
);

const Plans = () => {
  const plansData = [
    {
      tier: "SILVER",
      price: "₹20L+",
      name: "Operator Model",
      image: "/assets/plan_silver.png",
      features: [
        { text: "Single/multi outlets", included: true },
        { text: "Brand access", included: true },
        { text: "Central kitchen supply", included: true },
        { text: "No territory rights", included: false },
      ],
      color: "bg-[#F5F5F7]",
      textColor: "text-[#0F2F2A]",
      popular: false
    },
    {
      tier: "GOLD",
      price: "₹40L+",
      name: "Expansion Model",
      image: "/assets/plan_gold.png",
      features: [
        { text: "Master franchise", included: true },
        { text: "Territory rights", included: true },
        { text: "Central supply access", included: true },
        { text: "Priority locations", included: true },
      ],
      color: "bg-[#FFF9F2]",
      textColor: "text-[#0F2F2A]",
      popular: true
    },
    {
      tier: "PLATINUM",
      price: "₹50L+",
      name: "Full Ecosystem",
      image: "/assets/plan_platinum.png",
      features: [
        { text: "Master + Central Kitchen", included: true },
        { text: "Full territory rights", included: true },
        { text: "Equity participation", included: true },
        { text: "Direct brand partnership", included: true },
      ],
      color: "bg-[#0F2F2A]",
      textColor: "text-white",
      borderColor: "border-primary-mist/30",
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-accent-beige overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <span className="text-primary-deep/40 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Investment Architecture</span>

        <div className="inline-block px-8 py-2 border border-primary-deep/10 rounded-full mb-10">
          <span className="text-primary-deep font-bold tracking-[0.3em] uppercase text-[10px]">PARTNERSHIP TIERS</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-serif text-primary-deep italic mb-24">Choose Your Partnership Level</h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {plansData.map((p, i) => (
            <motion.div
              key={p.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`rounded-[56px] relative overflow-hidden flex flex-col items-center transition-all duration-700 hover:scale-[1.02] shadow-[0_40px_100px_rgba(15,47,42,0.1)] ${p.color} ${p.popular ? 'ring-2 ring-accent-gold' : p.tier === 'PLATINUM' ? `border ${p.borderColor}` : 'border border-white/5'}`}
            >
              {/* Header Image */}
              <div className="h-64 w-full relative mb-10">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {p.popular && (
                  <div className="absolute top-0 right-0 bg-accent-gold text-primary-deep px-8 py-3 font-black text-[10px] uppercase tracking-widest rounded-bl-3xl shadow-xl">
                    Most Popular
                  </div>
                )}
                <div className="absolute bottom-6 left-10">
                  <span className={`px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase ${p.tier === 'PLATINUM' ? 'bg-primary-mist text-primary-deep' : p.tier === 'GOLD' ? 'bg-accent-gold text-primary-deep' : 'bg-white text-primary-deep'}`}>
                    {p.tier}
                  </span>
                </div>
              </div>

              <div className="px-12 pb-14 w-full flex flex-col flex-grow">
                <div className="mb-14 text-center">
                  <div className={`text-5xl md:text-6xl font-serif font-black mb-3 ${p.textColor}`}>{p.price}</div>
                  <div className={`text-xl font-serif ${p.textColor} opacity-70 tracking-wide`}>{p.name}</div>
                </div>

                <div className="w-full space-y-0 flex-grow mb-14">
                  {p.features.map((f, idx) => (
                    <div key={idx} className={`flex items-center gap-4 py-5 border-b last:border-0 ${p.tier === 'PLATINUM' ? 'border-white/5' : 'border-primary-deep/5'}`}>
                      <div className="shrink-0">
                        {f.included ? (
                          <Check size={18} className={p.tier === 'PLATINUM' ? 'text-primary-mist' : 'text-accent-gold'} />
                        ) : (
                          <X size={18} className="text-primary-deep/20" />
                        )}
                      </div>
                      <span className={`text-sm font-light ${p.textColor} opacity-70 tracking-tight`}>{f.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="/franchise" className={`w-full py-8 rounded-[24px] font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl flex items-center justify-center ${p.tier === 'PLATINUM' ? 'bg-primary-mist text-primary-deep hover:bg-white' : 'bg-primary-deep text-white hover:bg-primary-mist hover:text-primary-deep shadow-primary-deep/20'}`}>
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchWalletBalance(parsedUser.id || parsedUser._id);
    }
  }, []);

  const fetchWalletBalance = async (userId: string) => {
    try {
      const res = await api.user.getWalletBalance(userId);
      if (res && res.success) {
        setWalletBalance(res.balance);
      }
    } catch (error) {
      console.error("Failed to fetch wallet balance:", error);
    }
  };

  const handlePayment = async () => {
    if (!user) {
      window.location.href = "/login?redirect=/";
      return;
    }
    
    if (walletBalance < 50000) {
      setErrorMessage(`Insufficient tokens. You have ${walletBalance} tokens but 50,000 are required.`);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await api.user.payWithWallet(user.id || user._id, 50000);
      if (res && res.success) {
        setStatus("success");
        setWalletBalance(res.newBalance);
      } else {
        setStatus("error");
        setErrorMessage(res.message || "Payment failed");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error occurred.");
    }
  };

  return (
    <section id="payment" className="py-20 bg-primary-deep relative overflow-hidden">
      {/* Wallet Payment Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-10 max-w-md w-full relative shadow-2xl"
            >
              <button onClick={() => { setShowModal(false); setStatus("idle"); setErrorMessage(""); }} className="absolute top-6 right-6 text-slate-400 hover:text-slate-800">
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-serif text-primary-deep mb-2 italic">Confirm <span className="not-italic text-primary-mist">Payment</span></h3>
              <p className="text-slate-500 font-light text-sm mb-8">You are about to secure your strategic territory.</p>
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Required Tokens</span>
                  <span className="font-serif font-bold text-primary-deep text-lg">50,000</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-slate-200 pt-4">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Available Wallet Balance</span>
                  <span className={`font-serif font-bold text-lg ${walletBalance >= 50000 ? 'text-emerald-600' : 'text-red-500'}`}>{walletBalance}</span>
                </div>
              </div>

              {status === "success" ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-2">Payment Successful</h4>
                  <p className="text-slate-500 text-sm">Your territory has been temporarily locked. Our team will contact you shortly.</p>
                </div>
              ) : (
                <>
                  {errorMessage && <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-[10px] uppercase font-bold tracking-widest rounded-xl text-center">{errorMessage}</div>}
                  
                  <button 
                    onClick={handlePayment}
                    disabled={status === "loading"}
                    className="w-full py-5 rounded-xl bg-primary-deep text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-primary-mist hover:text-primary-deep transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? "Processing..." : "Pay with Wallet Tokens"}
                  </button>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cinematic Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Final Milestone</span>
            <h2 className="text-3xl md:text-6xl font-serif text-white mb-10 leading-tight">
              Secure Your <br />
              <span className="text-primary-mist italic">Strategic Territory</span>
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-12 max-w-xl">
              Take the first step towards your cafe empire. Secure your hub with a fully refundable commitment token and unlock priority benefits.
            </p>

            <div className="space-y-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-mist group-hover:border-primary-mist transition-all duration-300">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-white mb-1">{b.title}</h4>
                    <p className="text-sm text-white/40 font-light leading-snug">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-[48px] border-white/10 shadow-3xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-mist/5 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold mx-auto mb-10 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <LockIcon size={36} />
              </div>

              <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 mb-4">Reservation Token</div>
              <div className="text-4xl md:text-6xl font-serif font-black text-white mb-4">50,000 <span className="text-lg font-sans font-medium text-white/40">Tokens</span></div>
              <div className="text-sm text-primary-mist font-bold uppercase tracking-widest mb-12">Fully Refundable Milestone</div>

              <button 
                onClick={() => {
                  if (!user) {
                    window.location.href = "/login?redirect=/";
                  } else {
                    setShowModal(true);
                  }
                }}
                className="w-full py-8 rounded-full bg-accent-gold text-primary-deep font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
              >
                Pay Token & Reserve
              </button>

              <div className="mt-10 flex items-center justify-center gap-3 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                <ShieldCheck size={14} className="text-primary-mist" />
                Encrypted Secure Checkout
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const [tiers, setTiers] = useState<any[]>([]);

  useEffect(() => {
    api.membership.getAll()
      .then(data => {
        if (data && data.length > 0) setTiers(data);
      })
      .catch(err => console.error("Failed to fetch memberships:", err));
  }, []);

  // Fallback if fetch fails or is empty
  const displayTiers = tiers.length > 0 ? tiers : [
    {
      tier: "Silver",
      tag: "Essential Status",
      amount: 5000,
      perks: ["Basic discounts", "Café credits", "Standard access"],
      glow: "hover:shadow-[0_0_40px_rgba(148,163,184,0.15)]",
      border: "border-slate-400/20"
    },
    {
      tier: "Gold",
      tag: "Priority Status",
      amount: 15000,
      perks: ["Extra benefits", "Priority booking", "Meeting room credits"],
      glow: "hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]",
      border: "border-accent-gold/30",
      featured: true
    },
    {
      tier: "Platinum",
      tag: "Elite status",
      amount: 50000,
      perks: ["Premium rewards", "Franchise priority", "Equity benefits"],
      glow: "hover:shadow-[0_0_40px_rgba(123,227,214,0.15)]",
      border: "border-primary-mist/30"
    }
  ];

  const getIcon = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'silver': return <Star className="mt-1" size={28} />;
      case 'gold': return <Medal className="mt-1" size={28} />;
      case 'platinum': return <Gem className="mt-1" size={28} />;
      default: return <Star className="mt-1" size={28} />;
    }
  };

  return (
    <section id="membership" className="py-20 bg-[#080B0B] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-white/5 rounded-full -mr-96 -mt-96 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border border-white/5 rounded-full -ml-72 -mb-72 opacity-20" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The OASIS Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Member Benefits <br />& <span className="text-primary-mist italic">OASIS Points</span></h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            Our private closed-loop credit system integrates the entire T-CAFE MIST experience.
            Acquire credits for café purchases, unlock co-working priority, and leverage status for franchise milestone adjustments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTiers.map((t: any, i: number) => (
            <motion.div
              key={t.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className={`p-12 glass rounded-[48px] relative overflow-hidden group transition-all duration-700 shadow-2xl ${t.glow || ''} ${t.border || ''}`}
            >
              <div className="relative z-10">
                <div className={`mb-12 w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 ${t.tier === 'Gold' ? 'text-accent-gold' : t.tier === 'Platinum' ? 'text-primary-mist' : 'text-slate-400'}`}>
                  {getIcon(t.tier)}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black mb-3">{t.tag}</div>
                <h3 className="text-4xl font-serif text-white mb-2 tracking-tight">{t.tier} Tier</h3>
                <div className="text-3xl font-serif text-primary-mist mb-10">₹{t.amount?.toLocaleString()}</div>

                <ul className="space-y-6 mb-14">
                  {t.perks.map((p: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 text-white/40 text-[15px] font-light group-hover:text-white/80 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-mist mt-2 shadow-[0_0_8px_#7BE3D6]" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link href="/membership" className={`block text-center w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 shadow-lg ${t.featured ? 'bg-accent-gold text-primary-deep hover:bg-white' : 'border border-white/10 text-white hover:bg-white hover:text-primary-deep'}`}>
                  Join {t.tier} Status
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
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
    <section id="news" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Latest Insights</span>
            <h2 className="text-4xl md:text-7xl font-serif text-primary-deep italic">Brand <span className="text-primary-mist not-italic">Editorial</span></h2>
          </div>
          <Link href="/news" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-primary-deep hover:text-primary-mist transition-all group border-b border-primary-deep/10 pb-2">
            View All News <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-[40px] overflow-hidden mb-10 border border-primary-deep/5 shadow-2xl group-hover:shadow-primary-mist/10 transition-all duration-700">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent opacity-60" />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-primary-deep shadow-xl group-hover:bg-primary-mist transition-colors">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-primary-deep/40 uppercase tracking-widest">
                <span>{post.date}</span>
                <div className="w-1 h-1 rounded-full bg-primary-mist" />
                <span>5 min read</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-primary-deep mb-5 group-hover:text-primary-mist transition-colors leading-tight tracking-tight">
                {post.title}
              </h3>

              <p className="text-sm text-primary-deep/50 font-light leading-relaxed mb-8 pr-4">
                {post.desc}
              </p>

              <div className="flex items-center gap-3 text-[11px] font-black text-primary-deep/70 uppercase tracking-[0.2em] group-hover:gap-6 transition-all duration-500">
                Read Article <ChevronRight size={14} className="text-primary-mist" />
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
    <section id="menu" className="py-20 bg-white text-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-24">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Product Fidelity</span>
          <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">Popular <span className="text-primary-mist italic">Menu.</span></h2>
          <p className="text-primary-deep/60 text-lg font-light max-w-2xl mx-auto">
            100% Vegetarian high-demand selection engineered for cross-demographic appeal and high repeat conversion.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-[40px] overflow-hidden mb-6 border border-primary-deep/5 transition-all duration-700 shadow-xl group-hover:scale-95">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-deep/10" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">
                  {item.category}
                </div>
              </div>
              <h4 className="text-xl font-serif text-center group-hover:text-primary-mist transition-colors">{item.name}</h4>
            </motion.div>
          ))}
        </div>

        {/* Brand Promise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 py-10 bg-[#FAF9F6] border-y border-primary-deep/5 flex flex-wrap justify-center items-center gap-6 md:gap-12"
        >
          <div className="text-primary-deep font-black text-xl md:text-3xl uppercase tracking-[0.3em] text-center flex items-center gap-4">
            MORE <span className="text-primary-mist italic font-serif lowercase font-normal">Variety</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            MORE <span className="text-primary-mist italic font-serif lowercase font-normal">Taste</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
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
    { q: "What is the Oasis Cluster Model?", a: "It's a strategic territorial play where one flagship Luxury Hub supports multiple high-efficiency Kiosk and Express spokes, maximizing operational efficiency and ROI." },
    { q: "Is the menu 100% vegetarian?", a: "Yes, OASIS T-CAFE maintains a strict global standard of 100% vegetarian offerings across all beverage and snack categories." },
    { q: "How long does it take to become operational?", a: "Depending on the model, setup times range from 21 days for a Kiosk to 120 days for a full Luxury Elite Lounge." },
    { q: "What kind of training is provided?", a: "We provide comprehensive 360-degree training for owners and staff, covering brewing precision, customer experience tech, and business analytics." }
  ];

  return (
    <section className="py-16 bg-[#FAF9F6] text-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-32"
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Support Center</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">Frequently Asked <br /><span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-8">Questions.</span></h2>

            <div className="relative h-[500px] rounded-[48px] overflow-hidden shadow-2xl border border-primary-deep/5 group">
              <Image
                src="/assets/lounge_experience.png"
                alt="FAQ Visual"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent" />
              <div className="absolute bottom-10 left-10 p-8 bg-white/95 backdrop-blur-xl rounded-3xl border border-primary-deep/5 shadow-2xl max-w-xs">
                <div className="text-primary-mist text-[10px] font-black uppercase tracking-widest mb-2 italic">24/7 Assistance</div>
                <h4 className="text-primary-deep font-serif text-xl leading-tight">Our global advisory team is always online.</h4>
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-4 pt-12 lg:pt-24">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-primary-deep/5 rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <h4 className={`text-lg md:text-xl font-serif transition-colors ${openIndex === i ? 'text-primary-mist' : 'text-primary-deep'}`}>
                    {faq.q}
                  </h4>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-primary-mist text-primary-deep rotate-180' : 'bg-primary-deep/5 text-primary-deep/40 group-hover:bg-primary-mist/10'}`}>
                    {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-primary-deep/50 font-light leading-relaxed text-sm md:text-base border-t border-primary-deep/5 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <div className="mt-12 p-8 bg-primary-deep text-white rounded-[32px] flex items-center justify-between group cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-primary-mist/5 group-hover:bg-primary-mist/10 transition-colors" />
              <div className="relative z-10">
                <h4 className="text-xl font-serif mb-1 italic">Still have questions?</h4>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Connect with our expansion lead</p>
              </div>
              <Link href="/contact" className="relative z-10 w-12 h-12 rounded-full bg-primary-mist text-primary-deep flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => (
  <section id="contact" className="py-16 bg-primary-deep relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-mist/5 blur-[100px] rounded-full" />
    </div>

    <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Direct Advisory</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            The Future is <span className="text-primary-mist italic">Brewing.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="space-y-2">
              <span className="text-white/20 text-[9px] font-black uppercase tracking-widest block">Email Line</span>
              <div className="flex items-center gap-3 text-white/60 hover:text-primary-mist transition-colors cursor-pointer">
                <Mail size={16} className="text-primary-mist" />
                <span className="text-sm font-light">advisors@tcafemist.global</span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-white/20 text-[9px] font-black uppercase tracking-widest block">Priority Support</span>
              <div className="flex items-center gap-3 text-white/60 hover:text-primary-mist transition-colors cursor-pointer">
                <Phone size={16} className="text-primary-mist" />
                <span className="text-sm font-light">+1 (555) 800-MIST</span>
              </div>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <span className="text-white/20 text-[9px] font-black uppercase tracking-widest block">Global Headquarters</span>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={16} className="text-primary-mist" />
                <span className="text-sm font-light">Sustainable Silicon Valley Corridor, CA 94025</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl p-10 md:p-12 rounded-[48px] border border-white/10"
        >
          <h3 className="text-2xl font-serif text-white mb-6">Secure Your Territory</h3>
          <p className="text-white/40 font-light mb-10 leading-relaxed text-sm">
            Join the elite network of T-CAFE MIST partners. Take the first step in our private equity ecosystem and lead the café revolution.
          </p>

          <div className="flex flex-col gap-4">
            <Link href="/contact" className="w-full px-8 py-4 rounded-2xl bg-primary-mist text-primary-deep font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3">
              <Calendar size={14} /> Book Discovery Call
            </Link>
            <Link href="/contact" className="w-full px-8 py-4 rounded-2xl border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-primary-deep transition-all flex items-center justify-center gap-3">
              <Mail size={14} /> Request Pitch Deck
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-[9px] text-white/20 uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2"><ShieldCheck size={12} className="text-primary-mist" /> Transparent Terms</div>
            <div className="flex items-center gap-2"><Users size={12} className="text-primary-mist" /> 24/7 Support</div>
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

  return (
    <section id="global-expansion" className="py-20 bg-[#05110F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-mist/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">International Strategy</span>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">Upcoming <span className="text-primary-mist italic">Global</span> Locations</h2>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">OASIS is transcending borders. We are strategically expanding our elite café ecosystem to the world's most vibrant hubs.</p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 min-h-[600px]">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, layout: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } }}
              viewport={{ once: true }}
              className="relative h-[500px] lg:h-[600px] rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer flex-[1] hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.43,0.13,0.23,0.96)]"
            >
              <Image src={loc.image} alt={loc.city} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent opacity-90" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <motion.h3 layout="position" className="text-3xl md:text-5xl font-serif text-white mb-4 group-hover:text-primary-mist transition-all duration-500 flex items-center gap-4 whitespace-nowrap">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <img src={loc.flag} alt={loc.country} className="w-full h-full object-cover" />
                  </div>
                  {loc.city}
                </motion.h3>
                <motion.div layout="position" className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-10 font-black overflow-hidden whitespace-nowrap px-1">{loc.country}</motion.div>
                <motion.div layout="position">
                  <span className="inline-block px-8 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary-mist group-hover:bg-primary-mist group-hover:text-primary-deep transition-all shadow-2xl">{loc.status}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-white tracking-[0.2em] leading-none mb-2">2026</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent-gold">Expansion Launch</span>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-4xl font-serif text-white tracking-[0.2em] leading-none mb-2">5+</span>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent-gold">Global Hubs</span>
            </div>
          </div>
          <Link href="/franchise" className="px-10 py-5 rounded-full border border-primary-mist/30 text-primary-mist font-black uppercase tracking-widest text-[10px] hover:bg-primary-mist hover:text-primary-deep transition-all flex items-center gap-3 group">
            <Globe size={16} className="group-hover:rotate-180 transition-transform duration-1000" /> Explore Global Roadmap
          </Link>
        </motion.div>
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
