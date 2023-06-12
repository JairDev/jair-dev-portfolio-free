import React, { useRef, useEffect, useState } from "react";

import gsap from "gsap";

import FormContact from "components/FormContact/FormContact";

import styles from "./Footer.module.css";

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
