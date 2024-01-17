import type { Metadata } from "next";

import Navigation from "@/components/Navigation";

import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Jeanyoon Choi | Works",
  description:
    "Web-based new media artist Jeanyoon Choi. Featuring latest works by Jeanyoon Choi, a Computational Artist, Creative Developer, and Interaction Designer. Visit to look at Jeanyoon's work",
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "portfolio-jyc.org/works",
    siteName: "Jeanyoon Choi Portfolio",
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
      <Navigation currTab="works" />
      {children}
    </>
  );
}
