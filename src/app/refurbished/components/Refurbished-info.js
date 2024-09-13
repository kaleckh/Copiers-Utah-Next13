"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Stuff.module.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";

const RefurbishedInfo = () => {
  const tawkMessengerRef = useRef();
  const [copiers, setCopiers] = useState([
    {
      model: "Konica Minolta C658",
      modelNumber: "21K0300",
      image: "c658.webp",
      PagesPerMinute: "65",
      paperSize: "12 x 18",
      ScanSpeed: "240 per minute",
      timeOut: "6.5 ",
      type: "Refurbished",
      brand: "konica",
      description:
        "The C658 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.",
    },
    {
      model: "Konica Minolta C758",
      modelNumber: "Bizhub C758",
      image: "c758.webp",
      PagesPerMinute: "75",
      brand: "konica",
      paperSize: "12 x 18",
      ScanSpeed: "120",
      timeOut: "3.6 ",
      description:
        "The C758 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.",
      type: "Refurbished",
    },
    {
      model: "Konica Minolta C558",
      modelNumber: "Bizhub C458",
      image: "c558.webp",
      brand: "konica",
      PagesPerMinute: "55",
      paperSize: "12 x 18",
      ScanSpeed: "80",
      timeOut: "4.4 ",
      type: "Refurbished",
      description:
        "The C558 is a speedy workhorse copier, offering a robust platform fit for high volumes or longevity in smaller offices",
    },
    {
      model: "Konica Minolta C368",
      modelNumber: "Bizhub C350i",
      image: "c368.webp",
      PagesPerMinute: "43",
      brand: "konica",
      paperSize: "12 x 18",
      ScanSpeed: "160",
      timeOut: "6.5 ",
      type: "Refurbished",
      description:
        "The C368 is a meduium sized office copier-printer with premier color quality and all the functionality of a large office copier. ",
    },
    {
      model: "Konica Minolta C258",
      modelNumber: "Bizhub C258",
      image: "c258.webp",
      PagesPerMinute: "25",
      brand: "konica",
      paperSize: "12/ x 18",
      timeOut: "7.3 ",
      type: "Refurbished",
      description:
        "The C258 is a small office copier-printer with all the functionality and options of a large office copier. This is our most cost effective 12x18-capable rebuilt machine that does not sacrifice any color quality.",
    },
    {
      model: "Konica Minolta C308",
      modelNumber: "Bizhub C300i",
      image: "c308.webp",
      PagesPerMinute: "30",
      paperSize: "8.3 x 11.7",
      brand: "konica",
      timeOut: "6 ",
      type: "Refurbished",
      description:
        "The C308 is a small-medium sized office copier-printer with premier color quality and all the functionality of a large office copier.",
    },
    {
      model: "Konica Minolta C458",
      PagesPerMinute: "45",
      modelNumber: "Bizhub C458",
      image: "c458.webp",
      brand: "konica",
      paperSize: "12 x 18",
      ScanSpeed: "120",
      timeOut: "5.1 ",
      type: "Refurbished",
      description:
        "The C458 is out most popular copier-printer. It is ideal for most sized offices, provides top color quality, and full functionality and speed to handel every office need.",
    },
    {
      model: "Lexmark XC6152",
      modelNumber: " 7563-197",
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
  ]);

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <div className={styles.section}>
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
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
          <div className={styles.titleBigBlue}>Refurbished Machines</div>
        </h1>
        <div className={styles.paragraph}>
          Copiers Utah is the home to the premier copier remanufacturing
          facility in the state of Utah. We rebuild copiers to the highest
          standards anywhere in the state and beyond. We have developed a
          33-step process to evaluate all machines and we provide a full
          replacement warranty with our service agreements. Check out our
          refurbished copiers below!
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
                    <Link href={"/buy"}>
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
                          localStorage.setItem("timeOut", `${copier.timeOut}`);
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
        <div className={styles.flex}>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <div className={styles.titleBig}>Our Remanufactoring </div>
            <div className={styles.titleBigBlue}>Process</div>
          </h1>
        </div>
        <div className={styles.paragraph}>
          <div>
            We do not just refurbish or recondition our copiers, we rebuild them
            to specifications as close to as new as possible. That is why we can
            include a full replacement warranty with all our service agreements.
            Try getting a full replacement guarantee with one of our competitors
            on even a brand-new machine. That is unlikely at best, more likely
            impossible. But we offer it as standard addition to all our service
            agreements on our rebuilt copiers. Why? Because we know these
            multifunction copiers inside and out. They’ve been tested and
            restored. We are confident in our work and we can fix everything. In
            the rare instance something terrible goes wrong, we simply replace
            the copier, no hassles, no worries!
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefurbishedInfo;
