import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Personal finance app - Overview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
