"use client"
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import { Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Sliver from '../components/Sliver'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import styles from '../styles/Stuff.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const BlackWhite = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const [copiers, setCopiers] = useState([
    {
      model: 'Lexmark M5255 black and white Printer',
      modelNumber: '4064-295',
      image: 'm5255.webp',
      PagesPerMinute: '50',
      paperSize: '8.3 x 11.7',
      brand: 'lexmark',
      timeOut: '4.5 ',
      type: 'BlackWhite',
      description:
        'Lexmarks gold standard black and white printer. This is one of the most popular printers in use today. Built like a tank, the M%5255 is the best hastle free workhorse machine in the industry.',
    },
    {
      model: 'Lexmark M3250 black and white printer',
      modelNumber: '4600-895',
      image: 'm3250.webp',
      PagesPerMinute: '50',
      paperSize: '8.3 x 11.7',
      brand: 'lexmark',
      timeOut: '6 ',
      type: 'BlackWhite',
      description:
        'The M3250 is a black and white desktop printer. Achieving speeds of 50 pages per minute, the M3250 will not let you down.',
    },
    {
      model: 'Lexmark M5365 black and white printer',
      modelNumber: '7464-096',
      image: '5365.webp',
      PagesPerMinute: '65',
      paperSize: '8 x 12',
      timeOut: '4.2',
      type: 'BlackWhite',
      description:
        'Lexmarks flagship multifunction printer, the best black and white desktop in the industry. This machine comes witha  full copier-grade print engine and a powerful processor scaled to fit onto your desk. The highest performance desktop at 65 pages per minute, jam free.',
    },
    {
      model: 'Lexmark M7355 black and white printer',
      modelNumber: '7465-496',
      image: '7355.webp',
      PagesPerMinute: '52',
      paperSize: '8.3 x 11.7 in',
      timeOut: '4.2',
      type: 'BlackWhite',
      description:
        'The XM 7355 is the best, most popular black and white copier-printer in the world. It has won awards for its ease of use, its simple-to-use full-featured software, and it never jams!',
    },
    {
      model: 'Lexmark M7370 black and white printer',
      modelNumber: '7465-896',
      image: '7370.webp',
      PagesPerMinute: '70',
      paperSize: '8.3 x 11.7 in',
      timeOut: '4.5',
      type: 'BlackWhite',
      description:
        'Take the best black and white floor-standing copier in the world and increase its speed to 70 pages per minute. Just 10 years ago, you would never need a copier that would fit the length of your office wall to produce that speed. Lexmark ingenuity achieves those speeds in a small footprint and an extremely low price.',
    },
    {
      model: 'Lexmark XM9145 black and white printer',
      modelNumber: '7421-039',
      image: 'xm9145.webp',
      PagesPerMinute: '65',
      paperSize: '11 x 17 in',
      timeOut: '5.6',
      type: 'BlackWhite',
      description:
        'Lexmarks 11x17 capable black and white lineup. Built for high volumes and longevity, these machines will get any task done. Enjoy a hassle-free, jam-free operation and ease of use thanks to Lexmarks award winning copiers!',
    },
  ])
  const router = useRouter()

  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message,
      number,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    })
  }
 
  return (
    <div className={styles.main}>
      <Sliver />
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.copiersutah.com/BlackWhite/" />
        <title>
        Top Copiers for Sale | Konica Minolta, Epson, and Lexmark | Copiers
          Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah offers a range of high-quality copiers for sale, including Konica Minolta, Epson, and Lexmark models. Explore our selection and find the perfect copier for your office."
        />
        <meta
          name="keywords"
          content="copiers for sale, office copiers, Konica Minolta copiers, Epson copiers, Lexmark copiers, copiers Utah"
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
            src="/static/logo.webp	"
            alt="Our copiers utah logo"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div></div>
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <div className={styles.section}>
        <div className={styles.center}>
          <h1 className={styles.title}>Our Top Black and White Copiers</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.grid}>
          {copiers.map((copier) => {
            return (
              <div key={copier.modelNumber} className={styles.box}>
                <div className={styles.titleBlackSmall}>{copier.model}</div>
                <div>
                  <Image
                    src={`/static/${copier.image}`}
                    width={200}
                    alt={'copiers utah'}
                    height={200}
                  ></Image>
                </div>
                <div className={styles.somethingContainer}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Link href={'/product'}>
                      <button
                        onClick={() => {

                          localStorage.setItem('Image', `${copier.image}`)
                          localStorage.setItem('Model', `${copier.model}`)
                          localStorage.setItem(
                            'PagesPerMinute',
                            `${copier.PagesPerMinute}`,
                          )
                          localStorage.setItem('paperSize', `${copier.paperSize}`)
                          localStorage.setItem('modelNumber', `${copier.modelNumber}`)
                          localStorage.setItem('brand', `${copier.brand}`)
                          localStorage.setItem('timeOut', `${copier.timeOut}`)
                          localStorage.setItem('type', `${copier.type}`)
                          localStorage.setItem(
                            'description',
                            `${copier.description}`,
                          )
                        }}
                        className={styles.button}
                      >
                        See Details
                    </button>
                    </Link>
                  </div>
                  <div className={styles.fifty}>
                    <div className={styles.rowNumber}>
                      <div className={styles.numberContainer}>
                        Model Number:
                      </div>
                      <div>{copier.modelNumber}</div>
                    </div>
                    <div className={styles.rowNumber}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlackWhite
