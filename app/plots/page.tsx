import { getPlots } from '@/lib/plots';
import Link from 'next/link';

import { MapPin, Maximize, FileCheck } from 'lucide-react';

export default function PlotsPage() {
  const plots = getPlots();

  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#142B6D] mb-4">Our Plots</h1>
          <div className="w-24 h-1.5 bg-[#FBB150] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plots.map((plot) => (
            <div key={plot.slug} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              {/* Display first image as thumbnail, or fallback */}
              <div className="h-64 bg-gray-100 overflow-hidden relative">
                {plot.images.length > 0 ? (
                  <img src={plot.images[0]} alt={plot.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white leading-tight">
                  {plot.name}
                </h3>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-col gap-4 mb-8 flex-1">
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-[#142B6D]/10 p-2 rounded-lg">
                      <MapPin className="w-4 h-4 text-[#142B6D]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-gray-900">{plot.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#FBB150]/20 p-2 rounded-lg">
                      <Maximize className="w-4 h-4 text-[#d99036]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Size Range</p>
                      <p className="text-sm font-bold text-gray-900">{plot.sizeRange} {plot.sizeRange !== 'Various Sizes' && 'Sq.ft'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FileCheck className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Approvals</p>
                      <p className="text-sm font-bold text-green-700">{plot.approvals}</p>
                    </div>
                  </div>

                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Link href={`/plots/${plot.slug}`} className="flex-1 bg-[#142B6D] hover:bg-[#0f2052] text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Read More
                  </Link>
                  <a 
                    href={`https://wa.me/919363726148?text=Hi, I am interested in ${encodeURIComponent(plot.name)}. Could you share more details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-[#FBB150] text-[#FBB150] hover:bg-[#FBB150] hover:text-white text-center py-3 rounded-xl font-semibold transition-colors"
                  >
                    Enquiry Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
