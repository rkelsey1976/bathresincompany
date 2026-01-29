import Image from "next/image";

export default function BusinessInfo() {
  return (
    <section className="py-8 sm:py-12 bg-[#FAF5ED]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Image Banner */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
              <Image
                src="/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg"
                alt="Resin driveway installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
              <Image
                src="/images/gallery/534684338_748840368066830_3949569465307143283_n.jpg"
                alt="Landscaping work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
              <Image
                src="/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg"
                alt="Professional installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Business Established</h3>
              <p className="text-gray-700 font-semibold">Since 2004</p>
              <p className="text-sm text-gray-600 mt-1">Over 20 years experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700 font-semibold">Bath, Somerset</p>
              <p className="text-sm text-gray-600 mt-1">Serving Bath, Somerset & Wiltshire</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Qualifications</h3>
              <p className="text-gray-700 font-semibold">Fully Qualified</p>
              <p className="text-sm text-gray-600 mt-1">NVQ, CPCS, City & Guilds, SWQR</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Guarantee</h3>
              <p className="text-gray-700 font-semibold">15-Year Warranty</p>
              <p className="text-sm text-gray-600 mt-1">On all resin driveways</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
