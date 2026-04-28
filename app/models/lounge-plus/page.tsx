"use client";

import React, { useState } from "react";
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
  Building2, Monitor, Users, LayoutGrid
} from "lucide-react";


const MediaHub = () => {
  const images = [
    { src: "/assets/lounge_plus_main.png", span: "md:col-span-2 md:row-span-2", type: "video" },
    { src: "/assets/lounge_plus_branded_2.png", span: "md:col-span-1 md:row-span-1", type: "image", title: "Regional Node" },
    { src: "/assets/lounge_plus_branded_1.png", span: "md:col-span-1 md:row-span-1", type: "image", title: "Technical Lab" },
    { src: "/assets/lounge_plus_branded_3.png", span: "md:col-span-2 md:row-span-1", type: "image", title: "Cluster Hub" },
  ];

  return (
    <section className="py-20 bg-primary-deep overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-24 text-center md:text-left">
          <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The Media Mesh</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">Master <br /><span className="text-primary-mist not-italic">Regional Hub Mastery.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
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
                    alt="Lounge Plus Video Showcase"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary-mist/5 group-hover:bg-transparent transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-mist transition-all duration-500 shadow-2xl">
                      <Play className="text-white fill-current ml-2 group-hover:text-primary-deep" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10 p-8 bg-primary-deep/60 backdrop-blur-2xl rounded-3xl border border-white/10 max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="text-primary-mist text-[10px] font-black uppercase tracking-widest mb-1 italic">Play Experience</div>
                    <h4 className="text-white font-serif text-xl uppercase tracking-tighter leading-tight">Master Node Operational Control</h4>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0">
                  <NextImage 
                    src={item.src}
                    alt={`Lounge Plus Detail ${i}`}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-8 left-8 transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-mist">{item.title}</span>
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
  <section className="py-20 bg-white text-primary-deep relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-[11px] mb-6 block">Hub Sovereignty</span>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-10 leading-tight">Architectural <br /><span className="text-primary-mist not-italic underline decoration-primary-mist/20 underline-offset-8">Precision Lab.</span></h2>
          <p className="text-primary-deep/60 text-lg font-light leading-relaxed mb-12">
            The Lounge Plus is the foundational regional hub of the OASIS ecosystem. It integrates luxury café culture with a high-precision digital lab, serving as the master controller for all specialized spokes in its territory.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: LayoutGrid, title: "Precision-Pods", desc: "12 custom-engineered work capsules with integrated technical nodes." },
              { icon: Coffee, title: "Roastery Lab", desc: "On-site micro-roasting where mixology becomes high-performance art." },
              { icon: Users, title: "Global Network", desc: "Central data node for all regional Express and Recharge spokes." },
              { icon: ShieldCheck, title: "VIP Isolation", desc: "Sound-isolated capsules for high-stakes digital strategy." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-deep/5 flex items-center justify-center text-primary-mist transition-colors hover:bg-primary-mist hover:text-white">
                  <item.icon size={24} />
                </div>
                <h4 className="font-serif text-lg uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm opacity-40 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[650px] rounded-[64px] border border-primary-deep/5 overflow-hidden group shadow-3xl bg-[#FAF9F6]">
          <NextImage
            src="/assets/lounge_plus_main.png"
            alt="Oasis Lounge Plus View"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
          />
          <div className="absolute inset-0 bg-primary-deep/5" />
          <div className="absolute bottom-10 right-10 p-10 bg-white/95 backdrop-blur-xl rounded-[40px] text-primary-deep shadow-2xl border border-primary-deep/5">
            <div className="text-4xl font-serif mb-1 uppercase tracking-tighter text-primary-deep">75 Days</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-deep/40">From Genesis to Sovereignty</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EconomicsPlacement = () => {
  const economics = [
    { label: "Daily Avg Cups", value: "500-1000+", suffix: "Master Flow" },
    { label: "Net Margin", value: "38%", suffix: "Hub Optimization" },
    { label: "Break-Even", value: "20-24", suffix: "Months" },
    { label: "Investment", value: "₹35-45L", suffix: "Regional Asset" }
  ];

  const placements = [
    { area: "Regional Cluster Centers", icon: <Building2 />, desc: "The primary technical and social hub for regional territory networks." },
    { area: "High-Dwell Lobbies", icon: <MapPin />, desc: "Securing the loyalty of elite corporate and professional members." },
    { area: "Technical Plazas", icon: <Coffee />, desc: "Combining performance workstations with world-class coffee." }
  ];

  return (
    <section className="py-20 bg-[#FAF9F6] text-primary-deep border-y border-primary-deep/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-32">
          {/* Economics */}
          <div>
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Unit Economics</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12">Lounge Plus <br /><span className="text-primary-mist not-italic">Yields.</span></h2>
            <div className="grid grid-cols-2 gap-10">
              {economics.map((e, i) => (
                <div key={i} className="p-10 bg-white rounded-[40px] border border-primary-deep/5 shadow-xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary-deep/30 mb-2">{e.label}</div>
                  <div className="text-4xl font-serif text-primary-deep mb-1">{e.value}</div>
                  <div className="text-[9px] uppercase tracking-widest text-primary-mist font-bold">{e.suffix}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Strategic Context</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12 tracking-tight leading-tight">Master <br /><span className="text-primary-deep/30 italic">Regional Hub.</span></h2>
            <div className="space-y-10">
              {placements.map((p, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-deep text-white flex items-center justify-center shrink-0 group-hover:bg-primary-mist group-hover:text-primary-deep transition-all duration-500">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif uppercase tracking-tight text-primary-deep mb-2">{p.area}</h4>
                    <p className="text-sm font-light text-primary-deep/50 leading-relaxed">{p.desc}</p>
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

const CustomerReviews = () => (
  <section className="py-20 bg-white text-primary-deep overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="text-center mb-24">
        <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Investor Proof</span>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Partner <span className="text-primary-mist not-italic">Voices.</span></h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {[
          { 
            name: "Kabir Singh", 
            role: "Master Franchise Owner", 
            quote: "Selecting a Lounge Plus as our regional anchor was the strategic correct decision. It functions as the central management node for our entire 5-kiosk cluster.",
            metrics: "38% Hub Profitability" 
          },
          { 
            name: "Ria Malhotra", 
            role: "Commercial Park Developer", 
            quote: "The Lounge Plus model provided the technical gravity we needed to attract high-tier corporate tenants. It&apos;s more than a cafe—it&apos;s a performance asset.",
            metrics: "22-Month ROI Peak" 
          }
        ].map((rev, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-16 bg-[#FAF9F6] rounded-[64px] border border-primary-deep/5 relative"
          >
            <Quote className="absolute top-10 right-10 text-primary-mist/10" size={80} />
            <div className="flex gap-1 mb-10">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-accent-gold text-accent-gold" />)}
            </div>
            <p className="text-2xl font-serif italic mb-12 text-primary-deep/80 leading-relaxed">"{rev.quote}"</p>
            <div className="flex items-center justify-between border-t border-primary-deep/5 pt-10">
              <div>
                <h5 className="font-black uppercase tracking-widest text-xs text-primary-deep mb-1">{rev.name}</h5>
                <p className="text-[10px] uppercase tracking-widest text-primary-deep/40">{rev.role}</p>
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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is a Master Regional Hub?", a: "Lounge Plus nodes act as the central management and supply chain node for a cluster of smaller Spokes (Kiosks/Express) in their territory." },
    { q: "How are the technical pods maintained?", a: "OASIS provides full technical support for pod software and hardware. All maintenance is remotely monitored from the national HQ." },
    { q: "Is staffing included in the investment?", a: "The investment covers training for your precision experts. Ongoing staff payroll is managed by your regional operational entity." },
    { q: "Can we run regional marketing from the hub?", a: "The Lounge Plus includes integrated regional signage and digital broadcast technical stacks for a unified local brand narrative." }
  ];

  return (
    <section className="py-20 bg-primary-deep text-white">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="text-center mb-24">
          <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">FAQ Hub</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic">Technical <span className="text-primary-mist not-italic">Queries.</span></h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-3xl overflow-hidden hover:border-primary-mist/30 transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-10 flex items-center justify-between text-left group"
              >
                <h4 className="text-xl font-serif uppercase tracking-tight">{faq.q}</h4>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === i ? 'bg-primary-mist text-primary-deep' : 'group-hover:bg-white/5'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10 text-white/40 font-light leading-relaxed">
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

const LoungePlusPage = () => {
  const specs = [
    { label: "Optimal Area", value: "1200 - 1500 SQFT" },
    { label: "Master Tech", value: "Master Node Sync" },
    { label: "Asset Type", value: "Regional Master Hub" },
    { label: "Investment", value: "₹35 - 45 Lakhs" },
    { label: "Setup Time", value: "75 Days Genesis" },
    { label: "Node Load", value: "Cluster Controller" }
  ];

  return (
    <>

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NextImage 
            src="/assets/lounge_plus_main.png"
            alt="Oasis Lounge Plus Hero"
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
              Lounge<span className="text-primary-mist italic">+</span>
            </h1>
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              <Link href="/" className="text-white/40 hover:text-primary-mist transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <Link href="/models" className="text-white/40 hover:text-primary-mist transition-colors">Models</Link>
              <span className="text-white/20">/</span>
              <span className="text-primary-mist capitalize">Lounge Plus</span>
            </div>
          </motion.div>
        </div>
      </section>

      <ModelFeatures />
      <EconomicsPlacement />

      {/* Tech Specifications (Grid Style) */}
      <section className="py-20 bg-white text-primary-deep border-b border-primary-deep/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The Tech Sheet</span>
            <h2 className="text-4xl md:text-5xl font-serif italic">Project <span className="text-primary-mist not-italic">Parameters.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-deep/30 group-hover:text-primary-mist transition-colors">{s.label}</span>
                <span className="text-4xl font-serif text-primary-deep border-b border-primary-deep/10 pb-4">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaHub />
      <CustomerReviews />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="p-20 bg-primary-deep rounded-[80px] text-white flex flex-col md:flex-row items-center justify-between gap-16 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Monitor size={200} />
            </div>
            <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h4 className="text-4xl md:text-5xl font-serif mb-8 leading-tight italic">The Regional Sovereign Hub <br />for Territory Leaders.</h4>
              <p className="text-white/40 font-light text-xl leading-relaxed mb-12">
                Integrating performance pods with regional supply chain control. Secure your master territory anchor with Lounge Plus.
              </p>
              <Link href="/reserve/lounge-plus" className="inline-block bg-primary-mist text-primary-deep px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:scale-105 transition-all shadow-xl">
                Initiate Hub Strategy Onboarding
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default LoungePlusPage;
