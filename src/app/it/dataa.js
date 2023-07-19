"use client"
import { useState, useRef } from "react";
import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
// import Form from "./Form";
import { Metadata } from 'next'
import Sliver from '../components/sliverr'
import { PatternFormat } from "react-number-format";
import ReCAPTCHA from "react-google-recaptcha";
// import Logo from "../Photos/logo.webp";

import styles from "../styles/It.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const It = (props) => {
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [buttonToggle, setButtonToggle] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const captchaRef = useRef(null);
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
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
    const onLoad = () => {
        console.log("onLoad works!");
    };

    var verifyCallback = function (response) {
        setRecaptchaResponse(response);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending");
        let data = {
            name,
            email,
            message,
            number,
        };
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("Response received");
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
            <Head>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://copiersutah.com/It/" />
                <title>
                    IT Services and Support | Get a Quote Today | Copiers Utah
        </title>
                <meta
                    name="description"
                    content="Copiers Utah provides comprehensive IT services and support. Fill out our easy form to get a personalized quote and get the IT help you need."
                />
                <meta
                    name="keywords"
                    content="IT services, IT support, IT help, IT quote, copiers Utah"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            name: "Copiers Utah",
                            description:
                                "Copiers Utah provides comprehensive IT services and support.",
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
                            image: "https://copiersutah.com/static/logo.webp",
                            url: "https://copiersutah.com",
                            areaServed: "Utah",
                            priceRange: "$$",
                            founder: {
                                "@type": "Person",
                                name: "Paul Mooney",
                            },
                            sameAs: [
                                "https://www.facebook.com/your-facebook-page",
                                "https://www.linkedin.com/company/your-linkedin-page",
                            ],
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
                        alt="IT services provided by Copiers Utah"
                        width={150}
                        height={100}
                    />
                    <div className={styles.columnContainer}>
                        <div />
                        <div className={styles.infoBig}>Copiers Utah</div>
                        <div className={styles.mediumColumn}>
                            <div className={styles.infoSmall}>info@copiersutah.com</div>
                            <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
                        </div>
                    </div>
                </div>
            </div>
            <Header />
            <div className={styles.secondSection}>
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
                                Ransomware evolves, anti-ransomware utilities will evolve as
                                well.
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
                                Download drivers, run diagnostic tools & troubleshoot your
                                printer
              </div>
                        </div>
                        <div>
                            <h2 className={styles.title}>Network Efficiency</h2>
                            <div className={styles.paragraph}>
                                Concept of efficiency can be applied to both local & global
                                scales in a network
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
                                        <div className={styles.title}>
                                            Awesome, you're next in line!
                                        </div>
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

            <Footer />
        </div>
    );
};

export default It;
``