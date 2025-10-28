"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/Stuff.module.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";

const NewInfo = () => {
  const tawkMessengerRef = useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const [copiers, setCopiers] = useState([
    {
      model: "Lexmark XC8355",
      image: "XC8355.png",
      PagesPerMinute: "55",
      paperSize: "8.5 X 14",
      ScanSpeed: "240 sides per minute",
      timeOut: "7.1",
      type: "New",
      brand: "Lexmark",
      description:
        "With the new XC8355 color A4 multifunction printer, you get reassuring versatility, exceptional sustainability, and surprising simplicity from such sophisticated technology. Boost your productivity with vivid prints — up to 55 pages per minute*. Intuitively navigate the 10-inch color touchscreen, and save time with single-pass two-sided scanning.",
    },
    {
      model: "Lexmark XC9525",
      image: "XC9525.png",
      PagesPerMinute: "25",
      brand: "Lexmark",
      paperSize: "12 x 18",
      ScanSpeed: "200 sides per minute",
      timeOut: "7.1",
      description:
        "With the new XC9525 color A3 multifunction printer, you get reassuring versatility, exceptional sustainability, and surprising simplicity from such sophisticated technology. Boost your productivity with vivid prints — up to 25 pages per minute*. Intuitively navigate the 10-inch color touchscreen, and save time with single-pass two-sided scanning.",
      type: "New",
    },
    {
      model: "Lexmark XC9535",
      image: "XC9535.png",
      brand: "Lexmark",
      PagesPerMinute: "35",
      paperSize: "12 x 18",
      ScanSpeed: "200 sides per minute",
      timeOut: "7.1",
      type: "New",
      description:
        "With the new XC9535 color A3 multifunction printer, you get reassuring versatility, exceptional sustainability, and surprising simplicity from such sophisticated technology. Boost your productivity with vivid prints — up to 35 pages per minute*. Intuitively navigate the 10-inch color touchscreen, and save time with single-pass two-sided scanning.",
    },
    {
      model: "Lexmark XC9635",
      image: "9655.svg",
      PagesPerMinute: "35",
      brand: "Lexmark",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "7.1",
      type: "New",
      description:
        "With the new XC9635 color A3 multifunction printer, you get reassuring versatility, exceptional sustainability, and surprising simplicity from such sophisticated technology. Boost your productivity with vivid prints — up to 35 pages per minute*. Intuitively navigate the 10-inch color touchscreen, and save time with single-pass two-sided scanning.",
    },
    {
      model: "Lexmark XC9645",
      image: "9655.svg",
      PagesPerMinute: "45",
      brand: "Lexmark",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "7.1",
      type: "New",
      description:
        "With the new XC9645 color A3 multifunction printer, you get reassuring versatility, exceptional sustainability, and surprising simplicity from such sophisticated technology. Boost your productivity with vivid prints — up to 45 pages per minute*. Intuitively navigate the 10-inch color touchscreen, and save time with single-pass two-sided scanning.",
    },
    {
      model: "Lexmark XC9655",
      PagesPerMinute: "55",
      image: "9655.svg",
      brand: "Lexmark",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "7.1",
      type: "New",
      description:
        "With the new XC9655 color A3 multifunction printer, you get reassuring versatility, exceptional sustainability, and surprising simplicity from such sophisticated technology. Boost your productivity with vivid prints — up to 55 pages per minute*. Intuitively navigate the 10-inch color touchscreen, and save time with single-pass two-sided scanning.",
    },
    {
      model: "Lexmark XC4342",
      PagesPerMinute: "42",
      image: "4342.png",
      paperSize: "8.5 X 14",
      ScanSpeed: "84 sides per minute",
      brand: "Lexmark",
      type: "New",
      timeOut: "6.4",
      description:
        "The Lexmark XC4342 is designed for performance, security, and ease of use for mid-to-large workgroups at speeds up to 42 pages per minute*.",
    },
    {
      model: "Lexmark XM5365",
      PagesPerMinute: "65",
      image: "5365.png",
      paperSize: "8.5 X 14",
      ScanSpeed: "150 sides per minute",
      brand: "Lexmark",
      type: "New",
      timeOut: "4.2",
      description:
        "Put output at up to 65 ppm* in more places with the Lexmark XM5365, the multifunction product with features and performance to satisfy even large workgroups.",
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
          within the state and nationwide. Additionally, our service agreements
          come with a comprehensive full replacement warranty, offering
          unmatched assurance to our customers. Explore our range of
          state-of-the-art copier machines below and experience innovation,
          reliability, and efficiency for your office needs. Contact us today
          for the best selection of new copiers in Utah!
        </div>
        <div className={styles.grid}>
          {copiers.map((copier) => {
            return (
              <Link 
                key={copier.modelNumber} 
                href={"/product"}
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
                  localStorage.setItem("ScanSpeed", `${copier.ScanSpeed}`);
                  localStorage.setItem(
                    "description",
                    `${copier.description}`,
                  );
                }}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}
              >
                  <div className={styles.titleBlackSmall}>{copier.model}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      src={`/static/${copier.image}`}
                      width={200}
                      height={0}
                      alt={"copiers utah"}
                      style={{ height: 'auto' }}
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
                      <button
                        className={styles.buttonBlue}
                      >
                        See Details
                      </button>
                    </div>
                    <div className={styles.fifty}>
                      <div className={styles.rowNumber}>
                        <div>{copier.modelNumber}</div>
                      </div>
                      <div className={styles.rowNumber}></div>
                    </div>
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
