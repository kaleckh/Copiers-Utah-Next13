"use client";
import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../components/Header";
import axios from 'axios';
import Image from "next/image";
import Sliver from "../components/sliverr";
import { CartContext } from "../../providers/cart";
import Head from "next/head";
import styles from "../styles/checkout.module.css";
import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
// import { eventDataSchema } from "square/dist/types/models/eventData"

const checkout = (props) => {
    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [identity, setIdentity] = useState({});
    const [orderId, setOrderId] = useState("");
    const [preShip, setPreShip] = useState();
    const [exp, setExp] = useState();
    const [csv, setCsv] = useState();
    const [card, setCard] = useState();
    const [localCart, setLocalCart] = useState();
    const [cardInfoLocal, setCardInfoLocal] = useState({});
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [noChange, setFalse] = useState(false);
    const [realPriceLocal, setRealPriceLocal] = useState();
    const { realPrice, setPersonInfo, setCardInfo, personInfo, cardInfo, cart } = useContext(CartContext);
    const [something, setSomething] = useState(false);
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState(0);
    const [newPrice, setNewPrice] = useState("");
    const [number, setNumber] = useState("");
    const [maybe, setMaybe] = useState(false);
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const tawkMessengerRef = useRef();

    useEffect(() => {

        setPersonInfo({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
        })
        // setPersonInfo(identity)


    }, [firstName, lastName, email, phone])
    useEffect(() => {

        setCardInfo({
            "card": card,
            "csv": csv,
            "exp": exp
        })

    }, [csv, card, exp])

    async function callBack() {

    }
    // useEffect(() => {
    //     setLocalCart(cart)
    // }, [cart])


    async function createDistribution() {

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                cardInfo,
                personInfo,
                cart

            }),
        };

        const response = await fetch('/api/pay/card', requestOptions, callBack);
        const data1 = await response.json();
        // console.log(data1, "this is the data");
    }


    useEffect(() => {
        setRealPriceLocal(JSON.parse(localStorage.getItem("realPrice")))
        setPreShip(JSON.parse(localStorage.getItem("realPrice")) - 2)
    }, [])


    console.log(cardInfo.card, "this is the identity of a person")
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
                    <div className={styles.title}>Toner Order</div>
                    <div className={styles.titleSmall}>${realPriceLocal}</div>
                    <div className={styles.line}></div>
                    <div className={styles.beginning}>
                        <div>ORDER SUMMARY</div>
                        <div>(1 ITEM)</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.center}>
                        <div className={styles.rowTop}>
                            <div style={{ textAlign: "start" }}>Sub Total:</div>
                            <div>${preShip}</div>
                        </div>
                        <div className={styles.rowTop}>
                            <div style={{ textAlign: "start" }}>Shipping:</div>
                            <div>$2.99</div>
                        </div>
                        <div className={styles.rowTop}>
                            <div style={{ textAlign: "start" }}>Order Total:</div>
                            <div>${realPriceLocal}</div>
                        </div>
                    </div>

                    <div className={styles.line}></div>
                    <div style={{ width: "90%", fontSize: "17px" }} className={styles.titleSmall}>Contact</div>
                    <div>
                        <div className={styles.row}>
                            <input onChange={() => { setPhone(event.target.value) }} className={styles.input} type="text" placeholder={"Phone number"} />
                            <input onChange={() => { setEmail(event.target.value) }} className={styles.input} type="text" placeholder={"Email address for receipt"} />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <div className={styles.titleSmall} style={{ paddingBottom: "10px", fontSize: '17px' }}>Shipping Address</div>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ paddingBottom: "20px" }} className={styles.row}>
                                <input onChange={(event) => {
                                    setFirstName(event.target.value)
                                }} className={styles.input} type="text" placeholder={"First Name"} />
                                <input onChange={(event) => {
                                    setLastName(event.target.value)
                                }} className={styles.input} type="text" placeholder={"Last Name"} />
                            </div>
                            <input onChange={() => { setAddress(event.target.value) }} className={styles.inputB} type="text" placeholder={"Enter your address here"} />
                            {maybe ? <><input className={styles.input} type="text" placeholder={"Apt, Suite, Floor"} /></> : <><div style={{ padding: "5px" }} onClick={() => {
                                setMaybe(!maybe)
                            }}>+Add Apt</div></>}
                            {/* <input type="check" /> */}
                        </div>

                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <input onChange={(event) => {
                            setCard(event.target.value)
                        }} style={{ marginBottom: "15px" }} className={styles.inputB} type="text" placeholder={"Put card number here"} />
                        <div className={styles.row}>
                            <input onChange={(event) => {
                                setExp(event.target.value)
                            }} className={styles.input} type="text" placeholder={"Exp Dat"} />
                            <input onChange={() => {
                                setCsv()
                            }} className={styles.input} type="text" placeholder={"CSV"} />
                        </div>
                    </div>

                    <button onClick={() => {
                        createDistribution()
                    }} style={{ marginBottom: "15px" }} className={styles.button}>Checkout!</button>



                </div>
            </div>
            <Footer />
        </div>
    );
};

export default checkout;
