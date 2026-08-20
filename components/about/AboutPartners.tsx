'use client';

import { motion } from 'framer-motion';

// Dummy logos (using simple text/styled blocks for demo, normally these would be SVGs or Images)
const partners = [
  "RERA APPROVED",
  "ISO 9001:2015",
  "GREEN BUILDING COUNCIL",
  "HDFC BANK PARTNER",
  "SBI APPROVED",
  "CREDAI MEMBER",
  "L&T CONSTRUCTION",
  "AWWWARDS WINNER 2024"
];

// Duplicate the array to create a seamless infinite loop
const marqueeItems = [...partners, ...partners];

export default function AboutPartners() {
  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5">
      
      <div className="text-center mb-16">
        <p className="text-white/40 tracking-[0.2em] uppercase text-xs font-semibold">
          Trust & Certifications
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left Fade Overlay */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        
        {/* Marquee Track */}
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, // Adjust speed here
            ease: "linear",
            repeat: Infinity
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center px-12 md:px-24"
            >
              {/* Dummy Logo Block */}
              <div className="text-xl md:text-3xl font-bold font-serif text-white/20 group-hover:text-white/40 transition-colors duration-500 select-none">
                {item}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Fade Overlay */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      </div>
    </section>
  );
}
