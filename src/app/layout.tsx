
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";


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
  about,
  projects
}: Readonly<{
  children: React.ReactNode
  about: React.ReactNode
  projects: React.ReactNode
}>) {


  return (
    <html lang="pt-br">
      <body className={roboto.className}>
      <Header />
        <main>
          {children}
          {projects}
          {about}
        </main>
      <Footer />
      </body>
    </html>
  );
}
