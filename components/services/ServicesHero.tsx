'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background Image with Parallax & Slow Zoom */}
      <motion.div 
        style={{ y, scale, opacity }} 
        className="absolute inset-0 z-0"
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
          >
            <span className="text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
              Our Services
            </span>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight"
          >
            Real Estate Solutions Designed Around <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600 italic font-light">Your Future.</span>
          </motion.h1>
        </div>
      </div>

    </section>
  );
}
