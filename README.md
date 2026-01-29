# Bath Resin Company Website

A modern, SEO-optimized website for Bath Resin Company built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ **SEO Optimized**: Comprehensive metadata, structured data (JSON-LD), sitemap, and robots.txt
- ✅ **Responsive Design**: Fully responsive across all devices
- ✅ **Modern UI**: Beautiful, clean design with Tailwind CSS
- ✅ **Performance**: Built with Next.js 14 App Router for optimal performance
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Accessibility**: Semantic HTML and proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap configuration
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Services.tsx         # Services section
│   ├── Reviews.tsx          # Customer reviews
│   ├── ContactForm.tsx      # Contact form
│   ├── Footer.tsx           # Footer
│   └── StructuredData.tsx   # JSON-LD structured data
└── public/                  # Static assets
```

## SEO Features

- Comprehensive metadata (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card metadata
- JSON-LD structured data for LocalBusiness schema
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs
- Semantic HTML structure

## Contact Information

- **Email**: Bathresincompany@gmail.com
- **Phone**: 07944 268119
- **Website**: https://bathresincompany.co.uk

## License

© 2024 The Bath Resin Company. All rights reserved.
