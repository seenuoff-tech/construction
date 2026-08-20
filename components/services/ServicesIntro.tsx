'use client';

import { motion } from 'framer-motion';

export default function ServicesIntro() {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Slide-in */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
              Expertise that covers every phase of the <span className="italic text-gray-400">real estate lifecycle.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you are looking to buy a luxury home, invest in commercial spaces, or require end-to-end property management, our comprehensive services are tailored to meet the highest standards of excellence.
            </p>
            <div className="w-24 h-[1px] bg-gold-500" />
          </motion.div>

          {/* Right Image Reveal */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-white z-10"
              initial={{ top: "0%" }}
              whileInView={{ top: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            />
            <img 
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Architecture Concept"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
