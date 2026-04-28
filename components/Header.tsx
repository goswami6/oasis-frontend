"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone,
  Share2 as Facebook, MessageSquare as Twitter, Briefcase as Linkedin, Camera as Instagram, Play as Youtube
} from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) return null;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
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
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              OASIS <span className="text-primary-mist italic">MIST</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered Links */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-[11px] font-bold text-white/90 hover:text-primary-mist transition-colors uppercase tracking-[0.2em] flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={10} className={`opacity-50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
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
                  className="flex items-center gap-2 bg-primary-mist/10 text-primary-mist px-4 py-2 rounded-lg font-bold text-[11px] tracking-widest uppercase border border-primary-mist/20 hover:bg-primary-mist/20 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-primary-mist text-primary-deep flex items-center justify-center text-[8px]">
                    {user.name?.[0] || 'U'}
                  </div>
                  {user.name?.split(' ')[0]}
                  <ChevronDown size={10} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-primary-deep/98 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl"
                    >
                      <div className="p-4 border-b border-white/5">
                        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Signed in as</p>
                        <p className="text-xs font-bold text-white truncate">{user.email}</p>
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

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden fixed top-[80px] right-0 left-0 bottom-0 bg-primary-deep/95 backdrop-blur-2xl z-[60] overflow-y-auto"
          >
            <div className="flex flex-col p-10 gap-8 min-h-screen">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-6">
                  <Link
                    href={link.href}
                    className="text-2xl font-serif italic text-white hover:text-primary-mist tracking-tight block"
                    onClick={() => !link.dropdown && setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 border-l border-white/10 flex flex-col gap-6 mt-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-sm font-light text-white/40 hover:text-primary-mist uppercase tracking-widest"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-auto pb-20 space-y-4">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full border border-red-500/30 text-red-500 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs"
                  >
                    Logout Account
                  </button>
                ) : (
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-[#FFCC00] text-primary-deep py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs">
                      Login / Register
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

