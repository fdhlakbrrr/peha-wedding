import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const mainFont = Roboto_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Bagas & Putri Wedding",
  description: `Walimatul 'Urs - Muhammad Bagas Rinaldi & Putri Handayani`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://peha-dev.vercel.app"></meta>
        <meta property="og:site_name" content="Walimatul 'Urs"></meta>
        <meta property="og:title" content="Bagas & Putri Wedding"></meta>
        <meta
          property="og:description"
          content="Walimatul 'Urs - Muhammad Bagas Rinaldi & Putri Handayani"
        ></meta>
        <meta
          property="twitter:description"
          content="Walimatul 'Urs - Muhammad Bagas Rinaldi & Putri Handayani"
        ></meta>
      </head>
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
