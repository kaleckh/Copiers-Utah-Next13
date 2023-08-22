"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Context } from "./cart-context";
import { useState, useEffect } from "react";
import { TonerProvider } from "../providers/toner";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Copiers Utah',
//   description: 'Local Copier Company',
// }

export default function RootLayout({ children }) {
  let [cart, setCart] = useState([]);
  let [cartLook, setCartLook] = useState([]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <html lang="en">
      <TonerProvider>
        <Context.Provider value={{ cart, setCart, cartLook, setCartLook }}>
          <body className={inter.className}>{children}</body>
        </Context.Provider>
      </TonerProvider>
    </html>
  );
}
