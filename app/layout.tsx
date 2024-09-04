import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Lyonel Pierce's Portfolio Meeting | Fullstack Developer",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bluefavicon.ico" sizes="any" />
      </head>
      <body
        className={`${GeistSans.className} bg-[#000000] text-[#f5f5f5] h-screen`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
