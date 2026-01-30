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
                <strong>•BR Precision• | •Bath Resin Company Ltd•</strong><br />
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
          
          {/* Google Review Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <h3 className="text-white text-xl font-bold mb-2">Love Our Work?</h3>
              <p className="text-gray-300 mb-4">Help others find us by leaving a Google review!</p>
              <a
                href="https://share.google/ndQhM28JK5X9OgNYr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4285F4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#357AE8] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Leave a Google Review
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} •BR Precision• | •Bath Resin Company Ltd•. All rights reserved.</p>
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
