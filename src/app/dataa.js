"use client"
import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Section from "../app/components/Section";
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
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
      <Header />
      <div className={styles.secondSection}>
        <div className={styles.flexSomething}>
          <div className={styles.flex}>
            <div className={styles.mainContainer}>
              <div className={styles.buttonCenter}>
                <div className={styles.bubble}>
                  Copiers Utah Welcomes You
                </div>
              </div>
              <div className={styles.homepageTitle}>
                Explore Our Copier Buying And Leasing Solutions
              </div>
              <div className={styles.paragraphSmall}>
                We provide a variety of high-quality copiers for your business needs. Whether you buy or lease, our cutting-edge solutions will boost your office efficiency to new heights.
              </div>
              <div className={styles.buttonCenter}>
                <Link href={'/buy'}>
                  <button className={styles.buttonBlue}>Get A Quote Now</button>
                </Link>
              </div>
            </div>

            <div className={styles.displayNone}>
              <Image
                src="/static/Group.webp"
                alt="buy a used or new business copier"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className={styles.needSpace}>
          <div style={{ display: "flex", justifyContent: "center", padding: "30px" }} className={styles.titleBig}>Our
            <div style={{ color: "rgb(2,50,92)", paddingLeft: "15px" }}>Services</div>
          </div>
          <div className={styles.row}>
            <div className={styles.boxContainer}>
              <Link href={'/fix'}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="/static/repairs.webp"
                      alt="buy a used or new business copier"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className={styles.serviceTitle} style={{ paddingBottom: "20px" }}>Copier Repair</div>
                    <div className={styles.serviceParagraph}>Copier repairs offer businesses a budget-friendly way to keep their office equipment in top shape, ensuring smooth operations without breaking the bank.</div>
                  </div>
                </div>
              </Link>
              <Link href={'/it'}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="/static/it.webp"
                      alt="buy a used or new business copier"
                      width={85}
                      height={60}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className={styles.serviceTitle} style={{ paddingBottom: "20px" }}>It Services</div>
                    <div className={styles.serviceParagraph}>IT services are a cost-effective solution for businesses, providing essential tech expertise and support without a big upfront investment.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={'/shortTerm'}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="/static/rental.webp"
                      alt="buy a used or new business copier"
                      width={65}
                      height={70}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className={styles.serviceTitle} style={{ paddingBottom: "20px" }}>Short Term Rentals</div>
                    <div className={styles.serviceParagraph}>Copier rentals are a cost-effective way for businesses to access the latest copier technology without making a large upfront investment</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
        <div id="quote" className={styles.section}>
          <div className={styles.thirdSectionRow}>
            <div className={styles.side}>
              <div className={styles.tonerTitle}>Toner Cartridges of Superior Quality For Sale</div>
              <div className={styles.buttonContainer}>
                <Link href={'/toner'}>
                  <button className={styles.button}>Browse Toner</button>
                </Link>
              </div>
            </div>
            <div className={`${styles.background} ${styles.displayNoneSmall}`}>
              <Image
                src="/static/yellowLexmark.webp"
                alt="buy a used or new business copier"
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className={styles.fourthSection}>
          <div style={{ color: "black", display: "flex", fontSize: "35px", fontWeight: "400", paddingBottom: "40px" }}>Our Top <div style={{ color: "rgb(2,50,92)", paddingLeft: "8px" }}>Products</div></div>
          <div className={styles.copierRow}>

            <Link href={'/lexmark'}>
              <div

                className={styles.copierContainer}
              >
                <h2 className={styles.title}>Lexmark</h2>
                <div className={styles.imageContainerSmall}>
                  <Image alt={"A Lexmark Copier For Sale"} src={'/static/Lexmark.webp'} fill={true} />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
            <Link href={'/konika'}>
              <div
                style={{ padding: "12px" }}
                className={styles.copierContainer}

              >
                <h2 style={{ padding: "5px" }} className={styles.title}>Konica Minolta</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src="/static/Konika.webp"
                    alt="buy a used or new business copier"
                    width={200}
                    height={175}
                  />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
            <Link href={'/epson'}>
              <div
                className={styles.copierContainer}

              >
                <h2 style={{ padding: "35px" }} className={styles.title}>Epson</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src="/static/epsonL.webp"
                    alt="buy a used or new business copier"
                    width={175}
                    height={160}
                  />
                </div>
                <button style={{ margin: "30px" }} className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
          </div>

        </div>
        <div className={`${styles.sectionMedium} ${styles.hideBox} `}>
          <Image
            src="/static/why.webp"
            alt="buy a used or new business copier"
            width={575}
            height={350}
          />
          <Image
            src="/static/problems.webp"
            alt="buy a used or new business copier"
            width={575}
            height={350}
          />
        </div>
        <div className={styles.reviewSection}>
          <div className={styles.customerTitle} >Trusted by hundreds of <div style={{ color: "rgb(2,50,92)", paddingLeft: "8px" }}>happy customers</div></div>
          <div className={styles.rowSpaced}>
            <div className={styles.boxReview}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Tara Bennets</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>5.0</div>
                  <Image
                    src="/static/star.webp"
                    alt="buy a used or new business copier"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className={styles.paragraphReview}>These guys do not disappoint! I have done business with them for a few years now. They have great customer service and amazing pricing on copy machines!</div>
            </div>
            <div className={`${styles.boxReview} ${styles.hideBox}`}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Kyle Francis</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>5.0</div>
                  <Image
                    src="/static/star.webp"
                    alt="buy a used or new business copier"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className={styles.paragraphReview}>Great company to work with. They have friendly staff and were able to get me up and running within a few days.
</div>
            </div>
            <div className={styles.boxReview}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Carley Ward</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>5.0</div>
                  <Image
                    src="/static/star.webp"
                    alt="buy a used or new business copier"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className={styles.paragraphReview}>This company is the best to do work with. They are very friendly and very helpful. I will be recommending them to everyone. I will never go anywhere else!</div>
            </div>
          </div>
          <div>
            <Link href={'https://www.google.com/maps/place/Copiers+for+Less/@40.5978129,-111.9193774,13z/data=!4m10!1m2!2m1!1scopiers+utah!3m6!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!15sCgxjb3BpZXJzIHV0YWhaDiIMY29waWVycyB1dGFokgEVY29waWVyX3JlcGFpcl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTjJaeE0xTjNFQUXgAQA!16s%2Fg%2F1hc90lr04?entry=ttu'} target={'_blank'}>
              <button style={{ width: "100%" }} className={styles.buttonBlue}>See All Google Reviews</button>
            </Link>
          </div>
        </div>
      </div >
      <Section />
      <Footer />
    </div >
  );
}
