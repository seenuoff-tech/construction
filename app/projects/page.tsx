'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Dummy Projects Data
const allProjects = [
  {
    id: 1,
    title: "The Emerald Tower",
    location: "Chennai, Tamil Nadu",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    size: "large" // Spans more grid columns/rows
  },
  {
    id: 2,
    title: "Oakwood Villas",
    location: "Coimbatore, Tamil Nadu",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: "normal"
  },
  {
    id: 3,
    title: "Marina Heights",
    location: "Chennai, Tamil Nadu",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: "normal"
  },
  {
    id: 4,
    title: "Nexus Tech Park",
    location: "Trichy, Tamil Nadu",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: "large"
  },
  {
    id: 5,
    title: "Serenity Estates",
    location: "Ooty, Tamil Nadu",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: "normal"
  },
  {
    id: 6,
    title: "Lumina Residences",
    location: "Chennai, Tamil Nadu",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    size: "normal"
  }
];

const categories = ["All", "Residential", "Commercial", "Luxury"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
            Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600 italic font-light">Masterpieces.</span>
          </h1>
          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A curated portfolio of our most iconic developments. We don't just build spaces; we engineer experiences that stand the test of time.
          </p>
        </motion.div>
      </section>

      {/* 2. Category Filters */}
      <section className="sticky top-[80px] z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-4 py-2 text-sm md:text-base font-medium tracking-widest uppercase transition-colors"
            >
              <span className={`relative z-10 transition-colors duration-300 ${activeCategory === category ? 'text-black' : 'text-gray-400 hover:text-white'}`}>
                {category}
              </span>
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gold-400 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Premium Project Grid (Masonry Style) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                // Make "large" projects span 2 columns and 2 rows on large screens
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                {/* Background Image: Grayscale by default, full color on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                
                {/* Always-on subtle gradient, darkens significantly on hover to reveal text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content Reveal */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top: Category Tag */}
                  <div className="self-start px-4 py-1 border border-white/20 rounded-full text-xs tracking-widest uppercase font-semibold text-white/80 backdrop-blur-sm opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.category}
                  </div>

                  {/* Bottom: Title & Details */}
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {project.location}
                    </p>
                    
                    {/* View Button */}
                    <div className="flex items-center gap-2 text-gold-400 text-sm tracking-widest font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      View Project <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Strong CTA Section */}
      <section className="relative py-32 bg-black border-t border-white/10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl px-6"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white leading-tight">
            Ready to Build <br /> Your Vision?
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Connect with our experts today and take the first step towards a masterpiece of your own.
          </p>
          <Link 
            href="/contact" 
            className="px-10 py-5 bg-gold-500 text-black font-semibold tracking-widest text-sm hover:bg-white transition-colors duration-300 rounded-full inline-flex items-center gap-2 group"
          >
            START A PROJECT
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
