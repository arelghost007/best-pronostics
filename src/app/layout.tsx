import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import MetaPixel from "@/components/MetaPixel/MetaPixel";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://best-pronostics.vercel.app/"),

  title: {
    default: "Best Pronostics — Pronostics VIP Gratuits",
    template: "%s | Best Pronostics",
  },

  description:
    "Découvrez gratuitement nos pronostics sportifs, analyses de matchs et coupons VIP. Rejoignez la communauté Best Pronostics.",

  keywords: [
    "Best Pronostics",
    "pronostics sportifs",
    "pronostics football",
    "pronostics gratuits",
    "pronostics VIP",
    "coupons sportifs",
    "paris sportifs",
    "analyse football",
  ],

  authors: [{ name: "Best Pronostics" }],
  creator: "Best Pronostics",
  publisher: "Best Pronostics",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://best-pronostics.vercel.app/",
    siteName: "Best Pronostics",

    title: "Best Pronostics — Pronostics VIP Gratuits",

    description:
      "Pronostics sportifs gratuits, analyses de matchs et coupons VIP. Rejoignez Best Pronostics et découvrez nos sélections.",

    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Best Pronostics — Pronostics VIP Gratuits",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Pronostics — Pronostics VIP Gratuits",
    description:
      "Pronostics sportifs gratuits, analyses de matchs et coupons VIP.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${oswald.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-space">
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
