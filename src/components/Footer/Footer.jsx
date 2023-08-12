import React, { useRef, useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FormContact from "components/FormContact/FormContact";

import styles from "./Footer.module.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const spanRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMounted) {
      gsap.from(spanRef.current, {
        // background: "red",
        y: -210,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          // end: "bottom 10%",
          scrub: true,
          // markers: true,
        },
      });
    }
  }, [isMounted]);
  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles.wrapperPadding} ${styles.contact}`}
    >
      {/* <span ref={spanRef} className={styles.finishContactSquare}></span> */}
      <div className={styles.wrapperMaxWidth}>
        <FormContact />
      </div>
    </section>
  );
}

export default Footer;
