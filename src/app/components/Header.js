import styles from "../styles/Header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Header(props) {
  const router = useRouter();

  return (
    <header className={styles.contactHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.pieceContainer}>
          <Link href="/">
            <div className={styles.headerPieces}>Home</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="/products">
            <div className={styles.headerPieces}>Product Line</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="/refurbished">
            <div className={styles.headerPieces}>Refurbished Machines</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="/finance">
            <div className={styles.headerPieces}>Financing</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="/buy">
            <div className={styles.headerPieces}>Contact Us</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
