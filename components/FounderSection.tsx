'use client';

import { motion } from 'framer-motion';

export default function FounderSection() {
  return (
    <section 
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg.jpg')" }}
    >
      {/* Overlay removed so the white background image is fully visible */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
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
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-200 shadow-2xl relative z-10"
              />
            </div>
            <h3 className="text-3xl font-semibold text-black mb-2">John123</h3>
            <p className="text-[#FBB150] font-bold tracking-wide uppercase text-sm">Managing Director & Chief Architect</p>
          </motion.div>

          {/* Right Side: Content & Heading */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Building visions into <span className="text-[#FBB150] italic">reality.</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
              "For over a decade, we have been committed to redefining luxury living and commercial spaces. Our focus remains on combining innovative architectural designs with impeccable construction quality to create landmarks that stand the test of time."
            </p>
            <div className="flex gap-4 items-center">
              <div className="h-[1px] w-12 bg-[#FBB150]"></div>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-semibold">A legacy of excellence</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
