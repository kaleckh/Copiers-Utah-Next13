"use client"
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Section from "../app/components/Section";
import Header from "./components/Header";
import Link from "next/link";
import styles from "./styles/homepage.module.css";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
export default function Data() {

  const [name, setName] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [email, setEmail] = useState("");
  const [toggle, setToggle] = useState(true);
  const [number, setNumber] = useState("");
  const [images, setImages] = useState({
    imageOne: true, imageTwo: false, imageThree: false, imageFour: false
  })
  const [message, setMessage] = useState("this is the test message");
  const tawkMessengerRef = useRef();
  const captchaRef = useRef(null);
  const onLoad = () => {
    console.log("onLoad works!");
  };
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const router = useRouter();
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending");

    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "api-DC44EBDEE45411ED847EF23C91C88F4E",
        to: [`<info@copiersutah.com>`],
        sender: "<info@copiersutah.com>",
        subject: `This is${name}'s quote form. Their number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "5120871",
        template_data: {
          message: message,
          number: number,
          name: name,
        },
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setImages({
        imageOne: images.imageFour,
        imageTwo: images.imageOne,
        imageThree: images.imageTwo,
        imageFour: images.imageThree,
      });
    }, 8000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [images.imageOne, images.imageTwo, images.imageThree, images.imageFour]);
  console.log(images, "images")

  return (
    <div className={styles.main}>
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
      <Header />
      <div className={styles.secondSection}>
        <div className={styles.flexSomething}>
          <div className={styles.flex}>
            <div className={styles.mainContainer}>
              <div className={styles.buttonCenter}>
                <div className={styles.bubble}>
                  Copiers Utah Welcomes You
                </div>
              </div>
              <h1>
                <div className={styles.homepageTitle}>
                  Buy or Lease a Copier
                </div>
              </h1>
              <div className={styles.paragraphSmall}>
                We provide a variety of high-quality copiers for your business needs. Whether you buy or lease, our cutting-edge solutions will boost your office efficiency to new heights.
              </div>
              <div className={styles.buttonCenter}>
                <Link href={'/buy'}>
                  <button className={styles.buttonBlue}>Get A Quote Now</button>
                </Link>
              </div>
            </div>

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

                < Image
                  style={{ borderRadius: "8px" }}
                  src="/static/manWomanNobg.webp"
                  alt="people looking at copier leasing terms"
                  width={500}
                  height={500}
                />
              </div>
              <div className={images.imageFour ? styles.showing : styles.hidden}>

                < Image
                  style={{ borderRadius: "8px" }}
                  src="/static/man.webp"
                  alt="copier copier maintenance man"
                  width={500}
                  height={500}
                />
              </div>
              <div className={images.imageThree ? styles.showing : styles.hidden}>

                < Image
                  style={{ borderRadius: "8px" }}
                  src="/static/copierGirl.webp"
                  alt="woman using a copier machine"
                  width={500}
                  height={500}
                />
              </div>




            </div>
          </div>
        </div>
        <div className={styles.needSpace}>
          <div className={styles.titleBig}>Other
            <div className={styles.blue}>Services</div>
          </div>
          <div className={styles.row}>
            <div className={styles.boxContainer}>

              <div className={styles.box}>
                <div className={styles.iconContainer}>
                  <Image
                    src="/static/repairs.webp"
                    alt="copier repair Icon"
                    fill={true}
                  />
                </div>
                <div className={styles.centerStuff}>
                  <div className={styles.serviceTitle} >Copier Repair</div>
                  <div className={styles.serviceParagraph}>Experiencing copier issues? We've got you covered! Our expert technitians are your go-to team for fast and reliable copier repairs. No matter the brand or model, we specialize in fixing copiers efficiently, ensuring minimal downtime for your business.</div>
                </div>
                <Link href={'/fix'}>
                  <button className={styles.button}>See Details!</button>
                </Link>
              </div>


              <div className={styles.box}>
                <div>
                  <div style={{ width: "70px" }} className={styles.iconContainer}>
                    <Image
                      src="/static/it.webp"
                      alt="It services Icon"
                      fill={true}
                    />
                  </div>
                </div>
                <div className={styles.centerStuff}>
                  <div className={styles.serviceTitle} >IT Services</div>
                  <div className={styles.serviceParagraph}>
                    Level up your business tech game effortlessly by diving into our expert IT services. We're all about quick solutions and crystal-clear communication, making the whole process smooth as silk for you. Let's upgrade your tech with a touch of ease and expertise.</div>
                </div>
                <Link href={'/it'}>
                  <button className={styles.button}>See Details!</button>
                </Link>
              </div>

            </div>
            <div>

              <div className={styles.box}>
                <div className={styles.iconContainer}>
                  <Image
                    src="/static/rental.webp"
                    alt="copier rental Icon"
                    fill={true}
                  />
                </div>
                <div className={styles.centerStuff}>
                  <div className={styles.serviceTitle} >Short Term Rentals</div>
                  <div className={styles.serviceParagraph}>
                    Upgrade your event vibes with our short-term copier rentals – perfect for conventions and those temporary document crunch times. Our top-notch copiers handle the heavy printing load with ease, ensuring your materials are on point. Count on us for laid-back, efficient, and pro-level copier rental services.</div>
                </div>
                <Link href={'/shortTerm'}>
                  <button className={styles.button}>See Details!</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
        <div id="quote" className={styles.section}>
          <div className={styles.thirdSectionRow}>
            <div className={styles.side}>
              <div className={styles.tonerTitle}>Toner Cartridges For Sale</div>
              <div className={styles.buttonContainer}>
                <Link href={'/toner'}>
                  <button className={styles.button}>Browse Toner</button>
                </Link>
              </div>
            </div>
            <div className={`${styles.background} ${styles.displayNoneSmall}`}>
              <Image
                src="/static/yellowLexmark.webp"
                alt="yellow lexmark toner"
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className={styles.fourthSection}>
          <div>
            <div className={styles.titleBig}>Our
              <div className={styles.blue}>Products</div>
            </div>
          </div>
          <div className={styles.copierRow}>

            <Link href={'/lexmark'}>
              <div

                className={styles.copierContainer}
              >
                <h2 className={styles.title}>Lexmark</h2>
                <div className={styles.imageContainerSmall}>
                  <Image alt={"lexmark copier for sale"} src={'/static/Lexmark.webp'} fill={true} />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
            <Link href={'/konika'}>
              <div

                className={styles.copierContainer}

              >
                <h2 className={styles.title}>Konica Minolta</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src="/static/Konika.webp"
                    alt="konika minolta copier"
                    width={190}
                    height={175}
                  />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
            <Link href={'/epson'}>
              <div
                className={styles.copierContainer}

              >
                <h2 className={styles.title}>Epson</h2>
                <div className={styles.imageContainer}>
                  <Image
                    src="/static/epsonL.webp"
                    alt="Epson copier"
                    width={175}
                    height={160}
                  />
                </div>
                <button className={styles.buttonBlue}>See Details</button>
              </div>
            </Link>
          </div>

        </div>
        <div className={`${styles.sectionMedium} ${styles.hideBox} `}>
          <div className={styles.image1}>
            <div className={styles.titleSmallWhite}>What We Do</div>
            <div className={styles.paragraphNormal}>Copiers Utah offers new copiers sales, leases and rentals. Plus, we run Utah's leading copier rebuild center for top-notch refurbished copiers. Our skilled technicians can repair nearly any copier brand. For cutting-edge IT services, check out our sister company, Alien IT Services. Your one stop solution for quality and expertise. </div>
          </div>
          <div className={styles.image2}>
            <div className={styles.titleSmallWhite}>Our Promise</div>
            <div className={styles.paragraphNormal}>We uphold the highest standards of integrity in our products and services. Our copier rebuild service agreements encompass all toner, parts and on-site repairs, and a first year replacement gurantee. When you choose us, rest assured your copier will operate seamlessly in your office, providing you with complete peace of mind.</div>
          </div>
        </div>
        <div style={{ paddingTop: "80px" }} className={styles.section}>
          <div style={{ width: "55%" }} className={styles.imageContainerParagraph}>
            <Image
              src="/static/buy.webp"
              alt="cartoon image of woman using copier"
              width={400}
              height={400}
            />
            <Link href={'/buy'}>
              <button style={{ marginBottom: "70px" }} className={styles.buttonBlue}>Learn More</button>
            </Link>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.paragraphTitle}>Copiers And Printers</div>
            <div className={styles.paragraphMedium}>Welcome to Copiers Utah, your ultimate destination for comprehensive copier solutions in the heart of Utah. Whether you're looking for copiers for sale, leasing options, or convenient short-term copier rentals, we've got you covered. Our shelves boast a diverse selection of top-notch copiers from renowned brands such as Lexmark, Konica Minolta, and Epson, ensuring you'll find the perfect fit for your specific business requirements.</div>
            <div className={styles.paragraphMedium}>Encountering issues with your copier? No need to worry. Our dedicated team of skilled technicians is committed to maintaining your machines in peak condition through expert repair and maintenance services. We understand the challenges of running a business, and we're here to ensure your copiers keep up with the fast-paced demands.</div>
            <div className={styles.paragraphMedium}>At Copiers Utah, we don't just provide products; we deliver a promise of quality and reliability. Our mission is to offer not only top-tier copiers but also unparalleled service, with all copier rentals and sales. Whether you're seeking a long-term copier solution or a quick fix, count on us for our extensive expertise and unwavering dedication to meeting your copier needs.</div>
          </div>
        </div>
        <div style={{ flexDirection: "row-reverse", width: "100vw", backgroundColor: "rgb(224 224 224)", padding: "50px" }} className={styles.section}>
          <div style={{ width: "55%", paddingTop: "30px" }} className={styles.imageContainerParagraph}>
            <Image
              src="/static/itWork.png"
              alt="cartoon image of man using computer"
              width={400}
              height={400}
            />
            <Link href={'https://www.alienitservices.com/'} target="_blank">
              <button style={{ marginBottom: "70px" }} className={styles.buttonBlue}>Learn More</button>
            </Link>

          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.paragraphTitle}>Managed It Services And Support</div>
            <div className={styles.paragraphMedium}>Welcome to Alien IT Services, your trusted provider of easy IT support and managed IT services in Utah. From comprehensive network security to proactive approaches in ransomware protection and secure setup, we offer a range of expert IT services tailored to streamline your digital solutions. Our reliable support team is dedicated to ensuring efficient data management and secure collaboration for Utah businesses. With a strong focus on cloud computing and backup and restore solutions, Alien IT Services is your go-to partner for all things IT.</div>
            <div className={styles.paragraphMedium}>At Alien IT Services, we believe in taking a proactive approach to IT solutions. Our comprehensive range of services includes technical support, printer support, and software and app support for businesses in Utah. We specialize in ensuring network efficiency and secure data management, offering reliable support and fix for broken hardware when you need it most. With a strong focus on delivering expert IT services and reliable support, Alien IT Services is committed to providing top-notch digital solutions for businesses in the Utah area.  </div>
            <div className={styles.paragraphMedium}>In the fast-paced world of technology, having a reliable IT support system is crucial for Utah businesses. Alien IT Services offers a wide range of IT solutions, including managed IT services and network security, tailored to meet the specific needs of local businesses. Our skilled team specializes in delivering secure collaboration and efficient data management, ensuring seamless operations and secure setup. With a strong emphasis on delivering expert IT services and reliable support, Alien IT Services is committed to providing tailored digital solutions for businesses in the heart of Utah.</div>
          </div>
        </div>
        <div className={styles.reviewSection}>
          <div className={styles.customerTitle} >Trusted by Hundreds of <div className={styles.blueSmall}>Happy customers</div></div>
          <div className={styles.rowSpaced}>
            <div className={styles.boxReview}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Tara Bennets</div>
                <div className={styles.flexCenter}>
                  <div>5.0</div>
                  <Image
                    src="/static/star.webp"
                    alt="star icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className={styles.paragraphReview}>These guys do not disappoint! I have done business with them for a few years now. They have great customer service and amazing pricing on copy machines!</div>
            </div>
            <div className={`${styles.boxReview} ${styles.hideBox}`}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Kyle Francis</div>
                <div className={styles.flexCenter}>
                  <div>5.0</div>
                  <Image
                    src="/static/star.webp"
                    alt="star icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className={styles.paragraphReview}>Great company to work with. They have friendly staff and were able to get me up and running in a few days with an awesome refurbished copier!
              </div>
            </div>
            <div className={styles.boxReview}>
              <div className={styles.starRow}>
                <div className={styles.titleSmall}>Carley Ward</div>
                <div className={styles.flexCenter}>
                  <div>5.0</div>
                  <Image
                    src="/static/star.webp"
                    alt="star icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className={styles.paragraphReview}>This company is the best to do work with. They are very friendly and very helpful. I will be recommending them to everyone. I will never go anywhere else!</div>
            </div>
          </div>
          <div>
            <Link href={'https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9091041,17z/data=!4m8!3m7!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!16s%2Fg%2F1hc90lr04?entry=ttu'} target={'_blank'}>
              <button className={styles.buttonBlue}>See All Google Reviews</button>
            </Link>
          </div>
        </div>
      </div >
      <Section />
      <Footer />
    </div >
  );
}
