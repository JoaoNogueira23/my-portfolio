import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import NaveBar from "@/components/header/pieces/NavBar";

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
        <header>
            <div className="title-site">
                <h2>
                    <span className="icon-tag">{"</"}</span>
                    <span className="">João Martins</span>
                    <span className="icon-tag">{">"}</span>
                </h2>
            </div>

            <NaveBar />
          </header>
        {children}
      </body>
    </html>
  );
}
