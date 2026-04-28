"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Phone, X, Send, 
  Orbit, ArrowRight, User, Bot,
  ShieldCheck, Zap, Minus, Maximize2
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
}

const EVA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Neural connection established. I am EVA. How may I assist your sovereignty journey within the OSSIS network?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    // Simulated Bot Response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: getSimulatedResponse(text),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  const getSimulatedResponse = (input: string) => {
    const text = input.toLowerCase();
    if (text.includes("roi") || text.includes("profit")) 
      return "The Oasis cluster model enables up to 40% net margins. Would you like to view our tiered ROI projections?";
    if (text.includes("kyc") || text.includes("aadhar") || text.includes("pan"))
      return "Our governance flow requires industrial-standard IDs (Aadhaar/PAN) for territory lockdown. You can upload these in Step 5 of the reservation flow.";
    if (text.includes("call") || text.includes("phone") || text.includes("talk"))
      return "Voice Protocol is ready. You can initiate a secure line by clicking the 'Initiate Call' button above.";
    if (text.includes("lounge") || text.includes("premium"))
      return "The Lounge+ flagship is our most aggressive regional anchor. It supports up to 3 satellite spokes (Express/Kiosks).";
    
    return "Intelligence acknowledged. Please specify if you require data on Model Tiers, ROI metrics, or Site Audit protocols.";
  };

  const neuralPathways = [
    "Elite Model Specs",
    "ROI Projections",
    "KYC Governance",
    "Book Site Audit"
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[100] font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-primary-mist text-primary-deep rounded-full shadow-[0_0_40px_rgba(123,227,214,0.4)] flex items-center justify-center relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-primary-mist rounded-full animate-ping opacity-10" />
            <Bot size={28} className="relative z-10 transition-transform group-hover:rotate-12" />
            
            <div className="absolute -top-14 right-0 bg-primary-deep/80 backdrop-blur-xl text-white px-5 py-3 rounded-2xl text-[9px] uppercase font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-2 border border-white/10 shadow-2xl pointer-events-none whitespace-nowrap">
              Connect to EVA Core
            </div>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
            className="w-[420px] bg-primary-deep/80 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden h-[600px] ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="p-8 bg-gradient-to-r from-white/5 to-transparent border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-mist/20 rounded-2xl flex items-center justify-center text-primary-mist">
                  <Orbit className="animate-spin-slow" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif italic text-white leading-none mb-1">EVA Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30">Neural Core Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="p-3 text-white/20 hover:text-white transition-colors">
                  <Minus size={20} />
                </button>
              </div>
            </div>

            {/* Voice Protocol Banner */}
            <div className="px-8 py-3 bg-primary-mist/5 border-b border-white/5 flex items-center justify-between group transition-all">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary-mist shadow-[0_0_10px_rgba(123,227,214,0.5)] animate-pulse" />
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-primary-mist/60 group-hover:text-primary-mist transition-colors">Emergency Protocol</span>
              </div>
              <a href="tel:+91XXXXXXXXXX" className="text-[8px] font-black uppercase tracking-widest px-4 py-2 bg-primary-mist/10 text-primary-mist border border-primary-mist/20 rounded-lg hover:bg-primary-mist hover:text-primary-deep transition-all flex items-center gap-2">
                Initiate Call <ArrowRight size={10} />
              </a>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar scrolling-touch"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-[24px] px-5 py-4 backdrop-blur-md ${m.type === 'user' ? 'bg-primary-mist text-primary-deep shadow-lg' : 'bg-white/5 text-white/90 border border-white/10'}`}>
                    <p className="text-[13px] font-light leading-relaxed tracking-wide">{m.text}</p>
                    <div className={`text-[7px] mt-2 opacity-30 uppercase font-black tracking-[0.2em] ${m.type === 'user' ? 'text-primary-deep text-right' : 'text-white'}`}>
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Neural Pathways (Quick Buttons) */}
            <div className="px-8 pb-4 flex gap-2 overflow-x-auto no-scrollbar">
              {neuralPathways.map((path) => (
                <button
                  key={path}
                  onClick={() => handleSend(path)}
                  className="shrink-0 px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/40 hover:bg-primary-mist/20 hover:text-primary-mist transition-all"
                >
                  {path}
                </button>
              ))}
            </div>

            {/* Input System */}
            <div className="p-8 pt-0 mt-auto bg-gradient-to-t from-primary-deep to-transparent">
              <div className="relative group/input">
                <input 
                  type="text"
                  placeholder="Inquire Neural Core..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary-mist focus:bg-white/10 transition-all text-[13px] font-light placeholder-white/20"
                />
                <button 
                  onClick={() => handleSend()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-mist/10 text-primary-mist border border-primary-mist/20 rounded-xl flex items-center justify-center hover:bg-primary-mist hover:text-primary-deep transition-all"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <ShieldCheck size={10} className="text-white/10" />
                <p className="text-[7px] uppercase font-black tracking-[0.3em] text-white/10">Sovereign Data Secured</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EVA;
