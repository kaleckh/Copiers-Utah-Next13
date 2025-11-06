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
      <body className={inter.className}>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-995653351" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-995653351');
          `}
        </Script>
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