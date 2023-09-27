import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Section() {
    const router = useRouter();
    return (
        <div className={styles.section}>
            <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>

                <div style={{ height: "100px", alignItems: "center", justifyContent: "center" }} className={styles.flex}>
                    <h3>
                        <div className={styles.titleWhy}>Why choose</div>
                        <div className={styles.titleWhyBlue}>Copiers Utah</div>
                    </h3>
                </div>
                <div style={{ height: "200px", justifyContent: "space-between" }} className={styles.flex}>
                    <div className={styles.space}>

                        <div className={styles.row}>
                            <Image
                                src="/static/seen.webp"
                                alt="buy a used or new business copier"
                                width={35}
                                height={25}
                                style={{ paddingRight: "10px" }}
                            />
                            <div>New And Used Copiers Available</div>
                        </div>
                        <div className={styles.row}>
                            <Image
                                src="/static/seen.webp"
                                alt="buy a used or new business copier"
                                width={35}
                                style={{ paddingRight: "10px" }}
                                height={25}
                            />
                            <div>Top Brands And Models To Fit Any Budget And Business Need</div>
                        </div>
                        <div className={styles.row}>
                            <Image
                                src="/static/seen.webp"
                                alt="buy a used or new business copier"
                                width={35}
                                style={{ paddingRight: "10px" }}
                                height={25}
                            />
                            <div>Thoroughly Tested And Serviced Used Copiers </div>
                        </div>
                    </div>
                    <div className={styles.space}>
                        <div className={styles.row}>
                            <Image
                                src="/static/seen.webp"
                                alt="buy a used or new business copier"
                                width={35}
                                height={25}
                                style={{ paddingRight: "10px" }}
                            />
                            <div>Wide Range Of New And Used Copiers For Sale In Utah</div>
                        </div>
                        <div className={styles.row}>
                            <Image
                                src="/static/seen.webp"
                                alt="buy a used or new business copier"
                                width={35}
                                height={25}
                                style={{ paddingRight: "10px" }}
                            />
                            <div>New And Used Copiers Available</div>
                        </div>
                        <div className={styles.row}>
                            <Image
                                src="/static/seen.webp"
                                alt="buy a used or new business copier"
                                width={35}
                                height={25}
                                style={{ paddingRight: "10px" }}
                            />
                            <div>Top Brands And Models To Fit Any Budget And Business Need</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
