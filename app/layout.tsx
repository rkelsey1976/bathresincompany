import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "•BR Precision• | •Bath Resin Company Ltd• | Bespoke Resin Driveways & Landscaping Services in Bath, Somerset",
  description: "•BR Precision• | •Bath Resin Company Ltd• - Family-run resin driveway and landscaping specialists in Bath, Somerset, and Wiltshire. Established 2004. Over 20 years of experience. NVQ, CPCS, City & Guilds, and SWQR qualified. 15-year guarantee on resin driveways. Professional resin bound driveways, tarmac services, garden transformations, and landscaping across Bath, Bristol, Chippenham, Trowbridge, and surrounding areas.",
  keywords: "resin driveways Bath, resin bound driveways Bath, landscaping Bath, garden transformations Bath, tarmac services Bath, driveway installation Bath, resin driveways Somerset, landscaping Somerset, Bath Resin Company, BR Precision, BR Landscapes, resin driveways Bristol, resin driveways Chippenham, resin driveways Trowbridge, qualified driveway installers Bath, NVQ groundworks Bath, CPCS certified Bath, City and Guilds resin surfacing, SWQR streetworks Bath",
  authors: [{ name: "•BR Precision• | •Bath Resin Company Ltd•" }],
  creator: "•BR Precision• | •Bath Resin Company Ltd•",
  publisher: "•BR Precision• | •Bath Resin Company Ltd•",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bathresincompany.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "•BR Precision• | •Bath Resin Company Ltd• | Bespoke Resin Driveways & Landscaping",
    description: "Family-run resin driveway and landscaping specialists in Bath. Over 20 years of experience creating beautiful, lasting outdoor spaces.",
    url: "https://bathresincompany.co.uk",
    siteName: "•BR Precision• | •Bath Resin Company Ltd•",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://bathresincompany.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "Bath Resin Company Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "•BR Precision• | •Bath Resin Company Ltd• | Bespoke Resin Driveways & Landscaping",
    description: "Family-run resin driveway and landscaping specialists in Bath. Over 20 years of experience.",
    images: ["https://bathresincompany.co.uk/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
