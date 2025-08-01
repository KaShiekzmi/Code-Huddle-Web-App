import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Code Huddle | Join Our Team",
  description:
    "Join Code Huddle and be part of a dynamic team building innovative software solutions. Explore exciting career opportunities in software development, design, and technology.",
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
