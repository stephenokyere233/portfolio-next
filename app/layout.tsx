import JsonLd from "@/json-ld";
import MainLayout from "@/main-layout";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { SITE } from "../constants";
import { getGlobalJsonLd } from "../lib/json-ld";
import "../styles/globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} font-sans min-h-screen bg-page text-white antialiased`}
      >
        <JsonLd data={getGlobalJsonLd()} />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
