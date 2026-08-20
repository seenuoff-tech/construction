'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-500 tracking-[0.2em] font-semibold mb-6">OUR LEGACY</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">We Build What Lasts.</h2>
          <p className="text-lg text-white/70 mb-6 leading-relaxed">
            For over two decades, we have been at the forefront of luxury architecture and premium construction. We don't just build structures; we engineer landmarks.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            Our approach combines uncompromising quality, visionary engineering, and timeless craftsmanship to deliver projects that define modern luxury living and commercial excellence.
          </p>
          <button className="border-b border-gold-500 text-white pb-2 hover:text-gold-400 hover:border-gold-400 transition-all uppercase tracking-widest text-sm">
            Discover Our Story
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-charcoal-900 overflow-hidden group">
            {/* Using the final completed building frame as a placeholder for the about image */}
            <img 
              src="/images/construction/120.jpg" 
              alt="Luxury Construction" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
