"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ModelsOverviewPage = () => {
  const models = [
    {
      title: "Kiosk",
      image: "/assets/oasis_kiosk_main.png",
      href: "/models/kiosk",
      desc: "Ultra-compact autonomous node engineered for high-traffic corridors and transit hubs.",
      investment: "₹5 L - 10 L",
      features: ["Precision Service", "Managed Staffing", "24/7 Operations"],
      variant: "Compact"
    },
    {
      title: "Express",
      image: "/assets/oasis_express_main.png",
      href: "/models/express",
      desc: "High-velocity modular unit designed for urban corporate zones and quick-service efficiency.",
      investment: "₹8 L - 15 L",
      area: "150 - 300 SQFT",
      features: ["Modular Tech", "Urban Pulse", "Pulse Cloud Sync"],
      variant: "Velocity"
    },
    {
      title: "City Cafe",
      image: "/assets/oasis_citycafe_main.png",
      href: "/models/city-cafe",
      desc: "A vibrant urban third-space balancing premium dine-in atmosphere with delivery optimization.",
      investment: "₹15 L - 30 L",
      area: "300 - 800 SQFT",
      features: ["Full Menu", "Social Density", "High Throughput"],
      variant: "Popular"
    },
    {
      title: "Premium",
      image: "/assets/oasis_premium_main.png",
      href: "/models/premium",
      desc: "Lush biophilic experience center integrating restorative technology with premium roastery.",
      investment: "₹40 L - 80 L",
      area: "800 - 1500 SQFT",
      features: ["Green Tech", "Biophilic Lounge", "Restorative AI"],
      variant: "Biophilic"
    },
    {
      title: "Luxury",
      image: "/assets/oasis_luxury_main.png",
      href: "/models/luxury",
      desc: "The pinnacle of cafe luxury. Elite lounge hubs with VIP strategy suites and master rights.",
      investment: "₹1 Cr - 3 Cr",
      area: "1500 - 3000 SQFT",
      features: ["Master Franchise", "VIP Strategy Suites", "Elite Advisory"],
      variant: "Elite"
    },
    {
      title: "Recharge Hub",
      image: "/assets/model_recharge.png",
      href: "/models/recharge",
      desc: "Instant satisfaction node for quick grab-and-go energy.",
      investment: "₹3 L - 7 L",
      area: "50 - 150 SQFT",
      features: ["Micro Footprint", "Zen Restorative", "Molecular Water"],
      variant: "Micro"
    },
    {
      title: "Lounge+",
      image: "/assets/lounge_plus_new.png",
      href: "/models/lounge-plus",
      desc: "Co-working integrated lifestyle café for the modern professional.",
      investment: "₹60 L - 1.2 Cr",
      area: "1200 - 2000 SQFT",
      features: ["Work-Life Fusion", "Tech Pods", "Community Hub"],
      variant: "Lifestyle"
    }
  ];

  return (
    <>

      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-primary-deep overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/cafe_models.png"
            alt="Business Models Hero"
            fill
            priority
            className="object-cover opacity-50 md:opacity-60"
          />
          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/70 md:via-primary-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl sm:max-w-2xl md:max-w-4xl"
          >
            {/* TITLE */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 uppercase tracking-tight leading-tight">
              Business <br />
              <span className="text-primary-mist italic lowercase">Models.</span>
            </h1>

            {/* BREADCRUMB */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8">
              <Link href="/" className="text-white/50 hover:text-primary-mist transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-primary-mist">Models</span>
            </div>


          </motion.div>
        </div>
      </section>

      {/* MODELS GRID */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-20">

            {models.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl sm:rounded-3xl md:rounded-[48px] p-4 sm:p-6 md:p-8 lg:p-10 border border-primary-deep/5 shadow-sm hover:shadow-xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-52 sm:h-64 md:h-80 lg:h-[420px] rounded-xl sm:rounded-2xl md:rounded-[40px] overflow-hidden mb-6 md:mb-8 border border-primary-deep/5">

                  <NextImage
                    src={model.image}
                    alt={model.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />

                  {/* BADGE */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
                    <span className="bg-white/90 backdrop-blur-md text-primary-deep px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow">
                      {model.variant}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-1 sm:px-2 md:px-3">

                  {/* TITLE + BUTTON */}
                  <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary-deep group-hover:text-primary-mist transition-colors leading-tight">
                      {model.title}
                    </h2>

                    <Link
                      href={model.href}
                      className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary-deep text-white hover:bg-primary-mist hover:text-primary-deep transition-all"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-primary-deep/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {model.desc}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">

                    <div className="p-3 sm:p-4 md:p-6 bg-[#FAF9F6] rounded-xl md:rounded-2xl border border-primary-deep/5">
                      <span className="text-[9px] uppercase tracking-wide text-primary-deep/40 block mb-1">
                        Investment
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl font-serif text-primary-deep">
                        {model.investment}
                      </span>
                    </div>

                    <div className="p-3 sm:p-4 md:p-6 bg-[#FAF9F6] rounded-xl md:rounded-2xl border border-primary-deep/5">
                      <span className="text-[9px] uppercase tracking-wide text-primary-deep/40 block mb-1">
                        Area
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl font-serif text-primary-deep">
                        {model.area || "N/A"}
                      </span>
                    </div>

                  </div>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">

                    {model.features.map((f: string, idx: number) => (
                      <div
                        key={idx}
                        className="text-[10px] sm:text-xs uppercase tracking-wide text-primary-deep/50 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-mist rounded-full" />
                        {f}
                      </div>
                    ))}

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 md:py-28 bg-primary-deep text-white relative overflow-hidden">

        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[600px] sm:w-[800px] md:w-[1000px] 
      h-[600px] sm:h-[800px] md:h-[1000px] 
      border border-white rounded-full animate-pulse" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 text-center relative z-10">

          {/* HEADING */}
          <h2 className="
      text-2xl sm:text-4xl md:text-6xl lg:text-7xl 
      font-serif italic 
      mb-6 sm:mb-8 md:mb-10 
      leading-tight md:leading-[0.95]
    ">
            Secure Your <br />
            <span className="
        text-primary-mist 
        not-italic 
        underline 
        decoration-white/10 
        underline-offset-4 sm:underline-offset-6 md:underline-offset-[12px]
      ">
              Regional Node.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="
      text-white/60 
      text-sm sm:text-base md:text-lg lg:text-xl 
      font-light 
      leading-relaxed 
      mb-10 sm:mb-12 md:mb-16 
      max-w-xl sm:max-w-2xl md:max-w-3xl 
      mx-auto
    ">
            Our regional expansion team is ready to evaluate your territory and assist in choosing the optimal business model for your cluster.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">

            {/* PRIMARY BUTTON */}
            <Link href="/franchise">
              <button className="
          w-full sm:w-auto
          bg-primary-mist text-primary-deep 
          px-6 sm:px-10 md:px-16 
          py-3 sm:py-4 md:py-6 
          rounded-full 
          font-black uppercase 
          tracking-[0.2em] md:tracking-[0.3em] 
          text-[10px] sm:text-xs 
          hover:bg-white hover:scale-105 
          transition-all 
          shadow-lg md:shadow-2xl
        ">
                Initiate Onboarding
              </button>
            </Link>

            {/* SECONDARY BUTTON */}
            <Link href="/contact">
              <button className="
          w-full sm:w-auto
          border border-white/20 text-white 
          px-6 sm:px-10 md:px-16 
          py-3 sm:py-4 md:py-6 
          rounded-full 
          font-black uppercase 
          tracking-[0.2em] md:tracking-[0.3em] 
          text-[10px] sm:text-xs 
          hover:bg-white hover:text-primary-deep 
          transition-all
        ">
                Contact Advisory
              </button>
            </Link>

          </div>

        </div>
      </section>

    </>
  );
};

export default ModelsOverviewPage;