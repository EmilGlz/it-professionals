import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });


const links = [
  {
    id: 1,
    title: "About us",
    url: "/about",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
