"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Globe, Layout } from "lucide-react";
import Link from "next/link";
import { api } from "@/utility/api";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await api.auth.register(formData);

      if (data && !data.error) {
        // Redirect to login after successful registration
        window.location.href = '/login?registered=true';
      } else {
        setError(data.message || "Registration failed. User might already exist.");
      }
    } catch (err) {
      setError("Failed to connect to the OASIS network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-200 rounded-[40px] p-10 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-8">
              <div className="w-12 h-12 bg-primary-deep rounded-xl flex items-center justify-center font-serif text-2xl font-bold text-white shadow-lg mx-auto">
                T
              </div>
            </Link>
            <span className="text-primary-deep/40 font-bold tracking-[0.4em] uppercase text-[9px] mb-3 block">New Identity</span>
            <h1 className="text-3xl md:text-4xl font-serif italic text-primary-deep mb-2">Join the <span className="text-primary-mist not-italic">Elite.</span></h1>
            <p className="text-slate-400 font-light text-xs">Create your digital passport for the OASIS network.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-[10px] uppercase font-bold tracking-widest rounded-xl text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Full Identity Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-mist transition-all text-sm font-medium text-primary-deep"
                  placeholder="e.g. Sameer Khanna"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Member Email</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-mist transition-all text-sm font-medium text-primary-deep"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Create Secret Key</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input 
                  type="password" 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-primary-mist transition-all text-sm font-medium text-primary-deep"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-primary-deep text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary-mist hover:text-primary-deep transition-all flex items-center justify-center gap-3 group disabled:opacity-50 shadow-xl mt-4"
            >
              {loading ? "Forging Identity..." : (
                <>
                  Establish Sovereignty
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-slate-100"></div>
              <span className="absolute bg-white px-4 text-[8px] text-slate-300 uppercase font-black tracking-widest italic">Social Onboarding</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <SocialBtn 
                icon={Globe} 
                label="Google" 
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const mockUser = { id: "000000000000000000000001", name: "Google User", email: "google@oasis.com" };
                    localStorage.setItem('user', JSON.stringify(mockUser));
                    localStorage.setItem('token', 'mock-google-token');
                    window.location.href = '/';
                  }, 1000);
                }} 
              />
              <SocialBtn 
                icon={Layout} 
                label="Facebook" 
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    const mockUser = { id: "000000000000000000000002", name: "Facebook User", email: "fb@oasis.com" };
                    localStorage.setItem('user', JSON.stringify(mockUser));
                    localStorage.setItem('token', 'mock-fb-token');
                    window.location.href = '/';
                  }, 1000);
                }} 
              />
            </div>

            <p className="text-xs font-light text-slate-400">
              Already have an Identity?{" "}
              <Link href="/login" className="text-primary-mist font-bold hover:text-primary-deep transition-colors">Access Portal</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialBtn({ icon: Icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center justify-center gap-3 bg-slate-50 border border-slate-200 py-3 rounded-xl hover:bg-white hover:border-primary-mist/30 transition-all group"
    >
      <Icon size={14} className="text-slate-300 group-hover:text-primary-mist transition-colors" />
      <span className="text-[9px] uppercase font-black tracking-widest text-slate-500">{label}</span>
    </button>
  );
}
