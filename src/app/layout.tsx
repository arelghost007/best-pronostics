import type { Metadata } from "next";
import { Oswald, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "R700 Pronos - Coupons VIP",
  description: "Pronostics sportifs et coupons VIP",
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
        {children}
      </body>
    </html>
  );
}
