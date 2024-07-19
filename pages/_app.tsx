import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import FAB from "@/fab";
import Header from "@/header";
import Footer from "@/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Analytics />
      <div className="relative scroll-smooth select-none">
        <FAB icon={<></>} title="Hire Me" />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
