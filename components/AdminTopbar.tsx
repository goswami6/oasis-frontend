"use client";

import React from "react";
import { Search, Bell, Moon, Sun, Monitor, HelpCircle } from "lucide-react";

const AdminTopbar = () => {
  return (
    <header className="h-24 bg-white border-b border-primary-deep/5 px-10 flex items-center justify-between sticky top-0 z-[90]">
      {/* Breadcrumbs / Title */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-serif italic text-primary-deep">
          Admin <span className="text-primary-deep/20 mx-2 text-sm not-italic uppercase font-sans font-black tracking-widest">/</span> 
          <span className="text-primary-mist italic">Intelligence Hub</span>
        </h2>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-10">
        {/* Global Search */}
        <div className="relative group flex items-center">
          <Search className="absolute left-4 text-primary-deep/30 group-focus-within:text-primary-mist transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search Intelligence Hub..." 
            className="bg-[#FAF9F6] border border-primary-deep/5 rounded-2xl pl-12 pr-6 py-3 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-primary-mist focus:bg-white transition-all w-64 lg:w-96"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 border-l border-primary-deep/5 pl-10">
          <button className="relative w-10 h-10 rounded-xl bg-[#FAF9F6] flex items-center justify-center text-primary-deep/40 hover:bg-primary-mist/10 hover:text-primary-mist transition-all group">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent-gold rounded-full border-2 border-white shadow-sm group-hover:animate-ping" />
          </button>
          
          <button className="w-10 h-10 rounded-xl bg-[#FAF9F6] flex items-center justify-center text-primary-deep/40 hover:bg-primary-mist/10 hover:text-primary-mist transition-all">
            <Monitor size={20} />
          </button>

          <div className="w-[1px] h-8 bg-primary-deep/5 mx-2" />

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase text-primary-deep leading-none mb-1">Elite Systems</p>
              <p className="text-[9px] text-primary-deep/30 uppercase tracking-tighter leading-none">v4.0 stable</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
