import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import InitialLoader from "./components/InitialLoader";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable:"--font-space-grotesk",
  weight: ["700","500"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable:"--font-ibm-plex-mono",
  weight: ["500","600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SomaLab",
  description: "Learn. Explore. Discover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <InitialLoader/>
        {children}
        </body>
    </html>
  );
}
