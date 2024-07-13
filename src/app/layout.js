import localFont from "next/font/local";
import Script from 'next/script'
import "./globals.css";

const myFont = localFont({
  src: [{
    path:"../../public/fonts/ApfelGrotezk-Regular.woff"
  }],
  variable: "--font-ApfelGrotezk"
})

export const metadata = {
  title: "Beauty Butler",
  description: "Unlock Your Beauty Concierge Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
      <Script src="https://getlaunchlist.com/js/widget.js" />
    </html>
  );
}
