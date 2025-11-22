import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

// Semua client-only
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elmon Gultom Law Firm",
  description: "Firma hukum terpercaya di Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
