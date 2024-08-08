import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import LexmarkInfo from "./components/Lexmark-info";
import Footer from "../../components/Footer";
import styles from "../../styles/epson.module.css";
import Lexmark from "./dataa";

export const metadata = {
  title:
    " New and Used Lexmark Copiers | High-Quality and Affordable | Copiers Utah",
  description:
    "Discover High-Quality and Affordable Lexmark Copiers at Copiers Utah - Explore New and Used Options. Learn about the Benefits for Your Office and Request a Customized Quote",
  keywords:
    "Lexmark copiers, used Lexmark copiers, new Lexmark copiers, office copiers, copiers Utah, affordable copiers",
};

const breadCrumbs = [{ name: "Products", url: "/products" }];

const lexmark = () => {
  return (
    <div className={styles.main}>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <LexmarkInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default lexmark;
