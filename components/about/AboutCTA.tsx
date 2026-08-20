'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image with slow cinematic zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
      </motion.div>

      {/* Dark overlay that slowly appears on scroll-in */}
      <motion.div 
        className="absolute inset-0 z-10 bg-black/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        
        {/* Animated Heading Reveal */}
        <div className="overflow-hidden mb-12">
          <motion.h2 
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight"
          >
            Your Next Address <br className="hidden md:block" />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600">Starts Here.</span>
          </motion.h2>
        </div>

        {/* CTA Buttons Reveal */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/#projects" 
            className="px-8 py-4 bg-white text-black font-semibold tracking-widest text-sm hover:bg-gold-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group rounded-full"
          >
            EXPLORE PROPERTIES
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </Link>
          
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold tracking-widest text-sm hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 rounded-full"
          >
            TALK TO OUR TEAM
          </Link>
        </motion.div>

      </div>
      
    </section>
  );
}
