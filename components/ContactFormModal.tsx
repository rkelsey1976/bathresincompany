"use client";

import { useState, useEffect } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postcode: "",
    telephone: "",
    urgency: "5",
    services: [] as string[],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // In a real application, you would send this to an API endpoint
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        postcode: "",
        telephone: "",
        urgency: "5",
        services: [],
        message: "",
      });
    }, 1000);
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
              How can we <span className="text-black">help you?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => {
                  // Could pre-fill form or scroll to specific section
                }}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                I would like a quote
              </button>
              <button
                onClick={() => {
                  // Could pre-fill form or scroll to specific section
                }}
                className="bg-transparent border-2 border-black text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition-colors font-medium"
              >
                I have an enquiry
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border-2 border-gray-300">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="modal-postcode" className="block text-sm font-medium text-gray-700 mb-2">
                  Postcode *
                </label>
                <input
                  type="text"
                  id="modal-postcode"
                  required
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="modal-telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telephone Number *
                </label>
                <input
                  type="tel"
                  id="modal-telephone"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="modal-urgency" className="block text-sm font-medium text-gray-700 mb-2">
                Rate Your Urgency (0 being not urgent / 10 being an emergency) *
              </label>
              <input
                type="range"
                id="modal-urgency"
                min="0"
                max="10"
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full accent-gray-600"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0 - Not Urgent</span>
                <span className="font-semibold text-black">Current: {formData.urgency}</span>
                <span>10 - Emergency</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What Services Are You Interested In? *
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Driveway", "Patio", "Tarmac", "Internal", "Rubbercrumb", "Other"].map((service) => (
                  <label key={service} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 text-gray-600 border-gray-400 rounded focus:ring-gray-400 accent-gray-600"
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="modal-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>

            {status === "success" && (
              <div className="mt-4 p-4 bg-green-900 border-2 border-green-500 text-green-300 rounded-lg">
                Thank you! Your message has been sent.
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 p-4 bg-red-900 border-2 border-red-500 text-red-300 rounded-lg">
                Unable to send your message. Please fix errors then try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
