import type { Metadata } from "next";

import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Jeanyoon Choi Portfolio",
  description:
    "Web-based new media artist Jeanyoon Choi. Featuring latest works by Jeanyoon Choi, a Computational Artist, Creative Developer, and Interaction Designer. Jeanyoon Choi is currently a PhD Candidate at KAIST.",
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
