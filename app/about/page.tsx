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
  <section className="relative pt-40 pb-20 bg-primary-deep overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/assets/brand_story.png"
        alt="About Oasis"
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
          About Us
        </h1>
        <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
          <Link href="/" className="text-white/40 hover:text-primary-mist transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <span className="text-primary-mist">About Us</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const ImpactStats = () => (
  <section className="py-20 bg-primary-deep border-y border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
        {[
          { label: "Projected Hubs", value: "500+", suffix: "Nodes" },
          { label: "Intelligence", value: "24/7", suffix: "Monitoring" },
          { label: "Community", value: "1M+", suffix: "Members" },
          { label: "Precision", value: "100%", suffix: "Accuracy" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="text-4xl md:text-6xl font-serif text-white mb-2">{stat.value}</div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-primary-mist opacity-80">{stat.label}</div>
            <div className="text-[9px] uppercase tracking-widest text-white/30 mt-1">{stat.suffix}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FounderVision = () => (
  <section className="py-20 bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[700px] rounded-[48px] overflow-hidden group shadow-2xl border border-primary-deep/5 bg-[#FAF9F6]">
            {/* Themed Placeholder Rendering */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center p-20">
              <Fingerprint size={300} className="text-primary-deep" />
            </div>
            {/* Editorial Overlay */}
            <div className="absolute bottom-10 left-10 p-10 bg-white/95 backdrop-blur-xl rounded-3xl border border-primary-deep/5 max-w-sm shadow-2xl">
              <h4 className="text-primary-deep font-serif italic text-xl mb-4">"We are not just brewing coffee; we are engineering human connections."</h4>
              <div className="w-10 h-0.5 bg-accent-gold mb-4" />
              <p className="text-[10px] uppercase tracking-widest font-black text-primary-deep/40 italic">OASIS Ecosystem Architect</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The Narrative Architecture</span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary-deep italic mb-10 leading-tight">Re-imagining <br />The <span className="text-primary-mist not-italic">Intersection.</span></h2>
          <div className="space-y-8 text-primary-deep/60 text-lg font-light leading-relaxed">
            <p>
              T-CAFE MIST was born from a singular question: Why do our spaces not serve our evolution? In an era of hyper-connectivity, we realized that the physical "third space" had become stagnant.
            </p>
            <p>
              By integrating **OASIS Intelligence** with architectural lifestyle centers, we created a model where aesthetics meet equity. Every pixel of our visualization, every gram of our roast, and every node of our cluster is engineered for precision.
            </p>
            <p className="text-primary-deep font-normal pt-4 border-t border-primary-deep/5">
              Today, we are scaling this vision globally, inviting partners to share in a movement that prioritizes both human wellness and technical scalability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TechnicalEdge = () => (
  <section className="py-20 bg-primary-deep text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-mist/5 blur-[160px] rounded-full -mr-96 -mt-96" />
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Technological Edge</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-10 italic">OASIS <span className="text-primary-mist not-italic">Intelligence.</span></h2>
          <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
            The heart of our ecosystem is a proprietary operating system that synchronizes every node within a regional cluster. From automated brewing precision to real-time supply chain logistics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Cpu />, title: "Pulse OS", desc: "Real-time node monitoring and predictive maintenance." },
              { icon: <Database />, title: "Supply Sync", desc: "Zero-friction inventory management across the cluster." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <div className="text-primary-mist mb-6">{item.icon}</div>
                <h4 className="text-xl font-serif mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm font-light text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[500px] rounded-[64px] border border-white/10 overflow-hidden group shadow-3xl bg-white/5 flex items-center justify-center">
             <div className="absolute inset-0 bg-primary-mist/5 animate-pulse" />
             <BarChart3 className="text-white/10" size={200} />
             <div className="absolute bottom-10 left-10 p-8 bg-primary-deep/90 backdrop-blur-xl rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary-mist animate-ping" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-primary-mist">Live Node Synchronization</span>
                </div>
                <div className="text-3xl font-serif">99.9% Uptime</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SustainabilityEthics = () => (
  <section className="py-20 bg-white text-primary-deep">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="text-center mb-24">
        <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Ethical Commitment</span>
        <h2 className="text-4xl md:text-6xl font-serif italic">Ethics In Every <span className="text-primary-mist not-italic">Infusion.</span></h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {[
          { icon: Leaf, title: "100% Vegetarian", desc: "A pure, compassionate menu engineered for the future of ethical dining." },
          { icon: Globe, title: "Mist Sourcing", desc: "Direct-trade beans sourced from estates that share our vision for equity." },
          { icon: CheckCircle2, title: "Zero Plastic", desc: "Our architectural centers and kiosks are committed to 100% biodegradable cycles." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-primary-mist/10 flex items-center justify-center text-primary-mist mb-8 group-hover:scale-110 transition-transform">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-6">{item.title}</h3>
            <p className="text-primary-deep/50 text-sm font-light leading-relaxed max-w-xs">{item.desc}</p>
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
    <section className="py-20 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Why Partner With Us?</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary-deep italic mb-12">The OASIS <br /><span className="text-primary-mist not-italic">Advantage.</span></h2>
            
            <div className="space-y-8">
              {points.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-mist/20 flex items-center justify-center text-primary-mist shrink-0 mt-1 transition-colors group-hover:bg-primary-mist group-hover:text-primary-deep">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary-deep uppercase tracking-tight">{p.title}</h4>
                    {p.subtitle && <p className="text-sm font-light text-primary-deep/40 mt-1">{p.subtitle}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="relative h-[600px] rounded-[48px] overflow-hidden shadow-3xl border border-primary-deep/5">
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
  <section className="py-20 bg-primary-deep relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-mist/10 via-transparent to-transparent opacity-50" />
    </div>

    <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
      <div className="text-center mb-20">
        <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">Technical Symphony</span>
        <h2 className="text-4xl md:text-6xl font-serif text-white italic">How It <span className="text-primary-mist not-italic">Works.</span></h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="relative aspect-video rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer shadow-3xl">
          {/* Main Video Overlay */}
          <div className="absolute inset-0 bg-primary-deep/40 group-hover:bg-primary-deep/20 transition-all duration-700" />
          <Image 
            src="/assets/lounge_plus_main.png"
            alt="Operational Showcase"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-mist transition-all duration-500 shadow-2xl">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2 group-hover:border-l-primary-deep" />
            </div>
          </div>

          {/* Lower Label */}
          <div className="absolute bottom-10 left-10 p-6 bg-primary-deep/60 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <div className="text-primary-mist text-[10px] uppercase font-black tracking-widest mb-1">Operational Flow</div>
             <div className="text-white font-serif text-lg">Cluster Mastery in 3 Minutes</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
const CorePillars = () => {
  const pillars = [
    {
      icon: <Lightbulb size={32} />,
      title: "Integrated Intelligence",
      desc: "Data-driven spatial design and AI-monitored ecosystem health."
    },
    {
      icon: <Zap size={32} />,
      title: "Lifestyle Precision",
      desc: "Architectural lifestyle centers that prioritize human performance."
    },
    {
      icon: <Globe size={32} />,
      title: "Shared Equity",
      desc: "A cluster model that democratizes franchise wealth and ownership."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20 md:mb-24">
          <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block">The Foundation</span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary-deep italic">Our Strategic <span className="text-primary-mist not-italic">Pillars</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-16 bg-white rounded-[40px] md:rounded-[48px] border border-primary-deep/5 shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-deep/5 flex items-center justify-center text-primary-mist mb-10 group-hover:bg-primary-mist group-hover:text-primary-deep transition-all">
                {p.icon}
              </div>
              <h3 className="text-2xl font-serif text-primary-deep mb-6 uppercase tracking-tight">{p.title}</h3>
              <p className="text-primary-deep/40 text-sm font-light leading-relaxed">{p.desc}</p>
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
