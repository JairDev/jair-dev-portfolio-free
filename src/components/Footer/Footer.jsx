import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FormContact from "components/FormContact/FormContact";

import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  return (
    <section
      id="contact"
      className={`${styles.wrapperPadding} ${styles.contact}`}
    >
      <div className={styles.wrapperMaxWidth}>
        <FormContact />
      </div>
    </section>
  );
}

export default Footer;
