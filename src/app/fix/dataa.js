"use client"
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Sliver from '../components/sliverr'
import Section from "../components/Section";
import Head from "next/head";
import Axios from "axios";
import { Metadata } from 'next'
import { PatternFormat } from "react-number-format";
import Image from "next/image";
import styles from "../styles/Fix.module.css";
import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import ReCAPTCHA from "react-google-recaptcha";

const Fix = () => {
  const tawkMessengerRef = useRef();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [valid_token, setValidToken] = useState([]);
  const [token, setToken] = useState();
  const captchaRef = useRef(null);

  const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

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
          number: number,
          zip: zipCode,
          from: "Fix a machine page",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    setToken(token);
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (valid_token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form");
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot");
      }
    }
  };
  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`http://localhost:8000/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
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
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://copiersutah.com/Fix/" />
        <title>
          Copier Machine Repair Services | Get a Quote Today | Copiers Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah provides reliable and affordable copier machine repair services. Fill out our easy form to get a personalized quote and get your copier back up and running in no time."
        />
        <meta
          name="keywords"
          content="copier repair, copier service, copier maintenance, copier technician, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Copiers Utah",
      "image": "https://www.example.com/static/logo.webp",
      "telephone": "(801) 261-0510",
      "email": "info@copiersutah.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1234 Main St.",
        "addressLocality": "Salt Lake City",
        "addressRegion": "UT",
        "postalCode": "84101",
        "addressCountry": "US"
      },
      "url": "https://www.copiersutah.com/",
      "sameAs": [
        "https://www.facebook.com/copiersutah",
        "https://twitter.com/copiersutah",
        "https://www.linkedin.com/company/copiers-utah"
      ]
      }
      `
          }}
        />
      </Head>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <Header />
      <div style={{ display: "flex" }} className={styles.column}>
        <div style={{ display: "flex", height: "fit-content", padding: "15px" }} className={styles.row}>
          <div className={styles.mainSpace}>
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                className={styles.black}
              >
                We work with all brands, including!{" "}
              </div>
              <div className={styles.smallBlack}>But not limited to</div>
            </div>
            <div className={styles.line}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className={styles.epson}></div>
              <div className={styles.Konika}></div>
              <div className={styles.lexmark}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className={styles.kycotera}></div>
              <div className={styles.xerox}></div>
              <div className={styles.hp}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className={styles.ricoh}></div>
              <div className={styles.sharp}></div>
              <div className={styles.canon}></div>
            </div>
          </div>

          {toggle ? (
            <div>
              <div>Awesome, your next in line</div>
            </div>
          ) : (
              <div style={{ width: "fit-content" }}>
                <div className={styles.container}>
                  <h1 className={styles.blackLarge}>
                    Schedule A Maintanance Call!
              </h1>
                  <div style={{ width: "97%", display: "flex" }}>
                    <div className={styles.number}>1</div>
                    <input
                      onChange={() => {
                        setName(event.target.value);
                      }}
                      style={{ width: "82%", color: "black" }}
                      className={styles.inputSingle}
                      placeholder="First Name"
                      type="text"
                      name=""
                      id=""
                      required={true}
                    />
                  </div>
                  <div style={{ width: "97%", display: "flex" }}>
                    <div className={styles.number}>2</div>
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
                  <div style={{ width: "97%", display: "flex" }}>
                    <div className={styles.number}>3</div>
                    <input
                      onChange={() => {
                        setZipCode(event.target.value);
                      }}
                      className={styles.inputSingle}
                      type="text"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div style={{ width: "97%", display: "flex" }}>
                    <div className={styles.number}>4</div>
                    <input
                      onChange={() => {
                        setMessage(event.target.value);
                      }}
                      style={{ color: "black" }}
                      className={styles.inputSingle}
                      type="text"
                      name=""
                      id=""
                      placeholder="What type of service?"
                    />
                  </div>

                  <ReCAPTCHA
                    style={{ display: "flex", justifyContent: "center" }}
                    className="recaptcha"
                    sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
                    ref={captchaRef}
                    onChange={verifyCallback}
                  />
                  <button
                    onClick={(e) => {
                      sendEmail(e);
                      setToggle(!toggle);
                    }}
                    className={styles.button}
                    disabled={!recaptchaResponse}
                  >
                    Get quote!
              </button>
                </div>
              </div>
            )}
        </div>
        <div>
          <div className={`${styles.fifty} ${styles.pic}`}>
            <div className={styles.overlay}>
              <div style={{ width: "90%" }}>
                <div className={styles.paragraph}>At Copiers Utah, our commitment to exceptional service extends beyond just offering reliable copiers. We take immense pride in providing top-notch maintenance services that go the extra mile to keep your office running smoothly and efficiently. Our dedicated team of friendly and skilled technicians is here to ensure that your copiers are always in optimal condition, delivering consistent performance and minimizing any disruptions to your workflow.<div />
                  <div className={styles.paragraph}>What sets us apart is our unparalleled ability to work seamlessly with all major copier brands. We understand the unique equipment needs of every business, and our unwavering support is available to you, regardless of the copier brand you use. Our experienced technicians possess comprehensive knowledge and expertise to handle maintenance and repairs for a wide range of copier models, including renowned brands like Konica Minolta, Lexmark, Epson, and more. Rest assured, we have the expertise and resources to meet your copier requirements with utmost precision and care.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />

      <Footer />
    </div>
  );
};

export default Fix;
