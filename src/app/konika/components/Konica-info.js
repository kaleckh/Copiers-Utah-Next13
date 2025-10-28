"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from "next/link";
import styles from '../../../styles/konika.module.css'
import ReCAPTCHA from 'react-google-recaptcha'

const KonicaInfo = () => {
  return (
    <div style={{
      height: "fit-content",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
    >
        <div className={`${styles.row}`}>
          <div className={styles.copierContainer}>
            <div className={styles.center}>
              <Image
                src="/static/Konika.webp"
                width={300}
                height={400}
                alt={"a seen"}
              />
            </div>
          </div>


          <div className={styles.column}>
            <div className={styles.lineColumn}>
              <h1 className={styles.color}>Konica Minolta</h1>
            </div>
            <div>
              <div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}   
                    <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Konica Minolta copiers have multifunction capabilities,
                    allowing them to print, scan, copy, and fax documents.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Customizable workflows are available to improve
                    productivity with Konica Minolta copiers.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>
                    {" "}
                    <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Konica Minolta is committed to sustainability and offers
                    eco-friendly features.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>   
                    {" "}
                    <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Advanced security features are included to protect
                    sensitive data on Konica Minolta copiers.
                    </div>
                </div>
                <div className={styles.bulletContainer}>
                  <div>   
                    {" "}
                    <Image
                    src="/static/seen.webp"
                    width={25}
                    height={25}
                    alt={"a seen"}
                  /></div>
                  <div className={styles.paragraphSmall}>
                    Konica Minolta copiers produce high-quality color or
                    black-and-white documents.
                    </div>
                </div>
                  <div className={styles.buttonCenter}>
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
                Konica Minolta copiers are renowned for their exceptional
                reliability, making them a trusted choice for businesses of all
                sizes. With a long-standing reputation in the industry, Konica
                Minolta has consistently delivered copiers that are built to last.
                Their machines are designed with durability in mind, ensuring they
                can handle high volumes of printing and copying without
                compromising on performance.
            </div>
            <div className={`${styles.paragraph} ${styles.hidden}`}>
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
                <Image
                  src={'/static/desktop.webp'}
                  height={100}
                  alt={'Konika Minolta Desktop copiers'}
                  width={100}
                />
                <div className={styles.titleMid}>
                  Business Class Desktop Printers
                </div>

                <Link href={"/desktop"}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
              <div

                className={styles.box}
              >
                <Image
                  src={'/static/colorCopier.webp'}
                  height={100}
                  width={100}
                  alt={'Konika Minolta Color Copiers'}
                />
                <div className={styles.titleMid}>
                  Color Multifunction Copiers
                </div>
                <Link href={"/multicolor"}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
              <div className={styles.box}>
                <Image
                  src={'/static/blackAndWhite.webp'}
                  height={100}
                  width={100}
                  alt={'Black and White Konika Minolta Copiers'}
                />
                <div className={styles.titleMid}>Black And White Copiers</div>
                <Link href={'/black-white'}>
                  <button className={styles.button}>See Options</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default KonicaInfo