"use client"
import React, { useRef } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
// import Form from '../components/Form'
import Footer from '../components/Footer'
import Image from 'next/image'
import Sliver from '../components/Sliver'
import styles from '../styles/konika.module.css'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useState } from 'react'
const Konica = () => {
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
            alt="new and used konica printer"
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
          height: '185vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div className={styles.backContainer}>
          <div
            onClick={() => {
              router.push('/Products')
            }}
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
        </div>
        <div className={styles.lineColumn}>
          <div className={styles.color}>Konica Minolta</div>
          <div style={{ width: '150%' }} className={styles.line} />
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <div className={styles.konika} />
            <button
              onClick={() => {
                router.push('/buy')
              }}
              className={styles.button}
            >
              Request a quote
            </button>
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
                <div className={styles.line}></div>
              </div>
              <div style={{ width: '100%' }} className={styles.line}></div>
              <div>
                <div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Konica Minolta copiers have multifunction capabilities,
                      allowing them to print, scan, copy, and fax documents.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Customizable workflows are available to improve
                      productivity with Konica Minolta copiers.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Konica Minolta is committed to sustainability and offers
                      eco-friendly features.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Advanced security features are included to protect
                      sensitive data on Konica Minolta copiers.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Konica Minolta copiers produce high-quality color or
                      black-and-white documents.
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
                <Image
                  onClick={() => {
                    router.push('/Desktop')
                  }}
                  P
                  src={'/static/desktop.webp'}
                  height={100}
                  width={100}
                />
                <div className={styles.titleMid}>
                  Business Class Desktop Printers
                </div>
                <button className={styles.button}>See Options</button>
              </div>
              <div
                onClick={() => {
                  router.push('/Multicolor')
                }}
                className={styles.box}
              >
                <Image
                  src={'/static/colorCopier.webp'}
                  height={100}
                  width={100}
                />
                <div className={styles.titleMid}>
                  Color Multifunction Copiers
                </div>
                <button className={styles.button}>See Options</button>
              </div>
              <div
                onClick={() => {
                  router.push('/BlackWhite')
                }}
                className={styles.box}
              >
                <Image
                  src={'/static/blackAndWhite.webp'}
                  height={100}
                  width={100}
                />
                <div className={styles.titleMid}>Black And White Copiers</div>
                <button className={styles.button}>See Options</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Konica
