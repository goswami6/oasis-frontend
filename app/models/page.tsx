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

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-primary-mist">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 text-primary-deep">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary-deep/60 tracking-[0.3em] uppercase text-[10px] mb-4 block font-bold">
              The OASIS Architecture
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-primary-deep mb-6 leading-tight">
              Business <br />
              <span className="text-black italic">Models.</span>
            </h1>

            <p className="text-primary-deep/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              From compact nodes to luxury lounges — engineered for scalability and profitability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MODELS GRID */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {models.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >

                {/* IMAGE */}
                <div className="relative h-56 sm:h-64 md:h-80 rounded-2xl md:rounded-[40px] overflow-hidden mb-6 border border-primary-deep/5 shadow-lg">
                  <NextImage
                    src={model.image}
                    alt={model.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="px-1 sm:px-2">

                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-primary-deep">
                      {model.title}
                    </h2>

                    <Link
                      href={model.href}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary-deep text-white hover:bg-primary-mist hover:text-primary-deep transition"
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <p className="text-primary-deep/60 text-sm md:text-base mb-6 leading-relaxed">
                    {model.desc}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="p-4 sm:p-6 bg-[#FAF9F6] rounded-xl border">
                      <span className="text-[9px] uppercase text-primary-deep/40 block mb-1">
                        Investment
                      </span>
                      <span className="text-lg sm:text-xl font-serif">
                        {model.investment}
                      </span>
                    </div>

                    <div className="p-4 sm:p-6 bg-[#FAF9F6] rounded-xl border">
                      <span className="text-[9px] uppercase text-primary-deep/40 block mb-1">
                        Area
                      </span>
                      <span className="text-lg sm:text-xl font-serif">
                        {model.area}
                      </span>
                    </div>

                  </div>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-3">
                    {model.features.map((f: string, idx: number) => (
                      <div
                        key={idx}
                        className="text-[10px] uppercase text-primary-deep/50 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-primary-mist rounded-full" />
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

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-6">
            Ready to Start?
          </h2>

          <p className="text-primary-deep/60 text-sm sm:text-base md:text-lg mb-8">
            Choose your model and start your journey with OASIS ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/franchise">
              <button className="px-8 py-3 bg-primary-mist text-primary-deep rounded-full text-xs uppercase font-bold">
                Get Started
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-3 border border-primary-deep/20 rounded-full text-xs uppercase">
                Contact
              </button>
            </Link>

          </div>

        </div>
      </section>

    </>
  );
};

export default ModelsOverviewPage;