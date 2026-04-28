"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, Globe, ArrowRight } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  
  if (isAuthPage) return null;
  return (
    <footer className="bg-[#05110F] pt-32 pb-16 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-mist/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-mist to-accent-gold rounded-xl flex items-center justify-center font-serif text-2xl font-bold text-primary-deep transform group-hover:rotate-6 transition-transform">
                T
              </div>
              <span className="text-2xl font-serif font-bold tracking-wider text-white">
                T-CAFE <span className="text-primary-mist">MIST</span>
              </span>
            </Link>
            <p className="text-white/40 text-[15px] font-light leading-relaxed mb-10 pr-10">
              The world&apos;s first hybrid café ecosystem integrating luxury lounge 
              utility with high-yield cluster franchising model.
            </p>
            <div className="flex gap-4">
                <a href="mailto:info@oasismist.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary-mist hover:text-primary-deep hover:border-primary-mist transition-all">
                  <Mail size={18} />
                </a>
                <a href="tel:+916269112500" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary-mist hover:text-primary-deep hover:border-primary-mist transition-all">
                  <Phone size={18} />
                </a>
                <a href="https://oasismist.com" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary-mist hover:text-primary-deep hover:border-primary-mist transition-all">
                  <Globe size={18} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white mb-10">Investment</h4>
            <ul className="space-y-6">
              {[
                { name: "Franchise Models", href: "/franchise" },
                { name: "Cluster Strategy", href: "/franchise" },
                { name: "Profitability", href: "/franchise" },
                { name: "Master Franchise", href: "/franchise" },
                { name: "Territory Lock", href: "/franchise" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-primary-mist transition-all text-[15px] font-light flex items-center gap-3 group">
                    <div className="w-1 h-1 bg-primary-mist/20 rounded-full group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white mb-10">Experience</h4>
            <ul className="space-y-6">
              {[
                { name: "The Gallery", href: "/gallery" },
                { name: "Member Status", href: "/membership" },
                { name: "Tech Workstations", href: "/#lounge-plus" },
                { name: "Coffee Mixology", href: "/#brand-story" },
                { name: "Global Expansion", href: "/#cluster" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-primary-mist transition-all text-[15px] font-light flex items-center gap-3 group">
                    <div className="w-1 h-1 bg-primary-mist/20 rounded-full group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white mb-10">Global Access</h4>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageCircle size={60} strokeWidth={1} />
               </div>
               <p className="text-white/60 text-sm mb-6 leading-relaxed relative z-10 font-light">
                 Direct access to our 24/7 Global Franchise Advisory line via WhatsApp.
               </p>
               <button className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.03] transition-all shadow-xl">
                  <MessageCircle size={20} />
                  Chat with Advisory
               </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            <Link href="#" className="hover:text-primary-mist">Privacy Policy</Link>
            <Link href="http://localhost:3002" target="_blank" className="hover:text-primary-mist flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-mist animate-pulse" />
              Admin Infrastructure
            </Link>
            <Link href="#" className="hover:text-primary-mist">Compliance</Link>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            © 2026 T-CAFE MIST Global Ecosystem. Engineered for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
