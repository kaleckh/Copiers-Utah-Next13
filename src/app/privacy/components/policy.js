"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "../../../styles/privacyPolicy.module.css";
import Image from "next/image";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Policy = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SMS/Text Message Privacy Statement</h2>
      <p className={styles.updated}><strong>Last Updated:</strong> May 29, 2025</p>

      <h3 className={styles.subheading}>Our Commitment to Your Privacy</h3>
      <p className={styles.paragraph}>Copiers Utah respects your privacy and is committed to protecting your personal information. This privacy statement specifically covers our SMS/text messaging services and how we handle your mobile phone information.</p>

      <h3 className={styles.subheading}>Information We Collect</h3>
      <p className={styles.paragraph}>When you opt-in to receive text messages from Copiers Utah, we collect:</p>
      <ul className={styles.list}>
        <li>Your mobile phone number</li>
        <li>Your name (if provided)</li>
        <li>Date and time of consent</li>
        <li>Services you're interested in receiving updates about</li>
      </ul>

      <h3 className={styles.subheading}>How We Use Your Information</h3>
      <p className={styles.paragraph}>We use your mobile phone number and related information solely to:</p>
      <ul className={styles.list}>
        <li>Send you copier and printer service updates</li>
        <li>Provide maintenance reminders for your equipment</li>
        <li>Share special offers and promotions for our services</li>
        <li>Send service-related notifications and alerts</li>
      </ul>

      <h3 className={styles.subheading}>We Do NOT Share or Sell Your Information</h3>
      <div className={styles.important}>
        <strong>Important Promise:</strong> Copiers Utah will NEVER sell, rent, lease, or otherwise distribute your mobile phone number or personal information to third parties for marketing purposes. Your information stays with us and is used only for the services you've requested.
      </div>

      <h3 className={styles.subheading}>Message Frequency and Charges</h3>
      <ul className={styles.list}>
        <li><strong>Frequency:</strong> Message frequency varies. You may receive promotional messages up to 4 times per month, maintenance reminders monthly, and service alerts as needed.</li>
        <li><strong>Charges:</strong> Standard message and data rates from your mobile carrier apply. Copiers Utah does not charge for messages, but your carrier may.</li>
      </ul>

      <h3 className={styles.subheading}>Your Rights and Controls</h3>
      <p className={styles.paragraph}>You have complete control over your SMS preferences:</p>
      <ul className={styles.list}>
        <li><strong>Opt Out:</strong> Reply STOP to any message to immediately unsubscribe</li>
        <li><strong>Get Help:</strong> Reply HELP to any message for assistance</li>
        <li><strong>Contact Us:</strong> Call (801) 555-0123 with questions about your SMS preferences</li>
      </ul>

      <h3 className={styles.subheading}>Data Security</h3>
      <p className={styles.paragraph}>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your mobile phone number is stored securely and accessed only by authorized personnel.</p>

      <h3 className={styles.subheading}>Consent and Age Requirements</h3>
      <p className={styles.paragraph}>By providing your mobile phone number and agreeing to receive text messages, you confirm that:</p>
      <ul className={styles.list}>
        <li>You are 18 years of age or older, or have parental consent</li>
        <li>You are the primary user of the mobile phone number provided</li>
        <li>You understand and agree to these privacy terms</li>
      </ul>

      <h3 className={styles.subheading}>Changes to This Policy</h3>
      <p className={styles.paragraph}>We may update this SMS privacy policy from time to time. If we make material changes, we will notify you via text message and/or update the "Last Updated" date above.</p>

      <h3 className={styles.subheading}>Contact Information</h3>
      <p className={styles.paragraph}>For questions about this SMS privacy policy or your text message preferences:</p>
      <ul className={styles.contactList}>
        <li><strong>Phone:</strong> (801) 261-0510</li>
        <li><strong>Email:</strong> info@copiersutah.com</li>
        <li><strong>Mail:</strong> Copiers Utah, 554 W 8360 S, Sandy, UT 84070</li>
      </ul>
    </div>
  );
};

export default Policy;