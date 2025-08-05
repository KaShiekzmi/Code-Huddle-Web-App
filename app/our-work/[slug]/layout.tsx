import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Detail | Code Huddle",
  description:
    "Explore our work and see how we've helped our clients achieve their goals. We've worked with a variety of clients, from startups to SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
