import type { Metadata } from "next";

import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Jeanyoon Choi Portfolio",
  description:
    "Web-based new media artist Jeanyoon Choi. Featuring latest works by Jeanyoon Choi, a Computational Artist, Creative Developer, and Interaction Designer. Jeanyoon Choi is currently a PhD Candidate at KAIST.",
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "https://www.portfolio-jyc.org/",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
