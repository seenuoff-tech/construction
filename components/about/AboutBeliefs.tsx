'use client';

import { motion } from 'framer-motion';

const beliefs = [
  {
    title: "Trust",
    desc: "Transparent processes and honest communication from day one.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Quality",
    desc: "Uncompromising attention to construction, design and finishing.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Value",
    desc: "Properties selected and developed with long-term value in mind.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function AboutBeliefs() {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Large Statement */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 tracking-[0.2em] uppercase text-xs font-semibold mb-6"
          >
            What We Believe
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight max-w-4xl"
          >
            "Every property has a purpose. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">Every space has a story."</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beliefs.map((belief, idx) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Background Image with hover scale */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${belief.image}')` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-3xl font-bold text-white mb-3">{belief.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {belief.desc}
                </p>
                {/* Decorative Line */}
                <div className="h-[2px] w-0 bg-emerald-400 mt-6 transition-all duration-500 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
