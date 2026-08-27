'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after enter
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-[600px]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-[#FBB150] hover:bg-[#e19f48] text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Side */}
            <div className="hidden md:block md:w-1/2 relative bg-[#142B6D]">
              <img
                src="https://images.unsplash.com/photo-1542820229-081e0c12af0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy Family Consultation"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Right Form Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Expert Consultation by <span className="text-[#FBB150]">Professionals</span>
                </h3>
                <img src="/img/logo.png" alt="Avishtra Realtors" className="h-10 mx-auto mt-4 mb-2 object-contain" />
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#142B6D] focus:ring-1 focus:ring-[#142B6D] outline-none text-gray-800"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#142B6D] focus:ring-1 focus:ring-[#142B6D] outline-none text-gray-800"
                  />
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center px-4 border border-r-0 border-gray-300 bg-gray-50 rounded-l text-gray-600">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile *"
                    required
                    className="w-full px-4 py-3 rounded-r border border-gray-300 focus:border-[#142B6D] focus:ring-1 focus:ring-[#142B6D] outline-none text-gray-800"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Please share your requirement here."
                    rows={3}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#142B6D] focus:ring-1 focus:ring-[#142B6D] outline-none text-gray-800 resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" id="consent" required className="mt-1" />
                  <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                    I authorise Avishtra Realtors and its representatives to contact me with updates and notifications via email, SMS, WhatsApp, and call. This will override the registry on DND/NDNC. I agree to the Privacy Policy & Terms & Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#142B6D] hover:bg-[#0f2052] text-white font-bold py-4 rounded mt-4 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
