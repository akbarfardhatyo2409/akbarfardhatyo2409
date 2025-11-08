import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Riza Busana Exclusive – Custom Tailoring for Men, Women & Children in Padang Tiakar",
  description: "Riza Busana Exclusive provides professional tailoring for men, women, and children, offering office wear, wedding gowns, and custom designs with attention to every detail.",
  keywords: "tailoring, custom clothing, men's wear, women's wear, children's clothing, office wear, wedding gown, kebaya, Padang Tiakar",
  openGraph: {
    title: "Riza Busana Exclusive – Custom Tailoring for Men, Women & Children",
    description: "High-quality custom tailoring services in Padang Tiakar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
