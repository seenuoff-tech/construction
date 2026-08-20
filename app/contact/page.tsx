import React from 'react';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] font-sans flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-gray-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic">extraordinary.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-md leading-relaxed">
            Whether you have a clear vision or just an idea, our engineering team is ready to bring your project to life. Tell us about your requirements, and we'll be in touch.
          </p>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Connect with us</p>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-gray-300 hover:text-white">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-serif text-white mb-2">Project Brief</h3>
            <p className="text-gray-400 text-sm">Fill out the details below to get started.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gray-400 uppercase">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gray-400 uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gray-400 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest text-gray-400 uppercase">Location</label>
                <input 
                  type="text" 
                  placeholder="City, Country" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest text-gray-400 uppercase">Project Type</label>
              <div className="relative">
                <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white appearance-none cursor-pointer">
                  <option className="bg-[#0a0f1c] text-white" value="commercial">Commercial Development</option>
                  <option className="bg-[#0a0f1c] text-white" value="residential">Residential Architecture</option>
                  <option className="bg-[#0a0f1c] text-white" value="industrial">Industrial Build</option>
                  <option className="bg-[#0a0f1c] text-white" value="renovation">Renovation & Remodel</option>
                  <option className="bg-[#0a0f1c] text-white" value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs tracking-widest text-gray-400 uppercase">Project Details</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your timeline, budget, and specific requirements..." 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all text-white placeholder-gray-600 resize-y"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-white text-black hover:bg-gray-200 rounded-xl py-4 px-6 flex items-center justify-center gap-2 transition-all font-semibold text-base mt-4 group"
            >
              Submit Request
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              By submitting, you agree to our privacy policy.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
