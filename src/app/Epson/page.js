"use client"
import React, { useRef } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Sliver from '../components/Sliver'
// import Form from './Form'
import Footer from '../components/Footer'
import Image from 'next/image'
import { PatternFormat } from 'react-number-format'
import styles from '../styles/epson.module.css'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useState } from 'react'
const Epson = () => {
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
            alt="Lexmark printer"
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
          padding:"20px",
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
          <div className={styles.color}>Epson</div>
          <div style={{ width: '150%' }} className={styles.line} />
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <div className={styles.epson} />
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
                      Epson copiers are multifunction devices.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      They produce high-quality output.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      They have an easy-to-use interface.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      They are cost-effective.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Epson copiers utilize advanced printing technologies.
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
              Epson copiers are known for their exceptional print quality.
              Whether you need to print text documents or vibrant graphics,
              Epson copiers deliver sharp, clear, and professional-looking
              output. Their advanced inkjet technology ensures precise color
              reproduction and high-resolution printing, making them ideal for
              tasks such as creating marketing materials, presentations, and
              reports. With Epson copiers, you can expect vivid and accurate
              prints that make a lasting impression.
            </div>
            <div className={styles.paragraph}>
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

            <div className={styles.row}>
              <div className={styles.box}>
                <Image src={'/static/desktop.webp'} height={100} width={100} />
                <div className={styles.titleMid}>
                  Business Class Desktop Printers
                </div>
                <button
                  onClick={() => {
                    router.push('/Desktop')
                  }}
                  className={styles.button}
                >
                  See Options
                </button>
              </div>
              <div className={styles.box}>
                <Image
                  src={'/static/colorCopier.webp'}
                  height={100}
                  width={100}
                />
                <div className={styles.titleMid}>
                  Color Multifunction Copiers
                </div>
                <button
                  onClick={() => {
                    router.push('/Multicolor')
                  }}
                  className={styles.button}
                >
                  See Options
                </button>
              </div>
              <div className={styles.box}>
                <Image
                  src={'/static/blackAndWhite.webp'}
                  height={100}
                  width={100}
                />
                <div className={styles.titleMid}>Black And White Copiers</div>
                <button
                  onClick={() => {
                    router.push('/BlackWhite')
                  }}
                  className={styles.button}
                >
                  See Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Epson
