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
    const [city, setCity] = useState();
    const [hidden, setHidden] = useState(false);
    const [preShip, setPreShip] = useState();
    const [exp, setExp] = useState();
    const [billing, setBilling] = useState(false);
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
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [items, setItems] = useState(false);
    const [message, setMessage] = useState("");
    const tawkMessengerRef = useRef();

    useEffect(() => {

        setPersonInfo({
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
            "address": address,
            "city": city,
            "state": state,
            "zip": zip,
        })
        // setPersonInfo(identity)


    }, [firstName, lastName, email, phone, city, address, state, zip])
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


    async function chargeCard() {

        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                cardInfo,
                personInfo,
                cart

            }),
        };

        const response = await fetch('/api/pay/card', requestOptions);
        const data1 = await response.json();
        console.log(data1, "this is the data");
    }


    useEffect(() => {
        setRealPriceLocal(JSON.parse(localStorage.getItem("realPrice")))
        setPreShip(JSON.parse(localStorage.getItem("realPrice")) - 2)
    }, [])

    async function createDistribution() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                personInfo,
                cart
            }),
        };

        const response = await fetch("/api/pay/distribution", requestOptions);
        const data1 = await response.json();
        console.log(data1, "this is the data");
    }


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
                    <div style={{ width: "80%" }}>
                        <div className={styles.beginning}>
                            <div style={{ display: "flex" }}>
                                <div style={{ paddingRight: "5px", paddingBottom: "10px", paddingTop: "10px" }} >ORDER SUMMARY</div>
                                <div style={{ paddingTop: "10px" }}>({cart.length}) Item</div>
                            </div>
                            {items ? <></> : <div style={{ paddingTop: "10px", cursor: "pointer" }} onClick={() => {
                                setHidden(!hidden)
                            }}>+ See Items</div>}

                        </div>


                        <div>
                            {cart.map((item) => {

                                return <div className={`${styles.dataResult} ${hidden ? styles.showing : styles.hidden}`}>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingRight: "5px" }}>({item.quantity})</div>
                                        <div style={{ fontSize: "12px" }}>{item.name}</div>
                                    </div>
                                    <div>${item.price}</div>
                                </div>
                            })}
                        </div>

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
                    <div style={{ width: "80%", fontSize: "17px", paddingTop: "10px", paddingBottom: "10px" }} className={styles.titleSmall}>Contact</div>
                    <div style={{ paddingBottom: "20px" }} >
                        <div style={{ paddingBottom: "20px" }} className={styles.row}>
                            <input onChange={(event) => {
                                setFirstName(event.target.value)
                            }} className={styles.input} type="text" placeholder={"First Name"} />
                            <input onChange={(event) => {
                                setLastName(event.target.value)
                            }} className={styles.input} type="text" placeholder={"Last Name"} />
                        </div>
                        <div className={styles.row}>
                            <input onChange={() => { setPhone(event.target.value) }} className={styles.input} type="text" placeholder={"Phone number"} />
                            <input onChange={() => { setEmail(event.target.value) }} className={styles.input} type="text" placeholder={"Email address for receipt"} />
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <div className={styles.titleSmall} style={{ paddingBottom: "10px", fontSize: '17px', paddingTop: "10px" }}>Shipping Address</div>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <div style={{
                                paddingBottom: "20px"
                            }} className={styles.column}>
                                <div style={{ width: "113%" }} className={styles.row}>
                                    <input onChange={(event) => {
                                        setState(event.target.value)
                                    }} style={{ marginBottom: "20px" }} className={styles.input} type="text" placeholder={"State"} />

                                </div>
                                <div style={{ width: "113%" }} className={styles.row}>
                                    <input onChange={(event) => {
                                        setFirstName(event.target.value)
                                    }} className={styles.input} type="text" placeholder={"City"} />
                                    <input onChange={(event) => {
                                        setLastName(event.target.value)
                                    }} className={styles.input} type="text" placeholder={"Zip Code"} />
                                </div>
                            </div>
                            <input onChange={() => { setAddress(event.target.value) }} className={styles.inputB} type="text" placeholder={"Enter your address here"} />
                            {maybe ? <><input className={styles.input} type="text" placeholder={"Apt, Suite, Floor"} /></> : <><div style={{ padding: "10px" }} onClick={() => {
                                setMaybe(!maybe)
                            }}>+Add Apt</div></>}
                            <div className={styles.center}>
                                <div style={{ paddingBottom: "10px" }}>Is your billing address the same as shipping?</div>
                                <div className={styles.rowSmall}>
                                    <div>
                                        <div >No</div>
                                        <input onClick={() => {
                                            setBilling(!billing)
                                        }} type="checkbox" />
                                    </div>
                                    <div>
                                        <div>Yes</div>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                                {billing ? <div style={{
                                    paddingBottom: "20px"
                                }} className={styles.column}>
                                    <div style={{ width: "113%" }} className={styles.row}>
                                        <input onChange={(event) => {
                                            setState(event.target.value)
                                        }} style={{ marginBottom: "20px" }} className={styles.input} type="text" placeholder={"State"} />

                                    </div>
                                    <div style={{ width: "113%" }} className={styles.row}>
                                        <input onChange={(event) => {
                                            setFirstName(event.target.value)
                                        }} className={styles.input} type="text" placeholder={"City"} />
                                        <input onChange={(event) => {
                                            setLastName(event.target.value)
                                        }} className={styles.input} type="text" placeholder={"Zip Code"} />
                                    </div>
                                </div> : <></>}
                            </div>
                        </div>

                    </div>
                    <div className={styles.line}></div>
                    <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
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
                        chargeCard().then(() => {
                            // createDistribution()
                        })
                    }} style={{ marginBottom: "15px" }} className={styles.button}>Checkout!</button>



                </div>
            </div>
            <Footer />
        </div >
    );
};

export default checkout;
