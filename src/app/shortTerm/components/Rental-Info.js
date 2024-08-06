"use client"
import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/shortTerm.module.css";
import Link from "next/link";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";;

const RentalInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const tawkMessengerRef = useRef();
    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    useEffect(() => {
        if (
            message.length > 1 &&
            number.length > 1 &&
            name.length > 1 &&
            email.length > 1 &&
            recaptchaResponse !== false
        ) {
            setToggle(true);
        }
    }, [message, number, name, email, recaptchaResponse]);



    const onLoad = () => {
        console.log("onLoad works!");
    };

    async function sendEmail() {
        debugger;
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                from: "Rent A Copier",
                name: name,
                message: message,
                number: number,
                email: email,
            }),
        };
        try {
            const response = await fetch("/api/pay/quote", requestOptions);

            const data1 = await response.json();
            console.log(data1, "this is the response");
        } catch (err) { }
    }


    return (
        <div className={styles.section}>
            <div className={styles.copiersTitle}>
                Copiers Utah{" "}
                <div className={styles.copiersTitleBlue}>Rental Services</div>
            </div>
            <h3 className={styles.titleSmall}>
                We Rent Copiers For All Types Of Events!
            </h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "fit-content",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className={styles.row}>
                    <div className={styles.Realcolumn}>
                        <div>
                            <div className={styles.box}>
                                <div>
                                    <Image
                                        src="/static/contructionIcon.webp"
                                        alt="construction icon"
                                        width={50}
                                        height={60}
                                    />
                                </div>
                                <div style={{ paddingRight: "15px" }}>
                                    Construction Trailers
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div>
                                <Image
                                    src="/static/building.webp"
                                    alt="icon of a building"
                                    width={50}
                                    height={60}
                                />
                            </div>
                            <div style={{ paddingRight: "15px" }}>Temporary Offices</div>
                        </div>
                        <div className={styles.box}>
                            <div>
                                <Image
                                    src="/static/snow.webp"
                                    alt="snow icon"
                                    width={50}
                                    height={60}
                                />
                            </div>
                            <div>Seasonal Work</div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div>
                            <Image
                                src="/static/rental.webp"
                                alt="rental icon"
                                width={50}
                                height={60}
                            />
                        </div>
                        <div>Short Term Business Projects</div>
                    </div>
                </div>
                <div className={styles.paragraph}>
                    At our company, we understand the diverse needs of different events
                    and projects, which is why we offer copier rental services for a
                    wide range of occasions. Whether it's a construction trailer where
                    blueprints need to be printed and shared, or a temporary office
                    where important documents need to be copied and scanned, we've got
                    you covered. Our reliable copiers ensure that construction projects
                    can run smoothly with efficient documentation and communication. We
                    provide the necessary printing resources for professionals working
                    in temporary offices, ensuring they have access to high-quality
                    printing, copying, and scanning capabilities during their short-term
                    assignments.
                </div>
                <div
                    style={{ paddingBottom: "20px" }}
                    className={`${styles.paragraph} ${styles.hidden}`}
                >
                    Moreover, our copier rentals are ideal for seasonal work
                    arrangements, where businesses experience increased demands during
                    peak periods. We understand the importance of keeping up with the
                    workload and offer reliable printing solutions to support your
                    seasonal workforce. Additionally, our copiers are perfectly suited
                    for short-term business projects, enabling efficient data
                    processing, documentation, and collaboration. We pride ourselves on
                    delivering top-quality copiers that meet the unique printing needs
                    of our clients, ensuring that you have the necessary tools to get
                    the job done right, no matter the event or project.
                </div>
            </div>
        </div>
    );
};

export default RentalInfo;


