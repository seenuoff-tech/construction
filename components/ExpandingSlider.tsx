'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const collection = [
  {
    id: 1,
    title: 'Modern Mansion',
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'Luxury Villa',
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Penthouse Interior',
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    title: 'Minimalist Exterior',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 5,
    title: 'City Architecture',
    src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 6,
    title: 'Coastal Villa',
    src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 7,
    title: 'Luxury Estate',
    src: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
];

export default function ExpandingSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === collection.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? collection.length - 1 : prev - 1));
  };

  return (
    <section className="py-32 bg-charcoal-900 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-500 tracking-[0.2em] font-semibold mb-4 text-sm">PORTFOLIO</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Explore the Collection</h2>
          </motion.div>
        </div>

        <div className="flex gap-2 md:gap-4 h-[60vh] md:h-[70vh] w-full">
          {collection.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveIndex(index)}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                  isActive ? 'flex-[4] md:flex-[5]' : 'flex-[1]'
                }`}
              >
                <motion.img
                  layout
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Dark overlay for inactive items to make the active one pop */}
                <motion.div 
                  className="absolute inset-0 bg-black/40"
                  animate={{ opacity: isActive ? 0 : 0.6 }}
                  transition={{ duration: 0.7 }}
                />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    >
                      <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center mt-12 gap-6">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
