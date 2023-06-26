"use client"
import React, { useEffect, useRef, useState } from "./node_modules/react";
import Header from "../components/Header";
import Image from "./node_modules/next/image";
import Sliver from '../components/Sliver'
// import Form from "./Form";
import { PatternFormat } from "./node_modules/react-number-format";
import Head from "./node_modules/next/head";
import ReCAPTCHA from "./node_modules/react-google-recaptcha";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/buy.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "./node_modules/@tawk.to/tawk-messenger-react";

const Buy = (props) => {
  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [quoteToggle, setQuoteToggle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [cash, setCash] = useState(true);
  const [finance, setFinance] = useState(false);
  const [rent, setRent] = useState(false);
  const tawkMessengerRef = useRef();
  const captchaRef = useRef(null);

  const callback = (name, message, number) => {
    setName(name);
    setMessage(message);
    setNumber(number);
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
        subject: `This is${name}'s quote form. Her number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "5120871",
        template_data: {
          message: message,
          from: "buy a copier",
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

  var verifyCallback = function (response) {
    debugger;
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
      <Sliver/>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://copiersutah.com/buy/" />
        <title>
          Get a Quote for High-Quality New and Refurbished Copiers | Copiers Utah
        </title>
        <meta
          name="description"
          content="Looking for a high-quality copier for your office? Copiers Utah offers a range of advanced copy machines for sale, including new and refurbished options. Fill out our easy form to get a personalized quote today."
        />
        <meta
          name="keywords"
          content="office copiers, copiers for sale, refurbished copiers, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "New and Refurbished Copiers",
              description:
                "High-quality copiers for your office, including new and refurbished options.",
              brand: "Copiers Utah",
              url: "https://copiersutah.com/home",
              image: "https://copiersutah.com/static/logo.webp",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                lowPrice: "Your Lowest Price",
                highPrice: "Your Highest Price",
                offerCount: "Number of Copiers Available",
                seller: {
                  "@type": "LocalBusiness",
                  name: "Copiers Utah",
                  telephone: "(801) 261-0510",
                  email: "info@copiersutah.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "554 W 8360 S",
                    addressLocality: "Sandy",
                    addressRegion: "Utah",
                    postalCode: "84070",
                    addressCountry: "USA",
                  },
                },
              },
            }),
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
      <div className={styles.main}>
        <div className={styles.centerContainer}>
          <div className={styles.title}>
            Want a copier? Fill out our quote form!
          </div>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.woman} />
          {quoteToggle ? (
            <div>
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
          ) : (
              <h1 className={styles.title}>
                Awesome, we will be contacting you shortly!
              </h1>
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
          <div style={{ width: "80%", display: "flex", alignItems: "center" }}>
            <div className={styles.line}></div>
            <div className={styles.paddedBox}>Copiers Utah Payment Options</div>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "10%",
              padding: "10px",
            }}
          >
            <div
              onClick={() => {
                setFinance(true), setCash(false), setRent(false);
              }}
              className={finance ? `${styles.blackButton}` : `${styles.option}`}
            >
              Financing
            </div>
            <div className={styles.blackSpace}> | </div>
            <div
              onClick={() => {
                setFinance(false), setCash(true), setRent(false);
              }}
              className={cash ? `${styles.blackButton}` : `${styles.option}`}
            >
              Leasing
            </div>
            <div className={styles.blackSpace}> | </div>
            <div
              onClick={() => {
                setFinance(false), setCash(false), setRent(true);
              }}
              className={rent ? `${styles.blackButton}` : `${styles.option}`}
            >
              Rent To Own
            </div>
          </div>
          {cash ? (
            <div className={styles.eighty}>
              <div className={styles.title}>Leasing With Copiers Utah?</div>
              <div className={styles.paragraph}>
                Copier leasing is a cost-effective way for businesses to access
                the latest copier technology without making a large upfront
                investment. Leasing copiers through our company, Copiers Utah,
                offers several benefits to businesses, including flexible
                leasing agreements and access to maintenance and support. Our
                customizable leasing agreements allow businesses to choose the
                copier equipment that best fits their needs and budget, with the
                ability to upgrade or downgrade as needed. This flexibility
                ensures that businesses have the copier equipment they need to
                operate efficiently, without having to worry about the costs
                associated with purchasing new equipment outright.
              </div>
              <div className={styles.paragraph}>
                Another benefit of copier leasing is that it allows businesses
                to focus on their core operations, rather than the hassle of
                maintaining and repairing copier equipment. Copiers Utah offers
                maintenance and support with all of our leasing agreements,
                which means businesses won't have to allocate resources towards
                equipment upkeep. This can save businesses time and money in the
                long run, as they can focus on other aspects of their operations
                while leaving the equipment maintenance to us. Overall, copier
                leasing through Copiers Utah provides a cost-effective solution
                that allows businesses to access the latest copier technology
                and focus on their core operations without the hassle of
                equipment maintenance.
              </div>
              <div
                style={{
                  justifyContent: "space-evenly",
                  width: "100%",
                  height: "30vh",
                }}
                className={styles.column}
              >
                <div className={styles.green}>Key Information</div>
                <div className={styles.row}>
                  <div className={styles.bulletPoints}>
                    <li>
                      Low initial investment and predictable monthly payment
                    </li>
                    <li>Potential tax benefits for businesses</li>
                    <li>Customizable lease terms and payment plans</li>
                  </div>
                  <div className={styles.bulletPoints}>
                    <li>Fixed monthly payments help businesses budget</li>
                    <li>
                      Option to purchase the equipment at the end of the lease
                      term
                    </li>
                    <li>Access to the latest copier technology</li>
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <></>
            )}

          {rent ? (
            <div className={styles.eighty}>
              <div className={styles.title}>Renting With Copiers Utah?</div>
              <div className={styles.paragraph}>
                Are you looking for copiers for sale or rent in Utah? Copier
                rental is a cost-effective solution for businesses in need of
                short-term copier equipment. It offers flexibility and
                convenience while saving you money compared to purchasing a
                copier outright. Additionally, copier rental allows you to
                adjust your equipment needs as your business evolves, without
                worrying about the hassle of maintaining and repairing the
                equipment on your own. This can be especially useful for those
                coming to Salt Lake City, Park City, Ogden, Orem, Provo, Tooele,
                and everywhere in-between.
              </div>
              <div className={styles.paragraph}>
                Renting a copier in Utah is an excellent way to optimize your
                business's performance. You can choose to rent a copier for a
                short period of time and return it once the job is complete, or
                rent-to-own and eventually own the equipment after paying for it
                over time. This way, you can benefit from the copier's features
                and functionalities without having to purchase it outright,
                which can be a significant financial burden for many businesses.
              </div>
              <div
                style={{ justifyContent: "space-evenly", width: "100%" }}
                className={styles.column}
              >
                <div className={styles.green}>Key Information</div>
                <div className={styles.row}>
                  <div className={styles.bulletPoints}>
                    <li>No large upfront investment required</li>
                    <li>Low-risk option to test out new copier equipment</li>
                    <li>Customizable rental terms and payment plans</li>
                  </div>
                  <div className={styles.bulletPoints}>
                    <li>No large upfront investment required</li>
                    <li>Low-risk option to test out new copier equipment</li>
                    <li>
                      Ability to own the equipment at the end of the rental term
                    </li>
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <></>
            )}
          {finance ? (
            <div className={styles.eighty}>
              <div className={styles.title}>Financing With Copiers Utah?</div>
              <div className={styles.paragraph}>
                Looking for copiers for sale or lease, but concerned about the
                upfront cost? At Copiers Utah, we offer copier financing options
                that can help businesses preserve their working capital and
                acquire the latest copier technology. Our financing options are
                customizable to meet the specific needs of each business, with
                flexible terms and payments that can be tailored to their budget
                and cash flow.
              </div>
              <div className={styles.paragraph}>
                We believe that every business deserves access to
                top-of-the-line copier equipment, regardless of their budget.
                With our copier financing options, businesses can acquire
                copiers for sale or lease without worrying about depreciation or
                obsolescence. Plus, they can spread the cost of the equipment
                over a set period of time, making it more manageable for their
                cash flow.
              </div>
              <div
                style={{ justifyContent: "space-evenly", width: "100%" }}
                className={styles.column}
              >
                <div className={styles.green}>Key Information</div>
                <div className={styles.row}>
                  <div className={styles.bulletPoints}>
                    <li>
                      Spread the cost of the equipment over a set period of time
                    </li>
                    <li>
                      Enjoy flexible terms and payments tailored to your
                      business needs
                    </li>
                    <li>
                      Reduced financial risk compared to purchasing equipment
                      outright
                    </li>
                  </div>
                  <div className={styles.bulletPoints}>
                    <li>
                      Personalized support and guidance from financing experts
                    </li>
                    <li>No large upfront investment required</li>
                    <li>
                      Ability to preserve credit lines for other business needs
                    </li>
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <></>
            )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;
