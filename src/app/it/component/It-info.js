"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { PatternFormat } from "react-number-format";
import styles from "../../../styles/It.module.css";
import Image from "next/image";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const ItInfo = () => {
  const tawkMessengerRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quoteToggle, setQuoteToggle] = useState(true);
  const [toggle, setToggle] = useState(false);
  const captchaRef = useRef(null);
  const [number, setNumber] = useState("");
  const [buttonToggle, setButtonToggle] = useState(true);
  const [message, setMessage] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);

  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const onLoad = () => {
    console.log("onLoad works!");
  };
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

  async function sendEmail() {
    debugger;
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
      debugger;
      const data1 = await response.json();
      console.log(data1, "this is the response");
    } catch (err) {}
  }

  return (
    <div className={styles.secondSection}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <div className={styles.smallScreen}>
        <h1 className={styles.titleBig}>
          What we do, <div className={styles.bold}>For You</div>
        </h1>
        <div className={styles.nothing}>
          <div className={styles.space}>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Ransomware Protection</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Backup And Restore</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Full Printer Support</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Network Efficiency</div>
            </div>
          </div>
          <div className={styles.space}>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Cloud Support</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Fix Broken Hardware</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Secure And Fast Setup</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                src="/static/checkmark.png"
                width={15}
                height={15}
                alt={"a checkmark"}
              />
              <div>Software And App Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.sideRowLeft}>
          <div>
            <h2 className={styles.title}>Ransomware Protection</h2>
            <div className={styles.paragraph}>
              Ransomware evolves, anti-ransomware utilities will evolve as well.
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Backup And Restore</h2>
            <div className={styles.paragraph}>
              Allowing users to create backups & restore from backups created
              earlier.
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Full Printer Support</h2>
            <div className={styles.paragraph}>
              Download drivers, run diagnostic tools & troubleshoot your printer
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Network Efficiency</h2>
            <div className={styles.paragraph}>
              Concept of efficiency can be applied to both local & global scales
              in a network
            </div>
          </div>
        </div>
        {quoteToggle ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "96%",
              margin: "10px",
            }}
          >
            <div className={styles.itSupport} />
            <button
              onClick={() => {
                setQuoteToggle(!quoteToggle);
              }}
              className={styles.button}
            >
              Request a Quote!
            </button>
          </div>
        ) : (
          <div>
            {buttonToggle ? (
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
                      sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                      ref={captchaRef}
                      onChange={verifyCallback}
                    />
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
              <div className={styles.title}>Awesome, you're next in line!</div>
            )}
          </div>
        )}
        <div className={styles.sideRowRight}>
          <div>
            <h2 className={styles.title}>
              Secure Collabration and cloud support{" "}
            </h2>
            <div className={styles.paragraph}>
              Secure Collaboration can provide secure, fully managed cloud
              services
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Fix Broken Hardware </h2>
            <div className={styles.paragraph}>
              Replacing hardware that is out of service & installing new
              hardware
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Secure And Fast Setup</h2>
            <div className={styles.paragraph}>
              Stay secure with optional verification setup
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Software And App Support</h2>
            <div className={styles.paragraph}>
              Application support specialist can provide technical support to
              clients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItInfo;
