import styles from "../styles/formm.module.css";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";

import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Form = (props) => {
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [valid_token, setValidToken] = useState([]);
  const [token, setToken] = useState();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const captchaRef = useRef(null);

  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    setToken(token);
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (valid_token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form");
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot");
      }
    }
  };
  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`http://localhost:8000/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(Secret_Key, "this is key");
  return (
    <div className={styles.container}>
      <div className={styles.black}>Get Your Quote!</div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "80%",
          alignItems: "center",
        }}
      >
        <div className={styles.space}>
          <div className={styles.number}>1</div>
          <input
            className={styles.inputSingle}
            placeholder="Name"
            type="text"
            name=""
            id=""
            required={true}
            onChange={() => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className={styles.space}>
          <div className={styles.number}>2</div>
          <input
            className={styles.inputSingle}
            type="tel"
            name="telphone"
            placeholder="Phone Number"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            maxLength="12"
            title="Ten digits code"
            onChange={() => {
              setNumber(event.target.value);
            }}
            required
          />
        </div>

        <div className={styles.space}>
          <div className={styles.number}>3</div>
          <input
            onChange={() => {
              setMessage(event.target.value);
            }}
            className={styles.inputSingle}
            placeholder="Comments"
            type="text"
          />
        </div>
      </div>
      <div
        style={{ height: "25%", display: "flex" }}
        className={styles.padding}
      >
            
        <ReCAPTCHA
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
          className="recaptcha"
          sitekey={SITE_KEY}
          ref={captchaRef}
          onChange={setToken}
        />
      </div>
      <button
        onClick={() => {
          props.quote();
          handleClick();
        }}
        className={styles.button}
      >
        Get My Quote
      </button>
    </div>
  );
};

export default Form;
