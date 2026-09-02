'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Building2, HeadphonesIcon, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mobile accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleAccordion = (item: string) => {
    setOpenAccordion(openAccordion === item ? null : item);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* LEFT: Logo */}
      <div className="flex-1 lg:flex-none">
        <Link href="/" className="flex items-center">
          <img src="/img/logo.png" alt="Avishtra Realtors" className="h-10 lg:h-14 w-auto object-contain" />
        </Link>
      </div>

        {/* CENTER: Desktop Navigation Menu */}
      <div className="hidden lg:flex flex-1 justify-center space-x-10 items-center">
        <div className="relative group">
          <span className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors cursor-pointer py-4 flex items-center">
            Apartments
            <ChevronDown className="w-4 h-4 ml-1 opacity-60" />
          </span>
          <div className="absolute top-full mt-0 left-0 hidden group-hover:flex flex-col bg-white p-4 min-w-[200px] border border-gray-100 rounded-b shadow-xl z-50">
            <Link href="/apartments/new-launches" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">New Launches</Link>
            <Link href="/apartments/ongoing" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">On going</Link>
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">Ready to move</Link>
          </div>
        </div>
        
        <div className="relative group">
          <span className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors cursor-pointer py-4 flex items-center">
            Villas
            <ChevronDown className="w-4 h-4 ml-1 opacity-60" />
          </span>
          <div className="absolute top-full mt-0 left-0 hidden group-hover:flex flex-col bg-white p-4 min-w-[200px] border border-gray-100 rounded-b shadow-xl z-50">
            <Link href="/villas/new-launches" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">New launches</Link>
            <Link href="/villas/ongoing" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">Ongoing</Link>
            <Link href="#" className="block text-gray-700 hover:text-gold-500 py-2 text-sm font-medium transition-colors">Ready to move</Link>
          </div>
        </div>
        
        <Link href="/plots" className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors">Plots</Link>
        <Link href="/about" className="text-sm font-semibold tracking-wide text-gray-800 hover:text-gold-500 transition-colors">About Us</Link>
      </div>

      {/* RIGHT: Action Buttons */}
      <div className="flex justify-end items-center space-x-1.5 lg:space-x-4 lg:flex-1">
        
        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/post-requirement" className="flex items-center gap-2 px-5 py-2.5 bg-[#FBB150] text-white text-sm font-semibold tracking-wide rounded shadow-md hover:opacity-90 transition-opacity">
            <Building2 className="w-4 h-4" />
            <span>Post Requirement</span>
          </Link>
          <a href="tel:+919363726148" className="flex items-center gap-2 px-5 py-2.5 bg-[#FBB150] text-white text-sm font-semibold tracking-wide rounded shadow-md hover:bg-[#e19f48] transition-colors">
            <HeadphonesIcon className="w-4 h-4" />
            <span>+91 93637 26148</span>
          </a>
        </div>

        {/* MOBILE BUTTONS (Matches screenshot) */}
        <div className="flex lg:hidden items-center space-x-1.5">
          <Link href="/post-requirement" className="flex items-center gap-1.5 px-2 py-1 bg-[#FBB150] text-white rounded shadow-sm">
            <Building2 className="w-4 h-4" />
            <span className="text-[10px] font-bold leading-tight text-left">Post<br/>Requirement</span>
          </Link>
          
          <a href="tel:+919363726148" className="flex items-center justify-center w-8 h-8 bg-[#FBB150] text-white rounded shadow-sm hover:bg-[#e19f48]">
            <HeadphonesIcon className="w-4 h-4" />
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex items-center justify-center w-8 h-8 bg-white text-[#142B6D] rounded shadow-sm border border-gray-200"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY (Sidebar) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-[60] lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Header inside Sidebar */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 mt-2">
                <img src="/img/logo.png" alt="Avishtra Realtors" className="h-12 w-auto object-contain" />
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex items-center justify-center w-10 h-10 bg-[#FBB150] text-[#142B6D] rounded shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col py-2 pb-24">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-[#142B6D] border-b border-gray-100">
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-[#142B6D] border-b border-gray-100">
                  About Us
                </Link>
                
                {/* Apartments */}
                <div>
                  <button 
                    onClick={() => toggleAccordion('apartments')}
                    className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-[#142B6D] border-b border-gray-100"
                  >
                    Apartments
                    <ChevronDown className={`w-6 h-6 text-[#5b9e28] transition-transform ${openAccordion === 'apartments' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'apartments' && (
                    <div className="flex flex-col bg-gray-50 border-b border-gray-100">
                      <Link href="/apartments/new-launches" onClick={() => setIsMenuOpen(false)} className="px-10 py-3 text-base text-gray-600 border-b border-gray-100/50">New Launches</Link>
                      <Link href="/apartments/ongoing" onClick={() => setIsMenuOpen(false)} className="px-10 py-3 text-base text-gray-600 border-b border-gray-100/50">On going</Link>
                      <Link href="#" onClick={() => setIsMenuOpen(false)} className="px-10 py-3 text-base text-gray-600">Ready to move</Link>
                    </div>
                  )}
                </div>

                {/* Villas */}
                <div>
                  <button 
                    onClick={() => toggleAccordion('villas')}
                    className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-[#142B6D] border-b border-gray-100"
                  >
                    Villas
                    <ChevronDown className={`w-6 h-6 text-[#5b9e28] transition-transform ${openAccordion === 'villas' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'villas' && (
                    <div className="flex flex-col bg-gray-50 border-b border-gray-100">
                      <Link href="/villas/new-launches" onClick={() => setIsMenuOpen(false)} className="px-10 py-3 text-base text-gray-600 border-b border-gray-100/50">New launches</Link>
                      <Link href="/villas/ongoing" onClick={() => setIsMenuOpen(false)} className="px-10 py-3 text-base text-gray-600 border-b border-gray-100/50">Ongoing</Link>
                      <Link href="#" onClick={() => setIsMenuOpen(false)} className="px-10 py-3 text-base text-gray-600">Ready to move</Link>
                    </div>
                  )}
                </div>

                <Link href="/plots" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-lg font-medium text-[#142B6D] border-b border-gray-100">
                  New Plots
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
