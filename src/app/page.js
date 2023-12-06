import Head from "next/head";
import Data from './dataa'
import Script from "next/script";

export const metadata = {
  title: 'Copiers for Sale and Rent | Office Copy Machines | Copiers Utah',
  description: 'Copiers Utah: Quality copiers for sale/rent. Pick from various office machines with advanced features & affordable prices. Contact us now! ',
}
export default function Home() {
  return (
    <>
      <Script
      id="Google Working"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Data />
    </>
  );
}
