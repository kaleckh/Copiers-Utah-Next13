"use client"
import React, { useRef, useEffect } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Sliver from '../components/sliver'
import Link from "next/link";
import { Metadata } from 'next'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Image from 'next/image'
import { PatternFormat } from 'react-number-format'
import styles from '../styles/Refurbished.module.css'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useState } from 'react'
const Product = () => {
  const router = useRouter()
  const [recaptchaResponse, setRecaptchaResponse] = useState(false)
  const tawkMessengerRef = useRef()
  const [gray, setGray] = useState(true)
  const [grayBottom, setGrayBottom] = useState(true)
  const [brandDescription, setBrandDescription] = useState()
  const [quote, setQuote] = useState(false)
  const [model, setModel] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  const [type, setType] = useState()
  const [timeOut, setTimeOut] = useState()
  const [printSpeed, setPrintSpeed] = useState()
  const [paperSize, setpaperSize] = useState()
  const [modelNumber, setModelNumber] = useState()
  const [lastBullet, setLastBullet] = useState()
  const[defaultType, setDefaultType] = useState("products")
  const[defaultImage, setDefaultImage] = useState("epson.jpg")
  const [almostLastBullet, setAlmostLastBullet] = useState()
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
  useEffect(() => {
    const storedModel = localStorage.getItem('Model')
    const photo = localStorage.getItem('Image')
    const time = localStorage.getItem('timeOut')
    const back = localStorage.getItem('type')
    const speed = localStorage.getItem('PagesPerMinute')
    const modelNumber = localStorage.getItem('modelNumber')
    const paperSize = localStorage.getItem('paperSize')
    const desc = localStorage.getItem('description')
    setModel(storedModel)
    setDefaultImage(photo)
    setDefaultType(back)
    setPrintSpeed(speed)
    setModelNumber(modelNumber)
    setpaperSize(paperSize)
    setTimeOut(time)
    setDescription(desc)

    if (localStorage.getItem('brand') === 'lexmark') {
      setBrandDescription(
        'Lexmark, formerly an IBM company, had produced hands down the most reliable machines ever built. Their modular construction ensures the most efficient paper path in the industry. Independent BLI testing proved their top copier models performing with only 1 jam after 1,000,000 copies tested. Their dominant 85% of the market share in pharmacuetical and medical establishments is a testament to their unrivaled reliability',
      )
      setLastBullet(
        ' Known for their fast print speeds and efficient performance.',
      )
      setAlmostLastBullet("Durability and reliability: Lexmark copiers are built to withstand heavy use and are known for their reliability, reducing downtime and ensuring consistent performance.")
    } else if (localStorage.getItem('brand') !== 'lexmark') {
      setLastBullet(
        'High-quality output: Konica Minolta copiers are known for delivering exceptional print quality with sharp text and vibrant images.',
      )
      setBrandDescription(
        'Konica Minolta offers the top color quality output in the industry. These machines are built to last with minimal disruption. With up to 12x18 paper sizes standard, there is nothing your office cannot do with these copiers.',
      )
      setAlmostLastBullet("Energy efficiency: Konica Minolta copiers are designed with energy-saving features, helping businesses reduce their environmental footprint and save on energy costs.")
    }
  }, [])


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
            src={`/static/logo.webp`}
            alt="Lexmark used and new printer"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      <div
        style={{
          height: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div className={styles.backContainer}>
          <Link href={`/${defaultType}`}>
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
            X
          </div>
          </Link>
        </div>
        <div className={styles.lineColumn}>
          <div className={styles.color}>{}</div>
          <div style={{ width: '150%' }} className={styles.line} />
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <Image src={`/static/${defaultImage}`} width={200} height={150} alt={'/a copier'} />
            <Link href={'/buy'}>
              <button
                style={{ width: '100%' }}
                className={styles.button}
              >
                Request a quote
            </button>
            </Link>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ padding: '5px' }} className={styles.title}>
                Model Number:
              </div>
              <div className={styles.title}>{modelNumber}</div>
            </div>
          </div>
          {quote ? (
            <Form />
          ) : (
              <div className={styles.column}>
                <h1 className={styles.bigTitle}>{model}</h1>
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
                        Print speeds at {printSpeed} pages per minute!
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        Largest print size is {paperSize} inches
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        First page out time is {timeOut} seconds
                    </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        {lastBullet}
                      </div>
                    </div>
                    <div className={styles.bulletContainer}>
                      <div className={styles.bullet}>1s</div>
                      <div className={styles.paragraphSmall}>
                        {almostLastBullet}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
        <div style={{ height: '40%' }} className={styles.konikaBottom}>
          <div className={styles.bottomProductContainer}>
            <div className={styles.paragraph}>{brandDescription}</div>
            <div className={styles.paragraph}>{description}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
