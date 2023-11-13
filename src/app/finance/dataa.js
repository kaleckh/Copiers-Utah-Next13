"use client"
import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Section from "../components/Section";
import Sliver from '../components/sliverr'
import Head from "next/head";
import { Metadata } from 'next'
// import Form from "./Form";
import { PatternFormat } from "react-number-format";
import styles from "../styles/Finance.module.css";
import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import ReCAPTCHA from "react-google-recaptcha";


const Finance = () => {
  const [toggle, setToggle] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const [quoteToggle, setQuoteToggle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const tawkMessengerRef = useRef();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const captchaRef = useRef(null);

  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  async function sendEmail() {
  
    const requestOptions =
    {
      method: "POST",
      body: JSON.stringify({

        from: "Buy A Copier",
        name: name,
        message: message,
        number: number,
        email: email,
      }),
    }
    try {

      const response = await fetch('/api/pay/quote', requestOptions);

      const data1 = await response.json();
      console.log(data1, "this is the response")
    } catch (err) {
    }
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
  useEffect(() => {
    if (message.length > 1 && number.length > 1 && name.length > 1 && email.length > 1 && recaptchaResponse !== false) {
      setButtonToggle(true)
    }

  }, [message, number, name, email, recaptchaResponse])

  return (
    <div className={styles.main}>

      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>

      <Header />
      <div id="quote" className={styles.secondSection}>
        <div className={styles.eighty}>
          <h1 className={styles.title}>
            Copiers Utah offers short and long term copier rentals.
          </h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.woman} />
            </div>
            {toggle ? (
              <div>
                <div className={styles.secondSection}>
          
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

                    <input
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
                  <ReCAPTCHA
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="recaptcha"
                    sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
                    ref={captchaRef}
                    onChange={verifyCallback}
                  />
                </div>
                <button
                  onClick={() => {
                    setQuoteToggle(!quoteToggle);
                    sendEmail();
                  }}
                  className={styles.buttonBlue}
                  disabled={!buttonToggle}
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
              </div>
            ) : (
                <div className={styles.center}>
                  {quoteToggle ? (
                    <div style={{ display: "contents" }}>
                      <h2 className={styles.titleBig}>Financing Made Easy</h2>
                      <div className={styles.paragraph}>
                        We know how it can be stressful finding a printer. That"s
                        why we"ve made it easier than ever to find your next one
                        and get you all your information on it
                    </div>
                      <button
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                        className={styles.button}
                      >
                        Get Your Terms
                    </button>
                    </div>
                  ) : (
                      <div
                        className={styles.title}
                        style={{
                          width: "140%",
                          fontWeight: "300",
                          fontSize: "37px",
                        }}
                      >
                        Awesome, we will be contacting you shortly!
                      </div>
                    )}
                </div>
              )}
          </div>
        </div>
      </div>
      <div className={styles.centerLine}>
        <div className={styles.line} />
      </div>
      <Section />

      <Footer />
    </div>
  );
};

export default Finance;
