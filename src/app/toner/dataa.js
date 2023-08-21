"use client"
import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../components/Header";
import Image from "next/image";
import {Context} from '../cart-context'
import Link from "next/link";
import Sliver from '../components/sliverr'
import { Metadata } from 'next'
// import Form from "./Form";
import { PatternFormat } from "react-number-format";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/filter.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Buy = (props) => {
    // const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
    // const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [name, setName] = useState("");
    const {cart, setCart, setCartLook, cartLook} = useContext(Context)
    // const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [cash, setCash] = useState(true);
    const [finance, setFinance] = useState(false);
    const [rent, setRent] = useState(false);
    const tawkMessengerRef = useRef();
    const captchaRef = useRef(null);
    const [toner, setToner] = useState([
        {
            price: "81.50",
            color: "Black",
            name: "LEXMARK High Yield Black Return Program Toner Cartridge (25000 Yield)",
            yield:"25000 Pages",
            oem: "24B6511",
            models: "XC6152, XC6153, XC8155",
            image:"/static/blackLexmark.webp"
        },
        {
            price: "219.41",
            color: "Yellow",
            name: "LEXMARK  Yellow Return Program Toner Cartridge (20000 Yield)",
            yield:"20000 pages",
            oem: "24B6510",
            models: "XC6152, XC6153, XC8155",
            image:"/static/yellowLexmark.webp"

        },
        {
            price: "219.41",
            color: "Cyan",
            yield:"20000 pages",
            name: "LEXMARK Cyan Return Program Toner Cartridge (20000 Yield)",
            models: "20000",
            oem: "24B6508",
            models: "XC6152, XC6153, XC8155 ",
            image:"/static/cyanLexmark.jpeg"

        },
        {
            price: "219.41",
            color: "Magenta",
            name: "LEXMARK Magenta Return Program Toner Cartridge (20000 Yield)",
            yield: "20000 pages",
            oem: "24B6509",
            models: "XC6152, XC6153, XC8155",
            image:"/static/magentaLexmark.webp"

        },
        {
            price: "117.54",
            color: "Black",
            name: "LEXMARK Extra High Yield Black Return Program Toner Cartridge (50000 Yield)",
            yield: "50000",
            oem: "24B6515",
            models: "XC8160, XC8163",
            image:"/static/blackLexmark.webp"

        },
        {
            price: "352.62",
            color: "Yellow",
            name: "LEXMARK Extra High Yield Yellow Return Program Toner Cartridge (50000 Yield)",
            yield: "50000 pages",
            oem: "24B6514",
            models: "XC8160, XC8163",
            image:"/static/yellowLexmark.webp"

        },
        {
            price: "352.62",
            color: "Cyan",
            name: "LEXMARK Extra High Yield Cyan Return Program Toner Cartridge (50000 Yield)",
            yield: "50000 pages",
            oem: "24B6512",
            models: "XC8160, XC8163",
            image:"/static/cyanLexmark.jpeg"

        },
        {
            price: "352.62",
            color: "Magenta",
            name: "LEXMARK Extra High Yield Magenta Return Program Toner Cartridge (50000 Yield)",
            yield: "50000 pages",
            oem: "24B6513",
            models: "XC8160, XC8163",
            image:"/static/magentaLexmark.webp"

        },
        {
            price: "120.3",
            color: "Black",
            name: "LEXMARK Black Toner Cartridge (9000 Yield). Save Time Money and the Environment with Genuine Lexmark Supplies.",
            yield: "9000 pages",
            oem: "24B7157",
            models: "C2240, XC2235",
            image:"/static/blackLexmark.webp"

        },
        {
            price: "134.26",
            color: "Yellow",
            name: "LEXMARK Yellow Toner Cartridge (6000 Yield). Save Time Money and the Environment with Genuine Lexmark Supplies.",
            yield: "6000",
            oem: "24B7156",
            models: "C2240, XC2235",
            image:"/static/yellowLexmark.webp"

        },
        {
            price: "134.26",
            color: "Cyan",
            name: "LEXMARK Cyan Toner Cartridge (6000 Yield). Save Time Money and the Environment with Genuine Lexmark Supplies.",
            oem: "24B7154",
            yield: "6000",
            models: "C2240, XC2235",
            image:"/static/cyanLexmark.jpeg"

        },
        {
            price: "134.26",
            color: "Magenta",
            yield: "6000",
            name: "LEXMARK Magenta Toner Cartridge (6000 Yield). Save Time Money and the Environment with Genuine Lexmark Supplies.",
            oem: "24B7155",
            models: "C2240, XC2235",
            image:"/static/magentaLexmark.webp"

        },

    ])

    const callback = (name, message, number) => {
        setName(name);
        setMessage(message);
        setNumber(number);
    };

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

    var verifyCallback = function (response) {
        setRecaptchaResponse(response);
    };

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
    const onLoad = () => {
        console.log("onLoad works!");
    };

    return (
        <div className={styles.main}>
            <Sliver />


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
            <div className={styles.mainContent}>
                <div className={styles.filter}>
                    <div className={styles.centerNormal}>
                        <div className={styles.titleBig}>Filters</div>

                    </div>
                    <div className={styles.columnCenter}>
                        <div className={styles.centerNormal}>
                            <div className={styles.titleSmall}>Brands</div>
                            <div className={styles.lineSmall}></div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Epson</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Konika Minolta</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>HP</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Xenox</div>
                        </div>
                        

                    </div>
                    <div className={styles.columnCenter}>
                        <div className={styles.titleBig}>color</div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Black</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Blue</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Red</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Yellow</div>
                        </div>

                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.boxContainer}>
                        {toner.map((item) => {
                            return (
                                <div key={item.price} onClick={() => {                                    
                                    setCartLook({"name": item.name, "oem": item.oem, "price": item.price, "color": item.color, "photo": item.image, "yield": item.yield })
                                    localStorage.setItem("oem", item.oem);
                                    localStorage.setItem("name", item.name);
                                    localStorage.setItem("price", item.price);
                                    localStorage.setItem("color", item.color);
                                    localStorage.setItem("image", item.image);
                                    localStorage.setItem("yield", item.yield);
                                }} key={item.something} className={styles.box}>

                                    <div className={styles.titleSmallBlack}>{item.name}</div>
                                    <Link className={styles.somethingElse} href={"/tonerChoice"}>
                                        <Image style={{ borderRadius: "5px" }} src={item.image} width={180} height={180}></Image>
                                        <div style={{ width:"100%"}}>
                                            <div className={styles.row}>
                                                <div className={styles.row}>

                                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <div style={{ paddingRight: "5px" }} className={styles.price}>$</div>
                                                        <div className={styles.modelSmallish}>{item.price}</div>
                                                    </div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div style={{paddingRight:"8px"}} className={styles.priceSmall}>OEM:</div>
                                                    <div className={styles.modelSmall}>{item.oem}</div>
                                                </div>
                                            </div>
                                            <div style={{paddingTop:"10px"}} className={styles.row}>
                                                <div style={{paddingRight:"8px", paddingBottom:"5px"}} className={styles.priceMedium}>Models:</div>
                                                <div className={styles.modelSmall}>{item.models}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Buy;
