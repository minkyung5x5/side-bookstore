import type { Metadata } from "next";
import { FontClassNames } from "@/styles/fonts/font";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "책방",
  description: "책방",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FontClassNames}>
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
