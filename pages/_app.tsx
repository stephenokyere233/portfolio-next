import Footer from "@/footer";
import Header from "@/header";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Onest } from "next/font/google";
import { Toaster } from "sonner";
import "../styles/globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${onest.variable} font-sans`}>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "var(--font-onest), system-ui, sans-serif",
            background: "#222222",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "0",
          },
        }}
      />
      <Analytics />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
