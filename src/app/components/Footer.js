import styles from "../styles/Footer.module.css";
import Socials from "../socials/page.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Footer(props) {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.smallerContainer}>
        <div className={styles.exploreContainerGood}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <div className={styles.footerTags}>Copiers Utah</div>
          <div className={styles.footerTags}>We have Copiers For Sale</div>
          <div className={styles.footerTags}>554 W 8360 S</div>
          <div className={styles.footerTags}>Sandy, UT 84070</div>
          <div className={styles.footerTags}>PHONE: (801)261-0510</div>
          <div className={styles.footerTags}>FAX: (801)261-1967</div>
          <div className={styles.footerTags}>
            E-MAIL: info@copiersutah.com
            <Socials />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.exploreContainer}>
          <div className={styles.footerTitle}>Services</div>
          <Link href="https://copiersutah.com/Buy">
            <h4 className={styles.h4}>Copiers for sale</h4>
          </Link>
          <Link href="https://copiersutah.com/ShortTerm">
            <h4 className={styles.h4}>Copier Rentals</h4>
          </Link>
          <Link href="https://copiersutah.com/Fix">
            <h4 className={styles.h4}>Copier Maintanance</h4>
          </Link>
          <Link href="https://copiersutah.com/Finance">
            <div className={styles.headerPieces}>Finance a Copier</div>
          </Link>
          <Link href="https://copiersutah.com/Products">
            <div className={styles.headerPieces}>
              Our top New and Used Copiers
            </div>
          </Link>
        </div>
        <div className={styles.line}></div>
        <div className={styles.exploreContainer2}>
          <div className={styles.footerTitle}>Why choose Copiers Utah</div>
          <li>Wide range of new copiers for sale in Utah</li>
          <li>New and used copiers available</li>
          <li>Top brands and models to fit any budget and business needs</li>
          <li>
            Thoroughly tested and serviced used copiers 
          </li>
          <li>Competitive pricing for quality equipment</li>
          <li>Trustworthy and reliable source for all your copier needs</li>
          <li>Copier leasing available for all models</li>
        </div>
      </div>
      <div className={styles.exploreContainerGood}>
        <Image src={"/static/logo.webp"} width={200} height={150} />
      </div>
    </div>
  );
}
