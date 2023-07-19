import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react'
import Image from 'next/image';
//   import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import Axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from '../styles/buyy.module.css'

const Sliver = () => {
  return (
    <div className={styles.sliver}>
      <div style={{ paddingRight: "40px" }}>
        <a href="https://www.facebook.com/copiersforlessutah/">
          <Image src={'/static/facebook.webp'} width={20} height={20} />
        </a>
        <a href="https://www.linkedin.com/in/copiers-utah-5b2b85148/">
          <Image src={'/static/linkedin.webp'} width={20} height={20} />
        </a>
        <a href="https://twitter.com/CopiersUtahReal">
          <Image src={'/static/twitter.webp'} width={20} height={20} />
        </a>
        <a href="https://www.facebook.com/copiersforlessutah/">
          <Image src={'/static/facebook.webp'} width={20} height={20} />
        </a>
        <a href="https://www.youtube.com/channel/UCnn6gVWPfQc5_q-CozIZAxA">
          <Image src={'/static/youtube.webp'} width={20} height={20} />
        </a>
      </div>
      <div>
        Dont Know Where To Start?{' '}
        <a style={{ paddingLeft: '15px', color: "white" }} href="tel:8012610510">
          Call Us At (801)-261 0510
          </a>
      </div>
    </div>
  )
}
export default Sliver
