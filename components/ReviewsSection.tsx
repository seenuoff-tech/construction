'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "The level of professionalism and attention to detail from this team is unmatched. They transformed our vision into reality seamlessly, maintaining strict timelines without compromising on quality.",
    author: "Anonymous Client",
    role: "CEO, TechPark Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    text: "From planning to handover, the entire process was transparent and stress-free. The architectural design was brilliant, and the execution was flawless. Highly recommend them for luxury builds.",
    author: "Priya Natarajan",
    role: "Homeowner, Emerald Villas",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    text: "Their expertise in structural engineering and MEP coordination saved us time and resources. The weekly reporting kept us informed, ensuring zero surprises throughout the construction phase.",
    author: "Arunachalam V",
    role: "Director, V-Estates",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    text: "A truly remarkable experience. The team is dedicated, communicative, and passionate about building sustainable, beautiful spaces. They exceeded our expectations on every front.",
    author: "Kavitha Menon",
    role: "Founder, GreenSpaces",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    text: "Finding a reliable construction partner is hard, but they proved to be exceptional. Their QA/QC processes are stringent, and the final handover was incredibly smooth and organized.",
    author: "Mohammed Tariq",
    role: "Managing Partner, Skyline Developers",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    text: "They don't just build structures; they create masterpieces. The value engineering they brought to the table significantly improved our ROI. A fantastic team to work with.",
    author: "Siddharth Rao",
    role: "Investor",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Happy Customers</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#111827] rounded-[2rem] p-8 md:p-16 border border-white/5 overflow-hidden">
          
          {/* Background Number */}
          <div className="absolute top-8 right-8 text-[120px] md:text-[200px] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            {String(currentIndex + 1).padStart(2, '0')}
          </div>

          <div className="relative z-10 flex flex-col h-full min-h-[300px] justify-between">
            
            {/* Quote Icon */}
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8">
              <Quote size={32} />
            </div>

            {/* Review Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <p className="text-xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl font-light mb-12">
                  "{current.text}"
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={current.avatar} 
                      alt={current.author} 
                      className="w-14 h-14 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{current.author}</h4>
                      <p className="text-sm text-gray-500">{current.role}</p>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-4 self-start md:self-end">
                    <button 
                      onClick={prevReview}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      aria-label="Previous review"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button 
                      onClick={nextReview}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      aria-label="Next review"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
