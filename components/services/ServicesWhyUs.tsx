'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Eye, Award, Headset } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Unwavering Trust",
    desc: "Built on a foundation of integrity, we ensure secure and legally sound transactions every step of the way."
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    desc: "No hidden costs, no surprises. We maintain open communication and provide clear documentation."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "Decades of combined experience in luxury real estate, architecture, and project management."
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    desc: "A personalized concierge approach to customer service, available to you before, during, and after handover."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ServicesWhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">
              The Gold Standard in Real Estate
            </h3>
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {reasons.map((reason, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col items-start group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-500">
                <reason.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                {reason.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
