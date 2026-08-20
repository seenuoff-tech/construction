'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

export default function ConstructionTextOverlays({ scrollYProgress }: Props) {
  // Section 1: 0% - 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [0.95, 1.05]);

  // Section 2: 20% - 40%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.4], [0.95, 1.05]);

  // Section 3: 40% - 60%
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], [50, -50]);
  const scale3 = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1.05]);

  // Section 4: 60% - 80%
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.8], [50, -50]);
  const scale4 = useTransform(scrollYProgress, [0.6, 0.8], [0.95, 1.05]);

  // Section 5: 80% - 100%
  const opacity5 = useTransform(scrollYProgress, [0.8, 0.85, 1, 1], [0, 1, 1, 1]);
  const y5 = useTransform(scrollYProgress, [0.8, 1], [50, 0]);
  const scale5 = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute text-center"
      >
        <p className="text-gold-400 tracking-[0.3em] text-sm md:text-base font-semibold mb-4">CRAFTING TOMORROW</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">Built From Vision.</h2>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">Every landmark begins with a foundation.</p>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2, scale: scale2 }}
        className="absolute text-center"
      >
        <p className="text-gold-400 tracking-[0.3em] text-sm md:text-base font-semibold mb-4">THE FOUNDATION</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">Where Every Story Begins.</h2>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">Precision, strength and engineering come together from the ground up.</p>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3, scale: scale3 }}
        className="absolute text-center"
      >
        <p className="text-gold-400 tracking-[0.3em] text-sm md:text-base font-semibold mb-4">THE STRUCTURE</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">Built To Stand Apart.</h2>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">Every column, floor and detail is engineered with purpose.</p>
      </motion.div>

      {/* Section 4 */}
      <motion.div 
        style={{ opacity: opacity4, y: y4, scale: scale4 }}
        className="absolute text-center"
      >
        <p className="text-gold-400 tracking-[0.3em] text-sm md:text-base font-semibold mb-4">THE FINAL FORM</p>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">Architecture, Perfected.</h2>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">From raw structure to refined architecture.</p>
      </motion.div>

      {/* Section 5 */}
      <motion.div 
        style={{ opacity: opacity5, y: y5, scale: scale5 }}
        className="absolute text-center pointer-events-auto"
      >
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">Built Beyond Expectations.</h2>
        <button className="px-8 py-4 bg-white text-black font-semibold tracking-widest text-sm hover:bg-gold-500 hover:text-white transition-all duration-300">
          EXPLORE OUR PROJECTS
        </button>
      </motion.div>

    </div>
  );
}
