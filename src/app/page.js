import Section from "../components/Section";
import Header from "../components/Header";
import styles from "../styles/homepage.module.css";
import Footer from "../components/Footer";
import HomepageInfo from "@/components/Homepage-info";

export const metadata = {
  title: "Copiers for Sale and Rent | Office Copy Machines | Copiers Utah",
  description:
    "Copiers Utah: Quality copiers for sale/rent. Pick from various office machines with advanced features & affordable prices. Contact us now! ",
};

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <HomepageInfo />
      <Section />
      <Footer />
    </div>
  );
}
