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
import styles from "../styles/filter.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Link from "next/link";

const TonerChoice = (props) => {
    const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [oem, setOem] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [cash, setCash] = useState(true);
    const [finance, setFinance] = useState(false);
    const [rent, setRent] = useState(false);
    const [orderId, setOrderId] = useState();
    const tawkMessengerRef = useRef();
    const captchaRef = useRef(null);
    const [toner, setToner] = useState([{ oemNumber: 55, name: "toner black", itemPrice: 55 }])


    useEffect(() => {
        const oem = localStorage.getItem("oem");
        const price = localStorage.getItem("price");
        const name = localStorage.getItem("name");


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
        
        const response = await axios.get(`/api/pay?id=ElHZEQ4XK7bLBrH4QucV0AimZuIZY`, {cache: "force-cache"})
        const data = await response.json();
        console.log(data, "this is get order data");
    }
    useEffect(() => {   
        console.log(orderId)
        getOrderData()
    }, [orderId]);

    async function createLink() {
        const response = await fetch("/api/pay", { method: "POST" })
        const data = await response.json();
        setOrderId(data.orderId)
        console.log(data, "this is the data");
    }


    async function createDistribution() {
        const response = await fetch("/api/pay/distribution", { method: "POST" })
        const data = await response.json();
        console.log(data, "this is the data");
    }


    function successCallback() {
        const url = 'https://uat.portal.suppliesnet.net/PurchaseOrders/PurchaseOrder.asmx'
        const data = "something"
        axios.get(url, data)
            .then(response => {
                console.log('Data fetched successfully:', response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }





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
                        <div className={styles.titleLarge}>Lexmark C/MC3326 Black 3K Print Cartridge </div>
                        <div className={styles.titleSmall}> Part #: C330H10</div>
                        <Image src={'/static/favicon.ico'} width={250} height={200} />

                    </div>
                    <div className={styles.centerFeature}>
                        <div className={styles.titleLargeBlack}>Features</div>
                        <div className={styles.titleSmall}>* Example</div>
                        <div className={styles.titleSmall}>* Example</div>
                        <div className={styles.titleMedium}>Retail Price: 500.99</div>
                        <div>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>

                        {/* <PaymentForm
                            createPaymentRequest={() => ({
                                countryCode: "US",
                                currencyCode: "USD",
                                total: {
                                    amount: "1.00",
                                    label: "Total",
                                },
                            })}
                            applicationId="sandbox-sq0idb-Hjbfh1xVL93-HxQiP4csTg"
                            cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                                const response = await fetch("/api/pay", {
                                    method: "POST",
                                    headers: {
                                        "Content-type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        sourceId: token.token,
                                    }),
                                });
                                console.log(await response.json());
                            }}
                            createVerificationDetails={() => ({
                                amount: '1.00',
                                billingContact: {
                                    addressLines: ['123 Main Street', 'Apartment 1'],
                                    familyName: 'Doe',
                                    givenName: 'John',
                                    countryCode: 'GB',
                                    city: 'London',
                                },
                                currencyCode: 'GBP',
                                intent: 'CHARGE',
                            })}
                            locationId='LDMMSQDX5M7ZP'
                        >

                            <CreditCard />
                            <GooglePay />
                        </PaymentForm> */}
                        <button style={{ padding: "50px" }} onClick={() => {

                            createLink()
                        }}></button>

                    </div>
                </div>
                <div className={styles.secondSection}>
                    <div className={styles.row}>
                        <div className={styles.titleMediumSpec}>Specs</div>
                        <div className={styles.titleMediumSpec}>Overview</div>
                    </div>
                    <div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Part #</div>
                            <div className={styles.titleSmallSpec}>12345</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Print Tech</div>
                            <div className={styles.titleSmallSpec}>12345</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Yield Value </div>
                            <div className={styles.titleSmallSpec}>12345</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Packaged Size </div>
                            <div className={styles.titleSmallSpec}>12345</div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.row}>
                            <div className={styles.titleSmallSpecNB}>Packaged Weight</div>
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
