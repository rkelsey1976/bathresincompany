import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const areas = [
  { slug: "bath", name: "Bath", county: "Somerset" },
  { slug: "bristol", name: "Bristol", county: "Bristol" },
  { slug: "chippenham", name: "Chippenham", county: "Wiltshire" },
  { slug: "trowbridge", name: "Trowbridge", county: "Wiltshire" },
  { slug: "frome", name: "Frome", county: "Somerset" },
  { slug: "bradford-on-avon", name: "Bradford-on-Avon", county: "Wiltshire" },
  { slug: "melksham", name: "Melksham", county: "Wiltshire" },
  { slug: "warminster", name: "Warminster", county: "Wiltshire" },
  { slug: "westbury", name: "Westbury", county: "Wiltshire" },
  { slug: "corsham", name: "Corsham", county: "Wiltshire" },
  { slug: "keynsham", name: "Keynsham", county: "Somerset" },
  { slug: "midsomer-norton", name: "Midsomer Norton", county: "Somerset" },
  { slug: "radstock", name: "Radstock", county: "Somerset" },
  { slug: "wells", name: "Wells", county: "Somerset" },
  { slug: "glastonbury", name: "Glastonbury", county: "Somerset" },
  { slug: "shepton-mallet", name: "Shepton Mallet", county: "Somerset" },
  { slug: "devizes", name: "Devizes", county: "Wiltshire" },
  { slug: "calne", name: "Calne", county: "Wiltshire" },
  { slug: "swindon", name: "Swindon", county: "Wiltshire" },
];

export async function generateStaticParams() {
  return areas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = areas.find((a) => a.slug === params.area);
  
  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: `Resin Driveways & Landscaping in ${area.name}, ${area.county} | Bath Resin Company`,
    description: `Professional resin driveway installation and landscaping services in ${area.name}, ${area.county}. Expert resin bound driveways, tarmac, garden transformations, and outdoor landscaping. Free quotes available.`,
    keywords: `resin driveways ${area.name}, landscaping ${area.name}, driveway installation ${area.name}, resin bound driveways ${area.county}, landscaping services ${area.name}`,
    openGraph: {
      title: `Resin Driveways & Landscaping in ${area.name}, ${area.county}`,
      description: `Professional resin driveway and landscaping services in ${area.name}, ${area.county}.`,
      url: `https://bathresincompany.co.uk/areas/${area.slug}`,
    },
  };
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areas.find((a) => a.slug === params.area);

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Services in <span className="text-[#C19A6B]">{area.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Professional resin driveways and landscaping services in {area.name}, {area.county}
              </p>
            </div>
          </div>
        </section>

        {/* Services in Area */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Our Services in <span className="text-[#C19A6B]">{area.name}</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Expert landscaping and driveway services for homes and businesses in {area.name}, {area.county}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Resin Driveways</h3>
                  <p className="text-gray-300 mb-4">
                    Professional resin bound driveway installation in {area.name}. Quality aggregates and resin for stunning, durable driveways with a 15-year guarantee.
                  </p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Resin bound surfacing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom color selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>15-year guarantee</span>
                    </li>
                  </ul>
                  <Link
                    href="/driveways"
                    className="text-[#C19A6B] hover:text-[#D4B089] font-semibold inline-flex items-center gap-2"
                  >
                    Learn more about driveways
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Landscaping</h3>
                  <p className="text-gray-300 mb-4">
                    Complete garden design and landscaping services in {area.name}. Transform your outdoor space with expert design and installation.
                  </p>
                  <ul className="space-y-2 text-gray-400 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Garden design and planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Garden transformations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Patio installation</span>
                    </li>
                  </ul>
                  <Link
                    href="/landscaping"
                    className="text-[#C19A6B] hover:text-[#D4B089] font-semibold inline-flex items-center gap-2"
                  >
                    Learn more about landscaping
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for This Area */}
        <section className="py-16 sm:py-24 bg-black border-t-2 border-[#C19A6B]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Why Choose Us in <span className="text-[#C19A6B]">{area.name}</span>?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-black p-6 rounded-lg border-2 border-[#C19A6B]">
                  <div className="text-5xl font-bold text-[#C19A6B] mb-2">20+</div>
                  <div className="text-white font-semibold text-lg">Years Experience</div>
                  <p className="text-gray-400 text-sm mt-2">Serving {area.county} and surrounding areas</p>
                </div>
                <div className="text-center bg-black p-6 rounded-lg border-2 border-[#C19A6B]">
                  <div className="text-5xl font-bold text-[#C19A6B] mb-2">15</div>
                  <div className="text-white font-semibold text-lg">Year Guarantee</div>
                  <p className="text-gray-400 text-sm mt-2">On all resin driveway installations</p>
                </div>
                <div className="text-center bg-black p-6 rounded-lg border-2 border-[#C19A6B]">
                  <div className="text-5xl font-bold text-[#C19A6B] mb-2">Local</div>
                  <div className="text-white font-semibold text-lg">Expertise</div>
                  <p className="text-gray-400 text-sm mt-2">Knowledge of {area.name} area</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-black p-12 rounded-lg border-2 border-[#C19A6B]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Get Your Free Quote in <span className="text-[#C19A6B]">{area.name}</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Professional resin driveway and landscaping services in {area.name}, {area.county}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:Bathresincompany@gmail.com"
                  className="bg-[#C19A6B] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4B089] transition-colors flex items-center gap-2 shadow-lg"
                >
                  Get a Free Quote
                </a>
                <a
                  href="tel:07944268119"
                  className="bg-transparent border-2 border-[#C19A6B] text-[#C19A6B] px-8 py-4 rounded-lg font-semibold hover:bg-[#C19A6B] hover:text-black transition-colors flex items-center gap-2"
                >
                  Call 07944 268119
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
