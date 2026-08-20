'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-40 bg-charcoal-950 overflow-hidden flex items-center justify-center">
      {/* Background cinematic element */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/construction/120.jpg" 
          alt="Completed Vision Background"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-8"
      >
        <p className="text-gold-500 tracking-[0.3em] font-semibold mb-6">THE NEXT STEP</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Let's Build Something Extraordinary.
        </h2>
        <p className="text-xl text-white/70 mb-12 font-light">
          Your vision deserves to become a landmark. Partner with us to bring it to life.
        </p>
        <button className="px-10 py-5 bg-gold-600 hover:bg-gold-500 text-white font-semibold tracking-widest text-sm transition-all duration-300 shadow-[0_0_20px_rgba(180,138,71,0.2)] hover:shadow-[0_0_30px_rgba(180,138,71,0.5)]">
          START YOUR PROJECT
        </button>
      </motion.div>
    </section>
  );
}
