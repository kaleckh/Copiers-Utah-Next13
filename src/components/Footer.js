import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/static/logo.webp";
import { useRouter } from "next/navigation";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.smallerContainer}>
        <div className={styles.exploreContainerGood}>
          <div
            style={{ paddingBottom: "15px" }}
            className={styles.logoContainer}
          >
            <Image
              src={Logo}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.footerTags}>
            At Copiers Utah we promise transparent pricing high-quality
            equipment, and exceptional service on all new, used and refurbished
            copiers! Contact us today!
          </div>
          <div className={styles.even}>
            <a href="https://www.linkedin.com/in/copiers-utah-5b2b85148/">
              <Image
                alt={"linkedin logo"}
                src={"/static/linkedin.webp"}
                width={20}
                height={20}
              />
            </a>
            <a href="https://twitter.com/bizinUSAok">
              <Image
                alt={"twitter logo"}
                src={"/static/twitter.webp"}
                width={20}
                height={20}
              />
            </a>
            <a href="https://www.facebook.com/copiersforlessutah/">
              <Image
                alt={"facebook logo"}
                src={"/static/facebook.webp"}
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.exploreContainer}>
          <div className={styles.footerTitle}>Services</div>
          <Link href="/buy">
            <h4 className={styles.h4}>Copiers for sale</h4>
          </Link>
          <Link href="/short-term">
            <h4 className={styles.h4}>Copier Rentals</h4>
          </Link>
          <Link href="/fix">
            <h4 className={styles.h4}>Copier Maintanance</h4>
          </Link>
          <Link href="/finance">
            <div className={styles.h4}>Finance a Copier</div>
          </Link>
          <Link href="/products">
            <div className={styles.h4}>Our top New and Used Copiers</div>
          </Link>
        </div>
        <div className={styles.line}></div>
        <div className={styles.exploreContainer2}>
          <div style={{ paddingBottom: "3px" }} className={styles.footerTitle}>
            Contact Us
          </div>
          <div
            style={{ paddingBottom: "10px" }}
            className={styles.footerContainer}
          >
            <div style={{ fontSize: "13px", fontWeight: "200" }}>
              Copiers Utah
            </div>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>
              We have Copiers For Sale
            </div>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>
              554 W 8360 S
            </div>
            <div style={{ fontSize: "13px", fontWeight: "200" }}>
              Sandy, UT 84070
            </div>
          </div>
          <div>
            <div className={styles.flex}>
              <div style={{ paddingRight: "10px" }}>
                <Image
                  alt={"phone call logo"}
                  src={"/static/phone.webp"}
                  width={15}
                  height={15}
                />
              </div>
              <div style={{ fontSize: "13px", fontWeight: "200" }}>
                Call us at (801)-261 0510{" "}
              </div>
            </div>
            <div className={styles.flex}>
              <div style={{ paddingRight: "10px" }}>
                <Image
                  alt={"mail logo"}
                  src={"/static/mail.webp"}
                  width={15}
                  height={15}
                />
              </div>
              <div style={{ fontSize: "13px", fontWeight: "200" }}>
                Info@copiersutah.com
              </div>
            </div>
            <div className={styles.flex}>
              <div style={{ fontSize: "13px", fontWeight: "200" }}>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
