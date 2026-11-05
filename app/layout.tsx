
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | IT Student Portfolio",
  description:
    "Personal portfolio of an Information Technology student showcasing skills, projects, and development experience.",
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
