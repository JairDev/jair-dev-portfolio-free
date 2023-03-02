import React, { useRef, useEffect, useState } from "react";

import gsap from "gsap";

import FormContact from "components/FormContact/FormContact";

import styles from "./Footer.module.css";

function Footer() {
  const refPath = useRef(null);
  const refSvg = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const pathTo = refPath.current.dataset.pathTo;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-path-footer]",
            start: "top 95%",
            end: "bottom -50%",
            scrub: true,
            // markers: true,
          },
        })
        .to("[data-path-footer]", {
          attr: {
            d: pathTo,
          },
          ease: "sine.out",
          duration: 0.5,
        });
    }
  }, [isMounted]);

  return (
    <section
      id="contact"
      className={`${styles.wrapperPadding} ${styles.contact}`}
    >
      <div className={styles.wrapperMaxWidth}>
        <FormContact />
      </div>
      <div className={styles.contentSvgIDoWork}>
        <svg
          ref={refSvg}
          className={styles.imageClip}
          viewBox="2 -1 530 252"
          preserveAspectRatio="none"
          x="0"
          y="0"
        >
          <path
            data-path-footer="data-path-footer"
            ref={refPath}
            className={styles.pathAni}
            d="M 272 -1 L 532 -1 C 289 -1 262 -1 2 -1 Z"
            data-path-to="M 272 -1 L 532 -1 C 283 68 264 68 2 -1 Z"
            vectorEffect="non-scaling-stroke"
            fill="#3f51b5"
          />
        </svg>
      </div>
    </section>
  );
}

export default Footer;
