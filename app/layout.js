import { Michroma } from "next/font/google";
import { Pacifico, Great_Vibes, Lobster_Two, Allura, Inter, Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional for CSS variables
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"], // you can add more weights
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
  display: "swap",
});


const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});




export const metadata = {
  title: "My Website",
  description: "Using Michroma font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
