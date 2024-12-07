import type { Metadata } from "next";
import { Quicksand } from 'next/font/google';
import "./globals.css";

const QuicksandFont = Quicksand({
  weight: '500',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Finance APP",
  description: "App to  managemente  finances  and investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${QuicksandFont.className} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
