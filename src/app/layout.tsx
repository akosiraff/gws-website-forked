import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Workforce Solutions — International Labour Recruitment Australia",
  description:
    "Australia's premier international workforce partner. Rapid deployment of qualified trade and industrial talent for mining, construction, and manufacturing projects.",
  keywords: "international recruitment australia, labour hire mining construction, philippine workers australia, global workforce",
  openGraph: {
    title: "Global Workforce Solutions",
    description: "International labour recruitment for Australian mining, construction & manufacturing.",
    url: "https://www.globalworkforcesolutions.com.au",
    siteName: "Global Workforce Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050D1A] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
