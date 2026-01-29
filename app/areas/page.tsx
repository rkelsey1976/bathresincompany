import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Cover | Bath Resin Company",
  description: "Professional resin driveway and landscaping services across Bath, Bristol, Somerset, Wiltshire and surrounding areas. Find services in your local area.",
  keywords: "resin driveways Bath, landscaping Bristol, driveway services Somerset, landscaping Wiltshire, areas covered",
  openGraph: {
    title: "Areas We Cover | Bath Resin Company",
    description: "Professional resin driveway and landscaping services across Bath and surrounding areas.",
    url: "https://bathresincompany.co.uk/areas",
  },
};

const areas = [
  { name: "Bath", slug: "bath", county: "Somerset" },
  { name: "Bristol", slug: "bristol", county: "Bristol" },
  { name: "Chippenham", slug: "chippenham", county: "Wiltshire" },
  { name: "Trowbridge", slug: "trowbridge", county: "Wiltshire" },
  { name: "Frome", slug: "frome", county: "Somerset" },
  { name: "Bradford-on-Avon", slug: "bradford-on-avon", county: "Wiltshire" },
  { name: "Melksham", slug: "melksham", county: "Wiltshire" },
  { name: "Warminster", slug: "warminster", county: "Wiltshire" },
  { name: "Westbury", slug: "westbury", county: "Wiltshire" },
  { name: "Corsham", slug: "corsham", county: "Wiltshire" },
  { name: "Keynsham", slug: "keynsham", county: "Somerset" },
  { name: "Midsomer Norton", slug: "midsomer-norton", county: "Somerset" },
  { name: "Radstock", slug: "radstock", county: "Somerset" },
  { name: "Wells", slug: "wells", county: "Somerset" },
  { name: "Glastonbury", slug: "glastonbury", county: "Somerset" },
  { name: "Shepton Mallet", slug: "shepton-mallet", county: "Somerset" },
  { name: "Devizes", slug: "devizes", county: "Wiltshire" },
  { name: "Calne", slug: "calne", county: "Wiltshire" },
  { name: "Swindon", slug: "swindon", county: "Wiltshire" },
];

const counties = ["Somerset", "Wiltshire", "Bristol"];

export default function AreasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Areas We <span className="text-[#C19A6B]">Cover</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Professional resin driveway and landscaping services across Bath, Somerset, Wiltshire and surrounding areas
              </p>
            </div>
          </div>
        </section>

        {/* Counties Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Serving <span className="text-[#C19A6B]">Multiple Counties</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We provide expert landscaping and resin driveway services throughout the following counties
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {counties.map((county, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-[#C19A6B] text-center hover:border-[#D4B089] transition-all"
                  >
                    <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">{county}</h3>
                    <p className="text-gray-300">
                      {areas.filter((a) => a.county === county).length} areas covered
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Areas Grid */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  All <span className="text-[#C19A6B]">Areas</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Click on any area below to see our services in that location
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-[#C19A6B] mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {areas.map((area, index) => (
                    <Link
                      key={index}
                      href={`/areas/${area.slug}`}
                      className="bg-gradient-to-br from-gray-700 to-gray-800 border border-[#C19A6B]/30 rounded-lg p-4 text-center hover:border-[#C19A6B] hover:from-gray-600 hover:to-gray-700 transition-all block group"
                    >
                      <span className="text-[#C19A6B] font-semibold group-hover:text-[#D4B089] transition-colors">
                        {area.name}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">{area.county}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-6">
                  Don&apos;t see your area? Contact us - we may still be able to help!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#C19A6B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#D4B089] transition-colors shadow-lg"
                  >
                    Check if we cover your area
                  </Link>
                  <a
                    href="tel:07944268119"
                    className="bg-transparent border-2 border-[#C19A6B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C19A6B] hover:text-white transition-colors"
                  >
                    Call 07944 268119
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black border-t-2 border-[#C19A6B]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Why Choose Us Across <span className="text-[#C19A6B]">All Areas?</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-[#C19A6B]">
                  <div className="text-5xl font-bold text-[#C19A6B] mb-2">20+</div>
                  <div className="text-white font-semibold text-lg mb-2">Years Experience</div>
                  <p className="text-gray-400 text-sm">Serving Bath and surrounding counties</p>
                </div>
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-[#C19A6B]">
                  <div className="text-5xl font-bold text-[#C19A6B] mb-2">15</div>
                  <div className="text-white font-semibold text-lg mb-2">Year Guarantee</div>
                  <p className="text-gray-400 text-sm">On all resin driveway installations</p>
                </div>
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border-2 border-[#C19A6B]">
                  <div className="text-5xl font-bold text-[#C19A6B] mb-2">Local</div>
                  <div className="text-white font-semibold text-lg mb-2">Expertise</div>
                  <p className="text-gray-400 text-sm">Knowledge of local areas and requirements</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
