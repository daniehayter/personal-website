import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Product Manager for AI-powered SaaS. Continuous discovery, growth analytics and enterprise integrations — including an AI Trust Center builder that grew monthly platform engagement 700%.";

export const metadata: Metadata = {
  metadataBase: new URL("https://arondaniel.online"),
  title: {
    default: "Aron Daniel — Product Manager, AI-Powered SaaS",
    template: "%s — Aron Daniel",
  },
  description,
  openGraph: {
    title: "Aron Daniel — Product Manager, AI-Powered SaaS",
    description,
    url: "https://arondaniel.online",
    siteName: "Aron Daniel",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
