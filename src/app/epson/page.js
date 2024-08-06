import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import EpsonInfo from "./components/EpsonInfo";
import Footer from "../../components/Footer";
import styles from "../../styles/epson.module.css";

export const metadata = {
  title: " Epson Copiers - High-Quality and Affordable | Copiers Utah",
  description:
    "Enhance Your Office with High-Quality and Cost-Effective Epson Copiers from Copiers Utah - Discover the Benefits, Explore New and Used Models, and Request a Personalized Quote Today",
  keywords:
    "Epson copiers, used Epson copiers, new Epson copiers, office copiers, copiers Utah, affordable copiers",
};

const breadCrumbs = [{ name: "Home", url: "/" }];

const epson = () => {
  return (
    <div className={styles.main}>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <EpsonInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default epson;
