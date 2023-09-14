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
                <div className={styles.appLeftContentDescription}>
                  <h1 className={styles.descriptionHeader}>Hola</h1>
                  <p className={styles.description}>
                    Soy Alfredo Moscoso, un desarrollador web con pasión por la
                    tecnología. Desde el diseño hasta el desarrollo he estado
                    perfeccionando mis habilidades, construyendo sitios web
                    personalizados que ayudan a las empresas a alcanzar sus
                    objetivos en línea
                  </p>
                  <p className={styles.description}>
                    Con un enfoque en la experiencia del usuario, me especializo
                    en la creación de sitios web dinámicos y receptivos, desde
                    animaciones hasta interacciones para crear experiencias de
                    usuario cautivadoras.
                  </p>
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
