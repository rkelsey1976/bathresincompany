import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import ImageGallery from "@/components/ImageGallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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
