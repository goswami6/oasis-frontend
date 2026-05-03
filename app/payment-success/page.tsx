"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Wallet, Home, Receipt, Download } from "lucide-react";
import Link from "next/link";

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [amount, setAmount] = useState<string | null>(null);

  useEffect(() => {
    setPaymentId(searchParams.get("payment_id"));
    setAmount(searchParams.get("amount"));
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-24">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-sm border border-slate-100"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
            className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border border-emerald-100 shadow-sm"
          >
            <CheckCircle size={40} className="text-emerald-500" />
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-primary-deep mb-2 relative z-10">
            Payment <span className="text-primary-mist italic">Successful</span>
          </h1>
          <p className="text-slate-400 text-[10px] md:text-xs font-medium mb-8 relative z-10 uppercase tracking-widest">
            Transaction Processed Successfully
          </p>

          <div className="bg-white rounded-3xl p-6 mb-8 text-left border border-slate-100 shadow-sm space-y-4 relative z-10">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Payment ID</span>
              <span className="text-[10px] font-mono text-slate-600">{paymentId || "PAY-XXXXXXXXXX"}</span>
            </div>
            <div className="flex justify-between items-center border-t border-slate-50 pt-4">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Amount Paid</span>
              <span className="text-base font-serif font-bold text-primary-deep">₹{amount || "0.00"}</span>
            </div>
            <div className="flex justify-between items-center border-t border-slate-50 pt-4">
              <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Status</span>
              <span className="px-2.5 py-0.5 bg-emerald-500 text-white text-[8px] font-black uppercase rounded-full shadow-sm">Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
            <Link href="/wallet" className="w-full">
              <button className="w-full py-3.5 bg-primary-deep text-white font-black rounded-xl uppercase tracking-widest text-[9px] hover:bg-primary-mist hover:text-primary-deep transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-deep/10">
                <Wallet size={14} />
                My Wallet
              </button>
            </Link>
            <Link href="/" className="w-full">
              <button className="w-full py-3.5 bg-white border border-slate-100 text-primary-deep font-black rounded-xl uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                <Home size={14} />
                Home
              </button>
            </Link>
          </div>

          <button className="mt-8 text-slate-300 hover:text-primary-deep text-[9px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 mx-auto">
            <Download size={12} />
            Download Receipt
          </button>
        </motion.div>
        
        <p className="text-center text-slate-300 text-[8px] uppercase font-black tracking-[0.4em] mt-8">
          OASIS GLOBAL FINANCE • SECURE TRANSACTION
        </p>
      </div>
    </div>
  );
};

const PaymentSuccessPage = () => {
  return (
    <Suspense fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary-mist border-t-transparent rounded-full animate-spin" />
        </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccessPage;
