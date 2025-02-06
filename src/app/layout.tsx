import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Navigation } from "@/components/navigation/navigation";
import "./globals.css";
import './layout.css'

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Personal finance app - Overview",
};

export function HTMLBodyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HTMLBodyLayout>
      <Navigation />
      <main>
        {children}
      </main>
    </HTMLBodyLayout>
  );
}
