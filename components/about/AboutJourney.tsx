'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const milestones = [
  { 
    year: "2018", 
    title: "Company Founded", 
    desc: "A small team with a massive vision started operating out of a tiny office.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
  },
  { 
    year: "2020", 
    title: "First Major Project", 
    desc: "Successfully delivered our first luxury residential complex ahead of schedule.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
  },
  { 
    year: "2022", 
    title: "Expanded Operations", 
    desc: "Entered the commercial real estate space, setting new benchmarks in office design.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
  },
  { 
    year: "2024", 
    title: "New Horizons", 
    desc: "Launched exclusive gated plots and expanded our services across multiple cities.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
  },
  { 
    year: "2026", 
    title: "Building the Future", 
    desc: "Embracing sustainable architecture and digital twins for our upcoming iconic towers.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
  }
];

export default function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = Math.floor(latest * milestones.length);
    const safeIndex = Math.max(0, Math.min(rawIndex, milestones.length - 1));
    setActiveIndex(safeIndex);
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${milestone.image}')` }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: activeIndex === idx ? 0.3 : 0,
                scale: activeIndex === idx ? 1 : 1.1 
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full py-32">
          
          {/* Left Side: Timeline Years List */}
          <div className="md:col-span-4 lg:col-span-3 flex h-full items-center">
            
            {/* Timeline Vertical Line Container */}
            <div className="w-[2px] bg-white/10 h-[60vh] relative mr-8 rounded-full">
              <motion.div 
                className="w-full h-full bg-gold-500 origin-top"
                style={{ scaleY: scrollYProgress }}
              />
              
              {/* Dots for each milestone */}
              {milestones.map((_, idx) => (
                <div 
                  key={idx}
                  className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-colors duration-500 ${activeIndex >= idx ? 'bg-gold-500' : 'bg-white/20'}`}
                  style={{ top: `${(idx / (milestones.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                />
              ))}
            </div>

            {/* Years Column */}
            <div className="flex flex-col justify-between h-[60vh] py-2 w-full">
              {milestones.map((milestone, idx) => {
                const isActive = activeIndex === idx;
                const isPast = idx < activeIndex;
                
                return (
                  <div 
                    key={milestone.year}
                    className="relative cursor-default"
                  >
                    <h2 
                      className={`font-serif transition-all duration-700 ease-out origin-left ${
                        isActive 
                          ? 'text-5xl md:text-7xl font-bold text-gold-400 scale-100' 
                          : isPast 
                            ? 'text-3xl md:text-4xl text-white/40 scale-90' 
                            : 'text-3xl md:text-4xl text-white/20 scale-90'
                      }`}
                    >
                      {milestone.year}
                    </h2>
                  </div>
                )
              })}
            </div>

          </div>

          {/* Right Side: Active Milestone Content */}
          <div className="md:col-span-8 lg:col-span-9 h-[60vh] flex items-center pl-0 md:pl-12 lg:pl-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex} // Key forces re-animation when index changes
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <div className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-6">
                  Milestone {activeIndex + 1}
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {milestones[activeIndex].title}
                </h3>
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
                  {milestones[activeIndex].desc}
                </p>
                
                <div className="mt-12 h-[1px] w-24 bg-gradient-to-r from-gold-500 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
