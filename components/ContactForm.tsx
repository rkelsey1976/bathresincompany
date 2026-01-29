"use client";

import { useState } from "react";
import Image from "next/image";
import ContactFormModal from "@/components/ContactFormModal";

export default function ContactForm() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-8 sm:py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Images */}
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300 hover:scale-105 transition-transform">
                    <Image
                      src="/images/gallery/520462917_724981610452706_4977734472763914770_n.jpg"
                      alt="Resin driveway installation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300 hover:scale-105 transition-transform mt-8">
                    <Image
                      src="/images/gallery/534684338_748840368066830_3949569465307143283_n.jpg"
                      alt="Landscaping project"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300 hover:scale-105 transition-transform">
                    <Image
                      src="/images/gallery/537569546_754472764170257_7562291006898665826_n (1).jpg"
                      alt="Professional installation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300 hover:scale-105 transition-transform mt-8">
                    <Image
                      src="/images/gallery/594132339_839910372293162_5910545460222262064_n.jpg"
                      alt="Completed project"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA Content */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl border-2 border-gray-300 relative overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4B89A]/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4B89A]/5 rounded-full -ml-24 -mb-24"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-black">
                      How can we <span className="text-[#D4B89A]">help you?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                      Get in touch with us for a free quote or to discuss your project. We&apos;re here to help bring your vision to life.
                    </p>
                    
                    {/* Feature Icons */}
                    <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Free Quotes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Quick Response</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>15-Year Guarantee</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => setIsFormModalOpen(true)}
                        className="bg-gradient-to-br from-[#C19A6B] via-[#D4B89A] to-[#E8D4B8] text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-[#E8D4B8] hover:via-[#F5E6D3] hover:to-[#FAF5ED] transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(212,184,154,0.6)] hover:scale-110 border-2 border-[#D4B89A]/30 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get a Free Quote
                      </button>
                      <button
                        onClick={() => setIsFormModalOpen(true)}
                        className="bg-transparent border-2 border-[#D4B89A] text-[#D4B89A] px-10 py-5 rounded-xl hover:bg-[#D4B89A] hover:text-white transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </>
  );
}
