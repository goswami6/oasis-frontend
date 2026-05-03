"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  History,
  PlusCircle,
  Crown,
  ShieldCheck,
  CreditCard,
  ChevronRight,
  TrendingUp,
  Zap,
  ArrowRight,
  PieChart,
  ArrowUpCircle,
  Users,
  Activity,
  Layers
} from "lucide-react";
import { api } from "@/utility/api";
import Link from "next/link";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const WalletPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [walletInfo, setWalletInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        fetchWalletData(parsedUser.id || parsedUser._id);
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const fetchWalletData = async (userId: string) => {
    try {
      const res = await api.user.getWalletBalance(userId);
      if (res.success) {
        setWalletInfo(res);
      }
    } catch (error) {
      console.error("Wallet fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRecharge = async () => {
    const amountStr = prompt("Enter amount to recharge (INR):", "500");
    if (!amountStr) return;

    const amount = parseInt(amountStr);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const orderRes = await api.payment.createOrder(amount);
      if (!orderRes.success) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderRes.order.amount,
        currency: orderRes.order.currency,
        name: "OASIS T-CAFE",
        description: "Wallet Token Recharge",
        order_id: orderRes.order.id,
        handler: async (response: any) => {
          try {
            const verifyRes = await api.payment.verify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyRes.success) {
              const res = await api.user.recharge(user.id || user._id, amount);
              if (res.success) {
                router.push(`/payment-success?payment_id=${response.razorpay_payment_id}&amount=${amount}`);
              }
            }
          } catch (err) {
            console.error("Verification failed:", err);
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: "#7BE3D6",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Recharge failed:", err);
      alert("Failed to initiate recharge.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-mist border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-serif text-primary-deep mb-4 italic">Please <span className="text-primary-mist">login</span> to view your wallet</h1>
          <Link href="/login" className="inline-block px-10 py-4 bg-primary-deep text-white font-black rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-primary-deep/20">
            Login Session
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-24 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* DASHBOARD HEADER */}
        <div className="flex justify-between items-center mb-12">
           <div>
              <h1 className="text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">Finances</h1>
              <p className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-300 mt-2">NXT Ledger • Multi-Asset Hub</p>
           </div>
           <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-deep shadow-sm">
              <Activity size={20} />
           </div>
        </div>

        {/* MODERN MULTI-COLOR BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
           
           {/* 1. Main Balance Bento - SOFT EMERALD GRADIENT */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="md:col-span-8 bg-gradient-to-br from-[#E6FFFA] to-[#B2F5EA] rounded-[3rem] p-10 md:p-14 text-primary-deep relative overflow-hidden shadow-xl shadow-emerald-100/50 flex flex-col justify-center border border-white"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20" />
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full gap-8">
                 <div>
                    <div className="flex items-center gap-3 text-emerald-700/60 mb-6">
                       <Wallet size={18} />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em]">Available NXT Balance</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                       <h2 className="text-7xl md:text-8xl font-serif font-bold text-[#0F2F2A] tracking-tighter leading-none">
                         {walletInfo?.balance?.toLocaleString() || 0}
                       </h2>
                       <span className="text-2xl font-serif font-bold text-emerald-600 italic">Tokens</span>
                    </div>
                 </div>

                 <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-end">
                    <button 
                      onClick={handleRecharge}
                      className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#0F2F2A] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-all shadow-2xl shadow-[#0F2F2A]/20"
                    >
                       <PlusCircle size={18} />
                       Add Tokens
                    </button>
                    <div className="flex items-center gap-2 text-[9px] font-black text-emerald-800/40 uppercase tracking-widest">
                       <ShieldCheck size={12} /> SECURED LEDGER
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* 2. Membership Status Bento - DEEP ROYAL BLUE (PREMIUM) */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="md:col-span-4 bg-[#1A1C2E] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 flex flex-col justify-between"
           >
              <div className="absolute bottom-0 right-0 p-8 opacity-5">
                 <Crown size={150} />
              </div>
              
              <div>
                 <p className="text-[9px] uppercase font-black tracking-widest text-blue-400 mb-4 italic">Membership</p>
                 <h3 className="text-4xl font-serif font-bold mb-2 italic tracking-tight">{walletInfo?.membershipTier || 'Silver Status'}</h3>
                 <div className="h-[1px] w-12 bg-blue-500/50 mb-6" />
              </div>

              <Link href="/membership" className="mt-10 group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-[2rem] transition-all">
                 <span className="text-[10px] font-black uppercase tracking-widest">Upgrade Hub</span>
                 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </motion.div>

           {/* 3. Stats Bento - SOFT AMBER/GOLD */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="md:col-span-4 bg-[#FFF9E6] rounded-[3rem] p-10 text-[#855D00] border border-[#FFE082]/30 shadow-lg shadow-amber-50 flex flex-col justify-between group cursor-pointer hover:bg-[#FFF4D1] transition-all"
           >
              <div className="flex justify-between items-start mb-10">
                 <div className="w-14 h-14 bg-white/60 text-amber-600 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <TrendingUp size={28} />
                 </div>
                 <span className="text-[9px] font-black text-amber-700 bg-white/50 px-3 py-1.5 rounded-full uppercase tracking-tighter">EARNINGS</span>
              </div>
              <div>
                 <p className="text-[10px] font-black text-amber-800/40 uppercase tracking-[0.2em] mb-2">Rewards Balance</p>
                 <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-serif font-bold text-amber-900 tracking-tight">2,450</span>
                    <span className="text-xs font-serif font-bold opacity-60">NXT</span>
                 </div>
              </div>
           </motion.div>

           {/* 4. Activity Graph Bento - CLEAN SLATE/WHITE */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="md:col-span-4 bg-white rounded-[3rem] p-10 text-slate-800 border border-slate-100 shadow-xl shadow-slate-200/20 flex flex-col justify-between group"
           >
              <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:text-primary-deep transition-colors">
                 <PieChart size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Expense Analysis</p>
                 <div className="flex gap-2 h-10 items-end">
                    {[40, 70, 55, 100, 80, 60, 90].map((h, i) => (
                      <div key={i} className="flex-grow bg-slate-100 rounded-sm group-hover:bg-primary-mist transition-all duration-500" style={{ height: `${h}%` }} />
                    ))}
                 </div>
              </div>
           </motion.div>

           {/* 5. Refer & Earn Bento - SOFT PURPLE/LAVENDER */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="md:col-span-4 bg-[#F5F3FF] rounded-[3rem] p-10 text-[#4C1D95] border border-[#DDD6FE]/30 shadow-lg shadow-purple-50 flex flex-col justify-between group relative overflow-hidden"
           >
              <div className="w-14 h-14 bg-white/60 text-purple-600 rounded-[1.5rem] flex items-center justify-center mb-10">
                 <Users size={28} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-purple-800/40 uppercase tracking-[0.2em] mb-2">Network Growth</p>
                 <Link href="/refer" className="text-[10px] font-black text-purple-700 flex items-center gap-2 hover:text-purple-900 transition-colors uppercase tracking-widest">
                    Invite & Earn <ArrowRight size={14} />
                 </Link>
              </div>
           </motion.div>

        </div>

        {/* RECENT LEDGER SECTION */}
        <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-sm relative overflow-hidden">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 bg-slate-50 text-slate-800 rounded-[1.5rem] flex items-center justify-center shadow-sm">
                    <Layers size={28} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">Recent Ledger</h3>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 mt-1">Transaction History</p>
                 </div>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-6 py-3 rounded-full hover:text-slate-900 transition-all border border-slate-100">Export PDF</button>
           </div>

           <div className="space-y-4">
              {(walletInfo?.ledger && walletInfo.ledger.length > 0) ? walletInfo.ledger.map((tr: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-7 bg-slate-50/50 rounded-[2.5rem] border border-transparent hover:border-slate-100 hover:bg-white transition-all group">
                   <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center shadow-sm ${tr.type === 'Credit' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                         {tr.type === 'Credit' ? <ArrowDownLeft size={24} /> : <ArrowUpCircle size={24} />}
                      </div>
                      <div>
                         <p className="text-base font-bold text-slate-800 mb-1">{tr.desc}</p>
                         <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{new Date(tr.date).toLocaleDateString()} • {tr.id}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className={`text-xl font-serif font-bold tracking-tight ${tr.type === 'Credit' ? 'text-emerald-600' : 'text-slate-900'}`}>{tr.type === 'Credit' ? '+' : '-'}{tr.amount.toLocaleString()} <span className="text-[10px] font-sans opacity-20">NXT</span></p>
                      <div className="flex items-center justify-end gap-1.5 mt-1">
                         <div className={`w-1 h-1 rounded-full ${tr.type === 'Credit' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                         <span className="text-[9px] uppercase font-black tracking-[0.2em] text-slate-300">{tr.status}</span>
                      </div>
                   </div>
                </div>
              )) : (
                <div className="text-center py-20 text-slate-300 text-xs uppercase font-black tracking-widest">
                   No transactions found in your ledger
                </div>
              )}
           </div>
        </div>

        {/* FOOTER */}
        <p className="text-center mt-16 text-slate-300 text-[10px] uppercase font-black tracking-[0.6em]">
          OASIS SECURE PROTOCOL • MULTI-CURRENCY HUB
        </p>
      </div>
    </div>
  );
};

export default WalletPage;
