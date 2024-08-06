"use client"
import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/shortTerm.module.css";
import { PatternFormat } from "react-number-format";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";;

const RentalQuote = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [toggle, setToggle] = useState(false);
    const [quote, setQuote] = useState(false);
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const tawkMessengerRef = useRef();
    const [recaptchaResponse, setRecaptchaResponse] = useState(false);

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    useEffect(() => {
        if (
            message.length > 1 &&
            number.length > 1 &&
            name.length > 1 &&
            email.length > 1 &&
            recaptchaResponse !== false
        ) {
            setToggle(true);
        }
    }, [message, number, name, email, recaptchaResponse]);



    const onLoad = () => {
        console.log("onLoad works!");
    };

    async function sendEmail() {
        debugger;
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                from: "Rent A Copier",
                name: name,
                message: message,
                number: number,
                email: email,
            }),
        };
        try {
            const response = await fetch("/api/pay/quote", requestOptions);

            const data1 = await response.json();
            console.log(data1, "this is the response");
        } catch (err) { }
    }


    return (
        <div className={styles.secondSection}>
            <TawkMessengerReact
                onLoad={onLoad}
                propertyId="5abd4931d7591465c7090c65"
                widgetId="default"
                useRef={tawkMessengerRef}
            />
            <div>
                <h1 className={styles.title}>
                    Copiers Utah offers short and long term copier rentals.
                </h1>
                <div className={styles.lineRow}>
                    <div className={styles.column}>
                        <div className={styles.woman} />

                        {quote ? (
                            <div
                                style={{ fontSize: "30px", fontWeight: "300" }}
                                className={styles.title}
                            >
                                Awesome, you"re next in line for a call!
                            </div>
                        ) : (
                            <div>
                                <div className={styles.container}>
                                    <div className={styles.black}>Get Your Quote!</div>
                                    <div
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-evenly",
                                            height: "80%",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div className={styles.space}>
                                            <input
                                                style={{ marginRight: "10px" }}
                                                className={styles.inputSingle}
                                                placeholder="Full name"
                                                type="text"
                                                name=""
                                                id=""
                                                required={true}
                                                onChange={() => {
                                                    setName(event.target.value);
                                                }}
                                            />
                                            <input
                                                className={styles.inputSingle}
                                                placeholder="Email"
                                                type="text"
                                                name=""
                                                id=""
                                                required={true}
                                                onChange={() => {
                                                    setEmail(event.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className={styles.space}>
                                            <PatternFormat
                                                format="+1 (###) ### ####"
                                                allowEmptyFormatting
                                                mask="_"
                                                className={styles.phoneNumber}
                                                onChange={(event) => {
                                                    setNumber(event.target.value);
                                                }}
                                            />
                                        </div>

                                        <div className={styles.space}>
                                            <textarea
                                                onChange={() => {
                                                    setMessage(event.target.value);
                                                }}
                                                className={styles.inputSingle}
                                                placeholder="Comments"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{ height: "25%", display: "flex" }}
                                        className={styles.padding}
                                    >
                                        {/* <ReCAPTCHA
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className="recaptcha"
                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                        ref={captchaRef}
                        onChange={verifyCallback}
                      /> */}
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            setQuote(!quote);
                                            sendEmail(e);
                                        }}
                                        className={styles.buttonBlue}
                                        disabled={!toggle}
                                    >
                                        Get My Quote
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalQuote;


