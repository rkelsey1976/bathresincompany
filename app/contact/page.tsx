import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bath Resin Company - Get Your Free Quote",
  description: "Contact Bath Resin Company for a free quote on resin driveways and landscaping in Bath, Somerset, and Wiltshire. Call 07944 268119 or email Bathresincompany@gmail.com",
  keywords: "contact Bath Resin Company, resin driveway quote Bath, landscaping quote Bath, free quote Bath, driveway installation Bath",
  openGraph: {
    title: "Contact Bath Resin Company | Get Your Free Quote",
    description: "Get in touch with Bath Resin Company for professional resin driveway and landscaping services in Bath and surrounding areas.",
    url: "https://bathresincompany.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10"></div>
          <div className="absolute inset-0">
            <Image
              src="/asphalt-texture.jpg"
              alt="Asphalt texture background"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Contact <span className="text-[#C19A6B]">Us</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get your free quote for resin driveways and landscaping in Bath, Somerset, and Wiltshire
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-300 text-center">
                  <div className="w-16 h-16 bg-[#C19A6B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:07944268119"
                    className="text-gray-700 hover:text-[#C19A6B] transition-colors text-lg font-semibold"
                  >
                    07944 268119
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Mon-Sat: 8am - 6pm</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-300 text-center">
                  <div className="w-16 h-16 bg-[#C19A6B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:Bathresincompany@gmail.com"
                    className="text-gray-700 hover:text-[#C19A6B] transition-colors text-lg font-semibold break-all"
                  >
                    Bathresincompany@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-300 text-center">
                  <div className="w-16 h-16 bg-[#C19A6B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700 text-lg font-semibold">Bath, Somerset</p>
                  <p className="text-sm text-gray-600 mt-2">Serving Bath, Somerset & Wiltshire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Why Contact Us Section */}
        <section className="py-16 sm:py-24 bg-white border-t border-gray-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Contact <span className="text-[#C19A6B]">Bath Resin Company?</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Free Quotes</h3>
                  <p className="text-gray-700">
                    Get a free, no-obligation quote for your resin driveway or landscaping project. We&apos;ll assess your needs and provide a detailed estimate.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Advice</h3>
                  <p className="text-gray-700">
                    Benefit from over 20 years of experience. Our team can advise on the best solutions for your property and budget.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">15-Year Guarantee</h3>
                  <p className="text-gray-700">
                    All our resin driveways come with a comprehensive 15-year guarantee, giving you peace of mind.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Qualified</h3>
                  <p className="text-gray-700">
                    NVQ, CPCS, City & Guilds, and SWQR certified. You can trust our team to deliver professional, high-quality work.
                  </p>
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
