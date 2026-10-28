import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SchoolMɔzɔti — TD Maths · IAI & autres établissements",
  description:
    "Programme d'accompagnement académique en mathématiques pour les étudiants de l'IAI-Togo, IPNET, UCAO et autres établissements. TD en ligne, suivi personnalisé, à partir de 2 000 FCFA/mois.",
  keywords: [
    "TD Maths",
    "IAI Togo",
    "accompagnement académique",
    "mathématiques",
    "SchoolMozoti",
    "IPNET",
    "UCAO",
  ],
  authors: [{ name: "SchoolMɔzɔti" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}