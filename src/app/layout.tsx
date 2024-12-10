import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./provider";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const wastedVindey = localFont({
  src:"./fonts/kugile.ttf",
  weight:"900"
})

export const metadata: Metadata = {
  title: "mOdO",
  description: "Next Generation Collaboration Tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<Providers>
    <html lang="en">
      <body
        className={` ${wastedVindey.className} antialiased text-slate-950`}>
        {children}
      </body>
    </html>
  </Providers>

  );
}
