
import React from "react";
import Header from "@/components/atom/Header";
import Footer from "@/components/atom/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
