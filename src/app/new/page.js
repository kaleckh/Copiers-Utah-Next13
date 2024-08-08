import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import NewInfo from "./components/New-info";
import Footer from "../../components/Footer";
import styles from "../../styles/Stuff.module.css";
export const metadata = {
  title: "Top Refurbished Copiers for Sale | All Brands | Copiers Utah",
  description:
    "Discover the Perfect Copier for Your Office - High-Quality and Affordable Models from Copiers Utah",
  keywords:
    "copiers for sale, office copiers, Konica Minolta copiers, Epson copiers, Lexmark copiers, copiers Utah",
};

const breadCrumbs = [{ name: "Home", url: "/" }];

const New = () => {
  return (
    <div className={styles.main}>
      <Header />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <NewInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default New;
