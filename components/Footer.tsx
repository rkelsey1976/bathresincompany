"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <footer className="bg-black text-gray-300 py-12 border-t-2 border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <a 
                href="#home" 
                onClick={(e) => handleAnchorClick(e, '#home')}
                className="inline-block mb-4 py-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Bath Resin Company Logo"
                  width={300}
                  height={100}
                  className="h-16 sm:h-20 w-auto py-2"
                />
              </a>
              <p className="text-gray-400 mb-2">
                Family-run resin driveway and landscaping specialists in Bath, Somerset. Established 2004. Over 20 years of experience creating beautiful, lasting outdoor spaces.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Location:</strong> Bath, Somerset, United Kingdom<br />
                <strong>Service Areas:</strong> Bath, Bristol, Chippenham, Trowbridge, Frome, and surrounding areas in Somerset and Wiltshire<br />
                <strong>Qualifications:</strong> NVQ Groundworks, CPCS, City & Guilds, SWQR<br />
                <strong>Guarantee:</strong> 15-year warranty on all resin driveways
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => handleAnchorClick(e, '#home')}
                    className="hover:text-gray-200 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => handleAnchorClick(e, '#services')}
                    className="hover:text-gray-200 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleAnchorClick(e, '#about')}
                    className="hover:text-gray-200 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#gallery" 
                    onClick={(e) => handleAnchorClick(e, '#gallery')}
                    className="hover:text-gray-200 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a 
                    href="#reviews" 
                    onClick={(e) => handleAnchorClick(e, '#reviews')}
                    className="hover:text-gray-200 transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleAnchorClick(e, '#contact')}
                    className="hover:text-gray-200 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:07944268119"
                    className="hover:text-gray-200 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    07944 268119
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Bathresincompany@gmail.com"
                    className="hover:text-gray-200 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Bathresincompany@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#D4B89A] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bath, Somerset<br />Serving Bath, Somerset & Wiltshire</span>
                </li>
              </ul>
              <div className="mt-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-[#D4B89A] hover:text-[#E8D4B8] transition-colors text-sm underline"
                >
                  View Full Contact Details
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Bath Resin Company. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
