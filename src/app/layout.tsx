import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const foghe = localFont({
  src: "./fonts/foghe.otf",
  variable: "--font-foghe",
  weight: "100 900",
});
const sofiapro = localFont({
  src: [
    {
      path: "./fonts/Sofia Pro Light Az.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Sofia Pro Regular Az.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Sofia Pro Medium Az.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Sofia Pro Semi Bold Az.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Sofia Pro Bold Az.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sofiapro",
});

export const metadata: Metadata = {
  title: "Crumbs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiapro.variable} ${foghe.variable} ${inter.variable} antialiased bg-[#121212]`}
      >
        {children}
      </body>
    </html>
  );
}
