"use client"
import React, { useRef } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Link from "next/link";
import Sliver from '../components/Sliver'
import Form from '../components/Form'
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
  export const metadata = {
  title: ' New and Used Lexmark Copiers | High-Quality and Affordable | Copiers Utah',
  description: 'Copiers Utah offers high-quality and affordable Lexmark copiers, both new and used. Learn more about Lexmark copiers and how they can benefit your office. Fill out our quote form to receive a customized quote',
}
  return (
    <div className={styles.main}>
      <Sliver />
      <Head>
        <title>
          New and Used Lexmark Copiers | High-Quality and Affordable | Copiers
          Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah offers high-quality and affordable Lexmark copiers, both new and used. Learn more about Lexmark copiers and how they can benefit your office. Fill out our quote form to receive a customized quote."
        />
        <meta
          name="keywords"
          content="Lexmark copiers, used Lexmark copiers, new Lexmark copiers, office copiers, copiers Utah, affordable copiers"
        />
      </Head>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <Image
            src="/static/logo.webp"
            alt="Lexmark used and new printer"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
            </div>
          </div>
        </div>
      </div>

      <Header />

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
        <div className={styles.backContainer}>
          <Link href={'/products'}>
            <div

              style={{
                padding: '5px',
                fontSize: '25px',
                fontWeight: '400',
                cursor: 'pointer',
                borderRadius: '100%',
              }}
            >
              {' '}
              {`X`}
            </div>
          </Link>
        </div>
        <div className={styles.lineColumn}>
          <h1 className={styles.color}>Lexmark</h1>
          <div style={{ width: '150%' }} className={styles.line} />
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <Image src={'/static/Lexmark.webp'} height={150} width={100} alt={"Lexmark Copiers For Sale"} />
            <Link href={'/buy'}>
              <button

                className={styles.button}
              >
                Request a quote
            </button>
            </Link>
          </div>
          {quote ? (
            <Form />
          ) : (
              <div className={styles.column}>
                <div className={styles.aboutRow}>
                  <div
                    onClick={() => {
                      setGray(true)
                    }}
                    className={
                      gray ? `${styles.focusTitleGray}` : `${styles.focusTitle}`
                    }
                  >
                    About
                </div>
                </div>
                <div className={styles.line}></div>
                <div>
                  <div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        The most reliable copier in the world!
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        85% marketshare in HealthCare & Pharmacies because it
                        always works.
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        Simple to use color, icon driven touch screen.
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        Known for their fast print speeds and efficient
                        performance.
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        Security is a top priority for Lexmark, and their copiers
                        come with advanced security features like user
                        authentication and data encryption
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

            <div className={styles.row}>
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
      <Footer />
    </div>
  )
}

export default Lexmark
