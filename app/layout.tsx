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
  metadataBase: new URL("https://dcodr1303.vercel.app"),

  title: {
    default: "Yuvraj Chauhan — Software Engineer | Security, Systems & AI",
    template: "%s | Yuvraj Chauhan",
  },

  description:
    "Yuvraj Chauhan is a software engineer and M.Tech CSE student at IIT Bombay, building at the intersection of cybersecurity, systems, and AI. Explore projects, research publications, and experience.",

  keywords: [
    "Yuvraj Chauhan",
    "software engineer portfolio",
    "IIT Bombay",
    "cybersecurity engineer",
    "systems engineer",
    "AI research",
    "deep learning",
    "M.Tech Computer Science",
  ],

  authors: [{ name: "Yuvraj Chauhan", url: "https://dcodr1303.vercel.app" }],
  creator: "Yuvraj Chauhan",
  publisher: "Yuvraj Chauhan",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://dcodr1303.vercel.app",
    siteName: "Yuvraj Chauhan",
    title: "Yuvraj Chauhan — Software Engineer | Security, Systems & AI",
    description:
      "Software engineer and M.Tech CSE student at IIT Bombay working across cybersecurity, systems, and artificial intelligence. Projects, research, and experience.",
    images: [
      {
        url: "/profile2.png",
        width: 1200,
        height: 630,
        alt: "Yuvraj Chauhan — Software Engineer",
      },
    ],
    locale: "en_US",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yuvraj Chauhan — Software Engineer",
    description:
      "Software engineer and M.Tech CSE student at IIT Bombay working across cybersecurity, systems, and AI.",
    images: ["/profile2.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
