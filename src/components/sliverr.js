import Link from "next/link";
import Image from "next/image";
import styles from "../styles/buy.module.css";

const Sliver = () => {
  return (
    <div className={styles.sliver}>
      <div className={styles.padding}>
        <Link href="https://www.linkedin.com/in/copiers-utah-5b2b85148/">
          <div className={styles.iconContainer}>
            <Image src={"/static/linkedin.webp"} fill={true} />
          </div>
        </Link>
        <div className={styles.iconContainer}>
          <Link href="https://twitter.com/bizinUSAok">
            <Image src={"/static/twitter.webp"} fill={true} />
          </Link>
        </div>
        <div className={styles.iconContainer}>
          <Link href="https://www.facebook.com/copiersforlessutah/">
            <Image src={"/static/facebook.webp"} fill={true} />
          </Link>
        </div>
      </div>
      <div style={{ color: "white", fontSize: "9px" }}>
        Dont Know Where To Start?{" "}
        <a
          style={{ paddingLeft: "15px", color: "white", fontSize: "9px" }}
          href="tel:8012610510"
        >
          Call Us At (801)-261 0510
        </a>
      </div>
    </div>
  );
};
export default Sliver;
