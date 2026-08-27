import { getPlotBySlug, getPlots } from '@/lib/plots';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const plots = getPlots();
  return plots.map((plot) => ({
    slug: plot.slug,
  }));
}

function formatAboutText(text: string) {
  if (!text) return "No description available yet.";
  
  let html = text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
    
  // Highlight text before colons (Headers like "Location:", "Project Size:")
  html = html.replace(/^([A-Za-z0-9\s&/-]{2,40}):/gm, '<strong class="text-[#142B6D] font-bold block mt-6 mb-1 text-xl border-b border-gray-200 pb-2">$1:</strong>');

  // Highlight Key Real Estate Words
  const keywords = ['BHK', 'Sq\\.ft', 'Sqft', 'Sq\\.m', 'Acres', 'RERA', 'DTCP', 'CMDA', 'Amenities', 'Location', 'Price', 'Villa', 'Villas', 'Plot', 'Plots', 'Premium', 'Luxury', 'Investment', 'Clubhouse', 'Gym', 'Swimming Pool', 'Ready to Move', 'Lakhs', 'Crores', 'Cr\\.', 'Highway'];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  html = html.replace(regex, '<span class="text-[#FBB150] font-bold bg-[#FBB150]/10 px-1 rounded">$1</span>');
  
  // Convert newlines to breaks
  html = html.replace(/\n/g, "<br />");

  return html;
}

export default function PlotDetailPage({ params }: { params: { slug: string } }) {
  const plot = getPlotBySlug(params.slug);

  if (!plot) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/plots" className="text-[#FBB150] font-semibold hover:underline mb-4 inline-block">
            ← Back to All Plots
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#142B6D]">{plot.name}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (About & Images) */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#142B6D] to-[#FBB150]" />
              <h2 className="text-3xl font-bold text-[#142B6D] mb-8 flex items-center gap-3">
                <span className="w-10 h-1 bg-[#FBB150] rounded-full inline-block"></span>
                About this Property
              </h2>
              <div 
                className="prose max-w-none text-gray-700 leading-loose text-lg"
                dangerouslySetInnerHTML={{ __html: formatAboutText(plot.aboutText) }}
              />
            </section>

            {plot.images.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#142B6D] mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plot.images.map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                      <img src={img} alt={`${plot.name} - image ${idx + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar (Actions & Documents) */}
          <div className="lg:col-span-1 space-y-6 sticky top-32 self-start">
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center">
              <h3 className="text-xl font-bold text-[#142B6D] mb-2">Interested?</h3>
              <p className="text-gray-500 mb-8">Reach out to us instantly via WhatsApp to get more details or schedule a visit.</p>
              <a 
                href={`https://wa.me/919363726148?text=Hi, I am interested in ${encodeURIComponent(plot.name)}. Could you share more details?`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#1ebe57] text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green-500/30"
              >
                Enquire on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
