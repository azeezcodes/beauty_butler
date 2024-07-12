import { Inter, Roboto } from "next/font/google";
import Script from 'next/script'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beauty Butler",
  description: "Unlock Your Beauty Concierge Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
      <Script src="https://getlaunchlist.com/js/widget.js" />
    </html>
  );
}
