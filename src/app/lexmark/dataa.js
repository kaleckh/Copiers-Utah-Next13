"use client"
import React, { useRef } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Link from "next/link";
import Section from "../components/Section";
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from '../components/Footer'
import Image from 'next/image'
import { Metadata } from 'next'
import { PatternFormat } from 'react-number-format'
import styles from '../styles/lexmark.module.css'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useState } from 'react'
const Lexmark = () => {
  const router = useRouter()
  const [recaptchaResponse, setRecaptchaResponse] = useState(false)
  const tawkMessengerRef = useRef()
  const [gray, setGray] = useState(true)
  const [grayBottom, setGrayBottom] = useState(true)
  const [quote, setQuote] = useState(false)
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  var verifyCallback = function (response) {
    setRecaptchaResponse(response)
  }
  const captchaRef = useRef(null)
  const breadCrumbs = [
    { name: "Home", url: "/" },
  ]

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
          height: 'fit-content',
          padding: "20px",
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div className={styles.lineColumn}>
          <h1 className={styles.color}>Lexmark</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <div className={styles.center}>
              <Image src={'/static/Lexmark.webp'} height={250} width={150} alt={"Lexmark Copiers For Sale"} />
            </div>
          </div>
          <div className={styles.column}>
            <div>
              <div>
                <div className={styles.bulletContainer}>
                  <div>   <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    The most reliable copier in the world!
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>   <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    85% marketshare in HealthCare & Pharmacies because it
                    always works.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>   <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Simple to use color, icon driven touch screen.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>   <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Known for their fast print speeds and efficient
                    performance.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>   <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Security is a top priority for Lexmark, and their copiers
                    come with advanced security features like user
                    authentication and data encryption
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                  <Link href={'/buy'}>
                    <button

                      className={styles.button}
                    >
                      Request a quote
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.konikaBottom}>
          <div className={styles.bottomProductContainer}>
            <div className={styles.paragraph}>
              Konica Minolta copiers are renowned for their exceptional
              reliability, making them a trusted choice for businesses of all
              sizes. With a long-standing reputation in the industry, Konica
              Minolta has consistently delivered copiers that are built to last.
              Their machines are designed with durability in mind, ensuring they
              can handle high volumes of printing and copying without
              compromising on performance.
            </div>
            <div className={styles.paragraph}>
              One of the key factors that contribute to the reliability of
              Konica Minolta copiers is their robust construction. These
              machines are built using high-quality components and materials,
              ensuring they can withstand the demands of daily office use. From
              sturdy paper trays to reliable feed mechanisms, every aspect of
              the copier is engineered to minimize downtime and maximize
              productivity.
            </div>

            <div className={`${styles.row} ${styles.hidden}`}>
              <div className={styles.box}>
                <Image src={'/static/desktop.webp'} height={100} width={100} alt={"Desktop Lexmark Copiers"} />
                <div className={styles.titleMid}>
                  Business Class Desktop Printers
                </div>
                <Link href={"/desktop"}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
              <div className={styles.box}>
                <Image src={'/static/colorCopier.webp'} height={100} width={100} alt={"Lexmark Color Copier for sale"} />
                <div className={styles.titleMid}>
                  Color Multifunction Copiers
                </div>
                <Link href={"/multicolor"}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
              <div className={styles.box}>
                <Image src={'/static/blackAndWhite.webp'} height={100} width={100} alt={'Black And White Lexmark Copier'} />
                <div className={styles.titleMid}>Black And White Copiers</div>
                <Link href={'/black-white'}>
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
  )
}

export default Lexmark
