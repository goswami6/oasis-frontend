"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import { 
  Star, Medal, Gem, Zap, Check, 
  Coins, Wallet, Gift, Users, ShieldCheck,
  ArrowUpRight, Clock, TrendingUp, CheckCircle2, ArrowRight,
  CreditCard, Shield
} from "lucide-react";
import { api } from "@/utility/api";


const MembershipPage = () => {
  const [memberships, setMemberships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPayment, setShowPayment] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));

    api.membership.getAll()
      .then(data => {
        if (data && data.length > 0) setMemberships(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch memberships:", err);
        setLoading(false);
      });
  }, []);

  const handleJoin = (tier: any) => {
    if (!user) {
      window.location.href = `/login?redirect=/membership&tier=${tier.tier}`;
      return;
    }
    setShowPayment(tier);
  };

  const processPayment = async () => {
    if (!showPayment) return;
    
    setPaymentLoading(true);
    // Simulate payment processing delay
    setTimeout(async () => {
      try {
        const userId = user.id || user._id;
        if (!userId) {
          console.error("No userId found for current user:", user);
          alert("Session error: User ID not found. Please log in again.");
          setPaymentLoading(false);
          return;
        }

        const res = await api.member.apply({
          userId,
          userName: user.name,
          userEmail: user.email,
          tier: showPayment.tier,
          amount: showPayment.amount,
          paymentId: `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          status: 'Active' // Automatically active after mock payment
        });

        if (res) {
          setSuccess(true);
          setShowPayment(null);
          setTimeout(() => setSuccess(false), 5000);
        }
      } catch (err) {
        console.error("Payment sync failed:", err);
      } finally {
        setPaymentLoading(false);
      }
    }, 2000);
  };

  // Fallback
  const displayTiers = memberships.length > 0 ? memberships : [
    {
      tier: "Silver",
      tag: "Essential Status",
      amount: 5000,
      perks: ["5% Discount on Café Purchases", "Standard Co-working Access", "Community Event Invites", "OASIS Node Tracking"],
      color: "border-slate-400/20"
    },
    {
      tier: "Gold",
      tag: "Priority Status",
      amount: 15000,
      perks: ["15% Global Discount", "Priority Booking (Meeting Rooms)", "24/7 Technical Support", "Partner Network Access"],
      color: "border-accent-gold/40",
      featured: true
    },
    {
      tier: "Platinum",
      tag: "Elite status",
      amount: 50000,
      perks: ["Complimentary Craft Beverages", "Equity Pool Integration", "Master Franchise Priority", "Global Lounge Access"],
      color: "border-primary-mist/40"
    }
  ];

  const getIcon = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'silver': return <Star className="text-slate-400" size={32} />;
      case 'gold': return <Medal className="text-accent-gold" size={32} />;
      case 'platinum': return <Gem className="text-primary-mist" size={32} />;
      default: return <Star className="text-slate-400" size={32} />;
    }
  };

  return (
    <>
      
      {/* Success Notification */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-emerald-400/20"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">Application Received</p>
              <p className="text-[10px] opacity-80 font-light">Your membership request is being processed by the OASIS hub.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mock Payment Modal */}
      <AnimatePresence>
        {showPayment && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-primary-deep/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[40px] max-w-md w-full overflow-hidden shadow-3xl"
            >
              <div className="bg-slate-50 p-8 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-deep rounded-xl flex items-center justify-center text-white font-serif text-xl font-bold">T</div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Secure Checkout</p>
                    <p className="text-sm font-serif italic text-primary-deep">OASIS <span className="text-primary-mist">Payments</span></p>
                  </div>
                </div>
                <button onClick={() => setShowPayment(null)} className="text-slate-300 hover:text-red-500 transition-colors text-[10px] uppercase font-black tracking-widest">Cancel</button>
              </div>

              <div className="p-10 space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">{showPayment.tier} Identity</p>
                    <h3 className="text-2xl font-serif italic text-primary-deep">Subscription Fee</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-serif font-bold text-primary-deep">₹{showPayment.amount}</p>
                    <p className="text-[8px] text-emerald-500 font-bold uppercase tracking-widest">One-Time Activation</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                  <div className="flex items-center gap-4 text-slate-500">
                    <CreditCard size={18} />
                    <span className="text-xs font-medium">Standard Gateway Protocol</span>
                  </div>
                  <div className="flex items-center gap-4 text-emerald-600">
                    <Shield size={18} />
                    <span className="text-[10px] uppercase font-black tracking-widest">End-to-End Encryption Active</span>
                  </div>
                </div>

                <button 
                  onClick={processPayment}
                  disabled={paymentLoading}
                  className="w-full bg-primary-deep text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary-mist hover:text-primary-deep transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
                >
                  {paymentLoading ? "Authorizing Transaction..." : `Pay ₹${showPayment.amount} Now`}
                </button>

                <p className="text-center text-[9px] text-slate-300 uppercase font-black tracking-widest">Powered by OASIS Global Finance</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elite Hero */}
      <section className="relative pt-40 pb-20 bg-primary-deep overflow-hidden flex items-center min-h-[70vh]">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/assets/oasis_premium_main.png"
            alt="Oasis Membership Lifestyle"
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
            <span className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-8 block">The OASIS Ecosystem</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 uppercase tracking-tight">
              Elite Status. <br />
              <span className="text-primary-mist italic">Shared Equity.</span>
            </h1>
            
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-12">
              <Link href="/" className="text-white/40 hover:text-primary-mist transition-colors">Home</Link>
              <span className="text-white/20">/</span>
              <span className="text-primary-mist">Membership</span>
            </div>

            <p className="max-w-2xl text-white/40 text-base md:text-xl font-light leading-relaxed">
              Our closed-loop credit system transforms members into ecosystem stakeholders. Earn OASIS Points, unlock status, and share in the equity of a global revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Points Mechanics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-2 lg:order-1"
            >
               <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-6 block">The Points Economy</span>
               <h2 className="text-3xl md:text-6xl font-serif text-primary-deep italic mb-8 md:mb-10">OASIS <span className="text-primary-mist not-italic">Credits</span></h2>
                <div className="space-y-8 md:space-y-10">
                  {[
                    { icon: <Coins className="text-primary-mist" size={24} />, title: "Internal Utility", desc: "Use points for high-precision café coffee, technical workspace hours, and co-working bookings." },
                    { icon: <Gift className="text-primary-mist" size={24} />, title: "Stakeholder Rewards", desc: "Redeem points for franchise milestone offsets and proprietary equipment upgrades." },
                    { icon: <TrendingUp className="text-primary-mist" size={24} />, title: "Status Multiplier", desc: "High-tier members earn points 2x faster through the integrated hub network." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 md:gap-8 group">
                       <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-primary-deep/5 flex items-center justify-center text-primary-deep group-hover:bg-primary-deep group-hover:text-white transition-all">
                          {item.icon}
                       </div>
                       <div>
                         <h4 className="text-lg md:text-xl font-serif text-primary-deep mb-2">{item.title}</h4>
                         <p className="text-primary-deep/40 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            <div className="relative h-[350px] md:h-[600px] bg-primary-deep rounded-[32px] md:rounded-[48px] overflow-hidden flex items-center justify-center border border-white/10 shadow-3xl order-1 lg:order-2">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary-mist/10 to-transparent" />
               <div className="relative text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-mist/20 rounded-full flex items-center justify-center text-primary-mist mx-auto mb-6 md:mb-10 shadow-[0_0_80px_rgba(123,227,214,0.3)] border border-primary-mist/30">
                     <Coins size={40} className="md:w-[60px] md:h-[60px]" />
                  </div>
                  <div className="text-5xl md:text-7xl font-serif text-white mb-2">10,000+</div>
                  <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.4em] text-white/30">OASIS Points Active</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 md:py-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-serif text-primary-deep italic underline decoration-primary-mist/20 underline-offset-8">Tier <span className="text-primary-mist not-italic">Matrix</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {displayTiers.map((t: any, i: number) => (
              <motion.div
                key={t.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 md:p-16 bg-white rounded-[40px] md:rounded-[64px] border ${t.color || 'border-slate-200'} relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${t.featured ? 'shadow-3xl ring-2 ring-accent-gold/20' : 'shadow-xl'}`}
              >
                <div className="mb-10 md:mb-14">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] md:rounded-[28px] bg-primary-deep/5 flex items-center justify-center mb-8 md:mb-10">
                    {getIcon(t.tier)}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif text-primary-deep mb-2 md:mb-3">{t.tier} Status</h3>
                  <p className="text-primary-deep/40 text-[10px] md:text-sm font-light uppercase tracking-widest mb-4">{t.tag}</p>
                  <div className="text-3xl font-serif text-primary-mist">₹{t.amount?.toLocaleString()}</div>
                </div>

                <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
                  {t.perks.map((p: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 md:gap-4 text-primary-deep/60 text-xs md:text-[13px] font-light">
                      <Check size={12} className="text-primary-mist shrink-0" /> {p}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleJoin(t)}
                  disabled={applying === t.tier}
                  className={`w-full py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[9px] md:text-[10px] transition-all shadow-xl flex items-center justify-center gap-3 group ${t.featured ? 'bg-accent-gold text-primary-deep hover:bg-white border border-accent-gold' : 'bg-primary-deep text-white hover:bg-primary-mist hover:text-primary-deep'}`}
                >
                  {applying === t.tier ? "Syncing..." : `Join ${t.tier} status`}
                  {applying !== t.tier && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default MembershipPage;
