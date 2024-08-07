import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Footer from "../../components/Footer";
import styles from "../../styles/black.module.css";
import BlackWhite from "./components/Black-white-info";


// export const metadata = {
//   title: " Black and white Copiers for Sale | Konica Minolta, and Lexmark ",
//   description:
//     "Copiers Utah offers a range of high-quality copiers for sale, including Konica Minolta, Epson, and Lexmark models. Explore our selection and find the perfect copier for your office.",
//   keywords:
//     "copiers for sale, office copiers, Konica Minolta copiers, Epson copiers, Lexmark copiers, copiers Utah",
// };

const breadCrumbs = [
  { name: "Home", url: "/" },
  { name: `Products Sold`, url: `/products` },
];



const BlackWhitePage = () => {
  return (
    <div className={styles.main}>
    <Header />
    <BreadCrumbs breadCrumbs={breadCrumbs} />
    <BlackWhite />
    <Footer />
  </div >
    );
};

export default BlackWhitePage;
