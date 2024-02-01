import type { Metadata } from "next";
import { FontClassNames } from "@/styles/font";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "책방",
  description: "책방",
};

import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from "@/styles/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FontClassNames}>
        <ConfigProvider theme={theme}>
          <div className="md:container mx-auto">
            <Navbar></Navbar>
            {children}
          </div>
        </ConfigProvider>
      </body>
    </html>
  );
}