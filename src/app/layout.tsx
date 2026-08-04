import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "sonner";
import { SITE_CONFIG, getPersonSchema } from "@/lib/site-config";
import { MotionProvider } from "@/components/portfolio/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.primaryDomain),
  title: {
    default: SITE_CONFIG.title,
    template: "%s | Dwi Budi Setyonugroho",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Data Analyst",
    "Data Analytics",
    "Python",
    "SQL",
    "PostgreSQL",
    "Power BI",
    "Excel",
    "Data Visualization",
    "Business Intelligence",
    "Predictive Modeling",
    "IBM Certified",
    "Google Certified",
    "DataCamp Certified",
    "Dwi Budi Setyonugroho",
    "Portfolio"
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.primaryDomain }],
  creator: SITE_CONFIG.name,
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_CONFIG.primaryDomain,
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.primaryDomain,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <MotionProvider>
          {children}
        </MotionProvider>
        <SonnerToaster position="bottom-right" richColors />
      </body>
    </html>
  );
}

