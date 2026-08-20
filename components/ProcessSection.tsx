'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Planning',
    desc: 'Site survey, feasibility, regulatory clearance roadmap.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Architectural, structural, MEP and BIM coordination.',
  },
  {
    num: '03',
    title: 'Engineering',
    desc: 'Tendering, procurement, value-engineered specifications.',
  },
  {
    num: '04',
    title: 'Construction',
    desc: 'Disciplined execution with weekly client reporting.',
  },
  {
    num: '05',
    title: 'Inspection',
    desc: 'Independent QA/QC, snagging, statutory commissioning.',
  },
  {
    num: '06',
    title: 'Handover',
    desc: 'Digital twin, O&M manuals, defect-liability support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 tracking-[0.2em] uppercase text-xs mb-6 font-semibold"
          >
            Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight max-w-4xl"
          >
            Six steps. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 italic">Zero surprises.</span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 hover:to-blue-500/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-[#0a0a0a] rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden">
                {/* Large watermark number */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none pointer-events-none leading-none">
                  {step.num}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-emerald-400 font-medium mb-8 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-300">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
