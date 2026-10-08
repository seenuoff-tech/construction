'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Calendar, Phone, X } from 'lucide-react';
import Link from 'next/link';

interface PropertySearchProps {
  properties?: any[];
}

export default function PropertySearch({ properties = [] }: PropertySearchProps) {
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Derive available options from the real data
  const locations = ['All', ...Array.from(new Set(properties.map(p => p.location?.trim()).filter(Boolean)))];
  const types = ['All', 'Apartments', 'Villas', 'Plots'];
  const statuses = ['All', 'Ongoing', 'New Launch', 'Ready to Move'];

  // Filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchType = filterType === 'All' || p.propertyType === filterType;
      
      // Fuzzy matching for location
      const matchLocation = filterLocation === 'All' || p.location?.trim() === filterLocation;
      
      // Map statuses
      let pStatus = 'Ongoing';
      if (p.category === 'new-launch') pStatus = 'New Launch';
      if (p.category === 'ready-to-move') pStatus = 'Ready to Move';
      if (p.category === 'ongoing') pStatus = 'Ongoing';
      
      const matchStatus = filterStatus === 'All' || pStatus === filterStatus;
      
      return matchType && matchLocation && matchStatus;
    });
  }, [filterType, filterLocation, filterStatus, properties]);

  // Generate dynamic WhatsApp URL
  const getWhatsAppLink = (property: any) => {
    const message = `Hello, I am interested in ${property.name} (${property.propertyType}) located in ${property.location}. I would like to download the brochure and get more details.`;
    return `https://wa.me/919363726148?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen relative" id="search-section">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Find Your Dream <span className="text-[#FBB150]">Property</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#FBB150] mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium ml-1">Property Type</label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-[#111] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#FBB150] focus:border-transparent appearance-none"
              >
                {types.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium ml-1">Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full bg-[#111] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#FBB150] focus:border-transparent appearance-none"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium ml-1">Status</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full bg-[#111] border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-[#FBB150] focus:border-transparent appearance-none"
              >
                {statuses.map(status => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
          <h3 className="text-xl font-medium text-white">
            {filterType !== 'All' ? filterType : 'Properties'} {filterLocation !== 'All' ? `in ${filterLocation}` : ''}
          </h3>
          <span className="text-gold-500 font-semibold">{filteredProperties.length} Results</span>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="col-span-full text-center py-20 text-white/50"
              >
                No properties found matching your criteria. Try adjusting your filters.
              </motion.div>
            ) : (
              filteredProperties.map((property) => (
                <motion.div
                  layout
                  key={property.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black border border-white/10 rounded-xl overflow-hidden group hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-500 flex flex-col h-full"
                >
                  {/* Image & Badges */}
                  <div 
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(property.images && property.images.length > 0 ? property.images[0] : 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')}
                  >
                    <img 
                      src={property.images && property.images.length > 0 ? property.images[0] : 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
                      alt={property.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                        {property.propertyType}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full border shadow-lg font-medium backdrop-blur-md
                        ${property.category === 'new-launch' ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : property.category === 'ready-to-move' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50' : 'bg-blue-500/20 text-blue-300 border-blue-500/50'}
                      `}>
                        {property.category === 'new-launch' ? 'New Launch' : property.category === 'ready-to-move' ? 'Ready to Move' : 'Ongoing'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold text-white mb-2">{property.name}</h4>
                    
                    <div className="flex items-center text-white/60 mb-4 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gold-500" />
                        {property.location || 'Chennai'}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-white/50 mb-1">Details</p>
                        <p className="text-lg font-semibold text-white">{property.sizeRange || property.approvals || property.type + ' BHK'}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link href={`/${property.propertyType.toLowerCase()}/${property.slug}`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                          <Building className="w-4 h-4" />
                        </Link>
                        <a 
                          href={getWhatsAppLink(property)}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black hover:bg-white transition-colors hover:scale-110 active:scale-95"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white/50 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Property Preview"
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
