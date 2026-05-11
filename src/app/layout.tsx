import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const hebrewFont = Assistant({
  variable: "--font-hebrew",
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PreFlight - קורסי טיסה DCS",
  description: "פלטפורמת למידה לקהילת DCS World ישראל",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      lang="he"
      className={`${hebrewFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-hebrew">{children}</body>
    </html>
  );
}
