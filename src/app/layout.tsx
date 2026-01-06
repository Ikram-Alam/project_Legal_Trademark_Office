import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "USPTO Legal Trademark Office - Secure Your Brand Identity | Trademark Registration Services",
    template: "%s | USPTO Legal Trademark Office"
  },
  description: "Professional trademark registration, renewal, and revival services. Protect your brand with our expert legal team. Starting at just $49 + USPTO fees. 15+ years experience, 200,000+ trademarks filed.",
  keywords: [
    "trademark registration",
    "trademark attorney",
    "USPTO filing",
    "brand protection",
    "trademark renewal",
    "trademark revival",
    "intellectual property",
    "trademark search",
    "logo trademark",
    "business name trademark",
    "trademark application",
    "trademark lawyer",
    "legal trademark office",
    "trademark services",
    "trademark cost",
    "trademark fees",
    "federal trademark"
  ],
  authors: [{ name: "USPTO Legal Trademark Office" }],
  creator: "USPTO Legal Trademark Office",
  publisher: "USPTO Legal Trademark Office",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legaltrademarkoffice.com",
    siteName: "USPTO Legal Trademark Office",
    title: "USPTO Legal Trademark Office - Secure Your Brand Identity",
    description: "Professional trademark registration, renewal, and revival services. Protect your brand with our expert legal team. Starting at just $49 + USPTO fees.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "USPTO Legal Trademark Office - Trademark Registration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LegalTrademarkOffice",
    creator: "@LegalTrademarkOffice",
    title: "USPTO Legal Trademark Office - Secure Your Brand Identity",
    description: "Professional trademark registration, renewal, and revival services. Starting at just $49 + USPTO fees.",
    images: ["/twitter-image.jpg"],
  },
  applicationName: "USPTO Legal Trademark Office",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://legaltrademarkoffice.com",
  },
  category: "Legal Services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
