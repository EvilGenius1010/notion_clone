import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./provider";

const kugile = localFont({
  src: "./fonts/kugile.ttf",
  weight: "900",
});

export const metadata: Metadata = {
  title: "caderno",
  description: "Next Generation Collaboration Tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html
        lang="en"
        style={{
           // Ensure the html takes the full height
          backgroundImage:
            "linear-gradient(rgba(188,231,253,1), rgba(255,245,190,1))",
          backgroundSize: "cover",
        }}
      >
        <body
          className={`${kugile.className} antialiased text-slate-950`}
          style={{ height: "100%" }} // Ensure body also takes the full height
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
