"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone,
  Share2 as Facebook, MessageSquare as Twitter, Briefcase as Linkedin, Camera as Instagram, Play as Youtube,
  Wallet, Crown, Calendar,
  Users,
  LogOut,
  User as UserIcon,
  ShoppingBag
} from "lucide-react";
import { api } from "../utility/api";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) return null;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [walletInfo, setWalletInfo] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Pages that have a white background and need a dark header
  const isWhitePage = ["/wallet", "/membership", "/refer", "/payment-success", "/profile", "/orders"].includes(pathname);

  const profileRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

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
    router.push('/');
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
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Franchise", href: "/franchise" },
    { name: "Membership", href: "/membership" },
    { name: "Contact Us", href: "/contact" },
  ];

  const headerTextColor = "text-white";
  const headerBgColor = isScrolled 
    ? "bg-primary-deep/95 backdrop-blur-lg shadow-2xl border-b border-white/5" 
    : "bg-primary-deep backdrop-blur-md border-b border-white/5";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-deep/90 border-white/5 backdrop-blur-md border-b py-2 hidden md:block transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-end items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-[11px] tracking-wider font-sans text-accent-gold">
            <Phone size={12} fill="currentColor" />
            +91-6269112500
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <Facebook size={14} className="hover:text-primary-mist cursor-pointer transition-colors" />
            <Twitter size={14} className="hover:text-primary-mist cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-primary-mist cursor-pointer transition-colors" />
            <Instagram size={14} className="hover:text-primary-mist cursor-pointer transition-colors" />
            <Youtube size={14} className="hover:text-primary-mist cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${headerBgColor} ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-mist to-accent-gold rounded-xl flex items-center justify-center font-serif text-xl font-bold text-primary-deep shadow-lg">
              T
            </div>
            <span className={`text-lg md:text-xl font-serif font-bold tracking-wider ${headerTextColor}`}>
              T-CAFE <span className="text-primary-mist italic">MIST</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => link.dropdown && setIsDropdownOpen(link.name)}
                onMouseLeave={() => link.dropdown && setIsDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[10px] font-black transition-colors uppercase tracking-[0.2em] flex items-center gap-1 ${headerTextColor} hover:text-primary-mist`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={10} className={`opacity-50 transition-transform ${isDropdownOpen === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {isDropdownOpen === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-2xl z-50"
                      >
                        <div className="flex flex-col py-2">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-6 py-3 text-[9px] uppercase font-black tracking-widest text-slate-500 hover:text-primary-mist hover:bg-slate-50 transition-all"
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
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all border bg-white/10 border-white/10 text-white hover:bg-white/20"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-bold leading-none">{user.name?.split(' ')[0]}</span>
                    <span className="text-[7px] font-black text-primary-mist uppercase tracking-tighter mt-1">{walletInfo?.balance?.toLocaleString() || 0} NXT</span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-primary-mist text-primary-deep flex items-center justify-center font-bold text-[10px]">
                    {user.name?.[0]}
                  </div>
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-4 w-72 bg-white rounded-[1.5rem] shadow-2xl border border-slate-100 p-1 overflow-hidden z-50"
                    >
                      {/* User Info Header */}
                      <div className="px-5 py-5 border-b border-slate-50 flex items-center justify-between">
                         <div>
                            <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest mb-1">Signed in as</p>
                            <p className="text-[10px] font-bold text-primary-deep truncate max-w-[120px]">{user.email}</p>
                         </div>
                         <div className="text-right">
                            <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest mb-1">Balance</p>
                            <p className="text-sm font-black text-primary-mist">{walletInfo?.balance?.toLocaleString() || 0}</p>
                         </div>
                      </div>

                      <div className="py-1">
                        <Link href="/profile" className="flex items-center gap-3 px-5 py-2.5 text-[9px] font-bold text-slate-500 hover:text-primary-mist hover:bg-slate-50 uppercase tracking-widest transition-colors">
                           <UserIcon size={12} className="text-primary-mist" />
                           My Profile
                        </Link>
                        <Link href="/wallet" className="flex items-center gap-3 px-5 py-2.5 text-[9px] font-bold text-slate-500 hover:text-primary-mist hover:bg-slate-50 uppercase tracking-widest transition-colors">
                           <Wallet size={12} className="text-primary-mist" />
                           My Wallet
                        </Link>
                        <Link href="/refer" className="flex items-center gap-3 px-5 py-2.5 text-[9px] font-bold text-slate-500 hover:text-primary-mist hover:bg-slate-50 uppercase tracking-widest transition-colors">
                           <Users size={12} className="text-primary-mist" />
                           Refer & Earn
                        </Link>
                        <Link href="/membership" className="flex items-center gap-3 px-5 py-2.5 text-[9px] font-bold text-slate-500 hover:text-primary-mist hover:bg-slate-50 uppercase tracking-widest transition-colors">
                           <Crown size={12} className="text-primary-mist" />
                           Membership
                        </Link>
                        <div className="mt-1 pt-1 border-t border-slate-50">
                           <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-5 py-3 text-[9px] font-black text-red-500 hover:bg-red-50 uppercase tracking-[0.2em] transition-colors"
                           >
                              <LogOut size={12} />
                              Logout
                           </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/login">
                <button className="bg-accent-gold text-primary-deep px-6 py-2 rounded-lg font-black text-[10px] tracking-widest uppercase hover:scale-[1.05] transition-all shadow-lg shadow-accent-gold/20">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            {user && (
              <Link href="/wallet" className={`flex flex-col items-end ${headerTextColor}`}>
                <span className="text-[7px] font-black text-primary-mist uppercase leading-none">{walletInfo?.balance?.toLocaleString() || 0} NXT</span>
                <div className="w-7 h-7 rounded-lg bg-primary-mist/10 text-primary-mist flex items-center justify-center font-bold text-[10px] border border-primary-mist/20 mt-0.5">
                  {user.name?.[0]}
                </div>
              </Link>
            )}
            <button
              className={`${headerTextColor} p-1.5`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-primary-deep/60 backdrop-blur-sm z-[90]"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[100] shadow-[-20px_0_50px_rgba(0,0,0,0.2)] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-mist to-accent-gold rounded-lg flex items-center justify-center text-primary-deep font-bold text-sm shadow-md">T</div>
                  <span className="text-xl font-serif font-bold text-primary-deep tracking-tight">T-CAFE <span className="text-primary-mist">MIST</span></span>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary-deep hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                {/* User card removed as requested */}

                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 pl-2">Navigation</p>
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${pathname === link.href ? 'bg-primary-mist/10 text-primary-mist' : 'text-primary-deep hover:bg-slate-50'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-lg font-serif font-bold">{link.name}</span>
                        <ChevronDown size={16} className="-rotate-90 opacity-30" />
                      </Link>
                      {link.dropdown && pathname.startsWith(link.href) && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
                          {link.dropdown.map(sub => (
                            <Link 
                              key={sub.name} 
                              href={sub.href} 
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-sm font-bold text-slate-400 hover:text-primary-mist"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 pl-2">Account Settings</p>
                  <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
                    <UserIcon size={20} className="text-primary-mist" />
                    <span className="font-bold text-sm uppercase tracking-widest">My Profile</span>
                  </Link>
                  <Link href="/refer" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-600 hover:bg-slate-50 transition-all">
                    <Users size={20} className="text-primary-mist" />
                    <span className="font-bold text-sm uppercase tracking-widest">Refer & Earn</span>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-slate-100">
                {user ? (
                  <button 
                    onClick={handleLogout}
                    className="w-full py-4 bg-red-50 text-red-500 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 hover:bg-red-100 transition-all"
                  >
                    <LogOut size={16} />
                    Logout Session
                  </button>
                ) : (
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full py-5 bg-gradient-to-r from-primary-mist to-accent-gold text-primary-deep rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-primary-mist/20 hover:scale-[1.02] transition-all">
                      Login / Join Network
                    </button>
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
