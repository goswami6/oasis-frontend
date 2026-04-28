"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const NewsPage = () => {
  const posts = [
    {
      date: "Oct 12, 2026",
      category: "Lifestyle",
      title: "The Art of the Roast: Engineering the Perfect Cup",
      desc: "An inside look at our technical approach to micro-roasting and precision brewing. Discover how OASIS uses molecular technology to extract the perfect notes from every bean.",
      image: "/assets/blog_roast.png"
    },
    {
      date: "Oct 05, 2026",
      category: "Expansion",
      title: "Q3 Roadmap: Expanding the MIST Footprint",
      desc: "Analyzing our strategic entry into Tier-2 markets and the growth of the Cluster Model. With a 300% YoY growth, OASIS is setting the standard for scalable premium cafes.",
      image: "/assets/blog_expansion.png"
    },
    {
      date: "Sep 28, 2026",
      category: "Technology",
      title: "OASIS 2.0: The Future of Café Loyalty",
      desc: "How our closed-loop credit system is redefining customer retention in the digital age. Learn about the new Tier upgrades for Platinum members.",
      image: "/assets/blog_tech.png"
    },
    {
      date: "Sep 15, 2026",
      category: "Sustainability",
      title: "Zero-Waste Nodes: A Greener Tomorrow",
      desc: "Our commitment to achieving carbon-neutral operations across all our Kiosk and Express models by 2028. Read our full sustainability report.",
      image: "/assets/blog_eco.png" // Placeholder, might use a fallback or general image
    },
    {
      date: "Aug 22, 2026",
      category: "Innovation",
      title: "Biophilic Design in the Premium Model",
      desc: "Exploring the psychological and health benefits of our lush, plant-integrated environments in the newly launched Premium Green Cafe models.",
      image: "/assets/blog_design.png" // Placeholder
    },
    {
      date: "Aug 10, 2026",
      category: "Community",
      title: "OASIS Founders Meet: Recap",
      desc: "A look back at the annual franchise partners summit in Silicon Valley, where the vision for the next decade of coffee was laid out.",
      image: "/assets/blog_meetup.png" // Placeholder
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-mist/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold font-bold tracking-[0.4em] uppercase text-[11px] mb-6 block flex items-center justify-center gap-3">
              <BookOpen size={14} /> Brand Insights
            </span>
            <h1 className="text-4xl md:text-7xl font-serif text-primary-deep mb-8">
              OASIS <span className="text-primary-mist italic">Editorial</span>
            </h1>
            <p className="text-primary-deep/60 text-lg md:text-xl font-light leading-relaxed">
              Stay updated with the latest technological innovations, expansion roadmaps, and community stories from the OASIS ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Featured Post (First Post) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-20"
        >
          <div className="relative h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden border border-primary-deep/5 group cursor-pointer shadow-[0_20px_50px_rgba(15,47,42,0.1)] hover:shadow-[0_30px_60px_rgba(15,47,42,0.15)] transition-all duration-500">
            {/* Fallback color if image is missing */}
            <div className="absolute inset-0 bg-primary-deep/10" />
            <Image 
              src={posts[0].image} 
              alt={posts[0].title} 
              fill 
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
              onError={(e: any) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
              <span className="inline-block px-6 py-2 rounded-full bg-accent-gold text-white text-[10px] font-black uppercase tracking-widest w-fit mb-6 shadow-lg">
                {posts[0].category}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 group-hover:text-primary-mist transition-colors max-w-3xl">
                {posts[0].title}
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mb-8 font-light">
                {posts[0].desc}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} className="text-primary-mist" /> {posts[0].date}
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-mist hover:text-white transition-all group-hover:translate-x-2">
                  Read Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white rounded-[32px] border border-primary-deep/5 overflow-hidden transition-all duration-500 shadow-[0_10px_30px_rgba(15,47,42,0.05)] hover:shadow-[0_20px_50px_rgba(15,47,42,0.1)] hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-primary-deep/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  onError={(e: any) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-primary-deep/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-primary-deep text-[9px] font-black uppercase tracking-widest shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-primary-deep/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar size={12} className="text-accent-gold" /> {post.date}
                </div>
                <h3 className="text-2xl font-serif text-primary-deep mb-4 group-hover:text-primary-mist transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-primary-deep/60 text-sm font-light leading-relaxed mb-8 line-clamp-3 flex-grow">
                  {post.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-deep/50 group-hover:text-primary-mist transition-all">
                  Read Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 rounded-full border border-primary-deep/10 text-primary-deep font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary-deep hover:text-white transition-all shadow-xl">
            Load More Articles
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewsPage;
