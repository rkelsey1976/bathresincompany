"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does a resin driveway cost in Bath?",
    answer: "The cost of a resin driveway in Bath varies depending on size, preparation work needed, and design choices. We offer free, no-obligation quotes for all projects. Contact us at 07944 268119 or Bathresincompany@gmail.com to arrange a consultation. Our resin driveways come with a 15-year guarantee, making them an excellent long-term investment for your property in Bath, Somerset."
  },
  {
    question: "Do you offer a guarantee on resin driveways?",
    answer: "Yes! We offer a 15-year guarantee on all resin driveway installations - one of the longest guarantees in the industry. This is significantly longer than most competitors and demonstrates our confidence in the quality of our work. We're fully qualified (NVQ, CPCS, City & Guilds, SWQR) and fully insured, so you can have complete peace of mind."
  },
  {
    question: "What areas do you serve in Somerset and Wiltshire?",
    answer: "We serve Bath, Somerset, and Wiltshire, including Bristol, Chippenham, Trowbridge, Frome, Bradford-on-Avon, Melksham, Warminster, Westbury, Corsham, Keynsham, Midsomer Norton, Radstock, Wells, Glastonbury, Shepton Mallet, Devizes, Calne, Swindon, and surrounding areas. Contact us to confirm if we cover your specific location."
  },
  {
    question: "Are resin driveways eco-friendly?",
    answer: "Absolutely! Our resin driveways are permeable, allowing water to drain naturally into the ground. This helps prevent flooding and reduces surface water runoff. We use environmentally conscious materials and work with deep respect for nature and local wildlife. This eco-friendly approach is a core part of our values at Bath Resin Company."
  },
  {
    question: "How long have you been installing driveways in Bath?",
    answer: "Bath Resin Company was established in 2004 - that's over 20 years of experience! We're a family-run business with three generations of expertise in resin driveways and landscaping across Bath, Somerset, and Wiltshire. Our long-standing presence in the area means we understand local conditions and have built a strong reputation for quality workmanship."
  },
  {
    question: "What qualifications do your team have?",
    answer: "Our team is fully qualified with NVQ Groundworks, CPCS, City & Guilds, and SWQR certifications. We're fully insured and committed to the highest standards. These qualifications set us apart from general groundworks companies and ensure you receive professional, certified installation services. All our work is completed to industry-leading standards."
  },
  {
    question: "What's the difference between resin driveways and block paving?",
    answer: "Resin driveways offer several advantages over block paving: they're seamless (no weeds growing between blocks), permeable (better drainage), require minimal maintenance, and come with our 15-year guarantee. Resin driveways also provide a smoother surface and are available in a wide range of colors. Unlike block paving, resin driveways won't shift or settle over time, making them a more durable long-term solution for properties in Bath and Somerset."
  },
  {
    question: "How long does it take to install a resin driveway?",
    answer: "Installation time varies depending on the size of the project and any preparation work required. Typically, a standard resin driveway installation takes 2-5 days. We work efficiently while maintaining our high standards of quality. We'll provide a detailed timeline during your free consultation. Many of our customers are impressed that we can complete the work while they're away, returning to a beautiful finished driveway."
  },
  {
    question: "Do you work on weekends?",
    answer: "We're open Monday-Saturday, 8am-6pm. We're closed on Sundays to allow our team proper rest. Contact us to discuss your project timeline and we'll work with you to find a schedule that suits your needs. We understand that driveway work can be disruptive, so we always aim to complete projects as efficiently as possible."
  },
  {
    question: "Can you install resin driveways in winter?",
    answer: "Yes, resin driveways can be installed in most weather conditions, though we avoid installation during heavy rain or freezing temperatures. We work year-round across Bath, Somerset, and Wiltshire, scheduling installations when conditions are optimal for the best results. Contact us to discuss the best time for your project."
  },
  {
    question: "Do you offer free quotes?",
    answer: "Yes! We offer free, no-obligation quotes for all our services including resin driveways, landscaping, and tarmac work. Simply contact us at 07944 268119 or Bathresincompany@gmail.com to arrange a consultation. We'll visit your property, discuss your requirements, and provide a detailed quote with no pressure to proceed."
  },
  {
    question: "Why should I choose Bath Resin Company over other driveway installers?",
    answer: "Bath Resin Company offers several unique advantages: a 15-year guarantee (one of the longest in the industry), over 20 years of experience, full qualifications (NVQ, CPCS, City & Guilds, SWQR), and a family-run business with three generations of expertise. We're perfectionists who pay meticulous attention to detail, use eco-friendly materials, and are fully insured. Our commitment to excellence and customer satisfaction sets us apart from general groundworks companies."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 bg-[#FAF5ED]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
            Frequently Asked <span className="text-[#D4B89A]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about resin driveways and our services in Bath, Somerset, and Wiltshire
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#D4B89A] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#D4B89A] focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#D4B89A] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07944268119"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07944 268119
            </a>
            <a
              href="mailto:Bathresincompany@gmail.com"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
