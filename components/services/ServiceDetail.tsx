'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ServiceDetailProps {
  index: number;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}

export default function ServiceDetail({ index, title, description, image, children }: ServiceDetailProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simple parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const isEven = index % 2 === 0;

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className={`flex flex-col gap-16 md:gap-24 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          
          {/* Text Content */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                {title}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
                {description}
              </p>
              
              {/* Optional Custom Content (like counters or process blocks) */}
              {children && (
                <div className="mt-8">
                  {children}
                </div>
              )}
            </motion.div>
          </div>

          {/* Image Content with Parallax */}
          <div className="flex-1 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden relative">
             <motion.div 
              className="absolute inset-0 bg-white z-10"
              initial={{ height: "100%", bottom: 0 }}
              animate={isInView ? { height: "0%" } : {}}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            />
            <motion.div 
              className="w-full h-[120%] -top-[10%] relative"
              style={{ y }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
