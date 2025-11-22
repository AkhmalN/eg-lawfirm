import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elmon Gultom Law Firm - Konsultan Hukum Profesional',
  description:
    'Firma hukum terpercaya di Indonesia. Melayani konsultasi hukum perusahaan, litigasi, kontrak, dan berbagai layanan hukum lainnya dengan tim profesional berpengalaman.',
  keywords:
    'firma hukum, konsultan hukum, pengacara, advokat, legal consultant, law firm Indonesia, jasa hukum, konsultasi hukum perusahaan',
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
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
