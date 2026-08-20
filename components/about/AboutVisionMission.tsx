'use client';

import { motion } from 'framer-motion';

export default function AboutVisionMission() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
          
          {/* Vertical Animated Divider (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 overflow-hidden bg-white/5">
            <motion.div 
              className="w-full h-full bg-gold-500 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            />
          </div>

          {/* Vision Side */}
          <div className="md:pr-24 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight font-light">
                “To redefine the way people experience real estate by creating spaces that inspire <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 italic">better living, working and investing.</span>”
              </p>
            </motion.div>
          </div>

          {/* Horizontal Divider for Mobile */}
          <motion.div 
            className="md:hidden h-[1px] w-full bg-white/10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Mission Side */}
          <div className="md:pl-24 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-emerald-500 tracking-[0.3em] uppercase text-xs font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight font-light">
                “To deliver thoughtfully planned properties with uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 italic">transparency, quality and lasting value.</span>”
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
