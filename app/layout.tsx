import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Footer from "@/components/layout/Footer";
import QueryClientWrapper from "./QueryClientWrapper";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Huddle | Build Your Startup Smarter",
  description:
    "The company aims to digitally transform early-stage startups and SMEs through our robust expertise in custom software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <Header />
        <QueryClientWrapper>{children}</QueryClientWrapper>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
