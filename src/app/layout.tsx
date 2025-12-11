import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans, Bitter, Libre_Franklin } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

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
    "Graduate student interested in HAI, Knowledge Work, and AI Alignment",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      {process.env.NODE_ENV === "production" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
          </Script>
        </>
      ) : (
        <></>
      )}
      <body className={fontClassNames}>{children}</body>
    </html>
  );
}
