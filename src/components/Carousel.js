import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/homepage.module.css";

const ImageCarousel = () => {
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
    <div className={styles.displayNone}>
      <div className={images.imageOne ? styles.showing : styles.hidden}>
        <Image
          style={{ borderRadius: "8px" }}
          src="/static/womanNobg.webp"
          alt="woman using a copier rental"
          width={500}
          height={500}
        />
      </div>
      <div className={images.imageTwo ? styles.showing : styles.hidden}>
        <Image
          style={{ borderRadius: "8px" }}
          src="/static/manWomanNobg.webp"
          alt="people looking at copier leasing terms"
          width={500}
          height={500}
        />
      </div>
      <div className={images.imageFour ? styles.showing : styles.hidden}>
        <Image
          style={{ borderRadius: "8px" }}
          src="/static/man.webp"
          alt="copier copier maintenance man"
          width={500}
          height={500}
        />
      </div>
      <div className={images.imageThree ? styles.showing : styles.hidden}>
        <Image
          style={{ borderRadius: "8px" }}
          src="/static/copierGirl.webp"
          alt="woman using a copier machine"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
