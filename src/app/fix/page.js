
import styles from "../../styles/Stuff.module.css";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import FixInfo from "./components/Fix-info";


export const metadata = {  
  title: "Copier Machine Repair Services | Get a Quote Today | Copiers Utah",
  description:
    "Copiers Utah provides reliable and affordable copier machine repair services. Fill out our easy form to get a personalized quote and get your copier back up and running in no time",
  keywords:
    "copier repair, copier service, copier maintenance, copier technician, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah",
};


const fix = () => {
  
  return (
    <div className={styles.main}>
      <Header />
      <FixInfo/>
      <Section />
      <Footer />
    </div>
  );
};

export default fix;
