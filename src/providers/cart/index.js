"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);
  let [cartLook, setCartLook] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, cartLook, setCartLook }}>
      {children}
    </CartContext.Provider>
  );
};
