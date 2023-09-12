import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactLenis } from "@studio-freight/react-lenis";

import aboutPhoto from "assets/preview-editv4.png";

import Layout from "pages/Layout/Layout";

import styles from "./AboutMe.module.css";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const refContentPhoto = React.useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      const gsapContext = gsap.to(refContentPhoto.current, {
        scrollTrigger: {
          trigger: refContentPhoto.current,
          start: "50% 75%",
          end: "bottom -=200",
          scrub: true,
          // markers: true,
        },
        rotate: 0,
      });
      return () => gsapContext.revert();
    }
  }, []);

  const options = {
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={{ ...options }}>
      <Layout>
        <Helmet>
          <title>Sobre mí</title>
        </Helmet>
        <div className="App">
          <section
            id="about-me"
            className={`${styles.wrapperPadding} ${styles.appContentAboutMe}`}
          >
            <div className={styles.wrapperMaxWidth}>
              <div className={styles.wrapperContentHero}>
                <div className={styles.appLeftContentHero}>
                  <div className={styles.appLeftContentHeroRole}>
                    <h1 className={styles.descriptionHeader}>Hola</h1>
                    <p className={styles.description}>
                      Soy Alfredo Moscoso, desarrollador web con experiencia en
                      la creación de sitios web personalizados para ofrecer
                      soluciones que satisfagan tus necesidades únicas. Desde el
                      diseño hasta el desarrollo puedo ayudarte a alcanzar tus
                      objetivos en línea.
                    </p>
                  </div>
                </div>
                <div className={styles.appRightContentHero}>
                  <div
                    ref={refContentPhoto}
                    className={styles.contentAboutPhoto}
                  >
                    <img src={aboutPhoto} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </ReactLenis>
  );
}

export default AboutMe;
