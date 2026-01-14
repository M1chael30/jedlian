import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
const poppins = Poppins({
 weight: "400",
 subsets: ["latin"],
});

export const metadata = {
 title: "Jedlian Holdings Inc.",
 description: "Jedlian Holdings Website.",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body className={`${poppins.className} antialiased`}>
    <Nav />
    <main>{children}</main>
    <Footer/>
   </body>
  </html>
 );
}
