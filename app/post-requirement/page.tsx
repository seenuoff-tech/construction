'use client';

export default function PostRequirement() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* LEFT SIDE: Form */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Post Your <span className="text-[#FBB150]">Requirement</span>
            </h1>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D]">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                </select>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D]">
                  <option value="">Transaction Type</option>
                  <option value="buy">Buy</option>
                  <option value="rent">Rent</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="City *" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D]"
                />
                <input 
                  type="text" 
                  placeholder="Price *" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D]"
                />
              </div>

              <textarea 
                placeholder="Enter Your Detail Requirement:" 
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D] resize-none"
              ></textarea>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D]"
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-gray-700 outline-none focus:border-[#142B6D]"
                />
                <div className="flex">
                  <div className="px-3 flex items-center bg-gray-100 border border-gray-200 border-r-0 rounded-l text-gray-600 text-sm">
                    🇮🇳 +91
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Mobile *" 
                    required 
                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-r text-gray-700 outline-none focus:border-[#142B6D]"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I authorize Avishtra Realtors and its representatives to contact me with updates and notifications via Email, SMS, WhatsApp, or Call, in accordance with the <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Terms Of Use</a>. This consent overrides DND/NDNC.
                </label>
              </div>

              <button 
                type="submit" 
                className="px-8 py-3 bg-[#1c223a] text-white font-semibold rounded hover:bg-[#142B6D] transition-colors shadow-md"
              >
                Post Now
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Text & Image */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sale or Buy Best Projects or Properties in Chennai
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tell us what are you looking for. Our highly experienced property advisors are here to assist you. Please share your requirements in detail and get ready for a delightful service experience. Post Your Requirement!
            </p>
            <div className="w-full flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Property Advisors" 
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
