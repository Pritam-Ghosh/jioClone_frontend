
import React from "react";
import Header from "@/components/atom/Header";
import Footer from "@/components/atom/Footer";
import "./globals.css";
import StoreProvider from "@/provider/StoreProvider"
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main>
            {children}
            <Toaster position="bottom-right" richColors theme="dark" visibleToasts={5}
              expand={true}
              gap={12}
            />
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
