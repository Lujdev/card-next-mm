import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../components/BusinessCard/BusinessCard.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Megamassive Business Card",
  description: "Bussiness Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="h-screen flex flex-col justify-center items-center">
            <Navbar />
            {children}
          </main>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
