import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 bg-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 about-texture opacity-20 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Product Screenshot/Image Gallery */}
            <div className="order-2 lg:order-1 space-y-4">
              {/* Main Large Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg"
                    alt="Bath Resin Company - Professional resin driveway installation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Photo Grid - 4 smaller images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/gallery/534684338_748840368066830_3949569465307143283_n.jpg"
                      alt="Resin driveway project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg"
                      alt="Landscaping work"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/gallery/594132339_839910372293162_5910545460222262064_n.jpg"
                      alt="Professional installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 hover:scale-105 transition-transform">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/gallery/518374493_725822217035312_4448164576050516145_n.jpg"
                      alt="Completed driveway project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Welcome to <span className="text-[#D4B89A]">Bath Resin Company</span>
                </h2>
                <p className="text-xl text-gray-600 mb-6 font-medium">
                  Outdoor living perfectionists.....
                </p>
              </div>

              <div className="space-y-6 text-gray-800 mb-8">
                <p className="text-lg leading-relaxed">
                  We are a proud, family run business from the heart of Bath, with three generations of experience in garden transformations, driveways and landscaping. With over 20 years of hands-on expertise, we&apos;ve built a reputation for excellence, precision and passion for creating beautiful, lasting outdoor spaces.
                </p>
                <p className="text-lg leading-relaxed">
                  At BR/Bath resin company, We are true perfectionists - highly skilled and committed to working to the very highest standard. We leave no stone unturned, treating every project with care and every detail with meticulous attention.
                </p>
                <p className="text-lg leading-relaxed">
                  Our love for the environment is at the heart of everything we do. We take great pride in using materials that are environmentally conscious and always work with deep respect for nature and local wildlife. Whether shaping a garden or digging out laying a driveway, We approach every task with sustainability and sensitivity in mind.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span><strong>Established:</strong> 2004</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span><strong>Fully Insured & Qualified</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#D4B89A]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span><strong>Based in:</strong> Bath, Somerset</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-gray-300">
                <p className="text-xl font-semibold text-black text-center">
                  Excellence isn&apos;t just our standard - It&apos;s our legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
