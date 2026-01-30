import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Dynamically import below-the-fold components to reduce initial bundle size
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="py-8 sm:py-12 bg-[#FAF5ED] min-h-[400px]" />,
});
const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"), {
  loading: () => <div className="py-8 sm:py-12 bg-white min-h-[400px]" />,
});
const ImageGallery = dynamic(() => import("@/components/ImageGallery"), {
  loading: () => <div className="py-8 sm:py-12 bg-white min-h-[400px]" />,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  loading: () => <div className="py-8 sm:py-12 bg-black min-h-[400px]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="py-8 sm:py-12 bg-[#FAF5ED] min-h-[400px]" />,
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="py-8 sm:py-12 bg-white min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="bg-black text-gray-300 py-12 min-h-[200px]" />,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceAreas />
        <ImageGallery />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
