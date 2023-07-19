"use client"
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import Sliver from '../components/sliverrr'
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
    const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [name, setName] = useState("");
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
            something: "yes",
            somethingelse: "yes",
            somethingkinda: "yes"
        },
        {
            something: "yes",
            somethingelse: "yes",
            somethingkinda: "yes"

        },
        {
            something: "yes",
            somethingelse: "yes",
            somethingkinda: "yes"

        },
        {
            something: "yes",
            somethingelse: "yes",
            somethingkinda: "yes"

        }
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
                        <div className={styles.titleSmall}>Filters</div>

                    </div>
                    <div className={styles.columnCenter}>
                        <div className={styles.centerNormal}>
                            <div className={styles.titleBig}>Brands</div>
                            <div className={styles.lineSmall}></div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Epson</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Epson</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Epson</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Epson</div>
                        </div>
                        <div className={styles.row}>
                            <input type="checkbox" />
                            <div>Epson</div>
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
                                <div key={item.something} className={styles.box}>
                                    <div className={styles.title}>This is a toner Title</div>
                                    <Link href={"/tonerChoice"}>
                                        <Image src={"/static/tech.webp"} width={150} height={150}></Image>
                                        <div className={styles.price}>Price</div>
                                        <div className={styles.model}>Model Number</div>
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
