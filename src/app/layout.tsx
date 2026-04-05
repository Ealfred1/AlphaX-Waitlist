import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "AlphaX — The Future of Decentralized Trading",
  description: "Join the waitlist for AlphaX, the next generation decentralized exchange with institutional-grade liquidity.",
  openGraph: {
    title: "AlphaX — The Future of Decentralized Trading",
    description: "Institutional-grade decentralized trading platform.",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
