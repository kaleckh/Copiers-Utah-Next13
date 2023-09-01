"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { CartContext } from "../../providers/cart";
import { Client } from "square";
import Sliver from "../components/sliverr";
import styles from "../styles/fileChoice.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TonerContext } from "@/providers/toner";

const TonerChoice = (props) => {
  const searchParams = useSearchParams();
  const oem = searchParams.get("oem");
  const toners = useContext(TonerContext);
  const toner = toners.find((toner) => toner.oem === oem);

  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const { cart, setCart, cartLook } = useContext(CartContext);
  const [aboveOne, setAboveOne] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [address_line_1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cartAccess, setCartAccess] = useState(true);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const [newPrice, setNewPrice] = useState();
  const tawkMessengerRef = useRef();

  useEffect(() => {
    cart.map((item) => {
      if (item.oem === toner.oem) {
        setCartAccess(false);
      }
    });
  }, [toner.oem, cart]);

  useEffect(() => {
    if (quantity > 1) {
      setAboveOne(true);
      setNewPrice(toner.price * quantity);
    } else {
      setAboveOne(false);
    }
  }, [quantity, toner.price]);

  useEffect(() => { });
  const sendSuccessEmail = (e) => {
    e.preventDefault();
    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "api-A4D77AA0362911EEA716F23C91C88F4E",
        to: [`<info@copiersutah.com>`],
        sender: "<info@copiersutah.com>",
        subject: `This is${name}'s quote form. Her number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "0107239",
        template_data: {
          ID: orderId,
          number: number,
          toner: tonerName,
          name: name,
          email: email,
        },
      }), //
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    });
  };

  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };

  const { paymentsApi } = new Client({
    accessToken:
      "EAAAEOBAWpWqMYtQnL6yMPRZZkl3ne8zZGGDli2HBC8pAivmZaGNoyOOtM-Uo7Ci",
    environment: "sandbox",
  });
  async function getOrderData() {
    const response = await fetch(`/api/pay`);
    const data = await response.json();
    setNumber(
      data.data.order.fulfillments[0].shipment_details.recipient.phone_number
    );
    setEmail(
      data.data.order.fulfillments[0].shipment_details.recipient.email_address
    );
    setOrderId(data.data.order.id);
    setName(
      data.data.order.fulfillments[0].shipment_details.recipient.display_name
    );
    setData(data.data.order.fulfillments[0].shipment_details.recipient.address);
  }
  async function setOrderData() {
    setAddress1(data.address_line_1);
    setCity(data.locality);
    setState(data.administrative_district_level_1);
    setZip(data.postal_code);
  }
  // useEffect(() => {
  //     debugger
  //     if (orderId !== "") {
  //         getOrderData()
  //     }
  // }, [orderId]);

  async function createLink() {
    const response = await fetch("/api/pay", { method: "POST" });
    const data = await response.json();
    setOrderId(data.orderId);
  }

  // async function success() {
  //     const response = await fetch("/api/pay/distribution", { method: "POST" })
  //     const data = await response.json();

  // }

  async function createDistribution() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        city: city,
        state: state,
        zip: zip,
        addy: address_line_1,
        price: price,
        quantity: quantity,
        oem: oem,
        name: name,
        id: orderId,
      }),
    };

    const response = await fetch("/api/pay/distribution", requestOptions);
    const data1 = await response.json();

  }

  // function successCallback() {
  //     const url = 'https://uat.portal.suppliesnet.net/PurchaseOrders/PurchaseOrder.asmx'
  //     const data = "something"
  //     axios.get(url, data)
  //         .then(response => {
  //             console.log('Data fetched successfully:', response.data);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching data:', error.message);
  //         });
  // }


  return (
    <div className={styles.main}>
      <Sliver />

      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.center}>
          <div className={styles.column}>
            <div className={styles.titleLarge}>{toner.name}</div>
            <div className={styles.titleSmall}> OEM #: {toner.oem}</div>
            <Image src={toner.image} width={300} height={250} />
          </div>
          <div className={styles.centerFeature}>
            <div className={styles.aContainer}>
              <div className={styles.titleLargeBlack}>Features</div>
              <div className={styles.something}>
                <div className={styles.titleSmall}>
                  Model: <div className={styles.small}>{oem}</div>{" "}
                </div>
                <div className={styles.titleSmall}>
                  Yield: <div className={styles.small}>{toner.yield}</div>{" "}
                </div>
                <div className={styles.titleSmall}>
                  Quantity:{" "}
                  <input
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                    className={styles.number}
                    placeholder={quantity}
                    type="number"
                  />
                </div>
                <div className={styles.titleSmall}>
                  Retail Price:{" "}
                  <div className={styles.small}>
                    ${aboveOne ? newPrice : toner.price}
                  </div>
                </div>
                <div className={styles.titleSmall}>
                  Condition: <div className={styles.small}>New</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <button
                className={styles.button3}
                onClick={(e) => {
                  getOrderData().then(() => {

                    setOrderData().then(() => {
                      sendSuccessEmail(e);
                      createDistribution();
                    });
                  });
                  setOrderData();
                }}
              >
                Buy Now!
              </button>
              <Link href={"/cart"}>
                <button className={styles.button3}>
                  {cartAccess ? (
                    <div
                      onClick={() => {
                        const updatedCart = [
                          ...cart,
                          {
                            name: toner.name,
                            oem: toner.oem,
                            price: toner.price,
                            quantity: quantity,
                            image: toner.image,
                          },
                        ];
                        setCart(updatedCart);
                        // JSON.stringify(localStorage.setItem("cart", updatedCart))

                      }}
                    >
                      Add To Cart
                    </div>
                  ) : (
                      <div>Already Added</div>
                    )}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <div style={{ paddingBottom: "50px" }} className={styles.row}>
            <div className={styles.lineSmall}></div>
            <div className={styles.big}>Specs and Details</div>
            <div className={styles.lineSmall}></div>
          </div>
          <div style={{ width: "30%" }}>
            <div className={styles.row}>
              <div className={styles.titleSmallSpecNB}>Part #</div>
              <div className={styles.titleSmallSpec}>{oem}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.row}>
              <div className={styles.titleSmallSpecNB}>Page Yield:</div>
              <div className={styles.titleSmallSpec}>{toner.yield}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.row}>
              <div className={styles.titleSmallSpecNB}>Color:</div>
              <div className={styles.titleSmallSpec}>{toner.color}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.row}>
              <div className={styles.titleSmallSpecNB}>Shipping Weight:</div>
              <div className={styles.titleSmallSpec}>12345</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.row}>
              <div className={styles.titleSmallSpecNB}>Price:</div>
              <div className={styles.titleSmallSpec}>${toner.price}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TonerChoice;
