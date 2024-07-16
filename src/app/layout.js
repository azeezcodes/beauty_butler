import localFont from "next/font/local";
import Script from 'next/script'
import "./globals.css";

// const myFont = localFont({
//   src: [{
//     path:"../../public/fonts/ApfelGrotezk-Fett.woff2"
//   },
//     {
//       path: "../../public/fonts/Euclid Circular A Medium.ttf"
//     },
//     {
//       path: "../../public/fonts/Euclid Circular A Regular.ttf"
//     },
//   ],
//   variable: "--font-ApfelGrotezk"
// })

const apfelGrotezkFett = localFont({
  src: '../../public/fonts/ApfelGrotezk-Fett.woff2',
  weight: '700', // or 'bold' as per your font weight
  variable: '--font-apfel-grotezk-fett',
});

const apfelGrotezkFettMittel = localFont({
  src: '../../public/fonts/ApfelGrotezk-Mittel.woff',
  variable: '--font-apfel-grotezk-fett-mittel',
});

const euclidCircularMedium = localFont({
  src: '../../public/fonts/Euclid Circular A Medium.ttf',
  weight: '500',
  variable: '--font-euclid-circular-medium',
});

const euclidCircularRegular = localFont({
  src: '../../public/fonts/Euclid Circular A Regular.ttf',
  weight: '400',
  variable: '--font-euclid-circular-regular',
});

export const metadata = {
  title: "Beauty Butler",
  description: "Unlock Your Beauty Concierge Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${apfelGrotezkFett.variable} ${euclidCircularMedium.variable} ${euclidCircularRegular.variable} ${apfelGrotezkFettMittel.variable}`}>
        {children}</body>
      <Script src="https://getlaunchlist.com/js/widget.js" />
    </html>
  );
}
