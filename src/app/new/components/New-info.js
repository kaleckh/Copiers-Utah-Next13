"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Stuff.module.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";;

const NewInfo = () => {
    const tawkMessengerRef = useRef();
    const [copiers, setCopiers] = useState([
        {
            model: "Lexmark XM9145",
            modelNumber: "21K0300",
            image: "c658.webp",
            PagesPerMinute: "65",
            paperSize: "12 x 18",
            ScanSpeed: "240 per minute",
            timeOut: "6.5 ",
            type: "Refurbished",
            brand: "Lexmark",
            description:
                "The C658 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.",
        },
        {
            model: "Lexmark XM 9155",
            modelNumber: "7421-239",
            image: "c758.webp",
            PagesPerMinute: "75",
            brand: "Lexmark",
            paperSize: "12 x 18",
            ScanSpeed: "120",
            timeOut: "3.6 ",
            description:
                "The C758 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.",
            type: "Refurbished",
        },
        {
            model: "Lexmark 9165",
            modelNumber: "7421-439",
            image: "c558.webp",
            brand: "Lexmark",
            PagesPerMinute: "55",
            paperSize: "12 x 18",
            ScanSpeed: "80",
            timeOut: "4.4 ",
            type: "Refurbished",
            description:
                "The C558 is a speedy workhorse copier, offering a robust platform fit for high volumes or longevity in smaller offices",
        },
        {
            model: "Lexmark XC 9325",
            modelNumber: "7580-198",
            image: "c368.webp",
            PagesPerMinute: "43",
            brand: "Lexmark",
            paperSize: "12 x 18",
            ScanSpeed: "160",
            timeOut: "6.5 ",
            type: "Refurbished",
            description:
                "The C368 is a meduium sized office copier-printer with premier color quality and all the functionality of a large office copier. ",
        },
        {
            model: "Lexmark XC9335",
            modelNumber: "7580-298",
            image: "c258.webp",
            PagesPerMinute: "25",
            brand: "Lexmark",
            paperSize: "12/ x 18",
            timeOut: "7.3 ",
            type: "Refurbished",
            description:
                "The C258 is a small office copier-printer with all the functionality and options of a large office copier. This is our most cost effective 12x18-capable rebuilt machine that does not sacrifice any color quality.",
        },
        {
            model: "Lexmark XC9445",
            PagesPerMinute: "45",
            modelNumber: "7580-498",
            image: "c458.webp",
            brand: "Lexmark",
            paperSize: "12 x 18",
            ScanSpeed: "120",
            timeOut: "5.1 ",
            type: "Refurbished",
            description:
                "The C458 is out most popular copier-printer. It is ideal for most sized offices, provides top color quality, and full functionality and speed to handel every office need.",
        },
        {
            model: "Lexmark XC9455",
            modelNumber: " 7580-698",
            PagesPerMinute: "52",
            image: "xc6152.webp",
            paperSize: "44.8 x 25.54",
            ScanSpeed: "120",
            brand: "lexmark",
            type: "Refurbished",
            timeOut: "6.5 ",
            description:
                "The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ",
        },
        {
            model: "Lexmark XC9465",
            modelNumber: " 7580-898",
            PagesPerMinute: "52",
            image: "xc6152.webp",
            paperSize: "44.8 x 25.54",
            ScanSpeed: "120",
            brand: "Lexmark",
            type: "Refurbished",
            timeOut: "6.5 ",
            description:
                "The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ",
        },
        {
            model: "Lexmark XC4140",
            modelNumber: " 7528-196",
            PagesPerMinute: "52",
            image: "xc4140.webp",
            paperSize: "44.8 x 25.54",
            ScanSpeed: "120",
            brand: "lexmark",
            type: "Refurbished",
            timeOut: "6.5 ",
            description:
                "The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ",
        },
        {
            model: "Lexmark C4150",
            modelNumber: " 40C9054",
            PagesPerMinute: "52",
            image: "m1246.webp",
            paperSize: "44.8 x 25.54",
            ScanSpeed: "120",
            brand: "lexmark",
            type: "Refurbished",
            timeOut: "6.5 ",
            description:
                "The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ",
        },
        {
            model: "Lexmark M1246",
            modelNumber: " 4600‑690",
            PagesPerMinute: "52",
            image: "m1246.webp",
            paperSize: "44.8 x 25.54",
            ScanSpeed: "120",
            brand: "lexmark",
            type: "Refurbished",
            timeOut: "6.5 ",
            description:
                "The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ",
        },
    ]);

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };


    const onLoad = () => {
        console.log("onLoad works!");
    };



    return (
        <div className={styles.section}>
            <div>
                <TawkMessengerReact
                    onLoad={onLoad}
                    propertyId="5abd4931d7591465c7090c65"
                    widgetId="default"
                    useRef={tawkMessengerRef}
                />
            </div>
            <div className={styles.center}>
                <h1
                    style={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "10px",
                        justifyContent: "center",
                    }}
                >
                    <div className={styles.titleBig}>Our Top</div>
                    <div className={styles.titleBigBlue}>New Machines</div>
                </h1>
                <div className={styles.paragraph}>
                    Welcome to Copiers Utah, the premier destination for cutting-edge,
                    brand-new copier machines in Utah. Our facility is dedicated to
                    providing the latest models of copiers built to exceed standards
                    within the state and nationwide. Additionally, our service
                    agreements come with a comprehensive full replacement warranty,
                    offering unmatched assurance to our customers. Explore our range of
                    state-of-the-art copier machines below and experience innovation,
                    reliability, and efficiency for your office needs. Contact us today
                    for the best selection of new copiers in Utah!
                </div>
                <div className={styles.grid}>
                    {copiers.map((copier) => {
                        return (
                            <div key={copier.modelNumber} className={styles.box}>
                                <div className={styles.titleBlackSmall}>{copier.model}</div>
                                <div>
                                    <Image
                                        src={`/static/${copier.image}`}
                                        width={200}
                                        height={200}
                                        alt={"copiers utah"}
                                    ></Image>
                                </div>
                                <div className={styles.somethingContainer}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Link href={"/product"}>
                                            <button
                                                onClick={() => {
                                                    localStorage.setItem("Image", `${copier.image}`);
                                                    localStorage.setItem("Model", `${copier.model}`);
                                                    localStorage.setItem(
                                                        "PagesPerMinute",
                                                        `${copier.PagesPerMinute}`,
                                                    );
                                                    localStorage.setItem(
                                                        "paperSize",
                                                        `${copier.paperSize}`,
                                                    );
                                                    localStorage.setItem("brand", `${copier.brand}`);
                                                    localStorage.setItem(
                                                        "timeOut",
                                                        `${copier.timeOut}`,
                                                    );
                                                    localStorage.setItem("type", `${copier.type}`);
                                                    localStorage.setItem(
                                                        "description",
                                                        `${copier.description}`,
                                                    );
                                                }}
                                                className={styles.buttonBlue}
                                            >
                                                See Details
                                            </button>
                                        </Link>
                                    </div>
                                    <div className={styles.fifty}>
                                        <div className={styles.rowNumber}>
                                            <div className={styles.numberContainer}>Model:</div>
                                            <div>{copier.modelNumber}</div>
                                        </div>
                                        <div className={styles.rowNumber}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default NewInfo;


