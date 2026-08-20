'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const servicesList = [
  {
    num: "01",
    title: "RESIDENTIAL PROPERTIES",
    desc: "Luxury villas and premium apartments crafted for elevated living. We prioritize locations with excellent connectivity, premium amenities, and long-term value appreciation.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "02",
    title: "COMMERCIAL PROPERTIES",
    desc: "State-of-the-art office spaces and retail hubs designed for growth. Securing prime real estate to ensure your business has the foundation it needs to thrive.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "03",
    title: "LAND & PLOTS",
    desc: "Premium, clear-titled plots in rapidly appreciating locations. Invest in carefully vetted land parcels perfect for custom homes or future capital appreciation.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "04",
    title: "PROPERTY INVESTMENT",
    desc: "Strategic real estate portfolio management for high ROI. Our advisory team analyzes market trends and rental yields to build a robust property portfolio.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    num: "05",
    title: "PROPERTY MANAGEMENT",
    desc: "Comprehensive maintenance, leasing, and tenant management. Protect your investment without the hassle, giving you complete peace of mind.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function MainServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

  const getCardStyle = (i: number, active: number) => {
    const diff = i - active;
    
    // If it's a previous card (already viewed), hide it by sliding right and fading out
    if (diff < 0) {
      return {
        opacity: 0,
        x: 200,
        scale: 0.8,
        rotate: 10,
        zIndex: 0,
        pointerEvents: "none" as const
      };
    }

    // Active or upcoming cards fan out to the left
    return {
      opacity: 1,
      // On mobile, reduce the horizontal spread so it doesn't overflow
      x: typeof window !== 'undefined' && window.innerWidth < 768 ? diff * -20 : diff * -80,
      y: diff * 20,
      scale: 1 - diff * 0.05,
      rotate: diff * -4,
      zIndex: 10 - diff,
      pointerEvents: diff === 0 ? "auto" as const : "none" as const
    };
  };

  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-16 px-6">
        <h2 className="text-white/40 tracking-[0.3em] uppercase text-sm font-semibold mb-4">
          Core Focus
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif text-white">
          Our Main Services
        </h3>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-7xl mx-auto h-[600px] md:h-[650px] flex items-center justify-center perspective-1000">
        
        <AnimatePresence>
          {servicesList.map((service, idx) => {
            const style = getCardStyle(idx, activeIndex);
            
            return (
              <motion.div
                key={service.num}
                initial={false}
                animate={{
                  opacity: style.opacity,
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  rotate: style.rotate,
                  zIndex: style.zIndex,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[90vw] md:w-[600px] lg:w-[700px] h-[500px] md:h-[600px] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                style={{ pointerEvents: style.pointerEvents, transformOrigin: "bottom right" }}
              >
                {/* Card Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full p-8 md:p-12">
                  <div className="flex justify-between items-start mb-auto">
                    <span className="text-gold-500 font-serif text-5xl md:text-7xl font-light italic opacity-50">
                      {service.num}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 backdrop-blur-md">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-3xl md:text-5xl font-serif text-white mb-6 uppercase leading-tight">
                      {service.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                      {service.desc}
                    </p>
                    
                    <Link 
                      href={`/projects?category=${service.title === "LAND & PLOTS" ? "Land" : service.title.split(' ')[0]}`}
                      className="inline-flex items-center gap-2 text-gold-400 text-sm tracking-widest uppercase font-bold hover:text-white transition-colors"
                    >
                      Explore Projects <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-12 z-20">
        <button 
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Progress Indicators */}
        <div className="flex gap-3">
          {servicesList.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-12 bg-gold-500' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

    </section>
  );
}
