import styles from "../styles/Header.module.css";
import Link from "next/link";
import Sliver from "../components/sliverr";
import Image from "next/image";
import Logo from "../../public/static/logo.webp";
export default function Header() {
  return (
    <div>
      <Sliver />
      <header className={styles.contactHeader}>
        <div className={styles.logoSpaceContainer}>
          <div className={styles.logoSpace}>
            <div className={styles.logoContainer}>
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="Picture of the author"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
            <div className={styles.pieceContainer}>
              <Link href="/new">
                <div className={styles.headerPieces}>New</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={styles.pieceContainer}>
              <Link href="/refurbished">
                <div className={styles.headerPieces}>Refurbished</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={styles.pieceContainer}>
              <Link href="/shortTerm">
                <div className={styles.headerPieces}>Rentals</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={styles.pieceContainer}>
              <Link href="/fix">
                <div className={styles.headerPieces}>Copier Repair</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={`${styles.pieceContainer} ${styles.hidden}`}>
              <Link href="/toner">
                <div className={styles.headerPieces}>Toner</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={`${styles.pieceContainer} ${styles.hidden}`}>
              <Link href="/products">
                <div className={styles.headerPieces}>Product Line</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <div className={`${styles.pieceContainer} ${styles.hidden}`}>
              <Link href="/finance">
                <div className={styles.headerPieces}>Financing</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>

            <div className={`${styles.pieceContainer} ${styles.hidden}`}>
              <Link href="/buy">
                <div className={styles.headerPieces}>Contact Us</div>
                <div className={styles.lineSmall}></div>
              </Link>
            </div>
            <Link href={"/cart"}>
              <div className={styles.cartContainer}>
                <Image src="/static/cart.webp" alt="cart icon" fill={true} />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.headerContainer}></div>
      </header>
    </div>
  );
}
