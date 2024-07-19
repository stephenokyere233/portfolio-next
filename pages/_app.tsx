import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layout/main.layout";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Analytics />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
