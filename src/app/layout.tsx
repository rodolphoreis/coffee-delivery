import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee Delivery",
  description: "App about Coffee Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
