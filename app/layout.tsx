import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Sans_3 } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

// =============================
//     GLOBAL METADATA
// =============================
export const metadata: Metadata = {
  metadataBase: new URL("https://elmongultomlawfirm.com/"), // ← update this

  title: {
    default: "Elmon Gultom Law Firm – Konsultan Hukum Profesional Indonesia",
    template: "%s | Elmon Gultom Law Firm",
  },

  description:
    "Elmon Gultom Law Firm adalah firma hukum profesional di Indonesia yang melayani konsultasi hukum perusahaan, litigasi, kontrak, dan berbagai layanan hukum lainnya dengan tim advokat berpengalaman.",

  keywords: [
    "firma hukum",
    "konsultan hukum",
    "pengacara Indonesia",
    "advokat Jakarta",
    "legal consultant",
    "law firm Indonesia",
    "jasa hukum",
    "konsultasi hukum perusahaan",
    "litigasi",
    "kontrak hukum",
  ],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://elmongultomlawfirm.com/",
    title: "Elmon Gultom Law Firm – Konsultan Hukum Profesional Indonesia",
    description:
      "Firma hukum terpercaya di Indonesia dengan layanan litigasi, kontrak, bisnis, dan konsultasi hukum perusahaan.",
    siteName: "Elmon Gultom Law Firm",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elmon Gultom Law Firm",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elmon Gultom Law Firm – Konsultan Hukum Profesional",
    description:
      "Konsultan hukum terpercaya untuk perusahaan, litigasi, kontrak, dan berbagai layanan hukum.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://elmongultomlawfirm.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// =============================
//        ROOT LAYOUT
// =============================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={sourceSans.className}>
        {/* <Navbar /> */}
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
