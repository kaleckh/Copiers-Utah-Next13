import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/homepage.module.css";
import It from "../../public/static/it.webp";
import Rental from "../../public/static/rental.webp";

const Services = () => {
  const [images, setImages] = useState({
    imageOne: true,
    imageTwo: false,
    imageThree: false,
    imageFour: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => ({
        imageOne: prevImages.imageFour,
        imageTwo: prevImages.imageOne,
        imageThree: prevImages.imageTwo,
        imageFour: prevImages.imageThree,
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.needSpace}>
      <div className={styles.titleBig}>
        Other
        <div className={styles.blue}>Services</div>
      </div>
      <div className={styles.row}>
        <div className={styles.boxContainerTwo}>
          <div className={styles.box}>
            <div className={styles.iconContainer}>
              <Image
                src="/static/repairs.webp"
                alt="copier repair Icon"
                fill={true}
              />
            </div>
            <div className={styles.centerStuff}>
              <div className={styles.serviceTitle}>Copier Repair</div>
              <div className={styles.serviceParagraph}>
                Experiencing copier issues? We've got you covered! Our expert
                technitians are your go-to team for fast and reliable copier
                repairs. No matter the brand or model, we specialize in fixing
                copiers efficiently, ensuring minimal downtime for your
                business.
              </div>
            </div>
            <Link href={"/fix"}>
              <button className={styles.button}>See Details!</button>
            </Link>
          </div>

          <div className={`${styles.box} `}>
            <div>
              <div style={{ width: "70px" }} className={styles.iconContainer}>
                <Image src={It} alt="It services Icon" fill={true} />
              </div>
            </div>
            <div className={styles.centerStuff}>
              <div className={styles.serviceTitle}>IT Services</div>
              <div className={styles.serviceParagraph}>
                Level up your business tech game effortlessly by diving into our
                expert IT services. We're all about quick solutions and
                crystal-clear communication, making the whole process smooth as
                silk for you. Let's upgrade your tech with a touch of ease and
                expertise.
              </div>
            </div>
            <Link href={"/it"}>
              <button className={styles.button}>See Details!</button>
            </Link>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <div className={styles.iconContainer}>
              <Image src={Rental} alt="copier rental Icon" fill={true} />
            </div>
            <div className={styles.centerStuff}>
              <div className={styles.serviceTitle}>Short Term Rentals</div>
              <div className={styles.serviceParagraph}>
                Upgrade your event vibes with our short-term copier rentals –
                perfect for conventions and those temporary document crunch
                times. Our top-notch copiers handle the heavy printing load with
                ease, ensuring your materials are on point. Count on us for
                laid-back, efficient, and pro-level copier rental services.
              </div>
            </div>
            <Link href={"/short-term"}>
              <button className={styles.button}>See Details!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
