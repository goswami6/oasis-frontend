"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Gift, 
  Share2, 
  Copy, 
  MessageCircle, 
  Mail, 
  ChevronRight, 
  Award,
  Zap,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  HandCoins
} from "lucide-react";
import Link from "next/link";
import { api } from "@/utility/api";

const ReferPage = () => {
  const [user, setUser] = useState<any>(null);
  const [copied, setCopied] = useState({ code: false, link: false });
  const [referralCode, setReferralCode] = useState("");

  const [walletInfo, setWalletInfo] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchReferralData(parsedUser.id || parsedUser._id);
      
      // Use user ID as referral code if no custom code exists
      const code = parsedUser.referralCode || (parsedUser.id || parsedUser._id).slice(-6).toUpperCase();
      setReferralCode(code);
    }
  }, []);

  const fetchReferralData = async (userId: string) => {
    try {
      const res = await api.user.getWalletBalance(userId);
      if (res.success) {
        setWalletInfo(res);
      }
    } catch (e) {
      console.error("Referral fetch error:", e);
    }
  };

  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };

  const referralLink = `https://tcafemist.com/ref/${referralCode}`;

  if (!user) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-deep mb-2">
            Refer <span className="text-primary-mist italic">& Earn</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-medium">Invite your friends to the OASIS ecosystem and earn rewards.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Referral Card */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Reward Card */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#FAF7F2] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-orange-100 flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-deep mb-4">Earn Amazing Rewards</h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Refer your friends and family to join T-CAFE MIST. For every successful booking or membership activation, you both earn exciting NXT tokens and cashback!
                </p>
              </div>
              <div className="shrink-0 relative">
                 <div className="w-40 h-40 bg-orange-200/20 rounded-full blur-2xl absolute inset-0" />
                 <Gift size={120} className="text-orange-400 relative z-10 animate-bounce-slow" />
              </div>
            </motion.div>

            {/* Referral Info Box */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 space-y-8">
               {/* Referral Code */}
               <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-3">Your Referral Code</p>
                  <div className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                     <span className="text-2xl font-mono font-black text-primary-deep tracking-wider">{referralCode}</span>
                     <button 
                      onClick={() => copyToClipboard(referralCode, 'code')}
                      className="p-3 bg-slate-50 hover:bg-primary-mist hover:text-primary-deep rounded-xl transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                     >
                       {copied.code ? <ShieldCheck size={16} className="text-emerald-500" /> : <Copy size={16} />}
                       {copied.code ? "Copied" : "Copy"}
                     </button>
                  </div>
               </div>

               {/* Share Link */}
               <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-3">Share your link</p>
                  <div className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-5 shadow-sm overflow-hidden">
                     <span className="text-xs text-slate-400 truncate mr-4">{referralLink}</span>
                     <button 
                      onClick={() => copyToClipboard(referralLink, 'link')}
                      className="p-3 bg-slate-50 hover:bg-primary-mist hover:text-primary-deep rounded-xl transition-all"
                     >
                       {copied.link ? <ShieldCheck size={16} className="text-emerald-500" /> : <Copy size={16} />}
                     </button>
                  </div>
               </div>

               {/* How it Works */}
               <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-8">How it Works</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                     {[
                       { icon: Share2, title: "1. Share", desc: "Invite your friends to join" },
                       { icon: ArrowRight, title: "2. They Book", desc: "They book any token" },
                       { icon: HandCoins, title: "3. You Earn", desc: "Earn exciting rewards" }
                     ].map((step, i) => (
                       <div key={i} className="text-center group">
                          <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center text-primary-mist mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                             <step.icon size={24} />
                          </div>
                          <h4 className="text-sm font-bold text-primary-deep mb-1">{step.title}</h4>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{step.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Earnings & Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Earnings Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary-deep rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl"
            >
              <h3 className="text-xl font-serif font-bold mb-8">Your Earnings</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                 <div>
                    <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2">Total Referrals</p>
                    <p className="text-3xl font-serif font-bold">{walletInfo?.referralCount || 0}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2">Total Earned</p>
                    <p className="text-3xl font-serif font-bold text-primary-mist">
                      {(walletInfo?.referralCount || 0) * 500} <span className="text-[10px] uppercase">NXT</span>
                    </p>
                 </div>
              </div>

              <button className="w-full py-5 bg-primary-mist text-primary-deep rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-primary-mist/10">
                Withdraw Earnings
              </button>
            </motion.div>

            {/* Quick Share Links */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
               <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-6">Quick Share</p>
               <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 py-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl hover:bg-[#25D366] hover:text-white transition-all">
                     <MessageCircle size={20} />
                     <span className="text-[10px] font-black uppercase">WhatsApp</span>
                  </button>
                  <button className="flex items-center justify-center gap-3 py-4 bg-primary-mist/10 text-primary-mist rounded-2xl hover:bg-primary-mist hover:text-primary-deep transition-all">
                     <Mail size={20} />
                     <span className="text-[10px] font-black uppercase">Email</span>
                  </button>
               </div>
            </div>

            {/* Recent Activity Mini */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
               <div className="flex justify-between items-center mb-6">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Recent Invites</p>
                  <Link href="/refer/history" className="text-[8px] font-black text-primary-mist uppercase hover:underline">View All</Link>
               </div>
               <div className="space-y-4">
                  {[
                    { name: "Rahul S.", date: "2h ago", amt: "+500 NXT" },
                    { name: "Priya M.", date: "1d ago", amt: "+500 NXT" }
                  ].map((invite, i) => (
                    <div key={i} className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                       <div>
                          <p className="text-[10px] font-bold text-primary-deep">{invite.name}</p>
                          <p className="text-[8px] text-slate-400">{invite.date}</p>
                       </div>
                       <span className="text-[9px] font-black text-emerald-500">{invite.amt}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReferPage;
