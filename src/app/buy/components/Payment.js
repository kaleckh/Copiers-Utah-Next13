"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/buy.module.css";
import Image from "next/image";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Payment = ({ breadCrumbs }) => {
  const [finance, setFinance] = useState(false);
  const [cash, setCash] = useState(false);
  const [rent, setRent] = useState(true);
  const tawkMessengerRef = useRef();


  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <>
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <div className={styles.paddedBox}>Copiers Utah Payment Options</div>
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
            <div className={styles.paragraph}>
              Copier leasing is a cost-effective way for businesses to access
              the latest copier technology without making a large upfront
              investment. Leasing copiers through our company, Copiers Utah,
              offers several benefits to businesses, including flexible leasing
              agreements and access to maintenance and support. Our customizable
              leasing agreements allow businesses to choose the copier equipment
              that best fits their needs and budget, with the ability to upgrade
              or downgrade as needed. This flexibility ensures that businesses
              have the copier equipment they need to operate efficiently,
              without having to worry about the costs associated with purchasing
              new equipment outright.
            </div>
            <div className={styles.paragraph}>
              Another benefit of copier leasing is that it allows businesses to
              focus on their core operations, rather than the hassle of
              maintaining and repairing copier equipment. Copiers Utah offers
              maintenance and support with all of our leasing agreements, which
              means businesses won't have to allocate resources towards
              equipment upkeep. This can save businesses time and money in the
              long run, as they can focus on other aspects of their operations
              while leaving the equipment maintenance to us. Overall, copier
              leasing through Copiers Utah provides a cost-effective solution
              that allows businesses to access the latest copier technology and
              focus on their core operations without the hassle of equipment
              maintenance.
            </div>
            <div
              style={{
                justifyContent: "space-evenly",
                width: "100%",
              }}
              className={`${styles.column} ${styles.hidden}`}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "23px",
                  fontWeight: "400",
                }}
              >
                Key Information
              </div>
              <div className={styles.row}>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    Low initial investment and predictable monthly payment
                  </div>
                  <div className={styles.bulletBox}>
                    Potential tax benefits for businesses
                  </div>
                </div>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    Customizable lease terms and payment plans
                  </div>
                  <div className={styles.bulletBox}>
                    Fixed monthly payments help businesses budget
                  </div>
                </div>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    Option to purchase the equipment at the end of the lease
                    term
                  </div>
                  <div className={styles.bulletBox}>
                    Access to the latest copier technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {rent ? (
          <div className={styles.eighty}>
            <div className={styles.paragraph}>
              Are you looking for copiers for sale or rent in Utah? Copier
              rental is a cost-effective solution for businesses in need of
              short-term copier equipment. It offers flexibility and convenience
              while saving you money compared to purchasing a copier outright.
              Additionally, copier rental allows you to adjust your equipment
              needs as your business evolves, without worrying about the hassle
              of maintaining and repairing the equipment on your own. This can
              be especially useful for those coming to Salt Lake City, Park
              City, Ogden, Orem, Provo, Tooele, and everywhere in-between.
            </div>
            <div className={styles.paragraph}>
              Renting a copier in Utah is an excellent way to optimize your
              business's performance. You can choose to rent a copier for a
              short period of time and return it once the job is complete, or
              rent-to-own and eventually own the equipment after paying for it
              over time. This way, you can benefit from the copier's features
              and functionalities without having to purchase it outright, which
              can be a significant financial burden for many businesses.
            </div>
            <div
              style={{
                justifyContent: "space-evenly",
                width: "100%",
              }}
              className={`${styles.column} ${styles.hidden}`}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "23px",
                  fontWeight: "400",
                }}
              >
                Key Information
              </div>
              <div className={styles.row}>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    No large upfront investment required
                  </div>
                  <div className={styles.bulletBox}>
                    Low-risk option to test out new copier equipment
                  </div>
                </div>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    No large upfront investment required
                  </div>
                  <div className={styles.bulletBox}>
                    Customizable rental terms and payment plans
                  </div>
                </div>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    Low-risk option to test out new copier equipment
                  </div>
                  <div className={styles.bulletBox}>
                    Ability to own the equipment at the end of the rental term
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {finance ? (
          <div className={styles.eighty}>
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
              We believe that every business deserves access to top-of-the-line
              copier equipment, regardless of their budget. With our copier
              financing options, businesses can acquire copiers for sale or
              lease without worrying about depreciation or obsolescence. Plus,
              they can spread the cost of the equipment over a set period of
              time, making it more manageable for their cash flow.
            </div>
            <div
              style={{
                justifyContent: "space-evenly",
                width: "100%",
              }}
              className={`${styles.column} ${styles.hidden}`}
            >
              <div
                style={{
                  color: "black",
                  fontSize: "23px",
                  fontWeight: "400",
                }}
              >
                Key Information
              </div>
              <div className={styles.row}>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    Spread the cost of the equipment over a set period of time
                  </div>
                  <div className={styles.bulletBox}>
                    Enjoy flexible terms and payments tailored to your business
                    needs
                  </div>
                </div>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    Reduced financial risk compared to purchasing equipment
                    outright
                  </div>
                  <div className={styles.bulletBox}>
                    Personalized support and guidance from financing experts
                  </div>
                </div>
                <div className={styles.bulletPoints}>
                  <div className={styles.bulletBox}>
                    No large upfront investment required
                  </div>
                  <div className={styles.bulletBox}>
                    Ability to preserve credit lines for other business needs
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Payment;
