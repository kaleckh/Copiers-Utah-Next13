"use client"
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Sliver from '../components/sliverr'
import { getCart } from './localStorage'
import { Metadata } from 'next'
// import Form from "./Form";
import { PatternFormat } from "react-number-format";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/cart.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const cart = (props) => {
    // const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
    // const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [something, setSomething] = useState(false);
    const [price, setPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [shoppingCart, setShoppingCart] = useState();
    const [cart, setCart] = useState();
    const [cash, setCash] = useState(true);
    const [finance, setFinance] = useState(false);
    const [rent, setRent] = useState(false);
    const tawkMessengerRef = useRef();
    const captchaRef = useRef(null);



    useEffect(() => {
        setShoppingCart(getCart())
        // setShoppingCart(JSON.parse(localStorage.getItem("cart")))
        // setShoppingCart(JSON.parse(localStorage.getItem("cart")))
        setQuantity(localStorage.getItem("quantity"))
        console.log(JSON.parse(localStorage.getItem("cart")))
        // console.log(shoppingCart, "this is hte cart that works ")
        // console.log(localStorage.getItem("cart"), "this is something special ")
    }, [])

    useEffect(() => {
        setNewPrice(quantity * price)
        if (quantity > 1) {
            setSomething(true)
        }
    }, [quantity])

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending");

        fetch("https://api.smtp2go.com/v3/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: "api-DC44EBDEE45411ED847EF23C91C88F4E",
                to: [`<info@copiersutah.com>`],
                sender: "<info@copiersutah.com>",
                subject: `This is${name}'s quote form. Her number is ${number}`,
                text_body: `${message}`,
                html_body: `<h1>${message}</h1>`,
                template_id: "5120871",
                template_data: {
                    message: message,
                    from: "buy a copier",
                    number: number,
                    name: name,
                },
            }),
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                console.log("Response succeeded!");
                // setSubmitted(true);
                // setName("");
                // setEmail("");
                // setBody("");
            }
        });
    };
    var removeCartItem = function (id) {
        setShoppingCart(shoppingCart.splice(1, 1))
        // debugger
    }

    var verifyCallback = function (response) {
        setRecaptchaResponse(response);
    };

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
    const onLoad = () => {
        console.log("onLoad works!");
    };

    console.log(shoppingCart, "cart")
    return (
        <div className={styles.main}>
            <Sliver />
            <Head>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://copiersutah.com/buy/" />
                <title>
                    Get a Quote for High-Quality New and Refurbished Copiers | Copiers Utah
        </title>
                <meta
                    name="description"
                    content="Looking for a high-quality copier for your office? Copiers Utah offers a range of advanced copy machines for sale, including new and refurbished options. Fill out our easy form to get a personalized quote today."
                />
                <meta
                    name="keywords"
                    content="office copiers, copiers for sale, refurbished copiers, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: "New and Refurbished Copiers",
                            description:
                                "High-quality copiers for your office, including new and refurbished options.",
                            brand: "Copiers Utah",
                            url: "https://copiersutah.com/home",
                            image: "https://copiersutah.com/static/logo.webp",
                            offers: {
                                "@type": "AggregateOffer",
                                priceCurrency: "USD",
                                availability: "https://schema.org/InStock",
                                lowPrice: "Your Lowest Price",
                                highPrice: "Your Highest Price",
                                offerCount: "Number of Copiers Available",
                                seller: {
                                    "@type": "LocalBusiness",
                                    name: "Copiers Utah",
                                    telephone: "(801) 261-0510",
                                    email: "info@copiersutah.com",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress: "554 W 8360 S",
                                        addressLocality: "Sandy",
                                        addressRegion: "Utah",
                                        postalCode: "84070",
                                        addressCountry: "USA",
                                    },
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <div>
                <TawkMessengerReact
                    onLoad={onLoad}
                    propertyId="5abd4931d7591465c7090c65"
                    widgetId="default"
                    useRef={tawkMessengerRef}
                />
            </div>
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
                <div>
                    <div className={styles.mainTitleBig}>Your Shopping Cart</div>
                    {shoppingCart?.map((cart, index) => {
                        return (
                            <div key={index} className={styles.thirdSection}>
                                <div className={styles.buggy}>
                                    <Image src={cart.photo} width={150} height={150}></Image>
                                    <div className={styles.priceBox}>
                                        <div className={styles.cartTitle}>{cart.name}</div>
                                        <div style={{ display: "flex", paddingTop: "10px", alignItems: "center" }}>
                                            <div style={{ color: "black", fontSize: "15px", fontWeight: "600", paddingRight: "8px" }}>OEM:</div>
                                            <div style={{ color: "black", fontSize: "14px" }}> {cart.oem}</div>
                                        </div>
                                    </div>
                                    <div className={styles.cartRow}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <div onclick={() => {
                                                setQuantity(quantity - 1)
                                            }} className={styles.plusButton} style={{ color: "black", fontSize: "23px", fontWeight: "300" }}>-</div>
                                            <div style={{ color: "black", padding: "5px" }}>{quantity}</div>
                                            <div onClick={() => {
                                                setQuantity(quantity + 1)
                                            }} className={styles.plusButton} style={{ color: "black", fontSize: "21px", fontWeight: "300" }}>+</div>
                                        </div>
                                        <div className={styles.removeBox}>
                                            <div style={{ color: "black" }}>{something ? newPrice : price}</div>
                                            <button onClick={() => {
                                                removeCartItem()
                                            }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.line}></div>ww
                            </div>

                        )
                    })}
                    <div className={styles.buyButton}>
                        <button className={styles.titleSmall}>Checkout</button>
                    </div>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.title}>Total</div>
                        <div>
                            <div>
                                <div>Sub-Total</div>
                                <div>something</div>
                            </div>
                            <div>
                                <div>Delivery</div>
                                <div>something</div>
                            </div>
                        </div>
                        <button className={styles.buttonCheck}>Checkout</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default cart;
