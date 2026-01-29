import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Landscaping Services in Bath | Garden Design & Transformations",
  description: "Expert landscaping services in Bath and surrounding areas. Garden design, transformations, planting, patios, and outdoor living spaces. 20+ years experience. Free consultations.",
  keywords: "landscaping Bath, garden design Bath, garden transformations, landscaping services Bath, garden landscaping, outdoor landscaping, BR Landscapes",
  openGraph: {
    title: "Professional Landscaping Services in Bath | Garden Design",
    description: "Expert landscaping services in Bath. Garden design, transformations, and outdoor living spaces. 20+ years experience.",
    url: "https://bathresincompany.co.uk/landscaping",
  },
};

export default function LandscapingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Professional <span className="text-[#C19A6B]">Landscaping</span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your outdoor space into a beautiful, functional landscape in Bath and surrounding areas
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
                  Our <span className="text-[#C19A6B]">Landscaping Services</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Complete garden design and landscaping solutions for homes and businesses in Bath
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Garden Design & Planning</h3>
                  <p className="text-gray-300 mb-4">Professional garden design services tailored to your vision and budget.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Initial consultation and site survey</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom design plans and 3D visualizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Plant selection and placement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Garden Transformations</h3>
                  <p className="text-gray-300 mb-4">Complete garden makeovers from design to completion.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hardscaping and softscaping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Outdoor living spaces and patios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Drainage and irrigation systems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Planting & Maintenance</h3>
                  <p className="text-gray-300 mb-4">Expert planting services and ongoing garden maintenance.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tree and shrub installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flower beds and borders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lawn installation and care</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black p-8 rounded-lg border-2 border-[#C19A6B]">
                  <h3 className="text-2xl font-bold text-[#C19A6B] mb-4">Special Features</h3>
                  <p className="text-gray-300 mb-4">Add special features to enhance your outdoor space.</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Garden lighting installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Water features and ponds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#C19A6B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Decking and pergolas</span>
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
                Ready to Transform Your <span className="text-[#C19A6B]">Garden?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free consultation for your landscaping project in Bath
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
