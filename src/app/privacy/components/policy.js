"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/privacyPolicy.module.css";
import Image from "next/image";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Policy = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SMS Terms & Conditions</h2>
      <p className={styles.updated}><strong>Last Updated:</strong> June 5, 2025</p>

      <h3 className={styles.subheading}>Product Description</h3>
      <p className={styles.paragraph}>By providing your mobile phone number, you consent to receive SMS messages from Copiers Utah related to order details and service requests.</p>

      <h3 className={styles.subheading}>Message Frequency</h3>
      <ul className={styles.list}>
        <li>Message frequency may vary.</li>
      </ul>

      <h3 className={styles.subheading}>Message and Data Rates</h3>
      <ul className={styles.list}>
        <li>Standard message and data rates may apply.</li>
      </ul>

      <h3 className={styles.subheading}>Opting Out</h3>
      <p className={styles.paragraph}>You may opt out of receiving SMS messages at any time by replying with "STOP" to any SMS message you receive from us. After opting out, you will receive a confirmation message, and we will cease sending SMS messages to your number.</p>
      

      <h3 className={styles.subheading}>Help and Support</h3>
      <p className={styles.paragraph}>If you need assistance or have questions about our SMS service, reply with "HELP" to any SMS message you receive, or contact our customer support team at +18012612039.</p>

      <h3 className={styles.subheading}>Privacy Policy</h3>
      <p className={styles.paragraph}>Your phone number will be handled in accordance with our Privacy Policy, available at <a href="https://www.copiersutah.com/privacy/" target="_blank" rel="noopener noreferrer" className={styles.link}>https://www.copiersutah.com/privacy/</a>. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
      
      {/* <h3 className={styles.subheading}>Privacy Policy</h3>
      <div className={styles.important}>
        Your phone number will be handled in accordance with our Privacy Policy, available at https://www.copiersutah.com/privacy/. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
      </div> */}
    </div>
  );
};

export default Policy;