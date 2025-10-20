import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "../providers/cart";
import { TonerProvider } from "../providers/toner";
import { OrderProvider } from "../providers/orders";
import WhyCopiers from "../components/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Copiers Utah',
//   description: 'Local Copier Company',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script 
          async src="https://www.googletagmanager.com/gtag/js?id=G-MN2KYPVC8G"
          strategy="afterInteractive"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());        
            gtag('config', 'G-MN2KYPVC8G');
          `}
        </Script>
      </head>
      <body className={inter.className}>
      <TonerProvider>
        <OrderProvider>
          <CartProvider>            
            {children}
          </CartProvider>
        </OrderProvider>
      </TonerProvider>
    </body>
  </html>
);
}
