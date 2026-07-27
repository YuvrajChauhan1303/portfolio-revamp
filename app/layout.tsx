import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuvraj Chauhan — Software Engineer",
  description:
    "Software engineer portfolio — projects, experience, education and publications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="bg-base text-ink font-sans antialiased">
        <div className="lg:flex lg:min-h-screen">
          <Sidebar />
          <div className="relative lg:ml-[400px] xl:ml-[440px] flex-1">
            <Navbar />
            <main className="min-h-screen pb-28 lg:pb-16 pt-6 lg:pt-28">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
