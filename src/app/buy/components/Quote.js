"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/buy.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { PatternFormat } from "react-number-format";
import Image from "next/image";

const Quote = () => {
    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const tawkMessengerRef = useRef();
    const captchaRef = useRef(null);

    async function sendEmail() {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                from: "Buy A Copier",
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

    var verifyCallback = function (response) {
        setRecaptchaResponse(response);
    };


    return (
        <div className={styles.main}>
            <div className={styles.centerContainer}>
                <h1 className={`${styles.title} ${styles.hidden}`}>
                    Want a copier? Fill out our quote form!
                </h1>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.woman} />
                {quoteToggle ? (
                    <div>
                        <div className={styles.container}>
                            <h2 className={styles.black}>Get Your Quote!</h2>
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
                                    setQuoteToggle(!quoteToggle);
                                    sendEmail(e);
                                }}
                                className={styles.buttonBlue}
                                disabled={!toggle}
                            >
                                Get My Quote
                            </button>
                        </div>
                    </div>
                ) : (
                    <h2 className={styles.title}>
                        Awesome, we will be contacting you shortly!
                    </h2>
                )}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                }}
            >

            </div>

        </div>
    );
};

export default Quote;
