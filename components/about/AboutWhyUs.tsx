'use client';

import { motion } from 'framer-motion';

const points = [
  "Transparent Transactions",
  "Prime Locations",
  "Quality Construction",
  "Professional Support",
  "Customer-Centric Approach",
  "Long-Term Value"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Custom SVG Checkmark animation
const Checkmark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 shrink-0 mt-1">
    <motion.path 
      d="M20 6L9 17L4 12" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    />
  </svg>
);

export default function AboutWhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden flex items-center min-h-screen">
      
      {/* Slow zooming background image */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Large Heading */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 tracking-[0.2em] uppercase text-sm font-semibold mb-6"
          >
            Why Choose Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white leading-[1.1]"
          >
            Built on Trust. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 italic font-light">Driven by Vision.</span>
          </motion.h2>
        </div>

        {/* Right Side: Animated List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-6 md:pl-12 border-l border-white/10"
        >
          {points.map((point, idx) => (
            <motion.div key={idx} variants={pointVariants} className="flex items-start gap-4">
              <Checkmark />
              <p className="text-2xl md:text-3xl font-medium text-white/90">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
