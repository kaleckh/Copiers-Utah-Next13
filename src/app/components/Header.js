import styles from "../styles/Header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
import cart from "../cart/page";
import { CartContext } from "../../providers/cart";
export default function Header(props) {
  const router = useRouter();
  const { cart, setCart, cartLook, setRealPrice } = useContext(CartContext);

  return (
    <header className={styles.contactHeader}>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <Image
            src="/static/logo.webp"
            alt="buy a used or new business copier"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
            </div>
          </div>
          <Link href={'/checkout'}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/static/cart.webp"
                alt="buy a used or new business copier"
                width={25}
                height={25}
              />
              <div style={{ color: "rgb(240,136,6)", fontSize: "20px" }}>{cart.length}</div>
            </div>
          </Link>
        </div>
      </div >
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
          <Link href="/toner">
            <div className={styles.headerPieces}>Toner</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="/buy">
            <div className={styles.headerPieces}>Contact Us</div>
          </Link>
        </div>
      </div>
    </header >
  );
}
