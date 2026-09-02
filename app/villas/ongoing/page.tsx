import { getVillas } from '@/lib/villas';
import Link from 'next/link';
import { MapPin, Maximize, FileCheck, Home, Calendar } from 'lucide-react';

export default function OngoingVillasPage() {
  const allVillas = getVillas();
  const villas = allVillas.filter(v => v.category === 'ongoing');

  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#142B6D] mb-4">Ongoing Villas</h1>
          <div className="w-24 h-1.5 bg-[#FBB150] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.map((villa) => (
            <div key={villa.slug} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#142B6D] to-[#2546a1] p-6 text-center">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {villa.name}
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
                      <p className="text-sm font-bold text-gray-900">{villa.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Home className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Type (BHK)</p>
                      <p className="text-sm font-bold text-gray-900">{villa.type} BHK</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#FBB150]/20 p-2 rounded-lg">
                      <Maximize className="w-4 h-4 text-[#d99036]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Size Range</p>
                      <p className="text-sm font-bold text-gray-900">{villa.sizeRange} {villa.sizeRange !== 'Various Sizes' && 'Sq.ft'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FileCheck className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Approvals</p>
                      <p className="text-sm font-bold text-green-700">{villa.approvals}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calendar className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Handover</p>
                      <p className="text-sm font-bold text-purple-700">{villa.handOverDate}</p>
                    </div>
                  </div>

                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Link href={`/villas/${villa.slug}`} className="flex-1 bg-[#142B6D] hover:bg-[#0f2052] text-white text-center py-3 rounded-xl font-semibold transition-colors">
                    Read More
                  </Link>
                  <a 
                    href={`https://wa.me/919363726148?text=Hi, I am interested in ${encodeURIComponent(villa.name)}. Could you share more details?`}
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
