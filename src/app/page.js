import Script from "next/script";
import Section from "../components/Section";
import Header from "../components/Header";
import styles from "../styles/homepage.module.css";
import Footer from "../components/Footer";
import HomepageInfo from "@/components/Homepage-info";

export const metadata = {
  title: "Copiers for Sale and Rent | Office Copy Machines | Copiers Utah",
  description:
    "Copiers Utah: Quality copiers for sale/rent. Pick from various office machines with advanced features & affordable prices. Contact us now! ",
};


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
      <div className={styles.main}>
        <Header />
        <HomepageInfo />
        <Section />
        <Footer />
      </div>
    </>
  );
}
