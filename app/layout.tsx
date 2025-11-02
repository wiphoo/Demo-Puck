import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo Puck Editor",
  description: "A demonstration of the Puck editor in Next.js",
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
