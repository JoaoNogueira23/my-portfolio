
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto(
  {
    weight: ['400', '500', '700'],
    subsets: ['latin']
  }
)

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
    <html lang="pt-br">
      <body className={roboto.className}>
      <Header />
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
