"use client";

import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import {
  Building2, LineChart, ShieldCheck, Zap,
  MapPin, Users, Target, ArrowRight, Wallet,
  PieChart, Globe, Award, CheckCircle2, Clock, ChevronDown
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const FinancialSnapshot = () => {
  const royalties = [
    { model: "Kiosk", royalty: "5%", marketing: "2%", total: "7%" },
    { model: "Express", royalty: "6%", marketing: "2%", total: "8%" },
    { model: "City Cafe", royalty: "7%", marketing: "2%", total: "9%" },
    { model: "Recharge", royalty: "7%", marketing: "2%", total: "9%" },
    { model: "Lounge+", royalty: "8%", marketing: "2%", total: "10%" },
    { model: "Premium", royalty: "8%", marketing: "2%", total: "10%" },
    { model: "Luxury", royalty: "9%", marketing: "3%", total: "12%" },
  ];

  const profits = [
    { model: "Kiosk", revenue: "₹1.5 - 3 L", profit: "₹40K - 80K", roi: "12-18 Mo" },
    { model: "Express", revenue: "₹2.5 - 4.5 L", profit: "₹70K - 1.2 L", roi: "12-16 Mo" },
    { model: "City Cafe", revenue: "₹4.5 - 9 L", profit: "₹1.2 - 2.5 L", roi: "14-20 Mo" },
    { model: "Recharge", revenue: "₹3.5 - 6 L", profit: "₹1 L - 1.8 L", roi: "18-24 Mo" },
    { model: "Lounge+", revenue: "₹12 - 25 L", profit: "₹4 L - 9 L", roi: "18-24 Mo" },
    { model: "Premium", revenue: "₹7 - 18 L", profit: "₹2 - 5 L", roi: "18-30 Mo" },
    { model: "Luxury", revenue: "₹15 - 40 L", profit: "₹4 - 12 L", roi: "24-36 Mo" },
  ];

  return (
    <section className="py-16 bg-primary-deep text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-serif italic mb-12 text-primary-mist underline decoration-white/10 underline-offset-8">Royalty & Fee Structure</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 text-[10px] font-black uppercase tracking-widest opacity-40">Model</th>
                    <th className="py-4 text-[10px] font-black uppercase tracking-widest opacity-40">Royalty</th>
                    <th className="py-4 text-[10px] font-black uppercase tracking-widest opacity-40">Marketing</th>
                    <th className="py-4 text-[10px] font-black uppercase tracking-widest opacity-40">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {royalties.map((r, i) => (
                    <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                      <td className="py-4 font-serif text-lg">{r.model}</td>
                      <td className="py-4 font-light opacity-60">{r.royalty}</td>
                      <td className="py-4 font-light opacity-60">{r.marketing}</td>
                      <td className="py-4 font-bold text-primary-mist">{r.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-serif italic mb-12 text-primary-mist underline decoration-white/10 underline-offset-8">ROI & Profit Snapshot</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-6 text-[10px] font-black uppercase tracking-widest opacity-40">Monthly Revenue</th>
                    <th className="py-6 text-[10px] font-black uppercase tracking-widest opacity-40">Net Profit</th>
                    <th className="py-6 text-[10px] font-black uppercase tracking-widest opacity-40">ROI Period</th>
                  </tr>
                </thead>
                <tbody>
                  {profits.map((p, i) => (
                    <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                      <td className="py-6 font-serif text-lg">{p.revenue}</td>
                      <td className="py-6 font-light text-primary-mist">{p.profit}</td>
                      <td className="py-6 font-light opacity-60">{p.roi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InvestmentTiers = () => {
  const tiers = [
    {
      name: "Kiosk",
      image: "/assets/oasis_kiosk_main.png",
      price: "5-10 Lakhs",
      area: "50 - 120 SQFT",
      setup: "21 Days",
      roi: "12-18 Months",
      features: ["Precision Service Node", "Optimized Staffing", "24/7 Managed Excellence", "Ultra-High Traffic Fit"],
      glow: "hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
    },
    {
      name: "Express",
      image: "/assets/oasis_express_main.png",
      price: "8-15 Lakhs",
      area: "150 - 300 SQFT",
      setup: "45 Days",
      roi: "12-16 Months",
      features: ["Quick-service Focused", "Minimum Staff Load", "Urban Corridor Fit", "Standard Support"],
      glow: "hover:shadow-[0_0_40px_rgba(148,163,184,0.1)]"
    },
    {
      name: "City Cafe",
      image: "/assets/oasis_citycafe_main.png",
      price: "15-30 Lakhs",
      area: "300 - 800 SQFT",
      setup: "60 Days",
      roi: "14-20 Months",
      features: ["Balanced Dine-in", "Quick Delivery Hub", "Urban Primary Zone", "Menu Flexibility"],
      glow: "hover:shadow-[0_0_50px_rgba(123,227,214,0.15)]",
      featured: true
    },
    {
      name: "Recharge",
      image: "/assets/model_recharge.png",
      price: "25-30 Lakhs",
      area: "600 - 800 SQFT",
      setup: "60 Days",
      roi: "18-24 Months",
      features: ["Wellness Spoke", "Acoustic Silence", "Molecular Water", "60-Day Genesis"],
      glow: "hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
    },
    {
      name: "Lounge+",
      image: "/assets/lounge_plus_new.png",
      price: "35-45 Lakhs",
      area: "1200 - 1500 SQFT",
      setup: "75 Days",
      roi: "18-24 Months",
      features: ["Master Regional Hub", "Technical Pods", "Cluster Controller", "Elite Net Margin"],
      glow: "hover:shadow-[0_0_40px_rgba(123,227,214,0.1)]"
    },
    {
      name: "Premium",
      image: "/assets/oasis_premium_main.png",
      price: "40-80 Lakhs",
      area: "800 - 1500 SQFT",
      setup: "90 Days",
      roi: "18-30 Months",
      features: ["Biophilic Green Cafe", "Restorative Tech", "High Dwell-time", "Premium Roastery"],
      glow: "hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
    },
    {
      name: "Luxury",
      image: "/assets/oasis_luxury_main.png",
      price: "1-3 Crore",
      area: "1500 - 3000 SQFT",
      setup: "120 Days",
      roi: "24-36 Months",
      features: ["Elite Lounge Hub", "VIP Strategy Suites", "Master Franchise Rights", "Elite Advisory"],
      glow: "hover:shadow-[0_0_40px_rgba(123,227,214,0.1)]"
    }
  ];

  return (
    <section id="plans" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Financial Models</span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary-deep italic underline decoration-primary-mist/20 underline-offset-8">Investment <span className="text-primary-mist not-italic">Tiers</span></h2>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-16 no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`min-w-[320px] lg:min-w-0 snap-start rounded-[56px] border border-primary-deep/5 transition-all duration-700 bg-[#FAF9F6] relative group overflow-hidden ${tier.featured ? 'shadow-3xl ring-2 ring-accent-gold/20' : 'shadow-xl'} ${tier.glow}`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <NextImage
                  src={tier.image}
                  alt={tier.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent" />
              </div>

              <div className="p-12 pt-0">
                {tier.featured && (
                  <div className="absolute top-44 right-8 bg-accent-gold text-primary-deep text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-10">
                    Most Popular
                  </div>
                )}

              <div className="mb-12">
                <h3 className="text-2xl font-serif text-primary-deep mb-3">{tier.name}</h3>
                <div className="text-4xl font-serif text-primary-mist font-bold mb-3">₹{tier.price}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] font-black text-primary-deep/30">Total Project Est.</div>
              </div>

              <div className="space-y-4 mb-12 py-8 border-y border-primary-deep/5">
                {[
                  { icon: <Building2 size={14} />, label: "Area", value: tier.area },
                  { icon: <Clock size={14} />, label: "Setup", value: tier.setup },
                  { icon: <Zap size={14} />, label: "ROI", value: tier.roi },
                ].map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary-deep/40 text-[9px] font-bold uppercase tracking-widest">
                      {spec.icon} {spec.label}
                    </div>
                    <div className="text-primary-deep font-serif text-base">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-10">
                {tier.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[13px] text-primary-deep/60 font-light">
                    <CheckCircle2 size={12} className="text-primary-mist" /> {f}
                  </div>
                ))}
              </div>

              <Link href={`/reserve/${tier.name.toLowerCase().replace(/ \+/g, "-plus").replace(/ /g, "-")}`} className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 shadow-xl flex items-center justify-center ${tier.featured ? 'bg-accent-gold text-primary-deep hover:bg-white border border-accent-gold' : 'border border-primary-deep/10 text-primary-deep hover:bg-primary-deep hover:text-white'}`}>
                Reserve Model
              </Link>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const PartnerSuccess = () => {
  const reviews = [
    {
      name: "Vikram Mehta",
      location: "Mumbai Cluster",
      text: "The Cluster model changed my perspective on scalability. Managing 3 spokes from one hub is incredibly efficient.",
      image: "/assets/brand_story_1.png"
    },
    {
      name: "Sanya Iyer",
      location: "Bangalore Tech Park",
      text: "The Express Node's ROI was even faster than projected. The tech integration makes operations seamless.",
      image: "/assets/brand_story_2.png"
    }
  ];

  return (
    <section className="py-16 bg-white text-primary-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-24">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Investor Reviews</span>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-tight">Partner <span className="text-primary-mist not-italic">Success.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-[#FAF9F6] rounded-[48px] border border-primary-deep/5 flex flex-col md:flex-row gap-10 items-center hover:shadow-2xl transition-all duration-700"
            >
              <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <NextImage src={rev.image} alt={rev.name} width={128} height={128} className="object-cover" />
              </div>
              <div>
                <p className="text-xl font-serif italic mb-6 leading-relaxed">"{rev.text}"</p>
                <h4 className="font-black uppercase tracking-widest text-[11px] text-primary-mist">{rev.name}</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-40">{rev.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What is the initial reservation fee?", a: "A ₹50,000 milestone payment is required to secure your specific territory and model preference during the evaluation phase." },
    { q: "Is the menu 100% vegetarian globally?", a: "Yes, all Oasis T-Cafe outlets maintain a strict 100% vegetarian standard to ensure wide demographic appeal and ethical sourcing." },
    { q: "What support do I get for hiring?", a: "We provide end-to-end support including staff recruitment, technical training, and ongoing operational management via our OASIS portal." },
    { q: "How long does the setup take?", a: "Depending on the model, it ranges from 21 days (Kiosk) to 120 days (Luxury Elite Lounge)." }
  ];

  return (
    <section className="py-16 bg-[#080B0B] text-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative">
        <div className="absolute top-0 right-0 p-20 opacity-5">
          <PieChart size={300} />
        </div>
        <div className="text-center mb-24 relative z-10">
          <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Support Center</span>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-tight">Frequently Asked <span className="text-primary-mist not-italic">Questions.</span></h2>
        </div>

        <div className="space-y-6 relative z-10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 backdrop-blur-3xl rounded-[32px] border border-white/5 hover:border-primary-mist/30 transition-all group"
            >
              <h4 className="text-xl font-serif mb-4 flex items-center justify-between group-hover:text-primary-mist transition-colors">
                {faq.q} <ChevronDown size={18} className="opacity-30 group-hover:opacity-100" />
              </h4>
              <p className="text-white/40 font-light leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FranchisePage = () => {
  const steps = [
    { title: "Strategic Inquiry", desc: "Digital submission of your territory and model preference." },
    { title: "Technical Evaluation", desc: "Expert assessment of your cluster viability and spatial tech." },
    { title: "Territory Lockdown", desc: "Securing your zone with the ₹50,000 reservation milestone." },
    { title: "Architectural Fit-out", desc: "Precision engineering of your T-CAFE MIST center." },
    { title: "Launch & Integration", desc: "Onboarding into the OASIS global loyalty ecosystem." }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary-deep overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/cafe_models.png"
            alt="Franchise Opportunity"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 uppercase tracking-tight">
              Franchise Hub
            </h1>
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              <Link href="/" className="text-white/40 hover:text-primary-mist transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <span className="text-primary-mist">Franchise</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Grid */}
      <section className="py-20 bg-white text-primary-deep rounded-t-[80px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Strategic Model</span>
              <h2 className="text-3xl md:text-5xl font-serif italic mb-8">The Hub-and-Spoke <br />Ecosystem.</h2>
              <p className="text-primary-deep/60 text-lg font-light leading-relaxed mb-12">
                Our Cluster Model enables master franchisees to dominate regional territories by balancing high-end Lounge+ hubs with high-efficiency Recharge spokes.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Target className="text-primary-mist" size={24} />, title: "Precision Territory Lock", desc: "Full regional exclusivity with OASIS data monitoring." },
                  { icon: <PieChart className="text-primary-mist" size={24} />, title: "Shared Equity Pool", desc: "Earnings beyond your own outlet through the cluster network." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-primary-deep/5 rounded-3xl border border-primary-deep/5">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                      <p className="text-sm opacity-50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative h-[600px] bg-primary-deep rounded-[64px] overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-primary-mist/5" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Globe size={300} strokeWidth={1} />
              </div>
              <div className="absolute bottom-10 left-10 p-10 bg-white/95 backdrop-blur-xl rounded-3xl text-primary-deep shadow-2xl max-w-xs">
                <div className="text-4xl font-serif mb-2">High-Yield</div>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Predictive Model v4.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InvestmentTiers />
      <FinancialSnapshot />
      <PartnerSuccess />

      {/* Roadmap */}
      <section className="py-20 bg-[#FAF9F6] text-primary-deep">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The Onboarding</span>
            <h2 className="text-3xl md:text-5xl font-serif italic">Path to <span className="text-primary-mist not-italic">Ownership</span></h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="mb-10 text-primary-deep/10 font-serif text-8xl group-hover:text-primary-mist/20 transition-colors">0{i + 1}</div>
                <h4 className="text-lg font-serif mb-4 uppercase tracking-tight">{step.title}</h4>
                <p className="text-sm font-light opacity-50 leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[60px] right-[-20%] w-[40%] h-px bg-primary-deep/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
};

export default FranchisePage;
