'use client';

import { motion } from 'framer-motion';

const features = [
  { title: 'Architecture', desc: 'Timeless designs that redefine skylines.' },
  { title: 'Engineering', desc: 'Structural integrity that stands the test of time.' },
  { title: 'Craftsmanship', desc: 'Uncompromising attention to every detail.' },
  { title: 'Innovation', desc: 'Pioneering sustainable and smart construction.' },
];

export default function ProjectDetails() {
  return (
    <section id="projects" className="py-32 bg-black relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Built With Precision.</h2>
          <div className="w-24 h-1 bg-gold-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
