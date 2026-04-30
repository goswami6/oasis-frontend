"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone,
  Share2 as Facebook, MessageSquare as Twitter, Briefcase as Linkedin, Camera as Instagram, Play as Youtube,
  Wallet, Crown, Calendar
} from "lucide-react";
import { api } from "../utility/api";

const Header = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) return null;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [walletInfo, setWalletInfo] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Check for user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        fetchWalletData(parsedUser.id || parsedUser._id);
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchWalletData = async (userId: string) => {
    try {
      const res = await api.user.getWalletBalance(userId);
      if (res.success) {
        setWalletInfo(res);
      }
    } catch (error) {
      console.error("Wallet fetch error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Models",
      href: "/models",
      dropdown: [
        { name: "Kiosk", href: "/models/kiosk" },
        { name: "Express", href: "/models/express" },
        { name: "City Cafe", href: "/models/city-cafe" },
        { name: "Premium (Green)", href: "/models/premium" },
        { name: "Luxury (Elite)", href: "/models/luxury" },
        { name: "Lounge+", href: "/models/lounge-plus" },
        // { name: "Recharge Hub", href: "/models/recharge" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Franchise", href: "/franchise" },
    { name: "Membership", href: "/membership" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-deep/90 backdrop-blur-md border-b border-white/5 py-2 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-end items-center gap-6">
          <div className="flex items-center gap-2 text-accent-gold font-bold text-[11px] tracking-wider font-sans">
            <Phone size={12} fill="currentColor" />
            +91-6269112500
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <Facebook size={14} className="hover:text-white cursor-pointer transition-colors" />
            <Twitter size={14} className="hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={14} className="hover:text-white cursor-pointer transition-colors" />
            <Youtube size={14} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`transition-all duration-300 ${isScrolled
          ? "py-2.5 bg-primary-deep/95 backdrop-blur-lg shadow-2xl"
          : "py-4 bg-primary-deep/40 backdrop-blur-sm"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-mist to-accent-gold rounded-xl flex items-center justify-center font-serif text-2xl font-bold text-primary-deep shadow-lg">
              T
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white">
              T-CAFE <span className="text-primary-mist italic">MIST</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered Links */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => link.dropdown && setIsDropdownOpen(link.name)}
                onMouseLeave={() => link.dropdown && setIsDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="text-[11px] font-bold text-white/90 hover:text-primary-mist transition-colors uppercase tracking-[0.2em] flex items-center gap-1"
                >
                  {link.name}
                {link.dropdown && <ChevronDown size={10} className={`opacity-50 transition-transform ${isDropdownOpen === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {isDropdownOpen === link.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-primary-deep/98 border border-white/10 rounded-2xl overflow-hidden shadow-3xl backdrop-blur-xl"
                      >
                        <div className="flex flex-col py-4">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-8 py-3.5 text-[10px] uppercase font-black tracking-widest text-white/50 hover:text-primary-mist hover:bg-white/5 transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* User Auth Section */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black text-primary-mist/60 leading-none mb-1">
                      {walletInfo?.balance?.toLocaleString() || 0} Tokens
                    </span>
                    <div className="flex items-center gap-2 bg-primary-mist/10 text-primary-mist px-4 py-2 rounded-lg font-bold text-[11px] tracking-widest uppercase border border-primary-mist/20 hover:bg-primary-mist/20 transition-all">
                      <div className="w-5 h-5 rounded-full bg-primary-mist text-primary-deep flex items-center justify-center text-[8px]">
                        {user.name?.[0] || 'U'}
                      </div>
                      {user.name?.split(' ')[0]}
                      <ChevronDown size={10} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-72 bg-primary-deep/98 border border-white/10 rounded-2xl overflow-hidden shadow-3xl backdrop-blur-xl"
                    >
                      {/* Membership Card - Premium UI */}
                      {walletInfo?.membershipActive ? (
                        <div className="p-5 bg-gradient-to-br from-primary-mist/20 via-transparent to-accent-gold/10 border-b border-white/5">
                          <div className={`p-4 rounded-xl border ${walletInfo.membershipTier === 'Platinum' ? 'border-primary-mist/30 bg-primary-mist/5' : 'border-accent-gold/30 bg-accent-gold/5'} relative overflow-hidden group`}>
                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">Member Status</h4>
                                <div className="flex items-center gap-2">
                                  <Crown size={14} className={walletInfo.membershipTier === 'Platinum' ? 'text-primary-mist' : 'text-accent-gold'} />
                                  <span className="text-sm font-serif font-bold text-white tracking-wide">{walletInfo.membershipTier} Tier</span>
                                </div>
                              </div>
                              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-white/40">
                                <Linkedin size={14} />
                              </div>
                            </div>
                            <div className="flex justify-between items-end">
                              <div className="text-[9px] text-white/30 font-medium">
                                <Calendar size={10} className="inline mr-1 mb-0.5" />
                                Valid thru {new Date(walletInfo.membershipExpiry).toLocaleDateString()}
                              </div>
                              <span className="text-[10px] font-black text-primary-mist tracking-widest uppercase">Active</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-5 border-b border-white/5 text-center">
                          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black mb-3">No Active Plan</p>
                          <Link href="/#membership">
                            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-white hover:bg-primary-mist hover:text-primary-deep transition-all uppercase tracking-widest">
                              Upgrade to Member
                            </button>
                          </Link>
                        </div>
                      )}

                      <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Signed in as</p>
                          <p className="text-xs font-bold text-white truncate">{user.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Tokens</p>
                          <p className="text-xs font-black text-primary-mist">{walletInfo?.balance?.toLocaleString() || 0}</p>
                        </div>
                      </div>
                      <div className="py-2">
                        <Link href="/profile" className="block px-4 py-2 text-[10px] text-white/60 hover:text-primary-mist hover:bg-white/5 uppercase tracking-widest">My Profile</Link>
                        <Link href="/orders" className="block px-4 py-2 text-[10px] text-white/60 hover:text-primary-mist hover:bg-white/5 uppercase tracking-widest">My Orders</Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-[10px] text-red-400 hover:bg-red-500/10 uppercase tracking-widest font-bold"
                        >
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/login">
                <button className="bg-[#FFCC00] text-primary-deep px-8 py-2.5 rounded-lg font-black text-[11px] tracking-widest uppercase hover:bg-white hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(255,204,0,0.2)]">
                  Login / Join
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle & User Preview */}
          <div className="lg:hidden flex items-center gap-4">
            {user && (
              <Link href="/profile" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-mist text-primary-deep flex items-center justify-center text-[10px] font-bold">
                  {user.name?.[0] || 'U'}
                </div>
              </Link>
            )}
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-[64px] md:top-[80px] right-0 left-0 bottom-0 bg-primary-deep/98 backdrop-blur-3xl z-[60] overflow-y-auto"
          >
            <div className="flex flex-col p-8 pt-4 gap-8 min-h-screen">
              
              {/* User Profile Summary (Mobile) */}
              {user && (
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 mb-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-mist text-primary-deep flex items-center justify-center text-xl font-bold">
                      {user.name?.[0] || 'U'}
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg leading-none mb-1">{user.name}</h4>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <p className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Tokens</p>
                      <p className="text-sm font-black text-primary-mist">{walletInfo?.balance?.toLocaleString() || 0}</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <p className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Tier</p>
                      <p className="text-sm font-black text-white">{walletInfo?.membershipTier || 'Free'}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="text-xl font-serif italic text-white hover:text-primary-mist tracking-tight py-2 block"
                        onClick={() => !link.dropdown && setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button 
                          onClick={() => setIsDropdownOpen(isDropdownOpen === link.name ? null : link.name)}
                          className="p-2 text-white/20"
                        >
                          <ChevronDown size={20} className={isDropdownOpen === link.name ? 'rotate-180' : ''} />
                        </button>
                      )}
                    </div>
                    
                    {link.dropdown && isDropdownOpen === link.name && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="pl-6 flex flex-col gap-4 mt-2 mb-4"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-xs font-bold text-white/30 hover:text-primary-mist uppercase tracking-widest py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pb-12 space-y-4">
                {user ? (
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="w-full">
                      <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px]">
                        Profile
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full border border-red-500/20 text-red-400 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] bg-red-500/5"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-accent-gold text-primary-deep py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-accent-gold/20">
                      Login / Register
                    </button>
                  </Link>
                )}
                
                {/* Social Links Mobile */}
                <div className="flex justify-center gap-6 pt-6 text-white/20">
                  <Facebook size={18} />
                  <Twitter size={18} />
                  <Linkedin size={18} />
                  <Instagram size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

