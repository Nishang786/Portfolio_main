import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishang-portfolio.vercel.app"),
  title: {
    default: "My AI & Data Engineer Portfolio | Nishang Lingalwar",
    template: "%s | My Portfolio"
  },
  description:
    "My personal portfolio as a Data Analytics master's student and AI/Data Engineer building scalable AI systems, RAG applications, and intelligent data products.",
  keywords: [
    "Nishang Lingalwar",
    "AI Engineer",
    "Data Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Python Developer",
    "FastAPI",
    "RAG",
    "LLM",
    "Ireland"
  ],
  authors: [{ name: "Nishang Lingalwar" }],
  creator: "Nishang Lingalwar",
  openGraph: {
    title: "My AI & Data Engineer Portfolio | Nishang Lingalwar",
    description:
      "I build AI systems, machine learning pipelines, and data products for scale, precision, and recruiter-ready impact.",
    url: "https://nishang-portfolio.vercel.app",
    siteName: "Nishang Lingalwar Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nishang Lingalwar portfolio preview"
      }
    ],
    locale: "en_IE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "My AI & Data Engineer Portfolio | Nishang Lingalwar",
    description:
      "I build scalable AI systems, LLM applications, and data engineering work from Ireland.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        <a
          href="#content"
          className="sr-only z-[80] rounded-full bg-slate-900 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
