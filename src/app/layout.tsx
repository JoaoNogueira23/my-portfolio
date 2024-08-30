
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NaveBar from "@/components/header/pieces/NavBar";
import { useState } from "react";
import IconMenu from "@/components/icons/IconMenu";
import NaveBarMobile from "@/components/header/pieces/NavBarMobile";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio dev João Nogueira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
      <Header />
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
