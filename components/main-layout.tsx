"use client";

import FAB from "@/fab";
import Footer from "@/footer";
import Header from "@/header";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      <FAB />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
