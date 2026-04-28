"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import { 
  Mail, Phone, MapPin, MessageCircle, 
  Send, Globe, ArrowRight, ShieldCheck,
  Building2, Users, Calendar, CheckCircle2
} from "lucide-react";
import { api } from "../../utility/api";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestLevel: "Master Franchise (Cluster Hub)",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.contact.create(formData);
      setStatus("success");
      setFormData({ name: "", email: "", interestLevel: "Master Franchise (Cluster Hub)", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Elite Hero */}
      <section className="relative pt-40 pb-20 bg-primary-deep overflow-hidden flex items-center min-h-[70vh]">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/brand_story_1.png"
            alt="Oasis Global Contact"
            fill
            className="object-cover opacity-60"
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
            <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">Inquiry Gateway</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 uppercase tracking-tight">
              Initiate the <br />
              <span className="text-primary-mist italic">Discovery.</span>
            </h1>

            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-12">
              <Link href="/" className="text-white/40 hover:text-primary-mist transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <span className="text-primary-mist">Contact</span>
            </div>

            <p className="max-w-2xl text-white/50 text-base md:text-xl font-light leading-relaxed">
              Our global advisory team is ready to evaluate your territorial ambitions and ecosystem fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[48px] border border-primary-deep/5 shadow-[0_20px_60px_rgba(15,47,42,0.08)] relative overflow-hidden group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-mist/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <h3 className="text-4xl font-serif text-primary-deep italic mb-12 relative z-10">Submit Your Proposal</h3>
              
              {status === "success" ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-20 h-20 bg-primary-mist/20 rounded-full flex items-center justify-center text-primary-deep mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-serif text-primary-deep mb-4">Proposal Received</h4>
                  <p className="text-primary-deep/60 font-light">Our global advisory team will review your inquiry and contact you shortly.</p>
                </div>
              ) : (
                <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary-deep/40 pl-6">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-primary-deep/10 focus:border-primary-mist focus:ring-4 focus:ring-primary-mist/10 outline-none text-primary-deep font-light text-sm transition-all shadow-sm" 
                        placeholder="Johnathan Doe" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary-deep/40 pl-6">Professional Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-8 py-5 rounded-2xl bg-white border border-primary-deep/10 focus:border-primary-mist focus:ring-4 focus:ring-primary-mist/10 outline-none text-primary-deep font-light text-sm transition-all shadow-sm" 
                        placeholder="john@enterprise.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary-deep/40 pl-6">Interest Level</label>
                    <select 
                      value={formData.interestLevel}
                      onChange={e => setFormData({...formData, interestLevel: e.target.value})}
                      className="w-full px-8 py-5 rounded-2xl bg-white border border-primary-deep/10 focus:border-primary-mist focus:ring-4 focus:ring-primary-mist/10 outline-none text-primary-deep font-light text-sm appearance-none transition-all shadow-sm cursor-pointer"
                    >
                      <option>Master Franchise (Cluster Hub)</option>
                      <option>Lounge+ Experience Center</option>
                      <option>Express/Recharge Spokes</option>
                      <option>OASIS Membership Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary-deep/40 pl-6">Message / Vision</label>
                    <textarea 
                      required
                      rows={6} 
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-8 py-5 rounded-3xl bg-white border border-primary-deep/10 focus:border-primary-mist focus:ring-4 focus:ring-primary-mist/10 outline-none text-primary-deep font-light text-sm resize-none transition-all shadow-sm" 
                      placeholder="Describe your territory or partnership ambition..." 
                    />
                  </div>

                  {status === "error" && <p className="text-red-500 text-xs font-bold text-center">Failed to submit proposal. Please try again.</p>}

                  <button 
                    disabled={status === "loading"}
                    className="w-full bg-primary-deep text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-primary-mist hover:text-primary-deep transition-all shadow-xl flex items-center justify-center gap-4 group/btn mt-4 disabled:opacity-50"
                  >
                    {status === "loading" ? "Submitting..." : "Send Discovery Proposal"} 
                    {status !== "loading" && <Send size={16} className="group-hover/btn:translate-x-2 transition-transform" />}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-20">
                <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-[11px] mb-6 block">Global Directory</span>
                <h2 className="text-4xl md:text-6xl font-serif text-primary-deep italic mb-10">Direct <br />Precision <span className="text-primary-mist not-italic">Lines</span></h2>
                <p className="text-primary-deep/60 text-lg font-light leading-relaxed">
                  We maintain a decentralized support network to ensure 24/7 responsiveness for our global cluster partners.
                </p>
              </div>

              <div className="space-y-12">
                {[
                  { icon: <Globe />, title: "Headquarters", desc: "Sustainable Silicon Valley Corridor, CA 94025" },
                  { icon: <Mail />, title: "Advisory Line", desc: "advisors@tcafemist.global" },
                  { icon: <Phone />, title: "Priority Support", desc: "+1 (555) 800-MIST (24/7)" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group cursor-pointer">
                    <div className="w-16 h-16 shrink-0 rounded-[24px] bg-white border border-primary-deep/5 shadow-md flex items-center justify-center text-primary-deep group-hover:bg-primary-mist group-hover:border-primary-mist group-hover:text-primary-deep transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-primary-deep mb-2">{item.title}</h4>
                      <p className="text-primary-deep/50 text-lg font-light group-hover:text-primary-deep transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-12 bg-white rounded-[40px] border border-primary-deep/5 shadow-[0_15px_40px_rgba(15,47,42,0.06)] relative overflow-hidden group hover:shadow-[0_25px_50px_rgba(15,47,42,0.1)] transition-all duration-500">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-accent-gold group-hover:scale-110 transition-transform duration-700">
                    <Calendar size={120} />
                 </div>
                 <h4 className="text-2xl font-serif text-primary-deep mb-4 italic relative z-10">Strategy Call</h4>
                 <p className="text-primary-deep/60 text-sm font-light leading-relaxed mb-10 relative z-10">
                   Prefer a direct strategy consultation? Book a 30-minute private window with our expansion team.
                 </p>
                 <button className="text-[10px] font-black uppercase tracking-widest text-primary-deep flex items-center gap-4 hover:gap-6 transition-all group/link relative z-10">
                   Access Scheduler <ArrowRight size={16} className="text-primary-mist" />
                 </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
