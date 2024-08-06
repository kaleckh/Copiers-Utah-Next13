import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import KonicaInfo from "./components/Konica-info";
import Footer from "../../components/Footer";
import styles from "../../styles/epson.module.css";

export const metadata = {
  title:
    "New and Used Konika Copiers | High-Quality and Affordable | Copiers Utah",
  description:
    "Copiers Utah offers high-quality and affordable Konika copiers, both new and used. Learn more about Konika copiers and how they can benefit your office. Fill out our quote form to receive a customized quote",
  keywords:
    "Lexmark copiers, used Lexmark copiers, new Lexmark copiers, office copiers, copiers Utah, affordable copiers",
};


const breadCrumbs = [{ name: "products", url: "/products" }];

const konika = () => {
  return (
    <div className={styles.main}>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <KonicaInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default konika;
