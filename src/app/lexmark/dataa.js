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
                  <h2>
                    <Link href={'/buy'}>
                      <button

                        className={styles.button}
                      >
                        Request a quote
                  </button>
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
            Lexmark printers are well-known for their unparalleled efficiency and high-performance capabilities, making them an ideal choice for businesses seeking reliable printing solutions. With a legacy of excellence in the industry, Lexmark has continuously produced printers that offer exceptional durability and top-notch printing quality. Designed to withstand heavy workloads, Lexmark printers ensure consistent performance even under demanding conditions. Business owners can rely on Lexmark's robust machines to meet their printing needs without compromising on speed or quality.
            </div>
            <div style={{marginBottom:"50px"}} className={styles.paragraph}>
              One of the key factors that contribute to the reliability of
              Lexmark sets itself apart with cutting-edge, user-friendly printing solutions that enhance productivity and workflow efficiency. With a strong commitment to reliability and cost-effectiveness, Lexmark remains a trusted partner for businesses seeking tailored, high-performance printing solutions.
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
