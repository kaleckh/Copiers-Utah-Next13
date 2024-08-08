"use client";
import { useRef, useState, useEffect } from "react";

import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const ShortTerm = () => {
  const captchaRef = useRef(null);

  return (
    <div className={styles.main}>
      <div></div>
    </div>
  );
};

export default ShortTerm;
