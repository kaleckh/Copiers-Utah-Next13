"use client"
import React, { useState, useRef, useEffect } from "react";
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
  const [toggle, setToggle] = useState(true);
  const [number, setNumber] = useState("");
  const [images, setImages] = useState({
    imageOne: true, imageTwo: false, imageThree: false
  })
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


  useEffect(() => {
    var interval = setInterval(function image() {
      debugger
      if (images.imageOne === true) {
        setImages({ imageOne: false, imageTwo: true, imageThree: false })
      } else if (images.imageTwo === true) {
        setImages({ imageOne: false, imageTwo: false, imageThree: true })
      } else if (images.imageThree === true) {
        setImages({ imageOne: true, imageTwo: false, imageThree: false })
      }
      // debugger
      return () => {
        // debugger
        console.log("clear interval")
        clearInterval(interval)
      }
    }, 1000)
  }, [])
  console.log(images, "images")
  
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
              <h1>
                <div className={styles.homepageTitle}>
                  Buy or Lease a Copier
                </div>
              </h1>
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

              <div className={images.imageOne ? styles.showing : styles.hidden}>
                <Image
                  style={{ borderRadius: "8px" }}
                  src="/static/womanNobg.webp"
                  alt="buy a used or new business copier"
                  width={500}
                  height={500}
                />
              </div>

              <div className={images.imageTwo ? styles.showing : styles.hidden}>

                < Image
                  style={{ borderRadius: "8px" }}
                  src="/static/manWomanNobg.webp"
                  alt="buy a used or new business copier"
                  width={500}
                  height={500}
                />
              </div>
              <div className={images.imageThree ? styles.showing : styles.hidden}>

                < Image
                  style={{ borderRadius: "8px" }}
                  src="/static/man.webp"
                  alt="buy a used or new business copier"
                  width={500}
                  height={500}
                />
              </div>




            </div>
          </div>
        </div>
        <div className={styles.needSpace}>
          <div className={styles.titleBig}>Other
            <div className={styles.blue}>Services</div>
          </div>
          <div className={styles.row}>
            <div className={styles.boxContainer}>
              <Link href={'/fix'}>
                <div className={styles.box}>
                  <div className={styles.iconContainer}>
                    <Image
                      src="/static/repairs.webp"
                      alt="buy a used or new business copier"
                      fill={true}
                    />
                  </div>
                  <div className={styles.centerStuff}>
                    <div className={styles.serviceTitle} >Copier Repair</div>
                    <div className={styles.serviceParagraph}>Experiencing copier issues? We've got you covered! Our expert technitians are your go-to team for fast and reliable copier repairs. No matter the brand or model, we specialize in fixing copiers efficiently, ensuring minimal downtime for your business.</div>
                  </div>
                </div>
              </Link>
              <Link href={'/it'}>
                <div className={styles.box}>
                  <div>
                    <div style={{ width: "70px" }} className={styles.iconContainer}>
                      <Image
                        src="/static/it.webp"
                        alt="buy a used or new business copier"
                        fill={true}
                      />
                    </div>
                  </div>
                  <div className={styles.centerStuff}>
                    <div className={styles.serviceTitle} >IT Services</div>
                    <div className={styles.serviceParagraph}>Experience expert IT services with lightning-fast solutions and clear communication. Upgrade your business technology effortlessly.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={'/shortTerm'}>
                <div className={styles.box}>
                  <div className={styles.iconContainer}>
                    <Image
                      src="/static/rental.webp"
                      alt="buy a used or new business copier"
                      fill={true}
                    />
                  </div>
                  <div className={styles.centerStuff}>
                    <div className={styles.serviceTitle} >Short Term Rentals</div>
                    <div className={styles.serviceParagraph}>Elevate your event with our short-term copier rentals. Seamless solutions for conventions and temporary needs.</div>
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
              <div className={styles.tonerTitle}>Toner Cartridges For Sale</div>
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
          <div>
            <div className={styles.titleBig}>Our
              <div className={styles.blue}>Products</div>
            </div>
          </div>
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

                className={styles.copierContainer}

              >
                <h2 className={styles.title}>Konica Minolta</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src="/static/Konika.webp"
                    alt="buy a used or new business copier"
                    width={190}
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
                <h2 className={styles.title}>Epson</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src="/static/epsonL.webp"
                    alt="buy a used or new business copier"
                    width={175}
                    height={160}
                  />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
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
          <div className={styles.customerTitle} >Trusted by Hundreds of <div className={styles.blueSmall}>Happy customers</div></div>
          <div className={styles.rowSpaced}>
            <div className={styles.boxReview}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Tara Bennets</div>
                <div className={styles.flexCenter}>
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
                <div className={styles.flexCenter}>
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
                <div className={styles.flexCenter}>
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
            <Link href={'https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9091041,17z/data=!4m8!3m7!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!16s%2Fg%2F1hc90lr04?entry=ttu'} target={'_blank'}>
              <button className={styles.buttonBlue}>See All Google Reviews</button>
            </Link>
          </div>
        </div>
      </div >
      <Section />
      <Footer />
    </div >
  );
}
