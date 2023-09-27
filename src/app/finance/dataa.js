"use client"
import React, { useState, useRef } from "react";
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
  const handleSubmit = (e) => {
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
          number: number,
          from: "Financing page",
          name: name,
        },
      }),
    }).then((res) => {

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
                <div className={styles.container}>
                  <h2>
                    <div className={styles.black}>Get Your free Quote!</div>
                  </h2>
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
                      <div className={styles.number}>1</div>
                      <input
                        className={styles.inputSingle}
                        placeholder="Name"
                        type="text"
                        name=""
                        id=""
                        required={true}
                        onChange={() => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className={styles.space}>
                      <div className={styles.number}>2</div>
                      <PatternFormat
                        format="+1 (###) #### ###"
                        allowEmptyFormatting
                        mask="_"
                        className={styles.phoneNumber}
                        onChange={(event) => {
                          setNumber(event.target.value);
                        }}
                      />
                      ;
                    </div>

                    <div className={styles.space}>
                      <div className={styles.number}>3</div>
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
                  <button
                    onClick={(e) => {
                      setQuoteToggle(!quoteToggle);
                      handleSubmit(e);
                    }}
                    className={styles.button}
                    disabled={!recaptchaResponse}
                  >
                    Get My Quote
                  </button>
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
