"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, User, 
  MapPin, Wallet, Briefcase, 
  ChevronLeft, Loader2, Send, Shield, Eye, Upload, X as CloseIcon
} from "lucide-react";
import Link from "next/link";
import { api } from "@/utility/api";

const ReserveModelPage = ({ params }: { params: Promise<{ model: string }> }) => {
  const { model } = React.use(params);
  const modelName = model.replace(/-/g, " ");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    investment: "",
    businessBackground: "",
    aadharNumber: "",
    panNumber: "",
    siteVisitConsent: false,
    model: modelName.toUpperCase()
  });

  const [files, setFiles] = useState<{
    aadharFront: File | null;
    aadharBack: File | null;
    panImage: File | null;
  }>({
    aadharFront: null,
    aadharBack: null,
    panImage: null
  });

  const [previews, setPreviews] = useState<{
    aadharFront: string;
    aadharBack: string;
    panImage: string;
  }>({
    aadharFront: "",
    aadharBack: "",
    panImage: ""
  });

  const steps = [
    { title: "Identity", icon: User },
    { title: "Location", icon: MapPin },
    { title: "Profile", icon: Briefcase },
    { title: "Capital", icon: Wallet },
    { title: "Governance", icon: Shield }
  ];

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleFileChange = (field: keyof typeof files, file: File | null) => {
    setFiles(prev => ({ ...prev, [field]: file }));
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviews(prev => ({ ...prev, [field]: url }));
    } else {
      setPreviews(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fd.append(key, value.toString());
      });
      if (files.aadharFront) fd.append("aadharFront", files.aadharFront);
      if (files.aadharBack) fd.append("aadharBack", files.aadharBack);
      if (files.panImage) fd.append("panImage", files.panImage);

      const res = await api.inquiry.create(fd);
      if (res.success) setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary-mist font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
            >
              Exclusivity Secured
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-serif italic mb-4">
              Reserve Your <span className="text-primary-mist not-italic">{modelName}</span>
            </h1>
            <p className="text-white/40 font-light">
              Follow our elite sovereignty onboarding to secure your territory in the OASIS network.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] overflow-hidden shadow-3xl">
            {/* Step Progress */}
            <div className="flex border-b border-white/10">
              {steps.map((s, i) => (
                <div 
                  key={i}
                  className={`flex-1 p-6 flex flex-col items-center gap-2 border-r last:border-0 border-white/5 transition-colors ${step === i + 1 ? 'bg-primary-mist/10' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${step === i + 1 ? 'border-primary-mist text-primary-mist scale-110 shadow-lg' : 'border-white/20 text-white/20'}`}>
                    <s.icon size={18} />
                  </div>
                  <span className={`text-[9px] uppercase font-black tracking-widest ${step === i + 1 ? 'text-primary-mist' : 'text-white/20'}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-10 md:p-16">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="min-h-[300px]"
                  >
                    {step === 1 && (
                      <div className="space-y-8">
                        <h3 className="text-2xl font-serif">Personal Intelligence</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                          <InputField 
                            label="Full Legal Name" 
                            placeholder="e.g. Sameer Khanna"
                            value={formData.name}
                          onChange={(v: string) => setFormData({...formData, name: v})}
                        />
                        <InputField 
                          label="Contact Email" 
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(v: string) => setFormData({...formData, email: v})}
                        />
                      </div>
                      <InputField 
                        label="Secured Phone Number" 
                        placeholder="+91 XXXX XXX XXX"
                        value={formData.phone}
                        onChange={(v: string) => setFormData({...formData, phone: v})}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <h3 className="text-2xl font-serif">Sovereignty Territory</h3>
                      <InputField 
                        label="Target City / Region" 
                        placeholder="Search prime metropolitan areas..."
                        value={formData.location}
                        onChange={(v: string) => setFormData({...formData, location: v})}
                      />
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                          <p className="text-[10px] uppercase font-black tracking-widest text-primary-mist mb-2">Technical Note</p>
                          <p className="text-sm font-light text-white/40 leading-relaxed">
                            Cluster model feasibility depend on regional hub proximity (Lounge+).
                          </p>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-8">
                        <h3 className="text-2xl font-serif">Operational Background</h3>
                        <div className="grid gap-6">
                        {[
                          "Aspiring Entrepreneur",
                          "Existing Business Owner",
                          "Real Estate Professional",
                          "Institutional Investor"
                        ].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, businessBackground: opt})}
                            className={`p-6 rounded-3xl border text-left transition-all ${formData.businessBackground === opt ? 'bg-primary-mist border-primary-mist text-primary-deep' : 'bg-white/5 border-white/10 hover:border-primary-mist/50'}`}
                          >
                            <span className="font-serif text-lg">{opt}</span>
                          </button>
                        ))}
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-8">
                        <h3 className="text-2xl font-serif">Capital Allocation</h3>
                        <p className="text-white/40 font-light mb-8">Select your committed investment capacity for the initial node.</p>
                        <div className="grid grid-cols-2 gap-4">
                          {["₹5L - 10L", "₹10L - 25L", "₹25L - 50L", "₹50L - 1Cr+"].map((range) => (
                            <button
                              key={range}
                              onClick={() => setFormData({...formData, investment: range})}
                              className={`p-6 rounded-3xl border transition-all ${formData.investment === range ? 'bg-primary-mist border-primary-mist text-primary-deep shadow-2xl' : 'bg-white/5 border-white/10 hover:border-primary-mist/50'}`}
                            >
                              <span className="font-serif font-bold">{range}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="space-y-8">
                        <h3 className="text-2xl font-serif">Governance & Verification</h3>
                        <p className="text-white/40 font-light mb-8">Submit identity credentials for territory rights evaluation.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <InputField 
                            label="Aadhar Number" 
                            placeholder="XXXX XXXX XXXX"
                            value={formData.aadharNumber}
                            onChange={(v: string) => setFormData({...formData, aadharNumber: v})}
                          />
                          <InputField 
                            label="PAN Card Number" 
                            placeholder="ABCDE1234F"
                            value={formData.panNumber}
                            onChange={(v: string) => setFormData({...formData, panNumber: v})}
                          />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <UploadField 
                            label="Aadhar Front" 
                            preview={previews.aadharFront}
                            onFileSelect={(f) => handleFileChange("aadharFront", f)}
                          />
                          <UploadField 
                            label="Aadhar Back" 
                            preview={previews.aadharBack}
                            onFileSelect={(f) => handleFileChange("aadharBack", f)}
                          />
                          <UploadField 
                            label="PAN Image" 
                            preview={previews.panImage}
                            onFileSelect={(f) => handleFileChange("panImage", f)}
                          />
                        </div>

                        <div 
                          onClick={() => setFormData({...formData, siteVisitConsent: !formData.siteVisitConsent})}
                          className={`mt-8 p-8 rounded-[32px] border cursor-pointer transition-all ${formData.siteVisitConsent ? 'bg-primary-mist/10 border-primary-mist' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                        >
                          <div className="flex items-start gap-6">
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-colors ${formData.siteVisitConsent ? 'bg-primary-mist border-primary-mist' : 'border-white/20'}`}>
                              {formData.siteVisitConsent && <CheckCircle2 className="text-primary-deep" size={14} />}
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-serif text-lg">Authorize Site Verification</h4>
                              <p className="text-sm text-white/40 font-light leading-relaxed">
                                I authorize a professional from the OSSIS Regional Hub to visit and audit my proposed location for technical and commercial feasibility.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-12 flex items-center justify-between">
                      {step > 1 ? (
                        <button 
                          onClick={handleBack}
                          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors"
                        >
                          <ChevronLeft size={18} />
                          <span className="text-[10px] uppercase font-black tracking-widest">Previous Phase</span>
                        </button>
                      ) : <div />}

                      <button 
                        onClick={step === 5 ? handleSubmit : handleNext}
                        disabled={isSubmitting}
                        className="bg-primary-mist text-primary-deep px-12 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:scale-105 transition-all flex items-center gap-4 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <>
                            {step === 5 ? "Commence Onboarding" : "Next Phase"}
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary-mist/20 text-primary-mist flex items-center justify-center mx-auto mb-10 border border-primary-mist/30">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-serif mb-6 whitespace-pre-line">
                      Intelligence Secured.{"\n"}
                      <span className="text-primary-mist italic">Sovereignty Initiated.</span>
                    </h2>
                    <p className="text-white/40 font-light text-lg max-w-lg mx-auto mb-12 leading-relaxed">
                      Your high-resolution credentials have been securely recorded. Our regional territory director will perform a **Physical Site Audit** and contact you within 24 operational hours.
                    </p>
                    <Link href="/" className="inline-block border border-white/10 px-12 py-6 rounded-3xl text-[10px] uppercase font-black tracking-widest hover:bg-white/5 transition-colors">
                      Return to Network Overview
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

const InputField = ({ label, placeholder, value, onChange }: any) => (
  <div className="flex flex-col gap-3">
    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white/5 border border-white/10 rounded-3xl px-8 py-6 focus:outline-none focus:border-primary-mist focus:bg-white/10 transition-all font-light"
    />
  </div>
);

const UploadField = ({ label, preview, onFileSelect }: { label: string, preview: string, onFileSelect: (f: File | null) => void }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{label}</label>
    <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 overflow-hidden group hover:border-primary-mist/50 transition-all">
      {preview ? (
        <>
          <img src={preview} alt="ID Preview" className="w-full h-full object-cover" />
          <button 
            onClick={() => onFileSelect(null)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <CloseIcon size={14} />
          </button>
        </>
      ) : (
        <label className="w-full h-full flex flex-col items-center justify-center gap-3 cursor-pointer">
          <Upload size={24} className="text-white/20 group-hover:text-primary-mist transition-colors" />
          <span className="text-[9px] uppercase font-black tracking-widest text-white/20 group-hover:text-primary-mist transition-colors">Upload Document</span>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={(e) => e.target.files && onFileSelect(e.target.files[0])}
          />
        </label>
      )}
    </div>
  </div>
);

export default ReserveModelPage;
