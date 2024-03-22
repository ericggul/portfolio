import type { Metadata } from "next";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Jeanyoon Choi | Texts",
  description: "Texts of Jeanyoon Choi. Jeanyoon Choi Artistic Texts and Research.",
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "portfolio-jyc.org/texts",
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
      <Navigation currTab="texts" />
      {children}
    </>
  );
}
