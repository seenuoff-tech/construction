'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const expertiseItems = [
  {
    title: "Residential",
    desc: "Homes designed around modern lifestyles, offering comfort, luxury, and unmatched elegance.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Commercial",
    desc: "Strategic spaces for businesses and investments that foster growth and productivity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Land & Plots",
    desc: "Well-selected locations with immense future potential for personalized development.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Investment",
    desc: "Property opportunities focused meticulously on long-term value and high returns.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Interior Design",
    desc: "Crafting elegant, functional interiors that reflect your personal style and enhance daily living.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Project Management",
    desc: "End-to-end execution with stringent quality control, ensuring timely delivery and peace of mind.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Sustainable Architecture",
    desc: "Eco-friendly designs prioritizing energy efficiency, natural lighting, and green building practices.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function AboutExpertise() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track vertical scroll within this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // We want to translate exactly (TotalWidth - 100vw) to the left.
  // Using useMotionTemplate, we can dynamically calculate `calc(-100% + 100vw)` 
  // so it works perfectly across all screen sizes (mobile to desktop) without leaving empty space.
  const xPercent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xVw = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x = useMotionTemplate`calc(${xPercent}% + ${xVw}vw)`;

  return (
    // The container needs to be very tall to allow scrolling
    // 700vh gives us enough vertical scroll distance to smoothly animate 7 items
    <section ref={targetRef} className="relative h-[700vh] bg-black">
      
      {/* Sticky container that stays on screen while scrolling vertically */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Header (Fixed within sticky) */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <p className="text-white/40 tracking-[0.2em] uppercase text-xs font-semibold mb-4">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Areas of Focus
          </h2>
        </div>

        {/* The horizontally moving track */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 pt-[250px] md:pt-[300px]">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] flex-shrink-0 relative rounded-3xl overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="text-gold-500 font-bold text-xl mb-4">0{index + 1}</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{item.title}</h3>
                <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          {/* Spacer to allow scrolling past the last item comfortably */}
          <div className="w-[10vw] flex-shrink-0" />
        </motion.div>
      </div>
      
    </section>
  );
}
