import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "../providers/cart";
import { TonerProvider } from "../providers/toner";
import { OrderProvider } from "../providers/orders";
import WhyCopiers from "../components/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from "next/script";

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "G-NPE2R79Y77";

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
        {GOOGLE_ADS_ID ? (
          <>
            <Script
              id="gtag-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="beforeInteractive"
            />
            <Script id="gtag-inline" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        ) : null}
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