'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Custom spring for smooth counting
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function AboutStats() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 250, suffix: "+", label: "Properties Delivered" },
    { value: 500, suffix: "+", label: "Happy Customers" },
    { value: 25, suffix: "+", label: "Projects Completed" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl hover:bg-white/[0.05] transition-colors"
            >
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tighter">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gold-500 font-medium tracking-widest uppercase text-xs md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
