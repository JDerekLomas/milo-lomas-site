import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Milo Lomas",
  description: "Experimental music from Amsterdam. Pittsburgh roots, German-American heritage. Sonic landscapes between the organic and the artificial.",
  keywords: ["music", "experimental", "electronic", "Amsterdam", "producer", "artist"],
  authors: [{ name: "Milo Lomas" }],
  openGraph: {
    title: "Milo Lomas",
    description: "Experimental music from Amsterdam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased noise scanlines`}
      >
        {children}
      </body>
    </html>
  );
}
