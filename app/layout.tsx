import MainLayout from "@/main-layout";
import { Onest } from "next/font/google";
import "../styles/globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} font-sans min-h-screen bg-page text-white antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
