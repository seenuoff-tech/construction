'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Vikram Singhania",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Priya Rajan",
    role: "Director of Architecture",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Arun Krishnan",
    role: "Head of Project Management",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Meera Reddy",
    role: "VP of Sales & Strategy",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function AboutTeam() {
  return (
    <section className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white max-w-2xl leading-tight"
          >
            The People Behind <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600 italic">Every Property.</span>
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Mask Reveal and Hover Zoom */}
              <div className="relative h-[450px] overflow-hidden rounded-2xl mb-6">
                <motion.div 
                  className="absolute inset-0 bg-white z-10"
                  initial={{ top: "0%" }}
                  whileInView={{ top: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: [0.77, 0, 0.175, 1] }}
                />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                {/* Dark gradient overlay for better contrast on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Info */}
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
