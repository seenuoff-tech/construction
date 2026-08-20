'use client';

import { motion } from 'framer-motion';

export default function FounderSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo, Name, Designation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gold-500/20 blur-2xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Founder" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/10 shadow-2xl relative z-10"
              />
            </div>
            <h3 className="text-3xl font-serif text-white mb-2">John123</h3>
            <p className="text-gold-500 font-medium tracking-wide uppercase text-sm">Managing Director & Chief Architect</p>
          </motion.div>

          {/* Right Side: Content & Heading */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building visions into <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600 italic">reality.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8">
              "For over a decade, we have been committed to redefining luxury living and commercial spaces. Our focus remains on combining innovative architectural designs with impeccable construction quality to create landmarks that stand the test of time."
            </p>
            <div className="flex gap-4 items-center">
              <div className="h-[1px] w-12 bg-gold-500/50"></div>
              <span className="text-white/40 text-sm uppercase tracking-widest">A legacy of excellence</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
