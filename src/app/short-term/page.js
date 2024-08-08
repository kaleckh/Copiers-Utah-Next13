import Data from "./dataa";
import Header from "../../components/Header";
import Section from "../../components/Section";
import styles from "../../styles/shortTerm.module.css";
import Footer from "../../components/Footer";
import RentalInfo from "./components/Rental-Info";
import RentalQuote from "./components/Rental-quote";

export const metadata = {
  title: "Short-Term Copier Rentals | Copiers Utah",
  description:
    "Need a copier for a short-term project or event? Copiers Utah offers flexible short-term copier rentals with advanced features and affordable prices. Contact us today to learn more",
  keywords:
    "short-term copier rentals, copier rental, short-term rental, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah",
};
const refurbished = () => {
  return (
    <>
      <Header />
      <RentalQuote />
      <RentalInfo />
      <Section />
      <Footer />
    </>
  );
};

export default refurbished;
