'use client';

import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import MainServices from '@/components/services/MainServices';
import ServiceDetail from '@/components/services/ServiceDetail';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesWhyUs from '@/components/services/ServicesWhyUs';
import ServicesPortfolio from '@/components/services/ServicesPortfolio';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <ServicesHero />
      <ServicesIntro />
      <MainServices />
      
      {/* Detailed Services */}
      <ServiceDetail 
        index={0}
        title="Residential Properties"
        description="From sprawling estates to modern penthouses, our residential division focuses on finding and developing homes that match your lifestyle. We prioritize locations with excellent connectivity, premium amenities, and long-term value appreciation."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <ServiceDetail 
        index={1}
        title="Commercial Properties"
        description="Strategic spaces for visionary businesses. We help you secure prime commercial real estate, from Grade-A office spaces to retail hubs, ensuring your business has the foundation it needs to thrive in a competitive market."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <ServiceDetail 
        index={2}
        title="Land & Plots"
        description="Invest in the earth. We offer carefully vetted, clear-titled land parcels in high-growth corridors. Whether you are looking to build a custom home or secure land for future appreciation, our experts guide you to the right plot."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <ServiceDetail 
        index={3}
        title="Property Investment"
        description="Real estate is one of the most powerful wealth-building tools. Our investment advisory team analyzes market trends, rental yields, and capital appreciation to help you build a robust and profitable property portfolio."
        image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />
      <ServiceDetail 
        index={4}
        title="Property Management"
        description="Protect your investment without the hassle. Our comprehensive property management services cover everything from tenant screening and leasing to maintenance and legal compliance, giving you complete peace of mind."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      />

      <ServicesProcess />
      <ServicesWhyUs />
      <ServicesPortfolio />
      {/* Spacer to prevent overlap between scroll sections */}
      <div className="h-32 md:h-48 bg-black w-full" />
      <ServicesCTA />
    </main>
  );
}
