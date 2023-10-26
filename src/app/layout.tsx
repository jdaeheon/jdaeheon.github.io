import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans, Bitter, Libre_Franklin } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans-font",
});
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--bitter-font",
});
const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--franklin-font",
});

// [SOURCE] Font Variables
// https://nextjs.org/docs/app/api-reference/components/font#css-variables
// const fontClassNames = `${open-sans.className} ${merriweather.variable} ${inter.variable} ${poppins.variable}`;
const fontClassNames = `${openSans.className} ${bitter.variable} ${franklin.variable}`;

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
      <meta name="robots" content="noindex" />
      <body className={fontClassNames}>{children}</body>
    </html>
  );
}
