"use client";

import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-br from-[#D4B89A] to-[#E8D4B8] p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
          <p className="text-white/90">Get in touch with Bath Resin Company</p>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#D4B89A] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#D4B89A] rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-600">Call us anytime</p>
                </div>
              </div>
              <a
                href="tel:07944268119"
                className="text-2xl font-bold text-[#D4B89A] hover:text-[#C19A6B] transition-colors block"
              >
                07944 268119
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon-Sat: 8am - 6pm</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#D4B89A] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#D4B89A] rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">Send us a message</p>
                </div>
              </div>
              <a
                href="mailto:Bathresincompany@gmail.com"
                className="text-lg font-semibold text-[#D4B89A] hover:text-[#C19A6B] transition-colors block break-all"
              >
                Bathresincompany@gmail.com
              </a>
              <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-[#D4B89A] transition-colors md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#D4B89A] rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                  <p className="text-sm text-gray-600">Where to find us</p>
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Bath, Somerset</p>
              <p className="text-gray-700 mb-4">
                Serving Bath, Somerset & Wiltshire
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Service Areas:</strong></p>
                <p className="text-sm text-gray-700">
                  Bath, Bristol, Chippenham, Trowbridge, Frome, Bradford-on-Avon, Melksham, Warminster, Westbury, Corsham, Keynsham, Midsomer Norton, Radstock, Wells, Glastonbury, Shepton Mallet, Devizes, Calne, Swindon
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D4B89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Business Hours
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900">Monday - Saturday</p>
                <p className="text-gray-700">8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sunday</p>
                <p className="text-gray-700">Closed</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:07944268119"
              className="flex-1 min-w-[200px] bg-[#D4B89A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E8D4B8] transition-colors text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="mailto:Bathresincompany@gmail.com"
              className="flex-1 min-w-[200px] bg-transparent border-2 border-[#D4B89A] text-[#D4B89A] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4B89A] hover:text-white transition-colors text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
