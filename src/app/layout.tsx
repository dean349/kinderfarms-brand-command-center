import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KinderFarms® Brand Command Center | Master Brand Intelligence",
  description: "Next.js SaaS Brand Command Center for KinderFarms master brand architecture, 8-flavor seed design tokens, 3D packaging simulation, and Brand Asset Vault.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080914] text-white antialiased selection:bg-kf-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
