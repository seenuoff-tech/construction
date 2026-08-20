'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building, Calendar, Phone, X } from 'lucide-react';

// --- Dummy Database ---
const properties = [
  {
    id: 1,
    title: 'The Platinum Towers',
    type: 'Apartments',
    location: 'Chennai',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Starting ₹2.5 Cr',
    whatsappNumber: '919876543210' // Dummy number
  },
  {
    id: 2,
    title: 'Emerald Villas',
    type: 'Villas',
    location: 'Coimbatore',
    status: 'Pre-Order',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Starting ₹4.2 Cr',
    whatsappNumber: '919876543210'
  },
  {
    id: 3,
    title: 'Oceanfront Residences',
    type: 'Apartments',
    location: 'Chennai',
    status: 'Pre-Order',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Starting ₹3.8 Cr',
    whatsappNumber: '919876543210'
  },
  {
    id: 4,
    title: 'Serenity Plots',
    type: 'Plots',
    location: 'Coimbatore',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Starting ₹85 L',
    whatsappNumber: '919876543210'
  },
  {
    id: 5,
    title: 'Heritage Enclave',
    type: 'Villas',
    location: 'Chennai',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Starting ₹5.5 Cr',
    whatsappNumber: '919876543210'
  },
  {
    id: 6,
    title: 'Valley View Estates',
    type: 'Plots',
    location: 'Chennai',
    status: 'Pre-Order',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Starting ₹1.2 Cr',
    whatsappNumber: '919876543210'
  }
];

export default function PropertySearch() {
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Derive available options from the dummy data
  const locations = ['All', ...Array.from(new Set(properties.map(p => p.location)))];
  const types = ['All', 'Apartments', 'Villas', 'Plots'];
  const statuses = ['All', 'Live', 'Pre-Order'];

  // Filter logic
  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const matchType = filterType === 'All' || p.type === filterType;
      const matchLocation = filterLocation === 'All' || p.location === filterLocation;
      const matchStatus = filterStatus === 'All' || p.status === filterStatus;
      return matchType && matchLocation && matchStatus;
    });
  }, [filterType, filterLocation, filterStatus]);

  // Generate dynamic WhatsApp URL
  const getWhatsAppLink = (property: typeof properties[0]) => {
    const message = `Hello, I am interested in ${property.title} (${property.type}) located in ${property.location}. I would like to download the brochure and get more details.`;
    return `https://wa.me/${property.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen relative" id="search-section">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header & Smart Search */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover Your Perfect Space</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Explore our premium selection of apartments, villas, and plots across top locations.</p>
          </motion.div>

          {/* Search Bar Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl sticky top-24 z-40"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Type Filter */}
              <div className="flex flex-col">
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 font-semibold">Property Type</label>
                <select 
                  className="bg-black/50 border border-white/10 text-white rounded-lg p-3 outline-none focus:border-gold-500 transition-colors cursor-pointer appearance-none"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  {types.map(t => <option key={t} value={t}>{t === 'All' ? 'Any Type' : t}</option>)}
                </select>
              </div>

              {/* Location Filter */}
              <div className="flex flex-col">
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 font-semibold">Location</label>
                <select 
                  className="bg-black/50 border border-white/10 text-white rounded-lg p-3 outline-none focus:border-gold-500 transition-colors cursor-pointer appearance-none"
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                >
                  {locations.map(l => <option key={l} value={l}>{l === 'All' ? 'Any Location' : l}</option>)}
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex flex-col">
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 font-semibold">Project Status</label>
                <select 
                  className="bg-black/50 border border-white/10 text-white rounded-lg p-3 outline-none focus:border-gold-500 transition-colors cursor-pointer appearance-none"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  {statuses.map(s => <option key={s} value={s}>{s === 'All' ? 'Any Status' : s}</option>)}
                </select>
              </div>

            </div>
          </motion.div>
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
                  key={property.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black border border-white/10 rounded-xl overflow-hidden group hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-500 flex flex-col h-full"
                >
                  {/* Image & Badges */}
                  <div 
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(property.image)}
                  >
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />


                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                        {property.type}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full border shadow-lg font-medium backdrop-blur-md
                        ${property.status === 'Pre-Order' ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'}
                      `}>
                        {property.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold text-white mb-2">{property.title}</h4>
                    
                    <div className="flex items-center text-white/60 mb-4 text-sm gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gold-500" />
                        {property.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4 text-gold-500" />
                        {property.price}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 flex gap-3">
                      {/* WhatsApp CTA */}
                      <a 
                        href={getWhatsAppLink(property)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold rounded-lg py-3 flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                      >
                        <Phone className="w-4 h-4" />
                        Get Brochure
                      </a>
                      <button className="px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-black rounded-lg transition-colors font-medium">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors p-2 bg-black/50 rounded-full border border-white/20"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged Property" 
                className="w-full h-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
