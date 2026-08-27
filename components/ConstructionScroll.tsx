'use client';

import { motion } from 'framer-motion';

export default function ConstructionScroll() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Villa Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Static Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-[#FBB150] tracking-[0.3em] text-sm md:text-base font-semibold mb-4">CRAFTING TOMORROW</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Built From Vision.
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light mb-10">
          Precision, strength, and engineering come together from the ground up to craft your perfect home.
        </p>
        <button className="px-8 py-4 bg-[#FBB150] text-white font-bold tracking-widest text-sm hover:bg-[#e19f48] transition-all duration-300 rounded shadow-lg">
          EXPLORE OUR PROJECTS
        </button>
      </motion.div>
    </section>
  );
}
