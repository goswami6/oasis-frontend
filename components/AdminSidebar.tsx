"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Users, TrendingUp, Layers, 
  BarChart3, Settings, ExternalLink, 
  LayoutDashboard, ShieldCheck, 
  ChevronRight, LogOut
} from "lucide-react";

const AdminSidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Franchise Leads", href: "/admin/leads", icon: Users },
    { name: "Model Config", href: "/admin/models", icon: Layers },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "System Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-80 bg-primary-deep h-screen sticky top-0 flex flex-col border-r border-white/5 z-[100]">
      {/* Brand Logo */}
      <div className="p-10 border-b border-white/5">
        <Link href="/admin" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-mist to-accent-gold rounded-2xl flex items-center justify-center font-serif text-2xl font-bold text-primary-deep shadow-[0_0_20px_rgba(123,227,214,0.3)]">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-black tracking-tighter text-white">
              OASIS <span className="text-primary-mist italic">ADMIN</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Intelligence Hub</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-10 px-6 space-y-2 overflow-y-auto no-scrollbar">
        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 px-4 mb-4 block">Main Navigation</span>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                isActive 
                  ? "bg-primary-mist text-primary-deep shadow-[0_10px_20px_rgba(123,227,214,0.1)]" 
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[13px] font-bold uppercase tracking-widest ${isActive ? "font-black" : "font-medium"}`}>
                  {link.name}
                </span>
              </div>
              {isActive && (
                <motion.div layoutId="activeDot">
                   <ChevronRight size={16} />
                </motion.div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-8 border-t border-white/5 space-y-4">
        <div className="bg-white/5 rounded-3xl p-6 border border-white/5 group hover:border-primary-mist/20 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-mist/10 flex items-center justify-center text-primary-mist">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase text-white tracking-widest leading-none mb-1">Root Admin</p>
              <p className="text-[10px] text-white/30 uppercase tracking-tighter leading-none">Security Cleared</p>
            </div>
          </div>
          <Link 
            href="/"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            <LogOut size={14} className="rotate-180" />
            Back to Site
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
