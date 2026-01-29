import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resin Driveways in Bath | Resin Bound Driveway Installation & Tarmac Services",
  description: "Professional resin driveway installation in Bath and surrounding areas. Resin bound driveways, tarmac services, and pathways. 15-year guarantee. Free quotes available.",
  keywords: "resin driveways Bath, resin bound driveways Bath, driveway installation Bath, tarmac Bath, resin driveways near me, driveway contractors Bath",
  openGraph: {
    title: "Resin Driveways in Bath | Professional Driveway Installation",
    description: "Professional resin driveway installation in Bath. Resin bound driveways, tarmac, and pathways. 15-year guarantee.",
    url: "https://bathresincompany.co.uk/driveways",
  },
};

export default function DrivewaysPage() {
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
                Resin <span className="text-[#C19A6B]">Driveways</span>
                <br />
                <span className="text-white">in Bath</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Professional resin bound driveway installation and tarmac services across Bath and surrounding areas
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Our <span className="text-[#C19A6B]">Driveway Services</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Professional driveway solutions for homes and businesses in Bath
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Resin Bound Driveways</h3>
                  <p className="text-gray-300 mb-4">Premium resin bound surfacing with quality aggregates for a stunning finish.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom color and aggregate selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Permeable surface options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>15-year guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Low maintenance and durable</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Tarmac Driveways</h3>
                  <p className="text-gray-300 mb-4">Professional tarmac installation and resurfacing services.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>New tarmac driveway installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tarmac repairs and resurfacing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Commercial tarmac services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Competitive pricing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Pathways & Access</h3>
                  <p className="text-gray-300 mb-4">Slip-resistant pathways and access routes.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Resin bound pathways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom shapes and sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Slip-resistant surfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Weather resistant</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Why Choose Resin?</h3>
                  <p className="text-gray-300 mb-4">Benefits of resin bound driveways over traditional surfaces.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Permeable - helps with drainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Wide range of colors available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Long-lasting and durable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Suitable for all property types</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-black border-t-2 border-[#C19A6B]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-black p-12 rounded-lg border-2 border-[#C19A6B]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Get Your Free <span className="text-[#C19A6B]">Driveway Quote</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Professional resin driveway installation in Bath - 15-year guarantee
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
