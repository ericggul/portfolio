import type { Metadata } from "next";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Jeanyoon Choi | Nonequality",
  description: "Jeanyoon Choi's artwork ≠ (Nonequality), a Multi-Device Web Artwork.",
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "portfolio-jyc.org/nonequality",
    siteName: "Jeanyoon Choi Artwork ≠ (Nonequality)",
    // images: [
    //   {
    //     url: "https://jeanyoonchoi.com/images/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Jeanyoon Choi Portfolio",
    //   },
    // ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation currTab="nonequality" />
      {children}
    </>
  );
}
