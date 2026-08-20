'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden flex items-center justify-center text-center">
      
      {/* Background with slight zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Let's Find the Right <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600">Property for You.</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Whether you are buying, selling, or looking for expert management, our team is ready to guide you home.
          </p>
          
          <Link 
            href="/contact" 
            className="px-10 py-5 bg-white text-black font-bold tracking-widest text-sm hover:bg-gold-500 hover:text-white transition-colors duration-300 rounded-full inline-flex items-center gap-2 group"
          >
            CONTACT OUR EXPERTS
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
    </section>
  );
}
