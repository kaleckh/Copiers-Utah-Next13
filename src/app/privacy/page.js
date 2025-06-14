import Header from "../../components/Header";
// import Quote from "./components/Quote";
// import Payment from "./components/Payment";
import Policy from "./components/policy";
import Section from "../../components/Section";
import Footer from "../../components/Footer";

export const metadata = {
  title:
    "Get a Quote for High-Quality New and Refurbished Copiers | Copiers Utah",
  description:
    "Looking for a high-quality copier for your office? Copiers Utah offers a range of advanced copy machines for sale, including new and refurbished options. Fill out our easy form to get a personalized quote today",
  keywords:
    "office copiers, copiers for sale, refurbished copiers, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah",
};

const Privacy = () => {
  return (
    <div>
      <Header />
      <Policy />
      <Section />
      <Footer />
    </div>
  );
};

export default Privacy;
