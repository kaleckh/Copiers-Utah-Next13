"use client";
import React, { useRef } from "react";
import Header from "../../components/Header";
import BreadCrumbs from "../../components/BreadCrumbs";
import Section from "../../components/Section";
import Link from "next/link";
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "../../styles/epson.module.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Epson = () => {
  const tawkMessengerRef = useRef();

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
      <div
        style={{
          height: "fit-content",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div className={`${styles.row}`}>
          <div className={styles.copierContainer}>
            <div className={styles.center}>
              <Image
                src="/static/epson.jpg"
                width={300}
                height={300}
                alt={"a seen"}
              />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.lineColumn}>
              <h1 className={styles.color}>Epson</h1>
            </div>
            <div>
              <div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                      src="/static/seen.webp"
                      width={25}
                      height={25}
                      alt={"a seen"}
                    />
                  </div>
                  <div className={styles.paragraphSmall}>
                    Epson copiers are multifunction devices.
                  </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                      src="/static/seen.webp"
                      width={25}
                      height={25}
                      alt={"a seen"}
                    />
                  </div>
                  <div className={styles.paragraphSmall}>
                    They produce high-quality output.
                  </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                      src="/static/seen.webp"
                      width={25}
                      height={25}
                      alt={"a seen"}
                    />
                  </div>
                  <div className={styles.paragraphSmall}>
                    They have an easy-to-use interface.
                  </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                      src="/static/seen.webp"
                      width={25}
                      height={25}
                      alt={"a seen"}
                    />
                  </div>
                  <div className={styles.paragraphSmall}>
                    They are cost-effective.
                  </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                      src="/static/seen.webp"
                      width={25}
                      height={25}
                      alt={"a seen"}
                    />
                  </div>
                  <div className={styles.paragraphSmall}>
                    Epson copiers utilize advanced printing technologies.
                  </div>
                </div>
                <div className={styles.buttonCenter}>
                  <h2>
                    <Link href={"/buy"}>
                      <button className={styles.button}>Request a quote</button>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.konikaBottom}>
          <div className={styles.bottomProductContainer}>
            <div className={styles.paragraph}>
              Epson copiers are known for their exceptional print quality.
              Whether you need to print text documents or vibrant graphics,
              Epson copiers deliver sharp, clear, and professional-looking
              output. Their advanced inkjet technology ensures precise color
              reproduction and high-resolution printing, making them ideal for
              tasks such as creating marketing materials, presentations, and
              reports. With Epson copiers, you can expect vivid and accurate
              prints that make a lasting impression.
            </div>
            <div
              style={{ marginBottom: "50px" }}
              className={`${styles.paragraph} ${styles.hidden}`}
            >
              Epson copiers are also renowned for their reliability and
              durability. Epson is a trusted brand known for manufacturing
              high-quality products, and their copiers are no exception. These
              machines are built to withstand heavy usage and can handle large
              printing volumes without compromising on performance. With robust
              construction and well-engineered mechanisms, Epson copiers offer
              long-term reliability, reducing downtime and maintenance costs.
              This makes them a cost-effective choice for businesses that rely
              on consistent and uninterrupted printing operations. Epson copiers
              provide peace of mind, knowing that your printing needs will be
              met efficiently and reliably.
            </div>

            <div className={`${styles.row} ${styles.hidden}`}>
              <div className={styles.box}>
                <Image
                  src={"/static/desktop.webp"}
                  height={100}
                  width={100}
                  alt={"Desktop printers for sale"}
                />

                <div className={styles.titleMid}>
                  Business Class Desktop Printers
                </div>

                <Link href={"/desktop"}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
              <div className={styles.box}>
                <Image
                  src={"/static/colorCopier.webp"}
                  height={100}
                  alt={"color copiers for sale"}
                  width={100}
                />

                <div className={styles.titleMid}>
                  Color Multifunction Copiers
                </div>

                <Link href={"/multicolor"}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
              <div className={styles.box}>
                <Image
                  src={"/static/blackAndWhite.webp"}
                  height={100}
                  width={100}
                  alt={"black and white copiers for sale"}
                />

                <div className={styles.titleMid}>Black And White Copiers</div>

                <Link href={"/black-white"}>
                  <button className={styles.button}>See Options</button>
                </Link>
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

export default Epson;
