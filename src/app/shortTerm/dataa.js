"use client"
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
// import Form from "./Form";
import Section from "../components/Section";
import { PatternFormat } from "react-number-format";
import Image from "next/image";
import { Metadata } from 'next'
import Sliver from '../components/sliverr'
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
// import Logo from "../Photos/logo.webp";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/shortTerm.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const ShortTerm = () => {
  const tawkMessengerRef = useRef();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [nameRes, setNameRes] = useState(false);
  const [toggle, setToggle] = useState(false);
  // const [quoteToggle, setQuoteToggle] = useState(false);
  const [messageRes, setMessageRes] = useState(false);
  const [quote, setQuote] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const captchaRef = useRef(null);

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };
  useEffect(() => {
    if (message.length > 1 && number.length > 1 && name.length > 1 && email.length > 1 && recaptchaResponse !== false) {
      setToggle(true)
    }

  }, [message, number, name, email, recaptchaResponse])

  async function sendEmail() {
    debugger
    const requestOptions =
    {
      method: "POST",
      body: JSON.stringify({

        from: "Rent A Copier",
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
      <div className={styles.secondSection}>
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
      <div className={styles.section}>
        <div className={styles.copiersTitle}>
          Copiers Utah <div className={styles.copiersTitleBlue}>Rental Services</div>
        </div>
        <h3 className={styles.titleSmall}>
          We Rent Copiers For All Types Of Events!
        </h3>
        <div
          style={{ display: "flex", justifyContent: "center", height: "fit-content", flexDirection: "column", alignItems: "center" }}
        >
          <div className={styles.row}>
            <div className={styles.Realcolumn}>
              <div>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="/static/contructionIcon.webp"
                      alt="construction icon"
                      width={50}
                      height={60}
                    />
                  </div>
                  <div style={{ paddingRight: "15px" }}>Construction Trailers</div>
                </div>
              </div>
              <div className={styles.box}>
                <div>
                  <Image
                    src="/static/building.webp"
                    alt="icon of a building"
                    width={50}
                    height={60}
                  />
                </div>
                <div style={{ paddingRight: "15px" }}>Temporary Offices</div>
              </div>
              <div className={styles.box}>
                <div>
                  <Image
                    src="/static/snow.webp"
                    alt="snow icon"
                    width={50}
                    height={60}
                  />
                </div>
                <div >Seasonal Work</div>
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <Image
                  src="/static/rental.webp"
                  alt="rental icon"
                  width={50}
                  height={60}
                />
              </div>
              <div>Short Term Business Projects</div>
            </div>
          </div>
          <div className={styles.paragraph}>At our company, we understand the diverse needs of different events and projects, which is why we offer copier rental services for a wide range of occasions. Whether it's a construction trailer where blueprints need to be printed and shared, or a temporary office where important documents need to be copied and scanned, we've got you covered. Our reliable copiers ensure that construction projects can run smoothly with efficient documentation and communication. We provide the necessary printing resources for professionals working in temporary offices, ensuring they have access to high-quality printing, copying, and scanning capabilities during their short-term assignments.</div>
          <div style={{ paddingBottom: "20px" }} className={`${styles.paragraph} ${styles.hidden}`}>Moreover, our copier rentals are ideal for seasonal work arrangements, where businesses experience increased demands during peak periods. We understand the importance of keeping up with the workload and offer reliable printing solutions to support your seasonal workforce. Additionally, our copiers are perfectly suited for short-term business projects, enabling efficient data processing, documentation, and collaboration. We pride ourselves on delivering top-quality copiers that meet the unique printing needs of our clients, ensuring that you have the necessary tools to get the job done right, no matter the event or project.</div>
        </div>
      </div>
      <Section />
      <Footer />
    </div >
  );
};

export default ShortTerm;
