'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Target, Rocket, Users, TrendingUp, Handshake, Building, ShieldCheck, Award, Briefcase, BarChart, Hand } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const floatingCardEntry = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      bounce: 0.4, 
      duration: 1.2 
    } 
  }
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-cover bg-center overflow-hidden min-h-[500px] flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-[#FBB150] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Discover Our Story
            </span>
            <h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              style={{ color: '#ffffff' }}
            >
              Bridging the gap to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBB150] to-[#e19f48]">perfect property.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern Corporate Building" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142B6D]/80 to-transparent" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
              >
                <div className="text-4xl font-bold text-[#FBB150] mb-1">100%</div>
                <div className="text-sm font-semibold text-[#142B6D] uppercase tracking-wide">Verified Portfolio</div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#142B6D] mb-8">
                Who <span className="text-[#FBB150]">We Are</span>
              </motion.h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Welcome to <strong>Avishtra Realtors</strong>, your premier strategic channel partner in the real estate ecosystem. We bridge the gap between India’s top-tier real estate developers and discerning property buyers, delivering a seamless, transparent, and end-to-end property acquisition experience.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  As an authorized channel partner, we do not just list properties—we curate investment opportunities. We represent a handpicked portfolio of residential, commercial, and retail spaces from the region's most trusted builders, ensuring our clients get first-day access, exclusive pricing, and inventory that is otherwise hard to find.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-24 bg-[#142B6D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Lightbulb className="w-12 h-12 text-[#FBB150] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Philosophy</h2>
            <p className="text-xl text-[#FBB150] font-medium tracking-wide">Trust • Scale • Transparency</p>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              We simplify the complex journey of buying real estate by acting as your dedicated advisors from day one. Here is what sets us apart:
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: "Direct Developer Access", desc: "Enjoy exclusive pre-launch offers, first-choice inventory allocation, and preferred pricing structures." },
              { title: "Zero Brokerage", desc: "We charge ₹0 booking fees from buyers for new developer properties. Our agreements are strictly with builders." },
              { title: "100% Verified Portfolio", desc: "We verify RERA status, land titles, and builder track records so you can invest with total peace of mind." },
              { title: "End-to-End Facilitation", desc: "From personalized site visits to home loan alignment and registration assistance, we manage it all." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#FBB150] rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-[#142B6D]" />
                  </div>
                  <h4 className="font-bold text-white text-xl">{item.title}</h4>
                </div>
                <p className="text-white/60 leading-relaxed pl-14">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* VISION */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 lg:p-14"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="w-8 h-8 text-[#142B6D]" />
              </div>
              <h2 className="text-4xl font-bold text-[#142B6D] mb-8">Our Vision</h2>
              
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <Hand className="w-7 h-7 text-[#FBB150] shrink-0 mt-1 rotate-90" />
                  <p className="text-gray-700 text-lg">
                    To be India's most trusted and performance-driven real estate channel partner.
                  </p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="flex gap-5 items-start">
                  <Hand className="w-7 h-7 text-[#FBB150] shrink-0 mt-1 rotate-90" />
                  <p className="text-gray-700 text-lg">
                    To redefine property buying and selling with utmost professionalism and transparency.
                  </p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="flex gap-5 items-start">
                  <Hand className="w-7 h-7 text-[#FBB150] shrink-0 mt-1 rotate-90" />
                  <p className="text-gray-700 text-lg">
                    To deliver uncompromising customer satisfaction at every step of the journey.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* MISSION */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-100 rounded-[2.5rem] p-10 lg:p-14 shadow-xl shadow-gray-200/50"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-[#FBB150]" />
              </div>
              <h2 className="text-4xl font-bold text-[#142B6D] mb-8">Our Mission</h2>
              
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <Hand className="w-7 h-7 text-[#FBB150] shrink-0 mt-1 rotate-90" />
                  <p className="text-gray-700 text-lg">
                    To empower developers by increasing project visibility and driving qualified leads.
                  </p>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div className="flex gap-5 items-start">
                  <Hand className="w-7 h-7 text-[#FBB150] shrink-0 mt-1 rotate-90" />
                  <p className="text-gray-700 text-lg">
                    To guide homebuyers and investors in finding their ideal property with confidence.
                  </p>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div className="flex gap-5 items-start">
                  <Hand className="w-7 h-7 text-[#FBB150] shrink-0 mt-1 rotate-90" />
                  <p className="text-gray-700 text-lg">
                    To create long-term, mutually beneficial partnerships across the real estate ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO (Cards Floating In Layout) */}
      <section className="py-24 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142B6D] mb-4">What We Do</h2>
            <div className="w-24 h-1.5 bg-[#FBB150] mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
          >
            {[
              { img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: Handshake, title: "Developer Partnerships", desc: "We collaborate with leading builders and developers to promote and sell their projects effectively. From marketing strategy to lead management and closing deals — we handle the end-to-end sales process with precision." },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: TrendingUp, title: "Property Sales & Marketing", desc: "Our marketing experts design tailored campaigns that maximize reach through digital platforms, on-ground events, and real estate expos. We ensure every property gets the attention it deserves." },
              { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: Users, title: "Buyer Assistance", desc: "We make property buying simple and stress-free. Our consultants help buyers with site visits, project comparisons, financial guidance, and documentation support — all under one roof." },
              { img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", icon: Building, title: "Investment Advisory", desc: "Looking for high-return property investments? Our experienced advisors analyze market trends to suggest the best real estate investment opportunities for long-term growth." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={floatingCardEntry}
                whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-[#142B6D]" />
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-[#142B6D] mb-6">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US (Interactive Timeline / Progress Layout) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#142B6D] mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1.5 bg-[#FBB150] mx-auto rounded-full" />
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Animated Center Progress Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#142B6D] via-[#FBB150] to-[#142B6D] rounded-full transform md:-translate-x-1/2"
            />

            {[
              { title: "Strong Network", desc: "Connected with the top builders and developers in the region.", icon: ShieldCheck },
              { title: "Certified Experts", desc: "Experienced and certified real estate professionals.", icon: Award },
              { title: "Ethical Practices", desc: "100% transparent and ethical business practices.", icon: Handshake },
              { title: "Proven Track Record", desc: "Consistent history of high sales performance.", icon: TrendingUp },
              { title: "Personalized Service", desc: "Tailored property consultation services.", icon: Briefcase },
              { title: "Market Insights", desc: "Access to the latest market trends and deep insights.", icon: BarChart }
            ].map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center mb-16 md:mb-24 w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Small Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#FBB150] border-[3px] border-white rounded-full z-10 shadow-md"
                  />

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-2' : 'md:pl-2'}`}
                  >
                    <div className="bg-gray-50 p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Icon INSIDE the card */}
                      <div className="w-16 h-16 bg-[#142B6D]/5 rounded-full flex items-center justify-center shrink-0">
                        <item.icon className="w-8 h-8 text-[#142B6D]" />
                      </div>
                      
                      {/* Text */}
                      <div className="text-left">
                        <h3 className="font-bold text-2xl text-[#142B6D] mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PARTNERS (Standalone Section) */}
      <section className="py-24 bg-[#142B6D] relative overflow-hidden">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577415124269-3111103a116b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Partners Meeting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142B6D] to-[#142B6D]/80" />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FBB150] mb-8">Our Partner Developers</h2>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
              We are proud to be associated with renowned names such as <strong className="text-white font-bold">[Builder 1]</strong>, <strong className="text-white font-bold">[Builder 2]</strong>, and <strong className="text-white font-bold">[Builder 3]</strong>, and many more — ensuring our clients get access to premium projects across <strong className="text-[#FBB150] font-bold">[City/Region]</strong>.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
