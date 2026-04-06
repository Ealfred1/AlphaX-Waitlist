import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import CubesBackground from "@/components/CubesBackground";
import IntroOverlay from "@/components/Layout/IntroOverlay";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphax.global"),
  title: {
    default: "AlphaX — The Future of Decentralized Trading",
    template: "%s | AlphaX",
  },
  description:
    "Institutional-grade DeFi exchange with sub-second finality, deep liquidity, and trustless custody. Join the AlphaX waitlist for the decentralized future of markets.",
  keywords: ["AlphaX", "DeFi", "Waitlist", "Crypto Trading", "Decentralized Exchange", "P2P Transfers", "Trustless Custody", "Institutional Crypto"],
  authors: [{ name: "AlphaX Global Technologies" }],
  creator: "AlphaX Global Technologies",
  publisher: "AlphaX Global Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alphax.global",
    siteName: "AlphaX",
    title: "AlphaX — The Future of Decentralized Trading",
    description: "Join the AlphaX waitlist. Experience the next generation of institutional-grade decentralized trading.",
    images: [
      {
        url: "/alphaX.png",
        width: 1200,
        height: 630,
        alt: "AlphaX Global Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaX — The Future of Decentralized Trading",
    description: "Join the waitlist for the next-generation institutional-grade decentralized exchange.",
    creator: "@AlphaXGlobal_",
    images: ["/alphaX.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#080808] text-white">
        {/* Cinematic Intro Animation Layer */}
        <IntroOverlay />
        
        {/* Fixed full-viewport Cubes layer — behind EVERYTHING */}
        <CubesBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
