import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import CubesBackground from "@/components/CubesBackground";

export const metadata: Metadata = {
  title: "AlphaX — The Future of Decentralized Trading",
  description:
    "Join the AlphaX waitlist. Institutional-grade DeFi exchange with sub-second finality and trustless custody.",
  openGraph: {
    title: "AlphaX — The Future of Decentralized Trading",
    description: "Join the waitlist for the next-generation decentralized exchange.",
    images: ["/alphaX.png"],
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
        {/* Fixed full-viewport Cubes layer — behind EVERYTHING including navbar */}
        <CubesBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
