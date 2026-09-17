import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavHeader from "./components/NavHeader/NavHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qikmove Landing Page",
  description: "Qikmove landing page",
   colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} 
      ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col">
        <NavHeader />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
