import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans, Bitter, Inter, Instrument_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans-font",
  // weight: ["300"],
});
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--bitter-font",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--instrument-font",
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// [SOURCE] Font Variables
// https://nextjs.org/docs/app/api-reference/components/font#css-variables
// const fontClassNames = `${open-sans.className} ${merriweather.variable} ${inter.variable} ${poppins.variable}`;
const fontClassNames = `${openSans.className} ${bitter.variable} ${instrument.variable}`;

export const metadata: Metadata = {
  title: "Daeheon Jeong",
  description:
    "Undegraduate student interested in HAI, Visualization, and Accessibility",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontClassNames}>{children}</body>
    </html>
  );
}
