import { getApartments } from '@/lib/apartments';
import { Maximize2, LayoutGrid } from 'lucide-react';

function formatPrice(price?: string) {
  if (!price) return 'Price on Request';
  const cleaned = price.replace(/^Rs\.?\s*/i, '').trim();
  const lc = cleaned.toLowerCase();
  if (lc.includes('onwards')) {
    return `₹  ${cleaned.replace(/\*?\s*[Oo]nwards\.?/i, '').trim()}*`;
  }
  return `₹  ${cleaned}`;
}

function extractBuilder(name: string) {
  // Common single-word builders
  const known = [
    'TRAVENTURE','STEPSTONE','RADIANCE','BRIGADE','PURAVANKARA','PROVIDENT',
    'NAVINS','SHRIRAM','SIDHARTH','SILVERSKY','RAINBOW','SOBHA','PRESTIGE',
    'GODREJ','TVS','PACIFICA','SAMEERA','ADITYARAM','ARIHANT','ALAMO',
    'AMP','AMAARA','PURVA'
  ];
  const upper = name.toUpperCase();
  for (const b of known) {
    if (upper.startsWith(b + ' ')) return b;
  }
  // multi-word builders
  const multi = ['ARUN EXCELLO','GTB','NCC URBAN','DRA','MP','VRX','SIS','NU TECH','JAINS'];
  for (const b of multi) {
    if (upper.startsWith(b + ' ')) return b;
  }
  // fallback: first word
  return name.split(' ')[0];
}

export default function OngoingApartmentsPage() {
  const allApartments = getApartments();
  const apartments = allApartments.filter(apt => apt.category === 'ongoing');

  return (
    <main className="bg-gray-100 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#142B6D] mb-4">Ongoing Apartments</h1>
          <div className="w-24 h-1.5 bg-[#000000] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt) => {
            const builder = extractBuilder(apt.name);
            const imgSrc = apt.images && apt.images.length > 0 ? apt.images[0] : '/default-building.jpg';
            const waLink = `https://wa.me/919363726148?text=Hi%2C+I+am+interested+in+${encodeURIComponent(apt.name)}+(${encodeURIComponent(apt.location || 'Chennai')}). Could+you+share+more+details%3F`;

            return (
              <div
                key={apt.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Building Photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={apt.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">Apartments</span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/40 backdrop-blur-sm">Ongoing</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Project Name */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                    {apt.name}
                  </h3>

                  {/* By: Builder */}
                  <p className="text-sm font-semibold text-red-600 mb-3">
                    By: {builder}
                  </p>

                  {/* Location */}
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                    📍 {apt.location}
                  </p>

                  <hr className="mb-3 border-gray-100" />

                  {/* Area + Configuration */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {apt.sizeRange && apt.sizeRange !== 'Various Sizes' && (
                      <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">Area:</p>
                        <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                          {apt.sizeRange} Sq.ft
                        </p>
                      </div>
                    )}
                    {apt.type && apt.type !== 'Various' && (
                      <div>
                        <p className="text-[11px] text-gray-400 mb-0.5">Configuration:</p>
                        <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                          <LayoutGrid className="w-3.5 h-3.5 text-gray-400" />
                          {apt.type} BHK
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Price + WhatsApp */}
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xl font-bold text-[#000000]">
                      {formatPrice(apt.price)}
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-11 h-11 bg-[#25D366] hover:bg-[#1ebe59] rounded-full flex items-center justify-center shadow-md transition-colors"
                      title="WhatsApp Enquiry"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
