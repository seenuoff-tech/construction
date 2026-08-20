'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutStats from '@/components/about/AboutStats';
import AboutBeliefs from '@/components/about/AboutBeliefs';
import AboutExpertise from '@/components/about/AboutExpertise';
import AboutJourney from '@/components/about/AboutJourney';
import AboutWhyUs from '@/components/about/AboutWhyUs';
import AboutVisionMission from '@/components/about/AboutVisionMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  // --- HERO SECTION REFS & ANIMATIONS ---
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  // --- WHO WE ARE SECTION REFS & ANIMATIONS ---
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: whoWeAreScroll } = useScroll({
    target: whoWeAreRef,
    offset: ["start end", "end start"]
  });
  // Image moves upward slowly relative to scroll
  const imageY = useTransform(whoWeAreScroll, [0, 1], ["20%", "-20%"]);

  // Hero text animation setup
  const headingText = "We Don't Just Build Spaces. We Build Futures.";
  const words = headingText.split(" ");

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const heroWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  // Who we are sequential text setup
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="bg-black min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-end pb-24 md:pb-32 px-6 md:px-12"
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        >
          <motion.div className="w-full h-full" style={{ y: heroY }}>
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              className="h-[1px] w-12 md:w-24 bg-gold-400 origin-left"
            />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-white/80 uppercase tracking-[0.3em] text-xs font-semibold"
            >
              About Us
            </motion.span>
          </div>

          <motion.h1 
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] tracking-tight"
          >
            {words.map((word, index) => (
              <span key={index} className="inline-block mr-[0.25em] overflow-hidden">
                <motion.span variants={heroWordVariants} className="inline-block">
                  {word === "Futures." ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600 italic">
                      {word}
                    </span>
                  ) : word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
              We are a collective of visionaries, architects, and engineers dedicated to crafting landmarks that stand the test of time, marrying luxury with sustainable innovation.
            </p>
          </motion.div>
        </div>
      </section>


      {/* 2. WHO WE ARE SECTION */}
      <section 
        ref={whoWeAreRef}
        className="py-32 bg-[#050505] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side Text Content */}
            <motion.div 
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="order-2 lg:order-1"
            >
              <motion.div variants={textItemVariants} className="mb-6">
                <p className="text-gold-500 tracking-[0.2em] uppercase text-xs font-bold mb-4">
                  02 // Who We Are
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                  A New Perspective <br/> on <span className="italic font-light">Real Estate.</span>
                </h2>
              </motion.div>

              <motion.div variants={textItemVariants} className="h-[1px] w-full bg-white/10 my-8" />

              <div className="space-y-8">
                {/* Established & Location */}
                <motion.div variants={textItemVariants} className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest text-xs mb-2">Established</h4>
                    <p className="text-2xl text-white font-medium">Since 2012</p>
                  </div>
                  <div>
                    <h4 className="text-white/40 uppercase tracking-widest text-xs mb-2">Service Area</h4>
                    <p className="text-2xl text-white font-medium">Tamil Nadu, India</p>
                  </div>
                </motion.div>

                {/* Specialization */}
                <motion.div variants={textItemVariants}>
                  <h4 className="text-white/40 uppercase tracking-widest text-xs mb-2">Specialization</h4>
                  <p className="text-xl text-gray-300 font-light leading-relaxed">
                    Luxury Residential Villas, Premium Commercial Spaces, and Exclusive Gated Plots.
                  </p>
                </motion.div>

                {/* Core Approach */}
                <motion.div variants={textItemVariants}>
                  <h4 className="text-white/40 uppercase tracking-widest text-xs mb-2">Our Core Approach</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We blend innovative design with sustainable engineering to create spaces that don't just exist, but inspire. Our approach is entirely client-first, ensuring complete transparency, robust QA/QC, and uncompromising building quality from site survey to handover.
                  </p>
                </motion.div>
              </div>

            </motion.div>

            {/* Right Side Image with Parallax */}
            <div className="order-1 lg:order-2 h-[500px] lg:h-[800px] w-full relative rounded-3xl overflow-hidden border border-white/10">
              <motion.div
                className="w-full h-[140%] -top-[20%] absolute left-0"
                style={{ y: imageY }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1613490900233-141c5d0132b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Luxury Property" 
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay to blend with dark theme */}
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <AboutStats />
      <AboutBeliefs />
      <AboutExpertise />
      {/* Spacer to prevent overlap between scroll sections */}
      <div className="h-32 md:h-48 bg-black w-full" />
      <AboutJourney />
      <AboutWhyUs />
      <AboutVisionMission />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
