import type { Metadata } from "next";

import Script from "next/script";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Jeanyoon Choi Portfolio",
  description:
    "Web-based new media artist Jeanyoon Choi. Featuring latest works by Jean-Yoon Choi, a Computational Artist, Creative Developer, and Interaction Designer. Jeanyoon Choi is currently a PhD Candidate at KAIST.",
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "portfolio-jyc.org",
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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EQ8SQ1G84X" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-EQ8SQ1G84X');`}
      </Script>
      <head>
        <meta name="naver-site-verification" content="0cc6a64e8cffc3303071773ec9aa5fb26dd09ba8" />
      </head>
      <html lang="en">
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
