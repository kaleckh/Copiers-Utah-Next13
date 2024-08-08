import Header from "../../components/Header";
import Section from "../../components/Section";
import styles from "../../styles/Finance.module.css";
import Footer from "../../components/Footer";
import FinanceInfo from "./components/File-info";

export const metadata = {
  title: "Financing and Buying Copiers | Get a Quote Today | Copiers Utah",
  description:
    "Copiers Utah offers a range of financing options for buying copiers. Fill out our easy form to get a personalized quote and learn more about our financing options",
  keywords:
    "copier financing, copier buying, office copiers, copier quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine",
};
const finance = () => {
  return (
    <div className={styles.main}>
      <Header />
      <FinanceInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default finance;
