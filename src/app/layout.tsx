import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Force rebuild for GitHub Pages cache bust
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwi Budi Setyonugroho | Data Analyst Portfolio",
  description: "Entry-level Data Analyst specializing in transforming complex data into actionable insights. Expertise in Python, SQL, Excel, data visualization, and predictive modeling. IBM Data Analyst Professional Certificate holder.",
  keywords: [
    "Data Analyst",
    "Data Analytics",
    "Python",
    "SQL",
    "Excel",
    "Data Visualization",
    "Business Intelligence",
    "IBM Certified",
    "Dwi Budi Setyonugroho",
    "Portfolio"
  ],
  authors: [{ name: "Dwi Budi Setyonugroho" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dwi Budi Setyonugroho | Data Analyst Portfolio",
    description: "Entry-level Data Analyst specializing in transforming complex data into actionable insights through Python, SQL, and advanced analytics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwi Budi Setyonugroho | Data Analyst",
    description: "Data Analyst Portfolio - Python, SQL, Excel, Data Visualization & Business Intelligence",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
        <ShadcnToaster />
        <SonnerToaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
