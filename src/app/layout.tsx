import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "~/app/globals.css";
import Navbar from "~/components/sections/Navbar";
import Footer from "~/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metaMetadata = {
  metadataBase: new URL("https://saasitup.com"),
  title: {
    default: "SaasItUp | AI Automation & Software Development Agency",
    template: "%s | SaasItUp",
  },
  description:
    "SaasItUp builds AI automation systems, SaaS platforms, and modern software solutions for ambitious businesses. We help businesses automate, grow, and compete.",
  keywords: [
    "AI automation",
    "SaaS development",
    "custom AI agents",
    "web development",
    "business automation",
    "software agency",
    "AI-powered solutions",
    "SaaS platform",
  ],
  authors: [{ name: "SaasItUp" }],
  creator: "SaasItUp",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saasitup.com",
    title: "SaasItUp | AI Automation & Software Development Agency",
    description:
      "SaasItUp builds AI automation systems, SaaS platforms, and modern software solutions for ambitious businesses.",
    siteName: "SaasItUp",
    images: [
      {
        url: "https://saasitup.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaasItUp | AI Automation & Software Development Agency",
    description:
      "SaasItUp builds AI automation systems, SaaS platforms, and modern software solutions for ambitious businesses.",
    images: ["https://saasitup.com/opengraph-image.jpg"],
    creator: "@saasitup",
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
    google: "your-google-analytics-id",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0e" },
  ],
  width: "device-width",
  initialScale: 0.9,
  maximumScale: 5,
  userScalable: true,
  zoomable: true,
  responsive: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}