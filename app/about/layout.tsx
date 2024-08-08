import type { Metadata } from "next";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Jeanyoon Choi | About",
  description: "Bio of Jeanyoon Choi. Jeanyoon Choi Artistic Bio and CV.",
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "portfolio-jyc.org/about",
    siteName: "Jeanyoon Choi Portfolio",
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
      <Navigation currTab="about" />
      {children}
    </>
  );
}
