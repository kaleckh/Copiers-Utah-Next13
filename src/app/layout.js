import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "../providers/cart";
import { TonerProvider } from "../providers/toner";
import { OrderProvider } from "../providers/orders";
import WhyCopiers from "../components/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Copiers Utah',
//   description: 'Local Copier Company',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TonerProvider>
        <OrderProvider>
          <CartProvider>            
            <body className={inter.className}>{children}</body>
          </CartProvider>
        </OrderProvider>
      </TonerProvider>
    </html>
  );
}
