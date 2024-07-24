import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import GradientCircle from "@/components/ui/gradient/Gradient";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[90%] mx-auto lg:w-full">
        <Navbar />
        {/* <div className="mt-[300px] left-[-200px] absolute w-[400px] h-[400px] overflow-hidden">
          <GradientCircle />
        </div>
        <div className="mt-[180px] right-[-250px] absolute w-[500px] h-[500px] overflow-hidden">
          <GradientCircle />
        </div> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
