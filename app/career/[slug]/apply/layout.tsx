import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Job | Code Huddle",
  description:
    "Apply for a job at Code Huddle. We are a team of developers who are passionate about building innovative software solutions.",
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
