"use client";
import React, { useContext, useRef, useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import { CartContext } from "../../providers/cart";
import Link from "next/link";
import styles from "../../styles/filter.module.css";
import Footer from "../../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { TonerContext } from "../../providers/toner";
import BreadCrumbs from "../../components/BreadCrumbs";

const Buy = (props) => {
  const toners = useContext(TonerContext);

  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [name, setName] = useState("");
  const { setCartLook, setTonerOem } = useContext(CartContext);
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const tawkMessengerRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending");

    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.SMTP_API,
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

  const breadCrumbs = [{ name: "Home", url: "/" }];

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
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className={styles.mainContent}>
        <div style={{ width: "80%", display: "flex" }}>
          <div className={styles.filter}>
            <div className={styles.centerNormal}>
              <div
                style={{ fontSize: "18px", width: "70%", fontWeight: "400" }}
                className={styles.titleBig}
              >
                Filter
              </div>
            </div>
            <div className={styles.columnCenter}>
              <div className={styles.centerNormal}>
                <div
                  style={{ fontSize: "15px", width: "100%", fontWeight: "300" }}
                  className={styles.titleSmall}
                >
                  Brands
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.width}>
                  <input className={styles.space} type="checkbox" />
                </div>
                <div>
                  <div>Epson</div>
                </div>
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>Konika Minolta</div>
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>HP</div>
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>Xenox</div>
              </div>
            </div>
            <div className={styles.columnCenter}>
              <div style={{ fontSize: "16px" }} className={styles.titleBig}>
                color
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>Black</div>
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>Blue</div>
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>Red</div>
              </div>
              <div className={styles.row}>
                <input className={styles.space} type="checkbox" />
                <div>Yellow</div>
              </div>
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.boxContainer}>
              {toners.map((toner) => {
                return (
                  <div
                    key={toner.oem}
                    // onClick={() => {
                    //   setCartLook({
                    //     name: toner.name,
                    //     oem: toner.oem,
                    //     price: toner.price,
                    //     color: toner.color,
                    //     photo: toner.image,
                    //     yield: toner.yield,
                    //   });
                    // }}
                    className={styles.box}
                  >
                    <Link
                      onClick={() => {
                        setTonerOem(toner.oem);
                        localStorage.setItem("tonerOem", toner.oem);
                      }}
                      className={styles.somethingElse}
                      href={`/toner-choice?oem=${toner.oem}`}
                    >
                      <Image
                        style={{ borderRadius: "5px" }}
                        src={toner.image}
                        width={180}
                        height={180}
                      ></Image>
                      <div className={styles.titleSmallBlack}>{toner.name}</div>
                      <div style={{ width: "100%" }}>
                        <div
                          style={{ paddingRight: "15px" }}
                          className={styles.row}
                        >
                          <div className={styles.row}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  paddingRight: "5px",
                                  color: "rgb(2,50,92)",
                                }}
                                className={styles.price}
                              >
                                $
                              </div>
                              <div
                                style={{ color: "rgb(2,50,92)" }}
                                className={styles.modelSmallish}
                              >
                                {toner.price}
                              </div>
                            </div>
                          </div>
                          <div className={styles.row}>
                            <div
                              style={{ paddingRight: "5px" }}
                              className={styles.priceSmall}
                            >
                              OEM:
                            </div>
                            <div className={styles.modelSmall}>{toner.oem}</div>
                          </div>
                        </div>
                        <div
                          style={{ paddingTop: "10px" }}
                          className={styles.rowOem}
                        >
                          <div
                            style={{
                              paddingRight: "8px",
                              paddingBottom: "5px",
                            }}
                            className={styles.priceMedium}
                          >
                            Models:
                          </div>
                          <div className={styles.modelSmall}>
                            {toner.models}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;
