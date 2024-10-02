import type { Metadata } from "next";
import "./globals.css";
import { Baloo_2 } from "next/font/google";

const ballo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});
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
      <body
        className={`${ballo2.className} container mx-auto w-full h-screen bg-background`}
      >
        <div className="w-full md:max-w-[1440px] mx-auto h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
