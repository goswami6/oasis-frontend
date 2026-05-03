"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2, Users, Target, History,
  Lightbulb, ShieldCheck, Zap, ArrowRight,
  TrendingUp, Globe, Award, Cpu, Leaf,
  CheckCircle2, Fingerprint, Database, BarChart3
} from "lucide-react";


const AboutHero = () => (
  <section className="relative pt-24 sm:pt-28 md:pt-40 pb-12 md:pb-20 bg-primary-deep overflow-hidden">

    {/* BG IMAGE */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/assets/brand_story.png"
        alt="About Oasis"
        fill
        priority
        className="object-cover opacity-50 md:opacity-60"
      />

      {/* Overlay */}
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
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight">
          About Us
        </h1>

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
          <Link
            href="/"
            className="text-white/50 hover:text-primary-mist transition-colors"
          >
            Home
          </Link>

          <span className="text-white/30">/</span>

          <span className="text-primary-mist">About Us</span>
        </div>

      </motion.div>
    </div>
  </section>
);

const ImpactStats = () => {
  const stats = [
    { label: "Projected Hubs", value: "500+", suffix: "Nodes" },
    { label: "Intelligence", value: "24/7", suffix: "Monitoring" },
    { label: "Community", value: "1M+", suffix: "Members" },
    { label: "Precision", value: "100%", suffix: "Accuracy" }
  ];

  return (
    <section className="py-12 sm:py-14 md:py-20 bg-primary-deep border-y border-white/5 overflow-hidden">
      {/* FULL WIDTH MARQUEE ON MOBILE */}
      <div className="md:hidden overflow-hidden w-full relative">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-primary-deep to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-primary-deep to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 w-fit py-4"
        >
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="text-center min-w-[160px] flex-shrink-0">
              <div className="text-3xl font-serif text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-primary-mist opacity-80">
                {stat.label}
              </div>
              <div className="text-[8px] uppercase tracking-widest text-white/40 mt-1">
                {stat.suffix}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        {/* DESKTOP/TABLET GRID */}
        <div className="hidden md:grid md:grid-cols-4 gap-10 lg:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="text-5xl lg:text-6xl font-serif text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.4em] font-black text-primary-mist opacity-80">
                {stat.label}
              </div>
              <div className="text-[9px] uppercase tracking-widest text-white/40 mt-1">
                {stat.suffix}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderVision = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[320px] sm:h-[420px] md:h-[550px] lg:h-[700px] rounded-2xl sm:rounded-3xl md:rounded-[48px] overflow-hidden group shadow-xl md:shadow-2xl border border-primary-deep/5 bg-[#FAF9F6]">

            {/* Background Icon */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center p-10 sm:p-16 md:p-20">
              <Fingerprint size={120} className="sm:size-[180px] md:size-[260px] text-primary-deep" />
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-auto sm:max-w-xs md:max-w-sm p-4 sm:p-6 md:p-10 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl border border-primary-deep/5 shadow-xl">

              <h4 className="text-sm sm:text-base md:text-xl text-primary-deep font-serif italic mb-3 md:mb-4 leading-snug">
                "We are not just brewing coffee; we are engineering human connections."
              </h4>

              <div className="w-8 md:w-10 h-[2px] bg-accent-gold mb-3 md:mb-4" />

              <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest font-black text-primary-deep/40 italic">
                OASIS Ecosystem Architect
              </p>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
            The Narrative Architecture
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep italic mb-6 md:mb-10 leading-tight">
            Re-imagining <br />
            The <span className="text-primary-mist not-italic">Intersection.</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-primary-deep/60 text-sm sm:text-base md:text-lg leading-relaxed">

            <p>
              T-CAFE MIST was born from a singular question: Why do our spaces not serve our evolution? In an era of hyper-connectivity, we realized that the physical "third space" had become stagnant.
            </p>

            <p>
              By integrating <strong>OASIS Intelligence</strong> with architectural lifestyle centers, we created a model where aesthetics meet equity. Every element is engineered for precision.
            </p>

            <p className="text-primary-deep font-normal pt-3 md:pt-4 border-t border-primary-deep/5">
              Today, we are scaling this vision globally, inviting partners to join a movement that prioritizes both human wellness and technical scalability.
            </p>

          </div>

        </motion.div>

      </div>
    </div>
  </section>
);

const TechnicalEdge = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-primary-deep text-white overflow-hidden relative">

    {/* Glow */}
    <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary-mist/5 blur-[100px] md:blur-[160px] rounded-full -mr-40 sm:-mr-60 md:-mr-96 -mt-40 sm:-mt-60 md:-mt-96" />

    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

        {/* ================= LEFT ================= */}
        <div>
          <span className="text-primary-mist tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
            Technological Edge
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-10 italic leading-tight">
            OASIS <span className="text-primary-mist not-italic">Intelligence.</span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12">
            The heart of our ecosystem is a proprietary operating system that synchronizes every node within a regional cluster.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <Cpu size={22} />,
                title: "Pulse OS",
                desc: "Real-time monitoring and predictive maintenance."
              },
              {
                icon: <Database size={22} />,
                title: "Supply Sync",
                desc: "Zero-friction inventory management."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/5"
              >
                <div className="text-primary-mist mb-3 md:mb-6">
                  {item.icon}
                </div>

                <h4 className="text-base sm:text-lg md:text-xl font-serif mb-2 md:mb-4 uppercase tracking-tight">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-white/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative">

          <div className="relative h-[260px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl md:rounded-[48px] lg:rounded-[64px] border border-white/10 overflow-hidden shadow-xl bg-white/5 flex items-center justify-center">

            {/* Pulse BG */}
            <div className="absolute inset-0 bg-primary-mist/5 animate-pulse" />

            {/* Icon */}
            <BarChart3 className="text-white/10" size={120} />

            {/* Overlay Card */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-auto sm:max-w-xs md:max-w-sm p-4 sm:p-6 md:p-8 bg-primary-deep/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10">

              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary-mist animate-ping" />
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-primary-mist">
                  Live Sync
                </span>
              </div>

              <div className="text-lg sm:text-2xl md:text-3xl font-serif">
                99.9% Uptime
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
);

const SustainabilityEthics = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white text-primary-deep">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

      {/* HEADER */}
      <div className="text-center mb-12 sm:mb-16 md:mb-24">
        <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
          Ethical Commitment
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight">
          Ethics In Every{" "}
          <span className="text-primary-mist not-italic">Infusion.</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

        {[
          {
            icon: Leaf,
            title: "100% Vegetarian",
            desc: "A pure, compassionate menu engineered for the future of ethical dining."
          },
          {
            icon: Globe,
            title: "Mist Sourcing",
            desc: "Direct-trade beans sourced from estates that share our vision for equity."
          },
          {
            icon: CheckCircle2,
            title: "Zero Plastic",
            desc: "Our architectural centers and kiosks are committed to 100% biodegradable cycles."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            {/* ICON */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary-mist/10 flex items-center justify-center text-primary-mist mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform">
              <item.icon size={24} className="sm:size-[28px] md:size-[32px]" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3 sm:mb-4 md:mb-6">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-xs sm:text-sm text-primary-deep/60 leading-relaxed max-w-[240px] sm:max-w-xs">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  </section>
);


const WhyChoose = () => {
  const points = [
    { title: "Proven High-Demand Business", subtitle: "Chai & Coffee Consumption is Unstoppable" },
    { title: "Multi-Format Model", subtitle: "Start Small, Grow Big" },
    { title: "100% Vegetarian", subtitle: "For Everyone, Everywhere" },
    { title: "End-to-End Support", subtitle: "Setup, Training, Marketing & Operations" },
    { title: "Scalable Across India & South East Asia", subtitle: "" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
              Why Partner With Us?
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep italic mb-6 md:mb-10 leading-tight">
              The OASIS <br />
              <span className="text-primary-mist not-italic">Advantage.</span>
            </h2>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 sm:gap-4 md:gap-5 group"
                >
                  {/* ICON */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-primary-mist/20 flex items-center justify-center text-primary-mist shrink-0 mt-1 group-hover:bg-primary-mist group-hover:text-primary-deep transition-colors">
                    <CheckCircle2 size={14} className="sm:size-[16px] md:size-[18px]" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-sm sm:text-base md:text-xl font-serif text-primary-deep uppercase tracking-tight leading-snug">
                      {p.title}
                    </h4>

                    {p.subtitle && (
                      <p className="text-xs sm:text-sm text-primary-deep/50 mt-1">
                        {p.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <div className="relative order-first lg:order-none">
            <div className="relative h-[260px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-2xl sm:rounded-3xl md:rounded-[48px] overflow-hidden shadow-xl border border-primary-deep/5">
              <Image
                src="/assets/cafe_models.png"
                alt="Why Choose Oasis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-deep/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-primary-deep relative overflow-hidden">

    {/* Background Glow */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-mist/10 via-transparent to-transparent opacity-50" />
    </div>

    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">

      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-14 md:mb-20">
        <span className="text-primary-mist tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-4 md:mb-6 block">
          Technical Symphony
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-white italic leading-tight">
          How It <span className="text-primary-mist not-italic">Works.</span>
        </h2>
      </div>

      {/* VIDEO CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="relative aspect-video rounded-2xl sm:rounded-3xl md:rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer shadow-xl md:shadow-3xl">

          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-deep/40 group-hover:bg-primary-deep/20 transition-all duration-700" />

          {/* Image */}
          <Image
            src="/assets/lounge_plus_main.png"
            alt="Operational Showcase"
            fill
            className="object-cover transition-transform duration-700 md:duration-1000 group-hover:scale-110"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-mist transition-all duration-300 md:duration-500 shadow-xl">

              <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[12px] sm:border-l-[16px] md:border-l-[20px] border-l-white border-b-[8px] sm:border-b-[10px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2 group-hover:border-l-primary-deep" />

            </div>
          </div>

          {/* Bottom Label */}
          <div className="absolute bottom-3 sm:bottom-5 md:bottom-10 left-3 sm:left-5 md:left-10 right-3 sm:right-auto sm:max-w-xs md:max-w-sm p-3 sm:p-4 md:p-6 bg-primary-deep/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">

            <div className="text-primary-mist text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest mb-1">
              Operational Flow
            </div>

            <div className="text-white font-serif text-sm sm:text-base md:text-lg">
              Cluster Mastery in 3 Minutes
            </div>

          </div>

        </div>
      </motion.div>

    </div>
  </section>
);
const CorePillars = () => {
  const pillars = [
    {
      icon: <Lightbulb />,
      title: "Integrated Intelligence",
      desc: "Data-driven spatial design and AI-monitored ecosystem health."
    },
    {
      icon: <Zap />,
      title: "Lifestyle Precision",
      desc: "Architectural lifestyle centers that prioritize human performance."
    },
    {
      icon: <Globe />,
      title: "Shared Equity",
      desc: "A cluster model that democratizes franchise wealth and ownership."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <span className="text-accent-gold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 block">
            The Foundation
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-primary-deep italic leading-tight">
            Our Strategic{" "}
            <span className="text-primary-mist not-italic">Pillars</span>
          </h2>
        </div>

        {/* CAROUSEL ON MOBILE / GRID ON TABLET & DESKTOP */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible no-scrollbar snap-x snap-mandatory flex-nowrap sm:flex-wrap sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 pb-10 sm:pb-0 px-4 sm:px-0">

          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 md:p-12 lg:p-16 bg-white rounded-3xl md:rounded-[40px] lg:rounded-[48px] border border-primary-deep/5 shadow-md md:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all group min-w-[85vw] sm:min-w-0 flex-shrink-0 sm:flex-shrink-1 snap-center mr-6 last:mr-0 sm:mr-0"
            >

              {/* ICON */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-deep/5 flex items-center justify-center text-primary-mist mb-6 sm:mb-8 md:mb-10 group-hover:bg-primary-mist group-hover:text-primary-deep transition-all">
                <div className="text-xl sm:text-2xl">
                  {p.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl font-serif text-primary-deep mb-4 sm:mb-6 uppercase tracking-tight leading-snug">
                {p.title}
              </h3>

              {/* DESC */}
              <p className="text-sm sm:text-base text-primary-deep/50 leading-relaxed">
                {p.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};


const JourneyTimeline = () => {
  const milestones = [
    { year: "The Genesis", title: "Conceptual Architecture", desc: "Formulating the OASIS credit system and Hub-and-Spoke model." },
    { year: "MIST Launch", title: "Flagship Experience", desc: "First Lounge+ architectural center opens to define the lifestyle." },
    { year: "Cluster Scaling", title: "The Network Effect", desc: "Rolling out Tier-1 cluster hubs to secure regional territories." },
    { year: "Global Future", title: "The Digital Frontier", desc: "Integrating OASIS equity pools with international expansion." },
  ];

  return (
    <section className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-24">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The Roadmap</span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary-deep italic">A Journey of <span className="text-primary-mist not-italic">Precision</span></h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary-deep/10 hidden md:block" />

          <div className="space-y-24 relative z-10">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 text-center md:text-left px-12">
                  <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary-mist font-bold tracking-[0.3em] uppercase text-[12px] mb-4 block">{m.year}</span>
                    <h3 className="text-3xl font-serif text-primary-deep mb-6 uppercase">{m.title}</h3>
                    <p className="text-primary-deep/40 text-sm font-light leading-relaxed max-w-sm mx-auto md:mx-0 inline-block">{m.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full bg-accent-gold border-4 border-[#FAF9F6] items-center justify-center relative z-20">
                  <div className="w-2 h-2 rounded-full bg-primary-deep" />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <>
      <AboutHero />
      <ImpactStats />
      <FounderVision />
      <TechnicalEdge />
      <WhyChoose />
      <CorePillars />
      <SustainabilityEthics />
      <VideoShowcase />
      <JourneyTimeline />
    </>
  );
}
