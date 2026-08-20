'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const services = [
  { 
    num: '01', 
    title: 'Residential Construction', 
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' 
  },
  { 
    num: '02', 
    title: 'Commercial Construction', 
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' 
  },
  { 
    num: '03', 
    title: 'Luxury Architecture', 
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' 
  },
  { 
    num: '04', 
    title: 'Interior Development', 
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' 
  },
  { 
    num: '05', 
    title: 'Renovation & Restoration', 
    src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' 
  },
  { 
    num: '06', 
    title: 'Project Management', 
    src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' 
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section id="services" className="py-32 bg-black text-white overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-500 tracking-[0.2em] font-semibold mb-4 text-sm uppercase">Expertise</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our Services</h2>
          </motion.div>
          
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 md:gap-4 h-[60vh] md:h-[70vh] w-full">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={service.num}
                layout
                onClick={() => setActiveIndex(index)}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                  isActive ? 'flex-[4] md:flex-[5]' : 'flex-[1]'
                }`}
              >
                <motion.img
                  layout
                  src={service.src}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Dark overlay for inactive items */}
                <motion.div 
                  className="absolute inset-0 bg-black/50"
                  animate={{ opacity: isActive ? 0 : 0.7 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Number badge (always visible) */}
                <div className={`absolute top-4 right-4 text-sm font-bold tracking-widest ${isActive ? 'text-white' : 'text-white/50 group-hover:text-gold-500'} transition-colors z-10 drop-shadow-md`}>
                  {service.num}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    >
                      <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
