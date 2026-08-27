'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Building2, HeadphonesIcon } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* LEFT: Logo */}
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <img src="/img/logo.png" alt="Avishtra Realtors" className="h-14 w-auto object-contain" />
        </Link>
      </div>

      {/* CENTER: Navigation Menu */}
      <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
        <div className="relative group">
          <span className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors cursor-pointer py-4 flex items-center">
            Apartments
            <svg className="w-4 h-4 ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </span>
          <div className="absolute top-full mt-0 left-0 hidden group-hover:flex flex-col bg-white p-4 min-w-[200px] border border-gray-100 rounded-b shadow-xl z-50">
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">New Launches</Link>
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">On going</Link>
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">Ready to move</Link>
          </div>
        </div>
        
        <div className="relative group">
          <span className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors cursor-pointer py-4 flex items-center">
            Villas
            <svg className="w-4 h-4 ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </span>
          <div className="absolute top-full mt-0 left-0 hidden group-hover:flex flex-col bg-white p-4 min-w-[200px] border border-gray-100 rounded-b shadow-xl z-50">
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">New launches</Link>
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">Ongoing</Link>
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">Ready to move</Link>
          </div>
        </div>
        
        <Link href="/plots" className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors">Plots</Link>
        <Link href="/about" className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors">About Us</Link>
      </div>

      {/* RIGHT: Action Buttons */}
      <div className="flex-1 flex justify-end items-center space-x-4">
        <Link href="/post-requirement" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f7e0a2] to-[#dfaf51] text-gray-900 text-sm font-semibold tracking-wide rounded shadow-md hover:opacity-90 transition-opacity">
          <Building2 className="w-4 h-4" />
          <span>Post Requirement</span>
        </Link>
        <a href="tel:+919363726148" className="flex items-center gap-2 px-5 py-2.5 bg-[#5b9e28] text-white text-sm font-semibold tracking-wide rounded shadow-md hover:bg-[#4d8521] transition-colors">
          <HeadphonesIcon className="w-4 h-4" />
          <span>+91 93637 26148</span>
        </a>
      </div>
    </motion.nav>
  );
}
