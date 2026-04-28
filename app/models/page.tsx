"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import { 
  Zap, Coffee, Building2, Layers, ArrowRight, 
  TrendingUp, Wallet, ShieldCheck, MapPin,
  Clock, CheckCircle2, ChevronRight
} from "lucide-react";


const ModelsOverviewPage = () => {
  const models = [
    {
      title: "Kiosk",
      image: "/assets/oasis_kiosk_main.png",
      href: "/models/kiosk",
      desc: "Ultra-compact autonomous node engineered for high-traffic corridors and transit hubs.",
      investment: "₹5 L - 10 L",
      特点: ["Precision Service", "Managed Staffing", "24/7 Operations"],
      variant: "Compact"
    },
    {
      title: "Express",
      image: "/assets/oasis_express_main.png",
      href: "/models/express",
      desc: "High-velocity modular unit designed for urban corporate zones and quick-service efficiency.",
      investment: "₹8 L - 15 L",
      area: "150 - 300 SQFT",
      特点: ["Modular Tech", "Urban Pulse", "Pulse Cloud Sync"],
      variant: "Velocity"
    },
    {
      title: "City Cafe",
      image: "/assets/oasis_citycafe_main.png",
      href: "/models/city-cafe",
      desc: "A vibrant urban third-space balancing premium dine-in atmosphere with delivery optimization.",
      investment: "₹15 L - 30 L",
      area: "300 - 800 SQFT",
      特点: ["Full Menu", "Social Density", "High Throughput"],
      variant: "Popular"
    },
    {
      title: "Premium",
      image: "/assets/oasis_premium_main.png",
      href: "/models/premium",
      desc: "Lush biophilic experience center integrating restorative technology with premium roastery.",
      investment: "₹40 L - 80 L",
      area: "800 - 1500 SQFT",
      特点: ["Green Tech", "Biophilic Lounge", "Restorative AI"],
      variant: "Biophilic"
    },
    {
      title: "Luxury",
      image: "/assets/oasis_luxury_main.png",
      href: "/models/luxury",
      desc: "The pinnacle of cafe luxury. Elite lounge hubs with VIP strategy suites and master rights.",
      investment: "₹1 Cr - 3 Cr",
      area: "1500 - 3000 SQFT",
      特点: ["Master Franchise", "VIP Strategy Suites", "Elite Advisory"],
      variant: "Elite"
    },
    {
      title: "Recharge Hub",
      image: "/assets/model_recharge.png",
      href: "/models/recharge",
      desc: "Instant satisfaction node for quick grab-and-go energy.",
      investment: "₹3 L - 7 L",
      area: "50 - 150 SQFT",
      特点: ["Micro Footprint", "Zen Restorative", "Molecular Water"],
      variant: "Micro"
    },
    {
      title: "Lounge+",
      image: "/assets/lounge_plus_new.png",
      href: "/models/lounge-plus",
      desc: "Co-working integrated lifestyle café for the modern professional.",
      investment: "₹60 L - 1.2 Cr",
      area: "1200 - 2000 SQFT",
      特点: ["Work-Life Fusion", "Tech Pods", "Community Hub"],
      variant: "Lifestyle"
    }
  ];

  return (
    <>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <NextImage
            src="/assets/cafe_models.png"
            alt="Business Models Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-8 block">The OASIS Architecture</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 uppercase tracking-tight">
              Business <br />
              <span className="text-primary-mist italic">Models.</span>
            </h1>
            
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-12">
              <Link href="/" className="text-white/40 hover:text-primary-mist transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <span className="text-primary-mist">Models</span>
            </div>

            <p className="max-w-2xl text-white/40 text-base md:text-xl font-light leading-relaxed">
              From managed precision nodes to elite luxury lounges, our multi-format ecosystem is designed for market domination and technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            {models.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden shadow-3xl mb-10 border border-primary-deep/5 transition-transform duration-700 group-hover:scale-[1.02]">
                  <NextImage
                    src={model.image}
                    alt={model.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur-md text-primary-deep px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                      {model.variant}
                    </span>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-serif text-primary-deep mb-4 group-hover:text-primary-mist transition-colors">{model.title}</h2>
                      <p className="text-primary-deep/50 text-base md:text-lg font-light leading-relaxed max-w-lg mb-8">
                        {model.desc}
                      </p>
                    </div>
                    <Link href={model.href} className="w-16 h-16 rounded-full bg-primary-deep text-white flex items-center justify-center hover:bg-primary-mist hover:text-primary-deep transition-all duration-500 shadow-xl group/btn">
                      <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pb-10 border-b border-primary-deep/5">
                    <div className="p-8 bg-white rounded-3xl border border-primary-deep/5 shadow-xl hover:shadow-2xl transition-all">
                       <span className="text-[10px] uppercase font-bold text-primary-deep/30 block mb-2 tracking-widest">Initial Investment</span>
                       <span className="text-3xl font-serif text-primary-deep">{model.investment}</span>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-primary-deep/5 shadow-xl hover:shadow-2xl transition-all">
                       <span className="text-[10px] uppercase font-bold text-primary-deep/30 block mb-2 tracking-widest">Optimal Area</span>
                       <span className="text-3xl font-serif text-primary-deep">{model.area}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 py-8">
                    {model.特点.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-deep/40">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary-mist" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-deep text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">Ready to Secure Your <br /><span className="text-primary-mist not-italic underline underline-offset-8 decoration-white/10">Regional Node?</span></h2>
            <p className="text-white/40 text-xl font-light leading-relaxed mb-16">
              Our regional expansion team is ready to evaluate your territory and assist in choosing the optimal business model for your cluster.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/franchise">
                <button className="bg-primary-mist text-primary-deep px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-3xl">
                  Initiate Onboarding
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white/20 text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-primary-deep transition-all">
                  Contact Advisory
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ModelsOverviewPage;
