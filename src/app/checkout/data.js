"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Sliver from "../components/sliverr";
import { CartContext } from "../../providers/cart";
import Head from "next/head";
import styles from "../styles/checkout.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const checkout = (props) => {
    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [name, setName] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, setCart, cartLook } = useContext(CartContext);
    const [noChange, setFalse] = useState(false);
    const [something, setSomething] = useState(false);
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState(0);
    const [newPrice, setNewPrice] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const tawkMessengerRef = useRef();


    return (
        <div className={styles.main}>
            <Sliver />
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
                </div>
            </div>
            <Header />
            <div className={styles.bottomMain}>
                <div className={styles.container}>
                    <div>Toner Order</div>
                    <div>Price</div>
                    <div className={styles.line}></div>
                    <div>Order Details</div>
                    <div className={styles.line}></div>
                    <div>
                        <div>Sub Total</div>
                        <div>Order Total</div>
                    </div>
                    <input type="text" placeholder={"Add Coupon"} />
                    <div className={styles.line}></div>
                    <div>Contact</div>
                    <div>
                        <input type="text" />
                        <input type="text" />
                    </div>


                </div>
            </div>



            <Footer />
        </div>
    );
};

export default checkout;
