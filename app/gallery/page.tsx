"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, X, Filter } from "lucide-react";


const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filters = ["All", "Lounge", "Art", "Tech", "Roastery"];
  
  const images = [
    { id: 1, category: "Lounge", title: "The Mist Lounge Interior", desc: "Sophisticated biophilic design meets high-end lounging." },
    { id: 2, category: "Art", title: "Artist Grooming Pod", desc: "Dedicated spaces for creators to evolve." },
    { id: 3, category: "Tech", title: "Cluster Hub Interface", desc: "Our proprietary OASIS monitoring dashboard." },
    { id: 4, category: "Roastery", title: "Precision Micro-Roasting", desc: "Technically advanced coffee engineering." },
    { id: 5, category: "Lounge", title: "Zen Workstations", desc: "Where productivity meets architectural calm." },
    { id: 6, category: "Art", title: "Atmospheric Gallery", desc: "Showcasing global creative excellence." },
  ];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <>
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-mist/5 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Visual Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8">The <span className="text-primary-mist italic">Precision</span> Gallery</h1>
            <p className="max-w-2xl mx-auto text-white/40 text-lg font-light">
              Exploring the architectural intersections of T-CAFE MIST across spaces, art, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 border-b border-primary-deep/5 bg-white sticky top-[80px] z-30 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap justify-center gap-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeFilter === filter 
                  ? "bg-primary-deep text-white shadow-lg" 
                  : "bg-primary-deep/5 text-primary-deep/40 hover:bg-primary-deep/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative h-[500px] rounded-[48px] overflow-hidden cursor-pointer bg-primary-deep/5 border border-primary-deep/5"
                  onClick={() => setSelectedImage(img.id)}
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/10 to-primary-mist/5" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Camera size={100} />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="text-accent-gold text-[10px] font-black uppercase tracking-widest mb-4">{img.category}</span>
                    <h3 className="text-2xl font-serif text-white mb-2">{img.title}</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-6">{img.desc}</p>
                    <div className="flex items-center gap-3 text-primary-mist text-[10px] font-black uppercase tracking-widest">
                      <Maximize2 size={16} /> View Details
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox placeholder logic could go here */}

    </>
  );
};

export default Gallery;
