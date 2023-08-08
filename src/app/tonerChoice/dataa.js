"use client"
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import axios from 'axios';
import { json2xml } from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { Client } from 'square';
import { randomUUID } from 'crypto';
import { PaymentForm, CreditCard, GooglePay, } from 'react-square-web-payments-sdk';
import Sliver from '../components/sliverr'
import { Metadata } from 'next'
// import Form from "./Form";
import { PatternFormat } from "react-number-format";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/fileChoice.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Link from "next/link";

const TonerChoice = (props) => {
    const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [oem, setOem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [address_line_1, setAddress1] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("US");
    const [image, setImage] = useState("");
    const [yieldStuff, setYield] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [cash, setCash] = useState(true);
    const [finance, setFinance] = useState(false);
    const [rent, setRent] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [price, setPrice] = useState();
    const tawkMessengerRef = useRef();
    const captchaRef = useRef(null);



    useEffect(() => {
        setOem(localStorage.getItem("oem"))
        setPrice(localStorage.getItem("price"))
        setName(localStorage.getItem("name"))
        setImage(localStorage.getItem("image"))
        setYield(localStorage.getItem("yield"))
    }, [])


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
            }),//
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

    const { paymentsApi } = new Client({
        accessToken: "EAAAEOBAWpWqMYtQnL6yMPRZZkl3ne8zZGGDli2HBC8pAivmZaGNoyOOtM-Uo7Ci",
        environment: 'sandbox'
    });
    async function getOrderData() {
        const response = await fetch(`/api/pay`)
        const data = await response.json() 
        
        setOrderId(data.data.order.id)
        setName(data.data.order.fulfillments[0].shipment_details.recipient.display_name)
        setData(data.data.order.fulfillments[0].shipment_details.recipient.address)    
    }
    async function setOrderData() {
        setAddress1(data.address_line_1)
        setCity(data.locality)
        setState(data.administrative_district_level_1)
        setZip(data.postal_code)
        debugger
        
    }
    // useEffect(() => {
    //     debugger
    //     if (orderId !== "") {
    //         getOrderData()
    //     }
    // }, [orderId]);

    async function createLink() {
        const response = await fetch("/api/pay", { method: "POST" })
        const data = await response.json();
        setOrderId(data.orderId)
        console.log(data, "this is the data");
    }

    // async function success() {
    //     const response = await fetch("/api/pay/distribution", { method: "POST" })
    //     const data = await response.json();
    //     console.log(data, "this is the data");
    // }



    async function createDistribution() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ city: city, state: state, zip: zip, addy: address_line_1, price: price, quantity: quantity, oem: oem, name: name, id: orderId })
        };

        const response = await fetch("/api/pay/distribution", requestOptions)
        const data1 = await response.json();
        // console.log(data1, "this is the data");
    }


    // function successCallback() {
    //     const url = 'https://uat.portal.suppliesnet.net/PurchaseOrders/PurchaseOrder.asmx'
    //     const data = "something"
    //     axios.get(url, data)
    //         .then(response => {
    //             console.log('Data fetched successfully:', response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error.message);
    //         });
    // }




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
                        src="/static/favicon.ico"
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

                <div className={styles.center}>
                    <div className={styles.column}>
                        <div className={styles.titleLarge}>{name}</div>
                        <div className={styles.titleSmall}> OEM #: {oem}</div>
                        <Image src={image} width={300} height={250} />

                    </div>
                    <div className={styles.centerFeature}>
                        <div className={styles.aContainer}>
                            <div className={styles.titleLargeBlack}>Features</div>
                            <div className={styles.something}>
                                <div className={styles.titleSmall}>Model: <div className={styles.small}>{oem}</div> </div>
                                <div className={styles.titleSmall}>Yield: <div className={styles.small}>{yieldStuff}</div> </div>
                                <div className={styles.titleSmall}>Retail Price:  <div className={styles.small}>${price}</div></div>
                                <div className={styles.titleSmall}>Condition: <div className={styles.small}>New</div></div>
                            </div>
                        </div>
                        <div className={styles.buttonRow}>
                            <button className={styles.button3} onClick={() => {
                                getOrderData().then(() => {
                                    setOrderData().then(() => {
                                        createDistribution()
                                    })
                                })
                                // setOrderData()
                            }}>Buy Now!</button>
                            <button className={styles.button3}>Add To Cart</button>
                        </div>

                    </div>
                </div>
                <div className={styles.secondSection}>
                    <div className={styles.row}>
                        <div>Lexmark 1234 Specs and Details</div>
                    </div>
                    <div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Part #</div>
                            <div className={styles.titleSmallSpec}>{oem}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Page Yield</div>
                            <div className={styles.titleSmallSpec}>{yieldStuff}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Color</div>
                            <div className={styles.titleSmallSpec}>{color}</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Shipping Weight</div>
                            <div className={styles.titleSmallSpec}>12345</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Price</div>
                            <div className={styles.titleSmallSpec}>12345</div>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TonerChoice;
