"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  ShieldCheck, 
  Briefcase, 
  Wallet, 
  Users, 
  FileText, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Settings,
  Camera,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/utility/api";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [walletInfo, setWalletInfo] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchWalletData(parsedUser.id || parsedUser._id);
    } else {
      router.push('/login');
    }
  }, [router]);

  const fetchWalletData = async (userId: string) => {
    try {
      const res = await api.user.getWalletBalance(userId);
      if (res.success) {
        setWalletInfo(res);
      }
    } catch (error) {
      console.error("Profile fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const menuItems = [
    { icon: User, label: "Personal Information", href: "/profile/info" },
    { icon: ShieldCheck, label: "KYC Verification", href: "/profile/kyc", badge: "Verified", badgeColor: "text-emerald-500 bg-emerald-50" },
    { icon: Briefcase, label: "My Bookings", href: "/orders" },
    { icon: Wallet, label: "My Wallet", href: "/wallet" },
    { icon: Users, label: "Refer & Earn", href: "/refer" },
    { icon: FileText, label: "Documents", href: "/profile/documents" },
    { icon: HelpCircle, label: "Help & Support", href: "/contact" },
  ];

  if (loading) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Profile Header & Membership Card Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
          {/* LEFT: Premium Digital Membership Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className={`relative h-[300px] w-full rounded-[2.5rem] p-8 text-white overflow-hidden shadow-2xl transition-all duration-700 group hover:scale-[1.02] ${
              walletInfo?.membershipTier === 'Platinum' ? 'bg-gradient-to-br from-[#1a1a1a] via-[#333] to-[#1a1a1a]' :
              walletInfo?.membershipTier === 'Gold' ? 'bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#B8860B]' :
              'bg-gradient-to-br from-primary-deep via-[#14413b] to-primary-deep'
            }`}>
              {/* Card Textures/Overlays */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
              
              {/* Chip & Logo */}
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-lg shadow-inner flex flex-col justify-between p-1.5 opacity-80">
                   <div className="h-[1px] w-full bg-black/10" />
                   <div className="h-[1px] w-full bg-black/10" />
                   <div className="h-[1px] w-full bg-black/10" />
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Membership</p>
                   <p className="text-xl font-serif font-bold italic tracking-tighter">OASIS <span className="text-primary-mist">ELITE</span></p>
                </div>
              </div>

              {/* Card Details */}
              <div className="relative z-10">
                <p className="text-[8px] uppercase font-black tracking-[0.4em] opacity-40 mb-1">Member Tier</p>
                <h2 className="text-4xl font-serif font-bold mb-8 italic tracking-tight">{walletInfo?.membershipTier || 'Silver Status'}</h2>
                
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-[8px] uppercase font-black tracking-[0.4em] opacity-40 mb-1">Holder Name</p>
                      <p className="text-lg font-bold tracking-wider">{user.name?.toUpperCase()}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[8px] uppercase font-black tracking-[0.4em] opacity-40 mb-1">ID Number</p>
                      <p className="text-xs font-mono opacity-80">TCM-{user.id?.slice(-8).toUpperCase() || '8829-1022'}</p>
                   </div>
                </div>
              </div>

              {/* Hologram Effect */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-mist/20 rounded-full blur-2xl group-hover:bg-primary-mist/40 transition-all" />
            </div>
          </motion.div>

          {/* RIGHT: User Stats & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="relative group">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-deep text-2xl font-bold shadow-sm">
                    {user.name?.[0]}
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-deep text-white rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Camera size={14} />
                  </button>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary-deep mb-1">{user.name}</h3>
                  <p className="text-slate-400 text-sm">{user.email}</p>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[8px] uppercase font-black tracking-widest text-slate-400 mb-1">NXT Tokens</p>
                  <p className="text-lg font-bold text-primary-deep">{walletInfo?.balance?.toLocaleString() || 0}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[8px] uppercase font-black tracking-widest text-slate-400 mb-1">Referrals</p>
                  <p className="text-lg font-bold text-primary-deep">{walletInfo?.referralCount || 0}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[8px] uppercase font-black tracking-widest text-slate-400 mb-1">Bookings</p>
                  <p className="text-lg font-bold text-primary-deep">{walletInfo?.ledger?.filter((t: any) => t.type === 'Debit').length || 0}</p>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex justify-between text-[10px] uppercase font-black tracking-widest mb-3">
                  <span className="text-slate-400">Profile Verification Progress</span>
                  <span className="text-primary-deep">75%</span>
                </div>
                <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-slate-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary-mist rounded-full shadow-[0_0_10px_rgba(123,227,214,0.5)]" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Menu Items Grid */}
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100">
            {menuItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className="flex items-center justify-between p-6 md:px-10 hover:bg-white transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-deep group-hover:text-primary-mist group-hover:scale-110 transition-all shadow-sm">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-deep">{item.label}</p>
                    {item.badge && (
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mt-1 inline-block ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-primary-mist group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
            
            {/* Logout Button */}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-6 md:px-10 hover:bg-red-50 transition-colors group"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-red-500 group-hover:scale-110 transition-all shadow-sm">
                  <LogOut size={22} />
                </div>
                <p className="text-sm font-bold text-red-500">Logout</p>
              </div>
              <ChevronRight size={18} className="text-red-200 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        {/* Footer Support */}
        <p className="text-center mt-12 text-slate-300 text-[10px] uppercase font-black tracking-[0.4em]">
          T-CAFE MIST • SECURE PROFILE HUB
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
