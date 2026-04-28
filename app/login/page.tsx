"use client";

import React, { useState, useEffect } from "react";
import { Mail, Lock, LogIn, ArrowRight, Globe, Layout, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { api } from "@/utility/api";

declare global {
  interface Window {
    onGoogleLibraryLoad: () => void;
  }
}

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [pendingUser, setPendingUser] = useState<any>(null);

  useEffect(() => {
    /* global google */
    if (typeof window !== 'undefined') {
      window.onGoogleLibraryLoad = () => {
        // @ts-ignore
        google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
        });
      };
    }
  }, []);

  const handleGoogleCallback = async (response: any) => {
    setLoading(true);
    try {
      const data = await api.auth.googleLogin({ token: response.credential });
      if (data && !data.error) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/';
      } else {
        setError(data.message || "Google Authentication failed");
      }
    } catch (err) {
      setError("Failed to connect to security hub.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const data = await api.auth.login(formData);
      
      if (data && !data.error) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect') || '/';
        window.location.href = redirect;
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Connection failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAction = (provider: string) => {
    if (provider === 'Google') {
      // @ts-ignore
      google.accounts.id.prompt(); // Trigger Google One Tap
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPendingUser({
        id: provider === 'Google' ? "000000000000000000000001" : "000000000000000000000002",
        name: `${provider} User`,
        email: `${provider.toLowerCase()}@oasis.com`,
        provider
      });
      setShowOTP(true);
    }, 1500);
  };

  const verifyOTP = () => {
    if (otp.length === 4) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(pendingUser));
        localStorage.setItem('token', `mock-${pendingUser.provider.toLowerCase()}-token`);
        window.location.href = '/';
      }, 1000);
    } else {
      setError("Invalid security code");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-6 relative overflow-hidden">
      {/* OTP Overlay */}
      <AnimatePresence>
        {showOTP && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-deep/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[40px] p-10 md:p-12 max-w-sm w-full text-center shadow-3xl"
            >
              <div className="w-16 h-16 bg-primary-mist/20 rounded-2xl flex items-center justify-center text-primary-mist mx-auto mb-8">
                <Shield className="animate-pulse" size={32} />
              </div>
              <h2 className="text-2xl font-serif text-primary-deep mb-3 italic">Security <span className="text-primary-mist not-italic">Verification</span></h2>
              <p className="text-slate-400 text-xs mb-8 font-light">Enter the 4-digit code sent to your {pendingUser?.provider} account identity.</p>
              
              <input 
                type="text"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="0 0 0 0"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 text-center text-3xl font-serif tracking-[0.5em] focus:outline-none focus:border-primary-mist transition-all mb-8 text-primary-deep"
              />

              <button 
                onClick={verifyOTP}
                disabled={loading}
                className="w-full bg-primary-deep text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary-mist hover:text-primary-deep transition-all disabled:opacity-50"
              >
                {loading ? "Authenticating..." : "Establish Access"}
              </button>
              
              <button 
                onClick={() => setShowOTP(false)}
                className="mt-6 text-[9px] uppercase font-black tracking-widest text-slate-300 hover:text-primary-deep transition-colors"
              >
                Cancel Attempt
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            <span className="text-primary-deep/40 font-bold tracking-[0.4em] uppercase text-[9px] mb-3 block">Member Access</span>
            <h1 className="text-3xl md:text-4xl font-serif italic text-primary-deep mb-2">Welcome <span className="text-primary-mist not-italic">Back.</span></h1>
            <p className="text-slate-400 font-light text-xs">Resume your journey through the OASIS network.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-[10px] uppercase font-bold tracking-widest rounded-xl text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Email Address</label>
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
              <div className="flex justify-between items-center px-1">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Password</label>
                <Link href="#" className="text-[9px] uppercase font-black tracking-widest text-primary-mist hover:text-primary-deep transition-colors">Forgot?</Link>
              </div>
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
              {loading ? "Verifying..." : (
                <>
                  Commence Session
                  <LogIn size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <div className="relative flex items-center justify-center mb-8">
              <div className="w-full border-t border-slate-100"></div>
              <span className="absolute bg-white px-4 text-[8px] text-slate-300 uppercase font-black tracking-widest italic">Social Passport</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <SocialBtn 
                icon={Globe} 
                label="Google" 
                onClick={() => handleSocialAction('Google')} 
              />
              <SocialBtn 
                icon={Layout} 
                label="Facebook" 
                onClick={() => handleSocialAction('Facebook')} 
              />
            </div>

            <p className="text-xs font-light text-slate-400">
              New to the Network?{" "}
              <Link href="/register" className="text-primary-mist font-bold hover:text-primary-deep transition-colors">Create Identity</Link>
            </p>
          </div>
        </motion.div>
      </div>
      <Script 
        src="https://accounts.google.com/gsi/client" 
        onLoad={() => {
          // @ts-ignore
          window.onGoogleLibraryLoad();
        }}
      />
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
