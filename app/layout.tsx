import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopNavigation from "@/components/TopNavigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EFM Agentic AI — Enterprise Architecture & Industry Intelligence",
  description: "Multi-agent orchestration for enterprise architecture with industry intelligence, external forces analysis, and strategic planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-white">
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}
