'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: "Consultation",
    desc: "Understanding your vision, requirements, and long-term goals.",
    icon: "01"
  },
  {
    title: "Selection",
    desc: "Curating a tailored list of properties that match your exact criteria.",
    icon: "02"
  },
  {
    title: "Site Visit",
    desc: "Guided tours with our experts to experience the space firsthand.",
    icon: "03"
  },
  {
    title: "Documentation",
    desc: "Seamless legal and financial processing with complete transparency.",
    icon: "04"
  },
  {
    title: "Handover",
    desc: "The keys to your future, delivered with our signature luxury experience.",
    icon: "05"
  }
];

export default function ServicesProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = Math.floor(latest * steps.length);
    const safeIndex = Math.max(0, Math.min(rawIndex, steps.length - 1));
    setActiveIndex(safeIndex);
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Sticky Header & Progress List */}
          <div className="flex flex-col">
            <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4">
              Our Process
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-16">
              How We Work
            </h3>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              
              {/* Progress Line */}
              <motion.div 
                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gold-500 origin-top"
                style={{ scaleY: scrollYProgress }}
              />

              {steps.map((step, idx) => {
                const isActive = activeIndex >= idx;
                return (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className={`absolute -left-[37px] top-2 w-4 h-4 rounded-full border-2 bg-black transition-colors duration-500 ${isActive ? 'border-gold-500' : 'border-white/20'}`} />
                    
                    <h4 className={`text-2xl font-serif transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/30'}`}>
                      {step.title}
                    </h4>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Active Step Details */}
          <div className="h-64 flex items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="text-8xl font-serif text-white/5 mb-6">
                  {steps[activeIndex].icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {steps[activeIndex].title}
                </h3>
                <p className="text-gray-400 text-xl leading-relaxed">
                  {steps[activeIndex].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
