"use client"
import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Sliver from './components/sliverr'
import { PatternFormat } from "react-number-format";
import Link from "next/link";
import styles from "./styles/homepage.module.css";
import { Quote } from "./SVG/Quote";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
export default function Data() {


  const [name, setName] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("this is the test message");
  const tawkMessengerRef = useRef();
  const captchaRef = useRef(null);
  const onLoad = () => {
    console.log("onLoad works!");
  };
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const router = useRouter();
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
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
        subject: `This is${name}'s quote form. Their number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "5120871",
        template_data: {
          message: message,
          number: number,
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

  return (
    <div className={styles.main}>
      <Sliver />
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
      <Header />
      <div className={styles.secondSection}>
        <div className={styles.flex}>
          <div
            className={styles.shadeBig}
            style={{ height: "75%", marginTop: "24px" }}
          >
            <Link
              href="/buy"
              title="buy new and used copiers"
            >
              <div className={styles.parent}>
                <div className={styles.woman} />
                <div className={styles.overlay}>
                  <div className={styles.centerLarge}>
                    Buy Or Lease A Copier
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.somethingContainer}>
            <div className={styles.row}>
              <div

                className={styles.shade}
              >
                <Link
                  href="/fix"
                  title="copier maintenance"
                >
                  <div className={styles.parent}>
                    <div className={styles.repair} />
                    <div className={styles.overlay} />
                    <div className={styles.center}>Copier Repair</div>
                  </div>
                </Link>
              </div>
              <Link href={'/buy'}>
                <div
                  className={styles.shade}
                >
                  <div className={styles.parent}>
                    <div className={styles.toner} />
                    <div className={styles.overlay} />
                    <div className={styles.center}>Buy Toner</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.row}>
              <div className={styles.shade}>
                <Link href="/it" title="it services">
                  <div className={styles.parent}>
                    <div className={styles.itWork} />
                    <div className={styles.overlay} />
                    <div className={styles.center}>IT Work</div>
                  </div>
                </Link>
              </div>
              <div className={styles.shade}>
                <Link
                  href="/shortTerm"
                  title="leasing and rental services"
                >
                  <div className={styles.parent}>
                    <div className={styles.construction} />
                    <div className={styles.overlay} />
                    <div className={styles.center}>Short Term Rental</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div style={{ marginTop: "30px" }} className={styles.line}></div>
        </div>
        <div className={styles.needSpace}>
          <div className={styles.middle}>
            <h3 className={styles.reviewBig}>Recent Google Reviews...</h3>
          </div>
          <div className={styles.reviewRow}>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  People there are always fantastic to work with. I recommend
                  them to everyone
                </div>
              </div>
              <div className={styles.smallParagraph}>copiers near me</div>
              <div className={styles.title}>Tara Bennets</div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  Great company to work with. They have friendly staff and were
                  able to get me up and running within a few days.
                </div>
              </div>
              <div className={styles.smallParagraph}>copiers near me</div>
              <div className={styles.title}>Kyle Francis</div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  This company is the best to do work with. They are very
                  friendly and very helpful.
                </div>
              </div>
              <div className={styles.smallParagraph}>copiers near me</div>
              <div className={styles.title}>Carley Ward</div>
            </div>
          </div>
          <div className={styles.centerReview}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9827469,13z/data=!4m12!1m2!2m1!1scopiers+utah!3m8!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!15sCgxjb3BpZXJzIHV0YWhaDiIMY29waWVycyB1dGFokgEVY29waWVyX3JlcGFpcl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTjJaeE0xTjNFQUXgAQA!16s%2Fg%2F1hc90lr04"
            >
              <button className={styles.button}>See All Google Reviews</button>
            </a>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
        <div id="quote" className={styles.section}>
          <div className={styles.thirdSectionRow}>
            <div className={styles.front}>
              <h2 style={{ fontSize: "30px" }} className={styles.title}>
                We Sell New And Used Copiers
              </h2>
              <h3 style={{ fontSize: "20px" }} className={styles.h3}>
                Lets Get You A Quote!
              </h3>
              <div className={styles.cartoon}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.black}>Get Your free Quote!</div>
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
                    format="+1 (###) ### ####"
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
                  setQuoteToggle(!quoteToggle);
                  sendEmail(e);
                }}
                className={styles.button}
                disabled={!recaptchaResponse}
              >
                Get My Quote
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div className={styles.copiersLine}></div>
          <div className={styles.copiersTitle}>Copiers Utah</div>
          <div className={styles.copiersLine}></div>
        </div>
        <div className={styles.fourthSection}>
          <div className={styles.bottomRow}>
            <div className={styles.titleMed}>WHO WE ARE</div>
            <div className={styles.thirdParagraph}>
              inventory includes top-quality copiers from trusted brands,
              providing efficient printing solutions for businesses of all
              sizes. Our knowledgeable team is dedicated to helping you find the
              right equipment to fit your needs and budget.
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.titleMed}>OUR PROMISE</div>
            <div className={styles.thirdParagraph}>
              At copiers utah, we promise transparent pricing, high-quality
              equipment, and exceptional service. With competitive pricing on
              new and used copiers and a team dedicated to helping you find the
              right equipment, you can trust us for all your copier needs in
              Utah.
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div className={styles.titleMed}>OUR PRODUCTS</div>
            <div className={styles.thirdParagraph}>
              We offer a variety of new and used copiers, including top-quality
              models from trusted brands like Konica Minolta, Epson, and
              Lexmark. Additionally, we also offer reliable copier repair
              services for a wide range of brands beyond the ones we sell.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
