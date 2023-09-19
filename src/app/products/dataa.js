"use client"
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Section from "../components/Section";
import Head from 'next/head'
import Sliver from '../components/sliverr'
import Link from "next/link";
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import styles from '../styles/product.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Products = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
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

      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://copiersutah.com/Products/" />
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


      <Header />
      <div className={styles.mainContainer}>
        <div style={{ padding: "25px" }} className={styles.flex}>
          <div className={styles.color}>Our Top</div>
          <div className={styles.blue}>Products</div>
        </div>
        <div className={styles.copierRow}>
          <div

            className={styles.copierContainer}
          >
            <h2 className={styles.title}>Lexmark</h2>
            <div className={styles.imageContainerSmall}>
              <Link href={'/lexmark'}>
                <Image alt={"A Lexmark Copier For Sale"} src={'/static/Lexmark.webp'} fill={true} />
              </Link>
            </div>
            <button className={styles.buttonBlue}>See Details</button>
          </div>
          <div
            style={{ padding: "12px" }}
            className={styles.copierContainer}

          >
            <h2 style={{ padding: "5px" }} className={styles.title}>Konica Minolta</h2>
            <div className={styles.imageContainer}>
              <Link href={'/konika'}>
                <Image alt={"A Konika Copier for Lease"} src={'/static/Konika.webp'} fill={true} />
              </Link>
            </div>
            <button className={styles.buttonBlue}>See Details</button>
          </div>
          <div
            className={styles.copierContainer}

          >
            <h2 className={styles.title}>Epson</h2>
            <div className={styles.imageContainer}>
              <Link href={'/epson'}>
                <Image alt={"A Epson Copiers for Lease  "} src={'/static/epsonL.webp'} fill={true} />
              </Link>
            </div>
            <button style={{ margin: "30px" }} className={styles.buttonBlue}>See Details</button>
          </div>
        </div>
        <div className={`${styles.fifty} ${styles.pic}`}>
          <div className={styles.overlay}>
            <div style={{ width: "90%" }}>
              <div className={styles.titleWhite}>Why these <div className={styles.wordBox}>brands</div><div />
                <div className={styles.paragraph}>We take pride in offering only the most reliable copiers in the market, which is why we exclusively sell Konica Minolta, Lexmark, and Epson copiers. These brands have established themselves as industry leaders, renowned for their exceptional performance, durability, and advanced features. Konica Minolta copiers provide cutting-edge technology and unmatched print quality, ensuring that your documents are reproduced with precision. Lexmark copiers are known for their robust build, high-speed functionality, and extensive paper handling capabilities, making them a reliable choice for demanding office environments. Epson copiers offer outstanding color accuracy, energy efficiency, and user-friendly interfaces, making them an excellent option for businesses seeking top-notch printing solutions. Rest assured, with our selection of Konica Minolta, Lexmark, and Epson copiers, you'll have access to the most reliable and efficient printing equipment available.</div>
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

export default Products
