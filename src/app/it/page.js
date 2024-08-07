import ItInfo from "./component/It-info";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import styles from "../../styles/black.module.css";
export const metadata = {
  title: "IT Services and Support | Get a Quote Today | Copiers Utah",
  description:
    "Copiers Utah provides comprehensive IT services and support. Fill out our easy form to get a personalized quote and get the IT help you need",
  keywords: "IT services, IT support, IT help, IT quote, copiers Utah",
};
const it = () => {
  return (
    <div className={styles.main}>
      <Header />
      <ItInfo />
      <Section />
      <Footer />
    </div>
  );
};

export default it;
