import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WatchlistProvider } from "@/context/watchlistContext";
import MediaNavbar from "@/components/Media/MediaNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anime Horizon",
  description: "Explore Thousands of Animes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WatchlistProvider>
      <html lang="en" >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-animehorizon_black`}
        >
          <Navbar/>
          <MediaNavbar/>
            <main className="mt-14 md:mt-20">
                {children}
            </main>
          <Footer/>
        </body>
      </html>
    </WatchlistProvider>
  );
}
