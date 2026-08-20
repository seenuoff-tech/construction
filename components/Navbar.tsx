'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 bg-transparent`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold tracking-widest text-white">
          
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center space-x-12">
        <Link href="/" className="text-sm tracking-wide text-white/80 hover:text-gold-400 transition-colors">Home</Link>
        <Link href="/projects" className="text-sm tracking-wide text-white/80 hover:text-gold-400 transition-colors">Projects</Link>
        <Link href="/about" className="text-sm tracking-wide text-white/80 hover:text-gold-400 transition-colors">About</Link>
        <Link href="/services" className="text-sm tracking-wide text-white/80 hover:text-gold-400 transition-colors">Services</Link>
        <Link href="/contact" className="text-sm tracking-wide text-white/80 hover:text-gold-400 transition-colors">Contact</Link>
      </div>

      <div className="flex-1 flex justify-end">
        <button className="px-6 py-2.5 text-sm tracking-widest text-white border border-gold-500/50 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(180,138,71,0.3)] transition-all duration-300">
          START A PROJECT
        </button>
      </div>
    </motion.nav>
  );
}
