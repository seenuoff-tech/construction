'use client';

import { useRef, useEffect, useState } from 'react';

const portfolioItems = [
  {
    title: "Marina Heights",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Nexus Tech Park",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Oakwood Villas",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Serenity Estates",
    category: "Land & Plots",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lumina Residences",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesPortfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    
    const el = scrollRef.current;
    if (!el) return;

    const intervalId = setInterval(() => {
      if (el) {
        el.scrollLeft += 1;
        // If reached the end, loop back to start (optional) or just bounce back
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  // Hijack vertical wheel scroll to move horizontally when hovered
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      
      // Calculate boundaries safely with a generous tolerance for zoom/scaling issues
      const atStart = el.scrollLeft <= 10;
      const atEnd = Math.abs(el.scrollWidth - el.clientWidth - el.scrollLeft) <= 10;
      
      // Allow vertical scrolling if we're at the very beginning and scrolling up
      if (atStart && e.deltaY < 0) return;
      
      // Allow vertical scrolling if we're at the very end and scrolling down
      if (atEnd && e.deltaY > 0) return;

      e.preventDefault(); // Hijack scroll
      
      if (isScrolling) return;
      
      // Prevent multiple triggers to ensure one scroll = one slide
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 350); 

      // Calculate width of one slide + gap (gap-8 is 32px)
      const slideWidth = (el.children[0] as HTMLElement).offsetWidth + 32;
      
      el.scrollBy({
        left: e.deltaY > 0 ? slideWidth : -slideWidth,
        behavior: 'smooth'
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-black border-t border-white/5">
      
      <div className="px-6 md:px-12 mb-12">
        <p className="text-white/40 tracking-[0.2em] uppercase text-xs font-semibold mb-4">
          Service Portfolio
        </p>
        <h2 className="text-4xl md:text-6xl font-serif text-white">
          Proven Excellence
        </h2>
      </div>

      {/* Horizontal Track */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        className="flex gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth w-full snap-x snap-mandatory"
      >
        {portfolioItems.map((item, index) => (
          <div 
            key={index}
            className="relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[400px] md:h-[600px] group overflow-hidden rounded-xl cursor-pointer snap-start"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-gold-400 uppercase tracking-widest text-xs font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
        {/* Spacer */}
        <div className="w-[10vw] flex-shrink-0" />
      </div>

    </section>
  );
}
