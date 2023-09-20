"use client"
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumbs from "../components/BreadCrumbs";
import Image from 'next/image'
import Footer from '../components/Footer'
import Sliver from '../components/sliverr'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { Metadata } from 'next'
import styles from '../styles/Stuff.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Desktop = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const [copiers, setCopiers] = useState([
    {
      model: 'Lexmark C6160 Desktop Printer',
      modelNumber: '21K0300',
      PagesPerMinute: '57',
      image: 'xc6152.webp',
      paperSize: '21.12 x 22 x 20.6 in.',
      brand: 'lexmark',
      type: 'Desktop',
      timeOut: '7',
      description:
        'The C6160 is Lexmarks highest performing desktop color printer. When you want high-speed, high-quality output in a printer that can handle everything you can throw at it. This is your printer. ',
    },
    {
      model: 'Lexmark C4342 Desktop Multifunction Printer',
      modelNumber: '47C9343',
      image: 'C4342.webp',
      PagesPerMinute: '42',
      paperSize: '8.5 x 14',
      ScanSpeed: '80',
      timeOut: '6.4 ',
      type: 'Desktop',
      description: "The C4342 is a medium-high volume printer. It offers top-level performance with a true business-class print engine."
    },
    {
      model: 'Lexmark C4150 Desktop Printer',
      modelNumber: '5028-6A9',
      image: 'C4150.webp',
      PagesPerMinute: '50',
      paperSize: '7.3 x 10.5',
      ScanSpeed: '50',
      timeOut: '6.5 ',
      type: 'Desktop',
      description: "The C4150 is proven color printer offered as a rebuild model. It is capable of handling moderate to high volumes with an incredibly reliable no-hassle performance."
    },
    {
      model: 'Lexmark XC4140 Desktop Multifunction Printer',
      modelNumber: '40C9708',
      image: 'xc4140.webp',
      PagesPerMinute: '40',
      paperSize: '8 x 11',
      ScanSpeed: '60',
      timeOut: '6.5 ',
      type: 'Desktop',
    },
    {
      model: 'Lexmark M5255 Desktop Printer',
      modelNumber: '4064-295',
      image: 'm5255.webp',
      PagesPerMinute: '50',
      paperSize: '8.3 x 11.7',
      timeOut: '4.5 ',
      type: 'Desktop',
    },
    {
      model: 'Lexmark M3250 Desktop Multifunction Printer',
      modelNumber: '4600-895',
      image: 'm3250.webp',
      PagesPerMinute: '50',
      paperSize: '8.3 x 11.7',
      timeOut: '6 ',
      type: 'Desktop',
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
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: `Products Sold`, url: `/products` },
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
      <div className={styles.section}>
        <div className={styles.center}>
          <h1 className={styles.title}>Our Top Desktop Copiers</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.grid}>
          {copiers.map((copier) => {
            return (
              <div key={copier.modelNumber} className={styles.box}>
                <div>
                  <Image
                    src={`/static/${copier.image}`}
                    width={150}
                    height={150}
                    alt={"copiers utah"}
                  ></Image>
                </div>
                <div className={styles.somethingContainer}>
                  <div className={styles.titleBlackSmall}>{copier.model}</div>
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
                        localStorage.setItem('modelNumber', `${copier.modelNumber}`)
                        localStorage.setItem('Model', `${copier.model}`)
                        localStorage.setItem(
                          'PagesPerMinute',
                          `${copier.PagesPerMinute}`,
                        )
                        localStorage.setItem(
                          'paperSize',
                          `${copier.paperSize}`,
                        )
                        localStorage.setItem(
                          'timeOut',
                          `${copier.timeOut}`,
                        )
                        localStorage.setItem('type', `${copier.type}`)
                      }}
                      className={styles.buttonBlue}
                    >
                      See Details
                    </button>
                  </Link>
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

export default Desktop
