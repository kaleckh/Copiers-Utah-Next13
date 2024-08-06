import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import styles from "../../styles/Stuff.module.css";
import RefurbishedInfo from "./components/Refurbished-info";

export const metadata = {
  title: "Top Refurbished Copiers for Sale | All Brands | Copiers Utah",
  description:
    "Discover the Perfect Copier for Your Office - High-Quality and Affordable Models from Copiers Utah",
  keywords:
    "copiers for sale, office copiers, Konica Minolta copiers, Epson copiers, Lexmark copiers, copiers Utah",
};

const onLoad = () => {
  console.log("onLoad works!");
};

const breadCrumbs = [{ name: "Home", url: "/" }];

const refurbished = () => {
  return (
    <div className={styles.main}>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <RefurbishedInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default refurbished;
