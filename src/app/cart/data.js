"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Sliver from "../components/sliverr";
import { CartContext } from "../../providers/cart";
import Head from "next/head";
import styles from "../styles/cart.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Cart = (props) => {
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

    async function createLink() {
        const response = await fetch("/api/pay", { method: "POST" });
        const data = await response.json();
        window.location.replace(data.redirect);
      }
    

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
        setCart(cart.splice(id, 1));
    };

    var verifyCallback = function (response) {
        setRecaptchaResponse(response);
    };

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
    const onLoad = () => {
        console.log("onLoad works!");
    };
    const newPriceAction = function () {
        let arr = [0]

        cart.map((item) => {
            arr.push(item.quantity * item.price)

        })
        let result = arr?.reduce((acc, item) => {
            return acc + item 
        })
        let addedResult = result + 2.99
        setTotal(addedResult.toFixed(2))

    }

    const decimal = function (item) {
        return item.toFixed(2)
    }
    useEffect(() => {
        newPriceAction()
    }, [cart])


    return (
        <div className={styles.main}>
            <Sliver />
            <Head>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://copiersutah.com/buy/" />
                <title>
                    Get a Quote for High-Quality New and Refurbished Copiers | Copiers
                    Utah
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
                <div style={{width:"65%"}}>
                    <div className={styles.mainTitleBig}>Your Shopping Cart</div>
                    {cart.length === 0 ? (
                        <div style={{ color: "black", textAlign:"center", paddingTop:"25px" }}>Your cart is empty</div>
                    ) : (
                            <div style={{ color: "black" }}></div>
                        )}
                    {cart?.map((toner, index) => {
                        return (
                            <div key={index} className={styles.thirdSection}>
                                <div>
                                <div
                                                style={{ color: "black", cursor: "pointer", textAlign:"end", width:"93%" }}
                                                onClick={() => {
                                                    setCart(cart.filter((t) => t.oem !== toner.oem));
                                                }}
                                            >
                                                X
                      </div>
                                    <div className={styles.buggy}>
                                        <div style={{width:"200px"}}>
                                            <Image src={toner.image} width={150} height={150}></Image>
                                            </div>
                                    <div className={styles.priceBox}>
                                        <div className={styles.cartTitle}>{toner.name}</div>
                                        <div
                                            style={{
                                                display: "flex",
                                                paddingTop: "10px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    color: "black",
                                                    fontSize: "15px",
                                                    fontWeight: "600",
                                                    paddingRight: "8px",
                                                }}
                                            >
                                                OEM:
                      </div>
                                            <div style={{ color: "black", fontSize: "14px" }}>
                                                {" "}
                                                {toner.oem}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.cartRow}>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width:"100px"
                                            }}
                                        >
                                            <div style={{cursor:"pointer"}}
                                                onClick={() => {
                                                    setTotal(0)
                                                    setCart(

                                                        cart.map((t) => {
                                                            if (t.oem === toner.oem && t.quantity >= 1) {
                                                                return {
                                                                    ...t,
                                                                    quantity: t.quantity - 1,
                                                                };
                                                            }
                                                            return t;
                                                        })
                                                    );
                                                }}
                                                className={styles.plusButton}
                                                style={{
                                                    color: "black",
                                                    fontSize: "23px",
                                                    fontWeight: "300",
                                                }}
                                            >
                                                -
                      </div>
                                            <div style={{ color: "black", padding: "5px" }}>
                                                {toner.quantity}
                                            </div>
                                                <div style={{ color: "black", cursor:"pointer"}}
                                                onClick={() => {
                                                    setTotal(0)
                                                    setCart(

                                                        cart.map((t) => {
                                                            if (t.oem === toner.oem) {
                                                                return {
                                                                    ...t,
                                                                    quantity: t.quantity + 1,
                                                                };
                                                            }
                                                            return t;
                                                        })
                                                    );
                                                }}
                                                className={styles.plusButton}>
                                                
                                                    +
                                                
                                            </div>
                                        </div>
                                        <div className={styles.removeBox}>
                                  
                                            <div className={styles.priceRight}>
                                                ${decimal(toner.price * toner.quantity)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.title}>Total</div>
                        <div>
                            <div style={{display:"flex", width:"200px", padding:"10px", fontSize:"20px", alignItems:"center"}}>
                                <div style={{ fontSize:"20px", width:"150px"}}>Delivery:</div>
                                <div style={{width:"100px", fontSize:"15px"}} >$2.99</div>
                            </div>
                            <div style={{ display:"flex", padding:"10px",width:"200px", alignItems:"center"}}>
                                <div style={{paddingRight:"10px", fontSize:"20px", width:"150px"}}>Sub-Total:</div>
                                <div style={{width:"100px",fontSize:"15px"}}>${total}</div>
                            </div>
                        </div>
                        <div className={styles.buttonContainterB}>
                        <button onClick={() => { }} className={styles.buttonCheck}>
                            Add More Items
            </button>
                        <button onClick={() => { createLink().then(() => {setOrderId(data.orderId)}) }} className={styles.buttonCheckB}>
                                Checkout
            </button>
            </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
