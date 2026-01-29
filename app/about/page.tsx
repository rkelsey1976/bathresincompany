import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bath Resin Company - Family-Run Specialists Since 2004",
  description: "Learn about Bath Resin Company - a family-run business from Bath with over 20 years of experience in resin driveways and landscaping. Three generations of expertise creating beautiful outdoor spaces.",
  keywords: "about Bath Resin Company, family-run business Bath, resin driveway specialists, landscaping experts Bath, established 2004",
  openGraph: {
    title: "About Bath Resin Company | Family-Run Specialists Since 2004",
    description: "Family-run resin driveway and landscaping specialists in Bath, Somerset. Over 20 years of experience creating beautiful, lasting outdoor spaces.",
    url: "https://bathresincompany.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
